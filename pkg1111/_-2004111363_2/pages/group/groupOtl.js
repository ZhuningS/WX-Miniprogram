function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function o(n, i) {
                try {
                    var a = r[n](i), c = a.value;
                } catch (e) {
                    return void t(e);
                }
                if (!a.done) return Promise.resolve(c).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _com_goodItem = require("./../../components/com_goodItem.js"), _com_goodItem2 = _interopRequireDefault(_com_goodItem), _core = require("./../../lib/core.js"), groupOtl = function(e) {
    function r() {
        var e, t, o, n;
        _classCallCheck(this, r);
        for (var i = arguments.length, a = Array(i), c = 0; c < i; c++) a[c] = arguments[c];
        return t = o = _possibleConstructorReturn(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(a))), 
        o.config = {
            navigationBarTitleText: "订单详情",
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index"
            }
        }, o.$repeat = {}, o.$props = {
            comItem: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.sync": "vm_order.goodOrderDtl"
            }
        }, o.$events = {}, o.components = {
            comItem: _com_goodItem2.default
        }, o.data = {
            currentSkin: {},
            vm_order: {}
        }, o.computed = {}, o.methods = {
            goHome: function() {
                _core.tools.goLaunch("/pages/index/index?currentPageIndex=0");
            },
            copy: function() {
                _core.tools.copy(this.vm_order.info.orderno);
            }
        }, n = t, _possibleConstructorReturn(o, n);
    }
    return _inherits(r, e), _createClass(r, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        return t = r.guid || 0, e.next = 5, this.groupInfo(t);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "groupInfo",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var t, o, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getOlt(r);

                      case 2:
                        if (t = e.sent, !t.isok) {
                            e.next = 26;
                            break;
                        }
                        o = t.postdata, n = 0, this.vm_order.goodOrderDtl = [], n = 0 == o.isGroup ? parseFloat(o.OriginalPrice / 100).toFixed(2) : parseFloat(o.DiscountPrice / 100).toFixed(2), 
                        this.vm_order.goodOrderDtl.push({
                            ImgUrl: o.ImgUrl,
                            Introduction: o.GroupName,
                            SpecInfo: "",
                            discountPrice: n,
                            discount: 100,
                            Count: o.num
                        }), this.vm_order.state = o.State, e.t0 = o.State, e.next = 0 === e.t0 ? 13 : 1 === e.t0 ? 15 : -1 === e.t0 ? 17 : 19;
                        break;

                      case 13:
                        return this.vm_order.stateRemark = "待发货", e.abrupt("break", 19);

                      case 15:
                        return this.vm_order.stateRemark = "待收货", e.abrupt("break", 19);

                      case 17:
                        return this.vm_order.stateRemark = "交易完成", e.abrupt("break", 19);

                      case 19:
                        o.allPrice = parseFloat(o.OriginalPrice / 100 * o.num).toFixed(2), o.OriginalPrice = parseFloat(o.OriginalPrice / 100).toFixed(2), 
                        o.BuyPrice = parseFloat(o.BuyPrice / 100).toFixed(2), o.disprice = parseFloat(o.allPrice - o.BuyPrice).toFixed(2), 
                        o.DiscountPrice = parseFloat(o.DiscountPrice / 100).toFixed(2), this.vm_order.info = o, 
                        this.$apply();

                      case 26:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), r;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(groupOtl, "pages/group/groupOtl"));