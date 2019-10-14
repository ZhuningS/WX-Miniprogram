var s = require("../core/storage.js");

require("../core/api.js");

module.exports = {
    flags: {
        showShoppingCarTips: 1
    },
    should: function(e) {
        return !((s.getData({
            key: "firstTipsFlag",
            sync: !0
        }) || 0) & e);
    },
    done: function(e) {
        var a = s.getData({
            key: "firstTipsFlag",
            sync: !0
        }) || 0;
        s.setData({
            key: "firstTipsFlag",
            data: a | e
        });
    }
};