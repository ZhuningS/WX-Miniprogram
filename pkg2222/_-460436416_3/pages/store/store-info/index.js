function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}

var o, a = t(require("../../../wxParse/wxParse")), i = t(require("../../../utils/underscore")), s = t(require("../../../utils/dg")), r = (getApp(), 
require("../../../utils/requestUtil")), n = require("../../../utils/data");

Page((o = {
    data: {
        store_data: !1,
        this_store_id: 0,
        is_show_load_bg: !0,
        is_show_back_home: !0,
        storeSwiperNum: 0,
        store_type: 2,
        is_show_all_intro: !1,
        is_show_consult_view: !1
    },
    storeSwiperChange: function(t) {
        this.setData({
            storeSwiperNum: t.detail.current
        });
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: t.data.store_data.store_name,
            desc: t.data.store_data.store_jieshao,
            path: "pages/store/store-info/index?store_id=" + t.data.this_store_id
        };
    },
    onLoad: function(t) {
        var e = this, o = t.store_id || 0;
        0 == o ? e.getStoreConfig() : (e.setData({
            this_store_id: o
        }), e.getStoreInfo());
    },
    huodong_info_bind: function() {
        var t = this;
        wx.navigateTo({
            url: "../store-active/index?&store_id=" + t.data.this_store_id
        });
    },
    getStoreConfig: function() {
        var t = this;
        r.get(n.duoguan_host_api_url + "/index.php/addon/DgStore/Api/getStoreConfig.html", {}, function(e) {
            t.setData({
                store_type: e.store_type,
                this_store_id: e.store_id
            }), t.getStoreInfo();
        }, t, {
            isShowLoading: !1
        });
    },
    jump_xcx: function(t) {
        var e = t.currentTarget.id;
        s.default.navigateToMiniProgram({
            appId: e,
            path: "",
            extraData: {
                foo: "bar"
            },
            envVersion: "develop",
            success: function(t) {}
        });
    },
    rapid_pay_bind: function(t) {
        var e = this;
        s.default.navigateTo({
            url: "../store-rapid-pay/index?store_id=" + e.data.this_store_id
        });
    },
    coupon_list_bind: function(t) {
        var e = this;
        s.default.navigateTo({
            url: "/pages/store/store-coupon/index?list_type=1&store_id=" + e.data.this_store_id
        });
    },
    goods_info_bind: function(t) {
        var e = this;
        s.default.navigateTo({
            url: "../store-goods-details/index?goods_id=" + t.currentTarget.id + "&store_id=" + e.data.this_store_id
        });
    },
    goods_list_bind: function(t) {
        var e = this;
        s.default.navigateTo({
            url: "../store-goods-list/index?store_id=" + e.data.this_store_id
        });
    }
}, e(o, "huodong_info_bind", function() {
    var t = this;
    s.default.navigateTo({
        url: "../store-active/index?&store_id=" + t.data.this_store_id
    });
}), e(o, "huodong_quan_info_bind", function() {
    var t = this;
    s.default.navigateTo({
        url: "../store-juan/index?&store_id=" + t.data.this_store_id
    });
}), e(o, "go_user_order_bind", function(t) {
    s.default.navigateTo({
        url: "/pages/store/store-order-list/index"
    });
}), e(o, "get_location_bind", function() {
    var t = this, e = t.data.store_data.store_gps_lat, o = t.data.store_data.store_gps_lng;
    s.default.openLocation({
        latitude: parseFloat(e),
        longitude: parseFloat(o),
        scale: 18,
        name: t.data.store_data.store_name,
        address: t.data.store_data.store_address
    });
}), e(o, "call_phone_bind", function() {
    var t = this;
    s.default.makePhoneCall({
        phoneNumber: t.data.store_data.store_con_mobile
    });
}), e(o, "getStoreInfo", function() {
    var t = this, e = this;
    r.get(n.duoguan_host_api_url + "/index.php/addon/DgStore/StoreApi/getStoreHomeInfo.html", {
        store_id: e.data.this_store_id,
        versions: 2
    }, function(o) {
        var r = o;
        console.log(o), e.data.store_data = r, e.setData({
            is_show_load_bg: !1,
            store_data: r,
            comment_data: r.recommend_comments,
            comment_title: "最新评价"
        });
        var n = {
            setData: function(e) {
                i.default.each(e.content.images, function(t, o) {
                    0 !== t.attr.src.indexOf("http") && (t.attr.src = _data.DUOGUAN_HOST_URL + t.attr.src, 
                    e.content.imageUrls[o] = t.attr.src);
                }), t.setData(e);
            }
        };
        null != o.store_intro && "" != o.store_intro && (a.default.wxParse("content", "html", o.store_intro, n), 
        t.wxParseImgLoad = n.wxParseImgLoad, t.wxParseImgTap = n.wxParseImgTap, s.default.setNavigationBarTitle({
            title: r.store_name
        }));
    }, this);
}), e(o, "buy_now", function(t) {
    var e = this;
    s.default.navigateTo({
        url: "../store-order-sure/index?store_id=" + e.data.this_store_id + "&buy_type=1&goods_id=" + t.currentTarget.id
    });
}), e(o, "backHome", function() {
    s.default.switchTab({
        url: n.duoguan_app_index_path
    });
}), e(o, "onPullDownRefresh", function() {
    this.getStoreInfo(), setTimeout(function() {
        s.default.stopPullDownRefresh();
    }, 1e3);
}), e(o, "onShareAppMessage", function() {
    var t = this;
    return {
        title: t.data.store_data.store_name,
        desc: t.data.store_data.store_jieshao,
        path: "pages/store/store-info/index?store_id=" + t.data.this_store_id
    };
}), e(o, "change_store_intro_show", function() {
    this.setData({
        is_show_all_intro: !this.data.is_show_all_intro
    });
}), e(o, "change_consult_view_show", function() {
    this.setData({
        is_show_consult_view: !this.data.is_show_consult_view
    });
}), e(o, "formSubmit", function(t) {
    var e = this, o = t.detail.value;
    o.store_id = e.data.this_store_id, r.get(n.duoguan_host_api_url + "/index.php/addon/DgStore/StoreApi/postConsultMsg.html", o, function(t) {
        s.default.alert("提交成功，我们会尽快回复您！", function(t) {
            e.setData({
                is_show_consult_view: !1
            });
        });
    }, e, {
        isShowLoading: !1
    });
}), e(o, "toWebView", function() {
    s.default.navigateTo({
        url: "/pages/store/store-webview/index?weburl=" + this.data.store_data.store_webview_url
    });
}), o));