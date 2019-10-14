require("../../../utils/util.js");

var a = require("../../../utils/ajax.js"), t = require("../../../utils/common.js"), e = require("../../../common/PageBase.js");

getApp();

Page(t.extendPage(e, {
    data: {},
    onLoad: function(a) {
        var e = this, i = a.page_type || 0, n = a.page_title || "", o = a.sid || 0;
        this.setData({
            page_title: n,
            page_type: i,
            sid: o
        }), t.initApp({
            extSuc: function() {},
            loginSuc: function() {
                e.getIndexData(i, o);
            }
        });
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.getIndexData(function() {
            wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    getIndexData: function(t, e, i) {
        var n = this;
        a.G({
            url: "/apis/home/template.page/get",
            data: {
                page_type: t,
                sid: e
            },
            success: function(a) {
                n.setData({
                    dataLoaded: !0,
                    page_name: a.data.page_name,
                    page_content: a.data.page_content
                }), wx.setNavigationBarTitle({
                    title: a.data.page_name
                }), i && i();
            },
            fail: function() {
                i && i();
            }
        });
    }
}));