function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var s = t[o](a), i = s.value;
                } catch (e) {
                    return void n(e);
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
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), myInfo = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "我的",
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index"
            },
            enablePullDownRefresh: !0
        }, r.components = {}, r.data = {
            vm: {},
            currentSkin: {},
            isIndependent: !0
        }, r.computed = {}, r.methods = {
            getPhoneNumber: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (n = this, !t.detail.encryptedData || !t.detail.iv) {
                                e.next = 8;
                                break;
                            }
                            return e.next = 4, _core.tools.getRnUser(t);

                          case 4:
                            r = e.sent, r && (this.vm.user.TelePhone = r.purePhoneNumber, this.vm.user.isgetPhone = !0, 
                            this.vm.wxCard = !0, this.$apply()), e.next = 9;
                            break;

                          case 8:
                            _core.tools.goNewPage("/pages/my/bindPhone");

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            navHistory: function() {
                _core.tools.goNewPage("/pages/my/mysavePrice?type=history");
            },
            selPrice: function(e) {
                var t = this.vm.plst[e], n = this.vm.plst;
                n.forEach(function(e, n) {
                    e.Id != t.Id ? e.sel = !1 : e.sel = !e.sel;
                }), this.vm.plst = n, this.$apply();
            },
            recharge: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n, r, o, a, s, i, c;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = _wepy2.default.$instance, !(n = this.vm.plst.find(function(e) {
                                return 1 == e.sel;
                            }))) {
                                e.next = 28;
                                break;
                            }
                            return wx.showNavigationBarLoading(), e.next = 6, _core.core.addSavePrice(n.Id);

                          case 6:
                            if (r = e.sent, !r.isok) {
                                e.next = 26;
                                break;
                            }
                            return o = {
                                orderid: r.orderid,
                                type: 1
                            }, e.next = 11, _core.pay.PayOrder(o);

                          case 11:
                            if ("" == (a = e.sent) || !a.errMsg.includes("requestPayment:ok")) {
                                e.next = 24;
                                break;
                            }
                            for (_core.tools.showModal("支付成功", !1), s = 0, i = this.vm.plst.length; s < i; s++) this.vm.plst[s].sel = !1;
                            return t.globalData.myUser = this.vm, t.globalData.vipInfo = "", e.next = 19, _core.core.getVipInfo();

                          case 19:
                            c = e.sent, this.vm.model.valueMoney = c.valueMoney, this.$apply(), e.next = 25;
                            break;

                          case 24:
                            _core.tools.loading("取消支付");

                          case 25:
                            wx.hideNavigationBarLoading();

                          case 26:
                            e.next = 29;
                            break;

                          case 28:
                            _core.tools.loading("请选择充值金额");

                          case 29:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            loginTap: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.getRnUser(t);

                          case 2:
                            this.vm.user = e.sent, this.$apply();

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            clearStorage: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return wx.clearStorageSync(), e.next = 3, _core.tools.loading("清理成功", "success");

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            showVipFunc: function() {
                _core.tools.goNewPage("./myVipInfo");
            },
            checkOlt: function() {
                _core.tools.goNewPage("/pages/good/goodList");
            },
            navOlt: function(e) {
                _core.tools.goNewPage("/pages/good/goodList?state=" + e);
            },
            nav: function(e) {
                _core.tools.goNewPage(e);
            },
            goStore: function() {
                _core.tools.goNewPage("/pages/my/storeValue");
            },
            getWxCard: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = this, e.next = 3, _core.core.getCardSign();

                          case 3:
                            n = e.sent, r = {
                                signature: n.obj.signature,
                                timestamp: n.obj.timestamp
                            }, r = JSON.stringify(r), wx.addCard({
                                cardList: [ {
                                    cardId: n.obj.cardId,
                                    cardExt: r
                                } ],
                                success: function() {
                                    function e(e) {
                                        return n.apply(this, arguments);
                                    }
                                    var n = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return e.next = 2, _core.core.saveWxCard(n.cardList[0].code, t);

                                              case 2:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e, this);
                                    }));
                                    return e;
                                }()
                            });

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            goSave: function() {
                _core.tools.goNewPage("/pages/my/mysavePrice?type=save");
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShow",
        value: function() {
            console.log("独立更新", global.independentUpdate), this.isIndependent = global.independentUpdate, 
            this.myInfo(), wx.getStorageSync("isbindPhone") && wx.startPullDownRefresh();
        }
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
                        return t = _wepy2.default.$instance.globalData, Object.assign([ t.aid = "", t.pages = "", t.myUser = "", t.vipInfo = "", t.userInfo = "", t.storeConfig = "" ]), 
                        wx.clearStorageSync(), wx.showNavigationBarLoading(), e.next = 6, this.myInfo();

                      case 6:
                        setTimeout(function() {
                            wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
                        }, 1e3);

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "myInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, o, a, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return _core.tools.showLoading(), e.next = 3, _core.tools.setPageSkin(this);

                      case 3:
                        return t = _wepy2.default.$instance, n = (0, _lodashGet2.default)(t.globalData, "myUser", ""), 
                        e.next = 7, _core.core.GetOrderRecordCount();

                      case 7:
                        if (r = e.sent, !n) {
                            e.next = 14;
                            break;
                        }
                        n.count = r, this.vm = n, this.$apply(), e.next = 44;
                        break;

                      case 14:
                        if (e.t0 = (0, _lodashGet2.default)(t.globalData, "userInfo", ""), e.t0) {
                            e.next = 19;
                            break;
                        }
                        return e.next = 18, _core.core.getUserInfo();

                      case 18:
                        e.t0 = e.sent;

                      case 19:
                        if (o = e.t0, e.t1 = (0, _lodashGet2.default)(t.globalData, "switchInfo", ""), e.t1) {
                            e.next = 25;
                            break;
                        }
                        return e.next = 24, _core.core.appSwitch();

                      case 24:
                        e.t1 = e.sent;

                      case 25:
                        if (a = e.t1, e.t2 = (0, _lodashGet2.default)(t.globalData, "storeConfig", ""), 
                        e.t2) {
                            e.next = 31;
                            break;
                        }
                        return e.next = 30, _core.core.getStoreConfig();

                      case 30:
                        e.t2 = e.sent;

                      case 31:
                        return s = e.t2, e.t3 = r, e.t4 = o, e.t5 = a, e.next = 37, _core.core.getPrice();

                      case 37:
                        e.t6 = e.sent, e.t7 = (0, _lodashGet2.default)(t.globalData, "vipInfo"), e.t8 = s.storeInfo.funJoinModel.canSaveMoneyFunction, 
                        this.vm = {
                            count: e.t3,
                            user: e.t4,
                            switch: e.t5,
                            plst: e.t6,
                            model: e.t7,
                            openvip: e.t8
                        }, this.$apply(), t.globalData.myUser = this.vm, _core.core.updateWxCard(this);

                      case 44:
                        wx.hideLoading();

                      case 45:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(myInfo, "pages/my/myInfo"));