var s = require("../../foundation/base/model.flow.js"), t = require("../../model/userdata.js"), e = require("../../core/network.js"), i = require("../../utils/util.js"), a = {
    clear: function() {
        this.cus_id = decodeURIComponent(this.initOptions.cus_id || ""), this.biz_id = decodeURIComponent(this.initOptions.biz_id || ""), 
        this.wxapp_appid = this.initOptions.wxapp_appid || "", this.messages = [], this.changes = {}, 
        this.userinfoMap = {}, this.hasMore = !0, this.lastMsgCount = 40, this.lastSyncMaxMsgId = 0, 
        this.wxapp_appid ? this.isKf = !1 : this.isKf = t.isKf;
    },
    ready: function() {
        return !!this.cus_id && !!this.biz_id;
    },
    prepare: function() {
        var s = this;
        return new Promise(function(t, i) {
            e.request({
                cgi: e.cgiSet.getUserId,
                params: {
                    wxapp_appid: s.wxapp_appid
                },
                success: function(e) {
                    s.cus_id = e.cus_id || "", s.biz_id = e.biz_id || "", t();
                },
                fail: function() {}
            });
        });
    },
    cgi: function() {
        return this.isKf ? e.cgiSet.syncKfMsg : e.cgiSet.syncUserMsg;
    },
    getLastParams: function() {
        return {
            cus_id: this.cus_id,
            biz_id: this.biz_id,
            last_msg_id: this.getEarlyMsgId(),
            mode: "LESS",
            count: 20
        };
    },
    getNextParams: function() {
        var s = this;
        return function() {
            var t = s.getLastMsgId();
            return {
                cus_id: s.cus_id,
                biz_id: s.biz_id,
                last_msg_id: t,
                mode: t ? "GREATER" : "LESS",
                count: 20
            };
        };
    },
    pack: function() {
        return {
            messages: this.messages,
            changes: this.changes,
            userInfo: this.userinfoMap,
            hasMore: this.hasMore,
            user_id: this.getUserId(),
            chat_user_id: this.getChatUserId()
        };
    },
    getEarlyMsgId: function() {
        if (this.messages[0]) return this.messages[0].id;
    },
    getLastMsgId: function() {
        if (this.lastSyncMaxMsgId) return this.lastSyncMaxMsgId;
        var s = this.messages.filter(function(s) {
            return !s.islocal;
        });
        return s.length > 0 ? s[s.length - 1].id : void 0;
    },
    beforeCallback: function(s, t) {
        var e = s.msg_list, a = e.length > 0;
        "last" != t.type && 0 != this.messages.length || (this.hasMore = e.length >= 20);
        var n = e.map(function(s) {
            return s.id;
        }).sort(i.compareDesc())[0];
        return this.lastSyncMaxMsgId = Math.max(this.lastSyncMaxMsgId, n || 0), this.merge(Object.assign(s, t)), 
        a;
    },
    afterCallback: function(s) {
        this.changes = {};
    },
    merge: function(s) {
        var t = this, e = s.msg_list, a = s.user_info_list, n = "next" === s.type, r = this.messages.length, c = {};
        (a || []).forEach(function(s) {
            s.user_id && (c[s.user_id] = s);
        }), Object.assign(this.userinfoMap, c);
        var g = {};
        (e || []).forEach(function(s) {
            s.userinfo = c[s.from_user_id], g[s.id] = s;
        });
        var u = this.messages.filter(function(s) {
            var e = s.islocal || !(s.id in g);
            return e || (g[s.id] = t.mergeMsg(s, g[s.id])), e;
        });
        e = Object.values(g), this.messages = u.concat(e), this.messages = this.messages.sort(i.compareAsc("id")), 
        this.messages.forEach(function(s, e, i) {
            0 == e ? (s.last_create_time = 0, s.ispagetop = !0) : s.last_create_time = i[e - 1].create_time, 
            s.current_user_id = t.getUserId();
        });
        var h = e, o = !1;
        if (n) this.lastMsgCount += this.messages.length - r; else for (;this.messages.length > this.lastMsgCount; ) this.lastMsgCount += this.lastMsgCount, 
        h = this.messages, o = !0;
        this.changes = {};
        var d = this.lastMsgCount - this.messages.length;
        if (o) for (var l = 0; l < d; l++) {
            var f = this.genMsgKey(l);
            this.changes[f] = {};
        }
        (h || []).forEach(function(s) {
            var e = t.messages.indexOf(s);
            if (e >= 0) {
                var i = t.genMsgKey(e + d);
                t.changes[i] = s;
            }
        });
    },
    getUserId: function() {
        return this.isKf ? this.biz_id : this.cus_id;
    },
    getChatUserId: function() {
        return this.isKf ? this.cus_id : this.biz_id;
    },
    genMsgKey: function(s) {
        return "messages[" + s + "]";
    },
    genLocalMsg: function(s, t) {
        var e = {
            type: t,
            client_msg_id: i.getRandomString()
        };
        switch (t) {
          case "TEXT":
            e.text = s;
            break;

          case "IMAGE":
            e.image = s;
            break;

          case "GOODS":
            e.goods = s;
            break;

          default:
            return null;
        }
        return e;
    },
    getMsgContent: function(s) {
        switch (s.type) {
          case "TEXT":
            return s.text;

          case "IMAGE":
            return delete s.image.local_image_url, s.image;

          case "GOODS":
            return comm.goods;

          default:
            return null;
        }
    },
    mergeMsg: function(s, t) {
        if (!s || !t || s.type != t.type) return t;
        switch (s.type) {
          case "IMAGE":
            t.image.local_image_url = s.image.local_image_url || s.image.image_url;
        }
        return t.last_create_time = s.last_create_time, t;
    }
};

module.exports = function() {
    var t = {}, e = {
        cus_id: "",
        biz_id: "",
        wxapp_appid: "",
        messages: [],
        changes: {},
        userinfoMap: {},
        hasMore: !0,
        lastMsgCount: 40,
        lastSyncMaxMsgId: 0,
        isKf: !1
    };
    return i.inherit(Object.assign(t, e, a), s);
};