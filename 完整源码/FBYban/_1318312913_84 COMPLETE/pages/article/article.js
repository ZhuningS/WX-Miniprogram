function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

function i(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, i) {
            function n(a, o) {
                try {
                    var s = t[a](o), r = s.value;
                } catch (e) {
                    return void i(e);
                }
                if (!s.done) return Promise.resolve(r).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(r);
            }
            return n("next");
        });
    };
}

var n = e(require("../../libs/regenerator-runtime")), a = e(require("../../libs/underscore")), o = e(require("../../libs/url")), s = require("../../protocol/io"), r = e(require("../../protocol/apis")), c = e(require("../../protocol/websocket-old")), l = require("../../utils/data-processor"), d = require("../../utils/dev"), h = e(require("../../utils/extend-page")), g = e(require("../../utils/raml")), u = e(require("../../utils/util")), p = require("../../mixins/index"), f = require("../../services/auth"), m = require("../../services/ui-switch"), v = require("../../services/warehouse/index"), w = require("../../protocol/logger"), k = require("../../config/index"), T = e(require("../components/article-conversation")), I = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t.default = e, t;
}(require("../../services/redirector")), b = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
    return e;
}, x = getApp(), y = {
    data: {
        preview: "preview",
        shareMeta: {},
        uiSwitchArticle: {},
        markCount: 0,
        shareCount: 0,
        mainColor: "rgba(172, 172, 172, 0.7)",
        otherColor: "rgba(172, 172, 172, 0.3)",
        topics: void 0,
        hasMoreTopics: !1,
        nuxMark: !1,
        nuxOnboard: void 0,
        magazine: null,
        advertisement: null
    },
    startDiscuss: null,
    logData: {
        articleStart: !1,
        articleFinish: !1
    },
    docId: null,
    mid: null,
    eventId: null,
    article: null,
    images: null,
    shareConfig: null,
    raml: null,
    noteList: null,
    note: {
        expand: !1,
        list: [],
        viewOptions: {
            showHeader: !0,
            showFooter: !0
        }
    },
    myNoteList: [],
    recommendList: null,
    refferId: null,
    positionLookUp: {},
    contentSize: 0,
    conversation: {
        updateTimestamp: 0,
        events: [],
        totalUsers: [],
        activeUsers: [],
        followedUsers: [],
        viewOptions: {
            showHeader: !0,
            showFooter: !0
        }
    },
    conversationOptions: {
        support: !0,
        enable: !1,
        expand: !1
    },
    user: {},
    receivedHistory: !1,
    notification: {},
    share: !1,
    scrollTo: null,
    reachArticleBottom: !1,
    selectionStarted: null,
    selectionOffset: 0,
    selectingHandle: null,
    paidTicket: null,
    postTicket: null,
    _websocket: null
}, S = {
    onLoad: function(e) {
        var t = this;
        return i(n.default.mark(function i() {
            var a, o, s;
            return n.default.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    return t.docId = e.id, t.mid = e.mid || 0, t.markId = e.mark, t.jump = e.jump || !1, 
                    t.markId && t.markId.startsWith("m") && (t.markId = t.markId.substring(1)), t.refferId = e.uid, 
                    t.raml = g.default.createRAML(), t.initConversation(e), a = t, t.initLogin(), t.initPay(), 
                    t.user = {
                        uid: getApp().globalData.userInfo.uid,
                        avatar: getApp().globalData.userInfo.avatar,
                        delayShareBar: !1
                    }, t.setData({
                        user: t.user,
                        scrollTo: ""
                    }), o = {
                        showBonus: k.config.enableBonus,
                        showDiscuss: k.config.enableDiscuss
                    }, t.setData({
                        docId: t.docId,
                        mid: t.mid,
                        viewOptions: o,
                        preview: !1
                    }), s = e.content, t.uid && (s = "reffer"), t.mid ? t.pageShown("/magazines/" + a.mid + "/articles/" + a.docId + "/", s) : t.pageShown("/articles/" + a.docId + "/", s), 
                    i.next = 20, t.loadArticle();

                  case 20:
                    "private" === t.data.magazine.type && t.data.enableComment && t.initConversation({
                        discuss: "false"
                    }), t.startConversation(), t.checkConversation(), t.tryToOnboard();

                  case 24:
                  case "end":
                    return i.stop();
                }
            }, i, t);
        }))();
    },
    onShow: function() {
        var e = this;
        return i(n.default.mark(function t() {
            var i, a, o, r;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.paidTicket) {
                        t.next = 13;
                        break;
                    }
                    if (i = getApp().transfer().take(e.paidTicket), e.paidTicket = void 0, !i || !i.paid) {
                        t.next = 13;
                        break;
                    }
                    if (a = i.productType, o = i.productRefer, "group" !== a) {
                        t.next = 12;
                        break;
                    }
                    return t.next = 9, s.api.get("v1/group.join", {
                        mid: o
                    });

                  case 9:
                    wx.reLaunch({
                        url: k.config.homePage
                    }), t.next = 13;
                    break;

                  case 12:
                    e.reload();

                  case 13:
                    e.postTicket && (r = getApp().transfer().take(e.postTicket), e.postTicket = null, 
                    console.log("发送 post 回来", r), r && r.posted && e.loadTopics(!0)), e.checkConversation();

                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    onHide: function() {
        this.leaveConversation();
    },
    onUnload: function() {
        this.log("closed_item", {
            item: this.docId,
            item_type: "article",
            magazine_id: this.mid
        }), this.leaveConversation();
    }
}, H = {
    loadArticle: function() {
        var e = this;
        return i(n.default.mark(function i() {
            var r, c, h, g, p, f, v, w, T, b, y, S, H, C, D, A, M, N, O, _, z, P, L, U, q, R, E, B, j, F, W, Y;
            return n.default.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    return r = {
                        template: "raml",
                        docid: e.docId,
                        mid: e.mid,
                        check_paid: k.config.enablePay,
                        app_id: k.config.wxAppid,
                        token: getApp().getUserToken(),
                        pub_id: getApp().getPublicationId()
                    }, e.markId && (r.markid = e.markId), i.prev = 2, i.next = 5, s.api.get("v1/article.get", r);

                  case 5:
                    if (h = i.sent, console.log("load article success", h), h.data.events && !(h.data.events.length <= 0)) {
                        i.next = 10;
                        break;
                    }
                    return e.setData({
                        error: "文章不存在"
                    }), i.abrupt("return");

                  case 10:
                    if (h.data.events[0].magazine || (h.data.events[0].article.mid = 0, e.mid = 0), 
                    !h.data.events[0].webUrlRedirect) {
                        i.next = 17;
                        break;
                    }
                    return g = h.data.events[0].article.webUrl, p = e.mid, f = e.docId, I.redirectTo("/pages/web/web", {
                        url: g,
                        mid: p,
                        docId: f
                    }), i.abrupt("return", new Error("转到 web-view 打开"));

                  case 17:
                    if (v = [], !k.config.enablePay) {
                        i.next = 40;
                        break;
                    }
                    for (w = a.default.filter(h.data.events, function(e) {
                        return "product" === e.type;
                    }), T = !0, b = !1, y = void 0, i.prev = 23, S = w[Symbol.iterator](); !(T = (H = S.next()).done); T = !0) (C = H.value).product.paid || v.push(C.product);
                    i.next = 31;
                    break;

                  case 27:
                    i.prev = 27, i.t0 = i.catch(23), b = !0, y = i.t0;

                  case 31:
                    i.prev = 31, i.prev = 32, !T && S.return && S.return();

                  case 34:
                    if (i.prev = 34, !b) {
                        i.next = 37;
                        break;
                    }
                    throw y;

                  case 37:
                    return i.finish(34);

                  case 38:
                    return i.finish(31);

                  case 39:
                    v = a.default.sortBy(v, function(e) {
                        return e.isRecommended ? 0 : 1;
                    });

                  case 40:
                    for (D = h.data.events.find(function(e) {
                        return "ads" === e.type;
                    }), A = void 0, D && (A = D.ads, e.setData({
                        advertisement: A
                    })), M = h.data.events[0], N = (0, l.generateEventId)(M), e.shareConfig = M.shareConfig, 
                    e.article = M.article, e.article.date = u.default.formatTime(e.article.docDate), 
                    e.note.article = e.article, e.raml.parseContent(e.article.contentHtml), delete e.article.contentHtml, 
                    e.log("opened_item", {
                        item: e.docId,
                        item_type: "article",
                        magazine_id: e.mid
                    }), O = e.raml.content, _ = 0, z = O.length; _ < z; _++) e.positionLookUp[O[_].id] = _;
                    e.contentSize = O.length, P = M.magazine, L = M.magazineInfo, 0 !== M.article.mid ? (P.enableComment = L.config.enableComment || !1, 
                    P.needRelatedMagazine = L.config.needRelatedMagazine || !1) : (L = {}, P = {
                        enableComment: !1,
                        needRelatedMagazine: !0,
                        relation: {}
                    }), U = m.uiSwitch.getSwitches("article", {
                        magazine: P
                    }), q = M.color || "ACACAC", R = u.default.hexToRgba(q, .4), E = u.default.hexToRgba(q, .2), 
                    B = !(!M.magazineInfo || !M.magazineInfo.config) && (M.magazineInfo.config.enableComment || !1), 
                    t(c = {
                        eventId: N,
                        magazine: P,
                        magazineInfo: L,
                        uiSwitchArticle: U
                    }, "marked." + e.docId, M.isMarked), t(c, "article", e.article), t(c, "hopCard", M.hopCard || !1), 
                    t(c, "markCount", M.markCount), t(c, "shareCount", M.shareCount), t(c, "mainColor", R), 
                    t(c, "otherColor", E), t(c, "color", q), t(c, "products", v), t(c, "copyright", "self" === k.config.articleCopyright), 
                    t(c, "enableComment", B), j = c, (F = k.config.enableMagazine ? M.primaryMark : null) && (F.markId = F.pid + F.start + F.end, 
                    F.content = F.content.substring(F.start, F.end), F.magazineName = e.article.magazineName, 
                    F.mid = e.article.mid, j.primaryMark = F, j["marked." + F.markId] = F.isMarked), 
                    e.setData(j), k.config.enableMagazine && "self" !== k.config.articleCopyright && e.article.webUrl && (W = new o.default(e.article.webUrl)).host && e.showPageTitle(W.host, "000000", "ffffff"), 
                    e.updateShare(), e.note.list.length > 0 ? e.attachAllNotes(e.note.list) : e.setData({
                        article: e.article,
                        content: e.raml.content
                    }), e.loadNotes(), (Y = "private" === P.type ? L.config.enableComment : k.config.enableTopic) && e.data.magazine.relation.enableRead && (e.jump ? (e.loadTopics(!0), 
                    e.jump = !1) : e.loadTopics(!1)), e.websocket().sendMessage({
                        docid: e.docId,
                        refferid: e.refferId,
                        token: x.getUserToken(),
                        type: "progress",
                        paragraphid: e.pid,
                        timestamp: new Date().getTime()
                    }), setTimeout(function() {
                        e.switchToParagraph(e.pid);
                    }, 600), i.next = 81;
                    break;

                  case 77:
                    i.prev = 77, i.t1 = i.catch(2), (0, d.errorReporter)("load article failed", i.t1), 
                    e.setData({
                        error: "暂时无法访问网络"
                    });

                  case 81:
                  case "end":
                    return i.stop();
                }
            }, i, e, [ [ 2, 77 ], [ 23, 27, 31, 39 ], [ 32, , 34, 38 ] ]);
        }))();
    },
    loadNotes: function() {
        var e = this;
        this.noteList = r.default.getArticleNotes({
            docid: this.docId,
            mid: this.mid,
            process: function(t) {
                for (var i = [], n = null, a = 0; a < t.length; a++) {
                    var o = t[a];
                    i.push(o), o.myself && !n && (n = o);
                }
                return n && e.updateShare(n), i;
            },
            callback: function(t) {
                wx.hideNavigationBarLoading(), t ? (console.log("Load notes success: ", e.noteList.pages), 
                e.conversationOptions.enable ? console.log("Ignore notes refresh, on sharing is open") : e.attachAllNotes(e.noteList.pages)) : console.log("Load notes failed.");
            }
        }), this.noteList.loadMore();
    },
    onTapAllTopics: function() {
        var e = x.transfer().put({
            from: "article",
            docIdString: this.article.docIdString,
            title: this.article.title,
            cover: this.article.cover,
            snippet: this.article.snippet
        });
        this.postTicket = e, wx.navigateTo({
            url: "/pages/post/list?mid=" + this.data.article.mid + "&docId=" + this.data.article.docIdString + "&ticket=" + e
        });
    },
    onTapAddTopic: (0, f.requireAuthWrapper)(function() {
        var e = x.transfer().put({
            from: "article",
            docIdString: this.article.docIdString,
            title: this.article.title,
            cover: this.article.cover,
            snippet: this.article.snippet
        });
        this.postTicket = e, wx.navigateTo({
            url: "/pages/post/create?id=" + this.data.article.mid + "&ticket=" + e
        });
    }),
    scrollEvent: function() {
        var e = this;
        return i(n.default.mark(function t() {
            var i, a, o, s;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return i = void 0, a = void 0, o = function() {
                        return new Promise(function(e) {
                            wx.createSelectorQuery().selectViewport().scrollOffset(function(t) {
                                i = t.scrollTop, e();
                            }).exec();
                        });
                    }, s = function() {
                        return new Promise(function(e) {
                            wx.createSelectorQuery().select("#id-view-topics").boundingClientRect(function(t) {
                                t && (a = t.top), e();
                            }).exec();
                        });
                    }, e.next = 5, o();

                  case 5:
                    return e.next = 7, s();

                  case 7:
                    wx.pageScrollTo({
                        scrollTop: i + a
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, t, e);
        }))();
    },
    loadTopics: function(e) {
        var t = this;
        return i(n.default.mark(function i() {
            var a, o, r, c, h;
            return n.default.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    return i.prev = 0, console.log("loadTopics show docId", t.docId), a = t.docId, o = t.mid, 
                    i.next = 6, s.api.get("v1/article.posts", {
                        docid: a,
                        mid: o
                    });

                  case 6:
                    return r = i.sent, c = (0, l.pretreatData)(r.data).events, t.setData({
                        hasMoreTopics: r.data.hasMore
                    }), i.next = 11, v.eventAPI.setEventEntities(c);

                  case 11:
                    h = i.sent, t.updateWarehouseRefs({
                        topicIds: h
                    }), e && t.scrollEvent(), i.next = 19;
                    break;

                  case 16:
                    i.prev = 16, i.t0 = i.catch(0), (0, d.errorReporter)("load article topics failed", i.t0);

                  case 19:
                  case "end":
                    return i.stop();
                }
            }, i, t, [ [ 0, 16 ] ]);
        }))();
    },
    websocket: function() {
        return this._websocket || (this._websocket = c.default.createWebSocket(), this._websocket.setEnabled(k.config.enableDiscuss)), 
        this._websocket;
    },
    initConversation: function(e) {
        var t = e.discuss;
        t && (console.log("initConversation force"), this.startDiscuss = "true" === t), 
        null != this.startDiscuss ? this.websocket().setEnabled(this.startDiscuss) : (console.log("initConversation null"), 
        this.websocket().setEnabled(k.config.enableDiscuss));
    },
    checkConversation: function() {
        this.websocket().checkAlive(), this.websocket().sendMessage({
            docid: this.docId,
            refferid: this.refferId,
            token: getApp().getUserToken(),
            type: "enter",
            timestamp: new Date().getTime()
        });
    },
    startConversation: function() {
        var e = this;
        this.websocket().onSocketOpen(function() {
            console.log("WebSocket 已打开, send a enter message"), e.websocket().sendMessage({
                docid: e.docId,
                refferid: e.refferId,
                token: getApp().getUserToken(),
                type: "enter",
                timestamp: new Date().getTime()
            });
        }), this.websocket().subscribe(function(e) {
            void 0 !== e.data && T.default.dispatchMessages(e.data, x.getContextPage());
        });
    },
    leaveConversation: function() {
        this.websocket().sendMessage({
            docid: this.docId,
            refferid: this.refferId,
            token: getApp().getUserToken(),
            type: "leave",
            timestamp: new Date().getTime()
        }), wx.hideNavigationBarLoading();
    },
    closeConversation: function() {
        this.leaveConversation(), this.websocket().unsubscribe(), null != this.startDiscuss && this.websocket().setEnabled(k.config.enableDiscuss);
    },
    onReachBottom: function() {
        var e = this, t = this;
        this.article && (this.reachArticleBottom || (this.reachArticleBottom = !0, this.log("finished_item", {
            item: this.docId,
            item_type: "article",
            magazine_id: this.mid
        }), this.data.magazine.needRelatedMagazine ? r.default.getArticleRelated(this.docId, this.mid, {
            success: function(e) {
                if (e) {
                    var i = {}, n = [], a = [], o = !0, s = !1, r = void 0;
                    try {
                        for (var c, l = e[Symbol.iterator](); !(o = (c = l.next()).done); o = !0) {
                            var d = c.value;
                            "article" === d.type ? n.push(d) : "section" === d.type && (a = d.section.events).map(function(e) {
                                var t = e.section.events[0].magazine;
                                i[t.id] = "subscribed" === t.status;
                            });
                        }
                    } catch (e) {
                        s = !0, r = e;
                    } finally {
                        try {
                            !o && l.return && l.return();
                        } finally {
                            if (s) throw r;
                        }
                    }
                    t.setData({
                        relatedArticles: n,
                        relatedMagazines: a,
                        subscribed: i
                    });
                }
            },
            fail: function() {
                console.log("article has not related");
            },
            complete: function() {
                e.setData({
                    relatedLoaded: !0
                });
            }
        }) : this.setData({
            relatedLoaded: !0
        })));
    },
    onShared: function() {
        this.websocket().sendMessage({
            docid: this.docId,
            token: getApp().getUserToken(),
            type: "join",
            timestamp: new Date().getTime()
        });
    },
    updateShare: function(e) {
        if (!e) {
            var t = {
                type: "article",
                shareId: this.docId,
                content: this.article.snippet ? this.article.snippet : ""
            };
            this.setData({
                shareMeta: t
            });
        }
    },
    shareOptions: function() {
        if (console.log("onShareAppMessage start"), r.default.articleShare({
            id: this.docId,
            mid: this.mid,
            token: getApp().getUserToken()
        }), this.myNoteList = [], this.raml.notes) for (var e = 0; e < this.raml.notes.length; e++) {
            var t = this.raml.notes[e];
            t.myself && this.myNoteList.push(t);
        }
        var i = {
            id: this.docId,
            docId: this.docId,
            type: "article"
        };
        return this.mid && (i.mid = this.mid), this.markId && (i.markId = this.markId), 
        b({}, k.config.shareOptionsMap.article, i, this.shareConfig);
    },
    showScoreGrowth: function() {
        this.article.magazineName && this.showToast(this.article.magazineName + " +1");
    },
    onLongTapImage: function(e) {
        var t = this;
        return i(n.default.mark(function i() {
            var a, o, s;
            return n.default.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    return console.log("long press image", e), a = e.currentTarget.dataset.paragraphId, 
                    o = e.currentTarget.offsetTop - e.touches[0].pageY + e.touches[0].clientY - 60, 
                    s = t, t.changeImageNote(a, function() {
                        s.raml.startHighlightImage(s, a, o);
                    }), i.next = 7, t.scan(e);

                  case 7:
                  case "end":
                    return i.stop();
                }
            }, i, t);
        }))();
    },
    onTapImageMark: function(e) {
        var t = e.currentTarget.dataset.paragraphId;
        this.changeImageNote(t);
    },
    changeImageNote: function(e, t) {
        var i = this.raml.getParagraphById(e);
        if (i) {
            var n = this, a = this.raml.getMyNoteInParagraph(i);
            if (a) {
                var o = a.nid;
                r.default.deleteNote(this.docId, o, this.mid, {
                    success: function() {
                        n.detachNote(o), n.sendUnnoteMessage(o), n.log("unmarked_image", {
                            item: n.docId
                        });
                    },
                    fail: function() {
                        console.log("Delete mark failed");
                    },
                    docid: this.docId,
                    refferid: this.refferId
                });
            } else {
                var s = this.raml.getImageNoteContent(i);
                r.default.createNote(this.docId, this.mid, "highlight", null, s, {
                    success: function(e) {
                        n.attachNote(e), n.sendNoteMessage(e.nid), t && t(e), n.showScoreGrowth(), n.updateShare(e), 
                        n.log("marked_image", {
                            item: n.docId
                        });
                    },
                    fail: function() {
                        console.log("mark image failed");
                    },
                    refferid: this.refferId
                });
            }
        }
    },
    changeNote: function(e) {
        if (this.raml.isOnHighlight()) {
            var t = this, i = this.raml.finishOnHighlight();
            if (this.raml.isStatusEdit()) {
                var n = this.raml.getOnHighlightNote();
                this.raml.cancelHighlight(this), e && e(n), this.updateShare(n);
            } else this.onPendingHighlight(), r.default.createNote(this.docId, this.mid, "highlight", null, i, {
                success: function(i) {
                    t.attachNote(i), t.raml.convertToEditHighlight(t, i.nid), e && e(i), t.showScoreGrowth(), 
                    t.updateShare(i), t.log("marked_selection", {
                        item: t.docId
                    });
                },
                fail: function() {
                    t.raml.cancelHighlight(t), wx.showToast({
                        image: "/images/new_assets/icon_cancel.svg",
                        title: "马克失败"
                    });
                },
                refferid: this.refferId
            });
        } else this.raml.cancelHighlight(this);
    },
    attachNote: function(e) {
        this.raml.addNote(this, e);
    },
    detachNote: function(e) {
        this.raml.removeNote(this, e);
    },
    attachAllNotes: function(e) {
        for (var t = 0; t < e.length; t++) this.buildNoteProgress(e[t]);
        void 0 !== this.raml.content && (this.raml.setNotes(this, e), console.log("notes loaded: ", e), 
        console.log("highlights: ", this.raml.highlights), console.log("content: ", this.raml.content), 
        this.setData({
            article: this.article,
            docid: this.docId
        }));
    },
    gotoGallery: function(e) {
        if (console.log(e), !this.raml.isOnHighlight()) {
            var t = e.currentTarget.dataset.url;
            null == this.images && (this.images = this.raml.getAllImages()), wx.previewImage({
                current: t,
                urls: this.images
            });
        }
    },
    onTouchArticle: function(e) {
        console.log("Touch article: ", e);
        var t = e.target.dataset;
        void 0 !== t && void 0 !== t.paragraphId && this.websocket().sendMessage({
            docid: this.docId,
            refferid: this.refferId,
            token: getApp().getUserToken(),
            type: "progress",
            paragraphid: t.paragraphId,
            timestamp: new Date().getTime()
        });
    },
    onTouchEnd: function(e) {
        console.log("Touch end: ", e), this.raml.isStatusCreate() && (this.onTapFinishHighlight(e), 
        this.selectionStarted = null, this.selectionOffset = 0), this.onTouchArticle(e);
    },
    onTouchStart: function(e) {
        console.log("Touch start: ", e), this.raml.isStatusEdit() && this.onTapCancelHighlight(e), 
        this.onTouchArticle(e);
    },
    onTapInputDialogMask: function() {
        console.log("tap mask"), this.raml.cancelHighlight(this);
    },
    onTapInputDialog: function() {
        console.log("tap dialog");
    },
    onTapInputDialogCancel: function() {
        console.log("tap cancel"), this.raml.cancelHighlight(this);
    },
    onTapInputDialogFinish: function() {
        console.log("tap finish"), this.submitAnnotation(this.raml.onHighlight.inputContent);
    },
    onInputDialogInput: function(e) {
        this.raml.onHighlight.inputContent = e.detail.value;
    },
    onInputDialogConfirm: function(e) {
        this.raml.onHighlight.inputContent = e.detail.value, this.submitAnnotation(this.raml.onHighlight.inputContent);
    },
    onTapParagraph: function(e) {
        console.log("tap paragraph: ", e);
        var t = e.target.dataset.sentence, i = e.target.dataset.word;
        if (t && i) if (i.class.indexOf("link") >= 0) {
            for (var n = 0; n < i.markups.length; n++) if ("a" === i.markups[n].tag) {
                var a = i.markups[n].source;
                this.doCopyLink(a);
                break;
            }
        } else if (!this.raml.isOnHighlight()) {
            var o = this.getSentenceTop(e);
            this.raml.startEditHighlight(this, t.paragraphId, i, o);
        }
    },
    onLongTapParagraph: function(e) {
        console.log("long tap paragraph: ", e);
        var t = e.target.dataset.sentence, i = e.target.dataset.word;
        if (t && i && !this.checkPending()) {
            this.raml.isOnHighlight() && this.raml.cancelHighlight(this);
            var n = this.getSentenceTop(e);
            this.raml.startHighlightText(this, t, i, n), this.selectionStarted = e.touches[0].clientY, 
            this.selectionOffset = 0;
        }
    },
    onSelectedParagraph: function(e) {
        if (null !== this.selectionStarted && this.raml.isOnHighlight()) {
            var t = parseInt((e.touches[0].clientY - this.selectionStarted) / 20);
            console.log("selection is " + t), this.selectionOffset !== t && (this.selectionOffset = t, 
            this.raml.continueHighlightText(this, t));
        }
    },
    onSelecting: function(e) {
        var t = this;
        console.log("on selecting start", e);
        var i = e.target.dataset.sentence, n = e.target.dataset.word;
        if (i && n && !this.checkPending()) {
            this.raml.isOnHighlight() && this.raml.cancelHighlight(this);
            var a = this.getSentenceTop(e);
            this.onSelectingCancel(e), this.selectingHandle = setInterval(function() {
                t.selectingHandle && (console.log("on selecting done", e), clearInterval(t.selectingHandle), 
                t.selectingHandle = null, t.raml.startHighlightText(t, i, n, a), t.selectionStarted = e.touches[0].clientY, 
                t.selectionOffset = 0);
            }, 500);
        }
    },
    onSelectingCancel: function(e) {
        this.selectingHandle && (console.log("on selecting replace", e), clearInterval(this.selectingHandle));
    },
    onPageScroll: function(e) {
        var t = this;
        return i(n.default.mark(function i() {
            var a;
            return n.default.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    t.selectingHandle && (console.log("on selecting cancel", e), clearInterval(t.selectingHandle), 
                    t.selectingHandle = null), t.logData.articleStart || (t.logData.articleStart = !0, 
                    t.log("started_item", {
                        item: t.docId,
                        item_type: "article",
                        magazine_id: t.mid
                    })), (a = e.scrollTop > 1e3) && (t.data.nuxOnboard || t.data.nuxMark || t.setData({
                        nuxMark: !0
                    }));

                  case 4:
                  case "end":
                    return i.stop();
                }
            }, i, t);
        }))();
    },
    tryToOnboard: function() {
        return !1;
    },
    onboardSubscribe: function(e) {
        var t = this;
        return i(n.default.mark(function i() {
            return n.default.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    return i.next = 2, t.login(e);

                  case 2:
                    return i.next = 4, t.onTapSubscribe(e);

                  case 4:
                    wx.setStorageSync("onboarded", !0), t.redirectToTarget("/pages/magazine/magazine?id=" + t.mid);

                  case 6:
                  case "end":
                    return i.stop();
                }
            }, i, t);
        }))();
    },
    onboardFollow: function(e) {
        var t = this;
        return i(n.default.mark(function i() {
            return n.default.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    return i.next = 2, t.login(e);

                  case 2:
                    return i.next = 4, t.follow(e);

                  case 4:
                    wx.setStorageSync("onboarded", !0), t.redirectToTarget();

                  case 6:
                  case "end":
                    return i.stop();
                }
            }, i, t);
        }))();
    },
    checkPending: function() {
        return !!this.raml.isStatusPending() && (wx.showToast({
            icon: "loading",
            title: "稍等一会"
        }), !0);
    },
    getSentenceTop: function(e) {
        return e.touches[0].clientY - 100;
    },
    onTapFinishHighlight: function() {
        var e = this;
        this.changeNote(function(t) {
            e.sendNoteMessage(t.nid);
        });
    },
    onTapShareHighlight: function(e) {
        if (console.log("on tap share image"), !this.checkPending()) {
            var t = this.raml.getOnHighlightNote();
            console.log(t), this.onTapCancelHighlight(e);
            var i = Object.assign(e);
            i.currentTarget.dataset.shareData.id = "n" + t.nid + "_" + t.content[0].id, this.showShareCard(i);
        }
    },
    onTapAnnotationHighlight: function(e) {
        var t = this;
        if (console.log("on tap annotation"), !this.checkPending()) {
            var i = this.raml.getOnHighlightNote();
            i && i.myself ? (this.raml.startAnnotationNote(i), this.setData({
                onHighlight: this.raml.onHighlight
            }), this.showInputDialog("添加笔记", "保存", "取消", function(i) {
                i ? t.submitAnnotation(i) : t.onTapCancelHighlight(e);
            })) : this.onTapCancelHighlight(e);
        }
    },
    onTapDeleteHighlight: function() {
        if (this.raml.isStatusEdit()) {
            var e = this, t = this.raml.onHighlight.nid, i = this.raml.findNote(t);
            e.onPendingHighlight(), r.default.deleteNote(this.docId, t, this.mid, {
                success: function() {
                    e.raml.resetOnHighlight(), e.setData({
                        onHighlight: e.raml.onHighlight
                    }), e.detachNote(t), e.sendUnnoteMessage(t), i && i.annotation ? e.log("removed_note", {
                        item: e.docId
                    }) : i && i.isImage ? e.log("unmarked_image", {
                        item: e.docId
                    }) : e.log("unmarked_selection", {
                        item: e.docId
                    });
                },
                fail: function() {
                    console.log("Delete mark failed");
                },
                complete: function() {
                    e.raml.cancelHighlight(e);
                },
                docid: this.docId,
                refferid: this.refferId
            });
        } else this.raml.cancelHighlight(this);
    },
    onTapCancelHighlight: function() {
        this.raml.cancelHighlight(this);
    },
    onPendingHighlight: function() {
        this.raml.pendingOnHighlight(), this.setData({
            onHighlight: this.raml.onHighlight
        });
    },
    triggerConversationList: function() {
        this.conversationOptions.expand = !this.conversationOptions.expand, this.setData({
            conversationOptions: this.conversationOptions
        });
    },
    writeConversation: function(e) {
        var t = this;
        this.raml.startTalk(), this.setData({
            onHighlight: this.raml.onHighlight
        }), this.websocket().sendMessage({
            docid: this.docId,
            refferid: this.refferId,
            token: getApp().getUserToken(),
            type: "typing",
            timestamp: new Date().getTime()
        }), this.showInputDialog("我想说", "发送", "取消", function(i) {
            i ? t.submitAnnotation(i) : t.onTapCancelHighlight(e);
        });
    },
    submitAnnotation: function(e) {
        if (e) {
            var t = this;
            if (this.raml.isStatusTalk()) this.websocket().sendMessage({
                docid: this.docId,
                token: getApp().getUserToken(),
                type: "talk",
                message: e,
                timestamp: new Date().getTime()
            }), this.raml.resetOnHighlight(), this.triggerConversationList(), this.setData({
                onHighlight: t.raml.onHighlight,
                conversation: this.conversation
            }), this.log("sent_chat", {
                item: this.docId
            }); else if (this.raml.isStatusAnnotation()) {
                var i = this.raml.findNote(this.raml.onHighlight.nid);
                if (null == i) return;
                r.default.updateNote(this.docId, i.nid, this.mid, e, {
                    success: function() {
                        var n = i;
                        n.annotation = e, t.conversationOptions.enable || t.attachNote(n), t.raml.resetOnHighlight(), 
                        t.setData({
                            onHighlight: t.raml.onHighlight
                        }), console.log("write annotation note", n), t.sendNoteMessage(n.nid), t.log("annotated_item", {
                            item: t.docId
                        });
                    },
                    fail: function() {
                        wx.showToast({
                            image: "/images/new_assets/icon_cancel.svg",
                            title: "写笔记失败"
                        });
                    },
                    docid: this.docId,
                    refferid: this.refferId
                });
            }
        } else wx.showToast({
            image: "/images/new_assets/icon_cancel.svg",
            title: "请输入内容",
            duration: 500
        });
    },
    onTapConversationExit: function() {
        this.leaveConversation();
    },
    sendNoteMessage: function(e) {
        console.log("Send live message, " + e), this.websocket().sendMessage({
            docid: this.docId,
            token: getApp().getUserToken(),
            type: "note",
            nid: e,
            timestamp: new Date().getTime()
        });
    },
    sendUnnoteMessage: function(e) {
        this.websocket().sendMessage({
            docid: this.docId,
            token: getApp().getUserToken(),
            type: "unnote",
            nid: e,
            timestamp: new Date().getTime()
        });
    },
    reload: function() {
        var e = "/pages/article/article?id=" + this.docId;
        this.mid && (e += "&mid=" + this.mid), this.pid && (e += "&pid=" + this.pid), this.refferId && (e += "&uid=" + this.refferId), 
        wx.redirectTo({
            url: e
        });
    },
    switchToLogin: function(e) {
        var t = this;
        return i(n.default.mark(function i() {
            return n.default.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    return i.next = 2, t.login(e);

                  case 2:
                    if (!i.sent) {
                        i.next = 4;
                        break;
                    }
                    t.reload();

                  case 4:
                  case "end":
                    return i.stop();
                }
            }, i, t);
        }))();
    },
    switchToMagazine: function() {
        try {
            wx.setStorageSync("magazineMode", !0), this.setData({
                preview: !1
            }), this.log("opened_native_mode", {
                item: this.docId
            });
        } catch (e) {}
    },
    switchToPrimaryMark: function(e) {
        console.log("tap primary mark", e), this.data.primaryMark && this.switchToParagraph(this.data.primaryMark.pid);
    },
    switchToParagraph: function(e) {
        e && wx.createSelectorQuery().select("#qm" + e).boundingClientRect(function(e) {
            if (e) {
                var t = e.top;
                wx.pageScrollTo({
                    scrollTop: t
                });
            }
        }).exec();
    },
    scrollToId: function(e) {
        var t = getApp().globalData.sysInfo.windowWidth - 72, i = e.detail.x - 36, n = Math.round(i / t * this.contentSize);
        n < 0 ? (n = 0, wx.pageScrollTo({
            scrollTop: 0
        })) : n > this.contentSize ? (n = this.contentSize - 1, this.switchToParagraph("_end")) : this.switchToParagraph(this.raml.content[n].id), 
        this.websocket().sendMessage({
            docid: this.docId,
            refferid: this.refferId,
            token: getApp().getUserToken(),
            type: "progress",
            paragraphid: this.raml.content[n].id,
            timestamp: new Date().getTime()
        });
    },
    buildNoteProgress: function(e) {
        if ("highlight" === e.noteType) {
            var t = e.content[0].id, i = this.positionLookUp[t], n = getApp().globalData.sysInfo.windowWidth - 72;
            e.progressLeft = 35 + n * (i + 1) / this.contentSize;
        }
    },
    closeShareTips: function() {
        this.setData({
            shareTips: !1
        });
    },
    onTapBonus: function() {
        console.log("tap bonus");
        var e = this;
        wx.navigateTo({
            url: "/pages/bonus/bonus?entity=a" + e.docId + "@@" + k.config.wxAppid
        });
    },
    gotoOriginLink: function() {
        this.doCopyLink(this.article.webUrl);
    },
    copyLink: function(e) {
        for (var t = e.target.dataset.word, i = "", n = 0; n < t.markups.length; n++) if ("a" === t.markups[n].tag) {
            i = t.markups[n].source;
            break;
        }
        this.doCopyLink(i);
    },
    onTapGotoScan: function(e) {
        var t = e.currentTarget.dataset, i = t.target, n = t.imageid;
        this.doCopyLink(i), w.logger.logAction("scanned_image", {
            item: n
        }), this.onTapDeleteHighlight(e);
    },
    doCopyLink: function(e) {
        this.gotoLink(e), e && this.log("copyed_link");
    },
    onTapCopyText: function() {
        for (var e = this.raml.onHighlight.paragraphId, t = this.positionLookUp[e], i = this.raml.content[t].text, n = "", a = 0; a < i.sentences.length; a++) n += i.sentences[a].text;
        var o = this;
        wx.setClipboardData({
            data: n,
            success: function() {
                wx.getClipboardData({
                    success: function(e) {
                        console.log(e.data);
                    }
                }), wx.showToast({
                    title: "文字已复制",
                    icon: "success",
                    image: "/images/toast-success.png",
                    duration: 500
                }), o.log("copyed_selection");
            }
        });
    },
    paid: function() {
        this.reload();
    },
    buyArticle: function(e) {
        var t = this;
        return i(n.default.mark(function i() {
            return n.default.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    if (!t.data.needLogin) {
                        i.next = 3;
                        break;
                    }
                    return i.next = 3, t.login(e);

                  case 3:
                    if (!getApp().isAnonymous()) {
                        i.next = 6;
                        break;
                    }
                    return t.showModalDialog(void 0, "需要授权", "需要先完成授权才能购买", "知道了"), i.abrupt("return");

                  case 6:
                    t.paidTicket = getApp().transfer().put({
                        productType: "1",
                        productRefer: "2"
                    }), wx.navigateTo({
                        url: "/pages/product/order?docid=" + t.docId + "&mid=" + (t.mid ? t.mid : "") + "&callback=" + t.paidTicket
                    });

                  case 8:
                  case "end":
                    return i.stop();
                }
            }, i, t);
        }))();
    },
    showForDevArticleId: function() {
        var e = this.data.article.docIdString + "";
        console.log(e), wx.showModal({
            title: e,
            confirmText: "复制",
            success: function(t) {
                t.confirm && wx.setClipboardData({
                    data: e
                });
            }
        });
    }
}, C = {
    warehouseRefs: {
        topicIds: []
    },
    mapWarehouseToData: function(e, t) {
        var i = t.topicIds;
        return {
            topics: (0, v.eventEntitiesSelector)(i)(e)
        };
    }
};

Page(h.default.apply(void 0, [ y, S, H, C ].concat(function(e) {
    if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i;
    }
    return Array.from(e);
}(p.allMixins))));