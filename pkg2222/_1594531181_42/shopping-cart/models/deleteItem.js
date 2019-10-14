function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    t.default.showLoading();
    for (var u = !0, a = e.data.goods_info_list, o = 0; o < a.length; o++) if ("string" != typeof a[o].item_code || "string" != typeof a[o].sku_id) {
        u = !1;
        break;
    }
    if (!u) return t.default.showErrTips("参数错误"), e.fail && e.fall(), -1;
    (0, r.default)({
        cgi: i.cgiSet.deletegoods,
        data: e.data,
        showLoading: !0,
        success: function(s) {
            t.default.showSuccessTips("删除成功"), e.success && e.success(s.success_list);
        },
        fail: function(e) {
            var r = e.data.errcode || e.data.base_resp && e.data.base_resp.ret || -1;
            switch (setTimeout(function() {
                t.default.showErrTips("请稍后重试");
            }, 0), r) {
              case s.default.SYSTEM_ERROR.code:
              case s.default.REQ_TIMEOUT.code:
            }
        }
    });
};

require("../utils/logger");

var s = e(require("../utils/return_code")), t = e(require("../utils/toast")), r = (e(require("../../libs/mmuxwxappdevkit/utils/paramChecker")), 
e(require("./reqModel.js"))), i = require("../../libs/mmuxwxappdevkit/core/network.js");

require("../utils/api.js");