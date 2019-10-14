getApp();

Page({
    data: {},
    onLoad: function(n) {
        var o = this, t = wx.getStorageSync("System");
        console.log(t), o.setData({
            tel: t.tel
        });
    },
    tel: function(n) {
        var o = this;
        wx.makePhoneCall({
            phoneNumber: o.data.tel
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