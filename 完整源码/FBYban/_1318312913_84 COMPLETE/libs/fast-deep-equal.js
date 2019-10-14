var r = Array.isArray, t = Object.keys, e = Object.prototype.hasOwnProperty;

module.exports = function n(i, f) {
    if (i === f) return !0;
    var a, o, u, c = r(i), s = r(f);
    if (c && s) {
        if ((o = i.length) != f.length) return !1;
        for (a = 0; a < o; a++) if (!n(i[a], f[a])) return !1;
        return !0;
    }
    if (c != s) return !1;
    var g = i instanceof Date, l = f instanceof Date;
    if (g != l) return !1;
    if (g && l) return i.getTime() == f.getTime();
    var p = i instanceof RegExp, h = f instanceof RegExp;
    if (p != h) return !1;
    if (p && h) return i.toString() == f.toString();
    if (i instanceof Object && f instanceof Object) {
        var v = t(i);
        if ((o = v.length) !== t(f).length) return !1;
        for (a = 0; a < o; a++) if (!e.call(f, v[a])) return !1;
        for (a = 0; a < o; a++) if (u = v[a], !n(i[u], f[u])) return !1;
        return !0;
    }
    return !1;
};