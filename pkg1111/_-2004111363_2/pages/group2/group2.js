function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function o(n, i) {
                try {
                    var s = r[n](i), a = s.value;
                } catch (e) {
                    return void t(e);
                }
                if (!s.done) return Promise.resolve(a).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(a);
            }
            return o("next");
        });
    };
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, r) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !r || "object" != typeof r && "function" != typeof r ? e : r;
}

function _inherits(e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    e.prototype = Object.create(r && r.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, r) {
        for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(r, t, o) {
        return t && e(r.prototype, t), o && e(r, o), r;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _com_canvas = require("./../../components/com_canvas.js"), _com_canvas2 = _interopRequireDefault(_com_canvas), _com_shopCar = require("./../../components/com_shopCar.js"), _com_shopCar2 = _interopRequireDefault(_com_shopCar), _com_imSwitch = require("./../../components/com_imSwitch.js"), _com_imSwitch2 = _interopRequireDefault(_com_imSwitch), _com_goodrich = require("./../../components/com_goodrich.js"), _com_goodrich2 = _interopRequireDefault(_com_goodrich), _com_goodValue = require("./../../components/com_goodValue.js"), _com_goodValue2 = _interopRequireDefault(_com_goodValue), _com_slider_in = require("./../../components/com_slider_in.js"), _com_slider_in2 = _interopRequireDefault(_com_slider_in), _core = require("./../../lib/core.js"), group2 = function(e) {
    function r() {
        var e, t, o, n;
        _classCallCheck(this, r);
        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
        return t = o = _possibleConstructorReturn(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(s))), 
        o.config = {
            navigationBarTitleText: "商品详情",
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            }
        }, o.$repeat = {}, o.$props = {
            comShop: {
                "v-bind:disable.once": "disable",
                "v-bind:currentCom.sync": "vm",
                "xmlns:v-on": ""
            },
            comCanvas: {},
            comRich: {
                "v-bind:vm.sync": "vm"
            },
            comImBtn: {
                "v-bind:false.sync": "false",
                "v-bind:wxServer.sync": "vm.wxServer",
                "v-bind:vm.sync": "vm.userInfo"
            },
            comValue: {
                "v-bind:current.sync": "vm.valueLst",
                "v-bind:vm.sync": "vm.valueLst.list[0]",
                class: "mt20"
            },
            comSlider: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.sync": "vm",
                "xmlns:wx": ""
            }
        }, o.$events = {
            comShop: {
                "v-on:hideMask": "hideMask",
                "v-on:changeSpec": "changeSpec",
                "v-on:add": "add",
                "v-on:less": "less",
                "v-on:goShop": "goShop",
                "v-on:setNum": "setNum"
            },
            comCanvas: {
                "v-on:hideCanvas": "hideCanvas"
            },
            comImBtn: {
                "v-on:getUser": "getUser"
            }
        }, o.components = {
            comShop: _com_shopCar2.default,
            comCanvas: _com_canvas2.default,
            comRich: _com_goodrich2.default,
            comImBtn: _com_imSwitch2.default,
            comValue: _com_goodValue2.default,
            comSlider: _com_slider_in2.default
        }, o.data = {
            vm: {},
            toast: {},
            showGroup: !0,
            showCanvas: !1,
            showShopCar: !1,
            currentSkin: {}
        }, o.methods = {
            openCanvas: function() {
                _core.tools.showLoading();
                var e = {
                    pid: this.vm.id,
                    type: "",
                    recordId: 0,
                    showprice: 0,
                    protype: 1
                };
                _core.canvas.getQrcode(e, this);
            },
            hideCanvas: function() {
                this.showCanvas = !1, this.$apply();
            },
            showMoreGroup: function() {
                var e = this.vm;
                e.showGroupMore = !e.showGroupMore, e.showNum = e.showGroupMore ? e.groupNow.length : 3, 
                this.vm = e, this.$apply();
            },
            showRule: function() {
                this.vm.showRule = !this.vm.showRule, this.$apply();
            },
            getUser: function() {
                function e(e) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.getRnUser(r);

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
            goShare: function(e) {
                _core.tools.goNewPage("/pages/group2/group2Share?id=" + e);
            },
            navCheck: function(e, r, t) {
                _core.core.formId(t.detail.formId), _core.tools.goNewPage("../group2/group2?id=" + e + "&showGroup=1&groupId=" + r);
            },
            wxParseImgTap: function(e) {
                _core.tools.preViewShow(e.currentTarget.dataset.src);
            },
            goBuy: function() {
                function e(e, t) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                    var o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return _core.core.formId(t.detail.formId), e.next = 3, _core.pro.resetPro(this.vm, "buy", "group", r);

                          case 3:
                            o = e.sent, this.isgroup = r, this.vm = o, this.showShopCar = !0, this.$apply();

                          case 8:
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
                function e(e, t) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.pro.choosePro(this.vm, r, t, "group", this.isgroup);

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
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var r, t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = this.vm, e.next = 3, _core.pro.addPro(r, "group", this, this.isgroup);

                          case 3:
                            t = e.sent, t && (0 == Number(this.isgroup) ? r.danMaiPrice = parseFloat(t.price.mul(t.count)).toFixed(2) : r.groupPrice = parseFloat(t.price.mul(t.count)).toFixed(2), 
                            r.totalCount = t.count, this.vm = r, this.price = t.price, this.$apply());

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
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var r;
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
                            r = e.sent, this.price && (0 == Number(this.isgroup) ? this.vm.danMaiPrice = parseFloat(this.price.mul(r)).toFixed(2) : this.vm.groupPrice = parseFloat(this.price.mul(r)).toFixed(2), 
                            this.vm.totalCount = r, this.$apply());

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            setNum: function(e) {
                var r = this.vm, t = 0, o = Number(e.detail.value);
                if (r.pickspecification.length) {
                    var n = r.GASDetailList.find(function(e) {
                        return e.id == r.specId;
                    });
                    t = n ? 1 == this.isgroup ? n.groupPrice : n.price : 0;
                } else t = 1 == this.isgroup ? r.EntGroups.GroupPrice.div(100) : r.price;
                0 != o && (0 == Number(this.isgroup) ? r.danMaiPrice = parseFloat(t.mul(o)).toFixed(2) : r.groupPrice = parseFloat(t.mul(o)).toFixed(2), 
                r.totalCount = o, this.price = t, this.vm = r, this.$apply());
            },
            goShop: function(e) {
                var r = this.vm;
                _core.core.formId(e.detail.formId);
                var t = r.GASDetailList.find(function(e) {
                    return e.id == r.specId;
                });
                if (r.pickspecification.length) {
                    if ("" == r.specId) return void _core.tools.loading("请选择商品规格");
                    if (void 0 == t) return void _core.tools.loading("未选择完");
                    if (r.stockLimit) {
                        if (r.totalCount > t.stock) return void _core.tools.loading("库存不足");
                        this.addOrder();
                    } else this.addOrder();
                } else if (r.stockLimit) {
                    if (r.totalCount > r.stockStr) return void _core.tools.loading("库存不足");
                    this.addOrder();
                } else this.addOrder();
            }
        }, n = t, _possibleConstructorReturn(o, n);
    }
    return _inherits(r, e), _createClass(r, [ {
        key: "onLoad",
        value: function(e) {
            var r = 0, t = (0, _lodashGet2.default)(e, "scene"), o = (0, _lodashGet2.default)(e, "showGroup", 0);
            if (t) {
                var n = decodeURIComponent(t);
                n = n.split("_"), r = (0, _lodashGet2.default)(n, "0");
            } else r = (0, _lodashGet2.default)(e, "id", 0);
            this.id = r, this.shareGroupId = (0, _lodashGet2.default)(e, "groupId", 0), this.showGroup = "1" != o, 
            this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        this.groupInfo(this.id);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "groupInfo",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var t, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.t0 = (0, _lodashGet2.default)(_wepy2.default.$instance.globalData, "storeConfig", ""), 
                        e.t0) {
                            e.next = 5;
                            break;
                        }
                        return e.next = 4, _core.core.getStoreConfig();

                      case 4:
                        e.t0 = e.sent;

                      case 5:
                        return t = e.t0, e.next = 8, _core.core.getGoodInfo(r);

                      case 8:
                        o = e.sent, o.specId = "", o.type = "group", o.showNum = 3, o.showGroupMore = !1, 
                        o.showRule = !1, o.totalCount = 1, o.stockStr = o.stock, o.danMaiPrice = o.priceStr, 
                        o.yuanJiaPrice = o.EntGroups.OriginalPriceStr, o.groupPrice = o.GASDetailList.length ? o.GASDetailList[0].groupPrice : o.EntGroups.GroupPriceStr, 
                        o.imswitch = t.storeInfo.funJoinModel.imSwitch, o.wxServer = t.storeInfo.funJoinModel.wxServer, 
                        o.isgroup = 0, this.vm = o, this.$apply(), this.goodValue(r), this.cutDown(o);

                      case 26:
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
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getShowGoodValue(r);

                      case 2:
                        t = e.sent, t.isok && (this.vm.valueLst = t.dataObj, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "cutDown",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var t, o, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this, !Object.keys(r).length) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 4, _core.core.getUserInfo();

                      case 4:
                        o = e.sent, t.timeInter = setInterval(function() {
                            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(i) {
                                var s, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, _core.core.initCountDown(r.EntGroups);

                                      case 2:
                                        if (t.vm.groupNow = e.sent, t.vm.groupNow) for (s = 0, a = t.vm.groupNow.length; s < a; s++) t.vm.groupNow[s].SponsorUserId == o.Id ? t.vm.groupNow[s].moreJoin = !1 : t.vm.groupNow[s].moreJoin = !0; else clearInterval(t.timeInter);
                                        t.$apply();

                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, n);
                            }));
                            return function(r) {
                                return e.apply(this, arguments);
                            };
                        }(), 1e3);

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onHide",
        value: function() {
            clearInterval(this.timeInter);
        }
    }, {
        key: "onUnload",
        value: function() {
            clearInterval(this.timeInter);
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            var e = [ this.vm.name, this.vm.img, this.vm.id ];
            return {
                title: e[0],
                path: "/pages/group2/group2?id=" + e[2],
                imageUrl: e[1]
            };
        }
    }, {
        key: "addOrder",
        value: function() {
            function e() {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var r, t, o, n, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = this.vm, t = {
                            pid: r.id,
                            specId: r.specId,
                            SpecInfo: r.specInfo,
                            count: r.totalCount,
                            record: 1,
                            isgroup: this.isgroup,
                            img: r.selImg || r.imgurl
                        }, e.next = 4, _core.core.addShopCar(t, this);

                      case 4:
                        if (o = e.sent, 1 != o.isok) {
                            e.next = 22;
                            break;
                        }
                        return n = 0, n = 0 == this.showGroup ? 3 : 0 == this.isgroup ? 0 : 1, e.next = 10, 
                        _core.pro.orderPro(r, "group", this.isgroup);

                      case 10:
                        i = e.sent, i.vipDiscount = r.discount, i.HeadDeductStr = r.EntGroups.HeadDeductStr, 
                        i.goodtype = r.goodtype, i.groupId = this.shareGroupId, i.cartid = o.cartid, i.message = "", 
                        this.$preload("vm_goods", i), this.$navigate("../group2/group2Order?isgroup=" + n), 
                        this.showShopCar = !1, e.next = 23;
                        break;

                      case 22:
                        _core.tools.showModal(o.msg, !1);

                      case 23:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), r;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(group2, "pages/group2/group2"));