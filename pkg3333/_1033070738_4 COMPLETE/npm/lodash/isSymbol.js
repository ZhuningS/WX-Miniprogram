function isSymbol(e) {
    return "symbol" == typeof e || isObjectLike(e) && baseGetTag(e) == symbolTag;
}

var baseGetTag = require("./_baseGetTag.js"), isObjectLike = require("./isObjectLike.js"), symbolTag = "[object Symbol]";

module.exports = isSymbol;