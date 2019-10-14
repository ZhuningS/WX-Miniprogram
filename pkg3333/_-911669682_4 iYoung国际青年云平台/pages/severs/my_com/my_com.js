function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/underscore")), a = t(require("../../../utils/requestUtil")), n = t(require("../../../utils/util")), o = t(require("../urls"));

Page({
    data: {
        isLoaded: !1,
        isEmpty: !1,
        hasMore: !0,
        page: 1,
        data: [],
        tabIndex: 0
    },
    onLoad: function(t) {
        this.onPullDownRefresh();
    },
    onPullDownRefresh: function() {
        var t = this, e = [ o.default.comment.myLists, o.default.comment.replaysMe ][this.data.tabIndex];
        a.default.get(e, {}, function(e) {
            t.onDataHandler(e), t.onSetData(e, 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        var n = [ o.default.comment.myLists, o.default.comment.replaysMe ][this.data.tabIndex];
        a.default.get(n, e.default.extend({
            _p: this.data.page + 1
        }), function(e) {
            t.onDataHandler(e), t.onSetData(e, t.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(t) {
        (0, e.default)(t).map(function(t) {
            return t.create_time = n.default.formatSmartTime(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), 
            t;
        });
    },
    onSetData: function(t, e) {
        t = t || [], this.setData({
            page: void 0 !== e ? e : this.data.page,
            data: 1 === e || void 0 === e ? t : this.data.data.concat(t),
            hasMore: void 0 !== e && t.length >= 20,
            isEmpty: (1 === e || void 0 === e) && 0 === t.length,
            isLoaded: !0
        });
    },
    onNavigateTap: function(t) {
        var e = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: e
        });
    },
    onTabTap: function(t) {
        var e = t.currentTarget.dataset.index;
        e != this.data.tabIndex && (this.setData({
            tabIndex: e
        }), this.onPullDownRefresh());
    }
});