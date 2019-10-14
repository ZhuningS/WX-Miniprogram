function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, s) {
                try {
                    var a = t[o](s), i = a.value;
                } catch (e) {
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(i).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _com_richtxt = require("./../../components/com_richtxt.js"), _com_richtxt2 = _interopRequireDefault(_com_richtxt), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), sell = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var s = arguments.length, a = Array(s), i = 0; i < s; i++) a[i] = arguments[i];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.config = {
            enablePullDownRefresh: !0,
            navigationBarTitleText: "分销员招募计划"
        }, r.$repeat = {}, r.$props = {
            comRichIn: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.once": "vm",
                class: "mt20"
            }
        }, r.$events = {}, r.components = {
            comRichIn: _com_richtxt2.default
        }, r.data = {
            vm: {},
            showBtn: !0,
            showMask: !1,
            currentSkin: {},
            userInfo: {},
            showTipMask: !1,
            saleId: ""
        }, r.methods = {
            getUser: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.getRnUser(t);

                          case 2:
                            this.userInfo = e.sent, this.$apply();

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            wxParseImgTap: function(e) {
                var t = e.currentTarget.dataset.src;
                _core.tools.preViewShow(t);
            },
            getInput: function(e) {
                this.phone = e.detail.value;
            },
            getApply: function() {
                var e = this.vm;
                if (0 == e.IsSecondSale && "" != this.saleId) return this.showTipMask = !0, void this.$apply();
                e.SalesMan && 0 == e.SalesMan.state || (this.showMask = !0, this.$apply());
            },
            goSell: function() {
                _core.tools.goRedirecto("/pages/sellCenter/sell");
            },
            cancle: function() {
                this.showMask = !1;
            },
            goSure: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.core.postApply(this.phone, this.saleId);

                          case 2:
                            if (t = e.sent, !t.isok) {
                                e.next = 11;
                                break;
                            }
                            return this.showMask = !1, this.$apply(), e.next = 8, this.info();

                          case 8:
                            this.vm.SalesManManager.is_verify_on < 2 && _core.tools.showModal("申请提交后，商家将会进行审核，审核通过后即可成为本店的分销员", !1), 
                            e.next = 12;
                            break;

                          case 11:
                            _core.tools.showModal(t.msg, !1);

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r, o, s, a, i, c;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = "", r = _wepy2.default.$instance, o = !1, s = !1, a = (0, _lodashGet2.default)(t, "scene", ""), 
                        i = Boolean((0, _lodashGet2.default)(t, "second", !1)), e.next = 8, _core.tools.setPageSkin(this);

                      case 8:
                        a ? (c = [], c = decodeURIComponent(a).split("_"), n = c[0], s = !0, o = !1) : (o = i, 
                        s = !1, n = (0, _lodashGet2.default)(t, "saleId", "")), this.info(o, n, s), this.saleId = n, 
                        this._sinfo = o, this.sceneShow = s, this.$apply();

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "info",
        value: function() {
            function e(e, n, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n, r) {
                var o, s, a, i, c;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o = _wepy2.default.$instance, "" != (s = (0, _lodashGet2.default)(o.globalData, "vipInfo", ""))) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 5, _core.core.getVipInfo();

                      case 5:
                        s = e.sent;

                      case 6:
                        return e.next = 8, _core.core.getMiniSale(n);

                      case 8:
                        if (a = e.sent, !a.isok) {
                            e.next = 24;
                            break;
                        }
                        if (i = a.obj, c = (0, _lodashGet2.default)(i.SalesMan, "state", ""), i.vipInfo = s, 
                        i.content_fmt = _core.tools.richChange(i.RecruitPlan.description, this), o.globalData.secondSate = 1 == i.secondeSaleState, 
                        !t) {
                            e.next = 18;
                            break;
                        }
                        return this.shareOth(i, o), e.abrupt("return");

                      case 18:
                        if (!r || "" != c || 2 == c) {
                            e.next = 21;
                            break;
                        }
                        return this.sceneSelf(i, o), e.abrupt("return");

                      case 21:
                        this.directSale(i, o, c), e.next = 27;
                        break;

                      case 24:
                        return e.next = 26, _core.tools.showModal(a.msg, !1);

                      case 26:
                        _core.tools.goBack(1);

                      case 27:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "directSale",
        value: function(e, t, n) {
            if (null == e.SalesMan) 0 == e.SalesManManager.allow_recruit && (this.showBtn = !1, 
            wx.hideShareMenu()), e.showBtn = !0, e.text = "成为分销员"; else switch (n) {
              case -1:
                _core.tools.goRedirecto("/pages/sellCenter/sellIndivi");
                break;

              case 0:
              case 1:
                e.text = "待审核", e.showBtn = !1;
                break;

              case 2:
                _core.tools.goRedirecto("/pages/sellCenter/sellIndivi");
            }
            this.vm = e, this.userInfo = t.globalData.userInfo, this.$apply();
        }
    }, {
        key: "shareOth",
        value: function(e, t) {
            e.text = "邀请分销商", e.showBtn = !0, 0 == e.SalesManManager.allow_recruit ? (this.showBtn = !1, 
            wx.hideShareMenu()) : (this.showBtn = !1, wx.showShareMenu()), this.vm = e, this.userInfo = t.globalData.userInfo, 
            this.$apply();
        }
    }, {
        key: "sceneSelf",
        value: function(e, t) {
            e.text = "成为分销员", e.showBtn = !0, 0 == e.SalesManManager.allow_recruit ? (this.showBtn = !1, 
            wx.hideShareMenu()) : (this.showBtn = !0, wx.hideShareMenu()), this.vm = e, this.userInfo = t.globalData.userInfo, 
            this.$apply();
        }
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
                        return wx.showNavigationBarLoading(), e.next = 3, this.info(this._sinfo, this.saleId, this.sceneShow);

                      case 3:
                        setTimeout(function() {
                            wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
                        }, 1e3);

                      case 4:
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
                title: "",
                path: "/pages/sellCenter/sell?saleId=" + _wepy2.default.$instance.globalData.saleId,
                imageUrl: "",
                success: function(e) {
                    _core.tools.loading("转发成功", "success");
                }
            };
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(sell, "pages/sellCenter/sell"));