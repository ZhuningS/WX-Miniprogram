var t = getApp();

Page({
    inputValue: "",
    data: {
        page: 1,
        refresh_top: !1,
        seller: [],
        typeid: "",
        infortype: [ {
            id: 0,
            type_name: "推荐"
        } ],
        activeIndex: 0,
        swiperCurrent: 0,
        indicatorDots: !1,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        slide: [ {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513057315830&di=28c50097b1b069b2de68f70d625df8e2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa8014c086e061d95cb1b561170f40ad162d9cabe.jpg"
        }, {
            img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=570437944,358180613&fm=27&gp=0.jpg"
        } ]
    },
    swiperChange: function(t) {
        this.setData({
            swiperCurrent: t.detail.current
        });
    },
    onLoad: function(e) {
        var a = wx.getStorageSync("url3");
        console.log(e.name), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: wx.getStorageSync("color"),
            animation: {
                duration: 0,
                timingFunc: "easeIn"
            }
        }), e.name && wx.setNavigationBarTitle({
            title: e.name
        }), this.setData({
            titlename: e.name,
            url3: a
        });
        var o = this;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagevideotype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log(t, o.data.infortype);
                var e = o.data.infortype.concat(t.data);
                console.log(e), o.setData({
                    infortype: e
                });
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageurl3&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                o.setData({
                    url: t.data
                });
            }
        }), this.seller(this.data.typeid);
    },
    tabClick: function(t) {
        var e = this;
        if (console.log(t.currentTarget.id, t.currentTarget.dataset.index), 0 == t.currentTarget.dataset.index) a = ""; else var a = t.currentTarget.id;
        this.setData({
            page: 1,
            refresh_top: !1,
            seller: [],
            activeIndex: t.currentTarget.dataset.index,
            typeid: a
        }), setTimeout(function() {
            e.seller(a);
        }, 300);
    },
    seller: function(e) {
        console.log("typeid为", e);
        var a = this, o = wx.getStorageSync("city"), i = a.data.page, n = a.data.seller;
        console.log(o), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagevideolist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                type_id: e,
                page: i,
                pagesize: 5,
                cityname: o
            },
            success: function(t) {
                console.log(t.data), t.data.length < 5 ? a.setData({
                    refresh_top: !0
                }) : a.setData({
                    refresh_top: !1,
                    page: i + 1
                }), n = n.concat(t.data), n = function(t) {
                    for (var e = [], a = 0; a < t.length; a++) -1 == e.indexOf(t[a]) && e.push(t[a]);
                    return e;
                }(n), console.log(n), a.setData({
                    seller: n
                });
            }
        });
    },
    onReady: function(t) {
        this.videoContext = wx.createVideoContext("myVideo");
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        console.log("上拉触底"), 0 == this.data.refresh_top ? this.seller(this.data.typeid) : console.log("没有更多了");
    },
    onShareAppMessage: function() {
        var t = this.data.titlename;
        return console.log(t), {
            title: t,
            success: function(t) {},
            fail: function(t) {}
        };
    }
});