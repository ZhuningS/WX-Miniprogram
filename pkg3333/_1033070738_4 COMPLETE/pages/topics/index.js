function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, i) {
                try {
                    var a = t[o](i), u = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(u).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _topicList = require("./../../components/topicList.js"), _topicList2 = _interopRequireDefault(_topicList), _unreadCount = require("./../../mixins/unreadCount.js"), _unreadCount2 = _interopRequireDefault(_unreadCount), TopicIndex = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            enablePullDownRefresh: !0
        }, n.data = {
            topics: [],
            categories: [],
            categoryOpen: !1,
            currentCategory: {},
            requestData: {}
        }, n.mixins = [ _unreadCount2.default ], n.$repeat = {}, n.$props = {
            topiclist: {
                "xmlns:v-bind": "",
                "v-bind:syncData.sync": "requestData"
            }
        }, n.$events = {}, n.components = {
            topiclist: _topicList2.default
        }, n.computed = {
            currentCategoryId: function() {
                return this.currentCategory.id || 0;
            }
        }, n.methods = {
            toggle: function() {
                this.categoryOpen = !this.categoryOpen;
            },
            changeCatgory: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            this.currentCategory = t ? this.categories.find(function(e) {
                                return e.id === t;
                            }) : {}, this.categoryOpen = !1, this.$apply(), this.requestData.category_id = this.currentCategoryId, 
                            this.$invoke("topiclist", "reload");

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getCategories",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = _wepy2.default.getStorageSync("categories")) {
                            e.next = 12;
                            break;
                        }
                        return e.prev = 2, e.next = 5, _api2.default.request("categories");

                      case 5:
                        r = e.sent, 200 === r.statusCode && (t = r.data.data, _wepy2.default.setStorageSync("categories", t)), 
                        e.next = 12;
                        break;

                      case 9:
                        e.prev = 9, e.t0 = e.catch(2), _wepy2.default.showModal({
                            title: "提示",
                            content: "服务器错误，请联系管理员"
                        });

                      case 12:
                        this.categories = t, this.$apply();

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 2, 9 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.getCategories(), this.$invoke("topiclist", "reload");

                      case 2:
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
            var e = this;
            this.$parent.checkRefreshPages(this.getCurrentPages().pop().route, function() {
                e.$invoke("topiclist", "reload");
            });
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
                        return e.next = 2, this.$invoke("topiclist", "reload");

                      case 2:
                        _wepy2.default.stopPullDownRefresh();

                      case 3:
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
                        return e.next = 2, this.$invoke("topiclist", "loadMore");

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(TopicIndex, "pages/topics/index"));