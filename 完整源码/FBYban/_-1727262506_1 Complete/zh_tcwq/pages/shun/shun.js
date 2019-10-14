var a = getApp();

Page({
    data: {
        slide: [ {
            logo: "http://opocfatra.bkt.clouddn.com/images/0/2017/10/tdJ70qw1fEfjfVJfFDD09570eqF28d.jpg"
        }, {
            logo: "http://opocfatra.bkt.clouddn.com/images/0/2017/10/k5JQwpBfpb0u8sNNy5l5bhlnrhl33W.jpg"
        }, {
            logo: "http://opocfatra.bkt.clouddn.com/images/0/2017/10/zUeEednDedmUkIUumN9XI6IXU91eko.jpg"
        } ],
        release: [ {
            name: "人找车",
            id: 0
        }, {
            name: "车找人",
            id: 1
        }, {
            name: "车找货",
            id: 2
        }, {
            name: "货找车",
            id: 3
        } ],
        shunfabu: [ "人找车", "车找人", "车找货", "货找车" ],
        index: 0,
        foot: !1,
        pc: [],
        refresh_top: !1
    },
    notice: function(a) {
        console.log(a);
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../notice/notice?id=" + t,
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    shunfabu: function(a) {
        console.log(a);
        var t = this, e = a.currentTarget.id;
        t.setData({
            foot: !1
        }), wx.navigateTo({
            url: "shunfabu/shunfabu?id=" + e
        });
    },
    call_phone: function(a) {
        console.log(a), wx.makePhoneCall({
            phoneNumber: a.currentTarget.dataset.tel
        });
    },
    footbtn: function(a) {
        var t = this;
        0 == t.data.foot ? t.setData({
            foot: !0
        }) : t.setData({
            foot: !1
        });
    },
    jumps: function(a) {
        var t = this, e = (a.currentTarget.dataset.name, a.currentTarget.dataset.appid), o = a.currentTarget.dataset.src, c = a.currentTarget.dataset.wb_src, s = a.currentTarget.dataset.type;
        if (1 == s) {
            var n = o.replace(/[^0-9]/gi, "");
            o = o = o.replace(/(\d+|\s+)/g, ""), console.log(o), console.log(n), console.log(), 
            wx.navigateTo({
                url: o + Number(n),
                success: function(a) {
                    t.setData({
                        averdr: !0
                    });
                },
                fail: function(a) {},
                complete: function(a) {}
            });
        } else 2 == s ? wx.navigateTo({
            url: "../car/car?vr=" + c,
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        }) : 3 == s && wx.navigateToMiniProgram({
            appId: e,
            path: "",
            extraData: {
                foo: "bar"
            },
            envVersion: "develop",
            success: function(a) {
                t.setData({
                    averdr: !0
                });
            }
        });
    },
    carinfo: function(a) {
        console.log(a);
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "shuninfo2/shuninfo2?id=" + t,
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    onLoad: function(t) {
        var e = this, o = wx.getStorageSync("url"), c = wx.getStorageSync("url3"), s = wx.getStorageSync("System");
        e.setData({
            url: o,
            system: s,
            url3: c
        }), a.util.request({
            url: getApp().globalData.baseUrl,
            cachetime: "0",
            data: {
                typename: "人找车",
                c: "apitc",
                a: "dopagetypecarlist",
                acid: getApp().globalData.version
            },
            success: function(a) {
                console.log(a), e.setData({
                    pc: a.data
                });
            }
        }), e.refresh();
    },
    refresh: function(t) {
        var e = this, o = function() {
            var a = new Date(), t = a.getMonth() + 1, e = a.getDate();
            return t >= 1 && t <= 9 && (t = "0" + t), e >= 0 && e <= 9 && (e = "0" + e), a.getFullYear() + "-" + t + "-" + e + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
        }();
        console.log(o);
        var c = wx.getStorageSync("city");
        console.log(c);
        var s = e.data.page, n = e.data.pc;
        null == s && (s = 1), null == n && (n = []), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagecarlist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: c,
                page: s
            },
            success: function(t) {
                console.log(t), 0 == t.data.length ? e.setData({
                    refresh_top: !0
                }) : (e.setData({
                    page: s + 1,
                    refresh_top: !1
                }), n = n.concat(t.data));
                for (var o in t.data) t.data[o].tz.time = a.ormatDate(t.data[o].tz.time).slice(5, 16), 
                t.data[o].tz.start_time1 = t.data[o].tz.start_time.slice(5, 10), t.data[o].tz.start_time2 = t.data[o].tz.start_time.slice(10, 17), 
                2 == t.data[o].tz.is_open ? (t.data[o].tz.class2 = "car3", t.data[o].tz.class3 = "car4", 
                t.data[o].tz.class4 = "car5") : (t.data[o].tz.class2 = "", t.data[o].tz.class3 = "", 
                t.data[o].tz.class4 = ""), "人找车" == t.data[o].tz.typename ? (t.data[o].tz.class = "color1", 
                t.data[o].tz.class1 = "car1") : "车找人" == t.data[o].tz.typename ? (t.data[o].tz.class = "color2", 
                t.data[o].tz.class1 = "car2") : "货找车" == t.data[o].tz.typename ? (t.data[o].tz.class = "color1", 
                t.data[o].tz.class1 = "car1") : "车找货" == t.data[o].tz.typename && (t.data[o].tz.class = "color2", 
                t.data[o].tz.class1 = "car2");
                e.setData({
                    pc: n
                });
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagenews&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: c
            },
            success: function(a) {
                console.log(a);
                var t = [];
                for (var o in a.data) 3 == a.data[o].type && t.push(a.data[o]);
                e.setData({
                    msgList: t
                });
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagead&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: c
            },
            success: function(a) {
                console.log(a);
                var t = [];
                for (var o in a.data) 4 == a.data[o].type && t.push(a.data[o]);
                console.log(t);
                0 != t.length ? e.setData({
                    top: 600
                }) : e.setData({
                    top: 300
                }), console.log(0), e.setData({
                    slide: t
                });
            }
        });
    },
    carlist: function(t) {
        var e = this;
        console.log(t);
        var o = t.currentTarget.dataset.typename;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetypecarlist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                typename: o
            },
            success: function(t) {
                console.log(t);
                for (var o in t.data) t.data[o].tz.time = a.ormatDate(t.data[o].tz.time).slice(5, 16), 
                t.data[o].tz.start_time1 = t.data[o].tz.start_time.slice(5, 10), t.data[o].tz.start_time2 = t.data[o].tz.start_time.slice(10, 16), 
                "人找车" == t.data[o].tz.typename ? (t.data[o].tz.class = "color1", t.data[o].tz.class1 = "car1") : "车找人" == t.data[o].tz.typename ? (t.data[o].tz.class = "color2", 
                t.data[o].tz.class1 = "car2") : "货找车" == t.data[o].tz.typename ? (t.data[o].tz.class = "color2", 
                t.data[o].tz.class1 = "car2") : "车找货" == t.data[o].tz.typename && (t.data[o].tz.class = "color1", 
                t.data[o].tz.class1 = "car1");
                e.setData({
                    pc: t.data
                });
            }
        });
    },
    shouye: function(a) {
        wx.switchTab({
            url: "../index/index",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    mine_yellow: function(a) {
        wx.reLaunch({
            url: "../logs/mine_car"
        });
    },
    whole: function(a) {
        this.refresh();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.refresh(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        0 == this.data.refresh_top && this.refresh();
    },
    onShareAppMessage: function() {}
});