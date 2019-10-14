function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, u) {
                try {
                    var o = t[a](u), s = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
        });
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), host = "https://weapp.laravel-china.org/api", request = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        var r, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return "string" == typeof t && (t = {
                    url: t
                }), n && _wepy2.default.showLoading({
                    title: "加载中"
                }), t.url = host + "/" + t.url, e.next = 5, _wepy2.default.request(t);

              case 5:
                return r = e.sent, n && _wepy2.default.hideLoading(), 500 === r.statusCode && _wepy2.default.showModal({
                    title: "提示",
                    content: "服务器错误，请联系管理员或重试"
                }), e.abrupt("return", r);

              case 9:
              case "end":
                return e.stop();
            }
        }, e, void 0);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), login = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var t, r, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, _wepy2.default.login();

              case 2:
                return t = e.sent, n.code = t.code, e.next = 6, request({
                    url: "weapp/authorizations",
                    data: n,
                    method: "POST"
                });

              case 6:
                return r = e.sent, 201 === r.statusCode && (_wepy2.default.setStorageSync("access_token", r.data.access_token), 
                _wepy2.default.setStorageSync("access_token_expired_at", new Date().getTime() + 1e3 * r.data.expires_in)), 
                e.abrupt("return", r);

              case 9:
              case "end":
                return e.stop();
            }
        }, e, void 0);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), refreshToken = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        var r;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, _wepy2.default.request({
                    url: host + "/authorizations/current",
                    method: "PUT",
                    header: {
                        Authorization: "Bearer " + t
                    }
                });

              case 2:
                return r = e.sent, 200 === r.statusCode && (_wepy2.default.setStorageSync("access_token", r.data.access_token), 
                _wepy2.default.setStorageSync("access_token_expired_at", new Date().getTime() + 1e3 * r.data.expires_in)), 
                e.abrupt("return", r);

              case 5:
              case "end":
                return e.stop();
            }
        }, e, void 0);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), getToken = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        var r, n, a, u;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r = _wepy2.default.getStorageSync("access_token"), n = _wepy2.default.getStorageSync("access_token_expired_at"), 
                !(r && new Date().getTime() > n)) {
                    e.next = 14;
                    break;
                }
                return e.next = 5, refreshToken(r);

              case 5:
                if (a = e.sent, 200 !== a.statusCode) {
                    e.next = 10;
                    break;
                }
                r = a.data.access_token, e.next = 14;
                break;

              case 10:
                return e.next = 12, login();

              case 12:
                u = e.sent, 201 === u.statusCode && (r = u.data.access_token);

              case 14:
                return e.abrupt("return", r);

              case 15:
              case "end":
                return e.stop();
            }
        }, e, void 0);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), authRequest = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        var r, n, a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return "string" == typeof t && (t = {
                    url: t
                }), e.next = 3, getToken();

              case 3:
                return r = e.sent, n = t.header || {}, n.Authorization = "Bearer " + r, t.header = n, 
                e.abrupt("return", request(t, a));

              case 8:
              case "end":
                return e.stop();
            }
        }, e, void 0);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), logout = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var t, r;
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = _wepy2.default.getStorageSync("access_token"), e.next = 3, _wepy2.default.request({
                    url: host + "/authorizations/current",
                    method: "DELETE",
                    header: {
                        Authorization: "Bearer " + t
                    }
                });

              case 3:
                return r = e.sent, console.log(r), 204 === r.statusCode && _wepy2.default.clearStorage(), 
                e.abrupt("return", r);

              case 7:
              case "end":
                return e.stop();
            }
        }, e, void 0);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), updateFile = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var t, r, n, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return _wepy2.default.showLoading({
                    title: "上传中"
                }), e.next = 3, getToken();

              case 3:
                return t = e.sent, a.url = host + "/" + a.url, r = a.header || {}, r.Authorization = "Bearer " + t, 
                a.header = r, e.next = 10, _wepy2.default.uploadFile(a);

              case 10:
                return n = e.sent, _wepy2.default.hideLoading(), e.abrupt("return", n);

              case 13:
              case "end":
                return e.stop();
            }
        }, e, void 0);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}();

exports.default = {
    request: request,
    authRequest: authRequest,
    refreshToken: refreshToken,
    login: login,
    logout: logout,
    updateFile: updateFile
};