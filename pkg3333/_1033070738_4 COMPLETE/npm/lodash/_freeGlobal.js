var freeGlobal = "object" == typeof global && global && global.Object === Object && global;

module.exports = freeGlobal || this;