var r = function() {
    function r(r, t) {
        var e = [], n = !0, u = !1, i = void 0;
        try {
            for (var o, a = r[Symbol.iterator](); !(n = (o = a.next()).done) && (e.push(o.value), 
            !t || e.length !== t); n = !0) ;
        } catch (r) {
            u = !0, i = r;
        } finally {
            try {
                !n && a.return && a.return();
            } finally {
                if (u) throw i;
            }
        }
        return e;
    }
    return function(t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return r(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), t = function(r) {
    return (r = r.toString())[1] ? r : "0" + r;
};

module.exports = {
    formatTime: function(r) {
        var e = r.getFullYear(), n = r.getMonth() + 1, u = r.getDate(), i = r.getHours(), o = r.getMinutes(), a = r.getSeconds();
        return [ e, n, u ].map(t).join("/") + " " + [ i, o, a ].map(t).join(":");
    },
    queryStringFromUrl: function(r) {
        var t = r.split("?");
        return 2 != t.length ? "" : t[1];
    },
    getQueryObject: function(t) {
        return t ? (/^[?#]/.test(t) ? t.slice(1) : t).split("&").reduce(function(t, e) {
            var n = e.split("="), u = r(n, 2), i = u[0], o = u[1];
            return t[i] = o ? decodeURIComponent(o.replace(/\+/g, " ")) : "", t;
        }, {}) : {};
    },
    appendQueryObject: function(r, t) {
        if (!t) return r;
        r || (r = "");
        var e = "?";
        return -1 != r.indexOf("?") ? e = "&" : 0 == r.length && (e = ""), r += e, Object.keys(t).forEach(function(e, n) {
            0 != n && (r += "&"), r += e + "=" + t[e];
        }), r;
    },
    genKVLogString: function(r) {
        var t, e = "";
        for (t in r) 0 != e.length && (e += ","), e += r[t];
        return e;
    },
    getCurrentPage: function() {
        var r = getCurrentPages();
        return r[r.length - 1];
    },
    isLocalResource: function(r) {
        return r && r.indexOf("://") < 0;
    },
    compareSDKVersion: function(r, t) {
        r = r.split("."), t = t.split(".");
        for (var e = Math.max(r.length, t.length); r.length < e; ) r.push("0");
        for (;t.length < e; ) t.push("0");
        for (var n = 0; n < e; n++) {
            var u = parseInt(r[n]), i = parseInt(t[n]);
            if (u > i) return 1;
            if (u < i) return -1;
        }
        return 0;
    }
};