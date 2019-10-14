function isArrayLike(i) {
    return null != i && isLength(i.length) && !isFunction(i);
}

var isFunction = require("./isFunction.js"), isLength = require("./isLength.js");

module.exports = isArrayLike;