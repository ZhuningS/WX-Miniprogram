var a = getApp();

Page({
    data: {},
    onLoad: function(a) {
        var t = this, o = wx.getStorageSync("users"), e = wx.getStorageSync("url3");
        console.log(o), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#d95940",
            animation: {
                duration: 0,
                timingFunc: "easeIn"
            }
        });
        var n = wx.getStorageSync("url");
        t.setData({
            id: a.id,
            user_info: o,
            url: n,
            url3: e
        }), t.refresh();
    },
    onReady: function() {},
    refresh: function(t) {
        var o = this;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagepostlnfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: o.data.id
            },
            success: function(t) {
                console.log(t);
                var e = t.data.tz;
                Number(t.data.tz.hb_num);
                e.img = e.img.split(","), 1 == e.hb_random ? e.hb_money = Number(e.hb_money) : e.hb_money = Number(e.hb_money) * Number(e.hb_num), 
                "" == e.hb_keyword ? o.setData({
                    sure: !0
                }) : o.setData({
                    sure: !1
                }), a.util.request({
                    url: getApp().globalData.baseUrl + "list=idd&c=apitc&a=dopagehonglist&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        id: t.data.tz.id
                    },
                    success: function(t) {
                        console.log(t);
                        var n = t.data, r = 0;
                        for (var i in n) n[i].time = a.ormatDate(n[i].time).slice(5, 16), r += Number(n[i].money);
                        var l = e.hb_money - r;
                        console.log(l), console.log(r), o.setData({
                            hongbao: n,
                            total_comment: l.toFixed(2),
                            total_num: n.length
                        });
                    }
                }), console.log(t.data.pl), e.hb_money = Number(e.hb_money).toFixed(2), e.trans1 = 1, 
                e.trans2 = 1, e.dis1 = "block", e.trans_1 = 2, e.trans_2 = 1, o.setData({
                    store: e,
                    criticism: t.data.pl,
                    label: t.data.label
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});