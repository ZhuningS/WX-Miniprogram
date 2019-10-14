function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var i = e(require("../../utils/extend-page")), r = e(require("../../mixins/actions")), u = e(require("../../mixins/share")), a = e(require("../../mixins/mark")), s = e(require("../../mixins/video")), t = e(require("../../mixins/image")), l = e(require("../../mixins/cardshow")), d = e(require("../../mixins/subscribe")), f = e(require("../../mixins/follow")), n = e(require("../../mixins/logger")), o = e(require("../../mixins/post")), q = e(require("../../mixins/warehouse")), m = e(require("../../mixins/vote")), x = e(require("../../mixins/hook")), g = e(require("./base")), h = require("./base.warehouse");

Page((0, i.default)(h.userWarehouseConfig, g.default, r.default, u.default, s.default, t.default, a.default, o.default, m.default, d.default, f.default, l.default, n.default, q.default, x.default));