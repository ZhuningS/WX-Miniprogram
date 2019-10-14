Component({
    properties: {
        skuHidden: {
            type: Boolean,
            value: !0,
            observer: function(i, t) {
                0 == i ? (this.maskAnimation.opacity(.5).step(), this.boxAnimation.translateY(0).step()) : (this.maskAnimation.opacity(0).step(), 
                this.boxAnimation.translateY("100%").step()), this.setData({
                    skuMaskAnimation: this.maskAnimation.export(),
                    skuBoxAnimation: this.boxAnimation.export()
                });
            }
        }
    },
    data: {
        skuConfirmable: !1,
        skuMaskAnimation: {},
        skuBoxAnimation: {},
        skuBoxHeight: 100
    },
    attached: function() {
        var i = this;
        i.maskAnimation = wx.createAnimation({
            duration: 200,
            timingFunction: "ease-in-out"
        }), i.boxAnimation = wx.createAnimation({
            duration: 200,
            timingFunction: "ease-in-out"
        }), i.thumbShrinkAnimation = wx.createAnimation({
            duration: 500,
            timingFunction: "ease"
        }), i.priceShrinkAnimation = wx.createAnimation({
            duration: 500,
            timingFunction: "ease"
        }), i.skuBodyShrinkAnimation = wx.createAnimation({
            duration: 500,
            timingFunction: "ease"
        });
    },
    methods: {}
});