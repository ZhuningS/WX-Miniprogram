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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _com_goodItem = require("./../../components/com_goodItem.js"), _com_goodItem2 = _interopRequireDefault(_com_goodItem), _core = require("./../../lib/core.js"), order = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        o.config = {
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            },
            navigationBarTitleText: "订单确认"
        }, o.$repeat = {}, o.$props = {
            comItem: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.sync": "vm.list"
            }
        }, o.$events = {}, o.components = {
            comItem: _com_goodItem2.default
        }, o.data = {
            currentSkin: {},
            vm: {},
            _index: -1,
            payIndex: 0,
            toast: {}
        }, o.computed = {}, o.methods = {
            chooseAddress: function(e) {
                this.$preload("cartid", e), this.$navigate("/pages/my/myaddress?type=order");
            },
            payMode: function(e) {
                this.payIndex = Number(e);
            },
            setMess: function(e) {
                this.vm.message = e.detail.value, this.$apply();
            },
            payRequest: function(e) {
                var t = _wepy2.default.$instance, r = [ this.vm, {}, "", "", {} ], o = r[0], n = r[1], a = r[2], s = r[3], i = r[4];
                _core.core.formId(e.detail.formId);
                var c = this.payIndex, d = (0, _lodashGet2.default)(t.globalData.address, "name", "");
                if (-999 == o.address.modeId) return void _core.tools.ShowToast("亲，请选择配送方式", this);
                if (0 == c) return void _core.tools.ShowToast("亲，请选择支付方式", this);
                n = {
                    userName: o.address.contact,
                    telNumber: o.address.phone
                }, a = o.address.contact, s = o.address.phone, 0 == o.address.modeId || 6 == o.address.modeId ? (n.postalCode = 0, 
                n.detailInfo = o.address.address) : (n.cityName = o.address.city, n.detailInfo = o.address.street, 
                n.countyName = o.address.district, n.provinceName = o.address.province), i = {
                    FreightTemplateId: 0,
                    AccepterName: a,
                    AccepterTelePhone: s,
                    message: o.message
                };
                var u = {
                    isgroup: 0,
                    groupid: 0,
                    goodtype: 0,
                    couponlogid: 0,
                    discountType: 0,
                    salesManRecordId: 0,
                    carId: o.cartid,
                    buyMode: c,
                    flashDealId: o.flashDealId,
                    storename: d,
                    getWay: o.address.modeId,
                    order: JSON.stringify(i),
                    address: JSON.stringify(n),
                    zqStoreId: (0, _lodashGet2.default)(o.address, "Id", "")
                };
                this.addOrder(c, u);
            }
        }, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this._g = r.preload.vm_order, this.$apply(), e.next = 4, _core.tools.setPageSkin(this);

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
            this.orderInfo(this._g);
        }
    }, {
        key: "orderInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, o, n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = _wepy2.default.$instance, o = r.globalData.address || {}, t.message = "", 
                        t.realPrice = t.totalPrice, !Object.keys(o).length) {
                            e.next = 13;
                            break;
                        }
                        return n = {
                            cartid: t.cartid,
                            city: o.city,
                            province: o.province
                        }, e.next = 8, _core.core.getFreight(n);

                      case 8:
                        a = e.sent, 1 == o.modeId ? t.fee = parseFloat(a.data.fee.div(100)).toFixed(2) : t.fee = "0.00", 
                        t.realPrice = Number(t.realPrice).add(Number(t.fee)).toFixed(2), e.next = 15;
                        break;

                      case 13:
                        t.fee = "0.00", o.modeId = -999;

                      case 15:
                        t.valueMoney = r.globalData.vipInfo.valueMoney, t.address = o, this.vm = t, this.$apply();

                      case 19:
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
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var o, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (Number(this._index) != Number(this.payIndex)) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (wx.showNavigationBarLoading(), 2 != t) {
                            e.next = 11;
                            break;
                        }
                        return e.next = 6, _core.tools.showModal("是否使用储值支付");

                      case 6:
                        if (o = e.sent, 0 != o.confirm) {
                            e.next = 11;
                            break;
                        }
                        return this._index = -1, this.$apply(), e.abrupt("return");

                      case 11:
                        return this._index = t, this.$apply(), e.next = 15, _core.core.addMinOrder(r);

                      case 15:
                        if (n = e.sent, 1 != n.isok) {
                            e.next = 25;
                            break;
                        }
                        if (null != n.reductionCart && (_wepy2.default.$instance.globalData.reduction = n.reductionCart), 
                        "0.00" !== this.vm.realPrice) {
                            e.next = 22;
                            break;
                        }
                        return _core.tools.loading("支付成功"), this.goWhere(n), e.abrupt("return");

                      case 22:
                        1 == t ? this.wxPay(n) : this.xwPay(n), e.next = 28;
                        break;

                      case 25:
                        this._index = -1, wx.hideNavigationBarLoading(), _core.tools.showModal(n.msg, !1);

                      case 28:
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
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = {
                            orderid: t.orderid,
                            type: 1
                        }, e.next = 3, _core.pay.PayOrder(r);

                      case 3:
                        o = e.sent, "" != o & o.errMsg.includes("requestPayment:ok") ? (_core.tools.loading("支付成功"), 
                        this.goWhere(t)) : (_core.tools.loading("取消支付"), this.goWhere(t));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "xwPay",
        value: function(e) {
            _core.tools.loading("支付成功"), this.goWhere(e);
        }
    }, {
        key: "goWhere",
        value: function(e) {
            wx.hideNavigationBarLoading(), setTimeout(function(t) {
                _core.tools.goRedirecto("../good/goodOlt?dbOrder=" + e.dbOrder);
            }, 1e3);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(order, "pages/miaoSha/order"));