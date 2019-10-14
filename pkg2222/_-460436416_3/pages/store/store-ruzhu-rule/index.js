getApp();

var o = require("../../../utils/requestUtil"), t = require("../../../utils/data");

Page({
    data: {
        protocol_title: "",
        protocol_contents: ""
    },
    onLoad: function(n) {
        var e = this;
        n.store_id;
        o.get(t.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/getStoreConfig.html", {}, function(o) {
            2 == o.store_type && e.setData({
                protocol_title: o.protocol_title,
                protocol_contents: o.protocol_contents
            });
        }, e, {
            isShowLoading: !0
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});