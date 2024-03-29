function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function applyMiddleware() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return function(e) {
        return function(r, n, o) {
            var a = e(r, n, o), u = a.dispatch, p = [], i = {
                getState: a.getState,
                dispatch: function(e) {
                    return u(e);
                }
            };
            return p = t.map(function(e) {
                return e(i);
            }), u = _compose2.default.apply(void 0, p)(a.dispatch), _extends({}, a, {
                dispatch: u
            });
        };
    };
}

exports.__esModule = !0;

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
};

exports.default = applyMiddleware;

var _compose = require("./compose.js"), _compose2 = _interopRequireDefault(_compose);