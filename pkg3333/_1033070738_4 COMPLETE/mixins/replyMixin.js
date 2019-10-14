function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, i) {
                try {
                    var o = t[a](i), u = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
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
}), exports.default = void 0;

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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _util = require("./../utils/util.js"), _util2 = _interopRequireDefault(_util), _api = require("./../utils/api.js"), _api2 = _interopRequireDefault(_api), ReplyMixin = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            enablePullDownRefresh: !0
        }, n.data = {
            replies: [],
            noMoreData: !1,
            isLoading: !1,
            page: 1
        }, n.methods = {
            deleteReply: function() {
                function e(e, r) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    var n, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _wepy2.default.showModal({
                                title: "确认删除",
                                content: "您确认删除该回复吗",
                                confirmText: "删除",
                                cancelText: "取消"
                            });

                          case 2:
                            if (n = e.sent, n.confirm) {
                                e.next = 5;
                                break;
                            }
                            return e.abrupt("return");

                          case 5:
                            return e.prev = 5, e.next = 8, _api2.default.authRequest({
                                url: "topics/" + t + "/replies/" + r,
                                method: "DELETE"
                            });

                          case 8:
                            return a = e.sent, 204 === a.statusCode && (_wepy2.default.showToast({
                                title: "删除成功",
                                icon: "success",
                                duration: 2e3
                            }), this.replies = this.replies.filter(function(e) {
                                return e.id !== r;
                            }), this.$apply()), e.abrupt("return", a);

                          case 13:
                            e.prev = 13, e.t0 = e.catch(5), console.log(e.t0), _wepy2.default.showModal({
                                title: "提示",
                                content: "服务器错误，请联系管理员"
                            });

                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 5, 13 ] ]);
                }));
                return e;
            }()
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getReplies",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, a, i = this, o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _api2.default.request({
                            url: this.requestData.url,
                            data: {
                                page: this.page,
                                include: this.requestData.include || "user"
                            }
                        });

                      case 3:
                        if (t = e.sent, 200 !== t.statusCode) {
                            e.next = 14;
                            break;
                        }
                        return r = t.data.data, e.next = 8, this.$parent.getCurrentUser();

                      case 8:
                        n = e.sent, r.forEach(function(e) {
                            e.can_delete = i.canDelete(n, e), e.created_at_diff = _util2.default.diffForHumans(e.created_at);
                        }), this.replies = o ? r : this.replies.concat(r), a = t.data.meta.pagination, a.current_page === a.total_pages && (this.noMoreData = !0), 
                        this.$apply();

                      case 14:
                        return e.abrupt("return", t);

                      case 17:
                        e.prev = 17, e.t0 = e.catch(0), console.log(e.t0), _wepy2.default.showModal({
                            title: "提示",
                            content: "服务器错误，请联系管理员"
                        });

                      case 21:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 17 ] ]);
            }));
            return e;
        }()
    }, {
        key: "canDelete",
        value: function(e, t) {
            return !!e && (t.user_id === e.id || this.$parent.can("manage_contents"));
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.noMoreData = !1, this.page = 1, e.next = 4, this.getReplies(!0);

                      case 4:
                        _wepy2.default.stopPullDownRefresh();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onReachBottom",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.noMoreData && !this.isLoading) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        return this.isLoading = !0, this.page = this.page + 1, e.next = 6, this.getReplies();

                      case 6:
                        this.isLoading = !1, this.$apply();

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.mixin);

exports.default = ReplyMixin;