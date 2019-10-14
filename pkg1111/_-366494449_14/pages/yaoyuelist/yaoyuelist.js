var t = getApp(), a = (require("../../utils/util.js"), require("../../utils/ajax.js")), e = require("../../utils/common.js"), i = require("../../common/PageBase.js");

Page(e.extendPage(i, {
    data: {
        dataLoaded: !1,
        userInfo: {},
        currentPage: 1,
        loadingShow: !1,
        isLogin: !1
    },
    onLoad: function(a) {
        var i = this;
        e.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var a = i, s = t.getTabbar(), n = e.isShowtab("active");
                a.setData({
                    isLogin: !!t.getUid(),
                    userInfo: t.getUInfo(),
                    tabbar: s,
                    isShowTab: n
                }), a._getList(1);
            }
        });
    },
    onPullDownRefresh: function() {
        var t = this;
        this._getList(1, function() {
            t.setData({
                currentPage: 1
            }), wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        this.data.currentPage + 1 <= this.data.endpage && (this.setData({
            loadingShow: !0
        }), this._getList(this.data.currentPage + 1, function() {
            var a = t.data.currentPage;
            t.setData({
                currentPage: a + 1,
                loadingShow: !1
            });
        }));
    },
    _getList: function(e, i) {
        var s = this;
        a.G({
            url: "/apis/home/active.spread/fetch",
            data: {
                uid: t.getUid(),
                card_id: t.getCardid(),
                page: e || "",
                size: 5
            },
            success: function(t) {
                console.log(t);
                var a = Math.ceil(t.data.total / t.data.size), n = t.data.item, o = s.data.actList || [];
                s.setData({
                    dataLoaded: !0,
                    endpage: a,
                    actList: 1 == e ? n : o.concat(n)
                }), i && i();
            }
        });
    }
}));