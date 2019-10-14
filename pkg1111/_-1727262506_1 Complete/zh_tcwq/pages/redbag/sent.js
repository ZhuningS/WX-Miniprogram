var e = getApp();

Page({
    data: {
        header: [ "全部", "进行中", "已结束" ],
        index: 0,
        activeIndex: 0
    },
    onLoad: function(e) {
        var t = this;
        t.setData({
            user_id: e.user_id
        }), t.reload();
    },
    reload: function(t) {
        var a = this, n = a.data.user_id, o = wx.getStorageSync("url");
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemypost2&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: n
            },
            success: function(t) {
                var n = t.data, i = [], r = [], u = [];
                for (var s in n) {
                    var c;
                    !function(t) {
                        n[t].time = a.ormatDate(n[t].time).slice(0, 16), n[t].img = n[t].img.split(","), 
                        n[t].img.length >= 3 ? n[t].img = n[t].img.splice(0, 3) : n[t].img = n[t].img, c = 0, 
                        c = 1 == n[t].hb_random ? Number(n[t].hb_money) : Number(n[t].hb_money) * Number(n[t].hb_num), 
                        n[t].moneys = c, 0 != n[t].hb_money && e.util.request({
                            url: getApp().globalData.baseUrl + "list=idd&c=apitc&a=dopagehonglist&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                id: n[t].id
                            },
                            success: function(e) {
                                console.log(e);
                                var s = 0;
                                for (var c in e.data) s += Number(e.data[c].money);
                                n[t].price = s.toFixed(2), Number(n[t].hb_num) == e.data.length ? (n[t].rob = !1, 
                                u.push(n[t])) : (n[t].rob = !0, r.push(n[t])), n[t].honglist = e.data, i.push(n[t]), 
                                console.log(n[t]), a.setData({
                                    slide: i,
                                    url: o,
                                    slide1: r,
                                    slide2: u
                                });
                            }
                        });
                    }(s);
                }
            }
        });
    },
    header: function(e) {
        var t = this;
        console.log(e);
        var a = e.currentTarget.id;
        t.setData({
            index: a,
            activeIndex: a
        });
    },
    ormatDate: function(e) {
        function t(e, t) {
            for (var a = "" + e, n = a.length, o = "", i = t; i-- > n; ) o += "0";
            return o + a;
        }
        var a = new Date(1e3 * e);
        return a.getFullYear() + "-" + t(a.getMonth() + 1, 2) + "-" + t(a.getDate(), 2) + " " + t(a.getHours(), 2) + ":" + t(a.getMinutes(), 2) + ":" + t(a.getSeconds(), 2);
    },
    redinfo: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.id, a = e.currentTarget.dataset.logo;
        wx.navigateTo({
            url: "redinfo/redinfo?store_id=" + t + "&logo=" + a
        });
    },
    fabu: function(e) {
        wx.navigateTo({
            url: "welfare",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
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