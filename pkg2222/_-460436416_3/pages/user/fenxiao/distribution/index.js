getApp();

var t = require("../../../../utils/requestUtil"), a = require("../../../../utils/data"), e = require("../../../../wxParse/wxParse.js");

Page({
    data: {
        show_apply: !1,
        yzm_btn_disabled: !1,
        yzm_btn_text: "获取验证码",
        yzm_all_time: 60,
        phone: "",
        glo_is_load: !0
    },
    onLoad: function(t) {
        this.load();
    },
    load: function() {
        var o = this;
        t.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/DuoguanShopApi/getApplyStatus.html", {}, function(t) {
            200 == t.status ? wx.redirectTo({
                url: "../index/index"
            }) : (o.setData({
                status: t.status,
                glo_is_load: !1,
                show_apply: !1
            }), e.wxParse("content", "html", t.fxrule, o));
        }, {});
    },
    onShow: function() {},
    show_apply: function(t) {
        this.setData({
            show_apply: !this.data.show_apply
        });
    },
    set_phone: function(t) {
        this.data.phone = t.detail.value;
    },
    submit: function(e) {
        var o = this;
        void 0 != e.detail.value.name && null != e.detail.value.name && "" != e.detail.value.name ? void 0 != e.detail.value.phone && null != e.detail.value.phone && "" != e.detail.value.phone ? void 0 != e.detail.value.yzm && null != e.detail.value.yzm && "" != e.detail.value.yzm ? t.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/DuoguanShopApi/applyFenxiao.html", {
            data: e.detail.value
        }, function(t) {
            1 == t && wx.showToast({
                title: "提交成功",
                icon: "success",
                duration: 2e3,
                success: function() {
                    o.load();
                }
            });
        }, {}) : wx.showModal({
            content: "请输入验证码！",
            showCancel: !1
        }) : wx.showModal({
            content: "请输入电话！",
            showCancel: !1
        }) : wx.showModal({
            content: "请输入姓名！",
            showCancel: !1
        });
    },
    onGetVerifyCodeTap: function(e) {
        var o = this, n = this.data.phone;
        void 0 != n && null != n && "" != n && -1 != n.search(/^([0-9]{11})?$/) ? t.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/DuoguanShopApi/getVerifyCode.html", {
            phone: n
        }, function(t) {
            var a = o;
            a.setData({
                yzm_btn_disabled: !0
            }), a.getShengTime();
        }, {}) : wx.showModal({
            content: "请输入正确的手机号！",
            showCancel: !1
        });
    },
    getShengTime: function() {
        var t = this, a = t.data.yzm_all_time - 1;
        t.data.yzm_all_time > 0 ? (t.setData({
            yzm_all_time: a,
            yzm_btn_text: "等待" + a + "秒"
        }), setTimeout(function() {
            t.getShengTime();
        }, 1e3)) : t.setData({
            yzm_btn_disabled: !1,
            yzm_btn_text: "获取验证码",
            yzm_all_time: 60
        });
    }
});