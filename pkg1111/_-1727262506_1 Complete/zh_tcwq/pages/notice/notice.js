var o = getApp();

Page({
    data: {},
    onLoad: function(n) {
        console.log(n), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: wx.getStorageSync("color"),
            animation: {
                duration: 0,
                timingFunc: "easeIn"
            }
        });
        var a = this;
        o.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagenewsinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: n.id
            },
            success: function(o) {
                console.log(o), a.setData({
                    newsinfo: o.data
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