var t = getApp();

Page({
    data: {
        luntext: [ "最新收录", "热门推荐", "附近发现" ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 35,
        currentTab: 0,
        swiperCurrent: 0,
        indicatorDots: !1,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3
    },
    swiperChange: function(t) {
        this.setData({
            swiperCurrent: t.detail.current
        });
    },
    onLoad: function(t) {
        var e = this, a = wx.getStorageSync("url");
        e.setData({
            url: a
        }), e.refresh();
    },
    refresh: function(e) {
        var a = this, n = wx.getStorageSync("users").id;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemyyellowpage&acid=" + getApp().globalData.version + "&user_id=2",
            cachetime: "0",
            data: {
                user_id: n
            },
            success: function(t) {
                console.log(t);
                for (var e in t.data) {
                    var n = t.data[e].coordinates.split(",");
                    t.data[e].lat2 = Number(wx.getStorageSync("Location").latitude), t.data[e].lng2 = Number(wx.getStorageSync("Location").longitude);
                    var o = Number(wx.getStorageSync("Location").latitude), i = Number(wx.getStorageSync("Location").longitude), r = n[0], u = n[1], c = o * Math.PI / 180, s = r * Math.PI / 180, l = c - s, d = i * Math.PI / 180 - u * Math.PI / 180, f = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(l / 2), 2) + Math.cos(c) * Math.cos(s) * Math.pow(Math.sin(d / 2), 2)));
                    f *= 6378.137;
                    f = (f = Math.round(1e4 * f) / 1e4).toFixed(2);
                    t.data[e].distance = f;
                }
                a.setData({
                    yellow_list: t.data
                });
            }
        });
    },
    yellow_info: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "yellowinfo?id=" + e,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    store_type_id: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../store/business?id=" + e,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    shouye: function(t) {
        wx.switchTab({
            url: "../index/index"
        });
    },
    yellow: function(t) {
        wx.reLaunch({
            url: "yellow"
        });
    },
    settled: function(t) {
        wx.navigateTo({
            url: "settled"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});