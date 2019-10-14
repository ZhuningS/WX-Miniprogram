var e = require("../../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../../utils/util")), n = require("../../../../../utils/dev"), o = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
}(require("../../../../../services/redirector")), a = require("../../../../../services/auth"), m = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
}, r = (0, n.debugCreator)("card-comment", !1), i = getApp().getUserId();

Component((0, e.componentOptionsEnhancer)({
    properties: {
        event: {
            type: Object
        },
        inPostPage: {
            type: Boolean
        },
        postId: {
            type: Number
        },
        backgroundColor: {
            type: String
        }
    },
    computed: {
        comment: function() {
            return r("this.data.backgroundColor", this.data.backgroundColor), this.parseCommentData(this.data.event);
        }
    },
    methods: {
        NOOP: n.NOOP,
        parseCommentData: function(e) {
            var n = {
                user: e.comment.user,
                type: e.comment.contentType,
                content: e.comment.content,
                postId: "post" === e.comment.targetType ? e.comment.targetId : "",
                size: this.data.inPostPage ? "rich" : "slim",
                isMarked: e.isMarked,
                displayTime: t.default.formatTimeNew(e.comment.createdTime),
                markCount: e.markCount,
                id: e.comment.id,
                magazineId: e.comment.magazineId,
                isSelf: e.comment.uid === i,
                markArgsData: {
                    eventId: e.id,
                    mid: e.comment.magazineId,
                    commentId: e.comment.id,
                    type: "comment"
                }
            }, o = parseInt(e.markCount);
            return n.displayMarkCount = 0 === o ? "" : o > 999 ? "999+" : o, n.isReply = !!e.comment.referenceComment, 
            n.isReply && (n.replyName = e.comment.referenceComment.user.name), r("comment data", n), 
            n;
        },
        handleUserInfoTap: function(e) {
            var t = e.currentTarget.dataset.uid;
            o.navigateToProfileUserPage(t);
        },
        handleReplyCommentTap: (0, a.requireAuthWrapper)(function() {
            console.log("trigger replycommentevent in comment component"), this.triggerEvent("replycommentevent", {
                commentId: this.data.comment.id,
                userId: this.data.comment.user.uid,
                name: this.data.comment.user.name
            }, {
                bubbles: !0,
                composed: !0
            });
        }),
        handleProcessComment: function() {
            console.log("trigger processcommentevent in comment component"), this.triggerEvent("processcommentevent", {
                commentId: this.data.comment.id,
                userId: this.data.comment.user.uid
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        handleMarkCommentEvent: function(e) {
            var t = this.data.comment, n = e.detail, o = n.type, a = n.isMarked;
            if ("comment" === o) {
                var r = m({}, t, {
                    isMarked: a
                });
                a ? r.markCount++ : r.markCount--, 0 === r.markCount ? r.displayMarkCount = "" : r.markCount > 999 ? r.displayMarkCount = "999+" : r.displayMarkCount = r.markCount, 
                this.setData({
                    comment: r
                });
            }
        },
        handleSlimCommentTap: function() {
            console.log("click slim comment", this.data.comment), this.data.comment.user.uid !== getApp().getUserId() ? o.navigateToPostPage(this.data.comment.postId, {
                mid: this.data.comment.magazineId,
                commentId: this.data.comment.id,
                userId: this.data.comment.user.uid,
                name: this.data.comment.user.name
            }) : console.log("点击了自己的评论，无效");
        },
        handleCommentImageTap: function(e) {
            var t = e.currentTarget.dataset.url;
            wx.previewImage({
                current: t,
                urls: [ t ]
            });
        }
    }
}));