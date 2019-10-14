getApp(), require("../../utils/util");

var t = require("../../utils/requestUtil"), a = (require("../../utils/underscore"), 
require("../../utils/data")), e = require("../../wxParse/wxParse.js"), s = require("./extend.js");

Page({
    categoryId: 0,
    data: {
        num: 1
    },
    onLoad: function(t) {
        s.config(this), this.categoryId = t.cid, this.setDataOld = this.setData, this.setData = function(t) {
            this.setDataOld(t);
            for (var a in t) if (a.startsWith("content_")) {
                var e = a.substring(a.indexOf("_") + 1, a.length);
                this.data.data[e].content = t[a], this.data.data[e].num = 1, this.setDataOld({
                    data: this.data.data
                });
            }
        };
    },
    onShow: function() {
        var s = this;
        t.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/documents.html", {
            cid: this.categoryId,
            ver: "2.0.0"
        }, function(t, a) {
            if (t.length) {
                s.data.data = t;
                for (var i = 0, d = 0, n = [], r = 0; r < t.length; r++) e.wxParse("content_" + r, "html", t[r].content, s), 
                i += parseFloat(t[r].price), d += parseFloat(t[r].earnest_price), n.push(t[r].id);
                s.setData({
                    total: i,
                    earnest_total: d,
                    pinfo: a.parent,
                    data: s.data.data,
                    ids: n.join(",")
                });
            } else wx.showModal({
                content: "服务信息未找到，请稍后再试...",
                showCancel: !1,
                success: function() {
                    wx.navigateBack();
                }
            });
        });
    },
    onNavigateTap: function(t) {
        wx.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    onShareAppMessage: function() {
        return this.data = this.data || {}, {
            title: this.data.title || "微预约",
            desc: this.data.desc || "",
            path: "pages/reservation/detail?cid=" + this.categoryId
        };
    },
    reduce: function(t) {
        var a = t.currentTarget.dataset.index;
        this.data.data[a].num <= 1 ? this.data.data[a].num = 1 : (this.data.data[a].num = --this.data.data[a].num, 
        this.setData({
            data: this.data.data,
            total: parseFloat((this.data.total - parseFloat(this.data.data[a].price)).toFixed(2)),
            earnest_total: parseFloat((this.data.earnest_total - parseFloat(this.data.data[a].earnest_price)).toFixed(2)),
            num: this.data.data[a].num
        }));
    },
    add: function(t) {
        var a = t.currentTarget.dataset.index;
        this.data.data[a].num = ++this.data.data[a].num, this.setData({
            data: this.data.data,
            total: parseFloat((this.data.total + parseFloat(this.data.data[a].price)).toFixed(2)),
            earnest_total: parseFloat((this.data.earnest_total + parseFloat(this.data.data[a].earnest_price)).toFixed(2)),
            num: this.data.data[a].num
        });
    }
});