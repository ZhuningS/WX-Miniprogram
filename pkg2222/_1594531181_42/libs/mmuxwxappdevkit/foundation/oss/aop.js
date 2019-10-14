Function.prototype.before = function(t) {
    var n = this;
    return function() {
        return 0 != t.apply(this, arguments) && n.apply(this, arguments);
    };
}, Function.prototype.after = function(t) {
    var n = this;
    return function() {
        var r = n.apply(this, arguments);
        return 0 != r && (t.apply(this, arguments), r);
    };
};