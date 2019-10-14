getApp();

var t = require("../../../utils/util.js"), e = require("../../../utils/common.js"), a = require("../../../common/PageBase.js"), i = (require("../../../utils/pagination.js"), 
require("../../../utils/ajax.js"));

Page(e.extendPage(a, {
    data: {
        dataLoaded: !1,
        goodsList: [],
        double: !0,
        toId: "",
        current: 0
    },
    onLoad: function(t) {
        var a = this;
        e.initApp({
            loginSuc: function() {
                a._getList();
            }
        });
    },
    onPullDownRefresh: function() {
        this._pagination && this._pagination.flush(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        console.log("开始");
    },
    _changeQueue: function() {
        this.data.double = !this.data.double, this.setData({
            double: this.data.double
        });
    },
    _getList: function() {
        var t = this, e = this;
        i.G({
            url: "/apis/home/goods.category/index",
            data: {
                page: 1,
                size: 999,
                cid: "",
                type: "2"
            },
            success: function(a) {
                var i = a.data.item, s = a.data.catelist;
                if (e._actTimer && clearTimeout(e._actTimer), i.length > 0) {
                    var o = [];
                    i.forEach(function(t, e) {
                        o.push({
                            sec: t.lasttime
                        });
                    }), e.timeArr = o, e.setData({
                        timeArr: o
                    }), e._actTimerDown();
                }
                t.setData({
                    dataLoaded: !0,
                    catelist: s,
                    goodsList: i
                });
            }
        });
    },
    _actTimerDown: function() {
        var e = this, a = e.data.timeArr || e.timeArr;
        a.forEach(function(i, s) {
            if (i.sec <= 0) return e.data.goodsList.splice(s, 1), a.splice(s, 1), clearTimeout(e._actTimer), 
            void e.setData({
                goodsList: e.data.goodsList
            });
            i.timeStr = t.getTimeBySec(i.sec), i.sec = i.sec - 1e3;
        }), a.length > 0 && (e.setData({
            timeArr: a
        }), e._actTimer = setTimeout(function() {
            e._actTimerDown();
        }, 1e3));
    },
    _changeItem: function(t) {
        var e = this;
        console.log("index---" + t.target.dataset.index);
        var a = t.target.dataset.cid || "", s = t.target.dataset.index;
        e.setData({
            current: s,
            cid: a,
            toId: "s" + (t.target.dataset.index - 2)
        }), i.G({
            url: "/apis/home/goods.category/index",
            data: {
                page: 1,
                size: 999,
                cid: a,
                type: "2"
            },
            success: function(t) {
                var a = t.data.item;
                e.setData({
                    goodsList: a
                });
            }
        });
    }
}));