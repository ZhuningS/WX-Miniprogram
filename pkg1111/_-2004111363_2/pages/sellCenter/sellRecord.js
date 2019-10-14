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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), sellRecord = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "提现记录",
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
            }
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
                        return e.next = 4, _core.tools.showLoading();

                      case 4:
                        return e.next = 6, this.info();

                      case 6:
                        wx.hideLoading();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "info",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.vm, !t.ispost && !t.loadall) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        return t.ispost || (t.ispost = !0), e.next = 6, _core.core.cashRecordlst(t);

                      case 6:
                        if (r = e.sent, r.isok) {
                            for (n = 0, o = r.obj.list.length; n < o; n++) -1 == r.obj.list[n].state ? r.obj.list[n].recordState = "审核不通过" : 0 == r.obj.list[n].state ? r.obj.list[n].recordState = "待审核" : -1 == r.obj.list[n].drawState ? r.obj.list[n].recordState = "提现失败" : 0 == r.obj.list[n].drawState ? r.obj.list[n].recordState = "等待提现中" : 1 == r.obj.list[n].drawState ? r.obj.list[n].recordState = "提现中" : r.obj.list[n].recordState = "提现成功";
                            t.ispost = !1, t.list[t.pageindex] = r.obj.list, r.obj.list.length >= t.pagesize ? t.pageindex += 1 : t.loadall = !0, 
                            this.vm = t, this.$apply();
                        }

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(sellRecord, "pages/sellCenter/sellRecord"));