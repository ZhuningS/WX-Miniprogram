var e = getApp();

Page({
    data: {
        speak: !1
    },
    onLoad: function(a) {
        console.log(a);
        var t = a.id, o = this;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagezxydone&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: t
            },
            success: function(e) {
                console.log(e);
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageurl3&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                o.setData({
                    url: e.data,
                    url3: e.data
                });
            }
        });
        var s = wx.getStorageSync("System");
        console.log(s), o.setData({
            id: t,
            system: s
        }), o.refresh();
    },
    refresh: function(a) {
        function t() {
            var e = new Date(), a = e.getMonth() + 1, t = e.getDate();
            return a >= 1 && a <= 9 && (a = "0" + a), t >= 0 && t <= 9 && (t = "0" + t), e.getFullYear() + "/" + a + "/" + t + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
        }
        var o = this, s = o.data.id, i = 0;
        wx.login({
            success: function(a) {
                console.log("这是登录所需要的code"), console.log(a.code);
                var c = a.code;
                wx.setStorageSync("code", c), wx.getUserInfo({
                    success: function(a) {
                        var n = a.userInfo.nickName, l = a.userInfo.avatarUrl;
                        e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopageopenid&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                code: c
                            },
                            success: function(a) {
                                var c = l, u = n, r = a.data.openid;
                                e.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        openid: r,
                                        img: c,
                                        name: u
                                    },
                                    success: function(a) {
                                        console.log(a), i = a.data.id, o.setData({
                                            user_id: a.data.id
                                        });
                                        var c = t();
                                        e.util.request({
                                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagezxinfo&acid=" + getApp().globalData.version,
                                            cachetime: "0",
                                            data: {
                                                id: s,
                                                user_id: i
                                            },
                                            success: function(a) {
                                                console.log(a);
                                                var t = a.data;
                                                null == t.img ? t.type = 1 : t.type = 2;
                                                var s = c, n = t.time.replace(/-/g, "/"), l = /(\d{4})-(\d{1,2})-(\d{1,2})( \d{1,2}:\d{1,2})/g, u = Math.abs(Date.parse(s.replace(l, "$2-$3-$1$4")) - Date.parse(n.replace(l, "$2-$3-$1$4"))) / 1e3, r = Math.floor(u / 3600), d = Math.floor(u % 3600 / 60);
                                                t.m = Number(r), t.h = Number(d), console.log(r + " 小时 " + d + " 分钟"), console.log(c), 
                                                null != t.imgs && (t.imgs = t.imgs.split(",")), console.log(t), t.time = t.time.slice(0, 16), 
                                                e.util.request({
                                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagezxpilist&acid=" + getApp().globalData.version,
                                                    cachetime: "0",
                                                    data: {
                                                        zx_id: t.id
                                                    },
                                                    success: function(e) {
                                                        console.log(e), t.pl = e.data, o.setData({
                                                            info: t
                                                        });
                                                    }
                                                }), e.util.request({
                                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagezxlikelist&acid=" + getApp().globalData.version,
                                                    cachetime: "0",
                                                    data: {
                                                        zx_id: t.id
                                                    },
                                                    success: function(e) {
                                                        console.log(e), o.setData({
                                                            thumbs_up: e.data
                                                        });
                                                    }
                                                }), e.util.request({
                                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagefootprint&acid=" + getApp().globalData.version,
                                                    cachetime: "0",
                                                    data: {
                                                        zx_id: t.id,
                                                        user_id: i
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    speak: function(e) {
        this.setData({
            speak: !0,
            speak_type: 1
        });
    },
    speak1: function(e) {
        this.setData({
            speak: !1
        });
    },
    speak3: function(e) {
        console.log(e), wx.getStorageSync("users").id != this.data.info.user_id ? wx.showToast({
            title: "管理员才能回复",
            icon: "",
            image: "../image/warn.png"
        }) : this.setData({
            speak: !0,
            speak_type: 2,
            speak_id: e.currentTarget.id
        });
    },
    speaks: function(e) {
        console.log(e);
        var a = this, t = e.detail.value;
        console.log(t), a.setData({
            value: t
        });
    },
    Collection: function(a) {
        var t = this, o = t.data.info, s = t.data.user_id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagezxlike&acid=" + getApp().globalData.version + "&zx_id=&user_id=3",
            cachetime: "0",
            data: {
                zx_id: o.id,
                user_id: s
            },
            success: function(e) {
                console.log(e), 1 == e.data ? (wx.showToast({
                    title: "点赞成功",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }), setTimeout(function() {
                    t.refresh();
                }, 2e3)) : wx.showModal({
                    title: "提示",
                    content: e.data,
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确定",
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }), t.setData({
                    Collection: e.data
                });
            }
        });
    },
    speak2: function(a) {
        var t = this, o = t.data.value;
        console.log(o);
        var s = o;
        return new Promise(function(a, t) {
            e.util.request({
                url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
                data: {
                    content: s,
                    mode: "wx"
                },
                method: "POST",
                success: function(e) {
                    if (0 !== e.data) return wx.showModal({
                        title: "提示",
                        content: "你的帖子有违禁内容，请重新编辑"
                    }), !1;
                }
            });
        });
    },
    shouye: function(e) {
        wx.reLaunch({
            url: "../index/index",
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
        this.refresh(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function(e) {
        var a = this.data.info;
        return console.log(a), "button" === e.from && console.log(e.target), {
            title: a.title,
            path: "zh_tcwq/pages/message/message_info?id=" + a.id,
            success: function(e) {},
            fail: function(e) {}
        };
    }
});