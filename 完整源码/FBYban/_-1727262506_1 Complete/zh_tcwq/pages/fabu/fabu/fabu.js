var a = getApp();

Page({
    data: {
        index: 0,
        base: !1
    },
    onLoad: function(t) {
        var e = this;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageurl3&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(a) {
                console.log(a), wx.setStorageSync("url3", a.data), e.setData({
                    url3: a.data
                });
            }
        }), e.reload();
    },
    reload: function(t) {
        var e = this, n = wx.getStorageSync("System");
        console.log(n);
        var o = wx.getStorageSync("url");
        e.setData({
            url: o,
            pt_name: n.pt_name
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(a) {
                var t = a.data;
                e.setData({
                    nav: t
                });
            }
        });
    },
    settled: function(a) {
        wx.navigateTo({
            url: "../../settled/settled",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    formid_one: function(t) {
        console.log("搜集第一个formid"), console.log(t), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesaveformid&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: wx.getStorageSync("users").id,
                form_id: t.detail.formId,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {}
        });
    },
    bindPickerChange: function(a) {
        console.log(a);
        var t = this, e = t.data.id, n = a.detail.value, o = t.data.nav[t.data.index].array[n];
        for (var i in t.data.nav[t.data.index].array) if (o == t.data.nav[t.data.index].arrays[i].name) var d = t.data.nav[t.data.index].arrays[i].id, r = t.data.nav[t.data.index].arrays[i].type_id, s = t.data.nav[t.data.index].money;
        console.log(t.data.nav[t.data.index]), wx.navigateTo({
            url: "../edit/edit?info=" + o + "&id=" + e + "&type_id=" + d + "&money=" + s + "&type2_id=" + r
        });
    },
    edit: function(t) {
        var e = this;
        console.log(t);
        var n = t.currentTarget.dataset.index, o = t.currentTarget.dataset.id, i = e.data.nav[n].money, d = [];
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetype2&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: o
            },
            success: function(a) {
                console.log(a), 0 != a.data.length ? (a.data.map(function(a) {
                    var t = {};
                    t = a.name, d.push(t);
                }), console.log(d), e.setData({
                    array: d,
                    arrays: a.data,
                    base: !0,
                    type_id: o,
                    money: i
                })) : wx.navigateTo({
                    url: "../edit/edit?id=" + e.data.id + "&type_id=" + o + "&money=" + i + "&type2_id=0"
                });
            }
        });
    },
    cancel: function(a) {
        this.setData({
            base: !1
        });
    },
    selected: function(a) {
        var t = this, e = t.data.arrays, n = a.currentTarget.id, o = t.data.type_id, i = e[n].id, d = e[n].name, r = t.data.money;
        t.setData({
            base: !1
        }), wx.navigateTo({
            url: "../edit/edit?type2_id=" + i + "&type_id=" + o + "&money=" + r + "&info=" + d
        });
    },
    onReady: function() {},
    onShow: function() {
        this.onLoad();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.onLoad(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});