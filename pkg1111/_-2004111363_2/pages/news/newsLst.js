function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var i = t[o](a), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _addr = require("./../../lib/addr.js"), _addr2 = _interopRequireDefault(_addr), _wxParse = require("./../../lib/wxParse/wxParse.js"), _core = require("./../../lib/core.js"), newsLst = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "更多资讯"
        }, n.data = {
            content: {
                pageindex: 1,
                pagesize: 10,
                list: [],
                ispost: !1,
                loadall: !1,
                showVm: !1
            },
            isShowBtn: !1,
            currentSkin: {}
        }, n.computed = {}, n.methods = {
            goCon: function(e) {
                _core.tools.goNewPage("../news/news?id=" + e);
            },
            goTop: function(e) {
                _core.tools.onPageScroll();
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onReachBottom",
        value: function() {
            this.moreLst(this.typeid);
        }
    }, {
        key: "onPageScroll",
        value: function(e) {
            this.isShowBtn = 0 != e.scrollTop, this.$apply();
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        r = (0, _lodashGet2.default)(t, "id", 0), this.moreLst(r), this.typeid = r, this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "moreLst",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, o = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = this.content, !r.ispost && !r.loadall) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        r.ispost || (r.ispost = !0), n = _wepy2.default.$instance.globalData.aid, _core.http.get(_addr2.default.GetNewsList, {
                            aid: n,
                            typeid: t,
                            liststyle: "",
                            pageIndex: r.pageindex,
                            pageSize: r.pagesize
                        }).then(function(e) {
                            e.isok && (r.ispost = !1, e.data.forEach(function(e, t) {
                                e.addtime = _core.tools.ChangeDateFormat(e.addtime);
                            }), e.data.length > 0 && (r.list = r.list = [].concat(_toConsumableArray(r.list), _toConsumableArray(e.data))), 
                            e.data.length >= r.pagesize ? r.pageindex += 1 : r.loadall = !0, o.content = r, 
                            o.$apply());
                        });

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(newsLst, "pages/news/newsLst"));