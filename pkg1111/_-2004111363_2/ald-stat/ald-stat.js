var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function() {
    function t(t) {
        var a = wx.getStorageSync("aldstat_uuid");
        return a || (a = "" + Date.now() + Math.floor(1e7 * Math.random()), wx.setStorageSync("aldstat_uuid", a), 
        t.aldstat_is_first_open = !0), a;
    }
    function a() {
        wx.request({
            url: "https://" + l + ".aldwx.com/config/app.json",
            header: {
                AldStat: "MiniApp-Stat"
            },
            method: "GET",
            success: function(t) {
                if (200 === t.statusCode) for (var a in t.data) wx.setStorageSync(a, t.data[a]);
            }
        });
    }
    function s(t, a, s) {
        if (t[a]) {
            var e = t[a];
            t[a] = function(t) {
                s.call(this, t, a), e.call(this, t);
            };
        } else t[a] = function(t) {
            s.call(this, t, a);
        };
    }
    function e(t, a, s) {
        if (t[a]) {
            var e = t[a];
            t[a] = function(t) {
                var n = e.call(this, t);
                return s.call(this, [ t, n ], a), n;
            };
        } else t[a] = function(t) {
            s.call(this, t, a);
        };
    }
    function n(t) {
        this.app = t;
    }
    function o(t) {
        for (var a in t) return !1;
        return !0;
    }
    function _(t) {
        return !(!t && "string" == typeof t) && !!/^(?!_)(?!.*?_$)[a-zA-Z0-9_\-\u4e00-\u9fa5]+$/.test(t.replace(/\s+/g, "_"));
    }
    function r(t) {
        for (var a in t) {
            if ("object" == _typeof(t[a])) return !1;
            if ("string" === a) return _(a);
            if ("string" == typeof t[a]) return _(t[a]);
        }
        return !0;
    }
    var i = "5.4.1", l = "log", d = require("./ald-stat-conf.js"), c = 0, u = 0, p = 0, h = 0, f = function(t) {
        wx.login({
            success: function(a) {
                wx.getUserInfo({
                    success: function(a) {
                        t(a);
                    }
                });
            }
        });
    }, g = function(t, a, s) {
        void 0 === arguments[1] && (a = "GET"), void 0 === arguments[2] && (s = "d.html");
        var e = 0;
        !function n() {
            c += 1, t.rq_c = c, wx.request({
                url: "https://" + l + ".aldwx.com/" + s,
                data: t,
                header: {
                    AldStat: "MiniApp-Stat"
                },
                method: a,
                success: function() {},
                fail: function() {
                    2 > e && (e++, t.retryTimes = e, n());
                }
            });
        }();
    }, w = function(a, s, e, n) {
        var o = {
            ak: d.app_key,
            uu: t(a),
            at: a.aldstat_access_token,
            st: Date.now(),
            tp: e,
            ev: s,
            v: i
        };
        n && (o.ct = n), a.aldstat_qr && (o.qr = a.aldstat_qr), g(o, "GET", "d.html");
    }, v = function(a, s, e, n) {
        void 0 === a.aldstat_showoption && (a.aldstat_showoption = {});
        var o = {
            ak: d.app_key,
            wsr: a.aldstat_showoption,
            uu: t(a),
            at: a.aldstat_access_token,
            st: Date.now(),
            tp: e,
            ev: s,
            nt: a.aldstat_network_type,
            pm: a.aldstat_phone_model,
            pr: a.aldstat_pixel_ratio,
            ww: a.aldstat_window_width,
            wh: a.aldstat_window_height,
            lang: a.aldstat_language,
            wv: a.aldstat_wechat_version,
            lat: a.aldstat_lat,
            lng: a.aldstat_lng,
            spd: a.aldstat_speed,
            v: i
        };
        n && (o.ct = n), a.aldstat_location_name && (o.ln = a.aldstat_location_name), a.aldstat_src && (o.sr = a.aldstat_src), 
        a.aldstat_qr && (o.qr = a.aldstat_qr), g(o, "GET", "d.html");
    };
    n.prototype.debug = function(t) {
        v(this.app, "debug", 0, t);
    }, n.prototype.warn = function(t) {
        v(this.app, "debug", 1, t);
    }, n.prototype.error = function(t) {
        w(this.app, "debug", 2, t);
    }, n.prototype.sendEvent = function(t, a) {
        if (!t || t.length >= 255) return !1;
        if (!_(t)) return !1;
        if ("object" == (void 0 === a ? "undefined" : _typeof(a))) r(a) && v(this.app, "event", t, JSON.stringify(a)); else if ("string" == typeof a && a.length <= 255) {
            if (_(a)) {
                var s = String(a), e = new Object();
                e[s] = a, v(this.app, "event", t, a);
            }
        } else v(this.app, "event", t, !1);
    };
    var y = function() {
        var t = this;
        t.aldstat_duration += Date.now() - t.aldstat_showtime, k(t, "app", "unLaunch");
    }, m = function(t, a, s) {
        void 0 !== wx.getShareInfo ? wx.getShareInfo({
            shareTicket: a,
            success: function(a) {
                v(t, "event", "ald_share_" + s, JSON.stringify(a));
            },
            fail: function() {
                v(t, "event", "ald_share_" + s, "1");
            }
        }) : v(t, "event", "ald_share_" + s, "1");
    }, S = function(s) {
        a(), this.aldstat = new n(this);
        var e = wx.getStorageSync("aldstat_src");
        e && (this.aldstat_src = e);
        var o = t(this);
        this.aldstat_uuid = o, this.aldstat_timestamp = Date.now(), this.aldstat_showtime = Date.now(), 
        this.aldstat_duration = 0;
        var _ = this;
        _.aldstat_error_count = 0, _.aldstat_page_count = 1, _.aldstat_first_page = 0, this.aldstat_showoption = void 0 !== s ? s : {};
        var r = function() {
            wx.getSystemInfo({
                success: function(t) {
                    _.aldstat_vsdk_version = void 0 === t.SDKVersion ? "1.0.0" : t.SDKVersion, _.aldstat_phone_model = t.model, 
                    _.aldstat_pixel_ratio = t.pixelRatio, _.aldstat_window_width = t.windowWidth, _.aldstat_window_height = t.windowHeight, 
                    _.aldstat_language = t.language, _.aldstat_wechat_version = t.version, _.aldstat_sv = t.system, 
                    _.aldstat_wvv = t.platform;
                },
                complete: function() {
                    d.getLocation && l(), d.getUserinfo && i();
                }
            });
        }, i = function() {
            f(function(t) {
                var a = wx.getStorageSync("aldstat_uuid");
                t.userInfo.uu = a, g(t.userInfo, "GET", "u.html");
            });
        }, l = function() {
            wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    _.aldstat_lat = t.latitude, _.aldstat_lng = t.longitude, _.aldstat_speed = t.speed;
                }
            });
        };
        !function() {
            wx.getNetworkType({
                success: function(t) {
                    _.aldstat_network_type = t.networkType;
                },
                complete: r
            });
        }();
        var c = wx.getStorageSync("app_session_key_create_launch_upload");
        c ? c > 0 && "number" == typeof c && (_.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random())) : _.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random()), 
        k(_, "app", "launch");
    }, x = function(t, a) {
        var s = getApp();
        void 0 === this.aldstat_error_count ? this.aldstat_error_count = 1 : this.aldstat_error_count++, 
        v(s, "event", "ald_error_message", JSON.stringify(t));
    }, k = function(a, s, e) {
        var n = wx.getStorageSync("app_" + e + "_upload");
        if (!(!n && "launch" !== e || 1 > n && "number" == typeof n)) {
            void 0 === a.aldstat_timestamp && (a.aldstat_timestamp = Date.now()), a.aldstat_duration += Date.now() - a.aldstat_showtime;
            var o = wx.getSystemInfoSync();
            a.aldstat_vsdk_version = void 0 === o.SDKVersion ? "1.0.0" : o.SDKVersion, a.aldstat_phone_model = o.model, 
            a.aldstat_pixel_ratio = o.pixelRatio, a.aldstat_window_width = o.windowWidth, a.aldstat_window_height = o.windowHeight, 
            a.aldstat_language = o.language, a.aldstat_wechat_version = o.version;
            var _ = {
                ak: d.app_key,
                waid: d.appid,
                wst: d.appsecret,
                uu: t(a),
                at: a.aldstat_access_token,
                wsr: a.aldstat_showoption,
                st: a.aldstat_timestamp,
                dr: a.aldstat_duration,
                et: Date.now(),
                pc: a.aldstat_page_count,
                fp: a.aldstat_first_page,
                lp: a.aldstat_last_page,
                life: e,
                ec: a.aldstat_error_count,
                nt: a.aldstat_network_type,
                pm: a.aldstat_phone_model,
                wsdk: a.aldstat_vsdk_version,
                pr: a.aldstat_pixel_ratio,
                ww: a.aldstat_window_width,
                wh: a.aldstat_window_height,
                lang: a.aldstat_language,
                wv: a.aldstat_wechat_version,
                lat: a.aldstat_lat,
                lng: a.aldstat_lng,
                spd: a.aldstat_speed,
                v: i,
                ev: s,
                sv: a.aldstat_sv,
                wvv: a.aldstat_wvv
            };
            "launch" === e ? u += 1 : "show" === e ? p += 1 : h += 1, _.la_c = u, _.as_c = p, 
            _.ah_c = h, a.page_share_count && "number" == typeof a.page_share_count && (_.sc = a.page_share_count), 
            a.aldstat_is_first_open && (_.ifo = "true"), a.aldstat_location_name && (_.ln = a.aldstat_location_name), 
            a.aldstat_src && (_.sr = a.aldstat_src), a.aldstat_qr && (_.qr = a.aldstat_qr), 
            a.ald_share_src && (_.usr = a.ald_share_src), g(_, "GET", "d.html");
        }
    }, D = function(t) {
        this.aldstat_showtime = Date.now(), this.aldstat_showoption = void 0 !== t ? t : {};
        var a = wx.getStorageSync("app_session_key_create_show_upload");
        a && a > 0 && "number" == typeof a && (this.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random())), 
        this.aldstat_duration += Date.now() - this.aldstat_showtime, k(this, "app", "show"), 
        void 0 !== t && (void 0 !== t.shareTicket ? m(this, t.shareTicket, "click") : void 0 !== t.query && void 0 !== t.query.ald_share_src && m(this, "0", "click"));
    }, b = function(t, a) {
        var s = this;
        s.aldstat_is_first_open && (s.aldstat_is_first_open = !1), s.aldstat_duration += Date.now() - s.aldstat_showtime, 
        k(s, "app", "hide");
    }, q = App;
    App = function(t) {
        s(t, "onLaunch", S), s(t, "onUnlaunch", y), s(t, "onShow", D), s(t, "onHide", b), 
        s(t, "onError", x), q(t);
    };
    var A = function(t, a) {
        var s = getApp();
        I(s, this, "hide");
    }, T = function(t, a) {
        var s = getApp();
        I(s, this, "unload");
    }, M = function(t, a) {
        var s = wx.getStorageSync("aldstat_src");
        wx.showShareMenu;
        var e = getApp();
        if (s && (e.aldstat_src = s), !o(t)) {
            void 0 !== t.aldsrc && (s ? e.aldstat_qr = t.aldsrc : (wx.setStorageSync("aldstat_src", t.aldsrc), 
            e.aldstat_src = t.aldsrc, e.aldstat_qr = t.aldsrc));
            wx.getStorageSync("aldstat_uuid");
            void 0 !== t.ald_share_src && (e.ald_share_src = t.ald_share_src), this.aldstat_page_args = JSON.stringify(t);
        }
        I(e, this, "load");
    }, I = function(a, s, e) {
        var n = wx.getStorageSync("page_" + e + "_upload");
        if (!(!n && "show" !== e || 1 > n && "number" == typeof n)) {
            s.aldstat_start_time = Date.now(), s.aldstat_error_count = 0, a.aldstat_page_count ? a.aldstat_page_count++ : a.aldstat_page_count = 1, 
            a.aldstat_first_page || (a.aldstat_first_page = s.__route__, s.aldstat_is_first_page = !0), 
            a.aldstat_last_page = s.__route__;
            var o = {
                uu: t(a),
                at: a.aldstat_access_token,
                wsr: a.aldstat_showoption,
                ak: d.app_key,
                ev: "page",
                st: s.aldstat_start_time,
                dr: Date.now() - s.aldstat_start_time,
                pp: s.__route__,
                life: e,
                sc: s.page_share_count,
                ec: s.aldstat_error_count,
                nt: a.aldstat_network_type,
                pm: a.aldstat_phone_model,
                pr: a.aldstat_pixel_ratio,
                ww: a.aldstat_window_width,
                wh: a.aldstat_window_height,
                lang: a.aldstat_language,
                wv: a.aldstat_wechat_version,
                lat: a.aldstat_lat,
                lng: a.aldstat_lng,
                spd: a.aldstat_speed,
                v: i,
                wsdk: a.aldstat_vsdk_version,
                sv: a.aldstat_sv,
                wvv: a.aldstat_wvv
            };
            s.aldstat_is_first_page && (o.ifp = "true"), a.aldstat_page_last_page && (o.lp = a.aldstat_page_last_page), 
            a.aldstat_location_name && (o.ln = a.aldstat_location_name), s.aldstat_page_args && (o.ag = s.aldstat_page_args), 
            a.aldstat_src && (o.sr = a.aldstat_src), a.aldstat_qr && (o.qr = a.aldstat_qr), 
            a.ald_share_src && (o.usr = a.ald_share_src), a.aldstat_page_last_page = s.__route__, 
            g(o, "GET", "d.html");
        }
    }, E = function(t, a) {
        var s = getApp();
        I(s, this, "show");
    }, G = function(t, a) {
        var s = getApp();
        v(s, "event", "ald_pulldownrefresh", 1);
    }, O = function(t, a) {
        var s = getApp();
        v(s, "event", "ald_reachbottom", 1);
    }, j = Page, N = function(t, a) {
        var s = this, e = getApp();
        if (console.log(t[1]), void 0 !== t && void 0 !== t[1]) {
            var n = wx.getStorageSync("aldstat_uuid"), o = wx.getStorageSync(n), _ = "";
            if ("undefined" !== e.ald_share_src && e.ald_share_src) {
                _ = e.ald_share_src;
                var r = _.split(",");
                r.length >= 3 && (r.shift(), _ = r.toString()), "" !== _ && (_ = _ + "," + n);
            } else _ = wx.getStorageSync("aldstat_uuid");
            t[1].path && "undefined" !== t[1].path || (t[1].path = d.defaultPath ? d.defaultPath : s.__route__), 
            t[1].path += -1 != t[1].path.indexOf("?") ? "&ald_share_src=" + _ : "?ald_share_src=" + _, 
            v(e, "event", "ald_share_chain", {
                path: e.aldstat_last_page,
                chain: _
            }), "" === o || void 0 === o ? (wx.setStorageSync(n, 1), o = 1, e.page_share_count = o) : (o = parseInt(wx.getStorageSync(n)) + 1, 
            e.page_share_count = o, wx.setStorageSync(n, o)), (void 0 === d.getShareUserInfo || !0 === d.getShareUserInfo) && f(function(t) {
                var a = wx.getStorageSync("aldstat_uuid");
                t.userInfo.uu = a, g(t.userInfo, "GET", "u.html");
            });
            t[1];
            void 0 === t[1].success && (t[1].success = function(t) {}), void 0 === t[1].fail && (t[1].fail = function(t) {});
            var i = t[1].fail, l = t[1].success;
            return t[1].success = function(t) {
                new Array();
                if ("object" == _typeof(t.shareTickets)) for (var a = 0; a < t.shareTickets.length; a++) m(e, t.shareTickets[a], "user");
                v(e, "event", "ald_share_status", JSON.stringify(t)), l(t);
            }, t[1].fail = function(t) {
                v(e, "event", "ald_share_status", "fail"), i(t);
            }, t[1];
        }
    };
    Page = function(t) {
        s(t, "onLoad", M), s(t, "onUnload", T), s(t, "onShow", E), s(t, "onHide", A), s(t, "onReachBottom", O), 
        s(t, "onPullDownRefresh", G), void 0 !== t.onShareAppMessage && e(t, "onShareAppMessage", N), 
        j(t);
    };
}();