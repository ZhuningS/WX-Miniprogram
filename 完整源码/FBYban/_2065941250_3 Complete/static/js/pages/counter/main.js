(function() {
    global.webpackJsonp([ 4 ], {
        116: function() {},
        132: function(a, b) {
            "use strict";
            var c = function() {
                var a = this, b = a.$createElement, c = a._self._c || b;
                return c("div", {
                    staticClass: "counter-warp"
                }, [ c("p", [ a._v("Vuex counter：" + a._s(a.count)) ]), a._v(" "), c("p", [ c("button", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: a.increment
                    }
                }, [ a._v("+") ]), a._v(" "), c("button", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: a.decrement
                    }
                }, [ a._v("-") ]) ], 1), a._v(" "), c("a", {
                    staticClass: "home",
                    attrs: {
                        href: "/pages/index/main"
                    }
                }, [ a._v("去往首页") ]) ], 1);
            };
            c._withStripped = !0;
            b.a = {
                render: c,
                staticRenderFns: []
            }, !1;
        },
        53: function(a, b, c) {
            "use strict";
            var d = c(74), e = c(132), f = c(1), g = f(d.a, e.a, function() {
                !1 || c(116);
            }, null, null);
            g.options.__file = "src/pages/counter/index.vue", g.esModule && Object.keys(g.esModule).some(function(a) {
                return "default" !== a && "__" !== a.substr(0, 2);
            }) && console.error("named exports are not supported in *.vue files."), g.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
            !1, b.a = g.exports;
        },
        60: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var d = c(0), e = c.n(d), f = c(53), g = new e.a(f.a);
            g.$mount();
        },
        61: function(a, b, c) {
            "use strict";
            var d = c(0), e = c.n(d), f = c(144);
            e.a.use(f.a);
            var g = new f.a.Store({
                state: {
                    count: 0
                },
                mutations: {
                    increment: function(a) {
                        a.count += 1;
                    },
                    decrement: function(a) {
                        a.count -= 1;
                    }
                }
            });
            b.a = g;
        },
        74: function(a, b, c) {
            "use strict";
            var d = c(61);
            b.a = {
                computed: {
                    count: function() {
                        return d.a.state.count;
                    }
                },
                methods: {
                    increment: function() {
                        d.a.commit("increment");
                    },
                    decrement: function() {
                        d.a.commit("decrement");
                    }
                }
            };
        }
    }, [ 60 ]);
})();