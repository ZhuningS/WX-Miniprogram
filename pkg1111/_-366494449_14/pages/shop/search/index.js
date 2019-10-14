var e = require("../../../utils/util.js"), a = require("../../../utils/ajax.js"), t = require("../../../utils/common.js"), s = require("../../../common/PageBase.js"), n = getApp();

Page(t.extendPage(s, {
    data: {
        name: "",
        inputValue: "",
        goodsList: [],
        isResult: 0,
        localWords: []
    },
    onLoad: function() {
        var e = this, a = wx.getStorageSync("keyWords");
        a && a.length > 0 && e.setData({
            localWords: a
        }), t.initApp({
            extSuc: function() {},
            loginSuc: function() {}
        });
    },
    _clearValue: function() {
        this.setData({
            name: "",
            inputValue: "",
            goodsList: [],
            isResult: 0
        });
    },
    _getSearch: function(t) {
        var s, o = this;
        t.currentTarget.dataset.name && "" != t.currentTarget.dataset.name ? (s = t.currentTarget.dataset.name, 
        o.setData({
            inputValue: s,
            name: s
        })) : s = o.data.name, "" != s ? a.P({
            url: "/apis/home/card.mall/index",
            data: {
                name: s,
                card_id: n.getCardid()
            },
            success: function(a) {
                if (1 != a.code) {
                    var t = o.data.localWords;
                    t.unshift(s);
                    var n = o._unique(t);
                    n.length > 10 && n.pop(), wx.setStorageSync("keyWords", n);
                    var r = a.data;
                    o.setData({
                        goodsList: r.item,
                        isResult: 1,
                        localWords: n
                    });
                } else e.showWarn(a.msg);
            }
        }) : e.showWarn("请输入搜索内容");
    },
    _clearHistory: function() {
        this.setData({
            localWords: []
        }), wx.removeStorage({
            key: "keyWords",
            success: function(e) {
                console.log(e.data);
            }
        });
    },
    _getValue: function(e) {
        var a = this, t = e.detail.value;
        console.log("name=====", t), a.setData({
            name: t
        });
    },
    _unique: function(e) {
        for (var a = [], t = {}, s = 0; s < e.length; s++) t[e[s]] || (a.push(e[s]), t[e[s]] = 1);
        return a;
    },
    onShow: function() {}
}));