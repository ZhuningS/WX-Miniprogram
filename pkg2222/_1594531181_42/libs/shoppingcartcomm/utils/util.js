module.exports = {
    formatTime: function(e) {
        function t(e) {
            return e < 10 ? "0" + e : e;
        }
        e = parseInt(e, 10);
        var r = new Date(1e3 * e);
        return t(r.getFullYear()) + "-" + t(r.getMonth() + 1) + "-" + t(r.getDate()) + " " + t(r.getHours()) + ":" + t(r.getMinutes());
    }
};