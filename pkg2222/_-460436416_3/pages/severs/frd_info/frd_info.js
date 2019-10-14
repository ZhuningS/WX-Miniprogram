function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/underscore")), i = t(require("../../../utils/requestUtil")), a = t(require("../../../utils/util")), n = (t(require("../../../utils/listener")), 
t(require("../base-list"))), s = t(require("../urls"));

getApp();

Page(e.default.extend({}, n.default, {
    data: {
        isLoading: !0,
        isEmpty: !1,
        hasMore: !0,
        page: 1,
        data: []
    },
    frdUid: 0,
    vestId: 0,
    onLoad: function(t) {
        this.frdUid = t.uid, this.vestId = t.vest_id, this.registerListeners(), this.setData({
            config: wx.getStorageSync("servers_config")
        }), this.onPullDownRefresh();
    },
    onUnload: function() {
        this.unRegisterListeners();
    },
    onPullDownRefresh: function() {
        var t = this;
        i.default.get(s.default.document.userDocs, {
            uid: this.frdUid,
            vest_id: this.vestId
        }, function(e, i) {
            wx.setNavigationBarTitle({
                title: i.nickname + "的信息"
            }), t.setData({
                info_count: i.info_count,
                total_click: i.total_click,
                total_good: i.total_good,
                nickname: i.nickname,
                sex: i.sex,
                headimgurl: i.headimgurl
            }), t.onDataHandler(e), t.onSetData(e, 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        this.setData({
            isLoading: !0
        }), i.default.get(s.default.document.userDocs, e.default.extend({
            _p: this.data.page + 1,
            uid: this.frdUid,
            vest_id: this.vestId
        }, this.data.param), function(e) {
            t.onDataHandler(e), t.onSetData(e, t.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(t) {
        (0, e.default)(t).map(function(t) {
            return t.create_time = a.default.formatSmartTime(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), 
            t;
        });
    },
    onNavigateTap: function(t) {
        var e = t.currentTarget.dataset.url;
        -1 == e.indexOf("frd_info") && wx.navigateTo({
            url: e
        });
    },
    onShareAppMessage: function(t) {
        return "button" === t.from ? this.onButtonShareAppMessage(t.target) : {
            title: this.data.nickname || "同城",
            path: "pages/severs/frd_info/frd_info?uid=" + this.frdUid
        };
    }
}));