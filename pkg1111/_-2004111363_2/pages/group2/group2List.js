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
                    var i = t[n](a), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), group2List = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.config = {
            navigationBarTitleText: "全部拼团"
        }, o.data = {
            currentSkin: {},
            vm: {
                ispost: !1,
                loadall: !1,
                list: [],
                state: 0,
                pagesize: 10,
                pageindex: 1,
                scroll: 0,
                topHead: [ {
                    name: "全部",
                    state: 0
                }, {
                    name: "进行中",
                    state: 1
                }, {
                    name: "已成功",
                    state: 2
                } ]
            }
        }, o.methods = {
            preView: function(e) {
                var t = [];
                t.push(e), _core.tools.preViewShow(e, t);
            },
            copyOrder: function(e) {
                _core.tools.copy(e);
            },
            changeState: function(e) {
                this.vm = _core.tools.resetArray(this.vm), this.vm.state = e, this.$apply(), _core.core.getEntGroup(this);
            },
            pathLog: function(e, t) {
                if (t && Array.isArray(t) && t.length > 0) {
                    var r = t.length, o = t[0].SpecImg;
                    _core.tools.goNewPage("../my/myLogistics?orderId=" + e + "&imgUrl=" + o + "&count=" + r);
                }
            },
            pathGood: function(e) {
                _core.tools.goNewPage("/pages/group2/group2?id=" + e[0].FoodGoodsId);
            },
            pathOrder: function(e) {
                this.$navigate("../group2/group2Dlt?id=" + e);
            },
            pathCheck: function(e) {
                this.$navigate("../group2/group2Share?id=" + e);
            },
            pathValue: function(e) {
                var t = [];
                e.goodsMsg = {}, e.SpecImg = e.goodList[0].SpecImg, e.priceStr = e.buyPrice, e.goodsMsg.img = e.goodList[0].SpecImg, 
                e.FoodGoodsId = e.goodList[0].FoodGoodsId, t.push(e);
                var r = {
                    list: t,
                    orderid: e.orderId,
                    goodType: 1
                };
                this.$preload("vm", r), this.$navigate("/pages/good/goodValue");
            },
            groupConfrim: function() {
                function e(e, r) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    var o, n, a, i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            o = Number(r), n = "", e.t0 = o, e.next = -1 === e.t0 ? 5 : 3 === e.t0 ? 7 : 9;
                            break;

                          case 5:
                            return n = "是否取消该订单", e.abrupt("break", 9);

                          case 7:
                            return n = "是否确认收货", e.abrupt("break", 9);

                          case 9:
                            return e.next = 11, _core.tools.showModal(n);

                          case 11:
                            if (a = e.sent, !a.confirm) {
                                e.next = 16;
                                break;
                            }
                            return i = {
                                Id: t,
                                state: o
                            }, e.next = 16, _core.core.groupConfrim(i, this);

                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            goPay: function() {
                function e(e, r, o) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, o) {
                    var n, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return wx.showNavigationBarLoading(), _core.core.formId(o.detail.formId), n = {
                                orderid: t,
                                type: 1
                            }, e.next = 5, _core.pay.PayOrder(n);

                          case 5:
                            a = e.sent, "" != a && a.errMsg.includes("requestPayment:ok") ? (_core.tools.loading("支付成功"), 
                            setTimeout(function(e) {
                                _core.tools.goNewPage("../group2/group2Dlt?id=" + r);
                            }, 1e3), wx.hideNavigationBarLoading()) : (_core.tools.loading("取消支付"), wx.hideNavigationBarLoading());

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, n = r, _possibleConstructorReturn(o, n);
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
                        this.vm = _core.tools.resetArray(this.vm), _core.core.getEntGroup(this);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onPageScroll",
        value: function(e) {
            this.vm.scroll = e.scrollTop, this.$apply();
        }
    }, {
        key: "onReachBottom",
        value: function() {
            _core.core.getEntGroup(this);
        }
    }, {
        key: "onShareAppMessage",
        value: function(e) {
            if (e.target) {
                var t = e.target.dataset.item, r = {
                    id: t.groupid,
                    name: t.goodList[0].goodsMsg.name,
                    img: t.goodList[0].goodsMsg.img
                };
                return _core.core.group2Share(r);
            }
            return {
                title: "",
                path: "/pages/group2/group2List",
                imageUrl: "",
                success: function(e) {
                    _core.tools.loading("转发成功", "success");
                }
            };
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(group2List, "pages/group2/group2List"));