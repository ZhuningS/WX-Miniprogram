function baseTimes(e, r) {
    for (var s = -1, a = Array(e); ++s < e; ) a[s] = r(s);
    return a;
}

module.exports = baseTimes;