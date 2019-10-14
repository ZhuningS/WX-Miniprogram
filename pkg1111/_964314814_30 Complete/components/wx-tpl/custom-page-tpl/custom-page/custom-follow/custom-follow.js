Component({
    properties: {},
    data: {
        status: 0
    },
    methods: {
        bindload: function(t) {
            console.log("555655555", t);
            var s = t.detail.status;
            this.setData({
                status: s
            });
        },
        binderror: function(t) {
            console.log("444444444", t);
            var s = t.detail.status;
            this.setData({
                status: s
            });
        }
    }
});