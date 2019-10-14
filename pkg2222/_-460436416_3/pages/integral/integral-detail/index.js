function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../page2.js")), a = require("../../../utils/data"), o = t(require("../../../utils/requestUtil")), n = t(require("../../../utils/underscore")), u = t(require("../../../utils/util"));

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
        o.default.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanIntegral/Api/getScoreLog.html", {}, function(e) {
            t.onDataHandler(e), t.onSetData(e, 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        o.default.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanIntegral/Api/getScoreLog.html", {
            _p: this.data.page + 1
        }, function(e) {
            t.onDataHandler(e), t.onSetData(e, t.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onDataHandler: function(t) {
        (0, n.default)(t).map(function(t) {
            return t.cTime = u.default.format(1e3 * t.cTime, "yyyy-MM-dd"), t;
        });
    }
});