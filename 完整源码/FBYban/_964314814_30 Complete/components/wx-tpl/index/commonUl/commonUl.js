Component({
    properties: {
        imgData: {
            type: Object,
            value: "",
            observer: function(t, e) {}
        },
        dataText: {
            type: String,
            value: "",
            observer: function(t, e) {}
        },
        url: {
            type: String,
            value: "",
            observer: function(t, e) {
                this.setData({
                    url: t
                });
            }
        }
    },
    data: {
        url: ""
    },
    methods: {
        openAll: function() {
            this.data.url ? wx.navigateTo({
                url: this.data.url
            }) : this.triggerEvent("openall");
        }
    }
});