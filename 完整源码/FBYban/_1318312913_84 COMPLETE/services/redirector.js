var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../utils/util")), a = function() {
    function e(e, a) {
        var t = [], r = !0, n = !1, i = void 0;
        try {
            for (var o, g = e[Symbol.iterator](); !(r = (o = g.next()).done) && (t.push(o.value), 
            !a || t.length !== a); r = !0) ;
        } catch (e) {
            n = !0, i = e;
        } finally {
            try {
                !r && g.return && g.return();
            } finally {
                if (n) throw i;
            }
        }
        return t;
    }
    return function(a, t) {
        if (Array.isArray(a)) return a;
        if (Symbol.iterator in Object(a)) return e(a, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), t = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
}, r = {
    EXPLORE: "/pages/explore/explore",
    PAGE: "/pages/page/page",
    ARTICLE: "/pages/article/article",
    MAGAZINE: "/pages/magazine/magazine",
    MAGAZINE_RECOMMEND: "/pages/magazine/recommend",
    POST: "/pages/post/post",
    CREATE: "/pages/create/create",
    LOGIN: "/pages/account/login",
    MODITY: "/pages/modify/modify",
    GROUP: "/pages/group/group",
    FOLLOWING: "/pages/user/list",
    POST_CREATE: "/pages/post/create",
    POST_LIST: "/pages/post/list",
    PROFILE_USER: "/pages/profile/user",
    WEB_VIEW: "/pages/web/web",
    WECHAT_GROUP_LIST: "/pages/wechat/group-list"
}, n = function(a, t) {
    var r = e.default.buildUrl(a, t);
    wx.navigateTo({
        url: r
    });
}, i = function(a, t) {
    var r = e.default.buildUrl(a, t);
    wx.redirectTo({
        url: r
    });
}, o = function(a, t) {
    var r = e.default.buildUrl(a, t);
    wx.switchTab({
        url: r
    });
}, g = function(e) {
    var a = {}, t = e.split("://");
    return t[0] ? (a.protocol = t[0], a.path = t[1], a) : null;
}, u = function(e) {
    var t = e.split("://"), r = a(t, 2), n = r[0], i = r[1];
    if (!i) {
        var o = e.split("?"), g = a(o, 2);
        n = g[0], i = g[1];
    }
    wx.navigateToMiniProgram({
        appId: n,
        path: decodeURIComponent(i),
        success: function(e) {
            console.log("\n        已经打开MiniProgram:" + n + "\n        errMsg: " + e.errMsg + "\n      ");
        }
    });
}, s = function(a, t, r, n, i) {
    var o;
    if (n) o = e.default.buildUrl(t, i); else {
        var g;
        g = null != r ? r : getApp().getConfig().homePage ? "/" + getApp().getConfig().homePage : "/pages/magazines/magazines", 
        o = e.default.buildUrl(g, {
            target: e.default.buildUrl(t, i)
        });
    }
    console.log("share url is", o);
    var u = a || getApp().getConfig().name;
    return u = u.replace("%u", getApp().globalData.userInfo.name), {
        title: u,
        path: o
    };
}, l = function(e) {
    var a = e["c-discuss"];
    a && getApp().setConfig("enableDiscuss", "true" === a);
    var t = e["c-bonus"];
    t && getApp().setConfig("enableBonus", "true" === t);
};

module.exports = {
    PAGE_PATH: r,
    navigateByUrlSchema: function(e) {
        var a = g(e);
        if (a) {
            var t = a.protocol, i = a.path;
            switch (t) {
              case "page":
                n("/" + i);
                break;

              case "tab":
                o("/" + i);
                break;

              case "http":
              case "https":
                n(r.WEB_VIEW, {
                    url: e
                });
                break;

              case "miniProgram":
                u(i);
                break;

              default:
                throw new Error("未处理的 Protocol: " + t);
            }
        }
    },
    navigateTo: n,
    navigateToArticlePage: function(e, a, i) {
        var o = r.ARTICLE, g = t({
            id: a,
            mid: e
        }, i);
        n(o, g);
    },
    navigateToPostPage: function(e, a) {
        var i = r.POST, o = t({
            id: e
        }, a);
        n(i, o);
    },
    navigateToMagazinePage: function(e, a) {
        var i = r.MAGAZINE, o = t({
            id: e
        }, a);
        n(i, o);
    },
    navigateToMagazineRecommendPage: function(e, a) {
        var i = r.MAGAZINE_RECOMMEND, o = t({
            id: e
        }, a);
        n(i, o);
    },
    navigateToCreatePage: function() {
        n(r.CREATE);
    },
    navigateToLoginPage: function(e) {
        n(r.LOGIN, {
            callback: e
        });
    },
    navigateToModifyPage: function(e, a) {
        var i = r.MODITY, o = t({
            mid: e
        }, a);
        n(i, o);
    },
    navigateToPostCreatePage: function(e, a) {
        n(r.POST_CREATE, {
            id: e,
            ticket: a
        });
    },
    navigateToPostListPage: function(e, a) {
        n(r.POST_LIST, {
            mid: e,
            docId: a
        });
    },
    navigateToProfileUserPage: function(e) {
        n(r.PROFILE_USER, {
            uid: e
        });
    },
    navigateToFollowingPage: function(e) {
        n(r.FOLLOWING, {
            type: e
        });
    },
    navigateToMiniProgram: u,
    switchTo: o,
    switchToWeChatGroupListTab: function() {
        o(r.WECHAT_GROUP_LIST);
    },
    redirectTo: i,
    redirectToArticlePage: function(e, a, n) {
        var o = r.ARTICLE, g = t({
            id: a,
            mid: e
        }, n);
        i(o, g);
    },
    redirectToGroupPage: function(e) {
        i(r.WECHAT_GROUP_LIST, {
            mid: e
        });
    },
    uriToPage: function(e) {
        if (null == e) return e;
        var a = e.search("://"), t = e.substr(0, a), r = e.substr(a + 3).split("/");
        return "qingmang" === t && "magazine" === r[0] ? "/pages/magazine/magazine?id=" + r[1] : e;
    },
    buildShareOptions: s,
    buildCurrentPageShareOptions: function(e, a, t) {
        var r = 1 === a.length, n = "/" + a[a.length - 1].__route__;
        return s(e, n, null, r, t);
    },
    buildDefaultShareOptions: function() {
        var e, a;
        return e = "/" + getApp().getConfig().homePage, a = getApp().getConfig().name, s(a, e, !0, {});
    },
    parseShareOptions: function(a) {
        l(a);
        var t;
        if (a.q ? t = e.default.parseUrl(decodeURIComponent(a.q)).params.target : a.target && (t = a.target), 
        t) {
            t = decodeURIComponent(t);
            var r = e.default.parseUrl(t), n = r.base, i = r.params;
            i.utm_source = "share", n.startsWith("pages/") ? n = "/" + n : n.startsWith("/pages/") || (n = "/pages/" + n);
            for (var o in a) "target" !== o && (i[o] = a[o]);
            var g = e.default.buildUrl(n, i);
            wx.navigateTo({
                url: g
            });
        }
    },
    parseOnlineConfigs: l
};