(function() {
    global.webpackJsonp([ 6 ], {
        119: function() {},
        132: function(a, b) {
            "use strict";
            var c = function() {
                var a = this, b = a.$createElement, c = a._self._c || b;
                return c("div", {
                    staticClass: "container",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(b) {
                            a.clickHandle("test click", b);
                        }
                    }
                }, [ c("div", {
                    staticClass: "userinfo",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: a.bindViewTap
                    }
                }, [ a.userInfo.avatarUrl ? c("img", {
                    staticClass: "userinfo-avatar",
                    attrs: {
                        src: a.userInfo.avatarUrl,
                        "background-size": "cover"
                    }
                }) : a._e(), a._v(" "), c("div", {
                    staticClass: "userinfo-nickname"
                }, [ c("card", {
                    attrs: {
                        text: a.userInfo.nickName,
                        mpcomid: "0"
                    }
                }) ], 1) ]), a._v(" "), c("div", {
                    staticClass: "usermotto"
                }, [ c("div", {
                    staticClass: "user-motto"
                }, [ c("card", {
                    attrs: {
                        text: a.motto,
                        mpcomid: "1"
                    }
                }) ], 1) ]), a._v(" "), c("form", {
                    staticClass: "form-container"
                }, [ c("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: a.motto,
                        expression: "motto"
                    } ],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "v-model",
                        eventid: "1"
                    },
                    domProps: {
                        value: a.motto
                    },
                    on: {
                        input: function(b) {
                            b.target.composing || (a.motto = b.target.value);
                        }
                    }
                }), a._v(" "), c("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model.lazy",
                        value: a.motto,
                        expression: "motto",
                        modifiers: {
                            lazy: !0
                        }
                    } ],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "v-model.lazy",
                        eventid: "2"
                    },
                    domProps: {
                        value: a.motto
                    },
                    on: {
                        change: function(b) {
                            a.motto = b.target.value;
                        }
                    }
                }) ]), a._v(" "), c("a", {
                    staticClass: "counter",
                    attrs: {
                        href: "/pages/counter/main"
                    }
                }, [ a._v("去往Vuex示例页面") ]) ], 1);
            };
            c._withStripped = !0;
            b.a = {
                render: c,
                staticRenderFns: []
            }, !1;
        },
        53: function(a, b, c) {
            "use strict";
            var d = c(73), e = c(132), f = c(3), g = f(d.a, e.a, function() {
                !1 || c(119);
            }, "data-v-aab465d0", null);
            g.options.__file = "src/pages/index/index.vue", g.esModule && Object.keys(g.esModule).some(function(a) {
                return "default" !== a && "__" !== a.substr(0, 2);
            }) && console.error("named exports are not supported in *.vue files."), g.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
            !1, b.a = g.exports;
        },
        62: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var d = c(0), e = c.n(d), f = c(53), g = new e.a(f.a);
            g.$mount();
        },
        73: function(a, b) {
            "use strict";
            b.a = {
                data: function() {
                    return {
                        motto: "Hello World",
                        userInfo: {}
                    };
                },
                components: {},
                methods: {
                    bindViewTap: function() {
                        wx.navigateTo({
                            url: "../logs/main"
                        });
                    },
                    getUserInfo: function() {
                        var a = this;
                        wx.login({
                            success: function() {
                                wx.getUserInfo({
                                    success: function(b) {
                                        a.userInfo = b.userInfo;
                                    }
                                });
                            }
                        });
                    },
                    clickHandle: function(a, b) {
                        console.log("clickHandle:", a, b);
                    }
                },
                created: function() {
                    this.getUserInfo();
                }
            };
        }
    }, [ 62 ]);
})();