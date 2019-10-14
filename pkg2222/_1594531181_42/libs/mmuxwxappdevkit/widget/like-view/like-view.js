var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = require("../../core/sys.js"), n = require("../../core/network.js"), a = {
    unLIkeAction: 0,
    likeAction: 1,
    getLikeList: 2
};

Component({
    properties: {
        targetAppid: {
            type: String,
            value: "",
            observer: function(t, e) {}
        },
        appType: {
            type: Number,
            value: 0
        },
        subType: {
            type: Number,
            value: 0,
            observer: function(t, e) {
                this.requestFuncLike({
                    type: a.getLikeList
                });
            }
        },
        searchId: {
            type: String,
            value: ""
        },
        userName: {
            type: String,
            value: ""
        },
        showLoading: {
            type: Boolean,
            value: !0
        },
        likeTip: {
            type: String,
            value: "好用"
        },
        unlikeTip: {
            type: String,
            value: "不好用"
        },
        likeToast: {
            type: String,
            value: "已评价"
        },
        unlikeToast: {
            type: String,
            value: "已取消评价"
        },
        likeIcon: {
            type: String,
            value: "assets/icon-like.png"
        },
        likedIcon: {
            type: String,
            value: "assets/icon-liked.png"
        },
        unlikeIcon: {
            type: String,
            value: ""
        },
        unlikedIcon: {
            type: String,
            value: ""
        },
        likeIconSize: {
            type: String,
            value: "40rpx"
        }
    },
    data: {
        showLikeBtn: !1,
        showInput: !1,
        actionInfo: {
            favor: {
                status: 0,
                likes: [],
                comments: []
            },
            not_favor: {
                status: 0,
                unlikes: [],
                comments: []
            }
        },
        inputValue: "",
        restoreData: null,
        focusInput: !1,
        confirmInput: !1,
        actionSheet: {
            show: !1,
            items: []
        },
        actionCompletion: null
    },
    attached: function() {
        var t = this;
        this.setData({
            dataCacheKey: "data-cache-key-" + this.data.targetAppid + "-" + this.data.userName
        }), wx.getStorage({
            key: t.data.dataCacheKey,
            success: function(e) {
                if (e.data && e.data.length > 0) {
                    var n = JSON.parse(e.data);
                    n && 1 == n.version && t.setData(n);
                }
            }
        }), this.requestFuncLike({
            type: a.getLikeList
        });
    },
    methods: {
        onInputFocus: function(t) {
            var n = t.detail.height, a = this;
            wx.createSelectorQuery().in(this).select("#input").boundingClientRect().exec(function(t) {
                t[0] && t[0].top + t[0].height + n > e.windowHeight - 64 && a.triggerEvent("inputoverflow", {
                    supplement: t[0].top + t[0].height + n - e.windowHeight + 64
                });
            });
        },
        onInputChange: function(t) {
            this.setData({
                inputValue: t.detail.value
            });
        },
        onInputBlur: function(t) {
            var e = void 0;
            this.data.confirmInput || (e = this.data.restoreData), this.setData(Object.assign({
                focusInput: !1,
                confirmInput: !1,
                restoreData: {}
            }, e)), this.triggerEvent("inputblur");
        },
        onInputConfirm: function(t) {
            var e = this.data.inputValue, n = !!this.data.actionInfo.not_favor.status;
            e ? n && e.length < 20 ? wx.showToast({
                icon: "none",
                title: "评价内容不少于20个字"
            }) : (this.data.confirmInput = !0, this.requestFuncLike({
                unlike: n,
                type: a.likeAction,
                comment: e,
                showLoading: !0
            })) : wx.showToast({
                icon: "none",
                title: "不能为空"
            });
        },
        onClickAction: function(t) {
            var e = this, n = t.currentTarget.dataset, i = !!n.action, o = 1 == n.likeType, s = this.deepCopyObject(this.data.actionInfo), r = this.deepCopyObject(s);
            o ? (s.not_favor.status = i, s.favor.status = !i && s.favor.status) : (s.favor.status = i, 
            s.not_favor.status = !i && s.not_favor.status);
            var u = function() {
                e.setData({
                    actionInfo: s
                }), o && i ? e.setData({
                    showInput: !0,
                    focusInput: !0,
                    restoreData: {
                        showInput: e.data.showInput,
                        actionInfo: r
                    }
                }) : e.requestFuncLike({
                    unlike: o,
                    type: i ? a.likeAction : a.unLIkeAction,
                    resetData: r,
                    showLoading: !0
                });
            };
            i || this.data.showInput ? u() : this.setData({
                actionSheet: {
                    show: !0,
                    title: "将同时删除评价",
                    items: [ {
                        type: "custom",
                        content: "确认删除",
                        color: "#ed4d3d"
                    } ]
                },
                actionCompletion: u
            });
        },
        confirmActionSheet: function() {
            this.data.actionCompletion && this.data.actionCompletion(), this.data.actionCompletion = null;
        },
        hideActionSheet: function() {
            this.setData({
                "actionSheet.show": !1
            });
        },
        onClickDelete: function(t) {
            var e = this, n = 1 == t.currentTarget.dataset.likeType;
            this.setData({
                actionSheet: {
                    show: !0,
                    title: n ? "将同时取消“不好用”" : "将删除评价",
                    items: [ {
                        type: "custom",
                        content: "确认删除",
                        color: "#ed4d3d"
                    } ]
                },
                actionCompletion: function() {
                    e.requestFuncLike({
                        unlike: n,
                        type: n ? a.unLIkeAction : a.likeAction,
                        showLoading: !0
                    });
                }
            });
        },
        requestFuncLike: function(t) {
            this.data.showLikeBtn && (t.showLoading || t.type == a.getLikeList && this.data.showLoading) && wx.showLoading({
                title: ""
            });
            var e = this;
            n.request({
                cgi: n.cgiSet.featureLike,
                params: {
                    appid: this.data.targetAppid,
                    app_type: this.data.appType,
                    subtype: this.data.subType,
                    searchId: this.data.searchId,
                    username: this.data.userName,
                    type: t.type,
                    is_not_favor: t.unlike,
                    comment: t.comment
                },
                success: function(n) {
                    if (0 == n.errcode) {
                        var i = e.data.actionInfo;
                        n.is_not_favor ? (i.not_favor.status = n.IsLike, i.favor.status = 0) : (i.favor.status = n.IsLike, 
                        i.not_favor.status = 0), (n.user_list || []).concat(n.not_favor_list || []).forEach(function(t) {
                            t.datetime = e.formatUpdateTime(1e3 * t.timestamp);
                        }), i.favor.likes = n.user_list || [], i.favor.comments = i.favor.likes.filter(function(t) {
                            return !!t.Comment;
                        }), i.not_favor.unlikes = n.not_favor_list || [], i.not_favor.comments = i.not_favor.unlikes.filter(function(t) {
                            return !!t.Comment;
                        });
                        var o = {
                            actionInfo: i,
                            showLikeBtn: n.LikeButton,
                            showInput: (i.favor.status || i.not_favor.status) && !n.comment,
                            version: 1
                        };
                        if (e.setData(Object.assign({
                            inputValue: ""
                        }, o)), wx.setStorage({
                            key: e.data.dataCacheKey,
                            data: JSON.stringify(o)
                        }), t.type < a.getLikeList) {
                            var s = t.type == a.likeAction ? e.data.likeToast : e.data.unlikeToast;
                            wx.showToast({
                                title: s,
                                icon: "success"
                            });
                        }
                        var r = "onGetLikeList";
                        t.type == a.likeAction ? r = "onLike" : t.type == a.unLIkeAction && (r = "onUnLike"), 
                        e.triggerEvent(r, {
                            appid: e.data.targetAppid,
                            likeCnt: i.favor.likes.length,
                            unlikeCnt: i.not_favor.unlikes.length,
                            isUnlike: t.unlike ? 1 : 0
                        });
                    } else wx.showModal({
                        title: "",
                        content: "操作失败，请稍后重试",
                        showCancel: !1
                    }), t.resetData && e.setData({
                        actionInfo: t.resetData
                    });
                },
                fail: function(n) {
                    e.triggerEvent("likeCgiFail", {
                        appid: e.data.targetAppid
                    }), t.type < a.getLikeList && (wx.showModal({
                        title: "",
                        content: "操作失败，请稍后重试",
                        showCancel: !1
                    }), t.resetData && e.setData({
                        actionInfo: resetData
                    }));
                },
                complete: function() {
                    wx.hideLoading(), e.setData({
                        restoreData: null,
                        focusInput: !1,
                        confirmInput: !1
                    });
                }
            });
        },
        formatUpdateTime: function(t) {
            function e(t) {
                return t < 10 ? "0" + t : t;
            }
            var n = new Date().getTime(), a = Math.max(parseInt((n - t) / 1e3 / 60), 1);
            return a < 60 ? a + "分钟前" : (a = parseInt(a / 60)) < 24 ? a + "小时前" : (a = parseInt(a / 24)) < 30 ? a + "天前" : e((n = new Date(t)).getFullYear()) + "-" + e(n.getMonth() + 1) + "-" + e(n.getDate());
        },
        deepCopyObject: function(e) {
            return e && "object" == (void 0 === e ? "undefined" : t(e)) ? JSON.parse(JSON.stringify(e)) : null;
        }
    }
});