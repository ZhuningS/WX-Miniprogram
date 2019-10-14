var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../libs/url")), t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
}, n = function(e) {
    var t = [];
    for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t.join("&");
}, o = function(e) {
    for (var t in e) void 0 === e[t] && delete e[t];
    return e;
}, a = function(e, n, o) {
    return e.header ? (e.header = t({}, e.header, {
        url: n,
        params: o
    }), e) : e;
};

module.exports = {
    get: function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.assign(n, {
            platform: "life_mina"
        }), t && t.startsWith("http:") && (t = "https" + t.substr(4));
        var r = {};
        return (t = new e.default(t)).search.substring(1).replace(/([^=&]+)=([^&]*)/g, function(e, t, n) {
            r[decodeURIComponent(t)] = decodeURIComponent(n);
        }), t = t.protocol + "//" + t.host + t.pathname, n = Object.assign(o(n), r), new Promise(function(e, o) {
            wx.request({
                url: t,
                data: n,
                method: "GET",
                success: function(r) {
                    200 === r.statusCode && r.data.ok ? e(r) : o(a(r, t, n));
                },
                fail: o
            });
        });
    },
    post: function(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.assign(r, {
            platform: "life_mina"
        });
        var s = {};
        return (t = new e.default(t)).search.substring(1).replace(/([^=&]+)=([^&]*)/g, function(e, t, n) {
            s[decodeURIComponent(t)] = decodeURIComponent(n);
        }), t = t.protocol + "//" + t.host + t.pathname, r = n(Object.assign(o(r), s)), 
        new Promise(function(e, n) {
            wx.request({
                url: t,
                data: r,
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                success: function(o) {
                    200 === o.statusCode && o.data.ok ? e(o) : n(a(o, t, r));
                },
                fail: n
            });
        });
    },
    put: function(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.assign(r, {
            platform: "life_mina"
        });
        var s = {};
        return (t = new e.default(t)).search.substring(1).replace(/([^=&]+)=([^&]*)/g, function(e, t, n) {
            s[decodeURIComponent(t)] = decodeURIComponent(n);
        }), t = t.protocol + "//" + t.host + t.pathname, r = n(Object.assign(o(r), s)), 
        new Promise(function(e, n) {
            wx.request({
                url: t,
                data: r,
                method: "PUT",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                success: function(o) {
                    200 === o.statusCode && o.data.ok ? e(o) : n(a(o, t, r));
                },
                fail: n
            });
        });
    },
    del: function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.assign(n, {
            platform: "life_mina"
        });
        var r = {};
        return (t = new e.default(t)).search.substring(1).replace(/([^=&]+)=([^&]*)/g, function(e, t, n) {
            r[decodeURIComponent(t)] = decodeURIComponent(n);
        }), t = t.protocol + "//" + t.host + t.pathname, n = Object.assign(o(n), r), new Promise(function(e, o) {
            wx.request({
                url: t,
                data: n,
                method: "DELETE",
                success: function(r) {
                    200 === r.statusCode && r.data.ok ? e(r) : o(a(r, t, n));
                },
                fail: o
            });
        });
    },
    json2Form: n
};