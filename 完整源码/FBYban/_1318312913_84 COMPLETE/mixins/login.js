function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, u) {
                try {
                    var o = t[a](u), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
        });
    };
}

var n = e(require("../libs/regenerator-runtime")), r = require("../protocol/io"), a = require("../utils/dev"), u = e(require("../pages/components/global-ui")), o = function() {
    var e = t(n.default.mark(function e() {
        return n.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", new Promise(function(e, t) {
                    wx.login({
                        success: function(n) {
                            var r = n.code;
                            void 0 === r && t(n), e(r);
                        },
                        fail: t
                    });
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}();

module.exports = {
    authCode: null,
    sessionCode: null,
    existedPhone: !1,
    phoneNumber: null,
    initLogin: function() {
        var e = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, o();

                  case 2:
                    e.authCode = t.sent, u.default.dispatchNeedLoginAction(getApp().isSupportLoginButton() && getApp().isAnonymous()), 
                    console.log("login inited", e.authCode);

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loginViaWechat: function() {
        var e = this;
        return t(n.default.mark(function r() {
            return n.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if (getApp().isAnonymous()) {
                        r.next = 2;
                        break;
                    }
                    return r.abrupt("return");

                  case 2:
                    return r.abrupt("return", new Promise(function(r, a) {
                        wx.login({
                            success: function(u) {
                                var o = u.code;
                                if (void 0 === o) return a(u);
                                wx.getUserInfo({
                                    lang: "zh_CN",
                                    success: function(e) {
                                        var t = e.encryptedData, n = e.iv;
                                        if (!t || !n) return a(e);
                                        var u = {
                                            code: o,
                                            user_data: t,
                                            iv: n
                                        };
                                        u.app_name = getApp().getConfig().wxAppid, wx.request({
                                            url: "https://api.qingmang.me/v1/account.authByWx",
                                            data: u,
                                            method: "GET",
                                            success: function(e) {
                                                if (!e.data.token) return e.code = o, a(e);
                                                getApp().saveUserInfo(e.data.user, e.data.token), r(e.data);
                                            },
                                            fail: a
                                        });
                                    },
                                    fail: function() {
                                        var r = t(n.default.mark(function t(r) {
                                            return n.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return console.log("reject auth", r), e.abrupt("return", a(r));

                                                  case 2:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, t, e);
                                        }));
                                        return function(e) {
                                            return r.apply(this, arguments);
                                        };
                                    }()
                                });
                            }
                        });
                    }));

                  case 3:
                  case "end":
                    return r.stop();
                }
            }, r, e);
        }))();
    },
    loginBackup: function() {
        var e = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (getApp().isSupportLoginButton()) {
                        e.next = 4;
                        break;
                    }
                    return e.next = 3, getApp().loginWithWX();

                  case 3:
                    wx.showModal({
                        title: "提示",
                        content: "当前微信版本过低，使用时可能会出现异常，建议升级到最新微信版本。"
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, t, e);
        }))();
    },
    login: function(e) {
        var u = this;
        return t(n.default.mark(function t() {
            var o, s, i, c, p, f;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return o = e.detail, t.next = 3, u._takeCode();

                  case 3:
                    if (s = t.sent, i = o.encryptedData, c = o.iv, s && i && c) {
                        t.next = 8;
                        break;
                    }
                    return t.abrupt("return", !1);

                  case 8:
                    return t.prev = 8, p = {
                        app_name: getApp().getConfig().wxAppid,
                        code: s,
                        user_data: i,
                        iv: c
                    }, getApp().isAnonymous() && (p.old_token = getApp().getUserToken()), t.next = 13, 
                    r.api.getV1("account.authByWx", p);

                  case 13:
                    return f = t.sent, console.log("get user info", f), t.next = 17, u.initLogin();

                  case 17:
                    return getApp().saveUserInfo(f.data.user, f.data.token), r.api.get("v1/mina.push.add", {
                        type: "welcome"
                    }), t.abrupt("return", !0);

                  case 22:
                    return t.prev = 22, t.t0 = t.catch(8), (0, a.errorReporter)("login via WeChat failed", t.t0), 
                    t.abrupt("return", !1);

                  case 26:
                  case "end":
                    return t.stop();
                }
            }, t, u, [ [ 8, 22 ] ]);
        }))();
    },
    binding: function(e) {
        var a = this;
        return t(n.default.mark(function t() {
            var u, o;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (t.prev = 0, !a.existedPhone) {
                        t.next = 8;
                        break;
                    }
                    return t.next = 4, r.api.getV1("account.auth", {
                        phone: a.phoneNumber,
                        code: a.sessionCode,
                        verify: e,
                        old_token: getApp().getUserToken()
                    });

                  case 4:
                    u = t.sent, getApp().saveUserInfo(u.data.user, u.data.token), t.next = 12;
                    break;

                  case 8:
                    return t.next = 10, r.api.getV1("account.changePhone", {
                        token: getApp().getUserToken(),
                        phone: a.phoneNumber,
                        code: a.sessionCode,
                        verify: e
                    });

                  case 10:
                    o = t.sent, getApp().saveUserInfo(o.data.user, getApp().getUserToken());

                  case 12:
                    return t.abrupt("return", !0);

                  case 15:
                    return t.prev = 15, t.t0 = t.catch(0), console.log("binding fail", t.t0), t.abrupt("return", !1);

                  case 19:
                  case "end":
                    return t.stop();
                }
            }, t, a, [ [ 0, 15 ] ]);
        }))();
    },
    checking: function(e) {
        var a = this;
        return t(n.default.mark(function t() {
            var u, o;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return", !1);

                  case 2:
                    return t.prev = 2, t.next = 5, r.api.getV1("account.queryPhone", {
                        phone: e
                    });

                  case 5:
                    if (!(u = t.sent).data.user) {
                        t.next = 16;
                        break;
                    }
                    return a.existedPhone = !0, wx.hideLoading(), t.next = 11, new Promise(function(e, t) {
                        wx.showModal({
                            title: "手机号已注册",
                            content: "该手机号已注册，绑定该手机号，会使用原有账号替换当前账号，是否继续？",
                            cancelText: "不",
                            confirmText: "是的",
                            success: function() {
                                e(!0);
                            },
                            fail: function() {
                                t(new Error("showModal error"));
                            }
                        });
                    });

                  case 11:
                    return o = t.sent, wx.showLoading(), t.abrupt("return", o);

                  case 16:
                    return a.existedPhone = !1, t.abrupt("return", !0);

                  case 18:
                    t.next = 23;
                    break;

                  case 20:
                    return t.prev = 20, t.t0 = t.catch(2), t.abrupt("return", !1);

                  case 23:
                  case "end":
                    return t.stop();
                }
            }, t, a, [ [ 2, 20 ] ]);
        }))();
    },
    verify: function(e) {
        var a = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return", !1);

                  case 2:
                    return t.prev = 2, a.sessionCode = parseInt(1e3 * Math.random()), a.phoneNumber = e, 
                    t.next = 7, r.api.getV1("account.sendVerification", {
                        phone: e,
                        code: a.sessionCode
                    });

                  case 7:
                    return t.abrupt("return", !0);

                  case 10:
                    return t.prev = 10, t.t0 = t.catch(2), t.abrupt("return", !1);

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, a, [ [ 2, 10 ] ]);
        }))();
    },
    updateUserInfo: function(e) {
        var a = this;
        return t(n.default.mark(function t() {
            var u;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, r.ajax.get("https://api.qingmang.me/v1/account.info", {
                        token: e
                    });

                  case 2:
                    u = t.sent, getApp().saveUserInfo(u.data.user, e), wx.reLaunch({
                        url: getApp().getConfig().homePage
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, a);
        }))();
    },
    switchProxyUser: function() {
        var e = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.showInputDialog("你想成为谁", "就这个", "算了吧", function(t) {
                        r.ajax.get("https://api.qingmang.me/admin/user.token.get", {
                            uid: t,
                            token: getApp().getUserToken()
                        }).then(function(t) {
                            console.log(t);
                            var n = t.data.value;
                            n && e.updateUserInfo(n);
                        });
                    });

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    _takeCode: function() {
        var e = this;
        return t(n.default.mark(function t() {
            var r;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.authCode) {
                        t.next = 4;
                        break;
                    }
                    return r = e.authCode, e.authCode = null, t.abrupt("return", r);

                  case 4:
                    return t.abrupt("return", o());

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    }
};