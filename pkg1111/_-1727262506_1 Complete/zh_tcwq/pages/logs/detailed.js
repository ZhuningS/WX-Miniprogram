var t = getApp();

Page({
    data: {},
    onLoad: function(a) {
        var e = this;
        console.log(a);
        var o = a.state, n = wx.getStorageSync("users").id;
        e.setData({
            state: o
        }), 1 == o ? t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemytixian&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: n
            },
            success: function(t) {
                console.log(t);
                for (var a in t.data) t.data[a].time = e.ormatDate(t.data[a].time).slice(0, 16), 
                e.setData({
                    detailed: t.data
                });
            }
        }) : t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagehbmx&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: n
            },
            success: function(t) {
                for (var a in t.data) t.data[a].time = e.ormatDate(t.data[a].time).slice(0, 16);
                var o = t.data.sort(function(t, a) {
                    return (t = Number(t.time)) < (a = Number(a.time)) ? -1 : t > a ? 1 : 0;
                });
                console.log(o), e.setData({
                    detaileds: o
                });
            }
        });
    },
    ormatDate: function(t) {
        function a(t, a) {
            for (var e = "" + t, o = e.length, n = "", i = a; i-- > o; ) n += "0";
            return n + e;
        }
        var e = new Date(1e3 * t);
        return e.getFullYear() + "-" + a(e.getMonth() + 1, 2) + "-" + a(e.getDate(), 2) + " " + a(e.getHours(), 2) + ":" + a(e.getMinutes(), 2) + ":" + a(e.getSeconds(), 2);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});