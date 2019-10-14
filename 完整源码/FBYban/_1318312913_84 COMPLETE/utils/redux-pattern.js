Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.createTypeAction = function(r) {
    var t = function() {
        var t = arguments.length <= 0 ? void 0 : arguments[0], e = {
            type: r
        };
        return t instanceof Error && (e.error = !0), void 0 !== t && (e.payload = t), e;
    };
    return t.toString = function() {
        return r.toString();
    }, t;
};