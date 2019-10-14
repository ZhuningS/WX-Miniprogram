var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
};

Component({
    relations: {
        "./goods-filter": {
            type: "parent",
            linked: function(e) {},
            linkChanged: function(e) {},
            unlinked: function(e) {}
        }
    },
    properties: {
        type: String,
        title: String,
        userinfo: Object,
        selected: Boolean,
        datasource: Array,
        order: {
            type: Number,
            value: 0
        },
        align: {
            type: Number,
            value: 0
        }
    },
    data: {},
    methods: {
        onClickItem: function() {
            var t = e({}, this.data);
            t.node = this, this.triggerEvent("onclickfilteritem", t, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});