function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
}, i = e(require("../../../utils/dg.js")), a = e(require("../../../utils/requestUtil.js")), n = require("../../../utils/data.js"), o = (e(n), 
e(require("../../../utils/listener.js")));

e(require("../../../utils/underscore.js"));

Page({
    data: {
        isAli: i.default.os.isAlipay(),
        baseUrl: n.duoguan_host_api_url + "/index.php/addon/DuoguanUser",
        action: "bind",
        mobile: "",
        input_mobile: "",
        input_mobile_disabled: !1,
        message_auth_code: "",
        reload_verify_time: "获取验证码"
    },
    onLoad: function(e) {
        this.init(e);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        var e = this.data.mobile;
        this.fireEventListener("" != e ? {
            mobile: e
        } : {});
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    init: function(e) {
        var t = "bind" == e.action ? "bind" : "edit";
        i.default.setNavigationBarTitle({
            title: "bind" == t ? "绑定用户手机号" : "更新用户手机号"
        }), this.setData({
            action: t
        });
    },
    bindUserMobile: function(e) {
        if (e.detail.encryptedData) {
            var t = this;
            i.default.authLogin({
                success: function(i) {
                    var n = t.data.baseUrl + "/CardApi/openCardByWechatPhone.html", o = {
                        encryptedData: e.detail.encryptedData,
                        iv: e.detail.iv,
                        code: i.code,
                        name: "",
                        ver: "0.0.1",
                        is_open_card: "no"
                    };
                    a.default.post(n, o, function(e) {}, t, {
                        isShowLoading: !0,
                        loadingText: "获取中",
                        completeAfter: function(e) {
                            var i = e.data.data;
                            i.phone && t.save(i.phone, t);
                        }
                    });
                }
            });
        }
    },
    input: function(e) {
        var i = e.target.dataset.field, a = e.detail.value, n = {};
        "input_mobile" == i ? n.input_mobile = a : "message_auth_code" == i && (n.message_auth_code = a), 
        this.setData(t({}, n));
    },
    submit: function(e) {
        var t = this, i = this.data.baseUrl + "/MobileApi/verifySmsCode.html", n = {
            phone: this.data.input_mobile,
            code: this.data.message_auth_code
        };
        a.default.get(i, n, function(e) {}, this, {
            isShowLoading: !0,
            loadingText: "验证中",
            completeAfter: function(e) {
                var i = e.data.data;
                i.phone && t.save(i.phone, t);
            }
        });
    },
    getVerifyCode: function(e) {
        var t = this, n = this.data.baseUrl + "/CardApi/sendPhoneVerifyCode.html", o = {
            phone: this.data.input_mobile
        };
        a.default.post(n, o, function(e) {
            i.default.showToast({
                title: "验证码发送成功，请注意查收！"
            });
            var a = 60;
            t.setData({
                input_mobile_disabled: !0
            });
            !function e() {
                a > 0 ? (t.setData({
                    reload_verify_time: a--
                }), setTimeout(e, 1e3)) : t.setData({
                    reload_verify_time: "获取验证码",
                    input_mobile_disabled: !1
                });
            }();
        });
    },
    fireEventListener: function(e) {
        o.default.fireEventListener("user.mobile.action", [ e ]);
    },
    save: function(e, t) {
        if ("" != (e = e || "")) {
            var n = t.data.baseUrl + "/MobileApi/info", o = {
                mobile: e,
                request_method: "patch"
            };
            a.default.post(n, o, function(e) {}, t, {
                isShowLoading: !0,
                loadingText: "保存中",
                completeAfter: function(e) {
                    var a = e.data.data;
                    a.phone && (t.setData({
                        mobile: a.phone
                    }), i.default.showToast({
                        title: "保存成功",
                        duration: 4e3,
                        complete: function(e) {
                            i.default.navigateBack();
                        }
                    }));
                }
            });
        }
    }
});