function baseFindIndex(e, n, r, d) {
    for (var t = e.length, i = r + (d ? 1 : -1); d ? i-- : ++i < t; ) if (n(e[i], i, e)) return i;
    return -1;
}

module.exports = baseFindIndex;