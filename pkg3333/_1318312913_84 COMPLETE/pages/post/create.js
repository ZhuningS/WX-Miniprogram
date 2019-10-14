function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function i(s, n) {
                try {
                    var r = t[s](n), o = r.value;
                } catch (e) {
                    return void a(e);
                }
                if (!r.done) return Promise.resolve(o).then(function(e) {
                    i("next", e);
                }, function(e) {
                    i("throw", e);
                });
                e(o);
            }
            return i("next");
        });
    };
}

var a = e(require("../../libs/regenerator-runtime.js")), i = require("../../protocol/io"), s = e(require("../../utils/extend-page")), n = e(require("../../mixins/actions")), r = e(require("../../mixins/logger")), o = e(require("../../mixins/realtime")), c = e(require("../../mixins/vote")), l = e(require("../../mixins/post")), d = e(require("../../mixins/hook"));

Page((0, s.default)({
    data: {
        selectedArticle: void 0,
        selectedImages: [],
        selectedAgent: 0,
        vote: void 0,
        tips: []
    },
    mid: void 0,
    articleTicket: void 0,
    voteTicket: void 0,
    videoTicket: void 0,
    tipTicket: void 0,
    onLoad: function(e) {
        var i = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    i.mid = e.id, i.ticket = e.ticket, i.magazineTicket = e.magazineTicket, i.setData({
                        gid: i.mid
                    }), i.pageShown("/groups/" + i.mid + "/create", e.content), wx.setNavigationBarTitle({
                        title: "发帖"
                    });

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t, i);
        }))();
    },
    onShow: function() {
        if (this.ticket) {
            var e = getApp().transfer().take(this.ticket);
            this.topicTicketData = e, this.previousPage = {
                from: e.from,
                ticket: this.ticket
            }, this.setData({
                previousPage: this.previousPage
            }), this.ticket = null, e && e.docIdString && this.setData({
                selectedArticle: e
            }), this.loadGroupInfo();
        } else if (this.articleTicket) {
            var t = getApp().transfer().take(this.articleTicket);
            this.articleTicket = void 0, t && t.docIdString && this.setData({
                selectedArticle: t
            });
        } else if (this.videoTicket) {
            var a = getApp().transfer().take(this.videoTicket);
            this.videoTicket = void 0, a && a.selectedVideo && this.setData({
                selectedVideo: a
            });
        } else if (this.voteTicket) {
            var i = getApp().transfer().take(this.voteTicket);
            this.voteTicket = void 0, this.initVoteStatus(i), i && i.id && this.setData({
                vote: i
            }), this.loadGroupInfo();
        } else if (this.data.vote) this.initVoteStatus(this.data.vote), this.setData({
            vote: this.data.vote
        }), this.loadGroupInfo(); else if (this.tipTicket) {
            var s = getApp().transfer().take(this.tipTicket);
            this.tipTicket = void 0, s && s.length && this.setData({
                tips: s
            });
        } else this.loadGroupInfo();
    },
    loadGroupInfo: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var s, n, r;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, wx.showLoading(), t.next = 4, i.api.get("v1/magazine.info", {
                        mid: e.mid
                    });

                  case 4:
                    s = t.sent, n = s.data.events[0].magazineInfo, r = [ {
                        token: getApp().getUserToken(),
                        uid: getApp().getUserId(),
                        name: getApp().globalData.userInfo.name,
                        avatar: getApp().globalData.userInfo.avatar,
                        desc: getApp().globalData.userInfo.desc
                    } ], n.agencies && (r = r.concat(n.agencies.map(function(e) {
                        return e.agent;
                    }))), e.data.selectedAgent >= r.length && (e.data.selectedAgent = 0), e.setData({
                        agents: r,
                        postConfig: n.config.basicConfig.postConfig,
                        relation: n.magazine.relation
                    }), t.next = 15;
                    break;

                  case 12:
                    t.prev = 12, t.t0 = t.catch(0), console.log("fetch group info failed", t.t0);

                  case 15:
                    return t.prev = 15, wx.hideLoading(), t.finish(15);

                  case 18:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 0, 12, 15, 18 ] ]);
        }))();
    },
    selectImage: function() {
        var e = this, t = this.data.selectedImages.length;
        wx.chooseImage({
            count: 9 - t,
            success: function(t) {
                e.setData({
                    selectedImages: e.data.selectedImages.concat(t.tempFilePaths)
                }), console.log("choose image", t);
            }
        });
    },
    unselectImage: function(e) {
        var t = e.currentTarget.dataset.index;
        this.data.selectedImages.splice(t, 1), this.setData({
            selectedImages: this.data.selectedImages
        });
    },
    uploadImages: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var i, s, n, r, o;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return i = e.data.selectedImages, s = i.length, n = new Array(s), r = [], console.log("scan images", i), 
                    o = new Array(s), i.map(function(t, a) {
                        o[a] = e.uploadImage(t, a, n, r);
                    }), t.next = 9, Promise.all(o);

                  case 9:
                    if (console.log("upload images", n, r), !(r.length > 0)) {
                        t.next = 12;
                        break;
                    }
                    throw "部分图片无法上传，请重试";

                  case 12:
                    return t.abrupt("return", n);

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    uploadImage: function(e, s, n, r) {
        var o = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.abrupt("return", new Promise(function(t) {
                        var a = {
                            file: e,
                            callback: function(e, a) {
                                console.log("upload image", e, a), "success" === e ? (n[s] = {
                                    url: "http://statics01.qingmang.mobi/" + a.key
                                }, t()) : (r.push(o.file), t());
                            }
                        };
                        a.task = i.upload.upload(e, a.callback);
                    }));

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, o);
        }))();
    },
    selectVideo: function() {
        this.videoTicket = getApp().transfer().put({}), wx.navigateTo({
            url: "/pages/video/select?ticket=" + this.videoTicket
        });
    },
    deleteVideo: function() {
        this.setData({
            selectedVideo: null
        });
    },
    selectArticle: function() {
        this.articleTicket = getApp().transfer().put({}), wx.navigateTo({
            url: "/pages/article/picker?ticket=" + this.articleTicket
        });
    },
    deleteArticle: function() {
        this.setData({
            selectedArticle: null
        });
    },
    createVote: function() {
        this.voteTicket = getApp().transfer().put({}), wx.navigateTo({
            url: "/pages/vote/initiate?ticket=" + this.voteTicket
        });
    },
    deleteVote: function() {
        this.setData({
            vote: null
        });
    },
    createTips: function() {
        this.tipTicket = getApp().transfer().put({
            tips: this.data.tips
        }), wx.navigateTo({
            url: "/pages/post/quickReply?ticket=" + this.tipTicket
        });
    },
    changeRole: function(e) {
        this.setData({
            selectedAgent: e.detail.value
        });
    },
    post: function(e) {
        var s = this;
        return t(a.default.mark(function t() {
            var n, r, o, c, l, d, u, p, g, f, h, v, k, m;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (console.log("post", e), t.prev = 1, wx.showLoading(), n = {}, !(r = s.data.postConfig.image) || "forbidden" !== r) {
                        t.next = 9;
                        break;
                    }
                    n.images = [], t.next = 17;
                    break;

                  case 9:
                    if ("must" !== r || 0 !== s.data.selectedImages.length) {
                        t.next = 13;
                        break;
                    }
                    throw "需要选择至少一张图片";

                  case 13:
                    if (!r || "forbidden" === r) {
                        t.next = 17;
                        break;
                    }
                    return t.next = 16, s.uploadImages(e.detail.value.text);

                  case 16:
                    n.images = t.sent;

                  case 17:
                    if (!(o = s.data.postConfig.article) || "forbidden" === o) {
                        t.next = 22;
                        break;
                    }
                    if ("must" !== o || s.data.selectedArticle) {
                        t.next = 21;
                        break;
                    }
                    throw "需要添加要分享的文章";

                  case 21:
                    n.article = s.data.selectedArticle;

                  case 22:
                    if (n.content = e.detail.value.text.trim(), s.data.vote && (n.vote = {
                        id: s.data.vote.id
                    }), s.data.selectedVideo && (n.videos = [ {
                        url: s.data.selectedVideo.selectedVideo
                    } ]), "admin" !== s.data.relation.role.type || !s.data.tips.length) {
                        t.next = 31;
                        break;
                    }
                    if (c = s.data.tips, 0 !== (l = c.filter(function(e) {
                        return "" !== e;
                    })).length) {
                        t.next = 30;
                        break;
                    }
                    return t.abrupt("return");

                  case 30:
                    n.tips = l;

                  case 31:
                    if (0 !== n.images.length || "" !== n.content || n.vote || n.videos || n.article) {
                        t.next = 33;
                        break;
                    }
                    throw "请添加内容";

                  case 33:
                    return d = !!e.detail.value.notify && e.detail.value.notify.length > 0, t.next = 36, 
                    i.api.get("v1/post.create", {
                        mid: s.mid,
                        notify: d,
                        meta: JSON.stringify(n)
                    });

                  case 36:
                    if (!(u = t.sent).data.error || "legalBlocked" !== u.data.error.type) {
                        t.next = 39;
                        break;
                    }
                    throw "发布内容含有敏感词，请检查后重试";

                  case 39:
                    p = u.data.events, s.initPostStatus(p), p[0].post.vote && (p[0].post.vote.needShare = !0), 
                    s.sendSocketMessage("post.create", 1, u.data.post), s.previousPage ? (g = s.previousPage, 
                    s.previousPage = null, getApp().transfer().callback(g.ticket, {
                        posted: !0
                    }), f = s.topicTicketData, h = f.docIdString, v = f.magazineId, "ripple-card" === (k = f.from) ? wx.redirectTo({
                        url: "/pages/article/article?id=" + h + "&mid=" + v + "&jump=true"
                    }) : wx.navigateBack()) : s.magazineTicket && (getApp().transfer().callback(s.magazineTicket, {
                        posted: !0
                    }), s.magazineTicket = null, wx.navigateBack()), t.next = 52;
                    break;

                  case 46:
                    t.prev = 46, t.t0 = t.catch(1), console.log("post failed", t.t0), m = "未知错误，请重试", 
                    "string" == typeof t.t0 ? m = t.t0 : t.t0.data && (m = t.t0.data.error.desc), s.showModalDialog(void 0, "发布失败", m, "知道了", void 0);

                  case 52:
                    return t.prev = 52, wx.hideLoading(), t.finish(52);

                  case 55:
                  case "end":
                    return t.stop();
                }
            }, t, s, [ [ 1, 46, 52, 55 ] ]);
        }))();
    }
}, n.default, o.default, l.default, c.default, r.default, d.default));