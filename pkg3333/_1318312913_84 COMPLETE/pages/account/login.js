function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function a(r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(s);
            }
            return a("next");
        });
    };
}

var n = e(require("../../libs/regenerator-runtime.js")), a = e(require("../../utils/extend-page")), r = e(require("../../mixins/login")), i = e(require("../../mixins/logger")), o = e(require("../../mixins/hook"));

Page((0, a.default)({
    data: {
        step: null,
        first: !1,
        resentSeconds: 0
    },
    phoneNumber: null,
    sessionCode: 0,
    countDown: null,
    userInfo: null,
    userToken: null,
    source: null,
    callback: null,
    onLoad: function(e) {
        var a = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    wx.setNavigationBarTitle({
                        title: "登录"
                    }), a.source = e.source, a.callback = e.callback, a.init();

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t, a);
        }))();
    },
    init: function() {
        var e = this;
        return t(n.default.mark(function t() {
            var a, r;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return 0 === (a = getApp().globalData.userInfo.type) ? e.changeStep("wechat") : 2 === a ? (r = getApp().globalData.userInfo.phone) ? e.changeStep("switch") : e.changeStep("phone") : e.changeStep("switch"), 
                    "onboard" === e.source && e.setData({
                        first: !0
                    }), t.next = 5, e.initLogin();

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loginWechat: function(e) {
        var a = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return a.startLoading(), t.next = 3, a.login(e);

                  case 3:
                    if (!t.sent) {
                        t.next = 7;
                        break;
                    }
                    getApp().globalData.userInfo.phone || a.callback ? a.done() : a.changeStep("phone"), 
                    t.next = 8;
                    break;

                  case 7:
                    wx.showToast({
                        title: "授权失败"
                    });

                  case 8:
                    a.endLoading();

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t, a);
        }))();
    },
    sendVerification: function(e) {
        var a = this;
        return t(n.default.mark(function t() {
            var r;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return console.log(e), a.phoneNumber = e.detail.value.phone, a.startLoading(), t.next = 5, 
                    a.checking(a.phoneNumber);

                  case 5:
                    if (r = t.sent, a.endLoading(), !r) {
                        t.next = 10;
                        break;
                    }
                    return t.next = 10, a.resendVerification(e);

                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t, a);
        }))();
    },
    resendVerification: function() {
        var e = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!(e.data.resentSeconds > 0)) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return e.startLoading(), t.next = 5, e.verify(e.phoneNumber);

                  case 5:
                    if (!t.sent) {
                        t.next = 9;
                        break;
                    }
                    e.changeStep("verify"), t.next = 10;
                    break;

                  case 9:
                    e.setData({
                        tip: "无法发送验证码，请检查手机号是否正确"
                    });

                  case 10:
                    e.endLoading();

                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    bindPhone: function(e) {
        var a = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return a.startLoading(), t.next = 3, a.binding(e.detail.value.code);

                  case 3:
                    if (!t.sent) {
                        t.next = 7;
                        break;
                    }
                    a.done(), t.next = 8;
                    break;

                  case 7:
                    a.setData({
                        tip: "验证码错误"
                    });

                  case 8:
                    a.endLoading();

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t, a);
        }))();
    },
    done: function() {
        var e = this;
        return t(n.default.mark(function t() {
            var a;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    (a = getApp().globalData.userInfo) && a.name && wx.showToast({
                        title: "欢迎你，" + a.name
                    }), e.callback ? "navigateBack" === e.callback ? wx.navigateBack() : wx.redirectTo({
                        url: e.callback
                    }) : (e.callback = getApp().getConfig().homePage, wx.reLaunch({
                        url: e.callback,
                        success: function() {
                            console.log("relaunch success");
                        },
                        fail: function() {
                            console.log("relaunch fail");
                        }
                    }));

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    changeStep: function(e) {
        var t = this;
        this.setData({
            step: e,
            user: getApp().globalData.userInfo
        }), this.countDown && (clearInterval(this.countDown), this.countDown = null, this.setData({
            resentSeconds: 0
        })), "verify" === e ? (this.setData({
            resentSeconds: 60
        }), this.countDown = setInterval(function() {
            t.setData({
                resentSeconds: t.data.resentSeconds - 1
            }), t.data.resentSeconds < 0 && clearInterval(t.countDown);
        }, 1e3), this.setData({
            phone: this.phoneNumber
        })) : "phone" === e ? (wx.setNavigationBarTitle({
            title: "绑定手机号"
        }), this.pageShown("/profiles/me/edit/mobile/")) : "switch" === e ? (wx.setNavigationBarTitle({
            title: "查看账号"
        }), this.pageShown("/account/settings/")) : (wx.setNavigationBarTitle({
            title: "登录账号"
        }), this.pageShown("/account/signin/"));
    },
    startLoading: function() {
        wx.showLoading(), this.setData({
            tip: ""
        });
    },
    endLoading: function() {
        wx.hideLoading();
    }
}, r.default, i.default, o.default));