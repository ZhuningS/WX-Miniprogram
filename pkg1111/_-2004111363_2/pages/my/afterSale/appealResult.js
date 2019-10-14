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
                    var a = t[o](i), s = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../../lib/core.js"), _addr = require("./../../../lib/addr.js"), _addr2 = _interopRequireDefault(_addr), AppealResult = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "退换详情",
            usingComponents: {}
        }, n.data = {
            currentSkin: "",
            orderid: 0,
            serveType: 0,
            ReturnInfo: {
                Id: 0,
                ApplyTime: "",
                Reason: "",
                Remark: "",
                UploadPics: "",
                ReturnAmount: 0
            },
            GoodList: [ {
                Img: "",
                Name: "",
                Count: "",
                Attr: ""
            } ],
            status: {
                title: "",
                content: "",
                isShowTips: !1
            },
            OrderState: 0
        }, n.methods = {
            checkLogistics: function(e) {
                var t, r = parseInt(this.OrderState);
                15 != r && 18 != r || (t = 1), r >= 16 && r < 18 && (t = 2), _core.tools.goNewPage("../myLogistics?orderId=" + this.orderid + "&type=" + t + "&imgUrl=" + this.GoodList[0].Img + "&count=" + this.GoodList.length);
            },
            goShipments: function(e) {
                wx.setStorageSync("shipments", this.GoodList), _core.tools.goRedirecto("returnCargo?orderId=" + this.orderid);
            },
            getGood: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n, o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = this, n = _wepy2.default.$instance.globalData.appid, e.next = 4, _core.core.getUserInfo();

                          case 4:
                            o = e.sent, _core.tools.showModal("确定收货？").then(function(e) {
                                e.confirm && _core.http.post(_addr2.default.submitReturnGoodAppeal, {
                                    appId: n,
                                    openId: o.OpenId,
                                    orderId: Number(r.orderid),
                                    State: 17
                                }).then(function(e) {
                                    wx.showToast({
                                        title: "收货成功",
                                        icon: "success",
                                        duration: 1e3
                                    }), r.init();
                                });
                            });

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            formSubmit: function(e) {
                _core.core.formId(e.detail.formId);
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
        value: function(e) {
            var t = this;
            t.orderid = e.orderId, t.serveType = wx.getStorageSync("serveType") || "0", t.init();
        }
    }, {
        key: "mappingStatus",
        value: function(e) {
            var t, r = 0 == this.serveType ? "退款退货" : "换货";
            switch (e) {
              case 13:
                t = {
                    title: "请等待商家处理",
                    content: "您已成功发起" + r + "申请，请耐心等待商家处理",
                    isShowTips: !0
                };
                break;

              case 14:
                t = {
                    title: "等待用户发货",
                    content: "商家同意" + r + "申请，等待用户发货",
                    isShowTips: !1
                };
                break;

              case 15:
                t = {
                    title: "用户已发货",
                    content: "等待商家收货",
                    isShowTips: !1
                };
                break;

              case 16:
                t = {
                    title: "商家已发货",
                    content: "请您耐心等待",
                    isShowTips: !1
                };
                break;

              case 17:
                t = {
                    title: "用户换货成功",
                    content: "换货成功！",
                    isShowTips: !1
                };
                break;

              case 18:
                t = {
                    title: "用户退货退款成功",
                    content: "退货退款成功！",
                    isShowTips: !1
                };
                break;

              case -5:
                t = {
                    title: "退货失败",
                    content: "商家不同意退货，如有疑问，请与商家联系",
                    isShowTips: !1
                };
            }
            void 0 !== t && Object.assign(this.status, t);
        }
    }, {
        key: "init",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, o, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.showLoading();

                      case 2:
                        return t = this, r = _wepy2.default.$instance.globalData.appid, e.next = 6, _core.core.getUserInfo();

                      case 6:
                        return n = e.sent, e.next = 9, _core.http.post(_addr2.default.getReturnGoodDetail, {
                            appid: r,
                            openid: n.OpenId,
                            orderid: t.orderid
                        });

                      case 9:
                        o = e.sent, i = o.dataObj, i && (t.ReturnInfo = i.ReturnInfo, t.GoodList = i.GoodList, 
                        t.OrderState = i.OrderState, t.mappingStatus(t.OrderState)), wx.hideLoading(), t.$apply();

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(AppealResult, "pages/my/afterSale/appealResult"));