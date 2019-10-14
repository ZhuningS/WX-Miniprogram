function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/underscore")), a = t(require("../../../utils/requestUtil")), i = t(require("../../../utils/util")), n = t(require("../../../utils/listener")), o = t(require("../urls")), d = require("../../../utils/data.js");

getApp();

Page({
    data: {
        isEmpty: !1,
        hasMore: !0,
        page: 1,
        top_day: 1,
        isShowTop: !1,
        isShowActionMenu: !1,
        isActive: !1,
        isUseRichText: wx.canIUse("rich-text"),
        appIndexPath: d.duoguan_app_index_path,
        isSuperHome: d.duoguan_app_is_superhome,
        is_share: !1,
        id: null
    },
    onLoad: function(t) {
        var e = decodeURIComponent(t.scene);
        if ("undefined" != e) {
            var a = e.split("#")[1];
            this.data.id = a;
        } else this.data.id = t.id;
        this.loadShareData(), this.onPullDownRefresh(1);
    },
    onPullDownRefresh: function(t) {
        var d = this;
        a.default.get(o.default.config.load, {
            name: "config"
        }, function(t) {
            var e = t.config;
            d.setData({
                config: e
            });
        }), a.default.get(o.default.document.detail, {
            id: this.data.id
        }, function(t, s) {
            d.onDetailDataHandler(t), n.default.fireEventListener("severs.info.update", [ {
                id: d.data.id,
                click: i.default.formatSmartNumber(t.click)
            } ]), wx.getLocation({
                success: function(e) {
                    a.default.get(o.default.util.getDistance, {
                        from: e.longitude + "," + e.latitude,
                        to: t.longitude + "," + t.latitude
                    }, function(t) {
                        t = "≈" + (t = parseFloat(t).toFixed(2)) + "km", d.setData({
                            distance: t
                        });
                    });
                },
                fail: function() {
                    wx.showModal({
                        title: "温馨提示",
                        content: "获取位置信息失败，请检查网络是否良好，以及是否禁用位置",
                        showCancel: !1
                    });
                }
            }), a.default.get(o.default.comment.lists, {
                doc_id: d.data.id
            }, function(t) {
                d.onDataHandler(t), d.onSetData(t, 1);
            }), e.default.each(s.recommend, function(t) {
                t.create_time = i.default.formatSmartTime(1e3 * t.create_time, "yyyy-MM-dd hh:mm");
            }), d.setData(e.default.extend({
                currentUid: s.uid,
                recommend: s.recommend
            }, t));
        }, this, {
            error: function(t, e) {
                404 != t && 5 != t || wx.navigateBack();
            },
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: t
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        a.default.get(o.default.comment.lists, {
            doc_id: this.data.id,
            _p: this.data.page + 1
        }, function(e) {
            t.onDataHandler(e), t.onSetData(e, t.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onDetailDataHandler: function(t) {
        t.create_time = i.default.formatSmartTime(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), 
        t.isShowWalletMoney = void 0 != t.pull_wallet_amount || 0 != t.is_wallet_end, t.wallet && wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#ff4b4b",
            animation: {
                duration: 500
            }
        }), e.default.each(t.wallet_users, function(t) {
            t.create_time = i.default.formatSmartTime(1e3 * t.create_time, "yyyy-MM-dd hh:mm");
        });
    },
    onCopyPwdTap: function(t) {
        wx.setClipboardData({
            data: this.data.wallet.pwd,
            success: function(t) {
                wx.showModal({
                    content: "口令已复制！",
                    showCancel: !1
                });
            }
        });
    },
    onDataHandler: function(t) {
        (0, e.default)(t).map(function(t) {
            return t.create_time = i.default.formatSmartTime(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), 
            t;
        });
    },
    onCopyCommentTap: function(t) {
        var e = t.target.dataset.key;
        wx.setClipboardData({
            data: e,
            success: function(t) {}
        });
    },
    onSetData: function(t, e) {
        t = t || [], this.setData({
            page: void 0 !== e ? e : this.data.page,
            data: 1 === e || void 0 === e ? t : this.data.data.concat(t),
            hasMore: void 0 !== e && t.length >= 20,
            isEmpty: (1 === e || void 0 === e) && 0 === t.length
        });
    },
    loadShareData: function() {
        var t = this;
        wx.hideShareMenu && wx.hideShareMenu(), a.default.get(o.default.share, {
            mmodule: "duoguan_info"
        }, function(e) {
            t.shareInfo = e, wx.showShareMenu && wx.showShareMenu();
        });
    },
    onGoodTap: function(t) {
        var e = this;
        a.default.isLoading(this.goodRQId) || (a.default.get(o.default.document.good, {
            id: this.data.id
        }, function(t) {
            var a = {
                id: e.data.id,
                good: t,
                is_good: !e.data.is_good
            };
            n.default.fireEventListener("severs.info.update", [ a ]), e.setData(a);
        }), this.data.is_good || (this.setData({
            isActive: !0
        }), setTimeout(function() {
            e.setData({
                isActive: !1
            });
        }, 1e3)));
    },
    onPreviewTap: function(t) {
        var e = t.target.dataset, a = e.index, i = e.url;
        if (void 0 !== a || void 0 !== i) {
            var n = t.currentTarget.dataset.urls;
            n = void 0 === n ? [] : n, void 0 === a || i || (i = n[a]), wx.previewImage({
                current: i,
                urls: n
            });
        }
    },
    onOpenMapTap: function() {
        var t = parseFloat(this.data.latitude), e = parseFloat(this.data.longitude), a = this.data.address;
        wx.openLocation({
            latitude: t,
            longitude: e,
            scale: 14,
            name: a,
            address: a
        });
    },
    onDeleteTap: function(t) {
        var e = this;
        a.default.isLoading(this.delRQId) || wx.showModal({
            title: "温馨提示",
            content: "删除后将不能恢复，你确定要删除这条信息吗？",
            success: function(t) {
                t.confirm && a.default.get(o.default.document.del, {
                    id: e.data.id
                }, function(t) {
                    n.default.fireEventListener("severs.info.delete", [ e.data.id ]), wx.navigateBack();
                });
            }
        });
    },
    onCheckTap: function() {
        var t = this;
        a.default.isLoading(this.checkRQId) || a.default.get(o.default.document.checked, {
            id: this.data.id
        }, function() {
            t.setData({
                status: 1,
                isShowActionMenu: !1
            }), wx.showToast({
                title: "审核通过！",
                icon: "success",
                duration: 1500,
                mask: !0
            });
        });
    },
    onCallTap: function(t) {
        var e = t.currentTarget.dataset.mobile;
        if (e) {
            var a = this.data.config.call_before_tips || "你将要拨打电话：" + e;
            wx.showModal({
                title: "温馨提示",
                content: a,
                success: function(t) {
                    t.cancel || wx.makePhoneCall({
                        phoneNumber: e
                    });
                }
            });
        }
    },
    onNavigateTap: function(t) {
        var e = t.currentTarget.dataset, a = e.url, i = e.type || "";
        "redirect" == i ? wx.redirectTo({
            url: a
        }) : "switchTab" == i ? wx.switchTab({
            url: a
        }) : wx.navigateTo({
            url: a
        });
    },
    onShowCommentTap: function(t) {
        if (!this.isShowCommentActionSheet && !a.default.isLoading(this.commentRQId)) {
            var e = t.currentTarget.dataset, i = t.target.dataset, n = {
                index: e.index || i.index,
                reply_id: e.replyId || i.replyId,
                reply_uid: e.uid || i.uid,
                doc_id: e.docId || i.docId
            };
            if (console.log(n, e), n.reply_id || n.doc_id) {
                this.commentParam = n;
                var o = (n.reply_id ? "回复 " : "评论 ") + (e.nickname || i.nickname);
                this.setData({
                    show_comment: !0,
                    comment_placeholder: o,
                    isShowActionMenu: !1
                });
            }
        }
    },
    onHideCommentTap: function() {
        this.setData({
            show_comment: !1
        });
    },
    onShowDeleteCommentTap: function(t) {
        var e = this, i = t.currentTarget.dataset, d = i.show, s = i.id, l = i.index, u = i.replyIndex, r = i.uid || t.target.dataset.uid;
        if (console.log(t, i, r), 1 == d) {
            var c = [ "删除" ];
            this.data.is_admin && r && c.push("拉黑"), this.isShowCommentActionSheet = !0, wx.showActionSheet({
                itemList: c,
                success: function(t) {
                    if (void 0 !== t.tapIndex) if (0 == t.tapIndex) {
                        if (a.default.isLoading(e.deleteCommentRQId)) return;
                        e.deleteCommentRQId = a.default.get(o.default.comment.del, {
                            id: s
                        }, function() {
                            void 0 !== u ? (e.data.data[l].reply_list.splice(u, 1), e.setData({
                                data: e.data.data,
                                isShowActionMenu: !1
                            })) : (e.data.data.splice(l, 1), e.setData({
                                data: e.data.data,
                                comment: e.data.comment - 1,
                                isShowActionMenu: !1
                            }));
                        });
                    } else {
                        if (!r) return;
                        wx.showModal({
                            title: "温馨提示",
                            content: "拉黑之后将不能再次发帖，同时此用户所有帖子均为隐藏，你确定要拉黑此用户吗？",
                            success: function(t) {
                                t.cancel || a.default.get(o.default.document.pullblack, {
                                    _uid: r
                                }, function() {
                                    n.default.fireEventListener("severs.info.pullblack", [ r ]), wx.showToast({
                                        title: "已拉黑成功！",
                                        icon: "success",
                                        duration: 3e3,
                                        mask: !0
                                    }), e.setData({
                                        isShowActionMenu: !1
                                    });
                                });
                            }
                        });
                    }
                },
                complete: function() {
                    e.isShowCommentActionSheet = !1;
                }
            });
        }
    },
    onCommentSubmit: function(t) {
        var d = this, s = e.default.extend({}, t.detail.value, this.commentParam);
        a.default.pushFormId(t.detail.formId), console.log(s), this.commentRQId = a.default.post(o.default.comment.add, s, function(t) {
            var e = d.data.data;
            t.create_time = i.default.formatSmartTime(1e3 * t.create_time), s.reply_id ? (e[s.index].reply_list.push(t), 
            e[s.index].reply_count++) : (t.reply_list = [], e.push(t), d.data.comment++, n.default.fireEventListener("severs.info.update", [ {
                id: d.data.id,
                comment: d.data.comment
            } ])), d.setData({
                data: e,
                comment: d.data.comment,
                show_comment: !1
            });
        });
    },
    onPullBlackTap: function() {
        var t = this;
        wx.showModal({
            title: "温馨提示",
            content: "拉黑之后将不能再次发帖，同时此用户所有帖子均为隐藏，你确定要拉黑此用户吗？",
            success: function(e) {
                e.cancel || a.default.get(o.default.document.pullblack, {
                    id: t.data.id
                }, function() {
                    n.default.fireEventListener("severs.info.pullblack", [ t.data.uid ]), wx.showToast({
                        title: "已拉黑成功！",
                        icon: "success",
                        duration: 3e3,
                        mask: !0
                    }), t.setData({
                        isShowActionMenu: !1
                    });
                });
            }
        });
    },
    onToggleTopTap: function() {
        var t = this;
        a.default.isLoading(this.toggleTopRQId) || (this.toggleTopRQId = a.default.get(o.default.document.toggleTop, {
            id: this.data.id,
            day: this.data.top_day
        }, function(e) {
            e = {
                id: t.data.id,
                is_top: e,
                isShowTop: !1,
                isShowActionMenu: !1
            }, n.default.fireEventListener("severs.info.update", [ e ]), t.setData(e);
        }));
    },
    onSetValueTap: function(t) {
        var e = t.target.dataset, a = e.name, i = e.value, n = {};
        a ? n[a] = i : n = JSON.parse(i), this.setData(n);
    },
    onTopDayChange: function(t) {
        var e = parseInt(t.detail.value);
        this.setData({
            top_day: e
        });
    },
    onPullWalletSubmit: function(t) {
        var n = this;
        if (!a.default.isLoading(this.pullWalletRQId)) {
            var d = e.default.extend(t.detail.value, {
                form_id: t.detail.formId,
                id: this.data.id
            });
            this.pullWalletRQId = a.default.get(o.default.document.pullWallet, d, function(t) {
                var e = n.data.wallet, a = n.data.wallet_users;
                e.pull_num = t.pull_num, e.pull_amount = t.pull_amount, a.unshift({
                    nickname: t.nickname,
                    headimgurl: t.headimgurl,
                    amount: t.amount,
                    create_time: i.default.formatSmartTime(new Date(), "yyyy-MM-dd hh:mm")
                }), n.setData({
                    isShowWalletMoney: !0,
                    pull_wallet_amount: t.amount,
                    is_wallet_end: t.is_wallet_end,
                    wallet: e,
                    wallet_users: a
                });
            }, this, {
                error: function(t, e) {
                    return n.setData({
                        pull_wallet_msg: e
                    }), !1;
                }
            });
        }
    },
    onContentActionTap: function(t) {
        var e = this;
        wx.showActionSheet({
            itemList: [ "复制" ],
            success: function(t) {
                0 == t.tapIndex && wx.setClipboardData({
                    data: e.data.content,
                    success: function(t) {
                        wx.showToast({
                            title: "复制成功！"
                        });
                    },
                    fail: function(t) {
                        wx.showModal({
                            title: "复制失败",
                            content: t.errMsg,
                            showCancel: !1
                        });
                    }
                });
            }
        });
    },
    onShareAppMessage: function() {
        this.setData({
            is_share: !1
        });
        var t = this.data.wallet_id;
        if (2 != this.data.config.share_title) e = this.data.content || "同城"; else if (0 == t) e = "好贴子就是要分享的，戳我查看详情"; else var e = "惊现红包贴，来晚了就没了，戳我领取";
        return a.default.get(o.default.util.shareStatistics, {
            id: this.data.id
        }, function() {}, this, {
            isShowLoading: !1
        }), {
            title: e.substr(0, 48) + (e.length > 48 ? "..." : ""),
            path: "pages/severs/detail/detail?id=" + this.data.id
        };
    },
    onEditTap: function(t) {
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.index, i = t.currentTarget.dataset.title;
        wx.navigateTo({
            url: "/pages/severs/edit/edit?id=" + e + "&cid=" + a + "&title=" + i
        });
    },
    toShare: function() {
        this.setData({
            is_share: !0
        });
    },
    closeShare: function() {
        this.setData({
            is_share: !1
        });
    },
    shareHaibao: function() {
        wx.navigateTo({
            url: "../share/share?id=" + this.data.id
        }), this.setData({
            is_share: !1
        });
    }
});