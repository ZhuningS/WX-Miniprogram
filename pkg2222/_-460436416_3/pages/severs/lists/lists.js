function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/underscore")), a = t(require("../../../utils/requestUtil")), i = t(require("../../../utils/util")), s = (t(require("../../../utils/listener")), 
t(require("../base-list"))), r = t(require("../urls"));

getApp();

Page(e.default.extend({}, s.default, {
    ad: {
        timerId: 0
    },
    cid: 0,
    data: {
        childCid: 0,
        isEmpty: !1,
        hasMore: !0,
        isLoading: !0,
        page: 1,
        tags: [],
        isShowChooseCategory: !1
    },
    onLoad: function(t) {
        this.cid = t.cid, this.title = t.title, this.setData(t), wx.setNavigationBarTitle({
            title: this.title + " - 信息列表"
        }), this.registerListeners(), this.onPullDownRefresh(1), this.loadShareData();
    },
    onUnload: function(t) {
        clearInterval(this.ad.timerId), this.unRegisterListeners();
    },
    onPullDownRefresh: function(t) {
        var i = this;
        a.default.get(r.default.config.load, {
            name: "config,category,categorys",
            cid: this.cid,
            pid: this.cid
        }, function(t) {
            var a = t.config, s = t.category, r = t.categorys;
            wx.setStorage({
                key: "servers_config",
                data: a
            }), i.data.tags.length || (i.data.tags = e.default.map(s.tags, function(t) {
                return {
                    active: !1,
                    text: t
                };
            })), i.setData({
                config: a,
                category: s,
                categorys: r,
                tags: i.data.tags
            }), i.startAd(a);
        }, this, {
            isShowLoading: !1
        });
        var s = {
            cid: this.cid,
            childCid: this.data.childCid
        }, o = {}, n = 0;
        e.default.each(this.data.tags, function(t) {
            t.active && (o["tags[" + n + "]"] = t.text, n++);
        }), a.default.get(r.default.document.lists, e.default.extend(s, o), function(t) {
            i.onDataHandler(t), i.onSetData(t, 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onReachBottom: function(t) {
        var e = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        this.setData({
            isLoading: !0
        }), a.default.get(r.default.document.lists, {
            cid: this.cid,
            _p: this.data.page + 1
        }, function(t) {
            e.onDataHandler(t), e.onSetData(t, e.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(t) {
        (0, e.default)(t).map(function(t) {
            return t.create_time = i.default.formatSmartTime(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), 
            t;
        });
    },
    startAd: function(t) {
        var e = this;
        if (clearInterval(this.ad.timerId), t.imgs && t.imgs.length) {
            var a = 0, i = function() {
                e.setData({
                    ad_img: t.imgs[a],
                    ad_index: a
                }), a = a >= t.imgs.length - 1 ? 0 : a + 1;
            };
            this.ad.timerId = setInterval(i, 3e3), i();
        }
    },
    onLoadChooseCateTap: function(t) {
        var e = t.detail.target.dataset.cid;
        a.default.pushFormId(t.detail.formId), this.setData({
            childCid: e
        });
        var i = wx.getSystemInfoSync();
        wx.startPullDownRefresh && "ios" !== i.platform ? wx.startPullDownRefresh() : this.onPullDownRefresh();
    },
    onSetShowChooseCategory: function(t) {
        var e = (t.currentTarget.dataset || t.target.dataset).isShow, i = this.data.categorys;
        if (console.log("current form id count", a.default.pushFormId(t.detail.formId)), 
        i.length) this.setData({
            isShowChooseCategory: e
        }); else {
            var s = this.data.category;
            wx.navigateTo({
                url: "../write/write?cid=" + s.id + "&title=" + s.title
            });
        }
    },
    onWriteChooseCateTap: function(t) {
        var e = (t.currentTarget.dataset || t.target.dataset).index, a = this.data.categorys[e];
        wx.navigateTo({
            url: "../write/write?cid=" + a.id + "&title=" + a.title
        });
    },
    onToggleTagTap: function(t) {
        var e = t.detail.target.dataset.index, i = this.data.tags[e];
        a.default.pushFormId(t.detail.formId), i.active = !i.active, this.setData({
            tags: this.data.tags
        }), this.startPullDownRefresh();
    },
    onShareAppMessage: function(t) {
        return "button" === t.from ? this.onButtonShareAppMessage(t.target) : (this.shareInfo = this.shareInfo || {}, 
        {
            title: this.shareInfo.title || "",
            desc: this.shareInfo.desc || "",
            path: "pages/severs/lists/lists?cid=" + this.cid + "&title=" + this.title
        });
    }
}));