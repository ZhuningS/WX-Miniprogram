var t = getApp();

Component({
    properties: {
        customMap: {
            type: Object,
            value: {
                iconType: 1,
                iconUrl: ""
            }
        }
    },
    data: {
        address: "",
        distance: "",
        orgName: "",
        latitude: "",
        longitude: ""
    },
    ready: function() {
        this.getData(), this.getDistancce();
    },
    methods: {
        getData: function() {
            var a = this;
            t.getOrgInfo(function(t, e) {
                e && a.setData({
                    latitude: e.lat,
                    longitude: e.lng,
                    address: e.address,
                    orgName: e.orgName
                }, function() {});
            });
        },
        getDistance: function(a) {
            var e = this;
            wx.request({
                url: t.globalData.shopMHost + "/xcx/base/getDistance",
                method: "post",
                data: a,
                complete: function() {},
                header: {
                    "content-type": "application/json"
                },
                success: function(t) {
                    if (t.data.data) {
                        var a = t.data.data;
                        e.data.distance = a > 1e3 ? (a / 1e3).toFixed(1) + "km" : -1 == a ? "" : +(a > 0 ? a : "-k") + "m";
                    } else e.data.distance = "";
                    e.setData(e.data);
                },
                fail: function() {}
            });
        },
        openMap: function() {
            var t = this;
            wx.openLocation({
                latitude: t.data.latitude,
                longitude: t.data.longitude,
                name: t.data.orgName,
                address: t.data.address,
                scale: 28
            });
        },
        getDistancce: function() {
            var a = this;
            wx.getLocation({
                type: "wgs84",
                success: function(e) {
                    var n = {
                        lat: e.latitude,
                        lng: e.longitude,
                        xcxId: t.globalData.xcxId
                    };
                    a.getDistance(n);
                }
            });
        }
    }
});