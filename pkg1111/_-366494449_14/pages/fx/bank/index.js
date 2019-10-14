getApp();

var a = require("../../../utils/util.js"), t = require("../../../utils/common.js"), e = require("../../../common/PageBase.js"), n = (require("../../../utils/wxParse/wxParse.js"), 
require("../../../utils/ajax.js"));

Page(t.extendPage(e, {
    data: {
        dataLoaded: !1,
        addBankCard: !1
    },
    onLoad: function(a) {
        var e = this;
        t.initApp({
            extSuc: function() {},
            loginSuc: function() {
                e._getBank();
            }
        });
    },
    _getBank: function() {
        var t = this;
        n.G({
            url: "/apis/home/user.bankcard/fetch",
            data: {},
            success: function(e) {
                var n = e.data.item;
                n.forEach(function(t) {
                    var e = a.formatBankNo(t.card_no);
                    t.banknoShow = e;
                }), t.setData({
                    bankList: n,
                    dataLoaded: !0
                });
            }
        });
    },
    _add: function() {
        this.setData({
            addBankCard: !0,
            realname: "",
            tel: "",
            bankCard: "",
            currentId: ""
        });
    },
    _cancel: function() {
        this.setData({
            addBankCard: !1
        });
    },
    _withDraw: function() {
        var t = this;
        t.data.money, t.data.bankno;
        n.P({
            url: "/apis/home/user.distribute/apply",
            data: {},
            success: function(e) {
                0 == e.code ? t.setData({
                    money: 0
                }) : a.showWarn(e.msg);
            }
        });
    },
    _formSubmit: function(e) {
        var r = this, d = e.detail.formId, s = e.detail.value.bankCard, i = e.detail.value.realname, o = e.detail.value.tel, c = r.data.currentId;
        "" != s || "" != i || "" != o ? (n.P({
            url: "/apis/home/user.bankcard/save",
            data: {
                card_no: s,
                card_name: i,
                card_phone: o,
                id: c || ""
            },
            success: function(t) {
                0 == t.code ? (a.showWarn("保存成功"), r.setData({
                    addBankCard: !1,
                    realname: "",
                    tel: "",
                    bankCard: "",
                    currentId: ""
                }), r._getBank()) : a.showWarn(t.msg);
            },
            fail: function(a) {}
        }), t.submitForm(d)) : a.showWarn("请填写完整信息");
    },
    _del_card: function(t) {
        var e = this, r = t.target.dataset.id;
        n.G({
            url: "/apis/home/user.bankcard/delete",
            data: {
                id: r
            },
            success: function(t) {
                0 == t.code ? e._getBank() : a.showWarn(t.msg);
            },
            fail: function(a) {}
        });
    },
    _edit_card: function(a) {
        var t = this, e = a.target.dataset.id, n = a.target.dataset.cardname, r = a.target.dataset.cardphone, d = a.target.dataset.cardno;
        t.setData({
            addBankCard: !0,
            realname: n,
            tel: r,
            bankCard: d,
            currentId: e
        });
    }
}));