function t(t) {
    if (t) {
        var a = {
            state: "",
            __callbacks: {}
        }, i = this;
        return a.state = t.init, t.transitions && t.transitions.forEach(function(t) {
            if (t.name && t.from && t.to) {
                var a = t.name;
                i[a] = function(s) {
                    this.__transit(t, s);
                };
                var n = s(a);
                i[n] = function(t) {
                    t && (i.__callbacks[n] || (i.__callbacks[n] = []), i.__callbacks[n].push(t));
                };
            }
        }), Object.assign(this, a);
    }
    console.error("no options to init state machine");
}

var s = function(t) {
    return "on" + t.slice(0, 1).toUpperCase() + t.slice(1);
};

t.prototype.__resolve = function(t) {
    var s = this, a = this.__callbacks[t];
    a && a.forEach(function(t) {
        t(s);
    }), a && a.splice(0, a.length);
}, t.prototype.__transit = function(t, a) {
    var i = t.to;
    this.__callbacks[i] || (this.__callbacks[i] = []), t.nowait && this.state !== t.from || !a || this.__callbacks[i].push(a), 
    this.__resolve(s(t.name)), this.state === t.from && (this.state = i, this.__resolve(i));
}, module.exports = t;