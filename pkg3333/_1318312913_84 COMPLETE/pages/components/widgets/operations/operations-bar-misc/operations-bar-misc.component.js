function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, i) {
                try {
                    var o = t[n](i), c = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(c).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(c);
            }
            return a("next");
        });
    };
}

var r = e(require("../../../../../libs/regenerator-runtime")), a = require("../../../../../libs/mp-enhancers/index"), n = e(require("../../../../../libs/classnames")), i = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}(require("../../../../../services/redirector")), o = require("../../../../../services/auth"), c = require("../../card-common/index"), s = require("./operations-bar-misc.service"), u = require("../../../../../config/index"), p = require("../../../../../mixins/share");

Component((0, a.componentOptionsEnhancer)({
    properties: {
        inPostPage: {
            type: Boolean
        },
        size: {
            type: String
        },
        magazineId: {
            type: String
        },
        actionSheetData: {
            type: Object
        },
        topicCount: {
            type: Number
        },
        topicIcon: {
            type: String,
            value: "comment"
        },
        topicTicketData: {
            type: Object
        },
        isMarked: {
            type: Boolean
        },
        markArgsData: {
            type: Object
        },
        shareData: {
            type: Object
        },
        showCommentIcon: {
            type: Boolean
        }
    },
    data: {
        config: u.config
    },
    computed: {
        rootClassNames: function() {
            var e = this.data.size;
            return (0, n.default)("operations-bar", [ "size-" + e ], "com-class");
        },
        isPin: function() {
            var e = this.data.size;
            return (0, c.isPinSize)(e);
        },
        topicIcon: function() {
            return this.data.topicCount > 0 ? "comment-solid" : "comment";
        }
    },
    ready: function() {
        this.service = s.operationsBarService, this.transfer = this.service.app.transfer();
    },
    methods: {
        handleActionSheetLauncherTap: function() {
            var e = this;
            return t(r.default.mark(function a() {
                var n, i, o, c, s, p, d, h;
                return r.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        n = e.data, i = n.actionSheetData, o = n.isPin, c = i.magazineName, s = i.magazineId, 
                        p = i.docId, d = i.utmContent, h = e.service.generateActionSheetItems(c, o, u.config.enableTopic), 
                        wx.showActionSheet({
                            itemList: h,
                            success: function() {
                                var a = t(r.default.mark(function t(a) {
                                    return r.default.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            t.t0 = a.tapIndex, t.next = 0 === t.t0 ? 3 : 1 === t.t0 ? 6 : 2 === t.t0 ? 11 : 3 === t.t0 ? 16 : 18;
                                            break;

                                          case 3:
                                            return t.next = 5, e.service.dislikeSpecContent(s, p, "expired");

                                          case 5:
                                            return t.abrupt("break", 18);

                                          case 6:
                                            if (!o || 2 !== h.length) {
                                                t.next = 8;
                                                break;
                                            }
                                            return t.abrupt("return", e.handleTopicNavigatorTap());

                                          case 8:
                                            return t.next = 10, e.service.dislikeSpecContent(s, p, "irrelative");

                                          case 10:
                                            return t.abrupt("break", 18);

                                          case 11:
                                            if (!o || 3 !== h.length) {
                                                t.next = 13;
                                                break;
                                            }
                                            return t.abrupt("return", e.handleTopicNavigatorTap());

                                          case 13:
                                            return t.next = 15, e.service.unsubscribeMagazine(s, d);

                                          case 15:
                                            return t.abrupt("break", 18);

                                          case 16:
                                            return o && u.config.enableTopic && e.handleTopicNavigatorTap(), t.abrupt("break", 18);

                                          case 18:
                                            a.tapIndex < 2 && wx.showToast({
                                                title: "已提交"
                                            });

                                          case 19:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t, e);
                                }));
                                return function(e) {
                                    return a.apply(this, arguments);
                                };
                            }()
                        });

                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a, e);
            }))();
        },
        handleShowCardTap: function() {
            var e = this.data.shareData;
            p.shareTools.fillShareItem(e), this.service.showShareCard(e);
        },
        handleTopicNavigatorTap: (0, o.requireAuthWrapper)(function() {
            var e = this.data, t = e.magazineId, r = e.topicCount, a = e.topicTicketData, n = this.transfer.put(a);
            if (r > 0) return i.navigateToArticlePage(t, a.docIdString);
            i.navigateToPostCreatePage(t, n);
        }),
        handleCommentIconTap: (0, o.requireAuthWrapper)(function() {
            var e = this.data, t = e.magazineId, r = e.topicTicketData;
            r.from = "ripple-card", r.magazineId = t;
            var a = this.transfer.put(r);
            i.navigateToPostCreatePage(t, a);
        })
    }
}));