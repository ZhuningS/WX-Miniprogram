function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var i = t(require("../../../utils/dg.js")), e = t(require("../../../utils/data.js")), a = t(require("../../../utils/requestUtil.js")), d = t(require("../../../utils/util.js")), r = (t(require("../../../utils/underscore.js")), 
e.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper");

Page({
    data: {},
    onLoad: function(t) {
        t.type = t.type || "enroll", this.setData({
            type: t.type
        });
        var i = this;
        d.default.trySyncWechatInfo(function(t) {
            i.setData({
                userInfo: t
            });
        }), this.activityId = t.id, this.onLoadData();
    },
    onLoadData: function() {
        var t = this;
        i.default.showNavigationBarLoading();
        var e = r + "/activityApi/info.html";
        a.default.get(e, {
            id: this.activityId
        }, function(i) {
            i.create_time = d.default.format(1e3 * i.create_time, "yyyy-MM-dd hh:mm"), i.start_time = d.default.format(1e3 * i.start_time, 1 == i.is_fullday ? "yyyy-MM-dd" : "yyyy-MM-dd hh:mm"), 
            i.end_time = d.default.format(1e3 * i.end_time, 1 == i.is_fullday ? "yyyy-MM-dd" : "yyyy-MM-dd hh:mm"), 
            t.setData(i);
        }, this, {
            completeAfter: i.default.hideNavigationBarLoading
        });
    },
    onOpenMapTap: function(t) {
        var e = parseFloat(t.currentTarget.dataset.latitude), a = parseFloat(t.currentTarget.dataset.longitude), d = t.currentTarget.dataset.title, r = t.currentTarget.dataset.address;
        i.default.openLocation({
            latitude: e,
            longitude: a,
            name: d,
            address: r,
            scale: 28
        });
    },
    onActionTap: function(t) {
        var e = this;
        if ("signed" == this.data.type) if (this.data.is_activity) {
            if (a.default.isLoading(this.signedRQId)) return;
            var d = r + "/activityApi/signed.html";
            this.signedRQId = a.default.get(d, {
                id: this.activityId
            }, function() {
                i.default.redirectTo({
                    url: "detail?id=" + e.activityId
                });
            });
        } else i.default.redirectTo({
            url: "write-msg?id=" + this.activityId + "&enroll_info=" + this.data.enroll_info + "&is_signed=1"
        }); else if (this.data.is_activity) i.default.redirectTo({
            url: "detail?id=" + this.activityId
        }); else if (this.data.enroll_info) i.default.redirectTo({
            url: "write-msg?id=" + this.activityId + "&enroll_info=" + this.data.enroll_info + "&is_signed=1"
        }); else {
            if (a.default.isLoading(this.enrollRQId)) return;
            var s = r + "/activityApi/enroll.html";
            this.enrollRQId = a.default.get(s, {
                id: this.activityId
            }, function() {
                e.onLoadData();
            });
        }
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title || "",
            path: "pages/super-helper/activity/take-in?id=" + this.activityId
        };
    }
});