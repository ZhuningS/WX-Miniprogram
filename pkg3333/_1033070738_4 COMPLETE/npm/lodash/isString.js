function isString(e) {
    return "string" == typeof e || !isArray(e) && isObjectLike(e) && baseGetTag(e) == stringTag;
}

var baseGetTag = require("./_baseGetTag.js"), isArray = require("./isArray.js"), isObjectLike = require("./isObjectLike.js"), stringTag = "[object String]";

module.exports = isString;