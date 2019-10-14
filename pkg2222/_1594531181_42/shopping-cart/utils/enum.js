var r = Object.assign || function(r) {
    for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e];
        for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (r[t] = o[t]);
    }
    return r;
}, e = require("../../libs/mmuxwxappdevkit/utils/enum.js"), o = Object.assign({}, e);

o.PageActionType = r({}, o.PageActionType, {
    GoToConfirmOrderFromCartList: 10001,
    GoToGoodsDetailFromCartList: 10002,
    GoToOrderDetailFromOrderList: 10003,
    GoToMallFromOrderDetail: 10004
}), module.exports = o;