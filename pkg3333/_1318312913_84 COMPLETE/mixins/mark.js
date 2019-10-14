function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function a(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(i, n) {
                try {
                    var o = t[i](n), s = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
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

var r = e(require("../libs/regenerator-runtime")), i = e(require("../libs/underscore")), n = require("../protocol/io"), o = require("../services/warehouse/index"), s = function() {
    var e = a(r.default.mark(function e(t, a) {
        var i, s, c, d, u, p, m, g, k, l, f, h, v;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                i = t.currentTarget.dataset, s = i.id, c = i.type, d = i.mid, u = i.eventId, p = i.docId, 
                m = i.pid, g = i.start, k = i.end, l = i.markId, f = a ? "v1/note.mark" : "v1/note.unmark", 
                e.t0 = c, e.next = "mark" === e.t0 ? 5 : "article" === e.t0 ? 9 : "shortVideo" === e.t0 ? 9 : "video" === e.t0 ? 9 : "image" === e.t0 ? 13 : "imageSet" === e.t0 ? 17 : 21;
                break;

              case 5:
                return e.next = 7, n.api.get(f, {
                    content_type: "mark",
                    mid: d,
                    docid: p,
                    pid: m,
                    start: g,
                    end: k,
                    mark_id: l
                });

              case 7:
                return h = "selection", e.abrupt("break", 21);

              case 9:
                return e.next = 11, n.api.get(f, {
                    content_type: c,
                    mid: d,
                    docid: p
                });

              case 11:
                return h = "item", e.abrupt("break", 21);

              case 13:
                return e.next = 15, n.api.get(f, {
                    content_type: "image",
                    mid: d,
                    pid: m,
                    url: s,
                    docid: p
                });

              case 15:
                return h = "image", e.abrupt("break", 21);

              case 17:
                return e.next = 19, n.api.get(f, {
                    content_type: "imageSet",
                    mid: d,
                    docid: p
                });

              case 19:
                return h = "item", e.abrupt("break", 21);

              case 21:
                o.eventAPI.setEventEntity(u, {
                    isMarked: a
                }), h && (v = (a ? "marked_" : "unmarked_") + h, getApp().getLogger().logAction(v, {
                    item: p,
                    item_type: "shortVideo" === c ? "video" : c
                }));

              case 23:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t, a) {
        return e.apply(this, arguments);
    };
}();

module.exports = {
    data: {
        marked: {},
        score: {},
        tipsOn: {}
    },
    mark: function(e) {
        var a, r = e.currentTarget.dataset, i = r.id, n = r.mid, o = r.magazineName, c = getApp().getConfig().actions.mark, d = (this.data.score[n] || 0) + 1;
        this.setData((a = {}, t(a, "marked." + i, !0), t(a, "score." + n, d), a)), getApp().globalData.score[n] = d;
        var u = wx.getStorageSync("tip_mark");
        u ? getApp().getConfig().enableMagazine && this.showToast(o ? o + " +1" : "+1") : (wx.setStorageSync("tip_mark", !0), 
        getApp().getConfig().enableMagazine ? this.showModalDialog(void 0, "这是你的第一条" + c + "！", "为你保存在「个人」页面了。" + (o ? "#" + o : "") + " 经验值+1", "我知道了") : this.showModalDialog(void 0, "这是你的第一条" + c + "！", "为你保存在「个人」页面，可以随时查看。", "我知道了")), 
        getApp().getConfig().enableMagazine && (this.showToast && u && this.showToast(o ? o + " +1" : "+1"), 
        this.appendExp && this.appendExp(n)), this.clearMarkTip(), s(e, !0);
    },
    unmark: function(e) {
        var a, r = e.currentTarget.dataset, i = r.id, n = r.mid, o = (this.data.score[n] || 0) - 1;
        this.setData((a = {}, t(a, "marked." + i, !1), t(a, "score." + n, o), a)), s(e, !1);
    },
    clearMarkTip: function() {
        this.setData({
            "tipsOn.mark": !1
        });
    },
    initMarked: function() {
        function e(e) {
            if (e.isMarked) switch (e.type) {
              case "mark":
                t["" + e.mark.pid + e.mark.start + e.mark.end] = !0;
                break;

              case "image":
                t[e.imageItem.pid || e.imageItem.image.encodedUrl] = !0;
                break;

              default:
                e.article && (t[e.article.docIdString] = !0);
            }
        }
        var t = {};
        i.default.each(this.data.events, function(t) {
            t.section ? i.default.each(t.section.events, function(t) {
                e(t);
            }) : e(t);
        }), this.setData({
            marked: t,
            "tipsOn.mark": !wx.getStorageSync("tip_mark")
        });
    }
};