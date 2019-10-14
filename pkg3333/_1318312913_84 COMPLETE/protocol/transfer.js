function t() {
    this.storage = {};
}

t.prototype.put = function(t) {
    var e = new Date().getTime();
    return this.storage[e] = t, e;
}, t.prototype.callback = function(t, e) {
    return this.storage[t] = e, t;
}, t.prototype.take = function(t) {
    var e = this.storage[t];
    return delete this.storage[t], e;
}, t.prototype.get = function(t) {
    return this.storage[t];
}, module.exports = {
    createTransfer: function() {
        return new t();
    }
};