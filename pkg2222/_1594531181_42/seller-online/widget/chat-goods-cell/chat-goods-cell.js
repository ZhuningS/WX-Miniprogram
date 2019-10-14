require("../../utils/util.js");

Component({
    properties: {
        message: Object
    },
    data: {},
    methods: {
        onContentClick: function() {
            this.triggerEvent("onclickgoods", this.data.message.goods, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});