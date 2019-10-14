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
        index_class: !1,
        whole: !0,
        searchValue: ""
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
        var a = this, e = (t.currentTarget.dataset.name, t.currentTarget.dataset.src);
        wx.navigateTo({
            url: e
        });
        var n = t.currentTarget.dataset.appid, i = t.currentTarget.dataset.srcp;
        console.log(i);
        var o = t.currentTarget.dataset.wb_src, c = t.currentTarget.dataset.type;
        if (1 == c) {
            var s = i.replace(/[^0-9]/gi, "");
            i = i = i.replace(/(\d+|\s+)/g, ""), console.log(i), console.log(s), console.log(), 
            wx.navigateTo({
                url: i + Number(s),
                success: function(t) {
                    a.setData({
                        averdr: !0
                    });
                },
                fail: function(t) {},
                complete: function(t) {}
            });
        } else 2 == c ? wx.navigateTo({
            url: "../car/car?vr=" + o,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        }) : 3 == c && wx.navigateToMiniProgram({
            appId: n,
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
        var a = wx.getStorageSync("System").support;
        this.setData({
            pt_support: a
        }), wx.login({
            success: function(t) {
                console.log(t);
            },
            fail: function(t) {},
            complete: function(t) {}
        }), console.log("onLoad");
        var n = this;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageurl3&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                wx.setStorageSync("url3", t.data.replace(/[\r\n]/g, "")), n.setData({
                    url3: t.data
                });
            }
        }), wx.getLocation({
            type: "wgs84",
            success: function(t) {
                t.latitude, t.longitude, t.speed, t.accuracy;
            }
        }), wx.getSystemInfo({
            success: function(t) {
                n.setData({
                    windowHeight: t.windowHeight
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageurl4&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                wx.setStorageSync("url2", t.data.replace(/[\r\n]/g, ""));
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagegetnav&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                n.setData({
                    Navs: t.data
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl,
            cachetime: "0",
            data: {
                c: "apitc",
                a: "dopageurl4",
                acid: getApp().globalData.version
            },
            success: function(t) {
                wx.setStorageSync("url", t.data.replace(/[\r\n]/g, "")), n.setData({
                    url: t.data
                });
            }
        }), n.refresh(), n.reload();
    },
    reload: function(t) {
        var a = this;
        wx.login({
            success: function(t) {
                console.log(t);
                var a = t.code;
                console.log(t.code), wx.setStorageSync("code", a), e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopageopenid&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        code: a
                    },
                    success: function(t) {
                        console.log(t), wx.setStorageSync("key", t.data.session_key), wx.setStorageSync("openid", t.data.openid);
                        var a = t.data.openid;
                        e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                openid: a,
                                img: "",
                                name: ""
                            },
                            success: function(t) {
                                console.log(t), wx.setStorageSync("users", t.data), wx.setStorageSync("uniacid", t.data.uniacid);
                            }
                        });
                    }
                });
            }
        }), wx.getLocation({
            type: "wgs84",
            success: function(t) {
                console.log(t), wx.setStorageSync("Location", t);
                var n = t.latitude + "," + t.longitude;
                e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagemap&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        op: n
                    },
                    success: function(t) {
                        console.log(t), a.setData({
                            dwcity: t.data.result.address_component.city
                        }), e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesystem&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            success: function(t) {
                                "" != t.data.is_dbdw && wx.showModal({
                                    title: "定位提示",
                                    content: t.data.is_dbdw
                                }), wx.setStorageSync("System", t.data), 1 == t.data.many_city ? (wx.setStorageSync("city", t.data.cityname), 
                                a.setData({
                                    city: t.data.cityname
                                })) : (console.log(wx.getStorageSync("city_type")), 1 != wx.getStorageSync("city_type") ? (wx.setStorageSync("city", a.data.dwcity), 
                                a.setData({
                                    city: a.data.dwcity
                                })) : (a.setData({
                                    city: wx.getStorageSync("city")
                                }), console.log("choosecity")));
                                n = wx.getStorageSync("city");
                                console.log(n), e.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagesavehotcity&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        cityname: n,
                                        user_id: wx.getStorageSync("users").id
                                    },
                                    success: function(t) {
                                        console.log(t);
                                    }
                                }), wx.setNavigationBarTitle({
                                    title: t.data.pt_name
                                }), wx.setStorageSync("color", t.data.color), wx.setNavigationBarColor({
                                    frontColor: "#ffffff",
                                    backgroundColor: wx.getStorageSync("color"),
                                    animation: {
                                        duration: 0,
                                        timingFunc: "easeIn"
                                    }
                                });
                                var n = wx.getStorageSync("city");
                                a.setData({
                                    System: t.data
                                }), a.refresh(), a.seller();
                            }
                        });
                        var n = wx.getStorageSync("System").gd_key;
                        "" == n && wx.showModal({
                            title: "配置提示",
                            content: "请在后台配置高德地图的key",
                            showCancel: !0,
                            cancelText: "取消",
                            confirmText: "确定",
                            success: function(t) {},
                            fail: function(t) {},
                            complete: function(t) {}
                        }), new (require("../amap-wx.js").AMapWX)({
                            key: n
                        }).getWeather({
                            success: function(t) {
                                var e = t.liveData.city, n = t.liveData.weather, i = t.liveData.reporttime.slice(0, 10), o = function(t) {
                                    var a;
                                    return 0 == t.getDay() && (a = "星期日"), 1 == t.getDay() && (a = "星期一"), 2 == t.getDay() && (a = "星期二"), 
                                    3 == t.getDay() && (a = "星期三"), 4 == t.getDay() && (a = "星期四"), 5 == t.getDay() && (a = "星期五"), 
                                    6 == t.getDay() && (a = "星期六"), a;
                                }(new Date(i)), c = t.temperature.data;
                                a.setData({
                                    area: e,
                                    reporttime: i,
                                    weather: n,
                                    w1: o,
                                    temperature: c
                                });
                            },
                            fail: function(t) {}
                        });
                    }
                });
            },
            fail: function(t) {
                wx.getSetting({
                    success: function(t) {
                        0 == t.authSetting["scope.userLocation"] && wx.openSetting({
                            success: function(t) {}
                        });
                    }
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageviews&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                var e = t.data;
                e = (e = "") ? 0 : t.data, a.setData({
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
        });
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
                for (var o in t.data) 1 == t.data[o].type && e.push(t.data[o]), 5 == t.data[o].type && n.push(t.data[o]), 
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
                for (var n in t.data) 1 == t.data[n].type && e.push(t.data[n]);
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
                    height: 140
                }) : e.length > 5 && a.setData({
                    height: 280
                });
                for (var n = [], i = 0, o = e.length; i < o; i += 10) n.push(e.slice(i, i + 10));
                a.setData({
                    nav: n,
                    navs: e
                });
            }
        });
    }
}, t(a, "seller", function(t) {
    var a = this, n = a.data.index_class, i = wx.getStorageSync("city"), o = wx.getStorageSync("index"), c = a.data.page, s = a.data.seller;
    if (console.log(i), 1 == n) {
        null != c && "" != c || (c = 1), null != s && "" != s || (s = []);
        var r = a.data.navs[o].id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                type_id: r,
                page: a.data.page,
                cityname: i
            },
            success: function(t) {
                if (console.log(t.data), 0 == t.data.length) a.setData({
                    refresh_top: !0
                }); else {
                    a.setData({
                        refresh_top: !1,
                        page: c + 1
                    }), s = s.concat(t.data), s = function(t) {
                        for (var a = [], e = 0; e < t.length; e++) -1 == a.indexOf(t[e]) && a.push(t[e]);
                        return a;
                    }(s);
                }
                if (t.data.length > 0) {
                    for (var n in t.data) {
                        var i = e.ormatDate(t.data[n].tz.sh_time);
                        t.data[n].tz.img = t.data[n].tz.img.split(","), t.data[n].tz.img.length > 4 && (t.data[n].tz.img_length = Number(t.data[n].tz.img.length) - 4), 
                        t.data[n].tz.img.length >= 4 ? t.data[n].tz.img1 = t.data[n].tz.img.slice(0, 4) : t.data[n].tz.img1 = t.data[n].tz.img, 
                        t.data[n].tz.time = i.slice(0, 16);
                    }
                    for (var o in s) {
                        for (var r in s[o].label) s[o].label[r].number = function() {
                            var t = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
                            return t;
                        }();
                        a.setData({
                            seller: s
                        });
                    }
                } else a.setData({
                    seller: s
                });
            }
        });
    } else null == c && (c = 1), null == s && (s = []), e.util.request({
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
                    page: c + 1
                }), s = s.concat(t.data), s = function(t) {
                    for (var a = [], e = 0; e < t.length; e++) -1 == a.indexOf(t[e]) && a.push(t[e]);
                    return a;
                }(s);
            }
            if (t.data.length > 0) {
                for (var n in t.data) {
                    var i = e.ormatDate(t.data[n].tz.sh_time);
                    t.data[n].tz.img = t.data[n].tz.img.split(","), t.data[n].tz.img.length > 4 && (t.data[n].tz.img_length = Number(t.data[n].tz.img.length) - 4), 
                    t.data[n].tz.img.length >= 4 ? t.data[n].tz.img1 = t.data[n].tz.img.slice(0, 4) : t.data[n].tz.img1 = t.data[n].tz.img, 
                    t.data[n].tz.time = i.slice(0, 16);
                }
                for (var o in s) {
                    for (var r in s[o].label) s[o].label[r].number = function() {
                        var t = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
                        return t;
                    }();
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
        activeIndex: e,
        whole: !1
    }), a.seller();
}), t(a, "whole", function(t) {
    wx.removeStorage({
        key: "index",
        success: function(t) {}
    }), this.setData({
        page: 1,
        seller: [],
        index_class: !1,
        whole: !0
    }), this.seller();
}), t(a, "bindinput", function(t) {
    var a = this, e = t.detail.value;
    a.setData({
        searchValue: e
    });
}), t(a, "searchtz", function() {
    var t = this, a = t.data.searchValue;
    "" != a ? (this.setData({
        showSearch: !0
    }), e.util.request({
        url: getApp().globalData.baseUrl + "c=apitc&a=dopagelist2&acid=" + getApp().globalData.version,
        cachetime: "0",
        data: {
            keywords: a
        },
        success: function(a) {
            0 == a.data.length ? wx.showToast({
                title: "没找到这个帖子",
                icon: "",
                image: "../image/warn.png",
                duration: 1500
            }) : t.setData({
                postlist: a.data.slice(0, 5)
            });
        }
    })) : (wx.showToast({
        title: "你还没输入关键字",
        icon: "none",
        duration: 1500
    }), t.setData({
        postlist: ""
    }));
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
    for (var c in n) !function(t) {
        n[t].tz.id == i && (n[t].thumbs_up = !0, e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelike&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                information_id: i,
                user_id: o
            },
            success: function(e) {
                1 != e.data ? wx.showToast({
                    title: "你已点过赞",
                    icon: "success",
                    image: "../image/warn.png",
                    duration: 1500
                }) : (n[t].tz.givelike = Number(n[t].tz.givelike) + 1, a.setData({
                    seller: n
                }));
            }
        }));
    }(c);
}), t(a, "previewImage", function(t) {
    console.log(t);
    var a = t.currentTarget.dataset.id, e = this, n = (e.data.url, []), i = t.currentTarget.dataset.inde, o = e.data.seller;
    for (var c in o) if (o[c].tz.id == a) {
        var s = o[c].tz.img;
        for (var r in s) n.push(s[r].replace(/[\r\n]/g, ""));
        wx.previewImage({
            current: s[i].replace(/[\r\n]/g, ""),
            urls: n,
            success: function(t) {
                console.log(t);
            }
        });
    }
    console.log(s[i]);
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
}), t(a, "hidList", function() {
    1 == this.data.showSearch && this.setData({
        showSearch: !1
    });
}), t(a, "gotoTz", function(t) {
    this.setData({
        showSearch: !1
    });
    var a = t.currentTarget.dataset.tz_id;
    console.log(a), wx.navigateTo({
        url: "../infodetial/infodetial?id=" + a,
        success: function(t) {},
        fail: function(t) {},
        complete: function(t) {}
    });
}), t(a, "onReady", function() {
    this.setData({
        first: 1
    });
}), t(a, "onShow", function() {
    this.setData({
        clearInput: !1
    }), 1 == wx.getStorageSync("city_type") && (this.setData({
        page: 1,
        seller: []
    }), this.reload(), this.refresh(), this.seller());
}), t(a, "onHide", function() {
    wx.removeStorage({
        key: "city_type",
        success: function(t) {}
    });
}), t(a, "onUnload", function() {
    wx.removeStorageSync("city_type");
}), t(a, "onPullDownRefresh", function() {
    var t = this;
    this.setData({
        page: 1,
        seller: [],
        refresh_top: !1
    }), t.reload(), t.refresh(), t.seller(), wx.stopPullDownRefresh();
}), t(a, "onReachBottom", function() {
    0 == this.data.refresh_top && this.seller();
}), t(a, "onShareAppMessage", function() {}), a));