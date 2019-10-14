getApp(), require("../../utils/util");

var e = require("../../utils/requestUtil"), t = require("../../utils/underscore"), i = require("../../utils/data");

Page({
    tradeNo: null,
    refund_type: null,
    data: {},
    onLoad: function(e) {
        this.tradeNo = e.tradeNo, this.refund_type = e.refund_type;
    },
    onPushSubmit: function(r) {
        if (e.pushFormId(r.detail.formId), !e.isLoading(this.refundRQId)) {
            var u = t.extend({
                trade_no: this.tradeNo,
                refund_type: this.refund_type,
                form_id: r.detail.formId
            }, r.detail.value);
            e.get(i.duoguan_host_api_url + "/index.php?s=/addon/DuoguanReservation/ReservationApi/refund_wx.html", u, function() {
                wx.navigateBack();
            });
        }
    }
});