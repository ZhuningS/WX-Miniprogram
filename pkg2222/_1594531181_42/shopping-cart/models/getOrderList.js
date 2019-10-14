function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    (0, i.default)({
        cgi: r.cgiSet.getorderlist,
        data: Object.assign({
            biz_appid: u.appid()
        }, e.data),
        showLoading: !0,
        success: function(t) {
            "function" == typeof e.success && e.success(t);
        },
        fail: function(i) {
            var r = i.data.errcode || i.data.base_resp && i.data.base_resp.ret || -1;
            switch (setTimeout(function() {
                s.default.showErrTips("请稍后重试");
            }, 0), r) {
              case t.default.SYSTEM_ERROR.code:
              case t.default.REQ_TIMEOUT.code:
            }
            "function" == typeof e.fail && e.fail();
        }
    });
};

require("../utils/logger");

var t = e(require("../utils/return_code")), s = e(require("../utils/toast")), i = e(require("./reqModel.js")), r = require("../../libs/mmuxwxappdevkit/core/network.js"), u = (require("../utils/api.js"), 
require("../utils/sys.js"));