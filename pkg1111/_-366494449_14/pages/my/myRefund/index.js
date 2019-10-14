var o = getApp(), e = require("../../../utils/util.js"), a = require("../../../utils/ajax.js"), t = require("../../../utils/common.js"), s = require("../../../common/PageBase.js");

require("../../../utils/pagination.js");

Page(t.extendPage(s, {
    data: {
        winHei: 0,
        dataLoaded: !1,
        userInfo: {},
        isLogin: !1,
        array: [ "退运费", "收到商品破损", "商品错发、漏发", "商品需要维修", "发票问题", "收到商品与描述不符", "商品质量问题", "未按约定时间发货", "其他" ],
        orderId: "",
        remark: "",
        photosShow: [],
        photoUrl: "",
        index: "",
        isgroup: ""
    },
    onLoad: function(e) {
        var a = this;
        t.initApp({
            loginSuc: function() {
                var t = e.id, s = e.money, i = e.isgroup;
                a.setData({
                    orderId: t,
                    money: s,
                    isgroup: i,
                    isLogin: !!o.getUid(),
                    userInfo: o.getUInfo(),
                    dataLoaded: !0
                });
            }
        });
    },
    bindPickerChange: function(o) {
        this.setData({
            index: o.detail.value
        });
    },
    _delPhotos: function(o) {
        var e = this, a = e.data, t = a.photosShow, s = a.photoUrl, i = o.currentTarget.dataset.index, r = s.split(",");
        r.splice(i, 1);
        var n = r.join(",");
        t.splice(i, 1), e.setData({
            photosShow: t,
            photoUrl: n
        });
    },
    _uploadPic: function() {
        var o = this;
        this.data.photosShow.length > 8 ? e.showWarn("最多上传9张图片") : wx.chooseImage({
            count: 9 - this.data.photosShow.length,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album" ],
            success: function(a) {
                var t = a.tempFilePaths, s = o.data.photosShow.concat(t);
                o.setData({
                    photosShow: s
                }), wx.showLoading({
                    title: "图片上传中",
                    mask: !0
                }), e.uploadimg({
                    path: t
                }, function(e) {
                    var a, t = o.data.photoUrl || "";
                    if (a = e.length > 1 ? e.join(",") : e[0], "" != t) s = t + "," + a; else var s = a;
                    console.log("card_photos===", a), console.log("oldphotos===", t), console.log("newPhotos===", s), 
                    o.setData({
                        photoUrl: s
                    }), wx.hideLoading();
                });
            }
        });
    },
    _formSubmit: function(o) {
        var s, i = this, r = o.detail.formId, n = o.detail.value;
        JSON.stringify(n);
        console.log("newObj====", n);
        var d = n.remark2, u = "";
        if ("" != i.data.index) {
            var h = (u = i.data.array[i.data.index]) + "," + d, l = n.money;
            if (l > i.data.money) e.showWarn("退款金额不能大于订单金额"); else {
                var p = i.data.photoUrl, c = i.data.orderId;
                s = 1 == i.data.isgroup ? "/apis/home/order.groups/refund_post" : "/apis/home/order.common/refund_post", 
                a.P({
                    url: s,
                    data: {
                        oid: c,
                        remark: h,
                        photos: p,
                        refund_fee: l
                    },
                    success: function(o) {
                        0 == o.code ? wx.redirectTo({
                            url: "/pages/my/myRefundSuccess/index"
                        }) : e.showWarn(o.msg);
                    },
                    fail: function(o) {}
                }), t.submitForm(r);
            }
        } else e.showWarn("请选择退款原因");
    }
}));