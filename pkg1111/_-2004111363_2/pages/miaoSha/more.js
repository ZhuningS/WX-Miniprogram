function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, o) {
            function n(r, a) {
                try {
                    var i = t[r](a), s = i.value;
                } catch (e) {
                    return void o(e);
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
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _core = require("./../../lib/core.js"), _com_miaoSha = require("./../../components/com_miaoSha.js"), _com_miaoSha2 = _interopRequireDefault(_com_miaoSha), more = function(e) {
    function t() {
        var e, o, n, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            },
            navigationBarTitleText: "限时秒杀"
        }, n.$repeat = {}, n.$props = {
            comiaoSha: {
                "xmlns:v-bind": "",
                "v-bind:vm.sync": "vm",
                "v-bind:false.sync": "false",
                "v-bind:toast.once": "toast",
                "xmlns:v-on": ""
            }
        }, n.$events = {
            comiaoSha: {
                "v-on:ShowToast": "ShowToast"
            }
        }, n.components = {
            comiaoSha: _com_miaoSha2.default
        }, n.data = {
            currentSkin: {},
            vm: {},
            toast: {
                show: !1,
                msg: ""
            },
            showMask: !1
        }, n.computed = {}, n.methods = {
            showClick: function() {
                this.showMask = !this.showMask, this.$apply();
            }
        }, r = o, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = (0, _lodashGet2.default)(t, "id", ""), e.next = 3, _core.tools.setPageSkin(this);

                      case 3:
                        _core.core.getMiaoShaMore(o, this);

                      case 4:
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
            clearInterval(this.miaoShaCutDown);
        }
    }, {
        key: "onHide",
        value: function() {
            clearInterval(this.miaoShaCutDown);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(more, "pages/miaoSha/more"));