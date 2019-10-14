function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function a(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, i) {
                try {
                    var o = t[n](i), d = o.value;
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

var r = e(require("../../libs/regenerator-runtime.js")), n = e(require("../../libs/underscore.js")), i = require("../../protocol/io"), o = e(require("../../utils/extend-page")), d = e(require("../../mixins/actions")), u = e(require("../../mixins/logger")), s = e(require("../../mixins/hook"));

Page((0, o.default)({
    data: {
        loading: !1,
        current: void 0,
        editName: !1,
        name: "",
        magazineInfo: {},
        added: {},
        mid: void 0
    },
    onLoad: function(e) {
        var t = this;
        return a(r.default.mark(function a() {
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    t.setData({
                        mid: e.mid,
                        current: e.type,
                        redirect: e.redirect
                    }), t.logPageShow();

                  case 2:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    onShow: function() {
        var e = this;
        return a(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.init();

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    init: function() {
        var e = this;
        return a(r.default.mark(function t() {
            var a;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, e.loadMagazine();

                  case 2:
                    a = [], "curator" !== e.data.current && (a.push({
                        name: "内容来源",
                        id: "source"
                    }), a.push({
                        name: "关键词",
                        id: "keywords"
                    })), e.setData({
                        tabs: a
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    logPageShow: function() {
        "curator" === this.data.current ? this.pageShown("/magazines/" + this.data.mid + "/profiles/") : "name" === this.data.current ? this.pageShown("/magazines/" + this.data.mid + "/settings/") : "keywords" === this.data.current ? this.pageShown("/magazines/" + this.data.mid + "/keywords/") : this.pageShown("/magazines/" + this.data.mid + "/sources/");
    },
    loadMagazine: function() {
        var e = this;
        return a(r.default.mark(function t() {
            var a, o, d, u, s, c, f;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, i.api.get("v1/magazine.info?mid=" + e.data.mid);

                  case 2:
                    a = t.sent, o = a.data.events[0].magazineInfo, d = "private" === o.magazine.type, 
                    u = o.magazine.name, s = o.magazine.color, c = {}, n.default.each(o.providers, function(e) {
                        c[e.id] = !0;
                    }), d || ((f = n.default.find(o.curators, function(e) {
                        return e.user.uid === getApp().globalData.userInfo.uid;
                    })) || (f = {
                        user: getApp().globalData.userInfo
                    }), f.user.name = "我"), e.setData({
                        isPrivate: d,
                        name: u,
                        magazineInfo: o,
                        added: c,
                        me: [ f ]
                    }), e.showPageTitle("# " + u, s);

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadCurrentTab: function() {
        var e = this;
        return a(r.default.mark(function t() {
            var a, n;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if ("keywords" !== e.data.current) {
                        t.next = 7;
                        break;
                    }
                    return t.next = 3, i.api.get("v1/magazine.keyword.list", {
                        mid: e.data.mid
                    });

                  case 3:
                    a = t.sent, (n = a.data.value) && e.setData({
                        keywords: n.split(",")
                    }), console.log("keywords is ", a);

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    onTapTab: function(e) {
        var t = e.currentTarget.id;
        this.setData({
            current: t
        }), this.logPageShow(), this.loadCurrentTab();
    },
    addKeyword: function() {
        var e = this;
        this.showInputDialog("输入关键字", "添加", "取消", function(t) {
            t && (console.log("the keyword is ", t), i.api.get("v1/magazine.keyword.add", {
                keywords: t,
                mid: e.data.mid
            }));
        }, "text");
    },
    onTapRemove: function(e) {
        var n = this;
        return a(r.default.mark(function a() {
            var o;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return o = e.currentTarget.dataset.providerId, a.next = 3, i.api.get("v1/magazine.provider.forbid", {
                        mid: n.data.mid,
                        provider_id: o
                    });

                  case 3:
                    n.setData(t({}, "added." + o, !1));

                  case 4:
                  case "end":
                    return a.stop();
                }
            }, a, n);
        }))();
    },
    onTapRemoveKeyword: function(e) {
        var t = this;
        return a(r.default.mark(function a() {
            var o;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return o = e.currentTarget.dataset.keyword, a.next = 3, i.api.get("v1/magazine.keyword.delete", {
                        mid: t.data.mid,
                        keywords: o
                    });

                  case 3:
                    t.setData({
                        keywords: n.default.without(t.data.keywords, o)
                    });

                  case 4:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    onTapAdd: function(e) {
        var n = this;
        return a(r.default.mark(function a() {
            var o;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return o = e.currentTarget.dataset.providerId, a.next = 3, i.api.get("v1/magazine.provider.subscribe", {
                        mid: n.data.mid,
                        provider_id: o
                    });

                  case 3:
                    n.setData(t({}, "added." + o, !0));

                  case 4:
                  case "end":
                    return a.stop();
                }
            }, a, n);
        }))();
    },
    redirectToMagazine: function() {
        wx.redirectTo({
            url: "/pages/magazine/magazine?id=" + this.data.mid
        });
    }
}, d.default, u.default, s.default));