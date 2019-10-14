function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = t(require("../../../wxParse/wxParse")), a = t(require("../../../utils/underscore")), e = (getApp(), 
require("../../../utils/requestUtil")), i = require("../../../utils/data");

Page({
    data: {
        goods_id: 0,
        store_id: 0,
        store_data: !1,
        cart_list_isshow: !1,
        cart_list: [],
        store_yingye_status_text: "未营业",
        store_yingye_status_val: 2,
        store_button_status: !0,
        submitIsLoading: !1,
        guigeIsShow: !1,
        goods_attr_select: {},
        goods_specification: {},
        goods_a_info: {},
        is_show_load_bg: !0,
        goods_info: {}
    },
    onLoad: function(t) {
        var o = t.goods_id || 0;
        this.data.goods_id = o;
        var a = t.store_id || 0;
        this.data.store_id = a, this.getGoodsInfo(o);
    },
    onShow: function(t) {
        this.getStoreInfo();
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: t.data.goods_info.g_name,
            desc: "",
            path: "/pages/store/store-goods-details/index?store_id=" + t.data.store_id + "&goods_id=" + t.data.goods_id
        };
    },
    getGoodsInfo: function(t) {
        var s = this;
        e.get(i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/storeApi/getGoodsDetails.html", {
            goods_id: t,
            store_id: this.data.store_id
        }, function(t) {
            var e = s, i = {
                setData: function(t) {
                    a.default.each(t.content.images, function(o, a) {
                        0 !== o.attr.src.indexOf("http") && (o.attr.src = _data.DUOGUAN_HOST_URL + o.attr.src, 
                        t.content.imageUrls[a] = o.attr.src);
                    }), s.setData(t);
                }
            };
            o.default.wxParse("content", "html", t.g_description, i), s.wxParseImgLoad = i.wxParseImgLoad, 
            s.wxParseImgTap = i.wxParseImgTap, e.setData({
                goods_info: t,
                is_show_load_bg: !1
            });
        });
    },
    getCartList: function() {
        var t = this, o = this;
        e.get(i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/getCartList.html", {
            store_id: o.data.store_id
        }, function(o) {
            var a = t, e = parseFloat(a.data.store_data.waimai_limit_jiner).toFixed(2) - o.all_g_price.toFixed(2);
            a.setData({
                cart_list: o.glist,
                all_g_number: o.all_g_number,
                all_g_price: o.all_g_price.toFixed(2),
                all_g_yunfei: o.all_g_yunfei.toFixed(2),
                more_need_maney: e.toFixed(2)
            }), 0 == o.all_g_number && a.setData({
                cart_list_isshow: !1
            }), wx.hideToast();
        }, this, {
            isShowLoading: !1
        });
    },
    getStoreInfo: function() {
        var t = this;
        e.get(i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getStoreBasicInfo.html", {
            store_id: t.data.store_id
        }, function(o) {
            var a = o;
            t.data.store_data = a, t.setData({
                store_data: a,
                is_show_load_bg: !1
            }), t.getCartList();
        }, this, {
            isShowLoading: !1
        });
    },
    deleteCartList: function() {
        var t = this;
        e.get(i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/deleteCartList.html", {
            store_id: t.data.store_id
        }, function(o) {
            t.getCartList();
        }, this, {
            isShowLoading: !1
        });
    },
    cart_list_show_bind: function() {
        var t = this;
        console.log("dddddddddddddddd"), 1 == t.data.cart_list_isshow ? t.setData({
            cart_list_isshow: !1
        }) : t.setData({
            cart_list_isshow: !0
        });
    },
    bind_cart_number_jian: function(t) {
        var o = this, a = (t.currentTarget.dataset.type, t.currentTarget.dataset.cid), s = t.currentTarget.id, r = {};
        r.store_id = o.data.store_id, r.gid = s, r.cart_id = a, r.gnumber = -1, r.gattr = o.data.goods_attr_select, 
        e.get(i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/addGoodsCart.html", r, function(t) {
            o.getCartList();
        }, this, {
            isShowLoading: !1
        });
    },
    bind_cart_number_jia: function(t) {
        var o = this;
        if (1 == t.currentTarget.dataset.is_attr) {
            var a = o.data.goods_attr_select, s = o.data.goods_specification, r = 0;
            for (var d in s) r = 1;
            if (1 == r) {
                var n = 0;
                for (var d in a) n = 1;
                if (1 != n) return void wx.showModal({
                    title: "提示",
                    content: "请选择属性",
                    showCancel: !1
                });
            }
        }
        t.currentTarget.dataset.type;
        var _ = t.currentTarget.id, g = t.currentTarget.dataset.cid, c = {};
        c.store_id = o.data.store_id, c.gid = _, c.cart_id = g, c.gnumber = 1, c.gattr = o.data.goods_attr_select, 
        e.get(i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/addGoodsCart.html", c, function(t) {
            o.getCartList();
        }, this);
    },
    cart_delete_bind: function() {
        var t = this;
        wx.showModal({
            title: "提示",
            content: "确认要清空购物车吗",
            confirmText: "确定",
            cancelText: "取消",
            success: function(o) {
                1 == o.confirm && (wx.showToast({
                    title: "加载中",
                    icon: "loading",
                    duration: 1e4
                }), t.deleteCartList());
            }
        });
    },
    guige_select_bind: function(t) {
        var o = this, a = t.currentTarget.id, s = t.currentTarget.dataset.goodsindex;
        o.setData({
            goods_attr_select: {}
        }), e.get(i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/getOneGoodsAttr.html", {
            goods_id: a
        }, function(t) {
            o.setData({
                goods_specification: t.good_attr,
                goods_a_info: t.good_a_info,
                guigeIsShow: !0,
                goods_index: s
            });
        }, this, {
            isShowLoading: !1
        });
    },
    attr_select_clost_bind: function() {
        this.setData({
            guigeIsShow: !1,
            goods_attr_select: {}
        });
    },
    select_attr_bind: function(t) {
        for (var o = this, a = t.currentTarget.id, e = t.currentTarget.dataset.type, i = o.data.goods_specification, s = 0, r = o.data.goods_attr_select, d = o.data.goods_a_info, n = 0; n < i.length; n++) if (i[n].name == e) {
            r[i[n].name] = null;
            for (_ = 0; _ < i[n].values.length; _++) i[n].values[_].ischeck = !1, i[n].values[_].id == a && (i[n].values[_].ischeck = !0, 
            r[i[n].name] = a, i[n].values[_].format_price > 0 && (d.shop_price = i[n].values[_].format_price));
        }
        for (n = 0; n < i.length; n++) for (var _ = 0; _ < i[n].values.length; _++) 1 == i[n].values[_].ischeck && i[n].values[_].format_price > 0 && (s += i[n].values[_].format_price);
        d.shop_price = s, o.setData({
            goods_specification: i,
            goods_attr_select: r,
            goods_a_info: d
        });
    },
    goods_order_bind: function() {
        var t = this;
        t.data.store_data.waimai_limit_juli > 0 ? (wx.showToast({
            title: "配送区域验证中",
            icon: "loading",
            duration: 1e4
        }), wx.getLocation({
            type: "gcj02",
            success: function(o) {
                wx.hideToast();
                var a = {};
                a.store_id = t.data.store_id, a.ws_lat = o.latitude, a.ws_lng = o.longitude, e.get(i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/checkPeisongLimit.html", a, function(o) {
                    t.comfirm_goods_order();
                }, t, {});
            },
            fail: function() {
                return wx.openSetting({
                    success: function(o) {
                        0 == o.authSetting["scope.userLocation"] ? wx.showModal({
                            title: "提示",
                            content: "请允许地理位置授权",
                            showCancel: !1,
                            success: function() {
                                t.goods_order_bind();
                            }
                        }) : t.goods_order_bind();
                    }
                }), !1;
            }
        })) : t.comfirm_goods_order();
    },
    comfirm_goods_order: function() {
        var t = this;
        wx.navigateTo({
            url: "../store-order-sure/index?store_id=" + t.data.store_id + "&buy_type=2"
        });
    }
});