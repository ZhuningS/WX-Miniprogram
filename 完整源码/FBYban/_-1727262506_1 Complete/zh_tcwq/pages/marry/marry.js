var t = getApp();

Page({
    data: {
        sliderOffset: 0,
        activeIndex1: 1,
        sliderLeft: 35,
        refresh_top: !1,
        refresh1_top: !1,
        page: 1,
        page1: 1,
        tie: [],
        tie1: []
    },
    tabClick: function(t) {
        var a = this, e = t.currentTarget.id, i = a.data.classification, n = i[e].id, o = i[e].name;
        this.setData({
            activeIndex: e,
            activeIndex1: 0,
            page1: 1,
            type2_id: n,
            type2_name: o,
            tie1: []
        }), this.refresh1();
    },
    onLoad: function(t) {
        var a = this, e = wx.getStorageSync("url3");
        wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    windowHeight: t.windowHeight,
                    url3: e
                });
            }
        }), wx.setNavigationBarTitle({
            title: t.name
        });
        var i = t.id, n = wx.getStorageSync("url");
        a.setData({
            id: i,
            url: n
        }), a.reload(), a.refresh();
    },
    wole: function(t) {
        this.setData({
            activeIndex: -1,
            activeIndex1: 1,
            classification_info: this.data.tie
        });
    },
    reload: function(a) {
        var e = this, i = e.data.id;
        console.log("-------------------------------------------------------------------"), 
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetype2&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: i
            },
            success: function(t) {
                if (console.log(t), t.data.length > 0) {
                    t.data[0].id, t.data[0].name;
                    e.setData({
                        classification: t.data
                    });
                }
            }
        });
    },
    refresh: function(a) {
        function e(t) {
            return new Date(1e3 * parseInt(t));
        }
        var i = this, n = i.data.id, o = wx.getStorageSync("city");
        console.log(o), console.log(i.data.page), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                type_id: n,
                page: i.data.page,
                cityname: o
            },
            success: function(t) {
                if (console.log(t), 0 == t.data.length) i.setData({
                    refresh_top: !0
                }); else {
                    i.setData({
                        page: i.data.page + 1
                    });
                    var a = i.data.tie;
                    a = a.concat(t.data);
                    for (var n in t.data) {
                        var o = e(t.data[n].tz.time), r = o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate();
                        t.data[n].tz.img = t.data[n].tz.img.split(","), t.data[n].tz.time = r, t.data[n].tz.img.length > 4 && (t.data[n].tz.img_length = Number(t.data[n].tz.img.length) - 4), 
                        t.data[n].tz.img.length >= 4 ? t.data[n].tz.img = t.data[n].tz.img.slice(0, 4) : t.data[n].tz.img = t.data[n].tz.img;
                        for (var s in t.data[n].label) t.data[n].label[s].number = function() {
                            var t = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
                            return t;
                        }();
                    }
                    i.setData({
                        classification_info: a,
                        tie: a
                    });
                }
            }
        });
    },
    refresh1: function(a) {
        var e = this;
        wx.getStorageSync("city");
        console.log(e.data.type2_id), console.log(e.data.type2_name), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=doPagePostList&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                type2_id: e.data.type2_id
            },
            success: function(t) {
                console.log(t), 0 == t.data ? (wx.showToast({
                    title: "没有更多了",
                    icon: "",
                    image: "",
                    duration: 1e3,
                    mask: !0,
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {}
                }), e.setData({
                    refresh1_top: !0
                })) : e.setData({
                    page1: e.data.page1 + 1
                });
                var a = e.data.tie1;
                console.log(a), a = a.concat(t.data);
                for (var i in t.data) {
                    t.data[i].tz.type2_name = e.data.type2_name;
                    var n = e.ormatDate(t.data[i].tz.time);
                    t.data[i].tz.time = n.slice(0, 16), t.data[i].tz.img = t.data[i].tz.img.split(",").slice(0, 4);
                    for (var o in t.data[i].label) t.data[i].label[o].number = function() {
                        var t = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
                        return t;
                    }();
                }
                e.setData({
                    classification_info: a,
                    tie1: a
                });
            }
        });
    },
    EventHandle: function(t) {
        1 == this.data.activeIndex1 ? 0 == this.data.refresh_top && this.refresh() : 0 == this.data.refresh1_top && this.refresh1();
    },
    thumbs_up: function(a) {
        var e = this, i = a.currentTarget.dataset.id, n = wx.getStorageSync("users").id, o = Number(a.currentTarget.dataset.num);
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelike&acid=" + getApp().globalData.version + "&information_id=6&user_id=2",
            cachetime: "0",
            data: {
                information_id: i,
                user_id: n
            },
            success: function(t) {
                1 != t.data ? wx.showModal({
                    title: "提示",
                    content: "不能重复点赞",
                    showCancel: !0,
                    cancelText: "取消",
                    cancelColor: "",
                    confirmText: "确认",
                    confirmColor: "",
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {}
                }) : (e.reload(), e.setData({
                    thumbs_ups: !0,
                    thumbs_up: o + 1
                }));
            }
        });
    },
    ormatDate: function(t) {
        function a(t, a) {
            for (var e = "" + t, i = e.length, n = "", o = a; o-- > i; ) n += "0";
            return n + e;
        }
        var e = new Date(1e3 * t);
        return e.getFullYear() + "-" + a(e.getMonth() + 1, 2) + "-" + a(e.getDate(), 2) + " " + a(e.getHours(), 2) + ":" + a(e.getMinutes(), 2) + ":" + a(e.getSeconds(), 2);
    },
    see: function(t) {
        var a = this.data.classification_info, e = t.currentTarget.dataset.id;
        for (var i in a) if (a[i].tz.id == e) var n = a[i].tz;
        wx.navigateTo({
            url: "../infodetial/infodetial?id=" + n.id,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    phone: function(t) {
        var a = t.currentTarget.dataset.id;
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