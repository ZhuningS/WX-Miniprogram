function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var e = Object.assign || function(a) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (a[n] = t[n]);
    }
    return a;
}, t = a(require("../../../../utils/dg.js")), n = a(require("../../../../utils/requestUtil.js")), i = require("../../../../utils/data.js"), o = (a(i), 
a(require("../../../../utils/underscore.js"))), u = a(require("../../../../utils/listener.js")), r = i.duoguan_host_api_url + "/index.php/addon/Wallet";

Page({
    data: {
        picker_index: 0,
        telephone: "",
        bank_no: "",
        true_name: "",
        bank_code: "",
        bank_name: "",
        from_page: "",
        customer_service_phone: ""
    },
    onLoad: function(a) {
        t.default.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#f35150",
            animation: {
                duration: 100,
                timingFunc: "ease"
            }
        });
        var n = JSON.parse(a.values);
        this.setData(e({}, n, {
            from_page: a.from_page || "cash"
        })), this.initialize(a);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    initialize: function(a) {
        var t = this, i = r + "/Api/getBankList", u = {};
        n.default.get(i, u, function(a) {
            var n = 0;
            (0, o.default)(a.bank_list).map(function(a, e) {
                a.code == t.data.bank_code && (n = e);
            }), t.setData(e({}, a, {
                bank_code: a.bank_list[n].code,
                bank_name: a.bank_list[n].name,
                picker_index: n
            }));
        }, this, {
            isShowLoading: !1
        });
    },
    changeBankList: function(a) {
        var e = a.detail.value, t = this.data.bank_list;
        this.setData({
            picker_index: e,
            bank_code: t[e].code,
            bank_name: t[e].name
        });
    },
    inputBankNo: function(a) {
        var e = a.detail.value;
        this.setData({
            bank_no: e
        });
    },
    inputTrueName: function(a) {
        var e = a.detail.value;
        this.setData({
            true_name: e
        });
    },
    inputTelephone: function(a) {
        var e = a.detail.value;
        this.setData({
            telephone: e
        });
    },
    formSubmit: function(a) {
        var e = this.data;
        e.bank_list = [];
        try {
            t.default.setStorageSync("wallet_bank_list", e);
        } catch (a) {
            console.log("pages/user/red-packet/write-account/index保存异常");
        }
        if ("packet" == this.data.from_page) return this.updateBankCardInfo(e), !1;
        u.default.fireEventListener("wallet.choose.bank.account", [ e ]), t.default.navigateBack({});
    },
    updateBankCardInfo: function(a) {
        var e = r + "/Api/updateBankCardInfo", i = a;
        n.default.post(e, i, function(a) {
            1 == a && t.default.alert("修改成功！", function(a) {
                t.default.navigateBack({});
            });
        }, this, {
            isShowLoading: !1
        });
    },
    navigateBack: function(a) {
        u.default.removeEventListener("wallet.choose.bank.account"), t.default.navigateBack({});
    }
});