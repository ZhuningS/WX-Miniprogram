function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, o) {
            function n(r, s) {
                try {
                    var a = t[r](s), i = a.value;
                } catch (e) {
                    return void o(e);
                }
                if (!a.done) return Promise.resolve(i).then(function(e) {
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
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), sellIndivi = function(e) {
    function t() {
        var e, o, n, r;
        _classCallCheck(this, t);
        for (var s = arguments.length, a = Array(s), i = 0; i < s; i++) a[i] = arguments[i];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "我的",
            enablePullDownRefresh: !0
        }, n.data = {
            currentSkin: {},
            vm: {},
            showMask: !1,
            record: ""
        }, n.methods = {
            saveQrcode: function() {
                var e = (0, _lodashGet2.default)(this, "record", "");
                wx.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    canvasId: "sellCanvas",
                    quality: 1,
                    success: function(t) {
                        wx.saveImageToPhotosAlbum({
                            filePath: t.tempFilePath,
                            success: function(t) {
                                e && _core.core.updateRecordId(e), _core.tools.showModal("保存已保存成功！您可以用该图片去分享朋友圈哦", !1);
                            },
                            fail: function(e) {
                                _core.tools.showModal("授权后才可使用,请点击右上角‘关于小程序’进行相关设置", !1);
                            }
                        });
                    }
                });
            },
            openShare: function() {
                _core.canvas.getSellCanvas(this.vm.Id, this);
            },
            openSell: function() {
                _core.canvas.getSellQrcode(this.vm.Id, this);
            },
            hidemask: function() {
                this.showMask = !1, this.$apply();
            },
            goPro: function() {
                if (-1 == this.vm.state) return void _core.tools.showModal("你已被清退", !1);
                _core.tools.goNewPage("./sellProLst?sale=1");
            },
            goSecond: function() {
                _core.tools.goNewPage("/pages/sellCenter/sellSecond");
            },
            mysell: function() {
                if (-1 == this.vm.state) return void _core.tools.showModal("你已被清退", !1);
                _core.tools.goNewPage("/pages/sellCenter/sellShow");
            },
            navPro: function(e) {
                if (-1 == this.vm.state) return void _core.tools.showModal("你已被清退", !1);
                _core.tools.goNewPage("/pages/sellCenter/sellMain?type=3");
            },
            goMoney: function() {
                this.$navigate("/pages/sellCenter/sellPostCash");
            },
            goMore: function() {
                if (-1 == this.vm.state) return void _core.tools.showModal("你已被清退", !1);
                _core.tools.goNewPage("/pages/sellCenter/sell?second=true");
            }
        }, r = o, _possibleConstructorReturn(n, r);
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
                        this.userInfo();

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "userInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = _wepy2.default.$instance, e.next = 3, _core.core.getSaleInfo();

                      case 3:
                        o = e.sent, o.isok ? (t.globalData.saleId = o.obj.Id, this.vm = o.obj, this.vm.secondSate = t.globalData.secondSate, 
                        this.$apply()) : _core.tools.showModal(o.msg, !1);

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
            wx.showNavigationBarLoading(), this.userInfo(), setTimeout(function() {
                wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
            }, 1e3);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(sellIndivi, "pages/sellCenter/sellIndivi"));