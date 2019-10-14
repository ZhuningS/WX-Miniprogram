var t = getApp(), a = (require("../../utils/util.js"), new Date()), e = a.getFullYear(), s = a.getMonth() + 1, o = a.getDate(), l = (a.getDay(), 
[ e, s, o ]), i = [ {
    value: "日",
    class: "weekend"
}, {
    value: "一",
    class: ""
}, {
    value: "二",
    class: ""
}, {
    value: "三",
    class: ""
}, {
    value: "四",
    class: ""
}, {
    value: "五",
    class: ""
}, {
    value: "六",
    class: "weekend"
} ], n = function(t) {
    return t % 400 == 0 || t % 4 == 0 && t % 100 != 0;
}, r = function(t, a, l) {
    return t == e && a == s && l == o;
}, c = function(t, a) {
    return (t + a) % 7 == 0 || (t + a - 1) % 7 == 0;
}, d = function(t, a) {
    return new Date(t + "/" + a + "/02 00:00:00").getUTCDay();
}, g = function(t, a) {
    var e = n(t);
    return 2 == s && e ? 29 : 2 != s || e ? [ 4, 6, 9, 11 ].includes(a) ? 30 : 31 : 28;
}, u = function(t, a) {
    return new Date(t, a, 0).getDate();
}, p = function(t, a) {
    for (var e = u(t, a), s = d(t, a), o = [], i = 1; i <= e; i++) {
        var n = r(t, a, i), p = l[0] == t && l[1] == a && l[2] == i, q = n ? "today" : "", h = p ? "selected" : "", D = {
            value: i,
            date: [ t, a, i ],
            class: "date-bg " + (c(s, i) ? "weekend" : "") + " " + q + " " + h + " " + (n && p ? "today-selected" : "")
        };
        o.push(D);
    }
    return o.slice(0, g(t, a));
};

Page({
    data: {
        currYear: e,
        currMonth: s,
        week: i,
        emptyGrids: d(e, s),
        days: p(e, s),
        selected: l,
        disabled: !1,
        logintext: "点击签到",
        lxts: 0,
        isbq: !1,
        bqtext: "点击补签",
        fwxy: !0,
        djqd: !0,
        qdtc: !0
    },
    gbrl: function() {
        this.setData({
            djqd: !0
        });
    },
    qqd: function() {
        this.setData({
            djqd: !1
        });
    },
    ycqdtc: function() {
        this.setData({
            qdtc: !0
        });
    },
    lookck: function() {
        this.setData({
            fwxy: !1
        });
    },
    queren: function() {
        this.setData({
            fwxy: !0
        });
    },
    onLoad: function() {
        function a() {
            var t = new Date(), a = t.getMonth() + 1, e = t.getDate();
            return [ t.getFullYear(), a, e ];
        }
        console.log(this.data.days, this.data.selected), console.log(a()), this.setData({
            nowtime: a()
        });
        var e = this, s = wx.getStorageSync("user_info");
        console.log(s), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesignset&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log("签到设置", t), e.setData({
                    qdset: t.data,
                    userinfo: s
                }), e.reLoad();
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagecontinuouslist&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log("查看连签奖励", t), e.setData({
                    jl: t.data
                });
            }
        }), this.lqts();
    },
    rank: function() {
        var a = this, e = wx.getStorageSync("users").id;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagejrrank&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                page: 1,
                pagesize: 10
            },
            success: function(e) {
                for (var s in console.log("JrRank", e.data), e.data) e.data[s].time3 = t.ormatDate(e.data[s].time3).substring(11);
                a.setData({
                    ranklist: e.data
                });
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemyjrrank&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: e
            },
            success: function(t) {
                console.log("MyJrRank", t.data), a.setData({
                    MyRank: t.data
                });
            }
        });
    },
    in_array: function(t, a) {
        for (var e = 0; e < a.length; e++) if (a[e].toString() == t) return !0;
        return !1;
    },
    lqts: function() {
        this.setData({
            isbq: !1
        });
        var a = this, e = wx.getStorageSync("users").id;
        console.log(e), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagecontinuous&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: e
            },
            success: function(t) {
                console.log("查看连续签到天数", t), a.setData({
                    lxts: t.data
                });
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageIsbq&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: e
            },
            success: function(t) {
                console.log("isbq", t), a.setData({
                    havebq: t.data
                });
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageuserinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: e
            },
            success: function(t) {
                console.log("个人信息", t), a.setData({
                    grjf: t.data.total_score
                });
            }
        });
    },
    reLoad: function() {
        var a = this, e = wx.getStorageSync("users").id;
        console.log(e), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemysign&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: e
            },
            success: function(s) {
                console.log("我的签到", s), a.setData({
                    wdqd: s.data
                });
                for (var o = [], l = a.data.days, i = 0; i < s.data.length; i++) o.push(s.data[i].time);
                console.log(o, l), a.in_array(a.data.nowtime.toString(), o) ? (console.log("今日已签到"), 
                a.setData({
                    disabled: !0,
                    logintext: "今日已签到"
                })) : (console.log("今日未签到"), a.setData({
                    disabled: !1,
                    logintext: "点击签到"
                }));
                for (var n = 0; n < l.length; n++) a.in_array(l[n].date.toString(), o) && (l[n].isqd = 1);
                t.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagespecial&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    success: function(s) {
                        console.log("Special", s);
                        for (var o = s.data, i = 0; i < o.length; i++) {
                            o[i].day = o[i].day.split("-");
                            var n = new Date(o[i].day[0], o[i].day[1] - 1, o[i].day[2]), r = n.getFullYear(), c = n.getMonth() + 1, d = n.getDate();
                            o[i].day = r + "," + c + "," + d;
                        }
                        console.log(o), a.setData({
                            special: o
                        });
                        for (var g = 0; g < l.length; g++) for (var u = 0; u < o.length; u++) l[g].date.toString() == o[u].day && (l[g].tsrq = o[u]);
                        a.setData({
                            days: l
                        }), t.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemyjrsign&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                user_id: e
                            },
                            success: function(s) {
                                console.log("jrsfqd", s), "2" == s.data && (console.log("未签到"), a.qd()), "1" == s.data && (console.log("已签到"), 
                                t.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagemyjrjf&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        user_id: e
                                    },
                                    success: function(t) {
                                        console.log("MyJrJf", t), a.setData({
                                            qdddjf: t.data
                                        });
                                    }
                                }), a.rank());
                            }
                        });
                    }
                });
            }
        });
    },
    qd: function() {
        var a = this, e = wx.getStorageSync("users").id, s = this.data.wdqd;
        console.log(a.data.nowtime, a.data.special, a.data.qdset, s);
        for (var o = a.data.qdset[0].integral, l = 0; l < a.data.special.length; l++) a.data.nowtime.toString() == a.data.special[l].day && (o = a.data.special[l].integral);
        if (0 == s.length) var i = a.data.qdset[0].one; else i = 0;
        console.log(o, i), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesign&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: e,
                time: a.data.nowtime.toString(),
                integral: o,
                one: i
            },
            success: function(t) {
                console.log(t), "1" == t.data && (a.setData({
                    qdddjf: o,
                    qdtc: !1
                }), a.reLoad(), a.lqts());
            }
        });
    },
    bq: function() {
        var a = this, e = wx.getStorageSync("users").id, s = this.data.wdqd, o = Number(this.data.grjf);
        console.log(a.data.bqtime, a.data.special, a.data.qdset, s, o);
        for (var l = a.data.qdset[0].integral, i = 0; i < a.data.special.length; i++) a.data.bqtime.toString() == a.data.special[i].day && (l = a.data.special[i].integral);
        if (0 == s.length) var n = a.data.qdset[0].one; else n = 0;
        console.log(l, n), wx.showModal({
            title: "温馨提示",
            content: "补签将会扣除您" + a.data.qdset[0].bq_integral + "积分哦",
            success: function(s) {
                s.confirm ? (console.log("用户点击确定"), Number(a.data.qdset[0].bq_integral) > o ? wx.showModal({
                    title: "提示",
                    content: "您的积分为" + o + ",不足补签扣除"
                }) : t.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagesign2&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        user_id: e,
                        time: a.data.bqtime.toString(),
                        integral: l,
                        one: n
                    },
                    success: function(t) {
                        console.log(t), a.reLoad(), a.lqts();
                    }
                })) : s.cancel && console.log("用户点击取消");
            }
        });
    },
    changeMonth: function(t) {
        var a = t.target.id, e = this.data.currYear, s = this.data.currMonth;
        s = "prev" == a ? s - 1 : s + 1, "prev" == a && s < 1 && (e -= 1, s = 12), "next" == a && s > 12 && (e += 1, 
        s = 1), this.setData({
            currYear: e,
            currMonth: s,
            emptyGrids: d(e, s),
            days: p(e, s)
        }), this.reLoad();
    },
    selectDate: function(t) {
        var a = this.data.havebq, e = this.data.nowtime, s = t.currentTarget.dataset.selected, o = this.data.days[t.currentTarget.dataset.tsrq];
        console.log(e, s, o), this.setData({
            bqtime: s
        });
        var l = new Date(e[0], e[1], e[2]), i = new Date(s[0], s[1], s[2]), n = l.getTime(), r = i.getTime();
        console.log(n, r, a), n > r ? (console.log("以前"), 2 == a ? this.setData({
            bqdisabled: !1,
            bqtext: "点击补签"
        }) : this.setData({
            bqdisabled: !0,
            bqtext: "今日已补签一次"
        }), this.setData({
            isbq: !0
        }), null != o.tsrq && wx.showModal({
            title: o.tsrq.day + "是" + o.tsrq.title,
            content: "本日签到特殊奖励" + o.tsrq.integral + "积分"
        })) : n == r ? (null != o.tsrq && wx.showModal({
            title: o.tsrq.day + "是" + o.tsrq.title,
            content: "本日签到特殊奖励" + o.tsrq.integral + "积分"
        }), console.log("今日"), this.setData({
            isbq: !1
        })) : (null != o.tsrq && wx.showModal({
            title: o.tsrq.day + "是" + o.tsrq.title,
            content: "本日签到特殊奖励" + o.tsrq.integral + "积分"
        }), console.log("以后"), this.setData({
            isbq: !1
        }));
        var c = o.value;
        this.setData({
            xz: c
        });
    },
    onPullDownRefresh: function() {
        this.reLoad(), this.lqts(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    }
});