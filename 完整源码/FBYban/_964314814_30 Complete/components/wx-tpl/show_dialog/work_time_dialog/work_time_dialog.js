var t = require("../../../../util/util.js"), e = getApp();

Component({
    properties: {
        isShowChooseDateDialog: {
            type: Boolean,
            value: !1,
            observer: function(t, e) {
                t && this.openAnimation();
            }
        },
        goodsId: {
            type: String,
            value: ""
        }
    },
    data: {
        scrollTop: 0,
        currentIndex: 0,
        rightData: [],
        dataList: [],
        animation: !1,
        chooseYear: "",
        chooseHour: "",
        chooseStartH: "",
        chooseEndH: ""
    },
    ready: function() {
        this.getDatas();
    },
    methods: {
        _closeThisDialog: function() {
            var t = this;
            this.setData({
                isShowChooseDateDialog: !1
            }, function() {
                t.setData({
                    animation: !1
                }), t.triggerEvent("closeChooseDate", {
                    obj: null
                });
            });
        },
        _confirm: function() {
            var t = this;
            t.setData({
                isShowChooseDateDialog: !1,
                animation: !1
            });
            var e = {
                year: this.data.chooseYear,
                time: this.data.chooseHour
            };
            t.triggerEvent("closeChooseDate", {
                obj: e
            });
        },
        openAnimation: function() {
            var t = this;
            setTimeout(function() {
                t.setData({
                    animation: !0
                });
            }, 10);
        },
        close: function() {},
        getDatas: function() {
            var a = this, o = (this.data.currentChoose, e.globalData.shopMHost);
            wx.request({
                url: o + "/xcx/goodsReserve/info",
                data: {
                    goodsId: a.data.goodsId,
                    orgId: e.globalData.orgId
                },
                method: "post",
                success: function(e) {
                    var o = e.data.data.dateList, s = void 0;
                    void 0 != o ? (o[0].isChoose = !0, s = t.GetTime(o[0].reserveDate).replace(/\./g, "-")) : o = [], 
                    a.setData({
                        dataList: o,
                        currentIndex: 0,
                        rightData: o[0].reserveTimeList,
                        chooseYear: s
                    }, function() {});
                }
            });
        },
        _chooseDay: function(e) {
            var a = e.currentTarget.dataset.index, o = e.currentTarget.dataset.time, s = t.GetTime(o);
            "" != s && (s = s.replace(/\./g, "-"));
            for (var i = this.data.dataList, r = 0; r < i.length; r++) i[r].isChoose = r == a;
            this.setData({
                dataList: i,
                currentIndex: a,
                rightData: i[a].reserveTimeList,
                scrollTop: 0
            }, function() {});
        },
        _chooseDetailTime: function(e) {
            for (var a = this, o = e.currentTarget.dataset.index, s = this.data.dataList, i = "", r = 0; r < s.length; r++) if (1 == s[r].isChoose) {
                "" != (i = t.GetTime(s[r].reserveDate)) && (i = i.replace(/\./g, "-"));
                break;
            }
            var n = "";
            a._reSetStatu();
            for (var h = s[this.data.currentIndex].reserveTimeList, c = 0; c < h.length; c++) o == c ? (h[c].hasBooked = !0, 
            n = h[c].timeStr) : h[c].hasBooked = !1;
            this.setData({
                dataList: s,
                chooseYear: i,
                chooseHour: n
            });
        },
        _reSetStatu: function() {
            for (var t = this.data.dataList, e = 0; e < t.length; e++) for (var a = t[e].reserveTimeList, o = 0; o < a.length; o++) a[o].hasBooked = !1;
        },
        _removeZero: function(t) {
            if ("" != t) return console.log(Number(t)), Number(t);
        }
    }
});