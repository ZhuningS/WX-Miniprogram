var baseIsMap = require("./_baseIsMap.js"), baseUnary = require("./_baseUnary.js"), nodeUtil = require("./_nodeUtil.js"), nodeIsMap = nodeUtil && nodeUtil.isMap, isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;