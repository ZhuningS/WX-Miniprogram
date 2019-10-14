function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
}, e = t(require("../../../../utils/dg")), n = t(require("../../../../utils/requestUtil")), i = require("../../../../utils/data"), s = (t(i), 
t(require("../../../../utils/listener"))), o = e.default.os.isAlipay(), u = i.duoguan_host_api_url + "/index.php/addon/Wallet";

Page({
    data: {
        balance_money: 0,
        telephone: "",
        bank_no: "",
        true_name: "",
        bank_code: "",
        bank_name: "",
        canIUseCash: !1,
        is_use_bank: !1,
        is_use_app_balance: !1,
        app_user_name: "",
        cash_type: 0,
        is_show_confirm: !1,
        confirm_content: "",
        single_max_limit: 0
    },
    onLoad: function(t) {
        e.default.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#f35150",
            animation: {
                duration: 100,
                timingFunc: "ease"
            }
        });
        try {
            var n = e.default.getStorageSync("wallet_bank_list");
            n && (n.id = 0, this.setData(a({}, n)));
        } catch (t) {}
        this.initialize(t);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.initialize({}), e.default.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    initialize: function(t) {
        var i = this, s = u + "/Api/cashWithdrawal", o = {};
        n.default.get(s, o, function(t) {
            i.setData(a({}, t)), i.data.is_show_confirm && e.default.alert(i.data.confirm_content, function() {}, "温馨提示");
        }, this, {
            isShowLoading: !1
        });
    },
    chooseAccount: function(t) {
        var a = this;
        if (0 == this.data.is_use_bank && 0 == this.data.is_use_app_balance) e.default.alert("后台未设置提现信息"); else if (1 == this.data.is_use_bank && 1 == this.data.is_use_app_balance) {
            var n = "微信余额";
            o && (n = "支付宝余额");
            wx;
            o && my, o ? my.showActionSheet({
                items: [ "请选择提现方式", n, "银行卡" ],
                success: function(t) {
                    1 == t.index ? (a.setData({
                        cash_type: 1
                    }), a.writeMobile(a)) : 2 == t.index && (a.setData({
                        cash_type: 0
                    }), a.writeBankAccount(a));
                }
            }) : wx.showActionSheet({
                itemList: [ "请选择提现方式", n, "银行卡" ],
                success: function(t) {
                    1 == t.tapIndex ? (a.setData({
                        cash_type: 1
                    }), a.writeMobile(a)) : 2 == t.tapIndex && (a.setData({
                        cash_type: 0
                    }), a.writeBankAccount(a));
                }
            });
        } else 1 == this.data.is_use_bank ? a.writeBankAccount(a) : 1 == this.data.is_use_app_balance && a.writeMobile(a);
        return !1;
    },
    writeBankAccount: function(t) {
        s.default.addEventListener("wallet.choose.bank.account", function(e) {
            0 != e.length && t.setData(a({}, e));
        });
        var n = t.data, i = {
            telephone: n.telephone,
            bank_no: n.bank_no,
            true_name: n.true_name,
            bank_code: n.bank_code,
            bank_name: n.bank_name
        };
        e.default.navigateTo({
            url: "../write-account/index?values=" + JSON.stringify(i)
        });
    },
    writeMobile: function(t) {
        s.default.addEventListener("wallet.write.mobile", function(e) {
            0 != e.length && t.setData(a({}, e));
        }), e.default.navigateTo({
            url: "../write-mobile/index?values=" + JSON.stringify({
                telephone: t.data.telephone,
                true_name: t.data.true_name
            })
        });
    },
    formSubmit: function(t) {
        if (!this.data.canIUseCash) return e.default.alert("请先选择账户"), !1;
        this.setData({
            canIUseCash: !1
        });
        var a = this.data;
        a.form_id = t.detail.formId || "", a.cash_type = this.data.cash_type;
        var i = u + "/Api/cashWithdrawal", s = a;
        n.default.post(i, s, function(t) {
            t.id > 0 ? e.default.navigateTo({
                url: "../cash-waiting/index"
            }) : e.default.startPullDownRefresh();
        }, this, {
            isShowLoading: !1,
            completeAfter: function(t) {
                this.setData({
                    canIUseCash: !0
                });
            }
        });
    }
});