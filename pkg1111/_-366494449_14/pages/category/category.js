var t = getApp(), a = (require("../../utils/util.js"), require("../../utils/common.js")), i = require("../../common/PageBase.js"), e = require("../../utils/ajax.js");

Page(a.extendPage(i, {
    data: {
        windowHeight: 0,
        rootcateList: {},
        childcateList: {},
        dataLoaded: !1
    },
    onLoad: function(i) {
        var e = this;
        a.initApp({
            loginSuc: function() {
                console.log(t.globalData.winHei);
                var i = t.getTabbar(), o = a.isShowtab("categories");
                e.setData({
                    windowHeight: t.globalData.winHei,
                    tabbar: i,
                    isShowTab: o
                }), e._getCategory();
            }
        });
    },
    _getCategory: function() {
        var t = this;
        e.G({
            url: "/apis/home/card.mall/info",
            success: function(a) {
                console.log(a);
                var i = a.data.category;
                i[0].active = !0;
                var e = i[0].child;
                if (0 == e.length) {
                    var o = i[0].id;
                    t._getGoods(o);
                }
                i.forEach(function(t, a) {
                    t.child.length > 0 && t.child.push({
                        id: t.id,
                        name: "全部商品",
                        icon: t.icon
                    });
                }), t.setData({
                    rootcateList: i,
                    childcateList: e,
                    dataLoaded: !0
                });
            }
        });
    },
    changeCate: function(t) {
        for (var a = t.currentTarget.dataset.index, i = void 0, e = void 0, o = 0; o < this.data.rootcateList.length; o++) {
            var s = this.data.rootcateList[o];
            s.active = !1, o == a && (s.active = !0, s.name, e = s.id, i = s.child);
        }
        this.setData({
            rootcateList: this.data.rootcateList,
            childcateList: i
        }), 0 == i.length && this._getGoods(e);
    },
    _getGoods: function(a) {
        var i = this;
        i.setData({
            goodsList: [],
            groupList: []
        }), e.G({
            url: "/apis/home/card.mall/index",
            data: {
                page: 1,
                size: 999,
                cid: a,
                card_id: t.getCardid()
            },
            success: function(t) {
                console.log("--------------", t);
                var a = t.data.item, e = t.data.groups;
                i.setData({
                    goodsList: a,
                    groupList: e,
                    dataLoaded: !0
                });
            }
        });
    }
}));