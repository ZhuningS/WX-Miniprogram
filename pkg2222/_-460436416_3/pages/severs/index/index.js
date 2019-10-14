function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/underscore")), a = t(require("../../../utils/requestUtil")), o = t(require("../../../utils/util")), r = t(require("../../../utils/plugUtil")), s = (t(require("../../../utils/listener")), 
function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e.default = t, e;
}(require("../../../utils/client"))), i = t(require("../base-list")), n = t(require("../urls"));

getApp();

Page(e.default.extend({}, i.default, {
    ad: {
        timerId: 0
    },
    tabOffsetTop: null,
    isTabbarTapRefresh: !1,
    data: {
        isEmpty: !1,
        hasMore: !0,
        isLoading: !0,
        page: 1,
        searchShow: !1,
        param: {
            keyword: "",
            type: 0
        },
        styles: {},
        canIUse: {
            pageScrollTo: wx.canIUse("pageScrollTo")
        }
    },
    onLoad: function(t) {
        var e = this;
        s.Client.addRoute(function(t) {
            return "DuoguanInfo.push" == t.getType();
        }, function(t) {
            var a = t.getData();
            "refresh" == a.action && wx.showModal({
                content: a.nickname + "发布了新的内容，刷新看看~",
                showCancel: !0,
                success: function(t) {
                    t.cancel || e.startPullDownRefresh();
                }
            });
        }), this.registerListeners();
        var a = wx.getSystemInfoSync();
        this.setData({
            sysInfo: a,
            imgHeight: a.screenWidth / 5
        }), this.loadStorageData(), this.onPullDownRefresh(1), this.loadShareData();
    },
    onUnload: function() {
        clearInterval(this.ad.timerId), this.unRegisterListeners();
    },
    startAd: function(t) {
        var e = this;
        if (clearInterval(this.ad.timerId), t.imgs && t.imgs.length) {
            var a = 0, o = void 0 === t.ad_interval ? 3e3 : 1e3 * t.ad_interval, r = function() {
                e.setData({
                    ad_img: t.imgs[a],
                    ad_index: a
                }), a = a >= t.imgs.length - 1 ? 0 : a + 1;
            };
            this.ad.timerId = setInterval(r, o), r();
        }
    },
    onNoticeTap: function(t) {
        var e = t.currentTarget.dataset.docId;
        e && wx.navigateTo({
            url: "../detail/detail?id=" + e
        });
    },
    onPullDownRefresh: function() {
        var t = this;
        a.default.get(n.default.config.load, {
            name: "config,categorys"
        }, function(e) {
            var a = e.config, o = e.categorys;
            a.view_count = a.view_count >= 1e4 ? Math.floor(a.view_count / 100) / 100 + " 万" : a.view_count, 
            a.info_count = a.info_count >= 1e4 ? Math.floor(a.info_count / 100) / 100 + " 万" : a.info_count, 
            a.share_count = a.share_count >= 1e4 ? Math.floor(a.share_count / 100) / 100 + " 万" : a.share_count;
            var r = [], s = {}, i = -1;
            for (var n in o) {
                n % 10 == 0 && (r[++i] = []);
                var l = o[n];
                r[i].push(l);
                try {
                    s[l.id] = JSON.parse(l.style ? l.style : "{}");
                } catch (t) {
                    console.error(t);
                }
            }
            wx.setStorage({
                key: "servers_config",
                data: a
            }), wx.setStorage({
                key: "servers_categorys",
                data: r
            }), wx.setStorage({
                key: "servers_styles",
                data: s
            }), t.setData({
                config: a,
                categorys: r,
                styles: s
            }), t.startAd(a);
        }, this, {
            isShowLoading: !1,
            completeAfter: function() {
                wx.createSelectorQuery && setTimeout(t.updateTabOffsetTop, 500);
            }
        }), a.default.get(n.default.document.lists, e.default.extend({}, this.data.param), function(e) {
            t.onDataHandler(e), t.onSetData(e, 1), wx.setStorage({
                key: "servers_data",
                data: e
            });
        }, this, {
            completeAfter: function() {
                wx.stopPullDownRefresh(), t.isTabbarTapRefresh || r.default.popup(t, "DuoguanInfo"), 
                t.isTabbarTapRefresh = !1;
            }
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        this.setData({
            isLoading: !0
        }), a.default.get(n.default.document.lists, e.default.extend({
            _p: this.data.page + 1
        }, this.data.param), function(e) {
            t.onDataHandler(e), t.onSetData(e, t.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    updateTabOffsetTop: function() {
        var t = this, e = wx.createSelectorQuery();
        e.select("#tab").boundingClientRect(), e.selectViewport().scrollOffset(), e.exec(function(e) {
            e[0] && e[1] && (e[1].scrollTop > 0 ? e[0].top > 0 ? t.tabOffsetTop = e[1].scrollTop + e[0].top : t.tabOffsetTop = e[1].scrollTop - Math.abs(e[0].bottom) + 2 * e[0].height : t.tabOffsetTop = e[0].top);
        });
    },
    onDataHandler: function(t) {
        (0, e.default)(t).map(function(t) {
            return t.good = o.default.formatSmartNumber(t.good), t.click = o.default.formatSmartNumber(t.click), 
            t.comment = o.default.formatSmartNumber(t.comment), t.share = o.default.formatSmartNumber(t.share), 
            t.create_time = o.default.formatSmartTime(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), 
            t;
        });
    },
    onAdTap: function(t) {
        a.default.pushFormId(t.detail.formId);
        var e = this.data.config.ad_ids[this.data.ad_index];
        e <= 0 || wx.navigateTo({
            url: "../detail/detail?id=" + e
        });
    },
    loadStorageData: function() {
        this.setData({
            data: wx.getStorageSync("servers_data"),
            categorys: wx.getStorageSync("servers_categorys"),
            styles: wx.getStorageSync("servers_styles")
        });
    },
    onShowSearchTap: function() {
        this.setData({
            searchShow: !0
        });
    },
    onHideSearchBlur: function(t) {
        t.detail.value || this.setData({
            searchShow: !1
        });
    },
    onSearchSubmit: function(t) {
        this.data.param.keyword = t.detail.value.keyword, console.log(this.data.param), 
        this.onPullDownRefresh();
    },
    onClearKeywordTap: function() {
        this.data.param.keyword = "", this.setData({
            param: this.data.param
        });
    },
    onSwtchTabTap: function(t) {
        var e = this, o = t.detail.target.dataset.index, r = this.data.param;
        a.default.pushFormId(t.detail.formId), o != r.type && (this.isTabbarTapRefresh = !0, 
        1 == o ? (wx.showToast({
            title: "正在获取你的位置,请稍后..",
            icon: "loading",
            duration: 1e4,
            mask: !1
        }), wx.getLocation({
            success: function(t) {
                r.type = o, r.lat = t.latitude, r.lng = t.longitude, e.setData({
                    param: r
                }), e.startPullDownRefresh();
            },
            fail: function() {
                wx.hideLoading(), wx.showModal({
                    title: "温馨提示",
                    content: "获取位置信息失败，请检查网络是否良好，以及是否禁用位置",
                    showCancel: !1
                });
            }
        })) : (r.type = o, this.setData({
            param: r
        }), this.startPullDownRefresh()));
    },
    onPageScroll: function(t) {
        if (null !== this.tabOffsetTop) {
            var e = this.data.isTabFixed, a = t.scrollTop >= this.tabOffsetTop;
            e != a && this.setData({
                isTabFixed: a
            });
        }
    },
    onScrollTopTap: function() {
        wx.pageScrollTo({
            scrollTop: 0
        });
    }
}));