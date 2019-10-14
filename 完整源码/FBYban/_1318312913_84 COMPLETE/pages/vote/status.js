function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, r) {
            function s(a, n) {
                try {
                    var o = e[a](n), u = o.value;
                } catch (t) {
                    return void r(t);
                }
                if (!o.done) return Promise.resolve(u).then(function(t) {
                    s("next", t);
                }, function(t) {
                    s("throw", t);
                });
                t(u);
            }
            return s("next");
        });
    };
}

var r = t(require("../../libs/regenerator-runtime.js")), s = require("../../protocol/io"), a = t(require("../../utils/extend-page")), n = t(require("../../mixins/actions")), o = t(require("../../mixins/hook"));

Page((0, a.default)({
    data: {
        userList: []
    },
    onLoad: function(t) {
        var s = this;
        return e(r.default.mark(function e() {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    wx.setNavigationBarTitle({
                        title: "详情"
                    }), s.voteId = t.voteId, s.postId = t.postId, t.voteId ? s.loadStatus(t.voteId) : t.postId && s.loadStatusFromPost(t.postId);

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, s);
        }))();
    },
    loadStatus: function(t) {
        var a = this;
        return e(r.default.mark(function e() {
            var n, o;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, s.api.get("v1/post.vote.result", {
                        vote_id: t
                    });

                  case 3:
                    n = e.sent, o = n.data.events[0].vote, a.initTopCanvasser(o), e.next = 11;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(0), a.loadStatusFromPost(a.postId);

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, a, [ [ 0, 8 ] ]);
        }))();
    },
    loadStatusFromPost: function(t) {
        var a = this;
        return e(r.default.mark(function e() {
            var n, o;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, s.api.get("v1/post.get", {
                        post_id: t
                    });

                  case 3:
                    n = e.sent, console.log("post data", n), o = n.data.events[0].post.vote, a.initTopCanvasser(o), 
                    e.next = 12;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(0), console.log("err", e.t0);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, a, [ [ 0, 9 ] ]);
        }))();
    },
    initTopCanvasser: function(t) {
        var e = t.resultStatistics.topCanvasser, r = e.length ? e[0].canvassedUserCount : 0, s = {
            user: JSON.parse(JSON.stringify(getApp().globalData.userInfo)),
            canvassedUserCount: 0
        }, a = !1;
        e.forEach(function(t) {
            t.percentage = Math.floor(t.canvassedUserCount / r * 100), t.user.uid === s.user.uid && (t.user.name = "我", 
            a = !0);
        }), a || (s.percentage = Math.floor(t.resultStatistics.myCanvassedUserCount / r * 100), 
        s.canvassedUserCount = t.resultStatistics.myCanvassedUserCount, s.myself = !0, s.user.name = "我", 
        e.push(s)), this.setData({
            userList: e
        });
    }
}, n.default, o.default));