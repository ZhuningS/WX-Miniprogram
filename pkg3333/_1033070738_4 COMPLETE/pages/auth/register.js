function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, i) {
                try {
                    var o = t[n](i), s = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(s);
            }
            return a("next");
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
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), Login = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigationBarTitleText: "注册"
        }, a.data = {
            phone: null,
            phoneDisabled: !1,
            captchaModalHidden: !0,
            captchaValue: null,
            captcha: {},
            errors: {},
            verificationCode: {}
        }, a.methods = {
            bindPhoneInput: function(e) {
                this.phone = e.detail.value;
            },
            bindCaptchaCodeInput: function(e) {
                this.captchaValue = e.detail.value;
            },
            tapCaptchaCode: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            this.getCaptchaCode();

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            sendVerificationCode: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (this.captchaValue) {
                                e.next = 3;
                                break;
                            }
                            return this.errors.captchaValue = [ "请输入图片验证码" ], e.abrupt("return", !1);

                          case 3:
                            if (!(new Date().getTime() > this.captcha.expiredAt)) {
                                e.next = 7;
                                break;
                            }
                            return _wepy2.default.showToast({
                                title: "验证码已过期",
                                icon: "none",
                                duration: 2e3
                            }), this.resetRegister(), e.abrupt("return", !1);

                          case 7:
                            return e.prev = 7, e.next = 10, _api2.default.request({
                                url: "verificationCodes",
                                method: "POST",
                                data: {
                                    captcha_key: this.captcha.key,
                                    captcha_code: this.captchaValue
                                }
                            });

                          case 10:
                            if (t = e.sent, 401 !== t.statusCode) {
                                e.next = 17;
                                break;
                            }
                            return this.errors.captchaValue = [ "图片验证码错误" ], this.$apply(), e.next = 16, this.getCaptchaCode();

                          case 16:
                            return e.abrupt("return", !1);

                          case 17:
                            201 === t.statusCode && (this.verificationCode = {
                                key: t.data.key,
                                expiredAt: Date.parse(t.data.expired_at)
                            }, this.captchaModalHidden = !0, this.phoneDisabled = !0, this.errors = {}, this.$apply()), 
                            e.next = 24;
                            break;

                          case 20:
                            e.prev = 20, e.t0 = e.catch(7), console.log(e.t0), _wepy2.default.showModal({
                                title: "提示",
                                content: "服务器错误，请联系管理员"
                            });

                          case 24:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 7, 20 ] ]);
                }));
                return e;
            }()
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "resetRegister",
        value: function() {
            this.captchaModalHidden = !0, this.phoneDisabled = !1, this.captcha = {}, this.verificationCode = {}, 
            this.errors = {};
        }
    }, {
        key: "submit",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.errors = {}, this.verificationCode.key) {
                            e.next = 4;
                            break;
                        }
                        return _wepy2.default.showToast({
                            title: "请发送验证码",
                            icon: "none",
                            duration: 2e3
                        }), e.abrupt("return", !1);

                      case 4:
                        if (!(new Date().getTime() > this.verificationCode.expiredAt)) {
                            e.next = 8;
                            break;
                        }
                        return _wepy2.default.showToast({
                            title: "验证码已过期",
                            icon: "none",
                            duration: 2e3
                        }), this.resetRegister(), e.abrupt("return", !1);

                      case 8:
                        return e.prev = 8, r = t.detail.value, r.verification_key = this.verificationCode.key, 
                        e.next = 13, _wepy2.default.login();

                      case 13:
                        return a = e.sent, r.code = a.code, e.next = 17, _api2.default.request({
                            url: "weapp/users",
                            method: "POST",
                            data: r
                        });

                      case 17:
                        n = e.sent, 401 === n.statusCode && (this.errors.verification_code = [ "验证码错误" ], 
                        this.$apply()), 422 === n.statusCode && (this.errors = n.data.errors, this.$apply()), 
                        201 === n.statusCode && (_wepy2.default.setStorageSync("access_token", n.data.meta.access_token), 
                        _wepy2.default.setStorageSync("access_token_expired_at", new Date().getTime() + 1e3 * n.data.meta.expires_in), 
                        _wepy2.default.setStorageSync("userInfo", n.data), this.$parent.getPerms(), _wepy2.default.showToast({
                            title: "注册成功",
                            icon: "success"
                        }), setTimeout(function() {
                            _wepy2.default.switchTab({
                                url: "/pages/users/me"
                            });
                        }, 2e3)), e.next = 27;
                        break;

                      case 23:
                        e.prev = 23, e.t0 = e.catch(8), console.log(e.t0), _wepy2.default.showModal({
                            title: "提示",
                            content: "服务器错误，请联系管理员"
                        });

                      case 27:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 8, 23 ] ]);
            }));
            return e;
        }()
    }, {
        key: "getCaptchaCode",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.errors.phone = null, /^1[34578]\d{9}$/.test(this.phone)) {
                            e.next = 5;
                            break;
                        }
                        return this.errors.phone = [ "请输入正确的手机号" ], this.$apply(), e.abrupt("return", !1);

                      case 5:
                        return e.prev = 5, e.next = 8, _api2.default.request({
                            url: "captchas",
                            method: "POST",
                            data: {
                                phone: this.phone
                            }
                        });

                      case 8:
                        t = e.sent, 422 === t.statusCode && (this.errors = t.data.errors, this.$apply()), 
                        201 === t.statusCode && (this.captcha = {
                            key: t.data.captcha_key,
                            imageContent: t.data.captcha_image_content,
                            expiredAt: Date.parse(t.data.expired_at)
                        }, this.captchaModalHidden = !1, this.$apply()), e.next = 17;
                        break;

                      case 13:
                        e.prev = 13, e.t0 = e.catch(5), console.log(e.t0), _wepy2.default.showModal({
                            title: "提示",
                            content: "服务器错误，请联系管理员"
                        });

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 5, 13 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Login, "pages/auth/register"));