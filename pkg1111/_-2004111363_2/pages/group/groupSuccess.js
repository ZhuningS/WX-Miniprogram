function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, u) {
                try {
                    var i = t[o](u), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), groupSuccess = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var u = arguments.length, i = Array(u), s = 0; s < u; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "下单成功",
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index"
            }
        }, n.components = {}, n.data = {
            vm_succ: {},
            group_time: "00:00:00",
            currentSkin: {}
        }, n.computed = {}, n.methods = {
            navOrder: function(e) {
                _core.tools.goRedirecto("../group/groupOtl?guid=" + e);
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, o, u, i = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        if (r = this, n = {
                            gsid: t.gsid || 0,
                            orderid: t.orderid || 0,
                            paytype: t.paytype || -1
                        }, 0 != n.orderid && -1 != n.paytype) {
                            e.next = 7;
                            break;
                        }
                        return _core.tools.goBack(1), e.abrupt("return");

                      case 7:
                        return e.next = 9, r.Info(n);

                      case 9:
                        o = r.vm_succ.list.ValidDateStart, u = r.vm_succ.list.ValidDateEnd, r.timeInter = setInterval(function() {
                            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, _core.core.groupTime(o, u);

                                      case 2:
                                        r.group_time = e.sent, r.$apply();

                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, i);
                            }));
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        }(), 1e3);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            this.vm_succ = {}, clearInterval(this.timeInter);
        }
    }, {
        key: "Info",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.paySuccess(t);

                      case 2:
                        r = e.sent, r.isok && (n = r.postdata, t.gsid > 0 && (n.GroupUserList.length >= 4 ? (n.GroupUserList = n.GroupUserList.slice(0, 4), 
                        n.NeedNum_fmt = 0) : n.NeedNum + n.GroupUserList.length <= 4 ? n.NeedNum_fmt = n.NeedNum : n.NeedNum_fmt = 4 - n.GroupUserList.length), 
                        this.vm_succ.list = n), this.vm_succ.vm = t, this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            var e = this.vm_succ.list;
            return _core.core.groupShare(e);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(groupSuccess, "pages/group/groupSuccess"));