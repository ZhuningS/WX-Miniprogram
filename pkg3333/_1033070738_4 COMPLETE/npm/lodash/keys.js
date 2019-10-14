function keys(e) {
    return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e);
}

var arrayLikeKeys = require("./_arrayLikeKeys.js"), baseKeys = require("./_baseKeys.js"), isArrayLike = require("./isArrayLike.js");

module.exports = keys;