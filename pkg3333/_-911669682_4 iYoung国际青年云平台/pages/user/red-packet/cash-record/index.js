function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = a(require("../../../../utils/dg.js")), e = a(require("../../../../utils/requestUtil.js")), i = require("../../../../utils/data.js"), s = (a(i), 
a(require("../../../../utils/underscore.js"))), r = i.duoguan_host_api_url + "/index.php/addon/Wallet";

Page({
    data: {
        listUrl: "/Api/record",
        search: [ {
            name: "type",
            value: "cash_withdrawal_record"
        } ],
        list: [],
        pageNumber: 1,
        pageSize: 20,
        hasMore: !0,
        isShowLoading: !0,
        nodata: !1
    },
    onLoad: function(a) {
        t.default.setNavigationBarColor({
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
            isShowLoading: !1,
            search: [ {
                name: "type",
                value: "redwallet_record"
            } ]
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
        var i = r + a.url, o = {
            _p: a.pageNumber,
            _r: a.pageSize,
            search: a.search
        };
        e.default.get(i, o, function(e) {
            var i = t.data.list;
            0 != (e = e || []).length && (0, s.default)(e).map(function(a) {
                0 == a.status ? a.status_text_class = "grey" : 1 == a.status ? a.status_text_class = "green" : 2 == a.status ? a.status_text_class = "red" : a.status_text_class = "grey";
            }), i = 1 == a.pageNumber ? e || [] : i.concat(e || []), t.setData({
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