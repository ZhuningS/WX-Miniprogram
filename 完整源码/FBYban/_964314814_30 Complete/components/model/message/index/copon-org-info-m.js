Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = getApp();

exports.coponOrgInfoM = function(a) {
    e.getOrgInfo(function(e, t) {
        t && (datas = t, datas && (a.ele.data.enableCs = datas.enableCs, wx.setStorage({
            key: "enableCs",
            data: datas.enableCs
        })), a.ele.setData(a.ele.data));
    });
};