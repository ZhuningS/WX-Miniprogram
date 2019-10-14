function baseIndexOf(e, s, n) {
    return s === s ? strictIndexOf(e, s, n) : baseFindIndex(e, baseIsNaN, n);
}

var baseFindIndex = require("./_baseFindIndex.js"), baseIsNaN = require("./_baseIsNaN.js"), strictIndexOf = require("./_strictIndexOf.js");

module.exports = baseIndexOf;