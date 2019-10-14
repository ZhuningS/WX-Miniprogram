function e(e, t) {
    var o = {};
    if (e && e.user) {
        var s;
        s = t.data.notification && "animated pulse" !== t.data.notification.animationClass ? "animated pulse" : "animated pulse_", 
        o = {
            user: {
                avatar: e.user.avatar,
                name: e.user.name
            },
            message: e.message,
            content: e.content,
            animationClass: s
        }, t.setData({
            notification: o
        });
    }
}

function t(e) {
    var t = e.notification.content;
    return !(t && t.length > 0 && t[0].text && t[0].text.text && t[0].text.text.length > 0);
}

function o(e, t, o) {
    if (o.positionLookUp) {
        for (var s = 0; s < o.conversation.followedUsers.length; s++) {
            var n = o.conversation.followedUsers[s];
            if (n.uid === e) {
                var r = t.paragraphid;
                n.progress = r ? o.positionLookUp[r] : o.contentSize * t.percentage;
                var i = getApp().globalData.sysInfo.windowWidth - 72, c = o.contentSize ? i * n.progress / o.contentSize : 0;
                n.animationClassTips = "animated fadeOut", a(o);
                var l = wx.createAnimation({
                    transformOrigin: "50%,50%",
                    duration: 500,
                    timingFunction: "ease-out"
                });
                l.translateX(c).step(), n.animation = l.export(), setTimeout(function() {
                    0 === n.progress || n.progress && n.progress < o.contentSize / 2 || t.percentage < .5 ? (n.messageStyle = "bottom-left", 
                    n.messageLeft = 16 + c + "px", n.messageRight = void 0) : n.progress && n.progress === o.contentSize / 2 || .5 === t.percentage ? (n.messageStyle = "bottom", 
                    n.messageRight = 0, n.messageLeft = 0) : (n.messageStyle = "bottom-right", n.messageRight = i - c + 16 + "px", 
                    n.messageLeft = void 0), n.message = t.message, n.animationClassTips = "animated fadeIn", 
                    a(o);
                }, 500);
                break;
            }
        }
        a(o);
    }
}

function s(e, t) {
    if ("highlight" === e.noteType) {
        var o = e.content[0].id, s = t.positionLookUp[o], n = getApp().globalData.sysInfo.windowWidth - 72;
        e.progressLeft = 35 + n * (s + 1) / t.contentSize;
    }
}

function n(e) {
    e.setData({
        "conversation.totalUsers": e.conversation.totalUsers.slice(0, v),
        "conversation.followedUsers": e.conversation.followedUsers,
        "conversation.activeUserNumber": e.conversation.activeUsers.length,
        "conversation.totalUserNumber": e.conversation.totalUserNumber
    });
}

function a(e) {
    e.setData({
        "conversation.followedUsers": e.conversation.followedUsers
    });
}

function r(e) {
    var t = {
        events: e.conversation.events,
        totalUsers: e.conversation.totalUsers.slice(0, v),
        followedUsers: e.conversation.followedUsers,
        activeUserNumber: e.conversation.activeUsers.length,
        totalUserNumber: e.conversation.totalUserNumber,
        viewOptions: {
            showHeader: !0,
            showFooter: !0
        }
    };
    e.setData({
        conversation: t
    }), e.keepInBottom && setTimeout(function() {
        e.setData({
            keepInBottom: !0
        });
    }, 200);
}

var i = require("../../utils/raml.js"), c = require("../../protocol/apis.js"), l = 10, v = 10;

module.exports = {
    popUpToast: e,
    dispatchMessages: function(v, u) {
        if (u && u.conversationOptions.support) {
            var f = JSON.parse(v);
            if (f.aid === u.docId) {
                var p = new Date().getTime(), g = i.createRAML();
                c.parseEvent(f, g, !1);
                var d = function(e) {
                    for (var t = 0; t < u.conversation.activeUsers.length; t++) if (u.conversation.activeUsers[t].uid === e.uid) {
                        u.conversation.activeUsers.splice(t, 1);
                        break;
                    }
                    for (var o = 0; o < u.conversation.followedUsers.length; o++) if (u.conversation.followedUsers[o].uid === e.uid) {
                        u.conversation.followedUsers.splice(o, 1);
                        break;
                    }
                }, m = function(e) {
                    var t = u.conversation.totalUsers.length;
                    if (d(e), u.conversation.activeUsers.push(e), "709598" !== e.uid) {
                        e.uid === getApp().getUserId() ? u.conversation.followedUsers.push(e) : u.conversation.followedUsers.length < l && u.conversation.followedUsers.splice(-2, 0, e);
                        for (var o = 0; o < u.conversation.totalUsers.length; o++) if (u.conversation.totalUsers[o].uid === e.uid) {
                            u.conversation.totalUsers.splice(o, 1);
                            break;
                        }
                        u.conversation.totalUsers.push(e), u.conversation.totalUserNumber += u.conversation.totalUsers.length - t;
                    } else u.conversation.followedUsers.push(e);
                }, U = function(e) {
                    for (var t = 0; t < u.conversation.followedUsers.length; t++) if (u.conversation.followedUsers[t].uid === e.uid) return !0;
                    return !1;
                };
                if ("room.enter" === f.type) u.conversationOptions.enable = !0, u.setData({
                    conversationOptions: u.conversationOptions
                }), t(f) || e({
                    user: {
                        avatar: u.user.avatar
                    },
                    message: " ",
                    content: f.notification.content
                }, u); else if ("room.history" === f.type) {
                    console.log("Enter history message take " + (new Date().getTime() - p)), u.conversationOptions.enable = !0, 
                    u.receivedHistory = !0, u.setData({
                        conversationOptions: u.conversationOptions
                    }), u.conversation.activeUsers = f.active_users, u.conversation.totalUsers = f.all_users, 
                    u.conversation.totalUserNumber = f.all_user_number;
                    for (var h = getApp().getUserId(), w = 0; w < f.active_users.length; w++) if (f.active_users[w].uid === h) {
                        w++, u.conversation.followedUsers = f.active_users.slice(w - l, w);
                        break;
                    }
                    u.conversation.events = [];
                    for (var y = f.events.length - 1; y >= 0; y--) u.conversation.events.push(f.events[y]);
                    u.refferId = f.admin.uid;
                    var b = f.events.length;
                    b > 6 && (u.conversation.scrollTop = 60 + 160 / getApp().globalData.pixelRatio * (b - 7));
                    for (var N = 0; N < b; N++) c.parseEvent(f.events[N], g, !1);
                    t(f) || e({
                        user: {
                            avatar: u.user.avatar
                        },
                        message: " ",
                        content: f.notification.content
                    }, u), u.conversationProgress = {};
                    for (var k = 0; k < f.updates.length; k++) c.parseEvent(f.events[k], g, !1), u.conversationProgress[f.events[k].uid] = f.events[k];
                    if (u.attachAllNotes) {
                        for (var D = [], L = 0; L < b; L++) {
                            var x = f.events[L];
                            (function(e) {
                                return "user.action" === e.type && e.note;
                            })(x) && x.note.content && (s(x.note, u), D.push(x.note));
                        }
                        u.attachAllNotes(D);
                    }
                    if (f.events.length <= 1 && u.myNoteList && u.myNoteList.length > 0) for (var O = 0; O < u.myNoteList.length; O++) u.sendNoteMessage(u.myNoteList[O].nid);
                    console.log("Build all history take " + (new Date().getTime() - p)), r(u), console.log("Show history take " + (new Date().getTime() - p));
                } else if ("user.join" === f.type) m(f.user), u.conversation.followedUsers[u.conversation.followedUsers.length - 1].animationClass = "animated fadeIn", 
                U(f.user) && (u.conversation.events.push(f), e({
                    user: {
                        avatar: f.user.avatar
                    },
                    message: f.user.name + " 来了",
                    content: f.notification.content
                }, u)), n(u); else if ("user.leave" === f.type) d(f.user), a(u); else if ("user.action" === f.type) {
                    var A = !1;
                    if (u.myNoteList && u.myNoteList.length > 0) for (var S = 0; S < u.myNoteList.length; S++) if (u.myNoteList[S].nid === f.nid) {
                        A = !0;
                        break;
                    }
                    A || (u.myNoteList = [], (f.note && f.note.annotation || U(f.user)) && e({
                        user: f.user,
                        content: f.notification.content
                    }, u)), m(f.user), f.note && (s(f.note, u), u.attachNote(f.note)), n(u);
                } else "user.update" === f.type ? U(f.user) && o(f.user.uid, f.data, u) : "user.talk" === f.type ? (e({
                    user: f.user,
                    message: f.user.name + " 说了一句话",
                    content: f.notification.content
                }, u), u.conversation.events.push(f), r(u)) : "room.unfound" === f.type ? u.receivedHistory = !0 : "user.typing" === f.type ? U(f.user) && e({
                    user: f.user,
                    message: f.user.name + " 正在输入",
                    content: f.notification.content
                }, u) : "user.unaction" === f.type && u.detachNote(f.nid);
                console.log("Dispatch message take " + (new Date().getTime() - p));
            }
        }
    },
    updateUserProgressOver: function(e, t) {
        for (var o = 0; o < t.conversation.followedUsers.length; o++) {
            var s = t.conversation.followedUsers[o];
            if (s.uid === e) {
                var n = wx.createAnimation({
                    transformOrigin: "50%,50%",
                    duration: 500,
                    timingFunction: "ease-out"
                }), r = getApp().globalData.sysInfo.windowWidth - 72;
                n.translateX(r).step(), s.animation = n.export();
                break;
            }
        }
        a(t);
    },
    updateUserProgressStart: function(e, t) {
        for (var o = 0; o < t.conversation.followedUsers.length; o++) {
            var s = t.conversation.followedUsers[o];
            if (s.uid === e) {
                var n = wx.createAnimation({
                    transformOrigin: "50%,50%",
                    duration: 500,
                    timingFunction: "ease-out"
                });
                n.translateX(0).step(), s.animation = n.export();
                break;
            }
        }
        a(t);
    },
    updateUserProgress: o
};