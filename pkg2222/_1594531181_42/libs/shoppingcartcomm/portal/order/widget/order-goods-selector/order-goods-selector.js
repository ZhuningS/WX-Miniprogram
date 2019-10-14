Component({
    properties: {
        quantity: {
            type: Number,
            value: 1
        },
        maxvalue: {
            type: Number,
            value: 0
        }
    },
    data: {},
    methods: {
        minus: function() {
            this.data.quantity > 1 && this.triggerEvent("minus");
        },
        increase: function() {
            this.data.quantity < this.data.maxvalue && this.triggerEvent("increase");
        }
    }
});