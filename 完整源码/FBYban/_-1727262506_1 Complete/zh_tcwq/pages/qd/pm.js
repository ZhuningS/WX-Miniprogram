var a = getApp();

Page({
    data: {
        tabs: [ "手速榜", "总榜" ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 15,
        refresh_top: !1,
        refresh_top1: !1,
        rankpage: 1,
        zrankpage: 1,
        sranklist: [],
        szrank: []
    },
    tabClick: function(a) {
        console.log(a), this.setData({
            sliderOffset: a.currentTarget.offsetLeft,
            activeIndex: a.currentTarget.id
        });
    },
    onLoad: function(t) {
        var e = this, s = wx.getStorageSync("users").id, o = wx.getStorageSync("user_info");
        console.log(o), e.setData({
            userinfo: o
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagecontinuous&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: s
            },
            success: function(a) {
                console.log("查看连续签到天数", a), e.setData({
                    lxts: a.data
                });
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemysign&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: s
            },
            success: function(a) {
                console.log("MySign", a), e.setData({
                    ljqd: a.data
                });
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemyjrrank&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: s
            },
            success: function(t) {
                console.log("MyJrRank", t.data), t.data.time3 = a.ormatDate(t.data.time3).substring(11), 
                e.setData({
                    MyRank: t.data
                });
            }
        }), this.rank(), this.zrank();
    },
    rank: function() {
        var t = this, e = (wx.getStorageSync("users").id, t.data.rankpage), s = t.data.zrankpage, o = t.data.sranklist, n = t.data.szrank;
        console.log(e, s, o, n), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagejrrank&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                page: e,
                pagesize: 20
            },
            success: function(s) {
                for (var n in console.log("JrRank", s.data), console.log(s), t.setData({
                    rankpage: e + 1
                }), s.data.length < 20 ? t.setData({
                    refresh_top: !0
                }) : t.setData({
                    refresh_top: !1
                }), s.data) s.data[n].time3 = a.ormatDate(s.data[n].time3).substring(11);
                o = o.concat(s.data), console.log(o), t.setData({
                    ranklist: o,
                    sranklist: o
                });
            }
        });
    },
    zrank: function() {
        var t = this, e = (wx.getStorageSync("users").id, t.data.rankpage), s = t.data.zrankpage, o = t.data.sranklist, n = t.data.szrank;
        console.log(e, s, o, n), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagerank&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                page: s,
                pagesize: 20
            },
            success: function(a) {
                console.log("rank", a), console.log(a), t.setData({
                    zrankpage: s + 1
                }), a.data.length < 20 ? t.setData({
                    refresh_top1: !0
                }) : t.setData({
                    refresh_top1: !1
                }), n = n.concat(a.data), console.log(n), t.setData({
                    zrank: n,
                    szrank: n
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        console.log("上拉加载", this.data.activeIndex, this.data.rankpage, this.data.zrankpage), 
        0 == this.data.refresh_top && 0 == this.data.activeIndex ? this.rank() : console.log("今日没有了"), 
        0 == this.data.refresh_top1 && 1 == this.data.activeIndex ? this.zrank() : console.log("总的没有了");
    }
});