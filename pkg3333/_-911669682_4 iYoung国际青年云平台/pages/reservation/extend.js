var t = require("../../utils/requestUtil"), e = require("../../utils/data");

getApp();

module.exports = {
    config: function(i) {
        t.get(e.duoguan_host_api_url + "/index.php/addon/DuoguanReservation/ReservationApi/config.html", {}, function(t) {
            i.setData({
                config: t
            });
        }, i);
    }
};