Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(i) {
    var o = i.showLoading;
    o && t.showLoading({
        title: "加载中"
    }), e.default.request({
        cgi: i.cgi,
        params: i.data,
        success: function(e) {
            "function" == typeof i.success && i.success(e);
        },
        fail: function(e) {
            "function" == typeof i.fail && i.fail(e);
        },
        complete: function(e) {
            "function" == typeof i.complete && i.complete(e), o && t.hideLoading();
        }
    });
};

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../utils/req")), t = require("../utils/api.js");