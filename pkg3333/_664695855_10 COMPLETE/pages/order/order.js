var a = require("../../utils/appRouters.js");

Page({
    data: {
        isLogin: !0,
        pages: {
            page: 0,
            pageSize: 10,
            totalPage: 0
        },
        userInfo: {},
        scrollHeight: 0,
        loading: !1,
        isClick: !1,
        noZBJ: !0,
        isLoading: !1,
        noOrder: !0,
        code: "",
        orders: []
    },
    onLoad: function(a) {},
    goLogin: function() {
        var a = this;
        a.data.isClick || (a.data.isClick = !0, wx.login({
            success: function(e) {
                e.code ? (a.setData({
                    code: e.code
                }), wx.getStorage({
                    key: "isGetAuthor",
                    success: function(e) {
                        a.isBindZBJ(a.data.code, e.encryptedData, e.iv);
                    },
                    fail: function() {
                        a.setData({
                            noZBJ: !1
                        }), a.isBindZBJ(a.data.code);
                    }
                })) : console.log("获取用户登录态失败！" + e.errMsg);
            }
        }));
    },
    loadOrder: function() {
        this.data.isLoading || (this.data.isLoading = !0, this.setData({
            loading: !0
        }), this.data.pages.page + 1 < this.data.pages.totalPage ? (this.data.pages.page++, 
        this.getOrderList()) : (console.log("没有更多数据了！！"), this.setData({
            loading: !1
        })));
    },
    getOrderList: function() {
        var e = this, t = this;
        a.getOrderList({
            data: {
                userId: t.data.userInfo.userId,
                userkey: t.data.userInfo.userkey,
                page: t.data.pages.page,
                pageSize: t.data.pages.pageSize
            },
            method: "POST",
            header: "application/x-www-form-urlencoded",
            success: function(a) {
                if (setTimeout(function() {
                    wx.hideToast();
                }, 1e3), a.data.data) {
                    var o = t.data.orders;
                    o = o.concat(a.data.data.list), t.data.pages.totalPage = a.data.data.totalPage, 
                    t.setData({
                        orders: o,
                        loading: !0,
                        isLoading: !1,
                        noOrder: !1
                    }), e.data.pages.page + 1 >= e.data.pages.totalPage && e.setData({
                        loading: !1
                    });
                } else if (-2 == a.data.errCode) {
                    try {
                        wx.clearStorageSync();
                    } catch (a) {}
                    t.setData({
                        noOrder: !0,
                        loading: !1,
                        isLogin: !1
                    });
                } else console.log(a.data.errMsg);
            },
            fail: function(a) {
                console.log("请求订单列表失败");
            }
        });
    },
    isBindZBJ: function(e, t, o) {
        var s = this;
        a.isBindZBJ({
            data: {
                authCode: e,
                encryptedData: t || "",
                iv: o || ""
            },
            header: "application/x-www-form-urlencoded",
            method: "POST",
            success: function(a) {
                new Date();
                if (a.data.data.userId && a.data.data.userkey) {
                    s.setData({
                        userInfo: a.data.data,
                        isLogin: !0,
                        isClick: !1
                    });
                    try {
                        wx.setStorageSync("userInfo", s.data.userInfo);
                    } catch (a) {}
                    s.getOrderList();
                } else s.data.noZBJ ? wx.navigateTo({
                    url: "/pages/login/login?preUrl=/pages/order/order"
                }) : wx.navigateTo({
                    url: "/pages/author/author?preUrl=/pages/order/order"
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var a = this;
        try {
            var e = wx.getStorageSync("userInfo");
            e && a.setData({
                userInfo: e
            });
        } catch (a) {}
        a.data.userInfo.userId ? (wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), a.setData({
            isLogin: !0,
            isClick: !1,
            noZBJ: !0
        }), a.getOrderList()) : a.setData({
            isLogin: !1,
            isClick: !1,
            noZBJ: !0
        }), wx.getSystemInfo({
            success: function(e) {
                a.setData({
                    scrollHeight: e.windowHeight
                });
            }
        });
    },
    onHide: function() {
        this.setData({
            orders: [],
            pages: {
                page: 0,
                pageSize: 10,
                totalPage: 0
            },
            noOrder: !0
        });
    },
    onUnload: function() {}
});