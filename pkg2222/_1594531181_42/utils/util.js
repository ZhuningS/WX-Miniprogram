var t = function() {
    function t(t, r) {
        var e = [], n = !0, u = !1, o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done) && (e.push(i.value), 
            !r || e.length !== r); n = !0) ;
        } catch (t) {
            u = !0, o = t;
        } finally {
            try {
                !n && a.return && a.return();
            } finally {
                if (u) throw o;
            }
        }
        return e;
    }
    return function(r, e) {
        if (Array.isArray(r)) return r;
        if (Symbol.iterator in Object(r)) return t(r, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), r = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(t) {
        var e = t.getFullYear(), n = t.getMonth() + 1, u = t.getDate(), o = t.getHours(), i = t.getMinutes(), a = t.getSeconds();
        return [ e, n, u ].map(r).join("/") + " " + [ o, i, a ].map(r).join(":");
    },
    getQueryObject: function(r) {
        return r ? (/^[?#]/.test(r) ? r.slice(1) : r).split("&").reduce(function(r, e) {
            var n = e.split("="), u = t(n, 2), o = u[0], i = u[1];
            return r[o] = i ? decodeURIComponent(i.replace(/\+/g, " ")) : "", r;
        }, {}) : {};
    },
    appendQueryObject: function(t, r) {
        var e = "?";
        return t.includes("?") && (e = "&"), t += e, Object.keys(r).forEach(function(e, n) {
            0 != n && (t += "&"), t += e + "=" + r[e];
        }), t;
    },
    genKVLogString: function(t) {
        var r, e = "";
        for (r in t) 0 != e.length && (e += ","), e += t[r];
        return e;
    },
    getCurrentPage: function() {
        var t = getCurrentPages();
        return t[t.length - 1];
    }
};