var t = getApp().globalData, a = !1, e = getApp();

Page({
    data: {
        location: [ "全国优先", "本地优先" ],
        ifUse: !0,
        close: !1,
        inputText: "",
        tabTxt: [ "综合", "销量", "价格" ],
        current: 0,
        tag: 0,
        i: 0,
        listData: [],
        sort: 1,
        scrollHeight: 0,
        pages: 0,
        totalPage: 0,
        showGoTop: !1,
        scrollTop: 0,
        loading: !1,
        isActive: 0,
        cityCode: "",
        regionCode: "",
        cityName: "",
        provinceName: "",
        locationChoose: "全国",
        show: !1,
        ifData: !1
    },
    onLoad: function(t) {
        var a = this;
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    scrollHeight: t.windowHeight
                });
            }
        }), this.init(t, a);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    getDecimal: function(t, a) {
        var e;
        return a = parseInt(a) || 2, e = Math.pow(10, a), parseFloat(t).toFixed(a) * e / e;
    },
    init: function(t) {
        wx.setNavigationBarTitle({
            title: "搜索"
        }), this.setData({
            inputText: t.keyWord
        }), "" != this.data.inputText && this.setData({
            ifUse: !1,
            close: !0
        }), this.getData();
    },
    removeMode: function(t) {
        this.setData({
            show: !1
        });
    },
    selectArea: function() {
        var t = !1;
        t = 0 == this.data.show, this.setData({
            show: t
        });
    },
    choose: function(a) {
        var e = this;
        e.setData({
            listData: []
        }), 1 == a.target.dataset.id ? wx.getLocation({
            type: "wgs84",
            success: function(o) {
                var i = o.latitude, s = o.longitude;
                wx.request({
                    url: t.zbjUrl + "/little/city-location",
                    data: {
                        latitude: i,
                        longitude: s
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(t) {
                        e.setData({
                            isActive: a.target.dataset.id,
                            locationChoose: "本地优先",
                            show: !1
                        }), e.data.cityName = t.data.data.cityName, e.data.provinceName = t.data.data.regionName, 
                        e.getData();
                    }
                });
            },
            error: function() {
                e.setData({
                    isActive: 0,
                    locationChoose: "全国",
                    show: !1
                });
            }
        }) : (e.setData({
            isActive: a.target.dataset.id,
            locationChoose: "全国",
            show: !1
        }), e.getData());
    },
    getData: function() {
        if (1 != a) {
            a = !0;
            var e = this, o = {
                keyWord: e.data.inputText,
                cityId: e.data.cityCode,
                provinceId: e.data.regionCode,
                cityName: e.data.cityName,
                provinceName: e.data.provinceName,
                page: e.data.pages,
                pageSize: 10,
                sort: e.data.sort,
                type: 1
            };
            0 == e.data.isActive && (delete o.cityId, delete o.provinceId, delete o.cityName, 
            delete o.provinceName), wx.request({
                url: t.zbjUrl + "/little/service/search",
                method: "POST",
                data: o,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    if (wx.hideToast(), a = !1, null != t.data.data) {
                        e.setData({
                            ifData: !0
                        }), t.data.data.totalPage - 1 == e.data.pages && e.setData({
                            loading: !0
                        }), wx.hideToast();
                        var o = e.data.listData;
                        (o = o.concat(t.data.data.list)).forEach(function(t) {
                            t.lessMoney = e.getDecimal(t.amount - t.amountApp, 2), "" != t.amountApp && (t.amountApp = e.getDecimal(t.amountApp, 2)), 
                            "" != t.amount ? t.amount = e.getDecimal(t.amount, 2) : t.amount = 0;
                        }), e.data.totalPage = t.data.data.totalPage, e.setData({
                            listData: o
                        });
                    } else e.setData({
                        ifData: !1
                    });
                }
            });
        }
    },
    highLight: function(t) {
        var a = !0;
        a = "" == t.detail.value, this.setData({
            ifUse: a,
            close: !a
        });
    },
    getValue: function(t) {
        this.setData({
            inputText: t.detail.value
        });
    },
    goTo: function() {
        var t = this;
        try {
            var a = wx.getStorageSync("history");
            e.addHistory(a, t.data.inputText);
        } catch (t) {}
        console.log(t.data.inputText), t.setData({
            listData: [],
            totalPage: 0
        }), this.getData();
    },
    showLoading: function() {
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        });
    },
    deleteValue: function() {
        this.setData({
            inputText: "",
            close: !1,
            ifUse: !0
        });
    },
    filterTab: function(t) {
        var a = this, e = t.currentTarget.dataset.index;
        if (a.data.current != e || 3 == a.data.sort || 4 == a.data.sort) {
            a.data.listData = [], a.data.pages = 0, a.setData({
                scrollTop: 0,
                loading: !1,
                show: !1
            }), 1 == a.data.ifData && a.showLoading(), 2 == e ? (a.data.i = a.data.i + 1, a.data.i > 2 && (a.data.i = 1)) : a.data.i = 0, 
            a.setData({
                current: e,
                tag: this.data.i
            });
            a.data.inputText;
            1 == a.data.tag ? a.data.sort = 3 : 2 == a.data.tag ? a.data.sort = 4 : a.data.sort = e + 1, 
            a.getData();
        }
    },
    getMore: function(t) {
        this.setData({
            showGoTop: !0
        });
        var a = this;
        a.data.pages + 1 < a.data.totalPage ? (a.data.pages++, console.log("我滑动有效一次了"), 
        this.getData()) : this.setData({
            loading: !0
        });
    },
    scroll: function(t) {
        this.setData({
            scrollTop: t.detail.scrollTop
        }), this.data.scrollTop <= 30 && this.setData({
            showGoTop: !1
        });
    },
    goTop: function(t) {
        console.log("点击了"), this.setData({
            scrollTop: 0
        });
    }
});