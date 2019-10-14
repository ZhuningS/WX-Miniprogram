function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../page2.js")), a = require("../../../utils/data"), n = t(require("../../../utils/requestUtil")), o = t(require("../../../utils/underscore")), r = t(require("../../../utils/util"));

(0, e.default)({
    data: {
        data: [],
        isEmpty: !1,
        hasMore: !0,
        isLoading: !1,
        page: 1
    },
    onLoad: function(t) {
        this.startPullDownRefresh();
    },
    onPullDownRefresh: function() {
        var t = this;
        n.default.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanIntegral/Api/getOrderList.html", {}, function(e) {
            t.onDataHandler(e), t.onSetData(e, 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        n.default.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanIntegral/Api/getOrderList.html", {
            _p: this.data.page + 1
        }, function(e) {
            t.onDataHandler(e), t.onSetData(e, 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onDataHandler: function(t) {
        (0, o.default)(t).map(function(t) {
            return t.end_time = r.default.formatSmartTime(1e3 * t.end_time, "yyyy年MM月dd日"), 
            t;
        });
    },
    onCopyTap: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.data[e];
        wx.setClipboardData({
            data: a.key,
            success: function(t) {
                wx.showToast({
                    title: "已复制！"
                });
            }
        });
    }
});