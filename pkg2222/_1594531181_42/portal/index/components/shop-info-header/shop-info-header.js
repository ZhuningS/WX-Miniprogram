var e = require("../../../../core/network.js"), a = require("../../../../core/api.js");

Component({
    properties: {
        headerObj: Object,
        homepage: Boolean
    },
    data: {
        fromMain: !1
    },
    attached: function() {
        var e = getCurrentPages(), a = 0;
        for (a = 0; a < e.length && "portal/main/main" != e[e.length - a - 1].route; a++) ;
        a != e.length && this.setData({
            fromMain: !0
        });
    },
    methods: {
        onInfoClick: function(t) {
            var r = t.currentTarget.dataset.clickType;
            if (0 == r) if (this.properties.homepage) {
                if (this.data.fromMain) return;
                var n = getCurrentPages(), o = 0;
                for (o = 0; o < n.length && "portal/main/main" != n[n.length - o - 1].route; o++) ;
                o == n.length ? a.navigateTo({
                    url: "/portal/main/main"
                }) : a.navigateBack({
                    delta: o
                });
            } else a.navigateTo({
                url: "/portal/address/address?canvas_cookie=" + encodeURIComponent(e._canvasCookie || "")
            }); else 1 == r && this.data.headerObj && this.data.headerObj.phone_num && a.makePhoneCall && a.makePhoneCall({
                phoneNumber: this.data.headerObj.phone_num
            });
        }
    }
});