function n(n) {
    return (n = n.toString())[1] ? n : "0" + n;
}

function o() {
    wx.showLoading({
        title: "加载中",
        mask: !1
    });
}

var t = [];

module.exports = {
    formatTime: function(o) {
        var t = o.getFullYear(), e = o.getMonth() + 1, i = o.getDate(), s = o.getHours(), a = o.getMinutes(), c = o.getSeconds();
        return [ t, e, i ].map(n).join("/") + " " + [ s, a, c ].map(n).join(":");
    },
    getTimeBySec: function(o) {
        var t, e = parseInt(o / 36e5), i = parseInt((o - 36e5 * e) / 6e4), s = parseInt((o - 36e5 * e - 6e4 * i) / 1e3);
        return e > 25 && (t = parseInt(e / 24), e = parseInt(e % 24)), {
            str: [ e, i, s ].map(n).join(":"),
            d: t ? n(t) : "",
            h: n(e),
            m: n(i),
            s: n(s)
        };
    },
    alert: function(n, o) {
        wx.showModal({
            content: n,
            showCancel: !1,
            success: function(n) {
                n.confirm && o && o();
            }
        });
    },
    showConfirm: function(n, o, t) {
        wx.showModal({
            content: n,
            showCancel: !0,
            success: function(n) {
                n.confirm ? o && o() : n.cancel && t && t();
            }
        });
    },
    showOK: function(n, o) {
        wx.showToast({
            title: n,
            icon: "none",
            duration: 1500
        }), o && o();
    },
    showWarn: function(n, o) {
        wx.showToast({
            title: n,
            icon: "none",
            duration: 2500
        }), o && o();
    },
    loading: o,
    showLoading: o,
    hideLoading: function() {
        wx.hideLoading();
    },
    jumpByScene: function(n) {
        return !!n && !!(n = decodeURIComponent(n)) && (wx.redirectTo({
            url: n
        }), !0);
    },
    parseOptions: function(n) {
        var o = (n = n || {}).scene;
        return o && (o = decodeURIComponent(o)).split("&").forEach(function(o) {
            var t = o.split("=");
            2 == t.length && (n[t[0]] = t[1]);
        }), n;
    },
    formatMobile: function(n) {
        var o = n;
        return o.substr(0, 3) + "****" + o.substr(7);
    },
    formatBankNo: function(n) {
        var o = n;
        return n.length > 18 ? "**** **** **** **** " + o.substr(16) : "**** **** **** " + o.substr(12);
    },
    forbidShare: function() {
        wx.hideShareMenu();
    },
    uploadimg: function(n, o) {
        var e = this, i = n.i ? n.i : 0, s = n.success ? n.success : 0, a = n.fail ? n.fail : 0;
        wx.uploadFile({
            url: "https://yitui.jijiax.com/apis/home/card.core/upload",
            filePath: n.path[i],
            name: "file",
            formData: null,
            success: function(n) {
                200 == n.statusCode && s++, console.log(n), console.log(i);
                var o = JSON.parse(n.data).data;
                t.push(o);
            },
            fail: function(n) {
                a++, console.log("fail:" + i + "fail:" + a);
            },
            complete: function() {
                console.log(i), ++i == n.path.length ? (console.log("执行完毕"), console.log("成功：" + s + " 失败：" + a), 
                console.log("files=====", t), o && o(t), t = []) : (console.log(i), n.i = i, n.success = s, 
                n.fail = a, e.uploadimg(n, o));
            }
        });
    },
    async: function(n, o) {
        var t = n.length, e = 0;
        n.forEach(function(n, i) {
            n && n(function(n, i) {
                ++e == t && o && o();
            });
        });
    }
};