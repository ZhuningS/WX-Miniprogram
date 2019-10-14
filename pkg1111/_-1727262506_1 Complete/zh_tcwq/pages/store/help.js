var o = getApp();

Page({
    data: {
        list: [ {
            id: "form",
            name: "优惠券的帮助中心",
            open: !1,
            pages: "优惠券的帮助中心主要显示用户可能回碰到的问题,正在开发中，敬请期待"
        }, {
            id: "form",
            name: "优惠券的帮助中心",
            open: !1,
            pages: "优惠券的帮助中心主要显示用户可能回碰到的问题,正在开发中，敬请期待"
        }, {
            id: "form",
            name: "优惠券的帮助中心",
            open: !1,
            pages: "优惠券的帮助中心主要显示用户可能回碰到的问题,正在开发中，敬请期待"
        } ]
    },
    kindToggle: function(o) {
        var n = o.currentTarget.id, e = this.data.list;
        console.log(n);
        for (var t = 0, a = e.length; t < a; ++t) e[t].open = t == n && !e[t].open;
        this.setData({
            list: e
        });
    },
    onLoad: function(n) {
        var e = this;
        console.log(this), o.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagegethelp&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(o) {
                console.log(o.data), e.setData({
                    list: o.data
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