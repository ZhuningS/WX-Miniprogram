function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a) {
    wx.showModal({
        content: t,
        showCancel: !1,
        complete: a
    });
}

function o(t) {
    a(t, wx.navigateBack);
}

function n(t, a) {
    a = a || 2, "string" != typeof t && (t += "");
    var o = t.lastIndexOf(".");
    return -1 === o ? t : t.substring(0, o + a + 1);
}

var e = t(require("../../../utils/underscore")), i = t(require("../../../utils/util")), u = t(require("../../../utils/listener")), s = require("../../../utils/data"), d = t(require("../../../utils/requestUtil"));

getApp();

Page({
    data: {
        payInfo: null,
        coupon: {}
    },
    key: null,
    resultInfo: null,
    onLoad: function(t) {
        this.key = t.key, u.default.addEventListener("pay.payinfo_" + this.key, this.onPayInfo), 
        console.log("pay.payinfo_" + this.key, "addEvented"), u.default.fireEventListener("pay.get_payinfo_" + this.key, this.onPayInfo);
    },
    onShow: function() {
        var t = this;
        wx.showNavigationBarLoading && wx.showNavigationBarLoading(), d.default.get(s.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/getMyCardInfo.html", {}, function(a) {
            e.default.extend(t.data, a), console.log(a), t.updateDiscount();
        }, this, {
            completeAfter: function() {
                wx.showNavigationBarLoading && wx.hideNavigationBarLoading();
            },
            isShowLoading: !1
        });
    },
    onUnload: function() {
        u.default.removeEventListener("pay.payinfo_" + this.key, this.onPayInfo);
        var t = this.resultInfo ? {
            code: 1,
            msg: "OK",
            result: this.resultInfo
        } : {
            code: -1,
            msg: "取消了付款"
        };
        u.default.fireEventListener("pay.result_" + this.key, [ t ]);
    },
    onSelectCouponTap: function() {
        var t = this, a = this.data.coupon, o = this.data.use_coupon;
        a.isShow = !0;
        var n = "";
        this.data.payInfo && this.data.payInfo.addon_name && (n = this.data.payInfo.addon_name), 
        i.default.useCoupon({
            page: this,
            onSelect: function(a) {
                console.log(a), t.data.use_coupon = a, t.updateDiscount();
            },
            params: {
                money: this.data.payInfo.total_amount,
                addon_name: n
            },
            coupon_id: o ? o.id : 0
        });
    },
    onSelectCoupon: function(t) {
        var a = this.data.ticket[t];
        this.setData({
            select_ticket: a
        });
    },
    onPayInfo: function(t) {
        console.log(t, "payInfo"), void 0 !== t.notify_url && "" != t.notify_url ? void 0 === t.total_amount || t.total_amount <= 0 ? o("总金额错误！") : this.setData({
            payInfo: t
        }) : o("业务处理回调地址错误！");
    },
    onPaySubmit: function(t) {
        var a = this;
        if (!d.default.isLoading(this.payRQId)) {
            var o = e.default.extend(t.detail.value, this.data.payInfo, {
                formId: t.detail.formId,
                form_id: t.detail.formId
            });
            this.payRQId = d.default.post(this.data.payInfo.notify_url, o, function(t) {
                a.resultInfo = t, wx.showToast({
                    title: "支付成功！",
                    success: function(t) {
                        wx.navigateBack();
                    }
                });
            });
        }
    },
    onNavigateTap: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: a
        });
    },
    updateDiscount: function() {
        var t = this.data, a = t.use_coupon, o = t.level_info, i = t.payInfo.total_amount, u = {
            pay_amount: i,
            coupon_discount: "0.00",
            level_discount: "0.00"
        };
        if (a) {
            var s = "0.00";
            0 == a.type ? (a.discount > i ? (s = i, u.pay_amount = "0.00") : (u.pay_amount = (i - a.discount).toFixed(2) + "", 
            s = a.discount), u.coupon_discount = n(s)) : (s = i * (a.discount / 10)) > .01 ? (s = n(s), 
            u.pay_amount = s, s = (i - s).toFixed(2) + "", u.coupon_discount = s) : s = "0.00", 
            console.log(s);
        } else {
            var d = o.discount / 100;
            (d = n(i * d + "")) < .01 ? u.level_discount = "0.00" : (u.pay_amount = (i - d).toFixed(2), 
            u.level_discount = d);
        }
        u.is_show_pay = parseFloat(this.data.recharge) >= parseFloat(u.pay_amount), e.default.extend(t, u), 
        this.setData(t);
    }
});