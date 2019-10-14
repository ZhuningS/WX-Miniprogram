function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var e = a(require("../../../../utils/dg.js")), t = a(require("../../../../utils/requestUtil.js")), i = require("../../../../utils/data.js"), o = (a(i), 
a(require("../../../../utils/underscore.js"))), r = i.duoguan_host_api_url + "/index.php/addon/Wallet";

Page({
    data: {
        listUrl: "/Api/record",
        search: [ {
            name: "type",
            value: "redwallet_record"
        } ],
        list: [],
        pageNumber: 1,
        pageSize: 20,
        hasMore: !0,
        isShowLoading: !0,
        nodata: !1
    },
    onLoad: function(a) {
        e.default.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#f35150",
            animation: {
                duration: 100,
                timingFunc: "ease"
            }
        }), this.initialize(a);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.setData({
            list: [],
            pageNumber: 1,
            pageSize: 20,
            hasMore: !0,
            isShowLoading: !1
        });
        var a = {};
        this.initialize(a), e.default.stopPullDownRefresh();
    },
    onReachBottom: function() {
        var a = {
            pageNumber: this.data.pageNumber,
            pageSize: this.data.pageSize,
            hasMore: this.data.hasMore,
            url: this.data.listUrl,
            search: this.getSearch()
        };
        this.reachBottom(a);
    },
    initialize: function(a) {
        a = {
            pageNumber: 1,
            pageSize: this.data.pageSize,
            hasMore: !0,
            url: this.data.listUrl,
            search: this.getSearch()
        }, this.reachBottom(a);
    },
    reachBottom: function(a) {
        var e = this;
        if (!a.hasMore) return this.setData({
            isShowLoading: !1
        }), !1;
        var i = r + a.url, n = {
            _p: a.pageNumber,
            _r: a.pageSize,
            search: a.search
        };
        t.default.get(i, n, function(t) {
            var i = e.data.list;
            0 != (t = t || []).length && (0, o.default)(t).map(function(a) {}), i = 1 == a.pageNumber ? t || [] : i.concat(t || []), 
            e.setData({
                isShowLoading: !1,
                hasMore: !(t.length < e.data.pageSize),
                pageNumber: a.pageNumber + 1,
                list: i,
                nodata: 0 != i.length
            });
        }, this, {
            isShowLoading: this.data.isShowLoading
        });
    },
    getSearch: function() {
        return this.data.search;
    }
});