Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DefaultModelFactory = void 0;

var e = require("./models"), r = require("./schema"), t = function() {
    var e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, r) {
        e.__proto__ = r;
    } || function(e, r) {
        for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
    };
    return function(r, t) {
        function n() {
            this.constructor = r;
        }
        e(r, t), r.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
        new n());
    };
}(), n = function(e) {
    return function(e) {
        function r(r, t) {
            var n = e.call(this, r, t) || this;
            return n.__fields = {}, n;
        }
        return t(r, e), r;
    }(e);
}, o = function() {
    function t() {
        this._recordClass = {};
    }
    return t.prototype.newTableSchema = function(e, t, n) {
        return new r.TableSchemaModel(e, t, n);
    }, t.prototype.newTableModel = function(r, t, n) {
        return new e.TableModel(r, t, n);
    }, t.prototype.newRecordModel = function(e, r) {
        return new (this._createRecordModel(r.schema))(e, r);
    }, t.prototype.newRecordField = function(r, t) {
        if (!r.isForeignKey) return new e.RecordFieldModel(r, t);
        var n = r.references && t.table.session.tables[r.references];
        if (!n) throw new Error('The foreign key: "' + r.name + '" references an unregistered table: "' + r.references + '" in the current session.');
        var o = r.getRecordValue(t);
        return void 0 === o ? null : n.getOrDefault(o);
    }, t.prototype.newRecordSet = function(r, t) {
        var n = t.table.session.tables[r.table.name];
        if (!n) throw new Error('The table: "' + r.table.name + '" does not exist in the current session.');
        return new e.RecordSetModel(n, r, t);
    }, t.prototype.newRecordRelation = function(e, r) {
        var t = r.table.session.tables[e.table.name];
        if (!t) throw new Error('The table: "' + e.table.name + '" does not exist in the current session.');
        var n = t.index(e.name, r.id)[0];
        return void 0 === n ? null : this.newRecordModel(n, t);
    }, t.prototype.getRecordBaseClass = function(r) {
        return e.RecordModel;
    }, t.prototype._createRecordModel = function(e) {
        var r = this;
        if (this._recordClass[e.name]) return this._recordClass[e.name];
        var t = n(this.getRecordBaseClass(e)), o = function(e, r, n, o) {
            if (void 0 === o && (o = !0), "id" === e) throw new Error('The property "' + r.table.name + '.id" is a reserved name. Please specify another name using the "propName" definition.');
            Object.defineProperty(t.prototype, e, {
                get: function() {
                    return o ? this.__fields[e] || (this.__fields[e] = n(r, this)) : n(r, this);
                }
            });
        };
        return e.fields.forEach(function(e) {
            return (e.isForeignKey || !e.isPrimaryKey) && o(e.propName, e, r.newRecordField.bind(r), !1);
        }), e.relations.forEach(function(e) {
            return e.relationName && o(e.relationName, e, e.unique ? r.newRecordRelation.bind(r) : r.newRecordSet.bind(r), !e.unique);
        }), this._recordClass[e.name] = t;
    }, t;
}();

exports.DefaultModelFactory = o;