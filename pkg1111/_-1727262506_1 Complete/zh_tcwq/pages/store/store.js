var t = getApp();

Page({
    data: {
        luntext: [ "新入", "附近", "热门" ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 35,
        currentTab: 0,
        swiperCurrent: 0,
        indicatorDots: !1,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        circular: !0,
        refresh_top: !1,
        star: [ {
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
        star1: [ {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        } ],
        star2: [ {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        } ],
        star3: [ {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        } ],
        star4: [ {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/xing.png"
        }, {
            img: "https://api.cnmmsc.org/apitc/img/image/star_none.png"
        } ]
    },
    swiperChange: function(t) {
        this.setData({
            swiperCurrent: t.detail.current
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
    tabClick: function(t) {
        var a = t.currentTarget.id;
        console.log(this.data);
        var e = this.data.business;
        if (null != this.data.business && 0 != e.length) {
            if (0 == a) this.refresh(); else if (1 == a) {
                var i = e.sort(function(t, a) {
                    return (t = Number(t.distance)) < (a = Number(a.distance)) ? -1 : t > a ? 1 : 0;
                });
                this.setData({
                    store1: i
                });
            } else if (2 == a) {
                var n = [];
                for (var s in e) e[s].score >= 4 && n.push(e[s]);
                this.setData({
                    store2: n
                });
            }
        }
        this.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.id
        });
    },
    jumps: function(t) {
        var a = this, e = (t.currentTarget.dataset.name, t.currentTarget.dataset.appid), i = t.currentTarget.dataset.src, n = t.currentTarget.dataset.wb_src, s = t.currentTarget.dataset.type;
        if (1 == s) {
            var o = i.replace(/[^0-9]/gi, "");
            i = i = i.replace(/(\d+|\s+)/g, ""), console.log(i), console.log(o), console.log(), 
            wx.navigateTo({
                url: i + Number(o),
                success: function(t) {
                    a.setData({
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
            appId: e,
            path: "",
            extraData: {
                foo: "bar"
            },
            envVersion: "develop",
            success: function(t) {
                a.setData({
                    averdr: !0
                });
            }
        });
    },
    onLoad: function(a) {
        var e = this, i = wx.getStorageSync("System").support;
        this.setData({
            pt_support: i
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageurl3&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log(t), wx.setStorageSync("url3", t.data), e.setData({
                    url3: t.data
                });
            }
        }), wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    windowHeight: t.windowHeight
                });
            }
        }), e.setData({
            store_name: wx.getStorageSync("System").link_name,
            msgList1: wx.getStorageSync("msgList1")
        }), e.reload(), e.refresh();
    },
    reload: function(a) {
        var e = this, i = wx.getStorageSync("url");
        e.setData({
            url: i
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoretype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                var a = t.data;
                a.length <= 5 ? e.setData({
                    height: 150
                }) : a.length > 5 && e.setData({
                    height: 300
                });
                for (var i = [], n = 0, s = a.length; n < s; n += 10) i.push(a.slice(n, n + 10));
                e.setData({
                    nav: i
                });
            }
        });
        var n = wx.getStorageSync("city");
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagead&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: n
            },
            success: function(t) {
                var a = [];
                for (var i in t.data) 2 == t.data[i].type && a.push(t.data[i]);
                e.setData({
                    slide: a
                });
            }
        });
    },
    refresh: function() {
        var a = this, e = (a.data.star1, wx.getStorageSync("city"));
        console.log("城市为" + e), console.log("page数量为" + a.data.page);
        var i = a.data.page, n = a.data.business;
        null == i && (i = 1), null == n && (n = []), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorelist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                page: i,
                cityname: e
            },
            success: function(t) {
                if (console.log(t), 0 == t.data.length) a.setData({
                    refresh_top: !0
                }); else {
                    a.setData({
                        page: i + 1,
                        refresh_top: !1
                    });
                    for (var e = {}, s = [], o = 0, c = (n = n.concat(t.data)).length; o < c; o++) e[n[o]] || (s.push(n[o]), 
                    e[n[o]] = !0);
                    for (var r in t.data) {
                        t.data[r].star = a.data.star1;
                        t.data[r].star;
                        t.data[r].score = Number(t.data[r].score);
                        t.data[r].score;
                        var g = t.data[r].coordinates.split(",");
                        t.data[r].lat2 = Number(wx.getStorageSync("Location").latitude), t.data[r].lng2 = Number(wx.getStorageSync("Location").longitude);
                        var p = Number(wx.getStorageSync("Location").latitude), l = Number(wx.getStorageSync("Location").longitude), u = g[0], m = g[1], d = p * Math.PI / 180, h = u * Math.PI / 180, f = d - h, v = l * Math.PI / 180 - m * Math.PI / 180, D = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(f / 2), 2) + Math.cos(d) * Math.cos(h) * Math.pow(Math.sin(v / 2), 2)));
                        D *= 6378.137;
                        D = (D = Math.round(1e4 * D) / 1e4).toFixed(2);
                        t.data[r].distance = D;
                    }
                    a.setData({
                        store: n,
                        business: n
                    });
                }
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagenews&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: e
            },
            success: function(t) {
                var e = [];
                for (var i in t.data) 2 == t.data[i].type && e.push(t.data[i]);
                a.setData({
                    msgList: e
                });
            }
        });
    },
    sellted: function(t) {
        wx.navigateTo({
            url: "../settled/settled",
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    store: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../sellerinfo/sellerinfo?id=" + a,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    notice: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../notice/notice?id=" + a,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    phone: function(t) {
        var a = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    store_type_id: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "business?id=" + a,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    bindinput: function(a) {
        var e = this, i = a.detail.value;
        e.setData({
            value: i
        }), "" == a.detail.value ? e.setData({
            storelist: ""
        }) : (this.setData({
            showSearch: !0
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorelist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                keywords: i
            },
            success: function(t) {
                0 == t.data.length ? wx.showToast({
                    title: "没找到这个商家",
                    icon: "",
                    image: "../image/warn.png",
                    duration: 1500
                }) : e.setData({
                    storelist: t.data
                });
            }
        }));
    },
    search: function(a) {
        var e = this, i = this.data.value;
        "" != i && t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorelist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                keywords: i
            },
            success: function(t) {
                0 == t.data.length ? wx.showToast({
                    title: "没找到这个商家",
                    icon: "",
                    image: "../image/warn.png",
                    duration: 1500
                }) : e.setData({
                    storelist: t.data
                });
            }
        });
    },
    gotoStore: function(t) {
        console.log(t), this.setData({
            showSearch: !1
        });
        var a = t.currentTarget.dataset.store_id;
        wx.navigateTo({
            url: "../sellerinfo/sellerinfo?id=" + a,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    onReady: function() {
        this.setData({
            first: 1
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.reload(), this.setData({
            page: 1,
            business: [],
            store: []
        }), this.refresh(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        0 == this.data.refresh_top && this.refresh();
    },
    onShareAppMessage: function() {}
});