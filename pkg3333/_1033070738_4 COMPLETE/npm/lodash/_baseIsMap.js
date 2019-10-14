function baseIsMap(e) {
    return isObjectLike(e) && getTag(e) == mapTag;
}

var getTag = require("./_getTag.js"), isObjectLike = require("./isObjectLike.js"), mapTag = "[object Map]";

module.exports = baseIsMap;