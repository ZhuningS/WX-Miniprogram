var e = require("../../core/api.js");

Component({
    properties: {
        rawAddress: {
            type: Object,
            observer: function(e) {
                this.fixShopAddress(e), this.setData({
                    address: e
                });
            }
        },
        index: Number,
        seperator: Boolean
    },
    data: {
        address: Object
    },
    methods: {
        onLocationClick: function() {
            e.openLocation && e.openLocation({
                latitude: this.data.address.latitude,
                longitude: this.data.address.longitude,
                name: this.data.address.store_name,
                address: this.data.address.address
            }), this.triggerEvent("openlocation", {
                index: this.properties.index
            });
        },
        onPhoneCallClick: function() {
            e.makePhoneCall && e.makePhoneCall({
                phoneNumber: this.data.address.contract_phone
            }), this.triggerEvent("phonecall", {
                index: this.properties.index
            });
        },
        fixShopAddress: function(e) {
            e && (e.city && e.address && e.address.includes(e.city) ? e.Address = e.address : e.Address = e.city + e.address);
        }
    }
});