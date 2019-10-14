function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(o, a) {
                try {
                    var s = r[o](a), i = s.value;
                } catch (e) {
                    return void t(e);
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
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(r, t, n) {
        return t && e(r.prototype, t), n && e(r, n), r;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _com_goodItem = require("./../../components/com_goodItem.js"), _com_goodItem2 = _interopRequireDefault(_com_goodItem), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), bargainOrder = function(e) {
    function r() {
        var e, t, n, o;
        _classCallCheck(this, r);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return t = n = _possibleConstructorReturn(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationBarTitleText: "订单确认",
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index",
                "wxc-price": "../../packages/@minui/wxc-price/dist/index"
            }
        }, n.$repeat = {}, n.$props = {
            comItem: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.sync": "vm_goods.list"
            }
        }, n.$events = {}, n.components = {
            comItem: _com_goodItem2.default
        }, n.data = {
            currentSkin: {},
            vm_goods: {},
            payIndex: 0,
            goIndex: 0,
            toast: {},
            _index: -1
        }, n.computed = {}, n.methods = {
            payMode: function(e) {
                this.payIndex = Number(e.detail.value);
            },
            addressModel: function() {
                function e() {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.chooseAddress();

                          case 2:
                            if (r = e.sent, "chooseAddress:fail auth deny" != r.errMsg) {
                                e.next = 8;
                                break;
                            }
                            return e.next = 6, _core.tools.showModal("授权后才可使用,请点击右上角‘关于小程序’进行相关设置", !1);

                          case 6:
                            e.next = 13;
                            break;

                          case 8:
                            if ("chooseAddress:fail cancel" !== r.errMsg) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return");

                          case 10:
                            this.vm_goods.address = r, this.$apply(), this.feePay(r);

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            setMess: function(e) {
                this.vm_goods.message = e.detail.value, this.$apply();
            },
            payRequest: function() {
                function e(e, t) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                    var n, o, a, s;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (n = this.vm_goods, o = (0, _lodashGet2.default)(n, "address", ""), _core.core.formId(t.detail.formId), 
                            a = this.payIndex + 1, !o) {
                                e.next = 17;
                                break;
                            }
                            if (this._index != r) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return");

                          case 7:
                            if (2 != a) {
                                e.next = 14;
                                break;
                            }
                            return e.next = 10, _core.tools.showModal("是否使用储值支付");

                          case 10:
                            s = e.sent, s.confirm && this.orderInfo(r), e.next = 15;
                            break;

                          case 14:
                            this.orderInfo(r);

                          case 15:
                            e.next = 18;
                            break;

                          case 17:
                            _core.tools.showModal("请选择地址", !1);

                          case 18:
                            this.$apply();

                          case 19:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = t, _possibleConstructorReturn(n, o);
    }
    return _inherits(r, e), _createClass(r, [ {
        key: "onLoad",
        value: function() {
            function e(e, t) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        this.orderConfig(r, t);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "orderInfo",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var t, n, o, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showNavigationBarLoading(), t = this.vm_goods, n = this.payIndex + 1, 
                        o = {
                            buid: t.buid,
                            address: JSON.stringify(t.address),
                            Remark: t.message,
                            PayType: n
                        }, e.next = 6, _core.core.addBarOrder(o);

                      case 6:
                        if (a = e.sent, !a.isok) {
                            e.next = 17;
                            break;
                        }
                        if (this.total = t.totalPrice, this.buyMode = n, "0.00" != t.totalPrice || "string" != typeof t.totalPrice) {
                            e.next = 13;
                            break;
                        }
                        return this.xwPay(), e.abrupt("return");

                      case 13:
                        1 == n ? this.wxPay(a) : this.xwPay(), this._index = r, e.next = 20;
                        break;

                      case 17:
                        this._index = -1, wx.hideNavigationBarLoading(), _core.tools.showModal(a.msg, !1);

                      case 20:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "orderConfig",
        value: function() {
            function e(e, t) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                var n, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = 0, o = (0, _lodashGet2.default)(t.preload, "vm_order"), e.next = 4, _core.core.getAddress(this);

                      case 4:
                        o.address = e.sent, o.message = "", o.payArray = [ "微信支付", "储值支付" ], o.lessPrice = Number(o.originalPrice).sub(Number(o.totalPrice)).toFixed(2), 
                        o.totalPrice = Number(o.totalPrice).add(Number(o.fee)).toFixed(2), this.vm_goods = o, 
                        this.$apply(), this.feePay();

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "wxPay",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            orderid: r.orderId,
                            type: 1
                        }, this.vm_goods.payMode = "微信支付", e.next = 4, _core.pay.PayOrder(t);

                      case 4:
                        if ("" == (n = e.sent) || !n.errMsg.includes("requestPayment:ok")) {
                            e.next = 10;
                            break;
                        }
                        _core.tools.loading("支付成功"), this.goWhere(), e.next = 14;
                        break;

                      case 10:
                        return e.next = 12, _core.pay.deleteLastFormId();

                      case 12:
                        _core.tools.loading("取消支付"), setTimeout(function() {
                            _core.tools.goRedirecto("../bargain/bargainList");
                        }, 1e3);

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "xwPay",
        value: function() {
            _core.tools.loading("支付成功"), this.vm_goods.payMode = "储值支付", this.goWhere();
        }
    }, {
        key: "goWhere",
        value: function() {
            var e = this;
            setTimeout(function(r) {
                e.$preload("vm_order", e.vm_goods), e.$navigate("../bargain/barSuccess");
            }, 1e3);
        }
    }, {
        key: "feePay",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var t, n, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this.vm_goods, n = {
                            province: (0, _lodashGet2.default)(r, "provinceName", ""),
                            city: (0, _lodashGet2.default)(r, "cityName", ""),
                            build: t.buid
                        }, e.next = 4, _core.core.GetBargainFreightFee(n);

                      case 4:
                        o = e.sent, o && (o.canpay ? (this.vm_goods.fee = parseFloat(o.fee.div(100)).toFixed(2), 
                        this.vm_goods.totalPrice = parseFloat(Number(t.originalPrice).add(Number(this.vm_goods.fee))).toFixed(2), 
                        this.$apply()) : _core.tools.showModal("不在配送范围，请重新选择地址", "false"));

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), r;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(bargainOrder, "pages/bargain/bargainOrder"));