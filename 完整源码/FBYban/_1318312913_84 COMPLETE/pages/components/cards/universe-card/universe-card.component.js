var t = require("../../../../libs/mp-enhancers/index"), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../libs/classnames")), a = require("../../../../utils/formatter"), i = require("../../../../utils/notification"), n = require("../../../../utils/dev"), r = require("../../../../config/index"), o = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e.default = t, e;
}(require("../../../../services/redirector"));

Component((0, t.componentOptionsEnhancer)({
    properties: {
        isPin: {
            type: Boolean
        },
        inPostPage: {
            type: Boolean
        },
        magazineConfig: {
            type: Object
        },
        magazine: {
            type: Object
        },
        route: {
            type: String
        },
        event: {
            type: Object
        },
        hideHeader: {
            type: Boolean
        },
        hideFooter: {
            type: Boolean
        },
        hideComponentPadding: {
            type: Boolean
        }
    },
    created: function() {
        this.memoizedCardDataFormatter = (0, t.memoize)(a.cardDataFormatter);
    },
    computed: {
        card: function() {
            var t = this.data, e = t.isPin, a = t.event;
            return this.memoizedCardDataFormatter(e, a.id)(a);
        },
        rootClassNames: function() {
            var t = this.data, a = t.isPin, i = t.event, n = t.card;
            return n || (n = this.memoizedCardDataFormatter(a, i.id)(i)), (0, e.default)("card", [ n.type + "-card" ], [ "size-" + n.size ], [ "media-" + n.mediaType ], {
                "without-header": !n.formattedMetaSnippet || this.data.hideHeader
            }, {
                "has-read": n.hasRead
            }, "com-class");
        },
        needArticleContext: function() {
            var t = this.data.route;
            return !~[ o.PAGE_PATH.ARTICLE, o.PAGE_PATH.POST_LIST ].join("|").indexOf(t);
        },
        isShowCommentIcon: function() {
            var t = this.data.card, e = this.data.magazine && "private" === this.data.magazine.type ? this.data.magazineConfig.enableComment : r.config.enableTopic;
            if (!t || !e) return !1;
            var a = t.magazineRelation;
            return "ripple" === t.type ? a.enableComment || a.enableDiscuss && t.topicCount > 0 : "activity" === t.type ? a.enableDiscuss : void 0;
        },
        cardFooterStyle: function() {
            var t = this.data, e = t.isPin, a = t.event, i = t.card;
            i || (i = this.memoizedCardDataFormatter(e, a.id)(a));
            var n = this.data.route;
            return [ function() {
                return "pages/magazine/magazine" === n;
            }, function() {
                return "pages/page/page" === n;
            } ].some(function(t) {
                return t();
            }) ? i.cardStyle.showFooter : this.data.inPostPage || !i.magazineName || this.data.isPin ? i.formattedFooterNote && this.data.isPin ? "formattedFooterNote" : void 0 : "magazineName";
        },
        isShowAddition: function() {
            var t = this.data, e = t.card, a = t.inPostPage;
            if (!e) return !1;
            var i = e.type, n = e.markCount, r = e.formattedMetaSnippet;
            return [ function() {
                return "activity" === i;
            }, function() {
                return n > 1;
            }, function() {
                return r;
            }, function() {
                return !a;
            } ].every(function(t) {
                return t();
            });
        },
        showReferenceWrapper: function() {
            var t = this.data, e = t.card, a = t.needArticleContext;
            if (!e || !e.topicData) return !1;
            var i = e.topicData, n = i.postType, r = i.vote, o = i.hopCard, c = i.video, u = i.noteData, d = i.article;
            return [ function() {
                return "articleWithAT" === n && a;
            }, function() {
                return "article" === n && a;
            }, function() {
                return "imageWithAT" === n && a && d;
            }, function() {
                return "image" === n && a && d;
            }, function() {
                return r;
            }, function() {
                return o;
            }, function() {
                return c;
            }, function() {
                return u;
            } ].some(function(t) {
                return t();
            });
        },
        showArticle: function() {
            var t = this.data.card;
            if (!t || !t.topicData) return !1;
            var e = t.topicData, a = e.postType, i = e.article;
            return [ function() {
                return "articleWithAT" === a;
            }, function() {
                return "article" === a;
            }, function() {
                return "imageWithAT" === a && i;
            }, function() {
                return "image" === a && i;
            } ].some(function(t) {
                return t();
            });
        }
    },
    methods: {
        collectNotificationFormId: i.collectNotificationFormId,
        stopPropagation: n.NOOP,
        handleCardTap: function() {
            var t = this.data, e = t.card;
            if (!t.inPostPage) switch (e.type) {
              case "ripple":
                o.navigateToArticlePage(e.magazineId, e.docId, {
                    content: e.eventType
                });
                break;

              case "activity":
                o.navigateToPostPage(e.mediaData.id, {
                    mid: e.magazineId
                });
            }
        },
        handleMagazineNameTap: function() {
            var t = this.data.card;
            o.navigateToMagazinePage(t.magazineId, {
                content: "clip"
            });
        }
    }
}));