var n = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../../../utils/dg.js"));

Page({
    data: {
        min_cash_withdrawal_money: 0,
        customer_service_phone: ""
    },
    onLoad: function(o) {
        n.default.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#f35150",
            animation: {
                duration: 100,
                timingFunc: "ease"
            }
        }), this.setData({
            min_cash_withdrawal_money: o.min_cash_withdrawal_money || "“未设置”",
            customer_service_phone: o.customer_service_phone || ""
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});