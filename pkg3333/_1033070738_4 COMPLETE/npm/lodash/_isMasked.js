function isMasked(e) {
    return !!maskSrcKey && maskSrcKey in e;
}

var coreJsData = require("./_coreJsData.js"), maskSrcKey = function() {
    var e = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
}();

module.exports = isMasked;