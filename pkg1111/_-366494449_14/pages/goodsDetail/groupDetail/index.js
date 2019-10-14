var t = getApp(), a = require("../../../utils/util.js"), e = require("../../../utils/common.js"), i = require("../../../common/PageBase.js"), n = (require("../../../utils/wxParse/wxParse.js"), 
require("../../../utils/ajax.js"));

Page(e.extendPage(i, {
    data: {
        dataLoaded: !1,
        isHasAttr: 0,
        curSkuItem: {
            skuId: "",
            price: "",
            amount: 0
        },
        skuList: [],
        skuJson: [],
        num: null,
        panel: {
            type: 1,
            isShow: !1,
            aimation: {},
            opacityAnimation: {},
            height: 0,
            phone: "",
            yzm: "",
            yzmTime: 0
        },
        counter: {
            number: 1,
            minusDisabled: !1,
            addDisabled: !1
        }
    },
    onLoad: function(a) {
        var i = this, n = this, o = a.id, s = a.invite;
        this.setData({
            id: o || "",
            invite: s || ""
        }), e.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var a = t.getAuth(), e = t.getStoreInfo();
                i.setData({
                    companyInfo: e,
                    isAuth: a
                }), n._getGroup();
            }
        });
    },
    onShareAppMessage: function(a) {
        var e = this, i = e.data.id, n = "【拼团活动】" + e.data.groupInfo.name, o = t.getUid() + "_" + (t.getCardid() || e.data.cardInfo.id), s = e.data.groupInfo.thumb, u = "/pages/goodsDetail/groupDetail/index?id=" + i + "&invite=" + o;
        return console.log(u), {
            title: n,
            path: u,
            imageUrl: s,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    getUserInfo: function(i) {
        var n = i.detail.userInfo;
        n && void 0 != n && (a.showOK("登录成功"), e.updateUserInfo(n), t.setAuth(!0), this.setData({
            isAuth: !0
        }));
    },
    _getGroup: function() {
        var e = this, i = t.getUid(), o = e.data.id;
        n.G({
            url: "/apis/home/active.groups/team",
            data: {
                id: o,
                uid: i
            },
            success: function(i) {
                var n, o, s = i.data, u = s.total - s.users.length, r = s.card_user_id;
                t.setCardid(r), s.attr && s.attr.length > 0 && (console.log("有规格"), n = s.attr, 
                o = s.attrprice, n[0] && (n[0].data[0].selected = !0), n[1] && (n[1].data[0].selected = !0), 
                e.setData({
                    dataLoaded: !0,
                    isHasAttr: 1,
                    skuList: n,
                    skuJson: o,
                    num: s.num
                }), e._setSkuItem()), e._lastTime = s.remaining_time, e.setData({
                    dataLoaded: !0,
                    person: u,
                    groupInfo: s,
                    num: s.num,
                    lastTimeStr: a.getTimeBySec(e._lastTime || 0)
                }), e._actTimer && clearTimeout(e._actTimer), e._lastTime > 0 && e._actTimerDown();
            }
        });
    },
    _actTimerDown: function() {
        var t = this, e = t._lastTime, i = a.getTimeBySec(e);
        if (t.setData({
            lastTimeStr: i
        }), e <= 0) return clearTimeout(t._actTimer), void t._initPage();
        t._lastTime = t._lastTime - 1e3, t._actTimer = setTimeout(function() {
            t._actTimerDown();
        }, 1e3);
    },
    _confirmBuy: function(a) {
        var e = t.getUid(), i = this;
        !function() {
            i.setData({
                dataLoaded: !1
            });
            var t = i.options, a = (t.actId, t.actType, t.groupBuyId, t.teamid, "");
            a = void 0 === i.data.curSkuItem ? "" : i.data.curSkuItem.skuId;
            var o = {
                uid: e,
                gids: i.data.groupInfo.goodsid,
                aids: a,
                nums: i.data.counter.number,
                isgroups: 1,
                teamid: i.data.id
            };
            n.P({
                url: "/apis/home/order.add/tmp",
                data: o,
                success: function(t) {
                    var a = t.data.id;
                    i.setData({
                        dataLoaded: !0
                    }), i._closePanel();
                    var e = "";
                    void 0 !== i.data.curSkuItem && (e = i.data.curSkuItem.skuId);
                    var n = "/pages/order/confirmOrder/index?goodsId=" + i.data.id + "&skuId=" + e + "&amount=" + i.data.counter.number + "&tmpOrderId=" + a + "&teamid=" + i.data.id;
                    console.log("url=======", n), wx.navigateTo({
                        url: n
                    });
                }
            });
        }();
    },
    _buy: function(t) {
        var a = t.detail.userInfo, i = t.currentTarget.dataset.buytype;
        a && void 0 != a && (e.updateUserInfo(a), this._showPanel(i)), this._showPanel(i);
    },
    _setSkuItem: function() {
        var t, a = this, e = a.data.skuList, i = a.data.skuJson, n = {};
        e.forEach(function(t) {
            t.data.some(function(a) {
                if (a.selected) return n[t.name] = a.name, !0;
            });
        }), i.some(function(e) {
            if (JSON.stringify(e.name) == JSON.stringify(n)) return t = {
                skuId: e.id,
                price: e.price,
                amount: a.data.num
            }, !0;
        }), a.setData({
            curSkuItem: t
        }), console.log(a.data.curSkuItem);
    },
    _showPanel: function(t) {
        var a = this, e = this.data.panel;
        e.type = t, a.animation = wx.createAnimation({
            duration: 200,
            timingFunction: "ease-out"
        }), a.opacityAnimation = wx.createAnimation({
            duration: 200,
            timingFunction: "ease-out"
        }), e.isShow = !0, a.setData({
            panel: e
        }), setTimeout(function() {
            a.animation.translateY(0).step(), a.opacityAnimation.opacity(1).step(), e.animation = a.animation.export(), 
            e.opacityAnimation = a.opacityAnimation.export(), a.setData({
                panel: e
            });
        }, 0);
    },
    _closePanel: function(t) {
        var a = this, e = this.data.panel;
        if (a.animation.translateY("100%").step(), a.opacityAnimation.opacity(0).step(), 
        e.animation = a.animation.export(), e.opacityAnimation = a.opacityAnimation.export(), 
        a.setData({
            panel: e,
            dataLoaded: !0
        }), setTimeout(function() {
            e.isShow = !1, a.setData({
                panel: e
            });
        }, 500), t) t.detail.formId;
    },
    _resetCounter: function() {
        var t = +this.data.curSkuItem.amount, a = this.data.counter;
        a.number > t && (a.number = t), a.minusDisabled = a.number <= 0, a.addDisabled = a.number >= t, 
        this.setData({
            counter: a
        });
    },
    _add: function(t) {
        var a = this.data.counter, e = (t.detail.formId, t.currentTarget.dataset.max);
        void 0 != e && ++a.number > e && (a.number = e), a.number == e && 0 == e ? a.addDisabled = !0 : a.number == e && 0 != e ? a.addDisabled = !0 : a.minusDisabled = !1, 
        this.setData({
            counter: a
        });
    },
    _minus: function(t) {
        var a = this.data.counter, e = (t.detail.formId, t.currentTarget.dataset.min);
        void 0 != e && --a.number < e && (a.number = e), a.number < 0 && (a.number = 0), 
        a.number == e ? a.minusDisabled = !0 : a.addDisabled = !1, this.setData({
            counter: a
        });
    },
    _changeNum: function(t) {
        var a = parseInt(t.detail.value) || 1, e = this.data.counter;
        e.number = a, this.setData(e);
    }
}));