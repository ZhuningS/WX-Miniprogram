var e = {
    onLoginSuccess: "onLoginSuccess",
    onLoginFail: "onLoginFail",
    onReloadNavigationBar: "onReloadNavigationBar",
    onSearchHistoryChange: "onSearchHistoryChange"
}, o = require("../libs/mmuxwxappdevkit/core/eventcenter.js");

o.setup({
    Event: e
}), module.exports = o;