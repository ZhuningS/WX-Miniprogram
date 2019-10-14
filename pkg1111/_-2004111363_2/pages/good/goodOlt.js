function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function o(n, a) {
                try {
                    var i = r[n](a), c = i.value;
                } catch (e) {
                    return void t(e);
                }
                if (!i.done) return Promise.resolve(c).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(c);
            }
            return o("next");
        });
    };
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, r) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !r || "object" != typeof r && "function" != typeof r ? e : r;
}

function _inherits(e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    e.prototype = Object.create(r && r.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, r) {
        for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(r, t, o) {
        return t && e(r.prototype, t), o && e(r, o), r;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _com_goodItem = require("./../../components/com_goodItem.js"), _com_goodItem2 = _interopRequireDefault(_com_goodItem), _com_reduction = require("./../../components/com_reduction.js"), _com_reduction2 = _interopRequireDefault(_com_reduction), _addr = require("./../../lib/addr.js"), _addr2 = _interopRequireDefault(_addr), _core = require("./../../lib/core.js"), orderDetail = function(e) {
    function r() {
        var e, t, o, n;
        _classCallCheck(this, r);
        for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
        return t = o = _possibleConstructorReturn(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(i))), 
        o.config = {
            navigationBarTitleText: "订单确认",
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index"
            }
        }, o.$repeat = {}, o.$props = {
            comItem: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.sync": "vm_order.goodOrderDtl"
            },
            comRedu: {
                "xmlns:v-on": ""
            }
        }, o.$events = {
            comRedu: {
                "v-on:goReduction": "goReduction",
                "v-on:closeRecution": "closeRecution"
            }
        }, o.components = {
            comItem: _com_goodItem2.default,
            comRedu: _com_reduction2.default
        }, o.data = {
            currentSkin: {},
            vm_order: {},
            showReduct: !1,
            hexiaoQrcode: ""
        }, o.computed = {
            payType: function() {
                var e = this.vm_order.goodOrder;
                if (e && e.BuyMode) switch (parseInt(e.BuyMode)) {
                  case 1:
                    return "微信支付";

                  case 2:
                    return "储值支付";

                  case 11:
                    return "货到付款";
                }
                return "";
            }
        }, o.methods = {
            closeRecution: function() {
                this.showReduct = !1;
            },
            goHome: function() {
                _core.tools.goLaunch("/pages/index/index");
            },
            goReduction: function() {
                var e = _wepy2.default.$instance;
                _core.tools.goRedirecto("/pages/discount/reduction?couponsid=" + e.globalData.reduction.Id + "&orderid=" + this.vm_order.goodOrder.Id);
            },
            copy: function() {
                _core.tools.copy(this.vm_order.goodOrder.OrderNum);
            },
            goPay: function() {
                function e(e) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                    var t, o, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return wx.showNavigationBarLoading(), t = this, o = {
                                orderid: r,
                                type: 1
                            }, e.next = 5, _core.pay.PayOrder(o);

                          case 5:
                            n = e.sent, "" != n && n.errMsg.includes("requestPayment:ok") ? (_core.tools.loading("支付成功"), 
                            setTimeout(function() {
                                t.dbOrder ? _core.core.orderDtl(t.dbOrder, t) : _core.core.getBarOlt(t.buid, t);
                            }, 1e3)) : _core.tools.loading("取消支付"), wx.hideNavigationBarLoading();

                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            confirmBar: function() {
                function e(e, t) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                    var o, n, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return o = {
                                orderId: t,
                                state: 3
                            }, e.next = 3, _core.tools.showModal("亲，是否确认收货？");

                          case 3:
                            if (n = e.sent, !n.confirm) {
                                e.next = 19;
                                break;
                            }
                            if (!this.dbOrder) {
                                e.next = 17;
                                break;
                            }
                            return e.next = 8, _core.core.oltState(o);

                          case 8:
                            if (a = e.sent, 1 != a.isok) {
                                e.next = 14;
                                break;
                            }
                            return e.next = 12, _core.core.orderDtl(this.dbOrder, this);

                          case 12:
                            e.next = 15;
                            break;

                          case 14:
                          case 15:
                            e.next = 19;
                            break;

                          case 17:
                            return e.next = 19, _core.core.confirmBar(r, this, 1);

                          case 19:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, n = t, _possibleConstructorReturn(o, n);
    }
    return _inherits(r, e), _createClass(r, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var t, o, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        t = (0, _lodashGet2.default)(r, "dbOrder", 0), o = (0, _lodashGet2.default)(r, "buid", 0), 
                        n = (0, _lodashGet2.default)(r, "check", ""), t ? (this.goodOrderInfo(t, n), this.dbOrder = t) : (_core.core.getBarOlt(o, this), 
                        this.buid = o), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "goodOrderInfo",
        value: function() {
            function e(e, t) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                var o, n, a = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o = _wepy2.default.$instance, e.t0 = (0, _lodashGet2.default)(o.globalData, "userInfo", ""), 
                        e.t0) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 5, _core.core.getUserInfo();

                      case 5:
                        e.t0 = e.sent;

                      case 6:
                        n = e.t0, _core.http.get(_addr2.default.getMiniappGoodsOrderById, {
                            appid: o.globalData.appid,
                            openid: n.OpenId,
                            orderId: r
                        }).then(function() {
                            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(o) {
                                var n, i, c, u, s;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        if (1 != o.isok) {
                                            e.next = 11;
                                            break;
                                        }
                                        for (n = o.postdata, i = 0, c = n.goodOrderDtl.length; i < c; i++) u = n.goodOrderDtl[i], 
                                        u.ImgUrl = u.goodImgUrl, u.Introduction = u.goodname, u.SpecInfo = u.orderDtl.SpecInfo, 
                                        u.discountPrice = u.orderDtl.priceStr, u.oldPrice = u.orderDtl.originalPriceStr, 
                                        u.Count = u.orderDtl.Count, u.type = "good";
                                        if (!n.stateRemark || "待自取" != n.stateRemark && "待消费" != n.stateRemark) {
                                            e.next = 8;
                                            break;
                                        }
                                        return e.next = 6, _core.core.GetTableNoQrCode(r);

                                      case 6:
                                        s = e.sent, s && s.isok && (a.hexiaoQrcode = s.Msg);

                                      case 8:
                                        a.vm_order = n, a.$apply(), "" == t && a.reduction(n);

                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, a);
                            }));
                            return function(r) {
                                return e.apply(this, arguments);
                            };
                        }());

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "reduction",
        value: function(e) {
            var r = _wepy2.default.$instance;
            1 != e.goodOrder.State && 8 != e.goodOrder.State || null == r.globalData.reduction ? this.showReduct = !1 : this.showReduct = !0, 
            this.$apply();
        }
    } ]), r;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(orderDetail, "pages/good/goodOlt"));