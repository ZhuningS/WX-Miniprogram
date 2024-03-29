function noop() {}

function bind(e, n) {
    return function() {
        e.apply(n, arguments);
    };
}

function Promise(e) {
    if (!(this instanceof Promise)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], 
    doResolve(e, this);
}

function handle(e, n) {
    for (;3 === e._state; ) e = e._value;
    if (0 === e._state) return void e._deferreds.push(n);
    e._handled = !0, Promise._immediateFn(function() {
        var t = 1 === e._state ? n.onFulfilled : n.onRejected;
        if (null === t) return void (1 === e._state ? resolve : reject)(n.promise, e._value);
        var o;
        try {
            o = t(e._value);
        } catch (e) {
            return void reject(n.promise, e);
        }
        resolve(n.promise, o);
    });
}

function resolve(e, n) {
    try {
        if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
        if (n && ("object" == typeof n || "function" == typeof n)) {
            var t = n.then;
            if (n instanceof Promise) return e._state = 3, e._value = n, void finale(e);
            if ("function" == typeof t) return void doResolve(bind(t, n), e);
        }
        e._state = 1, e._value = n, finale(e);
    } catch (n) {
        reject(e, n);
    }
}

function reject(e, n) {
    e._state = 2, e._value = n, finale(e);
}

function finale(e) {
    2 === e._state && 0 === e._deferreds.length && Promise._immediateFn(function() {
        e._handled || Promise._unhandledRejectionFn(e._value);
    });
    for (var n = 0, t = e._deferreds.length; n < t; n++) handle(e, e._deferreds[n]);
    e._deferreds = null;
}

function Handler(e, n, t) {
    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, 
    this.promise = t;
}

function doResolve(e, n) {
    var t = !1;
    try {
        e(function(e) {
            t || (t = !0, resolve(n, e));
        }, function(e) {
            t || (t = !0, reject(n, e));
        });
    } catch (e) {
        if (t) return;
        t = !0, reject(n, e);
    }
}

var setTimeoutFunc = setTimeout;

Promise.prototype.catch = function(e) {
    return this.then(null, e);
}, Promise.prototype.then = function(e, n) {
    var t = new this.constructor(noop);
    return handle(this, new Handler(e, n, t)), t;
}, Promise.prototype.finally = function(e) {
    var n = this.constructor;
    return this.then(function(t) {
        return n.resolve(e()).then(function() {
            return t;
        });
    }, function(t) {
        return n.resolve(e()).then(function() {
            return n.reject(t);
        });
    });
}, Promise.all = function(e) {
    return new Promise(function(n, t) {
        function o(e, s) {
            try {
                if (s && ("object" == typeof s || "function" == typeof s)) {
                    var u = s.then;
                    if ("function" == typeof u) return void u.call(s, function(n) {
                        o(e, n);
                    }, t);
                }
                r[e] = s, 0 == --i && n(r);
            } catch (e) {
                t(e);
            }
        }
        if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
        var r = Array.prototype.slice.call(e);
        if (0 === r.length) return n([]);
        for (var i = r.length, s = 0; s < r.length; s++) o(s, r[s]);
    });
}, Promise.resolve = function(e) {
    return e && "object" == typeof e && e.constructor === Promise ? e : new Promise(function(n) {
        n(e);
    });
}, Promise.reject = function(e) {
    return new Promise(function(n, t) {
        t(e);
    });
}, Promise.race = function(e) {
    return new Promise(function(n, t) {
        for (var o = 0, r = e.length; o < r; o++) e[o].then(n, t);
    });
}, Promise._immediateFn = "function" == typeof setImmediate && function(e) {
    setImmediate(e);
} || function(e) {
    setTimeoutFunc(e, 0);
}, Promise._unhandledRejectionFn = function(e) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
}, module.exports = Promise;