getApp();

var t = require("../../../../utils/requestUtil"), a = require("../../../../utils/data");

Page({
    data: {
        data_list: []
    },
    onLoad: function(t) {
        this.getDataList();
    },
    onPullDownRefresh: function() {
        this.getDataList(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    getDataList: function() {
        var i = this;
        t.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/FenxiaoApi/teamtj", {}, function(t) {
            console.log(t), i.setData({
                data_list: t
            });
        }, this, {
            isShowLoading: !0
        });
    }
});