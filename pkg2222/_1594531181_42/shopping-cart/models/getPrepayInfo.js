Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(i) {
    (0, e.default)({
        cgi: t.cgiSet.getprepayinfo,
        data: i.data,
        showLoading: !0,
        success: function(e) {
            "function" == typeof i.success && i.success(e);
        },
        fail: function(e) {
            "function" == typeof i.fail && i.fail(e);
        }
    });
};

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./reqModel.js")), t = require("../../libs/mmuxwxappdevkit/core/network.js");

require("../utils/api.js");