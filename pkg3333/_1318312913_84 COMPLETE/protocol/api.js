function t(t) {
    return Object.assign(t, {
        token: getApp().getUserToken(),
        app_id: getApp().getConfig().wxAppid,
        apivc: 3,
        timeline_style: "flat"
    });
}

var e = require("../utils/dev"), n = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./ajax")), i = "https://api.qingmang.me/v1", u = (e.__DEBUG__, "https://api.qingmang.me/ng"), r = new RegExp("^https?://", "i");

module.exports = {
    get: function(e) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = void 0;
        return i = t(i), a = r.test(e) ? e : u + "/" + e, n.default.get(a, i);
    },
    getV1: function(e) {
        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return u = t(u), n.default.get(i + "/" + e, u);
    },
    post: function(e) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return i = t(i), n.default.post(u + "/" + e, i);
    },
    put: function(e) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return i = t(i), n.default.put(u + "/" + e, i);
    },
    del: function(e) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return i = t(i), n.default.del(u + "/" + e, i);
    }
};