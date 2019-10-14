function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var s = t[a](o), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), Login = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationBarTitleText: "登录"
        }, n.data = {
            username: "",
            password: "",
            error: !1,
            errorMessage: ""
        }, n.methods = {
            bindUsernameInput: function(e) {
                this.username = e.detail.value;
            },
            bindPasswordInput: function(e) {
                this.password = e.detail.value;
            },
            submit: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (this.error = !1, this.errorMessage = "", this.username && this.password) {
                                e.next = 5;
                                break;
                            }
                            return this.errorMessage = "请填写账户名或密码", e.abrupt("return");

                          case 5:
                            return t = {
                                username: this.username,
                                password: this.password
                            }, e.prev = 6, e.next = 9, _api2.default.login(t);

                          case 9:
                            r = e.sent, 401 === r.statusCode && (this.error = !0, this.errorMessage = r.data.message, 
                            this.$apply()), 201 === r.statusCode && (this.$parent.getPerms(), _wepy2.default.navigateBack()), 
                            e.next = 17;
                            break;

                          case 14:
                            e.prev = 14, e.t0 = e.catch(6), _wepy2.default.showModal({
                                title: "提示",
                                content: "服务器错误，请联系管理员"
                            });

                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 6, 14 ] ]);
                }));
                return e;
            }()
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _api2.default.login();

                      case 3:
                        t = e.sent, 201 === t.statusCode && (this.$parent.getPerms(), _wepy2.default.navigateBack()), 
                        e.next = 10;
                        break;

                      case 7:
                        e.prev = 7, e.t0 = e.catch(0), _wepy2.default.showModal({
                            title: "提示",
                            content: "服务器错误，请联系管理员"
                        });

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 7 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Login, "pages/auth/login"));