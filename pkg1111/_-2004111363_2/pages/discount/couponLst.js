function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var o = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(r, u) {
                try {
                    var c = o[r](u), i = c.value;
                } catch (e) {
                    return void t(e);
                }
                if (!c.done) return Promise.resolve(i).then(function(e) {
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
            var n = o[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(o, t, n) {
        return t && e(o.prototype, t), n && e(o, n), o;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _com_coup = require("./../../components/com_coup.js"), _com_coup2 = _interopRequireDefault(_com_coup), _core = require("./../../lib/core.js"), couponLst = function(e) {
    function o() {
        var e, t, n, r;
        _classCallCheck(this, o);
        for (var u = arguments.length, c = Array(u), i = 0; i < u; i++) c[i] = arguments[i];
        return t = n = _possibleConstructorReturn(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(c))), 
        n.config = {
            navigationBarTitleText: "我的优惠券",
            enablePullDownRefresh: !0
        }, n.$repeat = {}, n.$props = {
            comCoup: {
                "xmlns:v-bind": "",
                "v-bind:vm.sync": "vmMycoupon",
                "xmlns:v-on": ""
            }
        }, n.$events = {
            comCoup: {
                "v-on:useCoupon": "useCoupon"
            }
        }, n.components = {
            comCoup: _com_coup2.default
        }, n.data = {
            currentSkin: {},
            couponState: [ {
                name: "未使用",
                value: 0,
                sel: !0
            }, {
                name: "已使用",
                value: 1,
                sel: !1
            }, {
                name: "已过期",
                value: 2,
                sel: !1
            } ],
            vmMycoupon: {
                list: [],
                ispost: !1,
                loadall: !1,
                pageindex: 1,
                pagesize: 10,
                state: 0,
                goodsId: "",
                goodsInfo: "",
                listname: "mycoupon",
                scroll: 0
            }
        }, n.methods = {
            change: function(e) {
                this.vmMycoupon = _core.tools.resetArray(this.vmMycoupon), this.vmMycoupon.state = e, 
                _core.core.getCoup("", this);
            },
            useCoupon: function() {
                _core.tools.goLaunch("/pages/index/index");
            }
        }, r = t, _possibleConstructorReturn(n, r);
    }
    return _inherits(o, e), _createClass(o, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return o.apply(this, arguments);
            }
            var o = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

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
        key: "onReachBottom",
        value: function() {
            _core.core.getCoup("", this);
        }
    }, {
        key: "onPageScroll",
        value: function(e) {
            this.vmMycoupon.scroll = e.scrollTop, this.$apply();
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            this.vmMycoupon = _core.tools.resetArray(this.vmMycoupon), wx.showNavigationBarLoading(), 
            _core.core.getCoup("", this), setTimeout(function() {
                wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
            }, 1e3);
        }
    } ]), o;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(couponLst, "pages/discount/couponLst"));