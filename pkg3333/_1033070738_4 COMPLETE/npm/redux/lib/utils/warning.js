function warning(o) {
    "undefined" != typeof console && "function" == typeof console.error && console.error(o);
    try {
        throw new Error(o);
    } catch (o) {}
}

exports.__esModule = !0, exports.default = warning;