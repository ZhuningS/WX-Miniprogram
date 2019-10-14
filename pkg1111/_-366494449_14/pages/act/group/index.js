var a = getApp(), t = require("../../../utils/util.js"), e = require("../../../utils/common.js"), i = require("../../../common/PageBase.js"), s = (require("../../../utils/wxParse/wxParse.js"), 
require("../../../utils/ajax.js")), d = require("../../../utils/wxUtil.js");

Page(e.extendPage(i, {
    data: {
        dataLoaded: !1,
        num: null,
        isPay: 0,
        teamid: "",
        counter: {
            number: 1,
            minusDisabled: !1,
            addDisabled: !1
        }
    },
    onLoad: function(t) {
        var i = this, s = "";
        "" != t.invite && void 0 !== t.invite && (s = t.invite.split("_")[1], console.log("有invite====", s), 
        a.setCardid(s)), e.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var e = i, s = t.id || "", d = t.teamid || "", r = (t.invite, a.getAuth()), n = a.getCardid();
                e.setData({
                    id: s,
                    teamid: d,
                    isAuth: r,
                    card_id: n
                }), "" != d ? e._groupBuy() : e._getGroup();
            }
        });
    },
    _groupBuy: function() {
        var a = this, t = a.data.id, e = a.data.card_id, i = a.data.teamid;
        s.P({
            url: "/apis/home/active.spread/createOrder",
            data: {
                id: t,
                card_id: e,
                team_id: i || ""
            },
            success: function(t) {
                a._getGroup();
            }
        });
    },
    getUserInfo: function(i) {
        var s = i.detail.userInfo;
        s && void 0 != s && (t.showOK("登录成功"), e.updateUserInfo(s), a.setAuth(!0), this.setData({
            isAuth: !0
        }));
    },
    _getGroup: function() {
        var a = this, e = a.data.id, i = a.data.teamid;
        s.G({
            url: "/apis/home/active.spread/get",
            data: {
                id: e,
                join_order_id: i || ""
            },
            success: function(e) {
                if (0 != e.code) return a.setData({
                    dataLoaded: !0
                }), t.showWarn(e.msg), void setTimeout(function() {
                    wx.navigateBack({});
                }, 3e3);
                var i = e.data, s = i.rule.rule_1_share - i.joins.length, d = i.rule.rule_3_num - i.joins.length, r = i.fee - i.rule.rule_1_money, n = i.fee - i.rule.rule_2_money;
                "1" == i.user_log.paystatus && a.setData({
                    isPay: 1
                }), a.setData({
                    person: s,
                    person3: d,
                    actInfo: i,
                    discountRule1Price: r,
                    discountRule2Price: n,
                    isSuccess: i.user_log.issuccess,
                    dataLoaded: !0
                });
            }
        });
    },
    _actTimerDown: function() {
        var a = this, e = a._lastTime, i = t.getTimeBySec(e);
        if (a.setData({
            lastTimeStr: i
        }), e <= 0) return clearTimeout(a._actTimer), void a._initPage();
        a._lastTime = a._lastTime - 1e3, a._actTimer = setTimeout(function() {
            a._actTimerDown();
        }, 1e3);
    },
    _formSubmit: function(a) {
        var e = this, i = (a.detail.formId, a.detail.value);
        console.log("obj====", i);
        var d, r, n = JSON.stringify(i), o = e.data, u = o.id, c = o.card_id, l = (o.params, 
        o.teamid);
        r = {
            num: 1,
            id: u,
            card_id: c,
            ext: n
        }, 3 == e.data.actInfo.rule_type && (e.data.actInfo.user_log.id == e.data.teamid || "" == e.data.teamid ? r.group_type = 2 : r.group_type = 3, 
        r.join_order_id = l), d = "/apis/home/active.spread/signup", console.log("ajaxParams====", r), 
        s.P({
            url: d,
            data: r,
            success: function(a) {
                if (0 == a.code) {
                    var i = a.data;
                    e.setData({
                        orderId: i.id
                    }), "" == l && e.setData({
                        teamid: i.id
                    });
                    var s = {
                        timeStamp: String(i.timestamp),
                        nonceStr: i.nonce_str,
                        package: i.package,
                        paySign: i.sign
                    };
                    e._paySuccess(s);
                } else t.showWarn(a.msg);
            }
        });
    },
    _paySuccess: function(a) {
        d.wxPay(a), a.success = function() {
            var a = "/pages/act/group/index?id=" + this.data.id + "&teamid=" + this.data.teamid;
            wx.redirectTo({
                url: a
            });
        }.bind(this), a.fail = function() {
            var a = this.data.teamid, e = this.data.id;
            t.showWarn("支付失败", function() {
                var t = "/pages/act/group/index?id=" + e + "&teamid=" + a;
                wx.redirectTo({
                    url: t
                });
            }());
        }.bind(this);
    },
    _changeNum: function(a) {
        var t = parseInt(a.detail.value) || 1, e = this.data.counter;
        e.number = t, this.setData(e);
    },
    onShareAppMessage: function(t) {
        var e, i = this, s = i.data.actInfo.id, d = i.data.actInfo.title, r = a.getUid() + "_" + a.getCardid(), n = i.data.actInfo.head_map, o = i.data.teamid;
        return e = 3 == i.data.actInfo.rule_type ? "pages/act/group/index?id=" + s + "&teamid=" + o + "&invite=" + r : "/pages/act/index/index?id=" + s + "&invite=" + r, 
        console.log(e), {
            title: d,
            path: e,
            imageUrl: n,
            success: function(a) {},
            fail: function(a) {}
        };
    }
}));