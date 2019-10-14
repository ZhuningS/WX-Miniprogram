var t = getApp();

Component({
    properties: {
        isShowChooseDialog: {
            type: Boolean,
            value: !1,
            observer: function(t, e) {
                t && this.openAnimation();
            }
        },
        currentChoose: {
            type: Object,
            value: null,
            observer: function(t, e) {}
        },
        openTimes: {
            type: String,
            value: "",
            observer: function(t, e) {
                this.initData();
            }
        },
        params: {
            type: String,
            value: ""
        },
        timeSection: {
            type: String,
            value: ""
        },
        reserveDate: {
            type: String,
            value: ""
        },
        industryName: {
            type: String,
            value: ""
        }
    },
    ready: function() {
        this.getDatas();
    },
    data: {
        dataList: [],
        diaologChoose: {},
        animation: !1
    },
    methods: {
        _closeDialog: function() {
            var t = this;
            this.setData({
                animation: !1
            }), t.triggerEvent("closeEmployee", {});
        },
        _checkThisCol: function(t) {
            for (var e = this.data.dataList, a = t.currentTarget.dataset.index, o = (e[a], {}), i = e.length - 1; i >= 0; i--) a == i ? (e[i].isChoose = !0, 
            o = e[i]) : e[i].isChoose = !1;
            this.setData({
                dataList: e,
                diaologChoose: o
            }, function() {});
        },
        _ConfirmDialog: function() {
            this.setData({
                animation: !1
            }), this.triggerEvent("closeEmployee", {
                obj: this.data.diaologChoose
            });
        },
        initData: function() {
            for (var t = this.data.currentChoose, e = this.data.dataList, a = 0; a < e.length; a++) t.id == e[a].id ? e[a].isChoose = !0 : e[a].isChoose = !1;
            this.setData({
                dataList: e,
                diaologChoose: t
            });
        },
        close: function() {},
        openAnimation: function() {
            var t = this;
            setTimeout(function() {
                t.setData({
                    animation: !0
                });
            }, 10);
        },
        getDatas: function() {
            var e = this, a = this.data.currentChoose, o = this.data.params, i = t.globalData.shopMHost;
            wx.request({
                url: i + "/xcx/org/employee/batchGet",
                method: "post",
                data: {
                    staffIds: o,
                    timeSection: e.data.reserveDate,
                    reserveDate: e.data.timeSection
                },
                success: function(t) {
                    var o = t.data.data;
                    console.log(t);
                    for (var i = 0; i < o.length; i++) a.id == o[i].id ? o[i].isChoose = !0 : o[i].isChoose = !1;
                    e.setData({
                        dataList: o
                    });
                }
            });
        }
    }
});