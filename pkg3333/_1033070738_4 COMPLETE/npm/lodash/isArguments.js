var baseIsArguments = require("./_baseIsArguments.js"), isObjectLike = require("./isObjectLike.js"), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, propertyIsEnumerable = objectProto.propertyIsEnumerable, isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(e) {
    return isObjectLike(e) && hasOwnProperty.call(e, "callee") && !propertyIsEnumerable.call(e, "callee");
};

module.exports = isArguments;