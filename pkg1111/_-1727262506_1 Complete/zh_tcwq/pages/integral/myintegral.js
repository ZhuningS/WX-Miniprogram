var a = getApp();

Page({
    data: {},
    onLoad: function(e) {
        wx.hideShareMenu({});
        var t = this, o = wx.getStorageSync("users").id;
        console.log(o), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagejfmx&acid=" + getApp().globalData.version + "&user_id=1",
            cachetime: "0",
            data: {
                user_id: o
            },
            success: function(a) {
                console.log(a);
                var e = a.data;
                t.setData({
                    score: e
                });
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageuserinfo&acid=" + getApp().globalData.version + "&user_id=2",
            cachetime: "0",
            data: {
                user_id: o
            },
            success: function(a) {
                console.log(a), t.setData({
                    integral: a.data.total_score
                });
            }
        });
    },
    tzjfsc: function() {
        wx.redirectTo({
            url: "integral"
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