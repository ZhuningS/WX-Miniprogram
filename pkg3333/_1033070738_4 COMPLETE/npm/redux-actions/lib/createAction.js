function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function createAction(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _identity2.default, i = arguments[2];
    (0, _invariant2.default)((0, _isFunction2.default)(t) || (0, _isNull2.default)(t), "Expected payloadCreator to be a function, undefined or null");
    var n = (0, _isNull2.default)(t) || t === _identity2.default ? _identity2.default : function(e) {
        for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
        return e instanceof Error ? e : t.apply(void 0, [ e ].concat(n));
    }, r = (0, _isFunction2.default)(i), u = e.toString(), a = function() {
        var t = n.apply(void 0, arguments), u = {
            type: e
        };
        return t instanceof Error && (u.error = !0), void 0 !== t && (u.payload = t), r && (u.meta = i.apply(void 0, arguments)), 
        u;
    };
    return a.toString = function() {
        return u;
    }, a;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = createAction;

var _identity = require("./../../lodash/identity.js"), _identity2 = _interopRequireDefault(_identity), _isFunction = require("./../../lodash/isFunction.js"), _isFunction2 = _interopRequireDefault(_isFunction), _isNull = require("./../../lodash/isNull.js"), _isNull2 = _interopRequireDefault(_isNull), _invariant = require("./../../invariant/browser.js"), _invariant2 = _interopRequireDefault(_invariant);