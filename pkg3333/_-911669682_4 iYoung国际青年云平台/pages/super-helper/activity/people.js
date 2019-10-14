function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/dg.js")), i = t(require("../../../utils/data.js")), a = t(require("../../../utils/requestUtil.js")), s = (t(require("../../../utils/util.js")), 
t(require("../../../utils/underscore.js")), i.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper");

Page({
    data: {
        activityUserId: 0,
        is_exist: !1
    },
    onLoad: function(t) {
        this.activityId = t.id, this.setData({
            activityUserId: t.uid
        });
    },
    onShow: function() {
        this.onPullDownRefresh(1);
    },
    onPullDownRefresh: function(t) {
        var i = this;
        t = t || !1;
        var o = s + "/activityApi/userLists.html";
        a.default.get(o, {
            id: this.activityId
        }, function(t, e) {
            i.setData({
                is_exist: e.is_exist,
                people_count: e.people_count
            }), i.setSafeData(t, 20 == t.length, 2);
        }, this, {
            completeAfter: e.default.stopPullDownRefresh,
            isShowLoading: t
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void e.default.stopPullDownRefresh();
        var i = s + "/activityApi/userLists.html";
        a.default.get(i, {
            id: this.activityId,
            _p: this.data.page
        }, function(e) {
            t.setSafeData(e, 20 == e.length, t.data.page + 1);
        }, this, {
            completeAfter: e.default.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    setSafeData: function(t, e, i) {
        var a = 2 == i ? [] : this.data.data || [];
        this.setData({
            data: a.concat(t),
            hasMore: e,
            page: i,
            isHidden: 2 == i && 0 == t.length
        });
    },
    onExitActivityTap: function() {
        if (!a.default.isLoading(this.exitRQId)) {
            var t = s + "/activityApi/quit.html";
            a.default.get(t, {
                id: this.activityId
            }, function() {
                e.default.navigateBack();
            });
        }
    },
    onItemTap: function(t) {
        var i = t.currentTarget.dataset.index, a = this.data.data[i];
        e.default.makePhoneCall({
            phoneNumber: a.mobile
        });
    }
});