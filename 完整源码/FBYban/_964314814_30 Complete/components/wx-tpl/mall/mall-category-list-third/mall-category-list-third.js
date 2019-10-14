var e = require("../common-js/mall-category-list-1"), t = require("../../../function/moveTab/move-tabs"), o = require("../../../conf/conf"), a = o.Conf.tagTypes, n = o.Conf.tagTypeNames;

Component({
    behaviors: [ e.mallCategorylist1 ],
    properties: {
        isApplyNewLogic: {
            type: Boolean,
            value: !1
        },
        shopList: {
            type: Array
        },
        tabList: {
            type: Object,
            observer: function(e) {
                0 == e.list.length && (e.list.unshift({
                    active: "active",
                    name: "全部"
                }), this.setData({
                    tabList: e
                }));
            }
        },
        showLoading: {
            type: Boolean
        },
        haveData: {
            type: Boolean
        },
        noData: {
            type: Boolean
        },
        loadingFail: {
            type: Boolean
        },
        status: {
            type: Number
        }
    },
    data: {
        scrollTop: 0,
        tagTypes: a,
        tagTypeNames: n,
        limitedType: 0,
        enablePublicNumber: 1
    },
    methods: {
        onBtnActiveTow: function(e) {
            var o = {
                id: e.currentTarget.dataset.id,
                index: e.currentTarget.dataset.index
            }, a = {};
            this.triggerEvent("btnactivetow", o, a), (0, t.moveTabsY)({
                event: e,
                ele: this
            });
        },
        onClickRetry: function(e) {
            var t = {}, o = {};
            this.triggerEvent("clickretry", t, o);
        },
        goSearch: function() {
            this.triggerEvent("goSearchPage");
        },
        bindload: function() {
            console.log("加载成功~");
        },
        binderror: function() {
            console.log("加载失败~");
        }
    },
    created: function() {},
    attached: function() {},
    ready: function() {},
    moved: function() {},
    detached: function() {}
});