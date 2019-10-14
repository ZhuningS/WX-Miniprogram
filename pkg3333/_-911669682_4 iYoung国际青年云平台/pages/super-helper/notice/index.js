function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/dg.js")), a = t(require("../../../utils/data.js")), i = t(require("../../../utils/requestUtil.js")), n = t(require("../../../utils/underscore.js")), o = t(require("../../../utils/util.js")), s = a.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

Page({
    params: {},
    data: {
        tabBar: "released",
        isEmpty: !1,
        hasMore: !0,
        page: 1
    },
    onLoad: function(t) {
        var e = this;
        o.default.trySyncWechatInfo(function(t) {
            e.setData({
                userInfo: t
            });
        }), this.params = {
            type: t.type || 0
        };
    },
    onShow: function() {
        this.onPullDownRefresh(1);
    },
    onPullDownRefresh: function(t) {
        t = t || !1;
        var a = s + "/NoticeApi/lists.html";
        i.default.get(a, n.default.extend(this.params, {
            _p: 1
        }), function(t) {
            this.onDataHandler(t), this.onSetData(t, 1);
        }, this, {
            completeAfter: e.default.stopPullDownRefresh,
            isShowLoading: t
        });
    },
    onReachBottom: function() {
        if (!this.data.hasMore) return console.log("没有更多了..."), void e.default.stopPullDownRefresh();
        var t = s + "/NoticeApi/lists.html";
        i.default.get(t, n.default.extend(this.params, {
            _p: this.data.page + 1
        }), function(t) {
            this.onDataHandler(t), this.onSetData(t, this.data.page + 1);
        }, this, {
            completeAfter: e.default.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(t) {
        (0, n.default)(t).map(function(t) {
            return t.create_time = o.default.format(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), 
            t;
        });
    },
    onSetData: function(t, e) {
        t = t || [], this.setData({
            page: void 0 !== e ? e : this.data.page,
            data: 1 === e || void 0 === e ? t : this.data.data.concat(t),
            hasMore: void 0 !== e && 20 === t.length,
            isEmpty: (1 === e || void 0 === e) && 0 === t.length
        });
    },
    onNavigateTap: function(t) {
        e.default.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    tabBarEvent: function(t) {
        var e = t.currentTarget.dataset.tabBar;
        this.setData({
            tabBar: e
        }), this.params.type = "released" == e ? 0 : "received" == e ? 1 : 0, this.onPullDownRefresh(1);
    }
});