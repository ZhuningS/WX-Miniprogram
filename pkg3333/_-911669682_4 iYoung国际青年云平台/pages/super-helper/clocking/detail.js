function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/dg.js")), i = t(require("../../../utils/data.js")), n = t(require("../../../utils/requestUtil.js")), a = (t(require("../../../utils/underscore.js")), 
t(require("../../../utils/util.js"))), s = i.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

a.default.getMapSdk();

Page({
    signedId: 0,
    signed_Id: 0,
    locationTimeId: 0,
    location: null,
    data: {
        address: "正在获取地址信息..."
    },
    onLoad: function(t) {
        this.signedId = t.id;
        var e = this;
        a.default.trySyncWechatInfo(function(t) {
            e.setData({
                userInfo: t
            });
        });
    },
    onReady: function() {},
    onShow: function() {
        this.onPullDownRefresh();
    },
    onHide: function() {},
    onUnload: function() {},
    onNavigateTap: function(t) {
        e.default.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    onPullDownRefresh: function() {
        var t = s + "/SignedApi/info.html";
        n.default.get(t, {
            id: this.signedId
        }, function(t) {
            this.setData(this.onDataHandler(t));
        }, this, {
            completeAfter: e.default.stopPullDownRefresh
        });
    },
    onLocationHandler: function(t) {
        var i = this;
        e.default.getLocation({
            success: function(t) {
                i.location = {
                    latitude: t.latitude,
                    longitude: t.longitude
                };
            }
        });
    },
    onDataHandler: function(t) {
        var e = new Date().getTime() / 1e3;
        t.start_time = (t.start_time + "").split(".", 2).join(":"), t.end_time = (t.end_time + "").split(".", 2).join(":");
        var i = new Date(1e3 * t.begin_time);
        i.setHours(0), i.setMinutes(0), i.setSeconds(0), i = i.getTime() / 1e3, t.tabBar = Math.ceil((e - i) / 86400 % t.cycle), 
        t.begin_time = a.default.format(1e3 * t.begin_time, "yyyy-MM-dd"), t.days = [];
        for (var n = 0; n < t.tabBar; n++) t.days.push(n + 1);
        return console.log(t.tabBar), this.onSignedLogsHanlder(t.user_lists), t;
    },
    onSignedLogsHanlder: function(t) {
        for (var e = 0; e < t.length; e++) t[e].create_time = a.default.format(1e3 * t[e].create_time, "yyyy-MM-dd hh:mm");
    },
    onPartakeTap: function() {
        if (!n.default.isLoading(this.partakeRQId)) {
            var t = s + "/SignedApi/partake.html";
            this.partakeRQId = n.default.get(t, {
                id: this.signedId
            }, function(t) {
                this.onPullDownRefresh();
            }, this);
        }
    },
    onSignedTap: function() {
        var t = this;
        if (0 == this.data.type) {
            if (n.default.isLoading(this.addRQId)) return;
            var i = s + "/SignedApi/signed.html";
            this.addRQId = n.default.post(i, {
                id: this.signedId,
                content: "已打卡!"
            }, function(e) {
                t.onPullDownRefresh();
            });
        } else e.default.navigateTo({
            url: "today?id=" + this.signedId
        });
    },
    onDeleteTap: function() {
        var t = this;
        e.default.confirm("删除后将不能恢复，你确定要删除这条签到吗？", function(i) {
            if (i.confirm) {
                var a = s + "/SignedApi/del.html";
                n.default.get(a, {
                    id: t.signedId
                }, function(t) {
                    e.default.navigateBack();
                }, t);
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: "",
            path: "pages/super-helper/clocking/detail?id=" + this.signedId
        };
    },
    tabBarEvent: function(t) {
        var e = this, i = t.currentTarget.dataset.tabBar;
        e.setData({
            tabBar: i
        });
        var d = s + "/SignedApi/punch.html";
        n.default.get(d, {
            day: i,
            id: this.signedId
        }, function(t) {
            if (null != t.user_lists) {
                for (var i = 0; i < t.user_lists.length; i++) t.user_lists[i].create_time = a.default.format(1e3 * t.user_lists[i].create_time, "yyyy-MM-dd hh:mm");
                e.setData({
                    user_lists: t.user_lists
                });
            } else e.setData({
                user_lists: null
            });
        });
    }
});