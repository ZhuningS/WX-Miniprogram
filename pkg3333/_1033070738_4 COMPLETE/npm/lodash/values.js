function values(e) {
    return null == e ? [] : baseValues(e, keys(e));
}

var baseValues = require("./_baseValues.js"), keys = require("./keys.js");

module.exports = values;