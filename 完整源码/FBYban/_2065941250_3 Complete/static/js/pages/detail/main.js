(function() {
    global.webpackJsonp([ 2 ], {
        117: function() {},
        124: function() {},
        126: function(a, b, c) {
            "use strict";
            var d = c(66), e = c(133), f = c(1), g = f(d.a, e.a, function() {
                !1 || c(117);
            }, null, null);
            g.options.__file = "src/components/BookInfo.vue", g.esModule && Object.keys(g.esModule).some(function(a) {
                return "default" !== a && "__" !== a.substr(0, 2);
            }) && console.error("named exports are not supported in *.vue files."), g.options.functional && console.error("[vue-loader] BookInfo.vue: functional components are not supported with templates, they should use render functions."), 
            !1, b.a = g.exports;
        },
        133: function(a, b) {
            "use strict";
            var c = function() {
                var a = this, b = a.$createElement, c = a._self._c || b;
                return c("div", {
                    staticClass: "bookinfo"
                }, [ c("div", {
                    staticClass: "thumb"
                }, [ c("img", {
                    staticClass: "back",
                    attrs: {
                        src: a.info.image,
                        mode: "aspectFill"
                    }
                }), a._v(" "), c("img", {
                    staticClass: "img",
                    attrs: {
                        src: a.info.image,
                        mode: "aspectFit"
                    }
                }), a._v(" "), c("div", {
                    staticClass: "info"
                }, [ c("div", {
                    staticClass: "title"
                }, [ a._v("\n        " + a._s(a.info.title) + "\n\n      ") ]), a._v(" "), c("div", {
                    staticClass: "author"
                }, [ a._v("\n        " + a._s(a.info.author) + "\n      ") ]) ]) ]), a._v(" "), c("div", {
                    staticClass: "owner"
                }, [ c("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: a.userinfo.avatarUrl,
                        mode: "aspectFit"
                    }
                }), a._v("\n\n    " + a._s(a.userinfo.nickName) + "\n\n     "), c("div", {
                    staticClass: "right"
                }, [ a._v("\n          " + a._s(2 * a.info.rate) + "分"), c("Rate", {
                    attrs: {
                        value: a.info.rate,
                        mpcomid: "0"
                    }
                }) ], 1) ]), a._v(" "), c("div", {
                    staticClass: "detail"
                }, [ a._v("\n      出版社:" + a._s(a.info.publisher) + "\n    "), c("div", {
                    staticClass: "right"
                }, [ a._v("\n      " + a._s(a.info.price) + "\n    ") ]) ]), a._v(" "), c("div", {
                    staticClass: "tag"
                }, a._l(a.info.tags, function(b) {
                    return c("div", {
                        key: b,
                        staticClass: "badge"
                    }, [ a._v(a._s(b)) ]);
                })), a._v(" "), c("div", {
                    staticClass: "summary"
                }, a._l(a.info.summary, function(b, d) {
                    return c("p", {
                        key: d
                    }, [ a._v("\n      " + a._s(b) + "\n    ") ]);
                })) ]);
            };
            c._withStripped = !0;
            b.a = {
                render: c,
                staticRenderFns: []
            }, !1;
        },
        139: function(a, b) {
            "use strict";
            var c = function() {
                var a = this, b = a.$createElement, c = a._self._c || b;
                return c("div", {
                    staticClass: "container"
                }, [ c("BookInfo", {
                    attrs: {
                        info: a.info,
                        mpcomid: "0"
                    }
                }), a._v(" "), c("CommentList", {
                    attrs: {
                        type: "book",
                        comments: a.comments,
                        mpcomid: "1"
                    }
                }), a._v(" "), c("div", {
                    staticClass: "text-footer text-primary"
                }, [ a._v("\n    评论模块个人帐号无权限开通，暂时关闭演示，正在申请企业资质 \n  ") ]), a._v(" "), a._e(), a._v(" "), a._e(), a._v(" "), c("button", {
                    staticClass: "btn",
                    attrs: {
                        "open-type": "share"
                    }
                }, [ a._v("转发给好友") ]), a._v(" "), c("button", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: a.bookList
                    }
                }, [ a._v("返回列表") ]) ], 1);
            };
            c._withStripped = !0;
            b.a = {
                render: c,
                staticRenderFns: []
            }, !1;
        },
        54: function(a, b, c) {
            "use strict";
            var d = c(75), e = c(139), f = c(1), g = f(d.a, e.a, function() {
                !1 || c(124);
            }, null, null);
            g.options.__file = "src/pages/detail/Detail.vue", g.esModule && Object.keys(g.esModule).some(function(a) {
                return "default" !== a && "__" !== a.substr(0, 2);
            }) && console.error("named exports are not supported in *.vue files."), g.options.functional && console.error("[vue-loader] Detail.vue: functional components are not supported with templates, they should use render functions."), 
            !1, b.a = g.exports;
        },
        62: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var d = c(0), e = c.n(d), f = c(54), g = new e.a(f.a);
            g.$mount(), b["default"] = {
                config: {
                    enablePullDownRefresh: !1
                }
            };
        },
        66: function(a, b, c) {
            "use strict";
            var d = c(46);
            b.a = {
                components: {
                    Rate: d.a
                },
                props: [ "info" ],
                computed: {
                    userinfo: function() {
                        return this.info.user_info || {};
                    }
                }
            };
        },
        75: function(a, b, c) {
            "use strict";
            var d = c(12), e = c.n(d), f = c(11), g = c.n(f), h = c(7), i = c(126), j = c(45);
            b.a = {
                components: {
                    BookInfo: i.a,
                    CommentList: j.a
                },
                data: function() {
                    return {
                        bookid: "",
                        info: {},
                        comment: "",
                        phone: "",
                        location: "",
                        userinfo: {},
                        comments: []
                    };
                },
                computed: {
                    showAdd: function() {
                        var a = this;
                        return !!this.userinfo.openId && !this.comments.filter(function(b) {
                            return b.openid === a.userinfo.openId;
                        }).length;
                    }
                },
                methods: {
                    getDetail: function() {
                        var a = this;
                        return g()(e.a.mark(function b() {
                            var d;
                            return e.a.wrap(function(b) {
                                for (;;) switch (b.prev = b.next) {
                                  case 0:
                                    return b.next = 2, c.i(h.e)("/weapp/bookdetail", {
                                        id: a.bookid
                                    });

                                  case 2:
                                    d = b.sent, wx.setNavigationBarTitle({
                                        title: d.title
                                    }), a.info = d;

                                  case 5:
                                  case "end":
                                    return b.stop();
                                }
                            }, b, a);
                        }))();
                    },
                    bookList: function() {
                        wx.switchTab({
                            url: "/pages/book/main"
                        });
                    },
                    addComment: function() {
                        var a = this;
                        return g()(e.a.mark(function b() {
                            var d;
                            return e.a.wrap(function(b) {
                                for (;;) switch (b.prev = b.next) {
                                  case 0:
                                    if (a.comment) {
                                        b.next = 2;
                                        break;
                                    }
                                    return b.abrupt("return");

                                  case 2:
                                    return d = {
                                        bookid: a.bookid,
                                        openid: a.userinfo.openId,
                                        comment: a.comment,
                                        phone: a.phone,
                                        location: a.location
                                    }, b.prev = 3, b.next = 6, c.i(h.d)("/weapp/addcomment", d);

                                  case 6:
                                    a.getComments(), a.comment = "", b.next = 13;
                                    break;

                                  case 10:
                                    b.prev = 10, b.t0 = b["catch"](3), c.i(h.a)("失败", b.t0.msg);

                                  case 13:
                                  case "end":
                                    return b.stop();
                                }
                            }, b, a, [ [ 3, 10 ] ]);
                        }))();
                    },
                    getComments: function() {
                        var a = this;
                        return g()(e.a.mark(function b() {
                            var d;
                            return e.a.wrap(function(b) {
                                for (;;) switch (b.prev = b.next) {
                                  case 0:
                                    return b.next = 2, c.i(h.e)("/weapp/commentlist", {
                                        bookid: a.bookid
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
                    getGeo: function(a) {
                        var b = this;
                        a.target.value ? wx.getLocation({
                            success: function(a) {
                                wx.request({
                                    url: "http://api.map.baidu.com/geocoder/v2/",
                                    data: {
                                        location: a.latitude + "," + a.longitude,
                                        output: "json",
                                        ak: "ZkrfcdfnUtotFdHn0r41FKwPGwNDM58b"
                                    },
                                    success: function(a) {
                                        0 === a.data.status ? b.location = a.data.result.addressComponent.city : c.i(h.a)("出错了", a.data.msg);
                                    }
                                });
                            }
                        }) : this.location = "";
                    },
                    getPhone: function(a) {
                        if (a.target.value) {
                            var b = wx.getSystemInfoSync();
                            this.phone = b.model.split("<")[0];
                        } else this.phone = "";
                    }
                },
                mounted: function() {
                    this.bookid = this.$root.$mp.query.id, this.getDetail();
                    var a = wx.getStorageSync("userinfo");
                    a && (this.userinfo = a, this.getComments());
                }
            };
        }
    }, [ 62 ]);
})();