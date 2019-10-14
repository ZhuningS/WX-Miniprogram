function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    (0, r.default)({
        cgi: u.cgiSet.getexpressdetail,
        data: e.data,
        showLoading: !0,
        success: function(t) {
            "function" == typeof e.success && e.success(t);
        },
        fail: function(r) {
            var u = r.data.errcode || r.data.base_resp && r.data.base_resp.ret || -1;
            switch (setTimeout(function() {
                s.default.showErrTips("请稍后重试");
            }, 0), u) {
              case t.default.SYSTEM_ERROR.code:
              case t.default.REQ_TIMEOUT.code:
            }
            "function" == typeof e.fail && e.fail();
        }
    });
};

require("../utils/logger");

var t = e(require("../utils/return_code")), s = e(require("../utils/toast")), r = e(require("./reqModel.js")), u = require("../../libs/mmuxwxappdevkit/core/network.js");

require("../utils/api.js");