require("../../../utils/wxUtil.js");

var t = require("../../../utils/util.js"), a = require("../../../utils/ajax.js"), i = require("../../../utils/common.js"), e = require("../../../common/PageBase.js"), d = (require("../../../utils/wxParse/wxParse.js"), 
getApp());

Page(i.extendPage(e, {
    data: {
        dataLoaded: !1,
        myHidden: !0,
        submiting: !1,
        hideDel: !1,
        isNotAny: !1,
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
        countyId: "",
        value: [ 0, 0, 0 ],
        values: [ 0, 0, 0 ],
        provinces: [],
        citys: [],
        countys: [],
        province_id: [],
        city_id: [],
        county_id: [],
        province_name: [],
        city_name: [],
        county_name: []
    },
    onLoad: function(t) {
        var a = this;
        i.initApp({
            loginSuc: function() {
                a._initAddr("isOnload"), a.provinces(), a.citys(1), a.countys(2);
            }
        });
    },
    _open: function(t) {
        var a = t.detail.formId;
        this.setData({
            condition: !0
        }), i.submitForm(a);
    },
    _close: function(t) {
        if (this.setData({
            condition: !1
        }), t) {
            var a = t.detail.formId;
            i.submitForm(a);
        }
    },
    _initAddr: function(t) {
        var i = this;
        a.G({
            url: "/apis/home/user.address/index",
            data: {
                uid: d.getUid(),
                size: 999
            },
            success: function(t) {
                var a = t.data;
                i.setData({
                    addrList: a.item,
                    dataLoaded: !0
                });
            }
        });
    },
    _submit: function(t) {
        var a = this, e = t.detail.formId;
        if (a.validInput(t.detail.value)) {
            a.setData({
                dataLoaded: !1,
                name: t.detail.value.userName,
                tel: t.detail.value.telPhone.trim(),
                addr: t.detail.value.addr,
                submiting: !0
            });
            var d = this.data.addressId;
            this.data.addrList;
            "" != this.data.addressId ? a.handleAddr(d) : 0 == a.data.addrList.length ? a.handleAddr("", 1, function() {
                a._goPrevPage();
            }) : a.handleAddr(), a.data.condition && a._close();
        }
        a.setData({
            dataLoaded: !0
        }), i.submitForm(e);
    },
    _setName: function(t) {
        var a = this, i = t.detail.value;
        a.setData({
            name: i
        });
    },
    _setTel: function(t) {
        var a = this, i = t.detail.value;
        a.setData({
            tel: i
        });
    },
    proCityCounty: function(t) {
        this.setData({
            proCityCounty: t.detail.value
        });
    },
    _setAddr: function(t) {
        var a = this, i = t.detail.value;
        a.setData({
            addr: i
        });
    },
    _loginByPhoneNumber: function(i) {
        var e = i.detail, n = e.errMsg, s = e.iv, o = e.encryptedData;
        if (!/:ok$/.test(n)) return "getPhoneNumber:fail user deny" != n && void t.showWarn(n);
        this._add(i), a.P({
            url: "/apis/home/user.index/info",
            data: {
                uid: d.getUid(),
                iv: s,
                encryptedData: o
            },
            success: function(t) {}
        });
    },
    _add: function(t) {
        var a = this;
        !function(t) {
            a.provinces(function() {
                a.citys(1, function() {
                    a.countys(2, function() {
                        t && t();
                    });
                });
            });
        }(function() {
            a.setData({
                myHidden: !1,
                addressId: "",
                name: "",
                tel: "",
                addr: "",
                hideDel: !0,
                value: [ 0, 0, 0 ],
                values: [ 0, 0, 0 ],
                province: "北京市",
                city: "市辖区",
                county: "东城区",
                provinceId: "",
                cityId: "1",
                countyId: "2"
            });
        });
    },
    _cancel: function(t) {
        var a = this;
        a.setData({
            myHidden: !0
        }), a.data.condition && a._close();
    },
    _edit: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), e = this.data.addrList, d = t.detail.formId, n = this;
        !function(t) {
            n.setData({
                myHidden: !1,
                hideDel: !1,
                addressId: e[a].id,
                name: e[a].name,
                tel: e[a].tel,
                addr: e[a].address,
                value: [ 0, 0, 0 ],
                values: [ 0, 0, 0 ],
                dataLoaded: !1
            }), n.provinces(function() {
                n.citys(1, function() {
                    n.countys(2, function() {
                        t && t();
                    });
                });
            });
        }(function() {
            n.setData({
                province: e[a].province,
                city: e[a].city,
                county: e[a].county,
                dataLoaded: !0
            });
        }), i.submitForm(d);
    },
    _del: function(t) {
        var i = this;
        t.detail.formId;
        i.setData({
            dataLoaded: !1
        }), a.G({
            url: "/apis/home/user.address/del",
            data: {
                uid: d.getUid(),
                id: i.data.addressId
            },
            success: function(t) {
                i.setData({
                    myHidden: !0
                }), i._initAddr();
            }
        }), i.data.condition && i._close();
    },
    _selectDefault: function(t) {
        var i = this, e = parseInt(t.currentTarget.dataset.index), d = this.data.addrList;
        t.detail.formId;
        i.setData({
            addressId: d[e].id
        }), a.G("/openapi/CAddress/setDefault", {
            id: i.data.addressId
        }, function(t) {
            i._initAddr();
        });
    },
    provinces: function(t) {
        this.setData({
            province_id: []
        });
        var i = this;
        a.G({
            url: "/apis/home/index.common/city?id=0",
            data: {},
            success: function(a) {
                var e = i.data.province_id, d = i.data.province_name, n = a.data;
                i.setData({
                    provinces: n
                });
                for (var s = 0; s < i.data.provinces.length; s++) e.push(i.data.provinces[s].id), 
                d.push(i.data.provinces[s].name);
                i.setData({
                    province_id: e,
                    province_name: d,
                    province: d[0],
                    provinceId: e[0]
                }), t && t();
            }
        });
    },
    citys: function(t, i) {
        this.setData({
            city_id: []
        });
        var e = this;
        a.G({
            url: "/apis/home/index.common/city",
            data: {
                id: t
            },
            success: function(t) {
                var a = e.data.city_id, d = e.data.city_name, n = (e.data.city, t.data);
                e.setData({
                    citys: n
                });
                for (var s = 0; s < e.data.citys.length; s++) a.push(e.data.citys[s].id), d.push(e.data.citys[s].name);
                e.setData({
                    city_id: a,
                    city_name: d,
                    city: d[0],
                    cityId: a[0]
                }), i && i();
            }
        });
    },
    countys: function(t, i) {
        this.setData({
            county_id: []
        });
        var e = this;
        a.G({
            url: "/apis/home/index.common/city",
            data: {
                id: t
            },
            success: function(t) {
                var a = e.data.county_id, d = e.data.county_name, n = t.data;
                e.setData({
                    countys: n
                });
                for (var s = 0; s < e.data.countys.length; s++) a.push(e.data.countys[s].id), d.push(e.data.countys[s].name);
                e.setData({
                    county_id: a,
                    county_name: d,
                    county: d[0],
                    countyId: a[0]
                }), i && i();
            }
        });
    },
    bindChange: function(t) {
        var i = t.detail.value, e = this.data.values;
        if (i[0] != e[0]) {
            var d = this, n = this.data.province_id, s = (this.data.province_name[i[0]], n[i[0]]);
            return this.setData({
                city_id: [],
                city_name: [],
                city: "",
                county_id: [],
                county_name: [],
                county: ""
            }), a.G({
                url: "/apis/home/index.common/city",
                data: {
                    id: s
                },
                success: function(t) {
                    var a = d.data.city_id, i = d.data.city_name, e = t.data;
                    d.setData({
                        citys: e
                    });
                    for (var n = 0; n < d.data.citys.length; n++) a.push(d.data.citys[n].id), i.push(d.data.citys[n].name);
                    d.setData({
                        city_id: a,
                        city_name: i,
                        city: i[0],
                        cityId: a[0]
                    }), d.countys(a[0]);
                }
            }), void this.setData({
                province: this.data.province_name[i[0]],
                city: this.data.city_name[i[1]],
                county: this.data.county_name[i[2]],
                provinceId: this.data.province_id[i[0]],
                cityId: this.data.cityId,
                countyId: this.data.countyId,
                values: i,
                value: [ i[0], 0, 0 ]
            });
        }
        if (i[1] != e[1]) {
            var d = this, n = this.data.province_id[i[0]], o = (this.data.province_name[i[0]], 
            d.data.city_id[i[1]]);
            d.data.city_name[i[1]];
            return this.setData({
                county_id: [],
                county_name: [],
                county: ""
            }), a.G({
                url: "/apis/home/index.common/city",
                data: {
                    id: o
                },
                success: function(t) {
                    var a = d.data.county_id, i = d.data.county_name, e = t.data;
                    d.setData({
                        countys: e
                    });
                    for (var n = 0; n < d.data.countys.length; n++) a.push(d.data.countys[n].id), i.push(d.data.countys[n].name);
                    d.setData({
                        county_id: a,
                        county_name: i,
                        county: i[0],
                        countyId: a[0]
                    });
                }
            }), void this.setData({
                city: this.data.city_name[i[1]],
                cityId: this.data.city_id[i[1]],
                county: this.data.county_name[i[2]],
                countyId: this.data.county_id[i[2]],
                values: i,
                value: [ i[0], i[1], 0 ]
            });
        }
        i[2] == e[2] || this.setData({
            county: this.data.county_name[i[2]],
            countyId: this.data.county_id[i[2]],
            values: i,
            value: [ i[0], i[1], i[2] ]
        });
    },
    handleAddr: function(i, e, n) {
        var s = this;
        void 0 === i && (i = ""), a.P({
            url: "/apis/home/user.address/add",
            data: {
                uid: d.getUid(),
                name: this.data.name,
                tel: this.data.tel,
                address: this.data.addr,
                province: this.data.province,
                city: this.data.city,
                county: this.data.county,
                id: i
            },
            success: function(a) {
                s.setData({
                    addressId: a.data.id,
                    myHidden: !0,
                    submiting: !1
                }), s._initAddr(), t.alert("保存成功", function() {
                    n && n();
                });
            }
        });
    },
    validInput: function(a) {
        var i = a || {}, e = i.userName, d = i.telPhone, n = i.addr;
        return 0 == e.length ? (t.alert("请输入您的收货人姓名"), !1) : e.length > 20 ? (t.alert("收货人长度不能超过20位"), 
        !1) : 0 == d.length ? (t.alert("请输入您的手机号"), !1) : /^1\d{10}$/.test(d.trim()) ? 0 == n.length ? (t.alert("请输入您的详细地址"), 
        !1) : !(n.length > 100) || (t.alert("您输入的地址长度不能超过100位"), !1) : (t.alert("您输入的手机号格式不正确"), 
        !1);
    },
    showZanTopTips: function() {
        var t = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, e = this.data.zanTopTips || {};
        e.timer && (clearTimeout(e.timer), e.timer = void 0), "number" == typeof i && (i = {
            duration: i
        }), i = Object.assign({
            duration: 1e3
        }, i);
        var d = setTimeout(function() {
            t.setData({
                "zanTopTips.show": !1,
                "zanTopTips.timer": void 0
            });
        }, i.duration);
        this.setData({
            zanTopTips: {
                show: !0,
                content: a,
                options: i,
                timer: d
            }
        });
    },
    _jump: function(t) {
        i.jump(t);
    },
    _goPrevPage: function() {
        var t = this, a = getCurrentPages(), i = a[a.length - 2];
        console.log(i), i.setData({
            optionAddrId: t.data.addressId,
            myIf: !1
        }), "pages/my/index" != i.route && wx.navigateBack({
            delta: 1
        });
    }
}));