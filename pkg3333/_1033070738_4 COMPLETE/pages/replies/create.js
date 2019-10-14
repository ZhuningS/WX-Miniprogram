function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), ReplyCreate = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "添加回复"
        }, n.data = {
            topicId: 0
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.$parent.checkLogin() || _wepy2.default.navigateTo({
                url: "/pages/auth/login"
            }), this.topicId = e.topic_id;
        }
    }, {
        key: "submit",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, o, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.errors = null, r = t.detail.value, r.content) {
                            e.next = 5;
                            break;
                        }
                        return _wepy2.default.showToast({
                            title: "请填写内容",
                            icon: "none",
                            duration: 2e3
                        }), e.abrupt("return");

                      case 5:
                        return e.prev = 5, e.next = 8, _api2.default.authRequest({
                            url: "topics/" + this.topicId + "/replies",
                            method: "POST",
                            data: r
                        });

                      case 8:
                        n = e.sent, 201 === n.statusCode && (o = this.getCurrentPages(), o.length > 1 && (a = [], 
                        o.forEach(function(e) {
                            "pages/topics/show" !== e.route && "pages/replies/index" !== e.route || a.push(e.route);
                        }), this.$parent.globalData.refreshPages = this.$parent.globalData.refreshPages.concat(a), 
                        this.$apply()), _wepy2.default.showToast({
                            title: "发布成功",
                            icon: "success"
                        }), setTimeout(function() {
                            _wepy2.default.navigateBack();
                        }, 2e3)), e.next = 16;
                        break;

                      case 12:
                        e.prev = 12, e.t0 = e.catch(5), console.log(e.t0), _wepy2.default.showModal({
                            title: "提示",
                            content: "服务器错误，请联系管理员"
                        });

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 5, 12 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(ReplyCreate, "pages/replies/create"));