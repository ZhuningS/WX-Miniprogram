Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
    return typeof r;
} : function(r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
}, t = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : r(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t);
}, e = (exports.toArray = function(r) {
    return r ? Array.isArray(r) ? r : "object" === (void 0 === r ? "undefined" : t(r)) ? Object.keys(r).map(function(t) {
        return r[t];
    }) : [] : [];
}, exports.ensureArray = function(r) {
    return r ? Array.isArray(r) ? r : [ r ] : [];
}, exports.ensureParam = function(r, t) {
    if (void 0 === t) throw new Error('Missing a valid value for the argument "' + r + '"');
    return t;
}, exports.ensureParamString = function(r, t) {
    if (void 0 === t || null === t || "string" != typeof t || 0 === t.length) throw new Error('Missing a valid string for the argument "' + r + '"');
    return t;
}, exports.ensureID = function(r) {
    if (!e(r)) throw new Error('The given value is not a valid "id". An "id" must be a non-empty string or a number.');
    return n(r);
}, exports.isValidID = function(r) {
    return null !== r && void 0 !== r && ("string" == typeof r && r.length > 0 || "number" == typeof r);
}), n = exports.asID = function(r) {
    return "string" == typeof r ? r : r.toString();
}, o = (exports.toObject = function(r, t) {
    return r.reduce(function(r, e) {
        return r[t(e)] = e, r;
    }, {});
}, exports.mergeIds = function(r, t, e) {
    var n, o = {};
    for (n = 0; n < r.length; n++) o[r[n]] = !0;
    for (n = 0; n < t.length; n++) {
        if (e && o[t[n]]) throw new Error('Id merge operation violates unique constraint for id: "' + t[n] + '"');
        o[t[n]] = !0;
    }
    return Object.keys(o);
}, exports.isEqual = function(r, t) {
    if (r === t) return !0;
    var e = Object.keys(r), n = Object.keys(t), i = e.length;
    if (n.length !== i) return !1;
    for (var u = 0; u < i; u++) {
        var f = e[u];
        if (!(Array.isArray(r[f]) && Array.isArray(t[f]) && o(r[f], t[f])) && r[f] !== t[f]) return !1;
    }
    return !0;
}, function(r, t) {
    if (r === t) return !0;
    var e = r.length;
    if (t.length !== e) return !1;
    for (var n = 0; n < e; n++) if (r[n] !== t[n]) return !1;
    return !0;
});