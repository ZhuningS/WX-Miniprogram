function strictIndexOf(r, t, e) {
    for (var n = e - 1, f = r.length; ++n < f; ) if (r[n] === t) return n;
    return -1;
}

module.exports = strictIndexOf;