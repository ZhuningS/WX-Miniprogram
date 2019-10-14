var n = getApp();

Page({
    data: {
        top: 2 * n.globalData.statusBarHeight + 88,
        headerHeight: 2 * n.globalData.statusBarHeight
    },
    reportTee: function() {
        wx.reLaunch({
            url: "../index/index"
        });
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});