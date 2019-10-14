Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.FieldSchemaModel = exports.TableSchemaModel = void 0;

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, r = function(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    return r.default = e, r;
}(require("./utils")), t = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(r) {
    return void 0 === r ? "undefined" : e(r);
} : function(r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : void 0 === r ? "undefined" : e(r);
}, n = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
        r = arguments[t];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
}, i = function() {
    function e(e, t, n) {
        var i = this;
        this._relations = [], this.db = r.ensureParam("db", e), this.name = r.ensureParamString("name", t), 
        this.fields = Object.keys(r.ensureParam("schema", n)).map(function(r) {
            return new o(i, r, n[r], !0 === e.options.cascadeAsDefault);
        }), this._primaryKeyFields = this.fields.filter(function(e) {
            return e.isPrimaryKey;
        }), this._foreignKeyFields = this.fields.filter(function(e) {
            return e.isForeignKey;
        }), this._stampFields = this.fields.filter(function(e) {
            return "MODIFIED" === e.type;
        });
    }
    return Object.defineProperty(e.prototype, "relations", {
        get: function() {
            return this._relations;
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.connect = function(e) {
        var r = this;
        e.forEach(function(e) {
            return r._relations = r._relations.concat(e.fields.filter(function(e) {
                return e.references === r.name;
            }));
        }), this._foreignKeyFields.forEach(function(r) {
            return r.connect(e);
        });
    }, e.prototype.normalize = function(e, i) {
        var o = this;
        if ("object" !== (void 0 === e ? "undefined" : t(e)) && !Array.isArray(e)) throw new Error("Failed to normalize data. Given argument is not a plain object nor an array.");
        var a = r.ensureParam("context", i);
        return a.output[this.name] || (a.output[this.name] = {
            ids: [],
            byId: {},
            indexes: {}
        }), r.ensureArray(e).map(function(e) {
            if ("object" !== (void 0 === e ? "undefined" : t(e))) throw new Error("Failed to normalize data. Given record is not a plain object.");
            var i = o.db.normalizeHooks ? o.db.normalizeHooks[o.name] : null;
            i && (e = i(e, a));
            var s = a.normalizePKs ? o._normalizePrimaryKey(e) : o._getPrimaryKey(e);
            if (!s) throw new Error('Failed to normalize primary key for record of type "' + o.name + '". Make sure record(s) have a primary key value before trying to insert or update a table.');
            var u = o.getForeignKeys(e), l = a.output[o.name];
            l.byId[s] || l.ids.push(s);
            var f = l.byId[s] = n({}, e);
            u.forEach(function(e) {
                if ("object" === t(e.value) && e.refTable) {
                    var n = e.refTable.normalize(e.value, a);
                    if (n.length > 1) throw new Error('Invalid schema definition. The field "' + o.name + "." + e.name + '" is referencing table "' + e.refTable.name + '", but the given data is an array.');
                    f[e.name] = e.value = n[0];
                }
                if (r.isValidID(e.value)) {
                    var i = r.asID(e.value), u = l.indexes[e.name] || (l.indexes[e.name] = {
                        unique: e.unique,
                        values: {}
                    });
                    if (u.values[i] || (u.values[i] = []), u.unique && u.values.length) throw new Error('The insert/update operation violates the unique foreign key "' + o.name + "." + e.name + '".');
                    u.values[i].push(s);
                }
            });
            return o.relations.forEach(function(e) {
                if (e.relationName && f[e.relationName]) {
                    var r = o.inferRelations(f[e.relationName], e, s);
                    e.table.normalize(r, a), delete f[e.relationName];
                }
            }), s;
        });
    }, e.prototype.inferRelations = function(e, t, i) {
        if (!t.relationName) return e;
        var o = t.table.fields.filter(function(e) {
            return e.isForeignKey && e !== t;
        });
        return r.ensureArray(e).map(function(e) {
            return "number" != typeof e && "string" != typeof e || (1 === o.length ? ((r = {})[o[0].name] = e, 
            e = r) : e = {
                id: e
            }), n({}, e, (a = {}, a[t.name] = i, a));
            var r, a;
        });
    }, e.prototype.injectKeys = function(e, r) {
        if (!e || "object" !== (void 0 === e ? "undefined" : t(e))) return e;
        var n = this._primaryKeyFields;
        n.length || (n = this._foreignKeyFields), n.forEach(function(t) {
            void 0 === e[t.name] && (e[t.name] = t.getRecordValue(r));
        });
    }, e.prototype.getPrimaryKey = function(e) {
        var r = this._getPrimaryKey(e);
        if (!r) throw new Error('Failed to get primary key for record of type "' + this.name + '".');
        return r;
    }, e.prototype._getPrimaryKey = function(e) {
        var t = (this._primaryKeyFields.length ? this._primaryKeyFields : this._foreignKeyFields).reduce(function(r, t) {
            var n = t.getValue(e);
            return r && n ? r + "_" + n : n;
        }, null);
        return r.isValidID(t) && r.asID(t);
    }, e.prototype._normalizePrimaryKey = function(e) {
        var r = this._getPrimaryKey(e);
        if (!r && this.db.onMissingPk) {
            var t = this.db.onMissingPk(e, this);
            t && (1 === this._primaryKeyFields.length && (e[this._primaryKeyFields[0].propName] = t), 
            r = t);
        }
        return r;
    }, e.prototype.getForeignKeys = function(e) {
        return this._foreignKeyFields.map(function(r) {
            return {
                name: r.name,
                value: e[r.name],
                refTable: r.refTable,
                unique: r.unique,
                notNull: r.notNull
            };
        });
    }, e.prototype.isModified = function(e, t) {
        return this._stampFields.length > 0 ? this._stampFields.reduce(function(r, n) {
            return r + (n.getValue(e) === n.getValue(t) ? 1 : 0);
        }, 0) !== this._stampFields.length : !r.isEqual(e, t);
    }, e;
}();

exports.TableSchemaModel = i;

var o = function() {
    function e(e, t, n, i) {
        this.table = r.ensureParam("table", e), this.type = n.type || "ATTR", this.name = t, 
        this.propName = n.propName || t, this._valueFactory = n.value ? n.value.bind(this) : null, 
        this.isPrimaryKey = "PK" === n.type, this.isForeignKey = null !== n.references && void 0 !== n.references, 
        this.isPrimaryKey || this.isForeignKey ? (this.references = n.references, this.relationName = n.relationName, 
        this.cascade = void 0 === n.cascade ? i : !0 === n.cascade, this.unique = !0 === n.unique, 
        this.notNull = void 0 === n.notNull || !0 === n.notNull) : (this.cascade = !1, this.unique = !1, 
        this.notNull = !0 === n.notNull);
    }
    return Object.defineProperty(e.prototype, "refTable", {
        get: function() {
            return this._refTable;
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.connect = function(e) {
        var r = this;
        if (this.references && (this._refTable = e.filter(function(e) {
            return e.name === r.references;
        })[0], !this._refTable)) throw new Error('The field schema "' + this.table.name + "." + this.name + '" has an invalid reference to unknown table "' + this.references + '".');
    }, e.prototype.getValue = function(e, r) {
        return this._valueFactory ? this._valueFactory(e, {
            schema: this,
            record: r
        }) : e[this.name];
    }, e.prototype.getRecordValue = function(e) {
        return this.getValue(e.value, e);
    }, e;
}();

exports.FieldSchemaModel = o;