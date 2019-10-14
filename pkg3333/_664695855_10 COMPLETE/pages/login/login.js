var e = getApp().globalData;

Page({
    data: {
        loginCode: "",
        textValue: "",
        telephone: "",
        getCodeValue: "获取验证码",
        isClick: !1,
        disabled: !0,
        authCode: "",
        isNeedCaptcha: !1,
        captcha: "",
        seed: 0,
        preUrl: "",
        serviceId: 0,
        isClickLogin: !1
    },
    onLoad: function(e) {
        var t = this;
        wx.setNavigationBarTitle({
            title: "快速登录"
        }), t.setData({
            preUrl: e.preUrl,
            serviceId: e.serviceId
        });
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            isClickLogin: !1
        });
    },
    onHide: function() {},
    onUnload: function() {},
    getTel: function(e) {
        this.setData({
            textValue: e.detail.value
        });
    },
    getCaptcha: function(e) {
        this.setData({
            captcha: e.detail.value
        });
    },
    getLoginCode: function(e) {
        this.setData({
            loginCode: e.detail.value
        });
    },
    refreshPic: function() {
        this.setData({
            seed: new Date().valueOf()
        });
    },
    getCode: function() {
        var t = this;
        if ("" != t.data.textValue && 0 == t.data.isClick) {
            if (0 == t.isPhone(t.data.textValue)) return;
            var a = {
                telephone: t.data.textValue
            };
            t.data.seed && t.data.captcha && Object.assign(a, {
                seed: t.data.seed,
                verificationCode: t.data.captcha
            }), wx.request({
                url: e.zbjUrl + "/little/get-code",
                method: "POST",
                data: a,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    var a = e.data;
                    if (-1 === a.errCode) t.setData({
                        isNeedCaptcha: !0,
                        seed: new Date().valueOf()
                    }), wx.showToast({
                        title: "请输入图片验证码",
                        icon: "none"
                    }); else if (0 === a.errCode) {
                        wx.showToast({
                            title: "验证码已发送"
                        }), t.setData({
                            isClick: !0,
                            telephone: t.data.textValue
                        });
                        var i = 60, o = setInterval(function() {
                            if (0 == --i) return t.setData({
                                getCodeValue: "获取验证码",
                                isClick: !1
                            }), void clearInterval(o);
                            t.setData({
                                getCodeValue: i + "s后重新获取"
                            });
                        }, 1e3);
                    } else -2 === a.errCode ? t.setData({
                        seed: new Date().valueOf()
                    }) : wx.showToast({
                        title: a.errMsg,
                        icon: "none"
                    });
                }
            });
        }
    },
    haveZbj: function() {
        var t = this;
        wx.login({
            success: function(a) {
                t.setData({
                    authCode: a.code
                }), wx.request({
                    url: e.zbjUrl + "/little/have-zbj",
                    method: "POST",
                    data: {
                        authCode: t.data.authCode
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        t.quickLogin(e);
                    }
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    buy: function(t) {
        var a = this;
        wx.request({
            url: e.zbjUrl + "/little/service/buy",
            method: "POST",
            data: t,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                -1 == e.data.errCode || -2 == e.data.errCode ? wx.redirectTo({
                    url: "/pages/shops/index?serviceId=" + a.data.serviceId + "&error=error"
                }) : e.data.data.taskId && wx.redirectTo({
                    url: "/pages/orderDetail/orderDetail?taskId=" + e.data.data.taskId
                });
            },
            fail: function() {
                wx.redirectTo({
                    url: "/pages/shops/index?serviceId=" + a.data.serviceId + "&error=error"
                });
            }
        });
    },
    quickLogin: function(t) {
        var a = this;
        wx.request({
            url: e.zbjUrl + "/little/quick-login",
            method: "POST",
            data: {
                authCode: a.data.authCode,
                telephone: a.data.telephone,
                noteCode: a.data.loginCode
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                if (a.setData({
                    isClickLogin: !1
                }), e.data.data.userId && e.data.data.userkey) if (wx.setStorageSync("userInfo", e.data.data), 
                "/pages/index/index" == a.data.preUrl || "/pages/order/order" == a.data.preUrl || "/pages/request/request" == a.data.preUrl) setTimeout(function() {
                    wx.reLaunch({
                        url: a.data.preUrl
                    });
                }, 1e3); else if (0 != a.data.serviceId) {
                    var i = {
                        serviceId: a.data.serviceId,
                        userId: e.data.data.userId,
                        userkey: e.data.data.userkey
                    };
                    a.buy(i);
                } else setTimeout(function() {
                    wx.reLaunch({
                        url: a.data.preUrl
                    });
                }, 1e3); else console.log(e), 16 == e.data.data.code ? wx.showToast({
                    title: "验证码失效",
                    icon: "success",
                    duration: 2e3
                }) : 19 == e.data.data.code ? wx.showToast({
                    title: "手机号不可重复绑定",
                    icon: "success",
                    duration: 2e3
                }) : "8" == e.data.data.code ? (wx.setStorageSync("userInfo", t.data.data), "/pages/index/index" == a.data.preUrl || "/pages/order/order" == a.data.preUrl || "/pages/request/request" == a.data.preUrl ? setTimeout(function() {
                    wx.reLaunch({
                        url: a.data.preUrl || "pages/index/index"
                    });
                }, 1e3) : setTimeout(function() {
                    wx.reLaunch({
                        url: "/pages/index/index"
                    });
                }, 1e3)) : wx.showToast({
                    title: e.data.data.description || "验证码有误",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function() {
                a.isClickLogin = !1;
            }
        });
    },
    loginIn: function() {
        var e = this;
        1 != e.data.isClickLogin ? (e.setData({
            isClickLogin: !0
        }), e.haveZbj()) : setTimeout(function() {
            e.setData({
                isClickLogin: !1
            });
        }, 2e3);
    },
    isPhone: function(e) {
        if (!/^1[34578]\d{9}$/.test(e)) return wx.showToast({
            title: "请输入正确的手机号",
            icon: "success",
            duration: 2e3
        }), !1;
    }
});