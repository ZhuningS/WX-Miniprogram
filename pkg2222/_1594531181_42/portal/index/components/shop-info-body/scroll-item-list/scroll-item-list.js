require("../../../../../core/api.js");

Component({
    properties: {
        component: {
            type: Object,
            observer: function(t, e) {
                if (t && t.comm_products) {
                    var i = t.comm_products[0].aspect_ratio;
                    this.setData({
                        aspectRatio: (i / 1e4).toFixed(2)
                    });
                }
            }
        },
        widthValue: {
            type: Number,
            value: 750,
            observer: function(t, e) {
                this.onSizeChanged();
            }
        },
        heightValue: {
            type: Number,
            value: 250,
            observer: function(t, e) {
                this.onSizeChanged();
            }
        },
        aspectRatio: {
            type: Number,
            value: 2.5,
            observer: function(t, e) {
                this.onSizeChanged();
            }
        }
    },
    data: {
        width: "width:750rpx;",
        height: "height:300rpx;"
    },
    methods: {
        onSizeChanged: function() {
            this.setData({
                width: "width:" + this.data.widthValue + "rpx;",
                height: "height:" + (this.data.widthValue / this.data.aspectRatio).toFixed(2) + "rpx;"
            });
        },
        onItemClick: function(t) {
            var e = t.currentTarget.dataset.item, i = this.data.component.type || "";
            e && this.triggerEvent("onClickCb", {
                type: i,
                item: e
            });
        }
    }
});