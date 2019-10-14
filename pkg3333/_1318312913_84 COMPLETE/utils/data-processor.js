function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, r) {
    if (void 0 === e || 0 === e.length) return e;
    var a = /(?:^|\s)(.*?.qingmang.mobi\/image\/orion\/[^_]*)_([0-9]*)_([0-9]*)(.*?)(?:\s|$)/g.exec(e);
    if (!a) return e;
    var i = parseInt(a[2]), o = parseInt(a[3]), n = t || 750, c = r || 1334;
    if (i > n || o > c) {
        var s = Math.min(n / i, c / o);
        return e + "?imageView2/2/w/" + parseInt(i * s);
    }
    return e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.pageEventFormatter = exports.genMagazineCover = exports.genProviderCover = exports.genGroupCover = exports.genProductCover = exports.genExploreCover = exports.pretreatData = exports.washData = exports.generateEventId = void 0;

var r = e(require("../libs/underscore")), a = e(require("../libs/jquery.base64")), i = require("../services/ui-switch"), o = e(require("./util")), n = require("./color"), c = require("./dev"), s = require("./list-transformer"), u = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
}, l = i.uiSwitch.getSwitches("$explore"), p = (0, c.debugCreator)("data-processor"), d = exports.generateEventId = function(e) {
    var t = e.type, a = e[t], i = void 0;
    if (a || (a = e.article || e.imageItem || e.category || e.post || {}), i = a.id || a.docId || a.mockId || a.pid || r.default.uniqueId("unique-")) return ("post" === t || "article" === t || "mark" === t || "image" === t ? "dynamic-item" : t) + "-" + i;
    p("Event:", e, "无法生成 ID");
}, m = exports.washData = function(e) {
    try {
        if (e.id || (e.id = d(e)), e.mark && (e.mark.content = e.mark.content.substring(e.mark.start, e.mark.end)), 
        e.imageItem && (e.imageItem.image.url = t(e.imageItem.image.url), e.imageItem.image.encodedUrl = a.default.encodeBase64(e.imageItem.image.url)), 
        e.category) {
            var i = e.category.idString;
            i ? "m" === i[0] && (e.category.id = parseInt(i.substring(1))) : "category" === e.type ? i = "n" + e.category.id : "community" === e.type && (i = "g" + e.category.id), 
            e.category.cid = i;
        } else "explore" === e.type ? e.category = {
            id: 0,
            cid: "today",
            name: "轻芒"
        } : e.article && (r.default.each(e.article.covers, function(e) {
            e.url = t(e.url);
        }), r.default.each(e.article.images, function(e) {
            e.url = t(e.url), e.encodedUrl = a.default.encodeBase64(e.url);
        }), e.article.cover = t(e.article.cover));
    } catch (e) {
        (0, c.errorReporter)("wash data failed", e);
    }
};

exports.pretreatData = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
    return r.default.each(e.events, function(e) {
        e.comments && r.default.each(e.comments.events, function(e) {
            return t(e);
        }), e.section ? (r.default.each(e.section.events, function(e) {
            return t(e);
        }), ~s.FULL_SECTION_LIST.indexOf(e.section.type) || (e = e.section.events[0])) : t(e);
    }), e.nextUrl ? e.nextUrl.startsWith("http:") && (e.nextUrl = e.nextUrl.replace("http://", "https://")) : e.nextUrl = null, 
    e;
}, exports.genExploreCover = function(e, t) {
    var a;
    return r.default.each(e.events, function(e) {
        if ("cover" === e.type) {
            a = {};
            var r = e.cover;
            if ("articleCover" === r.type) return a.type = "article", a.article = r.article, 
            a.article.publishDate ? a.article.date = o.default.formatTime(a.article.publishDate) : a.article.date = o.default.formatTime(a.article.docDate), 
            a.user = r.user, a;
            var i = e.color;
            if (i && (a.background = (0, n.hexToRgbaString)(i, .25), a.color = "#" + i), r.cover && (a.image = r.cover.url, 
            r.cover.width && r.cover.width > r.cover.height && (a.isSmall = !0)), "opsCover" === r.type || t) {
                if (a.background = r.coverColor, a.color = r.titleColor, r.date) {
                    var c = new Date().getTime();
                    a.date = o.default.formatDate(c);
                }
                a.title = t || a.date, a.snippet = r.title, (r.isSnippetCover || l.$snippetCover) && (a.title = r.title, 
                a.snippet = r.snippet);
            }
            if (r.shareData) {
                var s = r.shareData;
                a.share = {
                    type: "cover",
                    image: s.previewImage ? s.previewImage.url : s.cover.url,
                    shareImage: s.shareImage.url,
                    path: s.sharePath
                };
            } else a.image ? a.share = {
                type: "cover",
                image: a.image,
                path: getApp().getConfig().homePage
            } : a.share = {
                isPage: !0
            };
            if (r.uri) if (r.uri.startsWith("http")) {
                var u = e.cover.uri.split("/");
                switch (u[3]) {
                  case "magazines":
                    u[6] ? a.redirect = "/pages/article/article?id=" + u[6] + "&mid=" + u[4] : a.redirect = "/pages/magazine/magazine?id=" + u[4];
                    break;

                  case "articles":
                    u[4] && (a.redirect = "/pages/article/article?id=" + u[4]);
                    break;

                  case "profiles":
                    a.redirect = "/pages/profile/user?uid=" + u[4];
                }
            } else a.redirect = r.uri;
        }
    }), a || "noCover";
}, exports.genProductCover = function(e) {
    return {
        type: "timeline",
        id: e.id,
        title: e.name,
        background: "#acacac",
        mainMeta: e.serialInfo,
        users: {
            items: e.paidUsers,
            label: "已购",
            total: e.paidUserNumber
        },
        action: {
            type: "label",
            label: e.priceDesc
        },
        share: {
            type: "product",
            id: e.id,
            name: e.title
        },
        product: e
    };
}, exports.genGroupCover = function(e) {
    return {
        type: "group",
        id: e.id,
        title: "" + e.name,
        image: e.cover,
        background: e.color ? "#" + e.color : "#acacac",
        subMeta: e.totalPostNumber + " 个讨论，共 " + e.totalMemberNumber + " 人参与",
        users: {
            items: e.members,
            label: "成员",
            total: e.totalMemberNumber
        },
        share: {
            type: "group",
            id: e.id,
            name: e.name
        },
        action: {
            type: "pay"
        },
        group: e
    };
}, exports.genProviderCover = function(e) {
    return {
        type: "provider",
        id: e.categoryId,
        title: "" + e.name,
        background: "#acacac",
        share: {
            type: "provider",
            id: e.id,
            name: e.name
        },
        provider: e
    };
}, exports.genMagazineCover = function(e, t) {
    var a = e.magazine, i = a.relation, o = e.statistics, n = [];
    r.default.each(e.curators, function(e) {
        n.push(e.user);
    });
    var c = {
        id: a.id,
        type: "magazine",
        title: a.name,
        image: a.cover,
        background: a.color ? "#" + a.color : "#acacac",
        menu: t,
        mainMeta: void 0,
        subMeta: void 0,
        moreMeta: !0,
        users: {
            items: n,
            label: "贡献者",
            total: o ? o.curatorCount : n.length,
            link: "/pages/modify/modify?mid=" + a.id + "&type=curator"
        },
        providers: {
            items: e.providers,
            label: "内容源",
            total: 0,
            link: "/pages/modify/modify?mid=" + a.id + "&type=source",
            more: !0
        },
        share: {
            type: "magazine",
            id: a.id,
            name: a.name
        },
        action: {
            type: void 0
        },
        statistics: o,
        magazineInfo: e
    };
    return o && (c.mainMeta = o.markedCount + " 个马克", getApp().getConfig().enableSubscribe ? c.subMeta = o.subscriberCount + " 人订阅，" : c.subMeta = "", 
    c.subMeta += c.users.total + " 个贡献者"), getApp().getConfig().enableSubscribe && (c.action.type = "subscribe"), 
    i && (c.providers.more = i.enableManageSource), 0 !== c.users.total || c.providers.more || (c.moreMeta = !1), 
    c;
}, exports.pageEventFormatter = function(e) {
    return u({
        id: e.publicationPage.id,
        name: e.publicationPage.name,
        publicationId: e.publicationPage.pubId,
        status: e.publicationPage.status
    }, e.config);
};