Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
    return function(e, t) {
        return r.reduce(function(e, r) {
            return r(e, t);
        }, e);
    };
}, module.exports = exports.default;