function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, o) {
            function r(n, a) {
                try {
                    var s = t[n](a), i = s.value;
                } catch (e) {
                    return void o(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
            }
            return r("next");
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
        for (var o = 0; o < t.length; o++) {
            var r = t[o];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, o, r) {
        return o && e(t.prototype, o), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _com_goodHot = require("./../../components/com_goodHot.js"), _com_goodHot2 = _interopRequireDefault(_com_goodHot), _com_canvas = require("./../../components/com_canvas.js"), _com_canvas2 = _interopRequireDefault(_com_canvas), _com_shopCar = require("./../../components/com_shopCar.js"), _com_shopCar2 = _interopRequireDefault(_com_shopCar), _com_imSwitch = require("./../../components/com_imSwitch.js"), _com_imSwitch2 = _interopRequireDefault(_com_imSwitch), _com_goodrich = require("./../../components/com_goodrich.js"), _com_goodrich2 = _interopRequireDefault(_com_goodrich), _com_goodValue = require("./../../components/com_goodValue.js"), _com_goodValue2 = _interopRequireDefault(_com_goodValue), _com_slider_in = require("./../../components/com_slider_in.js"), _com_slider_in2 = _interopRequireDefault(_com_slider_in), _core = require("./../../lib/core.js"), good = function(e) {
    function t() {
        var e, o, r, n;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            enablePullDownRefresh: !0,
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            }
        }, r.$repeat = {}, r.$props = {
            comHot: {
                "v-bind:vm.sync": "vm.hotGoods"
            },
            comVas: {
                "v-bind:vm.sync": "param"
            },
            comShop: {
                "v-bind:disable.once": "disable",
                "v-bind:currentCom.sync": "vm",
                "xmlns:v-on": ""
            },
            comRich: {
                "v-bind:vm.sync": "vm"
            },
            comImBtn: {
                "v-bind:false.sync": "false",
                "v-bind:wxServer.sync": "vm_icon.wxServer",
                "v-bind:vm.sync": "vm.userInfo"
            },
            comValue: {
                "v-bind:current.sync": "vm.valueLst",
                "v-bind:vm.sync": "vm.valueLst.list[0]",
                class: "mt20"
            },
            comSlider: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.once": "vm",
                "xmlns:wx": ""
            }
        }, r.$events = {
            comVas: {
                "v-on:hideCanvas": "hideCanvas"
            },
            comShop: {
                "v-on:hideMask": "hideMask",
                "v-on:changeSpec": "changeSpec",
                "v-on:add": "add",
                "v-on:less": "less",
                "v-on:goShop": "goShop",
                "v-on:setNum": "setNum"
            },
            comImBtn: {
                "v-on:getUser": "getUser"
            }
        }, r.components = {
            comHot: _com_goodHot2.default,
            comVas: _com_canvas2.default,
            comShop: _com_shopCar2.default,
            comRich: _com_goodrich2.default,
            comImBtn: _com_imSwitch2.default,
            comValue: _com_goodValue2.default,
            comSlider: _com_slider_in2.default
        }, r.data = {
            vm: {},
            param: {},
            toast: {},
            vm_icon: {},
            currentSkin: {},
            disable: !1,
            showCanvas: !1,
            showShopCar: !1
        }, r.methods = {
            openCanvas: function() {
                _core.tools.showLoading();
                var e = this.vm, t = {
                    pid: e.id,
                    type: e.btn,
                    recordId: this.param.record,
                    showprice: e.showprice ? 1 : 0
                };
                _core.canvas.getQrcode(t, this);
            },
            hideCanvas: function() {
                this.showCanvas = !1;
            },
            getUser: function() {
                function e(e, o) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, o) {
                    var r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.getRnUser(o);

                          case 2:
                            if (this.vm.userInfo = e.sent, this.$apply(), 0 != this.vm.userInfo.newUser) {
                                e.next = 12;
                                break;
                            }
                            if ("buy" != t && "shop" != t) {
                                e.next = 12;
                                break;
                            }
                            return this.showShopCar = !0, e.next = 9, _core.pro.resetPro(this.vm, t, "good");

                          case 9:
                            r = e.sent, this.vm = r, this.$apply();

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            wxParseImgTap: function(e) {
                var t = e.currentTarget.dataset.src;
                _core.tools.preViewShow(t);
            },
            pathShop: function() {
                _core.tools.goNewPage("/pages/good/goodShopCar");
            },
            showMask: function() {
                function e(e, o) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, o) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return this.showShopCar = !0, e.next = 3, _core.pro.resetPro(this.vm, t, "good");

                          case 3:
                            this.vm = e.sent, this.$apply();

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            hideMask: function() {
                this.showShopCar = !1, this.$apply();
            },
            changeSpec: function() {
                function e(e, o) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, o) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.pro.choosePro(this.vm, t, o, "good");

                          case 2:
                            this.vm = e.sent, this.$apply();

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            add: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = this.vm, e.next = 3, _core.pro.addPro(t, "good", this);

                          case 3:
                            o = e.sent, o && (t.danMaiPrice = parseFloat(o.price.mul(o.count)).toFixed(2), t.totalCount = o.count, 
                            this.price = o.price, this.vm = t, this.$apply());

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            less: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (1 != this.vm.totalCount) {
                                e.next = 3;
                                break;
                            }
                            return _core.tools.ShowToast("亲,不要再减啦", this), e.abrupt("return");

                          case 3:
                            return e.next = 5, _core.pro.lessPro(this.vm, this);

                          case 5:
                            t = e.sent, this.price && (this.vm.danMaiPrice = parseFloat(this.price.mul(t)).toFixed(2), 
                            this.vm.totalCount = t, this.$apply());

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            setNum: function(e) {
                var t = this.vm, o = 0, r = Number(e.detail.value);
                if (t.pickspecification.length) {
                    var n = t.GASDetailList.find(function(e) {
                        return e.id == t.specId;
                    });
                    o = n ? n.discountPrice : 0;
                } else o = t.price;
                0 != r && (o ? t.danMaiPrice = parseFloat(o.mul(r)).toFixed(2) : t.danMaiPrice, 
                t.totalCount = r, this.price = o, this.vm = t, this.$apply());
            },
            goShop: function(e) {
                var t = this.vm;
                _core.core.formId(e.detail.formId);
                var o = t.GASDetailList.find(function(e) {
                    return e.id == t.specId;
                });
                if (t.pickspecification.length) {
                    if ("" == t.specId) return void _core.tools.loading("请选择商品规格");
                    if (void 0 == o) return void _core.tools.loading("未选择完");
                    if ("yuyue" == t.btn) return void this.goSub();
                    if (t.stockLimit) {
                        if (t.totalCount > o.stock) return void _core.tools.loading("库存不足");
                        this.goMethod(t.display);
                    } else this.goMethod(t.display);
                } else {
                    if ("yuyue" == t.btn) return void this.goSub();
                    if (t.stockLimit) {
                        if (t.totalCount > t.stock) return void _core.tools.loading("库存不足");
                        this.goMethod(t.display);
                    } else this.goMethod(t.display);
                }
            },
            closeMess: function() {
                this.vm.messPop.showPop = !1, this.$apply();
            },
            gochat: function() {
                _core.core.gochat();
            }
        }, n = o, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var o, r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        o = _wepy2.default.$instance, r = (0, _lodashGet2.default)(t, "scene", "") || (0, 
                        _lodashGet2.default)(t, "para", ""), r && r.includes(",") ? r = JSON.parse(r) : (r = decodeURIComponent(r), 
                        r = r.split("_")), n = {
                            record: (0, _lodashGet2.default)(r, "record", 0),
                            btn: (0, _lodashGet2.default)(r, "2") || (0, _lodashGet2.default)(r, "btn", ""),
                            id: (0, _lodashGet2.default)(r, "0", "") || (0, _lodashGet2.default)(r, "id", ""),
                            showprice: (0, _lodashGet2.default)(r, "3", 0) || (0, _lodashGet2.default)(r, "showprice", 0)
                        }, n.record && _core.core.bindShip(n.id, n.record), o.globalData.record = n.record, 
                        this.goodInfo(n, (0, _lodashGet2.default)(r, "sale", 0));

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "goodInfo",
        value: function() {
            function e(e, o) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, o) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getGoodInfo(t.id);

                      case 2:
                        if (r = e.sent, 1 != Number(o)) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 6, _core.core.bindSale(t.id);

                      case 6:
                        n = e.sent, t.record = n.obj;

                      case 8:
                        r.specId = "", r.type = "good", r.totalCount = 1, r.btn = t.btn, r.stockStr = r.stock, 
                        r.itemPrice = r.priceStr, r.danMaiPrice = r.priceStr, r.yuanJiaPrice = r.originalPrice, 
                        r.showprice = 1 == Number(t.showprice), this.vm = r, this.param = t, this.goSell = o, 
                        this.$apply(), this.goodValue(t.id), this.storeInfo(o), this.showMessage();

                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "storeInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var o, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o = _wepy2.default.$instance, 1 != Number(t)) {
                            e.next = 4;
                            break;
                        }
                        return this.vm_icon.setShare = !0, e.abrupt("return");

                      case 4:
                        if (e.t0 = (0, _lodashGet2.default)(o.globalData, "storeConfig", ""), e.t0) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 8, _core.core.getStoreConfig();

                      case 8:
                        e.t0 = e.sent;

                      case 9:
                        r = e.t0, this.vm_icon = {
                            imswitch: r.storeInfo.funJoinModel.imSwitch,
                            wxServer: r.storeInfo.funJoinModel.wxServer,
                            setShare: r.storeInfo.funJoinModel.productQrcodeSwitch
                        }, this.$apply();

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "goodValue",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getShowGoodValue(t);

                      case 2:
                        o = e.sent, o.isok && (this.vm.valueLst = o.dataObj, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "goMethod",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var o, r, n, a, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = this.vm, r = 0, r = "shop" == t ? 0 : 1, n = {
                            pid: o.id,
                            specId: o.specId,
                            SpecInfo: o.specInfo,
                            count: o.totalCount,
                            record: r,
                            isgroup: "",
                            img: o.selImg
                        }, e.next = 6, _core.core.addShopCar(n);

                      case 6:
                        if (a = e.sent, 1 != a.isok) {
                            e.next = 25;
                            break;
                        }
                        if ("shop" != t) {
                            e.next = 14;
                            break;
                        }
                        return e.next = 11, _core.tools.loading(a.msg, "success");

                      case 11:
                        this.showShopCar = !1, e.next = 22;
                        break;

                      case 14:
                        return e.next = 16, _core.pro.orderPro(o, "good");

                      case 16:
                        s = e.sent, s.cartid = a.cartid, s.message = "", this.$preload("vm_order", s), this.$navigate("../good/goodOrder"), 
                        this.showShopCar = !1;

                      case 22:
                        this.$apply(), e.next = 26;
                        break;

                      case 25:
                        _core.tools.showModal(a.msg, !1);

                      case 26:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "goSub",
        value: function() {
            var e = this.vm, t = {
                name: e.name,
                id: e.id,
                specInfo: e.specInfo,
                price: e.itemPrice,
                attrSpacStr: e.specId,
                specImg: e.selImg
            };
            this.$preload("tmp", t), this.$navigate("/pages/good/goodSub");
        }
    }, {
        key: "showMessage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, o, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = _wepy2.default.$instance, !(o = (0, _lodashGet2.default)(t.globalData, "popInfo", ""))) {
                            e.next = 6;
                            break;
                        }
                        this.vm.messPop = {
                            config: o,
                            showPop: !1,
                            openWxShopMessage: !1
                        }, e.next = 14;
                        break;

                      case 6:
                        if (e.t0 = (0, _lodashGet2.default)(t.globalData, "appConfig", ""), e.t0) {
                            e.next = 11;
                            break;
                        }
                        return e.next = 10, _core.core.getPageConfig();

                      case 10:
                        e.t0 = e.sent;

                      case 11:
                        r = e.t0, t.globalData.popInfo = r.appConfig, this.vm.messPop = {
                            config: r.appConfig,
                            showPop: !0,
                            openWxShopMessage: r.extraConfig.openWxShopMessage
                        };

                      case 14:
                        this.$apply();

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = _wepy2.default.$instance.globalData, !this.showShopCar) {
                            e.next = 4;
                            break;
                        }
                        return wx.stopPullDownRefresh(), e.abrupt("return");

                      case 4:
                        t.fullReduction = "", t.vipInfo = "", t.storeConfig = "", wx.showNavigationBarLoading(), 
                        Promise.all([ this.goodInfo(this.param, this.goSell), this.storeInfo(this.goSell) ]), 
                        setTimeout(function() {
                            wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
                        }, 1e3);

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            var e = this.vm, t = this.param, o = e.img || e.slideimgs[0];
            return (t.record || t.again) && _core.core.updateRecordId(t.record), {
                title: e.name || "",
                path: "/pages/good/good?para=" + JSON.stringify(t),
                imageUrl: o
            };
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(good, "pages/good/good"));