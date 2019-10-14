function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function createActions(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
    var a = (0, _isPlainObject2.default)((0, _last2.default)(r)) ? r.pop() : {};
    return (0, _invariant2.default)(r.every(_isString2.default) && ((0, _isString2.default)(e) || (0, 
    _isPlainObject2.default)(e)), "Expected optional object followed by string action types"), 
    (0, _isString2.default)(e) ? actionCreatorsFromIdentityActions([ e ].concat(r), a) : _extends({}, actionCreatorsFromActionMap(e, a), actionCreatorsFromIdentityActions(r, a));
}

function actionCreatorsFromActionMap(e, t) {
    var r = (0, _flattenUtils.flattenActionMap)(e, t), i = actionMapToActionCreators(r);
    return (0, _flattenUtils.unflattenActionCreators)(i, t);
}

function actionMapToActionCreators(e) {
    function t(e) {
        if ((0, _isFunction2.default)(e) || (0, _isNil2.default)(e)) return !0;
        if ((0, _isArray2.default)(e)) {
            var t = _slicedToArray(e, 2), r = t[0], i = void 0 === r ? _identity2.default : r, a = t[1];
            return (0, _isFunction2.default)(i) && (0, _isFunction2.default)(a);
        }
        return !1;
    }
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = r.prefix, a = r.namespace, n = void 0 === a ? _flattenUtils.defaultNamespace : a;
    return (0, _arrayToObject2.default)(Object.keys(e), function(r, a) {
        var o = e[a];
        (0, _invariant2.default)(t(o), "Expected function, undefined, null, or array with payload and meta functions for " + a);
        var u = i ? "" + i + n + a : a, l = (0, _isArray2.default)(o) ? _createAction2.default.apply(void 0, [ u ].concat(_toConsumableArray(o))) : (0, 
        _createAction2.default)(u, o);
        return _extends({}, r, _defineProperty({}, a, l));
    });
}

function actionCreatorsFromIdentityActions(e, t) {
    var r = (0, _arrayToObject2.default)(e, function(e, t) {
        return _extends({}, e, _defineProperty({}, t, _identity2.default));
    }), i = actionMapToActionCreators(r, t);
    return (0, _arrayToObject2.default)(Object.keys(i), function(e, t) {
        return _extends({}, e, _defineProperty({}, (0, _camelCase2.default)(t), i[t]));
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _slicedToArray = function() {
    function e(e, t) {
        var r = [], i = !0, a = !1, n = void 0;
        try {
            for (var o, u = e[Symbol.iterator](); !(i = (o = u.next()).done) && (r.push(o.value), 
            !t || r.length !== t); i = !0) ;
        } catch (e) {
            a = !0, n = e;
        } finally {
            try {
                !i && u.return && u.return();
            } finally {
                if (a) throw n;
            }
        }
        return r;
    }
    return function(t, r) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
};

exports.default = createActions;

var _camelCase = require("./camelCase.js"), _camelCase2 = _interopRequireDefault(_camelCase), _identity = require("./../../lodash/identity.js"), _identity2 = _interopRequireDefault(_identity), _isPlainObject = require("./../../lodash/isPlainObject.js"), _isPlainObject2 = _interopRequireDefault(_isPlainObject), _isArray = require("./../../lodash/isArray.js"), _isArray2 = _interopRequireDefault(_isArray), _last = require("./../../lodash/last.js"), _last2 = _interopRequireDefault(_last), _isString = require("./../../lodash/isString.js"), _isString2 = _interopRequireDefault(_isString), _isFunction = require("./../../lodash/isFunction.js"), _isFunction2 = _interopRequireDefault(_isFunction), _isNil = require("./../../lodash/isNil.js"), _isNil2 = _interopRequireDefault(_isNil), _createAction = require("./createAction.js"), _createAction2 = _interopRequireDefault(_createAction), _invariant = require("./../../invariant/browser.js"), _invariant2 = _interopRequireDefault(_invariant), _arrayToObject = require("./arrayToObject.js"), _arrayToObject2 = _interopRequireDefault(_arrayToObject), _flattenUtils = require("./flattenUtils.js");