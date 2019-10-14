Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateUserEntityAction = exports.setUserEntitiesAction = void 0;

var e = require("../../../../../utils/redux-pattern");

exports.setUserEntitiesAction = (0, e.createTypeAction)("orm/user/setEntities"), 
exports.updateUserEntityAction = (0, e.createTypeAction)("orm/user/updateEntity");