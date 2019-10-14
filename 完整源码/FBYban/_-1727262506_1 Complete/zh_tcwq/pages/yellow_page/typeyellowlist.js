var t = getApp();

Page({
    data: {
        starss: [ 1, 2, 3, 4, 5 ]
    },
    onLoad: function(t) {
        console.log(t);
        var a = this, e = wx.getStorageSync("url");
        a.setData({
            url: e,
            id: t.id
        }), a.refresh();
    },
    refresh: function(a) {
        var e = this, o = e.data.id;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageyellowpagelist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                typeid: o
            },
            success: function(t) {
                console.log(t);
                for (var a in t.data) {
                    var o = t.data[a].coordinates.split(",");
                    t.data[a].lat2 = Number(wx.getStorageSync("Location").latitude), t.data[a].lng2 = Number(wx.getStorageSync("Location").longitude);
                    var n = Number(wx.getStorageSync("Location").latitude), i = Number(wx.getStorageSync("Location").longitude), c = o[0], r = o[1], l = n * Math.PI / 180, s = c * Math.PI / 180, u = l - s, d = i * Math.PI / 180 - r * Math.PI / 180, g = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(u / 2), 2) + Math.cos(l) * Math.cos(s) * Math.pow(Math.sin(d / 2), 2)));
                    g *= 6378.137;
                    g = (g = Math.round(1e4 * g) / 1e4).toFixed(2);
                    t.data[a].distance = g;
                }
                e.setData({
                    store: t.data
                });
            }
        });
    },
    store: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../yellow_page/yellowinfo?id=" + a,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    yellow_info: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.user_id;
        console.log(e), wx.navigateTo({
            url: "../yellow_page/yellowinfo?id=" + a,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    phone: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: a
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