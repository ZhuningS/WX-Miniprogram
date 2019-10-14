function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
        return o;
    }
    return Array.from(e);
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, o) {
            function r(n, i) {
                try {
                    var s = t[n](i), a = s.value;
                } catch (e) {
                    return void o(e);
                }
                if (!s.done) return Promise.resolve(a).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(a);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), goodValue = function(e) {
    function t() {
        var e, o, r, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
        return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            },
            navigationBarTitleText: "发表评价"
        }, r.data = {
            vm: {
                emijo: [ {
                    icon: "dzicon icon-haoping",
                    txt: "好评",
                    state: 2
                }, {
                    icon: "dzicon icon-zhongping",
                    txt: "中评",
                    state: 1
                }, {
                    icon: "dzicon icon-chaping",
                    txt: "差评",
                    state: 0
                } ],
                showMask: !1
            },
            currentSkin: {},
            toast: {}
        }, r.methods = {
            pathGo: function() {
                _core.tools.goRedirecto("/pages/good/goodValueLst?type=user");
            },
            hideMask: function() {
                this.vm.showMask = !1, _core.tools.goBack(1), this.$apply();
            },
            changeValue: function(e, t) {
                this.vm.list[t].Praise = e, this.$apply();
            },
            changeMess: function(e, t) {
                this.vm.list[e].Comment = t.detail.value, this.$apply();
            },
            changeImg: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var o, r, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!((o = this.vm.list[t].imgUrl.length) >= 8)) {
                                e.next = 4;
                                break;
                            }
                            return _core.tools.showModal("最多只能上传8张", !1), e.abrupt("return");

                          case 4:
                            return e.next = 6, _core.tools.chooseImg();

                          case 6:
                            if (r = e.sent, n = r.tempFilePaths, !(n.length + o > 8)) {
                                e.next = 11;
                                break;
                            }
                            return _core.tools.showModal("最多只能上传8张", !1), e.abrupt("return");

                          case 11:
                            return e.next = 13, this.uploadService(n, t);

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            deleImg: function(e, t) {
                this.vm.list[e].imgUrl.splice(t, 1), this.$apply();
            },
            changeAnon: function(e) {
                this.vm.list[e].Anonymous = !this.vm.list[e].Anonymous, this.$apply();
            },
            changeStar: function(e, t, o) {
                for (var r = e.list, n = [], i = 0, s = r.length; i < s; i++) r[i].sel = !1, r[i].icon = "dzicon icon-xingxingweidianji";
                for (var a = 0; a < o + 1; a++) r[a].sel = !0, r[a].icon = "dzicon icon-xingxingdianjihou", 
                n.push(r[a]);
                this.vm.starLst[t].list = r, this.$apply(), this.showStarRang(n.length, t);
            },
            postValue: function() {
                for (var e = this.vm, t = 0, o = e.list.length; t < o; t++) {
                    if (0 == e.list[t].DescriptiveScore) return void _core.tools.ShowToast("请对描述做出评价", this);
                    if (0 == e.list[t].LogisticsScore) return void _core.tools.ShowToast("请对物流做出评价", this);
                    if (0 == e.list[t].ServiceScore) return void _core.tools.ShowToast("请对服务做出评价", this);
                    e.list[t].Anonymous ? e.list[t].Anonymous = 1 : e.list[t].Anonymous = 0, e.list[t].imgUrl.length && (e.list[t].HeadImgUrl = e.list[t].imgUrl.join(","));
                }
                var r = {
                    orderid: e.orderId,
                    goodsType: e.goodsType,
                    list: e.list
                };
                _core.core.postValue(r, this);
            }
        }, n = o, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e, o) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, o) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        this.proLoad((0, _lodashGet2.default)(o.preload, "vm"));

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "proLoad",
        value: function(e) {
            for (var t = [], o = 0, r = e.list.length; o < r; o++) {
                var n = (0, _lodashGet2.default)(e.list[o], "SpecImg", "") || e.list[o].goodsMsg.img;
                t.push({
                    Praise: 2,
                    Comment: "",
                    Anonymous: !1,
                    GoodsId: (0, _lodashGet2.default)(e.list[o], "FoodGoodsId", 0),
                    GoodsName: (0, _lodashGet2.default)(e.list[o], "GoodName", ""),
                    GoodsPrice: (0, _lodashGet2.default)(e.list[o], "Price"),
                    GoodsImg: n,
                    GoodsSpecification: (0, _lodashGet2.default)(e.list[o], "SpecInfo", ""),
                    imgUrl: [],
                    ServiceScore: 0,
                    LogisticsScore: 0,
                    DescriptiveScore: 0
                });
            }
            this.vm.list = t, this.vm.orderId = e.orderid, this.vm.goodsType = e.goodType, this.$apply(), 
            this.showStar();
        }
    }, {
        key: "showStar",
        value: function() {
            for (var e = [], t = [], o = 0; o < 5; o++) t.push({
                icon: "dzicon icon-xingxingweidianji",
                sel: !1
            });
            for (var r = 0; r < 3; r++) {
                var n = "";
                n = 0 == r ? "描述相符" : 1 == r ? "物流服务" : "服务态度", e.push({
                    title: n,
                    list: t
                });
            }
            this.vm.starLst = e, this.$apply();
        }
    }, {
        key: "showStarRang",
        value: function(e, t) {
            var o = "";
            switch (e) {
              case 1:
                o = "非常差";
                break;

              case 2:
                o = "差";
                break;

              case 3:
                o = "一般";
                break;

              case 4:
                o = "好";
                break;

              case 5:
                o = "非常好";
            }
            for (var r = 0, n = this.vm.list.length; r < n; r++) switch (t) {
              case 0:
                this.vm.list[r].DescriptiveScore = e;
                break;

              case 1:
                this.vm.list[r].LogisticsScore = e;
                break;

              case 2:
                this.vm.list[r].ServiceScore = e;
            }
            this.vm.starLst[t].name = o, this.$apply();
        }
    }, {
        key: "uploadService",
        value: function() {
            function e(e, o) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, o) {
                var r, n, i, s, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        r = [], n = 0, i = t.length;

                      case 2:
                        if (!(n < i)) {
                            e.next = 10;
                            break;
                        }
                        return e.next = 5, _core.tools.uploadImg(t, n);

                      case 5:
                        s = e.sent, s.errMsg.includes("uploadFile:ok") ? (a = JSON.parse(s.data), r.push(a.msg)) : _core.tools.showModal("上传失败", !1);

                      case 7:
                        n++, e.next = 2;
                        break;

                      case 10:
                        this.vm.list[o].imgUrl = [].concat(_toConsumableArray(this.vm.list[o].imgUrl), r), 
                        this.$apply();

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(goodValue, "pages/good/goodValue"));