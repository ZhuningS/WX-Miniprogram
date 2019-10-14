function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../utils/underscore.js")), e = t(require("../../utils/requestUtil.js")), r = {
    onNavigateTap: function(t) {
        var a = t.detail.target ? t.detail.target.dataset : t.currentTarget.dataset, r = a.url, i = a.type, o = {
            url: r
        };
        t.detail.formId && e.default.pushFormId(t.detail.formId), "switch" == i ? (o.fail = function() {
            return wx.navigateTo({
                url: r
            });
        }, wx.switchTab(o)) : wx.navigateTo(o);
    },
    onSetValueTap: function(t) {
        var a = t.target.dataset, r = a.name, i = a.value, o = {};
        o[r] = i, this.setData(o), t.detail.formId && e.default.pushFormId(t.detail.formId);
    },
    onEmptyTap: function() {},
    startPullDownRefresh: function() {
        var t = wx.getSystemInfoSync();
        wx.startPullDownRefresh && "ios" !== t.platform ? wx.startPullDownRefresh() : this.onPullDownRefresh();
    },
    onSetData: function(t, a) {
        t = t || [], this.setData({
            page: void 0 !== a ? a : this.data.page,
            data: 1 === a || void 0 === a ? t : this.data.data.concat(t),
            hasMore: void 0 !== a && t.length >= 20,
            isEmpty: (1 === a || void 0 === a) && 0 === t.length,
            isLoading: !1
        });
    },
    onCopyTap: function(t) {
        var a = this, e = t.currentTarget.dataset.data;
        wx.setClipboardData({
            data: e,
            success: function(t) {
                a.setData({
                    isShowCopyTips: !0
                }), setTimeout(function() {
                    a.setData({
                        isShowCopyTips: !1
                    });
                }, 1e3);
            }
        });
    },
    onPreviewTap: function(t) {
        var a = t.target.dataset, e = a.index, r = a.url;
        if (void 0 !== e || void 0 !== r) {
            var i = t.currentTarget.dataset.urls;
            i = void 0 === i ? [] : i, void 0 === e || r || (r = i[e]), wx.previewImage({
                current: r,
                urls: i
            });
        }
    }
};

module.exports = function(t) {
    Page(a.default.extend({}, r, t));
};