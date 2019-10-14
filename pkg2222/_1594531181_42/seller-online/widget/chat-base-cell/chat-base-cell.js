var e = require("../../utils/util.js");

Component({
    properties: {
        message: {
            type: Object,
            observer: function(t) {
                t && this.setData({
                    uniqueId: e.getMsgUniqueId(t),
                    time: t.ispagetop || t.create_time - t.last_create_time > 300 ? e.formatTime(1e3 * t.create_time) : ""
                });
            }
        },
        hasBubble: {
            type: Boolean,
            value: !0
        },
        hasLoading: {
            type: Boolean,
            value: !0
        },
        backgroundColor: {
            type: String,
            value: ""
        }
    },
    data: {
        time: "",
        uniqueId: ""
    },
    methods: {
        onClickStatus: function(e) {
            this.triggerEvent("onclickmsgstatus", {
                unique_id: this.data.uniqueId
            }, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});