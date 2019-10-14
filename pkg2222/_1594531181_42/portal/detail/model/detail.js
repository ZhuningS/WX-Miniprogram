function e(e) {
    this.code = e.code, this.state = i.init, this.scene = e.scene;
}

var s = require("../../../core/network.js"), i = require("../../../core/state.js"), c = require("../../../core/sys.js");

require("../../../core/api.js");

e.prototype = {
    clear: function() {
        this.state = i.init;
    },
    load: function(e) {
        var t = this;
        t.state != i.loaded ? (t.state = i.loading, s.request({
            cgi: s.cgiSet.itemdetail,
            params: {
                item_code: t.code
            },
            success: function(s) {
                c.isExperienceWhiteList = s.is_experience_whitelist, Object.assign(t, s), t.state = i.loaded, 
                e.success && e.success();
            },
            fail: function(s) {
                t.state = i.fail, e.fail && e.fail(s);
            }
        })) : e.success && e.success();
    },
    addGoods: function(e) {
        s.request({
            cgi: s.cgiSet.addgoods,
            params: {
                item_code: e.code,
                sku_id: e.skuid,
                quantity: 1
            },
            success: e.success,
            fail: e.fail
        });
    },
    reserveGoods: function(e) {
        s.request({
            cgi: s.cgiSet.reservegoods,
            params: {
                item_code: e.code,
                sku_id: e.skuid
            },
            success: e.success,
            fail: e.fail
        });
    },
    unReserveGoods: function(e) {
        s.request({
            cgi: s.cgiSet.unreservegoods,
            params: {
                item_code: e.code
            },
            success: e.success,
            fail: e.fail
        });
    }
}, module.exports = e;