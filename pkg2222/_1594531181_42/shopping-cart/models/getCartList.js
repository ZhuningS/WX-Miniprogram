function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    (0, t.default)({
        cgi: i.cgiSet.getgoods,
        data: {
            page_index: 0,
            page_length: 1e3,
            biz_appid: u.appid()
        },
        showLoading: !0,
        success: function(s) {
            "function" == typeof e.success && e.success(s.goods_list || [], s.merchant_list || []);
        },
        fail: function(e) {
            var t = e.errcode || e.base_resp && e.base_resp.ret || -1;
            switch (t) {
              case s.default.SYSTEM_ERROR.code:
              case s.default.REQ_TIMEOUT.code:
                r.default.showErrTips("请稍后重试");
                break;

              default:
                r.default.showErrTips(t);
            }
        }
    });
};

require("../utils/logger");

var s = e(require("../utils/return_code")), r = e(require("../utils/toast")), t = (e(require("../../libs/mmuxwxappdevkit/utils/paramChecker")), 
e(require("./reqModel.js"))), i = require("../../libs/mmuxwxappdevkit/core/network.js"), u = (require("../utils/api.js"), 
require("../utils/sys.js"));