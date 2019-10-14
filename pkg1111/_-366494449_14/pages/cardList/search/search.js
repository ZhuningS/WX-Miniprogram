var t = require("../../../utils/util.js"), e = require("../../../utils/ajax.js"), a = require("../../../utils/common.js"), r = require("../../../common/PageBase.js"), n = getApp();

Page(a.extendPage(r, {
    data: {
        name: "",
        inputValue: "",
        cartList: [],
        isResult: 0,
        localWords: []
    },
    _jumpToCard: function(t) {
        var e = t.currentTarget.dataset.cardid;
        n.setCardid(e), wx.redirectTo({
            url: "/pages/card/index"
        });
    },
    onLoad: function() {
        var t = this, e = wx.getStorageSync("keyWords");
        e && e.length > 0 && t.setData({
            localWords: e
        }), a.initApp({
            extSuc: function() {},
            loginSuc: function() {}
        });
    },
    _clearValue: function() {
        this.setData({
            name: "",
            inputValue: "",
            cartList: [],
            isResult: 0
        });
    },
    _getSearch: function(a) {
        var r, n = this;
        a.currentTarget.dataset.name && "" != a.currentTarget.dataset.name ? (r = a.currentTarget.dataset.name, 
        n.setData({
            inputValue: r,
            name: r
        })) : r = n.data.name, "" != r ? e.G({
            url: "/apis/home/card.item/fetch",
            data: {
                name: r
            },
            success: function(e) {
                if (1 != e.code) {
                    var a = n.data.localWords;
                    a.unshift(r);
                    var s = n._unique(a);
                    s.length > 10 && s.pop(), wx.setStorageSync("keyWords", s);
                    var i = e.data;
                    n.setData({
                        cartList: i.item,
                        isResult: 1,
                        localWords: s
                    });
                } else t.showWarn(e.msg);
            }
        }) : t.showWarn("请输入搜索内容");
    },
    _clearHistory: function() {
        this.setData({
            localWords: []
        }), wx.removeStorage({
            key: "keyWords",
            success: function(t) {
                console.log(t.data);
            }
        });
    },
    _getValue: function(t) {
        var e = this, a = t.detail.value;
        console.log("name=====", a), e.setData({
            name: a
        });
    },
    _unique: function(t) {
        for (var e = [], a = {}, r = 0; r < t.length; r++) a[t[r]] || (e.push(t[r]), a[t[r]] = 1);
        return e;
    },
    _showOptions: function(t) {
        var e = this.data.currentIndex, a = t.currentTarget.dataset.index;
        e === a && (a = ""), this.setData({
            currentIndex: a
        });
    },
    _operateCard: function(t) {
        var a = this, r = t.currentTarget.dataset.id, n = t.currentTarget.dataset.type;
        e.P({
            url: "/apis/home/card.item/operate",
            data: {
                id: r,
                type: n
            },
            success: function(e) {
                a.setData({
                    currentIndex: ""
                }), a._getSearch(t);
            }
        });
    },
    onShow: function() {}
}));