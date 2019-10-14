require("../../../utils/functionData");

var a = require("../../../utils/requestUtil"), e = require("../../../utils/data"), t = (require("../../../utils/dg"), 
require("../../../utils/util"));

getApp();

Page({
    data: {
        cart_list: [],
        all_g_number: 0,
        all_g_price: 0,
        all_g_yunfei: 0,
        is_show_address: !1,
        address_list: null,
        this_address_id: 0,
        this_address_info: "请选择",
        btn_submit_disabled: !1,
        glo_is_load: !0,
        wx_address_info: "",
        shipping_name: "本店快递",
        config: [],
        name: "",
        phone: "",
        logistics: !1,
        since: !1,
        l_check: !0,
        s_check: !1,
        chengtuan_id: 0,
        award: 0,
        tuan_type: 0
    },
    onLoad: function() {
        var t = this;
        a.get(e.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getTuanConfig.html", {}, function(a) {
            t.setData({
                config: a
            });
        }, this, {
            isShowLoading: !1
        });
        try {
            wx.getStorageSync("tuan_name") && this.setData({
                name: wx.getStorageSync("tuan_name")
            }), wx.getStorageSync("tuan_phone") && this.setData({
                phone: wx.getStorageSync("tuan_phone")
            });
        } catch (a) {}
    },
    onShow: function(t) {
        var i = this;
        a.get(e.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getCartList.html", {}, function(a) {
            i.initgetCartListData(a);
        }, this, {
            isShowLoading: !0
        }), a.get(e.duoguan_host_api_url + "/index.php/addon/DuoguanShop/OrderApi/getAddressList.html", {}, function(a) {
            i.initgetAddressListData(a);
        }, this, {
            isShowLoading: !1
        });
    },
    initgetCartListData: function(a) {
        var e = this;
        e.setData({
            cart_list: a.glist,
            all_g_number: a.all_g_number,
            all_g_price: (100 * a.all_g_price / 100).toFixed(2),
            all_g_yunfei: a.all_g_yunfei,
            chengtuan_id: a.chengtuan_id,
            award: a.award ? a.award : 0,
            tuan_type: a.tuan_type
        }), 1 == a.logistics && 1 == a.since && (console.log(1), e.setData({
            shipping_name: "本店快递",
            logistics: !0,
            since: !0
        })), 0 == a.logistics && 1 == a.since && (e.setData({
            shipping_name: "到店自提",
            since: !0,
            s_check: !0,
            l_check: !1
        }), e.data.s_check && e.setData({
            all_g_price: ((100 * a.all_g_price - 100 * a.all_g_yunfei) / 100).toFixed(2)
        }), console.log(e.data.s_check), console.log(e.data.all_g_price)), 1 == a.logistics && 0 == a.since && (console.log(3), 
        e.setData({
            shipping_name: "本店快递",
            logistics: !0
        }));
    },
    order_formSubmit: function(t) {
        console.log(t), wx.setStorage({
            key: "tuan_name",
            data: t.detail.value.name
        }), wx.setStorage({
            key: "tuan_phone",
            data: t.detail.value.phone
        });
        var i = this;
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), i.setData({
            btn_submit_disabled: !0
        });
        var s = t.detail.value;
        s.form_id = t.detail.formId, s.wx_address = i.data.wx_address_info, a.get(e.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/postOrder.html", {
            oinfo: s
        }, function(a) {
            i.initorderPostData(a);
        }, this, {
            isShowLoading: !1,
            complete: function(a) {
                i.setData({
                    btn_submit_disabled: !1
                });
            }
        });
    },
    initorderPostData: function(a) {
        var e = this;
        wx.hideToast(), e.setData({
            btn_submit_disabled: !1
        }), console.log(a), wx.requestPayment({
            timeStamp: a.timeStamp,
            nonceStr: a.nonceStr,
            package: a.package,
            signType: "MD5",
            paySign: a.paySign,
            success: function(e) {
                2 == a.btype ? wx.redirectTo({
                    url: "../join/join?oid=" + a.order_id
                }) : wx.redirectTo({
                    url: "../tuan/list/index"
                });
            },
            fail: function(a) {
                console.log(a), wx.showModal({
                    title: "提示",
                    content: "支付失败,请稍后到我的订单中可继续支付",
                    showCancel: !1,
                    success: function(a) {
                        wx.switchTab({
                            url: "../index/index"
                        });
                    }
                });
            }
        });
    },
    select_address_bind: function() {
        var a = this;
        t.chooseAddress(function(e) {
            if (void 0 != e.wxAddress || void 0 != e.qqmap_address) if (e.wxAddress) a.setData({
                wx_address_info: e.wxAddress
            }); else {
                var t = {
                    userName: e.name,
                    nationalCode: "",
                    telNumber: e.mobile,
                    postalCode: "",
                    provinceName: e.qqmap_address.province,
                    cityName: e.qqmap_address.city,
                    countyName: e.qqmap_address.district,
                    detailInfo: e.qqmap_address.district + e.qqmap_address.district
                };
                a.setData({
                    wx_address_info: t
                });
            }
        });
    },
    initgetAddressListData: function(a) {
        this.setData({
            address_list: a,
            glo_is_load: !1
        });
    },
    chose_address_bind: function(a) {
        var e = this, t = a.currentTarget.id;
        e.setData({
            this_address_id: t
        });
        for (var i = e.data.address_list, s = {}, n = 0; n < i.length; n++) i[n].id == t ? (i[n].is_check = "active", 
        s.userName = i[n].consignee, s.telNumber = i[n].mobile, s.provinceName = i[n].province, 
        s.cityName = i[n].city, s.countyName = i[n].district, s.detailInfo = i[n].address) : i[n].is_check = "";
        e.setData({
            address_list: i,
            wx_address_info: s
        }), e.select_address_close_bind();
    },
    select_address_close_bind: function() {
        this.setData({
            is_show_address: !1
        });
    },
    index_item_bind: function() {
        wx.navigateTo({
            url: "../../user/shop/address_add/index"
        });
    },
    shipping_name_change: function(a) {
        var e = 0;
        "到店自提" == a.detail.value ? (e = (100 * this.data.all_g_price - 100 * this.data.all_g_yunfei) / 100, 
        console.log(e)) : a.detail.value && (e = (100 * this.data.all_g_price + 100 * this.data.all_g_yunfei) / 100), 
        this.setData({
            shipping_name: a.detail.value,
            all_g_price: e.toFixed(2)
        });
    }
});