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
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), group2Dlt = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "开团成功",
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index"
            }
        }, n.components = {}, n.data = {
            currentSkin: {},
            vm_dlt: {},
            time: {},
            isgroup: 0
        }, n.computed = {}, n.methods = {
            preview: function(e) {
                _core.tools.preViewShow(e);
            },
            copy: function() {
                _core.tools.copy(this.vm_dlt.user.OrderNum);
            },
            goHome: function() {
                _core.tools.goLaunch("/pages/index/index"), clearInterval(this.$parent.$pages["/pages/group2/group2Share"].timeInter), 
                clearInterval(this.$parent.$pages["/pages/group2/group2Share"].timeInter_sec);
            },
            navShare: function(e) {
                this.$navigate("../group2/group2Share?id=" + e);
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
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = t.id || 0, this.isgroup = t.isgroup || 0, e.next = 4, _core.tools.setPageSkin(this);

                      case 4:
                        this.dltInfo(r);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "dltInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getMinOrderId(t);

                      case 2:
                        r = e.sent, 1 == r.isok ? (this.vm_dlt.buyprice = r.postdata.buyPrice, this.vm_dlt.user = r.postdata.goodOrder, 
                        this.vm_dlt.pro = r.postdata.goodOrderDtl, this.vm_dlt.order = {
                            time: r.postdata.groupendtime,
                            stateTxt: r.postdata.stateRemark
                        }, this.vm_dlt.groupState = r.postdata.groupstate, this.$apply(), this.cutDow()) : _core.tools.showModal(r.msg, !1);

                      case 4:
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
            this.cutDow();
        }
    }, {
        key: "onHide",
        value: function() {
            clearInterval(this.cutDown);
        }
    }, {
        key: "onUnload",
        value: function() {
            clearInterval(this.cutDown);
        }
    }, {
        key: "cutDow",
        value: function() {
            var e = this, t = this;
            Object.keys(t.vm_dlt).length && (t.cutDown = setInterval(function() {
                var r = _asyncToGenerator(regeneratorRuntime.mark(function r(n) {
                    var o, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return o = t.vm_dlt.user.CreateDateStr, a = t.vm_dlt.order.time, e.next = 4, _core.core.groupTime(o, a);

                          case 4:
                            t.time = e.sent, t.$apply();

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
        key: "onShareAppMessage",
        value: function() {
            var e = {
                id: this.vm_dlt.user.GroupId,
                name: this.vm_dlt.pro[0].goodname,
                img: this.vm_dlt.pro[0].goodImgUrl
            };
            return _core.core.group2Share(e);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(group2Dlt, "pages/group2/group2Dlt"));