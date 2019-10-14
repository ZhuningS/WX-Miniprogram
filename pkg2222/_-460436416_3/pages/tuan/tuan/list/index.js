require("../../../../utils/functionData.js");

var a = require("../../../../utils/requestUtil"), t = require("../../../../utils/data");

getApp();

Page({
    data: {
        postlist: [],
        this_weiba_id: 0,
        hasMore: !1,
        showLoading: !1,
        isScrollY: !0,
        this_page: 1,
        pagesize: 10,
        this_nav_name: "index",
        this_is_jinghua: 0,
        this_finish_page: 0,
        glo_is_load: !0,
        group_val: "all",
        is_loadmore: !0
    },
    group_show: function(a) {
        var t = this;
        t.setData({
            group_val: a.target.dataset.val,
            this_page: 1,
            postlist: []
        }), t.data.postlist = [], t.data.is_loadmore = !0, t.loaddata();
    },
    user_orderinfo_bind: function(a) {
        var t = a.currentTarget.id;
        wx.navigateTo({
            url: "../info/index?oid=" + t
        });
    },
    go_share: function(a) {
        wx.navigateTo({
            url: "../../join/join?oid=" + a.currentTarget.id
        });
    },
    delete_user_order: function(i) {
        var s = this, o = i.currentTarget.id;
        wx.showModal({
            title: "提示",
            content: "确认要删除该订单吗?",
            success: function(i) {
                1 == i.confirm && a.get(t.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/deleteUserOrder.html", {
                    oid: o
                }, function(a) {
                    s.initdeleteOrderInfoData(a);
                }, this, {
                    isShowLoading: !1
                });
            }
        });
    },
    initdeleteOrderInfoData: function(i) {
        var s = this;
        s.setData({
            this_page: 1
        }), a.get(t.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/getUserOrderList.html", {
            pagesize: s.data.this_page,
            pagenum: s.data.pagesize
        }, function(a) {
            s.initUserOrderListData(a);
        }, this);
    },
    loaddata: function() {
        var i = this;
        a.get(t.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/getUserOrderList.html", {
            pagesize: i.data.this_page,
            pagenum: i.data.pagesize,
            group_val: i.data.group_val
        }, function(a) {
            console.log(a), null != a ? (i.setData({
                postlist: i.data.postlist.concat(a),
                glo_is_load: !1
            }), a.length >= i.data.pagesize ? i.setData({
                isScrollY: !0,
                showLoading: !0
            }) : i.setData({
                isScrollY: !1,
                showLoading: !1,
                is_loadmore: !1
            })) : i.setData({
                glo_is_load: !1,
                isScrollY: !1,
                showLoading: !1,
                is_loadmore: !1
            });
        }, this, {
            isShowLoading: !1
        });
    },
    onLoad: function() {
        var a = this;
        a.setData({
            this_page: 1
        }), a.data.this_page = 1, a.data.group_val = "all", a.data.postlist = [], a.data.is_loadmore = !0, 
        a.loaddata();
    },
    initUserOrderListData: function(a) {
        var t = this;
        t.setData({
            postlist: a,
            glo_is_load: !1
        }), null == a ? t.setData({
            isScrollY: !1,
            showLoading: !1
        }) : a.length >= t.data.pagesize ? t.setData({
            isScrollY: !0,
            showLoading: !0
        }) : t.setData({
            isScrollY: !1,
            showLoading: !1
        });
    },
    onPullDownRefresh: function() {
        var a = this;
        a.setData({
            this_page: 1
        }), a.data.postlist = [], a.data.is_loadmore = !0, a.loaddata(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    initUserOrderListLoadData: function(a) {
        var t = this;
        null == a.info ? t.setData({
            isScrollY: !1,
            showLoading: !1
        }) : (a.info.length >= t.data.pagesize ? t.setData({
            isScrollY: !0,
            showLoading: !0
        }) : t.setData({
            isScrollY: !1,
            showLoading: !1
        }), t.setData({
            postlist: t.data.postlist.concat(a.info),
            this_page: t.data.this_page + 1
        })), t.setData({
            this_finish_page: t.this_finish_page + 1
        });
    },
    onReachBottom: function(a) {
        var t = this;
        this.data.this_items;
        t.data.is_loadmore && (t.data.this_page += 1, t.loaddata());
    }
});