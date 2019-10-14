getApp();

var a = require("../../../../utils/requestUtil"), t = require("../../../../utils/data");

Page({
    data: {
        pagesize: 1,
        pagenum: 10,
        data_list: [],
        is_loadmore: !0
    },
    onLoad: function(a) {
        var t = this;
        t.setData({
            pagesize: 1
        }), t.getDataList();
    },
    onPullDownRefresh: function() {
        var a = this;
        a.setData({
            pagesize: 1
        }), a.getDataList(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    getDataList: function() {
        var e = this;
        a.get(t.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/FenxiaoApi/getcashrecord", {
            pagesize: e.data.pagesize,
            pagenum: e.data.pagenum
        }, function(a) {
            console.log(a), null == a ? e.setData({
                is_loadmore: !1
            }) : a.length < 10 && e.setData({
                is_loadmore: !1
            }), 1 == e.data.pagesize ? e.setData({
                data_list: a
            }) : e.setData({
                data_list: e.data.data_list.concat(a)
            });
        }, this, {
            isShowLoading: !0
        });
    },
    onReachBottom: function() {
        console.log("触底加载");
        var a = this;
        if (wx.showNavigationBarLoading(), 0 == a.data.is_loadmore) return wx.hideNavigationBarLoading(), 
        !1;
        a.setData({
            pagesize: a.data.pagesize + 1
        }), a.getDataList();
    }
});