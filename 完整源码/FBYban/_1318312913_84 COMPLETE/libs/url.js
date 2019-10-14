Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, t, n) {
    function i(e, n) {
        for (var i = void 0, g = /[a-zA-Z]/, y = /[a-zA-Z0-9\+\-\.]/, w = n || "scheme start", b = 0, C = "", k = !1, q = !1, x = function() {
            _(), v = !0;
        }, I = [], O = function(e) {
            I.push(e);
        }, L = function(e) {
            var t = e.charCodeAt(0);
            return t > 32 && t < 127 && -1 == [ 34, 35, 60, 62, 63, 96 ].indexOf(t) ? e : encodeURIComponent(e);
        }, A = function(e) {
            return "" == e && x(), e.toLowerCase();
        }, E = {
            "%2e": ".",
            ".%2e": "..",
            "%2e.": "..",
            "%2e%2e": ".."
        }; (e[b - 1] != i || 0 == b) && !v; ) {
            var P = e[b];
            if ("scheme start" == w) {
                if (!P || !g.test(P)) {
                    if (n) {
                        O("Invalid scheme.");
                        break;
                    }
                    C = "", w = "no scheme";
                    continue;
                }
                C += P.toLowerCase(), w = "scheme";
            } else if ("scheme" == w) if (P && y.test(P)) C += P.toLowerCase(); else {
                if (":" != P) {
                    if (n) {
                        if (i == P) break;
                        O("Code point not allowed in scheme: " + P);
                        break;
                    }
                    C = "", b = 0, w = "no scheme";
                    continue;
                }
                if (o = C, C = "", n) break;
                m(o) && (d = !0), w = "file" == o ? "relative" : d && t && t._scheme == o ? "relative or authority" : d ? "authority first slash" : "scheme data";
            } else if ("scheme data" == w) "?" == P ? (c = "?", w = "query") : "#" == P ? (p = "#", 
            w = "fragment") : i != P && "\t" != P && "\n" != P && "\r" != P && (s += L(P)); else if ("no scheme" == w) {
                if (t && m(t._scheme)) {
                    w = "relative";
                    continue;
                }
                O("Missing scheme."), x();
            } else if ("relative or authority" == w) {
                if ("/" != P || "/" != e[b + 1]) {
                    O("Expected /, got: " + P), w = "relative";
                    continue;
                }
                w = "authority ignore slashes";
            } else if ("relative" == w) {
                if (d = !0, "file" != o && (o = t._scheme), i == P) {
                    h = t._host, u = t._port, l = t._path, c = t._query;
                    break;
                }
                if ("/" == P || "\\" == P) "\\" == P && O("\\ is an invalid code point."), w = "relative slash"; else if ("?" == P) h = t._host, 
                u = t._port, l = t._path, c = "?", w = "query"; else {
                    if ("#" != P) {
                        var j = e[b + 1], z = e[b + 2];
                        ("file" != o || !g.test(P) || ":" != j && "|" != j || i != z && "/" != z && "\\" != z && "?" != z && "#" != z) && (h = t._host, 
                        u = t._port, (l = t._path).pop()), w = "relative path";
                        continue;
                    }
                    h = t._host, u = t._port, l = t._path, c = t._query, p = "#", w = "fragment";
                }
            } else if ("relative slash" == w) {
                if ("/" != P && "\\" != P) {
                    "file" != o && (h = t._host, u = t._port), w = "relative path";
                    continue;
                }
                "\\" == P && O("\\ is an invalid code point."), w = "file" == o ? "file host" : "authority ignore slashes";
            } else if ("authority first slash" == w) {
                if ("/" != P) {
                    O("Expected '/', got: " + P), w = "authority ignore slashes";
                    continue;
                }
                w = "authority second slash";
            } else if ("authority second slash" == w) {
                if (w = "authority ignore slashes", "/" != P) {
                    O("Expected '/', got: " + P);
                    continue;
                }
            } else if ("authority ignore slashes" == w) {
                if ("/" != P && "\\" != P) {
                    w = "authority";
                    continue;
                }
                O("Expected authority, got: " + P);
            } else if ("authority" == w) if ("@" == P) {
                k && (O("@ already seen."), C += "%40"), k = !0;
                for (var M = 0; M < C.length; M++) {
                    var R = C[M];
                    if ("\t" != R && "\n" != R && "\r" != R) if (":" != R || null !== f) {
                        var U = L(R);
                        null !== f ? f += U : a += U;
                    } else f = ""; else O("Invalid whitespace in authority.");
                }
                C = "";
            } else {
                if (i == P || "/" == P || "\\" == P || "?" == P || "#" == P) {
                    b -= C.length, C = "", w = "host";
                    continue;
                }
                C += P;
            } else if ("file host" == w) {
                if (i == P || "/" == P || "\\" == P || "?" == P || "#" == P) {
                    2 != C.length || !g.test(C[0]) || ":" != C[1] && "|" != C[1] ? 0 == C.length ? w = "relative path start" : (h = A(C), 
                    C = "", w = "relative path start") : w = "relative path";
                    continue;
                }
                "\t" == P || "\n" == P || "\r" == P ? O("Invalid whitespace in file host.") : C += P;
            } else if ("host" == w || "hostname" == w) {
                if (":" != P || q) {
                    if (i == P || "/" == P || "\\" == P || "?" == P || "#" == P) {
                        if (h = A(C), C = "", w = "relative path start", n) break;
                        continue;
                    }
                    "\t" != P && "\n" != P && "\r" != P ? ("[" == P ? q = !0 : "]" == P && (q = !1), 
                    C += P) : O("Invalid code point in host/hostname: " + P);
                } else if (h = A(C), C = "", w = "port", "hostname" == n) break;
            } else if ("port" == w) if (/[0-9]/.test(P)) C += P; else {
                if (i == P || "/" == P || "\\" == P || "?" == P || "#" == P || n) {
                    if ("" != C) {
                        var Z = parseInt(C, 10);
                        Z != r[o] && (u = Z + ""), C = "";
                    }
                    if (n) break;
                    w = "relative path start";
                    continue;
                }
                "\t" == P || "\n" == P || "\r" == P ? O("Invalid code point in port: " + P) : x();
            } else if ("relative path start" == w) {
                if ("\\" == P && O("'\\' not allowed in path."), w = "relative path", "/" != P && "\\" != P) continue;
            } else "relative path" == w ? i != P && "/" != P && "\\" != P && (n || "?" != P && "#" != P) ? "\t" != P && "\n" != P && "\r" != P && (C += L(P)) : ("\\" == P && O("\\ not allowed in relative path."), 
            E.hasOwnProperty(C.toLowerCase()) && (C = E[C.toLowerCase()]), ".." == C ? (l.pop(), 
            "/" != P && "\\" != P && l.push("")) : "." == C && "/" != P && "\\" != P ? l.push("") : "." != C && ("file" == o && 0 == l.length && 2 == C.length && g.test(C[0]) && "|" == C[1] && (C = C[0] + ":"), 
            l.push(C)), C = "", "?" == P ? (c = "?", w = "query") : "#" == P && (p = "#", w = "fragment")) : "query" == w ? n || "#" != P ? i != P && "\t" != P && "\n" != P && "\r" != P && (c += function(e) {
                var t = e.charCodeAt(0);
                return t > 32 && t < 127 && -1 == [ 34, 35, 60, 62, 96 ].indexOf(t) ? e : encodeURIComponent(e);
            }(P)) : (p = "#", w = "fragment") : "fragment" == w && i != P && "\t" != P && "\n" != P && "\r" != P && (p += P);
            b++;
        }
    }
    var r = {
        ftp: 21,
        file: 0,
        gopher: 70,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
    }, o = "", s = "", a = "", f = null, h = "", u = "", l = [], c = "", p = "", g = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), v = !1, d = !1, m = function(e) {
        return e = e || o, r.hasOwnProperty(e);
    }, _ = function() {
        o = "", s = "", a = "", f = null, h = "", u = "", l = [], c = "", p = "", v = !1, 
        d = !1;
    };
    n = n || "utf-8", Object.defineProperties(this, {
        _scheme: {
            get: function() {
                return o;
            }
        },
        _username: {
            get: function() {
                return a;
            }
        },
        _password: {
            get: function() {
                return f;
            }
        },
        _host: {
            get: function() {
                return h;
            }
        },
        _port: {
            get: function() {
                return u;
            }
        },
        _path: {
            get: function() {
                return l;
            }
        },
        _query: {
            get: function() {
                return c;
            }
        },
        _fragment: {
            get: function() {
                return p;
            }
        },
        href: {
            get: function() {
                return v ? e : this.protocol + (d ? "//" + ("" != a || null != f ? a + (null != f ? ":" + f : "") + "@" : "") + this.host : "") + this.pathname + c + p;
            },
            set: function(e) {
                _(), i(e);
            }
        },
        protocol: {
            get: function() {
                return o + ":";
            },
            set: function(e) {
                v || i(e + ":", "scheme start");
            }
        },
        host: {
            get: function() {
                return v ? "" : u ? h + ":" + u : h;
            },
            set: function(e) {
                !v && d && i(e, "host");
            }
        },
        hostname: {
            get: function() {
                return h;
            },
            set: function(e) {
                !v && d && i(e, "hostname");
            }
        },
        port: {
            get: function() {
                return u;
            },
            set: function(e) {
                !v && d && i(e, "port");
            }
        },
        pathname: {
            get: function() {
                return v ? "" : d ? "/" + l.join("/") : s;
            },
            set: function(e) {
                !v && d && (l = [], i(e, "relative path start"));
            }
        },
        search: {
            get: function() {
                return v || !c || "?" == c ? "" : c;
            },
            set: function(e) {
                !v && d && (c = "?", "?" == e[0] && (e = e.substr(1)), i(e, "query"));
            }
        },
        hash: {
            get: function() {
                return v || !p || "#" == p ? "" : p;
            },
            set: function(e) {
                v || (p = "#", "#" == e[0] && (e = e.substr(1)), i(e, "fragment"));
            }
        }
    }), i(g);
};