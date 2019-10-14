function e(e) {
    var a = e.method, i = e.url, s = e.data, l = e.success, n = e.fail, r = (e.iHandleFail, 
    "");
    (m = e.header) && (r = m.form_id), console.log("formid====", r);
    var d = t.getAlias(), c = t.getSkey(), u = t.getUid(), f = t.getEmployeeSid();
    console.log(f);
    t.globalData.sid;
    var g, m = {};
    o = t.getHost(), a = (a || "GET").toLowerCase(), s = s || {}, (g = {
        url: o + i,
        header: m = {
            "content-type": "application/x-www-form-urlencoded",
            alias: d || "",
            uid: u || "",
            sesskey: c || "",
            formid: r
        },
        method: a,
        success: function(e) {
            console.log("接口返回的数据===", e);
            var o = e.data;
            "function" == typeof l && l(o);
        },
        fail: function(e) {
            "function" == typeof n && n(e);
        }
    }).data = s, wx.request(g), console.log("请求的接口====", g);
}

require("./util.js");

var o, t = getApp();

module.exports = {
    P: function(o) {
        (o = o || {}).method = "POST", e(o);
    },
    G: function(o) {
        (o = o || {}).method = "GET", e(o);
    },
    request: e
};