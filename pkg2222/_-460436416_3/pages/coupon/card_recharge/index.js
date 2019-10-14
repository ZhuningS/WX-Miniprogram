getApp();

var t = require("../../../utils/requestUtil"), e = require("../../../utils/data");

Page({
    data: {
        submitIsLoading: !1,
        buttonIsDisabled: !1
    },
    onLoad: function() {},
    formSubmit: function(o) {
        var a = this, i = o.detail.value;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgCoupon/DgCouponApi/make_recharge_order", i, function(t) {
            a.orderPay(t.order_id);
        });
    },
    order_go_pay_bind: function(t) {
        var e = this, o = t.currentTarget.id;
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), e.setData({
            buttonIsDisabled: !0,
            submitIsLoading: !0
        }), e.orderPay(o);
    },
    orderPay: function(o) {
        var a = this;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgCoupon/DgCouponApi/orderPay.html", {
            oid: o
        }, function(t) {
            console.log(t), a.setData({
                buttonIsDisabled: !1,
                submitIsLoading: !1
            }), wx.requestPayment({
                timeStamp: t.timeStamp,
                nonceStr: t.nonceStr,
                package: t.package,
                signType: "MD5",
                paySign: t.paySign,
                complete: function() {}
            });
        }, {
            complete: a.orderPayComplete()
        });
    },
    orderPayComplete: function() {
        this.setData({
            btn_submit_disabled: !1,
            submitIsLoading: !1
        });
    }
});