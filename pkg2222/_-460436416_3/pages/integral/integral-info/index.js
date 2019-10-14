function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../page2.js")), a = require("../../../utils/data"), o = e(require("../../../utils/requestUtil")), n = (e(require("../../../utils/underscore")), 
e(require("../../../utils/util")), require("../../../wxParse/wxParse.js"));

(0, t.default)({
    data: {
        data: [],
        isEmpty: !1,
        hasMore: !0,
        isLoading: !1,
        page: 1
    },
    onLoad: function(e) {
        this.startPullDownRefresh();
    },
    onShow: function() {
        this.onPullDownRefresh(1);
    },
    onPullDownRefresh: function(e) {
        var t = this, r = this;
        e = e || !1, o.default.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanIntegral/Api/getIntegralRule.html", {}, function(e) {
            console.log(e), t.onSetData(e, 1), t.setData(e), n.wxParse("content", "html", e.integral_rule, r);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: e
        });
    },
    onReachBottom: function() {
        var e = this, t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        o.default.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanIntegral/Api/getIntegralRule.html", {
            _p: this.data.page + 1
        }, function(a) {
            e.onSetData(a, e.data.page + 1), e.setData(a), n.wxParse("content", "html", a.integral_rule, t);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    }
});