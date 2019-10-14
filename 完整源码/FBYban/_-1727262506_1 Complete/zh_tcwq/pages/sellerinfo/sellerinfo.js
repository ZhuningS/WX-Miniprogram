var a = getApp();

Page({
    data: {
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 15,
        comments: !1,
        wechat: !1,
        share: !1,
        tabs2: [ "商家详情", "用户评论" ],
        starss: [ 1, 2, 3, 4, 5 ],
        star: [ {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        } ],
        star1: [ {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        } ],
        index: 0,
        swiperCurrent: 0
    },
    comments1: function(a) {
        0 == this.data.wechat ? this.setData({
            wechat: !0
        }) : this.setData({
            wechat: !1
        });
    },
    comments2: function(a) {
        0 == this.data.share ? this.setData({
            share: !0
        }) : this.setData({
            share: !1
        });
    },
    more: function(a) {
        var t = this.data.id;
        wx.navigateTo({
            url: "shop?store_id=" + t,
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    goods_info: function(a) {
        var t = this.data.id, e = a.currentTarget.id;
        wx.navigateTo({
            url: "good_info?id=" + e + "&store_id=" + t,
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    previewImage: function(a) {
        var t = this, e = (t.data.url, []), i = t.data.store.weixin_logo;
        e.push(t.data.store.weixin_logo.replace(/[\r\n]/g, "")), wx.previewImage({
            current: i.replace(/[\r\n]/g, ""),
            urls: e
        });
    },
    previewImage3: function(a) {
        var t = this, e = [], i = t.data.url2 + t.data.store.ewm_logo;
        e.push(i.replace(/[\r\n]/g, "")), wx.previewImage({
            urls: e
        });
    },
    previewImage2: function(a) {
        var t = this, e = (t.data.url, []);
        e.push(t.data.bath.replace(/[\r\n]/g, "")), wx.previewImage({
            urls: e
        });
    },
    previewImage1: function(a) {
        var t = this, e = (t.data.url, []), i = a.currentTarget.id, o = t.data.store.images;
        for (var s in o) e.push(o[s].replace(/[\r\n]/g, ""));
        wx.previewImage({
            current: o[i].replace(/[\r\n]/g, ""),
            urls: e
        });
    },
    tabClick: function(a) {
        this.setData({
            sliderOffset: a.currentTarget.offsetLeft,
            activeIndex: a.currentTarget.id
        });
    },
    Demonstration: function(a) {
        "" != this.data.store.vr_link && wx.navigateTo({
            url: "../car/car?vr=" + this.data.store.vr_link,
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    swiperChange: function(a) {
        this.setData({
            swiperCurrent: a.detail.current
        });
    },
    onLoad: function(t) {
        var e = this;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoreydone&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: t.id
            },
            success: function(a) {
                console.log(a);
            }
        });
        var i = wx.getStorageSync("url3");
        e.setData({
            url2: i,
            url3: i
        });
        var o = decodeURIComponent(t.scene);
        if (a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageurl4&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(a) {
                wx.setStorageSync("url", a.data), e.setData({
                    url: a.data
                });
            }
        }), null == t.scene) var s = wx.getStorageSync("users"), n = wx.getStorageSync("users").id, c = t.id; else {
            c = o;
            wx.login({
                success: function(t) {
                    var i = t.code;
                    wx.setStorageSync("code", i), wx.getUserInfo({
                        success: function(t) {
                            wx.setStorageSync("user_info", t.userInfo);
                            var o = t.userInfo.nickName, s = t.userInfo.avatarUrl;
                            a.util.request({
                                url: getApp().globalData.baseUrl + "c=apitc&a=dopageopenid&acid=" + getApp().globalData.version,
                                cachetime: "0",
                                data: {
                                    code: i
                                },
                                success: function(t) {
                                    wx.setStorageSync("key", t.data.session_key);
                                    var i = s, n = o;
                                    wx.setStorageSync("openid", t.data.openid);
                                    var c = t.data.openid;
                                    a.util.request({
                                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
                                        cachetime: "0",
                                        data: {
                                            openid: c,
                                            img: i,
                                            name: n
                                        },
                                        success: function(a) {
                                            wx.setStorageSync("users", a.data), wx.setStorageSync("uniacid", a.data.uniacid), 
                                            e.setData({
                                                user_id: a.data.id,
                                                user_info: a.data
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
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorecode&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                store_id: c
            },
            success: function(a) {
                e.setData({
                    bath: a.data
                });
            }
        }), e.setData({
            id: c,
            user_id: n,
            user_info: s
        }), e.reload(), wx.getSystemInfo({
            success: function(a) {
                var t = a.windowWidth, i = a.windowHeight;
                e.setData({
                    sys_width: t,
                    sys_height: i
                });
            },
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    reload: function(t) {
        var e = this, i = e.data.star1, o = e.data.star;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoreinfo&acid=" + getApp().globalData.version + "&id=2",
            cachetime: "0",
            data: {
                id: e.data.id
            },
            success: function(t) {
                t.data.star3 = o, t.data.store[0].img1 = t.data.store[0].ad.split(","), t.data.store[0].images = t.data.store[0].img.split(","), 
                t.data.store[0].coordinates = t.data.store[0].coordinates.split(","), t.data.store[0].star = i.slice(0, t.data.store[0].score);
                for (var s in t.data.pl) t.data.pl[s].star = i;
                var n = Number(t.data.store[0].score), c = "https://api.cnmmsc.org/apitc/img/image/xing.png";
                0 == (n = parseInt(n)) ? t.data.star3 = e.data.star1 : 1 == n ? t.data.star3[0].img = c : 2 == n ? (t.data.star3[0].img = c, 
                t.data.star3[1].img = c) : 3 == n ? (t.data.star3[0].img = c, t.data.star3[1].img = c, 
                t.data.star3[2].img = c) : 4 == n ? (t.data.star3[0].img = c, t.data.star3[1].img = c, 
                t.data.star3[2].img = c, t.data.star3[3].img = c) : 5 == n && (t.data.star3[0].img = c, 
                t.data.star3[1].img = c, t.data.star3[2].img = c, t.data.star3[3].img = c, t.data.star3[4].img = c), 
                e.setData({
                    score: n,
                    star3: t.data.star3
                }), a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopageiscollection&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        store_id: e.data.id,
                        user_id: e.data.user_id
                    },
                    success: function(a) {
                        1 == a.data ? e.setData({
                            Collection: !0
                        }) : e.setData({
                            Collection: !1
                        });
                    }
                }), wx.setNavigationBarTitle({
                    title: t.data.store[0].store_name
                }), e.setData({
                    store: t.data.store[0],
                    comment: t.data.pl
                });
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoregoodlist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                store_id: e.data.id
            },
            success: function(a) {
                console.log(a);
                for (var t in a.data) a.data[t].imgs = a.data[t].imgs.split(",")[0], a.data[t].lb_imgs = a.data[t].lb_imgs.split(","), 
                console.log(a.data[t].imgs);
                o = [];
                for (var i in a.data) 1 == a.data[i].is_show & 1 == a.data[i].is_tuijian && o.push(a.data[i]);
                var o = o.slice(0, 4);
                e.setData({
                    store_good: o
                });
            }
        });
    },
    formid_one: function(t) {
        console.log("搜集第一个formid"), console.log(t), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesaveformid&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: wx.getStorageSync("users").id,
                form_id: t.detail.formId,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {}
        });
    },
    dizhi: function(a) {
        var t = this, e = Number(t.data.store.coordinates[0]), i = Number(t.data.store.coordinates[1]);
        wx.openLocation({
            latitude: e,
            longitude: i,
            name: t.data.store.store_name,
            address: t.data.store.address
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
    fabu: function(a) {
        wx.navigateTo({
            url: "../index/index",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    phone: function(a) {
        var t = this.data.store.tel;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    reply: function(a) {
        var t = this, e = a.currentTarget.dataset.id;
        t.setData({
            comments: !0,
            relpay: !0,
            reflex_id: e
        });
    },
    star: function(a) {
        var t = this, e = a.currentTarget.dataset.index, i = t.data.star, o = "https://api.cnmmsc.org/apitc/img/image/xing.png", s = "https://api.cnmmsc.org/apitc/img/image/star_none.png";
        0 == e ? (i[0].img = o, i[1].img = s, i[2].img = s, i[3].img = s, i[4].img = s) : 1 == e ? (i[0].img = o, 
        i[1].img = o, i[2].img = s, i[3].img = s, i[4].img = s) : 2 == e ? (i[0].img = o, 
        i[1].img = o, i[2].img = o, i[3].img = s, i[4].img = s) : 3 == e ? (i[0].img = o, 
        i[1].img = o, i[2].img = o, i[3].img = o, i[4].img = s) : 4 == e && (i[0].img = o, 
        i[1].img = o, i[2].img = o, i[3].img = o, i[4].img = o), t.setData({
            index: e + 1,
            star: i
        }), console.log(i);
    },
    Collection: function(t) {
        var e = this, i = e.data.id, o = wx.getStorageSync("users").id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=doPageCollection&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                store_id: i,
                user_id: o
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
    textarea: function(a) {
        var t = a.detail.value;
        this.setData({
            value: t
        });
    },
    comments: function(t) {
        var e = this, i = wx.getStorageSync("users").id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageuserinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: i
            },
            success: function(a) {
                1 == a.data.state ? e.setData({
                    comments: !0,
                    relpay: !1
                }) : wx.showModal({
                    title: "提示",
                    content: "您的账号异常，请尽快联系管理员",
                    showCancel: !0,
                    cancelText: "取消",
                    cancelColor: "",
                    confirmText: "确定",
                    confirmColor: "",
                    success: function(a) {},
                    fail: function(a) {},
                    complete: function(a) {}
                });
            }
        });
    },
    formid_three: function(t) {
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
        this.setData({
            comments: !1
        });
    },
    settled: function(a) {
        wx.navigateTo({
            url: "../settled/settled"
        });
    },
    formid_two: function(t) {
        console.log("点击完成评论");
        var e = this.data.value, i = this;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: e,
                mode: "wx"
            },
            method: "POST",
            success: function(e) {
                if (0 !== e.data) return wx.showModal({
                    title: "提示",
                    content: "你的帖子有违禁内容，请重新编辑"
                }), !1;
                var o = function(a) {
                    var t = new Date(), e = new Date(t);
                    return e.setDate(t.getDate() + 7), e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
                };
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
                var s = i.data.index, n = i.data.value, c = i.data.id, r = wx.getStorageSync("users").id, l = i.data.reflex_id, d = function() {
                    var a = new Date(), t = a.getMonth() + 1, e = a.getDate();
                    return t >= 1 && t <= 9 && (t = "0" + t), e >= 0 && e <= 9 && (e = "0" + e), a.getFullYear() + "-" + t + "-" + e + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
                }();
                null == n || "" == n ? wx.showModal({
                    title: "提示",
                    content: "请输入评论的内容",
                    showCancel: !0,
                    cancelText: "取消",
                    cancelColor: "",
                    confirmText: "确定",
                    confirmColor: "",
                    success: function(a) {},
                    fail: function(a) {},
                    complete: function(a) {}
                }) : 0 == i.data.relpay ? 0 == s ? wx.showModal({
                    title: "提示",
                    content: "小主，给个评分吧",
                    showCancel: !0,
                    cancelText: "取消",
                    cancelColor: "",
                    confirmText: "确定",
                    confirmColor: "",
                    success: function(a) {},
                    fail: function(a) {},
                    complete: function(a) {}
                }) : a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorecomments&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        store_id: c,
                        user_id: r,
                        details: n,
                        score: s
                    },
                    success: function(t) {
                        console.log("评论完成"), console.log(t), i.setData({
                            comments: !1
                        }), wx.showToast({
                            title: "发表成功",
                            icon: "",
                            image: "",
                            duration: 2e3,
                            mask: !0,
                            success: function(a) {},
                            fail: function(a) {},
                            complete: function(a) {}
                        }), setTimeout(function() {
                            i.reload();
                        }, 2e3);
                        var e = t.data;
                        a.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagegetformid&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                user_id: i.data.store.user_id
                            },
                            success: function(t) {
                                console.log("搜索form_id"), console.log(t);
                                var i = [];
                                for (var s in t.data) t.data[s].hours = t.data[s].time.slice(10, 19), t.data[s].time = o(t.data[s].time) + t.data[s].hours, 
                                d <= t.data[s].time ? i.push(t.data[s]) : a.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagedelformid&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        user_id: t.data[s].id,
                                        form_id: t.data[s].form_id
                                    },
                                    success: function(a) {
                                        console.log("删除form_id"), console.log(a);
                                    }
                                });
                                a.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorehfmessage&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        pl_id: e,
                                        form_id: i[0].form_id,
                                        user_id: i[0].user_id,
                                        openid: i[0].openid
                                    },
                                    success: function(t) {
                                        console.log("发送模板消息"), console.log(t), a.util.request({
                                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagedelformid&acid=" + getApp().globalData.version,
                                            cachetime: "0",
                                            data: {
                                                form_id: i[0].form_id,
                                                user_id: i[0].user_id
                                            },
                                            success: function(a) {
                                                console.log("删除已经使用的模板消息"), console.log(a);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                }) : a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagereply&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        id: l,
                        reply: n
                    },
                    success: function(a) {
                        1 == a.data && (i.setData({
                            reply: !1,
                            comments: !1
                        }), i.reload());
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
        console.log(1), this.reload(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = this, e = wx.getStorageSync("users").id, i = t.data.store.store_name, o = t.data.store.id;
        return {
            title: i,
            path: "/zh_tcwq/pages/sellerinfo/sellerinfo?user_id=" + e + "&id=" + o + "&type=1",
            success: function(e) {
                a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorefxnum&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        store_id: o
                    },
                    success: function(a) {
                        t.reload();
                    }
                });
            },
            fail: function(a) {}
        };
    }
});