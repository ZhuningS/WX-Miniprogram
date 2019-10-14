var n = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../../../utils/dg.js"));

Page({
    data: {},
    onLoad: function(o) {
        n.default.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#f35150",
            animation: {
                duration: 100,
                timingFunc: "ease"
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    navigateBack: function(o) {
        n.default.navigateBack({
            delta: 2
        });
    }
});