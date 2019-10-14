Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = {
    ripple: {
        grande: [ "w", 335, "m", 20, "f", 20, "l", 30 ],
        tall: [ "w", 174, "m", 12, "f", 16, "l", 22 ]
    },
    activity: {
        grande: [ "w", 335, "m", 20, "f", 16, "l", 24 ],
        tall: [ "w", 188, "m", 12, "f", 14, "l", 22 ]
    }
}, r = [ "post" ];

exports.isPinSize = function(t) {
    return "tall" === t;
}, exports.isActivityType = function(t) {
    return [ function() {
        return t.hotPost;
    }, function() {
        return r.includes(t.type);
    } ].some(function(t) {
        return t();
    });
}, exports.generateMarkImageUrl = function(r, e, n, a) {
    var i = r ? "m" + r : e, o = a ? "tall" : "grande";
    return "http://statics03.qingmang.mobi/image2/share/wx05790b1180642960/mark/" + i + "/i/" + t[n][o].join("__");
}, exports.generateCardId = function(t, r, e, n) {
    var a = t + "-" + r + "-";
    return a += e ? "xiaohua" : n || "unknown";
}, exports.countMarkUserNumber = function(t, r) {
    var e = 0;
    if (r && r.length > 0) for (var n = r.length > 3 ? 3 : r.length, a = 0; a < n; a++) r[a].user && r[a].user.avatar && (e += 1);
    return e >= t ? "" : e > 0 ? "+" + (t - e) : t;
};