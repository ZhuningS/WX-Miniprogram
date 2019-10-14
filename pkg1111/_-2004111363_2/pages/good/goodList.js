function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function o(n, a) {
                try {
                    var s = t[n](a), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(i);
            }
            return o("next");
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
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), goodList = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        o.config = {
            navigationBarTitleText: "订单列表",
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            },
            enablePullDownRefresh: !0
        }, o.data = {
            toast: {},
            currentSkin: {},
            vm: {
                offsetLeft: 0,
                pageindex: 1,
                pagesize: 10,
                list: [],
                ispost: !1,
                loadall: !1,
                state: 10,
                topHead: [ {
                    title: "全部订单",
                    state: 10
                }, {
                    title: "待付款",
                    state: 0
                }, {
                    title: "待发货",
                    state: 1
                }, {
                    title: "待收货",
                    state: 2
                }, {
                    title: "待评价",
                    state: -1e3
                }, {
                    title: "退货中",
                    state: 15
                }, {
                    title: "已完成/退款/退货",
                    state: 3
                } ],
                scroll: 0
            }
        }, o.methods = {
            copyOrder: function(e) {
                _core.tools.copy(e);
            },
            pathGood: function(e) {
                _core.tools.pathGood(e, "buy", !0);
            },
            pathOrder: function(e) {
                _core.tools.goNewPage("../good/goodOlt?dbOrder=" + e + "&check=true");
            },
            pathLog: function(e, t) {
                _core.tools.goNewPage("../my/myLogistics?orderId=" + t + "&imgUrl=" + e[0].SpecImg + "&count=" + e.length);
            },
            pathAfterSale: function(e) {
                _core.tools.goNewPage("../my/afterSale/serveType?orderId=" + e);
            },
            pathReturn: function(e, t) {
                _core.core.formId(t.detail.formId), _core.tools.goNewPage("../my/afterSale/appealResult?orderId=" + e);
            },
            pathValue: function(e, t) {
                var r = {
                    list: t,
                    orderid: e,
                    goodType: 0
                };
                this.$preload("vm", r), this.$navigate("/pages/good/goodValue");
            },
            confirm: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, o, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = {
                                orderId: t,
                                state: 3
                            }, e.next = 3, _core.tools.showModal("是否确认收货？");

                          case 3:
                            if (o = e.sent, !o.confirm) {
                                e.next = 16;
                                break;
                            }
                            return e.next = 7, _core.core.oltState(r);

                          case 7:
                            if (n = e.sent, 1 != n.isok) {
                                e.next = 15;
                                break;
                            }
                            return _core.tools.ShowToast("收货成功", this), this.vm = _core.tools.resetArray(this.vm), 
                            e.next = 13, _core.core.minOlt(this);

                          case 13:
                            e.next = 16;
                            break;

                          case 15:
                            _core.tools.showModal(n.msg, !1);

                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            cancleOrder: function() {
                function e(e, r) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    var o, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.showModal("是否取消该订单？");

                          case 2:
                            if (o = e.sent, !o.confirm) {
                                e.next = 10;
                                break;
                            }
                            return e.next = 6, _core.core.CancelOrder(t);

                          case 6:
                            return n = e.sent, this.vm = _core.tools.resetArray(this.vm), e.next = 10, _core.core.minOlt(this);

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            goPay: function() {
                function e(e, r) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    var o, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return wx.showNavigationBarLoading(), o = {
                                orderid: t,
                                type: 1
                            }, e.next = 4, _core.pay.PayOrder(o);

                          case 4:
                            n = e.sent, "" != n && n.errMsg.includes("requestPayment:ok") ? (_core.tools.loading("支付成功"), 
                            setTimeout(function(e) {
                                _core.tools.goRedirecto("../good/goodOlt?dbOrder=" + r);
                            }, 1e3)) : _core.tools.loading("取消支付"), wx.hideNavigationBarLoading();

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            changeState: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return this.vm = _core.tools.resetArray(this.vm), this.vm.state = t, this.$apply, 
                            e.next = 5, _core.core.minOlt(this);

                          case 5:
                            wx.pageScrollTo({
                                scrollTop: 0
                            });

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.vm.state = (0, _lodashGet2.default)(e, "state", 10), 3 == this.vm.state && (this.vm.offsetLeft = 600), 
            this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        this.vm = _core.tools.resetArray(this.vm), _core.core.minOlt(this);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onPageScroll",
        value: function(e) {
            this.vm.scroll = e.scrollTop, this.$apply();
        }
    }, {
        key: "onReachBottom",
        value: function() {
            _core.core.minOlt(this);
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            wx.showNavigationBarLoading(), this.vm = _core.tools.resetArray(this.vm), _core.core.minOlt(this), 
            setTimeout(function() {
                wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
            }, 1e3);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(goodList, "pages/good/goodList"));