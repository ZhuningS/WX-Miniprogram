function toString(r) {
    return null == r ? "" : baseToString(r);
}

var baseToString = require("./_baseToString.js");

module.exports = toString;