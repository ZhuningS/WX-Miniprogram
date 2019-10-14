function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    (0, s.default)({
        cgi: u.cgiSet.deleteorder,
        data: e.data,
        showLoading: !0,
        success: function(t) {
            "function" == typeof e.success && e.success(t);
        },
        fail: function(s) {
            var u = s.data.errcode || s.data.base_resp && s.data.base_resp.ret || -1;
            switch (setTimeout(function() {
                r.default.showErrTips("请稍后重试");
            }, 0), u) {
              case t.default.SYSTEM_ERROR.code:
              case t.default.REQ_TIMEOUT.code:
            }
            "function" == typeof e.fail && e.fail();
        }
    });
};

require("../utils/logger");

var t = e(require("../utils/return_code")), r = e(require("../utils/toast")), s = e(require("./reqModel.js")), u = require("../../libs/mmuxwxappdevkit/core/network.js");

require("../utils/api.js");