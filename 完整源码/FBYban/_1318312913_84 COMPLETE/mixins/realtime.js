!function(e) {
    e && e.__esModule;
}(require("../libs/regenerator-runtime.js"));

module.exports = {
    pendingMessages: [],
    onLoad: function() {
        getApp().globalData.websocket.subscribe(this.processSocketMessage);
    },
    onShow: function() {
        getApp().globalData.websocket.connect();
    },
    onUnload: function() {
        getApp().globalData.websocket.unsubscribe(this.processSocketMessage);
    },
    sendSocketMessage: function(e, s, t, o, n, a) {
        var i = getApp().globalData.websocket;
        i.isEnabled() || console.log("the websocket is disabled");
        var c = {
            type: e,
            id: s,
            appid: getApp().getConfig().wxAppid,
            from: a || getApp().getUserToken()
        };
        o && (c.filter = o), n && (c.to = n), t && (c.meta = t), getApp().globalData.websocket.isConnected() ? i.send(c) : (this.pendingMessages.push(c), 
        i.connect());
    },
    processSocketMessage: function(e, s) {
        if (console.log("realtime receive", e, s), "connected" === e) {
            this.sendSocketMessage("user.login", getApp().getUserId());
            var t = !0, o = !1, n = void 0;
            try {
                for (var a, i = this.pendingMessages[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                    var c = a.value;
                    getApp().globalData.websocket.send(c);
                }
            } catch (e) {
                o = !0, n = e;
            } finally {
                try {
                    !t && i.return && i.return();
                } finally {
                    if (o) throw n;
                }
            }
            this.pendingMessages.length = 0;
        } else "received" === e && s && this.receiveSocketMessage && this.receiveSocketMessage(s.id, s.type, s.user, s.meta);
    }
};