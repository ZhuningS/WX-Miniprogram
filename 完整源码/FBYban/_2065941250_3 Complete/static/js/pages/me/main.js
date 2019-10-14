(function() {
    global.webpackJsonp([ 1 ], {
        113: function() {},
        114: function() {},
        128: function(a, b, c) {
            "use strict";
            var d = c(71), e = c(130), f = c(1), g = f(d.a, e.a, function() {
                !1 || c(114);
            }, null, null);
            g.options.__file = "src/components/YearProgress.vue", g.esModule && Object.keys(g.esModule).some(function(a) {
                return "default" !== a && "__" !== a.substr(0, 2);
            }) && console.error("named exports are not supported in *.vue files."), g.options.functional && console.error("[vue-loader] YearProgress.vue: functional components are not supported with templates, they should use render functions."), 
            !1, b.a = g.exports;
        },
        129: function(a, b) {
            "use strict";
            var c = function() {
                var a = this, b = a.$createElement, c = a._self._c || b;
                return c("div", {
                    staticClass: "container"
                }, [ c("div", {
                    staticClass: "userinfo",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: a.login
                    }
                }, [ c("img", {
                    staticClass: "userinfo-avatar",
                    attrs: {
                        src: a.userinfo.avatarUrl,
                        alt: ""
                    }
                }), a._v(" "), c("p", {
                    staticClass: "userinfo-nickname"
                }, [ a._v(a._s(a.userinfo.nickName)) ]) ], 1), a._v(" "), c("YearProgress", {
                    attrs: {
                        mpcomid: "0"
                    }
                }), a._v(" "), a.userinfo.openId ? c("button", {
                    staticClass: "btn btn-addbook",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: a.scanBook
                    }
                }, [ a._v("\n      添加图书\n    ") ]) : a._e() ], 1);
            };
            c._withStripped = !0;
            b.a = {
                render: c,
                staticRenderFns: []
            }, !1;
        },
        130: function(a, b) {
            "use strict";
            var c = function() {
                var a = this, b = a.$createElement, c = a._self._c || b;
                return c("div", {
                    staticClass: "progressbar"
                }, [ c("progress", {
                    attrs: {
                        percent: a.percent,
                        activeColor: "#EA5A49",
                        active: ""
                    }
                }), a._v(" "), c("p", [ a._v("\n    " + a._s(a.year) + "已经过去\n    "), c("span", {
                    staticClass: "text-primary"
                }, [ a._v(a._s(a.days)) ]), a._v("\n    天,\n    "), c("span", {
                    staticClass: "text-primary"
                }, [ a._v(a._s(a.percent)) ]), a._v("\n    %\n  ") ]) ], 1);
            };
            c._withStripped = !0;
            b.a = {
                render: c,
                staticRenderFns: []
            }, !1;
        },
        55: function(a, b, c) {
            "use strict";
            var d = c(76), e = c(129), f = c(1), g = f(d.a, e.a, function() {
                !1 || c(113);
            }, null, null);
            g.options.__file = "src/pages/me/Me.vue", g.esModule && Object.keys(g.esModule).some(function(a) {
                return "default" !== a && "__" !== a.substr(0, 2);
            }) && console.error("named exports are not supported in *.vue files."), g.options.functional && console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions."), 
            !1, b.a = g.exports;
        },
        63: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var d = c(0), e = c.n(d), f = c(55), g = new e.a(f.a);
            g.$mount(), b["default"] = {
                config: {
                    navigationBarTitleText: "我"
                }
            };
        },
        71: function(a, b) {
            "use strict";
            b.a = {
                data: function() {
                    return {};
                },
                methods: {
                    isYeapYear: function() {
                        var a = new Date().getFullYear();
                        return !(0 != a % 400) || 0 == a % 4 && 0 != a % 100;
                    },
                    getDayOfYear: function() {
                        return this.isYeapYear() ? 366 : 365;
                    }
                },
                computed: {
                    year: function() {
                        return new Date().getFullYear();
                    },
                    percent: function() {
                        return (100 * this.days / this.getDayOfYear()).toFixed(1);
                    },
                    days: function() {
                        var a = new Date();
                        a.setMonth(0), a.setDate(1);
                        var b = (new Date().getTime() - a.getTime()) / 1e3 / 3600 / 24;
                        return parseInt(b) + 1;
                    }
                }
            };
        },
        76: function(a, b, c) {
            "use strict";
            var d = c(12), e = c.n(d), f = c(11), g = c.n(f), h = c(128), i = c(145), j = c.n(i), k = c(28), l = c(7);
            b.a = {
                components: {
                    YearProgress: h.a
                },
                data: function() {
                    return {
                        userinfo: {
                            avatarUrl: "../../../static/unlogin.png",
                            nickName: "点击登录"
                        }
                    };
                },
                created: function() {
                    var a = this;
                    return g()(e.a.mark(function b() {
                        var c;
                        return e.a.wrap(function(b) {
                            for (;;) switch (b.prev = b.next) {
                              case 0:
                                c = wx.getStorageSync("userinfo"), c && (a.userinfo = c);

                              case 2:
                              case "end":
                                return b.stop();
                            }
                        }, b, a);
                    }))();
                },
                methods: {
                    login: function() {
                        var a = this;
                        c.i(l.b)("登录中"), j.a.setLoginUrl(k.a.service.loginUrl), j.a.login({
                            success: function() {
                                j.a.request({
                                    url: k.a.service.requestUrl,
                                    login: !0,
                                    success: function(b) {
                                        c.i(l.c)("登录成功"), a.userinfo = b.data.data, console.log(a.userinfo), wx.setStorageSync("userinfo", b.data.data);
                                    },
                                    fail: function(a) {
                                        c.i(l.a)("请求失败", a), console.log("request fail", a);
                                    }
                                });
                            },
                            fail: function(a) {
                                c.i(l.a)("登录失败", a), console.log("登录失败", a);
                            }
                        });
                    },
                    addBook: function(a) {
                        var b = this;
                        return g()(e.a.mark(function d() {
                            var f;
                            return e.a.wrap(function(d) {
                                for (;;) switch (d.prev = d.next) {
                                  case 0:
                                    return d.next = 2, c.i(l.d)("/weapp/addbook", {
                                        isbn: a,
                                        openid: b.userinfo.openId
                                    });

                                  case 2:
                                    f = d.sent, c.i(l.a)("添加成功", f.title + "添加成功");

                                  case 4:
                                  case "end":
                                    return d.stop();
                                }
                            }, d, b);
                        }))();
                    },
                    scanBook: function() {
                        var a = this;
                        wx.scanCode({
                            success: function(b) {
                                b.result && a.addBook(b.result);
                            }
                        });
                    }
                }
            };
        }
    }, [ 63 ]);
})();