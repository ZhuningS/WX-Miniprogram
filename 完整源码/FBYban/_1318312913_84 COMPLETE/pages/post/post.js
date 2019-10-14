function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
    return Array.from(e);
}

function n(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, o) {
                try {
                    var s = t[a](o), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
            }
            return r("next");
        });
    };
}

var r = e(require("../../libs/regenerator-runtime")), a = e(require("../../libs/underscore")), o = require("../../protocol/io"), s = require("../../services/warehouse/index"), i = require("../../services/auth"), c = require("../../config/index"), u = require("../../mixins/index"), d = require("../../utils/dev"), l = require("../../utils/data-processor"), p = e(require("../../utils/extend-page")), f = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
}, m = function() {
    function e(e, t) {
        var n = [], r = !0, a = !1, o = void 0;
        try {
            for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), 
            !t || n.length !== t); r = !0) ;
        } catch (e) {
            a = !0, o = e;
        } finally {
            try {
                !r && i.return && i.return();
            } finally {
                if (a) throw o;
            }
        }
        return n;
    }
    return function(t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), v = {
    data: {
        postEvent: void 0,
        selectedImages: [],
        loading: !0,
        commentRefer: void 0,
        commentTip: void 0,
        showTip: !1
    },
    noteId: void 0,
    postId: void 0,
    shareConfig: void 0,
    autoReply: !1,
    onLoad: function(e) {
        var t = this;
        return n(r.default.mark(function n() {
            var a, o, s, i;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return t.noteId = e.nid, t.postId = e.id, t.magazineId = e.mid, t.autoReply = e.reply, 
                    a = e.commentId, o = e.userId, s = e.name, console.log(e), a && o && s && (i = {
                        detail: {
                            commentId: a,
                            userId: o,
                            name: decodeURIComponent(s)
                        }
                    }, t.handleReplyCommentEvent(i)), t.refererUid = e.uid, t.pageShown("/posts/" + t.postId + "/", e.content), 
                    wx.setNavigationBarTitle({
                        title: ""
                    }), n.next = 12, t.init();

                  case 12:
                    t.autoReply && setTimeout(function() {
                        t.setData({
                            autoReply: !0
                        }), t.autoReply = !1;
                    }, 300);

                  case 13:
                  case "end":
                    return n.stop();
                }
            }, n, t);
        }))();
    },
    reload: function(e) {
        var t = this;
        return n(r.default.mark(function n() {
            var a, o, s;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if ((a = t.data.magazineInfo) || !e) {
                        n.next = 7;
                        break;
                    }
                    return n.next = 4, t.loadMagazine();

                  case 4:
                    o = n.sent, s = {
                        magazineInfo: o,
                        magazine: o.magazine,
                        enterConfig: o.config && o.config.enterAction
                    }, t.setData(s);

                  case 7:
                    t.onPullDownRefresh();

                  case 8:
                  case "end":
                    return n.stop();
                }
            }, n, t);
        }))();
    },
    onPullDownRefresh: function() {
        this.init();
    },
    init: function() {
        var e = this;
        return n(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, e.setData({
                        loading: !0
                    }), console.log("start load post"), t.next = 5, e.loadMagazine();

                  case 5:
                    return t.next = 7, e.loadPost();

                  case 7:
                    return t.next = 9, e.loadReplies();

                  case 9:
                    return t.prev = 9, e.setData({
                        loading: !1
                    }), wx.stopPullDownRefresh(), t.finish(9);

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 0, , 9, 13 ] ]);
        }))();
    },
    loadMagazine: function() {
        var e = this;
        return n(r.default.mark(function t() {
            var n, a;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, o.api.get("v1/magazine.info", {
                        mid: e.magazineId
                    });

                  case 2:
                    n = t.sent, a = n.data.events[0].magazineInfo, e.setData({
                        magazineInfo: a,
                        magazine: a.magazine,
                        relation: a.magazine.relation
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadPost: function() {
        var e = this;
        return n(r.default.mark(function t() {
            var n, a, i, c, u, p;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, n = {}, e.postId ? n.post_id = e.postId : e.noteId && (n.note_id = e.noteId), 
                    t.next = 5, o.api.get("v1/post.get", n);

                  case 5:
                    return a = t.sent, i = (0, l.pretreatData)(a.data).events[0], t.next = 9, s.eventAPI.setEventEntities([ i ]);

                  case 9:
                    c = t.sent, u = m(c, 1), p = u[0], e.updateWarehouseRefs({
                        postEventId: p
                    }), e.setData({
                        mid: i.post.mid,
                        relation: i.postRelation
                    }), t.next = 19;
                    break;

                  case 16:
                    t.prev = 16, t.t0 = t.catch(0), (0, d.errorReporter)("load post info failed", t.t0);

                  case 19:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 0, 16 ] ]);
        }))();
    },
    loadReplies: function() {
        var e = this;
        return n(r.default.mark(function t() {
            var n, a, i;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (n = e.data.postEvent) {
                        t.next = 3;
                        break;
                    }
                    return t.abrupt("return");

                  case 3:
                    return t.prev = 3, t.next = 6, o.api.get("v1/post.comments.get", {
                        post_id: e.postId
                    });

                  case 6:
                    a = t.sent, i = (0, l.pretreatData)(a.data), s.eventAPI.setEventEntity(n.id, {
                        comments: i
                    }), t.next = 14;
                    break;

                  case 11:
                    t.prev = 11, t.t0 = t.catch(3), (0, d.errorReporter)("load post replies failed", t.t0);

                  case 14:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 3, 11 ] ]);
        }))();
    },
    hookCommentMenu: function(e) {
        var t = a.default.find(this.data.events, function(t) {
            return t.comment.id === e;
        });
        return !(!t || t.comment.user.uid !== getApp().getUserId()) || !(!this.data.post || "admin" !== this.data.post.relation.role.type);
    },
    selectImage: (0, i.requireAuthWrapper)(function() {
        var e = this;
        wx.chooseImage({
            count: 1,
            success: function(t) {
                e.setData({
                    selectedImages: e.data.selectedImages.concat(t.tempFilePaths)
                }), console.log("choose image", t), e.uploadImages();
            }
        });
    }),
    uploadImages: function() {
        var e = this;
        wx.showLoading();
        var t = [], n = [], r = this.data.selectedImages;
        console.log("scan images", r);
        var a = function() {
            console.log("upload images", t, n), t.length + n.length >= r.length && (wx.hideLoading(), 
            n.length > 0 && wx.showToast({
                title: n.length + "失败"
            }), e.doReply("image", t[0].url), e.setData({
                selectedImages: []
            }));
        }, s = [], i = !0, c = !1, u = void 0;
        try {
            for (var d, l = r[Symbol.iterator](); !(i = (d = l.next()).done); i = !0) {
                var p = d.value, f = {
                    file: p,
                    callback: function(r, o) {
                        console.log("upload image", r, o), "success" === r ? (t.push({
                            url: "http://statics01.qingmang.mobi/" + o.key
                        }), a()) : (n.push(e.file), a());
                    }
                };
                f.task = o.upload.upload(p, f.callback), s.push(f);
            }
        } catch (e) {
            c = !0, u = e;
        } finally {
            try {
                !i && l.return && l.return();
            } finally {
                if (c) throw u;
            }
        }
    },
    handleReplyCommentEvent: function(e) {
        var t = e.detail, n = t.commentId, r = t.userId, a = t.name;
        if (getApp().getUserId() === r) this.handleProcessCommentEvent(e); else {
            var o = getApp().globalData.userInfo, s = o && o.name || "我";
            this.setData({
                commentRefer: n,
                commentTip: s + "回复" + a + "："
            }), this.startReply();
        }
    },
    startReply: function() {
        var e = this;
        this.showInputDialog(this.data.commentTip ? this.data.commentTip : "我想讨论…", "发送", "取消", function(t) {
            t ? e.doReply("text", t) : e.setData({
                commentRefer: "",
                commentTip: ""
            });
        });
    },
    doReply: function(e, t) {
        var a = this;
        return n(r.default.mark(function n() {
            var s, i;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (s = function(e) {
                        return "" === e || new RegExp("^[ ]+$").test(e);
                    }, "text" !== e || !s(t)) {
                        n.next = 3;
                        break;
                    }
                    return n.abrupt("return");

                  case 3:
                    if (t) {
                        n.next = 5;
                        break;
                    }
                    return n.abrupt("return");

                  case 5:
                    return n.next = 7, o.api.get("v1/action.comment.add", {
                        mid: a.magazineId,
                        target_type: "post",
                        target_id: a.postId,
                        content: t,
                        comment_content_type: e,
                        reference_id: a.data.commentRefer ? a.data.commentRefer : ""
                    });

                  case 7:
                    i = n.sent, console.log("add comment finish", i), a.setData({
                        commentRefer: "",
                        commentTip: "",
                        commentContent: ""
                    }), a.addReplies(i.data.events), a.sendSocketMessage("post.reply", 1, {
                        events: i.data.events
                    });

                  case 12:
                  case "end":
                    return n.stop();
                }
            }, n, a);
        }))();
    },
    addReplies: function(e) {
        var o = this;
        return n(r.default.mark(function n() {
            var i, c, u;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (i = o.data.postEvent, 0 !== (c = a.default.filter(e, function(e) {
                        return "comment" === e.type && e.comment.targetId === o.postId;
                    })).length) {
                        n.next = 4;
                        break;
                    }
                    return n.abrupt("return");

                  case 4:
                    return u = f({}, i.comments, {
                        events: [].concat(t(i.comments.events), t(c))
                    }), n.next = 7, s.eventAPI.setEventEntity(i.id, {
                        comments: u,
                        commentCount: i.commentCount + c.length
                    });

                  case 7:
                    o.scrollToEnd();

                  case 8:
                  case "end":
                    return n.stop();
                }
            }, n, o);
        }))();
    },
    handleProcessCommentEvent: function(e) {
        var t = this;
        return n(r.default.mark(function a() {
            var i, c, u, d, l, p, m, v;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (i = t.data.postEvent, console.log("process comment event: ", e), c = e.detail, 
                    u = c.commentId, d = c.userId, l = getApp().getUserId() === d, p = t.data.relation.enableDelPost, 
                    l || p) {
                        a.next = 7;
                        break;
                    }
                    return a.abrupt("return");

                  case 7:
                    m = function() {
                        var e = i.comments, n = e.events.filter(function(e) {
                            return e.comment.id !== u;
                        });
                        s.eventAPI.setEventEntity(i.id, {
                            comments: f({}, e, {
                                events: n
                            }),
                            commentCount: i.commentCount - 1
                        }), o.api.get("v1/action.comment.remove", {
                            comment_id: u,
                            mid: t.data.mid
                        });
                    }, v = [ "删除" ], wx.showActionSheet({
                        itemList: v,
                        success: function() {
                            var e = n(r.default.mark(function e(n) {
                                return r.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        e.t0 = n.tapIndex, e.next = 0 === e.t0 ? 3 : 6;
                                        break;

                                      case 3:
                                        return e.next = 5, m();

                                      case 5:
                                        return e.abrupt("break", 6);

                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, t);
                            }));
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        }()
                    });

                  case 10:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    scrollToEnd: function() {
        var e = wx.createSelectorQuery();
        e.selectViewport().scrollOffset(), e.select("#post-end").boundingClientRect(), e.exec(function(e) {
            if (e) {
                var t = e[0].scrollTop + e[1].top - 60;
                console.log("TOC scroll to ", "#post-end", t, e), setTimeout(function() {
                    wx.pageScrollTo({
                        scrollTop: t
                    });
                }, 500);
            }
        });
    },
    sendReply: (0, i.requireAuthWrapper)(function() {
        var e = n(r.default.mark(function e(t) {
            var n;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    try {
                        this.hackForm(t);
                    } catch (e) {
                        (0, d.errorReporter)("run hackForm failed", e);
                    }
                    n = t.detail.value, "submit" === t.type && (n = n.input.trim()), this.doReply("text", n);

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }()),
    onTapQuickReply: function(e) {
        var t = e.currentTarget.dataset.text;
        this.doReply("text", t);
    },
    shareOptions: function() {
        return f({
            id: this.postId,
            mid: this.magazineId,
            type: "post"
        }, c.config.shareOptionsMap.post, this.shareConfig);
    },
    showCommentTip: function() {
        var e = this;
        this.setData({
            showTip: !0
        }), setTimeout(function() {
            e.closeCommentTip();
        }, 3e3);
    },
    closeCommentTip: function() {
        this.setData({
            showTip: !1
        });
    },
    receiveSocketMessage: function(e, t, n, r) {
        if ("post.reply" === t) {
            if (n.uid === getApp().getUserId()) return;
            this.addReplies(r.events);
        }
    },
    handleShowModalDialogEvent: function(e) {
        var n = e.detail;
        this.showModalDialog.apply(this, t(n));
    },
    selectComment: function(e) {
        var t = this;
        return n(r.default.mark(function n() {
            var o, s;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    o = e.currentTarget.dataset.commentId, (s = a.default.find(t.data.events, function(e) {
                        return e.comment.id === o;
                    })) && s.comment.user.uid !== getApp().getUserId() && (t.setData({
                        commentRefer: o,
                        commentTip: "回复" + s.comment.user.name + "："
                    }), t.startReply());

                  case 3:
                  case "end":
                    return n.stop();
                }
            }, n, t);
        }))();
    }
}, h = {
    warehouseRefs: {
        postEventId: null
    },
    mapWarehouseToData: function(e, t) {
        var n = t.postEventId;
        return {
            postEvent: (0, s.eventEntitySelector)(n)(e)
        };
    }
};

Page(p.default.apply(void 0, [ v, h ].concat(t(u.allMixins))));