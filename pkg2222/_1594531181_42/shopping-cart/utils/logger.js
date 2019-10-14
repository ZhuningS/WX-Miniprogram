function t(t) {
    return t >= 10 ? t + "" : "0" + t;
}

function e() {
    var e = new Date();
    return t(e.getFullYear()) + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate());
}

function n() {
    var e = new Date();
    return t(e.getFullYear()) + "_" + t(e.getMonth() + 1) + "_" + t(e.getDate()) + "_" + t(e.getHours()) + "_" + t(e.getMinutes()) + "_" + t(e.getSeconds());
}

function o(t) {
    var r = n(), a = wx.getStorageSync(g)[e()];
    if (s >= a.length) return "function" == typeof t && t(), 0;
    var u = Math.floor(a.length / 1e3) + 1;
    if (0 === u) return "function" == typeof t && t(), 0;
    var i = Math.floor(s / 1e3), c = s + 1e3;
    c >= a.length && (c = a.length);
    var l = a.slice(s, c);
    wx.request({
        url: "https://musiclist.weixin.qq.com/reportlog",
        data: {
            ticket: getApp().getUserTicket(),
            report_value: r + "." + i + "." + u,
            log_str: l.toString()
        },
        header: {
            "content-type": "application/json"
        },
        method: "POST",
        success: function(e) {
            LOG("update logs part ok, updateOffset is " + s), s += l.length, o(t);
        },
        fail: function(t) {
            LOG("update logs part fail, updateOffset is " + s);
        }
    });
}

function r() {
    var t = wx.getStorageSync(g);
    t instanceof Object || (t = {});
    var n = t[e()];
    n instanceof Array && 0 != n.length || (n = []), n = n.concat(a), t[e()] = n, a = [];
    for (var o in t) t.hasOwnProperty(o) && o !== e() && delete t[o];
    wx.setStorageSync(g, t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = [], g = "log_list_version_20171228", s = 0;

exports.ReportLogToSvr = function(t) {
    r(), s = 0, o(t);
}, exports.Log = function(e) {
    var n = new Date(), o = "[" + t(n.getFullYear()) + "-" + t(n.getMonth() + 1) + "-" + t(n.getDate()) + " " + t(n.getHours()) + ":" + t(n.getMinutes()) + ":" + t(n.getSeconds()) + "] " + e + "\n";
    a.push(o), a.length > 20 && r();
}, exports.PutLogToStorage = r;