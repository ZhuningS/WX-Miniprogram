function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

e(require("../../../utils/underscore"));

var t = e(require("../../../utils/util")), a = e(require("../../../utils/listener")), o = require("../../../utils/data"), n = e(require("../../../utils/requestUtil"));

getApp();

Page({
    data: {},
    onLoad: function(e) {
        a.default.addEventListener("user.recharge", this.onRecharge), this.onPullDownRefresh();
    },
    onUnload: function() {
        a.default.removeEventListener("user.recharge", this.onRecharge);
    },
    onPullDownRefresh: function() {
        var e = this;
        n.default.get(o.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/getMyCardInfo.html", {}, function(t) {
            console.log(t), e.setData(t);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        }), n.default.get(o.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/getMyCoupons.html", {}, function(t) {
            e.setData({
                data: t
            });
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onNavigateTap: function(e) {
        var t = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: t
        });
    },
    onRecharge: function(e) {
        console.log(e), this.setData({
            recharge: parseFloat(this.data.recharge) + e
        });
    },
    onPayTest: function() {
        var e = this;
        t.default.payment({
            notify_url: o.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/paymentTest.html",
            total_amount: Math.floor(100 * Math.random())
        }, function(t) {
            1 != t.code ? wx.showModal({
                content: t.msg,
                showCancel: !1,
                fail: console.error
            }) : e.onPullDownRefresh();
        });
    }
});