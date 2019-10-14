var e = require("./model/search.js"), t = require("../../core/api.js");

require("../../foundation/base/page.js")({
    pageActionConfig: require("./search.pageaction.js"),
    data: {
        inputShowed: !0,
        inputVal: "",
        result: []
    },
    onLoad: function(t) {
        this.model = new e();
        var a = decodeURIComponent(t.query), i = decodeURIComponent(t.placeHolder || "搜索商品");
        this.setData({
            inputVal: a,
            placeHolder: i
        }), this.onClickSearch({
            detail: {
                query: a
            }
        });
    },
    onClickSearch: function(e) {
        var t = this, a = e.detail.query, i = a + " ";
        t.setData({
            inputVal: i
        }, function() {
            t.setData({
                inputVal: a
            });
        }), t.model.reset(a), t.searchNextPage();
    },
    onClickSearchResult: function(e) {
        var a = e.currentTarget.dataset.item;
        t.navigateTo({
            url: "/portal/detail/detail?code=" + a.base.item_code
        });
    },
    onReachBottom: function() {
        this.model.allCount > this.model.result.length && this.onSearchNextPage();
    },
    onSearchNextPage: function() {
        this.searchNextPage();
    },
    searchNextPage: function(e) {
        var a = this;
        t.showLoading({
            title: "加载中"
        }), a.model.search({
            success: function() {
                a.setData({
                    result: a.model.result,
                    inputShowed: !1
                }), t.hideLoading();
            },
            fail: function() {
                e.fail && e.fail(), t.hideLoading();
            },
            complete: function() {
                0 == a.model.result.length ? a.setData({
                    footerTip: "没有找到相关商品"
                }) : a.model.allCount == a.model.result.length ? a.setData({
                    footerTip: "没有更多搜索结果"
                }) : a.setData({
                    footerTip: ""
                });
            }
        });
    },
    showInput: function() {
        this.setData({
            inputShowed: !0
        });
    },
    hideInput: function() {
        t.navigateBack();
    },
    clearInput: function() {
        this.setData({
            inputVal: "",
            inputShowed: !0
        });
    },
    inputTyping: function(e) {
        this.setData({
            inputVal: e.detail.value
        }), 0 == e.detail.value.length && this.setData({
            inputShowed: !0
        });
    }
});