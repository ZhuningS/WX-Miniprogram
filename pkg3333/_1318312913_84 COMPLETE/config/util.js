function e(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeDeep = exports.isWxAppid = void 0;

var r = require("../libs/mp-enhancers/index"), t = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
}, n = /^wx[\w]{16}$/gi;

exports.isWxAppid = function(e) {
    return n.test(e);
}, exports.mergeDeep = function n(i, s) {
    var o = t({}, i);
    return (0, r.isObject)(i) && (0, r.isObject)(s) && Object.keys(s).map(function(t) {
        (0, r.isObject)(s[t]) && t in i ? o[t] = n(i[t], s[t]) : Object.assign(o, e({}, t, s[t]));
    }), o;
};