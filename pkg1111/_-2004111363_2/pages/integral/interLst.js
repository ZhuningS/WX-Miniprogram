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
                    var a = t[o](i), s = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), interLst = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "积分订单",
            usingComponents: {
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index",
                "wxc-loadmore": "../../packages/@minui/wxc-loadmore/dist/index"
            }
        }, n.data = {
            vm: {
                ispost: !1,
                loadall: !1,
                list: [],
                pageindex: 1,
                pagesize: 10
            },
            state: [ "", "", "待发货", "点击确认收货", "已完成" ]
        }, n.methods = {
            confirmReceipt: function() {
                function e(e, r) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    var n, o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (3 != r) {
                                e.next = 18;
                                break;
                            }
                            return e.next = 3, _core.tools.showModal("确认收货吗？");

                          case 3:
                            if (n = e.sent, !n.confirm) {
                                e.next = 18;
                                break;
                            }
                            return e.next = 7, _core.core.interConfirm(t);

                          case 7:
                            if (o = e.sent, !o.isok) {
                                e.next = 17;
                                break;
                            }
                            return e.next = 11, _core.tools.loading("收货成功", "success");

                          case 11:
                            this.vm.ispost = !1, this.vm.loadall = !1, this.vm.pageindex = 1, this.lst(), e.next = 18;
                            break;

                          case 17:
                            _core.tools.showModal(o.msg, !1);

                          case 18:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = r, _possibleConstructorReturn(n, o);
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
                        return e.next = 4, this.lst();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "lst",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.vm, !t.ispost && !t.loadall) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        return t.ispost || (t.ispost = !0), e.next = 6, _core.core.interLst(t);

                      case 6:
                        r = e.sent, r.isok ? (t.ispost = !1, t.list[t.pageindex] = r.model.listActivity, 
                        r.model.listActivity.length >= t.pagesize ? t.pageindex += 1 : t.loadall = !0, this.vm = t, 
                        this.$apply()) : _core.tools.showModal(r.msg, !1);

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(interLst, "pages/integral/interLst"));