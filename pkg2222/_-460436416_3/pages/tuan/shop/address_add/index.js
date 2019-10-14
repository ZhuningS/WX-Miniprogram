var t = require("../../../../utils/selectarea/selectarea"), i = (require("../../../../utils/functionData.js"), 
getApp(), require("../../../../utils/requestUtil")), s = require("../../../../utils/data");

Page({
    data: {
        info: [],
        this_aid: 0,
        submitIsLoading: !1,
        buttonIsDisabled: !1
    },
    onLoad: function(a) {
        var e = this, n = a.aid;
        console.log(a), t.SA.load(this, {
            showDistrict: !0
        }), n > 0 && (e.setData({
            this_aid: n
        }), i.get(s.duoguan_host_api_url + "/index.php/addon/DuoguanShop/OrderApi/getAddressInfo.html", {
            aid: n
        }, function(t) {
            e.initAddressInfoData(t);
        }));
    },
    initAddressInfoData: function(t) {
        console.log(t), this.setData({
            info: t,
            address: t.province + " " + t.city + " " + t.district,
            selectedCode: t.district_code
        });
    },
    choosearea: function() {
        console.log(this.data), t.SA.choosearea(this);
    },
    tapProvince: function(i) {
        t.SA.tapProvince(i, this);
    },
    tapCity: function(i) {
        t.SA.tapCity(i, this);
    },
    tapDistrict: function(i) {
        t.SA.tapDistrict(i, this);
    },
    cancel: function() {
        t.SA.cancel(this);
    },
    confirm: function(i) {
        t.SA.confirm(i, this);
    },
    formSubmit: function(t) {
        var a = this, e = t.detail.value;
        a.setData({
            submitIsLoading: !0,
            buttonIsDisabled: !0
        }), i.get(s.duoguan_host_api_url + "/index.php/addon/DuoguanShop/OrderApi/addAddress.html", {
            ainfo: e
        }, function(t) {
            a.initaddAddressData(t);
        }, this, {
            complete: function() {
                a.setData({
                    submitIsLoading: !1,
                    buttonIsDisabled: !1
                });
            }
        });
    },
    initaddAddressData: function(t) {
        var i = this;
        wx.showModal({
            title: "提示",
            content: t,
            showCancel: !1,
            success: function(t) {
                t.confirm && (wx.navigateBack({
                    delta: 1
                }), wx.redirectTo({
                    url: "../address_list/index"
                }));
            }
        }), i.setData({
            submitIsLoading: !1,
            buttonIsDisabled: !1
        });
    },
    deleteAddress: function() {
        var t = this;
        i.get(s.duoguan_host_api_url + "/index.php/addon/DuoguanShop/OrderApi/delAddress.html", {
            aid: t.data.this_aid
        }, function(i) {
            t.initdelAddressData(i);
        }, this);
    },
    initdelAddressData: function(t) {
        wx.showModal({
            title: "提示",
            content: t,
            success: function(t) {
                t.confirm && wx.redirectTo({
                    url: "../address_list/index"
                });
            }
        });
    }
});