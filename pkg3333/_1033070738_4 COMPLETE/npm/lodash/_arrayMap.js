function arrayMap(r, a) {
    for (var n = -1, e = null == r ? 0 : r.length, l = Array(e); ++n < e; ) l[n] = a(r[n], n, r);
    return l;
}

module.exports = arrayMap;