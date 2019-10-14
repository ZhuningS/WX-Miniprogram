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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _com_goodItem = require("./../../components/com_goodItem.js"), _com_goodItem2 = _interopRequireDefault(_com_goodItem), _core = require("./../../lib/core.js"), interOrder = function(e) {
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
            toast: {}
        }, n.computed = {}, n.methods = {
            addressModel: function() {
                function e() {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            this.$navigate("/pages/my/myaddress?type=order");

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            payRequest: function() {
                function e(e) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                    var t, n, o, a, s;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = 0, n = [ this.vm_goods, {} ], o = n[0], a = n[1], _core.core.formId(r.detail.formId), 
                            "" != o.address) {
                                e.next = 6;
                                break;
                            }
                            return _core.tools.ShowToast("亲，请选择地址", this), e.abrupt("return");

                          case 6:
                            a = {
                                userName: o.userName,
                                telNumber: o.telNumber,
                                postalCode: 0,
                                detailInfo: o.address
                            }, e.t0 = o.mode, e.next = "快递" === e.t0 ? 10 : "到店消费" === e.t0 ? 12 : "自取" === e.t0 ? 14 : 16;
                            break;

                          case 10:
                            return t = 0, e.abrupt("break", 16);

                          case 12:
                            return t = 1, e.abrupt("break", 16);

                          case 14:
                            return t = 2, e.abrupt("break", 16);

                          case 16:
                            s = {
                                way: t,
                                id: o.activityId,
                                address: JSON.stringify(a)
                            }, this.addOrder(s, o.type);

                          case 18:
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
                        return e.next = 4, this.orderConfig(r, t);

                      case 4:
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
            var e = _wepy2.default.$instance, r = (0, _lodashGet2.default)(e.globalData, "address");
            Object.keys(r).length && (this.vm_goods.telNumber = r.phone, this.vm_goods.userName = r.contact, 
            this.vm_goods.address = r.address, this.vm_goods.mode = r.mode, this.$apply());
        }
    }, {
        key: "orderConfig",
        value: function() {
            function e(e, t) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        n = t.preload.vm_order, this.vm_goods = n, this.vm_goods.shouldPay = Number(this.vm_goods.totalPrice).add(Number(this.vm_goods.fee)).toFixed(2), 
                        this.$apply();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "addOrder",
        value: function() {
            function e(e, t) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.interOrder(r);

                      case 2:
                        n = e.sent, 1 == n.isok ? 1 == Number(t) ? this.wxPay(n) : this.xwPay() : _core.tools.showModal(n.msg, !1);

                      case 4:
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
                var t, n, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this, n = {
                            orderid: r.obj,
                            type: 1
                        }, e.next = 4, _core.pay.PayOrder(n);

                      case 4:
                        if ("" == (o = e.sent) || "requestPayment:ok" != o.errMsg) {
                            e.next = 12;
                            break;
                        }
                        return e.next = 8, _core.tools.loading("支付成功");

                      case 8:
                        return e.next = 10, this.goWhere();

                      case 10:
                        e.next = 13;
                        break;

                      case 12:
                        _core.tools.loading("取消支付");

                      case 13:
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
            function e() {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.loading("兑换成功");

                      case 2:
                        return e.next = 4, this.goWhere();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "goWhere",
        value: function() {
            setTimeout(function(e) {
                _core.tools.goRedirecto("/pages/integral/interSuccess");
            }, 1e3);
        }
    } ]), r;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(interOrder, "pages/integral/interOrder"));