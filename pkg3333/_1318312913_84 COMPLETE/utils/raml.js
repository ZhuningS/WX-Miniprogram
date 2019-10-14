function t() {
    this.content = [], this.highlights = [], this.notes = [], this.paraNoteIds = [], 
    this.onHighlight = {
        paragraphId: null,
        paragraphTop: 0,
        paragraphOffset: 0,
        startSentenceIndex: null,
        selected: {},
        status: "none",
        nid: null,
        inputContent: null
    };
}

function e(t) {
    var e = JSON.parse(t);
    Array.isArray(e) || (e = [ e ]);
    for (var n = 0; n < e.length; n++) f(e[n]);
    return e;
}

function n(t) {
    for (var e = [], n = 0; n < t.length; n++) {
        var i = t[n];
        1 == i.type && e.push(i.image.source);
    }
    return e;
}

function i(t, e) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n], h = e[i.id];
        if (0 == i.type) {
            var s = o(i, e[i.id]);
            i.text.sentences = s.sentences;
        }
        if (h) {
            var r = 0, a = [], g = !1, l = [], c = !0, p = !1, u = void 0;
            try {
                for (var d, f = h[Symbol.iterator](); !(c = (d = f.next()).done); c = !0) {
                    var v = d.value, H = !0, y = !1, x = void 0;
                    try {
                        for (var I, m = v.notes[Symbol.iterator](); !(H = (I = m.next()).done); H = !0) {
                            var N = I.value;
                            if (r += N.similarCount, N.myself && (g = !0), (g || N.user.avatar) && N.content[N.content.length - 1].id === i.id) {
                                if (a.length < 3) {
                                    var b = !1, S = !0, k = !1, O = void 0;
                                    try {
                                        for (var w, P = a[Symbol.iterator](); !(S = (w = P.next()).done); S = !0) w.value.uid !== N.user.uid || (b = !0);
                                    } catch (t) {
                                        k = !0, O = t;
                                    } finally {
                                        try {
                                            !S && P.return && P.return();
                                        } finally {
                                            if (k) throw O;
                                        }
                                    }
                                    b || a.push(N.user);
                                }
                                N.annotation && N.annotation.trim().length > 0 && N.content && l.push(N);
                            }
                        }
                    } catch (t) {
                        y = !0, x = t;
                    } finally {
                        try {
                            !H && m.return && m.return();
                        } finally {
                            if (y) throw x;
                        }
                    }
                }
            } catch (t) {
                p = !0, u = t;
            } finally {
                try {
                    !c && f.return && f.return();
                } finally {
                    if (p) throw u;
                }
            }
            i.highlight = {
                users: a,
                annotationList: l,
                myself: g,
                number: r
            };
        } else delete e[i.id], i.highlight = null;
    }
}

function h(t) {
    for (var e = {}, n = 0; n < t.length; n++) r(t[n], e);
    return e;
}

function s(t, e) {
    if (void 0 !== t.content) for (var n = 0; n < t.content.length; n++) {
        var i = t.content[n], h = e[i.id];
        if (void 0 !== h) if (0 == i.type) for (var s = 0; s < h.length; s++) t.nid == h[s].notes[0].nid && (h[s].notes[0] = t); else t.nid == h[0].notes[0].nid && (h[0].notes[0] = t);
    }
}

function r(t, e) {
    if (void 0 !== t.content) for (var n = t.myself, i = 0; i < t.content.length; i++) {
        var h = t.content[i], s = h.id, r = e[s];
        if (void 0 === r && (r = [], e[s] = r), 0 == h.type) {
            for (var a = {
                tag: "highlight",
                myself: n,
                start: h.text.sentences[0].start,
                end: h.text.sentences[0].end,
                sentences: [],
                notes: [ t ]
            }, o = 0; o < r.length && !(a.end <= r[o].start); ) {
                if (a.start < r[o].end) return void (n ? (r[o].myself = !0, r[o].notes.splice(0, 0, t)) : !r[o].myself && t.user.avatar ? r[o].notes.splice(0, 0, t) : r[o].notes.push(t));
                o++;
            }
            r.splice(o, 0, a);
        } else 0 === r.length ? r.push({
            tag: "highlight",
            myself: n,
            notes: [ t ]
        }) : n ? (r[0].myself = !0, r[0].notes.splice(0, 0, t)) : !r[0].myself && t.user.avatar ? r[0].notes.splice(0, 0, t) : r[0].notes.push(t);
    }
}

function a(t, e) {
    if (void 0 !== t.content) for (var n = t.myself, i = 0; i < t.content.length; i++) {
        var h = t.content[i], s = e[h.id];
        if (void 0 !== s) if (0 == h.type) for (var r = 0; r < s.length; r++) t.nid == s[r].notes[0].nid && (s[r].notes.splice(0, 1), 
        0 === s[r].notes.length ? s.splice(r, 1) : n && (s[r].myself = !1)); else for (var a = 0; a < s[0].notes.length; a++) if (t.nid == s[0].notes[a].nid) {
            n && (s[0].myself = !1), s[0].notes.splice(a, 1);
            break;
        }
    }
}

function o(t, e) {
    var n = t.text.text, i = n.match(/[^。？！?!\n]*[。？！?!\n]/g), h = [];
    if (i) {
        for (var s = 0, r = 0; r < i.length; r++) {
            var a = i[r].replace(/\n/, " ");
            h.push({
                sentenceIndex: r,
                start: s,
                end: s + a.length,
                text: a,
                paragraphId: t.id
            }), s += a.length;
        }
        s < n.length && h.push({
            sentenceIndex: i.length,
            start: s,
            end: n.length,
            text: n.substring(s, n.length),
            paragraphId: t.id
        });
    } else h.push({
        sentenceIndex: 0,
        start: 0,
        end: n.length,
        text: n,
        paragraphId: t.id
    });
    return g(t, h, u(d([ h, t.text.markups, e ], 0, n.length), t.text.markups, e, h));
}

function g(t, e, n) {
    var i = t.text.text, h = {
        sentences: [],
        class: null
    };
    1 == t.blockquote ? h.class = "paragraph blockquote" : "aside" === i.linetype ? h.class = "paragraph aside" : h.class = "paragraph text";
    for (var s = null, r = 0; r < n.length; r++) {
        var a = n[r];
        null != s && s.sentenceIndex === a.sentenceIndex || ((s = e[a.sentenceIndex]).class = "sentence", 
        s.sentences = [], h.sentences.push(s)), s.sentences.push(a), l(a.markups, i.substring(a.start, a.end), a);
    }
    return h;
}

function l(t, e, n) {
    n.class = c(t), n.text = e;
}

function c(t) {
    for (var e = [], n = 0; n < t.length; n++) e.push(p(t[n]));
    return e.join(" ");
}

function p(t) {
    var e = t.tag;
    return "a" === e ? "sentence link" : "strong" === e || "em" === e ? "sentence bold" : "sub" === e ? "sentence sub" : "sup" === e ? "sentence sup" : void 0;
}

function u(t, e, n, i) {
    var h = [], s = {};
    s[t[0]] = 0;
    for (var r = 1; r < t.length; r++) h.push({
        start: t[r - 1],
        end: t[r],
        markups: []
    }), s[t[r]] = r;
    if (e) for (var a = 0; a < e.length; a++) for (var o = e[a], g = s[o.start], l = s[o.end], c = g; c < l; ++c) h[c].markups.push(o);
    if (n) for (var p = 0; p < n.length; p++) for (var u = n[p], d = s[u.start], f = s[u.end], v = d; v < f; ++v) {
        var H = u.notes[0];
        if (!H) break;
        for (var y = 0, x = 0; x < u.notes.length; x++) y += u.notes[x].similarCount;
        h[v].highlight = {
            nid: H.nid,
            user: {
                avatar: H.user.avatar,
                name: H.user.name
            },
            number: y,
            start: u.start
        }, u.myself ? h[v].highlight.myself = !0 : h[v].highlight.others = !0;
    }
    for (var I = 0; I < i.length; I++) for (var m = i[I], N = s[m.start], b = s[m.end], S = N; S < b; ++S) h[S].sentenceIndex = I;
    return h;
}

function d(t, e, n) {
    for (var i = [], h = 0; h < t.length; ++h) {
        var s = t[h];
        if (void 0 !== s) for (var r = 0; r < s.length; ++r) s[r].start >= e && s[r].start <= n && i.push(s[r].start), 
        s[r].end >= e && s[r].end <= n && i.push(s[r].end);
    }
    if (0 === (i = i.sort(function(t, e) {
        return t > e ? 1 : -1;
    })).length) return i;
    for (var a = [ i[0] ], o = 1; o < i.length; o++) i[o] !== a[a.length - 1] && a.push(i[o]);
    return a;
}

function f(t) {
    switch (t.type) {
      case 0:
        var e = t.text;
        if (1 == t.blockquote ? e.class = "paragraph blockquote" : "aside" === e.linetype ? e.class = "paragraph aside" : e.class = "paragraph text", 
        1 == t.blockquote) e.class = "paragraph blockquote"; else switch (e.linetype) {
          case "aside":
            e.class = "paragraph aside";
            break;

          case "h1":
            e.class = "paragraph h1";
            break;

          case "h2":
            e.class = "paragraph h2";
            break;

          case "h3":
            e.class = "paragraph h3";
            break;

          default:
            e.class = "paragraph text";
        }
        break;

      case 1:
        var n = t.image;
        if (n.thumb_source = v.genThumbUrl(n.source), n.width > 0) {
            4 * n.width < 750 ? (n.height = 2 * n.height, n.width = 2 * n.width) : (n.height = 750 * n.height / n.width, 
            n.width = 750);
        }
        break;

      case 3:
        t.media && t.media.title && (t.media.title = v.decodeParam(t.media.title));
    }
}

var v = require("util.js");

t.prototype.parseContent = function(t) {
    this.content = e(t), this.highlights = [], this.notes = [], this.paraNoteIds = [], 
    i(this.content, this.highlights);
}, t.prototype.setNotes = function(t, e) {
    this.highlights = [], this.paraNoteIds = [], this.notes = [].concat(e), this.highlights = h(e), 
    i(this.content, this.highlights);
    for (var n = 0; n < this.notes.length; ++n) this.attachParaNote(this.notes[n]);
    this.calcAverHighlightCount(), t.setData({
        content: this.content
    });
}, t.prototype.findNote = function(t) {
    for (var e = this.notes, n = 0; n < e.length; n++) if (e[n].nid == t) return e[n];
    return null;
}, t.prototype.addNote = function(t, e) {
    this.attachParaNote(e);
    var n = this.notes;
    return null != this.findNote(e.nid) ? s(e, this.highlights) : (n.splice(0, 0, e), 
    r(e, this.highlights)), i(this.content, this.highlights), this.calcAverHighlightCount(), 
    this.refreshPageNoteData(t, e), e;
}, t.prototype.removeNote = function(t, e) {
    for (var n, h = this.notes, s = 0; s < h.length; s++) if (h[s].nid === e) {
        n = h.splice(s, 1)[0];
        break;
    }
    return n && (this.detachParaNote(n), a(n, this.highlights), i(this.content, this.highlights), 
    this.calcAverHighlightCount(), this.refreshPageNoteData(t, n)), n;
}, t.prototype.refreshPageNoteData = function(t, e) {
    var n = {};
    if (e.content) {
        for (var i = 0; i < e.content.length; i++) {
            var h = e.content[i].id, s = this.getParagraphIndexById(h);
            s >= 0 && (n["content[" + s + "]"] = this.content[s]);
        }
        t.setData(n);
    }
}, t.prototype.attachParaNote = function(t) {
    if (t.content) for (var e = 0; e < t.content.length; ++e) {
        var n = t.content[e].id;
        this.paraNoteIds[n] || (this.paraNoteIds[n] = []);
        for (var i = !1, h = 0; h < this.paraNoteIds[n].length; ++h) if (this.paraNoteIds[n][h] === t.nid) {
            i = !0;
            break;
        }
        i || this.paraNoteIds[n].push(t.nid);
    }
}, t.prototype.detachParaNote = function(t) {
    if (t.content) for (var e = 0; e < t.content.length; ++e) {
        var n = t.content[e].id;
        this.paraNoteIds[n] || (this.paraNoteIds[n] = []);
        for (var i = 0; i < this.paraNoteIds[n].length; ++i) if (this.paraNoteIds[n][i] === t.nid) {
            this.paraNoteIds[n].splice(i, 1);
            break;
        }
    }
}, t.prototype.calcAverHighlightCount = function() {
    var t = this.content, e = 0, n = 0;
    for (var i in this.paraNoteIds) {
        var h = this.paraNoteIds[i];
        h.length > 0 && (e += 1, n += h.length);
    }
    for (var s = n / e, r = 0; r < t.length; r++) t[r].averHighlightCount = s;
}, t.prototype.getAllImages = function() {
    return n(this.content);
}, t.prototype.isStatusTalk = function() {
    return "talk" === this.onHighlight.status;
}, t.prototype.isStatusNone = function() {
    return "none" === this.onHighlight.status;
}, t.prototype.isStatusPending = function() {
    return "pending" === this.onHighlight.status;
}, t.prototype.isStatusCreate = function() {
    return "create" === this.onHighlight.status;
}, t.prototype.isStatusEdit = function() {
    return "edit" === this.onHighlight.status;
}, t.prototype.isStatusArticleNote = function() {
    return "article" === this.onHighlight.status;
}, t.prototype.isStatusAnnotation = function() {
    return "annotation" === this.onHighlight.status;
}, t.prototype.isOnHighlight = function() {
    return this.isStatusCreate() || this.isStatusEdit();
}, t.prototype.startArticleNote = function(t) {
    this.onHighlight.status = "article", t && (this.onHighlight.nid = t.nid, this.onHighlight.inputContent = t.annotation);
}, t.prototype.startTalk = function() {
    this.onHighlight.status = "talk", this.onHighlight.inputContent = "";
}, t.prototype.startAnnotationNote = function(t) {
    this.onHighlight.status = "annotation", this.onHighlight.nid = t.nid, this.onHighlight.inputContent = t.annotation;
}, t.prototype.startHighlightText = function(t, e, n, i) {
    this.startOnHighlight(t, e.paragraphId, e, n, i);
}, t.prototype.startHighlightImage = function(t, e, n) {
    this.startOnHighlight(t, e, null, null, n);
}, t.prototype.continueHighlightText = function(t, e) {
    if (this.isStatusCreate()) {
        this.adjustHighlightSelected(t, e);
        var n = {
            "onHighlight.selected": this.onHighlight.selected
        };
        t.setData(n);
    }
}, t.prototype.adjustHighlightSelected = function(t, e) {
    var n = this.getParagraphIndexById(this.onHighlight.paragraphId);
    if (!(n < 0)) {
        var i = this.content[n];
        if (i && i.text && i.text.sentences && null != this.onHighlight.startSentenceIndex) {
            this.onHighlight.selected = {}, this.onHighlight.paragraphOffset = 0;
            var h = this.onHighlight.startSentenceIndex, s = h + 1, r = 0;
            if (e > 0 ? (s = this.onHighlight.startSentenceIndex + e) > i.text.sentences.length && (r = s - i.text.sentences.length, 
            s = i.text.sentences.length) : e < 0 && (h = this.onHighlight.startSentenceIndex + e) < 0 && (r = h, 
            h = 0), this.onHighlight.selected[i.id] = {
                start: h,
                end: s
            }, 0 !== r) for (var a = r > 0 ? 1 : -1, o = n + r, g = n + a; g !== o && !(g < 0 || g >= this.content.length); g += a) {
                var l = this.content[g];
                if (!l.text) break;
                this.onHighlight.paragraphOffset += a, this.onHighlight.selected[l.id] = {
                    start: 0,
                    end: l.text.sentences.length
                };
            }
        }
    }
}, t.prototype.initHighlightSelected = function(t, e) {
    this.onHighlight.startSentenceIndex = null;
    for (var n = this.onHighlight.nid, i = 0; i < e.text.sentences.length; i++) for (var h = 0; h < e.text.sentences[i].sentences.length; h++) {
        var s = e.text.sentences[i].sentences[h];
        if (s.highlight && s.highlight.nid === n) {
            null == this.onHighlight.startSentenceIndex ? (this.onHighlight.startSentenceIndex = i, 
            this.offset += 1) : this.offset += 1;
            break;
        }
    }
    this.adjustHighlightSelected(t, 0);
}, t.prototype.cancelHighlight = function(t) {
    this.cancelOnHighlight(t);
}, t.prototype.startEditHighlight = function(t, e, n, i) {
    var h = this.getParagraphIndexById(e);
    if (!(h < 0)) {
        var s = this.content[h];
        if (s && s.text && s.text.sentences && n.highlight && n.highlight.myself) {
            this.onHighlight.paragraphId = e, i < 0 && (i = 0), this.onHighlight.paragraphTop = i, 
            this.onHighlight.status = "edit", this.onHighlight.nid = n.highlight.nid, this.initHighlightSelected(t, s);
            var r = {
                onHighlight: this.onHighlight
            };
            t.setData(r);
        }
    }
}, t.prototype.convertToEditHighlight = function(t, e) {
    this.onHighlight.status = "edit", this.onHighlight.nid = e;
    var n = {
        onHighlight: this.onHighlight
    };
    t.setData(n);
}, t.prototype.startOnHighlight = function(t, e, n, i, h) {
    h < 0 && (h = 0), this.onHighlight.paragraphId = e, this.onHighlight.paragraphTop = h, 
    this.onHighlight.isImage = !1;
    var s = this.getParagraphIndexById(e);
    if (!(s < 0)) {
        var r = this.content[s];
        if (1 == r.type) {
            var a = this.getMyNoteInParagraph(r);
            a ? (this.onHighlight.status = "edit", this.onHighlight.nid = a.nid) : this.onHighlight.status = "create", 
            this.onHighlight.isImage = !0;
        } else if (i.highlight && i.highlight.myself) {
            if (this.onHighlight.status = "edit", this.onHighlight.nid = i.highlight.nid, !r || !r.text || !r.text.sentences) return;
            this.initHighlightSelected(t, r);
        } else this.onHighlight.status = "create", this.onHighlight.startSentenceIndex = n.sentenceIndex, 
        this.adjustHighlightSelected(t, 0);
        var o = {
            onHighlight: this.onHighlight
        };
        t.setData(o);
    }
}, t.prototype.buildNoteContent = function(t) {
    var e = t.content[0], n = {
        id: e.id,
        text: {}
    };
    return e = [ {
        nodecontent: v.toJson(n),
        start: e.start,
        end: e.end,
        id: e.id
    } ], v.toJson(e);
}, t.prototype.finishOnHighlight = function() {
    var t;
    if (this.isStatusCreate()) {
        var e = this.getParagraphIndexById(this.onHighlight.paragraphId);
        if (!(e < 0)) {
            if (1 == this.content[e].type) return this.getImageNoteContent(t);
            if (null != this.onHighlight.startSentenceIndex) {
                var n = [], i = this.onHighlight.paragraphOffset >= 0 ? 0 : this.onHighlight.paragraphOffset, h = this.onHighlight.paragraphOffset >= 0 ? this.onHighlight.paragraphOffset : 0;
                for (i; i <= h; i++) {
                    var s = {
                        id: (t = this.content[e + i]).id,
                        type: t.type,
                        text: {
                            text: t.text.text
                        }
                    }, r = this.onHighlight.selected[t.id];
                    n.push({
                        nodecontent: v.toJson(s),
                        start: t.text.sentences[r.start].start,
                        end: t.text.sentences[r.end - 1].end,
                        id: t.id
                    });
                }
                return v.toJson(n);
            }
        }
    }
}, t.prototype.pendingOnHighlight = function() {
    this.onHighlight.status = "pending";
}, t.prototype.cancelOnHighlight = function(t) {
    this.resetOnHighlight();
    var e = {
        onHighlight: this.onHighlight
    };
    t.setData(e);
}, t.prototype.getImageNoteContent = function(t) {
    var e = [ {
        nodecontent: v.toJson({
            id: t.id,
            type: t.type,
            image: {
                width: t.image.width,
                height: t.image.height,
                inline: t.image.inline,
                source: t.image.source
            }
        }),
        start: 0,
        end: 0,
        id: t.id
    } ];
    return v.toJson(e);
}, t.prototype.getMyNoteInParagraph = function(t) {
    var e = this.highlights[t.id];
    if (e) for (var n = 0; n < e[0].notes.length; n++) {
        var i = e[0].notes[n];
        if (i.myself) return i;
    }
    return null;
}, t.prototype.getParagraphById = function(t) {
    var e = this.getParagraphIndexById(t);
    return e >= 0 ? this.content[e] : null;
}, t.prototype.getParagraphIndexById = function(t) {
    for (var e = this.content, n = 0; n < e.length; n++) if (e[n].id === t) return n;
    return -1;
}, t.prototype.getOnHighlightNote = function() {
    if (!this.onHighlight.nid || !this.onHighlight.paragraphId) return null;
    var t = this.highlights[this.onHighlight.paragraphId];
    if (!t) return null;
    for (var e = 0; e < t.length; e++) for (var n = 0; n < t[e].notes.length; n++) {
        var i = t[e].notes[n];
        if (i.nid === this.onHighlight.nid) return i;
    }
    return null;
}, t.prototype.resetOnHighlight = function() {
    this.onHighlight.status = "none", this.onHighlight.nid = null, this.onHighlight.paragraphId = null, 
    this.onHighlight.startSentenceIndex = null, this.onHighlight.paragraphOffset = 0, 
    this.onHighlight.selected = null;
}, module.exports = {
    parse: e,
    rebuildHighlights: function(t, e) {
        for (var n = [], i = 0; i < t.length; i++) {
            var h = t[i], s = h.start, r = h.end, a = {
                id: h.id,
                start: s,
                end: r
            };
            if (e) a.type = 1, a.image = {}; else {
                var o = {}, g = [];
                g.push({
                    tag: "highlight",
                    start: s,
                    end: r,
                    sentences: []
                }), o.sentences = g, o.class = "paragraph text", a.text = o, a.type = 0;
            }
            n.push(a);
        }
        return n;
    },
    extractHighlight: function(t) {
        if (!t) return null;
        var e;
        try {
            e = JSON.parse(t);
        } catch (t) {
            return null;
        }
        for (var n = [], i = 0; i < e.length; i++) {
            var h = e[i], s = JSON.parse(h.nodecontent), r = h.start, a = h.end;
            switch (s.type) {
              case 0:
                var o = [], g = s.text;
                g.text = g.text.replace(/\n/, " "), o.push({
                    text: g.text.substring(r, a),
                    tag: "highlight",
                    start: r,
                    end: a,
                    sentences: []
                }), g.sentences = o, g.class = "paragraph text";
                break;

              case 1:
                var l = s.image;
                l.width > 0 && (4 * l.width < 708 ? (l.height = 2 * l.height, l.width = 2 * l.width) : (l.height = 708 * l.height / l.width, 
                l.width = 708));
            }
            n.push(s);
        }
        return n;
    },
    extractImages: n,
    convertNotesToHighlights: h,
    addNoteToHighlights: r,
    removeNoteFromHighlights: a,
    buildTextParagraph: o,
    createRAML: function() {
        return new t();
    }
};