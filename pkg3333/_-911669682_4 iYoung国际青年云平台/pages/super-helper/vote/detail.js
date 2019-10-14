function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../utils/dg.js")), i = e(require("../../../utils/data.js")), a = e(require("../../../utils/requestUtil.js")), u = e(require("../../../utils/util.js")), n = (e(require("../../../utils/underscore.js")), 
i.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper");

Page({
    voteId: null,
    selectValue: 0,
    data: {},
    onLoad: function(e) {
        this.voteId = e.id;
    },
    onShow: function() {
        this.selectValue = 0, this.onPullDownRefresh(1);
    },
    onPullDownRefresh: function() {
        var e = n + "/VoteApi/info.html";
        a.default.get(e, {
            id: this.voteId
        }, function(e) {
            e.create_time = u.default.format(1e3 * e.create_time, "yyyy-MM-dd hh:mm"), this.setData(e);
        }, this, {
            completeAfter: t.default.stopPullDownRefresh
        });
    },
    onSelectValueChange: function(e) {
        this.selectValue = e.detail.value;
    },
    onDeleteTap: function() {
        var e = this;
        t.default.confirm("删除后将不能恢复，你确定要删除这条投票吗？", function(i) {
            if (i.confirm) {
                var u = n + "/VoteApi/del.html";
                a.default.get(u, {
                    id: e.voteId
                }, function(e) {
                    t.default.navigateBack();
                }, e);
            }
        });
    },
    onVoteTap: function(e) {
        var t = parseInt(this.selectValue), i = n + "/VoteApi/vote.html";
        a.default.get(i, {
            id: this.voteId,
            value: t
        }, function(e) {
            this.onPullDownRefresh();
        }, this);
    },
    onAddVoteTap: function() {
        t.default.navigateTo({
            url: "write"
        });
    },
    onQueryOneTap: function() {
        var e = n + "/VoteApi/queryOne.html";
        a.default.get(e, {
            id: this.voteId,
            prev_id: this.data.prev_id
        }, function(e) {
            e.create_time = u.default.format(1e3 * e.create_time, "yyyy-MM-dd hh:mm:ss"), this.setData(e), 
            this.voteId = e.id, this.setData({
                prev_id: e.id
            });
        }, this);
    },
    onNavigateTap: function(e) {
        t.default.navigateTo({
            url: e.currentTarget.dataset.url
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.remark || "",
            path: "pages/super-helper/vote/detail?id=" + this.voteId
        };
    }
});