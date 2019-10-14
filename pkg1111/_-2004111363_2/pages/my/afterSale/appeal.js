function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function o(n, a) {
                try {
                    var i = t[n](a), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(u);
            }
            return o("next");
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
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../../lib/core.js"), _addr = require("./../../../lib/addr.js"), _addr2 = _interopRequireDefault(_addr), Appeal = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.config = {
            navigationBarTitleText: "申请退款",
            usingComponents: {}
        }, o.data = {
            uploadFlag: !0,
            currentSkin: "",
            returnGoodReason: {
                range: [ "多拍/拍错/不想", "不满意", "其他" ],
                activeIndex: 0,
                isSelect: !1
            },
            orderList: [],
            typeID: 0,
            idListL: [],
            remark: "",
            uploadImgs: [],
            orderid: 0,
            buyPrice: 0
        }, o.methods = {
            bindReplaceInput: function(e) {
                this.remark = e.detail.value;
            },
            submit: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, r, o, n, a, i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = this, r = t.returnGoodReason, o = t.orderList.map(function(e) {
                                return e.orderDtl.Id;
                            }), t.returnGoodReason.isSelect) {
                                e.next = 6;
                                break;
                            }
                            return _core.tools.showModal("未选择退货原因", !1), e.abrupt("return");

                          case 6:
                            return e.next = 8, _core.core.getUserInfo();

                          case 8:
                            n = e.sent, a = _wepy2.default.$instance.globalData.appid, i = {
                                GoodsId: o.join(),
                                Reason: r.range[r.activeIndex],
                                Remark: t.remark,
                                UploadPics: t.uploadImgs.join(),
                                ReturnType: Number(t.typeID)
                            }, _core.http.post(_addr2.default.submitReturnGoodAppeal, {
                                appId: a,
                                openId: n.OpenId,
                                orderId: Number(t.orderid),
                                State: 13,
                                attchData: JSON.stringify(i)
                            }).then(function(e) {
                                1 == e.isok ? (wx.setStorageSync("serveType", t.typeID), _core.tools.goRedirecto("appealResult?orderId=" + t.orderid)) : _core.tools.showModal("提交失败,请检查所填项", !1);
                            });

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            uploadImg: function(e) {
                var t = this;
                _core.tools.upload().then(function(e) {
                    "object" === (void 0 === e ? "undefined" : _typeof(e)) && Array.isArray(e) && t.uploadImgs.length < 6 && (t.uploadImgs = t.uploadImgs.concat(e).slice(0, 6), 
                    6 == t.uploadImgs.length && (t.uploadFlag = !1)), t.$apply();
                });
            },
            formSubmit: function(e) {
                _core.core.formId(e.detail.formId);
            },
            removeImg: function(e) {
                var t = e.currentTarget.dataset.index;
                this.uploadImgs.splice(t, 1), this.uploadFlag = !0;
            },
            bindReturnGoodReasonChange: function(e) {
                this.returnGoodReason.activeIndex = e.detail.value, this.returnGoodReason.isSelect = !0;
            }
        }, n = r, _possibleConstructorReturn(o, n);
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
                var r, o, n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.showLoading();

                      case 2:
                        return r = this, this.typeID = t.typeID, this.orderid = t.orderId, 0 == this.typeID ? this.orderList = wx.getStorageSync("allList") : this.orderList = wx.getStorageSync("selectList"), 
                        e.next = 8, _core.core.getUserInfo();

                      case 8:
                        return o = e.sent, n = _wepy2.default.$instance.globalData.appid, e.next = 12, _core.http.get(_addr2.default.getMiniappGoodsOrderById, {
                            appid: n,
                            openid: o.OpenId,
                            orderid: r.orderid
                        });

                      case 12:
                        a = e.sent, r.buyPrice = a.postdata.buyPrice, wx.hideLoading(), this.$apply();

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Appeal, "pages/my/afterSale/appeal"));