function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, i) {
            function n(r, o) {
                try {
                    var a = t[r](o), c = a.value;
                } catch (e) {
                    return void i(e);
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
}), exports.default = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), _utils = require("./../lib/utils.js"), _com_pickerTime = require("./com_pickerTime.js"), _com_pickerTime2 = _interopRequireDefault(_com_pickerTime), com_form = function(e) {
    function t() {
        var e, i, n, r;
        _classCallCheck(this, t);
        for (var o = arguments.length, a = Array(o), c = 0; c < o; c++) a[c] = arguments[c];
        return i = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.$repeat = {
            currentCom: {
                com: "comPicker",
                props: ""
            }
        }, n.$props = {
            comPicker: {
                "xmlns:v-on": {
                    value: "",
                    for: "currentCom.items",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "xmlns:v-bind": {
                    value: "",
                    for: "currentCom.items",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "v-bind:vm.sync": {
                    value: "vm.time",
                    for: "currentCom.items",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "v-bind:formIndex.sync": {
                    value: "index",
                    type: "index",
                    for: "currentCom.items",
                    item: "item",
                    index: "index",
                    key: "key"
                }
            }
        }, n.$events = {
            comPicker: {
                "v-on:closeData": "closeData"
            }
        }, n.components = {
            comPicker: _com_pickerTime2.default
        }, n.data = {
            vm: {
                time: {},
                name: {},
                phone: {},
                pickIndex: {},
                pickTime: {},
                showPicker: {},
                showXia: {}
            }
        }, n.methods = {
            pickCancle: function(e) {
                this.vm.showXia[e] = !1, this.$apply();
            },
            pickShow: function(e) {
                this.vm.showXia[e] = !0, this.$apply();
            },
            inputFy: function(e, t) {
                this.vm.name[e] = t.detail.value, this.$apply();
            },
            inputFp: function(e, t) {
                this.vm.phone[e] = t.detail.value, this.$apply();
            },
            pickFunc: function(e, t) {
                this.vm.pickIndex[e] = parseInt(t.detail.value), this.vm.showXia[e] = !1, this.$apply();
            },
            sumbitFormFuc: function() {
                function e(e, i) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, i) {
                    var n, r, o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            _core.core.formId(i.detail.formId), e.t0 = regeneratorRuntime.keys(i.detail.value);

                          case 2:
                            if ((e.t1 = e.t0()).done) {
                                e.next = 10;
                                break;
                            }
                            if (n = e.t1.value, "" != (r = i.detail.value[n])) {
                                e.next = 8;
                                break;
                            }
                            return this.$emit("ShowToast", "信息未填写完整"), e.abrupt("return");

                          case 8:
                            e.next = 2;
                            break;

                          case 10:
                            return e.next = 12, _core.core.formRequest(JSON.stringify(i.detail.value), t);

                          case 12:
                            o = e.sent, o.isok ? (this.$emit("ShowToast", "提交成功"), Object.assign(this.vm, {
                                name: "",
                                phone: "",
                                pickIndex: {},
                                pickTime: {}
                            }), this.$apply()) : this.$emit("ShowToast", "提交失败");

                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            showData: function(e) {
                this.vm.showPicker[e] = !0, this.timeConfig();
            },
            closeData: function(e, t) {
                this.vm.pickTime[t] = e, this.vm.showPicker[t] = !1, this.$apply();
            }
        }, r = i, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "timeConfig",
        value: function() {
            this.vm.time = _utils.timeTools.formTimeSpan(), this.$apply();
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = com_form;