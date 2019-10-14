function t() {
    this.rooms = wx.getStorageSync("_mock_rooms"), this.rooms || (this.rooms = {});
}

var o = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../libs/underscore"));

t.prototype.listRooms = function() {
    var t = o.default.values(this.rooms);
    return o.default.sortBy(t, function(t) {
        return t.latestJoinTime;
    });
}, t.prototype.createRoom = function(t) {
    var o = this.rooms[t];
    return o || (o = {
        id: t,
        latestJoinTime: new Date().getTime()
    }, this.rooms[t] = o), o;
}, t.prototype.enterRoom = function(t) {
    var o = this.rooms[t];
    if (o) return {
        id: o.id,
        totalUsers: {
            56: {
                uid: 56,
                name: "傅莹莹",
                avatar: "http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlb1o2YVRSY2xWWERaaWI0bDBZTURwWWlicHNJYXR1Y2V6ekNHY0EwajQxSTAxTHlpYmppYzJoMTg2aWNpY2hQclROT3dvU2pmMnZ5TlVIWlpKdy8w"
            }
        },
        waitingUids: [],
        userA: void 0,
        userB: void 0,
        status: "waiting"
    };
}, t.prototype.leaveRoom = function(t, e) {
    var i = this.rooms[t];
    i && (i.waitingUids = o.default.without(i.waitingUids, e));
}, t.prototype.save = function() {
    wx.setStorageSync("_mock_rooms", this.rooms);
}, module.exports = {
    createMock: function() {
        return new t();
    }
};