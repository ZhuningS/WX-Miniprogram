require("../../../utils/wxUtil.js"), require("../../../utils/util.js");

var t = require("../../../utils/ajax.js"), e = require("../../../utils/common.js"), a = require("../../../common/PageBase.js"), d = (require("../../../utils/wxParse/wxParse.js"), 
getApp());

Page(e.extendPage(a, {
    data: {
        dataLoaded: !1,
        myHidden: !0,
        modalHidden: !0,
        addrList: [],
        addressId: "",
        name: "",
        tel: "",
        addr: "",
        province: "",
        city: "",
        county: "",
        provinceId: "",
        cityId: "",
        countyId: ""
    },
    onLoad: function(t) {
        var a = this;
        e.initApp({
            loginSuc: function() {
                a.setData({
                    isLogin: !!d.getUid()
                }), a._initAddr();
            }
        });
    },
    onShow: function() {},
    _initAddr: function(e) {
        var a = this;
        t.G({
            url: "/apis/home/user.address/index",
            data: {
                uid: d.getUid(),
                size: 999
            },
            success: function(t) {
                var e = t.data;
                e.item && a.setData({
                    addrList: e.item
                });
                var d = a.data.addrList;
                a.setData({
                    addrList: d,
                    dataLoaded: !0
                });
            }
        });
    },
    _select: function(t) {
        var e = this, a = parseInt(t.currentTarget.dataset.index), d = this.data.addrList;
        d.forEach(function(t, a) {
            d[a].selected && (d[a].selected = !1, e.setData({
                addrList: d
            }));
        }), d[a].selected = !0, e.setData({
            addressId: d[a].id,
            addrList: d
        });
        t.detail.formId;
        e._goPrevPage();
    },
    _jump: function(t) {
        e.jump(t);
    },
    _goPrevPage: function() {
        var t = this, e = getCurrentPages();
        e[e.length - 2].setData({
            optionAddrId: t.data.addressId
        }), wx.navigateBack({
            delta: 1
        });
    }
}));