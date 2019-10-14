var a = getApp();

Page({
    data: {
        array: [ "待付款", "待发货", "待收货", "已完成", "售后/退款" ],
        activeIndex: 0,
        index: 0
    },
    onLoad: function(a) {
        var t = this, e = wx.getStorageSync("url");
        null != a.activeIndex && t.setData({
            activeIndex: a.activeIndex,
            store_id: a.store_id
        }), t.setData({
            url: e
        }), t.refresh();
    },
    refresh: function() {
        var t = this, e = t.data.activeIndex, o = t.data.store_id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoreorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                store_id: o
            },
            success: function(o) {
                console.log(o);
                var s = [], r = [], d = [], n = [], i = [];
                for (var c in o.data) o.data[c].time = a.ormatDate(o.data[c].time), 1 == o.data[c].state ? s.push(o.data[c]) : 2 == o.data[c].state ? r.push(o.data[c]) : 3 == o.data[c].state ? d.push(o.data[c]) : 4 == o.data[c].state ? n.push(o.data[c]) : 5 != o.data[c].state && 6 != o.data[c].state && 7 != o.data[c].state || i.push(o.data[c]);
                console.log(s), 0 == e ? t.setData({
                    order: s
                }) : 1 == e ? t.setData({
                    order: r
                }) : 2 == e ? t.setData({
                    order: d
                }) : 3 == e ? t.setData({
                    order: n
                }) : 4 == e && t.setData({
                    order: i
                }), console.log(s);
            }
        });
    },
    select: function(t) {
        console.log(t);
        var e = this, o = e.data.store_id, s = t.currentTarget.dataset.index;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoreorder&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                store_id: o
            },
            success: function(t) {
                console.log(t);
                var o = [], r = [], d = [], n = [], i = [];
                for (var c in t.data) t.data[c].time = a.ormatDate(t.data[c].time), 1 == t.data[c].state ? o.push(t.data[c]) : 2 == t.data[c].state ? r.push(t.data[c]) : 3 == t.data[c].state ? d.push(t.data[c]) : 4 == t.data[c].state ? n.push(t.data[c]) : 5 != t.data[c].state && 6 != t.data[c].state && 7 != t.data[c].state || i.push(t.data[c]);
                console.log(o), 0 == s ? e.setData({
                    order: o
                }) : 1 == s ? e.setData({
                    order: r
                }) : 2 == s ? e.setData({
                    order: d
                }) : 3 == s ? e.setData({
                    order: n
                }) : 4 == s && e.setData({
                    order: i
                });
            }
        }), e.setData({
            activeIndex: s,
            index: s
        });
    },
    order_info: function(a) {
        console.log(a);
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "mine_order_info?id=" + t,
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
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