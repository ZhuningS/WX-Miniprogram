var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/dg"));

Page({
    data: {
        isAli: t.default.os.isAlipay(),
        url: "",
        title: ""
    },
    onLoad: function(e) {
        if (console.log(e), !t.default.canIUse("web-view")) {
            var n = this.data.isAli ? "支付宝APP" : "微信APP";
            t.default.alert("基础库版本太低，请先升级您的" + n, function(e) {
                t.default.navigateBack({});
            }, "温馨提示");
        }
        var i = e.url || "网页";
        i = decodeURIComponent(i);
        var o = e.title || "";
        t.default.setNavigationBarTitle({
            title: o
        }), this.setData({
            url: i,
            title: o
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});