function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    (0, s.default)({
        cgi: u.cgiSet.addfeedback,
        data: e.data,
        showLoading: !0,
        success: function(t) {
            "function" == typeof e.success && e.success(t.goods);
        },
        fail: function(e) {
            setTimeout(function() {
                t.default.showErrTips("请稍后重试");
            }, 0);
        }
    });
};

var t = e(require("../utils/toast")), s = e(require("./reqModel.js")), u = require("../../libs/mmuxwxappdevkit/core/network.js");

require("../utils/api.js");