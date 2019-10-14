var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/dg")), a = (getApp(), require("../../../utils/requestUtil")), e = require("../../../utils/data");

Page({
    data: {
        store_data: !1,
        goods_data: !1,
        this_store_id: 0,
        select_cate_id: "",
        tabTit: 1,
        goods_cates: [],
        comments: [],
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
        scroll_to_goods_id: "",
        is_show_load_bg: !0,
        template_id: 0
    },
    onShareAppMessage: function() {
        return {
            title: "",
            desc: "",
            path: "/pages/store/store-goods-list/index?store_id=" + this.data.this_store_id
        };
    },
    onLoad: function(a) {
        var e = this, o = a.store_id || 0;
        e.setData({
            this_store_id: o
        });
        var i = a.cate_id;
        i && t.default.setStorage({
            key: "select_cate_id",
            data: i
        });
        var s = a.goods_id;
        s && e.setData({
            scroll_to_goods_id: "goods_" + s
        });
    },
    onShow: function() {
        var t = this;
        t.data.this_store_id <= 0 || !t.data.this_store_id ? t.getSingleStoreId() : this.getSourceData();
    },
    getSingleStoreId: function() {
        var t = this, o = this;
        a.get(e.duoguan_host_api_url + "/index.php/addon/DgStore/StoreApi/getSingleStoreId", {}, function(a) {
            o.setData({
                this_store_id: a.store_id
            }), t.getSourceData();
        }, this, {
            isShowLoading: !1
        });
    },
    getSourceData: function() {
        var t = this;
        t.getStoreInfo(), t.getGoodsCates();
    },
    getGoodsCates: function() {
        var o = this, i = o.data.this_store_id;
        a.get(e.duoguan_host_api_url + "/index.php/addon/DgStore/StoreApi/getGoodsCates", {
            store_id: i
        }, function(a) {
            if (o.data.goods_cates = a, o.setData({
                goods_cates: o.data.goods_cates,
                is_show_load_bg: !1
            }), !o.data.select_cate_id) try {
                var e = t.default.getStorageSync("select_cate_id"), i = 0;
                for (var s in o.data.goods_cates) o.data.goods_cates[s].id == e && (i = 1);
                e && 1 == i ? o.setData({
                    select_cate_id: e
                }) : o.setData({
                    select_cate_id: a[0].id
                });
            } catch (t) {
                o.data.select_cate_id || o.setData({
                    select_cate_id: a[0].id
                });
            }
            o.getStoreGoods();
        }, this, {
            isShowLoading: !1
        });
    },
    getStoreGoods: function() {
        var t = this, o = t.data.this_store_id, i = t.data.select_cate_id;
        a.get(e.duoguan_host_api_url + "/index.php/addon/DgStore/StoreApi/getStoreGoods", {
            store_id: o,
            cate_id: i,
            consume_type: 1
        }, function(a) {
            t.data.goods_data = a, t.setData({
                goods_data: t.data.goods_data,
                is_show_load_bg: !1,
                scroll_to_view: t.data.scroll_to_goods_id
            }), t.data.scroll_to_goods_id && t.setData({
                scroll_to_view: "goods_" + t.data.scroll_to_goods_id
            });
        });
    },
    getStoreInfo: function() {
        var t = this;
        a.get(e.duoguan_host_api_url + "/index.php/addon/DgStore/StoreApi/getStoreBasicInfo.html", {
            store_id: t.data.this_store_id
        }, function(a) {
            var e = a;
            t.data.store_data = e, t.setData({
                template_id: a.goods_list_template_id,
                store_data: e,
                is_show_load_bg: !1
            }), t.getCartList(), t.getComments();
        }, this, {
            isShowLoading: !1
        });
    },
    getComments: function() {
        var t = this, o = t.data.this_store_id;
        a.get(e.duoguan_host_api_url + "/index.php/addon/DgStore/StoreApi/getComments", {
            store_id: o
        }, function(a) {
            t.data.comments = a, t.setData({
                comments: t.data.comments
            });
        }, this, {
            isShowLoading: !1
        });
    },
    goods_info_bind: function(a) {
        var e = this;
        t.default.navigateTo({
            url: "../store-goods-details/index?goods_id=" + a.currentTarget.id + "&store_id=" + e.data.this_store_id
        });
    },
    tabSubBind: function(t) {
        var a = this, e = t.target.id;
        a.setData({
            tabTit: e
        });
    },
    guige_select_bind: function(t) {
        var o = this, i = t.currentTarget.id, s = t.currentTarget.dataset.goodsindex;
        o.setData({
            goods_attr_select: {}
        }), a.get(e.duoguan_host_api_url + "/index.php/addon/DgStore/Api/getOneGoodsAttr.html", {
            goods_id: i
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
        for (var a = this, e = t.currentTarget.id, o = t.currentTarget.dataset.type, i = a.data.goods_specification, s = 0, d = a.data.goods_attr_select, r = a.data.goods_a_info, _ = 0; _ < i.length; _++) if (i[_].name == o) {
            d[i[_].name] = null;
            for (n = 0; n < i[_].values.length; n++) i[_].values[n].ischeck = !1, i[_].values[n].id == e && (i[_].values[n].ischeck = !0, 
            d[i[_].name] = e);
        }
        for (_ = 0; _ < i.length; _++) for (var n = 0; n < i[_].values.length; n++) 1 == i[_].values[n].ischeck && i[_].values[n].format_price > 0 && (s += i[_].values[n].format_price);
        r.shop_price = s, a.setData({
            goods_specification: i,
            goods_attr_select: d,
            goods_a_info: r
        });
    },
    getCartList: function() {
        var o = this, i = this;
        a.get(e.duoguan_host_api_url + "/index.php/addon/DgStore/Api/getCartList.html", {
            store_id: i.data.this_store_id
        }, function(a) {
            var e = o, i = parseFloat(e.data.store_data.waimai_limit_jiner).toFixed(2) - a.all_g_price.toFixed(2);
            e.setData({
                cart_list: a.glist,
                all_g_number: a.all_g_number,
                all_g_price: a.all_g_price.toFixed(2),
                all_g_yunfei: a.all_g_yunfei.toFixed(2),
                more_need_maney: i.toFixed(2)
            }), 0 == a.all_g_number && e.setData({
                cart_list_isshow: !1
            }), t.default.hideToast();
        }, this, {
            isShowLoading: !1
        });
    },
    deleteCartList: function() {
        var t = this;
        a.get(e.duoguan_host_api_url + "/index.php/addon/DgStore/Api/deleteCartList.html", {
            store_id: t.data.this_store_id
        }, function(a) {
            t.getSourceData();
        }, this, {
            isShowLoading: !1
        });
    },
    changeCate: function(a) {
        var e = this, o = a.currentTarget.dataset.cate_id;
        t.default.setStorage({
            key: "select_cate_id",
            data: o
        }), e.setData({
            select_cate_id: o,
            goods_data: e.data.goods_data
        }), e.getStoreGoods();
    },
    cart_list_show_bind: function() {
        var t = this;
        1 == t.data.cart_list_isshow ? t.setData({
            cart_list_isshow: !1
        }) : t.setData({
            cart_list_isshow: !0
        });
    },
    bind_cart_number_jian: function(t) {
        var o = this, i = t.currentTarget.dataset.goodsindex;
        if (i >= 0) {
            var s = o.data.goods_data, d = s[i].cart_goods_num;
            d >= 1 && (s[i].cart_goods_num = parseInt(d) - 1), o.setData({
                goods_data: s
            });
        }
        var r = t.currentTarget.dataset.type, _ = t.currentTarget.dataset.cid, n = t.currentTarget.id, g = {};
        g.store_id = o.data.this_store_id, g.gid = n, g.cart_id = _, g.gnumber = -1, g.gattr = o.data.goods_attr_select, 
        a.get(e.duoguan_host_api_url + "/index.php/addon/DgStore/Api/addGoodsCart.html", g, function(t) {
            o.getCartList(), 1 == r && o.getStoreGoods();
        }, this, {
            isShowLoading: !1
        });
    },
    bind_cart_number_jia: function(o) {
        var i = this;
        if (1 == o.currentTarget.dataset.is_attr) {
            var s = i.data.goods_attr_select, d = i.data.goods_specification;
            if (console.log(s), console.log(d), Object.keys(s).length < d.length) return void t.default.alert("请选择属性!");
        }
        var r = o.currentTarget.dataset.goodsindex;
        if (r >= 0) {
            var _ = i.data.goods_data, n = _[r].cart_goods_num;
            _[r].cart_goods_num = parseInt(n) + 1, i.setData({
                goods_data: _
            });
        }
        var g = o.currentTarget.dataset.type, c = o.currentTarget.id, u = o.currentTarget.dataset.cid, l = {};
        l.store_id = i.data.this_store_id, l.gid = c, l.cart_id = u, l.gnumber = 1, l.gattr = i.data.goods_attr_select, 
        a.get(e.duoguan_host_api_url + "/index.php/addon/DgStore/Api/addGoodsCart.html", l, function(t) {
            i.getCartList(), 1 == g && i.getStoreGoods();
        }, this, {
            isShowLoading: !1
        });
    },
    cart_delete_bind: function() {
        var a = this;
        t.default.confirm("确认要清空购物车吗?", function(e) {
            1 == e.confirm && (t.default.showToast({
                title: "加载中",
                icon: "loading",
                duration: 1e4
            }), a.deleteCartList());
        });
    },
    goods_order_bind: function() {
        var a = this;
        a.data.store_data.waimai_limit_juli > 0 ? (t.default.showToast({
            title: "配送区域验证中",
            icon: "loading",
            duration: 1e4
        }), t.default.getLocation({
            type: "gcj02",
            success: function(e) {
                t.default.hideToast();
                var o = {};
                o.store_id = a.data.this_store_id, o.ws_lat = e.latitude, o.ws_lng = e.longitude, 
                a.comfirm_goods_order();
            },
            fail: function() {
                return t.default.openSetting({
                    success: function(e) {
                        0 == e.authSetting["scope.userLocation"] ? t.default.alert("请允许地理位置授权", function(t) {
                            a.goods_order_bind();
                        }) : a.goods_order_bind();
                    }
                }), !1;
            }
        })) : a.comfirm_goods_order();
    },
    coupon_list_bind: function(a) {
        var e = this;
        t.default.navigateTo({
            url: "/pages/store/store-coupon/index?list_type=1&store_id=" + e.data.this_store_id
        });
    },
    huodong_info_bind: function() {
        var a = this;
        t.default.navigateTo({
            url: "../store-active/index?&store_id=" + a.data.this_store_id
        });
    },
    redirectToStoreHome: function() {
        var a = this;
        t.default.reLaunch({
            url: "/pages/store/store-info/index?&store_id=" + a.data.this_store_id
        });
    },
    comfirm_goods_order: function() {
        var a = this;
        t.default.navigateTo({
            url: "../store-order-sure/index?store_id=" + a.data.this_store_id + "&buy_type=2"
        });
    },
    img_max_bind: function(a) {
        for (var e = this, o = a.currentTarget.dataset.url, i = a.currentTarget.dataset.key, s = e.data.source_data.comment_list[i].imglist.length, d = [], r = 0; r < s; r++) d[r] = e.data.source_data.comment_list[i].imglist[r].imgurl;
        t.default.previewImage({
            current: o,
            urls: d
        });
    },
    onPullDownRefresh: function() {
        var a = this;
        a.setData({
            submitIsLoading: !1
        }), a.getSourceData(), setTimeout(function() {
            t.default.stopPullDownRefresh();
        }, 1e3);
    }
});