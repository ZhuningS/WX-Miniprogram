var e = require("../../core/sys.js");

Component({
    relations: {
        "./filter-item": {
            type: "child",
            linked: function(e) {},
            linkChanged: function(e) {},
            unlinked: function(e) {}
        }
    },
    properties: {
        items: {
            type: Array,
            value: []
        }
    },
    data: {
        phoneModel: e.phoneModel(),
        dropDownDs: [],
        bShowBody: !1,
        activeNode: null,
        dropdownAnim: {},
        maskFadeAnim: {}
    },
    methods: {
        onClickFilterItem: function(e) {
            var t = e.detail.node.__wxExparserNodeId__, i = e.detail.node.__wxWebviewId__, o = this.data.activeNode && this.data.activeNode.nodeId === t && this.data.activeNode.wvId === i, n = {
                type: e.detail.type,
                selected: e.detail.selected,
                order: e.detail.order,
                userinfo: e.detail.userinfo
            }, a = this;
            if ("dropdown" === e.detail.type && !o) {
                if (!e.detail.datasource || !e.detail.datasource.length) return;
                this.triggerEvent("onclickfilteritem", n), this.setData({
                    bShowBody: !0,
                    dropDownDs: e.detail.datasource,
                    activeNode: {
                        nodeId: t,
                        wvId: i
                    }
                });
                var d = Math.min(102 * e.detail.datasource.length, 663);
                return 7 == e.detail.datasource.length && (d = 714), void setTimeout(function() {
                    var e = wx.createAnimation({
                        duration: 300,
                        timingFunction: "ease"
                    }).height(d + "rpx").step(), t = wx.createAnimation({
                        duration: 300,
                        timingFunction: "ease"
                    }).opacity(.6).step();
                    a.setData({
                        dropdownAnim: e.export(),
                        maskFadeAnim: t.export()
                    }), setTimeout(function() {
                        a.setData({
                            dropdownAnim: {},
                            maskFadeAnim: {}
                        });
                    }, 300);
                });
            }
            this.triggerEvent("onclickfilteritem", n), this.data.bShowBody ? this.onMaskTouch() : this.resetBody();
        },
        onClickDropDownItem: function(e) {
            var t = e.currentTarget.dataset.userinfo;
            this.triggerEvent("onclickdropdownitem", {
                userinfo: t
            }), this.resetBody();
        },
        onMaskTouch: function() {
            var e = this, t = wx.createAnimation({
                duration: 300,
                timingFunction: "ease"
            }).height(0).step(), i = wx.createAnimation({
                duration: 300,
                timingFunction: "ease"
            }).opacity(0).step();
            e.setData({
                dropdownAnim: t.export(),
                maskFadeAnim: i.export()
            }), setTimeout(function() {
                e.resetBody();
            }, 300);
        },
        resetBody: function() {
            this.setData({
                bShowBody: !1,
                dropDownDs: [],
                activeNode: null
            }), this.triggerEvent("onclosedropdown");
        }
    }
});