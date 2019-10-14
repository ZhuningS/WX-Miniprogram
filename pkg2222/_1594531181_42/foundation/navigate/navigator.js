var r = require("../../libs/mmuxwxappdevkit/foundation/navigate/navigator.js"), e = require("../../core/sys.js");

r.setup({
    boutiqueApp: function() {
        return require("../../app.js");
    },
    shoppingcartApp: function() {
        return e.isMixProject() ? require("../../../shopping-cart/weapp-src/app.js") : require("../../app.js");
    }
}), module.exports = r;