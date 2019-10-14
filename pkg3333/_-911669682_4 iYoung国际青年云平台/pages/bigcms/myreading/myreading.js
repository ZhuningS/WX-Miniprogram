var a = require("../../../utils/requestUtil"), t = require("../../../utils/data");

Page({
    data: {
        isEmpty: !1,
        page: 1,
        c_data: [],
        this_page_size: 1,
        this_page_num: 10,
        is_load_more: !0
    },
    onLoad: function(a) {
        this.setData({
            is_load_more: !0,
            this_page_size: 1,
            c_data: []
        }), this.getMycollection();
    },
    onReady: function() {},
    onShow: function() {},
    getMycollection: function(e) {
        var i = this, s = i.data.c_data;
        e = e || !1;
        var o = {};
        o.pagesize = i.data.this_page_size, o.pagenum = i.data.this_page_num, o.is_pay_edition = 1, 
        o.duotu_goods = 1, a.get(t.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/myPayArticleList.html", o, function(a) {
            null == a || "" == a ? i.setData({
                is_load_more: !1
            }) : 1 == i.data.this_page_size && a.length < i.data.this_page_num ? i.setData({
                c_data: a,
                is_load_more: !1
            }) : 1 == i.data.this_page_size && a.length == i.data.this_page_num ? i.setData({
                c_data: a,
                is_load_more: !0
            }) : i.data.this_page_size > 1 && (s = s.concat(a), i.setData({
                c_data: s,
                is_load_more: !0
            }));
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: e
        });
    },
    onPullDownRefresh: function() {
        var a = this;
        a.setData({
            this_page_size: 1,
            c_data: []
        }), a.getMycollection();
    },
    onReachBottom: function() {
        var a = this;
        if (0 == a.data.is_load_more) return wx.hideNavigationBarLoading(), !1;
        a.setData({
            this_page_size: ++a.data.this_page_size
        }), a.getMycollection(!0);
    },
    onNavigateTap: function(a) {
        wx.navigateTo({
            url: a.currentTarget.dataset.url
        });
    }
});