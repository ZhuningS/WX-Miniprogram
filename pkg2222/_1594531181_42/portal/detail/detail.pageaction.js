var e = require("../../utils/enum.js");

module.exports = {
    name: "boutique-goods-detail",
    actionList: [ {
        type: e.PageActionType.DetailViewBanner,
        name: "onClickBannerImage",
        ext: [ {
            from: e.ExtFrom.Data,
            key: "itemCode",
            keyPath: "detail.item.base.item_code"
        } ]
    }, {
        type: e.PageActionType.DetailShowSku,
        name: "showSkuArea",
        ext: [ {
            from: e.ExtFrom.Data,
            key: "itemCode",
            keyPath: "detail.item.base.item_code"
        } ]
    }, {
        type: e.PageActionType.DetailShare,
        name: "onShareAppMessage",
        ext: [ {
            from: e.ExtFrom.Data,
            key: "itemCode",
            keyPath: "detail.item.base.item_code"
        } ]
    }, {
        type: e.PageActionType.DetailExposurePage,
        name: "onShow",
        ext: [ {
            from: e.ExtFrom.Property,
            key: "itemCode",
            keyPath: "model.code"
        } ]
    } ]
};