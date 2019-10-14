function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = a(require("../../../utils/underscore")), i = a(require("../../../utils/util")), o = (a(require("../../../utils/listener")), 
require("../../../utils/data")), e = a(require("../../../utils/requestUtil"));

getApp();

Page({
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
        wx.showNavigationBarLoading && wx.showNavigationBarLoading(), e.default.get(o.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/getMyTradeLog.html", {}, function(t) {
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
        wx.showNavigationBarLoading && wx.showNavigationBarLoading(), e.default.get(o.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/getMyTradeLog.html", t.default.extend({
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
            return a.cTime = i.default.formatSmartTime(1e3 * a.cTime, "yyyy-MM-dd hh:mm"), a;
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
    }
});