var t = getApp();

Page({
    data: {
        tabs: [ "全部", "审核中", "已通过", "已拒绝" ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 15
    },
    tabClick: function(t) {
        console.log(t), this.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.id
        });
    },
    onLoad: function(a) {
        var e = this, o = wx.getStorageSync("url3");
        e.setData({
            url3: o
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetop&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                acid: getApp().globalData.version
            },
            success: function(t) {
                console.log(t), e.setData({
                    renew: t.data
                });
            }
        }), e.reload();
    },
    reload: function(a) {
        var e = this, o = wx.getStorageSync("users").id, n = wx.getStorageSync("url"), i = wx.getStorageSync("users").img;
        console.log(i), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemypost&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: o
            },
            success: function(t) {
                console.log(t);
                var a = [], o = [], s = [], c = [];
                for (var l in t.data) t.data[l].time = e.ormatDate(t.data[l].time).slice(0, 16), 
                t.data[l].img = t.data[l].img.split(",").slice(0, 4), c.push(t.data[l]), 1 == t.data[l].state && null != t.data[l].type_name ? a.push(t.data[l]) : 2 == t.data[l].state && null != t.data[l].type_name ? o.push(t.data[l]) : 3 == t.data[l].state && null != t.data[l].type_name && s.push(t.data[l]);
                e.setData({
                    slide: c,
                    user_img: i,
                    url: n,
                    audit: a,
                    adopt: o,
                    refuse: s
                });
            }
        });
    },
    see: function(t) {
        var a = this;
        console.log(t), console.log(a.data);
        var e = a.data.slide, o = t.currentTarget.dataset.id;
        for (var n in e) if (e[n].id == o) var i = e[n];
        console.log(i), wx.navigateTo({
            url: "../infodetial/infodetial?id=" + i.id,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    ormatDate: function(t) {
        function a(t, a) {
            for (var e = "" + t, o = e.length, n = "", i = a; i-- > o; ) n += "0";
            return n + e;
        }
        var e = new Date(1e3 * t);
        return e.getFullYear() + "-" + a(e.getMonth() + 1, 2) + "-" + a(e.getDate(), 2) + " " + a(e.getHours(), 2) + ":" + a(e.getMinutes(), 2) + ":" + a(e.getSeconds(), 2);
    },
    bianji: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.id;
        console.log(a), wx.navigateTo({
            url: "modify?id=" + a,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    cancel: function(a) {
        var e = this;
        wx.showModal({
            title: "提示",
            content: "是否删除帖子",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定",
            success: function(o) {
                if (o.confirm) {
                    console.log("用户点击确定");
                    var n = a.currentTarget.dataset.id;
                    t.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagedelpost&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        data: {
                            id: n
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data && e.reload();
                        }
                    });
                } else o.cancel && console.log("用户点击取消");
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    qxzd: function() {
        this.setData({
            iszd: !1
        });
    },
    zdxf: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.id;
        this.setData({
            iszd: !0,
            postid: a
        });
    },
    selected: function(a) {
        console.log(a);
        var e = this, o = a.currentTarget.id, n = wx.getStorageSync("openid"), i = (wx.getStorageSync("users").id, 
        e.data.renew), s = i[o].money, c = i[o].days, l = this.data.postid, r = i[o].type;
        e.setData({
            iszd: !1
        }), console.log(s, c, l), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                openid: n,
                money: s
            },
            success: function(a) {
                console.log(a), wx.requestPayment({
                    timeStamp: a.data.timeStamp,
                    nonceStr: a.data.nonceStr,
                    package: a.data.package,
                    signType: a.data.signType,
                    paySign: a.data.paySign,
                    success: function(t) {
                        wx.showModal({
                            title: "提示",
                            content: "支付成功",
                            showCancel: !1
                        }), e.setData({
                            is_dq: !1,
                            iszd: !1
                        });
                    },
                    complete: function(a) {
                        console.log(a), "requestPayment:fail cancel" == a.errMsg && wx.showToast({
                            title: "取消支付",
                            icon: "loading",
                            duration: 1e3
                        }), "requestPayment:ok" == a.errMsg && (t.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetzxf&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                id: l,
                                type: r
                            },
                            success: function(t) {
                                console.log(t);
                            }
                        }), setTimeout(function() {
                            e.onLoad(e.data.options);
                        }, 1e3));
                    }
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