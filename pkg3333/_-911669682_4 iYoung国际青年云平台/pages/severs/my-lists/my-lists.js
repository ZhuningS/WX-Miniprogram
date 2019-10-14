function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/underscore")), a = t(require("../../../utils/requestUtil")), n = t(require("../../../utils/util")), i = t(require("../../../utils/listener")), s = t(require("../base-list")), d = t(require("../urls"));

getApp();

Page(e.default.extend({}, s.default, {
    data: {
        isEmpty: !1,
        hasMore: !0,
        isLoading: !0,
        page: 1,
        isCurrentUser: !0
    },
    onLoad: function(t) {
        this.registerListeners(), this.onPullDownRefresh();
        var e = wx.getStorageSync("servers_config");
        this.setData({
            config: e
        });
    },
    onUnload: function() {
        this.unRegisterListeners();
    },
    onPullDownRefresh: function() {
        var t = this;
        a.default.get(d.default.config.load, {
            name: "config,show_mcard"
        }, function(e) {
            wx.setStorage({
                key: "servers_config",
                data: e.config
            }), t.setData(e);
        }, this, {
            isShowLoading: !1
        }), a.default.get(d.default.document.myLists, {}, function(e, a) {
            t.onDataHandler(e), t.setData({
                uid: a.uid
            }), t.onSetData(e, 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        this.setData({
            isLoading: !0
        }), a.default.get(d.default.document.myLists, {
            _p: this.data.page + 1
        }, function(e) {
            t.onDataHandler(e), t.onSetData(e, t.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(t) {
        (0, e.default)(t).map(function(t) {
            return t.create_time = n.default.formatSmartTime(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), 
            t;
        });
    },
    onShowCommentTap: function(t) {},
    onPayTap: function(t) {
        var n = this;
        if (!a.default.isLoading(this.payRQId)) {
            var i = t.currentTarget.dataset.docId, s = e.default.find(this.data.data, {
                id: i
            });
            this.data.show_mcard && 0 == s.wallet_id ? wx.showActionSheet({
                itemList: [ "余额", "微信支付" ],
                success: function(t) {
                    0 == t.tapIndex ? n.onPayment(i) : 1 == t.tapIndex && n.onWXPayment(i);
                }
            }) : this.onWXPayment(i);
        }
    },
    onPayment: function(t) {
        var s = this;
        this.payRQId = a.default.get(d.default.document.payAmount, {
            id: t
        }, function(a) {
            n.default.payment({
                id: t,
                total_amount: parseFloat(a),
                notify_url: d.default.document.imprestPay
            }, function(a) {
                if (1 == a.code) {
                    var n = s.data.data, d = e.default.findIndex(n, {
                        id: t
                    });
                    if (-1 == d) return;
                    n[d].is_pay = 2, n[d].status = 1, i.default.fireEventListener("severs.info.update", [ n[d] ]), 
                    s.setData({
                        data: n
                    }), wx.showToast({
                        title: "已审核通过...",
                        icon: "success"
                    });
                }
            });
        });
    },
    onWXPayment: function(t) {
        var n = this;
        this.payRQId = a.default.get(d.default.document.wechatPay, {
            id: t
        }, function(a) {
            var s = function() {
                var a = n.data.data, s = e.default.findIndex(a, {
                    id: t
                });
                -1 != s && (a[s].is_pay = 2, a[s].status = 1, i.default.fireEventListener("severs.info.update", [ a[s] ]), 
                n.setData({
                    data: a
                }), wx.showToast({
                    title: "已审核通过...",
                    icon: "success"
                }));
            };
            1 === a ? s() : wx.requestPayment(e.default.extend(a, {
                success: s
            }));
        });
    },
    onDelTap: function(t) {
        var e = this;
        if (!a.default.isLoading(this.delRQId)) {
            var n = t.currentTarget.dataset, i = n.id, s = n.index;
            wx.showModal({
                title: "温馨提示",
                content: "删除之后将无法恢复，你确定要删除吗？",
                showCancel: !0,
                cancelText: "不了",
                confirmText: "就是要删",
                success: function(t) {
                    t.cancel || (e.delRQId = a.default.get(d.default.document.del, {
                        id: i
                    }, function() {
                        var t = e.data.data;
                        t.splice(s, 1), e.setData({
                            data: t
                        });
                    }));
                }
            });
        }
    },
    onEditTap: function(t) {
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.index, n = t.currentTarget.dataset.title;
        wx.navigateTo({
            url: "/pages/severs/edit/edit?id=" + e + "&cid=" + a + "&title=" + n
        });
    }
}));