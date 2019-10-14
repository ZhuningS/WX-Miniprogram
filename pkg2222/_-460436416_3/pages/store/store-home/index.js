function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var a, o = t(require("../../../wxParse/wxParse")), s = t(require("../../../utils/underscore")), i = t(require("../../../utils/dg")), r = (getApp(), 
require("../../../utils/requestUtil")), n = require("../../../utils/util"), d = require("../../../utils/data");

Page({
    data: (a = {
        reachBottom_delayTime: 0,
        store_type: "",
        store_cate: "",
        single_store_info: [],
        page_index: 1,
        storeListArr: [],
        is_toLoad: !1,
        param: {
            keyword: "",
            type: 0
        },
        is_show_getLocation: !1,
        isTabFixed: !1,
        sort_index: 4,
        g_share_title: "",
        g_share_desc: "",
        is_show_load_bg: !0,
        search_p: "搜索",
        source_data: {},
        goods_data_waimai: [],
        goods_data_diannei: [],
        store_data: !1,
        tabTit: "",
        this_store_id: 0,
        consume_type: "",
        cart_list_isshow: !1,
        cart_list: [],
        store_yingye_status_text: "未营业",
        store_yingye_status_val: 2,
        store_button_status: !0,
        submitIsLoading: !1,
        guigeIsShow: !1,
        goods_attr_select: {},
        goods_specification: "",
        goods_a_info: {}
    }, e(a, "store_data", !1), e(a, "this_store_id", 0), e(a, "is_show_back_home", !1), 
    e(a, "storeSwiperNum", 0), e(a, "is_show_all_intro", !1), e(a, "is_show_consult_view", !1), 
    a),
    onLoad: function(t) {
        this.tabOffsetTop = null, this.getStoreConfig(), this.getShareData(), this.getMarketInfo();
    },
    onPullDownRefresh: function() {
        var t = this;
        t.data.page_index = 1, t.getStoreConfig(), setTimeout(function() {
            i.default.stopPullDownRefresh();
        }, 1500);
    },
    onReachBottom: function() {
        var t = this;
        2 == t.data.store_type && t.data.page_index > 1 && t.getStoreList(t.data.page_index);
    },
    onShow: function() {
        var t = this;
        1 == t.data.store_type && (t.setData({
            submitIsLoading: !1
        }), t.getStoreInfo());
    },
    getShareData: function() {
        var t = this;
        r.get(d.duoguan_get_share_data_url, {
            mmodule: "dg_store"
        }, function(e) {
            t.setData({
                g_share_title: e.title,
                g_share_desc: e.desc
            });
        });
    },
    getStoreConfig: function() {
        var t = this;
        r.get(d.duoguan_host_api_url + "/index.php/addon/DgStore/Api/getStoreConfig.html", {}, function(e) {
            if (t.data.store_type = e.store_type, e.market_config && 1 == e.market_config.market_status) a = 1; else var a = 0;
            if (t.setData({
                is_ruzhu: e.is_ruzhu,
                is_show_market: a
            }), 1 == e.store_type) t.data.this_store_id = e.store_id, t.setData({
                store_type: e.store_type
            }), t.getStoreInfo(); else if (2 == e.store_type) {
                t.setData({
                    store_type: e.store_type
                });
                var o = i.default.getStorageSync("LATITUD"), s = i.default.getStorageSync("LONGITUDE"), r = i.default.getStorageSync("ADDRESS");
                o && s && r && "undefined" != o && "undefined" != s ? (t.setData({
                    address: r
                }), t.getManyStoresSource()) : (t.setData({
                    is_show_load_bg: !1,
                    is_show_getLocation: !0
                }), t.getLocation());
            }
        }, t, {
            isShowLoading: !1
        });
    },
    jump_market: function() {
        i.default.navigateTo({
            url: "../market-index/index"
        });
    },
    onPageScroll: function(t) {
        if (null !== this.tabOffsetTop) {
            var e = t.scrollTop - this.tabOffsetTop + 46 >= 0;
            this.data.isTabFixed != e && this.setData({
                isTabFixed: e
            });
        }
    },
    updateTabOffsetTop: function() {
        var t = this, e = i.default.createSelectorQuery();
        e.select("#store_list").boundingClientRect(), e.selectViewport().scrollOffset(), 
        e.exec(function(e) {
            null == t.tabOffsetTop && (t.tabOffsetTop = e[0].top);
        });
    },
    sort_select: function(t) {
        var e = this, a = t.currentTarget.id;
        this.setData({
            sort_index: a
        }), e.data.page_index = 1, e.getStoreList();
    },
    getManyStoresSource: function() {
        var t = this, e = this;
        r.get(d.duoguan_host_api_url + "/index.php/addon/DgStore/Api/getStoreCategoryAndAdvert.html", {}, function(e) {
            e.categoryList;
            var a = e.advert, o = a.length, s = !1;
            s = !(e.category_num < 10), t.setData({
                is_show_load_bg: !1,
                store_category_list: e.categoryList,
                store_category_num: e.category_num,
                advertList: a,
                advertCount: o,
                indicatorDots: s
            }), i.default.createSelectorQuery && setTimeout(t.updateTabOffsetTop, 500);
        }, e, {
            isShowLoading: !1
        }), e.getStoreList();
    },
    getStoreList: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = this, a = i.default.getStorageSync("LATITUD"), o = i.default.getStorageSync("LONGITUDE");
        i.default.getStorageSync("ADDRESS");
        a || o || 1 != e.data.sort_index || (e.setData({
            is_show_load_bg: !1,
            is_show_getLocation: !0
        }), e.getLocation()), r.get(d.duoguan_host_api_url + "/index.php/addon/DgStore/Api/getStoreList.html", {
            version: 2,
            page_index: t,
            ws_lat: a,
            ws_lng: o,
            store_cate: e.data.store_cate,
            keywords: e.data.param.keyword,
            sort_type: e.data.sort_index
        }, function(a) {
            1 == t ? (e.data.storeListArr.splice(0, e.data.storeListArr.length), a.length > 0 && (e.data.storeListArr = e.data.storeListArr.concat(a))) : a.length > 0 && (e.data.storeListArr = e.data.storeListArr.concat(a)), 
            e.setData({
                is_show_load_bg: !1,
                store_list: e.data.storeListArr
            }), e.data.page_index = parseInt(e.data.page_index) + 1;
        }, e, {
            isShowLoading: !1
        });
    },
    getLocation: function() {
        var t = this;
        i.default.getLocation({
            type: "wgs84",
            success: function(e) {
                n.getMapSdk().reverseGeocoder({
                    location: {
                        latitude: e.latitude,
                        longitude: e.longitude
                    },
                    success: function(e) {
                        var a = e.result.address_component, o = "";
                        a.street_number ? o = a.street_number : a.street ? o = a.street : a.city && (o = a.city), 
                        e = e.result, i.default.setStorageSync("LATITUD", e.location.lat), i.default.setStorageSync("LONGITUDE", e.location.lng), 
                        i.default.setStorageSync("ADDRESS", o), t.setData({
                            address: o,
                            is_show_getLocation: !1
                        }), t.data.page_index = 1, t.getManyStoresSource();
                    }
                });
            },
            complete: function() {}
        });
    },
    onShareAppMessage: function() {
        var t = this;
        return 2 == t.data.store_type ? {
            title: t.data.g_share_title,
            desc: t.data.g_share_desc,
            path: "/pages/store/store-home/index"
        } : {
            title: t.data.store_data.store_name,
            desc: t.data.store_data.store_jieshao,
            path: "/pages/store/store-home/index"
        };
    },
    advert_top_bind: function(t) {
        i.default.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    store_category_click: function(t) {
        i.default.navigateTo({
            url: "../store-list/index?cate_id=" + t.currentTarget.id + "&cate_name=" + t.currentTarget.dataset.cate_name
        });
    },
    onShowSearchTap: function() {
        this.setData({
            searchShow: !0
        });
    },
    onHideSearchBlur: function(t) {
        console.log(0x3c3bc3a4a2f75c0000);
    },
    onSearchSubmit: function(t) {
        var e = this;
        e.data.param.keyword = t.detail.value.keyword, e.data.store_cate = "", e.data.page_index = 1, 
        e.getStoreList(), this.setData({
            search_p: e.data.param.keyword,
            param: e.data.param
        });
    },
    onClearKeywordTap: function() {
        this.data.param.keyword = "", this.setData({
            param: this.data.param
        });
    },
    keyboardComplete: function(t) {
        var e = this;
        this.setData({
            searchShow: !1
        }), e.data.param.keyword = t.detail.value, e.data.store_cate = "", e.data.page_index = 1, 
        e.getStoreList();
    },
    onOpenMapTap: function(t) {
        var e = this;
        i.default.chooseLocation({
            success: function(t) {
                e.setData({
                    is_show_getLocation: !1,
                    address: t.name
                }), i.default.setStorageSync("LATITUD", t.latitude), i.default.setStorageSync("LONGITUDE", t.longitude), 
                i.default.setStorageSync("ADDRESS", t.name), e.data.page_index = 1, e.getManyStoresSource();
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    store_info_bind: function(t) {
        var e = t.currentTarget.dataset.store_template_type, a = t.currentTarget.dataset.xcx_appid;
        a ? wx.navigateToMiniProgram({
            appId: a,
            path: "",
            extraData: {
                foo: "bar"
            },
            envVersion: "release",
            success: function(t) {},
            fail: function(t) {}
        }) : 1 == e || 2 == e || 3 == e || 4 == e ? i.default.navigateTo({
            url: "../store-info/index?store_id=" + t.currentTarget.id
        }) : i.default.navigateTo({
            url: "../store-goods-list/index?store_id=" + t.currentTarget.id
        });
    },
    ruzhu_bind: function(t) {
        i.default.navigateTo({
            url: "../store-ruzhu/index"
        });
    },
    rapid_pay_bind: function(t) {
        var e = this;
        i.default.navigateTo({
            url: "../store-rapid-pay/index?store_id=" + e.data.this_store_id
        });
    },
    coupon_list_bind: function(t) {
        var e = this;
        i.default.navigateTo({
            url: "../store-coupon/index?list_type=1&store_id=" + e.data.this_store_id
        });
    },
    goods_info_bind: function(t) {
        var e = this;
        i.default.navigateTo({
            url: "../store-goods-details/index?goods_id=" + t.currentTarget.id + "&store_id=" + e.data.this_store_id
        });
    },
    goods_list_bind: function(t) {
        var e = this, a = t.currentTarget.dataset.consume_type;
        i.default.navigateTo({
            url: "../store-goods-list/index?consume_type=" + a + "&store_id=" + e.data.this_store_id
        });
    },
    huodong_info_bind: function() {
        var t = this;
        i.default.navigateTo({
            url: "../store-active/index?&store_id=" + t.data.this_store_id
        });
    },
    huodong_quan_info_bind: function() {
        var t = this;
        i.default.navigateTo({
            url: "../store-juan/index?&store_id=" + t.data.this_store_id
        });
    },
    go_user_order_bind: function(t) {
        i.default.navigateTo({
            url: "/pages/store/store-order-list/index"
        });
    },
    get_location_bind: function() {
        var t = this, e = t.data.store_data.store_gps_lat, a = t.data.store_data.store_gps_lng;
        i.default.openLocation({
            latitude: parseFloat(e),
            longitude: parseFloat(a),
            scale: 18,
            name: t.data.store_data.store_name,
            address: t.data.store_data.store_address
        });
    },
    call_phone_bind: function() {
        var t = this;
        i.default.makePhoneCall({
            phoneNumber: t.data.store_data.store_con_mobile
        });
    },
    getStoreInfo: function() {
        var t = this, e = this;
        r.get(d.duoguan_host_api_url + "/index.php/addon/DgStore/StoreApi/getStoreHomeInfo.html", {
            store_id: e.data.this_store_id,
            versions: 2
        }, function(a) {
            var r = a;
            e.data.store_data = r, e.setData({
                is_show_load_bg: !1,
                store_data: r,
                comment_data: r.recommend_comments,
                comment_title: "最新评价"
            });
            var n = {
                setData: function(e) {
                    s.default.each(e.content.images, function(t, a) {
                        0 !== t.attr.src.indexOf("http") && (t.attr.src = _data.DUOGUAN_HOST_URL + t.attr.src, 
                        e.content.imageUrls[a] = t.attr.src);
                    }), t.setData(e);
                }
            };
            o.default.wxParse("content", "html", a.store_intro, n), t.wxParseImgLoad = n.wxParseImgLoad, 
            t.wxParseImgTap = n.wxParseImgTap, i.default.setNavigationBarTitle({
                title: r.store_name
            });
        }, e, {
            isShowLoading: !1
        });
    },
    buy_now: function(t) {
        var e = this;
        i.default.navigateTo({
            url: "../store-order-sure/index?store_id=" + e.data.this_store_id + "&consume_type=1&goods_id=" + t.currentTarget.id
        });
    },
    change_store_intro_show: function() {
        this.setData({
            is_show_all_intro: !this.data.is_show_all_intro
        });
    },
    change_consult_view_show: function() {
        this.setData({
            is_show_consult_view: !this.data.is_show_consult_view
        });
    },
    formSubmit: function(t) {
        var e = this, a = t.detail.value;
        a.store_id = e.data.this_store_id, r.get(d.duoguan_host_api_url + "/index.php/addon/DgStore/StoreApi/postConsultMsg.html", a, function(t) {
            console.log(t), i.default.alert("提交成功，我们会尽快回复您！", function(t) {
                e.setData({
                    is_show_consult_view: !1
                });
            });
        }, e, {
            isShowLoading: !1
        });
    },
    storeSwiperChange: function(t) {
        this.setData({
            storeSwiperNum: t.detail.current
        });
    },
    getMarketInfo: function() {
        var t = this;
        r.get(d.duoguan_host_api_url + "/index.php/addon/DgStore/StoreApi/getMarketInfo.html", {}, function(e) {
            t.setData({
                market_config: e.config_info
            });
        }, t, {
            isShowLoading: !1
        });
    },
    toWebView: function() {
        i.default.navigateTo({
            url: "/pages/store/store-webview/index?weburl=" + this.data.store_data.store_webview_url
        });
    }
});