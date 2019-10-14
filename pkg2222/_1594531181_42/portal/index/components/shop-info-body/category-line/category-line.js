Component({
    properties: {
        styleObj: String,
        component: Object
    },
    data: {},
    methods: {
        onItemClick: function(t) {
            var e = t.currentTarget.dataset.item, n = this.data.component.type;
            e && this.triggerEvent("onClickCb", {
                type: n,
                item: e
            });
        }
    }
});