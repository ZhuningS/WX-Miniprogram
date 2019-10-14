function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var e = Object.assign || function(a) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (a[i] = t[i]);
    }
    return a;
}, t = a(require("../../../../utils/dg.js")), i = a(require("../../../../utils/requestUtil.js")), n = require("../../../../utils/data.js"), r = (a(n), 
n.duoguan_host_api_url + "/index.php/addon/Wallet");

Page({
    data: {
        isAli: t.default.os.isAlipay(),
        from_page: "",
        balance_money: 0,
        min_cash_withdrawal_money: 0,
        cash_withdrawal_money: 0,
        canIUseCash: !1,
        canIUseTransferMembershipCard: !1,
        is_card_member: !1,
        showHasRecord: "",
        bankCardInfo: {},
        customer_service_phone: "",
        redwallet_money: 0,
        is_show_fenxiao_record: !1,
        feixiao_money: 0,
        is_show_activity_promot_record: !1,
        activity_promot_money: 0,
        is_show_tuan_record: !1,
        tuan_money: 0
    },
    onLoad: function(a) {
        t.default.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#f35150",
            animation: {
                duration: 100,
                timingFunc: "ease"
            }
        }), this.initialize(a);
    },
    onReady: function() {},
    onShow: function() {
        "cash" == this.data.from_page && (this.setData({
            from_page: ""
        }), (this.data.isAli ? my : wx).startPullDownRefresh({}));
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.setData({
            showHasRecord: "",
            bankCardInfo: {}
        }), this.initialize({}), t.default.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    initialize: function(a) {
        var t = this, n = r + "/Api/index", o = {};
        i.default.get(n, o, function(a) {
            t.setData(e({}, a));
        }, this, {
            isShowLoading: !1
        });
    },
    navigateTo: function(a) {
        var e = a.currentTarget.dataset.path + a.currentTarget.dataset.params;
        t.default.navigateTo({
            url: e
        });
    },
    fromSubmit: function(a) {
        var e = this, i = a.detail.formId || "", n = a.detail.target.dataset.type, r = [];
        if ("card" == n) this.setData({
            canIUseTransferMembershipCard: !1
        }), r.form_id = i, t.default.confirm("余额将全部转入会员卡！", function(a) {
            a.cancel ? e.setData({
                canIUseTransferMembershipCard: !0
            }) : a.confirm && e.transferMembershipCard(r);
        }, "温馨提示"); else if ("cash" == n) {
            this.setData({
                from_page: "cash"
            });
            t.default.navigateTo({
                url: "../cash/index"
            });
        }
    },
    transferMembershipCard: function(a) {
        var e = this, t = a.form_id || 0, n = r + "/Api/transferMembershipCard", o = {
            form_id: t,
            balance_money: this.data.balance_money
        };
        i.default.get(n, o, function(a) {
            1 == a ? e.initialize({}) : e.setData({
                canIUseTransferMembershipCard: !1
            });
        }, this, {
            isShowLoading: !1
        });
    },
    updateBankCardInfo: function(a) {
        var e = this.data.bankCardInfo;
        if ("{}" == JSON.stringify(e)) return !1;
        this.setData({
            from_page: "cash"
        });
        var i = e;
        i.customer_service_phone = this.data.customer_service_phone;
        var n = "../write-account/index" + ("?values=" + JSON.stringify(i) + "&from_page=packet");
        t.default.navigateTo({
            url: n
        });
    }
});