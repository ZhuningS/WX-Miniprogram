require("../../../utils/functionData");

var t = require("../../../utils/requestUtil"), n = require("../../../utils/data");

require("../../../utils/dg"), getApp();

Page({
    data: {
        tuan_info: [],
        this_tuan_id: 0,
        glo_is_load: !0,
        show_sharing: !1,
        replace: "/images/pay_dashang.png",
        is_join: !1
    },
    tuan_join_bind: function(t) {
        var n = this, a = "", i = t.currentTarget.dataset.val, e = n.data.tuan_info;
        a = 0 == e.is_buy ? "/pages/tuan/info/info?tid=" + e.goods_id + "&chengtuan_id=0" : 1 == e.tuan_status ? "/pages/tuan/info/info?tid=" + e.goods_id + "&chengtuan_id=" + n.data.this_tuan_id + "&is_show=" + i : "/pages/tuan/info/info?tid=" + e.goods_id + "&chengtuan_id=0", 
        wx.navigateTo({
            url: a
        });
    },
    go_index_bind: function() {
        var t = "";
        0 == n.duoguan_app_is_superhome ? t += "/pages/tuan/index/index" : t += n.duoguan_app_index_path, 
        wx.switchTab({
            url: t,
            fail: function() {
                wx.navigateTo({
                    url: t
                });
            }
        });
    },
    onLoad: function(a) {
        var i = this, e = this;
        "undefined" != decodeURIComponent(a.scene) && (a.tid = decodeURIComponent(a.scene)), 
        a.oid > 0 ? t.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/getTuanidByOrderid.html", {
            order_id: a.oid
        }, function(a) {
            e.data.this_tuan_id = a.tid, t.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getTuanInfo.html", {
                tid: e.data.this_tuan_id
            }, function(t) {
                e.setData({
                    tuan_info: t,
                    glo_is_load: !1
                }), e.getShengTime(t.tuan_end_time);
            }, i, {
                isShowLoading: !1
            });
        }, this, {
            isShowLoading: !1
        }) : (e.setData({
            this_tuan_id: a.tid
        }), t.get(n.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getTuanInfo.html", {
            tid: e.data.this_tuan_id
        }, function(t) {
            console.log(t), e.setData({
                tuan_info: t,
                glo_is_load: !1
            }), e.getShengTime(t.tuan_end_time), 1 != t.tuan_status && e.setData({
                is_join: !0
            });
        }, this, {
            isShowLoading: !1
        }));
    },
    getShengTime: function(t) {
        var n = this, a = n.data.tuan_info;
        if (2 == a.tuan_status) a.tuan_sheng_time = "拼团成功"; else if (3 == a.tuan_status) a.tuan_sheng_time = "拼团拼团失败"; else if (1 == a.tuan_status) {
            var i = new Date(t), e = new Date(), o = i.getTime() - e.getTime(), u = 0, d = 0, s = 0;
            o >= 0 ? (Math.floor(o / 1e3 / 60 / 60 / 24), u = Math.floor(o / 1e3 / 60 / 60), 
            d = Math.floor(o / 1e3 / 60 % 60), s = Math.floor(o / 1e3 % 60), a.tuan_sheng_time = u + ":" + d + ":" + s, 
            setTimeout(function() {
                n.getShengTime(t);
            }, 1e3)) : a.tuan_status = 3;
        }
        n.setData({
            tuan_info: a
        });
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: t.data.tuan_info.goods_name || "",
            desc: "",
            path: "/pages/tuan/join/join?tid=" + t.data.this_tuan_id
        };
    },
    tuan_sharing_bind: function() {
        this.setData({
            show_sharing: !0
        });
    },
    bind_cancel_sharing: function() {
        this.setData({
            show_sharing: !1
        });
    },
    bind_poster_sharing: function() {
        var t = "../share/share?tid=" + this.data.this_tuan_id;
        wx.redirectTo({
            url: t
        });
    },
    order_detail_bind: function() {
        var t = this;
        wx.redirectTo({
            url: "/pages/tuan/tuan/info/index?oid=" + t.data.tuan_info.oid
        });
    },
    detail: function(t) {
        wx.navigateTo({
            url: "../info/info?tid=" + t.currentTarget.id + "&chengtuan_id=0"
        });
    }
});