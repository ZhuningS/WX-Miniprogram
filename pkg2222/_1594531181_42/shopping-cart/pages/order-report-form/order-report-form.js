var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../models/addFeedback")), t = require("../../utils/api"), a = require("../../../core/network.js");

Page({
    data: {
        mode: 1,
        questions: [ {
            id: 1,
            desc: "售后服务态度差",
            selected: !1
        }, {
            id: 2,
            desc: "超过一周未发货",
            selected: !1
        }, {
            id: 3,
            desc: "商家未履行保修服务",
            selected: !1
        }, {
            id: 4,
            desc: "商家未履行退换货服务",
            selected: !1
        } ],
        simplyBtnCanSubmit: !1,
        complexBtnCanSubmit: !1,
        order: {},
        reportContent: "",
        reportContentLength: 0,
        reportContentMaxLength: 200,
        uploadedImgCount: 0,
        maxImgCount: 4,
        uploadedImages: [],
        showSuccessPage: !1,
        form: {
            appid: "",
            order_id: "",
            status: 0,
            data: {
                content: "卖家没有及时发货",
                imgs: []
            }
        },
        showImageViewer: !1,
        imageViewerIndex: 0
    },
    onLoad: function(e) {
        var t = e.orderInfo || "%7B%22order_id%22%3A%22AQCAEV0CsrCdC8EKEj7kHuVeVQIA%22%2C%22pay_finish_time%22%3A1517801491%2C%22desc%22%3A%22%E5%A4%9A%E5%8A%A0%E7%82%B9%E9%A6%99%E8%8F%9C%22%2C%22fee%22%3A2%2C%22refund_busi_id%22%3A%5B%5D%2C%22trans_id%22%3A%224200000090201802057341379222%22%2C%22status%22%3A3%2C%22ext_info%22%3A%7B%22bill_id%22%3A%221517801486_6_3844_povmm1_0%22%2C%22product_info%22%3A%7B%22item_list%22%3A%5B%7B%22item_code%22%3A%2200003563372839_00000010001214%22%2C%22sku_id%22%3A%2200003563372839_10000010001215%22%2C%22amount%22%3A1%2C%22total_fee%22%3A1%2C%22thumb_url%22%3A%22http%3A%2F%2Fwxapp.tc.qq.com%2F204%2F20304%2Fstodownload%3Ffilekey%3D30350201010421301f020200cc040253480410806fdb5c1c13c571cd9f2908a8037f07020301c2ff040d00000004627466730000000131%26hy%3DSH%26storeid%3D32303138303132363033323235393030303834333933643436346331323735306338373136343030303030306363%26bizid%3D1023%22%2C%22title%22%3A%22%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%86%B0%E7%AE%B1%E8%B4%B4%22%2C%22desc%22%3A%22%22%2C%22unit_price%22%3A1%2C%22stock_attr_info%22%3A%5B%5D%7D%5D%7D%2C%22express_info%22%3A%7B%22name%22%3A%22%E9%BB%84%E4%BD%B3%E7%94%9F%22%2C%22phone%22%3A%2213510284344%22%2C%22address%22%3A%22%E5%B9%BF%E4%B8%9C%E7%9C%81%E6%B7%B1%E5%9C%B3%E5%B8%82%E6%B7%B1%E5%8D%97%E5%A4%A7%E9%81%9310000%E5%8F%B7%E8%85%BE%E8%AE%AF%E5%A4%A7%E5%8E%A610%E6%A5%BC%22%2C%22price%22%3A1%7D%2C%22invoice_info%22%3A%7B%7D%2C%22remarks%22%3A%22%E5%A4%9A%E5%8A%A0%E7%82%B9%E9%A6%99%E8%8F%9C%22%2C%22prepay_id%22%3A%22wx20180205113127a27237ecdd0244164545%22%2C%22brand_info%22%3A%7B%22brand_name%22%3A%22WeStore%E7%B2%BE%E5%93%81%E5%BA%97%22%2C%22brand_icon%22%3A%22http%3A%2F%2Fwx.qlogo.cn%2Fmmhead%2FQ3auHgzwzM6iaepNMNpBVibv3Uvw3YDy1BCFh6qtqNPwZ5icV9MbtU8hg%22%2C%22wxappid%22%3A%22wx9ae6de3a260a8405%22%7D%7D%2C%22pid%22%3A%22%22%2C%22refund_order_id%22%3A%5B%5D%2C%22update_time%22%3A%220%22%2C%22scene%22%3A%22%22%2C%22totalQuantity%22%3A1%2C%22totalPrice%22%3A2%2C%22formated_pay_finish_time%22%3A%222018-02-05%2011%3A31%22%2C%22orderDate%22%3A%222018-02-05%22%7D";
        t = JSON.parse(decodeURIComponent(t));
        var a = this.data.form;
        a.appid = t.ext_info.brand_info.wxappid, a.order_id = t.order_id, this.setData({
            order: t,
            form: a
        }), console.log(this.data);
    },
    select: function(e) {
        var t = parseInt(e.currentTarget.dataset.index, 10), a = this.data.questions;
        a.forEach(function(e, a) {
            e.selected = a === t;
        }), this.setData({
            questions: a,
            simplyBtnCanSubmit: !0
        });
    },
    switchToComplex: function() {
        this.setData({
            mode: 2
        });
    },
    calcContentLength: function(e) {
        var t = e.detail.value;
        this.setData({
            reportContent: t,
            reportContentLength: t.length
        }), this.calcComplexBtnCanSubmit();
    },
    calcComplexBtnCanSubmit: function() {
        var e = !0;
        this.data.uploadedImages.forEach(function(t) {
            !1 === t.uploaded && (e = !1);
        }), 0 === this.data.reportContent.length && (e = !1), this.setData({
            complexBtnCanSubmit: e
        });
    },
    addImg: function() {
        var e = this;
        t.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            success: function(o) {
                var i = o.tempFilePaths[0], d = +new Date();
                e.data.uploadedImages.push({
                    tmpPath: i,
                    createTime: d
                }), e.setData({
                    uploadedImages: e.data.uploadedImages,
                    uploadedImgCount: e.data.uploadedImgCount + 1,
                    uploaded: !1,
                    image_url: "",
                    complexBtnCanSubmit: !1
                }), t.uploadFile({
                    url: "https://wxa.weixin.qq.com/brandmall/media/upload-image",
                    filePath: i,
                    name: new Date().getTime() + "" + 1e3 * Math.random().toFixed(3),
                    formData: {
                        session_key: a._ticket.session_key
                    },
                    success: function(t) {
                        if (200 === t.statusCode) {
                            var a = JSON.parse(t.data);
                            e.data.uploadedImages.forEach(function(t) {
                                if (t.createTime === d) {
                                    t.uploaded = !0, t.image_url = a.image_url;
                                    var o = e.data.form;
                                    o.data.imgs.push(a.image_url), e.setData({
                                        form: o
                                    });
                                }
                            }), e.setData({
                                uploadedImages: e.data.uploadedImages
                            }), console.log(e.data);
                        } else console.log("upload failed", t);
                    },
                    fail: function() {},
                    complete: function() {
                        e.calcComplexBtnCanSubmit();
                    }
                });
            },
            fail: function(e) {}
        });
    },
    deleteImg: function() {
        var e = this;
        t.showModal({
            title: "提示",
            content: "确定要删除吗？",
            success: function(t) {
                if (t.confirm) {
                    var a = e.data.imageViewerIndex, o = e.data.uploadedImages, i = e.data.form;
                    o.splice(a, 1), i.data.imgs.splice(a, 1);
                    var d = o.length;
                    e.setData({
                        uploadedImages: o,
                        form: i,
                        showImageViewer: !1,
                        uploadedImgCount: d
                    });
                }
            }
        });
    },
    submitForm: function() {
        var t = this;
        if (2 === t.data.mode) t.data.form.data.content = t.data.reportContent; else if (1 === t.data.mode) {
            for (var a = 0; a < t.data.questions.length; a++) t.data.questions[a].selected && (t.data.form.data.content = t.data.questions[a].desc);
            t.data.form.data.imgs = [];
        }
        t.setData({
            form: t.data.form
        }), (0, e.default)({
            data: t.data.form,
            success: function(e) {
                t.showReportSuccessPage();
            }
        });
    },
    showReportSuccessPage: function() {
        t.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#ffffff"
        }), t.setNavigationBarTitle({
            title: ""
        }), this.setData({
            showSuccessPage: !0
        });
    },
    goToOrderList: function() {
        t.navigateTo({
            url: "/shopping-cart/pages/index/index?tab=order"
        });
    },
    showImageViewer: function(e) {
        var t = parseInt(e.currentTarget.dataset.index, 10);
        this.setData({
            showImageViewer: !0,
            imageViewerIndex: t
        });
    },
    hideImageViewer: function() {
        this.setData({
            showImageViewer: !1
        });
    }
});