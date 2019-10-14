var e = require("state.js"), i = require("../utils/enum.js"), s = require("sys.js"), t = require("storage.js"), o = require("eventcenter.js"), n = require("api.js"), c = require("../foundation/oss/idkey.js"), r = require("../utils/util.js");

module.exports = {
    setup: function(e) {
        this.host = e.host, this.cgiSet = e.cgiSet, this.cgiMock = e.cgiMock, this.loginTicketKey = e.loginTicketKey || "loginTicket", 
        this.appid = e.appid, this.__baseParams = e.baseParams, this.__baseUrlParams = e.__baseUrlParams, 
        this.__isPlugin = e.isPlugin, this.loginCgi = this.cgiSet.login, this.checkSession();
    },
    request: function(t) {
        var o = this;
        if (-1 == Object.values(o.cgiSet).indexOf(t.cgi) && (console.error("use cgi without register"), 
        c.report(s.alarmId, i.IDKeyDefine.NetworkUseCgiWithoutRegister)), t.skipCheckLogin || o._state == e.login) {
            if (!t.skipCheckLogin && !o.checkServerSession()) return void o.makeSessionTimeout(t);
            o.doRequest({
                cgi: t.cgi,
                method: t.method,
                params: t.params,
                urlParams: t.urlParams,
                skipBaseRequest: t.skipBaseRequest,
                options: t,
                success: function(e) {
                    0 == e.errcode ? t.success && t.success(e) : t.fail && t.fail(e);
                },
                fail: t.fail,
                complete: t.complete
            });
        } else t && o._requestQueue.push(t), o.checkSession();
    },
    ensureServerSessionValid: function(e) {
        this.checkServerSession() ? e && e.success && e.success() : (e && this._loginObserverQueue.push(e), 
        this.makeSessionTimeout(), this.checkSession());
    },
    doRequest: function(e) {
        var t = this, o = r.appendQueryObject(t.host + e.cgi, e.urlParams || {}), a = e.skipBaseRequest ? e.params : Object.assign({
            base_req: t.baseParams()
        }, e.params);
        if (a.session_key = this._ticket && this._ticket.session_key ? this._ticket.session_key : void 0, 
        t.cgiMock[e.cgi]) {
            var u = t.cgiMock[e.cgi];
            return console.debug("[mock]request: " + o + " complete, mockdata: ", u), void t.makeRequestSuccess(e.cgi, {
                data: u
            }, e);
        }
        n.request({
            url: o,
            data: a,
            method: e.method ? e.method : "POST",
            success: function(o) {
                console.log("request success: ", o), o && 200 == o.statusCode ? o.data.errcode === i.SvrErrorCode.OK ? t.makeRequestSuccess(e.cgi, o, e) : (c.report(s.alarmId, i.IDKeyDefine.NetworkLogicError), 
                o.data.errcode == i.SvrErrorCode.SessionTimeout && c.report(s.alarmId, i.IDKeyDefine.NetworkSessionTimeout), 
                t.makeRequestFail(e.cgi, {
                    errcode: o.data.errcode || i.SvrErrorCode.Unknown,
                    errmsg: o.data.msg || "Undefined Error",
                    options: e.options
                }, e)) : (c.report(s.alarmId, i.IDKeyDefine.NetworkHttpError), t.makeRequestFail(e.cgi, {
                    errcode: o.statusCode,
                    errmsg: "HTTP Error"
                }, e));
            },
            fail: function(o) {
                c.report(s.alarmId, i.IDKeyDefine.NetworkConnectError), t.makeRequestFail(e.cgi, o, e);
            }
        });
    },
    makeRequestFail: function(e, s, t) {
        if (console.log("request fail [%s], error: ", e, s), e == this.loginCgi) ; else if (s && s.errcode == i.SvrErrorCode.SessionTimeout) return this.__isPlugin && o.emit("onPluginSessionTimeout"), 
        void (s.options.skipCheckLogin ? (t.fail && t.fail(s), t.complete && t.complete(s)) : this.makeSessionTimeout(s.options));
        t && (t.fail && t.fail(s), t.complete && t.complete(s));
    },
    makeRequestSuccess: function(e, i, s) {
        s && (s.success && s.success(i.data), s.complete && s.complete(i.data));
    },
    makeSessionTimeout: function(e) {
        console.info("make login status expired"), this.onLoginExpired(), e && (console.info("wait for retrying, cgi ", e.cgi), 
        this.request(e));
    },
    _baseParams: null,
    baseParams: function() {
        return null == this._baseParams && (this._baseParams = {
            client_version: s.wechatVersion(),
            device: s.wechatDevice()
        }), Object.assign({
            canvas_cookie: this._canvasCookie,
            session_key: this._ticket && this._ticket.session_key ? this._ticket.session_key : ""
        }, this._baseParams, this.__baseParams());
    },
    isLogin: !1,
    _state: e.logout,
    _ticket: null,
    _requestQueue: [],
    _loginObserverQueue: [],
    checkSession: function() {
        var i = this;
        if (i._state == e.logout) {
            if (i.__isPlugin) return void i.getLocalTicket();
            i._state = e.logingin, n.checkSession({
                success: function(e) {
                    i.getLocalTicket();
                },
                fail: function() {
                    i.doWxLogin();
                }
            });
        }
    },
    checkServerSession: function() {
        return !!this._ticket && (this._ticket._cache_time || 0) + (this._ticket.expire_seconds || 0) > parseInt(Date.now() / 1e3);
    },
    clearLocalTicket: function() {
        var i = this;
        n.removeStorage({
            key: i.loginTicketKey
        }), i._state = e.logout, i._ticket = null, i.isLogin = !1, i.doWxLogin();
    },
    getLocalTicket: function() {
        var e = this;
        t.getData({
            key: e.loginTicketKey,
            success: function(i) {
                i && i.data ? (i.data._cache_time || 0) + (i.data.expire_seconds || 0) > parseInt(Date.now() / 1e3) ? e.onLoginSuccess(i.data) : (t.removeData({
                    sync: !0,
                    key: e.loginTicketKey
                }), e.doWxLogin()) : e.doWxLogin();
            },
            fail: function(i) {
                console.log("getLocalTicket fail: ", i), e.doWxLogin();
            }
        });
    },
    doWxLogin: function() {
        var e = this;
        e.__isPlugin ? e.markPluginNeedWxLogin() : n.login({
            success: function(i) {
                i && i.code ? (console.log("doWxLogin success, ", i), e.doCgiLogin(i.code)) : e.onLoginFail("doWxLogin success but code not exists");
            },
            fail: function() {
                e.onLoginFail("doWxLogin fail"), c.report(s.alarmId, i.IDKeyDefine.WXLoginApiError);
            }
        });
    },
    doCgiLogin: function(e, o, n) {
        var r = this;
        r.appid && 0 != r.appid.length || c.report(s.alarmId, i.IDKeyDefine.LoginWithAppIdEmpty), 
        r.request({
            cgi: r.cgiSet.login,
            params: {
                auth_code: e,
                authorizer_appid: r.appid
            },
            skipCheckLogin: !0,
            skipBaseRequest: !0,
            success: function(e) {
                var i = Object.assign({}, e);
                i._cache_time = parseInt(Date.now() / 1e3), t.setData({
                    key: r.loginTicketKey,
                    data: i
                }), r.onLoginSuccess(i), o && o();
            },
            fail: function(e) {
                r.onLoginFail("doCgiLogin fail"), n && n(e);
            }
        });
    },
    checkRequestQueue: function(e, i) {
        var s = this._requestQueue;
        if (this._requestQueue = [], 0 == e) for (var t = 0; t < s.length; t++) this.request(s[t]); else for (var o = 0; o < s.length; o++) s[o] && s[o].fail && s[o].fail(i), 
        s[o] && s[o].complete && s[o].complete(i);
    },
    checkLoginObserverQueue: function(e) {
        var i = this._loginObserverQueue;
        this._loginObserverQueue = [];
        var s = !0, t = !1, o = void 0;
        try {
            for (var n, c = i[Symbol.iterator](); !(s = (n = c.next()).done); s = !0) {
                var r = n.value;
                e ? r && r.success && r.success() : r && r.fail && r.fail(), r && r.complete && r.complete();
            }
        } catch (e) {
            t = !0, o = e;
        } finally {
            try {
                !s && c.return && c.return();
            } finally {
                if (t) throw o;
            }
        }
    },
    onLoginSuccess: function(i) {
        console.debug("loginTicket: ", i), this._state = e.login, this._ticket = i, this.isLogin = !0, 
        this.checkRequestQueue(0), this.checkLoginObserverQueue(!0), s.pluginNeedWxLogin = !1, 
        o.emit("onLoginSuccess");
    },
    onLoginFail: function(i) {
        this._state = e.logout, this.isLogin = !1, this.checkRequestQueue(-1, i), this.checkLoginObserverQueue(!1), 
        o.emit("onLoginFail");
    },
    onLoginExpired: function() {
        this._state = e.logout, this._ticket = null, this.isLogin = !1, t.removeData({
            sync: !0,
            key: this.loginTicketKey
        });
    },
    sessionLoginTime: function() {
        return this._ticket ? this._ticket._cache_time : (n.getStorageSync(this.loginTicketKey) || {})._cache_time;
    },
    markPluginNeedWxLogin: function(e) {
        s.pluginNeedWxLogin = !0, console.info("emit onPluginNeedWxLogin event"), o.emit("onPluginNeedWxLogin", e);
    },
    pluginWxLoginSuccess: function(e) {
        var i = this;
        e && e.code ? (console.log("doWxLogin success, ", e), i.doCgiLogin(e.code, e.success, e.fail)) : i.onLoginFail("doWxLogin success but code not exists");
    },
    pluginWxLoginFail: function(e) {
        this.onLoginFail("doWxLogin fail"), c.report(s.alarmId, i.IDKeyDefine.WXLoginApiError);
    }
};