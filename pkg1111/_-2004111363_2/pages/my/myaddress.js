function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, s) {
                try {
                    var a = t[o](s), i = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
            }
            return n("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), address = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var s = arguments.length, a = Array(s), i = 0; i < s; i++) a[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "收货地址",
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index"
            }
        }, n.components = {}, n.data = {
            vm: {
                id: 0,
                isdefault: 0,
                contact: "",
                phone: "",
                province: "",
                city: "",
                district: "",
                street: ""
            },
            vm_addr: {
                express: [],
                selflst: []
            },
            self: {
                name: "",
                phone: ""
            },
            selIndex: 0,
            toast: {},
            currentSkin: {},
            array: {},
            digShow: !1,
            pageType: "",
            vm_more: {
                lat: "",
                lng: "",
                ispost: !1,
                loadall: !1,
                pageIndex: 1,
                pageSize: 10,
                list: []
            }
        }, n.computed = {}, n.methods = {
            navChange: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (this.selIndex = Number(t), 6 != Number(t) && 1 != Number(t)) {
                                e.next = 6;
                                break;
                            }
                            return e.next = 4, _core.tools.getLocation();

                          case 4:
                            r = e.sent, r ? (this.vm_more.lat = r.latitude, this.vm_more.lng = r.longitude, 
                            _core.core.GetStorePickPlace(this.vm_more, this)) : _core.core.GetStorePickPlace(this.vm_more, this);

                          case 6:
                            this.$apply();

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            setDefaul: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n, o, s;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (r = _wepy2.default.$instance, !this.pageType) {
                                e.next = 16;
                                break;
                            }
                            if (0 == this.cartid) {
                                e.next = 12;
                                break;
                            }
                            return n = {
                                cartid: this.cartid,
                                province: t.province,
                                city: t.city
                            }, e.next = 6, _core.core.getFreight(n);

                          case 6:
                            if (o = e.sent, 0 != o.data.canpay) {
                                e.next = 12;
                                break;
                            }
                            return e.next = 10, _core.tools.showModal("超出配送范围,请重新选择", !1);

                          case 10:
                            return s = e.sent, e.abrupt("return");

                          case 12:
                            t.mode = "快递", t.modeId = 1, r.globalData.address = t, _core.tools.goBack(1);

                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            setName: function(e) {
                this.vm.contact = e.detail.value;
            },
            setPhone: function(e) {
                this.vm.phone = e.detail.value;
            },
            setDlt: function(e) {
                this.vm.street = e.detail.value;
            },
            addrChange: function(e) {
                this.array.region = e.detail.value, this.vm.province = e.detail.value[0], this.vm.city = e.detail.value[1], 
                this.vm.district = e.detail.value[2];
            },
            setAddress: function() {
                this.showMask();
            },
            hide: function() {
                this.showMask();
            },
            delChange: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.showModal("确定要删除该地址吗？");

                          case 2:
                            if (r = e.sent, !r.confirm) {
                                e.next = 14;
                                break;
                            }
                            return e.next = 6, _core.core.delAddress(t);

                          case 6:
                            if (n = e.sent, !n.isok) {
                                e.next = 13;
                                break;
                            }
                            return _core.tools.ShowToast(n.msg, this), e.next = 11, _core.core.getAddresslt(this);

                          case 11:
                            e.next = 14;
                            break;

                          case 13:
                            _core.tools.showModal(n.msg, !1);

                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            saveChange: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            t = this.vm, this.saveAddress(t);

                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            editChange: function(e, t) {
                this.showMask();
                var r = this.vm, n = this.vm_addr;
                r.id = t.currentTarget.dataset.id, r.city = n.express[e].city, r.phone = n.express[e].phone, 
                r.street = n.express[e].street, r.contact = n.express[e].contact, r.province = n.express[e].province, 
                r.district = n.express[e].district, this.vm = r, this.array.region = n.express[e].province + "," + n.express[e].city + "," + n.express[e].district;
            },
            chooseLocation: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.chooseAddress();

                          case 2:
                            if (r = e.sent, "chooseAddress:fail auth deny" != r.errMsg) {
                                e.next = 8;
                                break;
                            }
                            return e.next = 6, _core.tools.showModal("授权后才可使用,请点击右上角‘关于小程序’进行相关设置", !1);

                          case 6:
                            e.next = 10;
                            break;

                          case 8:
                            n = {
                                contact: r.userName,
                                phone: r.telNumber,
                                province: r.provinceName,
                                city: r.cityName,
                                district: r.countyName,
                                street: r.detailInfo
                            }, this.saveAddress(n);

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            selfName: function(e) {
                this.self.name = e.detail.value, this.$apply();
            },
            selfPhone: function(e) {
                this.self.phone = e.detail.value, this.$apply();
            },
            selfChange: function(e) {
                var t = this.self, r = _wepy2.default.$instance;
                this.vm_addr.selflst.storeInfo.funJoinModel.openInvite ? t.name && t.phone ? (e.mode = "自取", 
                e.modeId = 0, e.contact = t.name, e.phone = t.phone, r.globalData.address = e, _core.tools.goBack(1), 
                wx.setStorageSync("selfuser", t)) : _core.tools.showModal("请完善信息", !1) : t.name && t.phone ? (e.mode = "到店消费", 
                e.modeId = 6, e.contact = t.name, e.phone = t.phone, r.globalData.address = e, _core.tools.goBack(1), 
                wx.setStorageSync("selfuser", t)) : _core.tools.showModal("请完善信息", !1);
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var n, o, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = _wepy2.default.$instance, o = (0, _lodashGet2.default)(t, "type", ""), 
                        s = wx.getStorageSync("selfuser"), e.next = 5, _core.tools.setPageSkin(this);

                      case 5:
                        _core.core.getAddresslt(this), s && (this.self.name = s.name, this.self.phone = s.phone), 
                        this.pageType = o, this.cartid = (0, _lodashGet2.default)(r.preload, "cartid", 0), 
                        this.$apply();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "showMask",
        value: function() {
            this.digShow = !this.digShow;
        }
    }, {
        key: "saveAddress",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.saveAddress(t);

                      case 2:
                        if (r = e.sent, !r.isok) {
                            e.next = 10;
                            break;
                        }
                        return _core.tools.ShowToast(r.msg, this), e.next = 7, _core.core.getAddresslt(this);

                      case 7:
                        this.digShow = !1, e.next = 11;
                        break;

                      case 10:
                        _core.tools.showModal(r.msg, !1);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onReachBottom",
        value: function() {
            var e = Number(this.selIndex);
            6 != e && 1 != e || _core.core.GetStorePickPlace(this.vm_more, this);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(address, "pages/my/myaddress"));