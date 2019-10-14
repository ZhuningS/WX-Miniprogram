function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/dg.js")), a = t(require("../../../utils/data.js")), i = t(require("../../../utils/requestUtil.js")), s = t(require("../../../utils/underscore.js")), o = t(require("../../../utils/util.js")), n = a.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

Page({
    params: {},
    data: {
        tabBar: "public",
        isEmpty: !1,
        hasMore: !0,
        page: 1,
        cover: "/images/default.png",
        is_add_vote: !1,
        isAuth: !1
    },
    onLoad: function(t) {
        if (this.getDefaultImage(this), t.type || (t.type = 2), 1 == t.type && this.setData({
            tabBar: "received"
        }), this.params = {
            type: t.type
        }, 2 != t.type) {
            var e = this;
            o.default.trySyncUserInfo(function(t) {
                e.setData({
                    userInfo: t,
                    isAuth: !0
                });
            });
        }
        this.onPullDownRefresh(0);
    },
    onShow: function() {
        this.onPullDownRefresh(0);
    },
    onNavigateTap: function(t) {
        e.default.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    onPullDownRefresh: function(t) {
        t = t || !1;
        var a = n + "/VoteApi/lists.html";
        i.default.get(a, s.default.extend(this.params, {
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
        var t = n + "/VoteApi/lists.html";
        i.default.get(t, s.default.extend(this.params, {
            _p: this.data.page + 1
        }), function(t) {
            this.onDataHandler(t), this.onSetData(t, this.data.page + 1);
        }, this, {
            completeAfter: e.default.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(t) {
        (0, s.default)(t).map(function(t) {
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
    tabBarEvent: function(t) {
        var e = t.currentTarget.dataset.tabBar;
        if (this.setData({
            tabBar: e
        }), this.params.type = "released" == e ? 0 : "received" == e ? 1 : 2, ("released" == e || "received" == e) && !this.data.isAuth) {
            var a = this;
            o.default.trySyncUserInfo(function(t) {
                a.setData({
                    userInfo: t,
                    isAuth: !0
                });
            });
        }
        this.onPullDownRefresh(1);
    },
    getDefaultImage: function(t) {
        var e = n + "/VoteApi/getDefaultImage.html";
        i.default.get(e, {}, function(e) {
            "" != e.cover ? t.setData({
                cover: e.cover,
                is_add_vote: e.is_add_vote
            }) : t.setData({
                is_add_vote: e.is_add_vote
            });
        });
    }
});