var e = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var a = this;
        console.log(t);
        var o = wx.getStorageSync("url3");
        if (null == wx.getStorageSync("users").money) ;
        var n = wx.getStorageSync("url"), i = wx.getStorageSync("System");
        a.setData({
            url: n,
            url3: o,
            options: t,
            system: i
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoreinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: t.id
            },
            success: function(e) {
                1 == e.data.store[0].state && wx.showModal({
                    title: "提示",
                    content: "你的店铺修改资料审核中...",
                    success: function(e) {
                        e.confirm, wx.navigateBack({
                            delta: 1
                        });
                    }
                }), 3 == e.data.store[0].state && wx.showModal({
                    title: "提示",
                    content: "你的店铺修改资料被拒绝，请联系管理员",
                    success: {
                        wx: wx.navigateBack({
                            delta: 1
                        })
                    }
                }), console.log(e), new Date().getTime().toString().substr(0, 10) > e.data.store[0].dq_time && (wx.showModal({
                    title: "到期提示",
                    content: "您的店铺入驻时间到期，请续费！",
                    complete: function() {
                        a.setData({
                            iszd: !0
                        });
                    }
                }), a.setData({
                    is_dq: !0
                }));
                var t = e.data.store[0].logo.split(","), o = e.data.store[0].dq_time, n = a.formatDate(o);
                e.data.store[0].dq_time = n, a.setData({
                    seller: e.data.store[0],
                    logo: t
                }), a.refresh();
            }
        });
    },
    formatDate: function(e) {
        var t = new Date(1e3 * e);
        return t.getFullYear() + "-" + ((t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-") + (t.getDate() + " ") + (t.getHours() + ":") + (t.getMinutes() + ":") + t.getSeconds();
    },
    refresh: function(t) {
        var a = this;
        console.log(a.data.seller), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=doPageInMoney&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                acid: getApp().globalData.version
            },
            success: function(e) {
                console.log(e), a.setData({
                    renew: e.data
                });
            }
        });
        var o = function() {
            var e = new Date(), t = e.getMonth() + 1, a = e.getDate();
            return t >= 1 && t <= 9 && (t = "0" + t), a >= 0 && a <= 9 && (a = "0" + a), e.getFullYear() + "/" + t + "/" + a + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
        }().slice(0, 10), n = a.data.seller.id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorewallet&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                store_id: n
            },
            success: function(t) {
                console.log(t);
                var i = new Date();
                i.setTime(i.getTime() - 864e5);
                var s = i.getFullYear() + "/" + (i.getMonth() + 1) + "/" + i.getDate();
                if (0 != t.data.length) {
                    var c = t.data, l = 0, r = [], u = 0, d = 0, f = 0;
                    for (var g in c) console.log(c[g].money), l += Number(c[g].money), c[g].time = c[g].time.slice(0, 10).replace(/-/g, "/"), 
                    s == c[g].time && (d += Number(c[g].money)), o == c[g].time && (u += Number(c[g].money)), 
                    1 == c[g].type && (console.log("----------------------"), console.log(c[g].money), 
                    console.log("----------------------"), f += Number(c[g].money));
                    console.log(r), e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoretixian&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        data: {
                            store_id: n
                        },
                        success: function(e) {
                            var t = e.data, o = 0;
                            for (var n in t) o += Number(t[n].tx_cost);
                            a.setData({
                                tixian: o.toFixed(2)
                            }), a.setData({
                                profit: l.toFixed(2),
                                yes_profit: d.toFixed(2),
                                toady_profit: u.toFixed(2),
                                zsy_profit: f.toFixed(2)
                            });
                        }
                    });
                } else a.setData({
                    profit: 0,
                    yes_profit: 0,
                    toady_profit: 0
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoreorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                store_id: n
            },
            success: function(t) {
                console.log(t);
                var n = t.data, i = [];
                for (var s in n) n[s].time = e.ormatDate(n[s].time).slice(0, 10), n[s].time = n[s].time.replace(/-/g, "/"), 
                o == n[s].time && i.push(n[s]);
                a.setData({
                    order_num: i.length
                });
            }
        });
    },
    onReady: function() {},
    more: function(e) {
        console.log(e);
        var t = this.data.seller.id;
        wx.navigateTo({
            url: "../sellerinfo/sellerinfo?id=" + t,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    cash: function(e) {
        wx.navigateTo({
            url: "../logs/cash?&state=2&store_id=" + this.data.seller.id + "&profit=" + this.data.profit,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    activeIndex_one: function(e) {
        wx.navigateTo({
            url: "mine_order?activeIndex=1&store_id=" + this.data.seller.id,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    activeIndex_two: function(e) {
        wx.navigateTo({
            url: "mine_order?activeIndex=0&store_id=" + this.data.seller.id,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    activeIndex_three: function(e) {
        wx.navigateTo({
            url: "mine_order?activeIndex=3&store_id=" + this.data.seller.id,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    activeIndex_four: function(e) {
        wx.navigateTo({
            url: "mine_order?activeIndex=4&store_id=" + this.data.seller.id,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    fuck: function(e) {
        wx.navigateTo({
            url: "../logs/publish?store_id=" + this.data.seller.id,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    customer: function(e) {
        wx.navigateTo({
            url: "customer/customer?user_id=" + this.data.seller.id
        });
    },
    welfare: function(e) {
        wx.navigateTo({
            url: "welfare?user_id=" + this.data.seller.id,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    sent: function(e) {
        wx.navigateTo({
            url: "sent?user_id=" + this.data.seller.id,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    mechat: function(e) {
        wx.navigateTo({
            url: "../logs/index?user_id=" + this.data.seller.id,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    mine_shop: function(e) {
        wx.navigateTo({
            url: "commodity?store_id=" + this.data.seller.id,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    interests: function(e) {
        wx.showModal({
            title: "提示",
            content: "此功能暂未开放",
            showCancel: !0,
            cancelText: "取消",
            cancelColor: "",
            confirmText: "确定",
            confirmColor: "",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    vip: function(e) {
        wx.showModal({
            title: "提示",
            content: "此功能暂未开放",
            showCancel: !0,
            cancelText: "取消",
            cancelColor: "",
            confirmText: "确定",
            confirmColor: "",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    tuichu: function(e) {
        wx.removeStorage({
            key: "store_info",
            success: function(e) {
                wx.showToast({
                    title: "退出登陆"
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 2e3);
            }
        });
    },
    spec: function() {
        var e = this;
        wx.navigateTo({
            url: "good_spec_manage?storeid=" + e.data.seller.id,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    yemx: function(e) {
        wx.navigateTo({
            url: "wallet/wallet?store_id=" + this.data.seller.id
        });
    },
    dkxf: function(e) {
        this.setData({
            iszd: !0
        });
    },
    qxzd: function(e) {
        this.setData({
            iszd: !1
        }), 1 == this.data.seller.time_over && wx.navigateBack({
            delta: 1
        });
    },
    selected: function(t) {
        var a = this, o = t.currentTarget.id, n = wx.getStorageSync("openid"), i = wx.getStorageSync("users").id, s = a.data.renew, c = s[o].money, l = s[o].type, r = this.data.seller.id;
        c > 0 ? (a.setData({
            iszd: !1
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                openid: n,
                money: c
            },
            success: function(t) {
                console.log(t), wx.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(e) {
                        wx.showModal({
                            title: "提示",
                            content: "支付成功",
                            showCancel: !1
                        }), a.setData({
                            is_dq: !1,
                            iszd: !1
                        });
                    },
                    complete: function(t) {
                        console.log(t), "requestPayment:fail cancel" == t.errMsg && wx.showToast({
                            title: "取消支付",
                            icon: "loading",
                            duration: 1e3
                        }), "requestPayment:ok" == t.errMsg && (e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesjxf&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                id: r,
                                type: l
                            },
                            success: function(e) {
                                console.log(e);
                            }
                        }), e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesavestorepaylog&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                store_id: r,
                                money: c,
                                note: "入驻续费"
                            },
                            success: function(e) {
                                console.log("这是续费成功"), console.log(e);
                            }
                        }), e.util.request({
                            url: "entry/wxapp/fx",
                            cachetime: "0",
                            data: {
                                user_id: i,
                                money: c
                            },
                            success: function(e) {
                                console.log(e);
                            }
                        }), setTimeout(function() {
                            a.onLoad(a.data.options);
                        }, 1e3));
                    }
                });
            }
        })) : (a.setData({
            iszd: !1
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesjxf&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: r,
                type: l
            },
            success: function(e) {
                setTimeout(function() {
                    a.onLoad(a.data.options);
                }, 1e3);
            }
        }));
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.onLoad(this.data.options);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});