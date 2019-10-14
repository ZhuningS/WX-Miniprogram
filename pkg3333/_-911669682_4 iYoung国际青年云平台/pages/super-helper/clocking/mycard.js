function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/dg.js")), a = t(require("../../../utils/data.js")), i = t(require("../../../utils/requestUtil.js")), n = t(require("../../../utils/util.js")), o = t(require("../../../utils/underscore.js")), s = a.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

Page({
    data: {
        isEmpty: !1,
        hasMore: !0,
        page: 1
    },
    onLoad: function(t) {
        var e = this;
        n.default.trySyncWechatInfo(function(t) {
            e.setData({
                userInfo: t
            });
        });
    },
    onShow: function() {
        this.onPullDownRefresh(1);
    },
    onNavigateTap: function(t) {
        e.default.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    onPullDownRefresh: function(t) {
        t = t || !1;
        var a = s + "/SignedApi/lists.html";
        i.default.get(a, {}, function(t) {
            this.onDataHandler(t), this.onSetData(t, 1);
        }, this, {
            completeAfter: e.default.stopPullDownRefresh,
            isShowLoading: t
        });
    },
    onReachBottom: function() {
        if (!this.data.hasMore) return console.log("没有更多了..."), void e.default.stopPullDownRefresh();
        this.page = this.page || 2;
        var t = s + "/SignedApi/lists.html";
        i.default.get(t, {
            _p: this.data.page + 1
        }, function(t) {
            this.onDataHandler(t), this.onSetData(t, this.data.page + 1);
        }, this, {
            completeAfter: e.default.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(t) {
        (0, o.default)(t).map(function(t) {
            var e = new Date().getTime() / 1e3;
            t.start_time = (t.start_time + "").split(".", 2).join(":"), t.end_time = (t.end_time + "").split(".", 2).join(":");
            var a = new Date(1e3 * t.begin_time);
            return a.setHours(0), a.setMinutes(0), a.setSeconds(0), a = a.getTime() / 1e3, t.signedDay = Math.ceil((e - a) / 86400 % t.cycle), 
            t.begin_time = n.default.format(1e3 * t.begin_time, "yyyy-MM-dd"), t;
        });
    },
    onSetData: function(t, e) {
        t = t || [], this.setData({
            page: void 0 !== e ? e : this.data.page,
            data: 1 === e || void 0 === e ? t : this.data.data.concat(t),
            hasMore: void 0 !== e && 20 === t.length,
            isEmpty: (1 === e || void 0 === e) && 0 === t.length
        });
    }
});