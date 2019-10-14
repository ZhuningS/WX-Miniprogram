var t = require("../../utils/ajax.js"), e = require("../../utils/common.js"), o = require("../base.js"), i = (getApp(), 
function(t) {
    t.page, t.scope, t.cmpt;
    o.apply(this, arguments), this._moduleId = 0, this._ty = 1, this._pageNum = 1, this.init();
});

e.extend(i, o), Object.assign(i.prototype, {
    init: function() {
        var t, e, o = this, i = this.curCmpt;
        this._pageNum = 1, this.setData({
            moreLoading: !1,
            noMore: !1,
            goodsList: []
        });
        try {
            e = (t = i.content.dataset).block, o._moduleId = e.id || e.category_id, o._ty = t.ty || 1, 
            o._isPage = i.content.isPage || "0", o._showNum = i.content.showNum || 10;
        } catch (t) {
            return void o.setData({
                list: []
            });
        }
        o._fetch();
    },
    _loadMore: function() {
        var t = this, e = t.getData(), o = e.noMore, i = e.moreLoading;
        o || i || (t.setData({
            moreLoading: !0
        }), t._pageNum++, t._fetch());
    },
    _fetch: function() {
        var e = this, o = this._ty, i = void 0 === o ? 1 : o, s = this._moduleId, a = this._pageNum, n = this._isPage, r = this._showNum, g = e.getData().goodsList, c = "/openapi/CHome/getDataBlockContent", d = {
            module_id: s
        };
        2 == i && (c = "/openapi/CHome/categoryPage", d = {
            catId: s
        }), d.page = a, 0 == n && (d.page_size = r || 10), t.G(c, d, function(t) {
            var o = t.result, i = o.dataBlockContent || o.goodsList || [];
            e.setData({
                goodsList: g.concat(i),
                moreLoading: !1,
                noMore: i.length < 10
            });
        });
    }
}), i.props = {
    name: "goodsList"
}, module.exports = i;