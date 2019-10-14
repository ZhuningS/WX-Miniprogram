Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.userWarehouseConfig = void 0;

var e = require("../../services/warehouse/index");

exports.userWarehouseConfig = {
    warehouseRefs: {
        userId: null
    },
    mapWarehouseToData: function(r, s) {
        return {
            user: (0, e.userEntitySelector)(r, s.userId)
        };
    }
};