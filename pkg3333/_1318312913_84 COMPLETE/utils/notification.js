Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.collectNotificationFormId = void 0;

var o = require("../protocol/io"), e = require("./dev");

exports.collectNotificationFormId = function(i) {
    console.log("collect notification form id", i), e.__DEBUG__ || o.api.get("v1/mina.formid.add", {
        form_id: i.detail.formId
    });
};