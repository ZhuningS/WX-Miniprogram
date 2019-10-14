var t = getApp(), a = (require("../../../utils/util.js"), require("../../../utils/ajax.js")), i = require("../../../utils/common.js"), e = require("../../../common/PageBase.js"), n = require("../../../utils/pagination.js");

Page(i.extendPage(e, {
    data: {
        winHei: 0,
        dataLoaded: !1,
        userInfo: {},
        isLogin: !1,
        currentTab: ""
    },
    onShow: function() {},
    onLoad: function(a) {
        var e = this;
        i.initApp({
            extSuc: function() {},
            loginSuc: function() {
                e.setData({
                    isLogin: !!t.getUid(),
                    userInfo: t.getUInfo()
                }), e._getList({
                    activeStatus: ""
                });
            }
        });
    },
    _getList: function(i) {
        var e = this;
        i.status;
        this._pagination = new n({
            page: this,
            scope: "pagination"
        }).init({
            rendData: function(n, s) {
                a.G({
                    url: "/apis/home/user.bargain/fetch",
                    data: {
                        uid: t.getUid(),
                        activeStatus: i.activeStatus,
                        page: n,
                        size: 999
                    },
                    success: function(t) {
                        var a = t.data.item, i = e.data.orderList || [];
                        e.setData({
                            dataLoaded: !0,
                            list: 1 == n ? a : i.concat(a)
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
            activeStatus: t
        });
    }
}));