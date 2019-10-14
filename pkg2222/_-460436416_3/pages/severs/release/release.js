function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../../utils/underscore"));

var e = t(require("../../../utils/requestUtil")), i = (t(require("../../../utils/util")), 
t(require("../../../utils/listener")), t(require("../urls")));

getApp();

Page({
    data: {},
    onLoad: function(t) {
        this.onPullDownRefresh();
    },
    onReady: function(t) {
        this.onPullDownRefresh();
    },
    onPullDownRefresh: function() {
        var t = this;
        e.default.get(i.default.category.lists, {}, function(e) {
            var i = [], a = -1;
            for (var n in e) n % 5 == 0 && (i[++a] = []), i[a].push(e[n]);
            console.log(i), t.setData({
                data: i
            });
        }, this, {
            isShowLoading: !1,
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onChooseCateTap: function(t) {
        var i = t.detail.target.dataset, a = i.gIndex, n = i.index, r = this.data.data[a][n], l = r.child;
        e.default.pushFormId(t.detail.formId), l && l.length ? this.setData({
            childCates: l
        }) : wx.navigateTo({
            url: "../write/write?title=" + r.title + "&cid=" + r.id
        });
    },
    onChooseChildCateTap: function(t) {
        var e = t.currentTarget.dataset.index, i = this.data.childCates[e];
        wx.navigateTo({
            url: "../write/write?title=" + i.title + "&cid=" + i.id
        });
    },
    onChooseCancel: function(t) {
        this.setData({
            childCates: null
        });
    }
});