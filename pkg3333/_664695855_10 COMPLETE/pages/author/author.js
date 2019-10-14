var e = require("../../utils/appRouters.js");

Page({
    data: {
        userInfo: {},
        code: "",
        encryptedData: "",
        iv: "",
        isClick: !1,
        serviceId: 0,
        preUrl: ""
    },
    onLoad: function(e) {
        console.log(e.preUrl), this.setData({
            preUrl: e.preUrl,
            serviceId: e.serviceId || 0
        });
    },
    allow: function(e) {
        var a = this, r = e.detail;
        a.data.isClick || (a.data.isClick = !0, wx.login({
            success: function(e) {
                e.code ? (a.setData({
                    code: e.code
                }), r && r.userInfo ? (a.setData({
                    userInfo: r.userInfo,
                    encryptedData: r.encryptedData,
                    iv: r.iv
                }), wx.setStorage({
                    key: "isGetAuthor",
                    data: r
                }), a.isBind()) : (wx.setStorage({
                    key: "isGetAuthor",
                    data: r
                }), a.isBind())) : console.log("获取用户登录态失败！" + e.errMsg);
            }
        }));
    },
    isBind: function() {
        var a = this;
        e.isBindZBJ({
            data: {
                authCode: a.data.code,
                encryptedData: a.data.encryptedData || "",
                iv: a.data.iv || ""
            },
            header: "application/x-www-form-urlencoded",
            method: "POST",
            success: function(e) {
                var r = new Date();
                if (e.data.data.userId && e.data.data.userkey) {
                    a.setData({
                        userInfo: e.data.data,
                        isClick: !1
                    });
                    try {
                        wx.setStorageSync("userInfo", a.data.userInfo);
                    } catch (e) {}
                    "/pages/index/index" == a.data.preUrl || "/pages/order/order" == a.data.preUrl || "/pages/request/request" == a.data.preUrl ? wx.switchTab({
                        url: a.data.preUrl + "?time=" + r
                    }) : 0 != a.data.serviceId ? a.buyService() : wx.redirectTo({
                        url: a.data.preUrl
                    });
                } else 0 != a.data.serviceId ? wx.redirectTo({
                    url: "/pages/login/login?preUrl=" + a.data.preUrl + "&serviceId=" + a.data.serviceId
                }) : wx.redirectTo({
                    url: "/pages/login/login?preUrl=" + a.data.preUrl
                });
            }
        });
    },
    refuse: function() {
        var e = this;
        e.data.isClick || (e.data.isClick = !0, wx.login({
            success: function(a) {
                a.code ? (e.setData({
                    code: a.code
                }), e.isBind()) : console.log("获取用户登录态失败！" + a.errMsg);
            }
        }));
    },
    buyService: function() {
        var a = this;
        e.buyService({
            data: {
                serviceId: a.data.serviceId,
                userId: a.data.userInfo.userId,
                userkey: a.data.userInfo.userkey
            },
            method: "POST",
            header: "application/x-www-form-urlencoded",
            success: function(e) {
                e.data.data ? wx.redirectTo({
                    url: "/pages/orderDetail/orderDetail?taskId=" + e.data.data.taskId
                }) : wx.redirectTo({
                    url: a.data.preUrl + "?error=error"
                });
            },
            fail: function() {
                wx.redirectTo({
                    url: a.data.preUrl + "?error=error&serviceId=" + a.data.serviceId
                }), wx.showToast({
                    title: "下单失败",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});