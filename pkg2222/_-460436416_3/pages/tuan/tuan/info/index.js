require("../../../../utils/functionData");

var t = require("../../../../utils/requestUtil"), o = require("../../../../utils/data"), a = require("../../../../utils/qrcode");

getApp();

Page({
    data: {
        this_order_id: 0,
        oinfo: [],
        submitIsLoading: !1,
        buttonIsDisabled: !1,
        glo_is_load: !0,
        tuan_text: "",
        confirm_code_show: !1,
        share_text: "查看拼团详情"
    },
    quhuo: function() {
        var a = this;
        wx.showModal({
            title: "提示",
            content: "确认已经到店取货？",
            success: function(n) {
                var i = this;
                console.log(n), n.confirm && t.get(o.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/quhuoUserOrder.html", {
                    oid: a.data.this_order_id
                }, function(n) {
                    wx.showToast({
                        title: "取货成功",
                        icon: "success",
                        duration: 2e3
                    }), t.get(o.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getTuanConfig.html", {
                        tid: a.data.this_tuan_id
                    }, function(t) {
                        a.setData({
                            config: t
                        });
                    }, a, {
                        isShowLoading: !1
                    }), t.get(o.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/orderInfo.html", {
                        oid: a.data.this_order_id
                    }, function(t) {
                        a.initgetOrderInfoData(t);
                    }, i);
                }, a, {
                    isShowLoading: !1
                });
            }
        });
    },
    wuliu_info_bind: function() {
        var t = this;
        if ("" == t.data.oinfo.express_code || null == t.data.oinfo.express_code) return wx.showModal({
            title: "提示",
            content: "对不起，该订单暂无物流信息",
            showCancel: !1
        }), !1;
        wx.navigateTo({
            url: "../../../tuan/wuliu/index?oid=" + t.data.oinfo.id
        });
    },
    onLoad: function(a) {
        var n = this, i = a.oid;
        n.setData({
            this_order_id: i
        }), t.get(o.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/getTuanConfig.html", {
            tid: n.data.this_tuan_id
        }, function(t) {
            n.setData({
                config: t
            });
        }, this, {
            isShowLoading: !1
        }), t.get(o.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/orderInfo.html", {
            oid: n.data.this_order_id
        }, function(t) {
            n.initgetOrderInfoData(t);
        }, this, {
            isShowLoading: !0
        });
    },
    initgetOrderInfoData: function(t) {
        var o = this;
        console.log(t), t.handle_amount > 0 && t.handle_amount != t.order_amount && (t.order_amount = t.handle_amount, 
        console.log(t.handle_amount)), "到店自提" == t.shipping_name && "002" == t.txt_status && (o.createQrCode(t.confirm_code, "mycanvas"), 
        o.setData({
            confirm_code_show: !0
        }));
        var a = "";
        2 == t.btype && (0 == t.btype_status ? (a = "拼团中", o.setData({
            share_text: "找小伙伴凑单"
        })) : 1 == t.btype_status ? a = "拼团成功" : 2 == t.btype_status && (a = "拼团失败")), o.setData({
            oinfo: t,
            glo_is_load: !1,
            tuan_text: a
        }), 0 != o.data.oinfo.tuan_end_time && o.getShengTime(o.data.oinfo.tuan_end_time);
    },
    order_go_pay_bind: function() {
        var a = this;
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), a.setData({
            buttonIsDisabled: !0,
            submitIsLoading: !0
        }), t.get(o.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/makePay.html", {
            oid: a.data.this_order_id
        }, function(t) {
            a.initMakeOrderPayData(t);
        }, this);
    },
    initMakeOrderPayData: function(a) {
        var n = this;
        wx.hideToast(), n.setData({
            buttonIsDisabled: !1,
            submitIsLoading: !1
        }), wx.requestPayment({
            timeStamp: a.timeStamp,
            nonceStr: a.nonceStr,
            package: a.package,
            signType: "MD5",
            paySign: a.paySign,
            complete: function() {
                t.get(o.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/orderInfo.html", {
                    oid: n.data.this_order_id
                }, function(t) {
                    console.log(t), n.initgetOrderInfoData(t);
                }, this, {
                    isShowLoading: !0
                });
            }
        });
    },
    order_go_comment_bind: function() {
        var t = this.data.this_order_id;
        wx.redirectTo({
            url: "../comment/index?order_id=" + t
        });
    },
    order_go_shouhuo_bind: function() {
        var a = this, n = this.data.this_order_id;
        wx.showModal({
            title: "提示",
            content: "确认收货吗?",
            success: function(i) {
                1 == i.confirm && t.get(o.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/shouhuoUserOrder.html", {
                    oid: n
                }, function(t) {
                    a.initshouhuoOrderInfoData(t);
                }, this);
            }
        });
    },
    initshouhuoOrderInfoData: function(a) {
        var n = this;
        t.get(o.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/OrderApi/orderInfo.html", {
            oid: n.data.this_order_id
        }, function(t) {
            n.initgetOrderInfoData(t);
        }, this);
    },
    createQrCode: function(t, o) {
        a.qrApi.init(t, o, 0, 0, 150, 150);
    },
    getShengTime: function(t) {
        var o = this, a = o.data.oinfo, n = new Date(t), i = new Date(), e = n.getTime() - i.getTime(), d = 0, r = 0, u = 0;
        e >= 0 ? (Math.floor(e / 1e3 / 60 / 60 / 24), d = Math.floor(e / 1e3 / 60 / 60), 
        r = Math.floor(e / 1e3 / 60 % 60), u = Math.floor(e / 1e3 % 60), a.tuan_sheng_time = "剩余" + d + ":" + r + ":" + u + "结束", 
        setTimeout(function() {
            o.getShengTime(t);
        }, 1e3)) : (a.tuan_sheng_time = "已结束", o.setData({
            tuan_text: "拼团失败",
            share_text: "查看拼团详情"
        })), o.setData({
            oinfo: a
        });
    },
    go_share: function() {
        var t = this.data.oinfo.chengtuan_id;
        wx.navigateTo({
            url: "../../join/join?tid=" + t
        });
    },
    bind_help: function() {
        wx.navigateTo({
            url: "/pages/tuan/rebate-rule/index"
        });
    },
    bind_award: function() {
        wx.navigateTo({
            url: "/pages/user/red-packet/records/index?type=tuan_record"
        });
    }
});