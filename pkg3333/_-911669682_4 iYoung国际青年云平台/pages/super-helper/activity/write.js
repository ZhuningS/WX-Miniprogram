function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/dg")), a = t(require("../../../utils/data.js")), i = t(require("../../../utils/requestUtil.js")), n = t(require("../../../utils/underscore.js")), o = t(require("../../../utils/util.js")), l = e.default.os.isAlipay(), d = a.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper", u = getApp();

Page({
    data: {
        isFullDay: !1,
        cover: "https://www.ixiaochengxu.cc/temp_pic/pic_tpl_1.jpg",
        is_private: 0
    },
    onLoad: function(t) {
        var e = new Date();
        this.setData({
            init_start_date: o.default.format(e, "yyyy-MM-dd"),
            start_date: o.default.format(e, "yyyy-MM-dd"),
            start_time: o.default.format(e, "hh:mm"),
            end_date: o.default.format(e.getTime() + 288e5, "yyyy-MM-dd"),
            end_time: o.default.format(e.getTime() + 288e5, "hh:mm")
        }), u.globalData.remind_time = 3600, u.globalData.remind_time_text = "提前1小时";
    },
    onShow: function() {
        this.setData({
            remind_time: u.globalData.remind_time,
            remind_time_text: u.globalData.remind_time_text
        });
    },
    bindDateChange: function(t) {
        var e = {};
        e[t.currentTarget.dataset.bind] = !0 === t.detail.value ? 1 : t.detail.value, this.setData(e);
    },
    onFullDayChange: function(t) {
        this.setData({
            isFullDay: t.detail.value
        });
    },
    chooseLocationTap: function(t) {
        var a = this, i = this;
        e.default.chooseLocation({
            success: function(t) {
                var e = {};
                e.longitude = t.longitude, e.latitude = t.latitude, e.address = t.address, a.setData(e), 
                console.log(e);
            },
            fail: function(t) {
                var e = t.errMsg;
                (e.indexOf("deny") > 0 || e.indexOf("auth") > 0) && wx.showModal({
                    title: "温馨提示",
                    content: "为了给您提供更好的服务，请授权您的地理位置信息",
                    showCancel: !1,
                    success: function(t) {
                        if (t.confirm) {
                            if (l) return !1;
                            wx.openSetting({
                                complete: function(t) {
                                    t.authSetting["scope.userLocation"], i.chooseLocationTap({});
                                }
                            });
                        }
                    }
                });
            }
        });
    },
    onEnrollInfoChange: function(t) {
        console.log(t.detail.value), this.setData({
            enroll_info: t.detail.value.join(",")
        });
    },
    onIsEnrollInfoChange: function(t) {
        this.setData({
            is_enroll_info: t.detail.value,
            enroll_info: t.detail.value ? "true_name,mobile,company" : ""
        });
    },
    bindtapTime: function() {
        e.default.navigateTo({
            url: "tip-time"
        });
    },
    bindtapTem: function() {
        e.default.navigateTo({
            url: "template"
        });
    },
    onPushSubmit: function(t) {
        if (!i.default.isLoading(this.addRQId)) {
            var a = n.default.extend({
                emind_time: u.globalData.remind_time,
                form_id: t.detail.formId
            }, t.detail.value), o = d + "/activityApi/edit.html";
            this.addRQId = i.default.post(o, a, function(t) {
                e.default.redirectTo({
                    url: "detail?id=" + t.id
                });
            }, this);
        }
    },
    onPrivateChange: function(t) {
        this.setData({
            is_private: t.detail.value ? 1 : 0
        });
    }
});