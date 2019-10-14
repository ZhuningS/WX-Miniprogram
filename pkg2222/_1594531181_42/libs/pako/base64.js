module.exports = function() {
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.encode = function(e) {
        var o, a, n, h, i, C, c, d = "", f = 0;
        for (e = t(e); f < e.length; ) h = (o = e.charCodeAt(f++)) >> 2, i = (3 & o) << 4 | (a = e.charCodeAt(f++)) >> 4, 
        C = (15 & a) << 2 | (n = e.charCodeAt(f++)) >> 6, c = 63 & n, isNaN(a) ? C = c = 64 : isNaN(n) && (c = 64), 
        d = d + r.charAt(h) + r.charAt(i) + r.charAt(C) + r.charAt(c);
        return d;
    }, this.decode = function(t) {
        var e, o, a, n, h, i, C = "", c = 0;
        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length; ) e = r.indexOf(t.charAt(c++)) << 2 | (n = r.indexOf(t.charAt(c++))) >> 4, 
        o = (15 & n) << 4 | (h = r.indexOf(t.charAt(c++))) >> 2, a = (3 & h) << 6 | (i = r.indexOf(t.charAt(c++))), 
        C += String.fromCharCode(e), 64 != h && (C += String.fromCharCode(o)), 64 != i && (C += String.fromCharCode(a));
        return C;
    };
    var t = function(r) {
        r = r.replace(/\r\n/g, "\n");
        for (var t = "", e = 0; e < r.length; e++) {
            var o = r.charCodeAt(e);
            o < 128 ? t += String.fromCharCode(o) : o > 127 && o < 2048 ? (t += String.fromCharCode(o >> 6 | 192), 
            t += String.fromCharCode(63 & o | 128)) : (t += String.fromCharCode(o >> 12 | 224), 
            t += String.fromCharCode(o >> 6 & 63 | 128), t += String.fromCharCode(63 & o | 128));
        }
        return t;
    };
};