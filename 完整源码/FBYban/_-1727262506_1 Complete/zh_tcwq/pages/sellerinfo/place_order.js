var e = getApp();

Page({
    data: {},
    onLoad: function(e) {
        console.log(e.spec_id3);
        var a = [];
        "undefined" !== e.spec_id1 && a.push(e.spec_id1), "undefined" !== e.spec_id2 && a.push(e.spec_id2), 
        "undefined" !== e.spec_id3 && a.push(e.spec_id3), this.setData({
            arrSpec: a
        });
        var o = this, t = wx.getStorageSync("url"), s = e.price * e.num;
        o.setData({
            id: e.id,
            url: t,
            price: e.price,
            num: e.num,
            cost: s.toFixed(2),
            name1: e.name1,
            name2: e.name2,
            name3: e.name3,
            store_id: e.store_id
        }), console.log(e + "这是商家的id"), o.user_infos(), o.refresh();
    },
    refresh: function(a) {
        var o = this, t = o.data.id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagegoodinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: t
            },
            success: function(e) {
                console.log(e);
                var a = {}, t = [];
                e.data.spec.forEach(function(e) {
                    var o = e.spec_id + "_" + e.spec_name;
                    void 0 === a[o] && (a[o] = []), a[o].push(e);
                });
                for (var s = Object.keys(a), n = 0; n < s.length; n++) {
                    var c = s[n].split("_");
                    t.push({
                        spec_id: c[0],
                        spec_name: c[1],
                        value: a[s[n]]
                    });
                }
                console.log(t), e.data.good.imgs = e.data.good.imgs.split(","), e.data.good.lb_imgs = e.data.good.lb_imgs.split(",");
                var i = Number(o.data.cost), d = Number(e.data.good.freight), r = i + d;
                r = r.toFixed(2), o.setData({
                    store_good: e.data.good,
                    cost2: r,
                    freight: d,
                    result: t
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoreinfo&acid=" + getApp().globalData.version + "&id=" + t,
            cachetime: "0",
            data: {
                id: o.data.store_id
            },
            success: function(e) {
                console.log(e), o.setData({
                    store: e.data.store[0]
                });
            }
        });
    },
    user_infos: function(a) {
        var o = this;
        wx.login({
            success: function(a) {
                var t = a.code;
                wx.getUserInfo({
                    success: function(a) {
                        var s = a.userInfo.nickName, n = a.userInfo.avatarUrl;
                        e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopageopenid&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                code: t
                            },
                            success: function(a) {
                                var t = n, c = s, i = a.data.openid;
                                e.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        openid: i,
                                        img: t,
                                        name: c
                                    },
                                    success: function(e) {
                                        console.log("这是用户的登录信息"), console.log(e), o.setData({
                                            user_info: e.data,
                                            openid: i
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    address: function(a) {
        var o = this, t = o.data.user_info.id;
        console.log(t), wx.chooseAddress({
            success: function(a) {
                console.log(a), e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopageupdadd&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        user_id: t,
                        user_name: a.userName,
                        user_tel: a.telNumber,
                        user_address: a.provinceName + a.cityName + a.countyName + a.detailInfo
                    },
                    success: function(e) {
                        console.log(e), o.user_infos();
                    }
                });
            }
        });
    },
    add: function(e) {
        var a = this, o = a.data.num + 1, t = a.data.cost1, s = (t *= o.toFixed(2)) + a.data.freight;
        a.setData({
            num: o,
            cost: t,
            cost2: s
        });
    },
    subtraction: function(e) {
        var a = this, o = a.data.num;
        o -= 1;
        var t = a.data.cost1, s = (t *= o.toFixed(2)) + a.data.freight;
        a.setData({
            num: o,
            cost: t,
            cost2: s
        });
    },
    note: function(e) {
        console.log(e), this.setData({
            note: e.detail.value
        });
    },
    order: function(a) {
        var o = this;
        console.log(o.data);
        var t = o.data.store_good, s = o.data.user_info.id, n = o.data.user_info, c = o.data.openid, i = Number(t.freight), d = (Number(t.goods_cost), 
        o.data.cost2), r = o.data.note, l = o.data.result;
        if (1 == l.length) u = l[0].spec_name + ":" + o.data.name1;
        if (2 == l.length) u = l[0].spec_name + ":" + o.data.name1 + ";" + l[1].spec_name + ":" + o.data.name2;
        if (3 == l.length) var u = l[0].spec_name + ":" + o.data.name1 + ";" + l[1].spec_name + ":" + o.data.name2 + ";" + l[2].spec_name + ":" + o.data.name3;
        console.log(l), console.log(String(u)), r = null == r ? "" : o.data.note, "" == n.user_name ? wx.showModal({
            title: "提示",
            content: "您还没有填写收货地址喔",
            showCancel: !0,
            cancelText: "取消",
            cancelColor: "",
            confirmText: "确定",
            confirmColor: "",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }) : (console.log(r), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageaddorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: s,
                store_id: t.store_id,
                money: d,
                user_name: n.user_name,
                address: n.user_address,
                tel: n.user_tel,
                good_id: t.id,
                good_name: t.goods_name,
                good_img: t.lb_imgs[0],
                good_money: o.data.price,
                good_spec: String(u),
                freight: i,
                good_num: o.data.num,
                note: r,
                spec_id: o.data.arrSpec.join(",")
            },
            success: function(a) {
                console.log(a);
                var t = a.data;
                console.log(d), e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        openid: c,
                        money: d,
                        order_id: t
                    },
                    success: function(a) {
                        console.log(a), wx.requestPayment({
                            timeStamp: a.data.timeStamp,
                            nonceStr: a.data.nonceStr,
                            package: a.data.package,
                            signType: a.data.signType,
                            paySign: a.data.paySign,
                            success: function(a) {
                                console.log("这里是支付成功"), console.log(a), 0 !== o.data.result.length ? e.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagepayorder&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        order_id: t,
                                        guige_id: o.data.arrSpec.join(",")
                                    },
                                    success: function(e) {
                                        console.log("改变订单状态"), console.log(e), wx.redirectTo({
                                            url: "../logs/order_info?id=" + e.data + "&store_id=" + o.data.store_id,
                                            success: function(e) {},
                                            fail: function(e) {},
                                            complete: function(e) {}
                                        });
                                    }
                                }) : e.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagepayorder&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        order_id: t
                                    },
                                    success: function(e) {
                                        console.log("改变订单状态"), console.log(e), wx.redirectTo({
                                            url: "../logs/order_info?id=" + e.data + "&store_id=" + o.data.store_id,
                                            success: function(e) {},
                                            fail: function(e) {},
                                            complete: function(e) {}
                                        });
                                    }
                                });
                            },
                            fail: function(e) {
                                console.log("这里是支付失败"), console.log(e), wx.showToast({
                                    title: "支付失败",
                                    duration: 1e3
                                }), wx.redirectTo({
                                    url: "../logs/order?activeIndex=1",
                                    success: function(e) {},
                                    fail: function(e) {},
                                    complete: function(e) {}
                                });
                            }
                        });
                    }
                });
            }
        }));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});