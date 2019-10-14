function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp();

require("../../utils/util.js");

Page((a = {
    data: {
        index: 0,
        currentTab: 0,
        swiperCurrent: 0,
        indicatorDots: !1,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        circular: !0,
        averdr: !1,
        hotels: !1,
        refresh_top: !1,
        scroll_top: !0,
        index_class: !1
    },
    swiperChange: function(t) {
        this.setData({
            swiperCurrent: t.detail.current
        });
    },
    swiperChange1: function(t) {
        this.setData({
            swiperCurrent1: t.detail.current
        });
    },
    jumps: function(t) {
        var a = this, e = (t.currentTarget.dataset.name, t.currentTarget.dataset.appid), n = t.currentTarget.dataset.src, i = t.currentTarget.dataset.id;
        console.log(i);
        var o = t.currentTarget.dataset.type;
        if (1 == o) {
            var r = n.replace(/[^0-9]/gi, "");
            n = n = n.replace(/(\d+|\s+)/g, ""), console.log(n), console.log(r), console.log(), 
            wx.navigateTo({
                url: n + Number(r),
                success: function(t) {
                    a.setData({
                        averdr: !0
                    });
                },
                fail: function(t) {},
                complete: function(t) {}
            });
        } else 2 == o ? wx.navigateTo({
            url: "../car/car?vr=" + i,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        }) : 3 == o && wx.navigateToMiniProgram({
            appId: e,
            path: "",
            extraData: {
                foo: "bar"
            },
            success: function(t) {
                a.setData({
                    averdr: !0
                });
            }
        });
    },
    city_select: function(t) {
        wx.navigateTo({
            url: "city",
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    delete: function(t) {
        this.setData({
            averdr: !0
        });
    },
    changeIndicatorDots: function(t) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        });
    },
    changeAutoplay: function(t) {
        this.setData({
            autoplay: !this.data.autoplay
        });
    },
    intervalChange: function(t) {
        this.setData({
            interval: t.detail.value
        });
    },
    durationChange: function(t) {
        this.setData({
            duration: t.detail.value
        });
    },
    seller: function(t) {
        wx.navigateTo({
            url: "../sellerinfo/sellerinfo"
        });
    },
    settled: function(t) {
        wx.navigateTo({
            url: "../settled/settled"
        });
    },
    onLoad: function(t) {
        console.log("onLoad");
        var a = this;
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: wx.getStorageSync("color"),
            animation: {
                duration: 0,
                timingFunc: "easeIn"
            }
        }), wx.getLocation({
            type: "wgs84",
            success: function(t) {
                t.latitude, t.longitude, t.speed, t.accuracy;
            }
        }), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    windowHeight: t.windowHeight
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageurl3" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                wx.setStorageSync("url2", t.data);
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageviews&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log(t);
                var e = t.data;
                "" == e ? e = 0 : Number(e) > 1e4 && (e = (Number(e) / 1e4).toFixed(2) + "万"), a.setData({
                    views: e
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagenum&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                a.setData({
                    Num: t.data
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageurl3" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                wx.setStorageSync("url", t.data), a.setData({
                    url: t.data
                });
            }
        }), a.refresh(), a.seller();
    },
    refresh: function(t) {
        var a = this, n = wx.getStorageSync("city");
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorelist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: n
            },
            success: function(t) {
                t.data.length <= 5 ? a.setData({
                    store: t.data
                }) : a.setData({
                    store: t.data.slice(0, 6)
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagead&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: n
            },
            success: function(t) {
                console.log(t);
                var e = [], n = [], i = [];
                for (var o in t.data) 8 == t.data[o].type && e.push(t.data[o]), 5 == t.data[o].type && n.push(t.data[o]), 
                7 == t.data[o].type && i.push(t.data[o]);
                a.setData({
                    slide: e,
                    advert: n,
                    ggslide: i
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagenews&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: n
            },
            success: function(t) {
                var e = [];
                for (var n in t.data) 4 == t.data[n].type && e.push(t.data[n]);
                a.setData({
                    msgList: e
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                var e = t.data;
                e.length <= 5 ? a.setData({
                    height: 165
                }) : e.length > 5 && a.setData({
                    height: 330
                });
                for (var n = [], i = 0, o = e.length; i < o; i += 10) n.push(e.slice(i, i + 10));
                console.log(n, e), a.setData({
                    nav: n,
                    navs: e
                });
            }
        });
    }
}, t(a, "seller", function(t) {
    var a = this, n = a.data.index_class, i = wx.getStorageSync("city"), o = wx.getStorageSync("index"), r = a.data.page, s = a.data.seller;
    if (console.log(i), 1 == n) {
        null != r && "" != r || (r = 1), null != s && "" != s || (s = []);
        var c = a.data.navs[o].id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelist2&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                type_id: c,
                page: a.data.page,
                cityname: i
            },
            success: function(t) {
                if (console.log(t.data), 0 == t.data.length) a.setData({
                    refresh_top: !0
                }); else {
                    a.setData({
                        refresh_top: !1,
                        page: r + 1
                    }), s = s.concat(t.data), s = function(t) {
                        for (var a = [], e = 0; e < t.length; e++) -1 == a.indexOf(t[e]) && a.push(t[e]);
                        return a;
                    }(s);
                }
                if (t.data.length > 0) {
                    for (var n in t.data) {
                        var i = e.ormatDate(t.data[n].tz.sh_time);
                        t.data[n].tz.img = t.data[n].tz.img.split(","), t.data[n].tz.details = t.data[n].tz.details.replace("?", " "), 
                        t.data[n].tz.img.length > 4 && (t.data[n].tz.img_length = Number(t.data[n].tz.img.length) - 4), 
                        t.data[n].tz.img.length >= 4 ? t.data[n].tz.img1 = t.data[n].tz.img.slice(0, 4) : t.data[n].tz.img1 = t.data[n].tz.img, 
                        t.data[n].tz.time = i.slice(0, 16);
                    }
                    for (var o in s) {
                        for (var c in s[o].label) s[o].label[c].number = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
                        a.setData({
                            seller: s
                        });
                    }
                } else a.setData({
                    seller: s
                });
            }
        });
    } else null == r && (r = 1), null == s && (s = []), e.util.request({
        url: getApp().globalData.baseUrl + "c=apitc&a=dopagelist2&acid=" + getApp().globalData.version,
        cachetime: "0",
        data: {
            page: a.data.page,
            cityname: i
        },
        success: function(t) {
            if (console.log(t.data), 0 == t.data.length) a.setData({
                refresh_top: !0
            }); else {
                a.setData({
                    refresh_top: !1,
                    page: r + 1
                }), s = s.concat(t.data), s = function(t) {
                    for (var a = [], e = 0; e < t.length; e++) -1 == a.indexOf(t[e]) && a.push(t[e]);
                    return a;
                }(s);
            }
            if (t.data.length > 0) {
                for (var n in t.data) {
                    var i = e.ormatDate(t.data[n].tz.sh_time);
                    t.data[n].tz.img = t.data[n].tz.img.split(","), t.data[n].tz.details = t.data[n].tz.details.replace("?", " "), 
                    t.data[n].tz.img.length > 4 && (t.data[n].tz.img_length = Number(t.data[n].tz.img.length) - 4), 
                    t.data[n].tz.img.length >= 4 ? t.data[n].tz.img1 = t.data[n].tz.img.slice(0, 4) : t.data[n].tz.img1 = t.data[n].tz.img, 
                    t.data[n].tz.time = i.slice(0, 16);
                }
                for (var o in s) {
                    for (var c in s[o].label) s[o].label[c].number = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
                    a.setData({
                        seller: s
                    });
                }
            } else a.setData({
                seller: s
            });
        }
    });
}), t(a, "commend", function(t) {
    var a = this, e = t.currentTarget.id, n = t.currentTarget.dataset.index;
    wx.setStorageSync("index", n), a.setData({
        page: "",
        seller: "",
        index: n,
        index_class: !0,
        activeIndex: e
    }), a.seller();
}), t(a, "whole", function(t) {
    wx.removeStorage({
        key: "index",
        success: function(t) {}
    }), this.setData({
        page: 1,
        seller: [],
        index_class: !1
    }), this.seller();
}), t(a, "bindinput", function(t) {
    var a = t.detail.value;
    "" != a && e.util.request({
        url: getApp().globalData.baseUrl + "c=apitc&a=dopagelist2&acid=" + getApp().globalData.version,
        cachetime: "0",
        data: {
            keywords: a
        },
        success: function(t) {
            0 == t.data.length ? wx.showModal({
                title: "提示",
                content: "没有这个帖子",
                showCancel: !0,
                cancelText: "取消",
                confirmText: "确定",
                success: function(t) {},
                fail: function(t) {},
                complete: function(t) {}
            }) : wx.navigateTo({
                url: "../infodetial/infodetial?id=" + t.data[0].tz.id,
                success: function(t) {},
                fail: function(t) {},
                complete: function(t) {}
            });
        }
    });
}), t(a, "ormatDate", function(t) {
    function a(t, a) {
        for (var e = "" + t, n = e.length, i = "", o = a; o-- > n; ) i += "0";
        return i + e;
    }
    var e = new Date(1e3 * t);
    return e.getFullYear() + "-" + a(e.getMonth() + 1, 2) + "-" + a(e.getDate(), 2) + " " + a(e.getHours(), 2) + ":" + a(e.getMinutes(), 2) + ":" + a(e.getSeconds(), 2);
}), t(a, "thumbs_up", function(t) {
    var a = this, n = a.data.seller, i = t.currentTarget.dataset.id, o = wx.getStorageSync("users").id;
    Number(t.currentTarget.dataset.num);
    for (var r in n) !function(t) {
        n[t].tz.id == i && (n[t].thumbs_up = !0, e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelike&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                information_id: i,
                user_id: o
            },
            success: function(e) {
                1 != e.data ? wx.showModal({
                    title: "提示",
                    content: "不能重复点赞",
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确认",
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {}
                }) : (n[t].tz.givelike = Number(n[t].tz.givelike) + 1, a.setData({
                    seller: n
                }));
            }
        }));
    }(r);
}), t(a, "previewImage", function(t) {
    console.log(t);
    var a = t.currentTarget.dataset.id, e = this, n = e.data.url, i = [], o = t.currentTarget.dataset.inde, r = e.data.seller;
    for (var s in r) if (r[s].tz.id == a) {
        var c = r[s].tz.img;
        for (var l in c) i.push(n + c[l]);
        wx.previewImage({
            current: n + c[o],
            urls: i
        });
    }
}), t(a, "red", function(t) {
    wx.navigateTo({
        url: "../redbag/redbag",
        success: function(t) {},
        fail: function(t) {},
        complete: function(t) {}
    });
}), t(a, "redinfo", function(t) {
    wx.showModal({
        title: "温馨提示",
        content: "功能暂未开放,敬请期待",
        showCancel: !0,
        cancelText: "取消",
        confirmText: "确定",
        success: function(t) {},
        fail: function(t) {},
        complete: function(t) {}
    });
}), t(a, "yellow_page", function(t) {
    wx.reLaunch({
        url: "../yellow_page/yellow"
    });
}), t(a, "post1", function(t) {
    wx.switchTab({
        url: "../fabu/fabu/fabu"
    });
}), t(a, "store_info", function(t) {
    var a = t.currentTarget.id;
    wx.navigateTo({
        url: "../sellerinfo/sellerinfo?id=" + a,
        success: function(t) {},
        fail: function(t) {},
        complete: function(t) {}
    });
}), t(a, "notice", function(t) {
    var a = t.currentTarget.dataset.id;
    wx.navigateTo({
        url: "../notice/notice?id=" + a,
        success: function(t) {},
        fail: function(t) {},
        complete: function(t) {}
    });
}), t(a, "post", function(t) {
    wx, wx.reLaunch({
        url: "../shun/shun",
        success: function(t) {},
        fail: function(t) {},
        complete: function(t) {}
    });
}), t(a, "phone", function(t) {
    var a = t.currentTarget.dataset.id;
    wx.makePhoneCall({
        phoneNumber: a
    });
}), t(a, "more", function(t) {
    wx.switchTab({
        url: "../store/store",
        success: function(t) {},
        fail: function(t) {},
        complete: function(t) {}
    });
}), t(a, "jump", function(t) {
    var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.name;
    wx.navigateTo({
        url: "../marry/marry?id=" + a + "&name=" + e,
        success: function(t) {},
        fail: function(t) {},
        complete: function(t) {}
    });
}), t(a, "see", function(t) {
    this.data.seller;
    var a = t.currentTarget.dataset.id;
    wx.navigateTo({
        url: "../infodetial/infodetial?id=" + a,
        success: function(t) {},
        fail: function(t) {},
        complete: function(t) {}
    });
}), t(a, "formid_one", function(t) {
    console.log("搜集第一个formid"), console.log(t), e.util.request({
        url: getApp().globalData.baseUrl + "c=apitc&a=dopagesaveformid&acid=" + getApp().globalData.version,
        cachetime: "0",
        data: {
            user_id: wx.getStorageSync("users").id,
            form_id: t.detail.formId,
            openid: wx.getStorageSync("openid")
        },
        success: function(t) {}
    });
}), t(a, "onReady", function() {
    this.setData({
        first: 1
    });
}), t(a, "onShow", function() {}), t(a, "onHide", function() {}), t(a, "onUnload", function() {
    wx.removeStorageSync("city_type");
}), t(a, "onPullDownRefresh", function() {
    var t = this;
    this.setData({
        page: 1,
        seller: [],
        refresh_top: !1
    }), t.refresh(), t.seller(), wx.stopPullDownRefresh();
}), t(a, "onReachBottom", function() {
    0 == this.data.refresh_top && this.seller();
}), t(a, "onShareAppMessage", function() {}), a));