function e() {
    this.isOpen = !1;
}

e.prototype.subscribe = function(e) {
    this.onMessage = e;
}, e.prototype.onSocketOpen = function(e) {
    this.onOpen = e;
}, e.prototype.unsubscribe = function() {
    this.onMessage = void 0;
}, e.prototype.connect = function() {
    var e = this;
    if (this.enabled) {
        try {
            wx.closeSocket();
        } catch (e) {}
        wx.connectSocket({
            url: "wss://ws.qingmang.me"
        }), wx.onSocketOpen(function(o) {
            console.log("WebSocket 已打开"), e.isOpen = !0, e.onOpen && e.onOpen(o);
        }), wx.onSocketMessage(function(o) {
            console.log("Receive socket data", o), void 0 !== o.data && e.onMessage && e.onMessage(o);
        }), wx.onSocketClose(function() {
            console.log("WebSocket 已关闭"), e.isOpen = !1;
        }), wx.onSocketError(function(o) {
            console.log("Socket error: ", o), e.isOpen = !1;
        });
    }
}, e.prototype.close = function() {
    wx.closeSocket();
}, e.prototype.sendMessage = function(e) {
    this.enabled && wx.sendSocketMessage({
        data: JSON.stringify(e)
    });
}, e.prototype.isOpen = function() {
    return this.isOpen;
}, e.prototype.checkAlive = function() {
    return console.log("Socket check alive: ", this.isOpen), !!this.isOpen || (this.connect(), 
    !1);
}, e.prototype.setEnabled = function(e) {
    this.enabled = e;
}, e.prototype.isEnabled = function() {
    return this.enabled;
};

var o = void 0;

module.exports = {
    createWebSocket: function() {
        return o || (o = new e()), o;
    }
};