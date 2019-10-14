var e = require("../../core/api.js");

Component({
    properties: {
        desc: {
            type: String,
            value: ""
        },
        scopes: {
            type: Array,
            value: []
        },
        seperator: {
            type: Boolean,
            value: !0
        }
    },
    attached: function() {
        console.log(this.properties);
    },
    methods: {
        onClickContent: function(t) {
            var o = t.currentTarget.dataset.item;
            "link" == o.type || "phone" == o.type && (e.makePhoneCall({
                phoneNumber: o.content
            }), this.triggerEvent("phonecall"));
        }
    }
});