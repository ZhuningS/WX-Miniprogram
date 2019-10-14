function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var o = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function r(i, n) {
                try {
                    var s = o[i](n), u = s.value;
                } catch (e) {
                    return void t(e);
                }
                if (!s.done) return Promise.resolve(u).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(u);
            }
            return r("next");
        });
    };
}

function _classCallCheck(e, o) {
    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, o) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !o || "object" != typeof o && "function" != typeof o ? e : o;
}

function _inherits(e, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    e.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, o) {
        for (var t = 0; t < o.length; t++) {
            var r = o[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(o, t, r) {
        return t && e(o.prototype, t), r && e(o, r), o;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _com_goodItem = require("./../../components/com_goodItem.js"), _com_goodItem2 = _interopRequireDefault(_com_goodItem), _com_coup = require("./../../components/com_coup.js"), _com_coup2 = _interopRequireDefault(_com_coup), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), group2Order = function(e) {
    function o() {
        var e, t, r, i;
        _classCallCheck(this, o);
        for (var n = arguments.length, s = Array(n), u = 0; u < n; u++) s[u] = arguments[u];
        return t = r = _possibleConstructorReturn(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "订单确认",
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            }
        }, r.$repeat = {}, r.$props = {
            comItem: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.sync": "vm_goods.list"
            },
            comCoup: {
                "v-bind:vm.sync": "vmMycoupon",
                "xmlns:v-on": ""
            }
        }, r.$events = {
            comCoup: {
                "v-on:useMyCoupon": "useMyCoupon"
            }
        }, r.components = {
            comItem: _com_goodItem2.default,
            comCoup: _com_coup2.default
        }, r.data = {
            currentSkin: {},
            vm_goods: {},
            toast: {},
            isgroup: 0,
            payIndex: 0,
            couponsShow: !1,
            pickCoupon: null,
            money_cal_fmt: 0,
            money_coupon: 0,
            vmMycoupon: {
                list: [],
                ispost: !1,
                loadall: !1,
                pageindex: 1,
                pagesize: 10,
                state: 0,
                listname: "pickmycoupon"
            },
            _index: -1,
            _coupIndex: 0
        }, r.methods = {
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
                    return o.apply(this, arguments);
                }
                var o = _asyncToGenerator(regeneratorRuntime.mark(function e(o) {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.pro.useCoupon(this.vmMycoupon.list, this.vm_goods.list, o);

                          case 2:
                            t = e.sent, this.pickCoupon = t, this.couponsShow = !1, this.$apply(), this.calMoney();

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
                var o = [ this.vm_goods, {}, "", "", {} ], t = o[0], r = o[1], i = o[2], n = o[3], s = o[4];
                _core.core.formId(e.detail.formId);
                var u = this.payIndex;
                if (-999 == t.address.modeId) return void _core.tools.ShowToast("亲，请选择配送方式", this);
                if (0 == u) return void _core.tools.ShowToast("亲，请选择支付方式", this);
                r = {
                    userName: t.address.contact,
                    telNumber: t.address.phone
                }, i = t.address.contact, n = t.address.phone, 0 == t.address.modeId || 6 == t.address.modeId ? (r.postalCode = 0, 
                r.detailInfo = t.address.address) : (r.cityName = t.address.city, r.detailInfo = t.address.street, 
                r.countyName = t.address.district, r.provinceName = t.address.province), s = {
                    FreightTemplateId: 0,
                    AccepterName: i,
                    AccepterTelePhone: n,
                    Message: t.message
                };
                var a = this.isgroup;
                3 == a && (a = 0);
                var c = {
                    carId: t.cartid,
                    address: JSON.stringify(r),
                    order: JSON.stringify(s),
                    buyMode: u,
                    storename: (0, _lodashGet2.default)(_wepy2.default.$instance.globalData.address, "name", ""),
                    getWay: t.address.modeId,
                    isgroup: a,
                    goodtype: t.goodtype,
                    groupid: t.groupId,
                    discountType: (0, _lodashGet2.default)(this.pickCoupon, "discountType", 0),
                    couponlogid: null == this.pickCoupon ? 0 : this.pickCoupon.Id,
                    zqStoreId: (0, _lodashGet2.default)(t.address, "Id", "")
                };
                this.addOrder(u, c);
            }
        }, i = t, _possibleConstructorReturn(r, i);
    }
    return _inherits(o, e), _createClass(o, [ {
        key: "onLoad",
        value: function(e, o) {
            this._orderdata = o, this.isgroup = Number((0, _lodashGet2.default)(e, "isgroup", 0)), 
            this.$apply(), _core.tools.setPageSkin(this);
        }
    }, {
        key: "onShow",
        value: function() {
            this.orderConfig(this._orderdata, this.isgroup);
        }
    }, {
        key: "orderConfig",
        value: function() {
            function e(e, t) {
                return o.apply(this, arguments);
            }
            var o = _asyncToGenerator(regeneratorRuntime.mark(function e(o, t) {
                var r, i, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = _wepy2.default.$instance, i = o.preload.vm_goods, n = r.globalData.address || {}, 
                        1 == t || 3 == t ? (i.mainJoinStr = 3 == t ? "0.00" : i.HeadDeductStr, i.joinPrice = Number(i.list[0].oldPrice).sub(Number(i.list[0].discountPrice)).mul(Number(i.totalCount)).toFixed(2)) : (i.joinPrice = 0, 
                        i.mainJoinStr = 0), i.vipPrice = this.vipMoney(i, t), i.shouldPay = this.payMoney(i.totalPrice, i.vipPrice, i.mainJoinStr, i.joinPrice), 
                        Number(i.shouldPay) <= 0 && (i.shouldPay = "0.00"), !Object.keys(n).length) {
                            e.next = 13;
                            break;
                        }
                        return e.next = 10, this.feeComp(i, n);

                      case 10:
                        i.fee = e.sent, e.next = 15;
                        break;

                      case 13:
                        i.fee = "0.00", n.modeId = -999;

                      case 15:
                        return i.shouldPay = parseFloat(Number(i.shouldPay).add(Number(i.fee))).toFixed(2), 
                        i.valueMoney = r.globalData.vipInfo.valueMoney, i.address = n, this.vm_goods = i, 
                        this.$apply(), e.next = 22, _core.core.getCoup(i, this);

                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "feeComp",
        value: function() {
            function e(e, t) {
                return o.apply(this, arguments);
            }
            var o = _asyncToGenerator(regeneratorRuntime.mark(function e(o, t) {
                var r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = {
                            cartid: o.cartid,
                            province: t.province,
                            city: t.city
                        }, 1 != t.modeId) {
                            e.next = 13;
                            break;
                        }
                        return e.next = 4, _core.core.getFreight(r);

                      case 4:
                        if (i = e.sent, !i.data.canpay) {
                            e.next = 9;
                            break;
                        }
                        return e.abrupt("return", parseFloat(i.data.fee.div(100)).toFixed(2));

                      case 9:
                        return i.data.delierymsg && _core.tools.showModal(i.data.delierymsg + ",请重新选择地址", !1), 
                        e.abrupt("return", "0.00");

                      case 11:
                        e.next = 14;
                        break;

                      case 13:
                        return e.abrupt("return", "0.00");

                      case 14:
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
                return o.apply(this, arguments);
            }
            var o = _asyncToGenerator(regeneratorRuntime.mark(function e(o, t) {
                var r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (Number(this._index) != Number(this.payIndex)) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (wx.showNavigationBarLoading(), 2 != o) {
                            e.next = 11;
                            break;
                        }
                        return e.next = 6, _core.tools.showModal("是否使用储值支付");

                      case 6:
                        if (r = e.sent, 0 != r.confirm) {
                            e.next = 11;
                            break;
                        }
                        return this._index = -1, this.$apply(), e.abrupt("return");

                      case 11:
                        return this._index = o, this.$apply(), e.next = 15, _core.core.addMinOrder(t);

                      case 15:
                        if (i = e.sent, 1 != i.isok) {
                            e.next = 30;
                            break;
                        }
                        if (null != i.reductionCart && (_wepy2.default.$instance.globalData.reduction = i.reductionCart), 
                        "0.00" !== this.money_cal_fmt) {
                            e.next = 22;
                            break;
                        }
                        return _core.tools.loading("支付成功"), this.goWhere(i.dbOrder), e.abrupt("return");

                      case 22:
                        if ("0.00" !== this.vm_goods.totalPrice) {
                            e.next = 26;
                            break;
                        }
                        return _core.tools.loading("支付成功"), this.goWhere(i.dbOrder), e.abrupt("return");

                      case 26:
                        this.dbOrder = i.dbOrder, 1 == o ? this.wxPay(i.orderid, i.dbOrder) : this.xwPay(i.dbOrder), 
                        e.next = 32;
                        break;

                      case 30:
                        wx.hideNavigationBarLoading(), _core.tools.showModal(i.msg, !1);

                      case 32:
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
            function e(e, t) {
                return o.apply(this, arguments);
            }
            var o = _asyncToGenerator(regeneratorRuntime.mark(function e(o, t) {
                var r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (0 != this.vm_goods.shouldPay) {
                            e.next = 4;
                            break;
                        }
                        return _core.tools.loading("支付成功"), this.goWhere(t), e.abrupt("return");

                      case 4:
                        return r = {
                            orderid: o,
                            type: 1
                        }, e.next = 7, _core.pay.PayOrder(r);

                      case 7:
                        if ("" == (i = e.sent) || !i.errMsg.includes("requestPayment:ok")) {
                            e.next = 13;
                            break;
                        }
                        _core.tools.loading("支付成功"), this.goWhere(t), e.next = 17;
                        break;

                      case 13:
                        return e.next = 15, _core.pay.deleteLastFormId();

                      case 15:
                        _core.tools.loading("取消支付"), this.goWhere(t);

                      case 17:
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
        key: "reachCouponBottom",
        value: function() {
            function e() {
                return o.apply(this, arguments);
            }
            var o = _asyncToGenerator(regeneratorRuntime.mark(function e() {
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
        key: "goWhere",
        value: function(e) {
            if (wx.hideNavigationBarLoading(), 0 != this.vm_goods.groupId) return void setTimeout(function(o) {
                _core.tools.goRedirecto("../group2/group2Dlt?id=" + e + "&isgroup=0");
            }, 1e3);
            1 == this.isgroup ? setTimeout(function(o) {
                _core.tools.goRedirecto("../group2/group2Dlt?id=" + e + "&isgroup=0");
            }, 1e3) : setTimeout(function(o) {
                _core.tools.goRedirecto("../good/goodOlt?dbOrder=" + e + "&isgroup=0");
            }, 1e3);
        }
    }, {
        key: "calMoney",
        value: function(e) {
            var o = this.pickCoupon, t = this.vm_goods;
            if (!o || this._coupIndex != o) {
                e && "nouse" == e && (t.vipPrice = this.vipMoney(t, this.isgroup), t.shouldPay = parseFloat(Number(t.totalPrice).sub(Number(t.joinPrice)).sub(Number(t.vipPrice)).add(Number(t.fee))).toFixed(2), 
                1 == this.isgroup && (t.shouldPay = parseFloat(Number(t.shouldPay).sub(Number(t.HeadDeductStr))).toFixed(2)));
                var r = 100 * (Number(t.shouldPay) || 0), i = 100 * Number(t.fee);
                r -= i;
                var n = r, s = 0;
                if (r > 0 && null != o) if ("" == o.GoodsIdStr) {
                    if (!(o.LimitMoney <= 0 || r >= o.LimitMoney)) return wx.showModal({
                        title: "提示",
                        content: "未达到优惠券使用条件！"
                    }), t.vipPrice = this.vipMoney(t, this.isgroup), t.shouldPay = parseFloat(Number(t.totalPrice).sub(Number(t.joinPrice)).sub(Number(t.vipPrice)).add(Number(t.fee))).toFixed(2), 
                    t.shouldPay = parseFloat(Number(t.shouldPay).sub(Number(t.mainJoinStr))).toFixed(2), 
                    this.vm_goods = t, this.pickCoupon = null, void this.$apply();
                    if (o && 1 == o.discountType && (t.shouldPay = parseFloat(Number(t.totalPrice).sub(Number(t.joinPrice)).add(Number(t.fee))).toFixed(2), 
                    1 == this.isgroup && (t.shouldPay = parseFloat(Number(t.shouldPay).sub(Number(t.HeadDeductStr))).toFixed(2)), 
                    t.vipPrice = "0.00"), o && 0 == o.discountType && (t.vipPrice = this.vipMoney(t, this.isgroup), 
                    t.shouldPay = parseFloat(Number(t.totalPrice).sub(Number(t.joinPrice)).sub(Number(t.vipPrice)).add(Number(t.fee))).toFixed(2), 
                    1 == this.isgroup && (t.shouldPay = parseFloat(Number(t.shouldPay).sub(Number(t.HeadDeductStr))).toFixed(2))), 
                    r = 100 * (Number(t.shouldPay) || 0), i = 100 * Number(t.fee), r -= i, n = r, o.Money = Number(o.Money), 
                    0 == o.CouponWay) n = r.sub(o.Money), s = o.Money.div(100); else if (1 == o.CouponWay) {
                        var u = o.Money.div(100).mul(10).div(100);
                        n = r.mul(u);
                        var a = 1..sub(u);
                        s = r.mul(a).div(100);
                    }
                    n < 0 && (n = 0);
                } else {
                    var c = o.GoodsIdStr.split(","), d = this.vm_goods.list.some(function(e, o) {
                        return c.includes(e.goodid.toString());
                    });
                    if (!d) return wx.showModal({
                        title: "提示",
                        content: "不符合优惠券使用条件！"
                    }), t.vipPrice = this.vipMoney(t, this.isgroup), t.shouldPay = parseFloat(Number(t.totalPrice).sub(Number(t.joinPrice)).sub(Number(t.vipPrice)).add(Number(t.fee))).toFixed(2), 
                    this.vm_goods = t, this.pickCoupon = null, void this.$apply();
                    var p = this.vm_goods.list.filter(function(e, o) {
                        return c.includes(e.goodid.toString());
                    }), l = 0;
                    if (p.forEach(function(e, o) {
                        l += Number(e.discountPrice).mul(100).mul(Number(e.Count));
                    }), o.LimitMoney <= 0 || l >= o.LimitMoney) {
                        if (o.Money = Number(o.Money), 0 == o.CouponWay) s = o.Money; else if (1 == o.CouponWay) {
                            var u = o.Money.div(100).mul(10).div(100), a = 1..sub(u);
                            s = l.mul(a);
                        }
                        l < 0 && (l = 0), s < 0 && (s = 0), l - s < 0 && (s = l), o && 1 == o.discountType && (r = Number(t.totalPrice).sub(Number(t.joinPrice)).add(Number(t.fee)).mul(100), 
                        1 == this.isgroup && (r = Number(r).sub(Number(t.HeadDeductStr).mul(100))), t.vipPrice = "0.00"), 
                        o && 0 == o.discountType && (t.vipPrice = this.vipMoney(t, this.isgroup), r = Number(t.totalPrice).sub(Number(t.joinPrice)).sub(Number(t.vipPrice)).add(Number(t.fee)).mul(100), 
                        1 == this.isgroup && (r = Number(r).sub(Number(t.HeadDeductStr).mul(100)))), n = r.sub(Number(s)), 
                        n < 0 && (n = 0), s = s.div(100);
                    }
                }
                o && (this._coupIndex = o.Id), n = n.add(i);
                var m = n.div(100).toFixed(2);
                this.money_cal_fmt = m, this.money_coupon = s.toFixed(2), this.vm_goods = t, this.$apply();
            }
        }
    }, {
        key: "payMoney",
        value: function(e, o, t, r) {
            return parseFloat(Number(e).sub(Number(o)).sub(Number(t)).sub(Number(r))).toFixed(2);
        }
    }, {
        key: "vipMoney",
        value: function(e, o) {
            var t = Number(e.list[0].discount).div(100), r = 0, i = 0;
            return 1 == Number(o) || 3 == Number(o) ? (r = Number(e.list[0].discountPrice).mul(Number(e.list[0].Count)).mul(t), 
            i = Number(Number(e.list[0].discountPrice).mul(Number(e.list[0].Count)).sub(r)).toFixed(2)) : (r = Number(e.totalPrice).mul(t), 
            i = Number(Number(e.totalPrice).sub(r)).toFixed(2)), i;
        }
    } ]), o;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(group2Order, "pages/group2/group2Order"));