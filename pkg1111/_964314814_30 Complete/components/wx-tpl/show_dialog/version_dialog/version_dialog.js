getApp();

Component({
    properties: {
        showVersionDialog: {
            type: Boolean,
            value: !1,
            observer: function(t, e) {
                t && this.setData({
                    showVersionDialog: t
                });
            }
        }
    },
    data: {
        extConf: {},
        showVersionDialog: !1
    },
    ready: function() {
        var t = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
        this.setData({
            extConf: t
        });
    },
    methods: {
        closeVersionDialog: function(t) {
            var e = t.currentTarget.dataset.state;
            this.triggerEvent("closeVersionDialog", {
                state: e
            });
        }
    }
});