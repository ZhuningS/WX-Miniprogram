function isLength(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER;
}

var MAX_SAFE_INTEGER = 9007199254740991;

module.exports = isLength;