var e = require("../../utils/enum.js");

module.exports = {
    name: "boutique-search",
    actionList: [ {
        type: e.PageActionType.SearchDoSearch,
        name: "onClickSearch",
        ext: [ {
            key: "query",
            from: e.ExtFrom.Args,
            keyPath: "detail.query"
        } ]
    }, {
        type: e.PageActionType.SearchNextPage,
        name: "onSearchNextPage",
        ext: [ {
            key: "query",
            from: e.ExtFrom.Property,
            keyPath: "model.query"
        }, {
            key: "page",
            from: e.ExtFrom.Property,
            keyPath: "model.page"
        } ]
    }, {
        type: e.PageActionType.SearchClickResult,
        name: "onClickSearchResult",
        ext: [ {
            key: "itemCode",
            from: e.ExtFrom.Args,
            keyPath: "currentTarget.dataset.item.base.item_code"
        }, {
            key: "index",
            from: e.ExtFrom.Args,
            keyPath: "currentTarget.dataset.index"
        } ]
    } ]
};