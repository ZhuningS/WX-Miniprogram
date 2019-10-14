function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var i = t[o](a), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), group = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "全部团购",
            enablePullDownRefresh: !0,
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index",
                "wxc-loadmore": "../../packages/@minui/wxc-loadmore/dist/index"
            }
        }, n.components = {}, n.data = {
            currentSkin: {},
            vm: {
                ispost: !1,
                loadall: !1,
                list: [],
                state: 0,
                pagesize: 10,
                pageindex: 1,
                showloading: !1
            },
            groupState: [ {
                name: "全部",
                state: 0
            }, {
                name: "进行中",
                state: 1
            }, {
                name: "已成功",
                state: 2
            } ],
            orderState: {
                1: {
                    name: "已发货"
                },
                0: {
                    name: "待发货"
                },
                "-1": {
                    name: "已收货"
                },
                "-2": {
                    name: "已退款"
                },
                "-3": {
                    name: "退款中"
                },
                "-4": {
                    name: "已过期"
                }
            },
            groupState_fmt: {
                0: {
                    name: "单买"
                },
                1: {
                    name: "进行中"
                },
                2: {
                    name: "拼团成功"
                },
                "-1": {
                    name: "拼团失败"
                }
            }
        }, n.methods = {
            pathValue: function(e) {
                e.goodsMsg = {}, e.SpecImg = e.ImgUrl, e.priceStr = parseFloat(e.BuyPrice.div(100)).toFixed(2), 
                e.goodsMsg.img = e.ImgUrl, e.FoodGoodsId = e.GroupId;
                var t = {
                    list: e,
                    orderid: e.Id,
                    goodType: 3
                };
                this.$preload("vm", t), this.$redirect("/pages/good/goodValue");
            },
            preView: function(e) {
                _core.tools.preViewShow(e);
            },
            changeType: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.resetArray(this.vm);

                          case 2:
                            return this.vm = e.sent, this.vm.state = t, this.$apply(), e.next = 7, _core.tools.showLoading();

                          case 7:
                            return e.next = 9, _core.core.getGroupList(this);

                          case 9:
                            wx.hideLoading();

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            navOlt: function(e) {
                _core.tools.goNewPage("../group/groupOtl?guid=" + e);
            },
            navShare: function(e) {
                _core.tools.goNewPage("../group/groupMyShare?id=" + e);
            },
            confirm: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.showModal("确认收货吗?");

                          case 2:
                            if (r = e.sent, !r.confirm) {
                                e.next = 15;
                                break;
                            }
                            return e.next = 6, _core.core.groupRece(t);

                          case 6:
                            return n = e.sent, e.next = 9, _core.tools.loading("确认成功", "success");

                          case 9:
                            return e.next = 11, _core.tools.resetArray(this.vm);

                          case 11:
                            return this.vm = e.sent, this.$apply(), e.next = 15, _core.core.getGroupList(this);

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = r, _possibleConstructorReturn(n, o);
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
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.resetArray(this.vm);

                      case 2:
                        return this.vm = e.sent, e.next = 5, _core.core.getGroupList(this);

                      case 5:
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
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.vm.showloading = !0, e.next = 3, _core.core.getGroupList(this);

                      case 3:
                        this.vm.showloading = !1;

                      case 4:
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
                        return wx.showNavigationBarLoading(), e.next = 3, _core.tools.resetArray(this.vm);

                      case 3:
                        return this.vm = e.sent, this.$apply(), e.next = 7, _core.core.getGroupList(this);

                      case 7:
                        setTimeout(function() {
                            wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
                        }, 1e3);

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function(e) {
            var t = e.target.dataset.group;
            return _core.core.groupShare(t);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(group, "pages/group/groupList"));