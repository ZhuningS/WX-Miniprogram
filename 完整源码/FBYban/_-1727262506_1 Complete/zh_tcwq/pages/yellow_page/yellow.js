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
        duration: 1e3,
        refresh_top: !1,
        yellow_list: [],
        page: 1
    },
    swiperChange: function(t) {
        this.setData({
            swiperCurrent: t.detail.current
        });
    },
    onLoad: function(e) {
        var a = this, o = wx.getStorageSync("System").support;
        this.setData({
            pt_support: o
        });
        var n = wx.getStorageSync("url3");
        a.setData({
            url: n,
            url3: n
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoretype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log(t);
                var e = t.data;
                e.length <= 5 ? a.setData({
                    height: 130
                }) : e.length > 5 && a.setData({
                    height: 260
                });
                for (var o = [], n = 0, s = e.length; n < s; n += 10) o.push(e.slice(n, n + 10));
                console.log(o), a.setData({
                    nav: o
                });
            }
        }), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    windowHeight: t.windowHeight
                });
            }
        });
        var s = wx.getStorageSync("city");
        console.log("轮播图的城市为" + s), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagead&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: s
            },
            success: function(t) {
                var e = [];
                for (var o in t.data) 6 == t.data[o].type && e.push(t.data[o]);
                a.setData({
                    slide: e
                });
            }
        }), a.refresh();
    },
    refresh: function(e) {
        var a = this, o = wx.getStorageSync("city");
        console.log("城市为" + o);
        var n = a.data.page, s = a.data.yellow_list;
        null == n && (n = 1), null == s && (s = []), console.log("page为" + o), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageyellowpagelist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {},
            success: function(t) {
                if (console.log(t), 0 == t.data) a.setData({
                    refresh_top: !0
                }); else {
                    s = s.concat(t.data);
                    for (var e in s) {
                        var o = s[e].coordinates.split(",");
                        s[e].lat2 = Number(wx.getStorageSync("Location").latitude), s[e].lng2 = Number(wx.getStorageSync("Location").longitude);
                        var i = Number(wx.getStorageSync("Location").latitude), r = Number(wx.getStorageSync("Location").longitude), l = o[0], c = o[1], u = i * Math.PI / 180, g = l * Math.PI / 180, d = u - g, p = r * Math.PI / 180 - c * Math.PI / 180, f = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(d / 2), 2) + Math.cos(u) * Math.cos(g) * Math.pow(Math.sin(p / 2), 2)));
                        f *= 6378.137;
                        f = (f = Math.round(1e4 * f) / 1e4).toFixed(2);
                        s[e].distance = f;
                    }
                    a.setData({
                        yellow_list: s,
                        yellow_list1: s,
                        page: n + 1,
                        refresh_top: !1
                    });
                }
            }
        });
    },
    search: function(e) {
        var a = this;
        console.log(e);
        var o = e.detail.value;
        "" == o ? a.setData({
            search_yellow: []
        }) : (a.setData({
            showSearch: !0
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageyellowpagelist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                keywords: o
            },
            success: function(t) {
                console.log(t), a.setData({
                    search_yellow: t.data
                });
            }
        }));
    },
    tabClick: function(t) {
        var e = t.currentTarget.id;
        console.log(e);
        var a = this.data.yellow_list, o = this.data.yellow_list1;
        0 == e ? this.setData({
            yellow_list: o
        }) : 1 == e ? (a = a.sort(function(t, e) {
            return (t = Number(t.views)) < (e = Number(e.views)) ? -1 : t > e ? 1 : 0;
        }), this.setData({
            yellow_list: a
        })) : 2 == e && (a = a.sort(function(t, e) {
            return (t = Number(t.distance)) < (e = Number(e.distance)) ? -1 : t > e ? 1 : 0;
        }), this.setData({
            yellow_list: a
        })), this.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.id
        });
    },
    yellow_info: function(t) {
        this.setData({
            showSearch: !1
        });
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.user_id;
        console.log(a), wx.navigateTo({
            url: "yellowinfo?id=" + e,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    sellted: function(t) {
        wx.navigateTo({
            url: "settled",
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    store_type_id: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../yellow_page/typeyellowlist?id=" + e,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    mine_yellow: function(t) {
        wx.reLaunch({
            url: "mine_yellow"
        });
    },
    shouye: function(t) {
        wx.switchTab({
            url: "../index/index"
        });
    },
    jumps: function(t) {
        var e = this, a = (t.currentTarget.dataset.name, t.currentTarget.dataset.appid), o = t.currentTarget.dataset.src, n = t.currentTarget.dataset.wb_src, s = t.currentTarget.dataset.type;
        if (1 == s) {
            var i = o.replace(/[^0-9]/gi, "");
            o = o = o.replace(/(\d+|\s+)/g, ""), console.log(o), console.log(i), console.log(), 
            wx.navigateTo({
                url: o + Number(i),
                success: function(t) {
                    e.setData({
                        averdr: !0
                    });
                },
                fail: function(t) {},
                complete: function(t) {}
            });
        } else 2 == s ? wx.navigateTo({
            url: "../car/car?vr=" + n,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        }) : 3 == s && wx.navigateToMiniProgram({
            appId: a,
            path: "",
            extraData: {
                foo: "bar"
            },
            envVersion: "develop",
            success: function(t) {
                e.setData({
                    averdr: !0
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var e = this, a = wx.getStorageSync("city");
        this.setData({
            page: 1,
            yellow_list: []
        }), this.refresh(), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagead&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: a
            },
            success: function(t) {
                var a = [];
                for (var o in t.data) 6 == t.data[o].type && a.push(t.data[o]);
                e.setData({
                    slide: a
                });
            }
        }), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});