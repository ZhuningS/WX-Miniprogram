var freeGlobal = require("./_freeGlobal.js"), freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")();

module.exports = root;