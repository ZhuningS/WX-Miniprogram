(function() {
    global.webpackJsonp([ 6 ], {
        115: function() {},
        131: function(a, b) {
            "use strict";
            var c = function() {
                var a = this, b = a.$createElement, c = a._self._c || b;
                return c("div", {
                    staticClass: "container"
                }, [ a.userinfo.openId ? c("CommentList", {
                    attrs: {
                        type: "user",
                        comments: a.comments,
                        mpcomid: "0"
                    }
                }) : a._e(), a._v(" "), a.userinfo.openId ? c("div", [ c("div", {
                    staticClass: "page-title"
                }, [ a._v("我的图书") ]), a._v(" "), a._l(a.books, function(a, b) {
                    return c("Card", {
                        key: a.id,
                        attrs: {
                            book: a,
                            mpcomid: "1-" + b
                        }
                    });
                }), a._v(" "), a.books.length ? a._e() : c("div", {
                    staticClass: "page-content"
                }, [ a._v("暂时还没添加图书，快去添加几本吧") ]) ], 2) : c("div", {
                    staticClass: "text-footer"
                }, [ a._v("\n    需要登录，才能看到自己的评论和图书信息\n  ") ]) ], 1);
            };
            c._withStripped = !0;
            b.a = {
                render: c,
                staticRenderFns: []
            }, !1;
        },
        52: function(a, b, c) {
            "use strict";
            var d = c(73), e = c(131), f = c(1), g = f(d.a, e.a, function() {
                !1 || c(115);
            }, null, null);
            g.options.__file = "src/pages/comment/Comment.vue", g.esModule && Object.keys(g.esModule).some(function(a) {
                return "default" !== a && "__" !== a.substr(0, 2);
            }) && console.error("named exports are not supported in *.vue files."), g.options.functional && console.error("[vue-loader] Comment.vue: functional components are not supported with templates, they should use render functions."), 
            !1, b.a = g.exports;
        },
        59: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var d = c(0), e = c.n(d), f = c(52), g = new e.a(f.a);
            g.$mount(), b["default"] = {
                config: {
                    navigationBarTitleText: "图书评论列表",
                    enablePullDownRefresh: !0
                }
            };
        },
        73: function(a, b, c) {
            "use strict";
            var d = c(12), e = c.n(d), f = c(11), g = c.n(f), h = c(7), i = c(45), j = c(44);
            b.a = {
                data: function() {
                    return {
                        userinfo: {},
                        comments: [],
                        books: []
                    };
                },
                components: {
                    CommentList: i.a,
                    Card: j.a
                },
                methods: {
                    getComments: function() {
                        var a = this;
                        return g()(e.a.mark(function b() {
                            var d;
                            return e.a.wrap(function(b) {
                                for (;;) switch (b.prev = b.next) {
                                  case 0:
                                    return b.next = 2, c.i(h.e)("/weapp/commentuser", {
                                        openid: a.userinfo.openId
                                    });

                                  case 2:
                                    d = b.sent, a.comments = d.list;

                                  case 4:
                                  case "end":
                                    return b.stop();
                                }
                            }, b, a);
                        }))();
                    },
                    getBooks: function() {
                        var a = this;
                        return g()(e.a.mark(function b() {
                            var d;
                            return e.a.wrap(function(b) {
                                for (;;) switch (b.prev = b.next) {
                                  case 0:
                                    return b.next = 2, c.i(h.e)("/weapp/booklist", {
                                        openid: a.userinfo.openId
                                    });

                                  case 2:
                                    d = b.sent, a.books = d.list;

                                  case 4:
                                  case "end":
                                    return b.stop();
                                }
                            }, b, a);
                        }))();
                    },
                    init: function() {
                        wx.showNavigationBarLoading(), this.getComments(), this.getBooks(), wx.hideNavigationBarLoading();
                    }
                },
                onPullDownRefresh: function() {
                    this.init(), wx.stopPullDownRefresh();
                },
                onShow: function() {
                    if (!this.userinfo.openId) {
                        var a = wx.getStorageSync("userinfo");
                        a && (this.userinfo = a, this.init());
                    }
                },
                mounted: function() {}
            };
        }
    }, [ 59 ]);
})();