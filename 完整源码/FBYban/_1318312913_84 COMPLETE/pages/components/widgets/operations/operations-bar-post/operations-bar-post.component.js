function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, i) {
                try {
                    var s = t[a](i), o = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(o);
            }
            return n("next");
        });
    };
}

var r = e(require("../../../../../libs/regenerator-runtime")), n = require("../../../../../libs/mp-enhancers/index"), a = e(require("../../../../../libs/classnames")), i = require("../../../../../services/warehouse/index"), s = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}(require("../../../../../services/redirector")), o = require("../../../../../services/auth"), c = require("../../card-common/index"), u = require("./operations-bar-post.service"), p = require("../../../../../config/index"), d = require("../../../../../mixins/share");

Component((0, n.componentOptionsEnhancer)({
    properties: {
        inPostPage: {
            type: Boolean
        },
        size: {
            type: String
        },
        magazineId: {
            type: Number
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
        config: p.config
    },
    computed: {
        rootClassNames: function() {
            var e = this.data.size;
            return (0, a.default)("operations-bar", [ "size-" + e ], "com-class");
        },
        isPin: function() {
            var e = this.data.size;
            return (0, c.isPinSize)(e);
        },
        topicIcon: function() {
            return "comment";
        },
        showActionSheetLauncher: function() {
            var e = this.data.actionSheetData.postParams;
            return !!(e.isSelf || e && e.postManage);
        }
    },
    ready: function() {
        this.service = u.operationsBarService, this.transfer = this.service.app.transfer();
    },
    methods: {
        handleActionSheetLauncherTap: function() {
            var e = this;
            return t(r.default.mark(function n() {
                var a, s, o, c, u, d, h;
                return r.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        a = e.data, s = a.actionSheetData, o = a.isPin, c = s.magazineName, u = s.magazineId, 
                        d = s.postParams, h = e.service.generateActionSheetItems(c, o, p.config.enableTopic, d), 
                        wx.showActionSheet({
                            itemList: h,
                            success: function() {
                                var n = t(r.default.mark(function t(n) {
                                    return r.default.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            t.t0 = n.tapIndex, t.next = 0 === t.t0 ? 3 : 1 === t.t0 ? 7 : 2 === t.t0 ? 18 : 28;
                                            break;

                                          case 3:
                                            return t.next = 5, e.service.removePost(d.postId, u);

                                          case 5:
                                            return i.eventAPI.setEventEntity(d.eventId, {
                                                isDeleted: !0
                                            }), t.abrupt("break", 28);

                                          case 7:
                                            if (!d.isPin) {
                                                t.next = 14;
                                                break;
                                            }
                                            return t.next = 10, e.service.unpinPost(d.postId, u);

                                          case 10:
                                            console.log("置顶"), e.triggerEvent("reload", {}, {
                                                bubbles: !0,
                                                composed: !0
                                            }), t.next = 17;
                                            break;

                                          case 14:
                                            return t.next = 16, e.service.pinPost(d.postId, u);

                                          case 16:
                                            e.triggerEvent("reload", {}, {
                                                bubbles: !0,
                                                composed: !0
                                            });

                                          case 17:
                                            return t.abrupt("break", 28);

                                          case 18:
                                            if (!d.isPreview) {
                                                t.next = 24;
                                                break;
                                            }
                                            return t.next = 21, e.service.unpreviewPost(d.postId, u);

                                          case 21:
                                            e.triggerEvent("reload", {}, {
                                                bubbles: !0,
                                                composed: !0
                                            }), t.next = 27;
                                            break;

                                          case 24:
                                            return t.next = 26, e.service.previewPost(d.postId, u);

                                          case 26:
                                            e.triggerEvent("reload", {}, {
                                                bubbles: !0,
                                                composed: !0
                                            });

                                          case 27:
                                            return t.abrupt("break", 28);

                                          case 28:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t, e);
                                }));
                                return function(e) {
                                    return n.apply(this, arguments);
                                };
                            }()
                        });

                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n, e);
            }))();
        },
        handleShowCardTap: function() {
            var e = this.data.shareData;
            d.shareTools.fillShareItem(e), this.service.showShareCard(e);
        },
        handleTopicNavigatorTap: (0, o.requireAuthWrapper)(function() {
            var e = this.data, t = e.magazineId, r = e.markArgsData;
            s.navigateToPostPage(r.postId, {
                mid: t,
                reply: !0
            });
        })
    }
}));