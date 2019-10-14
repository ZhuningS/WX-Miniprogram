function e(e) {
    return e <= 10 ? a[e] : e >= 100 ? "" : e < 20 ? "十" + a[e % 10] : a[parseInt(e / 10)] + "十" + (e % 10 == 0 ? "" : a[e % 10]);
}

function t(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

function r(e, t, r) {
    if (void 0 === e || 0 === e.length) return e;
    var n = /(?:^|\s)(.*?.qingmang.mobi\/image\/orion\/[^_]*)_([0-9]*)_([0-9]*)(.*?)(?:\s|$)/g.exec(e);
    if (!n) return e;
    var o = parseInt(n[2]), i = parseInt(n[3]), a = t || 750, u = r || 1334;
    if (o > a || i > u) {
        var g = a / o;
        e = e + "?imageView2/2/w/" + parseInt(o * g);
    }
    return e.indexOf(".webp") > -1 && (e.indexOf("?imageView2") > -1 ? e += "/format/jpeg" : e += "?imageView2/0/format/jpeg"), 
    e;
}

function n(e) {
    if (e) return "string" == typeof e ? e = r(e) : "string" == typeof e.url && (e.url = r(e.url)), 
    e;
}

function o(e) {
    return encodeURIComponent(e);
}

function i(e) {
    return decodeURIComponent(e);
}

var a = [ "〇", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十" ];

module.exports = {
    formatNumber: t,
    formatTime: function(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = new Date(), n = r.getTime() - e;
        if (t) {
            if (n <= 6e4) return "刚刚";
            if (n <= 36e5) return Math.floor(n / 6e4) + " 分钟前";
            if (n <= 864e5) return Math.floor(n / 36e5) + " 小时前";
            if (n <= 6048e5) return Math.floor(n / 864e5) + " 天前";
        }
        var o = new Date(e), i = o.getDate(), a = o.getMonth() + 1, u = o.getFullYear();
        return t || r.getDate() !== i || r.getMonth() + 1 !== a || r.getFullYear() !== u ? u === r.getFullYear() ? a + "月" + i + "日" : u + "年" + a + "月" + i + "日" : (o.getHours() < 10 ? "0" + o.getHours() : "" + o.getHours()) + ":" + (o.getMinutes() < 10 ? "0" + o.getMinutes() : "" + o.getMinutes());
    },
    formatTimeNew: function(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = new Date(), n = r.getTime() - e;
        if (t) {
            if (n <= 6e4) return "刚刚";
            if (n <= 36e5) return Math.floor(n / 6e4) + " 分钟前";
            if (n <= 864e5) return Math.floor(n / 36e5) + " 小时前";
            if (n <= 6048e5) return Math.floor(n / 864e5) + " 天前";
        }
        var o = new Date(e), i = o.getDate(), a = o.getMonth() + 1, u = o.getFullYear();
        return t || r.getDate() !== i || r.getMonth() + 1 !== a || r.getFullYear() !== u ? u === r.getFullYear() ? a + " 月 " + i + " 日" : u + " 年 " + a + " 月 " + i + " 日" : (o.getHours() < 10 ? "0" + o.getHours() : "" + o.getHours()) + ":" + (o.getMinutes() < 10 ? "0" + o.getMinutes() : "" + o.getMinutes());
    },
    formatDate: function(t) {
        var r = new Date(t);
        return console.log("formatTime TS", t), e(r.getMonth() + 1) + "月" + e(r.getDate()) + "日";
    },
    formatWeek: function(t) {
        var r = new Date(t);
        return 0 === r.getDay() ? "星期日" : "星期" + e(r.getDay());
    },
    formatDeadlineString: function(e) {
        var r = e.getFullYear(), n = t(e.getMonth() + 1), o = t(e.getDate()), i = t(e.getHours()), a = Math.floor(e.getMinutes() / 10);
        return a = 0 === a ? "00" : 10 * a, r + "年" + n + "月" + o + "日  " + i + ":" + a;
    },
    genThumbUrl: r,
    thumbObjectImage: function(e) {
        if (e.cover && (e.cover = n(e.cover)), e.covers) for (var t = 0; t < e.covers.length; t++) e.covers[t] = n(e.covers[t]);
    },
    thumbImage: n,
    toJson: function(e) {
        return JSON.stringify(e);
    },
    fromJson: function(e) {
        return JSON.parse(e);
    },
    buildUrl: function(e, t) {
        if (t) {
            var r = [];
            for (var n in t) r.push(n + "=" + o(t[n]));
            if (r.length > 0) return e + "?" + r.join("&");
        }
        return e;
    },
    parseUrl: function(e) {
        var t = {
            params: {}
        }, r = e.indexOf("?");
        if (r <= 0) t.base = e; else {
            t.base = e.substring(0, r);
            var n = e.substring(r + 1).split("&"), o = !0, a = !1, u = void 0;
            try {
                for (var g, f = n[Symbol.iterator](); !(o = (g = f.next()).done); o = !0) {
                    var s = g.value, l = s.indexOf("=");
                    l <= 0 ? t.params[s] = "" : t.params[s.substring(0, l)] = i(s.substring(l + 1));
                }
            } catch (e) {
                a = !0, u = e;
            } finally {
                try {
                    !o && f.return && f.return();
                } finally {
                    if (a) throw u;
                }
            }
        }
        return console.log("redirect url is ", t), t;
    },
    decodeParam: i,
    encodeParam: o,
    isEmptyObject: function(e) {
        if (null == e) return !0;
        for (var t in e) return !1;
        return !0;
    },
    hexToRgba: function(e, t) {
        return "rgba(" + parseInt(e.substring(0, 2), 16) + "," + parseInt(e.substring(2, 4), 16) + "," + parseInt(e.substring(4, 6), 16) + ", " + t + ")";
    }
};