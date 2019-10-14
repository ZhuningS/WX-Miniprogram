getApp();

var e = require("../../utils/util"), t = require("../../utils/requestUtil"), a = require("../../utils/underscore"), n = require("../../utils/data"), o = require("./extend.js");

Page({
    data: {
        page: 2,
        hasMore: !0,
        isHidden: !0
    },
    onLoad: function(e) {
        o.config(this);
    },
    onShow: function() {
        this.onPullDownRefresh(1);
    },
    onPullDownRefresh: function(e) {
        var a = this;
        e = e || !1, t.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/reseves.html", {
            ver: "2.0.0"
        }, function(e) {
            a.onDataHandler(e), a.onSetData(e, 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: e
        });
    },
    onReachBottom: function() {
        var e = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        t.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/reseves.html", {
            _p: this.data.page + 1,
            ver: "2.0.0"
        }, function(t) {
            e.onDataHandler(t), e.onSetData(t, e.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(t) {
        a(t).map(function(t) {
            return t.create_time = e.format(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), t.reseve_time = e.format(1e3 * t.reseve_time, "yyyy-MM-dd hh:mm"), 
            t;
        });
    },
    onSetData: function(e, t) {
        e = e || [], this.setData({
            page: void 0 !== t ? t : this.data.page,
            data: 1 === t || void 0 === t ? e : this.data.data.concat(e),
            hasMore: void 0 !== t && 20 === e.length,
            isEmpty: (1 === t || void 0 === t) && 0 === e.length
        });
    },
    onNavigateTap: function(e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.url
        });
    },
    onMakePayTap: function(e) {
        var o = this;
        if (!t.isLoading(this.makePayRQId)) {
            var i = e.currentTarget.dataset.tradeNo;
            e.currentTarget.dataset.status, this.data.config.single_pay;
            t.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/makeResevePay.html", {
                trade_no: i,
                ver: "2.0.0",
                single_pay: this.data.config.single_pay
            }, function(e) {
                wx.requestPayment(a.extend(e, {
                    success: function(e) {
                        o.onPullDownRefresh(1);
                    },
                    fail: function(e) {}
                }));
            });
        }
    },
    onConfirmTap: function(e) {
        var a = this;
        if (!t.isLoading(this.updateStatusRQId)) {
            var o = e.currentTarget.dataset.tradeNo;
            console.log(o), t.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/reseveConfirm.html", {
                trade_no: o
            }, function(e) {
                a.onPullDownRefresh(1);
            });
        }
    },
    onDeleteTap: function(e) {
        var a = this;
        if (!t.isLoading(this.deleteRQId)) {
            var o = e.currentTarget.dataset.tradeNo;
            console.log(o), wx.showModal({
                content: "删除数据后将不能恢复,你确定要要删除这条预约吗？",
                success: function(e) {
                    e.confirm && t.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/reseveDel.html", {
                        trade_no: o
                    }, function(e) {
                        a.onPullDownRefresh(1);
                    });
                }
            });
        }
    },
    orderDetail: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "order-detail?id=" + t
        });
    }
});