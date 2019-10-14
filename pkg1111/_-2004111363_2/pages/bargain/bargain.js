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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _com_canvas = require("./../../components/com_canvas.js"), _com_canvas2 = _interopRequireDefault(_com_canvas), _com_imSwitch = require("./../../components/com_imSwitch.js"), _com_imSwitch2 = _interopRequireDefault(_com_imSwitch), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), bargain = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "砍价活动",
            enablePullDownRefresh: !0,
            navigationBarBackgroundColor: "#ffffff",
            navigationBarTextStyle: "black"
        }, n.data = {
            vm: {},
            showMore: !1,
            bargainShow: !1,
            barCanvas: !1
        }, n.components = {
            comVas: _com_canvas2.default,
            comIm: _com_imSwitch2.default
        }, n.methods = {
            navOrder: function(e) {
                _core.core.formId(e.detail.formId), _core.core.getBarPrice(this.vm.buid, this);
            },
            barSelf: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!this.vm.haveCreatOrder) {
                                e.next = 7;
                                break;
                            }
                            return e.next = 3, _core.tools.showModal("您已经下过单了，请进入砍价单查看详情!");

                          case 3:
                            r = e.sent, r.confirm && this.$navigate("/pages/bargain/bargainList"), e.next = 8;
                            break;

                          case 7:
                            _core.core.addBargain(this.vm.obj.Id, this);

                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            myPlay: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            r = _wepy2.default.$instance, n = r.globalData.userInfo, _core.core.bargainDlt(t, this, []);

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
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
                            this.vm.userInfo = e.sent, this.$apply(), 0 == this.vm.userInfo.newUser && _core.core.bargainDlt(this.vm.obj.Id, this, []);

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            showMore: function() {
                this.showMore = !this.showMore, this.showMore ? this.vm.num = 10 : this.vm.num = 4, 
                this.$apply();
            },
            hideBarMask: function() {
                this.bargainShow = !1, this.$apply();
            },
            preView: function(e) {
                var t = [];
                t.push(e), _core.tools.preViewShow(e, t);
            },
            goBarList: function() {
                _core.tools.goNewPage("../bargain/bargainList");
            },
            shareQrcode: function() {
                var e = this.vm, t = {
                    buid: e.buid,
                    bId: e.obj.Id
                };
                0 == e.haveCreatOrder ? _core.core.getShare(t, this) : _core.tools.showModal("已下单不能再分享", !1);
            },
            saveCanvas: function() {
                wx.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: 600,
                    height: 870,
                    canvasId: "bargainCanvas",
                    fileType: "jpg",
                    quality: 1,
                    success: function(e) {
                        wx.saveImageToPhotosAlbum({
                            filePath: e.tempFilePath,
                            success: function(e) {
                                _core.tools.loading("图片保存成功", "success");
                            },
                            fail: function(e) {
                                e.errMsg.includes("saveImageToPhotosAlbum:fail auth deny") && _core.tools.showModal("授权后才可使用,请点击右上角‘关于小程序’进行相关设置", !1);
                            }
                        });
                    }
                });
            },
            closeBar: function() {
                this.barCanvas = !1, this.$apply();
            },
            closeShow: function() {
                this.vm.barShow = !1, this.$apply();
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            var t = (0, _lodashGet2.default)(e, "id"), r = (0, _lodashGet2.default)(e, "scene", []);
            r.length && (r = decodeURIComponent(r).split("_"), t = r[1]), _core.core.bargainDlt(t, this, r);
        }
    }, {
        key: "onHide",
        value: function() {
            clearInterval(this.barCutDown);
        }
    }, {
        key: "onUnload",
        value: function() {
            clearInterval(this.barCutDown);
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            var e = this.vm;
            return {
                title: "我发现了一件好货，最低可砍至" + e.obj.FloorPriceStr + "元",
                imageUrl: e.obj.ImgUrl,
                path: "/pages/bargain/bargain?scene=" + e.buid + "_" + e.obj.Id
            };
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(bargain, "pages/bargain/bargain"));