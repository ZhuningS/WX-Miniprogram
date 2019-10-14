function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../page2.js")), a = require("../../../utils/data"), o = t(require("../../../utils/requestUtil"));

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
        o.default.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/CardApi/getInfo.html", {}, function(e) {
            t.setData(e);
        }, this, {
            completeAfter: function() {
                o.default.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanIntegral/Api/getGoodsList.html", {}, function(e) {
                    t.onSetData(e, 1);
                }, t, {
                    completeAfter: wx.stopPullDownRefresh
                });
            }
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        o.default.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanIntegral/Api/getGoodsList.html", {
            _p: this.data.page + 1
        }, function(e) {
            t.onSetData(e, t.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onShareAppMessage: function() {
        return {
            title: "积分商城",
            path: "pages/integral/integral-mall/index"
        };
    }
});