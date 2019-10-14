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
        slide: [ {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513057315830&di=28c50097b1b069b2de68f70d625df8e2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa8014c086e061d95cb1b561170f40ad162d9cabe.jpg"
        }, {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513057315830&di=28c50097b1b069b2de68f70d625df8e2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa8014c086e061d95cb1b561170f40ad162d9cabe.jpg"
        } ],
        store: [ {
            store_name: "王呵呵"
        }, {
            store_name: "赵四"
        } ]
    },
    swiperChange: function(t) {
        this.setData({
            swiperCurrent: t.detail.current
        });
    },
    tabClick: function(t) {
        this.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.id
        });
    },
    onLoad: function(e) {
        var a = this, i = wx.getStorageSync("url");
        a.setData({
            url: i
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoretype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log(t);
                var e = t.data;
                e.length <= 5 ? a.setData({
                    height: 130
                }) : e.length > 5 && a.setData({
                    height: 260
                });
                for (var i = [], n = 0, s = e.length; n < s; n += 10) i.push(e.slice(n, n + 10));
                console.log(i), a.setData({
                    nav: i
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.reload(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});