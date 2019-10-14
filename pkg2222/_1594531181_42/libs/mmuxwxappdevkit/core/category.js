Array.prototype.includes = Array.prototype.includes ? Array.prototype.includes : function(t) {
    return -1 != this.indexOf(t);
}, Date.prototype.format = function(t) {
    var e = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var r in e) new RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[r] : ("00" + e[r]).substr(("" + e[r]).length)));
    return t;
}, Object.values = Object.values ? Object.values : function(t) {
    var e, r = [];
    for (e in t) r.push(t[e]);
    return r;
}, JSON.safeParse = function(t) {
    if (!t || 0 == t.length) return {};
    var e = null;
    try {
        e = JSON.parse(t);
    } catch (r) {
        console.error(t), e = {};
    }
    return e;
}, String.prototype.charLength = function() {
    for (var t = 0, e = 0; t < this.length; t++) this.charCodeAt(t) > 255 ? e += 2 : e += 1;
    return e;
};

Object.safePropertyAt = function(t, e) {
    if (t && e.length > 0) {
        var r = e.split("."), n = t;
        try {
            return r.forEach(function(t) {
                n = n[t];
            }), n;
        } catch (t) {
            console.error("safeProperty exception: " + t);
        }
    }
    return null;
}, String.prototype.hashCode = function() {
    var t, e = 0;
    if (0 === this.length) return e;
    for (t = 0; t < this.length; t++) e = (e << 5) - e + this.charCodeAt(t), e |= 0;
    return e;
};