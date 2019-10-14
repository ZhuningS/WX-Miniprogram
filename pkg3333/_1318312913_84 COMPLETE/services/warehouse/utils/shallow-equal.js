function o(o, t) {
    return o === t ? 0 !== o || 0 !== t || 1 / o == 1 / t : o !== o && t !== t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, e = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(o) {
    return void 0 === o ? "undefined" : t(o);
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : void 0 === o ? "undefined" : t(o);
}, n = Object.prototype.hasOwnProperty;

exports.shallowEqual = function(t, r) {
    if (o(t, r)) return !0;
    if ("object" !== (void 0 === t ? "undefined" : e(t)) || null === t || "object" !== (void 0 === r ? "undefined" : e(r)) || null === r) return !1;
    var u = Object.keys(t), l = Object.keys(r);
    if (u.length !== l.length) return !1;
    for (var y = 0; y < u.length; y++) if (!n.call(r, u[y]) || !o(t[u[y]], r[u[y]])) return !1;
    return !0;
};