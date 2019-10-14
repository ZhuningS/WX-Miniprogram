function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/dg.js")), i = t(require("../../../utils/data.js")), n = t(require("../../../utils/requestUtil.js")), o = (t(require("../../../utils/underscore.js")), 
t(require("../../../utils/util.js"))), u = i.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

Page({
    noticeId: 0,
    data: {},
    onLoad: function(t) {
        this.noticeId = t.id;
    },
    onReady: function() {},
    onShow: function() {
        this.onPullDownRefresh();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var t = u + "/NoticeApi/info.html";
        n.default.get(t, {
            id: this.noticeId
        }, function(t) {
            t.create_time = o.default.format(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), this.setData(t);
        }, this, {
            completeAfter: e.default.stopPullDownRefresh
        });
    },
    onClickTap: function() {
        var t = this;
        if (!n.default.isLoading(this.clickRQId)) {
            var e = u + "/NoticeApi/click.html";
            n.default.get(e, {
                id: this.noticeId
            }, function(e) {
                t.onPullDownRefresh();
            }, this);
        }
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title || "",
            path: "pages/super-helper/notice/read?id=" + this.noticeId
        };
    }
});