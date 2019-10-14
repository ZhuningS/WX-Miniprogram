function r(r, e, n, o, t, c) {
    for (var u = 0, a = 0, d = (r = String(r)).length, f = "", i = 0; a < d; ) {
        var h = r.charCodeAt(a);
        for (u = (u << t) + (h = h < 256 ? n[h] : -1), i += t; i >= c; ) {
            var C = u >> (i -= c);
            f += o.charAt(C), u ^= C << i;
        }
        ++a;
    }
    return !e && i > 0 && (f += o.charAt(u << c - i)), f;
}

for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "", o = [ 256 ], t = [ 256 ], c = 0, u = {
    encode: function(r) {
        return r.replace(/[\u0080-\u07ff]/g, function(r) {
            var e = r.charCodeAt(0);
            return String.fromCharCode(192 | e >> 6, 128 | 63 & e);
        }).replace(/[\u0800-\uffff]/g, function(r) {
            var e = r.charCodeAt(0);
            return String.fromCharCode(224 | e >> 12, 128 | e >> 6 & 63, 128 | 63 & e);
        });
    },
    decode: function(r) {
        return r.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(r) {
            var e = (15 & r.charCodeAt(0)) << 12 | (63 & r.charCodeAt(1)) << 6 | 63 & r.charCodeAt(2);
            return String.fromCharCode(e);
        }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(r) {
            var e = (31 & r.charCodeAt(0)) << 6 | 63 & r.charCodeAt(1);
            return String.fromCharCode(e);
        });
    }
}; c < 256; ) {
    var a = String.fromCharCode(c);
    n += a, t[c] = c, o[c] = e.indexOf(a), ++c;
}

var d = function r(e, n, o) {
    return n ? r[e](n, o) : e ? null : this;
};

d.btoa = d.encode = function(n, o) {
    return n = !1 === d.raw || d.utf8encode || o ? u.encode(n) : n, (n = r(n, !1, t, e, 8, 6)) + "====".slice(n.length % 4 || 4);
}, d.atob = d.decode = function(e, t) {
    var c = (e = String(e).split("=")).length;
    do {
        e[--c] = r(e[c], !0, o, n, 6, 8);
    } while (c > 0);
    return e = e.join(""), !1 === d.raw || d.utf8decode || t ? u.decode(e) : e;
}, module.exports = {
    encodeBase64: d.encode,
    decodeBase64: d.decode
};