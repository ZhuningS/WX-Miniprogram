function e() {
    this.pageSize = 20;
}

var s = require("../../../core/network.js");

require("../../../core/sys.js"), require("../../../core/api.js");

e.prototype = {
    reset: function(e) {
        this.query = e, this.page = 1, this.result = [];
    },
    search: function(e) {
        var t = this;
        s.request({
            cgi: s.cgiSet.search,
            params: {
                query: t.query,
                page_index: t.page,
                page_size: t.pageSize
            },
            success: function(s) {
                t.result = t.result.concat(s.items.item_list), t.allCount = s.items.all_count, e.success && e.success(), 
                t.page += 1;
            },
            fail: function(s) {
                e.fail && e.fail(s);
            },
            complete: e.complete
        });
    }
}, module.exports = e;