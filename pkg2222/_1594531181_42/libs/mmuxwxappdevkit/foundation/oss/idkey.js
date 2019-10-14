module.exports = {
    _queue: [],
    setup: function() {
        var e = this;
        setInterval(function() {
            e.realtimeReport();
        }, 6e5);
    },
    report: function(e, t, u, s) {
        this._queue.push({
            id: e,
            key: t,
            value: u,
            type: s
        });
    },
    realtimeReport: function() {
        var e = this;
        if (0 != e._queue.length) {
            var t = require("../../core/network.js");
            t.request({
                cgi: t.cgiSet.reportOss,
                params: {
                    oss_list: e._queue.map(function(e) {
                        return {
                            oss_id: e.id,
                            oss_key: e.key,
                            oss_value: e.value || 1,
                            type: e.type || 0
                        };
                    })
                }
            }), e._queue = [];
        }
    }
};