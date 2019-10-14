function e(e) {
    var r, t, n = {
        omitExtraWLInCodeBlocks: {
            defaultValue: !1,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
        },
        noHeaderId: {
            defaultValue: !1,
            describe: "Turn on/off generated header id",
            type: "boolean"
        },
        prefixHeaderId: {
            defaultValue: !1,
            describe: "Specify a prefix to generated header ids",
            type: "string"
        },
        headerLevelStart: {
            defaultValue: !1,
            describe: "The header blocks level start",
            type: "integer"
        },
        parseImgDimensions: {
            defaultValue: !1,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
        },
        simplifiedAutoLink: {
            defaultValue: !1,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
        },
        literalMidWordUnderscores: {
            defaultValue: !1,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
        },
        strikethrough: {
            defaultValue: !1,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
        },
        tables: {
            defaultValue: !1,
            describe: "Turn on/off tables support",
            type: "boolean"
        },
        tablesHeaderId: {
            defaultValue: !1,
            describe: "Add an id to table headers",
            type: "boolean"
        },
        ghCodeBlocks: {
            defaultValue: !0,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
        },
        tasklists: {
            defaultValue: !1,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
        },
        smoothLivePreview: {
            defaultValue: !1,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
        },
        smartIndentationFix: {
            defaultValue: !1,
            description: "Tries to smartly fix identation in es6 strings",
            type: "boolean"
        }
    };
    if (!1 === e) return JSON.parse(JSON.stringify(n));
    r = {};
    for (t in n) n.hasOwnProperty(t) && (r[t] = n[t].defaultValue);
    return r;
}

function r(e, r) {
    var t, n, o, i, l, c = r ? "Error in " + r + " extension->" : "Error in unnamed extension", u = {
        valid: !0,
        error: ""
    };
    for (a.helper.isArray(e) || (e = [ e ]), t = 0; t < e.length; ++t) {
        if (n = c + " sub-extension " + t + ": ", "object" != (void 0 === (o = e[t]) ? "undefined" : s(o))) return u.valid = !1, 
        u.error = n + "must be an object, but " + (void 0 === o ? "undefined" : s(o)) + " given", 
        u;
        if (!a.helper.isString(o.type)) return u.valid = !1, u.error = n + 'property "type" must be a string, but ' + s(o.type) + " given", 
        u;
        if ("language" === (i = o.type = o.type.toLowerCase()) && (i = o.type = "lang"), 
        "html" === i && (i = o.type = "output"), "lang" !== i && "output" !== i && "listener" !== i) return u.valid = !1, 
        u.error = n + "type " + i + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', 
        u;
        if ("listener" === i) {
            if (a.helper.isUndefined(o.listeners)) return u.valid = !1, u.error = n + '. Extensions of type "listener" must have a property called "listeners"', 
            u;
        } else if (a.helper.isUndefined(o.filter) && a.helper.isUndefined(o.regex)) return u.valid = !1, 
        u.error = n + i + ' extensions must define either a "regex" property or a "filter" method', 
        u;
        if (o.listeners) {
            if ("object" != s(o.listeners)) return u.valid = !1, u.error = n + '"listeners" property must be an object but ' + s(o.listeners) + " given", 
            u;
            for (l in o.listeners) if (o.listeners.hasOwnProperty(l) && "function" != typeof o.listeners[l]) return u.valid = !1, 
            u.error = n + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + l + " must be a function but " + s(o.listeners[l]) + " given", 
            u;
        }
        if (o.filter) {
            if ("function" != typeof o.filter) return u.valid = !1, u.error = n + '"filter" must be a function, but ' + s(o.filter) + " given", 
            u;
        } else if (o.regex) {
            if (a.helper.isString(o.regex) && (o.regex = new RegExp(o.regex, "g")), !o.regex instanceof RegExp) return u.valid = !1, 
            u.error = n + '"regex" property must either be a string or a RegExp object, but ' + s(o.regex) + " given", 
            u;
            if (a.helper.isUndefined(o.replace)) return u.valid = !1, u.error = n + '"regex" extensions must implement a replace string or function', 
            u;
        }
    }
    return u;
}

function t(e, r) {
    return "~E" + r.charCodeAt(0) + "E";
}

var n, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, a = {}, o = {}, i = {}, l = e(!0), c = {
    github: {
        omitExtraWLInCodeBlocks: !0,
        prefixHeaderId: "user-content-",
        simplifiedAutoLink: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0
    },
    vanilla: e(!0)
};

a.helper = {}, a.extensions = {}, a.setOption = function(e, r) {
    return l[e] = r, this;
}, a.getOption = function(e) {
    return l[e];
}, a.getOptions = function() {
    return l;
}, a.resetOptions = function() {
    l = e(!0);
}, a.setFlavor = function(e) {
    var r, t;
    if (c.hasOwnProperty(e)) {
        r = c[e];
        for (t in r) r.hasOwnProperty(t) && (l[t] = r[t]);
    }
}, a.getDefaultOptions = function(r) {
    return e(r);
}, a.subParser = function(e, r) {
    if (a.helper.isString(e)) {
        if (void 0 === r) {
            if (o.hasOwnProperty(e)) return o[e];
            throw Error("SubParser named " + e + " not registered!");
        }
        o[e] = r;
    }
}, a.extension = function(e, t) {
    if (!a.helper.isString(e)) throw Error("Extension 'name' must be a string");
    if (e = a.helper.stdExtName(e), a.helper.isUndefined(t)) {
        if (!i.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
        return i[e];
    }
    "function" == typeof t && (t = t()), a.helper.isArray(t) || (t = [ t ]);
    var n = r(t, e);
    if (!n.valid) throw Error(n.error);
    i[e] = t;
}, a.getAllExtensions = function() {
    return i;
}, a.removeExtension = function(e) {
    delete i[e];
}, a.resetExtensions = function() {
    i = {};
}, a.validateExtension = function(e) {
    var t = r(e, null);
    return !!t.valid || (console.warn(t.error), !1);
}, a.hasOwnProperty("helper") || (a.helper = {}), a.helper.isString = function(e) {
    return "string" == typeof e || e instanceof String;
}, a.helper.isFunction = function(e) {
    var r = {};
    return e && "[object Function]" === r.toString.call(e);
}, a.helper.forEach = function(e, r) {
    if ("function" == typeof e.forEach) e.forEach(r); else for (var t = 0; t < e.length; t++) r(e[t], t, e);
}, a.helper.isArray = function(e) {
    return e.constructor === Array;
}, a.helper.isUndefined = function(e) {
    return void 0 === e;
}, a.helper.stdExtName = function(e) {
    return e.replace(/[_-]||\s/g, "").toLowerCase();
}, a.helper.escapeCharactersCallback = t, a.helper.escapeCharacters = function(e, r, n) {
    var s, a = "([" + r.replace(/([\[\]\\])/g, "\\$1") + "])";
    return n && (a = "\\\\" + a), s = new RegExp(a, "g"), e = e.replace(s, t);
}, n = function(e, r, t, n) {
    var s, a, o, i, l, c, u = n || "", p = u.indexOf("g") > -1, h = new RegExp(r + "|" + t, "g" + u.replace(/g/g, "")), d = new RegExp(r, u.replace(/g/g, "")), f = [];
    do {
        for (s = 0; o = h.exec(e); ) if (d.test(o[0])) s++ || (a = h.lastIndex, i = a - o[0].length); else if (s && !--s && (l = o.index + o[0].length, 
        c = {
            left: {
                start: i,
                end: a
            },
            match: {
                start: a,
                end: o.index
            },
            right: {
                start: o.index,
                end: l
            },
            wholeMatch: {
                start: i,
                end: l
            }
        }, f.push(c), !p)) return f;
    } while (s && (h.lastIndex = a));
    return f;
}, a.helper.matchRecursiveRegExp = function(e, r, t, s) {
    var a, o = n(e, r, t, s), i = [];
    for (a = 0; a < o.length; ++a) i.push([ e.slice(o[a].wholeMatch.start, o[a].wholeMatch.end), e.slice(o[a].match.start, o[a].match.end), e.slice(o[a].left.start, o[a].left.end), e.slice(o[a].right.start, o[a].right.end) ]);
    return i;
}, a.helper.replaceRecursiveRegExp = function(e, r, t, s, o) {
    var i, l, c, u, p, h;
    if (a.helper.isFunction(r) || (i = r, r = function() {
        return i;
    }), l = n(e, t, s, o), c = e, (u = l.length) > 0) {
        for (p = [], 0 !== l[0].wholeMatch.start && p.push(e.slice(0, l[0].wholeMatch.start)), 
        h = 0; u > h; ++h) p.push(r(e.slice(l[h].wholeMatch.start, l[h].wholeMatch.end), e.slice(l[h].match.start, l[h].match.end), e.slice(l[h].left.start, l[h].left.end), e.slice(l[h].right.start, l[h].right.end))), 
        u - 1 > h && p.push(e.slice(l[h].wholeMatch.end, l[h + 1].wholeMatch.start));
        l[u - 1].wholeMatch.end < e.length && p.push(e.slice(l[u - 1].wholeMatch.end)), 
        c = p.join("");
    }
    return c;
}, a.helper.isUndefined(console) && (console = {
    warn: function(e) {
        alert(e);
    },
    log: function(e) {
        alert(e);
    },
    error: function(e) {
        throw e;
    }
}), a.Converter = function(e) {
    function t(e, t) {
        var s, l, c;
        if (t = t || null, a.helper.isString(e)) {
            if (e = a.helper.stdExtName(e), t = e, a.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), 
            void n(a.extensions[e], e);
            if (a.helper.isUndefined(i[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
            e = i[e];
        }
        if ("function" == typeof e && (e = e()), a.helper.isArray(e) || (e = [ e ]), !(s = r(e, t)).valid) throw Error(s.error);
        for (l = 0; l < e.length; ++l) {
            switch (e[l].type) {
              case "lang":
                h.push(e[l]);
                break;

              case "output":
                d.push(e[l]);
            }
            if (e[l].hasOwnProperty(f)) for (c in e[l].listeners) e[l].listeners.hasOwnProperty(c) && o(c, e[l].listeners[c]);
        }
    }
    function n(e, t) {
        var n, s;
        if ("function" == typeof e && (e = e(new a.Converter())), a.helper.isArray(e) || (e = [ e ]), 
        !(n = r(e, t)).valid) throw Error(n.error);
        for (s = 0; s < e.length; ++s) switch (e[s].type) {
          case "lang":
            h.push(e[s]);
            break;

          case "output":
            d.push(e[s]);
            break;

          default:
            throw Error("Extension loader error: Type unrecognized!!!");
        }
    }
    function o(e, r) {
        if (!a.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + (void 0 === e ? "undefined" : s(e)) + " given");
        if ("function" != typeof r) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + (void 0 === r ? "undefined" : s(r)) + " given");
        f.hasOwnProperty(e) || (f[e] = []), f[e].push(r);
    }
    function u(e) {
        var r = e.match(/^\s*/)[0].length, t = new RegExp("^\\s{0," + r + "}", "gm");
        return e.replace(t, "");
    }
    var p = {}, h = [], d = [], f = {};
    (function() {
        var r, n;
        e = e || {};
        for (r in l) l.hasOwnProperty(r) && (p[r] = l[r]);
        if ("object" != (void 0 === e ? "undefined" : s(e))) throw Error("Converter expects the passed parameter to be an object, but " + (void 0 === e ? "undefined" : s(e)) + " was passed instead.");
        for (n in e) e.hasOwnProperty(n) && (p[n] = e[n]);
        p.extensions && a.helper.forEach(p.extensions, t);
    })(), this._dispatch = function(e, r, t, n) {
        var s, a;
        if (f.hasOwnProperty(e)) for (s = 0; s < f[e].length; ++s) (a = f[e][s](e, r, this, t, n)) && void 0 !== a && (r = a);
        return r;
    }, this.listen = function(e, r) {
        return o(e, r), this;
    }, this.makeHtml = function(e) {
        if (!e) return e;
        var r = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions: h,
            outputModifiers: d,
            converter: this,
            ghCodeBlocks: []
        };
        return e = e.replace(/~/g, "~T"), e = e.replace(/\$/g, "~D"), e = e.replace(/\r\n/g, "\n"), 
        e = e.replace(/\r/g, "\n"), p.smartIndentationFix && (e = u(e)), e = e, e = a.subParser("detab")(e, p, r), 
        e = a.subParser("stripBlankLines")(e, p, r), a.helper.forEach(h, function(t) {
            e = a.subParser("runExtension")(t, e, p, r);
        }), e = a.subParser("hashPreCodeTags")(e, p, r), e = a.subParser("githubCodeBlocks")(e, p, r), 
        e = a.subParser("hashHTMLBlocks")(e, p, r), e = a.subParser("hashHTMLSpans")(e, p, r), 
        e = a.subParser("stripLinkDefinitions")(e, p, r), e = a.subParser("blockGamut")(e, p, r), 
        e = a.subParser("unhashHTMLSpans")(e, p, r), e = a.subParser("unescapeSpecialChars")(e, p, r), 
        e = e.replace(/~D/g, "$$"), e = e.replace(/~T/g, "~"), a.helper.forEach(d, function(t) {
            e = a.subParser("runExtension")(t, e, p, r);
        }), e;
    }, this.setOption = function(e, r) {
        p[e] = r;
    }, this.getOption = function(e) {
        return p[e];
    }, this.getOptions = function() {
        return p;
    }, this.addExtension = function(e, r) {
        t(e, r = r || null);
    }, this.useExtension = function(e) {
        t(e);
    }, this.setFlavor = function(e) {
        var r, t;
        if (c.hasOwnProperty(e)) {
            r = c[e];
            for (t in r) r.hasOwnProperty(t) && (p[t] = r[t]);
        }
    }, this.removeExtension = function(e) {
        var r, t, n, s;
        for (a.helper.isArray(e) || (e = [ e ]), r = 0; r < e.length; ++r) {
            for (t = e[r], n = 0; n < h.length; ++n) h[n] === t && h[n].splice(n, 1);
            for (s = 0; s < d.length; ++n) d[s] === t && d[s].splice(n, 1);
        }
    }, this.getAllExtensions = function() {
        return {
            language: h,
            output: d
        };
    };
}, a.subParser("anchors", function(e, r, t) {
    var n = function(e, r, n, s, o, i, l, c) {
        var u, p, h, d, f;
        if (a.helper.isUndefined(c) && (c = ""), e = r, u = n, p = s.toLowerCase(), h = o, 
        d = c, !h) if (p || (p = u.toLowerCase().replace(/ ?\n/g, " ")), h = "#" + p, a.helper.isUndefined(t.gUrls[p])) {
            if (!(e.search(/\(\s*\)$/m) > -1)) return e;
            h = "";
        } else h = t.gUrls[p], a.helper.isUndefined(t.gTitles[p]) || (d = t.gTitles[p]);
        return h = a.helper.escapeCharacters(h, "*_", !1), f = '<a href="' + h + '"', "" !== d && null !== d && (d = d.replace(/"/g, "&quot;"), 
        d = a.helper.escapeCharacters(d, "*_", !1), f += ' title="' + d + '"'), f += ">" + u + "</a>";
    };
    return e = (e = t.converter._dispatch("anchors.before", e, r, t)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g, n), 
    e = e.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, n), 
    e = e.replace(/(\[([^\[\]]+)])()()()()()/g, n), e = t.converter._dispatch("anchors.after", e, r, t);
}), a.subParser("autoLinks", function(e, r, t) {
    function n(e, r) {
        var t = r;
        return /^www\./i.test(r) && (r = r.replace(/^www\./i, "http://www.")), '<a href="' + r + '">' + t + "</a>";
    }
    function s(e, r) {
        var t = a.subParser("unescapeSpecialChars")(r);
        return a.subParser("encodeEmailAddress")(t);
    }
    var o = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi, i = /<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi, l = /(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-\/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi, c = /<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;
    return e = (e = t.converter._dispatch("autoLinks.before", e, r, t)).replace(i, n), 
    e = e.replace(c, s), r.simplifiedAutoLink && (e = e.replace(o, n), e = e.replace(l, s)), 
    e = t.converter._dispatch("autoLinks.after", e, r, t);
}), a.subParser("blockGamut", function(e, r, t) {
    e = t.converter._dispatch("blockGamut.before", e, r, t), e = a.subParser("blockQuotes")(e, r, t), 
    e = a.subParser("headers")(e, r, t);
    var n = a.subParser("hashBlock")("<hr />", r, t);
    return e = e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, n), e = e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, n), 
    e = e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, n), e = a.subParser("lists")(e, r, t), 
    e = a.subParser("codeBlocks")(e, r, t), e = a.subParser("tables")(e, r, t), e = a.subParser("hashHTMLBlocks")(e, r, t), 
    e = a.subParser("paragraphs")(e, r, t), e = t.converter._dispatch("blockGamut.after", e, r, t);
}), a.subParser("blockQuotes", function(e, r, t) {
    return e = t.converter._dispatch("blockQuotes.before", e, r, t), e = e.replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(e, n) {
        var s = n;
        return s = s.replace(/^[ \t]*>[ \t]?/gm, "~0"), s = s.replace(/~0/g, ""), s = s.replace(/^[ \t]+$/gm, ""), 
        s = a.subParser("githubCodeBlocks")(s, r, t), s = a.subParser("blockGamut")(s, r, t), 
        s = s.replace(/(^|\n)/g, "$1  "), s = s.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, r) {
            var t = r;
            return t = t.replace(/^  /gm, "~0"), t = t.replace(/~0/g, "");
        }), a.subParser("hashBlock")("<blockquote>\n" + s + "\n</blockquote>", r, t);
    }), e = t.converter._dispatch("blockQuotes.after", e, r, t);
}), a.subParser("codeBlocks", function(e, r, t) {
    e = t.converter._dispatch("codeBlocks.before", e, r, t);
    var n = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g;
    return e = (e += "~0").replace(n, function(e, n, s) {
        var o = n, i = s, l = "\n";
        return o = a.subParser("outdent")(o), o = a.subParser("encodeCode")(o), o = a.subParser("detab")(o), 
        o = o.replace(/^\n+/g, ""), o = o.replace(/\n+$/g, ""), r.omitExtraWLInCodeBlocks && (l = ""), 
        o = "<pre><code>" + o + l + "</code></pre>", a.subParser("hashBlock")(o, r, t) + i;
    }), e = e.replace(/~0/, ""), e = t.converter._dispatch("codeBlocks.after", e, r, t);
}), a.subParser("codeSpans", function(e, r, t) {
    return void 0 === (e = t.converter._dispatch("codeSpans.before", e, r, t)) && (e = ""), 
    e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, r, t, n) {
        var s = n;
        return s = s.replace(/^([ \t]*)/g, ""), s = s.replace(/[ \t]*$/g, ""), s = a.subParser("encodeCode")(s), 
        r + "<code>" + s + "</code>";
    }), e = t.converter._dispatch("codeSpans.after", e, r, t);
}), a.subParser("detab", function(e) {
    return e = e.replace(/\t(?=\t)/g, "    "), e = e.replace(/\t/g, "~A~B"), e = e.replace(/~B(.+?)~A/g, function(e, r) {
        var t, n = r, s = 4 - n.length % 4;
        for (t = 0; s > t; t++) n += " ";
        return n;
    }), e = e.replace(/~A/g, "    "), e = e.replace(/~B/g, "");
}), a.subParser("encodeAmpsAndAngles", function(e) {
    return e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), e = e.replace(/<(?![a-z\/?\$!])/gi, "&lt;");
}), a.subParser("encodeBackslashEscapes", function(e) {
    return e = e.replace(/\\(\\)/g, a.helper.escapeCharactersCallback), e = e.replace(/\\([`*_{}\[\]()>#+-.!])/g, a.helper.escapeCharactersCallback);
}), a.subParser("encodeCode", function(e) {
    return e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), 
    e = a.helper.escapeCharacters(e, "*_{}[]\\", !1);
}), a.subParser("encodeEmailAddress", function(e) {
    var r = [ function(e) {
        return "&#" + e.charCodeAt(0) + ";";
    }, function(e) {
        return "&#x" + e.charCodeAt(0).toString(16) + ";";
    }, function(e) {
        return e;
    } ];
    return e = "mailto:" + e, e = e.replace(/./g, function(e) {
        if ("@" === e) e = r[Math.floor(2 * Math.random())](e); else if (":" !== e) {
            var t = Math.random();
            e = t > .9 ? r[2](e) : t > .45 ? r[1](e) : r[0](e);
        }
        return e;
    }), e = '<a href="' + e + '">' + e + "</a>", e = e.replace(/">.+:/g, '">');
}), a.subParser("escapeSpecialCharsWithinTagAttributes", function(e) {
    var r = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
    return e = e.replace(r, function(e) {
        var r = e.replace(/(.)<\/?code>(?=.)/g, "$1`");
        return r = a.helper.escapeCharacters(r, "\\`*_", !1);
    });
}), a.subParser("githubCodeBlocks", function(e, r, t) {
    return r.ghCodeBlocks ? (e = t.converter._dispatch("githubCodeBlocks.before", e, r, t), 
    e += "~0", e = e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(e, n, s) {
        var o = r.omitExtraWLInCodeBlocks ? "" : "\n";
        return s = a.subParser("encodeCode")(s), s = a.subParser("detab")(s), s = s.replace(/^\n+/g, ""), 
        s = s.replace(/\n+$/g, ""), s = "<pre><code" + (n ? ' class="' + n + " language-" + n + '"' : "") + ">" + s + o + "</code></pre>", 
        s = a.subParser("hashBlock")(s, r, t), "\n\n~G" + (t.ghCodeBlocks.push({
            text: e,
            codeblock: s
        }) - 1) + "G\n\n";
    }), e = e.replace(/~0/, ""), t.converter._dispatch("githubCodeBlocks.after", e, r, t)) : e;
}), a.subParser("hashBlock", function(e, r, t) {
    return e = e.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (t.gHtmlBlocks.push(e) - 1) + "K\n\n";
}), a.subParser("hashElement", function(e, r, t) {
    return function(e, r) {
        var n = r;
        return n = n.replace(/\n\n/g, "\n"), n = n.replace(/^\n/, ""), n = n.replace(/\n+$/g, ""), 
        n = "\n\n~K" + (t.gHtmlBlocks.push(n) - 1) + "K\n\n";
    };
}), a.subParser("hashHTMLBlocks", function(e, r, t) {
    var n, s = [ "pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p" ];
    for (n = 0; n < s.length; ++n) e = a.helper.replaceRecursiveRegExp(e, function(e, r, n, s) {
        var a = e;
        return -1 !== n.search(/\bmarkdown\b/) && (a = n + t.converter.makeHtml(r) + s), 
        "\n\n~K" + (t.gHtmlBlocks.push(a) - 1) + "K\n\n";
    }, "^(?: |\\t){0,3}<" + s[n] + "\\b[^>]*>", "</" + s[n] + ">", "gim");
    return e = e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, a.subParser("hashElement")(e, r, t)), 
    e = e.replace(/(<!--[\s\S]*?-->)/g, a.subParser("hashElement")(e, r, t)), e = e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, a.subParser("hashElement")(e, r, t));
}), a.subParser("hashHTMLSpans", function(e, r, t) {
    var n, s = a.helper.matchRecursiveRegExp(e, "<code\\b[^>]*>", "</code>", "gi");
    for (n = 0; n < s.length; ++n) e = e.replace(s[n][0], "~L" + (t.gHtmlSpans.push(s[n][0]) - 1) + "L");
    return e;
}), a.subParser("unhashHTMLSpans", function(e, r, t) {
    for (var n = 0; n < t.gHtmlSpans.length; ++n) e = e.replace("~L" + n + "L", t.gHtmlSpans[n]);
    return e;
}), a.subParser("hashPreCodeTags", function(e, r, t) {
    return e = a.helper.replaceRecursiveRegExp(e, function(e, r, n, s) {
        var o = n + a.subParser("encodeCode")(r) + s;
        return "\n\n~G" + (t.ghCodeBlocks.push({
            text: e,
            codeblock: o
        }) - 1) + "G\n\n";
    }, "^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^(?: |\\t){0,3}</code>\\s*</pre>", "gim");
}), a.subParser("headers", function(e, r, t) {
    function n(e) {
        var r, n = e.replace(/[^\w]/g, "").toLowerCase();
        return t.hashLinkCounts[n] ? r = n + "-" + t.hashLinkCounts[n]++ : (r = n, t.hashLinkCounts[n] = 1), 
        !0 === s && (s = "section"), a.helper.isString(s) ? s + r : r;
    }
    e = t.converter._dispatch("headers.before", e, r, t);
    var s = r.prefixHeaderId, o = isNaN(parseInt(r.headerLevelStart)) ? 1 : parseInt(r.headerLevelStart), i = r.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, l = r.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
    return e = e.replace(i, function(e, s) {
        var i = a.subParser("spanGamut")(s, r, t), l = r.noHeaderId ? "" : ' id="' + n(s) + '"', c = o, u = "<h" + c + l + ">" + i + "</h" + c + ">";
        return a.subParser("hashBlock")(u, r, t);
    }), e = e.replace(l, function(e, s) {
        var i = a.subParser("spanGamut")(s, r, t), l = r.noHeaderId ? "" : ' id="' + n(s) + '"', c = o + 1, u = "<h" + c + l + ">" + i + "</h" + c + ">";
        return a.subParser("hashBlock")(u, r, t);
    }), e = e.replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm, function(e, s, i) {
        var l = a.subParser("spanGamut")(i, r, t), c = r.noHeaderId ? "" : ' id="' + n(i) + '"', u = o - 1 + s.length, p = "<h" + u + c + ">" + l + "</h" + u + ">";
        return a.subParser("hashBlock")(p, r, t);
    }), e = t.converter._dispatch("headers.after", e, r, t);
}), a.subParser("images", function(e, r, t) {
    function n(e, r, n, s, o, i, l, c) {
        var u, p = t.gUrls, h = t.gTitles, d = t.gDimensions;
        if (n = n.toLowerCase(), c || (c = ""), "" === s || null === s) {
            if (("" === n || null === n) && (n = r.toLowerCase().replace(/ ?\n/g, " ")), s = "#" + n, 
            a.helper.isUndefined(p[n])) return e;
            s = p[n], a.helper.isUndefined(h[n]) || (c = h[n]), a.helper.isUndefined(d[n]) || (o = d[n].width, 
            i = d[n].height);
        }
        return r = r.replace(/"/g, "&quot;"), r = a.helper.escapeCharacters(r, "*_", !1), 
        s = a.helper.escapeCharacters(s, "*_", !1), u = '<img src="' + s + '" alt="' + r + '"', 
        c && (c = c.replace(/"/g, "&quot;"), c = a.helper.escapeCharacters(c, "*_", !1), 
        u += ' title="' + c + '"'), o && i && (o = "*" === o ? "auto" : o, i = "*" === i ? "auto" : i, 
        u += ' width="' + o + '"', u += ' height="' + i + '"'), u += " />";
    }
    var s = /!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g, o = /!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g;
    return e = (e = t.converter._dispatch("images.before", e, r, t)).replace(o, n), 
    e = e.replace(s, n), e = t.converter._dispatch("images.after", e, r, t);
}), a.subParser("italicsAndBold", function(e, r, t) {
    return e = t.converter._dispatch("italicsAndBold.before", e, r, t), r.literalMidWordUnderscores ? (e = e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm, "$1<strong>$2</strong>"), 
    e = e.replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm, "$1<em>$2</em>"), 
    e = e.replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g, "<strong>$2</strong>"), e = e.replace(/(\*)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>")) : (e = e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>"), 
    e = e.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>")), e = t.converter._dispatch("italicsAndBold.after", e, r, t);
}), a.subParser("lists", function(e, r, t) {
    function n(e, n) {
        t.gListLevel++, e = e.replace(/\n{2,}$/, "\n"), e += "~0";
        var s = /(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, o = /\n[ \t]*\n(?!~0)/.test(e);
        return e = e.replace(s, function(e, n, s, i, l, c, u) {
            u = u && "" !== u.trim();
            var p = a.subParser("outdent")(l, r, t), h = "";
            return c && r.tasklists && (h = ' class="task-list-item" style="list-style-type: none;"', 
            p = p.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                return u && (e += " checked"), e += ">";
            })), n || p.search(/\n{2,}/) > -1 ? (p = a.subParser("githubCodeBlocks")(p, r, t), 
            p = a.subParser("blockGamut")(p, r, t)) : (p = a.subParser("lists")(p, r, t), p = p.replace(/\n$/, ""), 
            p = o ? a.subParser("paragraphs")(p, r, t) : a.subParser("spanGamut")(p, r, t)), 
            p = "\n<li" + h + ">" + p + "</li>\n";
        }), e = e.replace(/~0/g, ""), t.gListLevel--, n && (e = e.replace(/\s+$/, "")), 
        e;
    }
    function s(e, r, t) {
        var s, a = "ul" === r ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm, o = [], i = "";
        if (-1 !== e.search(a)) for (function e(s) {
            var o = s.search(a);
            -1 !== o ? (i += "\n\n<" + r + ">" + n(s.slice(0, o), !!t) + "</" + r + ">\n\n", 
            r = "ul" === r ? "ol" : "ul", a = "ul" === r ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm, 
            e(s.slice(o))) : i += "\n\n<" + r + ">" + n(s, !!t) + "</" + r + ">\n\n";
        }(e), s = 0; s < o.length; ++s) ; else i = "\n\n<" + r + ">" + n(e, !!t) + "</" + r + ">\n\n";
        return i;
    }
    e = t.converter._dispatch("lists.before", e, r, t), e += "~0";
    var o = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
    return t.gListLevel ? e = e.replace(o, function(e, r, t) {
        return s(r, t.search(/[*+-]/g) > -1 ? "ul" : "ol", !0);
    }) : (o = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, 
    e = e.replace(o, function(e, r, t, n) {
        return s(t, n.search(/[*+-]/g) > -1 ? "ul" : "ol");
    })), e = e.replace(/~0/, ""), e = t.converter._dispatch("lists.after", e, r, t);
}), a.subParser("outdent", function(e) {
    return e = e.replace(/^(\t|[ ]{1,4})/gm, "~0"), e = e.replace(/~0/g, "");
}), a.subParser("paragraphs", function(e, r, t) {
    var n, s, o, i, l, c, u, p, h, d;
    for (s = [], o = (n = (e = (e = (e = t.converter._dispatch("paragraphs.before", e, r, t)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g)).length, 
    i = 0; o > i; i++) (l = n[i]).search(/~(K|G)(\d+)\1/g) >= 0 ? s.push(l) : (l = a.subParser("spanGamut")(l, r, t), 
    l = l.replace(/^([ \t]*)/g, "<p>"), l += "</p>", s.push(l));
    for (o = s.length, i = 0; o > i; i++) {
        for (c = "", u = s[i], p = !1; u.search(/~(K|G)(\d+)\1/) >= 0; ) h = RegExp.$1, 
        d = RegExp.$2, c = (c = "K" === h ? t.gHtmlBlocks[d] : p ? a.subParser("encodeCode")(t.ghCodeBlocks[d].text) : t.ghCodeBlocks[d].codeblock).replace(/\$/g, "$$$$"), 
        u = u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/, c), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u) && (p = !0);
        s[i] = u;
    }
    return e = s.join("\n\n"), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, ""), 
    t.converter._dispatch("paragraphs.after", e, r, t);
}), a.subParser("runExtension", function(e, r, t, n) {
    if (e.filter) r = e.filter(r, n.converter, t); else if (e.regex) {
        var s = e.regex;
        !s instanceof RegExp && (s = new RegExp(s, "g")), r = r.replace(s, e.replace);
    }
    return r;
}), a.subParser("spanGamut", function(e, r, t) {
    return e = t.converter._dispatch("spanGamut.before", e, r, t), e = a.subParser("codeSpans")(e, r, t), 
    e = a.subParser("escapeSpecialCharsWithinTagAttributes")(e, r, t), e = a.subParser("encodeBackslashEscapes")(e, r, t), 
    e = a.subParser("images")(e, r, t), e = a.subParser("anchors")(e, r, t), e = a.subParser("autoLinks")(e, r, t), 
    e = a.subParser("encodeAmpsAndAngles")(e, r, t), e = a.subParser("italicsAndBold")(e, r, t), 
    e = a.subParser("strikethrough")(e, r, t), e = e.replace(/  +\n/g, " <br />\n"), 
    e = t.converter._dispatch("spanGamut.after", e, r, t);
}), a.subParser("strikethrough", function(e, r, t) {
    return r.strikethrough && (e = t.converter._dispatch("strikethrough.before", e, r, t), 
    e = e.replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g, "<del>$1</del>"), e = t.converter._dispatch("strikethrough.after", e, r, t)), 
    e;
}), a.subParser("stripBlankLines", function(e) {
    return e.replace(/^[ \t]+$/gm, "");
}), a.subParser("stripLinkDefinitions", function(e, r, t) {
    var n = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm;
    return e += "~0", e = e.replace(n, function(e, n, s, o, i, l, c) {
        return n = n.toLowerCase(), t.gUrls[n] = a.subParser("encodeAmpsAndAngles")(s), 
        l ? l + c : (c && (t.gTitles[n] = c.replace(/"|'/g, "&quot;")), r.parseImgDimensions && o && i && (t.gDimensions[n] = {
            width: o,
            height: i
        }), "");
    }), e = e.replace(/~0/, "");
}), a.subParser("tables", function(e, r, t) {
    function n(e) {
        return /^:[ \t]*--*$/.test(e) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(e) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(e) ? ' style="text-align:center;"' : "";
    }
    function s(e, n) {
        var s = "";
        return e = e.trim(), r.tableHeaderId && (s = ' id="' + e.replace(/ /g, "_").toLowerCase() + '"'), 
        e = a.subParser("spanGamut")(e, r, t), "<th" + s + n + ">" + e + "</th>\n";
    }
    function o(e, n) {
        return "<td" + n + ">" + a.subParser("spanGamut")(e, r, t) + "</td>\n";
    }
    function i(e, r) {
        var t, n, s = "<table>\n<thead>\n<tr>\n", a = e.length;
        for (t = 0; a > t; ++t) s += e[t];
        for (s += "</tr>\n</thead>\n<tbody>\n", t = 0; t < r.length; ++t) {
            for (s += "<tr>\n", n = 0; a > n; ++n) s += r[t][n];
            s += "</tr>\n";
        }
        return s += "</tbody>\n</table>\n";
    }
    if (!r.tables) return e;
    var l = /^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;
    return e = t.converter._dispatch("tables.before", e, r, t), e = e.replace(l, function(e) {
        var r, t, l, c, u, p, h, d, f, g = e.split("\n");
        for (r = 0; r < g.length; ++r) /^[ \t]{0,3}\|/.test(g[r]) && (g[r] = g[r].replace(/^[ \t]{0,3}\|/, "")), 
        /\|[ \t]*$/.test(g[r]) && (g[r] = g[r].replace(/\|[ \t]*$/, ""));
        for (t = g[0].split("|").map(function(e) {
            return e.trim();
        }), l = g[1].split("|").map(function(e) {
            return e.trim();
        }), c = [], u = [], p = [], h = [], g.shift(), g.shift(), r = 0; r < g.length; ++r) "" !== g[r].trim() && c.push(g[r].split("|").map(function(e) {
            return e.trim();
        }));
        if (t.length < l.length) return e;
        for (r = 0; r < l.length; ++r) p.push(n(l[r]));
        for (r = 0; r < t.length; ++r) a.helper.isUndefined(p[r]) && (p[r] = ""), u.push(s(t[r], p[r]));
        for (r = 0; r < c.length; ++r) {
            for (d = [], f = 0; f < u.length; ++f) a.helper.isUndefined(c[r][f]), d.push(o(c[r][f], p[f]));
            h.push(d);
        }
        return i(u, h);
    }), e = t.converter._dispatch("tables.after", e, r, t);
}), a.subParser("unescapeSpecialChars", function(e) {
    return e = e.replace(/~E(\d+)E/g, function(e, r) {
        var t = parseInt(r);
        return String.fromCharCode(t);
    });
}), module.exports = a;