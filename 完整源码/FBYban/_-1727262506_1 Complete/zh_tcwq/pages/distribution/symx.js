var t = getApp();

Page({
    data: {
        score: [ {
            note: "张三",
            time: "2017-10-18 12：11：25",
            money: "2.00",
            type: "1"
        }, {
            note: "张三",
            time: "2017-10-18 12：11：25",
            money: "5.00",
            type: "1"
        } ]
    },
    onLoad: function(n) {
        var e = this, o = wx.getStorageSync("users").id;
        t.util.request({
            url: "entry/wxapp/Earnings",
            cachetime: "0",
            data: {
                user_id: o
            },
            success: function(t) {
                console.log(t);
                for (var n = 0; n < t.data.length; n++) t.data[n].time = util.ormatDate(t.data[n].time);
                e.setData({
                    symx: t.data
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