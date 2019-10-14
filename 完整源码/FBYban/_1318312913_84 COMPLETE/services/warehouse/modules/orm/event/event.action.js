Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateEventEntityAction = exports.setEventEntitiesAction = void 0;

var t = require("../../../../../utils/redux-pattern");

exports.setEventEntitiesAction = (0, t.createTypeAction)("orm/event/setEntities"), 
exports.updateEventEntityAction = (0, t.createTypeAction)("orm/event/updateEntity");