function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}

function o(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, o) {
            function s(n, i) {
                try {
                    var r = e[n](i), a = r.value;
                } catch (t) {
                    return void o(t);
                }
                if (!r.done) return Promise.resolve(a).then(function(t) {
                    s("next", t);
                }, function(t) {
                    s("throw", t);
                });
                t(a);
            }
            return s("next");
        });
    };
}

var s = t(require("../libs/regenerator-runtime.js")), n = t(require("../libs/underscore")), i = require("../protocol/io"), r = t(require("../utils/util"));

module.exports = {
    loadVoteData: function() {
        var t = this;
        return o(s.default.mark(function e() {
            var o;
            return s.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, i.api.get("v1/mina.vote.get", {
                        vote_id: 8
                    });

                  case 3:
                    o = t.sent, console.log("load vote data success", o), t.next = 10;
                    break;

                  case 7:
                    t.prev = 7, t.t0 = t.catch(0), console.log("load vote data fail", t.t0);

                  case 10:
                    return t.prev = 10, t.finish(10);

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, e, t, [ [ 0, 7, 10, 12 ] ]);
        }))();
    },
    loadVoteResult: function() {
        var t = this;
        return o(s.default.mark(function e() {
            var o;
            return s.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, i.api.get("v1/mina.vote.result", {
                        vote_id: 9
                    });

                  case 3:
                    o = t.sent, console.log("load vote data success", o), t.next = 10;
                    break;

                  case 7:
                    t.prev = 7, t.t0 = t.catch(0), console.log("load vote data fail", t.t0);

                  case 10:
                    return t.prev = 10, t.finish(10);

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, e, t, [ [ 0, 7, 10, 12 ] ]);
        }))();
    },
    submitVote: function(t) {
        var e = this;
        return o(s.default.mark(function o() {
            var n;
            return s.default.wrap(function(o) {
                for (;;) switch (o.prev = o.next) {
                  case 0:
                    return o.next = 2, i.api.get("v1/post.vote.submit", {
                        vote_id: e.data.post.vote.id,
                        option_ids: t,
                        refer_uid: parseInt(e.refererUid) || void 0
                    });

                  case 2:
                    return n = o.sent, o.abrupt("return", n);

                  case 4:
                  case "end":
                    return o.stop();
                }
            }, o, e);
        }))();
    },
    onTapSelectOption: function(t) {
        if (this.data.relation.enableDiscuss) {
            var o = this.data.post.vote, s = t.currentTarget.dataset, n = s.id, i = s.isExpired, r = s.hasVoted;
            i ? this.showModalDialog(void 0, "参与失败", "已结束", "知道了") : r ? this.showModalDialog(void 0, "参与失败", "不能重复参与", "知道了") : "single" === o.optionType ? (o.options.forEach(function(t) {
                t.selected = !1, t.id === n && (t.selected = !0);
            }), this.onSubmitVote()) : (o.options.forEach(function(t) {
                t.id === n && (t.selected = !t.selected);
            }), this.setData(e({}, "post.vote.options", o.options)));
        } else this.showModalDialog(void 0, this.data.config.actions.vote + "失败", "你不是会员，暂无" + this.data.config.actions.vote + "权限", "知道了");
    },
    onSubmitVote: function() {
        var t = this;
        return o(s.default.mark(function e() {
            var o, n, i, r;
            return s.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (e.prev = 0, wx.showLoading({
                        mask: !0
                    }), o = t.data.post.vote, n = [], !o.isExpired) {
                        e.next = 6;
                        break;
                    }
                    return e.abrupt("return");

                  case 6:
                    if (o.options.forEach(function(t) {
                        t.selected && n.push(t.id);
                    }), i = void 0, 0 !== n.length) {
                        e.next = 12;
                        break;
                    }
                    throw new Error("至少选一项");

                  case 12:
                    i = 1 === n.length ? n[0] : n.join(",");

                  case 13:
                    return e.next = 15, t.submitVote(i);

                  case 15:
                    return r = e.sent, console.log("tap submit vote 成功", r), e.next = 19, t.loadPost();

                  case 19:
                    wx.hideLoading(), t.showCommentTip && t.showCommentTip(), e.next = 27;
                    break;

                  case 23:
                    e.prev = 23, e.t0 = e.catch(0), console.log(t.data.config.actions.vote + "失败", e.t0), 
                    t.showModalDialog(void 0, t.data.config.actions.vote + "失败", e.t0.message, "知道了");

                  case 27:
                    return e.prev = 27, wx.hideLoading(), e.finish(27);

                  case 30:
                  case "end":
                    return e.stop();
                }
            }, e, t, [ [ 0, 23, 27, 30 ] ]);
        }))();
    },
    onTapVoteUsers: function(t) {
        this.data.post.vote.isAnonymous || this.navigateTo(t);
    },
    initVoteStatus: function(t) {
        if (console.log("start init Vote status"), t.displayDeadline = r.default.formatDeadlineString(new Date(t.deadline)), 
        t.isExpired = new Date().getTime() > t.deadline, t.displayAnonymous = t.isAnonymous ? "匿名" : "实名", 
        t.displayMuiti = "single" === t.optionType ? "单选" : "多选", t.resultStatistics) {
            if (n.default.each(t.options, function(e) {
                var o = e.id;
                if (e.disabled = t.relation.voted, e.isVoted = !1, e.selected = !1, t.resultStatistics.myOptionIds.forEach(function(t) {
                    o === t && (e.isVoted = !0, e.selected = !0);
                }), t.relation.voted || t.isExpired) {
                    var s = t.resultStatistics.totalVoteUser;
                    0 === s ? (e.voteNumber = 0, e.percentage = 0) : (e.voteNumber = t.resultStatistics.optionStat["" + o] || 0, 
                    e.percentage = void 0 !== t.resultStatistics.optionStat["" + o] ? Math.floor(t.resultStatistics.optionStat["" + o] / s * 100) : 0), 
                    e.users = [], t.resultStatistics.myCanvassedUsersOption.forEach(function(t) {
                        t.optionIds.forEach(function(s) {
                            s === o && e.users.push(t.user);
                        });
                    }), t.resultStatistics.latestVoteUsersOption.forEach(function(t) {
                        t.optionIds.indexOf(e.id) > -1 && t.user.uid !== getApp().getUserId() && e.users.every(function(e) {
                            return e.uid !== t.user.uid;
                        }) && e.users.push(t.user);
                    });
                } else e.percentage = 0;
            }), "" === t.options[0].cover && 2 === t.options.length) if (t.relation.voted || t.isExpired) {
                var e = t.options[0].voteNumber + t.options[1].voteNumber;
                0 === e ? t.options[0].percentage = 50 : (t.options[0].percentage = Math.floor(t.options[0].voteNumber / e * 100), 
                t.options[1].percentage = Math.floor(t.options[1].voteNumber / e * 100));
            } else t.options[0].percentage = "unvoted", t.options[1].percentage = "unvoted";
            var o = [];
            t.resultStatistics.myCanvassedUsersOption.forEach(function(t) {
                o.push(t.user);
            }), t.resultStatistics.latestVoteUsersOption.forEach(function(t) {
                t.user.uid !== getApp().getUserId() && o.push(t.user);
            }), t.userList = o;
        }
    }
};