Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.RecordSetModel = exports.RecordFieldModel = exports.RecordModel = exports.TableModel = exports.DbNormalizeContext = void 0;

var e = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}(require("./utils")), t = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
}, r = function() {
    function e(e, t) {
        this.output = {}, this.emits = {}, this.schema = e, this.db = e.db, this.normalizePKs = t;
    }
    return e.prototype.emit = function(e, t) {
        this.emits[e] = this.emits[e] || [], this.emits[e].push(t);
    }, e;
}();

exports.DbNormalizeContext = r;

var i = function() {
    function i(t, r, i) {
        void 0 === r && (r = {
            ids: [],
            byId: {},
            indexes: {}
        }), this.dirty = !1, this.session = e.ensureParam("session", t), this.state = e.ensureParam("state", r), 
        this.schema = e.ensureParam("schema", i), this.state.name || (this.state.name = i.name);
    }
    return i.prototype.all = function() {
        var e = this;
        return this.state.ids.map(function(t) {
            return e.schema.db.factory.newRecordModel(t, e);
        });
    }, Object.defineProperty(i.prototype, "length", {
        get: function() {
            return this.state.ids.length;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.getValues = function() {
        var e = this;
        return this.state.ids.map(function(t) {
            return e.state.byId[t];
        });
    }, i.prototype.filter = function(e) {
        return this.all().filter(e);
    }, i.prototype.map = function(e) {
        return this.all().map(e);
    }, i.prototype.index = function(t, r) {
        return e.ensureParamString("value", t), e.ensureParamString("fk", r), this.state.indexes[t] && this.state.indexes[t].values[r] ? this.state.indexes[t].values[r] : [];
    }, i.prototype.get = function(t) {
        if (!this.exists(t)) throw new Error('No "' + this.schema.name + '" record with id: ' + t + " exists.");
        return this.schema.db.factory.newRecordModel(e.asID(t), this);
    }, i.prototype.getOrDefault = function(e) {
        return this.exists(e) ? this.get(e) : null;
    }, i.prototype.getByFk = function(t, r) {
        e.ensureParam("fieldName", t), r = e.ensureID(r);
        var i = this.schema.fields.filter(function(e) {
            return e.isForeignKey && e.name === t;
        })[0];
        if (!i) throw new Error("No foreign key named: " + t + ' in the schema: "' + this.schema.name + '".');
        return new a(this, i, {
            id: r
        });
    }, i.prototype.getFieldValue = function(e, t) {
        var r = this.getOrDefault(e);
        return r ? r.value[t] : void 0;
    }, i.prototype.getValue = function(t) {
        return e.isValidID(t) ? this.state.byId[t] : void 0;
    }, i.prototype.exists = function(t) {
        return !!e.isValidID(t) && void 0 !== this.state.byId[e.asID(t)];
    }, i.prototype.insert = function(e) {
        return this.insertMany(e)[0];
    }, i.prototype.insertMany = function(e) {
        return this._normalizedAction(e, this.insertNormalized, !0);
    }, i.prototype.update = function(e) {
        return this.updateMany(e)[0];
    }, i.prototype.updateMany = function(e) {
        return this._normalizedAction(e, this.updateNormalized, !1);
    }, i.prototype.upsert = function(e) {
        return this._normalizedAction(e, this.upsertNormalized, !0)[0];
    }, i.prototype.upsertRaw = function(e) {
        return this._normalizedAction(e, this.upsertNormalized, !0);
    }, i.prototype.delete = function(r) {
        if ("string" != typeof r && "number" != typeof r && (r = this.schema.getPrimaryKey(r)), 
        !this.exists(r)) return !1;
        r = e.asID(r), this._deleteCascade(r);
        var i = t({}, this.state.byId), n = this.state.ids.slice(), s = t({}, this.state.indexes), a = i[r];
        delete i[r];
        var o = n.indexOf(r);
        return o >= 0 && n.splice(o, 1), a && this._cleanIndexes(r, a, s), this.dirty = !0, 
        this.state = t({}, this.state, {
            byId: i,
            ids: n,
            indexes: s
        }), !0;
    }, i.prototype.deleteAll = function() {
        this.length && this.all().forEach(function(e) {
            return e.delete();
        });
    }, i.prototype.insertNormalized = function(r) {
        var i = this;
        return e.ensureParam("table", r), this.dirty = !0, this.state = t({}, this.state, {
            ids: e.mergeIds(this.state.ids, r.ids, !0),
            byId: t({}, this.state.byId, r.byId)
        }), this._updateIndexes(r), r.ids.map(function(e) {
            return i.schema.db.factory.newRecordModel(e, i);
        });
    }, i.prototype.updateNormalized = function(r) {
        var i = this;
        e.ensureParam("table", r);
        var n = t({}, this.state), s = !1, a = Object.keys(r.byId).map(function(e) {
            if (!i.state.byId[e]) throw new Error('Failed to apply update. No "' + i.schema.name + '" record with id: ' + e + " exists.");
            var a = n.byId[e], o = t({}, a, r.byId[e]);
            return i.schema.isModified(a, o) && (n.byId[e] = o, s = !0), i.schema.db.factory.newRecordModel(e, i);
        });
        return s && (this.dirty = !0, this.state = n, this._updateIndexes(r)), a;
    }, i.prototype.upsertNormalized = function(t) {
        var r = this;
        e.ensureParam("table", t);
        var i = {
            ids: [],
            byId: {},
            indexes: {}
        }, n = {
            ids: [],
            byId: {},
            indexes: {}
        };
        t.ids.forEach(function(e) {
            r.exists(e) ? (i.ids.push(e), i.byId[e] = t.byId[e]) : (n.ids.push(e), n.byId[e] = t.byId[e]);
        });
        var s = (i.ids.length ? this.updateNormalized(i) : []).concat(n.ids.length ? this.insertNormalized(n) : []);
        return this._updateIndexes(t), s;
    }, i.prototype._normalizedAction = function(t, i, n) {
        e.ensureParam("data", t), e.ensureParam("action", i);
        var s = new r(this.schema, n);
        this.schema.normalize(t, s);
        var a = s.output[this.schema.name], o = a ? i.call(this, a) : [];
        return this.session.upsert(s), o;
    }, i.prototype._updateIndexes = function(t) {
        var r = this;
        Object.keys(t.indexes).forEach(function(i) {
            var n = r.state.indexes[i] || (r.state.indexes[i] = {
                unique: t.indexes[i].unique,
                values: {}
            });
            Object.keys(t.indexes[i].values).forEach(function(s) {
                var a = n.values[s] || (n.values[s] = []), o = e.mergeIds(a, t.indexes[i].values[s], !1);
                if (n.unique && o.length > 1) throw new Error('The insert/update operation violates the unique foreign key "' + r.schema.name + "." + i + '".');
                n.values[s] = o;
            });
        });
    }, i.prototype._cleanIndexes = function(e, t, r) {
        this.schema.getForeignKeys(t).forEach(function(t) {
            var i = -1;
            if (t.value && r[t.name] && r[t.name].values[t.value] && (i = r[t.name].values[t.value].indexOf(e)), 
            i >= 0) {
                var n = r[t.name].values[t.value].slice();
                n.splice(i, 1), r[t.name].values[t.value] = n;
            } else r[t.name] && (delete r[t.name].values[e], 0 === Object.keys(r[t.name].values).length && delete r[t.name]);
        });
    }, i.prototype._deleteCascade = function(e) {
        var t = this.schema.relations.filter(function(e) {
            return e.relationName && e.cascade;
        });
        if (t.length) {
            var r = this.get(e);
            r && t.forEach(function(e) {
                var t = r[e.relationName];
                t && t.delete();
            });
        }
    }, i;
}();

exports.TableModel = i;

var n = function() {
    function t(t, r) {
        this.id = e.ensureParam("id", t), this.table = e.ensureParam("table", r);
    }
    return Object.defineProperty(t.prototype, "value", {
        get: function() {
            return this.table.getValue(this.id) || {};
        },
        set: function(e) {
            this.update(e);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.delete = function() {
        this.table.delete(this.id);
    }, t.prototype.update = function(e) {
        return this.table.schema.injectKeys(e, this), this.table.update(e), this;
    }, t;
}();

exports.RecordModel = n;

var s = function() {
    function t(t, r) {
        this.schema = e.ensureParam("schema", t), this.record = e.ensureParam("record", r), 
        this.name = e.ensureParamString("schema.name", t.name);
    }
    return Object.defineProperty(t.prototype, "value", {
        get: function() {
            return this.schema.getRecordValue(this.record);
        },
        enumerable: !0,
        configurable: !0
    }), t;
}();

exports.RecordFieldModel = s;

var a = function() {
    function t(t, r, i) {
        this.table = e.ensureParam("table", t), this.schema = e.ensureParam("schema", r), 
        this.owner = e.ensureParam("owner", i);
    }
    return Object.defineProperty(t.prototype, "value", {
        get: function() {
            return this.map(function(e) {
                return e.value;
            });
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ids", {
        get: function() {
            return this.table.index(this.schema.name, this.owner.id);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.ids.length;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.all = function() {
        var e = this;
        return this.ids.map(function(t) {
            return e.table.schema.db.factory.newRecordModel(t, e.table);
        });
    }, t.prototype.map = function(e) {
        return this.all().map(e);
    }, t.prototype.filter = function(e) {
        return this.all().filter(e);
    }, t.prototype.add = function(e) {
        this.table.insert(this._normalize(e));
    }, t.prototype.remove = function(e) {
        var t = this;
        this._normalize(e).forEach(function(e) {
            var r = t.table.schema.getPrimaryKey(e);
            t.table.delete(r);
        });
    }, t.prototype.update = function(e) {
        return this.table.update(this._normalize(e)), this;
    }, t.prototype.delete = function() {
        var e = this;
        this.ids.forEach(function(t) {
            return e.table.delete(t);
        });
    }, t.prototype._normalize = function(e) {
        return this.table.schema.inferRelations(e, this.schema, this.owner.id);
    }, t;
}();

exports.RecordSetModel = a;