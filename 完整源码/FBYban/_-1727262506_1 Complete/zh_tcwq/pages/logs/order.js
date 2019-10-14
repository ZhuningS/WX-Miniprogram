var e = getApp();

Page({
    data: {
        luntext: [ "全部", "待付款", "待发货", "待收货", "已完成", "退货/售后" ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 35
    },
    onLoad: function(e) {
        var t = this, a = wx.getStorageSync("url");
        null == e.activeIndex ? t.setData({
            activeIndex: 0,
            url: a
        }) : t.setData({
            activeIndex: e.activeIndex,
            url: a
        }), t.refresh();
    },
    refresh: function(t) {
        var a = this, r = (function() {
            var e = new Date(), t = e.getMonth() + 1, a = e.getDate();
            return t >= 1 && t <= 9 && (t = "0" + t), a >= 0 && a <= 9 && (a = "0" + a), e.getFullYear() + "-" + t + "-" + a + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
        }().slice(0, 10), a.data.activeIndex), o = wx.getStorageSync("users").id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemyorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: o
            },
            success: function(e) {
                var t = e.data, o = (wx.getStorageSync("users").id, []), s = [], n = [], c = [], i = [];
                for (var d in t) 1 == t[d].state && o.push(t[d]), 2 == t[d].state && s.push(t[d]), 
                3 == t[d].state && n.push(t[d]), 4 == t[d].state && c.push(t[d]), 5 != t[d].state && 6 != t[d].state && 7 != t[d].state || i.push(t[d]);
                0 == r ? (console.log(r), a.setData({
                    orders: a.data.orders
                })) : 1 == r ? a.setData({
                    orders: o
                }) : 2 == r ? a.setData({
                    orders: s
                }) : 3 == r ? (console.log(n), a.setData({
                    orders: n
                })) : 4 == r ? a.setData({
                    orders: c
                }) : 5 == r && a.setData({
                    orders: i
                }), a.setData({
                    order: e.data
                }), 0 == r && a.setData({
                    orders: e.data
                });
            }
        });
    },
    tabClick: function(e) {
        console.log(this.data.order);
        var t = this.data.order, a = this, r = e.currentTarget.id, o = (wx.getStorageSync("users").id, 
        []), s = [], n = [], c = [], i = [];
        for (var d in t) 1 == t[d].state && o.push(t[d]), 2 == t[d].state && s.push(t[d]), 
        3 == t[d].state && n.push(t[d]), 4 == t[d].state && c.push(t[d]), 5 != t[d].state && 6 != t[d].state && 7 != t[d].state || i.push(t[d]);
        0 == r ? a.setData({
            orders: a.data.order
        }) : 1 == r ? a.setData({
            orders: o
        }) : 2 == r ? a.setData({
            orders: s
        }) : 3 == r ? a.setData({
            orders: n
        }) : 4 == r ? a.setData({
            orders: c
        }) : 5 == r && a.setData({
            orders: i
        }), a.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    complete: function(t) {
        var a = this;
        console.log(t);
        var r = t.currentTarget.dataset.id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagecompleteorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                order_id: r
            },
            success: function(e) {
                console.log(e), a.refresh();
            }
        });
    },
    toorder: function(t) {
        var a = this;
        console.log(t);
        var r = t.currentTarget.dataset.id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetuorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                order_id: r
            },
            success: function(e) {
                console.log(e), a.refresh();
            }
        });
    },
    delorder: function(t) {
        var a = this;
        console.log(t);
        var r = t.currentTarget.dataset.id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagedelorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                order_id: r
            },
            success: function(e) {
                console.log(e), wx.showModal({
                    title: "提示",
                    content: "是否删除订单，删除后不可恢复",
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确定",
                    success: function(e) {
                        e.confirm && a.refresh();
                    },
                    fail: function(e) {},
                    complete: function(e) {}
                });
            }
        });
    },
    pay: function(t) {
        var a = this, r = wx.getStorageSync("openid"), o = t.currentTarget.dataset.id, s = t.currentTarget.dataset.money;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                openid: r,
                money: s,
                order_id: o
            },
            success: function(t) {
                console.log(t), wx.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(t) {
                        console.log("这里是支付成功"), console.log(t), e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagepayorder&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                order_id: o
                            },
                            success: function(e) {
                                console.log("改变订单状态"), console.log(e), a.refresh();
                            }
                        });
                    },
                    fail: function(e) {
                        wx.showToast({
                            title: "支付失败",
                            duration: 1e3
                        });
                    }
                });
            }
        });
    },
    order_info: function(e) {
        var t = e.currentTarget.dataset.id, a = e.currentTarget.dataset.store_id, r = e.currentTarget.dataset.index, o = this.data.orders[r].order_express;
        wx.navigateTo({
            url: "order_info?id=" + t + "&store_id=" + a + "&wuliu=" + o,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
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