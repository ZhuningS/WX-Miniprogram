var o = function(o) {
    this.moduleName = o || "";
};

o.prototype = {
    doLog: function(o, n) {
        var t = [ "[" + this.moduleName + "]" ].concat(Array.from(n));
        o.apply(console, t);
    },
    log: function() {
        this.doLog(console.log, arguments);
    },
    info: function() {
        this.doLog(console.info, arguments);
    },
    warn: function() {
        this.doLog(console.warn, arguments);
    },
    error: function() {
        this.doLog(console.error, arguments);
    }
}, module.exports = function(n) {
    return new o(n);
};