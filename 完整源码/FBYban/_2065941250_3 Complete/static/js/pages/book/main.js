(function() {
    global.webpackJsonp([ 3 ], {
        119: function() {},
        120: function() {},
        127: function(a, b, c) {
            "use strict";
            var d = c(70), e = c(136), f = c(1), g = f(d.a, e.a, function() {
                !1 || c(120);
            }, "data-v-6483ab36", null);
            g.options.__file = "src/components/TopSwiper.vue", g.esModule && Object.keys(g.esModule).some(function(a) {
                return "default" !== a && "__" !== a.substr(0, 2);
            }) && console.error("named exports are not supported in *.vue files."), g.options.functional && console.error("[vue-loader] TopSwiper.vue: functional components are not supported with templates, they should use render functions."), 
            !1, b.a = g.exports;
        },
        135: function(a, b) {
            "use strict";
            var c = function() {
                var a = this, b = a.$createElement, c = a._self._c || b;
                return c("div", {
                    staticClass: "container"
                }, [ c("TopSwiper", {
                    attrs: {
                        tops: a.tops,
                        mpcomid: "0"
                    }
                }), a._v(" "), a._l(a.books, function(a, b) {
                    return c("Card", {
                        key: a.id,
                        attrs: {
                            book: a,
                            mpcomid: "1-" + b
                        }
                    });
                }), a._v(" "), a.more ? a._e() : c("p", {
                    staticClass: "text-footer"
                }, [ a._v("\n    无更多数据\n  ") ]) ], 2);
            };
            c._withStripped = !0;
            b.a = {
                render: c,
                staticRenderFns: []
            }, !1;
        },
        136: function(a, b) {
            "use strict";
            var c = function() {
                var a = this, b = a.$createElement, c = a._self._c || b;
                return c("div", {
                    staticClass: "swiper"
                }, [ c("swiper", {
                    attrs: {
                        "indicator-dots": !0,
                        autoplay: !0,
                        interval: 5e3,
                        duration: 1e3,
                        circular: !0,
                        "indicator-active-color": "#EA5A49"
                    }
                }, a._l(a.imgUrls, function(b, d) {
                    return c("div", {
                        key: d
                    }, [ c("swiper-item", {
                        attrs: {
                            mpcomid: "0-" + d
                        }
                    }, a._l(b, function(b, e) {
                        return c("img", {
                            key: b.id,
                            staticClass: "slide-image",
                            attrs: {
                                src: b.image,
                                mode: "aspectFit",
                                eventid: "0-" + d + "-" + e
                            },
                            on: {
                                click: function() {
                                    a.bookDetal(b);
                                }
                            }
                        });
                    })) ], 1);
                })) ], 1);
            };
            c._withStripped = !0;
            b.a = {
                render: c,
                staticRenderFns: []
            }, !1;
        },
        51: function(a, b, c) {
            "use strict";
            var d = c(72), e = c(135), f = c(1), g = f(d.a, e.a, function() {
                !1 || c(119);
            }, null, null);
            g.options.__file = "src/pages/book/Book.vue", g.esModule && Object.keys(g.esModule).some(function(a) {
                return "default" !== a && "__" !== a.substr(0, 2);
            }) && console.error("named exports are not supported in *.vue files."), g.options.functional && console.error("[vue-loader] Book.vue: functional components are not supported with templates, they should use render functions."), 
            !1, b.a = g.exports;
        },
        58: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var d = c(0), e = c.n(d), f = c(51), g = new e.a(f.a);
            g.$mount(), b["default"] = {
                config: {
                    enablePullDownRefresh: !0
                }
            };
        },
        70: function(a, b, c) {
            "use strict";
            var d = c(78), e = c.n(d);
            b.a = {
                props: [ "tops" ],
                computed: {
                    imgUrls: function() {
                        return e()(this.tops, 3);
                    }
                },
                methods: {
                    bookDetal: function(a) {
                        wx.navigateTo({
                            url: "/pages/detail/main?id=" + a.id
                        });
                    }
                }
            };
        },
        72: function(a, b, c) {
            "use strict";
            var d = c(12), e = c.n(d), f = c(11), g = c.n(f), h = c(7), i = c(44), j = c(127);
            b.a = {
                components: {
                    Card: i.a,
                    TopSwiper: j.a
                },
                data: function() {
                    return {
                        books: [],
                        tops: [],
                        page: 0,
                        more: !0
                    };
                },
                methods: {
                    getList: function(a) {
                        var b = this;
                        return g()(e.a.mark(function d() {
                            var f;
                            return e.a.wrap(function(d) {
                                for (;;) switch (d.prev = d.next) {
                                  case 0:
                                    return wx.showNavigationBarLoading(), a && (b.more = !0, b.page = 0), d.next = 4, 
                                    c.i(h.e)("/weapp/booklist", {
                                        page: b.page
                                    });

                                  case 4:
                                    f = d.sent, 10 > f.list.length && 0 < b.page && (b.more = !1), a ? (b.books = f.list, 
                                    wx.stopPullDownRefresh()) : b.books = b.books.concat(f.list), wx.hideNavigationBarLoading();

                                  case 8:
                                  case "end":
                                    return d.stop();
                                }
                            }, d, b);
                        }))();
                    },
                    getTop: function() {
                        var a = this;
                        return g()(e.a.mark(function b() {
                            var d;
                            return e.a.wrap(function(b) {
                                for (;;) switch (b.prev = b.next) {
                                  case 0:
                                    return b.next = 2, c.i(h.e)("/weapp/top");

                                  case 2:
                                    d = b.sent, a.tops = d.list;

                                  case 4:
                                  case "end":
                                    return b.stop();
                                }
                            }, b, a);
                        }))();
                    }
                },
                onPullDownRefresh: function() {
                    this.getList(!0), this.getTop();
                },
                onReachBottom: function() {
                    this.more && (++this.page, this.getList());
                },
                mounted: function() {
                    var a = this;
                    return g()(e.a.mark(function b() {
                        return e.a.wrap(function(b) {
                            for (;;) switch (b.prev = b.next) {
                              case 0:
                                a.getList(!0), a.getTop();

                              case 2:
                              case "end":
                                return b.stop();
                            }
                        }, b, a);
                    }))();
                }
            };
        }
    }, [ 58 ]);
})();