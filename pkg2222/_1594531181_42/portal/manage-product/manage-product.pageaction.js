var e = require("../../utils/enum.js");

module.exports = {
    name: "boutique-manage-product",
    actionList: [ {
        type: e.PageActionType.ManageProductClickBuy,
        name: "onGotoDetail",
        ext: [ {
            key: "name",
            from: e.ExtFrom.Data,
            keyPath: "name"
        } ]
    } ]
};