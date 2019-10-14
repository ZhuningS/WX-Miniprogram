var t = require("../../../libs/mmuxwxappdevkit/foundation/base/model.js"), i = {
    startPolling: function() {
        var t = this;
        this._pStartPolling ? console.error("duplicate startPolling!") : (t._pStartPolling = !0, 
        t.load({
            params: t._pOptions.pollingParams(),
            success: function() {
                if (t._pStartPolling) {
                    var i = t._pOptions.success && t._pOptions.success();
                    t._pLastGetNewResults = !!i;
                }
            },
            fail: function() {
                t._pOptions.fail && t._pOptions.fail();
            },
            complete: function() {
                t._pOptions.complete && t._pOptions.complete(), t._pStartPolling && (t._pStartPolling = !1, 
                t._pTimer = setTimeout(function() {
                    t.startPolling();
                }, t.getNextPollingInterval()));
            }
        }));
    },
    stopPolling: function() {
        clearTimeout(this._pTimer), this._pStartPolling = !1;
    },
    getNextPollingInterval: function() {
        return this._pLastGetNewResults ? this._pInterval = 1 : this._pInterval = Math.min(this._pInterval + .5, 5), 
        1e3 * this._pInterval;
    }
};

module.exports = function(n) {
    var e = {
        _pTimer: 0,
        _pOptions: n,
        _pStartPolling: !1,
        _pInterval: 1,
        _pLastGetNewResults: !0
    };
    return Object.assign(t(n), e, i);
};