function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var i = t[a](o), s = i.value;
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _addr = require("./../../lib/addr.js"), _addr2 = _interopRequireDefault(_addr), goodSearch = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "搜索",
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index"
            }
        }, n.data = {
            vm: {
                ispost: !1,
                loadall: !1,
                list: [],
                pageindex: 1,
                pagesize: 10,
                search: "",
                showloading: !1
            },
            hm: {
                hotSearch: [],
                searchData: []
            },
            inputfocus: !0,
            inputValue: "",
            currentSkin: {}
        }, n.methods = {
            navGood: function(e) {
                _core.tools.pathGood(e, "buy", !0);
            },
            focusInput: function() {
                this.inputfocus = !0;
            },
            blurInput: function() {
                this.inputfocus = !1;
            },
            inputSearch: function(e) {
                this.inputValue = e.detail.value, this.$apply();
            },
            clearInputValue: function() {
                this.inputValue = "", this.$apply();
            },
            clearHistory: function() {
                wx.removeStorageSync("searchData"), this.hm.searchData = [];
            },
            clickSearch: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return this.vm.ispost = !1, this.vm.loadall = !1, this.vm.list = [], this.vm.pageindex = 1, 
                            this.vm.search = this.inputValue, e.next = 7, this.proInfo();

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            historyTap: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return this.vm.ispost = !1, this.vm.loadall = !1, this.vm.list = [], this.vm.pageindex = 1, 
                            this.inputValue = t, this.vm.search = t, e.next = 8, this.proInfo();

                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        this.hm.searchData = wx.getStorageSync("searchData"), this.$apply(), this.searchInfo();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "searchInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getStoreConfig();

                      case 2:
                        t = e.sent, this.hm.hotSearch = t.storeInfo.funJoinModel.searchKeyword, this.$apply();

                      case 5:
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
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, a, o = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("" != this.inputValue) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (t = wx.getStorageSync("searchData") || [], r = t.findIndex(function(e) {
                            return e == o.inputValue;
                        }), -1 == r && t.unshift(this.inputValue), t.length > 10 && (t = t.slice(0, 10)), 
                        wx.setStorageSync("searchData", t), this.hm.searchData = t, n = this.vm, !n.ispost && !n.loadall) {
                            e.next = 11;
                            break;
                        }
                        return e.abrupt("return");

                      case 11:
                        n.ispost || (n.ispost = !0), a = _wepy2.default.$instance.globalData.aid, _core.http.post(_addr2.default.GetGoodsList, {
                            aid: a,
                            goodtype: 0,
                            pageindex: n.pageindex,
                            pagesize: n.pagesize,
                            search: n.search
                        }).then(function(e) {
                            1 == e.isok ? (n.ispost = !1, n.list[n.pageindex] = e.postdata.goodslist, e.postdata.goodslist.length >= n.pagesize ? n.pageindex += 1 : n.loadall = !0, 
                            o.vm = n, o.$apply()) : _core.tools.showModal(e.msg, !1);
                        });

                      case 14:
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
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(goodSearch, "pages/good/goodSearch"));