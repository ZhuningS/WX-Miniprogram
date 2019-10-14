var e = require("../common-js/mall-category-list-1"), t = require("../../../conf/conf").Conf.tagTypes;

Component({
    behaviors: [ e.mallCategorylist1 ],
    options: {},
    data: {
        tagTypes: t,
        limitedType: 0,
        enablePublicNumber: 1
    },
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
        templateId: {
            type: Number
        },
        isApplyNewLogic: {
            type: Boolean,
            value: !1
        },
        status: {
            type: Number
        }
    },
    methods: {
        onJumpToNextShare: function(e) {
            var t = {
                id: e.currentTarget.dataset.id
            }, a = {};
            this.triggerEvent("jumptonextshare", t, a);
        },
        onPraise: function(e) {
            var t = {
                goodsId: e.currentTarget.dataset.id,
                likeid: e.currentTarget.dataset.likeid,
                index: e.currentTarget.dataset.index,
                likeStatus: e.currentTarget.dataset.likestatus
            }, a = {};
            this.triggerEvent("praise", t, a);
        },
        goSearch: function() {
            this.triggerEvent("goSearchPage");
        }
    },
    created: function() {},
    attached: function() {},
    ready: function() {
        console.log("zzzzzzzzzzzzzzzzz", this.data.limitedType);
    },
    moved: function() {},
    detached: function() {}
});