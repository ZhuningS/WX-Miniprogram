require("core/category.js");

var e = require("core/logger.js"), o = require("core/network.js"), r = (require("core/storage.js"), 
require("core/sys.js")), n = require("portal/index/model/mall.js"), i = require("foundation/oss/idkey.js"), a = require("./core/eventcenter.js"), s = require("core/api.js");

require("core/category.js"), require("foundation/loader/image-loader.js"), require("config.js");

var c = {
    name: "Boutique",
    hasShow: !1,
    onLaunch: function(e) {},
    onShow: function(e) {
        console.log("boutique app onShow: ", e), e.path && "portal/index/index" == e.path && (n._canvasId = decodeURIComponent(e.query.canvas_id || ""), 
        n._canvasCookie = decodeURIComponent(e.query.canvas_cookie || ""), void 0 != e.query.disable_cache ? n._disableCache = parseInt(e.query.disable_cache) : n._disableCache = void 0), 
        o._canvasCookie = decodeURIComponent(e.query.canvas_cookie || "") || r.testCanvasCookie(), 
        r._sessionId = "" + new Date().getTime(), e.scene && (r._scene = e.scene), r.experienceCanvasId = e && e.query ? e.query.canvas_id : void 0, 
        require("foundation/navigate/navigator.js").handleRouteApp(e), this.hasShow = !0, 
        a.emit(a.Event.onReloadNavigationBar);
    },
    onHide: function() {
        e.sync(), i.realtimeReport();
    },
    onError: function(e) {
        console.error(e), i.report(59059, 1);
    },
    isMixProject: function() {
        var e = s.getExtConfigSync();
        return console.log(e), e.isMixProject;
    }
};

c.isMixProject() ? c.hasShow = !0 : App(c), module.exports = c;