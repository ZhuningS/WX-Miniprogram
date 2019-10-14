var e = require("../common-js/mall-category-list-1"), t = require("../../../function/moveTab/move-tabs");

Component({
    behaviors: [ e.mallCategorylist1 ],
    properties: {
        shopList: {
            type: Array
        },
        tabList: {
            type: Object
        },
        haveData: {
            type: Boolean
        },
        scrollLeft: {
            type: Number
        },
        appointmentCopy: {
            type: String
        },
        appointmentZeroCopy: {
            type: String
        },
        purchaseCopy: {
            type: String,
            value: {}
        },
        isApplyNewLogic: {
            type: Boolean,
            value: !1
        },
        status: {
            type: Number
        }
    },
    data: {
        scrollTop: 0,
        limitedType: 0,
        enablePublicNumber: 1
    },
    methods: {
        onBtnActiveTow: function(e) {
            var r = {
                id: e.currentTarget.dataset.id,
                index: e.currentTarget.dataset.index
            }, i = {};
            this.triggerEvent("btnactivetow", r, i), (0, t.moveTabsY)({
                event: e,
                ele: this
            });
        },
        onClickRetry: function(e) {
            var t = {}, r = {};
            this.triggerEvent("clickretry", t, r);
        },
        goSearch: function() {
            this.triggerEvent("goSearchPage");
        }
    },
    created: function() {},
    attached: function() {},
    ready: function() {},
    moved: function() {},
    detached: function() {}
});