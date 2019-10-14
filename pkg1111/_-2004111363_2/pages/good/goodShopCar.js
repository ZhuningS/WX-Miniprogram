function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, s) {
            function o(r, i) {
                try {
                    var n = e[r](i), a = n.value;
                } catch (t) {
                    return void s(t);
                }
                if (!n.done) return Promise.resolve(a).then(function(t) {
                    o("next", t);
                }, function(t) {
                    o("throw", t);
                });
                t(a);
            }
            return o("next");
        });
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function t(t, e) {
        for (var s = 0; s < e.length; s++) {
            var o = e[s];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, s, o) {
        return s && t(e.prototype, s), o && t(e, o), e;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _com_shopCar = require("./../../components/com_shopCar.js"), _com_shopCar2 = _interopRequireDefault(_com_shopCar), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), shopCar = function(t) {
    function e() {
        var t, s, o, r;
        _classCallCheck(this, e);
        for (var i = arguments.length, n = Array(i), a = 0; a < i; a++) n[a] = arguments[a];
        return s = o = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(n))), 
        o.config = {
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index",
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-mask": "../../packages/@minui/wxc-mask/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index"
            },
            navigationBarTitleText: "购物车"
        }, o.$repeat = {}, o.$props = {
            comShop: {
                "xmlns:v-bind": "",
                "v-bind:disable.once": "disable",
                "v-bind:currentCom.once": "vm_sp",
                "xmlns:v-on": ""
            }
        }, o.$events = {
            comShop: {
                "v-on:hideMask": "hideMask",
                "v-on:changeSpec": "changeSpec",
                "v-on:add": "add",
                "v-on:less": "less",
                "v-on:goShop": "goShop"
            }
        }, o.components = {
            comShop: _com_shopCar2.default
        }, o.data = {
            vm: {
                itemStatus: !1,
                allStatus: !1,
                list: [],
                num: 0,
                total: "0.00",
                allOldPrice: 0
            },
            vm_sp: {},
            currentSkin: {},
            toast: {},
            maskStatus: "hide",
            disable: !0
        }, o.computed = {}, o.methods = {
            showImg: function(t) {
                _core.tools.preViewShow(t);
            },
            onAbnorTap: function() {
                _core.tools.goBack(1);
            },
            changeItem: function(t) {
                var e = this.vm;
                e.list[t].goodsMsg.sel = !e.list[t].goodsMsg.sel;
                e.list[t].goodsMsg.sel ? (e.num++, e.itemStatus = !0) : (e.num--, e.itemStatus = !1), 
                e.num == e.list.length ? e.allStatus = !0 : e.allStatus = !1, this.vm = e, this.$apply(), 
                this.totalFunct();
            },
            changeAll: function() {
                var t = this.vm;
                t.allStatus = !t.allStatus;
                for (var e = 0, s = t.list.length; e < s; e++) t.list[e].goodsMsg.sel = t.allStatus, 
                t.allStatus ? t.num = e + 1 : t.num = 0, t.itemStatus = !!t.allStatus;
                this.vm = t, this.$apply(), this.totalFunct();
            },
            add: function(t) {
                var e = [], s = this.vm.list[t], o = "show" == this.maskStatus ? this.vm_sp.totalCount : s.Count, r = s.goodsMsg.GASDetailList.find(function(t) {
                    return t.id == s.SpecIds;
                });
                s.goodsMsg.stockLimit ? r ? o >= r.stock ? _core.tools.ShowToast("库存不足", this) : o++ : o > s.goodsMsg.stock ? _core.tools.ShowToast("库存不足", this) : o++ : o++, 
                "show" == this.maskStatus ? this.vm_sp.totalCount = o : this.vm.list[t].Count = o, 
                this.$apply(), this.totalFunct(), e.push(this.vm.list[t]), this.updateCar(e, 0, "opera");
            },
            less: function(t) {
                var e = [], s = this.vm.list[t];
                s.Count <= 1 ? _core.tools.ShowToast("亲,不要再减啦", this) : s.Count--, "show" == this.maskStatus ? this.vm_sp.totalCount = s.Count : this.vm.list[t] = s, 
                this.$apply(), this.totalFunct(), e.push(this.vm.list[t]), this.updateCar(e, 0, "opera");
            },
            setValue: function(t, e) {
                var s = Number(e.detail.value), o = this.vm.list[t], r = o.goodsMsg.GASDetailList.find(function(t) {
                    return t.id == o.SpecIds;
                });
                0 != s ? o.goodsMsg.stockLimit ? r ? s > r.stock ? o.Count = 1 : o.Count = s : s > o.goodsMsg.stock ? o.Count = 1 : o.Count = s : o.Count = s : o.Count = 1, 
                this.vm.list[t] = o, this.$apply(), this.totalFunct();
            },
            showMask: function(t) {
                this.shopMask(t);
            },
            hideMask: function() {
                this.maskStatus = "hide", this.$apply();
            },
            changeSpec: function() {
                function t(t, s) {
                    return e.apply(this, arguments);
                }
                var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e, s) {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _core.pro.choosePro(this.vm_sp, e, s, "good");

                          case 2:
                            this.vm_sp = t.sent, this.$apply();

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }));
                return t;
            }(),
            goShop: function() {
                var t = [], e = this.vm, s = this.vm_sp;
                if (s.stockLimit && 0 == s.stock) return void _core.tools.ShowToast("库存不足", this);
                e.list[s.pageIndex].SpecIds = s.specId, e.list[s.pageIndex].SpecInfo = s.specInfo, 
                e.list[s.pageIndex].goodsMsg.priceStr = s.danMaiPrice, e.list[s.pageIndex].Count = s.totalCount, 
                e.list[s.pageIndex].SpecImg = s.selImg, this.maskStatus = "hide", this.vm = e, this.$apply(), 
                t.push(e.list[s.pageIndex]), this.updateCar(t, 0);
            },
            navOrder: function() {
                function t(t) {
                    return e.apply(this, arguments);
                }
                var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                    var s, o, r, i, n, a, c, u, l;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            s = this.vm, o = [], r = [], i = [], n = [], _core.core.formId(e.detail.formId), 
                            a = 0, c = s.list.length;

                          case 7:
                            if (!(a < c)) {
                                t.next = 32;
                                break;
                            }
                            if (!s.list[a].goodsMsg.sel) {
                                t.next = 29;
                                break;
                            }
                            if (0 != s.list[a].goodsMsg.tag) {
                                t.next = 15;
                                break;
                            }
                            return t.next = 12, _core.tools.showModal(s.list[a].goodsMsg.name + "商品已下架，是否删除该商品");

                          case 12:
                            return u = t.sent, u.confirm && (n.push(s.list[a]), this.updateCar(n, -1)), t.abrupt("return");

                          case 15:
                            if (-1 != s.list[a].SpecificationState) {
                                t.next = 21;
                                break;
                            }
                            return t.next = 18, _core.tools.showModal(s.list[a].goodsMsg.name + "商品规格已修改，请重新选择", !1);

                          case 18:
                            return this.shopMask(a), this.$apply(), t.abrupt("return");

                          case 21:
                            if (!s.list[a].goodsMsg.stockLimit || 0 != s.list[a].goodsMsg.stock) {
                                t.next = 26;
                                break;
                            }
                            return _core.tools.ShowToast(s.list[a].goodsMsg.name + "商品库存不足请重新选择", this), this.shopMask(a), 
                            this.$apply(), t.abrupt("return");

                          case 26:
                            o.push(s.list[a].Id), i.push(s.list[a].goodsMsg.id), r.push({
                                type: "good",
                                ImgUrl: s.list[a].SpecImg || s.list[a].goodsMsg.img,
                                oldPrice: s.list[a].originalPriceStr,
                                SpecInfo: s.list[a].SpecInfo,
                                Introduction: s.list[a].goodsMsg.name,
                                discount: s.list[a].discount,
                                discountPrice: s.list[a].priceStr,
                                goodid: s.list[a].goodsMsg.id,
                                Count: s.list[a].Count
                            });

                          case 29:
                            a++, t.next = 7;
                            break;

                          case 32:
                            if (0 != r.length) {
                                t.next = 37;
                                break;
                            }
                            return _core.tools.ShowToast("请选择商品", this), t.abrupt("return");

                          case 37:
                            l = {
                                list: r,
                                cartid: o.join(","),
                                goodid: i.join(","),
                                totalPrice: s.total,
                                totalCount: s.num,
                                originalPrice: s.allOldPrice
                            }, this.$preload("vm_order", l), this.$redirect("./goodOrder?type=good");

                          case 40:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }));
                return t;
            }(),
            delShop: function() {
                function t() {
                    return e.apply(this, arguments);
                }
                var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var e, s, o, r, i, n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e = [], s = [], o = this.vm, 0 != o.itemStatus) {
                                t.next = 5;
                                break;
                            }
                            return t.abrupt("return");

                          case 5:
                            for (r = 0, i = o.list.length; r < i; r++) o.list[r].goodsMsg.sel && (s = o.list[r], 
                            e.push(s));
                            return t.next = 8, _core.tools.showModal("确认删除吗？");

                          case 8:
                            if (n = t.sent, !n.confirm) {
                                t.next = 13;
                                break;
                            }
                            return t.next = 12, this.updateCar(e, -1);

                          case 12:
                            _core.core.shopCarList(this);

                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }));
                return t;
            }()
        }, r = s, _possibleConstructorReturn(o, r);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "onLoad",
        value: function() {
            function t(t) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        _core.tools.showLoading(), _core.core.shopCarList(this), wx.hideLoading();

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "totalFunct",
        value: function() {
            for (var t = this.vm.list, e = 0, s = 0, o = 0, r = t.length; o < r; o++) t[o].goodsMsg.sel && (e += t[o].Price / 100 * t[o].Count, 
            s += t[o].originalPrice / 100 * t[o].Count);
            this.vm.total = parseFloat(e).toFixed(2), this.vm.allOldPrice = parseFloat(s).toFixed(2), 
            this.$apply();
        }
    }, {
        key: "updateCar",
        value: function() {
            function t(t, s, o) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e, s, o) {
                var r, i, n, a, c;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        for (r = [], i = 0, n = e.length; i < n; i++) r.push({
                            Id: e[i].Id,
                            SpecIds: e[i].SpecIds,
                            SpecInfo: e[i].SpecInfo,
                            Count: e[i].Count,
                            priceStr: e[i].priceStr,
                            originalPriceStr: e[i].originalPriceStr,
                            SpecImg: e[i].SpecImg
                        });
                        return a = {
                            date: s,
                            model: r
                        }, t.next = 5, _core.core.update(a);

                      case 5:
                        if (c = this.vm, "opera" != o) {
                            t.next = 8;
                            break;
                        }
                        return t.abrupt("return");

                      case 8:
                        return t.next = 10, _core.core.shopCarList(this);

                      case 10:
                        c.itemStatus = !1, c.allStatus = !1, c.num = 0, c.total = "0.00", c.allOldPrice = "0.00", 
                        this.vm = c, this.$apply();

                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "shopMask",
        value: function(t) {
            var e = this.vm.list[t], s = this.vm_sp;
            s = e.goodsMsg, s.display = "shop", s.pageIndex = t, s.danMaiPrice = e.priceStr, 
            s.yuanJiaPrice = parseFloat(e.originalPrice).toFixed(2), s.totalCount = e.Count, 
            s.specInfo = e.SpecInfo, s.selImg = e.SpecImg || e.goodsMsg.img, s.type = "goodShop";
            for (var o = e.SpecIds.split("_"), r = 0, i = s.pickspecification.length; r < i; r++) for (var n = 0, a = s.pickspecification[r].items.length; n < a; n++) s.pickspecification[r].items[n].id == Number(o[r]) ? s.pickspecification[r].items[n].sel = !0 : s.pickspecification[r].items[n].sel = !1;
            this.vm_sp = s, this.maskStatus = "show", this.$apply();
        }
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(shopCar, "pages/good/goodShopCar"));