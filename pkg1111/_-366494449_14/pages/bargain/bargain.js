var a = getApp(), t = require("../../utils/util.js"), i = require("../../utils/ajax.js"), e = require("../../utils/common.js"), s = require("../../common/PageBase.js");

Page(e.extendPage(s, {
    data: {
        isMyself: !1,
        mask: !1,
        skuId: "",
        status: "",
        dataLoaded: !1
    },
    onLoad: function(t) {
        var i = this;
        e.initApp({
            loginSuc: function() {
                var e, s = i, d = a.getAuth(), n = t.id;
                "" != t.invite && void 0 !== t.invite && (e = t.invite.split("_")[1], console.log("有invite====", e), 
                a.setCardid(e)), s.setData({
                    active_id: n,
                    isAuth: d
                }), s._getDetail();
            }
        });
    },
    _getDetail: function() {
        var t = this, e = t.data.active_id;
        i.G({
            url: "/apis/home/plugins.bargain/getBargain",
            data: {
                active_id: e
            },
            success: function(i) {
                console.log("----------", d), i.data.logs[0].uid == a.getUid() && t.setData({
                    isMyself: !0
                });
                var e = (parseFloat(i.data.final_price) - parseFloat(i.data.goods_onsale)).toFixed(2), s = parseFloat(i.data.goods_price) - parseFloat(i.data.goods_onsale), d = Math.floor((s - e) / s * 100), n = i.data.logs[0].bargain_price;
                t.setData({
                    remain: e,
                    process: d,
                    bargain: i.data,
                    kan_price: n,
                    status: i.data.status,
                    dataLoaded: !0
                }), t.data.isMyself && 1 != i.data.issuccess && t.openPop(), t._lastTime = i.data.remind_time, 
                t._actTimerDown();
            }
        });
    },
    openPop: function() {
        this.setData({
            cutmask: !0
        });
    },
    _cut: function() {
        var e = this, s = e.data.active_id, d = a.getUid();
        i.P({
            url: "/apis/home/plugins.Bargain/bargainOne",
            data: {
                uid: d,
                active_id: s
            },
            success: function(a) {
                if (0 == a.code) {
                    var i = a.data;
                    e.setData({
                        kan_price: i,
                        cutmask: !0
                    });
                } else t.showWarn(a.msg);
            }
        });
    },
    _actTimerDown: function() {
        var a = this, i = a._lastTime, e = t.getTimeBySec(i);
        a.setData({
            lastTimeStr: e
        }), i <= 0 ? clearTimeout(a._actTimer) : (a._lastTime = a._lastTime - 1e3, a._actTimer = setTimeout(function() {
            a._actTimerDown();
        }, 1e3));
    },
    _openruleMask: function() {
        this.setData({
            rulemask: !0
        });
    },
    _closeMask: function() {
        this.setData({
            rulemask: !1,
            cutmask: !1
        });
    },
    _closeMask2: function() {
        this.setData({
            rulemask: !1,
            cutmask: !1
        }), this._getDetail();
    },
    _kanjia: function() {
        var t = this.data.bargain.bargain_id;
        i.P({
            url: "/apis/home/plugins.Bargain/save",
            data: {
                uid: a.getUid(),
                bargain_id: t
            },
            success: function(a) {
                var t = a.data;
                wx.redirectTo({
                    url: "/pages/bargain/bargain?id=" + t
                });
            }
        });
    },
    _moreHero: function() {},
    _confirmBuy: function(t) {
        var e = a.getUid(), s = this;
        !function() {
            s.setData({
                dataLoaded: !1
            });
            var t = {
                card_id: a.getCardid(),
                uid: e,
                gids: s.data.bargain.goods_id,
                aids: s.data.skuId || "",
                nums: "1",
                isbargain: 1,
                active_id: s.data.active_id
            };
            i.P({
                url: "/apis/home/order.add/tmp",
                data: t,
                success: function(a) {
                    var t = a.data.id;
                    s.setData({
                        dataLoaded: !0
                    }), wx.navigateTo({
                        url: "/pages/order/confirmOrder/index?goodsId=" + s.data.bargain.goods_id + "&skuId=" + s.data.skuId + "&amount=1&tmpOrderId=" + t
                    });
                }
            });
        }();
    },
    onShareAppMessage: function(t) {
        var i = this, e = "「帮我砍一刀」" + i.data.bargain.goods_title, s = "pages/bargain/bargain?id=" + i.data.active_id + "&invite=" + (a.getUid() + "_" + a.getCardid());
        return console.log(s), {
            title: e,
            path: s,
            success: function(a) {},
            fail: function(a) {}
        };
    }
}));