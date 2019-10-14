getApp();

var t = require("../../../utils/requestUtil"), i = require("../../../utils/data");

Page({
    data: {
        this_store_info: {}
    },
    onLoad: function(e) {
        var a = this, o = e.store_id;
        a.setData({
            this_store_id: o
        }), t.get(i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/getStoreOneInfo.html", {
            store_id: o
        }, function(t) {
            a.setData({
                this_store_info: t
            });
        }, this, {});
    },
    go_back_bind: function() {
        wx.navigateBack(1);
    }
});