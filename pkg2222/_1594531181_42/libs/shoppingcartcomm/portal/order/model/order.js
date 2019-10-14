function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    this.state = s.default.init;
}

var i = require("../../../index.js"), s = e(require("../../../../mmuxwxappdevkit/core/state.js")), o = e(require("../../../utils/paramChecker.js")), a = e(require("../../../utils/toast.js"));

t.prototype = {
    requestPay: function(e) {
        var t = this;
        t.state = s.default.loading;
        var n = {
            goods_list: e.goods_list,
            receipt_info: e.receipt_info,
            is_new_version: !0,
            pay_source: e.pay_source,
            ext_info_list: e.ext_info_list,
            biz_appid: i.Sys.appid() != i.Sys.shoppingcarAppid() ? i.Sys.appid() : void 0
        };
        e.invoice_info && (n.invoice_info = e.invoice_info), setTimeout(function() {
            a.default.showLoading();
        }), i.Network.request({
            cgi: i.Network.cgiSet.payorder,
            params: n,
            success: function(t) {
                if (setTimeout(function() {
                    a.default.hideLoading();
                }), !(o.default.isStringAndNotEmpty(t.timeStamp) && o.default.isStringAndNotEmpty(t.nonceStr) && o.default.isStringAndNotEmpty(t.package) && o.default.isStringAndNotEmpty(t.signType) && o.default.isStringAndNotEmpty(t.paySign))) return a.default.showErrTips("请稍后重试"), 
                -1;
                e.success && e.success(t);
            },
            fail: function(i) {
                if (setTimeout(function() {
                    a.default.hideLoading();
                }), i && i.data && (10014 === i.data.errcode || 10015 === i.data.errcode)) return e.success && e.success(i), 
                t.state = s.default.success, i.errcode;
                t.state = s.default.fail, e.fail && e.fail(i);
            }
        });
    },
    calcFee: function(e) {
        var t = this;
        t.state = s.default.loading;
        var o = {
            goods_list: e.goods_list,
            receipt_info: e.receipt_info
        };
        setTimeout(function() {
            a.default.showLoading();
        }), i.Network.request({
            cgi: i.Network.cgiSet.getprepayinfo,
            params: o,
            success: function(t) {
                if (setTimeout(function() {
                    a.default.hideLoading();
                }), 0 !== t.errcode) return a.default.showErrTips("请稍后重试"), -1;
                e.success && e.success(t);
            },
            fail: function(i) {
                setTimeout(function() {
                    a.default.hideLoading();
                }), t.state = s.default.fail, e.fail && e.fail(i);
            }
        });
    }
}, module.exports = t;