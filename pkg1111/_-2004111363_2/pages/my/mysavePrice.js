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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), savePrice = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index",
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index",
                "wxc-loadmore": "../../packages/@minui/wxc-loadmore/dist/index"
            }
        }, n.data = {
            vm_save: {},
            currentSkin: {},
            showMask: !1,
            vm_record: {
                pageindex: 1,
                pagesize: 10,
                list: [],
                ispost: !1,
                loadall: !1
            }
        }, n.computed = {}, n.methods = {
            selPrice: function(e) {
                var t = this.vm_save.price[e], r = this.vm_save.price;
                r.forEach(function(e, r) {
                    e.Id != t.Id ? e.sel = !1 : e.sel = !e.sel;
                }), this.vm_save.price = r, this.$apply();
            },
            recharge: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, r, n, o, a, i, s, c, u;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = _wepy2.default.$instance, !(r = this.vm_save.price.find(function(e) {
                                return 1 == e.sel;
                            }))) {
                                e.next = 31;
                                break;
                            }
                            return wx.showNavigationBarLoading(), e.next = 6, _core.core.addSavePrice(r.Id);

                          case 6:
                            if (n = e.sent, !n.isok) {
                                e.next = 31;
                                break;
                            }
                            return o = {
                                orderid: n.orderid,
                                type: 1
                            }, e.next = 11, _core.pay.PayOrder(o);

                          case 11:
                            if ("" == (a = e.sent) || !a.errMsg.includes("requestPayment:ok")) {
                                e.next = 29;
                                break;
                            }
                            return e.next = 15, _core.tools.showModal("支付成功");

                          case 15:
                            if (i = e.sent, !i.confirm) {
                                e.next = 25;
                                break;
                            }
                            return e.next = 19, _core.core.valueMoney();

                          case 19:
                            s = e.sent, t.globalData.vipInfo.valueMoney = s.saveMoneySetUser.AccountMoneyStr, 
                            t.globalData.myUser && (t.globalData.myUser.model.valueMoney = s.saveMoneySetUser.AccountMoneyStr), 
                            _core.tools.goBack(1), e.next = 26;
                            break;

                          case 25:
                            for (c = 0, u = this.vm_save.price.length; c < u; c++) this.vm_save.price[c].sel = !1, 
                            this.$apply();

                          case 26:
                            wx.hideNavigationBarLoading(), e.next = 31;
                            break;

                          case 29:
                            wx.hideNavigationBarLoading(), _core.tools.loading("取消支付");

                          case 31:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            showMask: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            _core.tools.goNewPage("../my/mysavePrice?type=history");

                          case 1:
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
                        if ("save" !== (r = (0, _lodashGet2.default)(t, "type", ""))) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 6, _core.core.getSaveList(this);

                      case 6:
                        _core.tools.setPageTitle("余额充值"), e.next = 12;
                        break;

                      case 9:
                        return e.next = 11, _core.core.getMoneyRec(this);

                      case 11:
                        _core.tools.setPageTitle("账单记录");

                      case 12:
                        this.showMask = r, this.$apply();

                      case 14:
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
            "history" == this.showMask && _core.core.getMoneyRec(this);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(savePrice, "pages/my/mysavePrice"));