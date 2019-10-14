function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
    return Array.from(e);
}

function get(e, r) {
    return (0, _isMap2.default)(r) ? r.get(e) : r[e];
}

function handleActions(e, r) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, _invariant2.default)((0, _isPlainObject2.default)(e) || (0, _isMap2.default)(e), "Expected handlers to be a plain object.");
    var n = (0, _flattenUtils.flattenReducerMap)(e, t), i = (0, _ownKeys2.default)(n).map(function(e) {
        return (0, _handleAction2.default)(e, get(e, n), r);
    }), a = _reduceReducers2.default.apply(void 0, _toConsumableArray(i));
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r, t = arguments[1];
        return a(e, t);
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = handleActions;

var _isPlainObject = require("./../../lodash/isPlainObject.js"), _isPlainObject2 = _interopRequireDefault(_isPlainObject), _isMap = require("./../../lodash/isMap.js"), _isMap2 = _interopRequireDefault(_isMap), _reduceReducers = require("./../../reduce-reducers/dist/index.js"), _reduceReducers2 = _interopRequireDefault(_reduceReducers), _invariant = require("./../../invariant/browser.js"), _invariant2 = _interopRequireDefault(_invariant), _handleAction = require("./handleAction.js"), _handleAction2 = _interopRequireDefault(_handleAction), _ownKeys = require("./ownKeys.js"), _ownKeys2 = _interopRequireDefault(_ownKeys), _flattenUtils = require("./flattenUtils.js");