var e = getApp();

Page({
    data: {
        activeIndex: 0,
        index: 0,
        tabs2: [ "商品信息", "商品推荐" ],
        select_spec: !1,
        spec_index_one: 0,
        spec_index: 0,
        spec_index_two: 0,
        money_one: 0,
        money_two: 0,
        money_three: 0,
        num: 1
    },
    onLoad: function(t) {
        var a = this;
        console.log(t);
        var o = t.id, n = t.store_id, s = wx.getStorageSync("url");
        this.setData({
            id: o,
            url: s,
            store_id: n
        }), this.refresh(), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoregoodlist&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                store_id: n
            },
            success: function(e) {
                console.log(e);
                var t = e.data;
                for (var o in t) t[o].lb_imgs = t[o].lb_imgs.split(",")[0];
                a.setData({
                    store_shop: t,
                    shop: t,
                    url: s
                });
            }
        });
    },
    refresh: function(t) {
        var a = this, o = a.data.id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagegoodinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: o
            },
            success: function(e) {
                var t = 0;
                if (e.data.spec.map(function(e) {
                    t += Number(e.num);
                }), a.setData({
                    spec: e.data.spec,
                    goodNum2: t
                }), e.data.good.imgs = e.data.good.imgs.split(","), e.data.good.lb_imgs = e.data.good.lb_imgs.split(","), 
                0 == e.data.spec.length) {
                    n = [];
                    a.setData({
                        goods_cost: e.data.good.goods_cost,
                        store_good: e.data.good,
                        result: n
                    });
                } else {
                    var o = {}, n = [];
                    e.data.spec.forEach(function(e) {
                        var t = e.spec_id + "_" + e.spec_name;
                        void 0 === o[t] && (o[t] = []), o[t].push(e);
                    });
                    for (var s = Object.keys(o), i = 0; i < s.length; i++) {
                        var d = s[i].split("_");
                        n.push({
                            spec_id: d[0],
                            spec_name: d[1],
                            value: o[s[i]]
                        });
                    }
                    console.log(n);
                    var c = Number(e.data.good.goods_cost), r = 0;
                    if (1 == n.length) {
                        var u = Number(n[0].value[0].money), l = 0, g = 0;
                        a.setData({
                            money1: u,
                            money2: l,
                            money3: g
                        });
                    } else if (2 == n.length) {
                        var u = Number(n[0].value[0].money), l = Number(n[1].value[0].money);
                        console.log(u, l);
                        g = 0;
                        a.setData({
                            money1: u,
                            money2: l,
                            money3: g
                        });
                    } else if (3 == n.length) {
                        var u = Number(n[0].value[0].money), l = Number(n[1].value[0].money), g = Number(n[2].value[0].money);
                        a.setData({
                            money1: u,
                            money2: l,
                            money3: g
                        });
                    }
                    r = u + l + g, console.log(r);
                    var m = c.toFixed(2);
                    console.log(m), a.setData({
                        result: n,
                        goods_cost: m,
                        price: c,
                        store_good: e.data.good
                    });
                }
            }
        });
    },
    add: function(e) {
        wx.switchTab({
            url: "../logs/logs",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    liji: function(e) {
        0 == this.data.store_good.goods_num ? wx.showToast({
            title: "没有库存了",
            image: "../image/warn.png"
        }) : this.setData({
            select_spec: !0
        });
    },
    add_num: function(e) {
        console.log(1);
        var t = this, a = t.data.num, o = t.data.store_good.goods_num;
        a < o ? t.setData({
            num: a + 1
        }) : (wx.showToast({
            title: "库存不足",
            icon: "",
            image: "../image/warn.png"
        }), t.setData({
            num: o
        }));
    },
    subtraction: function(e) {
        var t = this, a = t.data.num;
        (a -= 1) > 1 ? t.setData({
            num: a
        }) : t.setData({
            num: 1
        });
    },
    tabClick: function(e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    order: function(e) {
        console.log();
        var t = this, a = t.data.result, o = t.data.store_good, n = t.data.store_id, s = t.data.goods_cost, i = t.data.num;
        if (console.log(n), 0 == a.length) wx.redirectTo({
            url: "place_order?id=" + o.id + "&store_id=" + n + "&price=" + s + "&num=" + i,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }); else {
            if (1 == a.length) var d = a[0].value[t.data.spec_index].name, c = a[0].value[t.data.spec_index].id, r = 0, u = 0; else if (2 == a.length) var d = a[0].value[t.data.spec_index].name, c = a[0].value[t.data.spec_index].id, l = a[1].value[t.data.spec_index_one].id, r = a[1].value[t.data.spec_index_one].name, u = 0; else if (3 == a.length) var d = a[0].value[t.data.spec_index].name, r = a[1].value[t.data.spec_index_one].name, u = a[2].value[t.data.spec_index_two].name, c = a[0].value[t.data.spec_index].id, l = a[1].value[t.data.spec_index_one].id, g = a[2].value[t.data.spec_index_two].id;
            wx.redirectTo({
                url: "place_order?id=" + o.id + "&store_id=" + n + "&price=" + s + "&num=" + i + "&name1=" + d + "&name2=" + r + "&name3=" + u + "&spec_id1=" + c + "&spec_id2=" + l + "&spec_id3=" + g,
                success: function(e) {},
                fail: function(e) {},
                complete: function(e) {}
            });
        }
    },
    select_spec: function(e) {
        var t = this.data.select_spec;
        0 == t ? this.setData({
            select_spec: !0
        }) : this.setData({
            select_spec: !1
        });
    },
    spec_index: function(e) {
        this.data.price;
        var t = e.currentTarget.dataset.index, a = Number(e.currentTarget.dataset.price), o = this.data.money2 + this.data.money3 + a;
        console.log(t), this.setData({
            spec_index: t,
            money1: Number(a),
            goods_cost: o.toFixed(2)
        });
    },
    spec_index_one: function(e) {
        console.log(e);
        this.data.price;
        var t = e.currentTarget.dataset.index, a = Number(e.currentTarget.dataset.price), o = this.data.money1 + this.data.money3 + a;
        this.setData({
            spec_index_one: t,
            money2: Number(a),
            goods_cost: o.toFixed(2)
        });
    },
    spec_index_two: function(e) {
        console.log(e);
        this.data.price;
        var t = e.currentTarget.dataset.index, a = Number(e.currentTarget.dataset.price), o = this.data.money2 + this.data.money1 + a;
        this.setData({
            spec_index_two: t,
            money3: a,
            goods_cost: o.toFixed(2)
        });
    },
    goods_info: function(e) {
        var t = this.data.id, a = e.currentTarget.id;
        wx.navigateTo({
            url: "good_info?id=" + a + "&store_id=" + t,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});