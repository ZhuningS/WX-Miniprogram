function baseIsNative(e) {
    return !(!isObject(e) || isMasked(e)) && (isFunction(e) ? reIsNative : reIsHostCtor).test(toSource(e));
}

var isFunction = require("./isFunction.js"), isMasked = require("./_isMasked.js"), isObject = require("./isObject.js"), toSource = require("./_toSource.js"), reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto = Function.prototype, objectProto = Object.prototype, funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

module.exports = baseIsNative;