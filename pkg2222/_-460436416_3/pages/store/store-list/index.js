var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/dg")), e = (getApp(), require("../../../utils/requestUtil")), a = require("../../../utils/data");

Page({
    data: {
        page_index: 1,
        storeListArr: [],
        store_list: [ !1 ],
        latitude: "",
        longitude: "",
        search_value: "",
        cates: [],
        select_cate_id: "",
        p_cate_select_index: 0,
        p_cate_select_id: -1,
        c_cate_select_index: -1,
        c_cate_select_id: 0,
        c_cate_select_title: "全部",
        is_show_cates: !1,
        is_show_sort: !1,
        sort_index: 1,
        sort_title: "距离最近",
        is_show_load_bg: !0
    },
    onLoad: function(t) {
        var e = this;
        e.setData({
            p_cate_select_id: t.cate_id,
            select_cate_id: t.cate_id,
            c_cate_select_title: t.cate_name
        }), e.data.search_value = t.search_value, e.getStoreCates(), e.getLocation();
    },
    store_info_bind: function(e) {
        var a = e.currentTarget.dataset.store_template_type, s = e.currentTarget.dataset.xcx_appid;
        s ? t.default.navigateToMiniProgram({
            appId: s,
            path: "",
            extraData: {
                foo: "bar"
            },
            envVersion: "release",
            success: function(t) {
                console.log(t);
            },
            fail: function(t) {
                console.log(t);
            }
        }) : 1 == a || 2 == a || 3 == a || 4 == a ? t.default.navigateTo({
            url: "../store-info/index?store_id=" + e.currentTarget.id
        }) : t.default.navigateTo({
            url: "../store-goods-list/index?store_id=" + e.currentTarget.id
        });
    },
    onPullDownRefresh: function() {
        var e = this;
        e.data.page_index = 1, e.getLocation(), setTimeout(function() {
            t.default.stopPullDownRefresh();
        }, 1e3);
    },
    onReachBottom: function() {
        var t = this;
        t.data.page_index > 1 && t.getStoreList(t.data.page_index);
    },
    getLocation: function() {
        var e = this;
        t.default.getLocation({
            type: "wgs84",
            success: function(t) {
                e.data.latitude = t.latitude, e.data.longitude = t.longitude;
            },
            complete: function() {
                e.getStoreList(e.data.page_index);
            }
        });
    },
    getStoreList: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, s = this;
        e.get(a.duoguan_host_api_url + "/index.php/addon/DgStore/Api/getStoreList.html", {
            version: 2,
            page_index: t,
            ws_lat: s.data.latitude,
            ws_lng: s.data.longitude,
            store_cate: s.data.select_cate_id,
            search_vlue: s.data.search_value,
            sort_type: s.data.sort_index
        }, function(e) {
            1 == t ? (s.data.storeListArr.splice(0, s.data.storeListArr.length), e.length > 0 && (s.data.storeListArr = s.data.storeListArr.concat(e))) : e.length > 0 && (s.data.storeListArr = s.data.storeListArr.concat(e)), 
            s.setData({
                store_list: s.data.storeListArr,
                is_show_load_bg: !1
            }), s.data.page_index = parseInt(t) + 1;
        });
    },
    getStoreCates: function() {
        var t = this;
        e.get(a.duoguan_host_api_url + "/index.php/addon/DgStore/StoreApi/getStoreCates.html", {}, function(e) {
            console.log(e), t.setData({
                cates: e
            });
        });
    },
    clickCate: function(t) {
        var e = this, a = t.currentTarget.dataset.type, s = t.currentTarget.id, i = t.currentTarget.dataset.index;
        if (1 == a) e.setData({
            p_cate_select_id: s,
            p_cate_select_index: i,
            c_cate_select_id: 0
        }), -1 == i && (e.setData({
            select_cate_id: "",
            is_show_cates: !1,
            c_cate_select_title: "全部"
        }), e.onPullDownRefresh()); else if (2 == a) {
            e.setData({
                c_cate_select_id: s,
                c_cate_select_index: i,
                is_show_cates: !1
            });
            var _ = e.data.p_cate_select_index, o = e.data.cates;
            -1 == i ? e.setData({
                c_cate_select_title: o[_].title,
                select_cate_id: o[_].id
            }) : e.setData({
                c_cate_select_title: o[_].c_cates[i].title,
                select_cate_id: o[_].c_cates[i].id
            }), e.onPullDownRefresh();
        }
    },
    top_nav_select: function(t) {
        var e = this, a = t.currentTarget.id;
        1 == a ? e.setData({
            is_show_sort: !1,
            is_show_cates: !e.data.is_show_cates
        }) : 2 == a ? e.setData({
            is_show_cates: !1,
            is_show_sort: !e.data.is_show_sort
        }) : 66 == a && e.setData({
            is_show_cates: !1,
            is_show_sort: !1
        });
    },
    sort_select: function(t) {
        var e = this, a = t.currentTarget.id, s = t.currentTarget.dataset.title;
        e.setData({
            is_show_sort: !1,
            sort_index: a,
            sort_title: s
        }), e.onPullDownRefresh();
    }
});