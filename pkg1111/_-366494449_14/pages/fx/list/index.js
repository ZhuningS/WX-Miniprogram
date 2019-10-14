var t = getApp(), e = (require("../../../utils/util.js"), require("../../../utils/ajax.js")), a = require("../../../utils/common.js"), i = require("../../../common/PageBase.js"), n = require("../../../utils/pagination.js");

Page(a.extendPage(i, {
    data: {
        winHei: 0,
        dataLoaded: !1,
        userInfo: {},
        isLogin: !1,
        currentTab: "all"
    },
    onLoad: function(e) {
        var i = e.type, n = this;
        wx.hideShareMenu(), a.initApp({
            extSuc: function() {},
            loginSuc: function() {
                n.setData({
                    isLogin: !!t.getUid(),
                    userInfo: t.getUInfo()
                }), "" != i ? (n._getFxList({
                    type: i
                }), n.setData({
                    currentTab: i
                })) : n._getFxList({
                    type: "all"
                });
            }
        });
    },
    _getFxList: function(t) {
        var a = this;
        t.status;
        this._pagination = new n({
            page: this,
            scope: "pagination"
        }).init({
            rendData: function(i, n) {
                e.G({
                    url: "/apis/home/user.distribute/order",
                    data: {
                        type: t.type,
                        page: i,
                        size: 999
                    },
                    success: function(t) {
                        var e = t.data.item, s = a.data.orderList || [];
                        a.setData({
                            dataLoaded: !0,
                            list: 1 == i ? e : s.concat(e)
                        }), n && n(e.length);
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
        var a = t.getUid() + "_" + t.getCardid(), i = e.target.dataset.title, n = e.target.dataset.imageurl, s = "/pages/goodsDetail/detail/index?id=" + e.target.dataset.id + "&invite=" + a;
        return console.log(s), {
            title: i,
            imageUrl: n,
            path: s,
            success: function(t) {},
            fail: function(t) {}
        };
    }
}));