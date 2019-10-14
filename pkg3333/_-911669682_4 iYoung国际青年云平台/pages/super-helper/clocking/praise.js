var a = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../utils/dg.js")), n = getApp();

Page({
    data: {},
    onLoad: function(a) {
        this.setData({
            data: n.globalData.achievement.splice(0, a.cycle)
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPushSubmit: function(t) {
        var e = t.detail.value;
        for (var o in e) n.globalData.achievement[o] = e[o];
        a.default.navigateBack();
    }
});