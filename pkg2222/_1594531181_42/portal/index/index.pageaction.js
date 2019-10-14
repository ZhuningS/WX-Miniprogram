var e = require("../../utils/enum.js");

module.exports = {
    name: "boutique-index",
    actionList: [ {
        type: e.PageActionType.IndexExposure,
        name: "onComponentExposeCallback",
        ext: [ {
            key: "codes",
            from: e.ExtFrom.Args,
            keyPath: "detail.info.codes"
        }, {
            key: "type",
            from: e.ExtFrom.Args,
            keyPath: "detail.info.type"
        } ]
    }, {
        type: e.PageActionType.IndexClick,
        name: "onComponentClickCallback",
        ext: [ {
            key: "codes",
            from: e.ExtFrom.Args,
            keyPath: "detail.codes"
        }, {
            key: "type",
            from: e.ExtFrom.Args,
            keyPath: "detail.type"
        } ]
    } ]
};