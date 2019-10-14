function s(s, e, t) {
    return e in s ? Object.defineProperty(s, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[e] = t, s;
}

var e = require("model.chat.base.js"), t = require("../../core/network.js"), i = require("../../utils/util.js"), a = {
    insert: function(e, i, a) {
        var n = this.genLocalMsg(e, i), r = this.messages.length > 0 ? this.messages[this.messages.length - 1].id + 1 : 1, g = parseInt(new Date().getTime() / 1e3), h = this.messages.length > 0 ? this.messages[this.messages.length - 1].create_time : 0;
        if (!n) return console.error("genLocalMsg fail!"), null;
        a || (a = Object.assign({
            id: r,
            status: 1,
            create_time: g,
            last_create_time: g > h ? h : h + 1,
            from_user_id: this.getUserId(),
            to_user_id: this.getChatUserId(),
            current_user_id: this.getUserId(),
            userinfo: this.userinfoMap[this.getUserId()],
            islocal: !0
        }, n), this.messages.push(a), this.changes = s({}, this.genMsgKey(this.lastMsgCount++), a), 
        this.onCallback("insert"), this.afterCallback()), this.stop();
        var l = this;
        return t.request({
            cgi: this.isKf ? t.cgiSet.sendKfMsg : t.cgiSet.sendUserMsg,
            params: {
                cus_id: this.cus_id,
                biz_id: this.biz_id,
                msg: n
            },
            success: function(e) {
                var t = l.messages.indexOf(a);
                t >= 0 && e.message && (e.message.userinfo = a.userinfo, l.messages[t] = l.mergeMsg(l.messages[t], e.message), 
                l.changes = s({}, l.genMsgKey(l.lastMsgCount - l.messages.length + t), l.messages[t]), 
                l.onCallback("update"), l.afterCallback());
            },
            fail: function() {
                var e = l.messages.indexOf(a);
                e >= 0 && (a.status = 2, l.changes = s({}, l.genMsgKey(l.lastMsgCount - l.messages.length + e), a), 
                l.onCallback("update"), l.afterCallback());
            },
            complete: function() {
                l.start();
            }
        }), a;
    },
    insertFake: function(e, t) {
        var i = this.genLocalMsg(e, t), a = this.messages.length > 0 ? this.messages[this.messages.length - 1].id + 1 : 1, n = parseInt(new Date().getTime() / 1e3), r = this.messages.length > 0 ? this.messages[this.messages.length - 1].create_time : 0;
        if (!i) return console.error("genLocalMsg fail!"), null;
        var g = Object.assign({
            id: a,
            status: 1,
            create_time: n,
            last_create_time: n > r ? r : r + 1,
            from_user_id: this.getUserId(),
            to_user_id: this.getChatUserId(),
            current_user_id: this.getUserId(),
            userinfo: this.userinfoMap[this.getUserId()],
            islocal: !0
        }, i);
        return this.messages.push(g), this.changes = s({}, this.genMsgKey(this.lastMsgCount++), g), 
        this.onCallback("insert"), this.afterCallback(), g;
    },
    resend: function(s) {
        var e = this;
        this.messages.filter(function(e) {
            return 2 === e.status && i.getMsgUniqueId(e) === s;
        }).forEach(function(s) {
            var t = e.messages.indexOf(s);
            t >= 0 && e.messages.splice(t, 1), e.insert(e.getMsgContent(s), s.type);
        });
    }
};

module.exports = function() {
    return Object.assign(e(), a);
};