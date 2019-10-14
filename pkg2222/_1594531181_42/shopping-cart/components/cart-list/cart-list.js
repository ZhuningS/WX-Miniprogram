require("../../utils/api.js");

Component({
    properties: {
        appid: {
            type: String,
            value: "appid"
        },
        merchantList: {
            type: Array,
            value: []
        }
    }
});