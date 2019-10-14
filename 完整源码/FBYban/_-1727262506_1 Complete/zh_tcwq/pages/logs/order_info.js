var a = getApp();

Page({
    data: {},
    onLoad: function(e) {
        var t = this, o = wx.getStorageSync("url"), i = wx.getStorageSync("System");
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemyorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                order_express: e.wuliu,
                do: "select_express"
            },
            success: function(a) {
                console.log(a.data.message), t.setData({
                    wuliu_message: a.data.data,
                    wuliu_state: a.data.state
                });
            }
        }), t.setData({
            id: e.id,
            store_id: e.store_id,
            url: o,
            wuliu: e.wuliu,
            system: i
        }), t.refresh();
    },
    refresh: function(e) {
        var t = this, o = t.data.id, i = t.data.store_id;
        console.log(i), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoreinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: i
            },
            success: function(a) {
                console.log(a);
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageorderinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                order_id: o
            },
            success: function(e) {
                console.log(e), e.data.time = a.ormatDate(e.data.time).slice(0, 16);
                var o = e.data.good_money * e.data.good_num;
                t.setData({
                    order: e.data,
                    shop_price: o.toFixed(2)
                });
            }
        });
    },
    toorder: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetuorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                order_id: t
            },
            success: function(a) {
                console.log(a), wx.showToast({
                    title: "发起退款申请",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(a) {},
                    fail: function(a) {},
                    complete: function(a) {}
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 2e3);
            }
        });
    },
    delorder: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagedelorder&acid=" + getApp().globalData.version + "&order_id=1",
            cachetime: "0",
            data: {
                order_id: t
            },
            success: function(a) {
                console.log(a), wx.showToast({
                    title: "订单删除成功",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(a) {},
                    fail: function(a) {},
                    complete: function(a) {}
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 2e3);
            }
        });
    },
    pay: function(e) {
        var t = wx.getStorageSync("openid"), o = e.currentTarget.dataset.id, i = e.currentTarget.dataset.money;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                openid: t,
                money: i
            },
            success: function(e) {
                console.log(e), wx.requestPayment({
                    timeStamp: e.data.timeStamp,
                    nonceStr: e.data.nonceStr,
                    package: e.data.package,
                    signType: e.data.signType,
                    paySign: e.data.paySign,
                    success: function(e) {
                        console.log("这里是支付成功"), console.log(e), a.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagepayorder&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                order_id: o
                            },
                            success: function(a) {
                                console.log("改变订单状态"), console.log(a), wx.showToast({
                                    title: "付款成功",
                                    icon: "",
                                    image: "",
                                    duration: 2e3,
                                    mask: !0,
                                    success: function(a) {},
                                    fail: function(a) {},
                                    complete: function(a) {}
                                }), setTimeout(function() {
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }, 2e3);
                            }
                        });
                    },
                    fail: function(a) {
                        wx.showToast({
                            title: "支付失败",
                            duration: 1e3
                        });
                    }
                });
            }
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