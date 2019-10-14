var e = require("../../utils/enum.js");

module.exports = {
    name: "boutique-news",
    actionList: [ {
        type: e.PageActionType.NewsClick,
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