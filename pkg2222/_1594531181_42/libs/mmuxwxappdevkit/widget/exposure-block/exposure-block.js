var e = require("../../core/sys.js"), t = require("./model/Checker.js");

Component({
    properties: {
        percentage: {
            type: Number,
            value: 0
        },
        alwaysCheck: {
            type: Boolean,
            value: !1
        },
        info: Object
    },
    data: {
        isDismiss: !1,
        isDone: !1,
        exposureFlag: !1
    },
    methods: {
        onCheck: function(t) {
            var a = this;
            if (a.data.isDismiss || !a.data.alwaysCheck && a.data.isDone) return !1;
            wx.createSelectorQuery().in(a).select(".exposure-wrap__invisible").boundingClientRect(function(s) {
                if (s) {
                    var o = Math.min(s.height, e.windowHeight), i = s.top + s.height - Math.max(s.bottom - e.windowHeight, 0) - Math.max(s.top, 0);
                    if (i <= 0) a.setData({
                        exposureFlag: !1
                    }); else {
                        var n = i / o;
                        if (n >= a.data.percentage) {
                            console.log("exposed[true], percent: ", n, s);
                            var r = a.data.exposureFlag;
                            a.setData({
                                isDone: !0,
                                exposureFlag: !0
                            }), a.onCallback({
                                percentage: n,
                                newExposure: !r,
                                info: a.data.info || {}
                            }), !a.data.alwaysCheck && t && t(a);
                        } else console.log("exposed[not yet], ", s), a.setData({
                            exposureFlag: !1
                        });
                    }
                }
            }).exec();
        },
        onCallback: function(e) {
            this.triggerEvent("onexposeevent", e || {}, {
                bubbles: !0,
                composed: !0
            });
        }
    },
    ready: function() {
        t.add(this);
    },
    detached: function() {
        this.setData({
            isDismiss: !0
        }), t.remove(this);
    }
});