function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, i = e(require("../../../utils/dg.js")), s = e(require("../../../utils/requestUtil.js")), d = require("../../../utils/data.js"), n = e(require("../../../utils/underscore.js")), o = e(require("../../../utils/listener.js")), r = e(require("../../../utils/util.js"));

Page({
    data: {
        isAli: i.default.os.isAlipay(),
        baseUrl: d.duoguan_host_api_url + "/index.php/addon/DuoguanUser",
        isCallback: !1,
        showPage: "list",
        mode: "select_map_point",
        listUrl: "/AddressApi/info",
        list: [],
        pageNumber: 1,
        pageSize: 20,
        hasMore: !0,
        isShowLoading: !1,
        is_use_app_address_detail_info: !1,
        buttonIsDisabled: !1,
        url: "/AddressApi/info",
        id: 0,
        is_default: 0,
        label: 1,
        longitude: 0,
        latitude: 0,
        callbackAddress: {},
        address: "",
        pickerIndex: 1,
        pickerData: [ {
            country: "其它",
            phone_country_area_code: "0",
            placeholder: "国家区号+您的手机号码"
        }, {
            country: "中国",
            phone_country_area_code: "86",
            placeholder: "请输入您的手机号码"
        } ],
        country_list: {},
        province_list: {},
        city_list: {},
        area_list: {},
        country_index: 0,
        province_index: 0,
        city_index: 0,
        area_index: 0,
        userLocationAuth: !0,
        addressAuth: !0
    },
    onLoad: function(e) {
        var t = this;
        this.setData({
            isCallback: void 0 !== e.isCallback
        }), this.setPageTitle("list");
        var a = this.data.mode, i = this.data.baseUrl + "/AddressApi/getUserReceiveAddressMode", d = {
            _p: e.pageNumber,
            _r: e.pageSize,
            search: e.search,
            mode: a
        };
        s.default.get(i, d, function(a) {
            var i = a.mode || t.data.mode;
            -1 == n.default.indexOf([ "select_map_point", "select_address_list" ], i) && (i = "select_map_point"), 
            t.setData({
                mode: i
            }), t.initialize(e);
        }, this);
    },
    onUnload: function() {
        if (this.data.isCallback) {
            var e = this.data.callbackAddress;
            o.default.fireEventListener("address.choose.confirm", [ e ]);
        }
    },
    onPullDownRefresh: function() {
        if ("form" == this.data.showPage) return i.default.stopPullDownRefresh(), !1;
        this.refresh();
    },
    onReachBottom: function() {
        var e = {}, t = {};
        e = {
            pageNumber: this.data.pageNumber,
            pageSize: this.data.pageSize,
            hasMore: this.data.hasMore,
            url: this.data.listUrl,
            search: t
        }, this.list(e);
    },
    refresh: function() {
        this.setData({
            list: [],
            pageNumber: 1
        });
        var e = {}, t = {};
        e = {
            pageNumber: 1,
            pageSize: this.data.pageSize,
            hasMore: !0,
            url: this.data.listUrl,
            search: t
        }, this.list(e);
    },
    initialize: function(e) {
        e = {
            pageNumber: 1,
            pageSize: this.data.pageSize,
            hasMore: !0,
            url: this.data.listUrl,
            search: []
        }, this.list(e);
    },
    list: function(e) {
        var t = this;
        if (!e.hasMore) return this.setData({
            isShowLoading: !1
        }), i.default.stopPullDownRefresh(), !1;
        var a = this.data.baseUrl + e.url, d = {
            _p: e.pageNumber,
            _r: e.pageSize,
            search: e.search,
            mode: this.data.mode
        };
        s.default.get(a, d, function(a) {
            var i = t.data.list;
            a = a || [], i = 1 == e.pageNumber ? a : i.concat(a), i = (0, n.default)(i).sortBy(function(e) {
                return -e.is_default;
            }), t.setData({
                isShowLoading: !1,
                hasMore: !(a.length < t.data.pageSize),
                pageNumber: e.pageNumber + 1,
                list: i,
                nodata: 0 != i.length
            });
        }, this, {
            isShowLoading: !1,
            completeAfter: function(e) {
                i.default.stopPullDownRefresh();
            }
        });
    },
    add: function(e) {
        var i;
        if (this.setPageTitle("add"), "select_address_list" == this.data.mode) {
            var d = this.data.baseUrl + "/RegionApi/shopRegionInitAdd", n = {};
            s.default.get(d, n, function(e) {
                this.setData(a({}, e));
            }, this);
        }
        this.setData((i = {
            showPage: "form",
            id: 0,
            name: "",
            gender: 1,
            mobile: "",
            address: "",
            detail_info: ""
        }, t(i, "address", ""), t(i, "label", 1), t(i, "postcode", ""), i));
    },
    edit: function(e) {
        var t = this;
        this.setPageTitle("edit");
        var i = e.currentTarget.dataset.id;
        this.setData({
            showPage: "form",
            id: i
        });
        var d = {
            id: i
        }, o = this.data.baseUrl + this.data.url, r = d;
        s.default.get(o, r, function(e) {
            (0, n.default)(t.data.pickerData).map(function(t, a) {
                if (t.phone_country_area_code == e.phone_country_area_code && 0 == e.phone_country_area_code) return e.pickerIndex = 0, 
                t;
            }), t.setData(a({}, e));
        }, this);
    },
    cancel: function(e) {
        this.setPageTitle("list"), this.setData({
            showPage: "list",
            pickerIndex: 1,
            id: 0,
            is_use_app_address_detail_info: !1
        });
    },
    remove: function(e) {
        var t = this, a = e.currentTarget.dataset.id;
        i.default.confirm("确定要删除收货地址吗？", function(e) {
            e.confirm && t.delete(a);
        }, "删除提示");
    },
    delete: function(e) {
        var t = this, a = [];
        a.id = e, a.request_method = "DELETE", this.setData({
            buttonIsDisabled: !0
        });
        var d = this.data.baseUrl + this.data.url, n = a;
        s.default.get(d, n, function(e) {
            var a = a;
            "success" == a && i.default.showToast({
                title: "删除成功",
                icon: "success",
                duration: 2e3
            }), t.setData({
                showPage: "list",
                buttonIsDisabled: !1,
                id: 0,
                name: "",
                gender: 1,
                mobile: "",
                address: "",
                detail_info: "",
                label: 1,
                postcode: ""
            }), t.refresh();
        }, this, {
            isShowLoading: !1,
            completeAfter: function(e) {
                this.setData({
                    buttonIsDisabled: !1
                });
            }
        });
    },
    chooseGender: function(e) {
        var t = e.currentTarget.dataset.gender || 1;
        this.setData({
            gender: t
        });
    },
    chooseLabel: function(e) {
        var t = e.currentTarget.dataset.label || 1;
        this.setData({
            label: t
        });
    },
    pickerChange: function(e) {
        var t = e.detail.value;
        this.setData({
            pickerIndex: t
        });
    },
    setPageTitle: function(e) {
        var t = "";
        "add" == e ? t = "新增收货地址" : "edit" == e ? t = "编辑收货地址" : "list" == e && (t = this.data.isCallback ? "选择收货地址" : "我的地址"), 
        i.default.setNavigationBarTitle({
            title: t
        });
    },
    formSubmit: function(e) {
        var t = this, a = e.detail.value;
        if ("select_map_point" == a.mode) {
            if (a.longitude = 1 * this.data.longitude, a.latitude = 1 * this.data.latitude, 
            a.longitude < .01 || a.latitude < .01) return i.default.showToast({
                title: "经纬度未获取",
                icon: "none",
                duration: 2e3
            }), !1;
            a.is_use_location = 1;
        } else a.region_id = this.data.area_list[this.data.area_index].region_id || 0;
        a.address = this.data.address, a.phone_country_area_code = this.data.pickerData[this.data.pickerIndex].phone_country_area_code, 
        0 == this.data.id ? a.request_method = "POST" : (a.request_method = "PUT", a.id = this.data.id), 
        this.setData({
            buttonIsDisabled: !0
        });
        var d = this.data.baseUrl + this.data.url, n = a;
        s.default.post(d, n, function(e) {
            if (0 == e.length) return t.setData({
                buttonIsDisabled: !1
            }), !1;
            i.default.showToast({
                title: "提交成功",
                icon: "success",
                duration: 2e3
            }), t.setData({
                showPage: "list",
                id: 0,
                pickerIndex: 1,
                buttonIsDisabled: !1,
                is_use_app_address_detail_info: !1
            }), t.refresh();
        }, this, {
            isShowLoading: !1,
            completeAfter: function(e) {
                this.setData({
                    buttonIsDisabled: !1
                });
            }
        });
    },
    location: function(e) {
        var t = this;
        i.default.chooseLocation({
            fail: function(e) {
                t.data.isAli || -1 != e.errMsg.indexOf("auth") && (i.default.canIUse("button.open-type.openSetting") ? (t.setData({
                    userLocationAuth: !1
                }), i.default.showToast({
                    title: "请先开启“地理位置”权限",
                    icon: "none"
                })) : i.default.confirm("请授权用户地理位置", function(e) {
                    e.confirm && wx.openSetting({
                        success: function(e) {
                            if (e.authSetting && e.authSetting["scope.userLocation"]) return t.location(), !1;
                            i.default.showToast({
                                title: "授权失败",
                                icon: "none"
                            });
                        }
                    });
                }, "温馨提示"));
            },
            success: function(e) {
                var a = t.data.address;
                a = e.address || "";
                var s = t.data.detail_info;
                e.name && (t.data.is_use_app_address_detail_info || (s = e.name)), t.setData({
                    longitude: e.longitude,
                    latitude: e.latitude,
                    address: a,
                    detail_info: s
                }), "" == a && i.default.alert("请在补充信息中填写完整的地址"), e.address != e.name || t.data.isAli || r.default.getMapSdk().reverseGeocoder({
                    location: {
                        latitude: e.latitude,
                        longitude: e.longitude
                    },
                    success: function(e) {
                        t.setData({
                            address: e.result.address
                        });
                    }
                });
            }
        });
    },
    chooseAppAddress: function(e) {
        var t = this;
        wx.chooseAddress({
            success: function(e) {
                if ("select_map_point" == t.data.mode) t.add({}), t.setData({
                    mobile: e.telNumber,
                    name: e.userName,
                    detail_info: e.detailInfo,
                    is_use_app_address_detail_info: !0
                }); else {
                    e.isAli = t.data.isAli;
                    var a = t.data.baseUrl + "/AddressApi/saveNativeAppAddress", i = e;
                    s.default.post(a, i, function(e) {
                        t.refresh();
                    }, t, {
                        loadingText: "保存中"
                    });
                }
            },
            fail: function(e) {
                (-1 !== e.errMsg.indexOf("deny") || e.errMsg.indexOf("denied") > 0) && (i.default.canIUse("button.open-type.openSetting") ? (t.setData({
                    addressAuth: !1
                }), i.default.showToast({
                    title: "请先开启“通讯地址”权限",
                    icon: "none"
                })) : i.default.confirm("是否重新授权获取通讯地址？", function(e) {
                    e.confirm && wx.openSetting({
                        success: function(e) {
                            if (e.authSetting && e.authSetting["scope.address"]) return t.chooseAppAddress({}), 
                            !1;
                            i.default.showToast({
                                title: "授权失败",
                                icon: "none"
                            });
                        }
                    });
                }, "授权失败"));
            }
        });
    },
    radioChange: function(e) {
        var t = this, a = e.detail.value, d = this.data.list[a];
        if (!this.data.isCallback) {
            var n = d.id, o = this.data.baseUrl + "/AddressApi/setDefaultAddress", r = {
                id: n
            };
            return s.default.get(o, r, function(e) {
                t.refresh();
            }, this, {
                isShowLoading: !1
            }), !1;
        }
        if (this.setData({
            callbackAddress: d
        }), "select_map_point" == this.data.mode) {
            if (1 * d.longitude < .01) return i.default.alert("此地址无经纬度，编辑或重选", null, "温馨提示"), 
            !1;
            if ("invalid" == d.qqmap_address.data) return i.default.alert("此地址请先编辑或重选", null, "温馨提示"), 
            !1;
        }
        i.default.navigateBack();
    },
    pickerChangeSelect: function(e) {
        var t = e.currentTarget.dataset.level, i = e.detail.value, d = t + "_list", n = t + "_index", o = this.data;
        if (o[n] != i) if ("area" != t) {
            var r = this.data.baseUrl + "/RegionApi/shopRegionLevel", l = {
                level: t,
                region_id: o[d][i].region_id
            };
            s.default.get(r, l, function(e) {
                e[n] = i, this.setData(a({}, e));
            }, this);
        } else this.setData({
            area_index: i
        });
    },
    switchChange: function(e) {
        var t = e.detail.value, i = e.currentTarget.dataset.name, s = {};
        "is_default" == i && (t = 1 == t ? 1 : 0), s[i] = t, this.setData(a({}, s));
    },
    stopBubbling: function(e) {
        console.log("action_name: stopBubbling,阻止冒泡");
    },
    openSetting: function(e) {
        var t = e.currentTarget.dataset.scope, a = e.detail.authSetting;
        return "userLocation" == t && a["scope.userLocation"] ? (this.setData({
            userLocationAuth: !0
        }), this.location(), !1) : "address" == t && a["scope.address"] ? (this.setData({
            addressAuth: !0
        }), this.chooseAppAddress(), !1) : void i.default.showToast({
            title: "授权失败",
            icon: "none"
        });
    }
});