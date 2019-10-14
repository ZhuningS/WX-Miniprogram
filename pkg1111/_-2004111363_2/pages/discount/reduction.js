function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, i) {
                try {
                    var s = t[o](i), a = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(a).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(a);
            }
            return n("next");
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
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), reduction = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationBarTitleText: "社交立减金",
            navigationBarBackgroundColor: "#d65840",
            navigationBarTextStyle: "#ffffff"
        }, n.components = {}, n.data = {
            vm: {},
            time: ""
        }, n.methods = {
            goHome: function() {
                _core.tools.goLaunch("/pages/index/index");
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            var t = (0, _lodashGet2.default)(e, "orderid", 0), r = (0, _lodashGet2.default)(e, "couponsid", 0), n = {
                orderid: t,
                couponsid: r
            };
            this.share = n, this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            this.reductionInfo(this.share);
        }
    }, {
        key: "reductionInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getReduction(t);

                      case 2:
                        if (r = e.sent, !r.isok) {
                            e.next = 18;
                            break;
                        }
                        if (null != r.userInfo) {
                            e.next = 10;
                            break;
                        }
                        return _core.tools.showModal("该活动已满员", !1), this.vm.txt = "啊哦，活动已满员", this.vm.show = !0, 
                        this.$apply(), e.abrupt("return");

                      case 10:
                        r.coupon.SatisfyNum - r.userList.length == 0 && _core.tools.showModal("领取成功", !1), 
                        this.vm.peoNum = r.coupon.SatisfyNum - r.userList.length, this.vm.isok = r.isok, 
                        this.vm.coup = r.coupon, this.vm.userList = r.userList, this.cutDown(r.coupon), 
                        e.next = 22;
                        break;

                      case 18:
                        wx.hideShareMenu(), this.vm.isok = r.isok, this.vm.msg = r.msg, _core.tools.showModal(r.msg, !1);

                      case 22:
                        this.$apply();

                      case 23:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "cutDown",
        value: function(e) {
            var t = this, r = this;
            if (0 == e.ValType) {
                var n = e.StartUseTimeStr.replace(/[.]/g, "/"), o = e.EndUseTimeStr.replace(/[.]/g, "/");
                r.reCutDown = setInterval(function() {
                    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(i) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                r.time = _core.tools.TimeShow(n, o), r.$apply();

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(), 1e3);
            }
        }
    }, {
        key: "onHide",
        value: function() {
            clearInterval(this.reCutDown);
        }
    }, {
        key: "onUnload",
        value: function() {
            clearInterval(this.reCutDown);
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return {
                title: "",
                path: "/pages/discount/reduction?couponsid=" + this.share.couponsid + "&orderid=" + this.share.orderid,
                imageUrl: "",
                success: function(e) {
                    _core.tools.loading("转发成功", "success");
                }
            };
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(reduction, "pages/discount/reduction"));