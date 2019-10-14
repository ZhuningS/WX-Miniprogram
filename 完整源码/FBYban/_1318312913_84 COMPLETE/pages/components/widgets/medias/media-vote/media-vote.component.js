function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, o) {
            function i(s, n) {
                try {
                    var r = e[s](n), a = r.value;
                } catch (t) {
                    return void o(t);
                }
                if (!r.done) return Promise.resolve(a).then(function(t) {
                    i("next", t);
                }, function(t) {
                    i("throw", t);
                });
                t(a);
            }
            return i("next");
        });
    };
}

function o(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}

var i = t(require("../../../../../libs/regenerator-runtime.js")), s = require("../../../../../libs/mp-enhancers/index"), n = t(require("../../../../../libs/classnames")), r = require("../../../../../config/index"), a = t(require("../../../../../utils/util")), u = require("../../../../../utils/dev"), d = require("../../../../../protocol/io"), p = getApp(), c = (0, 
u.debugCreator)("media-vote", !1);

Component((0, s.componentOptionsEnhancer)({
    properties: {
        voteData: {
            type: Object
        },
        inPostPage: {
            type: Boolean
        },
        postEventId: {
            type: String
        },
        relation: {
            type: Object
        }
    },
    attached: function() {
        this.page = p.getContextPage();
    },
    computed: {
        vote: function() {
            return this._parseVoteData(this.data.voteData);
        },
        rootClassNames: function() {
            return (0, n.default)("meta-vote", "com-class");
        }
    },
    methods: {
        showModalDialog: function() {
            for (var t = arguments.length, e = Array(t), o = 0; o < t; o++) e[o] = arguments[o];
            this.triggerEvent("show-modal-dialog", e, {
                bubbles: !0,
                composed: !0
            });
        },
        handleTapSelectOption: function(t) {
            if (c("vote select option", t), !this.data.inPostPage) return c("当前不是详情页，不可投票"), 
            void this.triggerEvent("tap", {}, {
                bubbles: !0,
                composed: !0
            });
            var e = this.data.vote, i = t.currentTarget.dataset, s = i.id, n = i.isExpired, r = i.hasVoted;
            this.data.vote.relation.enableDiscuss ? n ? this.showModalDialog(void 0, "参与失败", "已结束", "知道了") : r ? this.showModalDialog(void 0, "参与失败", "不能重复参与", "知道了") : "single" === e.optionType ? (e.options.forEach(function(t) {
                t.selected = !1, t.id === s && (t.selected = !0);
            }), this._onSubmitVote()) : (e.options.forEach(function(t) {
                t.id === s && (t.selected = !t.selected);
            }), this.setData(o({}, "vote.options", e.options))) : c("没有权限");
        },
        handleUserNumberTap: function(t) {
            if (!this.data.inPostPage) return c("当前不是详情页，不可投票"), void this.triggerEvent("tap", {}, {
                bubbles: !0,
                composed: !0
            });
            var e = t.currentTarget.dataset, o = e.voteId, i = e.optionId;
            this.data.vote.isAnonymous || wx.navigateTo({
                url: "/pages/vote/optionUsers?voteId=" + o + "&optionId=" + i
            });
        },
        handleUserAvatarTap: function(t) {
            if (!this.data.inPostPage) return c("当前不是详情页，不可跳转"), void this.triggerEvent("tap", {}, {
                bubbles: !0,
                composed: !0
            });
            var e = t.currentTarget.dataset.uid;
            wx.navigateTo({
                url: "/pages/profile/user?uid=" + e
            });
        },
        handleUserListTap: function() {
            if (!this.data.inPostPage) return c("当前不是详情页，不可跳转"), void this.triggerEvent("tap", {}, {
                bubbles: !0,
                composed: !0
            });
            var t = this.data.voteData.id, e = this.page.postId;
            wx.navigateTo({
                url: "/pages/vote/status?voteId=" + t + "&postId=" + e
            });
        },
        _onSubmitVote: function() {
            var t = this;
            return e(i.default.mark(function e() {
                var o, s, n;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, wx.showLoading({
                            mask: !0
                        }), o = t.data.vote, s = [], !o.isExpired) {
                            e.next = 6;
                            break;
                        }
                        return e.abrupt("return");

                      case 6:
                        if (o.options.forEach(function(t) {
                            t.selected && s.push(t.id);
                        }), n = void 0, 0 !== s.length) {
                            e.next = 12;
                            break;
                        }
                        throw new Error("至少选一项");

                      case 12:
                        n = 1 === s.length ? s[0] : s.join(",");

                      case 13:
                        return e.next = 15, t._submitVote(n);

                      case 15:
                        t.triggerEvent("reload-post-event", {}, {
                            bubbles: !0,
                            composed: !0
                        }), e.next = 22;
                        break;

                      case 18:
                        e.prev = 18, e.t0 = e.catch(0), c(r.config.actions.vote + "失败", e.t0), t.showModalDialog(void 0, r.config.actions.vote + "失败", e.t0.message, "知道了");

                      case 22:
                        return e.prev = 22, wx.hideLoading(), e.finish(22);

                      case 25:
                      case "end":
                        return e.stop();
                    }
                }, e, t, [ [ 0, 18, 22, 25 ] ]);
            }))();
        },
        _submitVote: function(t) {
            var o = this;
            return e(i.default.mark(function e() {
                var s;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, d.api.get("v1/post.vote.submit", {
                            vote_id: o.data.vote.id,
                            option_ids: t,
                            refer_uid: parseInt(o.refererUid) || void 0
                        });

                      case 2:
                        return s = e.sent, e.abrupt("return", s);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, o);
            }))();
        },
        _parseVoteData: function() {
            var t = this.data.voteData, e = this.data.relation;
            c("voteData: ", t, e);
            var o = {
                id: t.id,
                title: t.title,
                config: r.config,
                optionType: t.optionType,
                displayOptionType: "single" === t.optionType ? "单选" : "多选",
                isAnonymous: t.isAnonymous,
                displayAnonymous: t.isAnonymous ? "匿名" : "实名",
                isExpired: Date.now() > t.deadline,
                displayDeadline: a.default.formatDeadlineString(new Date(t.deadline)),
                description: t.description,
                relation: Object.assign({}, t.relation, e),
                totalVoteNumber: t.resultStatistics.totalVoteUser,
                userList: t.resultStatistics.latestVoteUsersOption
            };
            if (o.options = t.options.map(function(e) {
                var i = e.id;
                if (e.disabled = t.relation.voted, e.isVoted = !1, e.selected = !1, t.resultStatistics.myOptionIds.forEach(function(t) {
                    i === t && (e.isVoted = !0, e.selected = !0);
                }), t.relation.voted || o.isExpired) {
                    var s = t.resultStatistics.totalVoteUser;
                    0 === s ? (e.voteNumber = 0, e.percentage = 0) : (e.voteNumber = t.resultStatistics.optionStat["" + i] || 0, 
                    e.percentage = void 0 !== t.resultStatistics.optionStat["" + i] ? Math.floor(t.resultStatistics.optionStat["" + i] / s * 100) : 0), 
                    e.users = [], t.resultStatistics.myCanvassedUsersOption.forEach(function(t) {
                        t.optionIds.forEach(function(o) {
                            o === i && e.users.push(t.user);
                        });
                    }), t.resultStatistics.latestVoteUsersOption.forEach(function(t) {
                        if (t.optionIds.indexOf(e.id) > -1) {
                            var o = t.user.uid !== getApp().getUserId(), i = !0;
                            e.users.forEach(function(e) {
                                e.uid === t.user.uid && (i = !1);
                            }), o && i && e.users.push(t.user);
                        }
                    });
                } else e.voteNumber = 0, e.percentage = 0;
                return e;
            }), "" === o.options[0].cover && 2 === o.options.length) if (o.relation.voted || o.isExpired) {
                var i = o.options[0].voteNumber + o.options[1].voteNumber;
                0 === i ? o.options[0].percentage = 50 : (o.options[0].percentage = Math.floor(o.options[0].voteNumber / i * 100), 
                o.options[1].percentage = Math.floor(o.options[1].voteNumber / i * 100));
            } else o.options[0].percentage = "unvoted", o.options[1].percentage = "unvoted";
            var s = [];
            return t.resultStatistics.myCanvassedUsersOption.forEach(function(t) {
                s.push(t.user);
            }), t.resultStatistics.latestVoteUsersOption.forEach(function(t) {
                var e = t.user.uid !== getApp().getUserId(), o = !0;
                s.forEach(function(e) {
                    e.uid === t.user.uid && (o = !1);
                }), o && e && s.push(t.user);
            }), c("vote data:", o), o;
        }
    }
}));