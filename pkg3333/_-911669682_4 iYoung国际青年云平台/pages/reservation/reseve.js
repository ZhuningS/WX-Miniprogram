function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../utils/util")), a = e(require("../../utils/requestUtil")), i = e(require("../../utils/underscore")), d = e(require("../../utils/data")), r = e(require("../../utils/form")), u = e(require("./extend.js"));

getApp();

Page({
    docId: 0,
    nums: null,
    form: null,
    data: {},
    onLoad: function(e) {
        var i = this;
        u.default.config(this), this.docId = e.ids, this.nums = e.nums, this.setData({
            total: e.total,
            earnest_total: e.earnest_total
        }), a.default.get(d.default.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/config.html", {
            ver: "2.0.0"
        }, function(e) {
            console.log(e), e.fields = e.fields || {};
            var a = e.advance || 0, d = new Date().getTime() + 60 * a * 1e3;
            i.setData({
                config: e,
                startDate: t.default.format(d, "yyyy-MM-dd"),
                startTime: t.default.format(d, "hh:mm"),
                endDate: t.default.format(d + 2592e6, "yyyy-MM-dd"),
                date: t.default.format(d, "yyyy-MM-dd"),
                time: t.default.format(d, "hh:mm")
            });
        });
        var s = this.form = new r.default(this, "form");
        a.default.get(d.default.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/fields.html", {
            ver: "2.0.0"
        }, function(e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t], i = {
                    required: a.rules.require,
                    items: a.options
                };
                "text" == a.type && (a.type = "string"), "textarea" == a.type && (a.type = "text"), 
                "images" == a.type && (i.count = 6), s.add(a.name, a.name, a.type, a.default, i);
            }
            s.render();
        }), wx.getLocation({
            success: function(e) {
                t.default.getMapSdk().reverseGeocoder({
                    location: {
                        latitude: e.latitude,
                        longitude: e.longitude
                    },
                    success: function(e) {
                        e = e.result, i.setData({
                            address: e.address,
                            latitude: e.location.lat,
                            longitude: e.location.lng
                        });
                    }
                });
            }
        });
    },
    bindDataChange: function(e) {
        var a = {}, i = e.currentTarget.dataset.bindName;
        if (a[i] = e.detail.value, "date" == i) {
            var d = new Date().getTime() + 60 * this.data.config.advance * 1e3, r = "00:00";
            e.detail.value == t.default.format(new Date(), "yyyy-MM-dd") && (r = t.default.format(d, "hh:mm")), 
            this.setData({
                startTime: r,
                time: r
            });
        }
        this.setData(a);
    },
    onChooseAddrTap: function() {
        var e = this;
        wx.chooseAddress({
            success: function(t) {
                e.setData({
                    true_name: t.userName,
                    mobile: t.telNumber,
                    address: t.provinceName + " " + t.cityName + " " + t.countyName + " " + t.detailInfo
                });
            }
        });
    },
    onPushSubmit: function(e) {
        if (a.default.pushFormId(e.detail.formId), !a.default.isLoading(this.pushRQId)) {
            var t = i.default.extend({
                doc_id: this.docId,
                nums: this.nums,
                form_id: e.detail.formId,
                ver: "2.0.0",
                isNewForm: !0,
                single_pay: this.data.config.single_pay
            }, e.detail.value, this.form.getSerializeValues());
            this.pushRQId = a.default.post(d.default.duoguan_host_api_url + "/index.php?s=/addon/DuoguanReservation/ReservationApi/reseve.html", t, function(e) {
                e ? wx.requestPayment(i.default.extend(e, {
                    success: function(e) {
                        wx.redirectTo({
                            url: "order-list"
                        });
                    },
                    fail: function(e) {
                        "requestPayment:fail cancel" == e.errMsg && wx.redirectTo({
                            url: "order-list"
                        });
                    }
                })) : wx.redirectTo({
                    url: "order-list"
                });
            });
        }
    }
});