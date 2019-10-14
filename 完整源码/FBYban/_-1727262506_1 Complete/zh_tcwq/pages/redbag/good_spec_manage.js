var a = getApp();

Page({
    data: {
        showAdd: !1,
        cindex: -1
    },
    onLoad: function(t) {
        console.log(t);
        var e = this, i = t.storeid;
        e.setData({
            storeid: t.storeid
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagespec&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                shop_id: i,
                uniacid: getApp().globalData.version
            },
            success: function(a) {
                e.setData({
                    spec: a.data
                });
            }
        });
    },
    reLoad: function() {},
    cateInput: function(a) {
        this.cateName = a.detail.value;
    },
    addCate: function() {
        this.setData({
            showAdd: !0
        });
    },
    closeAdd: function() {
        this.setData({
            showAdd: !1
        });
    },
    save: function() {
        var t = this, e = t.cateName;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: e,
                mode: "wx"
            },
            method: "POST",
            success: function(e) {
                if (console.log(e.data), 0 !== e.data) return wx.showModal({
                    title: "提示",
                    content: "你的信息有违禁内容，请重新编辑"
                }), !1;
                t.setData({
                    showAdd: !1
                });
                var i = {
                    spec_name: t.cateName
                };
                t.data.spec.push(i), t.setData({
                    spec: t.data.spec
                }), a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopageguigegenxin&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        shop_id: t.data.storeid,
                        spec_name: t.cateName,
                        guige: 1
                    }
                });
            }
        });
    },
    deleteCate: function(t) {
        var e = this, i = t.currentTarget.dataset.index, c = e.data.spec[i].id;
        e.data.spec.splice(i, 1), e.setData({
            spec: e.data.spec
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageguigegenxin&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                guige: 3,
                id: c
            }
        });
    },
    editInput: function(a) {
        console.log(a), this.eidtCateName = a.detail.value;
    },
    editCate: function(a) {
        var t = a.currentTarget.dataset.index;
        this.setData({
            cindex: t
        });
    },
    updateCate: function(t) {
        var e = this, i = e.data.cindex, c = e.data.spec[i].id;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: content,
                mode: "wx"
            },
            method: "POST",
            success: function(a) {
                if (console.log(a.data), 0 !== a.data) return wx.showModal({
                    title: "提示",
                    content: "你的信息有违禁内容，请重新编辑"
                }), !1;
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageguigegenxin&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                shop_id: e.data.storeid,
                spec_name: e.eidtCateName,
                guige: 2,
                id: c
            }
        }), e.data.spec[i].spec_name = e.eidtCateName, e.setData({
            spec: e.data.spec,
            cindex: -1
        });
    },
    cancelEdit: function() {
        this.eidtCateName = "", this.cateName = "", this.setData({
            cindex: -1
        });
    },
    upCate: function(a) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});