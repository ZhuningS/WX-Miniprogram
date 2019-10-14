var e = require("./color.js");

module.exports = function(h, t, n) {
    for (var r = [], g = [], l = [], o = [], u = [], a = [], s = [], f = [ r, g, l, o, u, a, s ], i = 0, v = 0, p = new e(0, 0, 0, 0), M = 3; M <= t * n * 4; M += 4) {
        if (h[M] > 0) {
            var c = h[M] / 255, m = c / 255;
            p = new e(h[M - 3] * m, h[M - 2] * m, h[M - 1] * m, c);
        } else p = new e(h[M - 3] / 255, h[M - 2] / 255, h[M - 1] / 255, h[M] / 255);
        var d = p.toHSV();
        d.huge < 1 / 7 ? (r.push(p), r.length > i && (i = r.length, v = 0)) : d.huge < 2 / 7 ? (g.push(p), 
        g.length > i && (i = g.length, v = 1)) : d.huge < 3 / 7 ? (l.push(p), l.length > i && (i = l.length, 
        v = 2)) : d.huge < 4 / 7 ? (o.push(p), o.length > i && (i = o.length, v = 3)) : d.huge < 5 / 7 ? (u.push(p), 
        u.length > i && (i = u.length, v = 4)) : d.huge < 6 / 7 ? (a.push(p), a.length > i && (i = a.length, 
        v = 5)) : (s.push(p), s.length > i && (i = s.length, v = 6));
    }
    var w = f[v];
    if (w.length < 5) {
        for (w = f[Math.floor(1e4 * Math.random()) % 7]; w.length < 1; ) w = f[Math.floor(1e4 * Math.random()) % 7];
        var H = (p = w[Math.floor(1e4 * Math.random()) % w.length]).toHSV();
        H.brightness = .15;
        var S = new e(0, 0, 0, 0);
        return S.fromHSV(H), S;
    }
    var V = 16777215;
    return w.forEach(function(e) {
        var h = e.toHSV();
        h.brightness < V && (V = h.brightness, p = e);
    }), p;
};