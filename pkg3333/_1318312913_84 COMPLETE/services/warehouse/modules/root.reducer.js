Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeRootReducer = void 0;

var e = require("../../../libs/redux"), r = require("./orm/event/index"), o = require("./orm/user/index"), u = require("./orm/comment/index"), m = require("./orm/index");

exports.makeRootReducer = function() {
    return (0, e.combineReducers)({
        orm: m.orm.combineReducers(r.ormEventReducer, o.ormUserReducer, u.ormCommentReducer)
    });
};