function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, o) {
            function n(r, i) {
                try {
                    var a = t[r](i), s = a.value;
                } catch (e) {
                    return void o(e);
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
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _com_payMask = require("./../../components/com_payMask.js"), _com_payMask2 = _interopRequireDefault(_com_payMask), _com_pickerTime = require("./../../components/com_pickerTime.js"), _com_pickerTime2 = _interopRequireDefault(_com_pickerTime), _utils = require("./../../lib/utils.js"), _core = require("./../../lib/core.js"), goodSub = function(e) {
    function t() {
        var e, o, n, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            },
            navigationBarTitleText: "预约"
        }, n.$repeat = {}, n.$props = {
            comPay: {
                "v-bind:vm.sync": "vm"
            },
            comPicker: {
                "xmlns:v-on": "",
                "xmlns:v-bind": "",
                "v-bind:vm.sync": "vm.time",
                "v-bind:formIndex.once": "1",
                name: "备注"
            }
        }, n.$events = {
            comPay: {
                "v-on:selChange": "selChange",
                "v-on:hideMask": "hideMask",
                "v-on:payMoney": "payMoney"
            },
            comPicker: {
                "v-on:closeData": "closeData"
            }
        }, n.components = {
            comPay: _com_payMask2.default,
            comPicker: _com_pickerTime2.default
        }, n.data = {
            vm: {},
            toast: {},
            currentSkin: {}
        }, n.methods = {
            selChange: function(e) {
                this.vm.selIndex = Number(e), this.$apply();
            },
            showMask: function(e) {
                var t = e.detail.value;
                return "" === t["姓名"] ? void _core.tools.ShowToast("请填写姓名", this) : "" === t["年龄"] ? void _core.tools.ShowToast("请填写年龄", this) : 0 === Number(t["年龄"]) ? void _core.tools.ShowToast("年龄不能为0", this) : "" === t["手机号码"] ? void _core.tools.ShowToast("请填写手机号", this) : "" === t["地址"] ? void _core.tools.ShowToast("请选择地址", this) : "" === t["预约时间"] ? void _core.tools.ShowToast("请选择预约时间", this) : (_core.core.formId(e.detail.formId), 
                this.tm = t, this.vm.payMask = !0, void this.$apply());
            },
            hideMask: function() {
                this.vm.payMask = !1, this.$apply();
            },
            sexChange: function(e) {
                this.vm.subInfo.index = Number(e.detail.value), this.$apply();
            },
            addrChange: function(e) {
                this.vm.subInfo.region = e.detail.value.join(""), this.$apply();
            },
            chooseLocation: function(e) {
                var t = this;
                wx.chooseLocation({
                    success: function(e) {
                        t.vm.subInfo.region = e.address, t.$apply();
                    }
                });
            },
            showData: function(e) {
                this.vm.showPicker[e] = !0, this.timeConfig(), this.$apply();
            },
            closeData: function(e, t, o) {
                o = o.split("/"), 0 != this.timeSub(this.vm.state, o) && (e && e.includes("请选择时间") && (e = ""), 
                this.vm.pickTime[t] = e, this.vm.showPicker[t] = !1, this.$apply());
            },
            payMoney: function(e) {
                var t = this.vm, o = {
                    datajson: JSON.stringify(this.tm),
                    remark: JSON.stringify({
                        goods: {
                            name: t.goodInfo.name,
                            id: t.goodInfo.id,
                            SpecInfo: t.goodInfo.specInfo,
                            attrSpacStr: t.goodInfo.attrSpacStr,
                            SpecImg: t.goodInfo.specImg
                        }
                    }),
                    formId: 0,
                    buyMode: t.selIndex
                };
                _core.core.submitForm(o, this);
            }
        }, r = o, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e, o) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, o) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        this.subGood(o);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "subGood",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var o, n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = _wepy2.default.$instance, e.next = 3, _core.core.valueMoney();

                      case 3:
                        return n = e.sent, e.t0 = {
                            index: 0,
                            sex: [ "男", "女" ],
                            region: ""
                        }, e.t1 = [], e.t2 = [], e.next = 9, _core.core.getSub();

                      case 9:
                        e.t3 = e.sent, e.t4 = (0, _lodashGet2.default)(t.preload, "tmp", ""), e.t5 = n.saveMoneySetUser.AccountMoneyStr, 
                        r = {
                            subInfo: e.t0,
                            pickTime: e.t1,
                            selIndex: 0,
                            payMask: !1,
                            showPicker: e.t2,
                            state: e.t3,
                            goodInfo: e.t4,
                            valuemoney: e.t5
                        }, r.state.openpay = (0, _lodashGet2.default)(r.state, "openpay", !1), r.state.openpay && (r.price = this.priceCom(r.state, r.goodInfo.price)), 
                        this.vm = r, this.$apply();

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "timeConfig",
        value: function() {
            this.vm.time = _utils.timeTools.formTimeSpan(), this.$apply();
        }
    }, {
        key: "priceCom",
        value: function(e, t) {
            return 0 == e.paytype ? e.paycount : Number(t).mul(Number(e.paycount).div(100));
        }
    }, {
        key: "timeSub",
        value: function(e, t) {
            var o = new Date(), n = new Date(t[0] + "/" + t[1] + "/" + t[2]), r = 0, i = 0;
            switch (e.timetype) {
              case "小时":
                return r = new Date(n.getTime() + 60 * t[3] * 60 * 1e3 + 60 * t[4] * 1e3), i = new Date(o.getTime() + 60 * e.timecount * 60 * 1e3), 
                !((i.getTime() - r.getTime()) / 24 / 60 / 60 / 1e3 > 0) || (_core.tools.ShowToast("请提前" + e.timecount + "小时预约", this), 
                !1);

              case "天":
                return r = n, i = new Date(o.getTime() + 24 * e.timecount * 60 * 60 * 1e3), !((i.getTime() - r.getTime()) / 24 / 60 / 60 / 1e3 > 0) || (_core.tools.ShowToast("请提前" + e.timecount + "天预约", this), 
                !1);

              case "分钟":
                return r = new Date(n.getTime() + 60 * t[3] * 60 * 1e3 + 60 * t[4] * 1e3), i = new Date(o.getTime() + 60 * e.timecount * 1e3), 
                !((i.getTime() - r.getTime()) / 24 / 60 / 60 / 1e3 > 0) || (_core.tools.ShowToast("请提前" + e.timecount + "分钟预约", this), 
                !1);
            }
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(goodSub, "pages/good/goodSub"));