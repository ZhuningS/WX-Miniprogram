function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../utils/dg.js")), e = t(require("../../../utils/data.js")), i = t(require("../../../utils/requestUtil.js")), s = t(require("../../../utils/underscore.js")), r = t(require("../../../utils/util.js")), n = e.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

Page({
    params: {},
    data: {
        tabBar: "public",
        isEmpty: !1,
        hasMore: !0,
        page: 1,
        isload: !0,
        isShowLoading: !1,
        cover: "/images/default.png",
        is_add_activity: !1,
        isAuth: !1
    },
    onLoad: function(t) {
        if (this.getDefaultImage(this), t.type || (t.type = 2), 1 == t.type && this.setData({
            tabBar: "received"
        }), this.params = {
            type: t.type
        }, 2 != t.type) {
            var a = this;
            r.default.trySyncUserInfo(function(t) {
                a.setData({
                    userInfo: t,
                    isAuth: !0
                });
            });
        }
        this.onPullDownRefresh(0);
    },
    onShow: function(t) {
        this.onPullDownRefresh(0);
    },
    onNavigateTap: function(t) {
        a.default.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    onPullDownRefresh: function(t) {
        var e = this;
        t = t || !1;
        var r = n + "/activityApi/lists.html";
        i.default.get(r, s.default.extend(this.params, {
            _p: 1
        }), function(t) {
            e.onDataHandler(t), e.onSetData(t, 1);
        }, this, {
            completeAfter: a.default.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void a.default.stopPullDownRefresh();
        this.setData({
            isShowLoading: !0
        });
        var e = n + "/activityApi/lists.html";
        i.default.get(e, s.default.extend({}, this.params, {
            _p: this.data.page + 1
        }), function(a) {
            t.onDataHandler(a), t.onSetData(a, t.data.page + 1);
        }, this, {
            completeAfter: a.default.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(t) {
        (0, s.default)(t).map(function(t) {
            return t.create_time = r.default.format(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), 
            t.start_time = r.default.format(1e3 * t.start_time, 1 == t.is_fullday ? "yyyy-MM-dd" : "yyyy-MM-dd hh:mm"), 
            t.end_time = r.default.format(1e3 * t.end_time, 1 == t.is_fullday ? "yyyy-MM-dd" : "yyyy-MM-dd hh:mm"), 
            t;
        });
    },
    onSetData: function(t, a) {
        t = t || [], this.setData({
            page: void 0 !== a ? a : this.data.page,
            data: 1 === a || void 0 === a ? t : this.data.data.concat(t),
            hasMore: void 0 !== a && 20 === t.length,
            isEmpty: (1 === a || void 0 === a) && 0 === t.length,
            isload: !1,
            isShowLoading: 1 === a && this.data.isShowLoading
        });
    },
    onOpenMapTap: function(t) {
        var e = parseFloat(t.currentTarget.dataset.latitude), i = parseFloat(t.currentTarget.dataset.longitude), s = t.currentTarget.dataset.title, r = t.currentTarget.dataset.address;
        a.default.openLocation({
            latitude: e,
            longitude: i,
            name: s,
            address: r,
            scale: 28
        });
    },
    tabBarEvent: function(t) {
        var a = t.currentTarget.dataset.tabBar;
        if (this.setData({
            tabBar: a
        }), this.params.type = "released" == a ? 0 : "received" == a ? 1 : 2, ("released" == a || "received" == a) && !this.data.isAuth) {
            var e = this;
            r.default.trySyncUserInfo(function(t) {
                e.setData({
                    userInfo: t,
                    isAuth: !0
                });
            });
        }
        this.onPullDownRefresh(1);
    },
    getDefaultImage: function(t) {
        var a = n + "/ActivityApi/getDefaultImage.html";
        i.default.get(a, {}, function(a) {
            "" != a.cover ? t.setData({
                cover: a.cover,
                is_add_activity: a.is_add_activity
            }) : t.setData({
                is_add_activity: a.is_add_activity
            });
        });
    }
});