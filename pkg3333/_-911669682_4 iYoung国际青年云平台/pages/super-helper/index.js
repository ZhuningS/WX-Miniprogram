function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../utils/dg.js")), a = e(require("../../utils/data.js")), n = e(require("../../utils/requestUtil.js"));

Page({
    shareInfo: null,
    data: {},
    onLoad: function(e) {
        var t = this, u = a.default.duoguan_host_api_url + "/index.php/addon/DuoguanUser/Api/getShareInfo.html";
        n.default.get(u, {
            mmodule: "duoguan_group_helper",
            _: Date.now()
        }, function(e) {
            t.shareInfo = e;
        });
    },
    onPullDownRefresh: function(e) {},
    onNavigateTap: function(e) {
        t.default.navigateTo({
            url: e.currentTarget.dataset.url
        });
    },
    onShareAppMessage: function() {
        return this.shareInfo = this.shareInfo || {}, {
            title: this.shareInfo.title || "",
            desc: this.shareInfo.desc || "",
            path: "/pages/super-helper/index"
        };
    }
});