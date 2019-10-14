var i = require("../core/network.js");

module.exports = {
    accept: function(c) {
        i.request({
            cgi: i.cgiSet.acceptService,
            params: {
                cus_id: c.cus_id,
                biz_id: c.biz_id
            },
            success: c.success,
            fail: c.fail
        });
    },
    finish: function(c) {
        i.request({
            cgi: i.cgiSet.finishService,
            params: {
                cus_id: c.cus_id,
                biz_id: c.biz_id
            },
            success: c.success,
            fail: c.fail
        });
    }
};