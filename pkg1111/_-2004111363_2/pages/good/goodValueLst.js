function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function o(n, s) {
                try {
                    var i = t[n](s), a = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(a).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _core = require("./../../lib/core.js"), goodValueLst = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), a = 0; a < s; a++) i[a] = arguments[a];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.config = {
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            }
        }, o.data = {
            currentId: -1,
            showpoint: !1,
            currentSkin: {},
            vm: {
                pageindex: 1,
                pagesize: 10,
                ispost: !1,
                loadall: !1,
                list: [],
                sel: -1,
                goodsid: 0
            }
        }, o.computed = {}, o.methods = {
            showimg: function(e, t) {
                for (var r = e[t].filepath, o = [], n = 0, s = e.length; n < s; n++) o.push(e[n].filepath);
                _core.tools.preViewShow(r, o);
            },
            getPoint: function() {
                function e(e, r) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    var o, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return o = 0, e.next = 3, _core.core.pointValue(t);

                          case 3:
                            n = e.sent, n.isok && (this.vm.list[r].UserPoints = !this.vm.list[r].UserPoints, 
                            this.vm.list[r].UserPoints ? this.vm.list[r].Points = this.vm.list[r].Points + 1 : this.vm.list[r].Points = this.vm.list[r].Points - 1, 
                            this.$apply());

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            selChange: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (this.currentId == t) {
                                e.next = 13;
                                break;
                            }
                            return e.next = 3, _core.tools.showLoading();

                          case 3:
                            return e.next = 5, _core.tools.resetArray(this.vm);

                          case 5:
                            return r = e.sent, r.sel = t, "user" == this.type ? this.valueInfo(r) : this.goodValue(r, this.goodsid), 
                            e.next = 10, _core.tools.onPageScroll();

                          case 10:
                            this.currentId = Number(t), this.$apply(), wx.hideLoading();

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        if (this.type = (0, _lodashGet2.default)(t, "type", ""), this.goodsid = (0, _lodashGet2.default)(t, "id", 0), 
                        !this.type.includes("user")) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 7, this.valueInfo(this.vm);

                      case 7:
                        e.next = 11;
                        break;

                      case 9:
                        return e.next = 11, this.goodValue(this.vm, this.goodsid);

                      case 11:
                        this.$apply();

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "valueInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, o, n, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageTitle("我的评价");

                      case 2:
                        if (!t.ispost && !t.loadall) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return");

                      case 4:
                        return t.ispost || (t.ispost = !0), e.next = 7, _core.core.getGoodsValue(t);

                      case 7:
                        if (r = e.sent, r.isok) {
                            for (o = r.dataObj, t.ispost = !1, t.count = r.dataObj.count, n = 0, s = o.list.length; n < s; n++) o.list[n].GoodsPrice = parseFloat(o.list[n].GoodsPrice.div(100)).toFixed(2);
                            o.list.length < t.pagesize ? t.loadall = !0 : t.pageindex += 1, o.list.length > 0 && (t.list = [].concat(_toConsumableArray(t.list), _toConsumableArray(o.list))), 
                            this.vm = t, this.$apply();
                        } else _core.tools.showModal(r.Msg, !1);

                      case 9:
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
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var o, n, s, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageTitle("商品评价");

                      case 2:
                        if (t.goodsid = r, !t.ispost && !t.loadall) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return");

                      case 5:
                        return t.ispost || (t.ispost = !0), e.next = 8, _core.core.getShowGoodValue(t);

                      case 8:
                        if (o = e.sent, o.isok) {
                            for (n = o.dataObj, t.ispost = !1, t.count = o.dataObj.count, s = 0, i = n.list.length; s < i; s++) n.list[s].GoodsPrice = parseFloat(n.list[s].GoodsPrice.div(100)).toFixed(2);
                            n.list.length < t.pagesize ? t.loadall = !0 : t.pageindex += 1, n.list.length > 0 && (t.list = [].concat(_toConsumableArray(t.list), _toConsumableArray(n.list))), 
                            this.vm = t, this.$apply();
                        } else _core.tools.showModal(o.Msg, !1);

                      case 10:
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
            "user" == this.type ? this.valueInfo(this.vm) : this.goodValue(this.vm, this.goodsid);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(goodValueLst, "pages/good/goodValueLst"));