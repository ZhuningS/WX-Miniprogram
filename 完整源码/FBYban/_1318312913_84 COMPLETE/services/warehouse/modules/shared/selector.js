Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createEntitySelector = void 0;

var e = require("../../../../libs/reselect"), r = require("../orm/orm.instance");

exports.createEntitySelector = function() {
    for (var t = arguments.length, o = Array(t), c = 0; c < t; c++) o[c] = arguments[c];
    return e.createSelector.apply(void 0, [ function(e) {
        return r.orm.selectTables(e.orm);
    } ].concat(o));
};