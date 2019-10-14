function i(i, e, o) {
    return e in i ? Object.defineProperty(i, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[e] = o, i;
}

var e, o = require("../../../utils/wxUtil.js"), a = require("../../../utils/util.js"), t = require("../../../utils/ajax.js"), s = require("../../../utils/common.js"), d = require("../../../common/PageBase.js"), n = (require("../../../utils/wxParse/wxParse.js"), 
getApp());

Page(s.extendPage(d, {
    data: (e = {
        isgroups: "",
        isseckill: "",
        isbargain: "",
        active_id: "",
        dataLoaded: !1,
        shop: {},
        orderType: "",
        isNeedAddr: 0,
        isSelfGet: 0,
        islogistics: 1,
        fetch: 1,
        noAddr: !0,
        addressId: "",
        optionAddrId: "",
        orderId: null,
        goodsId: "",
        wxPayParams: "",
        wxPaySucUrl: "",
        coupon: {},
        couponId: "",
        couponList: [],
        couponAmout: "",
        useCoupon: !0,
        couponListLen: "",
        orderAmount: 0,
        toPayAmount: "0",
        rmPostAmount: "",
        radioItems: [ {
            name: "到店自取",
            value: "1",
            checked: !0
        }, {
            name: "快递配送",
            value: "0"
        } ],
        activeIndex: 0,
        cardIndex: 0,
        address: {},
        goodsList: []
    }, i(e, "shop", []), i(e, "num", ""), i(e, "feetrans", 0), i(e, "index", null), 
    i(e, "isinvoice", 0), i(e, "isAuthInvoice", 0), i(e, "invoice_type", ""), i(e, "invoice_title", ""), 
    i(e, "invoice_tax", ""), i(e, "invoice_comany_address", ""), i(e, "invoice_telephone", ""), 
    i(e, "invoice_bank_name", ""), i(e, "invoice_bank_account", ""), e),
    onLoad: function(i) {
        var e = {
            fxid: n.getFxid(),
            tmpOrderId: JSON.parse(i.tmpOrderId)
        };
        this._options = i, this.setData(e);
    },
    onShow: function() {
        var i = this.data.optionAddrId;
        i ? this._resetAddr(i) : this.showSalt();
    },
    showSalt: function() {
        var i = this;
        console.log("页面初始化数据");
        var e = this, o = {
            uid: n.getUid(),
            card_id: n.getCardid(),
            id: e.data.tmpOrderId
        };
        t.G({
            url: "/apis/home/order.index/tmp",
            data: o,
            success: function(o) {
                if (1 != o.code) {
                    var a = o.data;
                    if (0 != a.goodslist.length) {
                        var t = a.goodslist[0].goods[0].require_address, s = parseFloat(a.goodslist[0].goods[0].feetrans);
                        void 0 === a.isgroups || "1" != a.isgroups && "2" != a.isgroups || i.setData({
                            isgroups: "1",
                            teamid: a.teamid,
                            groupsmoney: a.groupsmoney
                        });
                        var d = parseFloat(a.money);
                        if (0 != a.address.length) {
                            e._noAddr = !1;
                            var n = a.address[0], c = a.address[0].id;
                        } else e._noAddr = !0;
                        if (a.coupon_list) var r = a.coupon_list.length;
                        e.setData({
                            isNeedAddr: t || 1,
                            dataLoaded: !0,
                            isseckill: a.isseckill,
                            isbargain: a.isbargain,
                            address: n || "",
                            addressId: c || "",
                            couponListLen: r,
                            couponList: a.coupon_list,
                            goodsList: a.goodslist,
                            goodsLen: a.goodslist[0].goods.length,
                            orderAmount: d.toFixed(2),
                            toPayAmount: a.money.toFixed(2),
                            feetrans: s.toFixed(0),
                            noAddr: e._noAddr,
                            card_discount: a.card_discount,
                            discount_price: a.discount_price,
                            aids: a.aids,
                            gids: a.gids,
                            nums: a.nums,
                            goodsId: a.gids,
                            isinvoice: a.isinvoice,
                            card_name: a.card_name,
                            card_avatar: a.card_avatar,
                            active_id: a.bactive_id || ""
                        });
                        i.setData({
                            isSelfGet: 0
                        }), i.data.radioItems[1].checked = !0, i.setData({});
                    } else wx.showModal({
                        title: "提示",
                        content: "对不起，该商品已下架！",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: function(i) {
                            wx.reLaunch({
                                url: "/pages/shop/index"
                            });
                        }
                    });
                } else wx.showModal({
                    title: "提示",
                    content: o.msg,
                    confirmText: "确定",
                    confirmColor: "#3CC51F",
                    success: function(i) {
                        wx.reLaunch({
                            url: "/pages/shop/index"
                        });
                    }
                });
            }
        });
    },
    skip: function(i) {
        this.confirmGoods();
    },
    confirmGoods: function() {
        var i, e, o = this.data, s = o.fxid, d = o.gids, c = o.couponId, r = o.aids, u = o.addressId, l = o.nums, p = o.orderId, h = o.isseckill, g = o.isSelfGet, _ = o.isgroups, v = o.isbargain, m = o.teamid, f = o.active_id, x = o.invoice_type, y = o.invoice_title, I = o.invoice_tax, A = o.invoice_comany_address, w = o.invoice_telephone, k = o.invoice_bank_name, b = o.invoice_bank_account, L = o.isNeedAddr, D = this;
        0 != g || "" != u || 1 != L ? p ? this._payAgain() : (2 == L && (u = ""), e = "" != y ? {
            distribute_user_id: s || "",
            uid: n.getUid(),
            gids: d,
            nums: l,
            aids: r,
            addressid: u,
            card_coupon_user_id: c,
            isseckill: h || 0,
            isbargain: v || 0,
            active_id: f || "",
            teamid: m || "",
            invoice_type: x,
            invoice_title: y,
            invoice_tax: I,
            invoice_comany_address: A,
            invoice_telephone: w,
            invoice_bank_name: k,
            invoice_bank_account: b
        } : {
            distribute_user_id: s || "",
            uid: n.getUid(),
            gids: d,
            nums: l,
            aids: r,
            addressid: u,
            card_coupon_user_id: c,
            isseckill: h || 0,
            isbargain: v || 0,
            active_id: f || "",
            teamid: m || ""
        }, 1 == _ || 2 == _ ? (i = "/apis/home/plugins.groupsadd/index", e.isgroups = 1) : i = "/apis/home/order.add/index", 
        console.log("ajaxParams====", e), wx.showLoading({
            title: "正在支付中...",
            mask: !0,
            success: function(i) {
                D.setData({
                    wrong: !0
                });
            }
        }), t.P({
            url: i,
            data: e,
            success: function(i) {
                if (1 == i.code) return console.log("res", i), wx.hideLoading(), a.showWarn(i.msg), 
                void D.setData({
                    wrong: !0
                });
                var e = i.data;
                D.setData({
                    orderId: e.id,
                    teamid: e.teamid
                });
                var o = {
                    timeStamp: String(e.timestamp),
                    nonceStr: e.nonce_str,
                    package: e.package,
                    paySign: e.sign
                };
                wx.hideLoading(), D._paySuccess(o);
            }
        })) : a.showWarn("请填写收货地址");
    },
    _payAgain: function() {
        var i = this, e = this.data.activeIndex, o = this.data.addressId, a = this.data.orderType, s = {
            openId: n.getOpenId(),
            orderId: this.data.orderId
        };
        5 == a && (0 == e ? a = 3 : 1 == e && (a = 2)), s.order_type = a, 3 == a && (s.address_id = o);
        i._actType, t.P({
            url: ajaxUrl,
            data: ajaxParams,
            success: function(e) {
                var o = data.result;
                i._paySuccess(JSON.parse(o.wxPayParams));
            }
        });
    },
    _paySuccess: function(i) {
        o.wxPay(i), i.success = function() {
            if (1 == this.data.isgroups) i = "/pages/goodsDetail/groupDetail/index?id=" + this.data.teamid; else var i = "/pages/order/orderDetail/index?id=" + this.data.orderId;
            wx.redirectTo({
                url: i
            });
        }.bind(this), i.fail = function() {
            this.data.goodsId;
            if (1 == this.data.isgroups) {
                a.showWarn("支付失败", void wx.navigateBack({
                    delta: 1
                }));
            } else {
                var i = "/pages/order/orderDetail/index?id=" + this.data.orderId;
                wx.redirectTo({
                    url: i
                });
            }
        }.bind(this);
    },
    _goToAddr: function(i) {
        var e = i.detail.formId;
        if (this.data.orderId) return a.alert("订单已生成，不能修改地址信息");
        this.data.noAddr ? wx.navigateTo({
            url: "/pages/my/myAddr/index"
        }) : wx.navigateTo({
            url: "/pages/my/selectAddr/index"
        }), s.submitForm(e);
    },
    _toggleCouponsList: function(i) {
        var e = i.detail.formId;
        this.setData({
            showDialog: !this.data.showDialog
        }), void 0 !== e && s.submitForm(e);
    },
    _getCouponList: function(i, e) {
        length;
    },
    _switch1Change: function(i) {
        var e = this.data.couponList, o = this.data.orderAmount, a = this.data.couponAmout, t = this.data.toPayAmount, s = this.data.useCoupon, d = this.data.couponId, n = this, c = !s;
        console.log(a, "----1-------", o), c ? void 0 != n.index && (e[n.index].checked = !0, 
        d = e[n.index].id, a = parseFloat(e[n.index].dis_money).toFixed(2), console.log(a, "----3-------", o), 
        t = (o - a).toFixed(2)) : (e.some(function(i, o) {
            e[o].checked && (e[o].checked = !1, n.index = o, console.log(n.index));
        }), d = "", a = parseFloat(0).toFixed(2), t = o, console.log(a, "----2-------", o)), 
        this.setData({
            couponId: d,
            couponAmout: a,
            toPayAmount: t,
            couponList: e,
            useCoupon: c
        });
    },
    _resetAddr: function(i) {
        var e = this;
        t.G({
            url: "/apis/home/user.address/info",
            data: {
                uid: n.getUid(),
                id: i
            },
            success: function(o) {
                var a = o.data, t = {};
                0 != a.length ? (t.name = a.name, t.tel = a.tel, t.province = a.province, t.city = a.city, 
                t.country = a.country, t.address = a.address, i = a.id, e.setData({
                    address: t,
                    addressId: i,
                    noAddr: !1
                })) : e.showSalt();
            }
        });
    },
    radioChange: function(i) {
        var e = this.data.couponList, o = this.data.couponAmout, a = this.data.orderAmount, t = this.data.toPayAmount, s = this.data.goodsList[0].goods, d = this.data.couponId;
        s.forEach(function(i) {
            i.pay = 0;
        }), e.forEach(function(e, n) {
            if (e.checked = e.id == i.detail.value, e.checked) {
                if (d = e.id, 1 == e.coupon_info.type) o = parseFloat(e.dis_money).toFixed(2); else if (2 == e.coupon_info.type) {
                    var c = e.coupon_info.value.split(",");
                    c = c.slice(1, c.length - 1), console.log("-------------", c), o = 0, s.forEach(function(i, a) {
                        c.forEach(function(a, t) {
                            a == i.cid && (i.pay = (i.price * i.num * (1 - e.coupon_info.discount / 10)).toFixed(2), 
                            o += i.pay - 0);
                        });
                    }), o = o.toFixed(2), console.log("22222222222222222", o);
                } else {
                    var r = e.coupon_info.value.split(",");
                    r = r.slice(1, r.length - 1), console.log("-------------", r), o = 0, s.forEach(function(i, a) {
                        r.forEach(function(a, t) {
                            a == i.id && (i.pay = (i.price * i.num * (1 - e.coupon_info.discount / 10)).toFixed(2), 
                            o += i.pay - 0);
                        });
                    }), o = o.toFixed(2), console.log("3333333333333333", o);
                }
                t = (a - o).toFixed(2);
            }
        }), console.log("444444444", this.data.goodsList), this.setData({
            couponId: d,
            couponAmout: o,
            toPayAmount: t,
            goodsList: this.data.goodsList,
            couponList: e,
            showDialog: !this.data.showDialog
        });
    },
    _chooseInvoce: function() {
        var i = this;
        wx.chooseInvoiceTitle({
            success: function(e) {
                i.setData({
                    isAuthInvoice: 0,
                    invoice_type: e.type,
                    invoice_title: e.title,
                    invoice_tax: e.taxNumber,
                    invoice_comany_address: e.companyAddress,
                    invoice_telephone: e.telephone,
                    invoice_bank_name: e.bankName,
                    invoice_bank_account: e.bankAccount
                });
            },
            fail: function(e) {
                console.log("res=========", e), "chooseInvoiceTitle:fail auth deny" == e.errMsg && i.setData({
                    isAuthInvoice: 1
                });
            }
        });
    },
    _chooseInvoce2: function(i) {
        console.log("e-==========", i);
        var e = this;
        i.detail.authSetting["scope.invoiceTitle"] ? e.setData({
            isAuthInvoice: 0
        }) : e.setData({
            isAuthInvoice: 1
        });
    },
    _clearInvoice: function() {
        this.setData({
            invoice_type: "",
            invoice_title: "",
            invoice_tax: "",
            invoice_comany_address: "",
            invoice_telephone: "",
            invoice_bank_name: "",
            invoice_bank_account: ""
        });
    },
    _jump: function(i) {
        s.jump(i);
    },
    radioChange2: function(i) {
        console.log("radio发生change事件，携带value值为：", i.detail.value);
        for (var e = this.data.radioItems, o = this.data.isSelfGet, a = 0, t = e.length; a < t; ++a) e[a].checked = e[a].value == i.detail.value;
        o = 0 == i.detail.value ? 0 : 1, this.setData({
            radioItems: e,
            isSelfGet: o
        });
    }
}));