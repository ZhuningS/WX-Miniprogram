var t = getApp(), a = (require("../../../utils/util.js"), require("../../../utils/ajax.js")), i = require("../../../utils/common.js"), e = require("../../../common/PageBase.js"), s = require("../../../utils/pagination.js");

Page(i.extendPage(e, {
    data: {
        winHei: 0,
        dataLoaded: !1,
        userInfo: {},
        isLogin: !1,
        currentTab: "2"
    },
    onLoad: function(a) {
        var e = this;
        i.initApp({
            extSuc: function() {},
            loginSuc: function() {
                e.setData({
                    isLogin: !!t.getUid(),
                    userInfo: t.getUInfo()
                }), e._getList({
                    paystatus: "2"
                });
            }
        });
    },
    _getList: function(i) {
        var e = this, n = i.paystatus;
        this._pagination = new s({
            page: this,
            scope: "pagination"
        }).init({
            rendData: function(i, s) {
                a.G({
                    url: "/apis/home/user.spread/fetch",
                    data: {
                        uid: t.getUid(),
                        paystatus: n,
                        page: i,
                        size: 999
                    },
                    success: function(t) {
                        var a = t.data.item, n = e.data.actList || [];
                        e.setData({
                            dataLoaded: !0,
                            actList: 1 == i ? a : n.concat(a)
                        }), s && s(a.length);
                    }
                });
            }
        });
    },
    _tabSwitch: function(t) {
        var a = t.currentTarget.dataset.current;
        t.detail.formId;
        this._toTab(a);
    },
    _toTab: function(t, a) {
        this.setData({
            currentTab: t,
            list: [],
            page: 1,
            dataLoaded: !1
        }), this._getList({
            paystatus: t
        });
    }
}));