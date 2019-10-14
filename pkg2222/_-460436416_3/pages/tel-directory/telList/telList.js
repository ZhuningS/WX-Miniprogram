getApp();

var t = require("../../../utils/requestUtil"), a = require("../../../utils/data");

Page({
    data: {
        keyColumn: 0,
        listColumn: 0,
        multiArray: [ [], [] ],
        multiIndex: [ -1, 0 ],
        coordinateArr: [],
        this_cate_one_id: 0,
        this_cate_two_id: 0,
        region: [ "全城", "全城" ],
        index: 1,
        synSortArr: [ "距离最近", "最新入驻" ],
        this_tel_data: null,
        this_page_size: 1,
        this_page_num: 20,
        is_loadmore: !0,
        this_user_city: "",
        this_latitude_data: 0,
        this_longitude_data: 0,
        this_keywords: "",
        is_opcate: !0
    },
    chang_this_keyword: function(t) {
        this.setData({
            this_keywords: t.detail.value
        });
    },
    search_index_data: function() {
        this.setData({
            this_page_size: 1,
            this_page_num: 20,
            is_loadmore: !0
        }), this.get_index_data();
    },
    get_user_location: function() {
        var t = this;
        wx.getLocation({
            type: "gcj02",
            success: function(a) {
                t.setData({
                    this_latitude_data: a.latitude,
                    this_longitude_data: a.longitude
                });
            },
            complete: function() {
                t.get_index_data();
            }
        });
    },
    go_detail_bind: function(t) {
        wx.navigateTo({
            url: "../detail/detail?id=" + t.currentTarget.id
        });
    },
    onLoad: function(e) {
        var i = this;
        void 0 != e.keyword && i.setData({
            this_keywords: e.keyword
        }), void 0 != e.cate_id && (1 == e.level ? i.setData({
            this_cate_one_id: e.cate_id
        }) : i.setData({
            this_cate_two_id: e.cate_id
        })), i.setData({
            catename: e.name ? e.name : "请选择"
        });
        var d = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        };
        t.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiRuzhu/getConfigData", {
            categorys: 1
        }, function(t) {
            for (var a = t.tel_cate, e = [], n = [], s = 0; s < a.length; s++) if (e.push(a[s].title), 
            void 0 != a[s].child && 0 == s) for (var o = 0; o < a[s].child.length; o++) n.push(a[s].child[o].title);
            d.multiArray[0] = e, d.multiArray[1] = n, i.setData(d), i.setData({
                categoryArr: t.tel_cate,
                durationArr: t.config.settled_rule,
                this_tel_config: t.config
            }), i.get_user_location();
        }, this, {
            isShowLoading: !1
        });
    },
    bindMultiPickerChange: function(t) {
        var a = this, e = t.detail.value, i = parseInt(e[0]) ? parseInt(e[0]) : 0, d = parseInt(e[1]) ? parseInt(e[1]) : 0, n = this.data.categoryArr, s = 0, o = 0;
        s = n[i].id, void 0 != n[i].child && (o = n[i].child[d].id), this.setData({
            multiIndex: t.detail.value,
            this_cate_one_id: s,
            this_cate_two_id: o,
            is_opcate: !1
        }), a.get_index_data();
    },
    bindMultiPickerColumnChange: function(t) {
        var a = t.detail.column, e = t.detail.value, i = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        };
        i.multiIndex[a] = e;
        var d = [];
        if (0 != a) return !1;
        var n = this.data.categoryArr;
        if (void 0 != n[e].child) for (var s = 0; s < n[e].child.length; s++) d.push(n[e].child[s].title);
        i.multiArray[1] = d, i.multiIndex[1] = 0, this.setData(i);
    },
    get_index_data: function() {
        var e = this, i = {};
        i._p = e.data.this_page_size, i.keyword = e.data.this_keywords, i.one_cate_id = e.data.this_cate_one_id, 
        i.two_cate_id = e.data.this_cate_two_id, i.city = e.data.this_user_city, i.lng = e.data.this_longitude_data, 
        i.lat = e.data.this_latitude_data, i.city = e.data.region[1], i.type = 0 == e.data.index ? 1 : 0, 
        t.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/Api/documentList", i, function(t) {
            null == t ? e.setData({
                is_loadmore: !1
            }) : t.length < 20 && e.setData({
                is_loadmore: !1
            }), e.setData({
                this_tel_data: t
            });
        }, this, {
            isShowLoading: !0
        });
    },
    onReachBottom: function() {
        var e = this;
        if (0 == e.data.is_loadmore) return !1;
        var i = {};
        i._p = e.data.this_page_size + 1, i.one_cate_id = e.data.this_cate_one_id, i.two_cate_id = e.data.this_cate_two_id, 
        i.city = e.data.this_user_city, i.lng = e.data.this_longitude_data, i.lat = e.data.this_latitude_data, 
        i.city = e.data.region[1], i.type = 0 == e.data.index ? 1 : 0, t.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanTel/Api/documentList.html", i, function(t) {
            if (null == t) e.setData({
                is_loadmore: !1
            }); else {
                t.length < 20 && e.setData({
                    is_loadmore: !1
                });
                var a = e.data.this_tel_data;
                a = a.concat(t), e.setData({
                    this_tel_data: a,
                    this_page_size: i.pagesize
                });
            }
        }, e, {
            isShowLoading: !0
        });
    },
    onPullDownRefresh: function() {
        var t = this;
        t.setData({
            multiIndex: [ -1, 0 ],
            this_cate_one_id: 0,
            this_cate_two_id: 0,
            index: 0,
            region: [ "全城", "全城" ],
            this_page_size: 1,
            this_page_num: 20,
            is_loadmore: !0,
            this_user_city: "",
            this_keywords: ""
        }), t.get_index_data(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onCallTap: function(e) {
        var i = this, d = e.currentTarget.dataset, n = d.mobile, s = d.id;
        n && wx.makePhoneCall({
            phoneNumber: n,
            success: function(e) {
                t.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/Api/documentCall", {
                    id: s
                }, function(t) {
                    i.onPullDownRefresh();
                }, this, {});
            }
        });
    },
    bindRegionChange: function(t) {
        this.setData({
            region: t.detail.value
        }), this.get_index_data();
    },
    bindPickerChange: function(t) {
        this.setData({
            index: t.detail.value
        }), this.get_index_data();
    },
    openLocation: function(t) {
        wx.openLocation({
            latitude: parseFloat(t.currentTarget.dataset.lat),
            longitude: parseFloat(t.currentTarget.dataset.lng),
            address: t.currentTarget.dataset.address,
            name: t.currentTarget.dataset.name,
            scale: 28
        });
    }
});