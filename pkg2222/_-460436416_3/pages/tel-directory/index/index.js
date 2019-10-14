function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../utils/underscore")), e = t(require("../../../utils/requestUtil")), n = t(require("../../../utils/util")), i = (t(require("../../../utils/listener")), 
require("../../../utils/data")), o = i.duoguan_host_api_url + "/index.php/addon/DuoguanTel/", s = require("../../../utils/data");

Page({
    ad: {
        timerId: 0
    },
    data: {
        data: [],
        hasMore: !0,
        isLoading: !0,
        config: {},
        param: {
            type: 0
        },
        city: "未定位",
        isLocationSuccess: !1,
        location: {
            lat: 0,
            lng: 0
        },
        keyword: "",
        this_keywords: ""
    },
    chang_this_keyword: function(t) {
        this.setData({
            this_keywords: t.detail.value
        });
    },
    search_index_data: function() {
        console.log(12321312);
        var t = this;
        wx.navigateTo({
            url: "../telList/telList?keyword=" + t.data.this_keywords
        });
    },
    go_service_bind: function(t) {
        wx.navigateTo({
            url: "../allService/allService"
        });
    },
    go_record_bind: function(t) {
        wx.navigateTo({
            url: "../myRecord/myRecord?type=" + t.currentTarget.dataset.type
        });
    },
    go_detail_bind: function(t) {
        wx.navigateTo({
            url: "../detail/detail?id=" + t.currentTarget.id
        });
    },
    onLoad: function(t) {
        this.loadShareData(), this.onPullDownRefresh(), this.getLocation();
    },
    onPullDownRefresh: function() {
        var t = this;
        0 == this.data.isLocationSuccess && this.setData({
            is_dingwei: !1
        }), e.default.get(o + "Api/loadConfig", {}, function(a) {
            t.setData({
                config: a
            }), t.startAd(a);
        }, this, {
            isShowLoading: !1
        }), wx.hideShareMenu(), e.default.get(s.duoguan_get_share_data_url, {
            mmodule: "duoguan_tel"
        }, function(a) {
            t.shareInfo = a, wx.showShareMenu();
        }), e.default.get(o + "Api/documentList", a.default.extend({}, this.data.param), function(a) {
            t.onDataHandler(a), t.onSetData(a, 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        this.setData({
            isLoading: !0
        }), e.default.get(o + "Api/documentList", a.default.extend({
            _p: this.data.page + 1
        }, this.data.param), function(a) {
            t.onDataHandler(a), t.onSetData(a, t.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(t) {
        (0, a.default)(t).map(function(t) {
            return t.create_time = n.default.formatSmartTime(1e3 * t.create_time, "yyyy-MM-dd hh:mm"), 
            t;
        });
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
    startAd: function(t) {
        var a = this;
        clearInterval(this.ad.timerId);
        var e = 0, n = (void 0 === t.ad_interval || t.ad_interval, function() {
            var n = {};
            n.notice = t.notices[e].t_name, n.notice_index = e, e = e >= t.notices.length - 1 ? 0 : e + 1, 
            a.setData(n);
        });
        this.ad.timerId = setInterval(n, 3e3), n();
    },
    onAdTap: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.config.ad_ids[a];
        e <= 0 || wx.navigateTo({
            url: "../detail/detail?id=" + e
        });
    },
    onSwtchTabTap: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.param;
        a != e.type && (e.type = a, this.setData({
            param: e
        }), 1 == a ? 0 == this.data.isLocationSuccess ? this.getLocation() : this.startPullDownRefresh() : (e.type = a, 
        this.setData({
            param: e
        }), this.startPullDownRefresh()));
    },
    onSetValueTap: function(t) {
        var a = t.currentTarget.dataset.value;
        this.setData(JSON.parse(a));
    },
    onEmptyTap: function() {},
    startPullDownRefresh: function() {
        var t = wx.getSystemInfoSync();
        wx.startPullDownRefresh && "ios" !== t.platform ? wx.startPullDownRefresh() : this.onPullDownRefresh();
    },
    onNavigateTap: function(t) {
        var a = t.currentTarget.dataset, e = a.url, n = a.type, i = {
            url: e
        };
        a.invalid || ("switch" == n ? (i.fail = function() {
            wx.navigateTo({
                url: e
            });
        }, wx.switchTab(i)) : wx.navigateTo(i));
    },
    onCallTap: function(t) {
        var a = t.currentTarget.dataset, n = a.mobile, i = a.id;
        n && wx.showModal({
            title: "温馨提示",
            content: "你将要拨打电话：" + n,
            success: function(t) {
                t.cancel || wx.makePhoneCall({
                    phoneNumber: n,
                    success: function(t) {
                        e.default.get(s.duoguan_host_api_url + "/index.php/addon/DuoguanTel/Api/documentCall", {
                            id: i
                        }, function(t) {}, this, {});
                    }
                });
            }
        });
    },
    loadShareData: function() {
        var t = this;
        wx.showShareMenu && wx.hideShareMenu(), e.default.get(i.duoguan_get_share_data_url, {
            mmodule: "duoguan_tel"
        }, function(a) {
            t.shareInfo = a, wx.showShareMenu && wx.showShareMenu();
        });
    },
    onShareAppMessage: function() {
        return this.shareInfo = this.shareInfo || {}, {
            title: this.shareInfo.title || "电话本",
            desc: this.shareInfo.desc || "",
            path: "pages/tel-directory/index/index"
        };
    },
    getLocation: function() {
        var t = this;
        wx.getLocation({
            type: "gcj02",
            success: function(a) {
                var e = a.latitude, n = a.longitude;
                t.setData({
                    isLocationSuccess: !0,
                    location: {
                        lat: e,
                        lng: n
                    },
                    param: {
                        type: t.data.param.type,
                        lat: e,
                        lng: n
                    },
                    is_dingwei: !0
                }), t.startPullDownRefresh();
            },
            fail: function(a) {
                (a.errMsg.indexOf("deny") > 0 || a.errMsg.indexOf("denied") > 0) && wx.showModal({
                    title: "温馨提示",
                    content: "为了给您提供更好的服务，请授权您的地理位置信息",
                    showCancel: !0,
                    success: function(a) {
                        a.confirm ? wx.openSetting({
                            complete: function(a) {
                                1 == a.authSetting["scope.userLocation"] ? (wx.hideToast(), t.setData({
                                    is_dingwei: !0
                                }), t.getLocation()) : t.getLocation();
                            }
                        }) : a.cancel && (t.setData({
                            param: {
                                type: 0
                            }
                        }), t.startPullDownRefresh());
                    }
                });
            }
        });
    },
    openLocation: function(t) {
        var a = t.currentTarget.dataset.index || 0, e = this.data.data[a], n = e.t_lat, i = e.t_lng, o = e.t_address, s = e.t_name;
        console.log(t), wx.openLocation({
            latitude: parseFloat(n),
            longitude: parseFloat(i),
            address: o,
            name: s,
            scale: 28
        });
    },
    inputKeyword: function(t) {
        var a = t.detail.value;
        this.setData({
            keyword: a
        });
    },
    blurKeyword: function(t) {
        var a = "../telList/telList" + ("?keyword=" + this.data.keyword);
        wx.navigateTo({
            url: a
        });
    }
});