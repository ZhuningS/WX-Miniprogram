var e = require("../../utils/enum.js");

module.exports = {
    name: "boutique-main",
    actionList: [ {
        type: e.PageActionType.MainClickBoutique,
        name: "onClickBoutique"
    }, {
        type: e.PageActionType.MainClickItemDetail,
        name: "onClickHeader",
        ext: [ {
            key: "type",
            from: e.ExtFrom.Args,
            keyPath: "currentTarget.dataset.data.type"
        } ]
    }, {
        type: e.PageActionType.MainClickAddressPhoneCall,
        name: "onAddressPhoneClick",
        ext: [ {
            key: "index",
            from: e.ExtFrom.Args,
            keyPath: "detail.index"
        } ]
    }, {
        type: e.PageActionType.MainClickAddressLocation,
        name: "onAddressLocationClick",
        ext: [ {
            key: "index",
            from: e.ExtFrom.Args,
            keyPath: "detail.index"
        } ]
    }, {
        type: e.PageActionType.MainShare,
        name: "onShareAppMessage"
    }, {
        type: e.PageActionType.MainClickContactPhone,
        name: "onContactPhoneClick"
    }, {
        type: e.PageActionType.MainClickContactCopyBiz,
        name: "onContactBizNameCopy"
    }, {
        type: e.PageActionType.MainClickMiniFeature,
        name: "onClickMiniFeature",
        ext: [ {
            key: "index",
            from: e.ExtFrom.Args,
            keyPath: "detail.index"
        }, {
            key: "title",
            from: e.ExtFrom.Args,
            keyPath: "detail.title"
        }, {
            key: "appId",
            from: e.ExtFrom.Args,
            keyPath: "detail.appId"
        }, {
            key: "searchId",
            from: e.ExtFrom.Property,
            keyPath: "model.data.searchId"
        } ]
    }, {
        type: e.PageActionType.MainClickManageProduct,
        name: "onClickManageProduct",
        ext: [ {
            key: "index",
            from: e.ExtFrom.Args,
            keyPath: "detail.index"
        }, {
            key: "name",
            from: e.ExtFrom.Args,
            keyPath: "detail.item.name"
        } ]
    }, {
        type: e.PageActionType.MainClickCustomShare,
        name: "onClickContact"
    }, {
        type: e.PageActionType.MainSaveBrandCard,
        name: "onClickSaveBrandCard"
    }, {
        type: e.PageActionType.MainClickMPArticle,
        name: "onClickMpArticle",
        ext: [ {
            key: "index",
            from: e.ExtFrom.Args,
            keyPath: "detail.index"
        }, {
            key: "title",
            from: e.ExtFrom.Args,
            keyPath: "detail.title"
        } ]
    } ]
};