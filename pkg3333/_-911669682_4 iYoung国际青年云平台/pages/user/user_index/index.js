function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = e(require("../../../utils/underscore")), n = e(require("../../../utils/util")), t = (e(require("../../../utils/listener")), 
require("../../../utils/data")), o = e(require("../../../utils/requestUtil"));

getApp();

Page({
    data: {
        userInfo: {},
        bbs_show_status: !0,
        shop_show_status: !0,
        menu_list: "",
        is_loaded: !1,
        has_coupon: !0,
        is_open_card: !1,
        heixiao: {
            menus: [ {
                name: "hexiao",
                text: "核销",
                link: "pages/user/exam/index",
                icon: "icon-duoguan-hexiao"
            } ],
            type: "line"
        },
        open_card_info: {
            phone: "",
            isDisabled: !1
        },
        open_card_version: "2"
    },
    onLoad: function() {
        this.onPullDownRefresh(), wx.getStorageSync("is_first_sync_user_info") || (this.onSyncWechatInfo(), 
        wx.setStorageSync("is_first_sync_user_info", !0));
    },
    onUnload: function() {},
    onPullDownRefresh: function() {
        var e = this;
        o.default.get(t.duoguan_user_info_url, {}, function(n) {
            var t = a.default.extend(e.data.userInfo || {}, n);
            e.setData({
                userInfo: t
            });
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        }), o.default.get(t.duoguan_get_user_menu_url, {
            ver_id: t.duoguan_config_version
        }, function(a, n) {
            a.push({
                menus: [ {
                    name: "settings",
                    text: "设置",
                    link: "pages/user/setting/index",
                    icon: "icon-xitongshezhi"
                } ],
                type: "line"
            }), e.setData({
                menus: a,
                is_loaded: !0,
                is_open_card: 1 == n.is_open_card,
                is_open_wallet: 1 == n.is_open_wallet,
                is_open_coupon: 1 == n.is_open_coupon,
                is_open_score: 1 == n.is_open_score
            }), 1 == n.is_open_card && e.loadMemberCard();
        });
    },
    loadMemberCard: function() {
        var e = this;
        o.default.get(t.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/CardApi/getInfo.html", {}, function(a) {
            a.show = !1, e.setData({
                card_info: a
            });
        }, this, {
            isShowLoading: !1
        });
    },
    onNavigateTap: function(e) {
        var a = e.currentTarget.dataset, n = a.url, t = a.name;
        "wechat_address" == t ? wx.chooseAddress({}) : "wechat_setting" == t ? wx.openSetting({}) : "wechat_clear" == t ? (wx.showToast({
            title: "正在清理中...",
            icon: "loading",
            duration: 10
        }), wx.clearStorageSync(), wx.showToast({
            title: "清理完成",
            icon: "success",
            duration: 1500
        })) : "wechat_info_sync" == t ? this.onSyncWechatInfo() : wx.navigateTo({
            url: n,
            fail: function(e) {
                wx.switchTab({
                    url: n
                });
            }
        });
    },
    onCompanyTap: function(e) {
        var a = this.data.userInfo;
        a && 1 == a.is_tel_on && wx.navigateTo({
            url: "../company/index"
        });
    },
    onSyncWechatInfo: function() {
        var e = this;
        o.default.isLoading(this.syncWechatInfoId) || n.default.getUserInfo(function(n) {
            e.syncWechatInfoId = o.default.post(t.duoguan_user_info_post_url, {
                nickname: n.nickName,
                headimgurl: n.avatarUrl,
                sex: n.gender,
                city: n.city,
                province: n.province,
                country: n.country,
                language: n.language
            }, function(n) {
                console.log(n), wx.showToast({
                    title: "同步成功！",
                    icon: "success",
                    duration: 2e3
                });
                var t = a.default.extend(e.data.userInfo || {}, n);
                e.setData({
                    userInfo: t
                });
            });
        });
    },
    onToggleTap: function(e) {
        var n = e.currentTarget.dataset.name, t = a.default.find(this.data.menus, {
            name: n
        });
        t && (t.isshow = !t.isshow, this.setData({
            menus: this.data.menus
        }));
    },
    onCallPhoneTap: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.userInfo.app_tel
        });
    },
    onGetPhoneNumber: function(e) {
        var a = this, i = this;
        if (e.detail.encryptedData) {
            wx.login({
                success: function(e) {
                    var a = i.data.open_card_info;
                    a.isDisabled = !0, i.setData({
                        open_card_info: a
                    }), wx.showToast({
                        title: "加载中...",
                        icon: "loading"
                    }), setTimeout(function() {
                        s(e.code);
                    }, 1e3);
                }
            });
            var s = function(n) {
                var i = t.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/CardApi/openCardByWechatPhone.html";
                o.default.post(i, {
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv,
                    code: n,
                    name: a.card_name || "",
                    ver: "0.0.1",
                    is_open_card: "no"
                }, function(e) {}, a, {
                    isShowLoading: !0,
                    loadingText: "获取中",
                    completeAfter: function(e) {
                        var a = e.data.data, n = this.data.open_card_info;
                        n.phone = "no" == a.open_card_status ? a.phone : n.phone, n.isDisabled = "2" == this.data.open_card_version, 
                        this.phone = n.phone, this.setData({
                            open_card_info: n
                        }), "2" == this.data.open_card_version && this.onOpenTap();
                    }
                });
            };
        } else "2" == this.data.open_card_version && n.default.userMobile("bind", function(e) {
            var a = i.data.open_card_info;
            a.isDisabled = !0, e.mobile ? (i.phone = e.mobile, a.phone = e.mobile, i.setData({
                open_card_info: a
            }), i.onOpenTap()) : i.setData({
                open_card_info: a
            });
        });
    },
    onSetValueTap: function(e) {
        var a = e.currentTarget.dataset, n = a.name;
        if (a.isMulti || !1) {
            var t = JSON.parse(a.value);
            if (n) {
                var o = {};
                o[n] = Object.assign(this.data[n], t), this.setData(o);
            } else {
                for (var i in t) t[i] = Object.assign(this.data[i] || {}, t[i]);
                this.setData(t);
            }
        } else {
            var s = a.value, r = {};
            r[n] = s, this.setData(r);
        }
    },
    onInputValue: function(e) {
        var a = e.detail.value, n = e.currentTarget.dataset.name;
        this[n] = a;
        var t = this.data.open_card_info;
        t[n] = a, this.setData({
            open_card_info: t
        });
    },
    onGetVerifyCodeTap: function(e) {
        var a = this, n = t.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/CardApi/sendPhoneVerifyCode.html";
        o.default.post(n, {
            phone: this.data.open_card_info.phone
        }, function(e) {
            wx.showToast({
                title: "验证码发送成功，请注意查收！"
            });
            var n = 60;
            !function e() {
                n > 0 ? (a.setData({
                    reload_verify_time: n--
                }), setTimeout(e, 1e3)) : a.setData({
                    reload_verify_time: null
                });
            }();
        });
    },
    onOpenTap: function() {
        var e = this, a = t.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/CardApi/openCard.html";
        o.default.post(a, {
            phone: this.phone,
            code: this.verify_code,
            name: this.card_name || "",
            ver: "0.0.1",
            open_card_version: this.data.open_card_version
        }, function(a) {
            wx.showToast({
                title: "开卡成功！",
                duration: 2500
            });
            var n = e.data.card_info;
            n.show = !1, n.status = 1, e.setData({
                card_info: n
            });
        });
    },
    closeOpenCardPopUpBox: function(e) {
        var a = this.data.card_info;
        a.show = !1, this.setData({
            card_info: a
        });
    },
    inputName: function(e) {
        var a = e.detail.value;
        this.card_name = a;
        var n = this.data.open_card_info;
        n.card_name = a, n.isDisabled = a.length >= 2, this.setData({
            open_card_info: n
        });
    }
});