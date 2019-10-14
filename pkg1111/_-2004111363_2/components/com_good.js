function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, o) {
    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, o) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !o || "object" != typeof o && "function" != typeof o ? e : o;
}

function _inherits(e, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    e.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), _com_goodLabel = require("./com_goodLabel.js"), _com_goodLabel2 = _interopRequireDefault(_com_goodLabel), com_goodLst = function(e) {
    function o() {
        var e, t, r, n;
        _classCallCheck(this, o);
        for (var i = arguments.length, l = Array(i), a = 0; a < i; a++) l[a] = arguments[a];
        return t = r = _possibleConstructorReturn(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(l))), 
        r.$repeat = {
            vm: {
                com: "comlabel",
                props: ""
            }
        }, r.$props = {
            comlabel: {
                "xmlns:v-bind": {
                    value: "",
                    for: "vm",
                    item: "good_item",
                    index: "index",
                    key: "key"
                },
                "v-bind:vm.sync": {
                    value: "good_item.plabelstr_array",
                    for: "vm",
                    item: "good_item",
                    index: "index",
                    key: "key"
                },
                class: {
                    value: "mt20",
                    for: "vm",
                    item: "good_item",
                    index: "index",
                    key: "key"
                }
            }
        }, r.$events = {}, r.components = {
            comlabel: _com_goodLabel2.default
        }, r.data = {}, r.methods = {
            goNav: function(e, o) {
                _core.tools.pathGood(e.id, o.btnType, o.isShowPrice);
            }
        }, n = t, _possibleConstructorReturn(r, n);
    }
    return _inherits(o, e), o;
}(_wepy2.default.component);

exports.default = com_goodLst;