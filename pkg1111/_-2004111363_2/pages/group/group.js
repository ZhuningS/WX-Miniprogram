function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function o(n, i) {
                try {
                    var a = r[n](i), u = a.value;
                } catch (e) {
                    return void t(e);
                }
                if (!a.done) return Promise.resolve(u).then(function(e) {
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

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, r) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !r || "object" != typeof r && "function" != typeof r ? e : r;
}

function _inherits(e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    e.prototype = Object.create(r && r.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, r) {
        for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(r, t, o) {
        return t && e(r.prototype, t), o && e(r, o), r;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _com_slider_in = require("./../../components/com_slider_in.js"), _com_slider_in2 = _interopRequireDefault(_com_slider_in), _com_richtxt = require("./../../components/com_richtxt.js"), _com_richtxt2 = _interopRequireDefault(_com_richtxt), _com_goodValue = require("./../../components/com_goodValue.js"), _com_goodValue2 = _interopRequireDefault(_com_goodValue), _com_imSwitch = require("./../../components/com_imSwitch.js"), _com_imSwitch2 = _interopRequireDefault(_com_imSwitch), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _addr = require("./../../lib/addr.js"), _addr2 = _interopRequireDefault(_addr), _core = require("./../../lib/core.js"), group = function(e) {
    function r() {
        var e, t, o, n;
        _classCallCheck(this, r);
        for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
        return t = o = _possibleConstructorReturn(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(a))), 
        o.config = {
            navigationBarTitleText: "商品详情",
            usingComponents: {
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index"
            }
        }, o.$repeat = {}, o.$props = {
            comSlider: {
                "xmlns:v-bind": "",
                "v-bind:currentCom.sync": "vm_group"
            },
            comRichIn: {
                "v-bind:currentCom.once": "vm_group"
            },
            comValue: {
                "v-bind:vm.sync": "vm_group.value"
            },
            comIm: {
                "v-bind:false.sync": "false",
                "v-bind:vm.sync": "userInfo",
                "xmlns:v-on": "",
                "v-bind:wxServer.sync": "vm_group.wxServer"
            }
        }, o.$events = {
            comIm: {
                "v-on:getUser": "getUser"
            }
        }, o.components = {
            comSlider: _com_slider_in2.default,
            comRichIn: _com_richtxt2.default,
            comValue: _com_goodValue2.default,
            comIm: _com_imSwitch2.default
        }, o.data = {
            vm_group: {},
            groupId: 0,
            tab: [ "商品详情", "拼团规则" ],
            tabId: 0,
            userInfo: {},
            group_time: {},
            order_time: {},
            currentSkin: {}
        }, o.methods = {
            wxParseImgTap: function(e) {
                var r = e.currentTarget.dataset.src;
                _core.tools.preViewShow(r);
            },
            getUser: function() {
                function e(e) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.tools.getRnUser(r);

                          case 2:
                            this.userInfo = e.sent, this.$apply();

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            clickTab: function(e) {
                this.tabId = e;
            },
            joinGroup: function(e, r) {
                _core.core.formId(r.detail.formId), _core.tools.goNewPage("../group/groupInvite?id=" + e);
            },
            goBuy: function(e, r) {
                _core.core.formId(r.detail.formId), _core.tools.goNewPage("../group/groupOrder?groupid=" + e + "&isGroup=0&isGHead=0&gsid=0");
            },
            groupBuy: function(e, r) {
                _core.core.formId(r.detail.formId), _core.tools.goNewPage("../group/groupOrder?groupid=" + e + "&isGroup=1&isGHead=1&gsid=0");
            }
        }, n = t, _possibleConstructorReturn(o, n);
    }
    return _inherits(r, e), _createClass(r, [ {
        key: "onLoad",
        value: function(e) {
            this.groupId = (0, _lodashGet2.default)(e, "id", 0), this.$apply();
        }
    }, {
        key: "initGroupInfo",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var t, o, n, i = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = _wepy2.default.$instance, r) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 4, _core.tools.showModal("团购不存在！", !1);

                      case 4:
                        return _core.tools.goBack(1), e.abrupt("return");

                      case 6:
                        if ("" != (o = (0, _lodashGet2.default)(t.globalData, "storeConfig", ""))) {
                            e.next = 11;
                            break;
                        }
                        return e.next = 10, _core.core.getStoreConfig();

                      case 10:
                        o = e.sent;

                      case 11:
                        if (e.t0 = (0, _lodashGet2.default)(t.globalData, "userInfo", ""), e.t0) {
                            e.next = 16;
                            break;
                        }
                        return e.next = 15, _core.core.getUserInfo();

                      case 15:
                        e.t0 = e.sent;

                      case 16:
                        n = e.t0, _core.http.post(_addr2.default.GetGroupDetail, {
                            appId: t.globalData.appid,
                            groupId: r
                        }).then(function() {
                            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                var a, u, s;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        if (t.isok) {
                                            e.next = 5;
                                            break;
                                        }
                                        return e.next = 3, _core.tools.showModal(t.msg, !1);

                                      case 3:
                                        return _core.tools.goBack(1), e.abrupt("return");

                                      case 5:
                                        for (a = t.groupdetail, a.slideimgs = [], a.slideimgs_fmt = [], u = 0, s = a.ImgList.length; u < s; u++) a.slideimgs_fmt.push(a.ImgList[u].thumbnail), 
                                        a.slideimgs.push(a.ImgList[u].filepath);
                                        a.GroupUserList && a.GroupUserList.length > 0 && (a.GroupUserList = a.GroupUserList.slice(0, 5)), 
                                        a.GroupSponsorList && a.GroupSponsorList.length > 0 && (a.GroupSponsorList = a.GroupSponsorList.slice(0, 2)), 
                                        a.content_fmt = _core.tools.richChange(a.Description, i), a.ValidDateStart = a.ValidDateStart.replace(/-/g, "/"), 
                                        a.ValidDateEnd = a.ValidDateEnd.replace(/-/g, "/"), a.imswitch = o.storeInfo.funJoinModel.imSwitch, 
                                        a.wxServer = o.storeInfo.funJoinModel.wxServer, i.vm_group = a, i.userInfo = n, 
                                        i.$apply(), i.goodValue(r), i.groupCutDown(a);

                                      case 21:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, i);
                            }));
                            return function(r) {
                                return e.apply(this, arguments);
                            };
                        }());

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "goodValue",
        value: function(e) {
            var r = this, t = _wepy2.default.$instance, o = t.globalData.userInfo, n = {
                goodsid: e || 0,
                pageindex: 1,
                pagesize: 1,
                sel: -1
            };
            _core.http.post(_addr2.default.GetGoodsCommentList, {
                appid: t.globalData.appid,
                userid: o.Id,
                goodsid: n.goodsid,
                pageIndex: n.pageindex,
                pageSize: n.pagesize,
                haveimg: n.sel
            }).then(function(e) {
                var t = [];
                t = e.dataObj.list.length ? e.dataObj.list[0] : "", r.vm_group.value = t, r.$apply();
            });
        }
    }, {
        key: "onUnload",
        value: function() {
            clearInterval(this.timeInter);
        }
    }, {
        key: "onHide",
        value: function() {
            clearInterval(this.timeInter);
        }
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        this.initGroupInfo(this.groupId);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "groupCutDown",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var t, o, n, i = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t = this, Object.keys(r).length && (o = r.ValidDateStart, n = r.ValidDateEnd, t.timeInter = setInterval(function() {
                            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(a) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, _core.core.groupTime(o, n);

                                      case 2:
                                        return t.group_time = e.sent, e.next = 5, _core.core.initCountDown(r);

                                      case 5:
                                        t.order_time = e.sent, t.$apply();

                                      case 7:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, i);
                            }));
                            return function(r) {
                                return e.apply(this, arguments);
                            };
                        }(), 1e3));

                      case 2:
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
            var e = [ this.vm_group.GroupName, this.vm_group.ImgUrl ], r = e[0], t = e[1];
            return {
                title: r,
                path: "/pages/group/group?id=" + this.vm_group.Id,
                imageUrl: t,
                success: function(e) {
                    _core.tools.loading("转发成功", "success");
                }
            };
        }
    } ]), r;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(group, "pages/group/group"));