getApp();

var t = require("../../../utils/requestUtil"), a = require("../../../utils/data");

Page({
    data: {
        this_type_id: 1,
        this_tel_data: null,
        page: 1,
        pagenum: 20,
        hasMore: !0
    },
    change_this_type_bind: function(t) {
        this.setData({
            this_type_id: t.currentTarget.dataset.type
        }), this.get_index_data();
    },
    onLoad: function(t) {
        var a = this;
        void 0 != t.type && a.setData({
            this_type_id: t.type
        }), a.get_index_data();
    },
    get_index_data: function() {
        var e = this, i = this;
        t.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiDoc/getMyDoc", {
            type: i.data.this_type_id,
            pagesize: i.data.page,
            pagenum: i.data.pagenum
        }, function(t) {
            e.onSetData(t, i.data.page);
        }, this, {
            isShowLoading: !0
        });
    },
    onPullDownRefresh: function() {
        this.get_index_data(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onReachBottom: function() {
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        this.setData({
            page: this.data.page + 1
        }), this.get_index_data();
    },
    onSetData: function(t, a) {
        t = t || [], this.setData({
            hasMore: void 0 !== a && t.length >= this.data.pagenum,
            page: void 0 !== a ? a : this.data.page,
            this_tel_data: 1 === a || void 0 === a ? t : this.data.this_tel_data.concat(t)
        });
    },
    go_cate_list_bind: function(t) {
        var a = t.currentTarget.dataset.level, e = t.currentTarget.dataset.id;
        wx.redirectTo({
            url: "../telList/telList?cate_id=" + e + "&level=" + a
        });
    },
    go_detail_bind: function(t) {
        wx.navigateTo({
            url: "../detail/detail?id=" + t.currentTarget.id
        });
    },
    onCallTap: function(e) {
        var i = this, n = e.currentTarget.dataset, d = n.mobile, o = n.telid;
        d && wx.makePhoneCall({
            phoneNumber: d,
            success: function(e) {
                t.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/Api/documentCall", {
                    id: o
                }, function(t) {
                    i.get_index_data();
                }, this, {});
            }
        });
    },
    openLocation: function(t) {
        wx.openLocation({
            latitude: parseFloat(t.currentTarget.dataset.lat),
            longitude: parseFloat(t.currentTarget.dataset.lng),
            address: t.currentTarget.dataset.address,
            name: t.currentTarget.dataset.name,
            scale: 28
        });
    },
    delete_data_bind: function(e) {
        var i = e.currentTarget.id, n = this;
        t.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanTel/ApiDoc/delData", {
            type: n.data.this_type_id,
            t_id: i
        }, function(t) {
            n.get_index_data();
        }, this, {
            isShowLoading: !0
        });
    }
});