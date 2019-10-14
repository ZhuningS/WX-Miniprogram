var t = require("../../../../utils/functionData.js"), e = (getApp(), require("../../../../utils/requestUtil")), s = require("../../../../utils/data");

Page({
    data: {
        userInfo: {},
        allAddress: []
    },
    onShow: function() {
        var t = this;
        e.get(s.duoguan_host_api_url + "/index.php/addon/DuoguanShop/OrderApi/getAddressList.html", {}, function(e) {
            console.log(e), t.initGetUserAddressListData(e);
        }, this);
    },
    initGetUserAddressListData: function(t) {
        this.setData({
            allAddress: t
        });
    },
    addrss_bind: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../address_add/index?aid=" + e
        });
    },
    onPullDownRefresh: function() {
        t.getUserInfo(wx.getStorageSync("utoken"), this.initGetUserInfoData, this), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    }
});