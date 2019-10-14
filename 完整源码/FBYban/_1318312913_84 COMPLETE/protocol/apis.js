function e(e) {
    for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n.docId = n.docIdString, n.id = n.docIdString, n.publishDate ? n.date = g.formatTime(n.publishDate) : n.date = g.formatTime(n.docDate), 
        n.appChannels && n.appChannels.length > 0 && (n.tag = n.appChannels[0].title), g.thumbObjectImage(n);
    }
}

function t(e) {
    var t = "", n = 0;
    if (e.cover && e.cover.length > 0) {
        var i = e.cover[0];
        t = i.url, n = i.width;
    }
    var o = [];
    if (e.tag && e.tag.length > 0) for (var a = 0; a < e.tag.length; a++) {
        var s = e.tag[a];
        o.push({
            id: s.tag_id,
            name: s.tag_name
        });
    }
    var c = [];
    if (e.image && e.image.length > 0) for (var r = 0; r < e.image.length; r++) {
        var l = e.image[r];
        c.push(l);
    }
    var u = [];
    if (e.video && e.video.length > 0) for (var p = 0; p < e.video.length; p++) {
        var f = e.video[p];
        f.cover && f.cover.url && (f.cover = f.cover.url), u.push(f);
    }
    var d = {
        id: e.id_string,
        idString: e.id_string,
        templateType: e.template_type,
        title: e.title,
        snippet: e.snippet,
        timestamp: e.datePublished,
        date: g.formatTime(e.datePublished),
        cover: t,
        coverWidth: n,
        images: c,
        videos: u,
        tags: o
    };
    return e.provider && (d.packageName = e.provider.detail.app_detail.package_name, 
    d.appName = e.provider.title, d.appIcon = e.provider.icon), d;
}

function n(e) {
    var n = [];
    if (!e) return n;
    for (var i = 0; i < e.length; i++) {
        var o = e[i];
        if ("APP" === o.content_type) {
            var a = o.sub_entity;
            if (!a) continue;
            for (var s = 0; s < a.length; s++) {
                var c = t(a[s]);
                c.packageName = o.detail.app_detail.package_name, c.appName = o.title, c.appIcon = o.icon;
            }
            n.push(c);
        } else "FEED" === o.content_type && n.push(t(o));
    }
    return n;
}

function i(e) {
    if (!e) return [];
    for (var t = [], n = 0; n < e.length; n++) {
        var i = e[n];
        i.isEditor = !1, i.isOfficial = !1, i.id = o(i.interestId, i.interestName), "official" === i.type ? i.isOfficial = !0 : "editor" === i.type && (i.isEditor = !0), 
        i.cover = g.genThumbUrl(i.cover, 240), i.subscribed = i.relation.isSubscriber, t.push(i);
    }
    return t;
}

function o(e, t) {
    return 0 === e ? "#@!" + t : e;
}

function a(e) {
    var t = {};
    return e.length > 3 && "#@!" === e.substr(0, 3) ? t.magazineName = e.substr(3) : t.magazineId = e, 
    t;
}

function s(e, t) {
    var n, i = {
        token: t.token
    };
    t.providers && (i.providers = t.providers.join(","), n = v + (e ? "/api/v1/subscribe/subproviders.json" : "/api/v1/subscribe/unsubproviders.json")), 
    t.packageName && (i.packageName = t.packageName.join(","), n = v + (e ? "/api/v1/subscribe/sub.json" : "/api/v1/subscribe/unsub.json")), 
    wx.request({
        url: n,
        data: i,
        success: function(e) {
            console.log(e), t.success && t.success(e);
        },
        fail: function() {
            t.fail && t.fail();
        },
        complete: function() {
            t.complete && t.complete();
        }
    });
}

function c(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    e.content && (e.content = f.extractHighlight(e.content)), e.highlights && (e.content = f.rebuildHighlights(e.highlights, e.isImage)), 
    e.user || (e.user = {}), e.date = g.formatTime(e.updatedTimestamp, t), e.highlights = [], 
    e.similarCount || (e.similarCount = 1);
    var n = getApp().getUserId();
    if (e.myself = n === e.uid, e.comments) for (var i = 0; i < e.comments.length; i++) {
        var o = e.comments[i];
        if ("like" === o.commentType && o.user && o.user.uid === n) {
            e.iLike = !0;
            break;
        }
    }
}

function r(e, t) {
    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    e.note && c(e.note, n);
    var i = [];
    if (e.notification.content) for (var o = 0; o < e.notification.content.length; o++) t.parseContent(e.notification.content[o]), 
    i = i.concat(t.content);
    for (var a = l(e.notification.contentAction), s = 0; s < i.length; s++) if (i[s] && i[s].text && i[s].text.sentences) {
        i[s].text.class = "event-card";
        for (var r = i[s].text.sentences, u = 0; u < r.length; u++) r[u].action = a;
    }
    e.notification.content = i, e.notification.contentAction = a, e.date = g.formatTime(e.timestamp, n);
}

function l(e) {
    if (null == e) return e;
    var t = e.search("://"), n = e.substr(0, t), i = e.substr(t + 3).split("/");
    return "qingmang" === n && "magazine" === i[0] ? "/pages/magazine/magazine?id=" + i[1] : e;
}

function u(e, t, n, i, o, a) {
    var s = {
        docid: e,
        token: getApp().getUserToken(),
        type: n,
        annotation_type: "text"
    };
    t && (s.mid = t), i && (s.annotation = i), o && (s.content = o), p.post(m + "/v1/note.highlight.create", s, function(e) {
        console.log(e);
        var t = e.data.events;
        if (t && t.length > 0) {
            var n = t[0].notes[0];
            c(n), void 0 !== a.success && a.success(n);
        } else void 0 !== a.fail && a.fail();
    }, function() {
        console.log("Create note fail, " + e), void 0 !== a.fail && a.fail();
    }, function() {
        void 0 !== a.complete && a.complete();
    });
}

var p = require("../utils/ajax.js"), g = require("../utils/util.js"), f = require("../utils/raml.js"), d = require("pages.js"), v = "https://ripple.qingmang.me", m = "https://api.qingmang.me/ng";

module.exports = {
    updateMagazineArticles: e,
    convertMagazine: i,
    getListForTimeline: function(t, n) {
        var i = {
            token: getApp().getUserToken()
        };
        return d.createPageList({
            url: "https://api.qingmang.me/v1/profile.feeds",
            parameters: i,
            process: function(e) {
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t.toString = function() {
                    return e.toString();
                }, t;
            }(function(n) {
                console.log(n);
                for (var i = n.events, o = [], a = 0; a < i.length; a++) {
                    var s = i[a];
                    s.article && o.push(s.article);
                }
                return e(o), null != t ? t(o) : o;
            }),
            callback: n
        });
    },
    getMagazineInfo: function(e) {
        var t = {
            interest_id: e.magazineId,
            with_articles: !1
        }, n = getApp().getUserToken();
        n && (t.token = n), console.log("Token is " + n), wx.request({
            url: v + "/v1/magazine.query",
            data: t,
            success: function(t) {
                console.log(t);
                var n = i([ t.data.interest ]);
                void 0 !== e.success && e.success(n[0]);
            },
            fail: function() {
                void 0 !== e.fail && e.fail();
            },
            complete: function() {
                void 0 !== e.complete && e.complete();
            }
        });
    },
    createMagazine: function(e) {
        var t = {
            token: getApp().getUserToken(),
            title: e.title
        };
        e.gid && (t.gid = e.gid), wx.request({
            url: m + "/v1/magazine.create",
            data: t,
            success: function(t) {
                t.data && t.data.interests && t.data.interests.length > 0 ? (t.data.interests = i(t.data.interests), 
                e.success && e.success(t.data)) : e.fail();
            },
            fail: function() {
                e.fail && e.fail();
            },
            complete: function() {
                e.complete && e.complete();
            }
        });
    },
    updateMagazine: function(e) {
        var t = {
            token: getApp().getUserToken(),
            name: e.name
        };
        e.gid && (t.gid = e.gid), e.title && (t.title = e.title), console.log("#update magazine with groupid", e.gid), 
        wx.request({
            url: m + "/v1/magazine.update",
            data: t,
            success: function(t) {
                console.log(t), t.data.interests = i(t.data.interests), e.success && e.success(t);
            },
            fail: function() {
                e.fail && e.fail();
            },
            complete: function() {
                e.complete && e.complete();
            }
        });
    },
    addMagazineProviders: function(e) {
        s(!0, e);
    },
    delMagazineProviders: function(e) {
        s(!1, e);
    },
    updateMagazineProviders: s,
    listMagazineProviders: function(e) {
        var t = {
            token: e.token ? e.token : getApp().getUserToken(),
            pn: e.pn
        }, n = v + "/api/v2/apps/detail.json";
        wx.request({
            url: n,
            data: t,
            success: function(t) {
                console.log(t), e.success && e.success(t);
            },
            fail: function() {
                e.fail && e.fail();
            },
            complete: function() {
                e.complete && e.complete();
            }
        });
    },
    listMagazineCategories: function(e) {
        var t = {}, n = getApp().getUserToken();
        n && (t.token = n), console.log("Token is" + n), wx.request({
            url: m + "/v1/magazine.list",
            data: t,
            success: function(t) {
                console.log(t);
                for (var n = t.data.categories, o = 0; o < n.length; o++) {
                    var a = n[o];
                    a.interests = i(a.interests);
                }
                void 0 !== e.success && e.success(n);
            },
            fail: function() {
                void 0 !== e.fail && e.fail();
            },
            complete: function() {
                void 0 !== e.complete && e.complete();
            }
        });
    },
    subscribeMagazine: function(e) {
        var t = {
            token: getApp().getUserToken()
        }, n = e.data, i = a(n.magazineId);
        i.magazineId ? t.interest_ids = i.magazineId : t.interest_names = i.magazineName, 
        n.groupId && (t.gid = n.groupId), wx.request({
            url: v + "/v1/magazine.subscribe",
            data: t,
            success: function(t) {
                console.log(t), t.data && t.data.ok ? void 0 !== e.success && e.success() : void 0 !== e.fail && e.fail();
            },
            fail: function() {
                void 0 !== e.fail && e.fail();
            },
            complete: function() {
                void 0 !== e.complete && e.complete();
            }
        });
    },
    unsubscribeMagazine: function(e) {
        var t = {
            token: getApp().getUserToken()
        }, n = a(e.data.magazineId);
        n.magazineId ? t.interest_ids = n.magazineId : t.interest_names = n.magazineName, 
        wx.request({
            url: v + "/v1/magazine.unsubscribe",
            data: t,
            success: function(t) {
                console.log(t), void 0 !== e.success && e.success();
            },
            fail: function() {
                void 0 !== e.fail && e.fail();
            },
            complete: function() {
                void 0 !== e.complete && e.complete();
            }
        });
    },
    listSubscribedMagazines: function(e) {
        var t = getApp().getUserToken();
        if (console.log("token is", t), null == t) return void 0 !== e.success && e.success([]), 
        void (void 0 !== e.complete && e.complete());
        wx.request({
            url: v + "/v1/magazine.subscribed.list",
            data: {
                token: t,
                need_default: !0,
                need_search: !0
            },
            success: function(n) {
                console.log("get subscribed apps", t, n);
                var o = i(n.data.interests);
                void 0 !== e.success && e.success(o);
            },
            fail: function() {
                void 0 !== e.fail && e.fail();
            },
            complete: function() {
                void 0 !== e.complete && e.complete();
            }
        });
    },
    getListForUpdateNotifications: function(e, t) {
        return d.createPageList({
            url: "https://api.qingmang.me/v1/notification.subscribedUpdates",
            parameters: {
                token: getApp().getUserToken()
            },
            process: function(e) {
                for (var t = e.events, n = f.createRAML(), i = 0; i < t.length; i++) r(t[i], n);
                return t;
            },
            callback: t
        });
    },
    readAllNotifications: function(e) {
        wx.request({
            url: "https://api.qingmang.me/v1/notification.readAll",
            data: {
                token: getApp().getUserToken()
            },
            success: function(t) {
                console.log(t), void 0 !== e.success && e.success();
            },
            fail: function() {
                void 0 !== e.fail && e.fail();
            },
            complete: function() {
                void 0 !== e.complete && e.complete();
            }
        });
    },
    parseEvent: r,
    getListForAppTimeline: function(e, t, i, o) {
        var a = {
            token: getApp().getUserToken()
        };
        return t ? a.providerId = t : a.pn = e, d.createPageList({
            url: "https://ripple.qingmang.me/api/v2/feed.json",
            parameters: a,
            process: function(e) {
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t.toString = function() {
                    return e.toString();
                }, t;
            }(function(e) {
                var t = n(e.entity);
                return null != i ? i(t) : t;
            }),
            callback: o
        });
    },
    getListForAppChannels: function(e, t, n) {
        return d.createPageList({
            url: "https://ripple.qingmang.me/api/v2/apps/detailNux.json",
            parameters: {
                pn: e,
                token: getApp().getUserToken()
            },
            process: function(e) {
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t.toString = function() {
                    return e.toString();
                }, t;
            }(function(e) {
                var n = e.entity;
                return n && n.length > 0 ? t ? t(n[0].channel) : void 0 : null;
            }),
            callback: n
        });
    },
    listAppChannels: function(e) {
        wx.request({
            url: "https://ripple.qingmang.me/api/v2/apps/detailNux.json",
            data: {
                pn: e.appId,
                token: getApp().getUserToken()
            },
            success: function(t) {
                console.log(t);
                var n = t.data.entity;
                n && n.length > 0 ? void 0 !== e.success && e.success(t.data.entity[0]) : void 0 !== e.fail && e.fail();
            },
            fail: function() {
                void 0 !== e.fail && e.fail();
            },
            complete: function() {
                void 0 !== e.complete && e.complete();
            }
        });
    },
    getProfileInfo: function(e) {
        var t = {
            token: getApp().getUserToken()
        };
        e.uid && (t.uid = e.uid), wx.request({
            url: "https://api.qingmang.me/v1/profile.info",
            data: t,
            success: function(t) {
                console.log(t), void 0 !== e.success && e.success(t.data.profile);
            },
            fail: function() {
                void 0 !== e.fail && e.fail();
            },
            complete: function() {
                void 0 !== e.complete && e.complete();
            }
        });
    },
    getProfileArticles: function(e) {
        var t = {
            note_types: e.noteTypes,
            token: getApp().getUserToken()
        };
        return e.uid && (t.uid = e.uid), d.createPageList({
            url: "https://api.qingmang.me/v1/profile.articles",
            parameters: t,
            process: function(t) {
                for (var n = t.profile.articles, i = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    if (a) {
                        for (var s = 0; s < a.notes.length; s++) c(a.notes[s]);
                        i.push(a);
                    }
                }
                return "function" == typeof e.process && e.process(t), i;
            },
            callback: e.callback
        });
    },
    getArticleNotes: function(e) {
        return d.createPageList({
            url: m + "/v1/article.highlights",
            parameters: {
                docid: e.docid,
                appid: getApp().getConfig().wxAppid,
                token: getApp().getUserToken(),
                mid: e.mid
            },
            process: function(t) {
                var n = [], i = t.events;
                if (i && i.length > 0) {
                    n = i[0].notes;
                    var o = !0, a = !1, s = void 0;
                    try {
                        for (var r, l = n[Symbol.iterator](); !(o = (r = l.next()).done); o = !0) c(r.value);
                    } catch (e) {
                        a = !0, s = e;
                    } finally {
                        try {
                            !o && l.return && l.return();
                        } finally {
                            if (a) throw s;
                        }
                    }
                }
                return "function" == typeof e.process ? e.process(n) : n;
            },
            callback: e.callback
        });
    },
    getListForSearchResult: function(t, n, i) {
        var o = {
            token: getApp().getUserToken()
        }, s = a(t);
        return s.magazineName ? o.interest_name = s.magazineName : o.interest_id = s.magazineId, 
        d.createPageList({
            url: v + "/v1/magazine.query",
            parameters: o,
            process: function(e) {
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t.toString = function() {
                    return e.toString();
                }, t;
            }(function(t) {
                if (!t.interest) return [];
                var i = t.interest.articles, o = t.interest.issues;
                if (void 0 !== o) {
                    i = [];
                    for (var a = 0; a < o.length; a++) {
                        var s = o[a];
                        i = i.concat(s.articles);
                    }
                } else i || (i = []);
                e(i);
                for (var c = {}, r = [ "interestId", "interestName", "type", "groupId", "mockUid" ], l = 0; l < r.length; ++l) {
                    var u = r[l];
                    c[u] = t.interest[u];
                }
                for (var p = 0; p < i.length; ++p) i[p].interests = [ c ];
                return null != n ? n(i) : i;
            }),
            callback: i
        });
    },
    getListForSearchArticles: function(t) {
        return d.createPageList({
            url: "https://ripple.qingmang.me/v1/article.search",
            parameters: {
                token: getApp().getUserToken(),
                package_name: t.packageName,
                qtag: "lianpian:" + t.packageName,
                query: t.query
            },
            process: function(e) {
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t.toString = function() {
                    return e.toString();
                }, t;
            }(function(n) {
                var i = n.articles;
                return e(i), null != t.process ? process(t.articles) : i;
            }),
            callback: t.callback
        });
    },
    getListForSearchApps: function() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t = arguments[1], n = {
            query: t.query,
            withProviders: t.withProviders,
            appOnly: !0
        };
        return e && (n.token = getApp().getUserToken()), d.createPageList({
            url: v + "/api/v2/apps/search.json",
            parameters: n,
            process: function(e) {
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t.toString = function() {
                    return e.toString();
                }, t;
            }(function(e) {
                var n = [];
                if (e.entity) for (var i = 0; i < e.entity.length; ++i) "APP" === e.entity[i].content_type && n.push(e.entity[i]);
                return t.process ? process(n) : n;
            }),
            callback: t.callback
        });
    },
    addNoteComment: function(e, t) {
        e.token = getApp().getUserToken(), p.post("https://api.qingmang.me/v1/note.comment.add", e, function(e) {
            console.log(e), void 0 !== t.success && t.success(e.data.comment);
        }, function() {
            void 0 !== t.fail && t.fail();
        }, function() {
            void 0 !== t.complete && t.complete();
        });
    },
    createReadNote: function(e, t, n) {
        u(e, t, "read", null, null, n);
    },
    createFavoriteNote: function(e, t, n) {
        u(e, t, "favorite", null, null, n);
    },
    createArticleNote: function(e, t, n, i) {
        u(e, t, "article", n, null, i);
    },
    createImageNote: function(e, t, n, i, o) {
        var a = {
            nodecontent: g.toJson(i),
            start: 0,
            end: 0,
            id: i.id
        };
        u(e, t, "highlight", n, g.toJson([ a ]), o);
    },
    createNote: u,
    deleteNote: function(e, t, n, i) {
        var o = {
            docid: e,
            note_id: t,
            token: getApp().getUserToken()
        };
        n && (o.mid = n), wx.request({
            url: m + "/v1/note.highlight.delete",
            data: o,
            success: function(e) {
                console.log(e), void 0 !== i.success && i.success();
            },
            fail: function() {
                console.log("Delete note, " + t), void 0 !== i.fail && i.fail();
            },
            complete: function() {
                void 0 !== i.complete && i.complete();
            }
        });
    },
    updateNote: function(e, t, n, i, o) {
        var a = {
            docid: e,
            note_id: t,
            token: getApp().getUserToken(),
            annotation_type: "text"
        };
        n && (a.mid = n), i && (a.annotation = i), p.post(m + "/v1/note.highlight.update", a, function(e) {
            console.log(e);
            var t = e.data.events;
            if (t && t.length > 0) {
                var n = t[0].notes[0];
                c(n), void 0 !== o.success && o.success(n);
            } else void 0 !== o.fail && o.fail();
        }, function() {
            console.log("Create note fail, " + e), void 0 !== o.fail && o.fail();
        }, function() {
            void 0 !== o.complete && o.complete();
        });
    },
    buildMagazineId: o,
    getPaySettings: function(e) {
        wx.request({
            url: "https://api.qingmang.me/v1/pay.setting",
            data: {
                token: getApp().getUserToken(),
                entity_id: e.entityId
            },
            success: function(t) {
                e.success && e.success(t.data);
            },
            fail: function() {
                e.fail && e.fail();
            }
        });
    },
    doPayOrder: function(e, t) {
        wx.request({
            url: "https://api.qingmang.me/v1/pay.order",
            data: {
                entity_id: t.entityId,
                token: getApp().getUserToken(),
                fee: e
            },
            success: function(e) {
                t.success && t.success(e.data);
            },
            fail: function() {
                t.fail && t.fail();
            }
        });
    },
    getHottestArticles: function(e) {
        return d.createPageList({
            url: "https://api.qingmang.me/v1/recommend.passionately",
            parameters: {
                start: 0,
                max: 10
            },
            process: function(e) {
                for (var t = [], n = 0; n < e.events.length; n++) {
                    var i = e.events[n].article;
                    i.id = i.docIdString, i.covers && i.covers.length >= 1 && (i.cover = i.covers[0].url), 
                    t.push(i);
                }
                return t;
            },
            callback: e.callback
        });
    },
    articleShare: function(e) {
        wx.request({
            url: "https://api.qingmang.me/v1/article.share",
            data: {
                doc_id: e.id,
                product: "life",
                platform: "wx_mina",
                token: e.token,
                interest_id: e.interestId
            }
        });
    },
    getShareInfo: function(e) {
        wx.login({
            fail: function(t) {
                e.fail && e.fail(t);
            },
            success: function(t) {
                var n = t.code;
                wx.getShareInfo({
                    shareTicket: e.shareTicket,
                    fail: function(t) {
                        console.log("get share info fail", t), e.fail && e.fail(t);
                    },
                    success: function(t) {
                        console.log("get share info success", t);
                        var i = t.encryptedData, o = t.iv;
                        wx.request({
                            url: "https://api.qingmang.me/v1/account.infoByWx",
                            data: {
                                code: n,
                                encrypted_data: i,
                                iv: o,
                                app_name: getApp().getConfig().wxAppid
                            },
                            method: "GET",
                            success: function(t) {
                                console.log("parse share info success", t), e.success && e.success(t);
                            },
                            fail: function(t) {
                                console.log("parse share info fail", t), e.fail && e.fail(t);
                            }
                        });
                    }
                });
            }
        });
    },
    sendMinaRequest: function(e, t) {
        var n = {
            token: getApp().getUserToken(),
            email: e
        };
        wx.request({
            url: "https://api.qingmang.me/v1/mina.sendRequest",
            data: n,
            success: function(e) {
                console.log(e), void 0 !== t.success && t.success(e.data.profile);
            },
            fail: function() {
                void 0 !== t.fail && t.fail();
            },
            complete: function() {
                void 0 !== t.complete && t.complete();
            }
        });
    },
    getListForLives: function(e, t, n) {
        return d.createPageList({
            url: "https://api.qingmang.me/v1/mina.live.list",
            parameters: {
                token: getApp().getUserToken(),
                app_id: e
            },
            process: function(e) {
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t.toString = function() {
                    return e.toString();
                }, t;
            }(function(e) {
                var n = e.lives;
                return null != t ? t(n) : n;
            }),
            callback: n
        });
    },
    getLive: function(e, t, n) {
        wx.request({
            url: "https://api.qingmang.me/v1/mina.live.get",
            data: {
                token: getApp().getUserToken(),
                app_id: e,
                live_id: t
            },
            success: function(e) {
                console.log(e), void 0 !== n.success && n.success(e.data.live);
            },
            fail: function() {
                void 0 !== n.fail && n.fail();
            },
            complete: function() {
                void 0 !== n.complete && n.complete();
            }
        });
    },
    recentLive: function(e, t, n) {
        wx.request({
            url: "https://api.qingmang.me/v1/mina.live.recent",
            data: {
                token: getApp().getUserToken(),
                app_id: e,
                live_id: t
            },
            success: function(e) {
                console.log(e), void 0 !== n.success && n.success(e.data.live);
            },
            fail: function() {
                void 0 !== n.fail && n.fail();
            },
            complete: function() {
                void 0 !== n.complete && n.complete();
            }
        });
    },
    getVote: function(e, t, n) {
        var i = {
            token: getApp().getUserToken(),
            app_id: e,
            vote_id: t
        };
        n.gid && (i.gid = n.gid), n.uid && (i.uid = n.uid), wx.request({
            url: "https://api.qingmang.me/v1/mina.vote.get",
            data: i,
            success: function(e) {
                console.log(e), void 0 !== n.success && n.success(e.data.vote);
            },
            fail: function() {
                void 0 !== n.fail && n.fail();
            },
            complete: function() {
                void 0 !== n.complete && n.complete();
            }
        });
    },
    getAbout: function(e) {
        wx.request({
            url: "https://api.qingmang.me/v1/mina.about",
            data: {
                token: getApp().getUserToken()
            },
            success: function(t) {
                console.log(t), void 0 !== e.success && e.success(t.data.live);
            },
            fail: function() {
                void 0 !== e.fail && e.fail();
            },
            complete: function() {
                void 0 !== e.complete && e.complete();
            }
        });
    },
    submitVote: function(e, t, n, i) {
        var o = {
            token: getApp().getUserToken(),
            app_id: e,
            vote_id: t,
            answers: n
        };
        i.gid && (o.gid = i.gid), i.uid && (o.uid = i.uid), wx.request({
            url: "https://api.qingmang.me/v1/mina.vote.submit",
            data: o,
            success: function(e) {
                console.log(e), void 0 !== i.success && i.success(e.data.vote);
            },
            fail: function() {
                void 0 !== i.fail && i.fail();
            },
            complete: function() {
                void 0 !== i.complete && i.complete();
            }
        });
    },
    submitVoteRefer: function(e, t, n) {
        var i = {
            token: getApp().getUserToken(),
            app_id: e,
            vote_id: t
        };
        n.gid && (i.gid = n.gid), n.uid && (i.uid = n.uid), wx.request({
            url: "https://api.qingmang.me/v1/mina.vote.addRefer",
            data: i,
            success: function(e) {
                console.log(e), void 0 !== n.success && n.success(e.data.vote);
            },
            fail: function() {
                void 0 !== n.fail && n.fail();
            },
            complete: function() {
                void 0 !== n.complete && n.complete();
            }
        });
    },
    recentReadingHistory: function(e) {
        var t = {
            token: getApp().getUserToken(),
            end: 50
        }, n = m + "/v1/mina.reading.list";
        wx.request({
            url: n,
            data: t,
            success: function(t) {
                console.log(t), e.success && e.success(t.data.articles);
            },
            fail: function() {
                e.fail && e.fail();
            },
            complete: function() {
                e.complete && e.complete();
            }
        });
    },
    getArticleRelated: function(e, t, n) {
        var i = {
            token: getApp().getUserToken(),
            app_id: getApp().getConfig().wxAppid,
            docid: e,
            mid: t
        };
        wx.request({
            url: m + "/v1/article.related",
            data: i,
            success: function(e) {
                n.success && n.success(e.data.events);
            },
            fail: function() {
                n.fail && n.fail();
            },
            complete: function() {
                n.complete && n.complete();
            }
        });
    }
};