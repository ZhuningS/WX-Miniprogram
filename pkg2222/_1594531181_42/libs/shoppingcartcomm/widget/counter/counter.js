var e = require("../../index.js");

Component({
    properties: {
        cost: {
            type: Number,
            value: 0
        },
        express: {
            type: Number,
            value: -1
        },
        quantity: {
            type: Number,
            value: 0
        },
        selectall: {
            type: Boolean,
            value: !1
        },
        disablepay: {
            type: Boolean,
            value: !1
        },
        payorder: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        phoneModel: ""
    },
    ready: function() {
        this.setData({
            phoneModel: e.Sys.phoneModel()
        });
    },
    methods: {
        onCountClicked: function() {
            this.data.disablepay || this.triggerEvent("oncountall", {}, {
                bubbles: !0,
                composed: !0
            });
        },
        onCheckClicked: function() {
            this.triggerEvent("onclickselectall", {}, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});