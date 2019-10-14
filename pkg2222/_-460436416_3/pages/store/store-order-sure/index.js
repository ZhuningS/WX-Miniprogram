function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/util")), a = require("../../../utils/requestUtil"), o = require("../../../utils/data"), s = require("../../../utils/underscore");

require("../store-common/common"), getApp();

Page({
    data: {
        goods_id: "",
        source_data: [],
        store_info: [],
        data_list: [],
        this_store_id: 0,
        this_table_id: 0,
        buy_type: 0,
        order_type: 0,
        all_g_number: 0,
        is_show_address: !1,
        pay_type_index: 1,
        u_lat: "",
        u_lng: "",
        peisong: !1,
        btn_submit_disabled: !1,
        submitIsLoading: !1,
        glo_is_load: !0,
        select_pay_type: !1,
        is_show_remark: 1,
        address_info: "",
        goodsNum: 1,
        is_show_load_bg: !0,
        shop_amount: 0,
        pay_amount: 0,
        mycard: null,
        usecard: null,
        is_show_myCards: !1,
        select_card_index: -1,
        can_peisong: !1
    },
    onShow: function(t) {},
    onLoad: function(t) {
        var a = this;
        e.default.trySyncWechatInfo(), a.getStoreConfig();
        var o = t.buy_type, s = t.store_id;
        e.default.getDefaultAddress(function(t) {
            if (0 != t.length && (a.data.address_info = t), t.latitude && t.longitude) {
                var e = {};
                e.store_id = a.data.this_store_id, e.ws_lng = t.longitude, e.ws_lat = t.latitude, 
                a.getPeisongCharge(e);
            }
        }, !0);
        var i = wx.getStorageSync("USERNAME"), r = wx.getStorageSync("USERTEL");
        if (a.setData({
            this_store_id: s,
            buy_type: o,
            name: i,
            tel: r
        }), 2 == o) a.getStoreInfo(); else {
            t.goods_id;
            a.getGoodsInfo();
        }
        a.getmycard();
    },
    delivery_method_select: function(t) {
        var e = this, a = t.currentTarget.dataset.delivery_type;
        if (2 == a) {
            var o = e.data.address_info;
            if (o.mobile && o.name && o.longitude && o.latitude) {
                e.setData({
                    address_info: o
                });
                var s = {};
                s.store_id = e.data.this_store_id, s.ws_lng = o.longitude, s.ws_lat = o.latitude, 
                e.getPeisongCharge(s);
            } else e.select_address_bind();
        }
        e.setData({
            order_type: a
        }), e.calculatePayTotal();
    },
    getStoreConfig: function() {
        var t = this;
        a.get(o.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/getStoreConfig.html", {}, function(e) {
            t.setData({
                store_type: e.store_type,
                is_member: e.is_open_member
            });
        });
    },
    getGoodsInfo: function() {
        var t = this;
        a.get(o.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/getGoodsInfo.html", {
            store_id: t.data.this_store_id,
            goods_id: t.data.goods_id
        }, function(e) {
            var a = e.shop_price;
            t.data.shop_amount = parseFloat(a).toFixed(2);
            var o = parseFloat(a).toFixed(2);
            t.setData({
                goods_data: e,
                glo_is_load: !1,
                pay_amount: o,
                shop_amount: parseFloat(t.data.shop_amount)
            });
        });
    },
    go_select_paytype_bind: function() {
        var t = this;
        0 != t.data.order_type && void 0 != t.data.order_type ? 1 == t.data.select_pay_type ? t.setData({
            select_pay_type: !1,
            is_show_remark: 1
        }) : t.setData({
            select_pay_type: !0,
            is_show_remark: 0
        }) : wx.showModal({
            title: "提示",
            content: "请选择同城配送或者到店自提",
            showCancel: !1,
            success: function(t) {}
        });
    },
    payTypeChange: function(t) {
        var e = t.detail.value;
        this.setData({
            pay_type_index: e
        });
    },
    goods_number_change: function(t) {
        var e = this;
        if (e.setData({
            usecard: null,
            select_card_index: -1
        }), "jia" == t.currentTarget.id) {
            var a = e.data.goodsNum + 1, o = e.data.goods_data.shop_price;
            e.data.shop_amount = parseFloat(o).toFixed(2) * parseInt(a), e.setData({
                goodsNum: a
            });
        } else if (e.data.goodsNum > 1) {
            var a = e.data.goodsNum - 1, o = e.data.goods_data.shop_price;
            e.data.shop_amount = parseFloat(o).toFixed(2) * parseInt(a), e.setData({
                goodsNum: a
            });
        }
        e.calculatePayTotal();
    },
    getPeisongCharge: function(e) {
        var s = this;
        s.setData({
            can_peisong: !1
        }), a.get(o.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/getPeisongCharge.html", e, function(e) {
            var a;
            e >= 0 && s.setData({
                can_peisong: !0
            }), s.setData((a = {}, t(a, "store_info.waimai_peisong_jiner", e), t(a, "peisong", !0), 
            a)), s.calculatePayTotal();
        }, s, {
            isShowLoading: !0
        });
    },
    select_address_bind: function() {
        var t = this;
        e.default.chooseAddress(function(e) {
            if (t.setData({
                address_info: e
            }), e.latitude && e.longitude) {
                var a = {};
                a.store_id = t.data.this_store_id, a.ws_lng = e.longitude, a.ws_lat = e.latitude, 
                t.getPeisongCharge(a);
            }
            console.log(e);
        }, !0);
    },
    order_formSubmit: function(t) {
        var e = this, a = t.detail.value;
        if (a.store_id = e.data.this_store_id, a.order_type = e.data.order_type, 1 == e.data.order_type) {
            if ((o = {}).telNumber = a.tel, o.userName = a.name, !o.telNumber || !o.userName) return void wx.showModal({
                title: "提示",
                content: "请填写取货人信息",
                showCancel: !1,
                success: function(t) {}
            });
            wx.setStorageSync("USERNAME", o.userName), wx.setStorageSync("USERTEL", o.telNumber);
            a.wx_address = o;
        } else if (2 == e.data.order_type) {
            var o = e.data.address_info;
            if (!o.mobile || !o.name) return void wx.showModal({
                title: "提示",
                content: "请填写收货人信息",
                showCancel: !1,
                success: function(t) {}
            });
            if (!e.data.can_peisong) return void wx.showModal({
                title: "提示",
                content: "收货地址不在配送范围内",
                showCancel: !1,
                success: function(t) {}
            });
            var s = e.data.address_info, i = Number(s.longitude), r = Number(s.latitude);
            if (!i || !r) return void wx.showModal({
                title: "提示",
                content: "收货地址定位不准确请重新选择地址",
                showCancel: !1,
                success: function(t) {}
            });
            var n = {};
            n.userName = s.name, n.provinceName = s.province, n.cityName = s.city, n.countyName = s.area, 
            n.detailInfo = s.all_address, n.nationalCode = s.postcode, n.telNumber = s.mobile, 
            a.wx_address = n, a.u_lat = s.latitude, a.u_lng = s.longitude;
        }
        e.setData({
            btn_submit_disabled: !0,
            submitIsLoading: !0
        });
        var d = e.data.select_card_index, _ = parseFloat(e.data.shop_amount).toFixed(2), l = parseFloat(e.data.pay_amount).toFixed(2);
        a.pay_amount = l, a.shop_amount = _, d >= 0 && (a.coupon_discount = e.data.usecard.discount, 
        a.coupon_id = e.data.usecard.id, a.coupon_type = e.data.usecard.type, a.is_coupon = 1);
        u = "确定支付吗";
        if (3 == a.pay_type) var u = "确定货到付款吗";
        wx.showModal({
            title: "提示",
            content: u,
            success: function(t) {
                t.confirm ? e.makeOrder(a) : e.setData({
                    btn_submit_disabled: !1,
                    submitIsLoading: !1
                });
            }
        });
    },
    makeOrder: function(t) {
        var e = this;
        a.get(o.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StorePayApi/postOrder.html", t, function(t) {
            wx.hideToast(), e.setData({
                btn_submit_disabled: !1,
                submitIsLoading: !1
            }), 1 == t.type ? wx.showModal({
                title: "提示",
                content: "订单支付成功",
                confirmText: "查看订单",
                showCancel: !1,
                success: function(t) {
                    wx.redirectTo({
                        url: "../store-order-list/index"
                    });
                }
            }) : 2 == t.type ? wx.navigateTo({
                url: "/pages/user/mcard/recharge"
            }) : 3 == t.type ? wx.showModal({
                title: "提示",
                content: "订单支付成功",
                confirmText: "查看订单",
                showCancel: !1,
                success: function(t) {
                    wx.redirectTo({
                        url: "../store-order-list/index"
                    });
                }
            }) : 4 == t.type ? wx.showModal({
                title: "提示",
                content: "下单成功",
                confirmText: "查看订单",
                showCancel: !1,
                success: function(t) {
                    wx.redirectTo({
                        url: "../store-order-list/index"
                    });
                }
            }) : wx.requestPayment({
                timeStamp: t.timeStamp,
                nonceStr: t.nonceStr,
                package: t.package,
                signType: "MD5",
                paySign: t.paySign,
                success: function(t) {
                    wx.showModal({
                        title: "提示",
                        content: "订单支付成功",
                        confirmText: "查看订单",
                        showCancel: !1,
                        success: function(t) {
                            wx.redirectTo({
                                url: "../store-order-list/index"
                            });
                        }
                    });
                },
                fail: function(t) {
                    wx.showModal({
                        title: "提示",
                        content: "支付失败,请稍后到我的订单中可继续支付",
                        showCancel: !1,
                        success: function(t) {
                            wx.redirectTo({
                                url: "../store-order-list/index"
                            });
                        }
                    });
                }
            });
        }, {
            completeAfter: e.makeOrderComplete()
        });
    },
    makeOrderComplete: function() {
        this.setData({
            btn_submit_disabled: !1,
            submitIsLoading: !1
        });
    },
    getStoreInfo: function() {
        var t = this;
        a.get(o.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getStoreInfo.html", {
            store_id: t.data.this_store_id
        }, function(e) {
            e.store_info.waimai_peisong_jiner = parseInt(e.store_info.waimai_peisong_jiner);
            var a = e.store_info;
            if (1 == a.store_is_waimai && 0 == a.store_is_diannei) {
                o = 2;
                t.select_address_bind();
            } else if (0 == a.store_is_waimai && 1 == a.store_is_diannei) o = 1; else var o = 0;
            t.setData({
                is_show_load_bg: !1,
                source_data: e,
                store_info: a,
                order_type: o,
                store_yingye_status_val: e.store_info.is_yingye_status
            }), t.getCartList();
        });
    },
    getCartList: function() {
        var t = this, e = this;
        a.get(o.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getShopCart", {
            store_id: e.data.this_store_id
        }, function(e) {
            var a = t, o = parseFloat(a.data.store_info.waimai_limit_jiner).toFixed(2) - e.all_g_price.toFixed(2);
            a.setData({
                data_list: e,
                all_g_number: e.all_g_number,
                glo_is_load: !1,
                shop_amount: e.all_g_price,
                more_need_maney: o
            }), a.calculatePayTotal();
        });
    },
    calculatePayTotal: function() {
        var t = this, e = t.data.usecard, a = parseFloat(t.data.shop_amount);
        if (null != e && a > 0) {
            var o = parseFloat(e.discount);
            if (0 == e.type) {
                if (parseFloat(t.data.store_info.waimai_limit_jiner).toFixed(2), 2 == t.data.order_type) var s = t.data.store_info.waimai_peisong_jiner, i = parseFloat(a) + parseFloat(s); else i = parseFloat(a);
                (i = i - parseFloat(o)) < 0 && (i = 0);
            } else if (1 == e.type) {
                i = parseFloat(a) * parseFloat(o / 10);
                if (2 == t.data.order_type) var s = t.data.store_info.waimai_peisong_jiner, i = i + parseFloat(s);
            }
        } else {
            i = a;
            if (2 == t.data.order_type) var s = t.data.store_info.waimai_peisong_jiner, i = i + parseFloat(s);
        }
        i <= 0 && (i = 0);
        var i = new Number(i + 10).toFixed(2), i = new Number(i - 10).toFixed(2), a = new Number(a + 10).toFixed(2), a = new Number(a - 10).toFixed(2);
        t.setData({
            pay_amount: i,
            shop_amount: a
        });
    },
    selectCard: function(t) {
        var e = this, a = t.currentTarget.dataset.index;
        if (-1 == a) e.setData({
            usecard: null
        }); else {
            var o = parseFloat(e.data.shop_amount), s = e.data.mycard, i = (parseInt(s[a].type), 
            parseFloat(s[a].discount), parseFloat(s[a].full_available));
            if (o < i) {
                var r = "满" + i + "元才能使用哦";
                return void wx.showModal({
                    title: "提示",
                    content: r
                });
            }
            e.setData({
                usecard: s[a]
            });
        }
        e.setData({
            select_card_index: a
        }), e.calculatePayTotal();
    },
    getmycard: function() {
        var t = this;
        a.get(o.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getMyCoupons.html", {
            available: 1,
            _r: 100,
            store_id: t.data.this_store_id
        }, function(a) {
            s(a).map(function(t) {
                return t.use_start_date = e.default.format(1e3 * t.use_start_time, "yyyy-MM-dd"), 
                t.use_end_date = e.default.format(1e3 * t.use_end_time, "yyyy-MM-dd"), t;
            }), t.setData({
                mycard: a
            });
        });
    },
    hideMyCards: function() {
        this.setData({
            is_show_myCards: !1,
            is_show_remark: 1
        });
    },
    showMyCards: function(t) {
        t.currentTarget.dataset.id;
        this.setData({
            is_show_myCards: !0,
            is_show_remark: 0
        });
    }
});