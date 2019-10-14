function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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
}), exports.default = void 0;

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), com_shopCar = function(e) {
    function t() {
        var e, o, n, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), c = 0; c < i; c++) s[c] = arguments[c];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            usingComponents: {
                text: "../../packages/@minui/text/dist/index"
            }
        }, n.methods = {
            preview: function(e) {
                _core.tools.preViewShow(e);
            },
            hideMask: function() {
                this.$emit("hideMask");
            },
            setNum: function(e) {
                this.$emit("setNum", e);
            },
            changeSpec: function(e) {
                var t = e.currentTarget.dataset, o = [ t.p, t.c ], n = o[0], r = o[1];
                this.$emit("changeSpec", n, r);
            },
            add: function(e) {
                this.$emit("add", e);
            },
            less: function(e) {
                this.$emit("less", e);
            },
            addShop: function(e) {
                this.$emit("goShop", e);
            }
        }, r = o, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = com_shopCar;