function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function o(n, i) {
                try {
                    var s = t[n](i), a = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(a).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(a);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _com_coup = require("./../../components/com_coup.js"), _com_coup2 = _interopRequireDefault(_com_coup), _com_goodItem = require("./../../components/com_goodItem.js"), _com_goodItem2 = _interopRequireDefault(_com_goodItem), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), order = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        o.config = {
            navigationBarTitleText: "订单确认",
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index",
                "wxc-price": "../../packages/@minui/wxc-price/dist/index"
            }
        }, o.$repeat = {}, o.$props = {
            comItem: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.sync": "vm_goods.list"
            },
            comCoup: {
                "v-bind:vm.sync": "vmMycoupon",
                "xmlns:v-on": ""
            }
        }, o.$events = {
            comCoup: {
                "v-on:useMyCoupon": "useMyCoupon"
            }
        }, o.components = {
            comItem: _com_goodItem2.default,
            comCoup: _com_coup2.default
        }, o.data = {
            currentSkin: {},
            vm_goods: {},
            payIndex: 0,
            toast: {},
            vmMycoupon: {
                list: [],
                ispost: !1,
                loadall: !1,
                pageindex: 1,
                pagesize: 10,
                state: 0,
                listname: "pickmycoupon"
            },
            couponsShow: !1,
            pickCoupon: null,
            money_cal_fmt: 0,
            money_coupon: 0,
            _index: -1,
            _coupIndex: 0,
            codSwitch: !1,
            fullReduction: null
        }, o.methods = {
            chooseAddress: function(e) {
                this.$preload("cartid", e), this.$navigate("/pages/my/myaddress?type=order");
            },
            chooseCoupons: function() {
                -999 != this.vm_goods.address.modeId ? this.couponsShow = !this.couponsShow : _core.tools.showModal("请先选择地址", !1);
            },
            pickCouponOK: function() {
                this.couponsShow = !1, this.calMoney();
            },
            notuseCoupon: function() {
                this.pickCoupon = null, this.couponsShow = !1, this.calMoney("nouse");
            },
            useMyCoupon: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.pro.useCoupon(this.vmMycoupon.list, this.vm_goods.list, t);

                          case 2:
                            r = e.sent, this.pickCoupon = r, this.couponsShow = !1, this.$apply(), this.calMoney();

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            payMode: function(e) {
                this.payIndex = Number(e);
            },
            setMess: function(e) {
                this.vm_goods.message = e.detail.value, this.$apply();
            },
            payRequest: function(e) {
                var t = _wepy2.default.$instance, r = [ this.vm_goods, {}, "", "", {} ], o = r[0], n = r[1], i = r[2], s = r[3], a = r[4];
                _core.core.formId(e.detail.formId);
                var u = this.payIndex, c = (0, _lodashGet2.default)(t.globalData.address, "name", "");
                if (-999 == o.address.modeId) return void _core.tools.ShowToast("亲，请选择配送方式", this);
                if (0 == u) return void _core.tools.ShowToast("亲，请选择支付方式", this);
                n = {
                    userName: o.address.contact,
                    telNumber: o.address.phone
                }, i = o.address.contact, s = o.address.phone, 0 == o.address.modeId || 6 == o.address.modeId ? (n.postalCode = 0, 
                n.detailInfo = o.address.address) : (n.cityName = o.address.city, n.detailInfo = o.address.street, 
                n.countyName = o.address.district, n.provinceName = o.address.province), a = {
                    FreightTemplateId: 0,
                    AccepterName: i,
                    AccepterTelePhone: s,
                    message: o.message
                };
                var l = {
                    isgroup: 0,
                    groupid: 0,
                    goodtype: 0,
                    carId: o.cartid,
                    buyMode: u,
                    storename: c,
                    getWay: o.address.modeId,
                    order: JSON.stringify(a),
                    address: JSON.stringify(n),
                    salesManRecordId: _wepy2.default.$instance.globalData.record,
                    discountType: (0, _lodashGet2.default)(this.pickCoupon, "discountType", 0),
                    couponlogid: null == this.pickCoupon ? 0 : this.pickCoupon.Id
                };
                this.addOrder(u, l);
            }
        }, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e, t) {
            this._order = t, this.$apply(), _core.tools.setPageSkin(this), this.getPayWaysConfig();
        }
    }, {
        key: "getPayWaysConfig",
        value: function() {
            var e = this;
            _core.core.getPageConfig().then(function(t) {
                if (t && t.isok) {
                    var r = t.extraConfig;
                    e.codSwitch = r.CashOnDelivery, e.$apply();
                }
            });
        }
    }, {
        key: "onShow",
        value: function() {
            this.orderConfig(this._order);
        }
    }, {
        key: "reachCouponBottom",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getCoup(this.vm_goods, this);

                      case 2:
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
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, o, n, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = _wepy2.default.$instance, o = t.preload.vm_order, n = (0, _lodashGet2.default)(r.globalData, "address", {}), 
                        "0.01" == o.totalPrice ? (o.lessPrice = "0.00", o.vPrice = o.totalPrice) : (o.lessPrice = this.vipCompute(o.list, o.totalPrice), 
                        o.vPrice = parseFloat(Number(o.totalPrice).sub(Number(o.lessPrice))).toFixed(2)), 
                        e.next = 6, this.fullCompute(o, n);

                      case 6:
                        return i = e.sent, o.lessPrice = i.lessPrice, o.realPrice = i.realPrice, o.vipPrice = o.lessPrice, 
                        o.fee = i.fee, o.address = i.address, o.valueMoney = r.globalData.vipInfo.valueMoney, 
                        this.vmMycoupon = _core.tools.resetArray(this.vmMycoupon), this.vm_goods = o, this.$apply(), 
                        e.next = 18, _core.core.getCoup(o, this);

                      case 18:
                        return e.next = 20, this.calMoney();

                      case 20:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "vipCompute",
        value: function(e, t) {
            for (var r = 0, o = 0, n = e.length; o < n; o++) r += Number(e[o].discount).div(100).mul(Number(e[o].discountPrice).mul(Number(e[o].Count)));
            return parseFloat(Number(t).sub(Number(r))).toFixed(2);
        }
    }, {
        key: "feeCompute",
        value: function() {
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var o, n, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o = 0, n = {
                            cartid: t.cartid,
                            city: r.city,
                            province: r.province,
                            discountType: (0, _lodashGet2.default)(this.pickCoupon, "discountType", 0),
                            couponlogid: (0, _lodashGet2.default)(this.pickCoupon, "Id", "")
                        }, !r || 1 != r.modeId) {
                            e.next = 14;
                            break;
                        }
                        return e.next = 5, _core.core.getFreight(n);

                      case 5:
                        if (i = e.sent, !i.data.canpay) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return", parseFloat(i.data.fee.div(100)).toFixed(2));

                      case 10:
                        return i.data.delierymsg && _core.tools.showModal(i.data.delierymsg + ",请重新选择地址", !1), 
                        e.abrupt("return", "0.00");

                      case 12:
                        e.next = 15;
                        break;

                      case 14:
                        return e.abrupt("return", "0.00");

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "fullCompute",
        value: function() {
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var o, n, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = {}, n = _wepy2.default.$instance, e.next = 4, _core.core.GetFullReductionByAid();

                      case 4:
                        if (i = e.sent, !Object.keys(r).length || -999 == r.modeId) {
                            e.next = 11;
                            break;
                        }
                        return e.next = 8, this.feeCompute(t, r);

                      case 8:
                        o.fee = e.sent, e.next = 13;
                        break;

                      case 11:
                        o.fee = "0.00", r.modeId = -999;

                      case 13:
                        return i && Number(t.vPrice) >= Number(i.OrderMoneyStr) ? (1 === i.VipDiscount ? (o.lessPrice = "0.00", 
                        o.realPrice = parseFloat(Number(t.totalPrice).sub(Number(i.ReducetionMoneyStr))).toFixed(2), 
                        this.fullReduction = i) : (o.lessPrice = this.vipCompute(t.list, t.totalPrice), 
                        o.realPrice = parseFloat(Number(t.totalPrice).sub(Number(i.ReducetionMoneyStr)).sub(Number(o.lessPrice))).toFixed(2), 
                        this.fullReduction = i), this.$apply(), Number(o.realPrice) < 0 && (o.realPrice = "0.00")) : "0.01" == t.totalPrice ? (o.lessPrice = "0.00", 
                        o.realPrice = t.totalPrice) : (o.lessPrice = this.vipCompute(t.list, t.totalPrice), 
                        o.realPrice = parseFloat(Number(t.totalPrice).sub(Number(o.lessPrice))).toFixed(2)), 
                        o.realPrice = parseFloat(Number(o.realPrice).add(Number(o.fee))).toFixed(2), o.address = r, 
                        e.abrupt("return", o);

                      case 17:
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
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, o, n, i, s, a, u, c, l;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = 0, o = 0, n = this.vm_goods, i = _wepy2.default.$instance, s = this.pickCoupon, 
                        a = (0, _lodashGet2.default)(i.globalData, "address", {}), u = 100 * (Number(n.totalPrice) || 0), 
                        !(null == s || u <= 0 || this._coupIndex == s.Id)) {
                            e.next = 9;
                            break;
                        }
                        return e.abrupt("return");

                      case 9:
                        if ("nouse" != t) {
                            e.next = 12;
                            break;
                        }
                        return this.noTerm("", n, a), e.abrupt("return");

                      case 12:
                        if (s.Money = Number(s.Money), "" != s.GoodsIdStr) {
                            e.next = 23;
                            break;
                        }
                        if (!(s.LimitMoney <= 0 || u >= s.LimitMoney)) {
                            e.next = 19;
                            break;
                        }
                        r = this.allGoods(n, s, u).calMoney, o = this.allGoods(n, s, u).money_coupon, e.next = 21;
                        break;

                      case 19:
                        return this.noTerm("未达到优惠券使用条件！", n, a), e.abrupt("return");

                      case 21:
                        e.next = 32;
                        break;

                      case 23:
                        if (c = s.GoodsIdStr.split(","), !(l = n.list.some(function(e, t) {
                            return c.includes(e.goodid.toString());
                        }))) {
                            e.next = 30;
                            break;
                        }
                        r = this.sameGoods(n, s, c, u).calMoney, o = this.sameGoods(n, s, c, u).money_coupon, 
                        e.next = 32;
                        break;

                      case 30:
                        return this.noTerm("不符合优惠券使用条件！", n, a), e.abrupt("return");

                      case 32:
                        return e.next = 34, this.feeCompute(n, n.address);

                      case 34:
                        n.fee = e.sent, r = r.div(100), this.money_cal_fmt = parseFloat(Number(r).add(Number(n.fee))).toFixed(2), 
                        this.money_coupon = o.toFixed(2), this.$apply();

                      case 39:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "sameGoods",
        value: function(e, t, r, o) {
            var n = 0, i = 0, s = 0, a = 0, u = 0;
            if (e.list.filter(function(e, t) {
                return r.includes(e.goodid.toString());
            }).forEach(function(e, t) {
                n += Number(e.discountPrice).mul(100).mul(Number(e.Count));
            }), t.LimitMoney <= 0 || n >= t.LimitMoney) {
                for (var c = 0, l = e.list.length; c < l; c++) 100 != Number(e.list[c].discount) && r != e.list[c].goodid && (1 == t.discountType ? i += Number(e.list[c].discountPrice).mul(Number(e.list[c].Count)).mul(100) : i += Number(e.list[c].discount).div(100).mul(Number(e.list[c].discountPrice)).mul(Number(e.list[c].Count)).mul(100), 
                s += Number(e.list[c].discount).div(100).mul(Number(e.list[c].discountPrice)).mul(Number(e.list[c].Count)).mul(100));
                return e.lessPrice = 1 == t.discountType ? "0.00" : e.vipPrice, o = Number(e.totalPrice).sub(Number(e.lessPrice)).mul(100), 
                o = Number(o).sub(Number(i)), 1 == t.discountType && (e.lessPrice = parseFloat(Number(i).sub(Number(s)).div(100)).toFixed(2)), 
                a = 0 == t.CouponWay ? t.Money : o.mul(1..sub(t.Money.div(100).mul(10).div(100))), 
                n <= 0 && (n = 0), a <= 0 && (a = 0), n - a < 0 && (a = n), u = Number(o).sub(Number(a)), 
                u <= 0 && (u = 0), u = Number(u).add(Number(s)), a = a.div(100), this._coupIndex = t.Id, 
                this.fullReduction = null, this.vm_goods = e, this.$apply(), {
                    calMoney: u,
                    money_coupon: a
                };
            }
        }
    }, {
        key: "allGoods",
        value: function(e, t, r) {
            var o = 0, n = 0;
            return e.lessPrice = 1 == t.discountType ? "0.00" : e.vipPrice, r = Number(e.totalPrice).sub(Number(e.lessPrice)).mul(100), 
            0 == t.CouponWay ? (o = r.sub(t.Money), n = t.Money.div(100)) : (o = r.mul(t.Money.div(100).mul(10).div(100)), 
            n = r.mul(1..sub(t.Money.div(100).mul(10).div(100))).div(100)), o <= 0 && (o = 0), 
            this.fullReduction = null, this._coupIndex = t.Id, this.vm_goods = e, this.$apply(), 
            {
                calMoney: o,
                money_coupon: n
            };
        }
    }, {
        key: "noTerm",
        value: function() {
            function e(e, r, o) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, o) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return "" != t && (_core.tools.showModal(t, !1), this.pickCoupon = null), e.next = 3, 
                        this.fullCompute(r, o);

                      case 3:
                        n = e.sent, r.lessPrice = n.lessPrice, r.realPrice = n.realPrice, this.vm_goods = r, 
                        this.$apply();

                      case 8:
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
                var o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (Number(this._index) != Number(this.payIndex)) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (wx.showNavigationBarLoading(), e.t0 = 2 == t, !e.t0) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 7, this.payTypeTips("是否使用储值支付");

                      case 7:
                        e.t0 = !e.sent;

                      case 8:
                        if (!e.t0) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return");

                      case 10:
                        if (e.t1 = 11 == t, !e.t1) {
                            e.next = 15;
                            break;
                        }
                        return e.next = 14, this.payTypeTips("是否使用货到付款");

                      case 14:
                        e.t1 = !e.sent;

                      case 15:
                        if (!e.t1) {
                            e.next = 17;
                            break;
                        }
                        return e.abrupt("return");

                      case 17:
                        return this._index = t, this.$apply(), e.next = 21, _core.core.addMinOrder(r);

                      case 21:
                        if (o = e.sent, 1 != o.isok) {
                            e.next = 44;
                            break;
                        }
                        if (null != o.reductionCart && (_wepy2.default.$instance.globalData.reduction = o.reductionCart), 
                        !(r.couponlogid > 0)) {
                            e.next = 33;
                            break;
                        }
                        return e.prev = 25, e.next = 28, _core.core.SetWxCouponsUnavailable(r.couponlogid);

                      case 28:
                        e.next = 33;
                        break;

                      case 30:
                        e.prev = 30, e.t2 = e.catch(25), console.log(e.t2);

                      case 33:
                        if ("0.00" !== this.money_cal_fmt) {
                            e.next = 37;
                            break;
                        }
                        return _core.tools.loading("支付成功"), this.goWhere(o), e.abrupt("return");

                      case 37:
                        if ("0.00" !== this.vm_goods.realPrice) {
                            e.next = 41;
                            break;
                        }
                        return _core.tools.loading("支付成功"), this.goWhere(o), e.abrupt("return");

                      case 41:
                        1 == t ? this.wxPay(o) : this.xwPay(o), e.next = 47;
                        break;

                      case 44:
                        this._index = -1, wx.hideNavigationBarLoading(), _core.tools.showModal(o.msg, !1);

                      case 47:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 25, 30 ] ]);
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
                        if ("" == (o = e.sent) || !o.errMsg.includes("requestPayment:ok")) {
                            e.next = 9;
                            break;
                        }
                        _core.tools.loading("支付成功"), this.goWhere(t), e.next = 13;
                        break;

                      case 9:
                        return e.next = 11, _core.pay.deleteLastFormId();

                      case 11:
                        _core.tools.loading("取消支付"), this.goWhere(t);

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
    }, {
        key: "payTypeTips",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.showModal(t);

                      case 2:
                        if (r = e.sent, 0 != r.confirm) {
                            e.next = 8;
                            break;
                        }
                        return this._index = -1, this.$apply(), wx.hideNavigationBarLoading(), e.abrupt("return", !1);

                      case 8:
                        return e.abrupt("return", !0);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(order, "pages/good/goodOrder"));