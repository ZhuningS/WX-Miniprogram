function includes(e, r, i, s) {
    e = isArrayLike(e) ? e : values(e), i = i && !s ? toInteger(i) : 0;
    var n = e.length;
    return i < 0 && (i = nativeMax(n + i, 0)), isString(e) ? i <= n && e.indexOf(r, i) > -1 : !!n && baseIndexOf(e, r, i) > -1;
}

var baseIndexOf = require("./_baseIndexOf.js"), isArrayLike = require("./isArrayLike.js"), isString = require("./isString.js"), toInteger = require("./toInteger.js"), values = require("./values.js"), nativeMax = Math.max;

module.exports = includes;