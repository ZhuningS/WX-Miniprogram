var freeGlobal = require("./_freeGlobal.js"), freeExports = "object" == typeof exports && exports && !exports.nodeType && exports, freeModule = freeExports && "object" == typeof module && module && !module.nodeType && module, moduleExports = freeModule && freeModule.exports === freeExports, freeProcess = moduleExports && freeGlobal.process, nodeUtil = function() {
    try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();

module.exports = nodeUtil;