function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(i, n) {
                try {
                    var o = t[i](n), d = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(d).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(d);
            }
            return r("next");
        });
    };
}

var a = e(require("../libs/regenerator-runtime")), r = (require("../libs/mp-enhancers/index"), 
require("../protocol/io")), i = require("../protocol/logger"), n = require("../config/index"), o = require("../utils/file"), d = require("../utils/dev"), s = require("../utils/base64"), u = e(require("../utils/util")), l = e(require("../pages/components/global-ui")), c = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
}, p = getApp().globalData.userInfo || {}, g = p.name || "我", h = "https://ssapi.qingmang.mobi/image2/share/" + n.config.wxAppid, m = function(e, t, a) {
    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], n = h + "/" + e + "/" + t;
    if (n += r ? "/c" : "/s", a) {
        console.log("share image: ", a);
        var o = "/";
        for (var d in a) void 0 !== a[d] && (n += "" + o + d + "__" + a[d], o = "__");
    }
    var s = new Date();
    return n += i ? "?t=" + s.getTime() : "?t=" + s.getFullYear() + s.getMonth() + s.getDate();
}, f = function(e, t) {
    return t ? e ? t.startsWith(e.substring(1)) ? "/" + t : u.default.buildUrl(e, {
        target: t
    }) : t : n.config.homePage;
}, v = function(e) {
    return (e || n.config.shareTitle).replace("%u", g);
}, y = function(e, t) {
    var a = {
        title: v(t.title),
        path: t.uri || f(e, t.path)
    };
    return t.image && (a.imageUrl = t.image || t.poster), console.log("Mini Program ShareOptions: ", a), 
    a;
}, w = function() {
    var e = t(a.default.mark(function e() {
        var t, r, i;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t = getCurrentPages(), r = "/" + t[t.length - 1].route, i = {
                    path: r
                }, !(t.length > 1)) {
                    e.next = 7;
                    break;
                }
                return e.abrupt("return", y(n.config.homePage, i));

              case 7:
                return e.abrupt("return", y(null, i));

              case 8:
              case "end":
                return e.stop();
            }
        }, e, void 0);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), b = function(e) {
    var t = n.config.shareOptionsMap[e.type] || {}, a = {}, r = c({}, e), i = "profile" === e.type;
    if (!t.title) {
        var o = i ? "user" : e.type;
        t.title = n.config.sharePages[o];
    }
    if (!t.shareImage && t.poster && (t.shareImage = t.poster), t.path && t.uri && (t.path = t.uri), 
    e.name && (t.title = t.title.replace("%u", i ? e.name || g : e.name).replace("%m", e.name)), 
    "mark" === e.type) {
        var d = 0 === String(e.id).indexOf("n") ? e.id : "m" + e.id, s = [ e.type, d, {
            mid: e.mid,
            uid: p.uid
        } ];
        a.image = m.apply(void 0, s.concat([ !0 ])), a.shareImage = m.apply(void 0, s.concat([ !1 ])), 
        a.path = u.default.buildUrl("/pages/article/article", {
            id: e.docId,
            mid: e.mid,
            uid: p.uid,
            mark: e.id
        });
    } else "magazine" === e.type ? (a.image = m(e.type, e.id, {
        uid: p.uid
    }, !0), a.shareImage = m(e.type, e.id, {
        uid: p.uid
    }, !1), a.path = u.default.buildUrl("/pages/magazine/magazine", {
        id: e.id,
        uid: p.uid
    })) : "profile" === e.type ? (a.image = m(e.type, e.id, void 0, !0), a.shareImage = m(e.type, e.id, void 0, !1), 
    a.path = u.default.buildUrl("/pages/profile/user", {
        uid: e.id
    })) : "group" === e.type ? a.path = u.default.buildUrl("/pages/group/group", {
        id: e.id
    }) : "post" === e.type && (a.image = m(e.type, e.id, {
        mid: e.mid,
        uid: p.uid
    }, !0), a.shareImage = m(e.type, e.id, {
        mid: e.mid,
        uid: p.uid
    }, !1), a.path = u.default.buildUrl("/pages/post/post", {
        id: e.id,
        mid: e.mid,
        uid: p.uid
    }));
    if (e.docId) {
        if (a.title || (a.title = n.config.shareOptionsMap.article.title), !a.image && !a.shareImage) {
            var l = [ "article", e.docId, {
                uid: p.uid,
                mid: e.mid
            } ];
            a.image = m.apply(void 0, l.concat([ !0 ])), a.shareImage = m.apply(void 0, l.concat([ !1 ]));
        }
        a.path || (a.path = u.default.buildUrl("/pages/article/article", {
            id: e.docId,
            mid: e.mid,
            uid: p.uid
        }));
    }
    Object.assign(e, c({}, a, t, r)), console.log("Filled share item:", e);
};

module.exports = {
    data: {
        showShareCard: !1,
        shareData: void 0
    },
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: !0
        }), console.log("add share ticket");
    },
    onShareAppMessage: function(e) {
        var t = {
            network: "wechat"
        }, a = "button" === e.from && "sharePage" !== e.target.id;
        try {
            if (a && (Object.assign(t, e.target.dataset), t.content || (t.content = "card")), 
            !a) {
                if (t.content = "menu", this.shareOptions && "web-view" === this.shareOptions().type) return {
                    title: ""
                };
                if (!this.shareOptions) return w();
                var r = this.shareOptions();
                Object.assign(t, r);
            }
            return b(t), "post" === t.type ? y("/pages/magazine/magazine", t) : y(n.config.homePage, t);
        } finally {
            this.onShared(t);
        }
    },
    onShared: function(e) {
        i.logger.logAction("share", {
            network: e.network,
            item: e.id,
            item_type: e.type,
            content: e.content ? e.content : "menu"
        });
        try {
            if (e.id) if ("magazine" === e.type) r.api.get("v1/action.share", {
                mid: e.id,
                content_type: e.type,
                share_platform: e.network
            }); else if ("profile" === e.type || "post" === e.type || "cover" === e.type) ; else if ("image" === e.type) r.api.get("v1/action.share", {
                target_id: e.docId,
                pid: e.id,
                content_type: e.type,
                share_platform: e.network
            }); else {
                var t = e.type;
                "imageSet" === t && (t = "article"), r.api.get("v1/action.share", {
                    docid: e.docId,
                    content_type: t,
                    share_platform: e.network
                });
            }
        } catch (e) {
            (0, d.errorReporter)("log share failed", e);
        }
    },
    parseShareLanding: function(e) {
        var t = e.scene;
        if (t) return t = u.default.decodeParam(t), (0, s.parseScene)(t);
        var a = e.target;
        return a ? (a = u.default.decodeParam(a), u.default.parseUrl(a)) : void 0;
    },
    gotoSharedLanding: function(e) {
        console.log("gotosharedLanding"), wx.navigateTo({
            url: u.default.buildUrl(e.base, e.params)
        });
    },
    showShareCard: function(e) {
        var t = e.currentTarget.dataset.shareData, a = i.logger.page;
        t && (console.log("share data is", t), l.default.dispatchShareCardDataAction(t), 
        a && i.logger.logPageShow(a + "share/", t.type));
    },
    closeShareCard: function() {
        l.default.dispatchHideShareCardAction();
    },
    share: function() {
        wx.canIUse("button.open-type.share") || wx.showModal({
            title: "提示",
            content: "当前微信版本过低，请通过右上角 ... 进行分享。"
        });
    },
    shareToPhotos: function(e) {
        var t = c({}, e.currentTarget.dataset);
        b(t), (0, o.savePhotoToAlbum)(t.shareImage || t.image);
    },
    shareToMoment: function(e) {
        var t = this;
        console.log("invoke shareToMoment");
        var a = c({
            network: "moments"
        }, e.currentTarget.dataset);
        b(a), (0, o.savePhotoToAlbum)(a.shareImage || a.image, function() {
            wx.showModal({
                title: "海报已保存到系统相册",
                content: "快去分享给朋友，叫伙伴们来围观吧",
                confirmText: "我知道了",
                showCancel: !1
            }), t.onShared({
                id: a.id,
                type: a.type,
                content: a.content ? a.content : "card",
                network: a.network
            });
        });
    },
    redirectToTarget: function(e) {
        var t = f(!!e && n.config.homePage, e);
        wx.reLaunch({
            url: t
        });
    },
    shareTools: {
        fillShareItem: b
    }
};