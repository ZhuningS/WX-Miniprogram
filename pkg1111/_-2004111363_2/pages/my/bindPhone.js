function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, i) {
                try {
                    var u = t[o](i), a = u.value;
                } catch (e) {
                    return void n(e);
                }
                if (!u.done) return Promise.resolve(a).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(a);
            }
            return r("next");
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
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), Appeal = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, u = Array(i), a = 0; a < i; a++) u[a] = arguments[a];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        r.config = {
            navigationBarTitleText: "手机号注册"
        }, r.data = {
            currentSkin: {},
            timeOutCode: 60,
            phoneNumber: "",
            phoneCode: ""
        }, r.methods = {
            inputNumber: function(e) {
                this.phoneNumber = e.detail.value;
            },
            inputCode: function(e) {
                this.phoneCode = e.detail.value;
            },
            getCode: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n, r = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = this, 11 != t.phoneNumber.length) {
                                e.next = 9;
                                break;
                            }
                            return this.timeOutCode--, setInterval(function() {
                                r.timeOutCode--, 0 == r.timeOutCode && (r.timeOutCode = 60), r.$apply();
                            }, 1e3), e.next = 6, _core.core.senduserauth(t.phoneNumber);

                          case 6:
                            n = e.sent, e.next = 11;
                            break;

                          case 9:
                            return _core.tools.loading("手机有误"), e.abrupt("return");

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            bindphone: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = this, n = _wepy2.default.$instance, e.next = 4, _core.core.Submitauth(t.phoneNumber, t.phoneCode);

                          case 4:
                            r = e.sent, r.isok ? (wx.setStorageSync("isbindPhone", !0), _core.tools.goBack(1)) : _core.tools.showModal(r.Msg, !1);

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShow",
        value: function() {
            _core.tools.setPageSkin(this);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Appeal, "pages/my/bindPhone"));