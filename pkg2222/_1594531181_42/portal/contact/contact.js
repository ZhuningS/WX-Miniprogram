var e = require("../../core/network.js"), a = (require("../../core/api.js"), require("../../core/sys.js")), o = require("../../foundation/base/model.js");

Page({
    data: {
        main: {},
        section: "",
        contactInfo: null,
        phoneModel: a.phoneModel(),
        supportInfo: {},
        messageInfo: {}
    },
    onLoad: function(a) {
        var s = this;
        s.model = o({
            cgi: e.cgiSet.main,
            useCache: !0
        });
        var t = JSON.safeParse(decodeURIComponent(a.message || "{}"));
        s.setData({
            section: a.section || "",
            messageInfo: t
        }), s.model.load({
            params: {
                longitude: 0,
                latitude: 0
            },
            success: function(e) {
                if (s.model.data.homepage) {
                    var a = null, o = JSON.safeParse(s.model.data.support_info_json);
                    s.model.data.homepage.data.forEach(function(e) {
                        "TYPE_CONTACT" === e.type && (!(a = e.contact_items[0]) || "has_kefu" in a || (a.has_kefu = !0));
                    }), s.setData({
                        main: s.model.data.homepage,
                        contactInfo: a,
                        supportInfo: o
                    });
                }
            }
        });
    }
});