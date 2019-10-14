function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function r(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function i(a, n) {
                try {
                    var o = t[a](n), u = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
                    i("next", e);
                }, function(e) {
                    i("throw", e);
                });
                e(u);
            }
            return i("next");
        });
    };
}

var i = e(require("../../libs/regenerator-runtime.js")), a = require("../../protocol/io"), n = e(require("../../utils/extend-page")), o = e(require("../../mixins/actions")), u = e(require("../../mixins/logger")), s = e(require("../../mixins/hook"));

Page((0, n.default)({
    data: {},
    type: void 0,
    id: void 0,
    onLoad: function(e) {
        this.type = e.type, this.id = e.id, this.init();
    },
    init: function() {
        var e = this;
        return r(i.default.mark(function t() {
            var r, n;
            return i.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if ("profile" !== e.type) {
                        t.next = 6;
                        break;
                    }
                    return t.next = 3, a.api.getV1("mina.app.userForm.get");

                  case 3:
                    r = t.sent, n = e.itemsToFields(r.data.fields), e.updateFields("完善个人资料", n);

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    updateFields: function(e, t) {
        e && wx.setNavigationBarTitle({
            title: e
        }), t && this.setData({
            fields: t
        });
    },
    changePicker: function(e) {
        console.log("change date", e);
        var r = this.selectItemIndex(e.currentTarget.id);
        this.setData(t({}, "fields[" + r + "].value", e.detail.value));
    },
    changeText: function(e) {
        var r = this;
        console.log("change text", e);
        var i = this.selectItemIndex(e.currentTarget.id), a = this.data.fields[i].type;
        "phone" === a && (a = "number"), this.showInputDialog("输入", "确定", "取消", function(e) {
            r.setData(t({}, "fields[" + i + "].value", e));
        }, a);
    },
    selectItemIndex: function(e) {
        for (var t = 0; t < this.data.fields.length; t++) if (this.data.fields[t].id === e) return t;
    },
    itemsToFields: function(e) {
        var t = [], r = !0, i = !1, a = void 0;
        try {
            for (var n, o = e[Symbol.iterator](); !(r = (n = o.next()).done); r = !0) {
                var u = n.value;
                if (u.value) if ("location" === u.type) u.value = u.value.split(","); else if ("options" === u.type) {
                    for (var s = -1, l = 0; l < u.options.length; l++) u.options[l] === u.value && (s = l);
                    u.value = s >= 0 ? s : void 0;
                }
                t.push(u);
            }
        } catch (e) {
            i = !0, a = e;
        } finally {
            try {
                !r && o.return && o.return();
            } finally {
                if (i) throw a;
            }
        }
        return t;
    },
    fieldsToParams: function(e) {
        var t = {}, r = !0, i = !1, a = void 0;
        try {
            for (var n, o = e[Symbol.iterator](); !(r = (n = o.next()).done); r = !0) {
                var u = n.value;
                if (void 0 !== u.value) {
                    var s = u.value;
                    "location" === u.type ? s = s instanceof Array ? s.join(",") : "" : "options" === u.type && (s = u.options[s]), 
                    void 0 !== s && (t[u.id] = s.trim());
                }
            }
        } catch (e) {
            i = !0, a = e;
        } finally {
            try {
                !r && o.return && o.return();
            } finally {
                if (i) throw a;
            }
        }
        return t;
    },
    submitForm: function(e) {
        var t = this;
        return r(i.default.mark(function r() {
            var n, o, u, s, l, d, c;
            return i.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    console.log("the form is ", e), n = !0, o = !1, u = void 0, r.prev = 4, s = t.data.fields[Symbol.iterator]();

                  case 6:
                    if (n = (l = s.next()).done) {
                        r.next = 24;
                        break;
                    }
                    if (!(d = l.value).required || void 0 !== d.value) {
                        r.next = 13;
                        break;
                    }
                    return t.showModalDialog(void 0, "需要填写所有必填字段", d.label + " 未填写。", "知道了", void 0, void 0), 
                    r.abrupt("return");

                  case 13:
                    if ("phone" !== d.type || !d.value || /^[0-9+]+$/.test(d.value.trim())) {
                        r.next = 18;
                        break;
                    }
                    return t.showModalDialog(void 0, "电话号码格式错误", "检查所输入的电话信息，仅支持数字和字符+。", "知道了", void 0, void 0), 
                    r.abrupt("return");

                  case 18:
                    if ("email" !== d.type || !d.value || /^[a-zA-Z0-9_\\-\\.\\+]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(d.value.trim())) {
                        r.next = 21;
                        break;
                    }
                    return t.showModalDialog(void 0, "邮件地址格式错误", "检查所输入的邮箱信息。", "知道了", void 0, void 0), 
                    r.abrupt("return");

                  case 21:
                    n = !0, r.next = 6;
                    break;

                  case 24:
                    r.next = 30;
                    break;

                  case 26:
                    r.prev = 26, r.t0 = r.catch(4), o = !0, u = r.t0;

                  case 30:
                    r.prev = 30, r.prev = 31, !n && s.return && s.return();

                  case 33:
                    if (r.prev = 33, !o) {
                        r.next = 36;
                        break;
                    }
                    throw u;

                  case 36:
                    return r.finish(33);

                  case 37:
                    return r.finish(30);

                  case 38:
                    return r.prev = 38, wx.showLoading(), c = t.fieldsToParams(t.data.fields), console.log("sumbit form", c), 
                    r.next = 44, a.api.getV1("mina.app.updateUserInfo", c);

                  case 44:
                    wx.navigateBack(), r.next = 50;
                    break;

                  case 47:
                    r.prev = 47, r.t1 = r.catch(38), t.showModalDialog(void 0, "保存失败", "暂时无法保存修改，请重试", "知道了", void 0, void 0);

                  case 50:
                    return r.prev = 50, wx.hideLoading(), r.finish(50);

                  case 53:
                  case "end":
                    return r.stop();
                }
            }, r, t, [ [ 4, 26, 30, 38 ], [ 31, , 33, 37 ], [ 38, 47, 50, 53 ] ]);
        }))();
    }
}, o.default, u.default, s.default));