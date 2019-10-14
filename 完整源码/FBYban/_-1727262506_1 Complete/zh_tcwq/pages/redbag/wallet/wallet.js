var o = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var n = t.store_id, a = this;
        console.log(t), o.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorewallet&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                store_id: n
            },
            success: function(o) {
                console.log(o), a.setData({
                    score: o.data
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