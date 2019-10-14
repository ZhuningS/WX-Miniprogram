var e = require("../../../../../core/api.js");

Component({
    properties: {
        product: Object
    },
    data: {},
    methods: {
        onItemClick: function(t) {
            var r = t.currentTarget.dataset.item;
            if (r) {
                var a = r.code || "0";
                e.navigateTo({
                    url: "/portal/detail/detail?code=" + a
                });
            }
        }
    }
});