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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), bargainList = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "我的砍价单",
            enablePullDownRefresh: !0
        }, n.data = {
            currentSkin: {},
            vm: {
                pageindex: 1,
                pagesize: 10,
                list: [],
                ispost: !1,
                loadall: !1,
                state: -2,
                scroll: 0,
                HelpCut: [],
                showShare: !1,
                topHead: [ {
                    name: "全部",
                    state: -2
                }, {
                    name: "待发货",
                    state: 7
                }, {
                    name: "待收货",
                    state: 6
                }, {
                    name: "已完成/退款",
                    state: 8
                } ]
            }
        }, n.methods = {
            preView: function(e) {
                var t = [];
                t.push(e), _core.tools.preViewShow(e, t);
            },
            changeState: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.showLoading();

                          case 2:
                            return e.next = 4, _core.tools.resetArray(this.vm);

                          case 4:
                            return this.vm = e.sent, this.vm.state = t, e.next = 8, _core.tools.onPageScroll();

                          case 8:
                            return e.next = 10, _core.core.bargainList(this);

                          case 10:
                            wx.hideLoading();

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            pathCut: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.core.barShare(t, this);

                          case 2:
                            this.vm.showShare = !0, this.$apply();

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            pathCloes: function() {
                this.vm.showShare = !1, this.$apply();
            },
            pathOrder: function(e) {
                _core.tools.goNewPage("../good/goodOlt?buid=" + e);
            },
            goPay: function() {
                function e(e, r) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    var n, o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return wx.showNavigationBarLoading(), n = {
                                orderid: t,
                                type: 1
                            }, e.next = 4, _core.pay.PayOrder(n);

                          case 4:
                            o = e.sent, "" != o && o.errMsg.includes("requestPayment:ok") ? (_core.tools.loading("支付成功"), 
                            setTimeout(function(e) {
                                _core.tools.goRedirecto("../good/goodOlt?buid=" + r);
                            }, 1e3), wx.hideNavigationBarLoading()) : (_core.tools.loading("取消支付"), wx.hideNavigationBarLoading());

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            pathBuy: function(e) {
                var t = this.vm.list[e], r = {
                    list: [],
                    buid: t.Id,
                    totalCount: 1,
                    fee: t.GoodsFreightStr,
                    totalPrice: t.CurrentPriceStr,
                    originalPrice: t.CurrentPriceStr
                };
                r.list.push({
                    ImgUrl: t.ShopLogoUrl,
                    oldPrice: "",
                    SpecInfo: "",
                    Introduction: t.BName,
                    discount: 100,
                    discountPrice: t.CurrentPriceStr,
                    Count: 1
                }), this.$preload("vm_order", r), this.$navigate("/pages/bargain/bargainOrder");
            },
            pathComfig: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.showModal("亲，是否确认收货?");

                          case 2:
                            r = e.sent, r.confirm && _core.core.confirmBar(t, this, 0);

                          case 4:
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
                        return this.vm = _core.tools.resetArray(this.vm), e.next = 5, _core.core.bargainList(this);

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
            _core.core.bargainList(this);
        }
    }, {
        key: "onPageScroll",
        value: function(e) {
            this.vm.scroll = e.scrollTop, this.$apply();
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
                        return wx.showNavigationBarLoading(), this.vm = _core.tools.resetArray(this.vm), 
                        e.next = 4, _core.core.bargainList(this);

                      case 4:
                        setTimeout(function() {
                            wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
                        }, 1e3);

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
        value: function(e) {
            if (e.target) {
                var t = e.target.dataset.wpyonshareappmessageA;
                return {
                    title: "我发现了一件好货，最低可砍至" + t.FloorPrice + "元",
                    imageUrl: t.ShopLogoUrl,
                    path: "/pages/bargain/bargain?scene=" + t.Id + "_" + t.BId
                };
            }
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(bargainList, "pages/bargain/bargainList"));