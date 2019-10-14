function t(t, a, i) {
    return a in t ? Object.defineProperty(t, a, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = i, t;
}

getApp(), require("../../../utils/functionData");

var a, i = require("../../../wxParse/wxParse.js"), e = require("../../../utils/wxTimer.js"), n = require("../../../utils/util"), o = require("../../../utils/requestUtil"), s = require("../../../utils/data");

require("../../../utils/dg");

Page({
    data: (a = {
        goods_info: [],
        goods_specification: [],
        goods_tuan_list: [],
        wxParseData: "",
        this_goods_id: 0,
        this_chengtuan_id: 0,
        this_g_nav: 1,
        is_add_cart_view: !1,
        cart_default_number: 1,
        goods_attr_select: {},
        btn_add_cart_disabled: !1,
        submitIsLoading: !1,
        glo_is_load: !0,
        shengTime: "",
        goods_true_price: 0
    }, t(a, "is_add_cart_view", !1), t(a, "goods_attr_check_str", ""), t(a, "goods_tuan_status", !0), 
    t(a, "buy_type", 1), t(a, "is_show_tuan", !1), t(a, "is_join", !1), t(a, "is_show", !1), 
    t(a, "oid", 0), t(a, "is_order", !1), t(a, "is_del", !1), a),
    show_more_tuan: function() {
        this.setData({
            is_show_tuan: !this.data.is_show_tuan
        });
    },
    join_bind: function(t) {
        wx.navigateTo({
            url: "../join/join?tid=" + t.currentTarget.id
        });
    },
    gohome_bind: function() {
        var t = "";
        0 == s.duoguan_app_is_superhome ? t += "/pages/tuan/index/index" : t += s.duoguan_app_index_path, 
        wx.switchTab({
            url: t,
            fail: function() {
                wx.navigateTo({
                    url: t
                });
            }
        });
    },
    onLoad: function(t) {
        var a = this;
        "true" == t.is_show && a.setData({
            is_show: !0
        });
        var i = t.tid;
        a.setData({
            this_goods_id: i,
            this_chengtuan_id: t.chengtuan_id
        }), a.data.this_chengtuan_id > 0 && a.setData({
            is_join: !0
        }), t.order_id > 0 && a.setData({
            is_order: !0,
            oid: t.order_id
        }), o.get(s.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getGoodsInfo.html", {
            sid: i
        }, function(t) {
            a.initGoodsInfoData(t);
        }, this, {
            isShowLoading: !0
        });
    },
    initGoodsInfoData: function(t) {
        var a = this;
        if (0 != t) {
            if (t.is_comment = !0, t.comment_list.length > 0 && (t.is_comment = !1, t.comment_list.forEach(function(t, a, i) {
                i[a].ctime = n.format(1e3 * t.ctime, "yyyy-MM-dd"), i[a].p_fenshu = parseInt(t.p_fenshu), 
                i[a].is_show_comment_iamge = !!(t.imageArray && t.imageArray.length > 0);
            })), a.setData({
                goods_info: t,
                goods_specification: t.goods_specification,
                goods_tuan_list: t.tlist,
                glo_is_load: !1
            }), 0 != t.tuan_end_time && e.GetRTime(t.tuan_end_time, a), null != t.tlist) for (var o = a.data.goods_tuan_list, s = 0; s < o.length; s++) {
                var _ = o[s].tuan_end_time;
                a.getShengTime(_, s);
            }
            a.data.this_chengtuan_id > 0 && a.data.is_show && a.buy_tuan_bind(), i.wxParse("article", "html", t.g_content, a, 0);
        } else a.setData({
            glo_is_load: !1,
            is_del: !0
        });
    },
    getShengTime: function(t, a) {
        var i = this, e = i.data.goods_tuan_list, n = new Date(t), o = new Date(), s = n.getTime() - o.getTime(), _ = 0, d = 0, r = 0;
        s >= 0 ? (Math.floor(s / 1e3 / 60 / 60 / 24), _ = Math.floor(s / 1e3 / 60 / 60), 
        d = Math.floor(s / 1e3 / 60 % 60), r = Math.floor(s / 1e3 % 60), e[a].tuan_sheng_time = "剩余" + _ + ":" + d + ":" + r + "结束", 
        setTimeout(function() {
            i.getShengTime(t, a);
        }, 1e3)) : e[a].tuan_sheng_time = "已结束", i.setData({
            goods_tuan_list: e
        });
    },
    buy_tuan_bind: function() {
        var t = this;
        if (0 == t.data.goods_tuan_status) return wx.showModal({
            title: "提示",
            content: "对不起，该商品拼团时间已结束",
            showCancel: !1
        }), !1;
        t.setData({
            is_add_cart_view: !0,
            goods_true_price: t.data.goods_info.tuan_price,
            cart_default_number: 1,
            buy_type: 2
        });
    },
    buy_one_bind: function() {
        var t = this;
        t.setData({
            is_add_cart_view: !0,
            goods_true_price: t.data.goods_info.shop_price,
            cart_default_number: 1,
            buy_type: 1
        });
    },
    add_cart_close_bind: function() {
        this.setData({
            is_add_cart_view: !1
        });
    },
    bind_cart_number_jian: function() {
        var t = this, a = parseInt(t.data.cart_default_number);
        a > 1 ? t.setData({
            cart_default_number: a - 1
        }) : t.setData({
            cart_default_number: 1
        });
    },
    bind_cart_number_jia: function() {
        var t = this, a = parseInt(t.data.cart_default_number);
        a >= parseInt(this.data.goods_info.g_number) ? wx.showToast({
            title: "购买数量不能超过库存！",
            icon: "success",
            duration: 1500
        }) : t.setData({
            cart_default_number: a + 1
        });
    },
    select_attr_bind: function(t) {
        for (var a = this, i = t.currentTarget.id, e = t.currentTarget.dataset.type, n = a.data.goods_specification, o = a.data.goods_attr_select, s = a.data.goods_info, _ = 0; _ < n.length; _++) if (n[_].name == e) {
            o[n[_].name] = null;
            for (var d = 0; d < n[_].values.length; d++) n[_].values[d].ischeck = !1, n[_].values[d].id == i && (n[_].values[d].ischeck = !0, 
            o[n[_].name] = i, n[_].values[d].format_price > 0 && (s.shop_price = n[_].values[d].format_price));
        }
        a.setData({
            goods_specification: n,
            goods_attr_select: o,
            goods_info: s
        });
    },
    goods_add_cart: function() {
        if (parseInt(this.data.goods_info.g_number) < 1) return wx.showToast({
            title: "商品已售完！",
            icon: "success",
            duration: 1500
        }), !1;
        var t = parseInt(this.data.buy_type), a = parseInt(this.data.cart_default_number);
        if (2 == t && a > this.data.goods_info.tuan_max_num) return wx.showToast({
            title: "超过商品数量限制！",
            icon: "success",
            duration: 1500
        }), !1;
        var i = this;
        i.setData({
            btn_add_cart_disabled: !0,
            submitIsLoading: !0
        }), o.get(s.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/addGoodsCart.html", {
            gid: i.data.this_goods_id,
            gnumber: i.data.cart_default_number,
            gattr: i.data.goods_attr_select,
            btype: i.data.buy_type,
            chengtuan_id: i.data.this_chengtuan_id
        }, function(t) {
            i.initAddCartData(t);
        }, this, {
            isShowLogin: !1,
            complete: function() {
                i.setData({
                    btn_add_cart_disabled: !1,
                    submitIsLoading: !1
                }), wx.hideLoading(), wx.hideToast();
            }
        });
    },
    initAddCartData: function(t) {
        this.setData({
            btn_add_cart_disabled: !1,
            submitIsLoading: !1
        }), wx.redirectTo({
            url: "../order/order"
        });
    },
    buy_order_bind: function() {
        wx.redirectTo({
            url: "/pages/tuan/tuan/info/index?oid=" + this.data.oid
        });
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: t.data.goods_info.g_name || "",
            desc: "",
            path: "/pages/tuan/info/info?tid=" + t.data.goods_info.id
        };
    },
    shareToFriendsCircle: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: a
        });
    },
    onPullDownRefresh: function() {
        var t = this;
        o.get(s.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getGoodsInfo.html", {
            sid: t.data.this_goods_id
        }, function(a) {
            t.initGoodsInfoData(a);
        }, this, {
            isShowLoading: !0
        }), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    bind_help: function() {
        wx.navigateTo({
            url: "/pages/tuan/rebate-rule/index"
        });
    },
    bind_go_home: function() {
        var t = "";
        0 == s.duoguan_app_is_superhome ? t += "/pages/tuan/index/index" : t += s.duoguan_app_index_path, 
        wx.switchTab({
            url: t,
            fail: function() {
                wx.navigateTo({
                    url: t
                });
            }
        });
    }
});