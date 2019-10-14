Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.generateSetDataPatch = void 0;

var e = require("./utils"), r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../fast-deep-equal")), t = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
}, a = (exports.generateSetDataPatch = function n(i, o) {
    var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", s = Object.keys(o), c = {};
    return i ? (s.map(function(s) {
        var l = i[s], f = o[s], v = a(o, s, u), h = Array.isArray(l) && Array.isArray(f), d = (0, 
        e.isObject)(l) && (0, e.isObject)(f);
        if (void 0 !== f && !(0, r.default)(l, f)) return l ? h && l.length !== f.length ? c[v] = f : void (h && l.length === f.length || d ? c = t({}, c, n(l, f, v)) : c[v] = f) : c[v] = f;
    }), c) : c = o;
}, function(e, r, t) {
    var a = t ? t + "." + r : r;
    if (Array.isArray(e)) {
        if (!t) throw new Error("数组 Patch 必需包含 Namespace");
        a = t + "[" + r + "]";
    }
    return a;
});