var a = getApp().globalData, t = "", e = "", o = require("../../wxParse/wxParse.js"), s = !0;

Page({
    data: {
        leftDistance: "-170rpx",
        show: !1,
        shopsData: "",
        detailData: {},
        isClick: !1,
        encryptedData: "",
        amount: 13,
        iv: "",
        isDone: "确认下单",
        servicePic: ""
    },
    onLoad: function(a) {
        var t = this;
        "error" == a.error ? (wx.showToast({
            title: "下单失败",
            icon: "loading",
            duration: 2e3
        }), t.setData({
            show: !0
        })) : wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), e = a.serviceId, this.init();
    },
    onReady: function(a) {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {
        return t;
    },
    getDecimal: function(a, t) {
        var e;
        return t = parseInt(t) || 2, e = Math.pow(10, t), parseFloat(a).toFixed(t) * e / e;
    },
    serviceNum: function(a) {
        var t = this;
        console.log(a.currentTarget.dataset), t.data.shopsData.mobile ? wx.showActionSheet({
            itemList: t.data.shopsData.mobile,
            success: function(a) {
                console.log(a.tapIndex), wx.makePhoneCall({
                    phoneNumber: t.data.shopsData.mobile[a.tapIndex]
                });
            },
            fail: function(a) {
                console.log(a.errMsg);
            }
        }) : wx.showToast({
            title: "当前服务商没有预留电话",
            icon: "success",
            duration: 2e3
        });
    },
    buyService: function(a) {
        this.setData({
            show: !0
        });
    },
    removeMode: function(a) {
        this.setData({
            show: !1
        });
    },
    goShops: function(a) {
        console.log(a.currentTarget.dataset.id), wx.redirectTo({
            url: "/pages/detail/detail?shopId=" + a.currentTarget.dataset.id
        });
    },
    buy: function(t) {
        var e = this;
        wx.request({
            url: a.zbjUrl + "/little/service/buy",
            method: "POST",
            data: t,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                if (-1 == a.data.errCode) return wx.showToast({
                    title: a.data.errMsg,
                    icon: "success",
                    duration: 2e3
                }), void e.setData({
                    isDone: "确认下单"
                });
                if (-2 == a.data.errCode) try {
                    wx.clearStorageSync(), e.haveZBJ();
                } catch (a) {} else console.log("我进来了"), console.log(a.data.data.taskId), a.data.data.taskId ? wx.redirectTo({
                    url: "/pages/orderDetail/orderDetail?taskId=" + a.data.data.taskId
                }) : (wx.showToast({
                    title: "下单失败",
                    icon: "success",
                    duration: 2e3
                }), e.setData({
                    isDone: "确认下单"
                }));
            },
            fail: function() {
                wx.showToast({
                    title: "下单失败",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    haveZBJ: function() {
        var t = this;
        wx.login({
            success: function(o) {
                o.code && wx.request({
                    url: a.zbjUrl + "/little/have-zbj",
                    data: {
                        authCode: o.code,
                        encryptedData: t.data.encryptedData || "",
                        iv: t.data.iv || ""
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        var o = a.data.data.userId, n = a.data.data.userkey;
                        try {
                            wx.setStorageSync("userInfo", a.data.data);
                        } catch (a) {}
                        if (o && n) {
                            var i = {
                                serviceId: e,
                                userId: o,
                                userkey: n
                            };
                            t.buy(i);
                        } else 1 == s ? wx.redirectTo({
                            url: "/pages/login/login?serviceId=" + e
                        }) : wx.redirectTo({
                            url: "/pages/author/author?serviceId=" + e
                        });
                    }
                });
            }
        });
    },
    makeIt: function() {
        var a = this;
        0 != a.amount ? (a.setData({
            isDone: "正在下单..."
        }), wx.getStorage({
            key: "isGetAuthor",
            success: function(t) {
                a.setData({
                    encryptedData: t.encryptedData,
                    iv: t.iv
                }), a.haveZBJ();
            },
            fail: function() {
                s = !1, a.haveZBJ();
            }
        })) : wx.showToast({
            title: "不能购买0元服务",
            icon: "success",
            duration: 2e3
        });
    },
    getShops: function(t) {
        var e = this;
        wx.request({
            url: a.zbjUrl + "/shop/base",
            method: "GET",
            data: {
                shopId: t
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                e.setData({
                    shopsData: a.data.data
                });
            }
        });
    },
    getShow: function(t) {
        var e = this;
        wx.request({
            url: a.zbjUrl + "/shop/show",
            data: {
                shopId: t
            },
            method: "GET",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                e.setData({
                    shopShow: a.data.data
                });
            }
        });
    },
    init: function() {
        var s = this;
        wx.setNavigationBarTitle({
            title: "服务详情"
        }), wx.request({
            url: a.zbjUrl + "/little/service/detail",
            method: "POST",
            data: {
                serviceId: e
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                t = {
                    title: "找专业人，做专业事",
                    desc: "售价:¥" + a.data.data.amountApp + " | " + a.data.data.subject,
                    path: "pages/shops/index?serviceId=" + e
                }, "" != a.data.data.amountApp && (a.data.data.amountApp = s.getDecimal(a.data.data.amountApp, 2)), 
                "" != a.data.data.amount ? (a.data.data.amount = s.getDecimal(a.data.data.amount, 2), 
                s.amount = a.data.data.amount) : (a.data.data.amount = 0, s.amount = 0), s.setData({
                    detailData: a.data.data,
                    servicePic: a.data.data.imgs[0],
                    lessMoney: s.getDecimal(a.data.data.amount - a.data.data.amountApp, 2)
                }), s.getShops(a.data.data.shopId), s.getShow(a.data.data.shopId), wx.hideToast();
            }
        }), wx.request({
            url: a.zbjUrl + "/little/service/evaluateInfo",
            method: "POST",
            data: {
                serviceId: e
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                null != a.data.data && (a.data.data.forEach(function(a) {
                    switch (a.starsNum) {
                      case 0:
                        a.starsNum = "-85px";
                        break;

                      case 1:
                        a.starsNum = "-72px";
                        break;

                      case 2:
                        a.starsNum = "-54px";
                        break;

                      case 3:
                        a.starsNum = "-36px";
                        break;

                      case 4:
                        a.starsNum = "-18px";
                        break;

                      case 5:
                        a.starsNum = "0px";
                    }
                }), s.setData({
                    commentListData: a.data.data
                }));
            }
        }), wx.request({
            url: a.zbjUrl + "/little/service/detail/info",
            method: "POST",
            data: {
                serviceId: e
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                var t = a.data.data;
                o.wxParse("article", "html", t, s, 10);
            }
        });
    }
});