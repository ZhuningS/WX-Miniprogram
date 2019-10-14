function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var n = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function r(o, i) {
                try {
                    var s = n[o](i), a = s.value;
                } catch (e) {
                    return void t(e);
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

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, n) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !n || "object" != typeof n && "function" != typeof n ? e : n;
}

function _inherits(e, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
    e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(n, t, r) {
        return t && e(n.prototype, t), r && e(n, r), n;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _com_signinFloat = require("./../../components/com_signinFloat.js"), _com_signinFloat2 = _interopRequireDefault(_com_signinFloat), integral = function(e) {
    function n() {
        var e, t, r, o;
        _classCallCheck(this, n);
        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
        return t = r = _possibleConstructorReturn(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "积分中心",
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index",
                "wxc-loadmore": "../../packages/@minui/wxc-loadmore/dist/index"
            },
            enablePullDownRefresh: !0
        }, r.$repeat = {}, r.$props = {
            comSigninFloat: {
                "xmlns:v-on": "",
                "xmlns:v-bind": "",
                "v-bind:comSigninRules.sync": "signinRules",
                "v-bind:comUserSignIn.sync": "userSignin"
            }
        }, r.$events = {
            comSigninFloat: {
                "v-on:closeMask": "closeSignin",
                "v-on:signin": "clickSingin"
            }
        }, r.components = {
            comSigninFloat: _com_signinFloat2.default
        }, r.data = {
            currentSkin: {},
            vm: {
                ispost: !1,
                loadall: !1,
                list: [],
                type: 0,
                pageindex: 1,
                pagesize: 10,
                info: {},
                rules: {},
                showloading: !1
            },
            select: [ {
                name: "积分兑换",
                id: 0
            }, {
                name: "积分购买",
                id: 1
            } ],
            showRules: !1,
            showsigninFloat: !1,
            signinRules: {},
            userSignin: {},
            singinDate: [ "第1天", "第2天", "第3天", "第4天", "第5天", "第6天", "第7天" ]
        }, r.methods = {
            navOlst: function() {
                _core.tools.goNewPage("/pages/integral/interLst");
            },
            navDlt: function(e) {
                var n = this.vm.type;
                this.$navigate("/pages/integral/interDlt?id=" + e + "&type=" + n);
            },
            rules: function() {
                function e() {
                    return n.apply(this, arguments);
                }
                var n = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.core.interRule();

                          case 2:
                            n = e.sent, this.vm.rules = n.obj, this.showRules = !0, this.$apply();

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            rulesCancle: function() {
                this.showRules = !1;
            },
            selectChange: function() {
                function e(e) {
                    return n.apply(this, arguments);
                }
                var n = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.showLoading();

                          case 2:
                            return this.vm.type = n, this.vm.ispost = !1, this.vm.loadall = !1, this.vm.pageindex = 1, 
                            e.next = 8, this.proInfo();

                          case 8:
                            wx.hideLoading();

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            goRecord: function() {
                this.$navigate("/pages/integral/interRecord");
            },
            openSingin: function() {
                this.showsigninFloat = !0;
            },
            closeSignin: function() {
                this.showsigninFloat = !1;
            },
            clickSingin: function() {
                _core.core.playCard(this);
            }
        }, o = t, _possibleConstructorReturn(r, o);
    }
    return _inherits(n, e), _createClass(n, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return n.apply(this, arguments);
            }
            var n = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        this.interInfo(), _core.core.storeInfo(this), _core.core.getUserPlayCard(this);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "interInfo",
        value: function() {
            function e() {
                return n.apply(this, arguments);
            }
            var n = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var n, t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = this.vm, e.next = 3, _core.core.getInterInfo();

                      case 3:
                        t = e.sent, t.isok ? (n.info = t.obj, n.sendCount = t.sendCount, this.vm = n, this.$apply()) : _core.tools.showModal(t.msg, !1), 
                        this.proInfo();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "proInfo",
        value: function() {
            function e() {
                return n.apply(this, arguments);
            }
            var n = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var n, t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = this.vm, !n.ispost && !n.loadall) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        return n.ispost || (n.ispost = !0), e.next = 6, _core.core.interPro(n);

                      case 6:
                        t = e.sent, t.isok ? (n.ispost = !1, n.list[n.pageindex] = t.model.ExchangeActivityList, 
                        t.model.ExchangeActivityList.length >= n.pagesize ? n.pageindex += 1 : n.loadall = !0, 
                        this.vm = n, this.$apply()) : _core.tools.showModal(info.msg, !1);

                      case 8:
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
                return n.apply(this, arguments);
            }
            var n = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.vm.showloading = !0, e.next = 3, this.proInfo();

                      case 3:
                        this.vm.showloading = !1, this.$apply();

                      case 5:
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
                return n.apply(this, arguments);
            }
            var n = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.vm.ispost = !1, this.vm.loadall = !1, this.vm.pageindex = 1, wx.showNavigationBarLoading(), 
                        e.next = 6, this.proInfo();

                      case 6:
                        _core.core.storeInfo(this), _core.core.getUserPlayCard(this), setTimeout(function() {
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
    } ]), n;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(integral, "pages/integral/integral"));