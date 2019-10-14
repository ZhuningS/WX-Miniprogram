function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = require("../../../../utils/data.js"), a = e(require("../../../../utils/requestUtil.js")), n = e(require("../../../../utils/listener")), r = e(require("../../../../utils/underscore.js"));

Page({
    data: {
        recharge: {
            data: [],
            show: !1
        },
        conditions_index: 0
    },
    onLoad: function(e) {
        this.onPullDownRefresh(), n.default.addEventListener("user.recharge", this.onRechargeChange);
    },
    onRechargeChange: function(e) {
        this.data.card.recharge = e, this.setData({
            card: this.data.card
        });
    },
    onPullDownRefresh: function() {
        this.asPullDownRefresh();
    },
    asPullDownRefresh: function() {
        var e = this;
        a.default.get(t.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/CardApi/getInfo.html", {}, function(t) {
            var a = (100 - parseFloat(t.level.discount || 1)).toString(), n = a.length;
            t.level.discount_text = a.substring(0, n - 1) + "." + a.substring(n - 1, n), e.setData({
                card: t
            });
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        }), a.default.get(t.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/CardApi/getRechargeList.html", {}, function(t) {
            (0, r.default)(t).map(function(e) {
                return (0, r.default)(e.conditions).map(function(e) {
                    return e.text = "充" + e.condition + "送" + e.money, e.conditions_index = 0, e;
                }), e;
            }), e.setData({
                recharge_list: t
            });
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onSetValueTap: function(e) {
        var t = e.currentTarget.dataset, a = t.name;
        if (t.isMulti || !1) {
            var n = JSON.parse(t.value);
            if (a) {
                var r = {};
                r[a] = Object.assign(this.data[a], n), this.setData(r);
            } else {
                for (var i in n) n[i] = Object.assign(this.data[i] || {}, n[i]);
                this.setData(n);
            }
        } else {
            var s = t.value, o = {};
            o[a] = s, this.setData(o);
        }
    },
    onMoneyInput: function(e) {
        var t = e.detail.value, a = t.indexOf(".");
        return -1 != a && t.length - a > 3 && (t = t.substring(0, a + 3)), parseFloat(t) >= 1e5 && (t = "100000"), 
        t;
    },
    onRechargeSubmit: function(e) {
        var n = e.detail.value;
        if (a.default.pushFormId(e.detail.formId), !a.default.isLoading(this.rechargeRQID)) {
            var i = t.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/recharge.html";
            this.rechargeRQID = a.default.get(i, n, function(e) {
                wx.requestPayment(r.default.extend(e, {
                    success: function(e) {
                        wx.showToast({
                            title: "充值成功！",
                            duration: 1500
                        });
                    },
                    fail: function(e) {
                        console.error(e);
                    }
                }));
            });
        }
    },
    onNavigateTap: function(e) {
        var t = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: t
        });
    },
    onRechargeSelect: function(e) {
        var t = e.detail.target.dataset.index;
        if (a.default.pushFormId(e.detail.formId), !a.default.isLoading(this.rechargeSelectID)) {
            var n = this.data.recharge_list[t].conditions;
            0 != n.length ? 1 == n.length && this.recharge(n, 0) : wx.showModal({
                title: "温馨提示",
                content: "无法充值这个活动",
                showCancel: !1
            });
        }
    },
    recharge: function(e, n) {
        var i = this, s = this, o = e[n].condition, u = e[n].reward_id, d = e[n].id, l = t.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/recharge.html";
        this.rechargeRQID = a.default.get(l, {
            money: o,
            reward_id: u,
            condition_id: d
        }, function(e) {
            wx.requestPayment(r.default.extend(e, {
                success: function(e) {
                    wx.showToast({
                        title: "充值成功！",
                        duration: 1500
                    });
                    var t = i.data.recharge;
                    t.show = !1, s.setData({
                        recharge: t
                    }), s.asPullDownRefresh();
                },
                fail: function(e) {
                    console.error(e);
                }
            }));
        });
    },
    bindPickerChange: function(e) {
        var t = e.currentTarget.dataset.index, a = e.detail.value, n = this.data.recharge_list[t].conditions;
        0 == n.length || a >= n.length ? wx.showModal({
            title: "温馨提示",
            content: "无法充值这个活动",
            showCancel: !1
        }) : this.recharge(n, a);
    }
});