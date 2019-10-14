function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = a(require("../../../../utils/dg.js")), e = a(require("../../../../utils/requestUtil.js")), i = require("../../../../utils/data.js"), r = (a(i), 
a(require("../../../../utils/underscore.js"))), o = i.duoguan_host_api_url + "/index.php/addon/Wallet";

Page({
    data: {
        listUrl: "/Api/record",
        search: [ {
            name: "type",
            value: "activity_promot_record"
        } ],
        list: [],
        pageNumber: 1,
        pageSize: 20,
        hasMore: !0,
        isShowLoading: !1,
        nodata: !1
    },
    onLoad: function(a) {
        var e = (a.title || "") + "记录列表";
        t.default.setNavigationBarTitle({
            title: e
        });
        var i = a.type || "";
        "" != i && this.setData({
            search: [ {
                name: "type",
                value: i
            } ]
        }), t.default.setNavigationBarColor({
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
            isShowLoading: !0
        });
        var a = {};
        this.initialize(a), t.default.stopPullDownRefresh();
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
        var t = this;
        if (!a.hasMore) return this.setData({
            isShowLoading: !1
        }), !1;
        var i = o + a.url, s = {
            _p: a.pageNumber,
            _r: a.pageSize,
            search: a.search
        };
        e.default.get(i, s, function(e) {
            var i = t.data.list;
            0 != (e = e || []).length && (0, r.default)(e).map(function(a) {}), i = 1 == a.pageNumber ? e || [] : i.concat(e || []), 
            t.setData({
                isShowLoading: !1,
                hasMore: !(e.length < t.data.pageSize),
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