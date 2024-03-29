!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t();
}(this, function() {
    "use strict";
    function e() {
        return Os.apply(null, arguments);
    }
    function t(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
    }
    function n(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e);
    }
    function s(e) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e) if (e.hasOwnProperty(t)) return !1;
        return !0;
    }
    function i(e) {
        return void 0 === e;
    }
    function r(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
    }
    function a(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
    }
    function o(e, t) {
        var n, s = [];
        for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
        return s;
    }
    function u(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    function l(e, t) {
        for (var n in t) u(t, n) && (e[n] = t[n]);
        return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), 
        e;
    }
    function d(e, t, n, s) {
        return Dt(e, t, n, s, !0).utc();
    }
    function h() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        };
    }
    function c(e) {
        return null == e._pf && (e._pf = h()), e._pf;
    }
    function f(e) {
        if (null == e._isValid) {
            var t = c(e), n = Ts.call(t.parsedDateParts, function(e) {
                return null != e;
            }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), 
            null != Object.isFrozen && Object.isFrozen(e)) return s;
            e._isValid = s;
        }
        return e._isValid;
    }
    function m(e) {
        var t = d(NaN);
        return null != e ? l(c(t), e) : c(t).userInvalidated = !0, t;
    }
    function _(e, t) {
        var n, s, r;
        if (i(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), i(t._i) || (e._i = t._i), 
        i(t._f) || (e._f = t._f), i(t._l) || (e._l = t._l), i(t._strict) || (e._strict = t._strict), 
        i(t._tzm) || (e._tzm = t._tzm), i(t._isUTC) || (e._isUTC = t._isUTC), i(t._offset) || (e._offset = t._offset), 
        i(t._pf) || (e._pf = c(t)), i(t._locale) || (e._locale = t._locale), xs.length > 0) for (n = 0; n < xs.length; n++) s = xs[n], 
        r = t[s], i(r) || (e[s] = r);
        return e;
    }
    function y(t) {
        _(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
        !1 === bs && (bs = !0, e.updateOffset(this), bs = !1);
    }
    function g(e) {
        return e instanceof y || null != e && null != e._isAMomentObject;
    }
    function p(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function w(e) {
        var t = +e, n = 0;
        return 0 !== t && isFinite(t) && (n = p(t)), n;
    }
    function v(e, t, n) {
        var s, i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0;
        for (s = 0; s < i; s++) (n && e[s] !== t[s] || !n && w(e[s]) !== w(t[s])) && a++;
        return a + r;
    }
    function M(t) {
        !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t);
    }
    function S(t, n) {
        var s = !0;
        return l(function() {
            if (null != e.deprecationHandler && e.deprecationHandler(null, t), s) {
                for (var i, r = [], a = 0; a < arguments.length; a++) {
                    if (i = "", "object" == typeof arguments[a]) {
                        i += "\n[" + a + "] ";
                        for (var o in arguments[0]) i += o + ": " + arguments[0][o] + ", ";
                        i = i.slice(0, -2);
                    } else i = arguments[a];
                    r.push(i);
                }
                M(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + new Error().stack), 
                s = !1;
            }
            return n.apply(this, arguments);
        }, n);
    }
    function D(t, n) {
        null != e.deprecationHandler && e.deprecationHandler(t, n), Ps[t] || (M(n), Ps[t] = !0);
    }
    function k(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
    }
    function Y(e) {
        var t, n;
        for (n in e) t = e[n], k(t) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
    }
    function O(e, t) {
        var s, i = l({}, e);
        for (s in t) u(t, s) && (n(e[s]) && n(t[s]) ? (i[s] = {}, l(i[s], e[s]), l(i[s], t[s])) : null != t[s] ? i[s] = t[s] : delete i[s]);
        for (s in e) u(e, s) && !u(t, s) && n(e[s]) && (i[s] = l({}, i[s]));
        return i;
    }
    function T(e) {
        null != e && this.set(e);
    }
    function x(e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return k(s) ? s.call(t, n) : s;
    }
    function b(e) {
        var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1);
        }), this._longDateFormat[e]);
    }
    function P() {
        return this._invalidDate;
    }
    function W(e) {
        return this._ordinal.replace("%d", e);
    }
    function H(e, t, n, s) {
        var i = this._relativeTime[n];
        return k(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
    }
    function R(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return k(n) ? n(t) : n.replace(/%s/i, t);
    }
    function C(e, t) {
        var n = e.toLowerCase();
        Ls[n] = Ls[n + "s"] = Ls[t] = e;
    }
    function F(e) {
        return "string" == typeof e ? Ls[e] || Ls[e.toLowerCase()] : void 0;
    }
    function L(e) {
        var t, n, s = {};
        for (n in e) u(e, n) && (t = F(n)) && (s[t] = e[n]);
        return s;
    }
    function U(e, t) {
        Us[e] = t;
    }
    function N(e) {
        var t = [];
        for (var n in e) t.push({
            unit: n,
            priority: Us[n]
        });
        return t.sort(function(e, t) {
            return e.priority - t.priority;
        }), t;
    }
    function G(e, t, n) {
        var s = "" + Math.abs(e), i = t - s.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s;
    }
    function V(e, t, n, s) {
        var i = s;
        "string" == typeof s && (i = function() {
            return this[s]();
        }), e && (Es[e] = i), t && (Es[t[0]] = function() {
            return G(i.apply(this, arguments), t[1], t[2]);
        }), n && (Es[n] = function() {
            return this.localeData().ordinal(i.apply(this, arguments), e);
        });
    }
    function E(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
    }
    function I(e) {
        var t, n, s = e.match(Ns);
        for (t = 0, n = s.length; t < n; t++) Es[s[t]] ? s[t] = Es[s[t]] : s[t] = E(s[t]);
        return function(t) {
            var i, r = "";
            for (i = 0; i < n; i++) r += k(s[i]) ? s[i].call(t, e) : s[i];
            return r;
        };
    }
    function A(e, t) {
        return e.isValid() ? (t = j(t, e.localeData()), Vs[t] = Vs[t] || I(t), Vs[t](e)) : e.localeData().invalidDate();
    }
    function j(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e;
        }
        var s = 5;
        for (Gs.lastIndex = 0; s >= 0 && Gs.test(e); ) e = e.replace(Gs, n), Gs.lastIndex = 0, 
        s -= 1;
        return e;
    }
    function Z(e, t, n) {
        ri[e] = k(t) ? t : function(e, s) {
            return e && n ? n : t;
        };
    }
    function z(e, t) {
        return u(ri, e) ? ri[e](t._strict, t._locale) : new RegExp($(e));
    }
    function $(e) {
        return q(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, s, i) {
            return t || n || s || i;
        }));
    }
    function q(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function J(e, t) {
        var n, s = t;
        for ("string" == typeof e && (e = [ e ]), r(t) && (s = function(e, n) {
            n[t] = w(e);
        }), n = 0; n < e.length; n++) ai[e[n]] = s;
    }
    function B(e, t) {
        J(e, function(e, n, s, i) {
            s._w = s._w || {}, t(e, s._w, s, i);
        });
    }
    function Q(e, t, n) {
        null != t && u(ai, e) && ai[e](t, n._a, n, e);
    }
    function X(e) {
        return K(e) ? 366 : 365;
    }
    function K(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
    }
    function ee() {
        return K(this.year());
    }
    function te(t, n) {
        return function(s) {
            return null != s ? (se(this, t, s), e.updateOffset(this, n), this) : ne(this, t);
        };
    }
    function ne(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
    }
    function se(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && K(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), oe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
    }
    function ie(e) {
        return e = F(e), k(this[e]) ? this[e]() : this;
    }
    function re(e, t) {
        if ("object" == typeof e) {
            e = L(e);
            for (var n = N(e), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit]);
        } else if (e = F(e), k(this[e])) return this[e](t);
        return this;
    }
    function ae(e, t) {
        return (e % t + t) % t;
    }
    function oe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n = ae(t, 12);
        return e += (t - n) / 12, 1 === n ? K(e) ? 29 : 28 : 31 - n % 7 % 2;
    }
    function ue(e, n) {
        return e ? t(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || pi).test(n) ? "format" : "standalone"][e.month()] : t(this._months) ? this._months : this._months.standalone;
    }
    function le(e, n) {
        return e ? t(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[pi.test(n) ? "format" : "standalone"][e.month()] : t(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }
    function de(e, t, n) {
        var s, i, r, a = e.toLocaleLowerCase();
        if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
        this._shortMonthsParse = [], s = 0; s < 12; ++s) r = d([ 2e3, s ]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), 
        this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
        return n ? "MMM" === t ? (i = yi.call(this._shortMonthsParse, a), -1 !== i ? i : null) : (i = yi.call(this._longMonthsParse, a), 
        -1 !== i ? i : null) : "MMM" === t ? -1 !== (i = yi.call(this._shortMonthsParse, a)) ? i : (i = yi.call(this._longMonthsParse, a), 
        -1 !== i ? i : null) : -1 !== (i = yi.call(this._longMonthsParse, a)) ? i : (i = yi.call(this._shortMonthsParse, a), 
        -1 !== i ? i : null);
    }
    function he(e, t, n) {
        var s, i, r;
        if (this._monthsParseExact) return de.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
        s = 0; s < 12; s++) {
            if (i = d([ 2e3, s ]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), 
            this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), 
            n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), 
            this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
            if (!n && this._monthsParse[s].test(e)) return s;
        }
    }
    function ce(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t) if (/^\d+$/.test(t)) t = w(t); else if (t = e.localeData().monthsParse(t), 
        !r(t)) return e;
        return n = Math.min(e.date(), oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), 
        e;
    }
    function fe(t) {
        return null != t ? (ce(this, t), e.updateOffset(this, !0), this) : ne(this, "Month");
    }
    function me() {
        return oe(this.year(), this.month());
    }
    function _e(e) {
        return this._monthsParseExact ? (u(this, "_monthsRegex") || ge.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = Mi), 
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }
    function ye(e) {
        return this._monthsParseExact ? (u(this, "_monthsRegex") || ge.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = Si), 
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
    }
    function ge() {
        function e(e, t) {
            return t.length - e.length;
        }
        var t, n, s = [], i = [], r = [];
        for (t = 0; t < 12; t++) n = d([ 2e3, t ]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), 
        r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
        for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) s[t] = q(s[t]), i[t] = q(i[t]);
        for (t = 0; t < 24; t++) r[t] = q(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
        this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
    }
    function pe(e, t, n, s, i, r, a) {
        var o = new Date(e, t, n, s, i, r, a);
        return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o;
    }
    function we(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), 
        t;
    }
    function ve(e, t, n) {
        var s = 7 + t - n;
        return -(7 + we(e, 0, s).getUTCDay() - t) % 7 + s - 1;
    }
    function Me(e, t, n, s, i) {
        var r, a, o = (7 + n - s) % 7, u = ve(e, s, i), l = 1 + 7 * (t - 1) + o + u;
        return l <= 0 ? (r = e - 1, a = X(r) + l) : l > X(e) ? (r = e + 1, a = l - X(e)) : (r = e, 
        a = l), {
            year: r,
            dayOfYear: a
        };
    }
    function Se(e, t, n) {
        var s, i, r = ve(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return a < 1 ? (i = e.year() - 1, s = a + De(i, t, n)) : a > De(e.year(), t, n) ? (s = a - De(e.year(), t, n), 
        i = e.year() + 1) : (i = e.year(), s = a), {
            week: s,
            year: i
        };
    }
    function De(e, t, n) {
        var s = ve(e, t, n), i = ve(e + 1, t, n);
        return (X(e) - s + i) / 7;
    }
    function ke(e) {
        return Se(e, this._week.dow, this._week.doy).week;
    }
    function Ye() {
        return this._week.dow;
    }
    function Oe() {
        return this._week.doy;
    }
    function Te(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d");
    }
    function xe(e) {
        var t = Se(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d");
    }
    function be(e, t) {
        return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10);
    }
    function Pe(e, t) {
        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
    }
    function We(e, n) {
        return e ? t(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(n) ? "format" : "standalone"][e.day()] : t(this._weekdays) ? this._weekdays : this._weekdays.standalone;
    }
    function He(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
    }
    function Re(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
    }
    function Ce(e, t, n) {
        var s, i, r, a = e.toLocaleLowerCase();
        if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
        this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = d([ 2e3, 1 ]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), 
        this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
        return n ? "dddd" === t ? (i = yi.call(this._weekdaysParse, a), -1 !== i ? i : null) : "ddd" === t ? (i = yi.call(this._shortWeekdaysParse, a), 
        -1 !== i ? i : null) : (i = yi.call(this._minWeekdaysParse, a), -1 !== i ? i : null) : "dddd" === t ? -1 !== (i = yi.call(this._weekdaysParse, a)) ? i : -1 !== (i = yi.call(this._shortWeekdaysParse, a)) ? i : (i = yi.call(this._minWeekdaysParse, a), 
        -1 !== i ? i : null) : "ddd" === t ? -1 !== (i = yi.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = yi.call(this._weekdaysParse, a)) ? i : (i = yi.call(this._minWeekdaysParse, a), 
        -1 !== i ? i : null) : -1 !== (i = yi.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = yi.call(this._weekdaysParse, a)) ? i : (i = yi.call(this._shortWeekdaysParse, a), 
        -1 !== i ? i : null);
    }
    function Fe(e, t, n) {
        var s, i, r;
        if (this._weekdaysParseExact) return Ce.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
        this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
            if (i = d([ 2e3, 1 ]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), 
            this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), 
            this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), 
            this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), 
            this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
            if (!n && this._weekdaysParse[s].test(e)) return s;
        }
    }
    function Le(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = be(e, this.localeData()), this.add(e - t, "d")) : t;
    }
    function Ue(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d");
    }
    function Ne(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
            var t = Pe(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7);
        }
        return this.day() || 7;
    }
    function Ge(e) {
        return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ie.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Ti), 
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }
    function Ve(e) {
        return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ie.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = xi), 
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }
    function Ee(e) {
        return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ie.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = bi), 
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }
    function Ie() {
        function e(e, t) {
            return t.length - e.length;
        }
        var t, n, s, i, r, a = [], o = [], u = [], l = [];
        for (t = 0; t < 7; t++) n = d([ 2e3, 1 ]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), 
        r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), 
        l.push(r);
        for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = q(o[t]), 
        u[t] = q(u[t]), l[t] = q(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
        this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), 
        this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
    }
    function Ae() {
        return this.hours() % 12 || 12;
    }
    function je() {
        return this.hours() || 24;
    }
    function Ze(e, t) {
        V(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
    }
    function ze(e, t) {
        return t._meridiemParse;
    }
    function $e(e) {
        return "p" === (e + "").toLowerCase().charAt(0);
    }
    function qe(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
    }
    function Je(e) {
        return e ? e.toLowerCase().replace("_", "-") : e;
    }
    function Be(e) {
        for (var t, n, s, i, r = 0; r < e.length; ) {
            for (i = Je(e[r]).split("-"), t = i.length, n = Je(e[r + 1]), n = n ? n.split("-") : null; t > 0; ) {
                if (s = Qe(i.slice(0, t).join("-"))) return s;
                if (n && n.length >= t && v(i, n, !0) >= t - 1) break;
                t--;
            }
            r++;
        }
        return Pi;
    }
    function Qe(e) {
        var t = null;
        if (!Ci[e] && "undefined" != typeof module && module && module.exports) try {
            t = Pi._abbr;
            require("./locale/" + e), Xe(t);
        } catch (e) {}
        return Ci[e];
    }
    function Xe(e, t) {
        var n;
        return e && (n = i(t) ? tt(e) : Ke(e, t), n ? Pi = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), 
        Pi._abbr;
    }
    function Ke(e, t) {
        if (null !== t) {
            var n, s = Ri;
            if (t.abbr = e, null != Ci[e]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
            s = Ci[e]._config; else if (null != t.parentLocale) if (null != Ci[t.parentLocale]) s = Ci[t.parentLocale]._config; else {
                if (null == (n = Qe(t.parentLocale))) return Fi[t.parentLocale] || (Fi[t.parentLocale] = []), 
                Fi[t.parentLocale].push({
                    name: e,
                    config: t
                }), null;
                s = n._config;
            }
            return Ci[e] = new T(O(s, t)), Fi[e] && Fi[e].forEach(function(e) {
                Ke(e.name, e.config);
            }), Xe(e), Ci[e];
        }
        return delete Ci[e], null;
    }
    function et(e, t) {
        if (null != t) {
            var n, s, i = Ri;
            s = Qe(e), null != s && (i = s._config), t = O(i, t), n = new T(t), n.parentLocale = Ci[e], 
            Ci[e] = n, Xe(e);
        } else null != Ci[e] && (null != Ci[e].parentLocale ? Ci[e] = Ci[e].parentLocale : null != Ci[e] && delete Ci[e]);
        return Ci[e];
    }
    function tt(e) {
        var n;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Pi;
        if (!t(e)) {
            if (n = Qe(e)) return n;
            e = [ e ];
        }
        return Be(e);
    }
    function nt() {
        return Ws(Ci);
    }
    function st(e) {
        var t, n = e._a;
        return n && -2 === c(e).overflow && (t = n[ui] < 0 || n[ui] > 11 ? ui : n[li] < 1 || n[li] > oe(n[oi], n[ui]) ? li : n[di] < 0 || n[di] > 24 || 24 === n[di] && (0 !== n[hi] || 0 !== n[ci] || 0 !== n[fi]) ? di : n[hi] < 0 || n[hi] > 59 ? hi : n[ci] < 0 || n[ci] > 59 ? ci : n[fi] < 0 || n[fi] > 999 ? fi : -1, 
        c(e)._overflowDayOfYear && (t < oi || t > li) && (t = li), c(e)._overflowWeeks && -1 === t && (t = mi), 
        c(e)._overflowWeekday && -1 === t && (t = _i), c(e).overflow = t), e;
    }
    function it(e, t, n) {
        return null != e ? e : null != t ? t : n;
    }
    function rt(t) {
        var n = new Date(e.now());
        return t._useUTC ? [ n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() ] : [ n.getFullYear(), n.getMonth(), n.getDate() ];
    }
    function at(e) {
        var t, n, s, i, r, a = [];
        if (!e._d) {
            for (s = rt(e), e._w && null == e._a[li] && null == e._a[ui] && ot(e), null != e._dayOfYear && (r = it(e._a[oi], s[oi]), 
            (e._dayOfYear > X(r) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0), n = we(r, 0, e._dayOfYear), 
            e._a[ui] = n.getUTCMonth(), e._a[li] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = a[t] = s[t];
            for (;t < 7; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[di] && 0 === e._a[hi] && 0 === e._a[ci] && 0 === e._a[fi] && (e._nextDay = !0, 
            e._a[di] = 0), e._d = (e._useUTC ? we : pe).apply(null, a), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), 
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[di] = 24), 
            e._w && void 0 !== e._w.d && e._w.d !== i && (c(e).weekdayMismatch = !0);
        }
    }
    function ot(e) {
        var t, n, s, i, r, a, o, u;
        if (t = e._w, null != t.GG || null != t.W || null != t.E) r = 1, a = 4, n = it(t.GG, e._a[oi], Se(kt(), 1, 4).year), 
        s = it(t.W, 1), ((i = it(t.E, 1)) < 1 || i > 7) && (u = !0); else {
            r = e._locale._week.dow, a = e._locale._week.doy;
            var l = Se(kt(), r, a);
            n = it(t.gg, e._a[oi], l.year), s = it(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + r, 
            (t.e < 0 || t.e > 6) && (u = !0)) : i = r;
        }
        s < 1 || s > De(n, r, a) ? c(e)._overflowWeeks = !0 : null != u ? c(e)._overflowWeekday = !0 : (o = Me(n, s, i, r, a), 
        e._a[oi] = o.year, e._dayOfYear = o.dayOfYear);
    }
    function ut(e) {
        var t, n, s, i, r, a, o = e._i, u = Li.exec(o) || Ui.exec(o);
        if (u) {
            for (c(e).iso = !0, t = 0, n = Gi.length; t < n; t++) if (Gi[t][1].exec(u[1])) {
                i = Gi[t][0], s = !1 !== Gi[t][2];
                break;
            }
            if (null == i) return void (e._isValid = !1);
            if (u[3]) {
                for (t = 0, n = Vi.length; t < n; t++) if (Vi[t][1].exec(u[3])) {
                    r = (u[2] || " ") + Vi[t][0];
                    break;
                }
                if (null == r) return void (e._isValid = !1);
            }
            if (!s && null != r) return void (e._isValid = !1);
            if (u[4]) {
                if (!Ni.exec(u[4])) return void (e._isValid = !1);
                a = "Z";
            }
            e._f = i + (r || "") + (a || ""), yt(e);
        } else e._isValid = !1;
    }
    function lt(e, t, n, s, i, r) {
        var a = [ dt(e), vi.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10) ];
        return r && a.push(parseInt(r, 10)), a;
    }
    function dt(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
    }
    function ht(e) {
        return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
    }
    function ct(e, t, n) {
        if (e) {
            if (Yi.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) return c(n).weekdayMismatch = !0, 
            n._isValid = !1, !1;
        }
        return !0;
    }
    function ft(e, t, n) {
        if (e) return Ai[e];
        if (t) return 0;
        var s = parseInt(n, 10), i = s % 100;
        return (s - i) / 100 * 60 + i;
    }
    function mt(e) {
        var t = Ii.exec(ht(e._i));
        if (t) {
            var n = lt(t[4], t[3], t[2], t[5], t[6], t[7]);
            if (!ct(t[1], n, e)) return;
            e._a = n, e._tzm = ft(t[8], t[9], t[10]), e._d = we.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), 
            c(e).rfc2822 = !0;
        } else e._isValid = !1;
    }
    function _t(t) {
        var n = Ei.exec(t._i);
        if (null !== n) return void (t._d = new Date(+n[1]));
        ut(t), !1 === t._isValid && (delete t._isValid, mt(t), !1 === t._isValid && (delete t._isValid, 
        e.createFromInputFallback(t)));
    }
    function yt(t) {
        if (t._f === e.ISO_8601) return void ut(t);
        if (t._f === e.RFC_2822) return void mt(t);
        t._a = [], c(t).empty = !0;
        var n, s, i, r, a, o = "" + t._i, u = o.length, l = 0;
        for (i = j(t._f, t._locale).match(Ns) || [], n = 0; n < i.length; n++) r = i[n], 
        s = (o.match(z(r, t)) || [])[0], s && (a = o.substr(0, o.indexOf(s)), a.length > 0 && c(t).unusedInput.push(a), 
        o = o.slice(o.indexOf(s) + s.length), l += s.length), Es[r] ? (s ? c(t).empty = !1 : c(t).unusedTokens.push(r), 
        Q(r, s, t)) : t._strict && !s && c(t).unusedTokens.push(r);
        c(t).charsLeftOver = u - l, o.length > 0 && c(t).unusedInput.push(o), t._a[di] <= 12 && !0 === c(t).bigHour && t._a[di] > 0 && (c(t).bigHour = void 0), 
        c(t).parsedDateParts = t._a.slice(0), c(t).meridiem = t._meridiem, t._a[di] = gt(t._locale, t._a[di], t._meridiem), 
        at(t), st(t);
    }
    function gt(e, t, n) {
        var s;
        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (s = e.isPM(n), 
        s && t < 12 && (t += 12), s || 12 !== t || (t = 0), t) : t;
    }
    function pt(e) {
        var t, n, s, i, r;
        if (0 === e._f.length) return c(e).invalidFormat = !0, void (e._d = new Date(NaN));
        for (i = 0; i < e._f.length; i++) r = 0, t = _({}, e), null != e._useUTC && (t._useUTC = e._useUTC), 
        t._f = e._f[i], yt(t), f(t) && (r += c(t).charsLeftOver, r += 10 * c(t).unusedTokens.length, 
        c(t).score = r, (null == s || r < s) && (s = r, n = t));
        l(e, n || t);
    }
    function wt(e) {
        if (!e._d) {
            var t = L(e._i);
            e._a = o([ t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond ], function(e) {
                return e && parseInt(e, 10);
            }), at(e);
        }
    }
    function vt(e) {
        var t = new y(st(Mt(e)));
        return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
    }
    function Mt(e) {
        var n = e._i, s = e._f;
        return e._locale = e._locale || tt(e._l), null === n || void 0 === s && "" === n ? m({
            nullInput: !0
        }) : ("string" == typeof n && (e._i = n = e._locale.preparse(n)), g(n) ? new y(st(n)) : (a(n) ? e._d = n : t(s) ? pt(e) : s ? yt(e) : St(e), 
        f(e) || (e._d = null), e));
    }
    function St(s) {
        var u = s._i;
        i(u) ? s._d = new Date(e.now()) : a(u) ? s._d = new Date(u.valueOf()) : "string" == typeof u ? _t(s) : t(u) ? (s._a = o(u.slice(0), function(e) {
            return parseInt(e, 10);
        }), at(s)) : n(u) ? wt(s) : r(u) ? s._d = new Date(u) : e.createFromInputFallback(s);
    }
    function Dt(e, i, r, a, o) {
        var u = {};
        return !0 !== r && !1 !== r || (a = r, r = void 0), (n(e) && s(e) || t(e) && 0 === e.length) && (e = void 0), 
        u._isAMomentObject = !0, u._useUTC = u._isUTC = o, u._l = r, u._i = e, u._f = i, 
        u._strict = a, vt(u);
    }
    function kt(e, t, n, s) {
        return Dt(e, t, n, s, !1);
    }
    function Yt(e, n) {
        var s, i;
        if (1 === n.length && t(n[0]) && (n = n[0]), !n.length) return kt();
        for (s = n[0], i = 1; i < n.length; ++i) n[i].isValid() && !n[i][e](s) || (s = n[i]);
        return s;
    }
    function Ot() {
        return Yt("isBefore", [].slice.call(arguments, 0));
    }
    function Tt() {
        return Yt("isAfter", [].slice.call(arguments, 0));
    }
    function xt(e) {
        for (var t in e) if (-1 === yi.call($i, t) || null != e[t] && isNaN(e[t])) return !1;
        for (var n = !1, s = 0; s < $i.length; ++s) if (e[$i[s]]) {
            if (n) return !1;
            parseFloat(e[$i[s]]) !== w(e[$i[s]]) && (n = !0);
        }
        return !0;
    }
    function bt() {
        return this._isValid;
    }
    function Pt() {
        return Jt(NaN);
    }
    function Wt(e) {
        var t = L(e), n = t.year || 0, s = t.quarter || 0, i = t.month || 0, r = t.week || 0, a = t.day || 0, o = t.hour || 0, u = t.minute || 0, l = t.second || 0, d = t.millisecond || 0;
        this._isValid = xt(t), this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, 
        this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = tt(), 
        this._bubble();
    }
    function Ht(e) {
        return e instanceof Wt;
    }
    function Rt(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
    }
    function Ct(e, t) {
        V(e, 0, 0, function() {
            var e = this.utcOffset(), n = "+";
            return e < 0 && (e = -e, n = "-"), n + G(~~(e / 60), 2) + t + G(~~e % 60, 2);
        });
    }
    function Ft(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var s = n[n.length - 1] || [], i = (s + "").match(qi) || [ "-", 0, 0 ], r = 60 * i[1] + w(i[2]);
        return 0 === r ? 0 : "+" === i[0] ? r : -r;
    }
    function Lt(t, n) {
        var s, i;
        return n._isUTC ? (s = n.clone(), i = (g(t) || a(t) ? t.valueOf() : kt(t).valueOf()) - s.valueOf(), 
        s._d.setTime(s._d.valueOf() + i), e.updateOffset(s, !1), s) : kt(t).local();
    }
    function Ut(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
    }
    function Nt(t, n, s) {
        var i, r = this._offset || 0;
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
            if ("string" == typeof t) {
                if (null === (t = Ft(ni, t))) return this;
            } else Math.abs(t) < 16 && !s && (t *= 60);
            return !this._isUTC && n && (i = Ut(this)), this._offset = t, this._isUTC = !0, 
            null != i && this.add(i, "m"), r !== t && (!n || this._changeInProgress ? en(this, Jt(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
            e.updateOffset(this, !0), this._changeInProgress = null)), this;
        }
        return this._isUTC ? r : Ut(this);
    }
    function Gt(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
    }
    function Vt(e) {
        return this.utcOffset(0, e);
    }
    function Et(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ut(this), "m")), 
        this;
    }
    function It() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
            var e = Ft(ti, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
        }
        return this;
    }
    function At(e) {
        return !!this.isValid() && (e = e ? kt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
    }
    function jt() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function Zt() {
        if (!i(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (_(e, this), e = Mt(e), e._a) {
            var t = e._isUTC ? d(e._a) : kt(e._a);
            this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0;
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
    }
    function zt() {
        return !!this.isValid() && !this._isUTC;
    }
    function $t() {
        return !!this.isValid() && this._isUTC;
    }
    function qt() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset);
    }
    function Jt(e, t) {
        var n, s, i, a = e, o = null;
        return Ht(e) ? a = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : r(e) ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (o = Ji.exec(e)) ? (n = "-" === o[1] ? -1 : 1, 
        a = {
            y: 0,
            d: w(o[li]) * n,
            h: w(o[di]) * n,
            m: w(o[hi]) * n,
            s: w(o[ci]) * n,
            ms: w(Rt(1e3 * o[fi])) * n
        }) : (o = Bi.exec(e)) ? (n = "-" === o[1] ? -1 : (o[1], 1), a = {
            y: Bt(o[2], n),
            M: Bt(o[3], n),
            w: Bt(o[4], n),
            d: Bt(o[5], n),
            h: Bt(o[6], n),
            m: Bt(o[7], n),
            s: Bt(o[8], n)
        }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (i = Xt(kt(a.from), kt(a.to)), 
        a = {}, a.ms = i.milliseconds, a.M = i.months), s = new Wt(a), Ht(e) && u(e, "_locale") && (s._locale = e._locale), 
        s;
    }
    function Bt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t;
    }
    function Qt(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, 
        n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
    }
    function Xt(e, t) {
        var n;
        return e.isValid() && t.isValid() ? (t = Lt(t, e), e.isBefore(t) ? n = Qt(e, t) : (n = Qt(t, e), 
        n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
            milliseconds: 0,
            months: 0
        };
    }
    function Kt(e, t) {
        return function(n, s) {
            var i, r;
            return null === s || isNaN(+s) || (D(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
            r = n, n = s, s = r), n = "string" == typeof n ? +n : n, i = Jt(n, s), en(this, i, e), 
            this;
        };
    }
    function en(t, n, s, i) {
        var r = n._milliseconds, a = Rt(n._days), o = Rt(n._months);
        t.isValid() && (i = null == i || i, o && ce(t, ne(t, "Month") + o * s), a && se(t, "Date", ne(t, "Date") + a * s), 
        r && t._d.setTime(t._d.valueOf() + r * s), i && e.updateOffset(t, a || o));
    }
    function tn(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
    }
    function nn(t, n) {
        var s = t || kt(), i = Lt(s, this).startOf("day"), r = e.calendarFormat(this, i) || "sameElse", a = n && (k(n[r]) ? n[r].call(this, s) : n[r]);
        return this.format(a || this.localeData().calendar(r, this, kt(s)));
    }
    function sn() {
        return new y(this);
    }
    function rn(e, t) {
        var n = g(e) ? e : kt(e);
        return !(!this.isValid() || !n.isValid()) && (t = F(i(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
    }
    function an(e, t) {
        var n = g(e) ? e : kt(e);
        return !(!this.isValid() || !n.isValid()) && (t = F(i(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
    }
    function on(e, t, n, s) {
        return s = s || "()", ("(" === s[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n));
    }
    function un(e, t) {
        var n, s = g(e) ? e : kt(e);
        return !(!this.isValid() || !s.isValid()) && (t = F(t || "millisecond"), "millisecond" === t ? this.valueOf() === s.valueOf() : (n = s.valueOf(), 
        this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
    }
    function ln(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t);
    }
    function dn(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t);
    }
    function hn(e, t, n) {
        var s, i, r;
        if (!this.isValid()) return NaN;
        if (s = Lt(e, this), !s.isValid()) return NaN;
        switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = F(t)) {
          case "year":
            r = cn(this, s) / 12;
            break;

          case "month":
            r = cn(this, s);
            break;

          case "quarter":
            r = cn(this, s) / 3;
            break;

          case "second":
            r = (this - s) / 1e3;
            break;

          case "minute":
            r = (this - s) / 6e4;
            break;

          case "hour":
            r = (this - s) / 36e5;
            break;

          case "day":
            r = (this - s - i) / 864e5;
            break;

          case "week":
            r = (this - s - i) / 6048e5;
            break;

          default:
            r = this - s;
        }
        return n ? r : p(r);
    }
    function cn(e, t) {
        var n, s, i = 12 * (t.year() - e.year()) + (t.month() - e.month()), r = e.clone().add(i, "months");
        return t - r < 0 ? (n = e.clone().add(i - 1, "months"), s = (t - r) / (r - n)) : (n = e.clone().add(i + 1, "months"), 
        s = (t - r) / (n - r)), -(i + s) || 0;
    }
    function fn() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function mn(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e, n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : k(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
    }
    function _n() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment", t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", 
        t = "Z");
        var n = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = t + '[")]';
        return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i);
    }
    function yn(t) {
        t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
        var n = A(this, t);
        return this.localeData().postformat(n);
    }
    function gn(e, t) {
        return this.isValid() && (g(e) && e.isValid() || kt(e).isValid()) ? Jt({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
    }
    function pn(e) {
        return this.from(kt(), e);
    }
    function wn(e, t) {
        return this.isValid() && (g(e) && e.isValid() || kt(e).isValid()) ? Jt({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
    }
    function vn(e) {
        return this.to(kt(), e);
    }
    function Mn(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (t = tt(e), null != t && (this._locale = t), 
        this);
    }
    function Sn() {
        return this._locale;
    }
    function Dn(e) {
        switch (e = F(e)) {
          case "year":
            this.month(0);

          case "quarter":
          case "month":
            this.date(1);

          case "week":
          case "isoWeek":
          case "day":
          case "date":
            this.hours(0);

          case "hour":
            this.minutes(0);

          case "minute":
            this.seconds(0);

          case "second":
            this.milliseconds(0);
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), 
        this;
    }
    function kn(e) {
        return void 0 === (e = F(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), 
        this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
    }
    function Yn() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
    }
    function On() {
        return Math.floor(this.valueOf() / 1e3);
    }
    function Tn() {
        return new Date(this.valueOf());
    }
    function xn() {
        var e = this;
        return [ e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond() ];
    }
    function bn() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        };
    }
    function Pn() {
        return this.isValid() ? this.toISOString() : null;
    }
    function Wn() {
        return f(this);
    }
    function Hn() {
        return l({}, c(this));
    }
    function Rn() {
        return c(this).overflow;
    }
    function Cn() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    function Fn(e, t) {
        V(0, [ e, e.length ], 0, t);
    }
    function Ln(e) {
        return Vn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function Un(e) {
        return Vn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function Nn() {
        return De(this.year(), 1, 4);
    }
    function Gn() {
        var e = this.localeData()._week;
        return De(this.year(), e.dow, e.doy);
    }
    function Vn(e, t, n, s, i) {
        var r;
        return null == e ? Se(this, s, i).year : (r = De(e, s, i), t > r && (t = r), En.call(this, e, t, n, s, i));
    }
    function En(e, t, n, s, i) {
        var r = Me(e, t, n, s, i), a = we(r.year, 0, r.dayOfYear);
        return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), 
        this;
    }
    function In(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
    }
    function An(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d");
    }
    function jn(e, t) {
        t[fi] = w(1e3 * ("0." + e));
    }
    function Zn() {
        return this._isUTC ? "UTC" : "";
    }
    function zn() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }
    function $n(e) {
        return kt(1e3 * e);
    }
    function qn() {
        return kt.apply(null, arguments).parseZone();
    }
    function Jn(e) {
        return e;
    }
    function Bn(e, t, n, s) {
        var i = tt(), r = d().set(s, t);
        return i[n](r, e);
    }
    function Qn(e, t, n) {
        if (r(e) && (t = e, e = void 0), e = e || "", null != t) return Bn(e, t, n, "month");
        var s, i = [];
        for (s = 0; s < 12; s++) i[s] = Bn(e, s, n, "month");
        return i;
    }
    function Xn(e, t, n, s) {
        "boolean" == typeof e ? (r(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, 
        e = !1, r(t) && (n = t, t = void 0), t = t || "");
        var i = tt(), a = e ? i._week.dow : 0;
        if (null != n) return Bn(t, (n + a) % 7, s, "day");
        var o, u = [];
        for (o = 0; o < 7; o++) u[o] = Bn(t, (o + a) % 7, s, "day");
        return u;
    }
    function Kn(e, t) {
        return Qn(e, t, "months");
    }
    function es(e, t) {
        return Qn(e, t, "monthsShort");
    }
    function ts(e, t, n) {
        return Xn(e, t, n, "weekdays");
    }
    function ns(e, t, n) {
        return Xn(e, t, n, "weekdaysShort");
    }
    function ss(e, t, n) {
        return Xn(e, t, n, "weekdaysMin");
    }
    function is() {
        var e = this._data;
        return this._milliseconds = or(this._milliseconds), this._days = or(this._days), 
        this._months = or(this._months), e.milliseconds = or(e.milliseconds), e.seconds = or(e.seconds), 
        e.minutes = or(e.minutes), e.hours = or(e.hours), e.months = or(e.months), e.years = or(e.years), 
        this;
    }
    function rs(e, t, n, s) {
        var i = Jt(t, n);
        return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, 
        e._bubble();
    }
    function as(e, t) {
        return rs(this, e, t, 1);
    }
    function os(e, t) {
        return rs(this, e, t, -1);
    }
    function us(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function ls() {
        var e, t, n, s, i, r = this._milliseconds, a = this._days, o = this._months, u = this._data;
        return r >= 0 && a >= 0 && o >= 0 || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * us(hs(o) + a), 
        a = 0, o = 0), u.milliseconds = r % 1e3, e = p(r / 1e3), u.seconds = e % 60, t = p(e / 60), 
        u.minutes = t % 60, n = p(t / 60), u.hours = n % 24, a += p(n / 24), i = p(ds(a)), 
        o += i, a -= us(hs(i)), s = p(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, 
        this;
    }
    function ds(e) {
        return 4800 * e / 146097;
    }
    function hs(e) {
        return 146097 * e / 4800;
    }
    function cs(e) {
        if (!this.isValid()) return NaN;
        var t, n, s = this._milliseconds;
        if ("month" === (e = F(e)) || "year" === e) return t = this._days + s / 864e5, n = this._months + ds(t), 
        "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(hs(this._months)), e) {
          case "week":
            return t / 7 + s / 6048e5;

          case "day":
            return t + s / 864e5;

          case "hour":
            return 24 * t + s / 36e5;

          case "minute":
            return 1440 * t + s / 6e4;

          case "second":
            return 86400 * t + s / 1e3;

          case "millisecond":
            return Math.floor(864e5 * t) + s;

          default:
            throw new Error("Unknown unit " + e);
        }
    }
    function fs() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN;
    }
    function ms(e) {
        return function() {
            return this.as(e);
        };
    }
    function _s() {
        return Jt(this);
    }
    function ys(e) {
        return e = F(e), this.isValid() ? this[e + "s"]() : NaN;
    }
    function gs(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN;
        };
    }
    function ps() {
        return p(this.days() / 7);
    }
    function ws(e, t, n, s, i) {
        return i.relativeTime(t || 1, !!n, e, s);
    }
    function vs(e, t, n) {
        var s = Jt(e).abs(), i = Dr(s.as("s")), r = Dr(s.as("m")), a = Dr(s.as("h")), o = Dr(s.as("d")), u = Dr(s.as("M")), l = Dr(s.as("y")), d = i <= kr.ss && [ "s", i ] || i < kr.s && [ "ss", i ] || r <= 1 && [ "m" ] || r < kr.m && [ "mm", r ] || a <= 1 && [ "h" ] || a < kr.h && [ "hh", a ] || o <= 1 && [ "d" ] || o < kr.d && [ "dd", o ] || u <= 1 && [ "M" ] || u < kr.M && [ "MM", u ] || l <= 1 && [ "y" ] || [ "yy", l ];
        return d[2] = t, d[3] = +e > 0, d[4] = n, ws.apply(null, d);
    }
    function Ms(e) {
        return void 0 === e ? Dr : "function" == typeof e && (Dr = e, !0);
    }
    function Ss(e, t) {
        return void 0 !== kr[e] && (void 0 === t ? kr[e] : (kr[e] = t, "s" === e && (kr.ss = t - 1), 
        !0));
    }
    function Ds(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t = this.localeData(), n = vs(this, !e, t);
        return e && (n = t.pastFuture(+this, n)), t.postformat(n);
    }
    function ks(e) {
        return (e > 0) - (e < 0) || +e;
    }
    function Ys() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n, s = Yr(this._milliseconds) / 1e3, i = Yr(this._days), r = Yr(this._months);
        e = p(s / 60), t = p(e / 60), s %= 60, e %= 60, n = p(r / 12), r %= 12;
        var a = n, o = r, u = i, l = t, d = e, h = s ? s.toFixed(3).replace(/\.?0+$/, "") : "", c = this.asSeconds();
        if (!c) return "P0D";
        var f = c < 0 ? "-" : "", m = ks(this._months) !== ks(c) ? "-" : "", _ = ks(this._days) !== ks(c) ? "-" : "", y = ks(this._milliseconds) !== ks(c) ? "-" : "";
        return f + "P" + (a ? m + a + "Y" : "") + (o ? m + o + "M" : "") + (u ? _ + u + "D" : "") + (l || d || h ? "T" : "") + (l ? y + l + "H" : "") + (d ? y + d + "M" : "") + (h ? y + h + "S" : "");
    }
    var Os, Ts;
    Ts = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1;
    };
    var xs = e.momentProperties = [], bs = !1, Ps = {};
    e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
    var Ws;
    Ws = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e) u(e, t) && n.push(t);
        return n;
    };
    var Hs = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, Rs = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, Cs = /\d{1,2}/, Fs = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Ls = {}, Us = {}, Ns = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Gs = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Vs = {}, Es = {}, Is = /\d/, As = /\d\d/, js = /\d{3}/, Zs = /\d{4}/, zs = /[+-]?\d{6}/, $s = /\d\d?/, qs = /\d\d\d\d?/, Js = /\d\d\d\d\d\d?/, Bs = /\d{1,3}/, Qs = /\d{1,4}/, Xs = /[+-]?\d{1,6}/, Ks = /\d+/, ei = /[+-]?\d+/, ti = /Z|[+-]\d\d:?\d\d/gi, ni = /Z|[+-]\d\d(?::?\d\d)?/gi, si = /[+-]?\d+(\.\d{1,3})?/, ii = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ri = {}, ai = {}, oi = 0, ui = 1, li = 2, di = 3, hi = 4, ci = 5, fi = 6, mi = 7, _i = 8;
    V("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e;
    }), V(0, [ "YY", 2 ], 0, function() {
        return this.year() % 100;
    }), V(0, [ "YYYY", 4 ], 0, "year"), V(0, [ "YYYYY", 5 ], 0, "year"), V(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
    C("year", "y"), U("year", 1), Z("Y", ei), Z("YY", $s, As), Z("YYYY", Qs, Zs), Z("YYYYY", Xs, zs), 
    Z("YYYYYY", Xs, zs), J([ "YYYYY", "YYYYYY" ], oi), J("YYYY", function(t, n) {
        n[oi] = 2 === t.length ? e.parseTwoDigitYear(t) : w(t);
    }), J("YY", function(t, n) {
        n[oi] = e.parseTwoDigitYear(t);
    }), J("Y", function(e, t) {
        t[oi] = parseInt(e, 10);
    }), e.parseTwoDigitYear = function(e) {
        return w(e) + (w(e) > 68 ? 1900 : 2e3);
    };
    var yi, gi = te("FullYear", !0);
    yi = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1;
    }, V("M", [ "MM", 2 ], "Mo", function() {
        return this.month() + 1;
    }), V("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e);
    }), V("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e);
    }), C("month", "M"), U("month", 8), Z("M", $s), Z("MM", $s, As), Z("MMM", function(e, t) {
        return t.monthsShortRegex(e);
    }), Z("MMMM", function(e, t) {
        return t.monthsRegex(e);
    }), J([ "M", "MM" ], function(e, t) {
        t[ui] = w(e) - 1;
    }), J([ "MMM", "MMMM" ], function(e, t, n, s) {
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[ui] = i : c(n).invalidMonth = e;
    });
    var pi = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, wi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), vi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Mi = ii, Si = ii;
    V("w", [ "ww", 2 ], "wo", "week"), V("W", [ "WW", 2 ], "Wo", "isoWeek"), C("week", "w"), 
    C("isoWeek", "W"), U("week", 5), U("isoWeek", 5), Z("w", $s), Z("ww", $s, As), Z("W", $s), 
    Z("WW", $s, As), B([ "w", "ww", "W", "WW" ], function(e, t, n, s) {
        t[s.substr(0, 1)] = w(e);
    });
    var Di = {
        dow: 0,
        doy: 6
    };
    V("d", 0, "do", "day"), V("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e);
    }), V("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e);
    }), V("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e);
    }), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), 
    C("isoWeekday", "E"), U("day", 11), U("weekday", 11), U("isoWeekday", 11), Z("d", $s), 
    Z("e", $s), Z("E", $s), Z("dd", function(e, t) {
        return t.weekdaysMinRegex(e);
    }), Z("ddd", function(e, t) {
        return t.weekdaysShortRegex(e);
    }), Z("dddd", function(e, t) {
        return t.weekdaysRegex(e);
    }), B([ "dd", "ddd", "dddd" ], function(e, t, n, s) {
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i : c(n).invalidWeekday = e;
    }), B([ "d", "e", "E" ], function(e, t, n, s) {
        t[s] = w(e);
    });
    var ki = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Yi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Oi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ti = ii, xi = ii, bi = ii;
    V("H", [ "HH", 2 ], 0, "hour"), V("h", [ "hh", 2 ], 0, Ae), V("k", [ "kk", 2 ], 0, je), 
    V("hmm", 0, 0, function() {
        return "" + Ae.apply(this) + G(this.minutes(), 2);
    }), V("hmmss", 0, 0, function() {
        return "" + Ae.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2);
    }), V("Hmm", 0, 0, function() {
        return "" + this.hours() + G(this.minutes(), 2);
    }), V("Hmmss", 0, 0, function() {
        return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2);
    }), Ze("a", !0), Ze("A", !1), C("hour", "h"), U("hour", 13), Z("a", ze), Z("A", ze), 
    Z("H", $s), Z("h", $s), Z("k", $s), Z("HH", $s, As), Z("hh", $s, As), Z("kk", $s, As), 
    Z("hmm", qs), Z("hmmss", Js), Z("Hmm", qs), Z("Hmmss", Js), J([ "H", "HH" ], di), 
    J([ "k", "kk" ], function(e, t, n) {
        var s = w(e);
        t[di] = 24 === s ? 0 : s;
    }), J([ "a", "A" ], function(e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e;
    }), J([ "h", "hh" ], function(e, t, n) {
        t[di] = w(e), c(n).bigHour = !0;
    }), J("hmm", function(e, t, n) {
        var s = e.length - 2;
        t[di] = w(e.substr(0, s)), t[hi] = w(e.substr(s)), c(n).bigHour = !0;
    }), J("hmmss", function(e, t, n) {
        var s = e.length - 4, i = e.length - 2;
        t[di] = w(e.substr(0, s)), t[hi] = w(e.substr(s, 2)), t[ci] = w(e.substr(i)), c(n).bigHour = !0;
    }), J("Hmm", function(e, t, n) {
        var s = e.length - 2;
        t[di] = w(e.substr(0, s)), t[hi] = w(e.substr(s));
    }), J("Hmmss", function(e, t, n) {
        var s = e.length - 4, i = e.length - 2;
        t[di] = w(e.substr(0, s)), t[hi] = w(e.substr(s, 2)), t[ci] = w(e.substr(i));
    });
    var Pi, Wi = /[ap]\.?m?\.?/i, Hi = te("Hours", !0), Ri = {
        calendar: Hs,
        longDateFormat: Rs,
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: Cs,
        relativeTime: Fs,
        months: wi,
        monthsShort: vi,
        week: Di,
        weekdays: ki,
        weekdaysMin: Oi,
        weekdaysShort: Yi,
        meridiemParse: Wi
    }, Ci = {}, Fi = {}, Li = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ui = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ni = /Z|[+-]\d\d(?::?\d\d)?/, Gi = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], Vi = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], Ei = /^\/?Date\((\-?\d+)/i, Ii = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Ai = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    e.createFromInputFallback = S("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }), e.ISO_8601 = function() {}, e.RFC_2822 = function() {};
    var ji = S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = kt.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : m();
    }), Zi = S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = kt.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : m();
    }), zi = function() {
        return Date.now ? Date.now() : +new Date();
    }, $i = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
    Ct("Z", ":"), Ct("ZZ", ""), Z("Z", ni), Z("ZZ", ni), J([ "Z", "ZZ" ], function(e, t, n) {
        n._useUTC = !0, n._tzm = Ft(ni, e);
    });
    var qi = /([\+\-]|\d\d)/gi;
    e.updateOffset = function() {};
    var Ji = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Bi = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    Jt.fn = Wt.prototype, Jt.invalid = Pt;
    var Qi = Kt(1, "add"), Xi = Kt(-1, "subtract");
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Ki = S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e);
    });
    V(0, [ "gg", 2 ], 0, function() {
        return this.weekYear() % 100;
    }), V(0, [ "GG", 2 ], 0, function() {
        return this.isoWeekYear() % 100;
    }), Fn("gggg", "weekYear"), Fn("ggggg", "weekYear"), Fn("GGGG", "isoWeekYear"), 
    Fn("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), U("weekYear", 1), 
    U("isoWeekYear", 1), Z("G", ei), Z("g", ei), Z("GG", $s, As), Z("gg", $s, As), Z("GGGG", Qs, Zs), 
    Z("gggg", Qs, Zs), Z("GGGGG", Xs, zs), Z("ggggg", Xs, zs), B([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(e, t, n, s) {
        t[s.substr(0, 2)] = w(e);
    }), B([ "gg", "GG" ], function(t, n, s, i) {
        n[i] = e.parseTwoDigitYear(t);
    }), V("Q", 0, "Qo", "quarter"), C("quarter", "Q"), U("quarter", 7), Z("Q", Is), 
    J("Q", function(e, t) {
        t[ui] = 3 * (w(e) - 1);
    }), V("D", [ "DD", 2 ], "Do", "date"), C("date", "D"), U("date", 9), Z("D", $s), 
    Z("DD", $s, As), Z("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
    }), J([ "D", "DD" ], li), J("Do", function(e, t) {
        t[li] = w(e.match($s)[0]);
    });
    var er = te("Date", !0);
    V("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), U("dayOfYear", 4), 
    Z("DDD", Bs), Z("DDDD", js), J([ "DDD", "DDDD" ], function(e, t, n) {
        n._dayOfYear = w(e);
    }), V("m", [ "mm", 2 ], 0, "minute"), C("minute", "m"), U("minute", 14), Z("m", $s), 
    Z("mm", $s, As), J([ "m", "mm" ], hi);
    var tr = te("Minutes", !1);
    V("s", [ "ss", 2 ], 0, "second"), C("second", "s"), U("second", 15), Z("s", $s), 
    Z("ss", $s, As), J([ "s", "ss" ], ci);
    var nr = te("Seconds", !1);
    V("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
    }), V(0, [ "SS", 2 ], 0, function() {
        return ~~(this.millisecond() / 10);
    }), V(0, [ "SSS", 3 ], 0, "millisecond"), V(0, [ "SSSS", 4 ], 0, function() {
        return 10 * this.millisecond();
    }), V(0, [ "SSSSS", 5 ], 0, function() {
        return 100 * this.millisecond();
    }), V(0, [ "SSSSSS", 6 ], 0, function() {
        return 1e3 * this.millisecond();
    }), V(0, [ "SSSSSSS", 7 ], 0, function() {
        return 1e4 * this.millisecond();
    }), V(0, [ "SSSSSSSS", 8 ], 0, function() {
        return 1e5 * this.millisecond();
    }), V(0, [ "SSSSSSSSS", 9 ], 0, function() {
        return 1e6 * this.millisecond();
    }), C("millisecond", "ms"), U("millisecond", 16), Z("S", Bs, Is), Z("SS", Bs, As), 
    Z("SSS", Bs, js);
    var sr;
    for (sr = "SSSS"; sr.length <= 9; sr += "S") Z(sr, Ks);
    for (sr = "S"; sr.length <= 9; sr += "S") J(sr, jn);
    var ir = te("Milliseconds", !1);
    V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName");
    var rr = y.prototype;
    rr.add = Qi, rr.calendar = nn, rr.clone = sn, rr.diff = hn, rr.endOf = kn, rr.format = yn, 
    rr.from = gn, rr.fromNow = pn, rr.to = wn, rr.toNow = vn, rr.get = ie, rr.invalidAt = Rn, 
    rr.isAfter = rn, rr.isBefore = an, rr.isBetween = on, rr.isSame = un, rr.isSameOrAfter = ln, 
    rr.isSameOrBefore = dn, rr.isValid = Wn, rr.lang = Ki, rr.locale = Mn, rr.localeData = Sn, 
    rr.max = Zi, rr.min = ji, rr.parsingFlags = Hn, rr.set = re, rr.startOf = Dn, rr.subtract = Xi, 
    rr.toArray = xn, rr.toObject = bn, rr.toDate = Tn, rr.toISOString = mn, rr.inspect = _n, 
    rr.toJSON = Pn, rr.toString = fn, rr.unix = On, rr.valueOf = Yn, rr.creationData = Cn, 
    rr.year = gi, rr.isLeapYear = ee, rr.weekYear = Ln, rr.isoWeekYear = Un, rr.quarter = rr.quarters = In, 
    rr.month = fe, rr.daysInMonth = me, rr.week = rr.weeks = Te, rr.isoWeek = rr.isoWeeks = xe, 
    rr.weeksInYear = Gn, rr.isoWeeksInYear = Nn, rr.date = er, rr.day = rr.days = Le, 
    rr.weekday = Ue, rr.isoWeekday = Ne, rr.dayOfYear = An, rr.hour = rr.hours = Hi, 
    rr.minute = rr.minutes = tr, rr.second = rr.seconds = nr, rr.millisecond = rr.milliseconds = ir, 
    rr.utcOffset = Nt, rr.utc = Vt, rr.local = Et, rr.parseZone = It, rr.hasAlignedHourOffset = At, 
    rr.isDST = jt, rr.isLocal = zt, rr.isUtcOffset = $t, rr.isUtc = qt, rr.isUTC = qt, 
    rr.zoneAbbr = Zn, rr.zoneName = zn, rr.dates = S("dates accessor is deprecated. Use date instead.", er), 
    rr.months = S("months accessor is deprecated. Use month instead", fe), rr.years = S("years accessor is deprecated. Use year instead", gi), 
    rr.zone = S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Gt), 
    rr.isDSTShifted = S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Zt);
    var ar = T.prototype;
    ar.calendar = x, ar.longDateFormat = b, ar.invalidDate = P, ar.ordinal = W, ar.preparse = Jn, 
    ar.postformat = Jn, ar.relativeTime = H, ar.pastFuture = R, ar.set = Y, ar.months = ue, 
    ar.monthsShort = le, ar.monthsParse = he, ar.monthsRegex = ye, ar.monthsShortRegex = _e, 
    ar.week = ke, ar.firstDayOfYear = Oe, ar.firstDayOfWeek = Ye, ar.weekdays = We, 
    ar.weekdaysMin = Re, ar.weekdaysShort = He, ar.weekdaysParse = Fe, ar.weekdaysRegex = Ge, 
    ar.weekdaysShortRegex = Ve, ar.weekdaysMinRegex = Ee, ar.isPM = $e, ar.meridiem = qe, 
    Xe("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === w(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
        }
    }), e.lang = S("moment.lang is deprecated. Use moment.locale instead.", Xe), e.langData = S("moment.langData is deprecated. Use moment.localeData instead.", tt);
    var or = Math.abs, ur = ms("ms"), lr = ms("s"), dr = ms("m"), hr = ms("h"), cr = ms("d"), fr = ms("w"), mr = ms("M"), _r = ms("y"), yr = gs("milliseconds"), gr = gs("seconds"), pr = gs("minutes"), wr = gs("hours"), vr = gs("days"), Mr = gs("months"), Sr = gs("years"), Dr = Math.round, kr = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, Yr = Math.abs, Or = Wt.prototype;
    return Or.isValid = bt, Or.abs = is, Or.add = as, Or.subtract = os, Or.as = cs, 
    Or.asMilliseconds = ur, Or.asSeconds = lr, Or.asMinutes = dr, Or.asHours = hr, Or.asDays = cr, 
    Or.asWeeks = fr, Or.asMonths = mr, Or.asYears = _r, Or.valueOf = fs, Or._bubble = ls, 
    Or.clone = _s, Or.get = ys, Or.milliseconds = yr, Or.seconds = gr, Or.minutes = pr, 
    Or.hours = wr, Or.days = vr, Or.weeks = ps, Or.months = Mr, Or.years = Sr, Or.humanize = Ds, 
    Or.toISOString = Ys, Or.toString = Ys, Or.toJSON = Ys, Or.locale = Mn, Or.localeData = Sn, 
    Or.toIsoString = S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ys), 
    Or.lang = Ki, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), Z("x", ei), Z("X", si), 
    J("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10));
    }), J("x", function(e, t, n) {
        n._d = new Date(w(e));
    }), e.version = "2.22.1", function(e) {
        Os = e;
    }(kt), e.fn = rr, e.min = Ot, e.max = Tt, e.now = zi, e.utc = d, e.unix = $n, e.months = Kn, 
    e.isDate = a, e.locale = Xe, e.invalid = m, e.duration = Jt, e.isMoment = g, e.weekdays = ts, 
    e.parseZone = qn, e.localeData = tt, e.isDuration = Ht, e.monthsShort = es, e.weekdaysMin = ss, 
    e.defineLocale = Ke, e.updateLocale = et, e.locales = nt, e.weekdaysShort = ns, 
    e.normalizeUnits = F, e.relativeTimeRounding = Ms, e.relativeTimeThreshold = Ss, 
    e.calendarFormat = tn, e.prototype = rr, e.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "YYYY-[W]WW",
        MONTH: "YYYY-MM"
    }, e;
});