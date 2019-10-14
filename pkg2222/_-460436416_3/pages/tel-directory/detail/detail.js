getApp();

var t = require("../../../utils/requestUtil"), i = require("../../../utils/data");

Page({
    data: {
        this_tel_id: 0,
        this_tel_info: null,
        is_share: !1
    },
    onLoad: function(t) {
        var i = this, e = decodeURIComponent(t.scene);
        if ("undefined" != e) {
            var a = e.split("#")[1];
            i.setData({
                this_tel_id: a
            });
        } else void 0 != t.id ? i.setData({
            this_tel_id: t.id
        }) : i.setData({
            this_tel_id: 0
        });
        i.get_index_data();
    },
    get_index_data: function() {
        var e = this;
        t.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanTel/Api/documentInfo", {
            id: e.data.this_tel_id
        }, function(t) {
            e.setData({
                this_tel_info: t
            }), wx.setNavigationBarTitle({
                title: t.t_name
            });
        }, this, {
            isShowLoading: !0
        });
    },
    onPullDownRefresh: function() {
        this.onLoad(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    go_cate_list_bind: function(t) {
        var i = t.currentTarget.dataset.level, e = t.currentTarget.dataset.id;
        wx.redirectTo({
            url: "../telList/telList?cate_id=" + e + "&level=" + i
        });
    },
    onCallTap: function() {
        var e = this;
        wx.makePhoneCall({
            phoneNumber: this.data.this_tel_info.t_contact_phone,
            success: function(a) {
                t.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanTel/Api/documentCall", {
                    id: e.data.this_tel_id
                }, function(t) {
                    e.get_index_data();
                }, this, {
                    isShowLoading: !0
                });
            }
        });
    },
    openLocation: function(t) {
        wx.openLocation({
            latitude: parseFloat(this.data.this_tel_info.t_lat),
            longitude: parseFloat(this.data.this_tel_info.t_lng),
            address: this.data.this_tel_info.t_address,
            name: this.data.this_tel_info.t_name,
            scale: 28
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.this_tel_info.t_name || "",
            desc: "",
            path: "pages/tel-directory/detail/detail?id=" + this.data.this_tel_id
        };
    },
    queren_shoucang_bind: function() {
        var e = this;
        t.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanTel/Api/documentCollection", {
            id: e.data.this_tel_id
        }, function(t) {
            e.get_index_data();
        }, this, {
            isShowLoading: !0
        });
    },
    quxiao_shoucang_bind: function() {
        var e = this;
        t.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanTel/Api/documentUnCollection", {
            id: e.data.this_tel_id
        }, function(t) {
            e.get_index_data();
        }, this, {
            isShowLoading: !0
        });
    },
    img_max_bind: function(t) {
        for (var i = this, e = [], a = 0; a < i.data.this_tel_info.t_pic_list.length; a++) e[a] = i.data.this_tel_info.t_pic_list[a].img_url;
        wx.previewImage({
            current: t.currentTarget.dataset.url,
            urls: e
        });
    },
    on_fuzhi_bind: function() {
        var t = this;
        wx.setClipboardData({
            data: t.data.this_tel_info.t_contact_weixin,
            success: function(t) {
                wx.showToast({
                    title: "复制成功",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    toRuzhu: function() {
        wx.navigateTo({
            url: "../enter/enter"
        });
    },
    toShare: function() {
        this.setData({
            is_share: !0
        });
    },
    closeShare: function() {
        this.setData({
            is_share: !1
        });
    },
    shareHaibao: function() {
        wx.navigateTo({
            url: "../share/share?id=" + this.data.this_tel_id
        }), this.setData({
            is_share: !1
        });
    }
});