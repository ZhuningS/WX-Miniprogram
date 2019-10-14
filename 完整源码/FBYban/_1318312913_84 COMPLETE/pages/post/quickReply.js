function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, i) {
            function n(a, r) {
                try {
                    var s = e[a](r), u = s.value;
                } catch (t) {
                    return void i(t);
                }
                if (!s.done) return Promise.resolve(u).then(function(t) {
                    n("next", t);
                }, function(t) {
                    n("throw", t);
                });
                t(u);
            }
            return n("next");
        });
    };
}

var i = t(require("../../libs/regenerator-runtime.js")), n = t(require("../../utils/extend-page")), a = t(require("../../mixins/actions")), r = t(require("../../mixins/logger")), s = t(require("../../mixins/hook"));

Page((0, n.default)({
    data: {
        tips: [ "" ]
    },
    ticket: void 0,
    previousPage: null,
    onLoad: function(t) {
        var n = this;
        return e(i.default.mark(function e() {
            var a;
            return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n.ticket = t.ticket, 0 !== (a = getApp().transfer().get(n.ticket).tips).length && n.setData({
                        tips: a
                    }), wx.setNavigationBarTitle({
                        title: ""
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, n);
        }))();
    },
    onTipInput: function(t) {
        var e = t.currentTarget.dataset.index, i = t.detail.value, n = this.data.tips;
        n[e] = String(i), this.setData({
            tips: n
        });
    },
    onTapDeleteTip: function(t) {
        var e = t.currentTarget.dataset.index, i = this.data.tips;
        i.splice(e, 1), this.setData({
            tips: i
        });
    },
    onTapAddTip: function() {
        var t = this.data.tips;
        t.push(""), this.setData({
            tips: t
        });
    },
    onConfirmTip: function() {
        var t = [], e = function(t) {
            return "" === t || new RegExp("^[ ]+$").test(t);
        };
        this.data.tips.forEach(function(i) {
            e(i) || t.push(i);
        }), getApp().transfer().callback(this.ticket, t), this.ticket = void 0, wx.navigateBack();
    }
}, a.default, r.default, s.default));