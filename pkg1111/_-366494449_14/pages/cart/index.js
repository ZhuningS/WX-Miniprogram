var t = getApp(), e = (require("../../utils/util.js"), require("../../utils/common.js")), a = require("../../common/PageBase.js"), i = require("../../utils/ajax.js"), t = getApp();

Page(e.extendPage(a, {
    data: {
        winHei: 0,
        isAllSelected: !0,
        allTotalPrice: 0,
        cartList: [],
        num: "",
        dataLoaded: !1,
        isLogin: !!t.getUid()
    },
    onLoad: function(a) {
        var i = this;
        e.initApp({
            loginSuc: function() {
                var a = t.getTabbar(), r = e.isShowtab("cart");
                i.setData({
                    winHei: t.getWinHei(),
                    tabbar: a,
                    isShowTab: r
                });
            }
        });
    },
    onShow: function(t) {
        var a = this;
        e.initApp({
            loginSuc: function() {
                a._initcart();
            }
        });
    },
    _initcart: function() {
        var e = this, a = t.getCardid(), r = t.getUid();
        i.G({
            url: "/apis/home/goods.cart/index",
            data: {
                uid: r,
                card_id: a
            },
            success: function(t) {
                var a = t.data;
                a.forEach(function(t) {
                    var e = t.goods;
                    t.selected = !1, e.forEach(function(t) {
                        if (t.selected = !1, t.discount > 0) e = parseInt(t.num) * parseFloat(t.price_discount); else var e = parseInt(t.num) * parseFloat(t.price);
                        t.allTotalPrice = e.toFixed(2);
                    });
                }), e.setData({
                    cartList: a,
                    dataLoaded: !0
                }), e._getTotalPrice();
            }
        });
    },
    _bindCheckbox: function(t) {
        var e = this, a = parseInt(t.target.dataset.cartid), i = (parseInt(t.target.dataset.sid), 
        e.data.cartList);
        i.forEach(function(t) {
            t.selected = !0, t.goods.forEach(function(e) {
                e.id == a && (e.selected = !e.selected), e.selected || (t.selected = !1);
            });
        }), console.log(i), e.setData({
            cartList: i
        }), e._getTotalPrice();
    },
    _selectAll: function(t) {
        var e = this, a = parseInt(t.currentTarget.dataset.sid), i = parseInt(t.currentTarget.dataset.index), r = this.data.cartList, s = r[i].goods;
        r[i].selected = !r[i].selected, s.forEach(function(t) {
            t.sid == a && (t.selected == r[i].selected ? t.selected = t.selected : t.selected = !t.selected);
        }), e.setData({
            cartList: r
        }), e._getTotalPrice();
    },
    _deleteList: function(e) {
        var a = this, r = t.getCardid(), s = parseInt(e.currentTarget.dataset.cartid), c = this.data.cartList;
        i.G({
            url: "/apis/home/goods.cart/del",
            data: {
                uid: t.getUid(),
                id: s,
                card_id: r
            },
            success: function(t) {
                c.forEach(function(t) {
                    var e = t.goods;
                    e.forEach(function(t) {
                        t.id == s && e.splice(t, 1);
                    });
                }), a.setData({
                    cartList: c
                }), a._getTotalPrice();
            }
        });
    },
    _addCount: function(t) {
        var e = parseInt(t.currentTarget.dataset.cartid), a = parseInt(t.currentTarget.dataset.num) + 1;
        this._modifyAmount(e, a);
    },
    _minusCount: function(t) {
        var e = parseInt(t.currentTarget.dataset.cartid), a = parseInt(t.currentTarget.dataset.num);
        if (a <= 1) return !1;
        a -= 1, this._modifyAmount(e, a);
    },
    _modifyAmount: function(e, a) {
        var r = this, s = r.data.cartList, c = t.getCardid();
        i.G({
            url: "/apis/home/goods.cart/updatenum",
            data: {
                uid: t.getUid(),
                id: e,
                num: a,
                card_id: c
            },
            success: function(t) {
                s.forEach(function(t) {
                    t.goods.forEach(function(t) {
                        if (t.id == e) {
                            if (t.num = a, t.discount > 0) i = parseInt(t.num) * parseFloat(t.price_discount); else var i = parseInt(t.num) * parseFloat(t.price);
                            t.allTotalPrice = i.toFixed(2);
                        }
                    });
                }), r.setData({
                    cartList: s
                });
            }
        });
    },
    _getTotalPrice: function() {
        var t = 0;
        this.data.cartList.forEach(function(e) {
            e.goods.forEach(function(e) {
                e.selected && (e.discount > 0 ? t += parseInt(e.num) * parseFloat(e.price_discount) : t += parseInt(e.num) * parseFloat(e.price));
            });
        }), this.setData({
            allTotalPrice: t.toFixed(2)
        });
    },
    _settleAccounts: function(e) {
        var a = this.data.cartList, r = t.getCardid(), s = [], c = [], n = [], d = [];
        if (a.forEach(function(t) {
            t.goods.forEach(function(t) {
                t.selected && (s.push(t.id), c.push(t.gid), n.push(t.gaid), d.push(t.num));
            });
        }), console.log(s, c, n, d), "" != c) {
            var o = {
                uid: t.getUid(),
                gids: c,
                aids: n,
                nums: d,
                card_id: r
            };
            i.P({
                url: "/apis/home/order.add/tmp",
                data: o,
                success: function(t) {
                    var e = t.data.id;
                    wx.redirectTo({
                        url: "/pages/order/confirmOrder/index?&tmpOrderId=" + e
                    });
                }
            });
        } else wx.showModal({
            title: "提示",
            content: "您还没有选择商品哦~",
            showCancel: !1
        });
    },
    _jump: function(t) {
        e.jump(t);
    }
}));