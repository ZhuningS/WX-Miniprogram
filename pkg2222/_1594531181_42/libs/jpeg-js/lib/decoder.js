var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, r = function() {
    function r() {}
    function n(e, r) {
        for (var n, o, a = 0, s = [], t = 16; t > 0 && !e[t - 1]; ) t--;
        s.push({
            children: [],
            index: 0
        });
        var i, c = s[0];
        for (n = 0; n < t; n++) {
            for (o = 0; o < e[n]; o++) {
                for ((c = s.pop()).children[c.index] = r[a]; c.index > 0; ) c = s.pop();
                for (c.index++, s.push(c); s.length <= n; ) s.push(i = {
                    children: [],
                    index: 0
                }), c.children[c.index] = i.children, c = i;
                a++;
            }
            n + 1 < t && (s.push(i = {
                children: [],
                index: 0
            }), c.children[c.index] = i.children, c = i);
        }
        return s[0].children;
    }
    function o(r, n, o, a, s, i, c, f, l) {
        function h() {
            if (L > 0) return L--, A >> L & 1;
            if (255 == (A = r[n++])) {
                var e = r[n++];
                if (e) throw new Error("unexpected marker: " + (A << 8 | e).toString(16));
            }
            return L = 7, A >>> 7;
        }
        function u(r) {
            for (var n, o = r; null !== (n = h()); ) {
                if ("number" == typeof (o = o[n])) return o;
                if ("object" !== (void 0 === o ? "undefined" : e(o))) throw new Error("invalid huffman sequence");
            }
            return null;
        }
        function p(e) {
            for (var r = 0; e > 0; ) {
                var n = h();
                if (null === n) return;
                r = r << 1 | n, e--;
            }
            return r;
        }
        function m(e) {
            var r = p(e);
            return r >= 1 << e - 1 ? r : r + (-1 << e) + 1;
        }
        o.precision, o.samplesPerLine, o.scanLines;
        var d, v, b, w, y, k, g, x = o.mcusPerLine, P = o.progressive, X = (o.maxH, o.maxV, 
        n), A = 0, L = 0, T = 0, C = 0, U = a.length;
        g = P ? 0 === i ? 0 === f ? function(e, r) {
            var n = u(e.huffmanTableDC), o = 0 === n ? 0 : m(n) << l;
            r[0] = e.pred += o;
        } : function(e, r) {
            r[0] |= h() << l;
        } : 0 === f ? function(e, r) {
            if (T > 0) T--; else for (var n = i, o = c; n <= o; ) {
                var a = u(e.huffmanTableAC), s = 15 & a, f = a >> 4;
                if (0 !== s) r[t[n += f]] = m(s) * (1 << l), n++; else {
                    if (f < 15) {
                        T = p(f) + (1 << f) - 1;
                        break;
                    }
                    n += 16;
                }
            }
        } : function(e, r) {
            for (var n = i, o = c, a = 0; n <= o; ) {
                var s = t[n], f = r[s] < 0 ? -1 : 1;
                switch (C) {
                  case 0:
                    var v = u(e.huffmanTableAC), b = 15 & v, a = v >> 4;
                    if (0 === b) a < 15 ? (T = p(a) + (1 << a), C = 4) : (a = 16, C = 1); else {
                        if (1 !== b) throw new Error("invalid ACn encoding");
                        d = m(b), C = a ? 2 : 3;
                    }
                    continue;

                  case 1:
                  case 2:
                    r[s] ? r[s] += (h() << l) * f : 0 == --a && (C = 2 == C ? 3 : 0);
                    break;

                  case 3:
                    r[s] ? r[s] += (h() << l) * f : (r[s] = d << l, C = 0);
                    break;

                  case 4:
                    r[s] && (r[s] += (h() << l) * f);
                }
                n++;
            }
            4 === C && 0 == --T && (C = 0);
        } : function(e, r) {
            var n = u(e.huffmanTableDC), o = 0 === n ? 0 : m(n);
            r[0] = e.pred += o;
            for (var a = 1; a < 64; ) {
                var s = u(e.huffmanTableAC), i = 15 & s, c = s >> 4;
                if (0 !== i) r[t[a += c]] = m(i), a++; else {
                    if (c < 15) break;
                    a += 16;
                }
            }
        };
        var D, E, Y = 0;
        E = 1 == U ? a[0].blocksPerLine * a[0].blocksPerColumn : x * o.mcusPerColumn, s || (s = E);
        for (var I, S; Y < E; ) {
            for (b = 0; b < U; b++) a[b].pred = 0;
            if (T = 0, 1 == U) for (v = a[0], k = 0; k < s; k++) !function(e, r, n) {
                var o = n / e.blocksPerLine | 0, a = n % e.blocksPerLine;
                r(e, e.blocks[o][a]);
            }(v, g, Y), Y++; else for (k = 0; k < s; k++) {
                for (b = 0; b < U; b++) for (I = (v = a[b]).h, S = v.v, w = 0; w < S; w++) for (y = 0; y < I; y++) !function(e, r, n, o, a) {
                    var s = n % x, t = (n / x | 0) * e.v + o, i = s * e.h + a;
                    r(e, e.blocks[t][i]);
                }(v, g, Y, w, y);
                if (++Y === E) break;
            }
            if (L = 0, (D = r[n] << 8 | r[n + 1]) < 65280) throw new Error("marker was not found");
            if (!(D >= 65488 && D <= 65495)) break;
            n += 2;
        }
        return n - X;
    }
    function a(e, r) {
        for (var n, o, a = [], s = r.blocksPerLine, t = r.blocksPerColumn, d = s << 3, v = new Int32Array(64), b = new Uint8Array(64), w = 0; w < t; w++) {
            var y = w << 3;
            for (n = 0; n < 8; n++) a.push(new Uint8Array(d));
            for (var k = 0; k < s; k++) {
                !function(e, n, o) {
                    var a, s, t, d, v, b, w, y, k, g, x = r.quantizationTable, P = o;
                    for (g = 0; g < 64; g++) P[g] = e[g] * x[g];
                    for (g = 0; g < 8; ++g) {
                        var X = 8 * g;
                        0 != P[1 + X] || 0 != P[2 + X] || 0 != P[3 + X] || 0 != P[4 + X] || 0 != P[5 + X] || 0 != P[6 + X] || 0 != P[7 + X] ? (a = p * P[0 + X] + 128 >> 8, 
                        s = p * P[4 + X] + 128 >> 8, t = P[2 + X], d = P[6 + X], v = m * (P[1 + X] - P[7 + X]) + 128 >> 8, 
                        y = m * (P[1 + X] + P[7 + X]) + 128 >> 8, b = P[3 + X] << 4, w = P[5 + X] << 4, 
                        k = a - s + 1 >> 1, a = a + s + 1 >> 1, s = k, k = t * u + d * h + 128 >> 8, t = t * h - d * u + 128 >> 8, 
                        d = k, k = v - w + 1 >> 1, v = v + w + 1 >> 1, w = k, k = y + b + 1 >> 1, b = y - b + 1 >> 1, 
                        y = k, k = a - d + 1 >> 1, a = a + d + 1 >> 1, d = k, k = s - t + 1 >> 1, s = s + t + 1 >> 1, 
                        t = k, k = v * l + y * f + 2048 >> 12, v = v * f - y * l + 2048 >> 12, y = k, k = b * c + w * i + 2048 >> 12, 
                        b = b * i - w * c + 2048 >> 12, w = k, P[0 + X] = a + y, P[7 + X] = a - y, P[1 + X] = s + w, 
                        P[6 + X] = s - w, P[2 + X] = t + b, P[5 + X] = t - b, P[3 + X] = d + v, P[4 + X] = d - v) : (k = p * P[0 + X] + 512 >> 10, 
                        P[0 + X] = k, P[1 + X] = k, P[2 + X] = k, P[3 + X] = k, P[4 + X] = k, P[5 + X] = k, 
                        P[6 + X] = k, P[7 + X] = k);
                    }
                    for (g = 0; g < 8; ++g) {
                        var A = g;
                        0 != P[8 + A] || 0 != P[16 + A] || 0 != P[24 + A] || 0 != P[32 + A] || 0 != P[40 + A] || 0 != P[48 + A] || 0 != P[56 + A] ? (a = p * P[0 + A] + 2048 >> 12, 
                        s = p * P[32 + A] + 2048 >> 12, t = P[16 + A], d = P[48 + A], v = m * (P[8 + A] - P[56 + A]) + 2048 >> 12, 
                        y = m * (P[8 + A] + P[56 + A]) + 2048 >> 12, b = P[24 + A], w = P[40 + A], k = a - s + 1 >> 1, 
                        a = a + s + 1 >> 1, s = k, k = t * u + d * h + 2048 >> 12, t = t * h - d * u + 2048 >> 12, 
                        d = k, k = v - w + 1 >> 1, v = v + w + 1 >> 1, w = k, k = y + b + 1 >> 1, b = y - b + 1 >> 1, 
                        y = k, k = a - d + 1 >> 1, a = a + d + 1 >> 1, d = k, k = s - t + 1 >> 1, s = s + t + 1 >> 1, 
                        t = k, k = v * l + y * f + 2048 >> 12, v = v * f - y * l + 2048 >> 12, y = k, k = b * c + w * i + 2048 >> 12, 
                        b = b * i - w * c + 2048 >> 12, w = k, P[0 + A] = a + y, P[56 + A] = a - y, P[8 + A] = s + w, 
                        P[48 + A] = s - w, P[16 + A] = t + b, P[40 + A] = t - b, P[24 + A] = d + v, P[32 + A] = d - v) : (k = p * o[g + 0] + 8192 >> 14, 
                        P[0 + A] = k, P[8 + A] = k, P[16 + A] = k, P[24 + A] = k, P[32 + A] = k, P[40 + A] = k, 
                        P[48 + A] = k, P[56 + A] = k);
                    }
                    for (g = 0; g < 64; ++g) {
                        var L = 128 + (P[g] + 8 >> 4);
                        n[g] = L < 0 ? 0 : L > 255 ? 255 : L;
                    }
                }(r.blocks[w][k], b, v);
                var g = 0, x = k << 3;
                for (o = 0; o < 8; o++) {
                    var P = a[y + o];
                    for (n = 0; n < 8; n++) P[x + n] = b[g++];
                }
            }
        }
        return a;
    }
    function s(e) {
        return e < 0 ? 0 : e > 255 ? 255 : e;
    }
    var t = new Int32Array([ 0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63 ]), i = 4017, c = 799, f = 3406, l = 2276, h = 1567, u = 3784, p = 5793, m = 2896;
    return r.prototype = {
        load: function(e) {
            var r = new XMLHttpRequest();
            r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function() {
                var e = new Uint8Array(r.response || r.mozResponseArrayBuffer);
                this.parse(e), this.onload && this.onload();
            }.bind(this), r.send(null);
        },
        parse: function(e) {
            function r() {
                var r = e[c] << 8 | e[c + 1];
                return c += 2, r;
            }
            var s, i, c = 0, f = (e.length, null), l = null, h = [], u = [], p = [], m = [], d = r();
            if (65496 != d) throw new Error("SOI not found");
            for (d = r(); 65497 != d; ) {
                switch (d) {
                  case 65280:
                    break;

                  case 65504:
                  case 65505:
                  case 65506:
                  case 65507:
                  case 65508:
                  case 65509:
                  case 65510:
                  case 65511:
                  case 65512:
                  case 65513:
                  case 65514:
                  case 65515:
                  case 65516:
                  case 65517:
                  case 65518:
                  case 65519:
                  case 65534:
                    var v = function() {
                        var n = r(), o = e.subarray(c, c + n - 2);
                        return c += o.length, o;
                    }();
                    65504 === d && 74 === v[0] && 70 === v[1] && 73 === v[2] && 70 === v[3] && 0 === v[4] && (f = {
                        version: {
                            major: v[5],
                            minor: v[6]
                        },
                        densityUnits: v[7],
                        xDensity: v[8] << 8 | v[9],
                        yDensity: v[10] << 8 | v[11],
                        thumbWidth: v[12],
                        thumbHeight: v[13],
                        thumbData: v.subarray(14, 14 + 3 * v[12] * v[13])
                    }), 65518 === d && 65 === v[0] && 100 === v[1] && 111 === v[2] && 98 === v[3] && 101 === v[4] && 0 === v[5] && (l = {
                        version: v[6],
                        flags0: v[7] << 8 | v[8],
                        flags1: v[9] << 8 | v[10],
                        transformCode: v[11]
                    });
                    break;

                  case 65499:
                    for (var b = r() + c - 2; c < b; ) {
                        var w = e[c++], y = new Int32Array(64);
                        if (w >> 4 == 0) for (H = 0; H < 64; H++) y[k = t[H]] = e[c++]; else {
                            if (w >> 4 != 1) throw new Error("DQT: invalid table spec");
                            for (H = 0; H < 64; H++) {
                                var k = t[H];
                                y[k] = r();
                            }
                        }
                        h[15 & w] = y;
                    }
                    break;

                  case 65472:
                  case 65473:
                  case 65474:
                    r(), (s = {}).extended = 65473 === d, s.progressive = 65474 === d, s.precision = e[c++], 
                    s.scanLines = r(), s.samplesPerLine = r(), s.components = {}, s.componentsOrder = [];
                    var g, x = e[c++];
                    for (j = 0; j < x; j++) {
                        g = e[c];
                        var P = e[c + 1] >> 4, X = 15 & e[c + 1], A = e[c + 2];
                        s.componentsOrder.push(g), s.components[g] = {
                            h: P,
                            v: X,
                            quantizationIdx: A
                        }, c += 3;
                    }
                    !function(e) {
                        var r, n, o = 0, a = 0;
                        for (n in e.components) e.components.hasOwnProperty(n) && (o < (r = e.components[n]).h && (o = r.h), 
                        a < r.v && (a = r.v));
                        var s = Math.ceil(e.samplesPerLine / 8 / o), t = Math.ceil(e.scanLines / 8 / a);
                        for (n in e.components) if (e.components.hasOwnProperty(n)) {
                            r = e.components[n];
                            for (var i = Math.ceil(Math.ceil(e.samplesPerLine / 8) * r.h / o), c = Math.ceil(Math.ceil(e.scanLines / 8) * r.v / a), f = s * r.h, l = t * r.v, h = [], u = 0; u < l; u++) {
                                for (var p = [], m = 0; m < f; m++) p.push(new Int32Array(64));
                                h.push(p);
                            }
                            r.blocksPerLine = i, r.blocksPerColumn = c, r.blocks = h;
                        }
                        e.maxH = o, e.maxV = a, e.mcusPerLine = s, e.mcusPerColumn = t;
                    }(s), u.push(s);
                    break;

                  case 65476:
                    var L = r();
                    for (j = 2; j < L; ) {
                        var T = e[c++], C = new Uint8Array(16), U = 0;
                        for (H = 0; H < 16; H++, c++) U += C[H] = e[c];
                        var D = new Uint8Array(U);
                        for (H = 0; H < U; H++, c++) D[H] = e[c];
                        j += 17 + U, (T >> 4 == 0 ? m : p)[15 & T] = n(C, D);
                    }
                    break;

                  case 65501:
                    r(), i = r();
                    break;

                  case 65498:
                    r();
                    var E = e[c++], Y = [];
                    for (j = 0; j < E; j++) {
                        G = s.components[e[c++]];
                        var I = e[c++];
                        G.huffmanTableDC = m[I >> 4], G.huffmanTableAC = p[15 & I], Y.push(G);
                    }
                    var S = e[c++], q = e[c++], M = e[c++], O = o(e, c, s, Y, i, S, q, M >> 4, 15 & M);
                    c += O;
                    break;

                  case 65535:
                    255 !== e[c] && c--;
                    break;

                  default:
                    if (255 == e[c - 3] && e[c - 2] >= 192 && e[c - 2] <= 254) {
                        c -= 3;
                        break;
                    }
                    throw new Error("unknown JPEG marker " + d.toString(16));
                }
                d = r();
            }
            if (1 != u.length) throw new Error("only single frame JPEGs supported");
            for (j = 0; j < u.length; j++) {
                var z = u[j].components;
                for (var H in z) z[H].quantizationTable = h[z[H].quantizationIdx], delete z[H].quantizationIdx;
            }
            this.width = s.samplesPerLine, this.height = s.scanLines, this.jfif = f, this.adobe = l, 
            this.components = [];
            for (var j = 0; j < s.componentsOrder.length; j++) {
                var G = s.components[s.componentsOrder[j]];
                this.components.push({
                    lines: a(0, G),
                    scaleX: G.h / s.maxH,
                    scaleY: G.v / s.maxV
                });
            }
        },
        getData: function(e, r) {
            var n, o, a, t, i, c, f, l, h, u, p, m, d, v, b, w, y, k, g, x, P, X = this.width / e, A = this.height / r, L = 0, T = e * r * this.components.length, C = new Uint8Array(T);
            switch (this.components.length) {
              case 1:
                for (n = this.components[0], u = 0; u < r; u++) for (i = n.lines[0 | u * n.scaleY * A], 
                h = 0; h < e; h++) p = i[0 | h * n.scaleX * X], C[L++] = p;
                break;

              case 2:
                for (n = this.components[0], o = this.components[1], u = 0; u < r; u++) for (i = n.lines[0 | u * n.scaleY * A], 
                c = o.lines[0 | u * o.scaleY * A], h = 0; h < e; h++) p = i[0 | h * n.scaleX * X], 
                C[L++] = p, p = c[0 | h * o.scaleX * X], C[L++] = p;
                break;

              case 3:
                for (P = !0, this.adobe && this.adobe.transformCode ? P = !0 : void 0 !== this.colorTransform && (P = !!this.colorTransform), 
                n = this.components[0], o = this.components[1], a = this.components[2], u = 0; u < r; u++) for (i = n.lines[0 | u * n.scaleY * A], 
                c = o.lines[0 | u * o.scaleY * A], f = a.lines[0 | u * a.scaleY * A], h = 0; h < e; h++) P ? (p = i[0 | h * n.scaleX * X], 
                m = c[0 | h * o.scaleX * X], k = s(p + 1.402 * ((d = f[0 | h * a.scaleX * X]) - 128)), 
                g = s(p - .3441363 * (m - 128) - .71413636 * (d - 128)), x = s(p + 1.772 * (m - 128))) : (k = i[0 | h * n.scaleX * X], 
                g = c[0 | h * o.scaleX * X], x = f[0 | h * a.scaleX * X]), C[L++] = k, C[L++] = g, 
                C[L++] = x;
                break;

              case 4:
                if (!this.adobe) throw "Unsupported color mode (4 components)";
                for (P = !1, this.adobe && this.adobe.transformCode ? P = !0 : void 0 !== this.colorTransform && (P = !!this.colorTransform), 
                n = this.components[0], o = this.components[1], a = this.components[2], t = this.components[3], 
                u = 0; u < r; u++) for (i = n.lines[0 | u * n.scaleY * A], c = o.lines[0 | u * o.scaleY * A], 
                f = a.lines[0 | u * a.scaleY * A], l = t.lines[0 | u * t.scaleY * A], h = 0; h < e; h++) P ? (p = i[0 | h * n.scaleX * X], 
                m = c[0 | h * o.scaleX * X], d = f[0 | h * a.scaleX * X], v = l[0 | h * t.scaleX * X], 
                b = 255 - s(p + 1.402 * (d - 128)), w = 255 - s(p - .3441363 * (m - 128) - .71413636 * (d - 128)), 
                y = 255 - s(p + 1.772 * (m - 128))) : (b = i[0 | h * n.scaleX * X], w = c[0 | h * o.scaleX * X], 
                y = f[0 | h * a.scaleX * X], v = l[0 | h * t.scaleX * X]), C[L++] = 255 - b, C[L++] = 255 - w, 
                C[L++] = 255 - y, C[L++] = 255 - v;
                break;

              default:
                throw "Unsupported color mode";
            }
            return C;
        },
        copyToImageData: function(e) {
            var r, n, o, a, t, i, c, f, l, h = e.width, u = e.height, p = e.data, m = this.getData(h, u), d = 0, v = 0;
            switch (this.components.length) {
              case 1:
                for (n = 0; n < u; n++) for (r = 0; r < h; r++) o = m[d++], p[v++] = o, p[v++] = o, 
                p[v++] = o, p[v++] = 255;
                break;

              case 3:
                for (n = 0; n < u; n++) for (r = 0; r < h; r++) c = m[d++], f = m[d++], l = m[d++], 
                p[v++] = c, p[v++] = f, p[v++] = l, p[v++] = 255;
                break;

              case 4:
                for (n = 0; n < u; n++) for (r = 0; r < h; r++) t = m[d++], i = m[d++], o = m[d++], 
                c = 255 - s(t * (1 - (a = m[d++]) / 255) + a), f = 255 - s(i * (1 - a / 255) + a), 
                l = 255 - s(o * (1 - a / 255) + a), p[v++] = c, p[v++] = f, p[v++] = l, p[v++] = 255;
                break;

              default:
                throw "Unsupported color mode";
            }
        }
    }, r;
}();

module.exports = function(e, n) {
    var o = new Uint8Array(e), a = new r();
    a.parse(o);
    var s = {
        width: a.width,
        height: a.height,
        data: n ? new Uint8Array(a.width * a.height * 4) : new Buffer(a.width * a.height * 4)
    };
    return a.copyToImageData(s), s;
};