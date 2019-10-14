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
                    var s = r[n](a), i = s.value;
                } catch (e) {
                    return void t(e);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), groupOrder = function(e) {
    function r() {
        var e, t, o, n;
        _classCallCheck(this, r);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return t = o = _possibleConstructorReturn(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(s))), 
        o.config = {
            navigationBarTitleText: "订单确认",
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            }
        }, o.components = {}, o.data = {
            currentSkin: {},
            vm_goods: {},
            payTypeRange: [ {
                name: "微信支付",
                value: 0
            }, {
                name: "储值支付",
                value: 1
            } ],
            payType: 0,
            shouldPay: 0,
            toast: {},
            _index: -1
        }, o.methods = {
            preview: function(e) {
                _core.tools.preViewShow(e);
            },
            inputNote: function(e) {
                this.message = e.detail.value, this.$apply();
            },
            pickAddress: function() {
                function e() {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var r, t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = this, e.next = 3, _core.tools.chooseAddress();

                          case 3:
                            t = e.sent, "chooseAddress:ok" == t.errMsg && (this.vm_goods.address = t, this.$apply());

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            pickPayType: function(e) {
                this.payType = e.detail.value;
            },
            plusOne: function() {
                var e = this.vm_goods;
                if (e.pro.num > 999) return void _core.tools.ShowToast("购买数量不能大于999", this);
                e.pro.num += 1, this.vm_goods.pro.num = e.pro.num, this.comPay();
            },
            reduOne: function() {
                var e = this.vm_goods;
                if (e.pro.num <= 1) return void _core.tools.ShowToast("购买数量不能小于1", this);
                e.pro.num -= 1, this.vm_goods.pro.num = e.pro.num, this.comPay();
            },
            groupPay: function() {
                function e(e, t) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                    var o, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (_core.core.formId(t.detail.formId), o = this.vm_goods, void 0 != o.address && "" != o.address) {
                                e.next = 5;
                                break;
                            }
                            return _core.tools.ShowToast("请选择地址", this), e.abrupt("return");

                          case 5:
                            if (this._index != r) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return");

                          case 7:
                            if (1 != this.payType) {
                                e.next = 14;
                                break;
                            }
                            return e.next = 10, _core.tools.showModal("确定使用储值支付吗？");

                          case 10:
                            n = e.sent, n.confirm ? (this.payInfoOrder(), this._index = r) : this._index = -1, 
                            e.next = 16;
                            break;

                          case 14:
                            this.payInfoOrder(), this._index = r;

                          case 16:
                            this.$apply();

                          case 17:
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
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        return e.next = 4, this.orderInfo(r);

                      case 4:
                        return e.next = 6, _core.core.getAddress(this);

                      case 6:
                        this.vm_goods.address = e.sent, this.$apply();

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "payInfoOrder",
        value: function() {
            function e() {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var r, t, o, n, a, s, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showNavigationBarLoading(), r = this.vm_goods, t = _wepy2.default.$instance, 
                        e.next = 5, _core.core.getUserInfo();

                      case 5:
                        return o = e.sent, n = {
                            appId: t.globalData.appid,
                            groupId: r.groupId,
                            UserId: o.Id,
                            num: r.pro.num,
                            isGroup: r.isGroup,
                            isGHead: r.isGHead,
                            gsid: r.gsid,
                            phone: r.address.telNumber,
                            username: r.address.userName,
                            addres: r.address.provinceName + r.address.cityName + r.address.countyName + r.address.detailInfo,
                            note: this.message || ""
                        }, e.next = 9, _core.core.addGroup(n);

                      case 9:
                        if (a = e.sent, !a.isok) {
                            e.next = 18;
                            break;
                        }
                        return s = {
                            order: 3001005,
                            jsondata: JSON.stringify(a.postdata),
                            paytype: this.payType
                        }, e.next = 14, _core.pay.AddOrderNew(s);

                      case 14:
                        i = e.sent, i.result ? 0 == s.paytype ? this.wxPay(i.obj, a) : this.xwPay(i.obj, a) : _core.tools.showModal(i.msg, !1), 
                        e.next = 21;
                        break;

                      case 18:
                        return wx.hideNavigationBarLoading(), "" == a.msg ? _core.tools.ShowToast(a.postdata.msg, this) : _core.tools.ShowToast(a.msg, this), 
                        e.abrupt("return");

                      case 21:
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
                var t, o, n, a, s, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = parseInt(r.gsid) || 0, o = parseInt(r.groupid) || 0, n = parseInt(r.isGroup) || 0, 
                        a = parseInt(r.isGHead) || 0, e.next = 3, _core.core.groupInfo(o);

                      case 3:
                        s = e.sent, s.isok && (i = 0, i = n ? s.groupdetail.DiscountPrice : s.groupdetail.UnitPrice, 
                        this.vm_goods.pro = {
                            img: s.groupdetail.ImgUrl,
                            name: s.groupdetail.GroupName,
                            DiscountPrice: s.groupdetail.DiscountPrice,
                            UnitPrice: s.groupdetail.UnitPrice,
                            num: 1,
                            payprice: i
                        }, this.vm_goods.gsid = t, this.vm_goods.isGroup = n, this.vm_goods.isGHead = a, 
                        this.vm_goods.groupId = o, this.vm_goods.HeadDeduct = s.groupdetail.HeadDeduct || 0, 
                        this.comPay(), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "comPay",
        value: function() {
            var e = this.vm_goods, r = 0;
            r = e.HeadDeduct > 0 && 1 == e.isGHead ? parseFloat((e.pro.payprice * e.pro.num - e.HeadDeduct) / 100).toFixed(2) : parseFloat(e.pro.payprice * e.pro.num / 100).toFixed(2), 
            this.shouldPay = r;
        }
    }, {
        key: "wxPay",
        value: function() {
            function e(e, t) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                var o, n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = {
                            orderid: r,
                            type: 1
                        }, e.next = 3, _core.pay.PayOrder(o);

                      case 3:
                        if ("" == (n = e.sent) || !n.errMsg.includes("requestPayment:ok")) {
                            e.next = 11;
                            break;
                        }
                        _core.tools.loading("支付成功"), a = "?orderid=" + r + "&gsid=" + t.postdata.gsid + "&paytype=" + this.payType, 
                        _core.tools.goRedirecto("../group/groupSuccess" + a), wx.hideNavigationBarLoading(), 
                        e.next = 17;
                        break;

                      case 11:
                        return e.next = 13, _core.pay.deleteLastFormId();

                      case 13:
                        _core.tools.loading("取消支付"), wx.hideNavigationBarLoading(), this._index = -1, this.$apply();

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
        value: function() {
            function e(e, t) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                var o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        _core.tools.loading("支付成功"), o = "?orderid=" + r + "&gsid=" + t.postdata.gsid + "&paytype=" + this.payType, 
                        _core.tools.goRedirecto("../group/groupSuccess" + o), wx.hideNavigationBarLoading();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), r;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(groupOrder, "pages/group/groupOrder"));