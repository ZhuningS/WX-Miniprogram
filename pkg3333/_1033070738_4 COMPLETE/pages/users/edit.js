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
                    var s = t[a](o), u = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), UserEdit = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), u = 0; u < o; u++) s[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationBarTitleText: "修改个人信息"
        }, n.data = {
            user: null,
            errors: null,
            avatarId: 0
        }, n.methods = {
            updateAvatar: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, r, n, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _wepy2.default.chooseImage({
                                count: 1
                            });

                          case 2:
                            return t = e.sent, e.prev = 3, r = t.tempFilePaths[0], e.next = 7, _api2.default.updateFile({
                                url: "images",
                                method: "POST",
                                name: "image",
                                formData: {
                                    type: "avatar"
                                },
                                filePath: r
                            });

                          case 7:
                            n = e.sent, 201 === n.statusCode && (a = JSON.parse(n.data), this.user.avatar = a.path, 
                            this.avatarId = a.id, this.$apply()), e.next = 15;
                            break;

                          case 11:
                            e.prev = 11, e.t0 = e.catch(3), console.log(e.t0), _wepy2.default.showModal({
                                title: "提示",
                                content: "服务器错误，请联系管理员"
                            });

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 3, 11 ] ]);
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
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.$parent.getCurrentUser();

                      case 2:
                        this.user = e.sent, this.$apply();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "submit",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.errors = null, e.prev = 1, r = t.detail.value, 0 !== this.avatarId && (r.avatar_image_id = this.avatarId), 
                        e.next = 6, _api2.default.authRequest({
                            url: "user",
                            method: "PUT",
                            data: r
                        });

                      case 6:
                        n = e.sent, 422 === n.statusCode && (this.errors = n.data.errors, this.$apply()), 
                        200 === n.statusCode && (this.user = n.data, _wepy2.default.setStorageSync("user", n.data), 
                        this.$apply(), _wepy2.default.showToast({
                            title: "修改成功",
                            icon: "success",
                            duration: 2e3
                        })), e.next = 15;
                        break;

                      case 11:
                        e.prev = 11, e.t0 = e.catch(1), console.log(e.t0), _wepy2.default.showModal({
                            title: "提示",
                            content: "服务器错误，请联系管理员"
                        });

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 11 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(UserEdit, "pages/users/edit"));