var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/plugUtil")), a = (getApp(), require("../../../utils/requestUtil")), e = require("../../../utils/data");

Page({
    data: {
        tabIndex: "",
        page: 1,
        cate_data: [],
        c_data: [],
        picdata: [],
        indicatorDots: !0,
        autoPlay: !0,
        change_title: "",
        title: "",
        this_page_size: 1,
        this_page_num: 10,
        is_load_more: !0,
        is_rmd: 1,
        cid: "",
        keyword: ""
    },
    onLoad: function(t) {
        if (t.cid) {
            var i = t.cid;
            this.setData({
                this_page_size: 1,
                cid: i,
                c_data: []
            });
        } else if (t.keyword) {
            var s = t.keyword;
            this.setData({
                this_page_size: 1,
                cid: i,
                c_data: [],
                keyword: s
            });
        } else this.setData({
            this_page_size: 1,
            c_data: []
        });
        this.getBigcmsList(), this.getCarousel();
        var n = this;
        a.get(e.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/getCateList.html", {}, function(t) {
            n.setData({
                cate_data: t
            });
        }, this, {});
    },
    onReady: function() {
        t.default.popup(this, "DuoguanBigCms");
    },
    onShow: function() {},
    getCarousel: function() {
        var t = this;
        a.get(e.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/getCarousel.html", {}, function(a) {
            t.setData({
                picdata: a
            }), 1 == a.apdata ? t.setData({
                autoPlay: !0
            }) : t.setData({
                autoPlay: !1
            }), 1 == a.iddata ? t.setData({
                indicatorDots: !0
            }) : t.setData({
                indicatorDots: !1
            });
        }, this, {});
    },
    getBigcmsList: function(t) {
        var i = this, s = i.data.cid, n = i.data.keyword, o = i.data.c_data;
        t = t || !1;
        var d = {};
        s && i.setData({
            is_rmd: 0,
            tabIndex: s
        }), n && i.setData({
            is_rmd: 0
        }), d.cateid = i.data.tabIndex, d.pagesize = i.data.this_page_size, d.pagenum = i.data.this_page_num, 
        d.change_title = i.data.change_title, d.is_rmd = i.data.is_rmd, d.keyword = i.data.keyword, 
        a.get(e.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/getIndexDataList.html", d, function(t) {
            null == t || "" == t ? i.setData({
                is_load_more: !1
            }) : 1 == i.data.this_page_size && t.length < i.data.this_page_num ? i.setData({
                c_data: t,
                is_load_more: !1
            }) : 1 == i.data.this_page_size && t.length == i.data.this_page_num ? i.setData({
                c_data: t,
                is_load_more: !0
            }) : i.data.this_page_size > 1 && (o = o.concat(t), i.setData({
                c_data: o,
                is_load_more: !0
            }));
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: t
        });
    },
    onPullDownRefresh: function() {
        var a = this;
        a.setData({
            this_page_size: 1
        }), a.getBigcmsList(), this.getCarousel(), t.default.popup(this, "DuoguanBigCms");
    },
    onReachBottom: function() {
        var t = this;
        if (0 == t.data.is_load_more) return wx.hideNavigationBarLoading(), !1;
        t.setData({
            this_page_size: ++t.data.this_page_size
        }), t.getBigcmsList(!0);
    },
    onTabChangeTap: function(t) {
        var a = this;
        a.setData({
            is_load_more: !0
        });
        var e = t.currentTarget.dataset.tabIndex;
        "rmd" == e ? a.setData({
            tabIndex: "",
            is_rmd: 1,
            change_title: "",
            this_page_size: 1,
            this_page_num: 10,
            c_data: [],
            cid: "",
            keyword: ""
        }) : a.setData({
            tabIndex: e,
            is_rmd: 0,
            change_title: "",
            this_page_size: "1",
            c_data: [],
            cid: "",
            keyword: ""
        }), a.getBigcmsList();
    },
    searchTitle: function(t) {
        this.setData({
            title: t.detail.value,
            is_load_more: !0
        });
    },
    onSearch: function(t) {
        var a = this, e = a.data.title;
        a.setData({
            change_title: e,
            this_page_size: 1,
            c_data: [],
            tabIndex: "",
            cid: "",
            keyword: ""
        }), a.getBigcmsList();
    },
    closeSearch: function(t) {
        var a = this;
        a.setData({
            title: ""
        }), a.data.change_title && (a.setData({
            tabIndex: "",
            is_rmd: 1,
            change_title: "",
            this_page_size: 1,
            this_page_num: 10,
            c_data: [],
            cid: "",
            keyword: ""
        }), a.getBigcmsList());
    },
    onNavigateTap: function(t) {
        wx.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    onLunboContent: function(t) {
        wx.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    getCode: function(t) {
        var a = e.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/FXIndexCode.html&&token=" + e.duoguan_user_token + "&_r=" + new Date().getTime();
        wx.showToast({
            title: "正在努力加载中...",
            icon: "loading",
            duration: 1e4
        }), wx.getImageInfo({
            src: a,
            success: function(t) {
                wx.hideToast(), wx.previewImage({
                    current: t.path,
                    urls: [ t.path ]
                });
            },
            fail: function(t) {
                console.error(t), wx.showModal({
                    content: "加载失败！",
                    showCancel: !1
                }), wx.hideToast();
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    changeSearchStatus: function() {
        this.setData({
            search_open_status: !this.data.search_open_status
        });
    }
});