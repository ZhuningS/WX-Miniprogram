getApp();

var t = require("../../utils/util"), e = require("../../utils/requestUtil"), a = require("../../utils/underscore"), n = require("../../utils/data");

require("./extend.js");

Page({
    shareInfo: null,
    data: {
        isEmpty: !1,
        hasMore: !0,
        page: 1
    },
    onLoad: function(t) {
        var a = this, o = wx.getSystemInfoSync();
        this.setData({
            minHeight: o.screenWidth / 3
        }), this.onPullDownRefresh(1), e.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanUser/Api/getShareInfo.html", {
            mmodule: "duoguan_reservation"
        }, function(t) {
            a.shareInfo = t;
        });
    },
    onPullDownRefresh: function(t) {
        var a = this;
        t = t || !1, e.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/categorys.html", {
            ver: "2.0.0"
        }, function(t) {
            a.onDataHandler(t), a.onSetData(t, 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: t
        }), e.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/config.html", {
            ver: "2.0.0"
        }, function(t) {
            a.setData({
                config: t
            });
        }, this);
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        e.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/categorys.html", {
            _p: this.data.page + 1
        }, function(e) {
            t.onDataHandler(e), t.onSetData(e, t.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(e) {
        a(e).map(function(e) {
            return e.child_count = parseInt(e.child_count), e.create_time = t.format(1e3 * e.create_time, "yyyy-MM-dd hh:mm"), 
            e;
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
        wx.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    onOpenCategoryTap: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.data[e];
        console.log(a), a.child_count ? wx.navigateTo({
            url: "two-category?cid=" + a.id
        }) : wx.navigateTo({
            url: "detail?cid=" + a.id
        });
    },
    onShareAppMessage: function() {
        return this.shareInfo = this.shareInfo || {}, {
            title: this.shareInfo.title || "微预约",
            desc: this.shareInfo.desc || "",
            path: "pages/reservation/index"
        };
    }
});