var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/plugUtil")), a = (require("../../../utils/functionData"), 
require("../../../utils/requestUtil")), i = require("../../../utils/data");

getApp();

Page({
    data: {
        g_share_title: "",
        g_share_desc: "",
        cate_list: [],
        this_item: 0,
        this_cate_id: 0,
        goods_list: [],
        showLoading: !1,
        this_page: 1,
        pagesize: 10,
        this_finish_page: 0,
        glo_is_load: !0
    },
    detail: function(t) {
        wx.navigateTo({
            url: "../info/info?tid=" + t.currentTarget.id + "&chengtuan_id=0"
        });
    },
    index_item_bind: function(t) {
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        });
        var e = this, s = t.target.id;
        e.setData({
            this_item: s,
            this_page: 1,
            this_cate_id: s
        }), a.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getGoodsList.html", {
            cid: s,
            pagesize: 1,
            pagenum: e.data.pagesize
        }, function(t) {
            e.initGoodsListData(t);
        }, this, {
            isShowLoading: !1
        });
    },
    onLoad: function() {
        t.default.popup(this, "DuoguanTuan");
        var e = this;
        a.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getGoodsList.html", {
            cid: 0,
            pagesize: 1,
            pagenum: e.data.pagesize
        }, function(t) {
            e.initGoodsListData(t);
        }, this, {
            isShowLoading: !0
        }), a.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanUser/Api/getShareInfo.html", {
            mmodule: "duoguantuan"
        }, function(t) {
            e.initGetShareData(t);
        }, this, {
            isShowLoading: !1
        }), a.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getCateList.html", {}, function(t) {
            e.initTuanCateData(t);
        }, this, {
            isShowLoading: !1
        });
    },
    initGetShareData: function(t) {
        this.setData({
            g_share_title: t.title,
            g_share_desc: t.desc
        });
    },
    initTuanCateData: function(t) {
        this.setData({
            cate_list: t,
            glo_is_load: !1
        });
    },
    initGoodsListData: function(t) {
        var a = this;
        a.setData({
            goods_list: t
        }), null == t ? a.setData({
            showLoading: !1
        }) : t.length >= a.data.pagesize ? a.setData({
            showLoading: !0
        }) : a.setData({
            showLoading: !1
        }), wx.hideToast();
    },
    initGoodsListLoadData: function(t) {
        var a = this;
        null == t ? a.setData({
            showLoading: !1
        }) : (t.length >= a.data.pagesize ? a.setData({
            showLoading: !0
        }) : a.setData({
            showLoading: !1
        }), a.setData({
            goods_list: a.data.goods_list.concat(t),
            this_page: a.data.this_page + 1
        })), a.setData({
            this_finish_page: a.this_finish_page + 1
        });
    },
    onReachBottom: function(t) {
        var e = this, s = this.data.this_item;
        e.data.this_finish_page != e.data.this_page && a.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getGoodsList.html", {
            cid: s,
            pagesize: e.data.this_page + 1,
            pagenum: e.data.pagesize
        }, function(t) {
            e.initGoodsListLoadData(t);
        }, this, {
            isShowLoading: !1
        });
    },
    onPullDownRefresh: function() {
        var e = this;
        t.default.popup(this, "DuoguanTuan"), e.setData({
            this_page: 1
        }), a.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getGoodsList.html", {
            cid: e.data.this_cate_id,
            pagesize: e.data.this_page + 1,
            pagenum: e.data.pagesize
        }, function(t) {
            e.initGoodsListLoadData(t);
        }, this, {
            isShowLoading: !1
        }), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: t.data.g_share_title || "",
            desc: t.data.g_share_desc || "",
            path: "/pages/tuan/index/index",
            success: function() {
                a.get(i.duoguan_host_api_url + "/index.php/addon/MarketingLuckDraw/ApiShare/shareSetData", {}, function() {}, this, {
                    isShowLoading: !1
                });
            }
        };
    }
});