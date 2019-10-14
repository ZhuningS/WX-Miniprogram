var e = require("../../utils/data"), t = require("../../utils/requestUtil"), a = require("../../utils/util"), n = require("../../utils/underscore"), i = require("./extend.js");

Page({
    data: {
        id: "",
        detail: "",
        showLoading: 1
    },
    onLoad: function(e) {
        i.config(this), this.setData({
            id: e.id
        }), this.onPullDownRefresh();
    },
    onShow: function() {},
    onDataHandler: function(e) {
        return e.create_time = a.format(1e3 * e.create_time, "yyyy-MM-dd hh:mm"), e.reseve_time = a.format(1e3 * e.reseve_time, "yyyy-MM-dd hh:mm"), 
        e;
    },
    onMakePayTap: function(a) {
        var i = this;
        if (!t.isLoading(this.makePayRQId)) {
            var o = a.currentTarget.dataset.tradeNo;
            a.currentTarget.dataset.status;
            t.get(e.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/makeResevePay.html", {
                trade_no: o,
                ver: "2.0.1",
                single_pay: this.data.config.single_pay
            }, function(e) {
                wx.requestPayment(n.extend(e, {
                    success: function(e) {
                        i.onPullDownRefresh();
                    },
                    fail: function(e) {}
                }));
            });
        }
    },
    onConfirmTap: function(a) {
        var n = this;
        if (!t.isLoading(this.updateStatusRQId)) {
            var i = a.currentTarget.dataset.tradeNo;
            console.log(i), t.get(e.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/reseveConfirm.html", {
                trade_no: i
            }, function(e) {
                n.onPullDownRefresh();
            }, this);
        }
    },
    onPullDownRefresh: function() {
        var a = this, n = {
            id: this.data.id
        };
        t.get(e.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/reseveDetail.html", n, function(e) {
            console.log(e), a.onDataHandler(e), a.setData({
                detail: e,
                showLoading: 0
            });
        }, this);
    },
    onReachBottom: function() {}
});