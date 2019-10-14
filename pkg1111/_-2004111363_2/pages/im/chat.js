function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, s) {
                try {
                    var a = t[o](s), i = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), chat = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var s = arguments.length, a = Array(s), i = 0; i < s; i++) a[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "最近联系人"
        }, n.components = {}, n.data = {
            msg: "",
            showMore: !1,
            vm: {
                list: [],
                ispost: !1,
                loadall: !1,
                pageindex: 1,
                pagesize: 20,
                lastid: 0,
                lastids: ""
            },
            inputfocus: !1,
            tuserInfo: {},
            fuserInfo: {}
        }, n.methods = {
            clickChat: function() {
                this.showMore = !1;
            },
            hideMore: function() {
                this.showMore = !1;
                var e = this;
                setTimeout(function() {
                    e.inputfocus = !0, e.$apply();
                }, 200);
            },
            inputBlur: function() {
                this.inputfocus = !1;
            },
            toggleMore: function() {
                this.showMore = !this.showMore;
            },
            inputTxtMsg: function(e) {
                var t = e.detail.value || "";
                0 == t.replace(/\s/gi, "").length && (t = t.replace(/\s/gi, "")), this.msg = t;
            },
            clickToSend: function() {
                var e = this.msg;
                if (e = e.replace(/\s/gi, ""), 0 == e.length) return void _core.tools.showModal("不能发送空白消息", !1);
                this.sendMsg(0, e);
            },
            clickImgBtn: function() {
                var e = this;
                _core.tools.upload().then(function(t) {
                    if (t && "[object Array]" === Object.prototype.toString.call(t) && t.length > 0) for (var r = 0, n = t.length; r < n; r++) e.sendMsg(1, t[r]);
                });
            },
            previewImage: function(e) {
                var t = e, r = [];
                r.push(t), _core.tools.preViewShow(t, r);
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
                var r, n, o, s, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        if (r = (0, _lodashGet2.default)(t, "userid", ""), n = (0, _lodashGet2.default)(t, "nickname", ""), 
                        o = (0, _lodashGet2.default)(t, "headimg", ""), "" != r) {
                            e.next = 8;
                            break;
                        }
                        return _core.tools.goBack(1), e.abrupt("return");

                      case 8:
                        if (s = _wepy2.default.$instance, e.t0 = (0, _lodashGet2.default)(s.globalData, "userInfo", ""), 
                        e.t0) {
                            e.next = 14;
                            break;
                        }
                        return e.next = 13, _core.core.getUserInfo();

                      case 13:
                        e.t0 = e.sent;

                      case 14:
                        return a = e.t0, this.tuserInfo = {
                            userid: r,
                            nickname: n,
                            headimg: o
                        }, this.fuserInfo = {
                            userid: a.Id,
                            nickname: a.NickName,
                            headimg: a.HeadImgUrl
                        }, this.$apply(), _core.tools.setPageTitle(n), e.next = 21, this.customer(a);

                      case 21:
                        return e.next = 23, _core.core.AddContact(r);

                      case 23:
                        return e.next = 25, _core.core.getHistory(r, this.vm, this);

                      case 25:
                        this.sendMsg(2, "", 1);

                      case 26:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "customer",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getStoreConfig();

                      case 2:
                        r = e.sent, n = r.storeInfo.funJoinModel, o = r.storeInfo.kfInfo, n.imSwitch && n.sayHello && o && o.uid != t.Id && (this.vm.list.push({
                            Id: 0,
                            aId: 0,
                            appId: "",
                            createDate: "",
                            fuserId: o.uid,
                            ids: "",
                            isRead: 0,
                            msg: r.storeInfo.funJoinModel.helloWords,
                            msgType: 0,
                            roomId: 0,
                            sendDate: "",
                            state: 0,
                            storeId: 0,
                            tuserId: t.Id,
                            tuserType: 0,
                            updateDate: ""
                        }), this.$apply());

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "loadMore",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.getHistory(this.tuserInfo.userid, this.vm, this);

                      case 2:
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
            _wepy2.default.$instance.globalData.ws || _core.core.reConnect();
        }
    }, {
        key: "onHide",
        value: function() {
            this.sendMsg(2, "", 0);
        }
    }, {
        key: "onUnload",
        value: function() {
            this.sendMsg(2, "", 0);
        }
    }, {
        key: "sendMsg",
        value: function(e, t, r) {
            var n = this, o = _wepy2.default.$instance, s = (0, _lodashGet2.default)(o, "globalData.ws") || !1, a = (0, 
            _lodashGet2.default)(n.fuserInfo, "userid"), i = (0, _lodashGet2.default)(o, "globalData.appid"), u = (0, 
            _lodashGet2.default)(n.tuserInfo, "userid"), t = {
                appId: i,
                fuserId: a,
                tuserId: u,
                enterPage: "pages/im/chat",
                msgType: e,
                tuserType: 0,
                msg: t,
                ids: "",
                tempid: a + "_" + new Date().getTime(),
                isChat: r || 0
            };
            if (!s) return _core.core.reConnect(), _core.tools.showLoading("连接中"), void o.globalData.msgQueue.push(t);
            a && i && u && wx.sendSocketMessage({
                data: JSON.stringify(t),
                success: function() {},
                fail: function(e) {
                    o.globalData.msgQueue.push(t);
                },
                complete: function() {
                    n.msg = "", n.$apply();
                }
            });
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(chat, "pages/im/chat"));