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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _com_richtxt = require("./../../components/com_richtxt.js"), _com_richtxt2 = _interopRequireDefault(_com_richtxt), _core = require("./../../lib/core.js"), groupMyShare = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), c = 0; c < i; c++) a[c] = arguments[c];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index"
            },
            navigationBarTitleText: "参团详情"
        }, n.$repeat = {}, n.$props = {
            comRichIn: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.once": "vm_dlt"
            }
        }, n.$events = {}, n.components = {
            comRichIn: _com_richtxt2.default
        }, n.data = {
            vm_dlt: {},
            time: {},
            tab: [ "商品详情", "拼团规则" ],
            tabId: 0,
            currentSkin: {}
        }, n.methods = {
            preview: function(e) {
                _core.tools.preViewShow(e);
            },
            clickTab: function(e) {
                this.tabId = e;
            },
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
                var r, n, o = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = this, n = t.id || 0, e.next = 4, r.groupInfo(n);

                      case 4:
                        return e.next = 6, _core.tools.setPageSkin(r);

                      case 6:
                        r.cutDown = setInterval(function() {
                            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                var n, i;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return n = r.vm_dlt.ValidDateStart, i = r.vm_dlt.ValidDateEnd, e.next = 4, _core.core.groupTime(n, i);

                                      case 4:
                                        r.time = e.sent, r.$apply();

                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, o);
                            }));
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        }(), 1e3);

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            clearInterval(this.cutDown);
        }
    }, {
        key: "groupInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.myGroupDlt(t);

                      case 2:
                        r = e.sent, r.isok ? (n = r.groupdetail, n.content_fmt = _core.tools.richChange(n.Description, this), 
                        n.GroupSponsorId = t, n.GroupUserList.length >= 4 ? (n.GroupUserList = n.GroupUserList.slice(0, 4), 
                        n.NeedNum_fmt = 0) : n.NeedNum + n.GroupUserList.length <= 4 ? n.NeedNum_fmt = n.NeedNum : n.NeedNum_fmt = 4 - n.GroupUserList.length, 
                        this.vm_dlt = n, this.$apply()) : _core.tools.showModal(data.msg, !1);

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
            var e = this.vm_dlt;
            return _core.core.groupShare(e);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(groupMyShare, "pages/group/groupMyShare"));