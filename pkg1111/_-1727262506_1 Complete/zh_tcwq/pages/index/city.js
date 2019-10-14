var e = require("../../utils/city.js"), t = getApp();

Page({
    data: {
        searchLetter: [],
        showLetter: "",
        winHeight: 0,
        tHeight: 0,
        bHeight: 0,
        startPageY: 0,
        cityList: [],
        isShowLetter: !1,
        scrollTop: 0,
        city: "",
        activeIndex: "A",
        index: "A",
        result: [],
        hot_city: [ {
            name: "热门城市",
            city: [ {
                name: "北京",
                key: "热门"
            }, {
                name: "上海",
                key: "热门"
            }, {
                name: "广州",
                key: "热门"
            }, {
                name: "深圳",
                key: "热门"
            }, {
                name: "成都",
                key: "热门"
            }, {
                name: "重庆",
                key: "热门"
            }, {
                name: "天津",
                key: "热门"
            }, {
                name: "杭州",
                key: "热门"
            }, {
                name: "南京",
                key: "热门"
            }, {
                name: "苏州",
                key: "热门"
            }, {
                name: "武汉",
                key: "热门"
            }, {
                name: "西安",
                key: "热门"
            } ]
        } ]
    },
    onLoad: function(a) {
        var n = this;
        console.log(wx.getStorageSync("users").id), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagegetcity&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: wx.getStorageSync("users").id
            },
            success: function(e) {
                console.log(e);
                for (var t in e.data) e.data[t].cityname = e.data[t].cityname.substr(0, e.data[t].cityname.length - 1);
                n.setData({
                    search_ji: e.data
                }), 0 != e.data.length ? wx.getSystemInfo({
                    success: function(e) {
                        n.setData({
                            windowHeight: e.windowHeight - 136,
                            search_top: 146
                        });
                    }
                }) : wx.getSystemInfo({
                    success: function(e) {
                        n.setData({
                            windowHeight: e.windowHeight - 70,
                            search_top: 80
                        });
                    }
                });
            }
        });
        e.searchLetter;
        var s = e.City[0];
        console.log(s);
        var i = [];
        for (var c in s) i[c] = s[c][0].city;
        console.log(i);
        var o = [];
        for (var r in i) for (var l in i[r]) o.push(i[r][l]);
        console.log(o);
        var g = [];
        o.map(function(e) {
            var t = {};
            t = e.name, g.push(t);
        }), console.log(g), n.setData({
            citys: s,
            sz: g
        });
    },
    refresh: function(e) {
        var t = this, a = t.data.value, n = t.data.sz;
        if ("" != a) s = n.filter(function(e) {
            return e.indexOf(a) >= 0;
        }); else var s = [];
        t.setData({
            result: s
        });
    },
    selectMenu: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.itemIndex;
        this.setData({
            toView: t,
            index: t,
            activeIndex: t
        });
    },
    select_city: function(e) {
        var a = e.currentTarget.dataset.city + "市";
        wx.setStorageSync("city", a), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesavehotcity&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                cityname: a,
                user_id: wx.getStorageSync("users").id
            },
            success: function(e) {
                console.log(e);
            }
        });
        var n = getCurrentPages(), s = (n[n.length - 1], n[n.length - 2]);
        s.setData({
            city: a,
            page: 1,
            seller: []
        }), s.reload(), s.refresh(), s.seller(), wx.setStorageSync("city_type", 1), wx.navigateBack({
            url: "index"
        });
    },
    select_citys: function(e) {
        var a = e.currentTarget.dataset.city + "市";
        wx.setStorageSync("city", a), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesavehotcity&acid=" + getApp().globalData.version + "&user_id=2&cityname=湛江市",
            cachetime: "0",
            data: {
                cityname: a,
                user_id: wx.getStorageSync("users").id
            },
            success: function(e) {
                console.log(e);
            }
        });
        var n = getCurrentPages(), s = (n[n.length - 1], n[n.length - 2]);
        s.setData({
            city: a,
            page: 1,
            seller: []
        }), s.reload(), s.refresh(), s.seller(), wx.setStorageSync("city_type", 1), wx.navigateBack({
            url: "index"
        });
    },
    search: function(e) {
        console.log(e);
        var t = e.detail.value;
        this.setData({
            value: t
        }), this.refresh();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "title",
            desc: "desc",
            path: "path"
        };
    }
});