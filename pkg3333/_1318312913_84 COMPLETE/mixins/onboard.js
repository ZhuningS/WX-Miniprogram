function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function t(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(a, o) {
                try {
                    var s = r[a](o), u = s.value;
                } catch (e) {
                    return void t(e);
                }
                if (!s.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
            }
            return n("next");
        });
    };
}

var n = e(require("../libs/regenerator-runtime.js")), a = e(require("../libs/underscore")), o = require("../protocol/io");

module.exports = {
    data: {
        onboard: {
            step: "magazine",
            subscribed: {},
            subscribedCount: 0,
            followed: {}
        }
    },
    referUid: void 0,
    loadOnboard: function(e, a) {
        var o = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return o.referUid = e, t.next = 3, o.initLogin();

                  case 3:
                    return a && o.setData(r({}, "onboard.step", a)), t.next = 6, o.prepareOnboard();

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t, o);
        }))();
    },
    selectedOnboardSubscribed: function(e) {
        var t = e.currentTarget.dataset.mid;
        this.setData(r({}, "onboard.subscribed." + t, !this.data.onboard.subscribed[t])), 
        this.setData(r({}, "onboard.subscribedCount", a.default.filter(this.data.onboard.subscribed, function(e) {
            return e;
        }).length));
    },
    selectedOnboardFollowed: function(e) {
        var t = e.currentTarget.dataset.uid;
        this.setData(r({}, "onboard.followed." + t, !this.data.onboard.followed[t]));
    },
    prepareOnboard: function() {
        var e = this;
        return t(n.default.mark(function t() {
            var s, u, i;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if ("magazine" !== e.data.onboard.step) {
                        t.next = 10;
                        break;
                    }
                    return e.pageShown("/onboard/magazines/", e.referUid), t.next = 4, o.api.get("v1/magazine.onboard.get", {
                        uid: e.referUid
                    });

                  case 4:
                    s = t.sent, u = {}, a.default.each(s.data.events, function(e) {
                        "subscribed" === e.magazine.status && (u[e.magazine.id] = !0);
                    }), e.setData({
                        onboard: {
                            step: e.data.onboard.step,
                            magazines: s.data.events,
                            subscribed: u,
                            subscribedCount: u.length,
                            followed: {}
                        }
                    }), t.next = 16;
                    break;

                  case 10:
                    if ("user" !== e.data.onboard.step) {
                        t.next = 16;
                        break;
                    }
                    return e.pageShown("/onboard/profiles/", e.referUid), t.next = 14, o.api.get("v1/user.onboard.get", {
                        uid: e.referUid
                    });

                  case 14:
                    i = t.sent, e.setData(r({}, "onboard.users", i.data.events));

                  case 16:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    nextOnboard: function(e) {
        var s = this;
        return t(n.default.mark(function t() {
            var u, i;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!s.data.needLogin) {
                        t.next = 3;
                        break;
                    }
                    return t.next = 3, s.login(e);

                  case 3:
                    if ("magazine" !== s.data.onboard.step) {
                        t.next = 15;
                        break;
                    }
                    return u = [], a.default.each(s.data.onboard.subscribed, function(e, r) {
                        e && u.push(r);
                    }), t.next = 8, o.api.get("v1/user.onboard", {
                        mids: u.join(",")
                    });

                  case 8:
                    return s.setData(r({}, "onboard.step", "user")), t.next = 11, s.prepareOnboard();

                  case 11:
                    return t.next = 13, t.sent;

                  case 13:
                    t.next = 23;
                    break;

                  case 15:
                    if ("user" !== s.data.onboard.step) {
                        t.next = 23;
                        break;
                    }
                    if (s.log("onboarded"), i = [], a.default.each(s.data.onboard.followed, function(e, r) {
                        e && i.push(r);
                    }), !(i.length > 0)) {
                        t.next = 22;
                        break;
                    }
                    return t.next = 22, o.api.get("v1/user.subscribe", {
                        uids: i.join(",")
                    });

                  case 22:
                    wx.reLaunch({
                        url: getApp().getConfig().homePage
                    });

                  case 23:
                  case "end":
                    return t.stop();
                }
            }, t, s);
        }))();
    },
    loginOnboard: function(e) {
        var r = this;
        return t(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!r.data.needLogin) {
                        t.next = 5;
                        break;
                    }
                    return t.next = 3, r.login(e);

                  case 3:
                    if (t.sent) {
                        t.next = 5;
                        break;
                    }
                    return t.abrupt("return");

                  case 5:
                    getApp().globalData.userInfo.phone ? wx.reLaunch({
                        url: getApp().getConfig().homePage
                    }) : wx.redirectTo({
                        url: "/pages/account/login?source=onboard"
                    });

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    }
};