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

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _groupitem = require("./groupitem.js"), _groupitem2 = _interopRequireDefault(_groupitem), Group = function(e) {
    function t() {
        var e, o, r, i;
        _classCallCheck(this, t);
        for (var n = arguments.length, u = Array(n), p = 0; p < n; p++) u[p] = arguments[p];
        return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        r.props = {
            grouplist: {},
            index: {}
        }, r.$repeat = {
            grouplist: {
                com: "groupitem",
                props: "gitem"
            }
        }, r.$props = {
            groupitem: {
                "xmlns:v-bind": {
                    value: "",
                    for: "grouplist.list",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "v-bind:gitem.once": {
                    value: "item",
                    type: "item",
                    for: "grouplist.list",
                    item: "item",
                    index: "index",
                    key: "key"
                }
            }
        }, r.$events = {}, r.components = {
            groupitem: _groupitem2.default
        }, r.methods = {
            tap: function() {
                this.grouplist.name = "Parent Random(" + Math.random() + ")", console.log("Clicked Group " + this.$index + ", ID is " + this.grouplist.id);
            }
        }, i = o, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = Group;