Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, t) {
    return e.reduce(function(e, r) {
        return t(e, r);
    }, {});
};