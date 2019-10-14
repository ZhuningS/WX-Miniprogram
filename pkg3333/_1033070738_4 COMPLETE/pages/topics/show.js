function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var i = t[a](o), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _util = require("./../../utils/util.js"), _util2 = _interopRequireDefault(_util), TopicShow = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "话题详情"
        }, n.data = {
            topic: null,
            user: null
        }, n.computed = {
            canDelete: function() {
                return !(!this.topic || !this.user) && (this.user.id === this.topic.user_id || this.$parent.can("manage_contents"));
            }
        }, n.methods = {
            deleteTopic: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, r, n, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _wepy2.default.showModal({
                                title: "确认删除",
                                content: "您确认删除该话题吗",
                                confirmText: "删除",
                                cancelText: "取消"
                            });

                          case 2:
                            if (t = e.sent, t.confirm) {
                                e.next = 5;
                                break;
                            }
                            return e.abrupt("return");

                          case 5:
                            return e.next = 7, _api2.default.authRequest({
                                url: "topics/" + this.topic.id,
                                method: "DELETE"
                            });

                          case 7:
                            r = e.sent, 204 === r.statusCode && (_wepy2.default.showToast({
                                title: "删除成功",
                                icon: "success"
                            }), n = this.getCurrentPages(), n.length > 1 && (a = [], n.forEach(function(e) {
                                "pages/topics/index" !== e.route && "pages/topics/userIndex" !== e.route || a.push(e.route);
                            }), this.$parent.globalData.refreshPages = this.$parent.globalData.refreshPages.concat(a), 
                            this.$apply()), setTimeout(function() {
                                _wepy2.default.navigateBack();
                            }, 2e3));

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getTopic",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _api2.default.request({
                            url: "topics/" + t,
                            data: {
                                include: "user,category,topReplies.user"
                            }
                        });

                      case 3:
                        return r = e.sent, 200 === r.statusCode && (n = r.data, n.updated_at_diff = _util2.default.diffForHumans(n.updated_at), 
                        n.topReplies.data.forEach(function(e) {
                            e.created_at_diff = _util2.default.diffForHumans(e.created_at);
                        }), this.topic = n, this.$apply()), 404 === r.statusCode && (this.$parent.global.topicRefresh = !0, 
                        _wepy2.default.navigateBack()), e.abrupt("return", r);

                      case 9:
                        e.prev = 9, e.t0 = e.catch(0), console.log(e.t0), _wepy2.default.showModal({
                            title: "提示",
                            content: "服务器错误，请联系管理员"
                        });

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 9 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.getTopic(t.id);

                      case 2:
                        return e.next = 4, this.$parent.getCurrentUser();

                      case 4:
                        this.user = e.sent, this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.$parent.checkRefreshPages(this.getCurrentPages().pop().route, function() {
                            t.getTopic(t.topic.id);
                        });

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function(e) {
            return {
                title: this.topic.title,
                path: "/pages/topics/show?id=" + this.topic.id,
                success: function(e) {
                    console.log(e);
                },
                fail: function(e) {
                    console.log(e);
                }
            };
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(TopicShow, "pages/topics/show"));