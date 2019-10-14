var t = getApp();

Page({
    data: {
        array: [ "全部", "新品上架", "热门商品" ],
        activeindex: 0,
        index: 0
    },
    onLoad: function(t) {
        var e = this, o = t.store_id;
        e.setData({
            store_id: o
        }), e.refresh();
    },
    refresh: function(e) {
        var o = this, a = wx.getStorageSync("url"), i = o.data.activeindex, n = o.data.store_id;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoregoodlist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                store_id: n
            },
            success: function(t) {
                console.log(t);
                var e = t.data;
                for (var n in e) e[n].lb_imgs = e[n].lb_imgs.split(",")[0];
                var s = t.data;
                s.sort(function(t, e) {
                    return Date.parse(e.time) - Date.parse(t.time);
                }), console.log(s), 0 == i ? o.setData({
                    store_shop: e,
                    url: a
                }) : 1 == i ? o.setData({
                    store_shop: s,
                    url: a
                }) : 2 == i && o.setData({
                    store_shop: s,
                    url: a
                });
            }
        });
    },
    select: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index;
        this.setData({
            activeindex: e,
            index: e
        }), this.refresh();
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
    shelves: function(e) {
        var o = this, a = e.currentTarget.dataset.id;
        console.log(a), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageupgood&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                good_id: a
            },
            success: function(t) {
                console.log(t), 1 == t.data && (wx.showToast({
                    title: "上架成功",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {}
                }), setTimeout(function() {
                    o.refresh();
                }, 2e3)), 2 == t.data && wx.showToast({
                    title: "商品已经上架",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {}
                });
            }
        });
    },
    shelf: function(e) {
        var o = this, a = e.currentTarget.dataset.id;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagedowngood&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                good_id: a
            },
            success: function(t) {
                console.log(t), 1 == t.data && (wx.showToast({
                    title: "下架成功",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {}
                }), setTimeout(function() {
                    o.refresh();
                }, 2e3)), 2 == t.data && wx.showToast({
                    title: "商品已经下架",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {}
                });
            }
        });
    },
    delgood: function(e) {
        var o = this, a = e.currentTarget.dataset.id;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagedelgood&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                good_id: a
            },
            success: function(t) {
                console.log(t), wx.showToast({
                    title: "删除成功",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {}
                }), setTimeout(function() {
                    o.refresh();
                }, 2e3);
            }
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