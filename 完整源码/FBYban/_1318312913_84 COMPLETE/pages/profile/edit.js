function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, o) {
                try {
                    var i = t[n](o), u = i.value;
                } catch (e) {
                    return void a(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(u);
            }
            return r("next");
        });
    };
}

var a = e(require("../../libs/regenerator-runtime.js")), r = require("../../protocol/io"), n = e(require("../../utils/extend-page")), o = e(require("../../mixins/actions")), i = e(require("../../mixins/logger")), u = e(require("../../mixins/hook")), s = require("../../services/warehouse/index");

Page((0, n.default)({
    data: {
        avatar: void 0,
        isEdit: !1
    },
    oldToken: void 0,
    groupId: void 0,
    onLoad: function(e) {
        var r = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return r.oldToken = e.token, r.setData({
                        gid: e.gid
                    }), wx.setNavigationBarTitle({
                        title: r.oldToken ? "修改用户信息" : "新建用户"
                    }), t.prev = 3, wx.showLoading(), t.next = 7, Promise.all([ r.loadUserInfo(), r.loadGroupInfo() ]);

                  case 7:
                    t.next = 11;
                    break;

                  case 9:
                    t.prev = 9, t.t0 = t.catch(3);

                  case 11:
                    return t.prev = 11, wx.hideLoading(), t.finish(11);

                  case 14:
                  case "end":
                    return t.stop();
                }
            }, t, r, [ [ 3, 9, 11, 14 ] ]);
        }))();
    },
    loadGroupInfo: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var n, o, i;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e.data.gid) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return t.next = 4, r.api.get("v1/group.info", {
                        mid: e.data.gid
                    });

                  case 4:
                    n = t.sent, console.log("load group", n), (o = n.data.events[0].group).relation.enableManageMember && (i = [ o.contributorCopy, o.adminCopy ], 
                    e.setData({
                        roles: i,
                        selectedRole: 0
                    }));

                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadUserInfo: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var n, o;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e.oldToken) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return t.next = 4, r.ajax.get("https://api.qingmang.me/v1/account.info", {
                        token: e.oldToken,
                        app_id: getApp().getConfig().wxAppid
                    });

                  case 4:
                    n = t.sent, o = n.data.user, e.setData({
                        isEdit: !0,
                        uid: o.uid,
                        name: o.name,
                        desc: o.desc,
                        intro: o.intro,
                        avatar: o.avatar
                    });

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    selectRole: function(e) {
        this.setData({
            selectedRole: e.detail.value
        });
    },
    selectAvatar: function() {
        var e = this;
        wx.chooseImage({
            count: 1,
            success: function(t) {
                console.log("choose image", t), e.uploadAvatar(t.tempFilePaths[0]);
            }
        });
    },
    uploadAvatar: function(e) {
        var n = this;
        return t(a.default.mark(function t() {
            var o;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, wx.showLoading(), t.next = 4, new Promise(function(t, a) {
                        var n = {
                            file: e,
                            callback: function(e, r) {
                                console.log("upload image", e, r), "success" === e ? t("http://statics01.qingmang.mobi/" + r.key) : a(e);
                            }
                        };
                        n.task = r.upload.upload(e, n.callback);
                    });

                  case 4:
                    o = t.sent, n.setData({
                        avatar: o
                    }), t.next = 10;
                    break;

                  case 8:
                    t.prev = 8, t.t0 = t.catch(0);

                  case 10:
                    return t.prev = 10, wx.hideLoading(), t.finish(10);

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, n, [ [ 0, 8, 10, 13 ] ]);
        }))();
    },
    removeUserProfile: function(e) {
        var n = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (console.log("remove user", e), !n.data.gid) {
                        t.next = 4;
                        break;
                    }
                    return t.next = 4, r.api.get("v1/group.agents.remove", {
                        uid: n.data.uid,
                        mid: n.data.gid
                    });

                  case 4:
                    wx.navigateBack();

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, n);
        }))();
    },
    addUserProfile: function(e) {
        var n = this;
        return t(a.default.mark(function t() {
            var o, i, u, d, c, l, f;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (console.log("add user", e), o = void 0, i = e.detail.value, u = i.name, d = i.desc, 
                    c = i.intro, u && n.data.avatar) {
                        t.next = 6;
                        break;
                    }
                    return n.showModalDialog(void 0, "更新失败", "至少需要头像和名字信息", "知道了"), t.abrupt("return");

                  case 6:
                    if (l = "https://api.qingmang.me/v1/", f = {
                        app_id: getApp().getConfig().wxAppid,
                        name: u,
                        avatar: n.data.avatar,
                        desc: d || "",
                        intro: c || ""
                    }, !n.data.isEdit) {
                        t.next = 15;
                        break;
                    }
                    return f.token = n.oldToken, t.next = 12, s.userAPI.updateInfo(n.data.uid, f);

                  case 12:
                    o = t.sent, t.next = 20;
                    break;

                  case 15:
                    return l += "account.authByDevice", f.udid = getApp().generateUDID(), t.next = 19, 
                    r.ajax.get(l, f);

                  case 19:
                    o = t.sent;

                  case 20:
                    if (o.data.ok) {
                        t.next = 23;
                        break;
                    }
                    return n.showModalDialog(void 0, "更新失败", "可能是无法连接网络，请稍后重试", "知道了"), t.abrupt("return");

                  case 23:
                    if (console.log("new profile", o, n.data.selectedRole), !n.data.gid) {
                        t.next = 32;
                        break;
                    }
                    if (!o.data.token) {
                        t.next = 30;
                        break;
                    }
                    return t.next = 28, r.api.get("v1/group.agents.add", {
                        agent: o.data.token,
                        mid: n.data.gid,
                        role: 1 === n.data.selectedRole ? "admin" : "contributor"
                    });

                  case 28:
                    t.next = 32;
                    break;

                  case 30:
                    return t.next = 32, r.api.get("v1/group.member.add", {
                        mid: n.data.gid,
                        uid: o.data.user.uid,
                        role: 1 === n.data.selectedRole ? "admin" : "contributor"
                    });

                  case 32:
                    wx.navigateBack();

                  case 33:
                  case "end":
                    return t.stop();
                }
            }, t, n);
        }))();
    }
}, o.default, i.default, u.default));