require("../../../../core/sys.js");

var e = require("../../../../core/network.js"), t = {
    unLIkeAction: 0,
    likeAction: 1,
    getLikeList: 2
};

Component({
    properties: {
        targetAppid: {
            type: String,
            value: "",
            observer: function(e, t) {}
        },
        hasLikeTip: {
            type: String,
            value: "已赞"
        },
        unLikeTip: {
            type: String,
            value: "为该服务点赞"
        },
        appType: {
            type: Number,
            value: 0
        },
        subType: {
            type: Number,
            value: 0,
            observer: function(e, t) {
                var a = this;
                this.setData({
                    dataCacheKey: "data-cache-key-" + this.data.targetAppid + "-" + this.data.userName + this.data.appType + this.data.subType
                });
                var i = wx.getStorageSync(a.data.dataCacheKey);
                i && a.setData(JSON.parse(i)), this.requestFuncLike({
                    type: 2
                });
            }
        },
        showLoading: {
            type: Boolean,
            value: !0
        },
        searchId: {
            type: String,
            value: ""
        },
        userName: {
            type: String,
            value: ""
        },
        likeToast: {
            type: String,
            value: "已点赞"
        },
        unlikeToast: {
            type: String,
            value: "已取消点赞"
        },
        friendListTitle: {
            type: String,
            value: "赞过的朋友"
        },
        hasLikeAction: {
            type: String,
            value: ""
        },
        hasLikeActionAppid: {
            type: String,
            value: ""
        },
        hasLikeActionPath: {
            type: String,
            value: ""
        },
        hasLikeActionVersion: {
            type: String,
            value: "release"
        },
        likeIcon: {
            type: String,
            value: "assets/like@3x.png"
        },
        likedIcon: {
            type: String,
            value: "assets/liked@3x.png"
        },
        likeIconSize: {
            type: String,
            value: "80rpx"
        }
    },
    data: {
        likeUserData: [],
        blankViewData: [],
        hasLike: !1,
        showLikeBtn: !1
    },
    attached: function() {
        var e = this;
        this.setData({
            dataCacheKey: "data-cache-key-" + this.data.targetAppid + "-" + this.data.userName + this.data.appType + this.data.subType
        });
        var t = wx.getStorageSync(e.data.dataCacheKey);
        t && e.setData(JSON.parse(t));
    },
    ready: function() {},
    methods: {
        onClickLikeBtn: function() {
            console.log("click like btn");
            var e = !this.data.hasLike;
            this.requestFuncLike({
                type: e ? t.likeAction : t.unLIkeAction
            });
        },
        onClickHasLikeAction: function() {
            this.triggerEvent("onClickHasLikeAction", {
                appId: this.data.targetAppid,
                appType: this.data.appType,
                subType: this.data.subType
            });
        },
        requestFuncLike: function(a) {
            var i = this;
            i.data.showLikeBtn && a.type == t.getLikeList && this.data.showLoading && wx.showLoading({
                title: ""
            });
            this.data.targetAppid;
            a.type == t.getLikeList ? e.request({
                cgi: e.cgiSet.getFavor,
                params: {
                    type: this.data.appType,
                    subtype: this.data.subType,
                    username: this.data.userName,
                    get_product_info: !0,
                    get_uin_list: !0,
                    searchId: this.data.searchId
                },
                success: function(e) {
                    if (0 == e.errcode) {
                        for (var t = e.products.length ? e.products[0].user_list || [] : [], a = [], s = !!e.products.length && (e.products[0].has_myself || !1); t.length > 7 && (t.length + a.length) % 7 != 0; ) a.push({
                            blankItem: !0
                        });
                        var n = {
                            likeUserData: t,
                            blankViewData: a,
                            hasLike: s,
                            showLikeBtn: !0
                        };
                        console.log("like-view: ", n), i.setData(n), wx.setStorage({
                            key: i.data.dataCacheKey,
                            data: JSON.stringify(n)
                        });
                    }
                }
            }) : (wx.showLoading({
                title: ""
            }), e.request({
                cgi: e.cgiSet.doFavor,
                params: {
                    username: this.data.userName,
                    type: this.data.appType,
                    subtype: this.data.subType,
                    get_product_info: !0,
                    get_uin_list: !0,
                    action: a.type == t.likeAction ? 1 : 0,
                    searchId: this.data.searchId
                },
                success: function(e) {
                    if (0 != e.errcode || a.type == t.likeAction && !e.user_list) wx.hideLoading(), 
                    wx.showModal({
                        title: "",
                        content: "操作失败，请稍后重试",
                        showCancel: !1
                    }); else {
                        for (var s = e.user_list || [], n = [], r = e.has_myself || !1; s.length > 7 && (s.length + n.length) % 7 != 0; ) n.push({
                            blankItem: !0
                        });
                        var o = {
                            likeUserData: s,
                            blankViewData: n,
                            hasLike: r,
                            showLikeBtn: !0
                        };
                        console.log("like-view: ", o), i.setData(o);
                        var p = a.type == t.likeAction ? i.data.likeToast : i.data.unlikeToast;
                        wx.setStorage({
                            key: i.data.dataCacheKey,
                            data: JSON.stringify(o)
                        }), wx.showToast({
                            title: p,
                            icon: "success"
                        });
                    }
                },
                fail: function() {
                    wx.hideLoading(), wx.showModal({
                        title: "",
                        content: "操作失败，请稍后重试",
                        showCancel: !1
                    });
                }
            }));
        }
    }
});