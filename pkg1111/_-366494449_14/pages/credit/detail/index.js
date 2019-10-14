var e = getApp(), t = (require("../../../utils/util.js"), require("../../../utils/common.js")), a = require("../../../common/PageBase.js"), i = require("../../../utils/ajax.js");

Page(t.extendPage(a, {
    data: {
        dataLoaded: !1,
        score: [],
        rule: []
    },
    onLoad: function(e) {
        var a = this;
        t.initApp({
            loginSuc: function() {
                a._getList(), wx.getStorage({
                    key: "rank_rule",
                    success: function(e) {
                        a.setData({
                            rule: e.data
                        });
                    }
                });
            }
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this._getList(function() {
            wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {},
    _getList: function(t) {
        var a = this;
        i.G({
            url: "/apis/home/user.index/score_record",
            data: {
                uid: e.getUid(),
                page: 1,
                size: 9999
            },
            success: function(e) {
                var i = e.data.item;
                a.setData({
                    dataLoaded: !0,
                    score: i
                }), t && t();
            },
            fail: function() {
                t && t();
            }
        });
    },
    _openruleMask: function() {
        this.setData({
            rulemask: !0
        });
    },
    _closeMask: function() {
        this.setData({
            rulemask: !1
        });
    }
}));