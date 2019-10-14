function isPrototype(o) {
    var t = o && o.constructor;
    return o === ("function" == typeof t && t.prototype || objectProto);
}

var objectProto = Object.prototype;

module.exports = isPrototype;