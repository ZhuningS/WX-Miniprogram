function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../utils/underscore")), n = (e(require("../../../utils/util")), 
e(require("../../../utils/listener"))), o = require("../../../utils/data"), a = e(require("../../../utils/requestUtil"));

getApp();

Page({
    data: {},
    onLoad: function(e) {
        var t = this;
        a.default.get(o.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/getMyCardInfo.html", {}, function(e) {
            console.log(e), t.setData(e);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onNavigateTap: function(e) {
        var t = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: t
        });
    },
    onMoneyInput: function(e) {
        var t = e.detail.value, n = t.indexOf(".");
        return -1 != n && t.length - n > 3 && (t = t.substring(0, n + 3)), parseFloat(t) >= 1e5 && (t = "100000"), 
        t;
    },
    onSubmit: function(e) {
        if (!a.default.isLoading(this.rechargeRQId)) {
            var r = t.default.extend(e.detail.value, {
                form_id: e.detail.formId
            });
            console.log(r), "" != r.money ? r.money <= 0 ? this.showMsg("最小每次充值0.01元") : this.rechargeRQId = a.default.get(o.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/recharge.html", r, function(e) {
                wx.requestPayment(t.default.extend(e, {
                    success: function(e) {
                        wx.showToast({
                            title: "充值成功！",
                            duration: 1500
                        }), n.default.fireEventListener("user.recharge", [ parseFloat(r.money) ]);
                    },
                    fail: function(e) {
                        console.error(e);
                    }
                }));
            }) : this.showMsg("请输入金额！");
        }
    },
    showMsg: function(e) {
        wx.showModal({
            content: e,
            showCancel: !1
        });
    }
});