function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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

var n = e(require("libs/regenerator-runtime.js")), r = require("protocol/logger"), a = e(require("protocol/io")), o = e(require("protocol/mock")), i = e(require("protocol/transfer")), s = require("utils/dev"), c = e(require("utils/util")), u = require("utils/base64"), l = require("./config/index");

App({
    globalData: {
        logger: void 0,
        userInfo: void 0,
        udid: void 0,
        sysInfo: {},
        pixelRatio: 1,
        config: void 0,
        inited: !1,
        initing: !1,
        websocket: void 0,
        score: {},
        shareTicket: void 0,
        fromGroup: void 0
    },
    onShow: function(e) {
        var r = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    console.log("on show", e), r.getLogger() && e.scene && (r.getLogger().scene = e.scene), 
                    e.shareTicket && (r.globalData.shareTicket = e.shareTicket);

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    },
    onLaunch: function(e) {
        var r = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return console.log("app launch", e), wx.reportAnalytics("started"), r.initConfig(), 
                    r.initLogger(), r.globalData.mock = o.default.createMock(), r.globalData.transfer = i.default.createTransfer(), 
                    console.log("transfer was init"), t.next = 9, r.init();

                  case 9:
                    s.__DEBUG__ && wx.setNavigationBarTitle({
                        title: l.config.name
                    }), r.logLaunch(e);

                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    },
    init: function() {
        var e = this;
        return t(n.default.mark(function t() {
            var r;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.globalData.inited) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    if (!e.globalData.initing) {
                        t.next = 4;
                        break;
                    }
                    return t.abrupt("return", new Promise(function(t) {
                        setInterval(function() {
                            e.globalData.inited ? t() : console.log("waiting for init");
                        }, 50);
                    }));

                  case 4:
                    return t.prev = 4, e.globalData.initing = !0, console.log("init started"), r = wx.getSystemInfoSync(), 
                    e.globalData.sysInfo = r, e.globalData.pixelRatio = 750 / e.globalData.sysInfo.windowWidth, 
                    console.log("system info was init"), e.globalData.websocket = a.default.createWebSocket(), 
                    e.getConfig().enableGroup && e.globalData.websocket.enable(), console.log("websocket was init"), 
                    e.initUDID(), console.log("device udid was init"), t.next = 18, e.initUserInfo();

                  case 18:
                    return console.log("user info was init"), t.next = 21, e.initPublication();

                  case 21:
                    console.log("publication was init"), t.next = 27;
                    break;

                  case 24:
                    t.prev = 24, t.t0 = t.catch(4), console.error(t.t0.message);

                  case 27:
                    return t.prev = 27, e.globalData.inited = !0, e.globalData.initing = !1, console.log("init end", e.globalData), 
                    t.finish(27);

                  case 32:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 4, 24, 27, 32 ] ]);
        }))();
    },
    initConfig: function() {
        wx.getExtConfigSync ? ((0, l.configUpdater)(wx.getExtConfigSync()), this.globalData.config = l.config) : wx.showModal({
            title: "提示",
            content: "当前微信版本过低，可能无法正常使用，请升级到最新微信版本后重试。"
        });
    },
    generateUDID: function() {
        for (var e = [], t = 0, n = 0; n < 4; n++) {
            var r = Math.floor(4294967296 * (1 + Math.random()));
            t += r - 4294967296, e.push(r);
        }
        e.push(t + 4294967296);
        for (var a = "", o = 0; o < e.length; o++) a += e[o].toString(16).substring(1);
        return a;
    },
    initUDID: function() {
        var e = wx.getStorageSync("udid");
        e && 40 === e.length || (e = this.generateUDID(), wx.setStorageSync("udid", e)), 
        this.globalData.udid = e;
    },
    initLogger: function() {
        this.globalData.logger = r.logger, console.log("logger was init");
    },
    logLaunch: function(e) {
        try {
            if (r.logger.sdkVersion = this.globalData.sysInfo.SDKVersion, e.scene && (r.logger.scene = e.scene, 
            1023 !== e.scene && 1022 !== e.scene && 1103 !== e.scene && 1104 !== e.scene || wx.setStorageSync("launched_via_desktop", new Date().getTime())), 
            e.referrerInfo && (r.logger.source = e.referrerInfo.appId), r.logger.landing = e.path, 
            e.query) {
                var t, n = e.query.scene;
                n && (n = c.default.decodeParam(n), t = (0, u.parseScene)(n));
                var a = e.query.target;
                a && (a = c.default.decodeParam(a), t = c.default.parseUrl(a)), t ? (r.logger.landing = c.default.buildUrl(t.base, t.params), 
                r.logger.campaign = (0, u.buildScene)(t.base, t.params)) : (r.logger.landing = c.default.buildUrl("/" + e.path, e.query), 
                r.logger.campaign = (0, u.buildScene)("/" + e.path, e.query));
            }
            var o = wx.getStorageSync("log_vn");
            if (!o) {
                o = 1;
                var i = {
                    date: (0, r.currentDate)(),
                    scene: r.logger.scene
                };
                r.logger.source && (i.source = r.logger.source), r.logger.campaign && (i.campaign = r.logger.campaign), 
                wx.setStorageSync("log_from", i);
            }
            o = parseInt(o), r.logger.visitNumber = o, r.logger.from = wx.getStorageSync("log_from"), 
            wx.setStorageSync("log_vn", r.logger.visitNumber + 1);
        } catch (e) {
            console.error("not visit", e);
        }
        this.getLogger().logAction("device.launch");
    },
    getLogger: function() {
        return this.globalData.logger;
    },
    initPublication: function() {
        return new Promise(function(e, t) {
            try {
                var n = getApp().globalData.config;
                if (n.publicationId) return void e();
                var r = getApp().globalData.config.wxAppid;
                if ("wx05790b1180642960" === r) return void t(new Error("轻芒杂志的 publication 暂不需要初始化 publication"));
                var a = getApp().getUserToken();
                wx.request({
                    url: "https://api" + (s.__DEBUG__ ? "-staging" : "") + ".qingmang.me/ng/v1/publication.listByAppId",
                    data: {
                        app_id: r,
                        token: a
                    },
                    method: "GET",
                    success: function(r) {
                        r.data.ok && r.data.events.length ? (n.publicationId = r.data.events[0].publication.id, 
                        e()) : t(r.data.ok ? new Error("没有对应的 publication") : new Error(r.data.error.desc));
                    },
                    fail: t
                });
            } catch (e) {}
        });
    },
    getPublicationId: function() {
        return this.globalData.config.publicationId || null;
    },
    initUserInfo: function() {
        var e = this, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return t(n.default.mark(function t() {
            var a, o;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    try {
                        a = wx.getStorageSync("user"), console.log("fetch user info via storage succeeded", a);
                    } catch (e) {
                        (0, s.errorReporter)("fetch user info via storage error", e);
                    }
                    if (t.prev = 1, void 0 !== a && void 0 !== a.token && !r) {
                        t.next = 25;
                        break;
                    }
                    if (!e.isSupportLoginButton()) {
                        t.next = 21;
                        break;
                    }
                    o = 0;

                  case 5:
                    if (!(o < 3)) {
                        t.next = 19;
                        break;
                    }
                    return t.prev = 6, t.next = 9, e.loginWithDevice();

                  case 9:
                    return console.log("login device succeeded, " + (o + 1)), t.abrupt("break", 19);

                  case 13:
                    t.prev = 13, t.t0 = t.catch(6), (0, s.errorReporter)("login device failed", t.t0);

                  case 16:
                    o++, t.next = 5;
                    break;

                  case 19:
                    t.next = 23;
                    break;

                  case 21:
                    return t.next = 23, e.loginWithWX();

                  case 23:
                    t.next = 26;
                    break;

                  case 25:
                    e.globalData.userInfo = a;

                  case 26:
                    t.next = 31;
                    break;

                  case 28:
                    t.prev = 28, t.t1 = t.catch(1), (0, s.errorReporter)("login failed", t.t1);

                  case 31:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 1, 28 ], [ 6, 13 ] ]);
        }))();
    },
    initToken: function() {
        var e = this;
        return new Promise(function(r, a) {
            wx.request({
                url: "https://api.qingmang.me/v1/account.info",
                data: {
                    token: e.globalData.userInfo.token
                },
                success: function() {
                    var a = t(n.default.mark(function t(a) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (a.data.ok || "invalid_token" !== a.data.error.type) {
                                    t.next = 3;
                                    break;
                                }
                                return t.next = 3, e.genToken();

                              case 3:
                                r();

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }));
                    return function(e) {
                        return a.apply(this, arguments);
                    };
                }(),
                fail: a
            });
        });
    },
    getConfig: function() {
        return l.config;
    },
    getUserToken: function() {
        return this.globalData.userInfo ? this.globalData.userInfo.token : null;
    },
    getUserId: function() {
        return this.globalData.userInfo ? this.globalData.userInfo.uid : null;
    },
    mock: function() {
        return this.globalData.mock;
    },
    transfer: function() {
        return this.globalData.transfer;
    },
    isSupportLoginButton: function() {
        return wx.canIUse("button.open-type.getUserInfo");
    },
    isAnonymous: function() {
        return !this.globalData.userInfo || 0 === this.globalData.userInfo.type;
    },
    saveUserInfo: function(e, t) {
        this.globalData.userInfo = e, this.globalData.userInfo.token = t, wx.setStorageSync("user", this.globalData.userInfo);
    },
    genToken: function() {
        var e = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return wx.showToast({
                        title: "正在重新登录",
                        icon: "loading",
                        duration: 1e4
                    }), t.next = 3, e.loginWithWX();

                  case 3:
                    wx.hideToast();

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loginWithWX: function() {
        var e = this;
        return t(n.default.mark(function r() {
            return n.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.abrupt("return", new Promise(function(r, a) {
                        wx.login({
                            success: function(o) {
                                var i = o.code;
                                if (void 0 === i) return a(o);
                                wx.getUserInfo({
                                    lang: "zh_CN",
                                    success: function(t) {
                                        var n = t.encryptedData, o = t.iv;
                                        if (!n || !o) return a(t);
                                        var s = {
                                            code: i,
                                            user_data: n,
                                            iv: o
                                        };
                                        s.app_name = l.config.wxAppid, wx.request({
                                            url: "https://api.qingmang.me/v1/account.authByWx",
                                            data: s,
                                            method: "GET",
                                            success: function(t) {
                                                if (!t.data.token) return a(t);
                                                e.saveUserInfo(t.data.user, t.data.token), r(t.data);
                                            },
                                            fail: a
                                        });
                                    },
                                    fail: function() {
                                        var o = t(n.default.mark(function t() {
                                            return n.default.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    return t.prev = 0, t.next = 3, e.loginWithDevice();

                                                  case 3:
                                                    r(), t.next = 9;
                                                    break;

                                                  case 6:
                                                    t.prev = 6, t.t0 = t.catch(0), a(t.t0);

                                                  case 9:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t, e, [ [ 0, 6 ] ]);
                                        }));
                                        return function() {
                                            return o.apply(this, arguments);
                                        };
                                    }()
                                });
                            }
                        });
                    }));

                  case 1:
                  case "end":
                    return r.stop();
                }
            }, r, e);
        }))();
    },
    loginWithDevice: function() {
        var e = this;
        return new Promise(function(t, n) {
            wx.request({
                url: "https://api.qingmang.me/v1/account.authByDevice",
                data: {
                    udid: e.globalData.udid
                },
                success: function(r) {
                    if (!r.data.token) return n(r);
                    e.saveUserInfo(r.data.user, r.data.token), t(r.data);
                },
                fail: n
            });
        });
    },
    getFromGroup: function() {
        var e = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.globalData.shareTicket) {
                        t.next = 5;
                        break;
                    }
                    return t.next = 3, e.parseShareTicket(e.globalData.shareTicket);

                  case 3:
                    e.globalData.fromGroup = t.sent, e.globalData.shareTicket = void 0;

                  case 5:
                    return t.abrupt("return", e.globalData.fromGroup);

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    parseShareTicket: function(e) {
        var r = this;
        return t(n.default.mark(function t() {
            var a, o;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, new Promise(function(e, t) {
                        wx.login({
                            success: function(t) {
                                e(t.code);
                            },
                            fail: t
                        });
                    });

                  case 2:
                    return a = t.sent, t.next = 5, new Promise(function(t, n) {
                        wx.getShareInfo({
                            shareTicket: e,
                            success: function(e) {
                                console.log("get share info succeeded", e);
                                var r = e.encryptedData, o = e.iv;
                                wx.request({
                                    url: "https://api.qingmang.me/v1/account.infoByWx",
                                    data: {
                                        code: a,
                                        encrypted_data: r,
                                        iv: o,
                                        app_name: l.config.wxAppid
                                    },
                                    success: function(e) {
                                        console.log("parse share info succeeded", e), t(e.data.info.openGId);
                                    },
                                    fail: function(e) {
                                        (0, s.errorReporter)("parse share info failed", e), n(e);
                                    }
                                });
                            },
                            fail: n
                        });
                    });

                  case 5:
                    return o = t.sent, t.abrupt("return", o);

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    },
    getContextPage: function() {
        return getCurrentPages().pop();
    }
});