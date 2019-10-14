function r(r, t) {
    for (var e = t - r.length, n = r, i = 0; i < e; i++) n = "0" + n;
    return n;
}

function t(t) {
    var e = t.substring(0, 2), n = t.substring(2);
    return e + r(i(n), "-" === e[0] ? 18 : 17);
}

function e(t) {
    var e = parseInt(t[0]), n = t.substring(1, e + 1), a = t.substring(e + 1), s = i(a.substring(0, 5));
    return n + r(i(a.substring(5)), 9) + r(s, 7);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#*", i = exports.parseBase64Int = function(r) {
    for (var t = r, e = ""; t.length > 0; ) {
        var i = t.substring(0, 5);
        t = t.substring(5);
        var a = 0, s = !0, u = !1, o = void 0;
        try {
            for (var l, f = i[Symbol.iterator](); !(s = (l = f.next()).done); s = !0) {
                var g = l.value;
                a <<= 6, a += n.indexOf(g);
            }
        } catch (r) {
            u = !0, o = r;
        } finally {
            try {
                !s && f.return && f.return();
            } finally {
                if (u) throw o;
            }
        }
        e = a.toString() + e;
    }
    return e;
}, a = (exports.buildBase64Int = function(r) {
    for (var t = r.length <= 9, e = "", i = r; i.length > 0; ) {
        var a = parseInt(i.substring(0, 9));
        if (i = i.substring(9), t) for (;0 !== a; ) e = n[a % 64] + e, a >>>= 6; else for (var s = 0; s < 5; s++) e = n[a % 64] + e, 
        a >>>= 6;
    }
    return e;
}, [ [ "A", "/pages/article/article", "id" ], [ "M", "/pages/magazine/magazine", "id" ], [ "U", "/pages/profile/user", "uid" ], [ "T", "/pages/post/post", "id" ], [ "G", "/pages/group/group", "id" ], [ "P", "/pages/page/page", "publicationId" ] ]);

exports.buildScene = function(r, t) {
    var e, n = !0, i = !1, s = void 0;
    try {
        for (var u, o = a[Symbol.iterator](); !(n = (u = o.next()).done); n = !0) {
            var l = u.value;
            l[1] === r && (e = "" + l[0] + t[l[2]]);
        }
    } catch (r) {
        i = !0, s = r;
    } finally {
        try {
            !n && o.return && o.return();
        } finally {
            if (i) throw s;
        }
    }
    return e;
}, exports.parseScene = function(r) {
    if (r) {
        var n, s = r.substring(0, 1), u = r.substring(1).split("$"), o = !0, l = !1, f = void 0;
        try {
            for (var g, v = a[Symbol.iterator](); !(o = (g = v.next()).done); o = !0) {
                var p = g.value;
                if (p[0] === s) {
                    n = p[1];
                    break;
                }
            }
        } catch (r) {
            l = !0, f = r;
        } finally {
            try {
                !o && v.return && v.return();
            } finally {
                if (l) throw f;
            }
        }
        if (n) {
            var d = {}, b = !0, c = !1, y = void 0;
            try {
                for (var h, m = u[Symbol.iterator](); !(b = (h = m.next()).done); b = !0) {
                    var x = h.value, S = x.substring(0, 1), I = x.substring(1);
                    "d" === S ? d.id = t(I) : "c" === S ? d.id = e(I) : "u" === S ? d.uid = i(I) : "m" === S ? d.mid = i(I) : "i" === S ? d.id = i(I) : "p" === S ? d.publicationId = i(I) : "n" === S ? d.mark = I : "z" === S && (d.id = I);
                }
            } catch (r) {
                c = !0, y = r;
            } finally {
                try {
                    !b && m.return && m.return();
                } finally {
                    if (c) throw y;
                }
            }
            return {
                base: n,
                params: d
            };
        }
    }
};