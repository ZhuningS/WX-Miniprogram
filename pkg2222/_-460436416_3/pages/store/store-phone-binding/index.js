getApp();

var t = require("../../../utils/requestUtil"), e = require("../../../utils/data");

Page({
    data: {
        this_user_info: {},
        submitIsLoading: !1,
        buttonIsDisabled: !1,
        yzm_btn_disabled: !0,
        yzm_btn_text: "获取验证码",
        yzm_all_time: 60,
        this_user_phone: "",
        phone_yzm_code: ""
    },
    onLoad: function(i) {
        var s = this, a = i.dish_id;
        s.setData({
            this_dish_id: a
        }), t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/Api/getUserInfo.html", {
            dish_id: a
        }, function(t) {
            s.setData({
                this_user_info: t
            });
        }, this, {});
    },
    formSubmit: function(i) {
        var s = this;
        s.setData({
            submitIsLoading: !0,
            buttonIsDisabled: !0
        });
        var a = i.detail.value;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/Api/setUserPhoneStatus", a, function(t) {
            wx.showModal({
                title: "提示",
                content: "手机验证成功，请返回继续操作",
                showCancel: !1,
                success: function(t) {
                    1 == t.confirm && wx.navigateBack(1);
                }
            });
        }, this, {
            isShowLoading: !1,
            completeAfter: function() {
                s.setData({
                    submitIsLoading: !1,
                    buttonIsDisabled: !1
                });
            }
        });
    },
    check_phone_bind: function(t) {
        var e = this, i = t.detail.value;
        /^1\d{10}$/.test(i) ? e.setData({
            yzm_btn_disabled: !1,
            this_user_phone: i
        }) : e.setData({
            yzm_btn_disabled: !0
        });
    },
    send_phone_code_bind: function() {
        var i = this, s = i.data.this_user_phone;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/Api/sendUserPhoneTrue.html", {
            phone: s
        }, function(t) {
            i.setData({
                yzm_btn_disabled: !0
            }), i.getShengTime();
        }, this, {});
    },
    getShengTime: function() {
        var t = this, e = t.data.yzm_all_time - 1;
        t.data.yzm_all_time > 0 ? (t.setData({
            yzm_all_time: e,
            yzm_btn_text: "等待" + e + "秒"
        }), setTimeout(function() {
            t.getShengTime();
        }, 1e3)) : t.setData({
            yzm_btn_disabled: !1,
            yzm_btn_text: "获取验证码",
            yzm_all_time: 60
        });
    }
});