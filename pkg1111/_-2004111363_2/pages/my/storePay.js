function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function o(r, i) {
                try {
                    var a = t[r](i), s = a.value;
                } catch (e) {
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(s);
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
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _com_coup = require("./../../components/com_coup.js"), _com_coup2 = _interopRequireDefault(_com_coup), storePay = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        o.config = {
            navigationBarTitleText: "支付",
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index"
            }
        }, o.$repeat = {}, o.$props = {
            comCoup: {
                "xmlns:v-bind": "",
                "v-bind:vm.sync": "vmMycoupon",
                "xmlns:v-on": ""
            }
        }, o.$events = {
            comCoup: {
                "v-on:useMyCoupon": "useMyCoupon"
            }
        }, o.components = {
            comCoup: _com_coup2.default
        }, o.data = {
            vm: {},
            currentSkin: {},
            canpay: !1,
            couponsShow: !1,
            pickCoupon: null,
            money_cal_fmt: 0,
            money_vip: 0,
            money_coupon: 0,
            payMoney: "",
            vmMycoupon: {
                list: [],
                ispost: !1,
                loadall: !1,
                pageindex: 1,
                pagesize: 10,
                state: 99,
                listname: "pickmycoupon"
            },
            showPay: !1,
            payindex: 0
        }, o.methods = {
            selectPay: function(e) {
                this.payindex = e, this.showPay = !0, this.$apply();
            },
            hidePay: function() {
                this.payindex = 0, this.showPay = !1, this.$apply();
            },
            payMode: function(e) {
                this.payindex = Number(e.detail.value);
            },
            getPrice: function(e) {
                var t = e.detail.value;
                if (/[^\d.]/gi.test(t)) return void this.setData({
                    payMoney: "",
                    money_cal_fmt: "",
                    money_vip: 0,
                    money_coupon: 0
                });
                if ("." === t) return void (this.payMoney = "0.");
                if (t.split(".").length - 1 == 0 && t.length > 7) return void this.setData({
                    payMoney: t.substring(0, 7),
                    canpay: !1
                });
                if (t.split(".").length - 1 > 1) {
                    var n = t.split(".");
                    return void this.setData({
                        payMoney: n[0] + ".",
                        canpay: !1
                    });
                }
                if (t.split(".").length - 1 == 1 && t.split(".")[1].length > 2) {
                    var n = t.split(".");
                    return void this.setData({
                        payMoney: n[0] + "." + n[1].substring(0, 2),
                        canpay: !1
                    });
                }
                if (!/^[\d]{1,7}.?([\d]{1,2})?$/gi.test(t)) return this.payMoney = "", this.payMoney = "", 
                this.money_vip = 0, void (this.money_coupon = 0);
                this.payMoney = t, this.calMoney();
            },
            chooseCoupons: function() {
                this.couponsShow = !this.couponsShow;
            },
            useMyCoupon: function(e) {
                this.pickCoupon = this.vmMycoupon.list[e], this.calMoney(), this.couponsShow = !1;
            },
            pickCouponOK: function() {
                this.couponsShow = !1, this.calMoney();
            },
            notuseCoupon: function() {
                this.pickCoupon = null, this.couponsShow = !1, this.calMoney();
            },
            payIn: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n, o, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = Number(this.payindex), n = Number(this.payMoney), o = Number(this.money_cal), 
                            r = this.vm.price.AccountMoneyStr, 1 != this.canpay || 2 != t) {
                                e.next = 6;
                                break;
                            }
                            return e.abrupt("return");

                          case 6:
                            if (!(n <= 0)) {
                                e.next = 8;
                                break;
                            }
                            return e.abrupt("return");

                          case 8:
                            if (r || 2 != t) {
                                e.next = 11;
                                break;
                            }
                            return _core.tools.showModal("请先充值", !1), e.abrupt("return");

                          case 11:
                            if (!(o > 100 * r && 2 == t)) {
                                e.next = 14;
                                break;
                            }
                            return _core.tools.showModal("余额不足", !1), e.abrupt("return");

                          case 14:
                            if (!this.pickCoupon) {
                                e.next = 19;
                                break;
                            }
                            if (!(this.pickCoupon.LimitMoney > 0)) {
                                e.next = 19;
                                break;
                            }
                            if (!(n.mul(100) < this.pickCoupon.LimitMoney)) {
                                e.next = 19;
                                break;
                            }
                            return _core.tools.showModal("未达到优惠券使用条件！", !1), e.abrupt("return", !1);

                          case 19:
                            return e.next = 21, this.addOrder(n, o);

                          case 21:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
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
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.payInfo();

                      case 2:
                        _core.core.getCoup("", this);

                      case 3:
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
            function e(e, n) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
                var o, r, i, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (0 != (o = Number(this.payindex))) {
                            e.next = 4;
                            break;
                        }
                        return _core.tools.showModal("请选择支付方式", !1), e.abrupt("return");

                      case 4:
                        return e.next = 6, _core.tools.showModal("确认支付吗?");

                      case 6:
                        if (r = e.sent, i = (0, _lodashGet2.default)(this.pickCoupon, "discountType", 0), 
                        !r.confirm) {
                            e.next = 18;
                            break;
                        }
                        return wx.showNavigationBarLoading(), e.next = 12, _core.core.payByStore(this.pickCoupon, t, n, this.money_coupon, this.money_vip, o, i);

                      case 12:
                        if (a = e.sent, "number" != typeof n || 0 != n) {
                            e.next = 17;
                            break;
                        }
                        return _core.tools.loading("支付成功"), setTimeout(function() {
                            wx.hideNavigationBarLoading(), _core.tools.goNewPage("/pages/my/storeSuccess?orderid=" + a.obj.orderid);
                        }, 1e3), e.abrupt("return");

                      case 17:
                        1 == o ? this.wxPay(a.obj) : this.xwPay(a.obj);

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onHide",
        value: function() {
            this.vmMycoupon = {
                list: [],
                ispost: !1,
                loadall: !1,
                pageindex: 1,
                pagesize: 10,
                state: 99,
                listname: "pickmycoupon"
            }, this.$apply();
        }
    }, {
        key: "wxPay",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, o, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = this, o = {
                            orderid: t.orderid,
                            type: 1
                        }, e.next = 4, _core.pay.PayOrder(o);

                      case 4:
                        r = e.sent, "" != r && r.errMsg.includes("requestPayment:ok") ? (_core.tools.loading("支付成功"), 
                        setTimeout(function() {
                            wx.hideNavigationBarLoading(), _core.tools.goNewPage("/pages/my/storeSuccess?orderid=" + t.orderid);
                        }, 1e3)) : (wx.hideNavigationBarLoading(), _core.tools.loading("取消支付"));

                      case 6:
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
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        _core.tools.loading("支付成功"), setTimeout(function() {
                            wx.hideNavigationBarLoading(), _core.tools.goNewPage("/pages/my/storeSuccess?orderid=" + t.orderid);
                        }, 1e3);

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "reachCouponBottom",
        value: function() {
            _core.core.getCoup("", this);
        }
    }, {
        key: "payInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getVipInfo();

                      case 2:
                        return t = e.sent, e.next = 5, _core.core.valueMoney();

                      case 5:
                        n = e.sent, this.vm.vip = t, this.vm.price = n.saveMoneySetUser, this.$apply();

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "calMoney",
        value: function() {
            var e = Number(this.payMoney) || 0;
            e *= 100;
            var t = e, n = 0, o = 0, r = this.pickCoupon;
            if (e > 0) {
                var i = this.vm.vip;
                if (i.levelInfo && 1 == i.levelInfo.type && (null == r || r && 1 != r.discountType)) {
                    var a = t;
                    t = t.mul(i.levelInfo.discount.div(100));
                    var s = 1..sub(i.levelInfo.discount.div(100));
                    o = a.mul(s).div(100);
                }
                if (t < 0 && (t = 0), null != r) {
                    if (!(r.LimitMoney <= 0 || t >= r.LimitMoney)) return _core.tools.showModal("未达到优惠券使用条件！", !1), 
                    this.pickCoupon = null, void this.$apply();
                    if (r.Money = Number(r.Money), 0 == r.CouponWay) t = t.sub(r.Money), n = r.Money.div(100); else if (1 == r.CouponWay) {
                        var u = Number(r.Money_fmt).div(10), c = t;
                        t = t.mul(u);
                        var p = 1..sub(u);
                        n = c.mul(p).div(100);
                    }
                    t < 0 && (t = 0);
                }
                t > 100 * this.vm.price.AccountMoneyStr ? this.canpay = !0 : this.canpay = !1;
            }
            this.money_cal = t, this.money_cal_fmt = t.div(100).toFixed(2), this.money_vip = o.toFixed(2), 
            this.money_coupon = n.toFixed(2);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(storePay, "pages/my/storePay"));