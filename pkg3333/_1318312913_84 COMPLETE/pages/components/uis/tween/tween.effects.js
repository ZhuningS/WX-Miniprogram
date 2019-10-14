function r(r) {
    if (Array.isArray(r)) {
        for (var t = 0, n = Array(r.length); t < r.length; t++) n[t] = r[t];
        return n;
    }
    return Array.from(r);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = wx.createAnimation, n = {
    opacity: 1
}, e = {
    opacity: 0
}, a = function(t) {
    return function(n) {
        return (Array.isArray(n) ? n : [ n ]).map(function(n) {
            Object.keys(n).map(function(e) {
                var a = n[e], u = Array.isArray(a) ? a : [ a ];
                t[e].apply(t, r(u));
            }), t.step();
        }), t;
    };
};

exports.tweenEffectsManagerCreator = function(r) {
    var u = t(r), o = a(u), i = {
        fadeIn: function() {
            return o(n);
        },
        fadeOut: function() {
            return o(e);
        }
    };
    return {
        export: function(r, t) {
            var n = i[r + (t ? "In" : "Out")] || i[r];
            return n ? n().export() : {};
        }
    };
};