getApp();

Page({
    data: {},
    onLoad: function(n) {
        var o = this, t = wx.getStorageSync("System");
        console.log(t), o.setData({
            node: t.details
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});