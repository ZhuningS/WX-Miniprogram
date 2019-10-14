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

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _createClass = function() {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _addr = require("./../../lib/addr.js"), _addr2 = _interopRequireDefault(_addr), Logistics = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), c = 0; c < i; c++) a[c] = arguments[c];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "查看物流"
        }, n.data = {
            logisticsInfo: [ {
                time: "",
                context: ""
            } ],
            logisticsCompany: "",
            logisticsNo: 0,
            imgUrl: "",
            count: 0
        }, n.methods = {
            copy: function(e) {
                _core.tools.copy(e);
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShow",
        value: function() {
            _core.tools.setPageSkin(this);
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, o, i, a, c, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.showLoading();

                      case 2:
                        return r = t.type || 0, this.imgUrl = t.imgUrl, this.count = t.count, n = t.orderId, 
                        e.next = 8, _core.core.getUserInfo();

                      case 8:
                        return o = e.sent, i = _wepy2.default.$instance.globalData.appid, e.next = 12, _core.http.post(_addr2.default.LogisticsInfo, {
                            appid: i,
                            openid: o.OpenId,
                            orderid: n,
                            deliverytype: r
                        });

                      case 12:
                        a = e.sent, wx.hideLoading(), c = a.dataObj, this.logisticsCompany = c.CompanyTitle, 
                        this.logisticsNo = c.DeliveryNo;
                        try {
                            s = JSON.parse(c.FeedBack), "data" in s && (s = s.data);
                        } catch (e) {
                            s = null;
                        }
                        this.logisticsInfo = "object" === (void 0 === s ? "undefined" : _typeof(s)) && Array.isArray(s) && s.length > 0 ? "context" in s ? s : this.changeListKeys(s) : [ {
                            context: "暂无物流信息"
                        } ], this.$apply();

                      case 20:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "changeListKeys",
        value: function(e) {
            var t = this;
            return e.map(function(e) {
                return t.keyTransverter([ "context", "time" ], [ "AcceptStation", "AcceptTime" ], e);
            });
        }
    }, {
        key: "keyTransverter",
        value: function(e, t, r) {
            for (var n = {}, o = 0, i = e.length; o < i; o++) n[e[o]] = r[t[o]];
            return n;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Logistics, "pages/my/myLogistics"));