var e = getApp();

Page({
    data: {},
    onLoad: function(n) {
        wx.hideShareMenu({});
        var o = this, a = wx.getStorageSync("users").id, t = wx.getStorageSync("url3");
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagedhmx&acid=" + getApp().globalData.version + "&user_id=1",
            cachetime: "0",
            data: {
                user_id: a
            },
            success: function(e) {
                console.log(e), o.setData({
                    score: e.data,
                    url: t
                });
            }
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