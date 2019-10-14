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
                    var i = t[n](a), s = i.value;
                } catch (e) {
                    return void o(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _com_shopCar = require("./../../components/com_shopCar.js"), _com_shopCar2 = _interopRequireDefault(_com_shopCar), _com_richtxt = require("./../../components/com_richtxt.js"), _com_richtxt2 = _interopRequireDefault(_com_richtxt), _com_canvas = require("./../../components/com_canvas.js"), _com_canvas2 = _interopRequireDefault(_com_canvas), _com_imSwitch = require("./../../components/com_imSwitch.js"), _com_imSwitch2 = _interopRequireDefault(_com_imSwitch), _core = require("./../../lib/core.js"), detail = function(e) {
    function t() {
        var e, o, r, n;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index",
                "wxc-mask": "../../packages/@minui/wxc-mask/dist/index"
            },
            navigationBarTitleText: "",
            enablePullDownRefresh: !0
        }, r.$repeat = {}, r.$props = {
            comRich: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.once": "vm"
            },
            comShop: {
                "v-bind:disable.once": "disable",
                "v-bind:currentCom.sync": "vm.goodInfo"
            },
            comVas: {},
            comIm: {
                "v-bind:false.sync": "false",
                "v-bind:vm.sync": "vm.userInfo",
                "xmlns:v-on": "",
                "v-bind:wxServer.sync": "vm.store.wxServer"
            }
        }, r.$events = {
            comShop: {
                "v-on:hideMask": "hideMask",
                "v-on:changeSpec": "changeSpec",
                "v-on:add": "add",
                "v-on:less": "less",
                "v-on:goShop": "goShop",
                "v-on:setNum": "setNum"
            },
            comVas: {
                "v-on:hideCanvas": "hideCanvas"
            },
            comIm: {
                "v-on:getUser": "getUser"
            }
        }, r.components = {
            comRich: _com_richtxt2.default,
            comShop: _com_shopCar2.default,
            comVas: _com_canvas2.default,
            comIm: _com_imSwitch2.default
        }, r.data = {
            vm: {},
            toast: {},
            currentSkin: {},
            maskStatus: "hide",
            disable: !0,
            showCanvas: !1
        }, r.computed = {}, r.methods = {
            shareQrc: function() {
                _core.tools.showLoading();
                var e = this.vm.goodInfo, t = {
                    pid: e.id,
                    type: "miaosha",
                    recordId: "",
                    showprice: "",
                    protype: 4,
                    flashId: this.vm.flashPayInfo.Id
                };
                _core.canvas.getQrcode(t, this);
            },
            hideCanvas: function() {
                this.showCanvas = !1;
            },
            getUser: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.getRnUser(t);

                          case 2:
                            this.vm.userInfo = e.sent, this.$apply();

                          case 4:
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
            showMask: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (0 != this.vm.flashPayInfo.canPay) {
                                e.next = 3;
                                break;
                            }
                            return _core.tools.showModal(this.vm.flashPayInfo.descr, !1), e.abrupt("return");

                          case 3:
                            return _core.core.formId(t.detail.formId), this.maskStatus = "show", e.next = 7, 
                            _core.pro.resetPro(this.vm.goodInfo, "buy", "miaosha");

                          case 7:
                            o = e.sent, this.vm.goodInfo = o, this.$apply();

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            hideMask: function() {
                this.maskStatus = "hide";
            },
            changeSpec: function() {
                function e(e, o) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, o) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.pro.choosePro(this.vm.goodInfo, t, o, "miaosha");

                          case 2:
                            this.vm.goodInfo = e.sent, this.$apply();

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
                    var t, o, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = Number(this.vm.flashPayInfo.amountLimit), o = this.vm.goodInfo, e.next = 4, 
                            _core.pro.addPro(o, "miaosha", this);

                          case 4:
                            r = e.sent, r && (r.count > t && (r.count = t, _core.tools.showModal("该商品每单限购" + t + "件", !1)), 
                            o.danMaiPrice = parseFloat(r.price.mul(r.count)).toFixed(2), o.totalCount = r.count, 
                            this.price = r.price, this.vm.goodInfo = o, this.$apply());

                          case 6:
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
                            if (1 != this.vm.goodInfo.totalCount) {
                                e.next = 3;
                                break;
                            }
                            return _core.tools.ShowToast("亲,不要再减啦", this), e.abrupt("return");

                          case 3:
                            return e.next = 5, _core.pro.lessPro(this.vm.goodInfo, this);

                          case 5:
                            t = e.sent, this.price && (this.vm.goodInfo.danMaiPrice = parseFloat(this.price.mul(t)).toFixed(2), 
                            this.vm.goodInfo.totalCount = t, this.$apply());

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            goShop: function(e) {
                var t = this.vm.goodInfo;
                _core.core.formId(e.detail.formId);
                var o = t.GASDetailList.find(function(e) {
                    return e.id == t.specId;
                });
                if (t.pickspecification.length) {
                    if ("" == t.specId) return void _core.tools.loading("请选择商品规格");
                    if (void 0 == o) return void _core.tools.loading("未选择完");
                    if (t.stockLimit) {
                        if (t.totalCount > o.stock) return void _core.tools.loading("库存不足");
                        this.goMethod();
                    } else this.goMethod();
                } else if (t.stockLimit) {
                    if (t.totalCount > t.stock) return void _core.tools.loading("库存不足");
                    this.goMethod();
                } else this.goMethod();
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
                var o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = (0, _lodashGet2.default)(t, "id", ""), e.next = 3, _core.tools.setPageSkin(this);

                      case 3:
                        _core.core.miaoShaDeail(o, this), this.id = o, this.$apply();

                      case 6:
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
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, o, r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this.vm.goodInfo, o = {
                            pid: t.id,
                            specId: t.specId,
                            SpecInfo: t.specInfo,
                            count: t.totalCount,
                            record: 1,
                            isgroup: "",
                            img: t.selImg
                        }, e.next = 4, _core.core.addShopCar(o);

                      case 4:
                        if (r = e.sent, 1 != r.isok) {
                            e.next = 17;
                            break;
                        }
                        return e.next = 8, _core.pro.orderPro(t, "miaosha");

                      case 8:
                        n = e.sent, n.cartid = r.cartid, n.flashDealId = this.vm.flashPayInfo.Id, this.$preload("vm_order", n), 
                        this.$navigate("./order"), this.maskStatus = "hide", this.$apply(), e.next = 18;
                        break;

                      case 17:
                        _core.tools.showModal(r.msg, !1);

                      case 18:
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
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("show" != this.maskStatus) {
                            e.next = 3;
                            break;
                        }
                        return wx.stopPullDownRefresh(), e.abrupt("return");

                      case 3:
                        clearInterval(this.miaoDeal), _wepy2.default.$instance.globalData.vipInfo = "", 
                        _wepy2.default.$instance.globalData.storeConfig = "", wx.showNavigationBarLoading(), 
                        _core.core.miaoShaDeail(this.id, this), setTimeout(function() {
                            wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
                        }, 1e3);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(detail, "pages/miaoSha/detail"));