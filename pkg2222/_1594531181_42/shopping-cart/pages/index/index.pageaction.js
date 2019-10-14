var e = require("../../utils/enum.js");

module.exports = {
    name: "shoppingcart-index",
    actionList: [ {
        type: e.PageActionType.GoToConfirmOrderFromCartList,
        name: "goToConfirmOrder",
        ext: [ {
            key: "appId",
            from: e.ExtFrom.Args,
            keyPath: "detail.appId"
        }, {
            key: "path",
            from: e.ExtFrom.Args,
            keyPath: "detail.path"
        } ]
    }, {
        type: e.PageActionType.GoToGoodsDetailFromCartList,
        name: "goToGoodsDetail",
        ext: [ {
            key: "appId",
            from: e.ExtFrom.Args,
            keyPath: "detail.appId"
        }, {
            key: "path",
            from: e.ExtFrom.Args,
            keyPath: "detail.path"
        } ]
    }, {
        type: e.PageActionType.GoToOrderDetailFromOrderList,
        name: "goToOrderDetail",
        ext: [ {
            key: "order",
            from: e.ExtFrom.Args,
            keyPath: "detail.order"
        } ]
    } ]
};