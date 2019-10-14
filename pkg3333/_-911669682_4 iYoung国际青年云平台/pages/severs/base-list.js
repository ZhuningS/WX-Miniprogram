function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/underscore")), a = t(require("../../utils/requestUtil")), i = (t(require("../../utils/util")), 
t(require("../../utils/listener"))), n = t(require("../../utils/plugUtil")), s = t(require("urls"));

module.exports = {
    data: {
        comment: {
            placeholder: null,
            param: {}
        }
    },
    listeners: {
        "severs.info.add": function() {
            this.onPullDownRefresh();
        },
        "severs.info.update": function(t) {
            var a = this.data.data, i = e.default.find(a, function(e) {
                return t.id == e.id;
            });
            void 0 !== i && (e.default.extend(i, t), this.setData({
                data: a
            }));
        },
        "severs.info.delete": function(t) {
            var a = this.data.data, i = e.default.findIndex(a, function(e) {
                return t == e.id;
            });
            void 0 !== i && (a.splice(i, 1), this.setData({
                data: a
            }));
        },
        "severs.info.pullblack": function(t) {
            for (var e = this.data.data, a = 0; a < e.length; a++) e[a].uid == t && (e.splice(a, 1), 
            a--);
            this.setData({
                data: e
            });
        }
    },
    registerListeners: function() {
        for (var t in this.listeners) i.default.addEventListener(t, this.listeners[t].bind(this));
    },
    unRegisterListeners: function() {
        for (var t in this.listeners) i.default.removeEventListener(t, this.listeners[t]);
    },
    onSetData: function(t, e) {
        t = t || [], this.setData({
            page: void 0 !== e ? e : this.data.page,
            data: 1 === e || void 0 === e ? t : this.data.data.concat(t),
            hasMore: void 0 !== e && t.length >= 20,
            isEmpty: (1 === e || void 0 === e) && 0 === t.length,
            isLoading: !1
        });
    },
    loadShareData: function() {
        var t = this;
        wx.showShareMenu && wx.hideShareMenu(), a.default.get(s.default.share, {
            mmodule: "duoguan_info"
        }, function(e) {
            t.shareInfo = e, wx.showShareMenu && wx.showShareMenu();
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
        var e = t.detail.target ? t.detail.target.dataset : t.currentTarget.dataset, i = e.url, n = e.type, s = {
            url: i
        };
        e.invalid || (t.detail.formId && a.default.pushFormId(t.detail.formId), "switch" == n ? (s.fail = function() {
            wx.navigateTo({
                url: i
            });
        }, wx.switchTab(s)) : wx.navigateTo(s));
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
    onSetValueTap: function(t) {
        var e = t.target.dataset, a = e.name, i = e.value, n = {};
        n[a] = i, this.setData(n);
    },
    onGoodTap: function(t) {
        var e = this;
        if (!a.default.isLoading(this.goodRQId)) {
            var i = t.currentTarget.dataset, n = i.id, r = i.index;
            this.goodRQId = a.default.get(s.default.document.good, {
                id: n,
                ver: s.default.version
            }, function(t) {
                var a = e.data.data;
                a[r].is_good = !a[r].is_good, a[r].good = t, e.setData({
                    data: a
                });
            });
        }
    },
    onEmptyTap: function() {},
    startPullDownRefresh: function() {
        var t = wx.getSystemInfoSync();
        wx.startPullDownRefresh && "ios" !== t.platform ? wx.startPullDownRefresh() : this.onPullDownRefresh();
    },
    onShareAppMessage: function(t) {
        return "button" === t.from ? this.onButtonShareAppMessage(t.target) : (this.shareInfo = this.shareInfo || {}, 
        {
            title: this.shareInfo.title || "",
            desc: this.shareInfo.desc || "",
            path: "pages/severs/index/index"
        });
    },
    onButtonShareAppMessage: function(t) {
        var e = t.dataset.index, i = this.data.data[e];
        return {
            title: i.content.substring(0, 48),
            path: "pages/severs/detail/detail?id=" + i.id,
            success: function() {
                a.default.get(s.default.util.shareStatistics, {
                    id: i.id
                }, function() {}, {
                    isShowLoading: !1
                }), n.default.share();
            }
        };
    }
};