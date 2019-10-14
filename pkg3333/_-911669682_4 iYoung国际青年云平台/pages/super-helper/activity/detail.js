function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/dg.js")), i = t(require("../../../utils/data.js")), a = t(require("../../../utils/requestUtil.js")), n = t(require("../../../utils/util.js")), r = (t(require("../../../utils/underscore.js")), 
e.default.os.isAlipay()), d = i.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

Page({
    activityId: 0,
    remind_time_text: [],
    data: {},
    onLoad: function(t) {
        this.activityId = t.id, this.remind_time_text[-1] = "不提醒", this.remind_time_text[0] = "事件发生时", 
        this.remind_time_text[300] = "提前5分钟", this.remind_time_text[900] = "提前15分钟", this.remind_time_text[1800] = "提前30分钟", 
        this.remind_time_text[3600] = "提前1小时", this.remind_time_text[7200] = "提前2小时", this.remind_time_text[86400] = "提前1天", 
        this.remind_time_text[172800] = "提前2天", this.remind_time_text[604800] = "提前1周";
    },
    onShow: function() {
        this.onPullDownRefresh();
    },
    onPullDownRefresh: function() {
        var t = this, i = d + "/activityApi/info.html";
        a.default.get(i, {
            id: this.activityId
        }, function(e) {
            var i = 1 == e.is_fullday ? "yyyy-MM-dd" : "yyyy-MM-dd hh:mm";
            e.start_time = n.default.format(1e3 * e.start_time, i), e.end_time = n.default.format(1e3 * e.end_time, i), 
            e.remind_time_text = t.remind_time_text[e.remind_time], 1 != e.is_show_qrcode && (e.is_show_qrcode = !1), 
            1 != e.is_show_delete_button && (e.is_show_delete_button = !1), 1 != e.is_show_sign_button && (e.is_show_sign_button = !1), 
            "" != e.content && null != e.content || (e.content = "洞主未设置活动内容"), t.setData(e);
        }, this, {
            completeAfter: e.default.stopPullDownRefresh
        });
    },
    onDeleteTap: function() {
        var t = this;
        e.default.confirm("删除后将不能恢复，你确定要删除这条活动吗？", function(i) {
            if (i.confirm) {
                var n = d + "/activityApi/del.html";
                a.default.get(n, {
                    id: t.activityId
                }, function(t) {
                    e.default.navigateBack();
                }, t);
            }
        });
    },
    onOpenMapTap: function(t) {
        var i = parseFloat(t.currentTarget.dataset.lat), a = parseFloat(t.currentTarget.dataset.lng), n = t.currentTarget.dataset.title, r = t.currentTarget.dataset.address;
        e.default.openLocation({
            latitude: i,
            longitude: a,
            name: n,
            address: r,
            scale: 28
        });
    },
    onNavigateTap: function(t) {
        e.default.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    onViewQRCodeTap: function(t) {
        var n = t.currentTarget.dataset.type, u = d + "/ActivityApi/QRCode.html?id=" + this.activityId + "&type=" + n + "&token=" + i.default.duoguan_user_token + "&_r=" + new Date().getTime();
        if (e.default.showToast({
            title: "二维码生成中，请等待...",
            icon: "loading",
            duration: 6e3
        }), r) {
            var s = u;
            a.default.get(s, {}, function(t) {
                u = t.qrcode_url, e.default.previewImage({
                    current: 0,
                    urls: [ u ]
                });
            }, this, {
                isShowLoading: !1,
                failAfter: function(t) {
                    e.default.hideToast(), e.default.alert("请在支付宝开发者中心，开发管理页-功能列表，添加小程序二维码功能");
                }
            });
        } else e.default.getImageInfo({
            src: u,
            success: function(t) {
                e.default.hideToast(), e.default.previewImage({
                    current: t.path,
                    urls: [ t.path ]
                });
            },
            fail: function(t) {
                e.default.alert("加载失败！"), e.default.hideToast();
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title || "",
            path: "pages/super-helper/activity/detail?id=" + this.activityId
        };
    }
});