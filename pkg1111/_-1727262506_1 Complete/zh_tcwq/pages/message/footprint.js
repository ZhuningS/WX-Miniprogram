var e = getApp();

Page({
    data: {
        index: 0,
        types: 1
    },
    onLoad: function(e) {
        var t = this, a = wx.getStorageSync("url");
        t.setData({
            url: a
        }), t.refresh();
    },
    refresh: function(t) {
        var a = this, n = wx.getStorageSync("users").id, o = function() {
            var e = new Date(), t = e.getMonth() + 1, a = e.getDate();
            return t >= 1 && t <= 9 && (t = "0" + t), a >= 0 && a <= 9 && (a = "0" + a), e.getFullYear() + "/" + t + "/" + a + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
        }();
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemyfootprint&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: n
            },
            success: function(e) {
                console.log(e);
                var t = e.data;
                for (var n in t) {
                    t[n].time = t[n].time.slice(0, 16), null == t[n].img ? t[n].type = 1 : t[n].type = 2;
                    var i = o, s = t[n].zx_time.replace(/-/g, "/"), r = /(\d{4})-(\d{1,2})-(\d{1,2})( \d{1,2}:\d{1,2})/g, c = Math.abs(Date.parse(i.replace(r, "$2-$3-$1$4")) - Date.parse(s.replace(r, "$2-$3-$1$4"))) / 1e3, l = Math.floor(c / 3600), u = Math.floor(c % 3600 / 60);
                    t[n].m = l, t[n].h = u, console.log(l + " 小时 " + u + " 分钟"), t[n].imgs = t[n].imgs.split(",").slice(0, 3);
                }
                a.setData({
                    info: t,
                    info1: t
                });
            }
        });
    },
    message: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "message_info?id=" + t,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.refresh(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});