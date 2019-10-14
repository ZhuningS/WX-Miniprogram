var t = getApp();

Page({
    data: {
        array: [ "全部", "新品推荐", "热门商品" ],
        activeindex: 0,
        index: 0
    },
    onLoad: function(t) {
        var e = this;
        console.log(t);
        var o = t.store_id;
        e.setData({
            store_id: o
        }), e.refresh();
    },
    refresh: function(e) {
        var o = this, a = wx.getStorageSync("url"), i = (o.data.activeindex, o.data.store_id);
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoregoodlist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                store_id: i
            },
            success: function(t) {
                console.log(t);
                var e = t.data;
                for (var i in e) e[i].lb_imgs = e[i].lb_imgs.split(",")[0];
                o.setData({
                    store_shop: e,
                    shop: e,
                    url: a
                });
            }
        });
    },
    select: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index, o = this.data.shop;
        if (this.setData({
            activeindex: e,
            index: e
        }), 2 == e) {
            o = o.sort(function(t, e) {
                return (t = Number(t.sales)) > (e = Number(e.sales)) ? -1 : t < e ? 1 : 0;
            });
            this.setData({
                store_shop: o
            });
        }
        1 == e && this.refresh(), 0 == e && this.refresh();
    },
    modify: function(t) {
        console.log(t);
        var e = this, o = t.currentTarget.dataset.id, a = e.data.store_id;
        wx.navigateTo({
            url: "modify?id=" + o + "&store_id=" + a,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    goods_info: function(t) {
        console.log(t);
        var e = this.data.store_id, o = t.currentTarget.id;
        wx.navigateTo({
            url: "good_info?id=" + o + "&store_id=" + e,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    onReady: function() {},
    onShow: function() {
        this.refresh();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.refresh(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});