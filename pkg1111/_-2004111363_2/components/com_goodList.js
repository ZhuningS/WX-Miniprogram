function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, o) {
            function r(s, n) {
                try {
                    var i = t[s](n), a = i.value;
                } catch (e) {
                    return void o(e);
                }
                if (!i.done) return Promise.resolve(a).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(a);
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
}), exports.default = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var r = t[o];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, o, r) {
        return o && e(t.prototype, o), r && e(t, r), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), _com_goodLabel = require("./com_goodLabel.js"), _com_goodLabel2 = _interopRequireDefault(_com_goodLabel), com_goodList = function(e) {
    function t() {
        var e, o, r, s;
        _classCallCheck(this, t);
        for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
        return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.data = {
            vm_gd: {
                topIndex: 0,
                sort: !1
            },
            fifterLst: [],
            fifterShow: !1,
            showInput: !1
        }, r.props = {
            currentCom: {
                type: Object,
                default: {}
            }
        }, r.$repeat = {
            vm: {
                com: "comlabel",
                props: ""
            },
            lst: {
                com: "comlabel",
                props: ""
            }
        }, r.$props = {
            comlabel: {
                "xmlns:v-bind": {
                    value: "",
                    for: "lst",
                    item: "good_item",
                    index: "index",
                    key: "key"
                },
                "v-bind:vm.sync": {
                    value: "good_item.plabelstr_array",
                    for: "lst",
                    item: "good_item",
                    index: "index",
                    key: "key"
                },
                class: {
                    value: "mt20",
                    for: "lst",
                    item: "good_item",
                    index: "index",
                    key: "key"
                }
            }
        }, r.$events = {}, r.components = {
            comlabel: _com_goodLabel2.default
        }, r.methods = {
            handlerFocus: function(e) {
                this.showInput = "" != e.detail.value;
            },
            clickSearch: function() {
                this.showInput = !0;
            },
            pathSear: function() {
                _core.tools.goNewPage("/pages/good/goodSearch");
            },
            pathClassify: function(e, t, o) {
                for (var r = [], s = 0, n = t[e].length; s < n; s++) {
                    var i = t[e][s];
                    r.push(i.id);
                }
                r = r.join(","), _core.tools.goNewPage("/pages/good/goodType?index=" + e + "&ids=" + r + "&style=" + o);
            },
            search: function(e) {
                var t = this.$parent, o = t.data.vm_com_goodLst, r = t.data.currentPage.coms[0];
                o = _core.tools.resetArray(o), o.search = e.detail.value, o.exttypes = "", o.pricesort = "", 
                _core.core.getGoodsListRequest(o, r, t), _core.tools.onPageScroll();
            },
            navFunc: function(e) {
                var t = this.$parent, o = t.data.vm_com_goodLst, r = t.data.currentPage.coms[0];
                o = _core.tools.resetArray(o), o.typeid = e, o.exttypes = "", o.pricesort = "", 
                _core.core.getGoodsListRequest(o, r, t), _core.tools.onPageScroll();
            },
            selectFifter: function(e, t) {
                var o = "", r = [];
                this.fifterLst[e].child[t].sel = !this.fifterLst[e].child[t].sel;
                for (var s = 0, n = this.fifterLst.length; s < n; s++) for (var i = 0, a = this.fifterLst[s].child.length; i < a; i++) this.fifterLst[s].child[i].sel && (o = this.fifterLst[s].item.TypeId + "-" + this.fifterLst[s].child[i].TypeId, 
                r.push(o), this.exttypes = r);
            },
            fifterCheck: function() {
                var e = this.$parent, t = e.data.currentPage.coms[0], o = e.data.vm_com_goodLst;
                o.exttypes = this.exttypes.join(","), o = _core.tools.resetArray(o), o.pricesort = "", 
                o.saleCountSort = "", _core.core.getGoodsListRequest(o, t, e), _core.tools.onPageScroll(), 
                this.fifterShow = !1, this.$apply();
            },
            fifterClear: function() {
                for (var e = 0, t = this.fifterLst.length; e < t; e++) for (var o = 0, r = this.fifterLst[e].child.length; o < r; o++) this.fifterLst[e].child[o].sel = !1;
                this.exttypes = [];
            },
            changeTop: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number(e), t = this.$parent, o = t.data.vm_com_goodLst, r = t.data.currentPage.coms[0];
                o = _core.tools.resetArray(o), this.vm_gd.topIndex = e, o.pricesort = "", o.saleCountSort = "", 
                1 == e ? o.pricesort = "desc" : 2 == e ? this.vm_gd.sort && 2 == this.vm_gd.topIndex ? (this.vm_gd.sort = !1, 
                o.saleCountSort = "desc") : (this.vm_gd.sort = !0, o.saleCountSort = "asc") : 3 == e && this.getFifter(this.currentCom), 
                this.$apply(), _core.core.getGoodsListRequest(o, r, t);
            },
            goNav: function(e, t) {
                _core.tools.pathGood(e.id, t.btnType, t.isShowPrice);
            }
        }, s = o, _possibleConstructorReturn(r, s);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getFifter",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var o, r, s, n, i, a, c, l;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.goodFifter();

                      case 2:
                        for (o = e.sent, r = o.msg, s = [], n = function(e, t) {
                            var o = r.filter(function(e) {
                                return e.ParentId == t.TypeId;
                            });
                            s.push({
                                item: t,
                                child: o
                            });
                        }, i = 0; a = t.goodExtCat[i++]; ) n(i, a);
                        for (i = 0; a = s[i++]; ) for (c = 0; l = a.child[c++]; ) 1 == l.sel && (l.sel = !1);
                        this.fifterLst = s, this.fifterShow = !0, this.$apply();

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.component);

exports.default = com_goodList;