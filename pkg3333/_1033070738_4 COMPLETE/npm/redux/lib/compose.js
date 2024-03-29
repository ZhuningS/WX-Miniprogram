function compose() {
    for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
    return 0 === r.length ? function(e) {
        return e;
    } : 1 === r.length ? r[0] : r.reduce(function(e, r) {
        return function() {
            return e(r.apply(void 0, arguments));
        };
    });
}

exports.__esModule = !0, exports.default = compose;