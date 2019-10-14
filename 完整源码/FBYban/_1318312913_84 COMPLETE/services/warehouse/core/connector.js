Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.warehouseConnector = void 0;

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = require("../../../libs/mp-enhancers/index"), t = require("../../../utils/dev"), r = require("./storage"), a = require("../utils/shallow-equal"), n = Object.assign || function(e) {
    for (var o = 1; o < arguments.length; o++) {
        var t = arguments[o];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
}, u = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(o) {
    return void 0 === o ? "undefined" : e(o);
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : void 0 === o ? "undefined" : e(o);
}, s = (0, t.debugCreator)("warehouse");

exports.warehouseConnector = function(e) {
    var t = Boolean(e.mapWarehouseToData), i = e.mapWarehouseToData;
    if (t) {
        var f = function() {
            var t = r.warehouse.getState(), n = e.warehouseRefs || {}, u = i(t, n);
            if (e) if (u) {
                var f = Object.keys(u).reduce(function(o, t) {
                    return o[t] = e.data[t], o;
                }, {});
                if (e.data && !(0, a.shallowEqual)(f, u)) {
                    var c = (0, o.generateSetDataPatch)(f, u);
                    (0, o.isEmptyObject)(c) || (s("setDataPatch", e, f, c), e.setData(c));
                }
            } else s("page: " + e + ", mapWarehouseToData 的返回值不符合预期");
        };
        e.updateWarehouseRefs || (e.updateWarehouseRefs = function(o) {
            e && o && "object" === (void 0 === o ? "undefined" : u(o)) && (e.warehouseRefs = n({}, e.warehouseRefs, o), 
            f());
        });
        var c = r.warehouse.subscribe(f);
        return f(), c;
    }
};