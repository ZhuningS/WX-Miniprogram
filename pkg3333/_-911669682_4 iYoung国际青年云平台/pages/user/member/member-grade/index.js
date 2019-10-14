var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../utils/requestUtil.js")), t = require("../../../../utils/data.js");

Page({
    data: {
        gradeNum: 0
    },
    onLoad: function(e) {
        this.onPullDownRefresh();
    },
    onPullDownRefresh: function() {
        var u = this;
        e.default.get(t.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/CardApi/getLevelInfo.html", {}, function(e) {
            u.setData(e);
        });
    }
});