var e = require("../../utils/enum.js");

module.exports = {
    name: "boutique-address",
    actionList: [ {
        type: e.PageActionType.AddressClickLocation,
        name: "onLocationClick"
    }, {
        type: e.PageActionType.AddressPhoneCall,
        name: "onPhoneCallClick"
    }, {
        type: e.PageActionType.AddressShare,
        name: "onShareAppMessage"
    }, {
        type: e.PageActionType.AddressClickContact,
        name: "onClickContact"
    } ]
};