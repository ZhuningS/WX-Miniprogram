function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, s) {
                try {
                    var u = t[a](s), o = u.value;
                } catch (e) {
                    return void r(e);
                }
                if (!u.done) return Promise.resolve(o).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(o);
            }
            return n("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy);

require("./npm/wepy-async-function/index.js");

var _api = require("./utils/api.js"), _api2 = _interopRequireDefault(_api), _default = function(e) {
    function t() {
        _classCallCheck(this, t);
        var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.config = {
            pages: [ "pages/topics/index", "pages/topics/show", "pages/topics/userIndex", "pages/users/me", "pages/users/edit", "pages/users/show", "pages/auth/login", "pages/auth/register", "pages/replies/index", "pages/replies/userIndex", "pages/replies/create", "pages/notifications/index" ],
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#fff",
                navigationBarTitleText: "LaraBBS",
                navigationBarTextStyle: "black"
            },
            tabBar: {
                list: [ {
                    pagePath: "pages/topics/index",
                    text: "首页",
                    iconPath: "images/index.png",
                    selectedIconPath: "images/index_selected.png"
                }, {
                    pagePath: "pages/users/me",
                    text: "我的",
                    iconPath: "images/user.png",
                    selectedIconPath: "images/user_selected.png"
                } ],
                color: "#707070",
                selectedColor: "#00b5ad"
            }
        }, e.globalData = {
            refreshPages: [],
            unreadCount: 0
        }, e.use("requestfix"), e.use("promisify"), e;
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getCurrentUser",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.checkLogin()) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", null);

                      case 2:
                        if (t = _wepy2.default.getStorageSync("user"), e.prev = 3, t) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 7, _api2.default.authRequest("user");

                      case 7:
                        r = e.sent, 200 === r.statusCode && (t = r.data, _wepy2.default.setStorageSync("user", t));

                      case 9:
                        e.next = 15;
                        break;

                      case 11:
                        e.prev = 11, e.t0 = e.catch(3), console.log(e.t0), _wepy2.default.showModal({
                            title: "提示",
                            content: "服务器错误，请联系管理员"
                        });

                      case 15:
                        return e.abrupt("return", t);

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 3, 11 ] ]);
            }));
            return e;
        }()
    }, {
        key: "checkLogin",
        value: function() {
            return "" !== _wepy2.default.getStorageSync("access_token");
        }
    } ]), _createClass(t, [ {
        key: "checkRefreshPages",
        value: function(e, t) {
            var r = this.globalData.refreshPages.indexOf(e);
            -1 !== r && (this.globalData.refreshPages.splice(r, 1), t && t());
        }
    }, {
        key: "onLaunch",
        value: function() {
            var e = this;
            this.updateUnreadCount(), setInterval(function() {
                e.updateUnreadCount();
            }, 6e4), this.getPerms();
        }
    }, {
        key: "getPerms",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = [], this.checkLogin()) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return", t);

                      case 3:
                        return e.prev = 3, e.next = 6, _api2.default.authRequest("user/permissions", !1);

                      case 6:
                        r = e.sent, 200 === r.statusCode && (t = r.data.data, _wepy2.default.setStorageSync("perms", t)), 
                        e.next = 14;
                        break;

                      case 10:
                        e.prev = 10, e.t0 = e.catch(3), console.log(e.t0), _wepy2.default.showModal({
                            title: "提示",
                            content: "获取用户权限失败，可尝试重启小程序"
                        });

                      case 14:
                        return e.abrupt("return", t);

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 3, 10 ] ]);
            }));
            return e;
        }()
    }, {
        key: "updateUnreadCount",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.checkLogin()) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        return e.next = 4, _api2.default.authRequest("user/notifications/stats", !1);

                      case 4:
                        t = e.sent, 200 === t.statusCode && (this.globalData.unreadCount = t.data.unread_count);

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "can",
        value: function(e) {
            return !!this.checkLogin() && !!(_wepy2.default.getStorageSync("perms") || []).find(function(t) {
                return t.name === e;
            });
        }
    } ]), t;
}(_wepy2.default.app);

App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default, {
    noPromiseAPI: [ "createSelectorQuery" ]
}));