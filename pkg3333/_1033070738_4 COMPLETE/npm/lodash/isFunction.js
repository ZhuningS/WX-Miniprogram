function isFunction(e) {
    if (!isObject(e)) return !1;
    var n = baseGetTag(e);
    return n == funcTag || n == genTag || n == asyncTag || n == proxyTag;
}

var baseGetTag = require("./_baseGetTag.js"), isObject = require("./isObject.js"), asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";

module.exports = isFunction;