(function() {
    global.webpackJsonp([ 7 ], {
        123: function() {},
        50: function(a, b, c) {
            "use strict";
            var d = c(65), e = c(1), f = e(d.a, null, function() {
                !1 || c(123);
            }, null, null);
            f.options.__file = "src/App.vue", f.esModule && Object.keys(f.esModule).some(function(a) {
                return "default" !== a && "__" !== a.substr(0, 2);
            }) && console.error("named exports are not supported in *.vue files."), !1, b.a = f.exports;
        },
        57: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var d = c(0), e = c.n(d), f = c(50);
            e.a.config.productionTip = !1, f.a.mpType = "app";
            var g = new e.a(f.a);
            g.$mount(), b["default"] = {
                config: {
                    pages: [ "^pages/book/main" ],
                    window: {
                        backgroundTextStyle: "light",
                        backgroundColor: "#EA5A49",
                        navigationBarBackgroundColor: "#EA5A49",
                        backgroundColorBottom: "#ffffff",
                        navigationBarTitleText: "蜗牛图书",
                        navigationBarTextStyle: "light"
                    },
                    tabBar: {
                        selectedColor: "#EA5A49",
                        list: [ {
                            pagePath: "pages/book/main",
                            text: "图书",
                            iconPath: "static/book.png",
                            selectedIconPath: "static/book-active.png"
                        }, {
                            pagePath: "pages/comment/main",
                            text: "评论",
                            iconPath: "static/comment.png",
                            selectedIconPath: "static/comment-active.png"
                        }, {
                            pagePath: "pages/me/main",
                            text: "我",
                            iconPath: "static/me.png",
                            selectedIconPath: "static/me-active.png"
                        } ]
                    }
                }
            };
        },
        65: function(a, b) {
            "use strict";
            b.a = {
                created: function() {
                    var a = wx.getStorageSync("userinfo");
                    if (a) return !1;
                }
            };
        }
    }, [ 57 ]);
})();