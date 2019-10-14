function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
}, n = t(require("../../../../utils/dg")), a = t(require("../../../../utils/listener"));

Page({
    data: {},
    onLoad: function(t) {
        n.default.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#f35150",
            animation: {
                duration: 100,
                timingFunc: "ease"
            }
        });
        var a = JSON.parse(t.values);
        this.setData(e({}, a));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    inputTrueName: function(t) {
        var e = t.detail.value;
        this.setData({
            true_name: e
        });
    },
    inputTelephone: function(t) {
        var e = t.detail.value;
        this.setData({
            telephone: e
        });
    },
    formSubmit: function(t) {
        var e = this.data;
        a.default.fireEventListener("wallet.write.mobile", [ e ]), n.default.navigateBack({});
    },
    navigateBack: function(t) {
        a.default.removeEventListener("wallet.write.mobile"), n.default.navigateBack({});
    }
});