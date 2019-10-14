getApp();

var t = require("../../../utils/requestUtil"), a = require("../../../utils/data");

Page({
    data: {
        this_tel_data: null,
        page: 1,
        pagenum: 10,
        hasMore: !0,
        tel_config: [],
        is_no: !1
    },
    onLoad: function(t) {
        this.get_index_data();
    },
    get_index_data: function() {
        var e = this;
        t.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiDoc/getMyEnter", {
            type: e.data.this_type_id,
            pagesize: e.data.page,
            pagenum: e.data.pagenum
        }, function(t) {
            e.setData({
                tel_config: t.config
            }), t.list ? e.onSetData(t.list, e.data.page) : e.setData({
                is_no: !0
            });
        }, this, {
            isShowLoading: !0
        });
    },
    onPullDownRefresh: function() {
        var t = this;
        this.setData({
            page: 1,
            this_tel_data: null,
            hasMore: !0
        }), t.get_index_data(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onReachBottom: function() {
        this.data.hasMore ? (this.setData({
            page: this.data.page + 1
        }), this.get_index_data()) : wx.stopPullDownRefresh();
    },
    onSetData: function(t, a) {
        t = t || [], this.setData({
            hasMore: void 0 !== a && t.length >= this.data.pagenum,
            page: void 0 !== a ? a : this.data.page,
            this_tel_data: 1 === a || void 0 === a ? t : this.data.this_tel_data.concat(t),
            is_no: !1
        });
    },
    delete_data_bind: function(e) {
        var n = e.currentTarget.id, i = this;
        t.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiDoc/delDataEnter", {
            t_id: n
        }, function(t) {
            i.onPullDownRefresh();
        }, this, {
            isShowLoading: !0
        });
    },
    toPay: function(e) {
        var n = e.currentTarget.id, i = this, o = {};
        o.doc_id = n, t.post(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiRuzhu/payDoc.html", o, function(t) {
            i.setData({
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
                    wx.showModal({
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
        }, i, {
            isShowLoading: !0
        });
    },
    toModify: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../enter/enter?id=" + a
        });
    },
    onCallTap: function(t) {
        var a = t.currentTarget.dataset.phone;
        a && wx.makePhoneCall({
            phoneNumber: a
        });
    },
    toRuzhu: function() {
        wx.navigateTo({
            url: "../enter/enter"
        });
    }
});