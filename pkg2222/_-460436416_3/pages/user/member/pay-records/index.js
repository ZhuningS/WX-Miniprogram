function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = require("../../../../utils/data.js"), e = t(require("../../../../utils/underscore")), i = t(require("../../../../utils/requestUtil")), n = t(require("../../../../utils/util")), o = (t(require("../../../../utils/listener")), 
a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/CardApi/getTradeRecordList.html");

Page({
    data: {
        isEmpty: !1,
        hasMore: !0,
        isLoading: !0,
        page: 1,
        data: [],
        card: null,
        type: 1
    },
    onLoad: function(t) {
        this.onPullDownRefresh();
    },
    onPullDownRefresh: function() {
        var t = this;
        i.default.get(o, {
            type: this.data.type
        }, function(a, e) {
            t.onDataHandler(a), t.onSetData(a, 1), t.setData({
                card: e.card
            });
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onReachBottom: function() {
        var t = this;
        this.data.hasMore ? (this.setData({
            isLoading: !0
        }), i.default.get(o, {
            _p: this.data.page + 1,
            type: this.data.type
        }, function(a) {
            t.onDataHandler(a), t.onSetData(a, t.data.page + 1);
        }, this, {
            isShowLoading: !1
        })) : console.log("没有更多了...");
    },
    onDataHandler: function(t) {
        (0, e.default)(t).map(function(t) {
            return t.create_time = n.default.formatSmartTime(1e3 * t.cTime, "yyyy-MM-dd hh:mm"), 
            t;
        });
    },
    onSetData: function(t, a) {
        t = t || [], this.setData({
            page: void 0 !== a ? a : this.data.page,
            data: 1 === a || void 0 === a ? t : this.data.data.concat(t),
            hasMore: void 0 !== a && t.length >= 20,
            isEmpty: (1 === a || void 0 === a) && 0 === t.length,
            isLoading: !1
        });
    },
    onSwtchTabTap: function(t) {
        var a = t.detail.value.index, e = this.data.type;
        i.default.pushFormId(t.detail.formId), a != e && (this.setData({
            type: a
        }), this.onPullDownRefresh());
    }
});