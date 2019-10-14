var e = require("../../core/network.js"), o = require("../../foundation/base/model.js");

require("../../foundation/base/page.js")({
    pageActionConfig: require("./news.pageaction.js"),
    data: {
        articles: []
    },
    onLoad: function(n) {
        var a = this;
        a.model = o({
            cgi: e.cgiSet.news,
            useCache: !0
        }), a.model.load({
            params: {
                count: 1e3,
                last_msgid: 0,
                last_item_idx: 0
            },
            success: function(e) {
                console.log("load news: ", a.model), a.setData({
                    articles: a.model.data.news.list
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});