function last(l) {
    var t = null == l ? 0 : l.length;
    return t ? l[t - 1] : void 0;
}

module.exports = last;