function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var i = t[o](a), s = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
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
});

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _com_payMask = require("./../../components/com_payMask.js"), _com_payMask2 = _interopRequireDefault(_com_payMask), _com_goodHot = require("./../../components/com_goodHot.js"), _com_goodHot2 = _interopRequireDefault(_com_goodHot), _com_richtxt = require("./../../components/com_richtxt.js"), _com_richtxt2 = _interopRequireDefault(_com_richtxt), _com_imSwitch = require("./../../components/com_imSwitch.js"), _com_imSwitch2 = _interopRequireDefault(_com_imSwitch), _com_slider_in = require("./../../components/com_slider_in.js"), _com_slider_in2 = _interopRequireDefault(_com_slider_in), _core = require("./../../lib/core.js"), news = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "",
            enablePullDownRefresh: !1
        }, r.$repeat = {}, r.$props = {
            comHot: {
                "v-bind:vm.sync": "vm.hostlist"
            },
            comPay: {
                "v-bind:vm.sync": "vm"
            },
            comImBtn: {
                "v-bind:false.sync": "false",
                "xmlns:v-on": "",
                "v-bind:wxServer.sync": "vm.wxServer",
                "v-bind:vm.sync": "vm.userInfo"
            },
            comRichIn: {
                "v-bind:currentCom.once": "vm"
            },
            comSliderIn: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.once": "vm"
            }
        }, r.$events = {
            comPay: {
                "v-on:selChange": "selChange",
                "v-on:hideMask": "hideMask",
                "v-on:payMoney": "payMoney"
            },
            comImBtn: {
                "v-on:getUser": "getUser"
            }
        }, r.components = {
            comHot: _com_goodHot2.default,
            comPay: _com_payMask2.default,
            comImBtn: _com_imSwitch2.default,
            comRichIn: _com_richtxt2.default,
            comSliderIn: _com_slider_in2.default
        }, r.data = {
            currentSkin: {},
            vm: {},
            audioIndex: -1,
            BackgroundAudioManager: ""
        }, r.methods = {
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
                            this.vm.userInfo = e.sent, 0 == this.vm.userInfo.newUser && (this.vm.payMask = !0), 
                            this.$apply();

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            buyMask: function() {
                this.vm.payMask = !0, this.$apply();
            },
            hideMask: function() {
                this.vm.payMask = !1, this.$apply();
            },
            selChange: function(e) {
                this.vm.selIndex = Number(e), this.$apply();
            },
            payMoney: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n, r, o, a, i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = this, 0 != (n = Number(t.vm.selIndex))) {
                                e.next = 5;
                                break;
                            }
                            return _core.tools.showModal("请选择支付方式", !1), e.abrupt("return");

                          case 5:
                            return r = {
                                id: t.vm.id,
                                mode: n
                            }, e.next = 8, _core.core.payCtOrder(r);

                          case 8:
                            if (0 != (o = e.sent)) {
                                e.next = 11;
                                break;
                            }
                            return e.abrupt("return");

                          case 11:
                            if (wx.showNavigationBarLoading(), 1 != n) {
                                e.next = 20;
                                break;
                            }
                            return a = {
                                orderid: o.orderId,
                                type: 1
                            }, e.next = 16, _core.pay.PayOrder(a);

                          case 16:
                            i = e.sent, "" != i && i.errMsg.includes("requestPayment:ok") ? (_core.tools.loading("正在支付..."), 
                            setTimeout(function() {
                                t.vm.payMask = !1, t.vm.playContent = !1, wx.hideNavigationBarLoading(), _core.tools.showModal("支付成功", !1), 
                                _core.core.getNewInfo(t.vm.id, t);
                            }, 1e3)) : (wx.hideNavigationBarLoading(), _core.tools.loading("取消支付")), e.next = 22;
                            break;

                          case 20:
                            _core.tools.loading("正在支付..."), setTimeout(function() {
                                t.vm.payMask = !1, t.vm.playContent = !1, wx.hideNavigationBarLoading(), _core.tools.showModal("支付成功", !1), 
                                _core.core.getNewInfo(t.vm.id, t);
                            }, 1e3);

                          case 22:
                            t.$apply();

                          case 23:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            playContent: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.showModal("该正文为付费内容请先购买");

                          case 2:
                            t = e.sent, t.confirm && (this.vm.payMask = !0, this.$apply());

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            playVideo: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = this.vm, !t.ispaid && 0 != t.ispay) {
                                e.next = 6;
                                break;
                            }
                            wx.createVideoContext("ctvideo").play(), t.playVideo = !0, e.next = 11;
                            break;

                          case 6:
                            return t.playVideo = !1, e.next = 9, _core.tools.showModal("此视频付费后才可观看");

                          case 9:
                            n = e.sent, n.confirm && (this.vm.payMask = !0);

                          case 11:
                            this.vm = t, this.$apply();

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            endVideo: function() {
                wx.createVideoContext("ctvideo").stop(), this.vm.playVideo = !1, this.$apply();
            },
            playAudio: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = this.vm, !t.ispaid && 0 != t.ispay) {
                                e.next = 7;
                                break;
                            }
                            t.playAudio = !t.playAudio, console.log("是否播放", t.playAudio), t.playAudio ? (this.BackgroundAudioManager.play(), 
                            this.audioCreate(t, this.audioIndex), this.audioIndex = 0) : this.BackgroundAudioManager.pause(), 
                            e.next = 11;
                            break;

                          case 7:
                            return e.next = 9, _core.tools.showModal("此视频付费后才可观看");

                          case 9:
                            n = e.sent, n.confirm && (this.vm.payMask = !0);

                          case 11:
                            this.vm = t, this.$apply();

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            audioChange: function(e) {
                var t = e.detail.value;
                this.BackgroundAudioManager.seek(t);
            },
            goTop: function(e) {
                _core.tools.onPageScroll();
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onPageScroll",
        value: function(e) {
            this.vm.isShowBtn = 0 != e.scrollTop, this.$apply();
        }
    }, {
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
                        return this.BackgroundAudioManager = wx.getBackgroundAudioManager(), this.$apply(), 
                        e.next = 6, _core.core.getNewInfo((0, _lodashGet2.default)(t, "id", 0), this);

                      case 6:
                        this.storeInfo();

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
            this.BackgroundAudioManager.pause(), console.log(this.BackgroundAudioManager);
        }
    }, {
        key: "getHotList",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getGoodByids(t);

                      case 2:
                        n = e.sent, this.vm.hostlist = n, this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "audioCreate",
        value: function(e, t) {
            var n = this;
            -1 == t && (this.BackgroundAudioManager.title = e.title, this.BackgroundAudioManager.src = e.audio, 
            console.log("赋值链接")), this.BackgroundAudioManager.onTimeUpdate(function() {
                n.vm.currentTime = n.format(n.BackgroundAudioManager.currentTime), n.vm.duration = n.format(n.BackgroundAudioManager.duration), 
                n.vm.moveTime = Math.floor(n.BackgroundAudioManager.currentTime), n.vm.maxTime = Math.floor(n.BackgroundAudioManager.duration), 
                n.$apply();
            }), this.BackgroundAudioManager.onPause(function() {
                console.log("暂停了"), n.vm.playAudio = !1;
            }), this.BackgroundAudioManager.onEnded(function() {
                n.vm.playAudio = !1, n.vm.currentTime = "00:00", n.vm.moveTime = 0, n.audioIndex = -1, 
                n.$apply();
            });
        }
    }, {
        key: "format",
        value: function(e) {
            return e = (Math.floor(e / 60) >= 10 ? Math.floor(e / 60) : "0" + Math.floor(e / 60)) + ":" + (e % 60 / 100).toFixed(2).slice(-2);
        }
    }, {
        key: "storeInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = _wepy2.default.$instance, e.t0 = (0, _lodashGet2.default)(t.globalData, "storeConfig", ""), 
                        e.t0) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 5, _core.core.getStoreConfig();

                      case 5:
                        e.t0 = e.sent;

                      case 6:
                        n = e.t0, this.vm.wxServer = n.storeInfo.funJoinModel.wxServer, this.$apply();

                      case 9:
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
            var e = this.vm;
            return {
                title: e.title,
                path: "/pages/news/news?id=" + e.id,
                imageUrl: e.slideimgs_fmt || e.img
            };
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(news, "pages/news/news"));