Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateCommentEntityAction = exports.setCommentEntitiesAction = void 0;

var t = require("../../../../../utils/redux-pattern");

exports.setCommentEntitiesAction = (0, t.createTypeAction)("orm/comment/setEntities"), 
exports.updateCommentEntityAction = (0, t.createTypeAction)("orm/comment/updateEntity");