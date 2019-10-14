function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, r) {
            function n(i, a) {
                try {
                    var o = e[i](a), c = o.value;
                } catch (t) {
                    return void r(t);
                }
                if (!o.done) return Promise.resolve(c).then(function(t) {
                    n("next", t);
                }, function(t) {
                    n("throw", t);
                });
                t(c);
            }
            return n("next");
        });
    };
}

var r = t(require("../../libs/regenerator-runtime.js")), n = t(require("../../utils/extend-page")), i = require("../../protocol/io"), a = t(require("../../mixins/actions")), o = t(require("../../mixins/logger")), c = t(require("../../mixins/hook")), l = t(require("../../utils/raml"));

Page((0, n.default)({
    data: {},
    ticket: void 0,
    onLoad: function(t) {
        var n = this;
        return e(r.default.mark(function e() {
            var i, a;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    i = t.id, n.ticket = t.ticket, n.pageShown("/preview/", t.content), wx.setNavigationBarTitle({
                        title: "预览"
                    }), n.ticket ? (a = getApp().transfer().take(n.ticket)) && (a.url ? n.loadArticleViaUrl(a.url) : a.id && n.loadArticleViaDocId(a.id), 
                    n.setData({
                        action: a.action
                    })) : i && n.loadArticleViaDocId(i);

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, n);
        }))();
    },
    loadArticleViaDocId: function(t) {
        var n = this;
        return e(r.default.mark(function e() {
            var a, o, c, u;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = {
                        app_id: getApp().getConfig().wxAppid,
                        token: getApp().getUserToken(),
                        template: "raml",
                        docid: t
                    }, e.next = 3, i.api.get("v1/article.get", a);

                  case 3:
                    o = e.sent, console.log("Fetch article via doc id", o), (c = o.data.events[0].article) && ((u = l.default.createRAML()).parseContent(c.contentHtml), 
                    console.log(u.content), n.setData({
                        article: {
                            docIdString: c.docIdString,
                            title: c.title,
                            cover: c.cover,
                            snippet: c.snippet
                        },
                        content: u.content
                    }));

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, n);
        }))();
    },
    loadArticleViaUrl: function(t) {
        var n = this;
        return e(r.default.mark(function e() {
            var a, o, c, u;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = {
                        app_id: getApp().getConfig().wxAppid,
                        token: getApp().getUserToken(),
                        format: "raml",
                        url: t
                    }, e.next = 3, i.api.getV1("article.fetch", a);

                  case 3:
                    o = e.sent, console.log("Fetch article via url", o), (c = o.data.article) && ((u = l.default.createRAML()).parseContent(c.content), 
                    console.log(u.content), n.setData({
                        article: {
                            docIdString: c.articleId,
                            title: c.title,
                            cover: c.images && c.images.length > 0 ? c.images[0].url : void 0
                        },
                        content: u.content
                    }));

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, n);
        }))();
    },
    doPreviewAction: function() {
        getApp().transfer().callback(this.ticket, this.data.article), wx.navigateBack();
    }
}, a.default, o.default, c.default));