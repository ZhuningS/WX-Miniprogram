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
                    var s = t[o](i), a = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(a).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(a);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _core = require("./../../lib/core.js"), goodProLst = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index",
                "wxc-label": "../../packages/@minui/wxc-label/dist/index",
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-loadmore": "../../packages/@minui/wxc-loadmore/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index"
            },
            enablePullDownRefresh: !0
        }, n.components = {}, n.data = {
            currentSkin: {},
            vm: {
                ispost: !1,
                loadall: !1,
                list: [],
                pageindex: 1,
                pagesize: 10,
                typeid: "",
                isFirstType: "",
                allid: ""
            },
            selIndex: 0
        }, n.methods = {
            navFunc: function(e) {
                var t = this.vm;
                t = _core.tools.resetArray(t), 0 == Number(e) ? (this.selIndex = 0, e = t.allid, 
                t.isFirstType = 0) : (this.selIndex = e, t.isFirstType = ""), t.typeid = e, this.proInfo(t), 
                this.vm = t, this.$apply();
            },
            goodnav: function(e, t) {
                _core.tools.pathGood(e, t.btnType, t.isShowPrice);
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var n, o, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        return n = (0, _lodashGet2.default)(r.preload, "vm", ""), o = this.vm, o.isFirstType = (0, 
                        _lodashGet2.default)(n, "isFirstType", ""), o.typeid = n.typeid, o.pageInfo = n.goods, 
                        o.allid = n.typeid, e.next = 10, this.proInfo(o);

                      case 10:
                        if (!n.goods.showBig) {
                            e.next = 15;
                            break;
                        }
                        return e.next = 13, _core.core.getGoodType(o.typeid);

                      case 13:
                        i = e.sent, o.second = i.dataObj[0].SecondGoodTypes;

                      case 15:
                        this.vm = o, this.$apply(), _core.tools.setPageTitle(n.title);

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "proInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = _wepy2.default.$instance, !t.ispost && !t.loadall) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        return t.ispost || (t.ispost = !0), e.next = 6, _core.core.getGoodList(t);

                      case 6:
                        n = e.sent, t.ispost = !1, 1 == n.isok && (t.list[t.pageindex] = n.postdata.goodslist, 
                        n.postdata.goodslist.length >= t.pagesize ? t.pageindex += 1 : t.loadall = !0, this.vm = t, 
                        this.$apply());

                      case 9:
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
            this.proInfo(this.vm);
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
                        wx.showNavigationBarLoading(), this.vm = _core.tools.resetArray(this.vm), this.proInfo(this.vm), 
                        setTimeout(function() {
                            wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
                        }, 1e3);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(goodProLst, "pages/good/goodProLst"));