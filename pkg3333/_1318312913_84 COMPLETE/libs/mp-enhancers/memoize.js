Object.defineProperty(exports, "__esModule", {
    value: !0
});

JSON.stringify, exports.memoize = function(e) {
    return function() {
        for (var r = arguments.length, t = Array(r), n = 0; n < r; n++) t[n] = arguments[n];
        return e.apply(this, t);
    };
};