var e = require("./model/category.js"), t = require("../../core/api.js"), r = {
    to_load: 0,
    loading: 1,
    load_all: 2,
    load_err: 3
};

Page({
    data: {
        groups: [],
        groupNames: [],
        brandLogoUrl: "",
        groupId: "",
        groupName: "",
        groupImgUrl: "",
        lines: [],
        groupIndex: 0,
        pageIndex: 0,
        loadingStatus: r.to_load,
        footerTip: "",
        hasLoaded: !1,
        warningText: "",
        errorTitle: "",
        query: "",
        placeHolder: "",
        filterDropdownDs: [],
        filterDropdownSelected: !1,
        filterNewOrder: !1,
        filterPriceOrder: 0,
        isLoadAll: !1
    },
    onLoad: function(t) {
        var r = this, o = (t && t.groupId ? t.groupId : "").toString(), a = t && t.groupImgUrl ? decodeURIComponent(t.groupImgUrl) : "";
        this.setData({
            groupImgUrl: a,
            groupId: o,
            groupName: e.getGroupName(o),
            isLoadAll: o.length <= 0,
            placeHolder: "搜索全部商品"
        }), e.loadGroups({
            success: function() {
                var t = e.getGroups() && e.getGroups().map(function(e) {
                    return {
                        id: e.group_id,
                        title: e.group_name,
                        subtitle: e.item_num ? e.item_num + "件" : "",
                        userinfo: {
                            group_id: e.group_id
                        }
                    };
                });
                r.setData({
                    filterDropdownDs: t,
                    groups: e.getGroups(),
                    groupNames: e.getGroups().map(function(e) {
                        return e.group_name;
                    }),
                    brandLogoUrl: e.getBrandLogoUrl(),
                    groupName: e.getGroupName(o)
                });
                for (var a = 0; a < r.data.groups.length; a++) if (r.data.groups[a].group_id == o) {
                    r.setData({
                        groupIndex: a
                    });
                    break;
                }
            },
            fail: function() {}
        }), this.loadGroupItems();
    },
    loadGroupItems: function() {
        if (this.data.loadingStatus == r.to_load) {
            var o = this;
            t.showLoading({
                title: "加载中"
            }), this.setData({
                loadingStatus: r.loading
            });
            var a = "", i = "";
            this.data.filterNewOrder ? (a = "start_time", i = "desc") : 0 != this.data.filterPriceOrder && (a = "stock_price", 
            i = this.data.filterPriceOrder > 0 ? "asc" : "desc"), e.loadGroupItems({
                groupId: this.data.groupId,
                pageIndex: this.data.pageIndex + 1,
                orderField: a,
                orderType: i,
                success: function() {
                    var t = o.convertFromItems(e.getGroupItems(o.data.groupId)), a = o.data.pageIndex;
                    t && t.length > 0 ? (a++, o.setData({
                        pageIndex: a,
                        lines: t
                    }), o.onSuccess(r.to_load)) : a > 0 ? o.onSuccess(r.load_all, "暂无更多商品") : o.onFail("该分类暂未添加商品");
                },
                fail: function(e) {
                    o.onFail(null, "网络错误");
                },
                complete: function() {
                    t.hideLoading(), e.isGroupLoadAll(o.data.groupId) && o.onSuccess(r.load_all, "暂无更多商品");
                }
            });
        }
    },
    onShow: function() {
        t.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#FFFFFF"
        }), t.setNavigationBarTitle({
            title: this.data.groupId ? "" : "全部"
        });
    },
    onReachBottom: function() {
        this.loadGroupItems();
    },
    convertFromItems: function(e) {
        if (!e) return null;
        for (var t = [], r = 0; r < e.length; r++) {
            var o = this.convertItem(e[r]);
            o && t.push(o);
        }
        return t;
    },
    convertItem: function(e) {
        if (!e || !e.base || !e.stocks) return null;
        var t = "", r = "", o = !1;
        try {
            if (e.pics && (t = e.pics[0].pic_url || ""), e.stocks) {
                var a = 0, i = 268435455, d = 0, n = 16777215, l = !0, s = !1, u = void 0;
                try {
                    for (var c, p = e.stocks[Symbol.iterator](); !(l = (c = p.next()).done); l = !0) {
                        var g = c.value;
                        g.stock_price > a && (a = g.stock_price), g.stock_price < i && (i = g.stock_price), 
                        g.market_price > d && (d = g.market_price), g.market_price < n && (n = g.market_price);
                    }
                } catch (e) {
                    s = !0, u = e;
                } finally {
                    try {
                        !l && p.return && p.return();
                    } finally {
                        if (s) throw u;
                    }
                }
            }
            e.market && (o = e.market.pre_sale), o && (r = new Date(1e3 * e.base.sales_time).format("MM月dd日 hh:mm开始发售"));
        } catch (e) {}
        var f = function(e, t) {
            return e == t ? 0 == e ? "" : "¥" + (e / 100).toFixed(2) : "¥" + (e / 100).toFixed(2) + "~¥" + (t / 100).toFixed(2);
        };
        return {
            id: e.base.item_code,
            text: e.base.item_name,
            url: t,
            extra: f(i, a),
            extra2: f(n, d),
            saleDateTips: r,
            item: e
        };
    },
    onProductClick: function(e) {
        if (e && e.detail.base && e.detail.base.item_code) {
            var r = e.detail.base.item_code;
            t.navigateTo({
                url: "/portal/detail/detail?code=" + r
            });
        }
    },
    onProductClick2: function(e) {
        if (e && e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.item) {
            var r = e.currentTarget.dataset.item.id;
            t.navigateTo({
                url: "/portal/detail/detail?code=" + r
            });
        }
    },
    onGroupChanged: function(e) {
        var t = parseInt(e.detail.value || "0");
        if (t < this.data.groups.length) {
            var r = this.data.groups[t];
            this.setData({
                groupId: r.group_id,
                groupName: r.group_name
            }), this.loadGroupItems();
        }
    },
    onSuccess: function(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.setData({
            loadingStatus: e,
            hasLoaded: !0
        });
    },
    onFail: function(e, t) {
        this.setData({
            loadingStatus: e || t ? r.load_err : r.load_all,
            warningText: e || "",
            errorTitle: t || ""
        });
    },
    onClickSearch: function(e) {
        var r = e.detail.query, o = this;
        t.navigateTo({
            url: "/portal/search/search?query=" + encodeURIComponent(r) + "&placeHolder=" + encodeURIComponent(this.data.placeHolder)
        }), setTimeout(function() {
            o.setData({
                query: " "
            }, function() {
                o.setData({
                    query: ""
                });
            });
        }, 300);
    },
    onClickDropDownItem: function(t) {
        var r = t.detail.userinfo;
        r && r.group_id && (this.setData({
            groupId: r.group_id,
            groupName: e.getGroupName(r.group_id),
            filterNewOrder: !1,
            filterDropdownSelected: !1,
            filterPriceOrder: 0
        }), this.reloadGroupItems());
    },
    onClickFilterItem: function(e) {
        var t = e.detail, r = t.type, o = !1, a = this.data.filterNewOrder, i = this.data.filterPriceOrder, d = this.data.filterDropdownSelected;
        if ("dropdown" == r) d = !0; else if ("default" == r) o = !0, a = !this.data.filterNewOrder, 
        d = !1, i = 0; else if ("order" == r) {
            var n = [ 0, 1, -1, 0 ];
            o = !0, a = !1, d = !1, i = n[n.indexOf(t.order) + 1];
        }
        this.setData({
            filterNewOrder: a,
            filterPriceOrder: i,
            filterDropdownSelected: d
        }), o && this.reloadGroupItems();
    },
    onCloseDropDown: function() {
        this.setData({
            filterDropdownSelected: !1
        });
    },
    reloadGroupItems: function() {
        t.pageScrollTo({
            scrollTop: 0,
            duration: 0
        }), this.setData({
            loadingStatus: r.to_load,
            pageIndex: 0
        }), this.loadGroupItems();
    }
});