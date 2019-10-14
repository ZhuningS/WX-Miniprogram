var a = require("../../utils/appRouters.js");

Page({
    data: {
        detail: {},
        shop: {},
        taskId: 0,
        isClick: !1,
        payText: "托管赏金",
        userInfo: {},
        guideDes: ""
    },
    onLoad: function(a) {
        var t = this;
        wx.showToast({
            title: "加载中",
            icon: "loading",
            mask: !0,
            duration: 1e4
        });
        try {
            var e = wx.getStorageSync("userInfo");
            e && t.setData({
                userInfo: e,
                taskId: a.taskId
            });
        } catch (a) {}
    },
    onReady: function() {},
    getOrderDetail: function() {
        var t = this;
        a.orderDetail({
            data: {
                taskId: t.data.taskId,
                userId: t.data.userInfo.userId,
                userkey: t.data.userInfo.userkey
            },
            method: "POST",
            header: "application/x-www-form-urlencoded",
            success: function(a) {
                t.setData({
                    detail: a.data.data
                }), setTimeout(function() {
                    wx.hideToast();
                }, 2e3), t.getShop();
            }
        });
    },
    getShop: function() {
        var t = this;
        a.getShop({
            data: {
                shopId: t.data.detail.shopId
            },
            method: "GET",
            success: function(a) {
                t.setData({
                    shop: a.data.data
                });
            }
        });
    },
    serviceNum: function(a) {
        var t = this;
        t.data.shop.mobile ? wx.showActionSheet({
            itemList: t.data.shop.mobile,
            success: function(a) {
                wx.makePhoneCall({
                    phoneNumber: t.data.shop.mobile[a.tapIndex]
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
    goPay: function() {
        var t = this;
        t.data.isClick || (t.data.isClick = !0, t.setData({
            payText: "正在托管..."
        }), a.orderPay({
            data: {
                taskId: t.data.taskId,
                userId: t.data.userInfo.userId,
                userkey: t.data.userInfo.userkey,
                appId: "wxd3f955ed10193867"
            },
            method: "POST",
            header: "application/x-www-form-urlencoded",
            success: function(a) {
                t.setData({
                    isClick: !1
                }), -1 == a.data.errCode ? (console.log(a.data.errMsg), t.setData({
                    payText: "托管赏金"
                }), wx.showToast({
                    title: "获取支付失败",
                    icon: "success",
                    duration: 2e3
                })) : wx.requestPayment({
                    timeStamp: a.data.data.timeStamp,
                    nonceStr: a.data.data.nonceStr,
                    package: a.data.data.packageString,
                    signType: "MD5",
                    paySign: a.data.data.paySign,
                    success: function(a) {
                        wx.navigateTo({
                            url: "/pages/orderDetail/success?taskId=" + t.data.taskId
                        });
                    },
                    fail: function(a) {
                        t.setData({
                            payText: "托管赏金"
                        }), console.log("进入支付失败"), console.log(a), wx.showToast({
                            title: "支付失败",
                            icon: "success",
                            duration: 2e3
                        });
                    }
                });
            }
        }));
    },
    goAppDownload: function() {
        var a = wx.getSystemInfoSync().system.toLowerCase().indexOf("android") >= 0 ? "android" : "ios", t = {
            android: "请到应用市场下载猪八戒APP~",
            ios: "请到App Store下载猪八戒APP~"
        };
        this.setData({
            guideDes: t[a]
        });
    },
    cancelBox: function() {
        this.setData({
            guideDes: ""
        });
    },
    cancelOrder: function() {
        var t = this;
        a.cancelOrder({
            data: {
                taskId: t.data.detail.taskId,
                userId: t.data.userInfo.userId,
                userkey: t.data.userInfo.userkey
            },
            method: "POST",
            header: "application/x-www-form-urlencoded",
            success: function(a) {
                a.data.data ? (wx.showToast({
                    title: "取消订单成功",
                    icon: "success",
                    duration: 2e3
                }), t.getOrderDetail(t.data.taskId)) : wx.showToast({
                    title: "取消订单失败",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    onShow: function() {
        this.setData({
            payText: "托管赏金",
            isClick: !1
        }), this.getOrderDetail();
    },
    onHide: function() {},
    onUnload: function() {}
});