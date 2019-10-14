getApp();

var n = require("../../../../utils/requestUtil"), o = require("../../../../utils/data");

Page({
    data: {
        fxinfo: []
    },
    onLoad: function(t) {
        var i = this;
        n.get(o.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/DuoguanShopApi/getApplyStatus.html", {}, function(n) {
            200 != n.status && wx.redirectTo({
                url: "../distribution/index"
            });
        }, {}), i.getfxData();
    },
    getfxData: function() {
        var t = this;
        n.get(o.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/FenxiaoApi/fenxiao", {}, function(n) {
            console.log(n), t.setData({
                fxinfo: n
            });
        }, this, {
            isShowLoading: !0
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getfxData(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});