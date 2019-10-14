var a = getApp();

Page({
    data: {
        reply: !1,
        comment: !1,
        select: 0,
        arrow: 1,
        sure: !1,
        receive: !1,
        rob_redbag: !1,
        share: !1,
        hb_share: !1,
        share_red: !1
    },
    onLoad: function(t) {
        var e = this, o = wx.getStorageSync("url3");
        e.setData({
            url3: o
        }), console.log(t), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageposttzydone&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: t.id
            },
            success: function(a) {
                console.log(a);
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesystem&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(a) {
                console.log(a), e.setData({
                    system: a.data
                });
            }
        }), wx.getSystemInfo({
            success: function(a) {
                var t = a.windowWidth / 2, o = 1.095 * t;
                e.setData({
                    width: t,
                    height: o
                });
            }
        });
        var i = wx.getStorageSync("url"), s = wx.getStorageSync("users").id;
        null != t.type ? (wx.login({
            success: function(t) {
                var o = t.code;
                wx.setStorageSync("code", o), wx.getUserInfo({
                    success: function(t) {
                        wx.setStorageSync("user_info", t.userInfo);
                        var i = t.userInfo.nickName, s = t.userInfo.avatarUrl;
                        a.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopageopenid&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                code: o
                            },
                            success: function(t) {
                                wx.setStorageSync("key", t.data.session_key);
                                var o = s, n = i;
                                wx.setStorageSync("openid", t.data.openid);
                                var c = t.data.openid;
                                a.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        openid: c,
                                        img: o,
                                        name: n
                                    },
                                    success: function(a) {
                                        wx.setStorageSync("users", a.data), wx.setStorageSync("uniacid", a.data.uniacid), 
                                        e.setData({
                                            user_id: a.data.id,
                                            user_name: n
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }), e.setData({
            url: i,
            post_info_id: t.my_post
        })) : e.setData({
            url: i,
            user_id: s,
            post_info_id: t.id,
            user_name: wx.getStorageSync("users").name
        }), e.reload();
    },
    reload: function(t) {
        var e = this, o = e.data.post_info_id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageiscollection&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                information_id: o,
                user_id: e.data.user_id
            },
            success: function(a) {
                1 == a.data ? e.setData({
                    Collection: !0
                }) : e.setData({
                    Collection: !1
                });
            }
        });
        var i = wx.getStorageSync("System");
        e.setData({
            system_name: i.pt_name
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagepostlnfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: o
            },
            success: function(t) {
                if (console.log(t), null == t.data.tz.type2_name) i = ""; else var i = t.data.tz.type2_name;
                wx.setNavigationBarTitle({
                    title: t.data.tz.type_name + " " + i
                });
                var s = e.ormatDate(t.data.tz.sh_time);
                t.data.tz.time2 = s.slice(0, 16);
                for (var n in t.data.pl) t.data.pl[n].time = e.ormatDate(t.data.pl[n].time), t.data.pl[n].time = t.data.pl[n].time.slice(0, 16);
                var c = t.data.tz.givelike;
                t.data.tz.img = t.data.tz.img.split(",");
                for (var r in t.data.label) t.data.label[r].number = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
                var l = Number(t.data.tz.hb_num), d = Number(t.data.tz.hb_random);
                Number(t.data.tz.hb_type);
                t.data.tz.hb_money = 1 == d ? t.data.tz.hb_money : Number(t.data.tz.hb_money) * l, 
                a.util.request({
                    url: getApp().globalData.baseUrl + "list=idd&c=apitc&a=dopagehonglist&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        id: t.data.tz.id
                    },
                    success: function(a) {
                        var t = a.data, o = 0;
                        if (1 == (i = function(a, t) {
                            for (var e = 0; e < a.length; e++) if (t === a[e].user_id) return !0;
                            return !1;
                        }(t, e.data.user_id))) i = 2; else if (l == t.length) i = 1; else var i = 3;
                        for (var s in t) o += Number(t[s].money);
                        e.setData({
                            price: o.toFixed(2),
                            hongbao_use: i,
                            hongbao_len: a.data.length,
                            hongbao: t
                        });
                    }
                }), t.data.tz.trans1 = 1, t.data.tz.trans2 = 1, t.data.tz.dis1 = "block", t.data.tz.trans_1 = 2, 
                t.data.tz.trans_2 = 1, e.setData({
                    post: t.data.tz,
                    dianzan: t.data.dz,
                    givelike: c,
                    post_info_id: o,
                    tei_id: t.data.tz.id,
                    criticism: t.data.pl,
                    label: t.data.label
                });
            }
        });
    },
    ormatDate: function(a) {
        function t(a, t) {
            for (var e = "" + a, o = e.length, i = "", s = t; s-- > o; ) i += "0";
            return i + e;
        }
        var e = new Date(1e3 * a);
        return e.getFullYear() + "-" + t(e.getMonth() + 1, 2) + "-" + t(e.getDate(), 2) + " " + t(e.getHours(), 2) + ":" + t(e.getMinutes(), 2) + ":" + t(e.getSeconds(), 2);
    },
    rob_redbag: function(a) {
        var t = this, e = t.data.rob_redbag;
        t.data.hongbao_use;
        1 == e ? t.setData({
            rob_redbag: !1
        }) : t.setData({
            rob_redbag: !0
        });
    },
    trans1: function(t) {
        var e = this, o = e.data.post, i = e.data.num;
        if (2 == e.data.system.is_hbzf) {
            if (null == i && (i = 1), 1 == i) {
                o.trans1 = "trans1", o.trans2 = "trans2";
                var s = wx.getStorageSync("users").id, n = e.data.post_info_id;
                a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagegethong&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        id: n,
                        user_id: s
                    },
                    success: function(a) {
                        console.log("领取红包"), console.log(a), "error" == a.data && wx.showModal({
                            title: "提示",
                            content: "手慢了，红包被抢光了"
                        });
                    }
                }), setTimeout(function() {
                    o.trans_1 = 1, o.trans_2 = 2, o.dis1 = "none", o.dis2 = "block", e.setData({
                        store: o
                    });
                }, 500), setTimeout(function() {
                    o.trans_1 = 2, o.trans_2 = 1, o.dis1 = "block", o.dis2 = "none", e.setData({
                        store: o
                    });
                }, 1e3), setTimeout(function() {
                    o.trans_1 = 1, o.trans_2 = 2, o.dis1 = "none", o.dis2 = "block", e.setData({
                        store: o
                    });
                }, 1500), setTimeout(function() {
                    wx.navigateTo({
                        url: "../redbag/redinfo/see_rob?id=" + e.data.post_info_id,
                        success: function(a) {},
                        fail: function(a) {},
                        complete: function(a) {}
                    }), e.setData({
                        rob_redbag: !1
                    });
                }, 1300);
            }
            e.setData({
                post: o,
                num: i + 1
            });
        } else e.setData({
            share_red: !0,
            rob_redbag: !1
        });
    },
    trans2: function(a) {
        var t = this;
        t.data.store;
        wx.navigateTo({
            url: "../redbag/redinfo/see_rob?id=" + t.data.post_info_id,
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        }), t.setData({
            rob_redbag: !1
        });
    },
    weixin: function(a) {
        this.setData({
            hb_share: !1
        });
    },
    shouye: function(a) {
        wx.reLaunch({
            url: "../index/index",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    receive1: function(a) {
        this.setData({
            receive: !1
        });
    },
    fabu: function(a) {
        wx.reLaunch({
            url: "../fabu/fabu/fabu",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    previewImage: function(a) {
        var t = this, e = (t.data.url, []), o = a.currentTarget.dataset.inde, i = t.data.post.img;
        for (var s in i) e.push(i[s]);
        wx.previewImage({
            current: i[o],
            urls: e
        });
    },
    Collection: function(t) {
        var e = this, o = e.data.tei_id, i = wx.getStorageSync("users").id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagecollection&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                information_id: o,
                user_id: i
            },
            success: function(a) {
                1 == a.data ? (e.setData({
                    Collection: !0
                }), setTimeout(function() {
                    wx.showToast({
                        title: "收藏成功",
                        icon: "",
                        image: "",
                        duration: 1e3,
                        mask: !0,
                        success: function(a) {},
                        fail: function(a) {},
                        complete: function(a) {}
                    });
                }, 500)) : (setTimeout(function() {
                    wx.showToast({
                        title: "取消收藏成功",
                        icon: "",
                        image: "",
                        duration: 1e3,
                        mask: !0,
                        success: function(a) {},
                        fail: function(a) {},
                        complete: function(a) {}
                    });
                }, 500), e.setData({
                    Collection: !1
                }));
            }
        });
    },
    hb_keyword: function(a) {
        var t = this, e = a.detail.value;
        t.data.post.hb_keyword == e ? t.setData({
            sure: !0
        }) : wx.showModal({
            title: "提示",
            content: "输入的口令错误，请重新输入",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定",
            success: function(t) {
                a.detail.value;
            },
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    comment: function(t) {
        var e = this, o = wx.getStorageSync("users").id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageuserinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: o
            },
            success: function(a) {
                console.log(a), 1 == a.data.state ? e.setData({
                    comment: !0
                }) : wx.showModal({
                    title: "提示",
                    content: "您的账号异常，请尽快联系管理员",
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确定",
                    success: function(a) {},
                    fail: function(a) {},
                    complete: function(a) {}
                });
            }
        });
    },
    complete: function(a) {
        this.setData({
            complete: a.detail.value
        });
    },
    complete1: function(a) {
        this.setData({
            complete1: a.detail.value
        });
    },
    formid_two: function(t) {
        var e = this, o = e.data.complete;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: o,
                mode: "wx"
            },
            method: "POST",
            success: function(o) {
                if (console.log(o.data), 0 !== o.data) return wx.showModal({
                    title: "提示",
                    content: "你的信息有违禁内容，请重新编辑"
                }), !1;
                var i = function(a) {
                    var t = new Date(), e = new Date(t);
                    return e.setDate(t.getDate() + 7), e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
                };
                console.log(t), a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagesaveformid&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        user_id: wx.getStorageSync("users").id,
                        form_id: t.detail.formId,
                        openid: wx.getStorageSync("openid")
                    },
                    success: function(a) {}
                });
                t.detail.formId;
                var s = e.data.complete, n = e.data.user_id, c = e.data.post_info_id, r = e.data.post.user_id, l = function() {
                    var a = new Date(), t = a.getMonth() + 1, e = a.getDate();
                    return t >= 1 && t <= 9 && (t = "0" + t), e >= 0 && e <= 9 && (e = "0" + e), a.getFullYear() + "-" + t + "-" + e + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
                }();
                "" == s || null == s ? wx.showToast({
                    title: "内容为空",
                    icon: "loading",
                    duration: 1e3
                }) : (e.setData({
                    replay: !1,
                    comment: !1
                }), a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagecomments&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        information_id: c,
                        details: s,
                        user_id: n
                    },
                    success: function(t) {
                        if ("error" != t.data) {
                            wx.showToast({
                                title: "评论成功"
                            }), setTimeout(function() {
                                e.reload();
                            }, 1e3);
                            var o = t.data;
                            a.util.request({
                                url: getApp().globalData.baseUrl + "c=apitc&a=dopagegetformid&acid=" + getApp().globalData.version,
                                cachetime: "0",
                                data: {
                                    user_id: r
                                },
                                success: function(t) {
                                    console.log(t);
                                    var e = [];
                                    for (var s in t.data) t.data[s].hours = t.data[s].time.slice(10, 19), t.data[s].time = i(t.data[s].time) + t.data[s].hours, 
                                    console.log(t.data[s].time), console.log(l), l <= t.data[s].time ? e.push(t.data[s]) : a.util.request({
                                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagedelformid&acid=" + getApp().globalData.version,
                                        cachetime: "0",
                                        data: {
                                            user_id: t.data[s].user_id,
                                            form_id: t.data[s].form_id
                                        },
                                        success: function(a) {}
                                    });
                                    console.log(e), a.util.request({
                                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorehfmessage&acid=" + getApp().globalData.version,
                                        cachetime: "0",
                                        data: {
                                            pl_id: o,
                                            form_id: e[0].form_id,
                                            user_id: e[0].user_id,
                                            openid: e[0].openid
                                        },
                                        success: function(t) {
                                            console.log(t), a.util.request({
                                                url: getApp().globalData.baseUrl + "c=apitc&a=dopagedelformid&acid=" + getApp().globalData.version,
                                                cachetime: "0",
                                                data: {
                                                    form_id: e[0].form_id,
                                                    user_id: e[0].user_id
                                                },
                                                success: function(a) {
                                                    console.log(a);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        } else wx.showToast({
                            title: "评论失败",
                            icon: "loading"
                        });
                    }
                }));
            }
        });
    },
    reply1: function(a) {
        var t = this, e = a.currentTarget.dataset.reflex_id, o = a.currentTarget.dataset.name, i = t.data.user_id;
        t.data.post.user_id == i ? t.setData({
            reply: !0,
            reflex_id: e,
            reflex_name: "回复" + o
        }) : wx.showToast({
            title: "发帖者才能回复评论",
            icon: "none",
            duration: 1e3
        });
    },
    formid_one: function(t) {
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesaveformid&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: wx.getStorageSync("users").id,
                form_id: t.detail.formId,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {}
        }), this.setData({
            reply: !1,
            comment: !1
        });
    },
    reply3: function(t) {
        var e = this, o = e.data.reflex_id, i = e.data.complete1;
        "" == i || null == i ? wx.showToast({
            title: "内容为空",
            icon: "loading",
            duration: 1e3
        }) : (e.setData({
            reply: !1
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagereply&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: o,
                reply: i
            },
            success: function(a) {
                console.log(a), 1 == a.data && (wx.showToast({
                    title: "回复成功"
                }), setTimeout(function() {
                    e.reload();
                }, 1e3));
            }
        }));
    },
    phone: function(a) {
        var t = this.data.post;
        wx.makePhoneCall({
            phoneNumber: t.user_tel
        });
    },
    move: function(a) {
        var t = this, e = t.data.select;
        1 == t.data.arrow ? setTimeout(function() {
            t.setData({
                arrow: 2
            });
        }, 1500) : setTimeout(function() {
            t.setData({
                arrow: 1
            });
        }, 1500), 1 == e ? t.setData({
            select: 0
        }) : t.setData({
            select: 1
        });
    },
    thumbs_up: function(t) {
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesaveformid&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: wx.getStorageSync("users").id,
                form_id: t.detail.formId,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {}
        });
        var e = t.detail.formId;
        console.log("用户的form——id是" + e), console.log(this.data);
        var o = wx.getStorageSync("openid");
        console.log(o);
        var i = this, s = i.data.tei_id, n = wx.getStorageSync("users").id, c = Number(i.data.givelike);
        i.data.post.user_id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelike&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                information_id: s,
                user_id: n
            },
            success: function(a) {
                1 != a.data ? wx.showToast({
                    title: "你已点过赞",
                    icon: "success",
                    image: "../image/warn.png",
                    duration: 1500
                }) : (i.reload(), i.setData({
                    thumbs_ups: !0,
                    thumbs_up: c + 1
                }));
            }
        });
    },
    shou: function(a) {
        wx.switchTab({
            url: "../index/index",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    post: function(a) {
        wx.switchTab({
            url: "../fabu/fabu/fabu",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    onReady: function() {},
    onShow: function() {
        this.reload();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.reload(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        console.log(t);
        var e = this;
        console.log(e.data), e.setData({
            share: !0
        });
        var o = e.data.post.user_name, i = e.data.post_info_id, s = Number(e.data.post.hb_money);
        return console.log(s), s > 0 && "button" == t.from ? {
            title: e.data.user_name + "邀您一起拆" + o + "的红包",
            path: "/zh_tcwq/pages/infodetial/infodetial?user_id=" + e.data.user_id + "&my_post=" + i + "&type=1",
            imageUrl: e.data.url + e.data.system.hb_img,
            success: function(t) {
                console.log("这是转发成功"), a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagehbfx&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        information_id: e.data.post.id
                    },
                    success: function(a) {
                        console.log(a);
                    }
                }), console.log(t), e.setData({
                    share_red: !1
                });
                var o = e.data.user_id, i = e.data.post_info_id;
                a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagegethong&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        id: i,
                        user_id: o
                    },
                    success: function(a) {
                        console.log("领取红包"), console.log(a), "error" == a.data && wx.showModal({
                            title: "提示",
                            content: "手慢了，红包被抢光了"
                        });
                    }
                }), wx.navigateTo({
                    url: "../redbag/redinfo/see_rob?id=" + e.data.post_info_id,
                    success: function(a) {},
                    fail: function(a) {},
                    complete: function(a) {}
                }), e.setData({
                    share: !0,
                    hb_share: !1,
                    rob_redbag: !1
                });
            },
            fail: function(a) {}
        } : s > 0 && "menu" == t.from ? {
            title: e.data.user_name + "邀您一起拆" + o + "的红包【" + e.data.post.type_name + "】 " + e.data.post.details,
            path: "/zh_tcwq/pages/infodetial/infodetial?user_id=" + e.data.user_id + "&my_post=" + i + "&type=1",
            success: function(t) {
                console.log("这是转发成功"), a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagehbmx&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        information_id: e.data.post.id
                    },
                    success: function(a) {
                        console.log(a);
                    }
                }), console.log(t), e.setData({
                    share_red: !1
                });
            },
            fail: function(a) {}
        } : {
            title: "【" + e.data.post.type_name + "】 " + e.data.post.details,
            path: "/zh_tcwq/pages/infodetial/infodetial?user_id=" + e.data.user_id + "&my_post=" + i + "&type=1",
            success: function(t) {
                console.log("这是转发成功"), a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagehbfx&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        information_id: e.data.post.id
                    },
                    success: function(a) {
                        console.log(a);
                    }
                }), console.log(t), e.setData({
                    share_red: !1
                });
            },
            fail: function(a) {}
        };
    }
});