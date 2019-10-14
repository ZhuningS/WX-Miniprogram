function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, i) {
                try {
                    var a = t[o](i), c = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(c).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(c);
            }
            return n("next");
        });
    };
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _com_slider_in = require("./../../components/com_slider_in.js"), _com_slider_in2 = _interopRequireDefault(_com_slider_in), _com_richtxt = require("./../../components/com_richtxt.js"), _com_richtxt2 = _interopRequireDefault(_com_richtxt), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), interRecord = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), c = 0; c < i; c++) a[c] = arguments[c];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "",
            usingComponents: _defineProperty({
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index"
            }, "wxc-abnor", "../../packages/@minui/wxc-abnor/dist/index")
        }, n.$repeat = {}, n.$props = {
            comSliderIn: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.once": "vm"
            },
            comRichIn: {
                "v-bind:currentCom.once": "vm"
            }
        }, n.$events = {}, n.components = {
            comSliderIn: _com_slider_in2.default,
            comRichIn: _com_richtxt2.default
        }, n.data = {
            vm: {},
            currentSkin: {}
        }, n.methods = {
            wxParseImgTap: function(e) {
                var t = e.currentTarget.dataset.src;
                _core.tools.preViewShow(t);
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
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        this.dlt(t);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "dlt",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = (0, _lodashGet2.default)(t, "id", 0), n = (0, _lodashGet2.default)(t, "type", ""), 
                        e.next = 4, _core.core.interDlt(r);

                      case 4:
                        o = e.sent, o.isok ? (o.obj.type = n, o.obj.slideimgs = o.obj.imgs, o.obj.slideimgs_fmt = o.obj.imgs_fmt, 
                        o.obj.content_fmt = _core.tools.richChange(o.obj.description, this), o.obj.btn = 0 == n ? "立即兑换" : "立即购买", 
                        this.vm = o.obj, this.$apply(), _core.tools.setPageTitle(o.obj.activityname)) : _core.tools.showModal(o.msg, flase);

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "navOrder",
        value: function() {
            var e = this.vm, t = {};
            t.list = [], t.list.push({
                ImgUrl: e.activityimg,
                oldPrice: e.originalPriceStr,
                SpecInfo: "",
                Introduction: e.activityname,
                discount: 100,
                discountPrice: e.priceStr,
                Count: 1
            }), t.fee = e.freightStr, t.activityId = e.id, t.totalPrice = e.priceStr, t.totalCount = 1, 
            t.integral = e.integral, t.type = e.type, t.address = "", t.userName = "", t.telNumber = "", 
            this.$preload("vm_order", t), this.$navigate("/pages/integral/interOrder");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(interRecord, "pages/integral/interDlt"));