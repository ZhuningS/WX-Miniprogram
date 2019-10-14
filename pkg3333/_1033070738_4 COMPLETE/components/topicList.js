function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, r) {
            function n(a, o) {
                try {
                    var i = e[a](o), s = i.value;
                } catch (t) {
                    return void r(t);
                }
                if (!i.done) return Promise.resolve(s).then(function(t) {
                    n("next", t);
                }, function(t) {
                    n("throw", t);
                });
                t(s);
            }
            return n("next");
        });
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
    function t(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _util = require("./../utils/util.js"), _util2 = _interopRequireDefault(_util), _api = require("./../utils/api.js"), _api2 = _interopRequireDefault(_api), TopicList = function(t) {
    function e() {
        var t, r, n, a;
        _classCallCheck(this, e);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(i))), 
        n.data = {
            topics: [],
            noMoreData: !1,
            isLoading: !1
        }, n.props = {
            syncData: {
                type: Object,
                default: {}
            },
            syncUrl: {
                type: String,
                default: "topics"
            }
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "getTopics",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, r, n, a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return this.syncData.page || (this.syncData.page = 1), this.syncData.include = "user,category", 
                        t.prev = 2, t.next = 5, _api2.default.request({
                            url: this.syncUrl,
                            data: this.syncData
                        });

                      case 5:
                        return e = t.sent, 200 === e.statusCode && (r = e.data.data, r.forEach(function(t) {
                            t.updated_at_diff = _util2.default.diffForHumans(t.updated_at);
                        }), this.topics = a ? r : this.topics.concat(r), n = e.data.meta.pagination, n.current_page === n.total_pages && (this.noMoreData = !0), 
                        this.$apply()), t.abrupt("return", e);

                      case 10:
                        t.prev = 10, t.t0 = t.catch(2), console.log(t.t0), _wepy2.default.showModal({
                            title: "提示",
                            content: "服务器错误，请联系管理员"
                        });

                      case 14:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 2, 10 ] ]);
            }));
            return t;
        }()
    }, {
        key: "loadMore",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!this.noMoreData && !this.isLoading) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return this.isLoading = !0, this.syncData.page = this.syncData.page + 1, t.next = 6, 
                        this.getTopics();

                      case 6:
                        this.isLoading = !1, this.$apply();

                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "reload",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return this.noMoreData = !1, this.syncData.page = 1, t.next = 4, this.getTopics(!0);

                      case 4:
                        return t.abrupt("return", t.sent);

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    } ]), e;
}(_wepy2.default.component);

exports.default = TopicList;