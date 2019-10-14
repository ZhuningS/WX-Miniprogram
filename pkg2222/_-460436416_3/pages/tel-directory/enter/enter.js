getApp();

var t = require("../../../utils/requestUtil"), a = require("../../../utils/data");

Page({
    data: {
        durIndex: 0,
        catIndex: 0,
        coorIndex: 0,
        durationArr: [],
        categoryArr: {},
        multiArray: [ [], [] ],
        multiIndex: [ -1, 0 ],
        coordinateArr: [],
        this_cate_one_id: 0,
        this_cate_two_id: 0,
        this_t_img: null,
        this_t_lng: 0,
        this_t_lat: 0,
        this_t_address: "",
        this_tel_config: null,
        this_check_str: "提交审核",
        img_count_limit: 6,
        this_img_i: 0,
        this_img_max: 0,
        postimg: [],
        this_t_logo: null,
        add_postimg: [],
        add_img_all: [],
        is_edit_cate: 0,
        updata: []
    },
    onLoad: function(i) {
        var e = this;
        i.id && (this.setData({
            id: i.id
        }), t.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiRuzhu/getThisData", {
            id: i.id
        }, function(t) {
            if ("" == t.two_cate || null == t.two_cate) a = ""; else var a = t.two_cate;
            e.setData({
                t_name: t.t_name,
                t_contact_name: t.t_contact_name,
                t_contact_phone: t.t_contact_phone,
                t_contact_weixin: t.t_contact_weixin,
                this_t_address: t.t_address,
                t_info: t.t_info,
                this_cate_one_id: t.t_one_cate_id,
                this_cate_two_id: t.t_two_cate_id,
                one_cate: t.one_cate,
                two_cate: a,
                this_t_img: t.t_logo.split(),
                this_t_logo: t.t_logo,
                add_postimg: t.pics,
                add_img_all: t.pics,
                is_add_logo: 0,
                is_add_imgs: 0,
                updata: t.update_data
            });
        }, this, {}));
        var o = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        }, d = this;
        t.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiRuzhu/getConfigData", {
            categorys: 1
        }, function(t) {
            for (var a = t.tel_cate, i = [], e = [], n = "提交审核", s = 0; s < a.length; s++) if (i.push(a[s].title), 
            void 0 != a[s].child && 0 == s) for (var _ = 0; _ < a[s].child.length; _++) e.push(a[s].child[_].title);
            o.multiArray[0] = i, o.multiArray[1] = e, d.setData(o), n = 1 == t.config.settled_check ? "提交审核" : "提交入驻", 
            d.setData({
                categoryArr: t.tel_cate,
                durationArr: t.config.settled_rule,
                this_tel_config: t.config,
                this_check_str: n
            });
        }, this, {});
    },
    selectDuration: function(t) {
        this.setData({
            durIndex: t.detail.value
        });
    },
    bindMultiPickerChange: function(t) {
        this.setData({
            is_edit_cate: 1
        });
        var a = t.detail.value, i = parseInt(a[0]) ? parseInt(a[0]) : 0, e = parseInt(a[1]) ? parseInt(a[1]) : 0, o = this.data.categoryArr, d = 0, n = 0;
        d = o[i].id, void 0 != o[i].child && (n = o[i].child[e].id), this.setData({
            multiIndex: t.detail.value,
            this_cate_one_id: d,
            this_cate_two_id: n
        });
    },
    bindMultiPickerColumnChange: function(t) {
        var a = t.detail.column, i = t.detail.value, e = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        };
        e.multiIndex[a] = i;
        var o = [];
        if (0 != a) return !1;
        var d = this.data.categoryArr;
        if (void 0 != d[i].child) for (var n = 0; n < d[i].child.length; n++) o.push(d[i].child[n].title);
        e.multiArray[1] = o, e.multiIndex[1] = 0, this.setData(e);
    },
    selectCoordinate: function(t) {
        this.setData({
            coorIndex: t.detail.value
        });
    },
    chooseimg_bind: function() {
        var t = this;
        t.setData({
            is_add_logo: 1
        }), wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                t.setData({
                    this_t_img: a.tempFilePaths,
                    this_t_logo: a.tempFilePaths
                });
            }
        });
    },
    choose_t_map: function(t) {
        var a = this;
        wx.chooseLocation({
            success: function(t) {
                a.setData({
                    this_t_lat: t.latitude,
                    this_t_lng: t.longitude,
                    this_t_address: t.address
                });
            },
            error: function(t) {
                a.showModalTips("请允许地理位置授权");
            }
        });
    },
    tel_formSubmit: function(i) {
        var e = this, o = e.data.is_add_logo;
        e.data.is_add_imgs;
        if (null == e.data.this_t_img || "" == e.data.this_t_img) return e.showModalTips("请上传商家图片"), 
        !1;
        if (0 == e.data.this_cate_one_id) return e.showModalTips("请选择分类"), !1;
        e.setData({
            submitIsLoading: !0,
            buttonIsDisabled: !0
        });
        var d = i.detail.value;
        i.detail.value.id && null != e.data.add_postimg && (d.pic_imgs = e.data.add_postimg), 
        d.one_cate_id = e.data.this_cate_one_id, d.two_cate_id = e.data.this_cate_two_id, 
        d.t_lng = e.data.this_t_lng, d.t_lat = e.data.this_t_lat, d.t_address = e.data.this_t_address, 
        d.formid = i.detail.formId, 0 == e.data.durationArr.length ? (d.pay_month_num = 0, 
        d.pay_month_money = 0) : (d.pay_month_num = e.data.durationArr ? e.data.durationArr[e.data.durIndex].year : 0, 
        d.pay_month_money = e.data.durationArr ? e.data.durationArr[e.data.durIndex].amount : 0), 
        d.is_newup = 1, t.post(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiRuzhu/addRuzhu.html", d, function(t) {
            1 == o ? e.imgUploadTime(t.doc_id) : e.submit_upload_pic(t.doc_id);
        }, e, {
            isShowLoading: !0,
            completeAfter: function() {
                e.setData({
                    submitIsLoading: !1,
                    buttonIsDisabled: !1
                });
            }
        });
    },
    payDoc: function(i) {
        var e = this, o = {};
        o.doc_id = i, t.post(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiRuzhu/payDoc.html", o, function(t) {
            e.setData({
                submitIsLoading: !1,
                buttonIsDisabled: !1
            }), wx.requestPayment({
                timeStamp: t.timeStamp,
                nonceStr: t.nonceStr,
                package: t.package,
                signType: "MD5",
                paySign: t.paySign,
                success: function(t) {
                    wx.showModal({
                        title: "提示",
                        content: "入驻成功",
                        showCancel: !1,
                        success: function(t) {
                            wx.switchTab({
                                url: "../index/index",
                                fail: function() {
                                    wx.redirectTo({
                                        url: "../index/index"
                                    });
                                }
                            });
                        }
                    });
                },
                fail: function(t) {
                    e.failPay(i), wx.showModal({
                        title: "提示",
                        content: "支付失败,提交已退回",
                        showCancel: !1,
                        success: function(t) {
                            wx.switchTab({
                                url: "../index/index",
                                fail: function() {
                                    wx.redirectTo({
                                        url: "../index/index"
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }, e, {
            isShowLoading: !0
        });
    },
    failPay: function(i) {
        t.post(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiRuzhu/failPayUpdate", {
            id: i
        }, function(t) {}, this, {});
    },
    imgUploadTime: function(i) {
        var e = this, o = {};
        o.doc_id = i, t.upload(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiRuzhu/imgUpload.html", e.data.this_t_img[0], "file", o, function(t) {
            e.setData({
                submitIsLoading: !0,
                buttonIsDisabled: !0
            }), e.submit_upload_pic(i);
        }, this, {});
    },
    showModalTips: function(t) {
        var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        wx.showModal({
            title: "提示",
            content: t,
            showCancel: a,
            success: function(t) {
                return !1;
            }
        });
    },
    onPullDownRefresh: function() {
        this.onLoad(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    del_pic_bind_all: function(t) {
        var a = this, i = t.currentTarget.id, e = a.data.postimg;
        e.splice(i, 1), a.setData({
            postimg: e
        });
    },
    del_pic_bind: function(t) {
        var a = this, i = t.currentTarget.id, e = a.data.add_postimg;
        e.splice(i, 1), a.setData({
            add_postimg: e,
            add_img_all: e
        });
    },
    chooseimg_bind_all: function() {
        var t = this;
        t.setData({
            is_add_imgs: 1
        });
        var a = t.data.postimg.length, i = t.data.img_count_limit - a;
        if (i <= 0) return wx.showModal({
            title: "提示",
            content: "对不起，最多可上传" + t.data.img_count_limit + "张图片",
            showCancel: !1
        }), !1;
        wx.chooseImage({
            count: i,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                t.setData({
                    postimg: t.data.postimg.concat(a.tempFilePaths)
                }), null == t.data.add_img_all ? t.setData({
                    add_img_all: t.data.postimg
                }) : t.setData({
                    add_img_all: t.data.add_img_all.concat(a.tempFilePaths)
                });
            }
        });
    },
    go_pay_doc_bind: function(t) {
        var a = this, i = a.data.updata;
        1 == a.data.this_tel_config.pay_check ? a.data.id ? 2 == i.t_ispay || 1 == i.t_ispay && 1 == i.is_out || 0 == i.t_ispay ? a.payDoc(t) : (a.setData({
            submitIsLoading: !1,
            buttonIsDisabled: !1
        }), wx.showModal({
            title: "提示",
            content: "提交成功",
            showCancel: !1,
            success: function(t) {
                wx.switchTab({
                    url: "../index/index",
                    fail: function() {
                        wx.redirectTo({
                            url: "../index/index"
                        });
                    }
                });
            }
        })) : a.payDoc(t) : (a.setData({
            submitIsLoading: !1,
            buttonIsDisabled: !1
        }), wx.showModal({
            title: "提示",
            content: "提交成功",
            showCancel: !1,
            success: function(t) {
                wx.switchTab({
                    url: "../index/index",
                    fail: function() {
                        wx.redirectTo({
                            url: "../index/index"
                        });
                    }
                });
            }
        }));
    },
    submit_upload_pic: function(t) {
        var a = this, i = a.data.postimg;
        i.length > 0 ? (a.setData({
            this_img_max: i.length
        }), a.imgUploadTime_all(t)) : a.go_pay_doc_bind(t);
    },
    imgUploadTime_all: function(i) {
        var e = this, o = e.data.this_img_i;
        if (o < e.data.this_img_max) {
            var d = {};
            d.doc_id = i, t.upload(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiRuzhu/imgUploadAll.html", e.data.postimg[o], "file", d, function(t) {
                e.setData({
                    this_img_i: e.data.this_img_i + 1
                }), e.imgUploadTime_all(i);
            });
        } else e.setData({
            postimg: [],
            this_img_i: 0,
            this_img_max: 0
        }), e.go_pay_doc_bind(i);
    },
    onShareAppMessage: function() {
        return {
            title: "填写表格，快速入驻",
            desc: "",
            path: "pages/tel-directory/enter/enter"
        };
    }
});