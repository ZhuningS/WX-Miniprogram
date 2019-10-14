Component({
    properties: {
        type: String
    },
    data: {},
    methods: {
        onClick: function() {
            this.triggerEvent("onselectattachment", {
                type: this.data.type
            }, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});