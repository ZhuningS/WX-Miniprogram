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
        var a = e.url || "网页";
        a = decodeURIComponent(a);
        var i = e.title || "";
        t.default.setNavigationBarTitle({
            title: i
        }), this.setData({
            url: a,
            title: i
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = this.data.title || "网页", e = this.data.url || "", n = this.route;
        return "/" != n.substr(0, 1) && (n = "/" + n), {
            title: t,
            path: n + "?title=" + t + "&url=" + encodeURIComponent(e)
        };
    }
});