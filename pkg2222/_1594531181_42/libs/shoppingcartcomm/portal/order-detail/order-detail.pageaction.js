var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/enum.js"));

module.exports = {
    name: "shoppingcart-order-detail",
    actionList: [ {
        type: e.default.PageActionType.GoToMallFromOrderDetail,
        name: "goToShopImpl",
        ext: [ {
            key: "appId",
            from: e.default.ExtFrom.Args,
            keyPath: "currentTarget.dataset.appid"
        } ]
    } ]
};