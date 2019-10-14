function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var s = t[o](a), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), sellProLst = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationBarTitleText: "",
            usingComponents: {
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index",
                "wxc-loadmore": "../../packages/@minui/wxc-loadmore/dist/index"
            }
        }, n.data = {
            vm: {
                list: [],
                ispost: !1,
                loadall: !1,
                pageindex: 1,
                pagesize: 10,
                search: "",
                state: 1
            },
            priceState: [ {
                txt: "最新",
                id: 1
            }, {
                txt: "价格",
                id: 2
            } ],
            currentSkin: {}
        }, n.methods = {
            select: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.showLoading();

                          case 2:
                            return this.vm.ispost = !1, this.vm.loadall = !1, this.vm.pageindex = 1, this.vm.state = t, 
                            e.next = 8, this.getGoodlst();

                          case 8:
                            wx.hideLoading();

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            search: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.showLoading();

                          case 2:
                            return this.vm.ispost = !1, this.vm.loadall = !1, this.vm.pageindex = 1, this.vm.search = t.detail.value, 
                            e.next = 8, this.getGoodlst();

                          case 8:
                            wx.hideLoading();

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            navGood: function(e) {
                _core.tools.pathGood(e, "buy", !0, 1);
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, o, a, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        r = _wepy2.default.$instance, n = (0, _lodashGet2.default)(t, "scene", ""), o = "", 
                        a = Number((0, _lodashGet2.default)(t, "sale", "")), n ? (s = [], s = decodeURIComponent(n), 
                        s = s.split("_"), o = s[0], r.globalData.saleId = s[1]) : o = (0, _lodashGet2.default)(t, "record", ""), 
                        this.getGoodlst(a, o);

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getGoodlst",
        value: function() {
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var n, o, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = this.vm, !n.ispost && !n.loadall) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        return n.ispost || (n.ispost = !0), e.next = 6, _core.core.getSaleLst(n);

                      case 6:
                        if (o = e.sent, !o.isok) {
                            e.next = 25;
                            break;
                        }
                        if (n.ispost = !1, n.list[n.pageindex] = o.obj.SalesmanGoodsList, o.obj.SalesmanGoodsList.length >= n.pagesize ? n.pageindex += 1 : n.loadall = !0, 
                        1 != t) {
                            e.next = 18;
                            break;
                        }
                        return e.next = 14, _core.core.bindSale(o.obj.SalesmanGoodsList[0].goodsId);

                      case 14:
                        a = e.sent, n.record = a.obj, e.next = 19;
                        break;

                      case 18:
                        n.record = r;

                      case 19:
                        r && _core.core.bindShip(o.obj.SalesmanGoodsList[0].goodsId, r), this.vm = n, this.$apply(), 
                        _core.tools.setPageTitle("推广商品"), e.next = 26;
                        break;

                      case 25:
                        _core.tools.showModal(o.msg, !1);

                      case 26:
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
                        return e.next = 2, _core.tools.showLoading();

                      case 2:
                        return e.next = 4, this.getGoodlst();

                      case 4:
                        wx.hideLoading();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            var e = this;
            return _core.core.updateRecordId(e.vm.record), {
                title: "",
                path: "/pages/sellCenter/sellProLst?record=" + e.vm.record,
                imageUrl: ""
            };
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(sellProLst, "pages/sellCenter/sellProLst"));