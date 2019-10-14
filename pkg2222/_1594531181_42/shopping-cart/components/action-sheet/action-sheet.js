var t = require("../../utils/api.js"), n = require("../../utils/sys.js");

Component({
    properties: {
        bShow: {
            type: Boolean,
            value: !1,
            observer: function(t, n) {
                var e = this;
                1 == t ? (this.maskAnimation.opacity(.5).step(), this.contentAnimation.translateY(0).step(), 
                this.setData({
                    showActionSheet: t
                }, function() {
                    setTimeout(function() {
                        e.setData({
                            actionSheetAnimation: e.contentAnimation.export(),
                            actionSheetMaskAnimation: e.maskAnimation.export()
                        });
                    }, 50);
                })) : (this.maskAnimation.opacity(0).step(), this.contentAnimation.translateY("100%").step(), 
                this.setData({
                    actionSheetAnimation: e.contentAnimation.export(),
                    actionSheetMaskAnimation: e.maskAnimation.export()
                }, function() {
                    setTimeout(function() {
                        e.setData({
                            showActionSheet: t
                        });
                    }, 200);
                }));
            }
        },
        items: {
            type: Array,
            value: [ {
                type: "phone",
                content: "电话客服"
            }, {
                type: "contact",
                content: "在线客服"
            } ]
        },
        title: {
            type: String,
            value: ""
        }
    },
    data: {
        actionSheetAnimation: {},
        actionSheetMaskAnimation: {},
        showActionSheet: !1,
        phoneModel: n.phoneModel()
    },
    attached: function() {
        this.maskAnimation = t.createAnimation({
            duration: 200,
            timingFunction: "ease-in-out"
        }), this.contentAnimation = t.createAnimation({
            duration: 200,
            timingFunction: "ease-in-out"
        });
    },
    methods: {
        onClickMask: function() {
            this.triggerEvent("hide");
        },
        onClickItem: function(n) {
            var e = n.currentTarget.dataset, i = e.index, o = e.type, a = (e.content, e.userinfo);
            "phone" == o ? t.makePhoneCall({
                phoneNumber: a
            }) : "custom" == o && this.triggerEvent("customclick", {
                index: i,
                userinfo: a
            }), this.triggerEvent("hide");
        }
    }
});