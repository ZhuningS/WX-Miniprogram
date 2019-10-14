Component({
    properties: {
        styleObj: String,
        lineData: Object
    },
    data: {},
    methods: {
        onItemClick: function(t) {
            var e = t.currentTarget.dataset.item;
            e && this.triggerEvent("onClickCb", e);
        }
    }
});