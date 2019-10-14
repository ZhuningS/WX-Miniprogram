var e = new Set();

module.exports = {
    add: function(n) {
        if (n && "onCheck" in n) {
            var o = e.size <= 0;
            e.add(n), o && this.polling();
        } else console.warning("Invalid obj! No 'onCheck' callback.");
    },
    polling: function() {
        if (!(e.size <= 0)) {
            var n = this;
            setTimeout(function() {
                var o = !0, i = !1, t = void 0;
                try {
                    for (var l, r = e[Symbol.iterator](); !(o = (l = r.next()).done); o = !0) {
                        var a = l.value;
                        a && a.onCheck && !1 !== a.onCheck.apply(a, n.remove) || e.delete(a);
                    }
                } catch (e) {
                    i = !0, t = e;
                } finally {
                    try {
                        !o && r.return && r.return();
                    } finally {
                        if (i) throw t;
                    }
                }
                n.polling();
            }, 500);
        }
    },
    remove: function(n) {
        e.delete(n);
    }
};