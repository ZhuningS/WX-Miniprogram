function e() {
    this.handlers = [], this.enabled = !1, this.status = -1;
}

e.prototype.subscribe = function(e) {
    this.handlers.push(e);
}, e.prototype.unsubscribe = function(e) {
    var t = this.handlers.indexOf(e);
    t >= 0 && this.handlers.splice(t, 1);
}, e.prototype.connect = function() {
    var e = this;
    !this.enabled || this.status >= 0 || (this.status = 0, wx.connectSocket({
        url: "wss://ws1.qingmang.me"
    }), wx.onSocketOpen(function(t) {
        e.status = 1, e.broadcast("connected", t);
    }), wx.onSocketMessage(function(t) {
        e.broadcast("received", t);
    }), wx.onSocketClose(function(t) {
        e.status = -1, e.broadcast("disconnected", t);
    }), wx.onSocketError(function(t) {
        e.status = -1, e.broadcast("disconnected", t);
    }));
}, e.prototype.disconnect = function() {
    wx.closeSocket();
}, e.prototype.reconnect = function() {
    this.disconnect(), this.connect();
}, e.prototype.isConnected = function() {
    return 1 === this.status;
}, e.prototype.send = function(e) {
    console.log("[WebSocket] send message", e), this.isConnected() ? wx.sendSocketMessage({
        data: JSON.stringify(e)
    }) : console.log("[WebSocket] send message ignored, socket is not connected.");
}, e.prototype.broadcast = function(e, t) {
    if (console.log("[WebSocket] process message", e, t), 0 !== this.handlers.length) {
        var n;
        "received" === e && t && t.data && (n = JSON.parse(t.data));
        var o = !0, s = !1, c = void 0;
        try {
            for (var i, r = this.handlers[Symbol.iterator](); !(o = (i = r.next()).done); o = !0) (0, 
            i.value)(e, n);
        } catch (e) {
            s = !0, c = e;
        } finally {
            try {
                !o && r.return && r.return();
            } finally {
                if (s) throw c;
            }
        }
    } else console.log("[WebSocket] process message ignored, no handlers are listening.");
}, e.prototype.enable = function() {
    this.enabled = !0;
}, e.prototype.disable = function() {
    this.enabled = !1, this.disconnect();
}, e.prototype.isEnabled = function() {
    return this.enabled;
}, module.exports = {
    createWebSocket: function() {
        return new e();
    }
};