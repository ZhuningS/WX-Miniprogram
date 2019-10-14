Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DefaultModelFactory = exports.DatabaseSession = exports.Database = exports.createDatabase = void 0;

var t = require("./models");

Object.keys(t).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
        enumerable: !0,
        get: function() {
            return t[e];
        }
    });
});

var e = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e.default = t, e;
}(require("./utils")), r = require("./factory"), o = Object.assign || function(t) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
        e = arguments[r];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
}, n = {
    cascadeAsDefault: !1
}, a = (exports.createDatabase = function(t, e) {
    return new a(t, e);
}, function() {
    function t(t, a) {
        var s = this;
        e.ensureParam("schema", t), this.options = o({}, n, a), this.normalizeHooks = this.options.onNormalize || {}, 
        this.factory = this.options.factory || new r.DefaultModelFactory(), this.onMissingPk = this.options.onMissingPk || void 0, 
        this.tables = Object.keys(t).map(function(e) {
            return s.factory.newTableSchema(s, e, t[e]);
        }), this.tables.forEach(function(t) {
            return t.connect(s.tables);
        });
    }
    return t.prototype.combineReducers = function() {
        for (var t = this, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return function(r, o) {
            return void 0 === r && (r = {}), t.reduce(r, o, e);
        };
    }, t.prototype.reduce = function(t, r, o, n) {
        var a = this.createSession(t);
        return e.ensureArray(o).forEach(function(t) {
            return t(a.tables, r, n);
        }), a.commit();
    }, t.prototype.createSession = function(t, e) {
        return new s(t, this, o({
            readOnly: !1
        }, e));
    }, t.prototype.selectTables = function(t) {
        var e = this, r = Object.keys(t).map(function(t) {
            var r = e.tables.filter(function(e) {
                return e.name === t;
            })[0];
            if (!r) throw new Error('Could not select table. The table "' + t + '" is not defined in schema.');
            return r;
        });
        return s.Partial(t, r, this);
    }, t.prototype.selectTable = function(t, e) {
        var r = e || t.name;
        if (!r) throw new Error("Failed to select table. Could not identify table schema.");
        return this.selectTables((o = {}, o[r] = t, o))[r];
        var o;
    }, t;
}());

exports.Database = a;

var s = function() {
    function t(t, r, o) {
        void 0 === t && (t = {});
        var n = this;
        this.state = t, this.db = r, this.options = o, this.tables = e.toObject(r.tables.map(function(e) {
            return n.db.factory.newTableModel(n, t[e.name], e);
        }), function(t) {
            return t.schema.name;
        });
    }
    return t.prototype.upsert = function(t) {
        var e = this;
        if (this.options.readOnly) throw new Error("Invalid attempt to alter a readonly session.");
        Object.keys(t.output).forEach(function(r) {
            r !== t.schema.name && e.tables[r].upsertNormalized(t.output[r]);
        }), Object.keys(t.emits).forEach(function(r) {
            r !== t.schema.name && e.tables[r].upsert(t.emits[r]);
        });
    }, t.prototype.commit = function() {
        var t = this;
        if (this.options.readOnly) throw new Error("Invalid attempt to alter a readonly session.");
        return Object.keys(this.tables).forEach(function(e) {
            var r = t.state[e], n = t.tables[e].state;
            r !== n && (t.state = o({}, t.state, (a = {}, a[e] = n, a)));
            var a;
        }), this.state;
    }, t.Partial = function(e, r, o) {
        return new t(e, {
            tables: r,
            options: o.options,
            factory: o.factory,
            normalizeHooks: o.normalizeHooks
        }, {
            readOnly: !0
        }).tables;
    }, t;
}();

exports.DatabaseSession = s, exports.DefaultModelFactory = r.DefaultModelFactory;