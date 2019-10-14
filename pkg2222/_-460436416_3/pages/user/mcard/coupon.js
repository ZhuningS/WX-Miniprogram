function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = a(require("../../../utils/underscore")), e = a(require("../../../utils/util")), o = (a(require("../../../utils/listener")), 
require("../../../utils/data")), i = a(require("../../../utils/requestUtil"));

getApp();

Page({
    route: null,
    data: {
        isLoaded: !1,
        isEmpty: !1,
        hasMore: !0,
        page: 1,
        data: []
    },
    onLoad: function(a) {
        this.onPullDownRefresh();
    },
    onUnload: function() {},
    onPullDownRefresh: function() {
        var a = this;
        wx.showNavigationBarLoading && wx.showNavigationBarLoading(), i.default.get(o.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/getMyCoupons.html", {}, function(t) {
            a.onSetData(t, 1);
        }, this, {
            completeAfter: function() {
                wx.stopPullDownRefresh(), wx.hideNavigationBarLoading && wx.hideNavigationBarLoading();
            },
            isShowLoading: !1
        });
    },
    onReachBottom: function() {
        var a = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        wx.showNavigationBarLoading && wx.showNavigationBarLoading(), i.default.get(o.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/getMyCoupons.html", t.default.extend({
            _p: this.data.page + 1
        }, this.data.param), function(t) {
            a.onSetData(t, a.data.page + 1);
        }, this, {
            completeAfter: function() {
                wx.stopPullDownRefresh(), wx.hideNavigationBarLoading && wx.hideNavigationBarLoading();
            },
            isShowLoading: !1
        });
    },
    onDataHandler: function(a) {
        (0, t.default)(a).map(function(a) {
            return a.use_start_date = e.default.format(1e3 * a.use_start_time, "yyyy-MM-dd"), 
            a.use_end_date = e.default.format(1e3 * a.use_end_time, "yyyy-MM-dd"), a;
        });
    },
    onSetData: function(a, t) {
        a = a || [], this.onDataHandler(a), this.setData({
            page: void 0 !== t ? t : this.data.page,
            data: 1 === t || void 0 === t ? a : this.data.data.concat(a),
            hasMore: void 0 !== t && 20 === a.length,
            isEmpty: (1 === t || void 0 === t) && 0 === a.length,
            isLoaded: !0
        });
    },
    onNavigateTap: function(a) {
        var t = a.currentTarget.dataset, e = t.url, o = t.type;
        (e || "coupon" !== o) && e && wx.navigateTo({
            url: e
        });
    }
});