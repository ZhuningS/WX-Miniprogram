function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

exports.default = function(e) {
    var i = !0;
    if ("object" === t(e.data) && "string" == typeof e.data.item_code && "string" == typeof e.data.sku_id && "number" == typeof e.data.quantity || (i = !1), 
    !i) return s.default.showErrTips("参数错误"), (0, o.Log)("参数错误"), -1;
    (0, u.default)({
        cgi: a.cgiSet.addgoods,
        data: e.data,
        showLoading: !0,
        success: function(t) {
            "function" == typeof e.success && e.success(t.goods);
        },
        fail: function(e) {
            var t = e.data.errcode || e.data.base_resp && e.data.base_resp.ret || -1;
            switch (setTimeout(function() {
                s.default.showErrTips("请稍后重试");
            }, 0), t) {
              case r.default.SYSTEM_ERROR.code:
              case r.default.REQ_TIMEOUT.code:
            }
        }
    });
};

var o = require("../utils/logger"), r = e(require("../utils/return_code")), s = e(require("../utils/toast")), u = e(require("./reqModel.js")), a = require("../../libs/mmuxwxappdevkit/core/network.js");

require("../utils/api.js");