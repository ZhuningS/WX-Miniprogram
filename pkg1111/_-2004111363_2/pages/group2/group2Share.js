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
                    var s = t[o](a), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _addr = require("./../../lib/addr.js"), _addr2 = _interopRequireDefault(_addr), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), group2Share = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index"
            },
            navigationBarTitleText: "参团详情"
        }, n.components = {}, n.data = {
            currentSkin: {},
            vm: {},
            haveJoin: !1,
            groupList: {},
            showMore: !1,
            showToast: !1,
            userCutdown: {},
            showIng: !0
        }, n.methods = {
            preview: function(e) {
                _core.tools.preViewShow(e);
            },
            showMask: function() {
                this.showMore = !this.showMore;
            },
            showMoreToast: function() {
                this.showToast = !this.showToast;
            },
            goJoin: function(e, t) {
                _core.tools.goNewPage("../group2/group2?id=" + e + "&showGroup=1&groupId=" + t);
            },
            goCheck: function(e) {
                _core.tools.goNewPage("../group2/group2Share?id=" + e + "&showGroup=1");
            },
            goHome: function() {
                _core.tools.goLaunch("/pages/index/index"), clearInterval(this.timeInter), clearInterval(this.timeInter_sec);
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = t.showGroup || 0, this.showIng = "1" != r, n = t.id || 0, e.next = 5, 
                        _core.tools.setPageSkin(this);

                      case 5:
                        return e.next = 7, this.shareInfo(n);

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "shareInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, o = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = _wepy2.default.$instance, e.t0 = (0, _lodashGet2.default)(r.globalData, "userInfo", ""), 
                        e.t0) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 5, _core.core.getUserInfo();

                      case 5:
                        e.t0 = e.sent;

                      case 6:
                        n = e.t0, _core.http.get(_addr2.default.GetentGroupDetail, {
                            appid: r.globalData.appid,
                            groupid: t
                        }).then(function() {
                            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                var r, a, s, i;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        if (1 != t.isok) {
                                            e.next = 18;
                                            break;
                                        }
                                        for (r = t.postdata, a = r.GroupUserList.find(function(e) {
                                            return e.Id == n.Id;
                                        }), a ? (r.Address = a.Address, r.Name = a.Name, o.haveJoin = !0) : o.haveJoin = !1, 
                                        s = 0, i = t.GroupSponsorList.length; s < i; s++) t.GroupSponsorList[s].SponsorUserId == n.Id ? t.GroupSponsorList[s].haveJoin = !0 : t.GroupSponsorList[s].haveJoin = !1;
                                        return e.next = 7, _core.tools.ChangeDateFormat(r.StartDate);

                                      case 7:
                                        return r.StartDate = e.sent, e.next = 10, _core.tools.ChangeDateFormat(r.EndDate);

                                      case 10:
                                        r.EndDate = e.sent, o.vm = r, o.groupList = t.GroupSponsorList, o.$apply(), o.cutDown(), 
                                        o.cutDown_sec(), e.next = 19;
                                        break;

                                      case 18:
                                        _core.tools.showModal(t.msg, !1);

                                      case 19:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, o);
                            }));
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        }());

                      case 8:
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
            var e = this, t = this;
            Object.keys(t.groupList).length && (t.timeInter = setInterval(function() {
                var r = _asyncToGenerator(regeneratorRuntime.mark(function r(n) {
                    var o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return o = {}, o.GroupSponsorList = t.groupList, e.next = 4, _core.core.initCountDown(o);

                          case 4:
                            t.groupList = e.sent, t.$apply();

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, r, e);
                }));
                return function(e) {
                    return r.apply(this, arguments);
                };
            }(), 1e3));
        }
    }, {
        key: "cutDown_sec",
        value: function() {
            var e = this, t = this, r = t.vm;
            Object.keys(r).length && (t.timeInter_sec = setInterval(function() {
                var n = _asyncToGenerator(regeneratorRuntime.mark(function n(o) {
                    var a, s;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return a = r.StartDate, s = r.EndDate, e.next = 4, _core.core.groupTime(a, s);

                          case 4:
                            t.userCutdown = e.sent, t.$apply();

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, n, e);
                }));
                return function(e) {
                    return n.apply(this, arguments);
                };
            }(), 1e3));
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            var e = {
                id: this.vm.Id,
                name: this.vm.GroupName,
                img: this.vm.GroupImage
            };
            return _core.core.group2Share(e);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(group2Share, "pages/group2/group2Share"));