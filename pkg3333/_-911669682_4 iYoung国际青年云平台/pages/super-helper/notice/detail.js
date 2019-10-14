function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../utils/dg.js")), i = e(require("../../../utils/data.js")), n = e(require("../../../utils/requestUtil.js")), u = (e(require("../../../utils/underscore.js")), 
e(require("../../../utils/util.js"))), o = i.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

Page({
    noticeId: 0,
    data: {},
    onLoad: function(e) {
        this.noticeId = e.id;
    },
    onReady: function() {},
    onShow: function() {
        this.onPullDownRefresh();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var e = o + "/NoticeApi/info.html";
        n.default.get(e, {
            id: this.noticeId
        }, function(e) {
            e.create_time = u.default.format(1e3 * e.create_time, "yyyy-MM-dd hh:mm"), null != e.user_lists && e.user_lists.map(function(e) {
                e.create_time = u.default.format(1e3 * e.create_time, "yyyy-MM-dd hh:mm");
            }), this.setData(e);
        }, this, {
            completeAfter: t.default.stopPullDownRefresh
        });
    },
    bindtapWrite: function() {
        t.default.redirectTo({
            url: "write"
        });
    },
    onDeleteTap: function() {
        var e = this;
        t.default.confirm("删除后将不能恢复，你确定要删除这条通知吗？", function(i) {
            if (i.confirm) {
                var u = o + "/NoticeApi/del.html";
                n.default.get(u, {
                    id: e.noticeId
                }, function(e) {
                    t.default.navigateBack();
                }, e);
            }
        });
    },
    onShowShareTap: function() {
        var e = this;
        t.default.showShareMenu, setTimeout(function() {
            e.setData({
                showShare: !0
            }), setTimeout(function() {
                return e.setData({
                    showShare: !1
                });
            }, 2500);
        }, 200);
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title || "",
            path: "pages/super-helper/notice/read?id=" + this.noticeId
        };
    }
});