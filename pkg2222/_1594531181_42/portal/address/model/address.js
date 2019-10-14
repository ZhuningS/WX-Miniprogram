function e(e) {
    this.state = t.init;
}

var s = require("../../../core/network.js"), t = require("../../../core/state.js");

require("../../../core/api.js");

e.prototype = {
    load: function(e) {
        var i = this;
        i.state != t.loaded ? (i.state = t.loading, s.request({
            cgi: s.cgiSet.address,
            params: {
                latitude: e.latitude,
                longitude: e.longitude
            },
            success: function(s) {
                Object.assign(i, s), i.state = t.loaded, e.success && e.success();
            },
            fail: function(s) {
                i.state = t.fail, e.fail && e.fail(s);
            }
        })) : e.success && e.success();
    }
}, module.exports = e;