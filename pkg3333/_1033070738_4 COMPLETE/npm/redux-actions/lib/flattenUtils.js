function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function get(e, t) {
    return (0, _isMap2.default)(t) ? t.get(e) : t[e];
}

function unflattenActionCreators(e) {
    function t(a) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], i = (0, 
        _camelCase2.default)(r.shift());
        r.length ? (n[i] || (n[i] = {}), t(a, n[i], r)) : n[i] = e[a];
    }
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = a.namespace, r = void 0 === n ? defaultNamespace : n, i = a.prefix, o = {};
    return Object.getOwnPropertyNames(e).forEach(function(e) {
        var a = i ? e.replace("" + i + r, "") : e;
        return t(e, o, a.split(r));
    }), o;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.unflattenActionCreators = exports.flattenReducerMap = exports.flattenActionMap = exports.defaultNamespace = void 0;

var _camelCase = require("./camelCase.js"), _camelCase2 = _interopRequireDefault(_camelCase), _ownKeys = require("./ownKeys.js"), _ownKeys2 = _interopRequireDefault(_ownKeys), _hasGeneratorInterface = require("./hasGeneratorInterface.js"), _hasGeneratorInterface2 = _interopRequireDefault(_hasGeneratorInterface), _isPlainObject = require("./../../lodash/isPlainObject.js"), _isPlainObject2 = _interopRequireDefault(_isPlainObject), _isMap = require("./../../lodash/isMap.js"), _isMap2 = _interopRequireDefault(_isMap), defaultNamespace = exports.defaultNamespace = "/", flattenWhenNode = function(e) {
    return function t(a) {
        function n(e) {
            return f ? "" + f + s + e : e;
        }
        function r(e) {
            return f || !u ? e : "" + u + s + e;
        }
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = i.namespace, s = void 0 === o ? defaultNamespace : o, u = i.prefix, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        return (0, _ownKeys2.default)(a).forEach(function(i) {
            var o = r(n(i)), f = get(i, a);
            e(f) ? t(f, {
                namespace: s,
                prefix: u
            }, l, o) : l[o] = f;
        }), l;
    };
}, flattenActionMap = flattenWhenNode(_isPlainObject2.default), flattenReducerMap = flattenWhenNode(function(e) {
    return ((0, _isPlainObject2.default)(e) || (0, _isMap2.default)(e)) && !(0, _hasGeneratorInterface2.default)(e);
});

exports.flattenActionMap = flattenActionMap, exports.flattenReducerMap = flattenReducerMap, 
exports.unflattenActionCreators = unflattenActionCreators;