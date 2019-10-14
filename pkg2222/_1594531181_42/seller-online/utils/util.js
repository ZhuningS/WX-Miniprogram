require("../../libs/mmuxwxappdevkit/foundation/oss/aop.js");

var t = function(t) {
    return [ t.getHours(), t.getMinutes() ].map(r).join(":");
}, e = function(t) {
    return [ t.getFullYear(), t.getMonth() + 1, t.getDate() ].map(r).join("/");
}, n = function(t) {
    return "星期" + [ "日", "一", "二", "三", "四", "五", "六" ][t.getDay()];
}, r = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}, i = function(t, e) {
    if (!e) return t;
    var n = e.split(".");
    return n && n.forEach(function(e) {
        t = t[e];
    }), t;
}, o = function(t, e, n, r) {
    var o = 0;
    return t = i(t, n), e = i(e, n), t < e ? o = -1 : t > e && (o = 1), "desc" === r && (o = -o), 
    o;
};

module.exports = {
    formatTime: function(r) {
        var i = new Date(), o = new Date(r);
        return i.getFullYear() != o.getFullYear() || i.getMonth() != o.getMonth() || i.getDate() >= o.getDate() + 7 ? e(o) + " " + t(o) : i.getDate() == o.getDate() + 1 ? "昨天 " + t(o) : i.getDate() != o.getDate() ? n(o) + " " + t(o) : t(o);
    },
    compareAsc: function(t) {
        return function(e, n) {
            return o(e, n, t, "asc");
        };
    },
    compareDesc: function(t) {
        return function(e, n) {
            return o(e, n, t, "desc");
        };
    },
    getMsgUniqueId: function(t) {
        return "msg" + (t.id || "") + (t.client_msg_id || "");
    },
    getRandomString: function() {
        return new Date().getTime() + "" + 1e3 * Math.random().toFixed(3);
    },
    showTips: function(t, e) {
        wx.showToast({
            title: t,
            icon: "none",
            duration: e || 1e3
        });
    },
    boundingClientRectById: function(t, e) {
        wx.createSelectorQuery().select("#" + t).boundingClientRect().exec(function(t) {
            t[0] && e(t[0]);
        });
    },
    inherit: function(t, e) {
        var n = Object.assign({}, t);
        for (var r in e) "function" == typeof e[r] && "function" == typeof n[r] ? n[r] = e[r].after(n[r]) : r in n || (n[r] = e[r]);
        return n;
    }
};