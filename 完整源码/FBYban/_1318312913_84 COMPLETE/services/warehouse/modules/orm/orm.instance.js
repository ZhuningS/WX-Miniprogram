Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.orm = void 0;

var e = require("../../../../libs/redux-db/index"), r = require("./orm.schema");

exports.orm = (0, e.createDatabase)(r.ormSchema);