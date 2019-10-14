function getNative(e, a) {
    var t = getValue(e, a);
    return baseIsNative(t) ? t : void 0;
}

var baseIsNative = require("./_baseIsNative.js"), getValue = require("./_getValue.js");

module.exports = getNative;