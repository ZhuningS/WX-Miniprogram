function r(r, t) {
    if (!(r instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var t = function t(e, i) {
    r(this, t), this.obj = e, this.func = i;
};

module.exports = {
    setup: function(r) {
        this.Event = r.Event;
    },
    _register: {},
    register: function(r, e, i) {
        console.info("eventcenter register: ", r, e, i), r && (r in this._register || (this._register[r] = []), 
        this._register[r].push(new t(e, i || r)));
    },
    unregister: function(r, t) {
        if (console.info("eventcenter unregister: ", r, t), r && r in this._register) {
            var e = [], i = !0, n = !1, o = void 0;
            try {
                for (var s, a = this._register[r][Symbol.iterator](); !(i = (s = a.next()).done); i = !0) {
                    var f = s.value;
                    f.obj === t && e.push(f);
                }
            } catch (r) {
                n = !0, o = r;
            } finally {
                try {
                    !i && a.return && a.return();
                } finally {
                    if (n) throw o;
                }
            }
            var l = !0, u = !1, v = void 0;
            try {
                for (var h, c = e[Symbol.iterator](); !(l = (h = c.next()).done); l = !0) {
                    var y = h.value;
                    this._register[r].splice(this._register[r].indexOf(y), 1);
                }
            } catch (r) {
                u = !0, v = r;
            } finally {
                try {
                    !l && c.return && c.return();
                } finally {
                    if (u) throw v;
                }
            }
        }
    },
    unregisterAllEvents: function(r) {
        if (r) for (var t in this._register) {
            var e = [], i = !0, n = !1, o = void 0;
            try {
                for (var s, a = this._register[t][Symbol.iterator](); !(i = (s = a.next()).done); i = !0) {
                    var f = s.value;
                    f.obj === r && e.push(f);
                }
            } catch (r) {
                n = !0, o = r;
            } finally {
                try {
                    !i && a.return && a.return();
                } finally {
                    if (n) throw o;
                }
            }
            var l = !0, u = !1, v = void 0;
            try {
                for (var h, c = e[Symbol.iterator](); !(l = (h = c.next()).done); l = !0) {
                    var y = h.value;
                    this._register[t].splice(this._register[t].indexOf(y), 1);
                }
            } catch (r) {
                u = !0, v = r;
            } finally {
                try {
                    !l && c.return && c.return();
                } finally {
                    if (u) throw v;
                }
            }
        }
    },
    emit: function(r, t) {
        if (r && r in this._register) {
            var e = !0, i = !1, n = void 0;
            try {
                for (var o, s = this._register[r][Symbol.iterator](); !(e = (o = s.next()).done); e = !0) {
                    var a = o.value, f = a.obj, l = a.func;
                    f[l] && f[l](t);
                }
            } catch (r) {
                i = !0, n = r;
            } finally {
                try {
                    !e && s.return && s.return();
                } finally {
                    if (i) throw n;
                }
            }
        }
    }
};