getApp();

var t = require("../../../utils/util"), a = require("../../../utils/requestUtil"), e = require("../../../utils/underscore"), o = require("../../../utils/data");

require("../../../wxParse/wxParse.js"), require("../store-common/common");

Page({
    data: {
        store_id: 0,
        mycard: null,
        usecard: null,
        shop_amount: 0,
        pay_amount: 0,
        is_show_myCards: !1,
        select_card_index: -1,
        disabled: !1,
        pay_type_index: 1
    },
    onLoad: function(a) {
        this.data.store_id = a.store_id, t.trySyncWechatInfo(), this.getmycard(), this.getStoreConfig();
    },
    getStoreConfig: function() {
        var t = this;
        a.get(o.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/getStoreConfig.html", {}, function(a) {
            t.setData({
                store_type: a.store_type
            });
        });
    },
    calculatePayTotal: function() {
        var t = this, a = t.data.usecard, e = parseFloat(t.data.shop_amount);
        if (null != a && e > 0) {
            var o = parseFloat(a.discount);
            if (0 == a.type) (s = parseFloat(e) - parseFloat(o)) < 0 && (s = 0), t.setData({
                pay_amount: s.toFixed(2)
            }); else if (1 == a.type) {
                var s = parseFloat(e) * parseFloat(o / 10);
                t.setData({
                    pay_amount: s.toFixed(2)
                });
            }
        } else e <= 0 ? t.setData({
            pay_amount: 0
        }) : t.setData({
            pay_amount: parseFloat(e).toFixed(2)
        });
    },
    selectCard: function(t) {
        var a = this, e = t.currentTarget.dataset.index;
        if (-1 == e) a.setData({
            usecard: null
        }); else {
            var o = parseFloat(a.data.shop_amount), s = a.data.mycard, r = (parseInt(s[e].type), 
            parseFloat(s[e].discount), parseFloat(s[e].full_available));
            if (o < r) {
                var n = "满" + r + "元才能使用哦";
                return void wx.showModal({
                    title: "提示",
                    content: n
                });
            }
            a.setData({
                usecard: s[e]
            });
        }
        a.setData({
            select_card_index: e
        }), a.calculatePayTotal();
    },
    getmycard: function() {
        var s = this;
        a.get(o.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getMyCoupons.html", {
            available: 1,
            _r: 100,
            store_id: s.data.store_id
        }, function(a) {
            e(a).map(function(a) {
                return a.use_start_date = t.format(1e3 * a.use_start_time, "yyyy-MM-dd"), a.use_end_date = t.format(1e3 * a.use_end_time, "yyyy-MM-dd"), 
                a;
            }), s.setData({
                mycard: a
            });
        });
    },
    payTypeChange: function(t) {
        var a = t.detail.value;
        this.setData({
            pay_type_index: a
        });
    },
    pay: function(t) {
        var s = this, r = t.detail.value, n = s.data.select_card_index, i = parseFloat(s.data.shop_amount).toFixed(2), d = parseFloat(s.data.pay_amount).toFixed(2);
        d <= 0 && -1 == n ? wx.showModal({
            title: "提示",
            content: "支付金额必须大于0元"
        }) : (r.pay_type = s.data.pay_type_index, -1 == n ? (r.pay_amount = d, r.total_amount = i, 
        r.store_id = s.data.store_id) : (r.pay_amount = d, r.coupon_discount = s.data.usecard.discount, 
        r.coupon_id = s.data.usecard.id, r.is_coupon = 1, r.total_amount = i, r.store_id = s.data.store_id), 
        wx.showModal({
            title: "提示",
            content: "确定支付吗",
            success: function(t) {
                t.confirm && a.post(o.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StorePayApi/payinfo.html", r, function(t) {
                    1 == t.type ? (t.data = e.extend({
                        success: function(t) {
                            wx.navigateTo({
                                url: "/pages/store/store-pay-success/index"
                            });
                        }
                    }, t.data), wx.requestPayment(t.data)) : 2 == t.type ? wx.navigateTo({
                        url: "/pages/user/mcard/recharge"
                    }) : 3 != t.type && 4 != t.type || wx.navigateTo({
                        url: "/pages/store/store-pay-success/index"
                    });
                });
            }
        }));
    },
    getpre: function(t) {
        var a = this;
        console.log(t.detail);
        var e = t.detail.value;
        "" == e && (e = 0), a.setData({
            disabled: !1,
            usecard: null,
            shop_amount: e,
            pay_amount: e,
            select_card_index: -1
        }), a.calculatePayTotal();
    },
    hideMyCards: function() {
        this.setData({
            is_show_myCards: !1
        });
    },
    showMyCards: function(t) {
        t.currentTarget.dataset.id;
        this.setData({
            is_show_myCards: !0
        });
    },
    getmycardinfo: function() {
        var t = this;
        a.get(o.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/getMyCardInfo.html", {}, function(a) {
            t.setData({
                myblance: a
            });
        });
    }
});