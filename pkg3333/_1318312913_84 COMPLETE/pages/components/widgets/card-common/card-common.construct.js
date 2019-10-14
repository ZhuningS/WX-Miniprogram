Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseEventDataToCardData = void 0;

var e = require("../../../../utils/dev"), t = require("../../../../utils/color"), i = require("../../../../protocol/logger"), o = require("./card-common.util"), r = require("./card-common.format"), a = require("./card-common.mock"), n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../utils/util")), d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
    }
    return e;
}, c = getApp(), p = c.getConfig(), s = c.getUserId(), l = e.__DEBUG__ && !1, m = (0, 
e.debugCreator)("universe-card", !0), u = function(e) {
    return "article" === e.type && (!!(e.article.contentType && e.article.contentType.toLowerCase() || "").includes("video") || void 0);
}, g = function(e) {
    return "article" === e.type && "tall" === e.style;
}, y = function(e, t, i) {
    var r = e[e.type];
    e.post && "article" === e.type && (e.type = "post", (r = e.post).article = e.article), 
    e.hotPost && (e.type = "post", r = e.hotPost, Object.assign(r.article, e.article));
    var a = "article" === e.type, n = u(e), d = a && "imageSet" === r.contentType && r.images.length > 1, c = "ripple" === t && i;
    return r || (r = {}), r.type || (r.type = e.type), "image" === e.type && ((r = e.imageItem).type = "image-hero", 
    r.coverUrl = r.image.url, r.isUnlimitedLong = !0), a && (r.type = "image-hero", 
    r.id = r.docIdString, r.coverUrl = r.cover, r.image = r.covers[0]), d && (r.type = "image-gallery"), 
    n && (r.type = "activity" !== t || c ? "video-hero" : "video-entry", r.video = r.videos[0], 
    r.thumbUrl = r.cover, r.coverUrl = r.video ? r.video.cover.url : r.cover), !c && r.type && !r.type.includes("video") && g(e) && (r.type = "entry", 
    r.thumbUrl = r.covers[0] && r.covers[0].url || r.cover), "mark" === e.type && (r.type = "quote", 
    r.imageUrl = (0, o.generateMarkImageUrl)(r.id, r.mockId, t, i)), "post" === e.type && (r.relation = e.postRelation), 
    r;
}, v = function(e, t, i, r, a) {
    if ("ripple" !== t) {
        var n = void 0;
        n = e.images && 0 !== e.images.length ? e.images.length > 1 ? "multi" : "single" : "none";
        var d = void 0;
        e.article && (d = {
            title: e.article.title,
            snippet: e.article.snippet || "",
            docIdString: e.article.docIdString,
            coverUrl: e.article.cover,
            magazineId: e.mid
        });
        var c = void 0;
        if (e.note) {
            var p = e.mark.id, s = e.mark.mockId;
            c = {
                title: e.note.article.title,
                docIdString: e.note.article.docIdString,
                content: e.note.highlights[0].content.text.text,
                magazineId: e.mid,
                imageUrl: (0, o.generateMarkImageUrl)(p, s, t, r)
            };
        }
        var l = {
            repostContent: a,
            postType: e.postType,
            id: e.id,
            isPin: e.isPin,
            imageType: n,
            images: e.images,
            image: e.images && e.images[0] || {},
            coverUrl: e.images && e.images[0] && e.images[0].url || void 0,
            isUnlimitedLong: !0,
            article: d,
            noteData: c,
            hopCard: e.hopCard,
            vote: e.vote,
            relation: e.relation
        };
        return "video" !== e.postType && "videoWithAT" !== e.postType || (l.video = e.videos[0], 
        l.coverUrl = e.videos[0].cover.url), l;
    }
}, T = function(e) {
    var t = "ripple";
    return (0, o.isActivityType)(e) && (t = "activity"), t;
}, f = function(e) {
    return d({}, e);
}, h = function(e, t) {
    return "tile" === e.style ? "tall" : t ? "tall" : "grande";
}, I = function(e, t, i) {
    var o = d({
        mid: e.magazineId,
        docId: e.docId,
        type: e.eventType,
        title: t.title,
        content: t.snippet,
        image: t.cover
    }, i);
    return "mark" === e.eventType && t.mockId ? o.id = t.mockId : o.id = t.id, o;
}, k = function(e) {
    return "activity" === e ? "single-user" : "multi-users";
}, C = function(e, t) {
    return t.name || t.title;
}, F = function(e, t, i) {
    return {
        id: t.docIdString,
        eventId: e.id,
        docId: t.docIdString,
        mid: t.mid,
        pid: t.pid,
        type: i,
        markId: t.id,
        start: t.start,
        end: t.end,
        postId: t.id
    };
}, S = function(e, t) {
    var i = {
        magazineId: e.mid,
        magazineName: e.magazineName,
        docId: e.docIdString,
        utmContent: "actionsheet"
    };
    return "post" === e.type && (i.type = "post", i.postParams = {
        isSelf: e.user.uid === s,
        postId: e.id,
        postType: e.postType,
        postManage: e.isSelf || e && e.relation && "admin" === e.relation.role.type,
        isAdmin: e.relation && "admin" === e.relation.role.type,
        isPin: e.isPin,
        isPreview: e.isPreview,
        eventId: t
    }), i;
}, D = function(e) {
    return {
        docIdString: e.docIdString,
        title: e.title,
        cover: e.cover,
        snippet: e.snippet
    };
}, z = function(e) {
    if (!(0, o.isActivityType)(e)) return null;
    var t = e.post || e.hotPost;
    return "noteWithAT" === t.postType ? t.note.annotation : t.content;
}, P = function(e, t) {
    var i = e.showItemHeader, o = e.cardFooterStyle || "publishTime", a = t.docDate || t.updatedTime || t.createdTimestamp;
    return {
        showHeader: i,
        showFooter: o,
        infos: {
            providerName: t.appName || "",
            magazineName: t.magazineName,
            formattedTime: (0, r.getHoursAgoRelativeTime)(a) ? (0, r.getHoursAgoRelativeTime)(a) : n.default.formatTimeNew(a)
        }
    };
};

exports.parseEventDataToCardData = function(e, n) {
    if (!e) return {};
    l && (e.post = e.hotPost = a.mockPostField);
    var d = T(e), c = h(e, n), u = y(e, d, n), g = z(e), U = (e.notes || []).map(function(e) {
        return e.user;
    });
    "activity" === d && (U = [ (e.post || e.hotPost).user ]), m("eventData", e);
    var b = "article" === e.type ? (0, i.mapContentType)(u.contentType) || "article" : e.type, q = {
        id: (0, o.generateCardId)(b, u.id, e.fromXiaohua, "card"),
        magazineId: u.mid,
        docId: u.docIdString,
        eventId: e.id,
        type: d,
        mediaData: u,
        mediaType: u.type,
        eventType: e.type,
        actionSheetData: S(u, e.id),
        markArgsData: F(e, u, b),
        markCount: e.markCount,
        repostContent: g,
        topicCount: e.topicCount,
        topicData: v(u, d, 0, n, g),
        topicTicketData: D(u),
        size: c,
        style: e.style,
        title: C(0, u),
        config: f(p),
        hasRead: e.isRead,
        isPremium: !1,
        isDeleted: e.isDeleted,
        hasPaid: !1,
        isMarked: e.isMarked,
        comments: e.comments,
        commentCount: e.commentCount,
        magazineName: u.magazineName,
        magazineRelation: e.magazineRelation || e.postRelation || e.magazine && e.magazine.relation || {},
        formattedMetaSnippet: (0, r.formatIntoMetaSnippet)(e, U[0], p, n, g, u.type),
        formattedFooterNote: (0, r.formatIntoFooterNote)(u.author, u.docDate || u.updatedTime || u.createdTimestamp, u.magazineName, n, d, e),
        cardStyle: P(e, u)
    };
    return q.shareData = I(q, u, e.shareConfig), q.metaType = k(d), "post" === q.mediaType ? (q.user = U[0], 
    q.isSelf = s === q.mediaData.uid, q.users = U) : "single-user" === q.metaType ? q.user = U[0] : q.users = U, 
    e.color = e.color || "#FFFFFF", "quote" === q.mediaType ? q.backgroundColor = (0, 
    t.hexToRgbaString)(e.color, .4) : "activity" === q.type && "noteWithAT" === q.mediaData.postType ? q.backgroundColor = (0, 
    t.hexToRgbaString)(e.color, .4) : q.backgroundColor = "#FFFFFF", q.imageBackgroundColor = (0, 
    t.hexToRgbaString)(e.color, .2), "ripple" === q.type && "quote" === q.mediaType ? q.quoteBackgroundColor = (0, 
    t.hexToRgbaString)(e.color, .4) : "activity" === q.type && "noteWithAT" === q.topicData.postType ? q.quoteBackgroundColor = (0, 
    t.hexToRgbaString)(e.color, .5) : "activity" === q.type ? q.quoteBackgroundColor = "#F7F7F7" : q.quoteBackgroundColor = "#FFFFFF", 
    "ripple" === d && (u.isUnlimitedLong || "entry" === u.type) && (q.isHideTitle = !0), 
    "activity" === d && u.type && u.type.includes("entry") && (q.isHideTitle = !0), 
    m("cardData", q), q;
};