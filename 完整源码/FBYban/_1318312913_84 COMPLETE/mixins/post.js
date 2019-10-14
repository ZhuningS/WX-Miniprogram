function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, i) {
                try {
                    var a = t[o](i), u = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(u).then(function(e) {
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

var r = e(require("../libs/regenerator-runtime.js")), n = e(require("../libs/underscore")), o = require("../protocol/io"), i = require("../utils/dev"), a = e(require("../utils/util"));

module.exports = {
    joinTicket: void 0,
    pinFlag: 16,
    previewFlag: 32,
    markFlag: 64,
    onLoad: function() {
        var e = this;
        return t(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.initLogin) {
                        t.next = 3;
                        break;
                    }
                    return t.next = 3, e.initLogin();

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    onShow: function() {
        var e = this;
        return t(r.default.mark(function t() {
            var n;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.joinTicket) {
                        t.next = 8;
                        break;
                    }
                    if (n = getApp().transfer().take(e.joinTicket), e.joinTicket = void 0, console.log("paid for group", n), 
                    !n || !n.paid) {
                        t.next = 8;
                        break;
                    }
                    return t.next = 7, o.api.get("v1/group.join", {
                        mid: n.group
                    });

                  case 7:
                    e.reload ? e.reload(!0) : wx.reLaunch({
                        url: getApp().getConfig().homePage
                    });

                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    joinGroup: function(e) {
        var n = this;
        return t(r.default.mark(function t() {
            var a, u, s;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (console.log("join group", e), !getApp().isAnonymous()) {
                        t.next = 4;
                        break;
                    }
                    return t.next = 4, n.login(e);

                  case 4:
                    if (!getApp().isAnonymous()) {
                        t.next = 7;
                        break;
                    }
                    return n.showModalDialog(void 0, "需要授权", "需要先完成授权才能加入", "知道了", void 0, void 0), 
                    t.abrupt("return");

                  case 7:
                    return a = e.currentTarget.dataset, u = a.groupId, s = a.groupType, t.prev = 8, 
                    wx.showLoading(), t.next = 12, o.api.get("v1/group.join", {
                        mid: u
                    });

                  case 12:
                    n.reload ? n.reload() : wx.reLaunch({
                        url: getApp().getConfig().homePage
                    }), t.next = 19;
                    break;

                  case 15:
                    t.prev = 15, t.t0 = t.catch(8), (0, i.errorReporter)("join group failed", t.t0), 
                    "pay" === s && (n.joinTicket = getApp().transfer().put({
                        group: u
                    }), wx.navigateTo({
                        url: "/pages/product/order?mid=" + u + "&callback=" + n.joinTicket
                    }));

                  case 19:
                    return t.prev = 19, wx.hideLoading(), t.finish(19);

                  case 22:
                  case "end":
                    return t.stop();
                }
            }, t, n, [ [ 8, 15, 19, 22 ] ]);
        }))();
    },
    initPostStatus: function(e) {
        var o = this;
        return t(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    n.default.each(e, function(e) {
                        if ("post" === e.type) {
                            var t = 0;
                            e.post.isPin && (t |= o.pinFlag), e.post.isPreview && (t |= o.previewFlag), e.isMarked && (t |= o.markFlag), 
                            t > 0 && o.setItemStatus("post-" + e.post.id, t), e.post.isSelf = e.post.uid === getApp().getUserId(), 
                            e.post.date = a.default.formatTime(e.post.createdTimestamp), e.postRelation && (e.post.relation = e.postRelation), 
                            e.postOwnerRole && (e.post.user.role = e.postOwnerRole), e.post.vote && o.initVoteStatus(e.post.vote);
                        } else if ("comment" === e.type) {
                            console.log("comment", e);
                            var r = 0;
                            e.isMarked && (r |= o.markFlag), r > 0 && o.setItemStatus("comment-" + e.comment.id, r), 
                            e.comment.isSelf = e.comment.uid === getApp().getUserId(), e.comment.enableMark = !1, 
                            e.comment.date = a.default.formatTime(e.comment.createdTime);
                        }
                    });

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, o);
        }))();
    }
};