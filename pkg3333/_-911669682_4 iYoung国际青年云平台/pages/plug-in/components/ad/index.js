getApp();

var t = require("../../../../utils/requestUtil"), i = require("../../../../utils/data");

Component({
    properties: {
        ad_type: {
            type: String,
            value: "",
            observer: function(t, i, e) {
                this.get_ad_api(t);
            }
        }
    },
    data: {
        this_is_show: !1,
        this_ad_id: ""
    },
    methods: {
        get_ad_api: function(e) {
            var s = this;
            t.get(i.duoguan_host_api_url + "/index.php/addon/DgPromotion/Api/getAdId.html", {
                ad_type: e
            }, function(t) {
                s.setData({
                    this_ad_id: t,
                    this_is_show: !0
                });
            }, this);
        }
    }
});