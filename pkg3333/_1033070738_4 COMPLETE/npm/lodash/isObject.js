function isObject(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
}

module.exports = isObject;