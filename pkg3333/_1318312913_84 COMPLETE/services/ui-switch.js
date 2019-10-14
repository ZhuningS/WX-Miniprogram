function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.uiSwitch = void 0;

var t = require("../config/index"), n = require("../utils/dev"), i = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}(), r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
}, o = (0, n.debugCreator)("uiSwitch"), a = {
    $explore: {
        $universeTimeline: !1,
        $snippetCover: t.config.enableWechatGroup,
        $followingPanel: t.config.enableFollow || t.config.enableSubscribe
    },
    $profile: {
        $ownOperationBar: !1,
        $expsSection: !1,
        $followButton: t.config.enableFollow
    },
    magazine: function(e) {
        var n = e.magazine;
        return n || (n = {
            relation: {}
        }), {
            $subscribeAction: t.config.enableMagazine && t.config.enableSubscribe,
            $groupActions: t.config.enableGroup,
            $manageSource: "public" === n.type || n.relation.enableManageSource
        };
    },
    article: function(e) {
        return r({
            $hasReadTips: e.hasSpecPms || !0
        }, a.topic(e));
    },
    topic: function(e) {
        var n = e.magazine;
        n || (n = {
            relation: {}
        });
        var i = "private" === n.type ? n.enableComment : t.config.enableTopic;
        return {
            $createTopic: [ function() {
                return i;
            }, function() {
                return "public" === n.type || n.relation.enableComment;
            } ].every(function(e) {
                return e();
            })
        };
    }
}, s = function() {
    function t(n) {
        e(this, t), this.switchesConfig = {}, this.switches = {}, a || o("创建实例时，uiSwitchConfig 是必须存在的"), 
        this.switchesConfig = n, this.switches = this.mapConfigToSwitches();
    }
    return i(t, [ {
        key: "getSwitches",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this.switchesConfig;
            if (!e) return this.switches;
            if (this.isBooleanEntity(e)) {
                var i = this.switches[e];
                if (i) return i;
                o("entityName: " + e + " 在 switches 上不存在");
            }
            if (this.isFactoryEntity(e)) {
                var r = n[e], a = this.generateBooleanEntityName(e);
                return Object.assign(this.switches, this.constructEntityState(r, t)), this.switches[a];
            }
            return this.switches;
        }
    }, {
        key: "generateBooleanEntityName",
        value: function(e) {
            return this.isBooleanEntity(e) ? e : "$" + e;
        }
    }, {
        key: "isBooleanEntity",
        value: function(e) {
            return e.startsWith("$");
        }
    }, {
        key: "isFactoryEntity",
        value: function(e) {
            var t = this.switchesConfig[e];
            return t && "function" == typeof t;
        }
    }, {
        key: "mapConfigToSwitches",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.switchesConfig, i = {};
            return Object.keys(n).map(function(r) {
                if (e.isFactoryEntity(r)) {
                    var o = n[r];
                    return Object.assign(i, e.constructEntityState(o, t[r]));
                }
                i[r] = n[r];
            }), i;
        }
    }, {
        key: "constructEntityState",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {};
            return n[this.generateBooleanEntityName(e.name)] = e(t), n;
        }
    } ]), t;
}();

exports.uiSwitch = new s(a);