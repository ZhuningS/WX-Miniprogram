var e = getApp();

Page({
    data: {},
    redinfo: function(e) {
        console.log(e);
        var a = e.currentTarget.dataset.id, t = e.currentTarget.dataset.logo;
        wx.navigateTo({
            url: "redinfo/redinfo?store_id=" + a + "&logo=" + t
        });
    },
    onLoad: function(e) {
        var a = this, t = wx.getStorageSync("url3"), o = wx.getStorageSync("url");
        a.setData({
            url: o,
            url3: t
        }), a.reload();
    },
    reload: function(a) {
        var t = this;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageredpaperlist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                uniacid: getApp().globalData.version
            },
            success: function(e) {
                console.log(e);
                var a = e.data, o = 0, n = 0, i = 0;
                for (var r in a) n += Number(a[r].views), i += Number(a[r].hbfx_num), console.log(a[r].details), 
                a[r].img = a[r].img.split(","), a[r].img.length >= 4 ? a[r].img = a[r].img.splice(0, 4) : a[r].img = a[r].img, 
                1 == a[r].hb_random ? a[r].hb_money = Number(a[r].hb_money) : a[r].hb_money = Number(a[r].hb_money) * Number(a[r].hb_num), 
                o += Number(a[r].hb_money), Number(a[r].hb_num) <= a[r].lq_num ? a[r].rob = !1 : a[r].rob = !0, 
                console.log(a), t.setData({
                    store: a,
                    price: o.toFixed(2),
                    views: n,
                    givelike: i
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagehonglist&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                t.setData({
                    Congratulations: e.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagehonglist&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                that.setData({
                    Congratulations: e.data
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.reload(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});