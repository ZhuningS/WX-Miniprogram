var t = getApp();

Page({
    data: {
        tabs: [ "一级", "二级" ],
        activeIndex: 0,
        djd: []
    },
    tabClick: function(t) {
        this.setData({
            activeIndex: t.currentTarget.id
        });
    },
    onLoad: function(e) {
        var n = this, a = wx.getStorageSync("users").id;
        t.util.request({
            url: "entry/wxapp/MyTeam",
            cachetime: "0",
            data: {
                user_id: a
            },
            success: function(t) {
                console.log(t);
                var e = [], a = [];
                e = t.data.one, a = t.data.two;
                for (o = 0; o < e.length; o++) e[o].time = util.ormatDate(e[o].time);
                for (var o = 0; o < a.length; o++) a[o].time = util.ormatDate(a[o].time);
                n.setData({
                    yj: e,
                    ej: a
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