var e = getApp();

Page({
    data: {
        is_business: 0
    },
    onLoad: function(e) {
        var a = this, t = wx.getStorageSync("System"), o = e.id;
        a.setData({
            id: o,
            system: t
        }), a.refresh();
    },
    refresh: function(a) {
        var t = this, o = t.data.id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageorderinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                order_id: o
            },
            success: function(a) {
                console.log(a), a.data.time = e.ormatDate(a.data.time), console.log(a.data.address.length), 
                a.data.address.length > 22 && t.setData({
                    height: 40
                }), t.setData({
                    oreder_info: a.data,
                    is_business: a.data.is_business
                });
            }
        });
    },
    wlInput: function(e) {
        console.log(e.detail.value), this.setData({
            order_express: e.detail.value
        });
    },
    Deliver: function(a) {
        var t = this, o = t.data.id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagedeliveryorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                order_id: o,
                order_express: t.data.order_express
            },
            success: function(e) {
                console.log(e), wx.showToast({
                    title: "操作成功",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {
                        setTimeout(function() {
                            t.refresh();
                        }, 2e3);
                    },
                    fail: function(e) {},
                    complete: function(e) {}
                });
            }
        });
    },
    complete: function(a) {
        var t = this;
        console.log(a);
        var o = t.data.id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagedelorder2&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                order_id: o
            },
            success: function(e) {
                console.log(e), wx.showToast({
                    title: "操作成功",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {
                        setTimeout(function() {
                            t.refresh();
                        }, 2e3);
                    },
                    fail: function(e) {},
                    complete: function(e) {}
                });
            }
        });
    },
    showWuliu: function() {
        var a = this;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemyorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                order_express: a.data.oreder_info.order_express,
                do: "select_express"
            },
            success: function(e) {
                console.log(e.data.message);
                var t = e.data.state;
                a.setData({
                    wuliu_state: t
                }), "ok" == e.data.message ? a.setData({
                    wuliu_message: e.data.data,
                    showModal: !0
                }) : (a.setData({
                    showModal: !1
                }), wx.showToast({
                    title: "暂无物流信息",
                    icon: "none"
                }));
            }
        });
    },
    sjqrtk: function() {
        var a = this, t = a.data.id;
        wx.showModal({
            title: "提示",
            content: "平台确认后将直接退款",
            success: function(o) {
                o.confirm && (console.log(1), e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagerefundsyh&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        id: t
                    },
                    success: function(e) {
                        a.setData({
                            is_business: 1
                        }), wx.showToast({
                            title: "申请成功"
                        });
                    }
                }));
            }
        });
    },
    cancelSpec: function() {
        this.setData({
            showModal: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});