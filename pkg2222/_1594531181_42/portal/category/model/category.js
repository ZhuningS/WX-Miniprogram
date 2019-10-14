function r(r) {
    if (Array.isArray(r)) {
        for (var e = 0, t = Array(r.length); e < r.length; e++) t[e] = r[e];
        return t;
    }
    return Array.from(r);
}

var e = require("../../../core/network.js");

require("../../../core/state.js"), require("../../../core/api.js");

module.exports = {
    _groups: [ {
        group_id: "99999",
        group_name: "全部商品"
    } ],
    _groupsEnd: new Set(),
    _groupItems: {},
    _brandLogoUrl: "",
    loadGroups: function(t) {
        var o = this;
        e.request({
            cgi: e.cgiSet.group,
            params: {},
            success: function(e) {
                if (e.group && e.group.group_list) {
                    var u = e.group.group_list.filter(function(r) {
                        return r && r.item_num;
                    }).map(function(r) {
                        return r.group_id = r.id, r;
                    });
                    o._groups.splice(1), o._groups[0].item_num = e.goods_total, o._groups = [].concat(r(o._groups), r(u)), 
                    o._brandLogoUrl = e.icon_url || "", t.success && t.success();
                } else t.fail && t.fail({
                    errcode: -1,
                    errmsg: "group_list empty"
                });
            },
            fail: function(r) {
                t.fail && t.fail(r);
            }
        });
    },
    loadGroupItems: function(r) {
        if (r) {
            var t = this, o = r.groupId || "99999", u = !r.groupId || "99999" == r.groupId, s = {
                page_index: r.pageIndex || 1,
                page_size: 20
            };
            u || (s.group_ids = [ r.groupId ]), s.order_field = r.orderField, s.order_type = r.orderType, 
            t._groupsEnd.delete(o), e.request({
                cgi: u ? e.cgiSet.allitems : e.cgiSet.groupitems,
                params: s,
                success: function(e) {
                    e.items && e.items.item_list ? t.appendGroupItems(r.groupId, e.items.item_list, s.page_index, s.page_size, e.items.all_count) : t._groupsEnd.add(o), 
                    r.success && r.success();
                },
                fail: function(e) {
                    r.fail && r.fail();
                },
                complete: r.complete
            });
        }
    },
    getGroups: function() {
        return Object.assign([], this._groups);
    },
    getBrandLogoUrl: function() {
        return this._brandLogoUrl;
    },
    getGroupItems: function(r) {
        return (r = r || "99999") in this._groupItems ? this._groupItems[r] : null;
    },
    appendGroupItems: function(r, e, t, o, u) {
        r = r || "99999", e = e || [], t = Math.max(t, 1);
        var s = this.getGroupItems(r) || [];
        1 == t ? s = [] : s.length >= t * o && s.splice((t - 1) * o), s = s.concat(e), this._groupItems[r] = s, 
        u && u <= s.length ? this._groupsEnd.add(r) : e.length < o && this._groupsEnd.add(r);
    },
    getGroupName: function(r) {
        r = r || "99999";
        var e = !0, t = !1, o = void 0;
        try {
            for (var u, s = this._groups[Symbol.iterator](); !(e = (u = s.next()).done); e = !0) {
                var i = u.value;
                if (i.group_id == r) return i.group_name;
            }
        } catch (r) {
            t = !0, o = r;
        } finally {
            try {
                !e && s.return && s.return();
            } finally {
                if (t) throw o;
            }
        }
        return "";
    },
    isGroupLoadAll: function(r) {
        return r = r || "99999", this._groupsEnd.has(r);
    }
};