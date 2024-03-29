function isIndex(e, n) {
    var r = typeof e;
    return !!(n = null == n ? MAX_SAFE_INTEGER : n) && ("number" == r || "symbol" != r && reIsUint.test(e)) && e > -1 && e % 1 == 0 && e < n;
}

var MAX_SAFE_INTEGER = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;

module.exports = isIndex;