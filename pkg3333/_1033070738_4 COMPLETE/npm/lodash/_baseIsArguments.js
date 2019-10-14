function baseIsArguments(e) {
    return isObjectLike(e) && baseGetTag(e) == argsTag;
}

var baseGetTag = require("./_baseGetTag.js"), isObjectLike = require("./isObjectLike.js"), argsTag = "[object Arguments]";

module.exports = baseIsArguments;