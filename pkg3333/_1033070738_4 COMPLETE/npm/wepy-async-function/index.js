var g = require("./global.js");

g.Promise || (g.Promise = require("./../promise-polyfill/lib/index.js")), g.regeneratorRuntime || (g.regeneratorRuntime = require("./../regenerator-runtime/runtime.js"));