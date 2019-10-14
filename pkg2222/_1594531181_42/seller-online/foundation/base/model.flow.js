var t = require("../../../libs/mmuxwxappdevkit/foundation/base/model.js"), e = require("model.polling.js"), s = {
    init: function(t) {
        if (this.initOptions = t, this.clear(), this.success = t.success || function(t) {}, 
        !this.ready()) {
            var e = this;
            this.prepare().then(function() {
                e.hasStartPolling && e.start();
            });
        }
        return this;
    },
    start: function() {
        this.ready() && (this.initModel(), this.getNextModel.startPolling()), this.hasStartPolling = !0;
    },
    stop: function() {
        this.getNextModel && this.getNextModel.stopPolling(), this.hasStartPolling = !1;
    },
    clear: function() {
        this.stop(), delete this.getNextModel, delete this.getLastModel;
    },
    dealloc: function() {
        this.clear();
    },
    initModel: function() {
        if (!this.getLastModel || !this.getNextModel) {
            var s = this;
            this.getLastModel = t({
                cgi: this.cgi()
            }), this.getNextModel = e({
                cgi: this.cgi(),
                pollingParams: this.getNextParams(),
                success: function() {
                    var t = s.beforeCallback && s.beforeCallback(s.getNextModel.data, {
                        type: "next"
                    });
                    return s.onCallback("next"), s.afterCallback && s.afterCallback({
                        type: "next"
                    }), t;
                }
            });
        }
    },
    getLast: function() {
        var t = this;
        this.stop(), this.getLastModel.load({
            params: this.getLastParams(),
            success: function() {
                t.beforeCallback && t.beforeCallback(t.getLastModel.data, {
                    type: "last"
                }), t.onCallback("last"), t.afterCallback && t.afterCallback({
                    type: "last"
                });
            },
            complete: function() {
                t.start();
            }
        });
    },
    onCallback: function(t) {
        var e = this.pack();
        e.type = t || "update", this.success(e);
    }
};

module.exports = s;