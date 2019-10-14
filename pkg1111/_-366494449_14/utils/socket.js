function o(o) {
    n && (console.log("发送推送消息，维持心跳===="), wx.sendSocketMessage({
        data: "111"
    }));
}

getApp();

var e, n = !1;

module.exports = {
    pushMessage: function(c, s) {
        console.log("建立消息连接=======", c);
        var t = "wss://yitui.jijiax.com/wss?id=" + c;
        console.log("socketUrl=======", t), wx.connectSocket({
            url: t,
            success: function(o) {
                console.log(o);
            },
            fail: function(o) {},
            complete: function(o) {}
        }), wx.onSocketOpen(function(c) {
            n = !0, console.log("推送消息连接已打开！"), e = setInterval(o, 3e4);
        }), wx.onSocketError(function(o) {
            console.log("推送消息连接打开失败，请检查！");
        }), wx.onSocketMessage(function(o) {
            console.log("正在接收推送消息====", o), s && s(o);
        }), wx.onSocketClose(function(o) {
            console.log("推送消息已关闭！"), clearInterval(e);
        });
    }
};