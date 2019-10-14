function t(i) {
    var a = i.key, u = i.timeData, f = i.fn, l = i.timeKey, c = void 0 === l ? "toEndTime" : l, m = i.data, y = i.hideTime, b = i.isShowDay, d = void 0 !== b && b;
    if (!a) throw new Error("countdown缺少key参数");
    var v = null;
    if (y) {
        var h = new Date().getTime();
        v = Math.ceil((h - y) / 1e3);
    }
    n.globalData.timerObj || (n.globalData.timerObj = {});
    var p = function(t) {
        if ("object" == (void 0 === m ? "undefined" : r(m))) {
            var n = !1;
            m.forEach(function(r) {
                var i = c;
                2 == r.isPintuan && (n = !0, i = "pintuanToEndTime"), r[i] && r[i] > 0 && (t && v ? v > r[i] ? r[i] = 0 : v < r[i] && (r[i] = r[i] - v) : t || (r[i] = r[i] - 1), 
                r.timeArr = d ? e(r[i]) : o(r[i]));
            }), f && f(m);
            var i = m.filter(function(t) {
                return t[c];
            });
            if (n && (i = i.concat(m.filter(function(t) {
                return t.pintuanToEndTime;
            }))), i.length > 0) return !0;
        } else if (t && v ? v > m ? m = 0 : v < m && (m -= v) : t || (m -= 1), d ? f && f(e(m)) : f && f(o(m)), 
        m) return !0;
        return !1;
    };
    u && (m = u, n.globalData.timerObj[a] && clearTimeout(n.globalData.timerObj[a]), 
    p(!0)), n.globalData.timerObj[a] = setTimeout(function() {
        p() && t({
            data: m,
            fn: f,
            timeKey: c,
            key: a,
            isShowDay: d
        });
    }, 1e3);
}

function o(t) {
    if (!t || t < 0) return [ "00", "00", "00" ];
    var o = Math.floor(t / 3600), e = t % 3600, r = Math.floor(e / 60), n = e % 60, i = function(t) {
        return t ? t < 10 && (t = "0" + t) : t = "00", t;
    };
    return [ i(o), i(r), i(n) ];
}

function e(t) {
    if (!t || t < 0) return [ "00", "00", "00", "00" ];
    var o = Math.floor(t / 86400), e = t % 86400, r = Math.floor(e / 3600), n = e % 3600, i = Math.floor(n / 60), a = n % 60, u = function(t) {
        return t ? t < 10 && (t = "0" + t) : t = "00", t;
    };
    return [ u(o), u(r), u(i), u(a) ];
}

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, n = getApp();

module.exports = t;