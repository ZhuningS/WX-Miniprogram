var e = getApp();

Page({
    data: {
        index: 0,
        types: 1
    },
    onLoad: function(e) {
        var t = this, a = wx.getStorageSync("System").support;
        this.setData({
            pt_support: a
        });
        var o = wx.getStorageSync("url3");
        t.setData({
            url3: o
        });
        var n = wx.getStorageSync("url"), s = wx.getStorageSync("System");
        t.setData({
            url: n,
            system: s
        }), t.refresh();
    },
    refresh: function(t) {
        var a = this;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagezxtype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                console.log(e), a.setData({
                    zx: e.data
                });
            }
        });
        n = wx.getStorageSync("city");
        console.log("轮播图的城市为" + n), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagead&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: n
            },
            success: function(e) {
                console.log(e);
                var t = [];
                for (var o in e.data) 3 == e.data[o].type && t.push(e.data[o]);
                console.log(t);
                0 != t.length ? a.setData({
                    top: 600
                }) : a.setData({
                    top: 300
                }), console.log(0), a.setData({
                    slide: t
                });
            }
        });
        var o = function() {
            var e = new Date(), t = e.getMonth() + 1, a = e.getDate();
            return t >= 1 && t <= 9 && (t = "0" + t), a >= 0 && a <= 9 && (a = "0" + a), e.getFullYear() + "/" + t + "/" + a + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
        }(), n = wx.getStorageSync("city");
        console.log("城市为" + n);
        var s = a.data.page, c = a.data.info;
        null == s && (s = 1), null == c && (c = []), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagezxlist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                page: a.data.page,
                cityname: n
            },
            success: function(e) {
                if (console.log(e), 0 == e.data.length) a.setData({
                    refresh_top: !0
                }); else {
                    a.setData({
                        refresh_top: !1,
                        page: s + 1
                    }), c = c.concat(e.data);
                    for (var t in e.data) {
                        e.data[t].time = e.data[t].time.slice(0, 16), null == e.data[t].img ? e.data[t].type = 1 : e.data[t].type = 2;
                        var n = o, i = e.data[t].time.replace(/-/g, "/"), l = /(\d{4})-(\d{1,2})-(\d{1,2})( \d{1,2}:\d{1,2})/g, r = Math.abs(Date.parse(n.replace(l, "$2-$3-$1$4")) - Date.parse(i.replace(l, "$2-$3-$1$4"))) / 1e3, g = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60);
                        e.data[t].m = g, e.data[t].h = u, console.log(g + " 小时 " + u + " 分钟"), e.data[t].imgs = e.data[t].imgs.split(",").slice(0, 3);
                    }
                }
                console.log(c), a.setData({
                    info: c,
                    info1: c
                });
            }
        });
    },
    jumps: function(e) {
        var t = this, a = e.currentTarget.dataset.name, o = e.currentTarget.dataset.appid, n = e.currentTarget.dataset.src;
        if ("" == n) console.log("没有商家地址"), "" != o ? wx.showModal({
            title: "提示",
            content: "是否跳转到" + a,
            showCancel: !0,
            cancelText: "取消",
            cancelColor: "",
            confirmText: "确定",
            confirmColor: "",
            success: function(e) {
                1 == e.confirm && wx.navigateToMiniProgram({
                    appId: o,
                    path: "",
                    extraData: {
                        foo: "bar"
                    },
                    envVersion: "develop",
                    success: function(e) {
                        t.setData({
                            averdr: !0
                        });
                    }
                });
            },
            fail: function(e) {},
            complete: function(e) {}
        }) : t.setData({
            averdr: !0
        }); else if ("" == o) {
            console.log("没有小程序地址");
            var s = n.replace(/[^0-9]/gi, "");
            n = n = n.replace(/(\d+|\s+)/g, ""), console.log(n), wx.navigateTo({
                url: n + Number(s),
                success: function(e) {
                    t.setData({
                        averdr: !0
                    });
                },
                fail: function(e) {},
                complete: function(e) {}
            });
        } else console.log("两个都有"), wx.showModal({
            title: "提示",
            content: "是否跳转到" + a,
            showCancel: !0,
            cancelText: "取消",
            cancelColor: "",
            confirmText: "确定",
            confirmColor: "",
            success: function(e) {
                1 == e.confirm && wx.navigateToMiniProgram({
                    appId: o,
                    path: "",
                    extraData: {
                        foo: "bar"
                    },
                    envVersion: "develop",
                    success: function(e) {
                        t.setData({
                            averdr: !0
                        });
                    }
                });
            },
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    click: function(t) {
        console.log(t);
        var a = this, o = a.data.zx, n = (a.data.info1, a.data.info, t.currentTarget.dataset.index), s = n;
        console.log(o);
        var c = function() {
            var e = new Date(), t = e.getMonth() + 1, a = e.getDate();
            return t >= 1 && t <= 9 && (t = "0" + t), a >= 0 && a <= 9 && (a = "0" + a), e.getFullYear() + "/" + t + "/" + a + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
        }(), i = wx.getStorageSync("city");
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagezxlist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                type_id: o[n].id,
                cityname: i
            },
            success: function(e) {
                console.log(e);
                var t = e.data;
                for (var o in t) {
                    t[o].time = t[o].time.slice(0, 16), null == t[o].img ? t[o].type = 1 : t[o].type = 2;
                    var n = c, s = t[o].time.replace(/-/g, "/"), i = /(\d{4})-(\d{1,2})-(\d{1,2})( \d{1,2}:\d{1,2})/g, l = Math.abs(Date.parse(n.replace(i, "$2-$3-$1$4")) - Date.parse(s.replace(i, "$2-$3-$1$4"))) / 1e3, r = Math.floor(l / 3600), g = Math.floor(l % 3600 / 60);
                    t[o].m = r, t[o].h = g, console.log(r + " 小时 " + g + " 分钟"), t[o].imgs = t[o].imgs.split(",").slice(0, 3);
                }
                console.log(t), a.setData({
                    info: t
                });
            }
        }), a.setData({
            zx: o,
            types: 2,
            active_index: s,
            index: n
        });
    },
    click1: function(e) {
        var t = this, a = t.data.zx, o = t.data.info1;
        t.setData({
            types: 1,
            zx: a,
            index: -1,
            info: o,
            active_index: -1
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
    release: function(e) {
        wx.navigateTo({
            url: "release",
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
        var t = this;
        this.setData({
            page: 1,
            info: []
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesystem&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                t.setData({
                    system: e.data
                });
            }
        }), this.refresh(), this.refresh2(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        0 == this.data.refresh_top && this.refresh();
    },
    onShareAppMessage: function() {},
    refresh2: function() {
        if (this.data.active_index > -1) {
            var t = this, a = t.data.zx, o = (t.data.info, function() {
                var e = new Date(), t = e.getMonth() + 1, a = e.getDate();
                return t >= 1 && t <= 9 && (t = "0" + t), a >= 0 && a <= 9 && (a = "0" + a), e.getFullYear() + "/" + t + "/" + a + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
            }()), n = wx.getStorageSync("city"), s = t.data.active_index, c = t.data.zx[s].id;
            e.util.request({
                url: getApp().globalData.baseUrl + "c=apitc&a=dopagezxlist&acid=" + getApp().globalData.version,
                cachetime: "0",
                data: {
                    type_id: c,
                    cityname: n
                },
                success: function(e) {
                    console.log(e);
                    var a = e.data;
                    for (var n in a) {
                        a[n].time = a[n].time.slice(0, 16), null == a[n].img ? a[n].type = 1 : a[n].type = 2;
                        var s = o, c = a[n].time.replace(/-/g, "/"), i = /(\d{4})-(\d{1,2})-(\d{1,2})( \d{1,2}:\d{1,2})/g, l = Math.abs(Date.parse(s.replace(i, "$2-$3-$1$4")) - Date.parse(c.replace(i, "$2-$3-$1$4"))) / 1e3, r = Math.floor(l / 3600), g = Math.floor(l % 3600 / 60);
                        a[n].m = r, a[n].h = g, console.log(r + " 小时 " + g + " 分钟"), a[n].imgs = a[n].imgs.split(",").slice(0, 3);
                    }
                    console.log(a), t.setData({
                        info: a
                    });
                }
            }), t.setData({
                zx: a,
                types: 2
            });
        }
    }
});