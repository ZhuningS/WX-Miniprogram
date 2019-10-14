Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(t) {
    (0, e.default)({
        cgi: i.cgiSet.payorder,
        data: Object.assign({
            biz_appid: s.appid()
        }, t.data),
        showLoading: !0,
        success: function(e) {
            "function" == typeof t.success && t.success(e);
        },
        fail: function(e) {
            "function" == typeof t.fail && t.fail(e);
        }
    });
};

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./reqModel.js")), i = require("../../libs/mmuxwxappdevkit/core/network.js"), s = (require("../utils/api.js"), 
require("../utils/sys.js"));