function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a = getApp();

Page({
    data: (t = {
        sure: !1,
        receive: !1,
        loadText: "加载更多",
        duanziInfo: [],
        reply: !1,
        comment: !1,
        select: 0,
        arrow: 1
    }, e(t, "sure", !1), e(t, "receive", !1), e(t, "rob_redbag", !1), e(t, "share", !1), 
    e(t, "share_red", !1), t),
    dizhi: function(e) {
        var t = this, a = Number(t.data.store.coordinates.split(",")[0]), o = Number(t.data.store.coordinates.split(",")[1]);
        wx.openLocation({
            latitude: a,
            longitude: o,
            name: t.data.store.user_name,
            address: t.data.store.address
        });
    },
    shouye: function(e) {
        wx.reLaunch({
            url: "../../index/index",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    phone: function(e) {
        var t = this.data.store.user_tel;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    jrsj: function() {
        var e = this;
        wx.redirectTo({
            url: "../../sellerinfo/sellerinfo?id=" + e.data.store.store_id
        });
    },
    onLoad: function(e) {
        var t = this, o = (wx.getStorageSync("System"), e.store_id), s = wx.getStorageSync("url"), n = e.logo;
        t.setData({
            url: s,
            store_id: o,
            logo: n
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageposttzydone&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: e.store_id
            },
            success: function(e) {
                console.log(e);
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesystem&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                console.log(e), t.setData({
                    system: e.data
                });
            }
        }), wx.login({
            success: function(e) {
                var o = e.code;
                wx.setStorageSync("code", o), wx.getUserInfo({
                    success: function(e) {
                        wx.setStorageSync("user_info", e.userInfo);
                        var s = e.userInfo.nickName, n = e.userInfo.avatarUrl;
                        a.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopageopenid&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                code: o
                            },
                            success: function(e) {
                                wx.setStorageSync("key", e.data.session_key);
                                var o = n, i = s;
                                wx.setStorageSync("openid", e.data.openid);
                                var r = e.data.openid;
                                a.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        openid: r,
                                        img: o,
                                        name: i
                                    },
                                    success: function(e) {
                                        wx.setStorageSync("users", e.data), wx.setStorageSync("uniacid", e.data.uniacid), 
                                        t.setData({
                                            user_id: e.data.id,
                                            name: i
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }), t.reload();
    },
    reload: function(e) {
        var t = this, o = wx.getStorageSync("users").id, s = t.data.store_id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageiscollection&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                information_id: s,
                user_id: o
            },
            success: function(e) {
                console.log(e), 1 == e.data ? t.setData({
                    Collection: !0
                }) : t.setData({
                    Collection: !1
                });
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagepostlnfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: s
            },
            success: function(e) {
                console.log(e);
                var s = e.data.tz, n = Number(e.data.tz.hb_num);
                s.img = s.img.split(","), 1 == s.hb_random ? s.hb_money = Number(s.hb_money) : (s.hb_money = Number(s.money) / Number(s.hb_num), 
                console.log(s.hb_money)), "" == s.hb_keyword ? t.setData({
                    sure: !0
                }) : t.setData({
                    sure: !1
                }), a.util.request({
                    url: getApp().globalData.baseUrl + "list=idd&c=apitc&a=dopagehonglist&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        id: e.data.tz.id
                    },
                    success: function(e) {
                        console.log(e);
                        var a = e.data;
                        console.log(a);
                        var s = 0;
                        for (var i in a) s += Number(a[i].money);
                        s = s.toFixed(2), console.log(s);
                        var r = function(e, t) {
                            for (var a = 0; a < e.length; a++) if (t === e[a].user_id) return !0;
                            return !1;
                        }(a, o);
                        if (console.log(s), 1 == r) l = 2; else if (0 == r) if (n == a.length) {
                            console.log("红包已经抢完");
                            l = 1;
                        } else {
                            console.log("红包还没抢完");
                            var l = 3;
                        }
                        console.log(l), t.setData({
                            hongbao_use1: l,
                            hongbao_len: e.data.length,
                            hongbao: a,
                            z_money: s
                        });
                    }
                }), console.log(e.data.pl);
                for (var i in e.data.pl) e.data.pl[i].time = a.ormatDate(e.data.pl[i].time);
                s.hb_money = Number(s.hb_money).toFixed(2), s.trans1 = 1, s.trans2 = 1, s.dis1 = "block", 
                s.trans_1 = 2, s.trans_2 = 1, t.setData({
                    store: s,
                    criticism: e.data.pl,
                    label: e.data.label
                });
            }
        });
    },
    rob_redbag: function(e) {
        var t = this, a = t.data.rob_redbag;
        1 == a ? t.setData({
            rob_redbag: !1
        }) : t.setData({
            rob_redbag: !0
        });
    },
    gethong: function(e) {
        var t = this, o = wx.getStorageSync("users").id, s = t.data.store_id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagegethong&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: s,
                user_id: o
            },
            success: function(e) {
                console.log("领取红包"), console.log(e), t.reload(), t.setData({
                    receive: !0,
                    sure: !1
                });
            }
        });
    },
    receive1: function(e) {
        this.setData({
            receive: !1,
            sure: !1
        });
    },
    hb_keyword: function(e) {
        console.log(e);
        var t = this, a = e.detail.value;
        t.data.store.hb_keyword == a ? t.setData({
            sure: !0
        }) : wx.showModal({
            title: "提示",
            content: "输入的口令错误，请重新输入",
            showCancel: !0,
            cancelText: "取消",
            cancelColor: "",
            confirmText: "确定",
            confirmColor: "",
            success: function(t) {
                e.detail.value;
            },
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    trans1: function(e) {
        console.log(7.777777777777778e39);
        var t = this, o = t.data.store;
        if (2 == t.data.system.is_hbzf) {
            o.trans1 = "trans1", o.trans2 = "trans2";
            var s = wx.getStorageSync("users").id, n = t.data.store_id;
            a.util.request({
                url: getApp().globalData.baseUrl + "c=apitc&a=dopagegethong&acid=" + getApp().globalData.version,
                cachetime: "0",
                data: {
                    id: n,
                    user_id: s
                },
                success: function(e) {
                    console.log("领取红包"), console.log(e), "error" == e.data && wx.showModal({
                        title: "提示",
                        content: "手慢了，红包被抢光了"
                    });
                }
            }), setTimeout(function() {
                o.trans_1 = 1, o.trans_2 = 2, o.dis1 = "none", o.dis2 = "block", t.setData({
                    store: o
                });
            }, 500), setTimeout(function() {
                o.trans_1 = 2, o.trans_2 = 1, o.dis1 = "block", o.dis2 = "none", t.setData({
                    store: o
                });
            }, 1e3), setTimeout(function() {
                o.trans_1 = 1, o.trans_2 = 2, o.dis1 = "none", o.dis2 = "block", t.setData({
                    store: o
                });
            }, 1500), setTimeout(function() {
                wx.navigateTo({
                    url: "see_rob?id=" + t.data.store_id,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }), t.setData({
                    rob_redbag: !1
                });
            }, 1300), t.setData({
                store: o
            });
        } else t.setData({
            share_red: !0,
            rob_redbag: !1
        });
    },
    hb_text: function(e) {
        this.setData({
            value: e.detail.value
        });
    },
    trans2: function(e) {
        var t = this;
        t.data.store;
        wx.navigateTo({
            url: "see_rob?id=" + t.data.store_id,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }), t.setData({
            rob_redbag: !1
        });
    },
    comment: function(e) {
        this.setData({
            comment: !0
        });
    },
    complete: function(e) {
        console.log(e), this.setData({
            complete: e.detail.value
        });
    },
    complete1: function(e) {
        console.log(e), this.setData({
            complete1: e.detail.value
        });
    },
    publish: function(e) {
        var t = this, o = t.data.complete, s = t.data.user_id;
        console.log(s), console.log(o), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: o,
                mode: "wx"
            },
            method: "POST",
            success: function(n) {
                if (console.log(n.data), "function" == typeof e && e(t), 0 !== n.data) return wx.showModal({
                    title: "提示",
                    content: "你的信息有违禁内容，请重新编辑"
                }), !1;
                var i = t.data.store_id;
                "" == o || null == o ? wx.showToast({
                    title: "内容为空",
                    icon: "loading",
                    duration: 1e3
                }) : (t.setData({
                    replay: !1,
                    comment: !1
                }), a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagecomments&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        information_id: i,
                        details: o,
                        user_id: s
                    },
                    success: function(e) {
                        console.log(e), "error" != e.data ? (wx.showToast({
                            title: "评论成功"
                        }), setTimeout(function() {
                            t.reload();
                        }, 1e3)) : wx.showToast({
                            title: "评论失败",
                            icon: "loading"
                        });
                    }
                }));
            }
        });
    },
    reply1: function(e) {
        var t = this, a = e.currentTarget.dataset.reflex_id, o = e.currentTarget.dataset.name, s = t.data.user_id;
        t.data.store.user_id == s ? t.setData({
            reply: !0,
            reflex_id: a,
            reflex_name: "回复" + o
        }) : wx.showToast({
            title: "管理员可回复",
            icon: "loading",
            duration: 1e3
        });
    },
    reply2: function(e) {
        this.setData({
            reply: !1,
            comment: !1
        });
    },
    reply3: function(e) {
        var t = this, o = t.data.reflex_id, s = t.data.complete1;
        console.log(o), console.log(s), "" == s || null == s ? wx.showToast({
            title: "内容为空",
            icon: "loading",
            duration: 1e3
        }) : (t.setData({
            reply: !1
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagereply&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: o,
                reply: s
            },
            success: function(e) {
                console.log(e), 1 == e.data && (wx.showToast({
                    title: "回复成功"
                }), setTimeout(function() {
                    t.reload();
                }, 1e3));
            }
        }));
    },
    move: function(e) {
        var t = this, a = t.data.select;
        1 == t.data.arrow ? setTimeout(function() {
            t.setData({
                arrow: 2
            });
        }, 1500) : setTimeout(function() {
            t.setData({
                arrow: 1
            });
        }, 1500), 1 == a ? t.setData({
            select: 0
        }) : t.setData({
            select: 1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        this.reload();
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(e) {
        var t = this;
        return "button" == e.from ? {
            title: t.data.name + "邀您一起抢红包",
            path: "/zh_tcwq/pages/redbag/redinfo/redinfo?store_id=" + t.data.store_id,
            imageUrl: t.data.url + t.data.system.hb_img,
            success: function(e) {
                console.log("这是转发成功"), a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagehbfx&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        information_id: t.data.store.id
                    },
                    success: function(e) {
                        console.log(e);
                    }
                }), console.log(e), t.setData({
                    share_red: !1
                });
                var o = t.data.user_id, s = t.data.store_id;
                a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagegethong&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        id: s,
                        user_id: o
                    },
                    success: function(e) {
                        console.log("领取红包"), console.log(e), "error" == e.data && wx.showModal({
                            title: "提示",
                            content: "手慢了，红包被抢光了"
                        });
                    }
                }), wx.navigateTo({
                    url: "see_rob?id=" + t.data.store_id,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                });
            },
            fail: function(e) {}
        } : {
            title: t.data.name + "邀您一起抢红包",
            path: "/zh_tcwq/pages/redbag/redinfo/redinfo?store_id=" + t.data.store_id,
            imageUrl: t.data.url + t.data.system.hb_img,
            success: function(e) {
                console.log("这是转发成功"), a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagehbfx&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        information_id: t.data.store.id
                    },
                    success: function(e) {
                        console.log(e);
                    }
                }), console.log(e), t.setData({
                    share_red: !1
                });
            },
            fail: function(e) {}
        };
    }
});