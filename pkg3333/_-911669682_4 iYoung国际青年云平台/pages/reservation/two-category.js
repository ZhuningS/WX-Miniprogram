getApp();

var t = require("../../utils/util"), a = require("../../utils/requestUtil"), e = require("../../utils/underscore"), i = require("../../utils/data"), s = require("./extend.js");

Page({
    pid: 0,
    data: {
        isEmpty: !1,
        hasMore: !0,
        page: 1,
        data: [],
        cids: "",
        total: 0,
        earnest_total: 0,
        checkvalue: "",
        nums: ""
    },
    onLoad: function(t) {
        s.config(this), this.pid = t.cid, this.onPullDownRefresh(1);
    },
    onPullDownRefresh: function(t) {
        var e = this;
        t = t || !1, a.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/categorys.html", {
            pid: this.pid
        }, function(t) {
            e.onDataHandler(t), e.onSetData(t, 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: t
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.hasMore) return console.log("没有更多了..."), void wx.stopPullDownRefresh();
        a.get(i.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/categorys.html", {
            _p: this.data.page + 1,
            pid: this.pid
        }, function(a) {
            t.onDataHandler(a), t.onSetData(a, t.data.page + 1);
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onDataHandler: function(a) {
        e(a).map(function(a) {
            return a.create_time = t.format(1e3 * a.create_time, "yyyy-MM-dd hh:mm"), a.num = 1, 
            a.isshow = !1, a;
        });
    },
    onSetData: function(t, a) {
        t = t || [], this.setData({
            page: void 0 !== a ? a : this.data.page,
            data: 1 === a || void 0 === a ? t : this.data.data.concat(t),
            hasMore: void 0 !== a && 20 === t.length,
            isEmpty: (1 === a || void 0 === a) && 0 === t.length
        });
    },
    onNavigateTap: function(t) {
        wx.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    onChanged: function(t) {
        var a = this, i = t.detail.value;
        this.setData({
            checkvalue: i.join(",")
        });
        var s = [];
        s[1] = this.data.checkvalue.split(","), s[0] = this.data.cids.split(",");
        var o = e.difference(s[0], s[1]), n = 0, d = 0, r = [];
        e.each(i, function(t) {
            var i = e.find(a.data.data, {
                id: t
            });
            i.isshow = !0, i.price = parseFloat(i.price), i.earnest_price = parseFloat(i.earnest_price);
            var s = parseFloat(i.num * i.price).toFixed(2), o = parseFloat(i.num * i.earnest_price).toFixed(2);
            n += parseFloat(s), d += parseFloat(o), r.push(i.num);
        }), "" != o && e.each(o, function(t) {
            e.find(a.data.data, {
                id: t
            }).isshow = !1;
        }), "" == i && e.each(a.data.cids.split(","), function(t) {
            e.find(a.data.data, {
                id: t
            }).isshow = !1;
        }), this.setData({
            cids: i.join(","),
            total: n.toFixed(2),
            earnest_total: d.toFixed(2),
            data: this.data.data,
            nums: r.join(",")
        });
    },
    reduce: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.cids, i = this.data.nums, s = this.data.data[a], o = parseFloat(s.price), n = parseFloat(s.earnest_price), d = parseFloat(this.data.total), r = parseFloat(this.data.earnest_total);
        if (s.num <= 1) s.num = 1; else {
            s.num--, d = (d -= o).toFixed(2), r = (r -= n).toFixed(2);
            var l = [], u = [];
            if ("" != e && "" != i) {
                var h = (u = e.split(",")).indexOf(s.id);
                (l = i.split(","))[h] = s.num;
            }
            this.setData({
                data: this.data.data,
                total: d,
                earnest_total: r,
                nums: l.join(",")
            }), console.log(this.data.nums);
        }
    },
    add: function(t) {
        var a = parseFloat(this.data.total), e = parseFloat(this.data.earnest_total), i = this.data.cids, s = this.data.nums, o = t.currentTarget.dataset.index, n = this.data.data[o], d = parseFloat(n.price), r = parseFloat(n.earnest_price);
        n.num++, a = (a += d).toFixed(2), e = (e += r).toFixed(2);
        var l = [], u = [];
        if ("" != i && "" != s) {
            var h = (u = i.split(",")).indexOf(n.id);
            (l = s.split(","))[h] = n.num;
        }
        this.setData({
            data: this.data.data,
            total: a,
            earnest_total: e,
            nums: l.join(",")
        }), console.log(this.data.nums);
    }
});