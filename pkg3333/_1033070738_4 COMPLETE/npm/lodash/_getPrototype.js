var overArg = require("./_overArg.js"), getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;