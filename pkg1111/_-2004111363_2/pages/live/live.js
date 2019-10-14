function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function o(n, i) {
                try {
                    var a = t[n](i), s = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(s);
            }
            return o("next");
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
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _addr = require("./../../lib/addr.js"), _addr2 = _interopRequireDefault(_addr), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _core = require("./../../lib/core.js"), live = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        o.config = {
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            },
            navigationBarBackgroundColor: "#796ecc",
            navigationBarTitleText: "",
            navigationBarTextStyle: "white"
        }, o.components = {}, o.data = {
            vm_live: {},
            vm: {},
            showhide: !0,
            vm_sec: {},
            toast: {}
        }, o.computed = {}, o.methods = {
            showImg: function(e) {
                _core.tools.preViewShow(e);
            },
            navShop: function() {
                this.$navigate("../good/goodShopCar");
            },
            showMask: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, o, n = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (r = _wepy2.default.$instance, "" != (o = (0, _lodashGet2.default)(r.globalData, "vipInfo", ""))) {
                                e.next = 6;
                                break;
                            }
                            return e.next = 5, _core.core.getVipInfo();

                          case 5:
                            o = e.sent;

                          case 6:
                            _core.http.get(_addr2.default.GetGoodInfo, {
                                pid: t,
                                version: 2,
                                levelid: o.levelid,
                                appid: r.globalData.appid
                            }).then(function(e) {
                                var t = e.msg;
                                if (t.pickspecification) {
                                    t.pickspecification = JSON.parse(t.pickspecification);
                                    for (var r = 0, o = t.pickspecification.length; r < o; r++) for (var i = 0, a = t.pickspecification[r].items.length; i < a; i++) t.pickspecification[r].items[i].sel = !1;
                                }
                                t.selImg = t.img_fmt, t.specInfo = "", t.specId = "", t.totalCount = 1, t.itemPrice = t.priceStr, 
                                n.vm_sec = t, n.showhide = !1, n.$apply();
                            });

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            hide: function() {
                this.showhide = !0;
            },
            add: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.pro.addPro(this.vm_sec, "good", this);

                          case 2:
                            t = e.sent, t && (this.price = t.price, this.vm_sec.totalCount = t.count, this.vm_sec.danMaiPrice = parseFloat(t.price.mul(t.count)).toFixed(2), 
                            this.$apply());

                          case 4:
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
                    var t, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = this.vm_sec, 1 != t.totalCount) {
                                e.next = 4;
                                break;
                            }
                            return _core.tools.ShowToast("亲,不要再减啦", this), e.abrupt("return");

                          case 4:
                            return e.next = 6, _core.pro.lessPro(t, this);

                          case 6:
                            r = e.sent, this.price && (t.totalCount = r, t.danMaiPrice = parseFloat(this.price.mul(r)).toFixed(2), 
                            this.vm_sec = t, this.$apply());

                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            choose: function() {
                function e(e, r) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.pro.choosePro(this.vm_sec, t, r, "good");

                          case 2:
                            this.vm_sec = e.sent, this.$apply();

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            goShop: function(e, t) {
                var r = this.vm_sec;
                _core.core.formId(t.detail.formId);
                var o = r.GASDetailList.find(function(e) {
                    return e.id == r.specId;
                });
                if (r.pickspecification.length) {
                    if ("" == r.specId) return void _core.tools.loading("请选择商品规格");
                    if (void 0 == o) return void _core.tools.loading("未选择完");
                    if (r.stockLimit) {
                        if (r.totalCount > o.stock) return void _core.tools.loading("库存不足");
                        this.goMethod(e);
                    } else this.goMethod(e);
                } else if (r.stockLimit) {
                    if (r.totalCount > r.stock) return void _core.tools.loading("库存不足");
                    this.goMethod(e);
                } else this.goMethod(e);
            }
        }, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        r = Number(t.pageIndex) || 0, o = Number(t.comIndex) || 0, this.liveInfo(r, o);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "liveInfo",
        value: function() {
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var o, n, i, a, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o = _wepy2.default.$instance, "" != (n = (0, _lodashGet2.default)(o.globalData, "pages", ""))) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 5, _core.core.getPageSetting();

                      case 5:
                        n = e.sent;

                      case 6:
                        i = n.pages, a = i[t].coms[r].vzliveurl, s = [], i[t].coms[r].items.forEach(function(e, t) {
                            s.push(e.id);
                        }), s = s.join(","), Promise.all([ this.goodLst(s), this.goodLive(a, i, t, r) ]);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "goodLst",
        value: function(e) {
            var t = this;
            if (e) {
                var r = _wepy2.default.$instance;
                _core.http.post(_addr2.default.GetGoodsByids, {
                    ids: e,
                    levelid: r.globalData.vipInfo.levelid,
                    goodShowType: ""
                }).then(function(e) {
                    e.isok ? (t.vm = e.msg, t.$apply(), _core.tools.setPageTitle(e.msg[0].name || "")) : _core.tools.showModal(e.msg, !1);
                });
            }
        }
    }, {
        key: "goodLive",
        value: function(e, t, r, o) {
            var n = this, i = /https?:\/\/vzan.com\/live\/tvchat-(\d+).*/gi.exec(e);
            if (!i) return void _core.tools.showModal("播放地址不正确", !1);
            var a = i[1];
            _core.http.post(_addr2.default.live, {
                tpid: a
            }).then(function(e) {
                e && (e.isok ? ("" == e.dataObj.cover ? e.dataObj.cover = t[r].coms[o].img : e.dataObj.cover = e.dataObj.cover, 
                n.vm_live = e.dataObj, n.vm_live.pageIndex = r, n.vm_live.comIndex = o, n.vm_live.title = t[r].coms[o].des, 
                n.$apply()) : _core.tools.showModal("主播暂时不在", !1));
            });
        }
    }, {
        key: "goMethod",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, o, n, i, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = this.vm_sec, o = 0, o = "shop" == t ? 0 : 1, n = {
                            pid: r.id,
                            specId: r.specId,
                            SpecInfo: r.specInfo,
                            count: r.totalCount,
                            record: o,
                            isgroup: "",
                            img: r.selImg || r.img
                        }, e.next = 6, _core.core.addShopCar(n);

                      case 6:
                        if (i = e.sent, 1 != i.isok) {
                            e.next = 20;
                            break;
                        }
                        if ("shop" != t) {
                            e.next = 12;
                            break;
                        }
                        _core.tools.loading(i.msg, "success"), e.next = 18;
                        break;

                      case 12:
                        return e.next = 14, _core.pro.orderPro(r, "good");

                      case 14:
                        a = e.sent, a.cartid = i.cartid, this.$preload("vm_order", a), this.$navigate("../good/goodOrder");

                      case 18:
                        e.next = 21;
                        break;

                      case 20:
                        _core.tools.showModal(i.msg, !1);

                      case 21:
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
            return {
                title: this.vm_live.title,
                path: "/pages/live/live?pageIndex=" + this.vm_live.pageIndex + "&comIndex=" + this.vm_live.comIndex,
                imageUrl: this.vm_live.cover,
                success: function(e) {
                    _core.tools.loading("转发成功", "success");
                }
            };
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(live, "pages/live/live"));