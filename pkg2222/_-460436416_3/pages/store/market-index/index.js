getApp();

var t = require("../../../utils/requestUtil"), e = (require("../../../utils/util"), 
require("../../../utils/data"));

Page({
    data: {
        page_index: 1,
        goodsArr: [],
        categorys: [],
        latitude: "",
        longitude: "",
        keywords: "",
        is_show_cates_v: !1,
        select_category_id: "",
        select_category_title: "全部",
        sort_type: 1,
        is_show_load_bg: !0
    },
    onLoad: function(t) {
        var e = this;
        e.getCategorys(), e.getMarketInfo(), e.getLocation();
    },
    onPullDownRefresh: function() {
        var t = this;
        t.getCategorys(), t.getMarketInfo(), t.getLocation();
    },
    onReachBottom: function() {
        var t = this;
        t.getGoodsList(t.data.page_index);
    },
    onShareAppMessage: function() {},
    getMarketInfo: function() {
        var o = this;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getMarketInfo.html", {}, function(t) {
            o.setData({
                market_info: t
            });
        }, o, {
            isShowLoading: !1
        });
    },
    getLocation: function() {
        var t = this, e = wx.getStorageSync("LATITUD"), o = wx.getStorageSync("LONGITUDE"), a = wx.getStorageSync("ADDRESS");
        e && o && a && "undefined" != e && "undefined" != o ? (t.setData({
            latitude: e,
            longitude: o
        }), t.getGoodsList()) : wx.getLocation({
            type: "wgs84",
            success: function(e) {
                t.data.latitude = e.latitude, t.data.longitude = e.longitude;
            },
            complete: function() {
                t.getGoodsList();
            }
        });
    },
    getGoodsList: function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, a = this;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getMarketGoods.html", {
            page_index: o,
            ws_lat: a.data.latitude,
            ws_lng: a.data.longitude,
            cate_id: a.data.select_category_id,
            keywords: a.data.keywords,
            sort_type: a.data.sort_type
        }, function(t) {
            1 == o ? (a.data.goodsArr.splice(0, a.data.goodsArr.length), t.length > 0 && (a.data.goodsArr = a.data.goodsArr.concat(t))) : t.length > 0 && (a.data.goodsArr = a.data.goodsArr.concat(t)), 
            a.setData({
                goodsArr: a.data.goodsArr,
                is_show_load_bg: !1
            }), a.data.page_index = parseInt(a.data.page_index) + 1;
        });
    },
    getCategorys: function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var o = this;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getMarketGoodsCategorys.html", {}, function(t) {
            o.setData({
                categorys: t
            });
        });
    },
    show_or_hide_cate_v: function() {
        var t = this;
        t.setData({
            is_show_cates_v: !t.data.is_show_cates_v
        });
    },
    selectCategory: function(t) {
        var e = this, o = t.currentTarget.dataset.id, a = t.currentTarget.dataset.title;
        e.setData({
            select_category_id: o,
            select_category_title: a,
            is_show_load_bg: !1,
            sort_type: 1
        }), e.show_or_hide_cate_v(), e.getGoodsList(1);
    },
    change_sort_type: function() {
        var t = this;
        t.setData({
            sort_type: 2
        }), t.getGoodsList(1);
    },
    keyboardComplete: function(t) {
        var e = this;
        this.setData({
            keywords: t.detail.value,
            sort_type: 1
        }), e.getGoodsList(1);
    },
    push_to_store: function(t) {
        var e = t.currentTarget.dataset.store_id, o = t.currentTarget.dataset.goods_id, a = t.currentTarget.dataset.goods_category_id;
        console.log(t.currentTarget.dataset), wx.navigateTo({
            url: "../store-goods-list/index?store_id=" + e + "&goods_id=" + o + "&cate_id=" + a
        });
    }
});