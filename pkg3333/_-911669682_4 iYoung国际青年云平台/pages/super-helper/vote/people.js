function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../../utils/dg.js"));

var e = t(require("../../../utils/data.js")), i = t(require("../../../utils/requestUtil.js")), u = (t(require("../../../utils/util.js")), 
t(require("../../../utils/underscore.js")), t(require("../../../wxParse/wxParse.js")), 
e.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper");

Page({
    voteId: null,
    data: {
        hasVote: !1
    },
    onLoad: function(t) {
        this.voteId = t.id, this.initialize();
    },
    onShow: function() {},
    initialize: function() {
        var t = u + "/VoteApi/statistic.html", e = {
            id: this.voteId
        };
        i.default.get(t, e, function(t) {
            var e = [];
            t.map(function(t, i, u) {
                0 != t.count && e.push(t);
            }), this.setData({
                data: e,
                hasVote: t.length > 0
            });
        }, this);
    }
});