var t = getApp(), e = (require("../../../utils/util.js"), require("../../../utils/ajax.js")), a = require("../../../utils/common.js"), i = require("../../../common/PageBase.js"), r = require("../../../utils/pagination.js");

Page(a.extendPage(i, {
    data: {
        winHei: 0,
        dataLoaded: !1,
        currentTab: ""
    },
    onLoad: function(t) {
        var e = this;
        wx.hideShareMenu(), a.initApp({
            extSuc: function() {},
            loginSuc: function() {
                e._getFxGoodsList();
            }
        });
    },
    _getFxGoodsList: function(t) {
        var a = this;
        if (t) {
            var i = t.currentTarget.dataset.by, s = t.currentTarget.dataset.type;
            this.setData({
                currentTab: i
            });
        }
        this._pagination = new r({
            page: this,
            scope: "pagination"
        }).init({
            rendData: function(t, r) {
                e.G({
                    url: "/apis/home/user.distribute/product",
                    data: {
                        page: t,
                        size: 999,
                        order_by: i || "",
                        order_type: s || ""
                    },
                    success: function(e) {
                        var i = e.data.item, s = a.data.goodsList || [];
                        a.setData({
                            dataLoaded: !0,
                            list: 1 == t ? i : s.concat(i)
                        }), r && r(i.length);
                    }
                });
            }
        });
    },
    _tabSwitch: function(t) {
        var e = t.currentTarget.dataset.current;
        t.detail.formId;
        this._toTab(e);
    },
    _toTab: function(t, e) {
        this.setData({
            currentTab: t,
            list: [],
            page: 1,
            dataLoaded: !1
        }), this._getFxList({
            type: t
        });
    },
    onShareAppMessage: function(e) {
        var a = t.getUid() + "_" + t.getCardid(), i = e.target.dataset.title, r = e.target.dataset.imageurl, s = "/pages/goodsDetail/detail/index?id=" + e.target.dataset.id + "&invite=" + a;
        return console.log(s), {
            title: i,
            imageUrl: r,
            path: s,
            success: function(t) {},
            fail: function(t) {}
        };
    }
}));