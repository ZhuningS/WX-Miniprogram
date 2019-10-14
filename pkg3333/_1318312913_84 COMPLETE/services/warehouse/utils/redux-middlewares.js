Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.loggerMiddleware = void 0;

var o = require("../../../utils/dev");

exports.loggerMiddleware = function(e) {
    return function(r) {
        return function(t) {
            var n = void 0;
            if (!o.__DEBUG__) return r(t);
            try {
                console.groupCollapsed("Warehouse: dispatch action: " + t.type), console.group("Action:"), 
                console.info(JSON.stringify(t, "", "\t")), console.groupEnd(), console.groupCollapsed("Previous State:"), 
                console.info(e.getState().orm), console.groupEnd(), n = r(t), console.group("Next State:"), 
                console.info(e.getState().orm), console.groupEnd(), console.groupEnd();
            } catch (o) {
                n = r(t);
            }
            return n;
        };
    };
};