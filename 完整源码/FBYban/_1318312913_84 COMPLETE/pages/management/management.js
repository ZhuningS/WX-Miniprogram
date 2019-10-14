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
            function r(n, s) {
                try {
                    var i = t[n](s), c = i.value;
                } catch (e) {
                    return void a(e);
                }
                if (!i.done) return Promise.resolve(c).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(c);
            }
            return r("next");
        });
    };
}

var r = e(require("../../libs/regenerator-runtime.js")), n = e(require("../../libs/underscore.js")), s = require("../../protocol/io"), i = e(require("../../utils/extend-page")), c = e(require("../../mixins/actions")), u = e(require("../../mixins/hook")), o = e(require("../../mixins/subscribe")), d = e(require("../../mixins/follow")), f = e(require("../../mixins/logger"));

Page((0, i.default)({
    data: {
        events: [],
        loading: !1,
        current: "magazine",
        cates: [],
        followers: []
    },
    mid: void 0,
    onLoad: function(e) {
        var t = this;
        return a(r.default.mark(function a() {
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    wx.setNavigationBarTitle({
                        title: "管理"
                    }), e.type ? (t.setData({
                        current: e.type
                    }), "magazine" === e.type ? t.loadCates() : t.loadFollowers()) : t.loadCates();

                  case 2:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    loadCates: function() {
        var e = this;
        return a(r.default.mark(function t() {
            var a, i, c;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.pageShown("/me/magazines/"), t.next = 3, s.api.get("v1/category.get", {
                        include_magazines: !0,
                        include_all: !0
                    });

                  case 3:
                    a = t.sent, i = n.default.filter(n.default.flatten(n.default.pluck(n.default.pluck(a.data.events, "section"), "events")), function(e) {
                        return "magazine" === e.type && "subscribed" === e.magazine.status;
                    }), c = {}, n.default.each(i, function(e) {
                        c[e.magazine.id] = !e.magazine.pushSubscribed || "push";
                    }), e.setData({
                        cates: a.data.events,
                        subscribed: c
                    });

                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadFollowers: function() {
        var e = this;
        return a(r.default.mark(function t() {
            var a, i;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.pageShown("/me/profiles/"), t.next = 3, s.api.get("v1/user.followers.get");

                  case 3:
                    a = t.sent, i = {}, n.default.each(a.data.events, function(e) {
                        i[e.user.uid] = !0;
                    }), e.setData({
                        followers: a.data.events,
                        followed: i
                    });

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    onTapType: function(e) {
        var t = e.currentTarget.dataset.type;
        this.setData({
            current: t
        }), "magazine" === t ? this.loadCates() : this.loadFollowers();
    },
    hide: function(e) {
        var i = this;
        return a(r.default.mark(function a() {
            var c, u, o;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return c = e.currentTarget.dataset.cid, a.prev = 1, a.next = 4, s.api.get("v1/category.hide", {
                        cid: c
                    });

                  case 4:
                    (u = n.default.find(i.data.cates, function(e) {
                        return e.section.events[0].category.id === c;
                    })).section.events[0].category.status = "forbidden", o = i.data.cates.indexOf(u), 
                    i.setData(t({}, "cates[" + o + "]", u)), i.log("hided_category", {
                        category: c
                    }), a.next = 13;
                    break;

                  case 11:
                    a.prev = 11, a.t0 = a.catch(1);

                  case 13:
                  case "end":
                    return a.stop();
                }
            }, a, i, [ [ 1, 11 ] ]);
        }))();
    },
    show: function(e) {
        var i = this;
        return a(r.default.mark(function a() {
            var c, u, o;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return c = e.currentTarget.dataset.cid, a.prev = 1, a.next = 4, s.api.get("v1/category.show", {
                        cid: c
                    });

                  case 4:
                    (u = n.default.find(i.data.cates, function(e) {
                        return e.section.events[0].category.id === c;
                    })).section.events[0].category.status = "subscribed", o = i.data.cates.indexOf(u), 
                    i.setData(t({}, "cates[" + o + "]", u)), i.log("showed_category", {
                        category: c
                    }), a.next = 13;
                    break;

                  case 11:
                    a.prev = 11, a.t0 = a.catch(1);

                  case 13:
                  case "end":
                    return a.stop();
                }
            }, a, i, [ [ 1, 11 ] ]);
        }))();
    },
    top: function(e) {
        var i = this;
        return a(r.default.mark(function a() {
            var c, u, o;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return c = e.currentTarget.dataset.cid, a.prev = 1, a.next = 4, s.api.get("v1/category.top", {
                        cid: c
                    });

                  case 4:
                    u = n.default.findIndex(i.data.cates, function(e) {
                        return e.section.events[0].category.id === c;
                    }), o = i.data.cates.splice(u, 1), i.data.cates.unshift(o[0]), i.setData(t({}, "cates", i.data.cates)), 
                    i.log("pinned_category", {
                        category: c
                    }), a.next = 13;
                    break;

                  case 11:
                    a.prev = 11, a.t0 = a.catch(1);

                  case 13:
                  case "end":
                    return a.stop();
                }
            }, a, i, [ [ 1, 11 ] ]);
        }))();
    }
}, c.default, o.default, d.default, f.default, u.default));