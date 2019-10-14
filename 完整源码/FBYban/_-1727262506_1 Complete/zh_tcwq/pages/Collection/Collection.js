var t = getApp();

Page({
    data: {
        star2: [ {
            img: "https://api.cnmmsc.org/apitc/img/image/star.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star.png"
        } ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 35,
        tabs: [ "收藏的帖子", "收藏的商家" ],
        activeIndexe: 0,
        sliderOffsete: 0,
        sliderLefte: 0
    },
    navClick: function(t) {
        this.setData({
            sliderOffsete: t.currentTarget.offsetLeft,
            activeIndexe: t.currentTarget.id
        });
    },
    tabClick: function(a) {
        var e = this;
        console.log(a);
        var i = e.data.classification, o = a.currentTarget.id, n = i[o].id, s = i[o].name;
        console.log(i[o]), this.setData({
            activeIndex: o
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemycollection&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                type2_id: n
            },
            success: function(t) {
                console.log(t);
                var a = [];
                e.setData({
                    classification_info: a
                });
                for (var i in t.data) t.data[i].type2_name = s, t.data[i].img = t.data[i].img.split(","), 
                null != t.data[i].store_name && a.concat(t.data[i]);
                console.log(a), e.setData({
                    classification_info: a
                });
            }
        });
    },
    onLoad: function(t) {
        var a = this;
        console.log(t), wx.setNavigationBarTitle({
            title: t.name
        });
        var e = wx.getStorageSync("url"), i = wx.getStorageSync("url3");
        a.setData({
            url: e,
            url3: i
        }), a.reload();
    },
    reload: function(a) {
        var e = this, i = wx.getStorageSync("users").id;
        console.log(i), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemycollection&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: i
            },
            success: function(t) {
                console.log(t);
                var a = [];
                for (var i in t.data) if (null != t.data[i].details) {
                    var o = e.ormatDate(t.data[i].time);
                    t.data[i].img = t.data[i].img.split(","), t.data[i].img.length >= 4 ? t.data[i].img1 = t.data[i].img.slice(0, 4) : t.data[i].img1 = t.data[i].img, 
                    t.data[i].time = o.slice(0, 16), a.push(t.data[i]);
                }
                console.log(a), e.setData({
                    classification_info: a
                });
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemystorecollection&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: i
            },
            success: function(t) {
                console.log(t);
                var a = e.data.star2;
                console.log(a);
                var i = "https://api.cnmmsc.org/apitc/img/image/xing.png", o = [];
                e.setData({
                    sellers: o
                });
                for (var n in t.data) if (null != t.data[n].store_name) {
                    o.push(t.data[n]);
                    var s = t.data[n].coordinates.split(",");
                    t.data[n].lat2 = Number(wx.getStorageSync("Location").latitude), t.data[n].lng2 = Number(wx.getStorageSync("Location").longitude);
                    var c = Number(wx.getStorageSync("Location").latitude), r = Number(wx.getStorageSync("Location").longitude), l = s[0], g = s[1], d = c * Math.PI / 180, u = l * Math.PI / 180, m = d - u, f = r * Math.PI / 180 - g * Math.PI / 180, p = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(m / 2), 2) + Math.cos(d) * Math.cos(u) * Math.pow(Math.sin(f / 2), 2)));
                    p *= 6378.137;
                    p = (p = Math.round(1e4 * p) / 1e4).toFixed(2);
                    t.data[n].distance = p, t.data[n].star = a, t.data[n].score = parseInt(t.data[n].score), 
                    0 == t.data[n].score ? t.data[n].star = t.data[n].star : 1 == t.data[n].score ? t.data[n].star[0].img = i : 2 == t.data[n].score ? (t.data[n].star[0].img = i, 
                    t.data[n].star[1].img = i) : 3 == t.data[n].score ? (t.data[n].star[0].img = i, 
                    t.data[n].star[1].img = i, t.data[n].star[2].img = i) : 4 == t.data[n].score ? (t.data[n].star[0].img = i, 
                    t.data[n].star[1].img = i, t.data[n].star[2].img = i, t.data[n].star[3].img = i) : 5 == t.data[n].score && (t.data[n].star[0].img = i, 
                    t.data[n].star[1].img = i, t.data[n].star[2].img = i, t.data[n].star[3].img = i, 
                    t.data[n].star[4].img = i), console.log(o), e.setData({
                        sellers: o
                    });
                }
            }
        });
    },
    ormatDate: function(t) {
        function a(t, a) {
            for (var e = "" + t, i = e.length, o = "", n = a; n-- > i; ) o += "0";
            return o + e;
        }
        var e = new Date(1e3 * t);
        return e.getFullYear() + "-" + a(e.getMonth() + 1, 2) + "-" + a(e.getDate(), 2) + " " + a(e.getHours(), 2) + ":" + a(e.getMinutes(), 2) + ":" + a(e.getSeconds(), 2);
    },
    store: function(t) {
        console.log(t.currentTarget.dataset.id);
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../sellerinfo/sellerinfo?id=" + a,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    see: function(t) {
        var a = this;
        console.log(t), console.log(a.data);
        var e = a.data.classification_info, i = t.currentTarget.dataset.id;
        for (var o in e) if (e[o].id == i) var n = e[o];
        console.log(n), wx.navigateTo({
            url: "../infodetial/infodetial?id=" + n.information_id,
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
    phone1: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    qxsc: function(a) {
        var e = this, i = a.currentTarget.dataset.tzid, o = wx.getStorageSync("users").id;
        wx.showModal({
            title: "提示",
            content: "是否取消收藏",
            success: function(a) {
                a.confirm && t.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagecollection&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        information_id: i,
                        user_id: o
                    },
                    success: function(t) {
                        1 == t.data ? (e.setData({
                            Collection: !0
                        }), setTimeout(function() {
                            wx.showToast({
                                title: "收藏成功",
                                icon: "",
                                image: "",
                                duration: 1e3,
                                mask: !0,
                                success: function(t) {},
                                fail: function(t) {},
                                complete: function(t) {}
                            });
                        }, 500)) : (setTimeout(function() {
                            wx.showToast({
                                title: "取消收藏成功",
                                icon: "",
                                image: "",
                                duration: 1e3,
                                mask: !0,
                                success: function(t) {},
                                fail: function(t) {},
                                complete: function(t) {}
                            });
                        }, 500), e.setData({
                            Collection: !1
                        }));
                    }
                });
            }
        });
    },
    qxsjsc: function(a) {
        var e = this, i = a.currentTarget.dataset.sjid, o = wx.getStorageSync("users").id;
        wx.showModal({
            title: "提示",
            content: "是否取消收藏",
            success: function(a) {
                a.confirm && t.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagecollection&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        store_id: i,
                        user_id: o
                    },
                    success: function(t) {
                        t.confirm ? 1 == t.data ? (e.setData({
                            Collection: !0
                        }), setTimeout(function() {
                            wx.showToast({
                                title: "收藏成功",
                                icon: "",
                                image: "",
                                duration: 1e3,
                                mask: !0,
                                success: function(t) {},
                                fail: function(t) {},
                                complete: function(t) {}
                            });
                        }, 500)) : (setTimeout(function() {
                            wx.showToast({
                                title: "取消收藏成功",
                                icon: "",
                                image: "",
                                duration: 1e3,
                                mask: !0,
                                success: function(t) {},
                                fail: function(t) {},
                                complete: function(t) {}
                            });
                        }, 500), e.setData({
                            Collection: !1
                        })) : console.log(1);
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.reload(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});