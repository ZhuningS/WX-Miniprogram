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
}), exports.default = void 0;

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), _lodashGet = require("./../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), com_canvas = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            usingComponents: {}
        }, n.components = {}, n.props = {}, n.data = {}, n.methods = {
            hidemask: function() {
                this.$emit("hideCanvas"), this.$parent.showCanvas = !1, this.$apply();
            },
            saveQrcode: function() {
                function e(e, r) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    var n, o, a = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            n = (0, _lodashGet2.default)(r, "record"), o = wx.getSystemInfoSync(), wx.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: .87 * o.windowWidth,
                                height: .8 * o.windowHeight,
                                destWidth: 650 * o.pixelRatio,
                                destHeight: 880 * o.pixelRatio,
                                canvasId: "firstCanvas",
                                success: function(e) {
                                    wx.saveImageToPhotosAlbum({
                                        filePath: e.tempFilePath,
                                        success: function() {
                                            function e(e) {
                                                return t.apply(this, arguments);
                                            }
                                            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        return e.next = 2, _core.tools.loading("图片保存成功", "success");

                                                      case 2:
                                                        if (!n) {
                                                            e.next = 5;
                                                            break;
                                                        }
                                                        return e.next = 5, _core.core.updateRecordId(n);

                                                      case 5:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e, a);
                                            }));
                                            return e;
                                        }(),
                                        fail: function() {
                                            function e(e) {
                                                return t.apply(this, arguments);
                                            }
                                            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        if (!t.errMsg.includes("saveImageToPhotosAlbum:fail auth deny")) {
                                                            e.next = 3;
                                                            break;
                                                        }
                                                        return e.next = 3, _core.tools.showModal("授权后才可使用,请点击右上角‘关于小程序’进行相关设置", !1);

                                                      case 3:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e, a);
                                            }));
                                            return e;
                                        }()
                                    });
                                }
                            });

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = com_canvas;