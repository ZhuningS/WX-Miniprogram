function baseValues(a, r) {
    return arrayMap(r, function(r) {
        return a[r];
    });
}

var arrayMap = require("./_arrayMap.js");

module.exports = baseValues;