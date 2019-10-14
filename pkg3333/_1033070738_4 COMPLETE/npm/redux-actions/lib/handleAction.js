function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function handleAction(e) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _identity2.default, t = arguments[2], n = e.toString().split(_combineActions.ACTION_TYPE_DELIMITER);
    (0, _invariant2.default)(!(0, _isUndefined2.default)(t), "defaultState for reducer handling " + n.join(", ") + " should be defined"), 
    (0, _invariant2.default)((0, _isFunction2.default)(i) || (0, _isPlainObject2.default)(i), "Expected reducer to be a function or object with next and throw reducers");
    var r = (0, _isFunction2.default)(i) ? [ i, i ] : [ i.next, i.throw ].map(function(e) {
        return (0, _isNil2.default)(e) ? _identity2.default : e;
    }), u = _slicedToArray(r, 2), a = u[0], o = u[1];
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t, i = arguments[1], r = i.type;
        return r && (0, _includes2.default)(n, r.toString()) ? (!0 === i.error ? o : a)(e, i) : e;
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _slicedToArray = function() {
    function e(e, i) {
        var t = [], n = !0, r = !1, u = void 0;
        try {
            for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done) && (t.push(a.value), 
            !i || t.length !== i); n = !0) ;
        } catch (e) {
            r = !0, u = e;
        } finally {
            try {
                !n && o.return && o.return();
            } finally {
                if (r) throw u;
            }
        }
        return t;
    }
    return function(i, t) {
        if (Array.isArray(i)) return i;
        if (Symbol.iterator in Object(i)) return e(i, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

exports.default = handleAction;

var _isFunction = require("./../../lodash/isFunction.js"), _isFunction2 = _interopRequireDefault(_isFunction), _isPlainObject = require("./../../lodash/isPlainObject.js"), _isPlainObject2 = _interopRequireDefault(_isPlainObject), _identity = require("./../../lodash/identity.js"), _identity2 = _interopRequireDefault(_identity), _isNil = require("./../../lodash/isNil.js"), _isNil2 = _interopRequireDefault(_isNil), _isUndefined = require("./../../lodash/isUndefined.js"), _isUndefined2 = _interopRequireDefault(_isUndefined), _includes = require("./../../lodash/includes.js"), _includes2 = _interopRequireDefault(_includes), _invariant = require("./../../invariant/browser.js"), _invariant2 = _interopRequireDefault(_invariant), _combineActions = require("./combineActions.js");