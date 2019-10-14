require("../../../utils/functionData");

var t = require("../../../utils/requestUtil"), i = require("../../../utils/data");

getApp();

Page({
    data: {
        wldata: [],
        glo_is_load: !0
    },
    onLoad: function(t) {
        var i = this, a = t.oid;
        i.setData({
            this_order_id: a
        });
    },
    onShow: function() {
        var a = this;
        t.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/getTuanWulinInfo.html", {
            oid: a.data.this_order_id
        }, function(t) {
            a.initgetTuanWuliuInfoData(t);
        }, this, {
            isShowLoading: !0
        });
    },
    initgetTuanWuliuInfoData: function(t) {
        this.setData({
            wldata: t,
            glo_is_load: !1
        });
    }
});