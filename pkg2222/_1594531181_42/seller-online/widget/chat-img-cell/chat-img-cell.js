var e = require("../../utils/util.js");

Component({
    properties: {
        message: {
            type: Object,
            observer: function(e) {
                if (e && e.image) {
                    var i = e.image.image_width || 0, t = e.image.image_height || 0;
                    if (0 == i || 0 == t) return;
                    var a = 280, r = a / t * i;
                    r > 300 && (a = t / i * (r = 300));
                    var g = e.image.local_image_url || e.image.image_url || "";
                    g.indexOf("shp.qpic.cn") >= 0 && (g += "/162"), this.setData({
                        width: r,
                        height: a,
                        url: g
                    });
                }
            }
        }
    },
    data: {
        width: 0,
        height: 0,
        url: ""
    },
    methods: {
        onContentClick: function() {
            this.triggerEvent("onclickimg", {
                image_url: this.data.url.replace("/162", "/0"),
                unique_id: e.getMsgUniqueId(this.data.message)
            }, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});