getApp();

var t = require("../../../utils/requestUtil"), e = require("../../../utils/data");

Page({
    data: {
        categoryArr: null
    },
    onLoad: function() {
        var a = this;
        t.get(e.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiRuzhu/getConfigData", {
            categorys: 1
        }, function(t) {
            a.setData({
                categoryArr: t.tel_cate
            });
        }, this, {
            isShowLoading: !0
        });
    },
    onPullDownRefresh: function() {
        this.onLoad(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    go_cate_list_bind: function(t) {
        var e = t.currentTarget.dataset.level, a = t.currentTarget.dataset.id, r = t.currentTarget.dataset.name;
        wx.redirectTo({
            url: "../telList/telList?cate_id=" + a + "&level=" + e + "&name=" + r
        });
    }
});