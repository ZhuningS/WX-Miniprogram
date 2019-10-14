require("./core/category.js"), require("./foundation/oss/aop.js");

var e = require("./core/logger.js"), r = require("./core/sys.js"), o = require("./core/eventcenter.js"), s = require("./core/network.js"), t = require("./core/api.js"), u = require("./foundation/base/page.js"), i = require("./foundation/base/model.js"), n = require("./foundation/loader/image-loader.js"), a = require("./foundation/oss/idkey.js"), g = require("./foundation/oss/reporter.js"), p = require("./utils/enum.js");

module.exports = {
    setup: function(t) {
        t.logger && e.setup(t.logger()), t.sys && r.setup(t.sys()), t.eventCenter && o.setup(t.eventCenter()), 
        t.network && s.setup(t.network()), t.page && u.setup(t.page()), t.imageLoader && n.setup(t.imageLoader()), 
        a.setup();
    },
    Logger: e,
    Sys: r,
    EventCenter: o,
    Network: s,
    Page: u,
    Model: i,
    ImageLoader: n,
    IdKey: a,
    Reporter: g,
    Api: t,
    Enum: p
};