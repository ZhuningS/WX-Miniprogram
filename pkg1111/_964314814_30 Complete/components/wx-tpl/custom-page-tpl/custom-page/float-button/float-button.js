Component({
    properties: {
        floatButton: {
            type: Object,
            value: {
                buttonUrl: "https://xcximg.197.com/xcx/dianhua.png",
                buttonCircle: 0,
                buttonPosition: "leftbottom",
                jumpType: 0,
                jumpUrl: ""
            }
        }
    },
    ready: function() {},
    data: {},
    methods: {
        clickButton: function() {
            this.data.floatButton.jumpType;
            var t = this.data.floatButton.jumpUrl;
            wx.makePhoneCall({
                phoneNumber: t
            });
        }
    }
});