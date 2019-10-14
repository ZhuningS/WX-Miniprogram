function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../../lib/core.js"), _addr = require("./../../../lib/addr.js"), _addr2 = _interopRequireDefault(_addr), _com_similar = require("./../../../components/com_similar.js"), _com_similar2 = _interopRequireDefault(_com_similar), ReturnCargo = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "返回货物",
            usingComponents: {}
        }, n.$repeat = {}, n.$props = {
            similar: {
                "xmlns:v-bind": "",
                "v-bind:onSelectAfter.once": "getCompanyName",
                "v-bind:isCancel.sync": "isShow",
                placeholder: "快速查询物流公司"
            }
        }, n.$events = {}, n.components = {
            similar: _com_similar2.default
        }, n.data = {
            currentSkin: "",
            company: {
                range: []
            },
            orderid: 0,
            shipmentsInfo: {
                Img: "",
                Name: "",
                Count: "",
                Attr: ""
            },
            codeList: [],
            phone: 0,
            man: "",
            order: "",
            address: "",
            mark: "",
            isShow: !1,
            selectCompanyInfo: {
                title: "请选择物流公司",
                index: 0
            }
        }, n.methods = {
            selectCompany: function(e) {
                this.isShow = !0;
            },
            bindManInput: function(e) {
                this.man = e.detail.value;
            },
            bindOrderInput: function(e) {
                this.order = e.detail.value;
            },
            bindPhoneInput: function(e) {
                this.phone = e.detail.value;
            },
            bindAddressInput: function(e) {
                this.address = e.detail.value;
            },
            bindMarkInput: function(e) {
                this.mark = e.detail.value;
            },
            submitForm: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n, o, a, i, s, u;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (n = this, o = /[0-9]{11}/, a = /[0-9]+/, n.man && n.phone && n.order && "请选择物流公司" != n.selectCompanyInfo.title && n.address) {
                                e.next = 6;
                                break;
                            }
                            return _core.tools.showModal("表单资料不完整", !1), e.abrupt("return");

                          case 6:
                            if (o.test(n.phone)) {
                                e.next = 9;
                                break;
                            }
                            return _core.tools.showModal("请输入正确的电话格式", !1), e.abrupt("return");

                          case 9:
                            if (a.test(n.order)) {
                                e.next = 12;
                                break;
                            }
                            return _core.tools.showModal("请输入正确的物流订单号格式", !1), e.abrupt("return");

                          case 12:
                            return e.next = 14, _core.core.getUserInfo();

                          case 14:
                            i = e.sent, s = _wepy2.default.$instance.globalData.appid, r = {
                                ContactName: n.man,
                                ContactTel: n.phone,
                                CompanyCode: n.remark,
                                CompanyTitle: n.selectCompanyInfo.title
                            }, _defineProperty(r, "CompanyCode", n.codeList[n.selectCompanyInfo.index]), _defineProperty(r, "DeliveryNo", n.order), 
                            _defineProperty(r, "Address", n.address), _defineProperty(r, "Remark", n.mark), 
                            u = r, _core.http.post(_addr2.default.submitReturnGoodAppeal, {
                                appId: s,
                                openId: i.OpenId,
                                orderId: Number(n.orderid),
                                State: 15,
                                attchData: JSON.stringify(u)
                            }).then(function(e) {
                                1 == e.isok ? _core.tools.goRedirecto("appealResult?orderId=" + n.orderid) : _core.tools.showModal("提交失败,请检查所填项", !1);
                            });

                          case 18:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getCompanyName",
        value: function(e) {
            this.selectCompanyInfo = e;
        }
    }, {
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
                var r, n, o, a, i, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.showLoading();

                      case 2:
                        return this.orderid = t.orderId, this.shipmentsInfo = wx.getStorageSync("shipments"), 
                        e.next = 6, _core.http.post(_addr2.default.getDeliveryCompany);

                      case 6:
                        if (r = e.sent, wx.hideLoading(), n = r.dataObj, o = [], "object" === (void 0 === n ? "undefined" : _typeof(n)) && Array.isArray(n)) {
                            for (a = n.length; a--; ) i = {
                                title: n[a].Title,
                                index: a
                            }, s = n[a].Code, this.codeList[a] = s, o.push(i);
                            this.company.range = o, this.$invoke("similar", "setList", this.company.range);
                        }
                        this.$apply();

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(ReturnCargo, "pages/my/afterSale/returnCargo"));