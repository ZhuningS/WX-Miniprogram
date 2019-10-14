function r(r) {
    return function() {
        var e = r.apply(this, arguments);
        return new Promise(function(r, t) {
            function a(d, n) {
                try {
                    var u = e[d](n), i = u.value;
                } catch (r) {
                    return void t(r);
                }
                if (!u.done) return Promise.resolve(i).then(function(r) {
                    a("next", r);
                }, function(r) {
                    a("throw", r);
                });
                r(i);
            }
            return a("next");
        });
    };
}

var e = function(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}(require("../libs/regenerator-runtime.js")), t = require("../protocol/io");

module.exports = {
    data: {
        sources: {}
    },
    onTapAdd: function(a) {
        var d = this;
        return r(e.default.mark(function r() {
            var n;
            return e.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return n = d.data.sources, [ 0, "0" ].indexOf(a.currentTarget.dataset.providerId) < 0 ? n[a.currentTarget.dataset.providerId] = !0 : n[a.currentTarget.dataset.url] = !0, 
                    r.next = 4, t.api.get("v1/magazine.provider.subscribe", {
                        mid: d.data.mid,
                        provider_id: a.currentTarget.dataset.providerId,
                        url: a.currentTarget.dataset.url
                    });

                  case 4:
                    d.setData({
                        sources: n
                    }), d.log("added_source", {
                        magazine_id: d.data.mid,
                        provider_id: a.currentTarget.dataset.providerId,
                        url: a.currentTarget.dataset.url
                    });

                  case 6:
                  case "end":
                    return r.stop();
                }
            }, r, d);
        }))();
    },
    onTapRemove: function(a) {
        var d = this;
        return r(e.default.mark(function r() {
            var n;
            return e.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return n = d.data.sources, [ 0, "0" ].indexOf(a.currentTarget.dataset.providerId) < 0 ? n[a.currentTarget.dataset.providerId] = !1 : n[a.currentTarget.dataset.url] = !1, 
                    r.next = 4, t.api.get("v1/magazine.provider.forbid", {
                        mid: d.data.mid,
                        provider_id: a.currentTarget.dataset.providerId,
                        url: a.currentTarget.dataset.url
                    });

                  case 4:
                    d.setData({
                        sources: n
                    }), d.log("removed_source", {
                        magazine_id: d.data.mid,
                        provider_id: a.currentTarget.dataset.providerId,
                        url: a.currentTarget.dataset.url
                    });

                  case 6:
                  case "end":
                    return r.stop();
                }
            }, r, d);
        }))();
    }
};