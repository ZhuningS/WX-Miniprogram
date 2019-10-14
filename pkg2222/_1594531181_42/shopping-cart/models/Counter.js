var t = [], n = 0, r = 0, i = !1;

module.exports = {
    changeShop: function(n, r) {
        var i = c(t, n);
        return i && (i.list.forEach(function(t) {
            t.isCheck = r && u(t);
        }), i.isCheck = o(i)), t;
    },
    changeItem: function(n, r, i, a) {
        var l = c(t, n);
        if (l) {
            var f = e(l.list, r, i);
            f && (f.isCheck = a && u(f)), l.isCheck = o(l);
        }
        return t;
    },
    changeAll: function(n) {
        return t.forEach(function(t) {
            t.list.forEach(function(t) {
                t.isCheck = n && u(t);
            }), t.isCheck = o(t);
        }), t;
    },
    merge: function(n, r) {
        return n = n || [], r = t || [], n.forEach(function(t) {
            var n = c(r, t.appid);
            n && (t.list.forEach(function(t) {
                var r = e(n.list, t.item_code, t.sku_id);
                r && (t.isCheck = r.isCheck && u(t));
            }), t.isCheck = o(t), t.isAvailable = a(t));
        }), t = n;
    },
    getBill: function() {
        var n = [];
        return t.forEach(function(t) {
            t.list.forEach(function(t) {
                t.isCheck && u(t) && n.push(t);
            });
        }), n;
    },
    settle: function() {
        n = 0, r = 0, i = t.length > 0;
        var e = 0;
        t.forEach(function(t) {
            t.list.forEach(function(t) {
                u(t) && (e++, t.isCheck ? (n += t.total_price, r += t.quantity) : i = !1);
            });
        }), i = i && e > 0;
    },
    getStatus: function() {
        return this.settle(), {
            totalCost: n,
            totalQuantity: r,
            selectAll: i
        };
    }
};

var e = function(t, n, r) {
    if (!t || !t.length) return null;
    var i = !0, e = !1, u = void 0;
    try {
        for (var c, o = t[Symbol.iterator](); !(i = (c = o.next()).done); i = !0) {
            var a = c.value;
            if (a.item_code === n && a.sku_id === r) return a;
        }
    } catch (t) {
        e = !0, u = t;
    } finally {
        try {
            !i && o.return && o.return();
        } finally {
            if (e) throw u;
        }
    }
    return null;
}, u = function(t) {
    return t && t.stock_number > 0 && 1 === t.status && !t.is_pre_sale;
}, c = function(t, n) {
    if (!t || !t.length) return null;
    var r = !0, i = !1, e = void 0;
    try {
        for (var u, c = t[Symbol.iterator](); !(r = (u = c.next()).done); r = !0) {
            var o = u.value;
            if (o.appid === n) return o;
        }
    } catch (t) {
        i = !0, e = t;
    } finally {
        try {
            !r && c.return && c.return();
        } finally {
            if (i) throw e;
        }
    }
    return null;
}, o = function(t) {
    if (!t || !t.list) return !1;
    var n = t.list.length > 0, r = 0;
    return t.list.forEach(function(t) {
        u(t) && (n = n && t.isCheck, r++);
    }), n && r > 0;
}, a = function(t) {
    if (!t || !t.list) return !1;
    var n = 0;
    return t.list.forEach(function(t) {
        u(t) && n++;
    }), n > 0;
};