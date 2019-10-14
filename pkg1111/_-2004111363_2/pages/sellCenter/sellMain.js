function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var s = t[o](a), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
            }
            return r("next");
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
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), sellMain = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "",
            usingComponents: {
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index",
                "wxc-loadmore": "../../packages/@minui/wxc-loadmore/dist/index"
            }
        }, r.data = {
            state: [ {
                txt: "全部",
                id: "0"
            }, {
                txt: "未失效",
                id: "1"
            }, {
                txt: "已失效",
                id: "2"
            } ],
            priceState: [ {
                txt: "佣金",
                id: "0"
            }, {
                txt: "最新",
                id: "1"
            }, {
                txt: "价格",
                id: "2"
            } ],
            vmCount: {
                list: [],
                ispost: !1,
                loadall: !1,
                pageindex: 1,
                pagesize: 10,
                state: 0,
                search: ""
            },
            type: 0,
            currentSkin: {}
        }, r.methods = {
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
                            return this.vmCount.ispost = !1, this.vmCount.loadall = !1, this.vmCount.pageindex = 1, 
                            this.vmCount.state = t, e.next = 8, this.mainInfo(this.type);

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
                            return this.vmCount.ispost = !1, this.vmCount.loadall = !1, this.vmCount.pageindex = 1, 
                            this.vmCount.search = t.detail.value, e.next = 8, this.mainInfo(this.type);

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
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = Number(t.type) || 0, e.next = 3, _core.tools.setPageSkin(this);

                      case 3:
                        return e.next = 5, this.mainInfo(n);

                      case 5:
                        this.type = n, this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "mainInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r, o, a, s, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        e.t0 = t, e.next = 1 === e.t0 ? 3 : 2 === e.t0 ? 12 : 3 === e.t0 ? 21 : 30;
                        break;

                      case 3:
                        if (n = this.vmCount, !n.ispost && !n.loadall) {
                            e.next = 6;
                            break;
                        }
                        return e.abrupt("return");

                      case 6:
                        return n.ispost || (n.ispost = !0), e.next = 9, _core.core.getSaleManRecord(n);

                      case 9:
                        return r = e.sent, r.isok ? (n.ispost = !1, n.list[n.pageindex] = r.obj.SalesManRecordUserList, 
                        null != r.obj.SalesManRecordUserList && (r.obj.SalesManRecordUserList.length >= n.pagesize ? n.pageindex += 1 : n.loadall = !0), 
                        this.vmCount = n, this.$apply(), _core.tools.setPageTitle("累计客户")) : _core.tools.showModal(r.msg, !1), 
                        e.abrupt("break", 30);

                      case 12:
                        if (o = this.vmCount, !o.ispost && !o.loadall) {
                            e.next = 15;
                            break;
                        }
                        return e.abrupt("return");

                      case 15:
                        return o.ispost || (o.ispost = !0), e.next = 18, _core.core.getSaleRecord(o);

                      case 18:
                        return a = e.sent, a.isok ? (o.ispost = !1, o.list[o.pageindex] = a.obj.List, null != a.obj.List && (a.obj.List.length >= o.pagesize ? o.pageindex += 1 : o.loadall = !0), 
                        this.vmCount = o, this.$apply(), _core.tools.setPageTitle("累计订单")) : _core.tools.showModal(a.msg, !1), 
                        e.abrupt("break", 30);

                      case 21:
                        if (s = this.vmCount, !s.ispost && !s.loadall) {
                            e.next = 24;
                            break;
                        }
                        return e.abrupt("return");

                      case 24:
                        return s.ispost || (s.ispost = !0), e.next = 27, _core.core.getSaleLst(s);

                      case 27:
                        return i = e.sent, i.isok ? (s.ispost = !1, s.list[s.pageindex] = i.obj.SalesmanGoodsList, 
                        i.obj.SalesmanGoodsList.length >= s.pagesize ? s.pageindex += 1 : s.loadall = !0, 
                        this.vmCount = s, this.$apply(), _core.tools.setPageTitle("推广商品")) : _core.tools.showModal(i.msg, !1), 
                        e.abrupt("break", 30);

                      case 30:
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
                        if (1 == this.vmCount.loadall) {
                            e.next = 3;
                            break;
                        }
                        return e.next = 3, _core.tools.showLoading();

                      case 3:
                        return e.next = 5, this.mainInfo(this.type);

                      case 5:
                        wx.hideLoading();

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(sellMain, "pages/sellCenter/sellMain"));