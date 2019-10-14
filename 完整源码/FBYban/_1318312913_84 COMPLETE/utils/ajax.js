function e(e) {
    var t = [];
    for (var o in e) t.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
    return t.join("&");
}

module.exports = {
    get: function(e, t, o, n, c) {
        wx.request({
            url: e,
            data: t,
            method: "GET",
            success: o,
            fail: n,
            complete: c
        });
    },
    post: function(t, o, n, c, u) {
        wx.request({
            url: t,
            data: e(o),
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: n,
            fail: c,
            complete: u
        });
    },
    put: function(t, o, n, c, u) {
        wx.request({
            url: t,
            data: e(o),
            method: "PUT",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: n,
            fail: c,
            complete: u
        });
    },
    delete: function(e, t, o, n, c) {
        wx.request({
            url: e,
            data: t,
            method: "DELETE",
            success: o,
            fail: n,
            complete: c
        });
    },
    json2Form: e
};