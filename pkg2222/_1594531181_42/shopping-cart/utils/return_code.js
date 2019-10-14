Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    SYSTEM_ERROR: {
        code: -1,
        msg: "系统错误，请稍后重试"
    },
    OK: {
        code: 0,
        msg: "ok"
    },
    INVALID_ARGUMENT: {
        code: -2,
        msg: "参数错误"
    },
    NOT_SUPPORT: {
        code: -3,
        msg: "接口未实现"
    },
    DELETE_FAILED: {
        code: 10011,
        msg: "部分商品删除失败"
    },
    REQ_TIMEOUT: {
        code: 9999999,
        msg: "请求超时"
    },
    CHECK_SESSION_FAILED: {
        code: 1e7,
        msg: "wx.checkSession()失败"
    },
    INVALID_SESSION: {
        code: 10000001,
        msg: "本地session为空"
    },
    WX_LOGIN_FAILED: {
        code: 10000002,
        msg: "INVALID SESSION"
    },
    CODE_IS_EMPTY_CANNOT_GET_SESSION_KEY: {
        code: 10000003,
        msg: "code is empty, cannot get sessionKey"
    },
    LOGIN_CGI_RETURN_INVALID_SESSION_KEY: {
        code: 10000004,
        msg: "login cgi response an invalid session key"
    },
    FETCH_LOGIN_CGI_ERROR: {
        code: 10000005,
        msg: "fetch login cgi error"
    },
    FETCH_CGI_FAILED: {
        code: 10000006,
        msg: "fetch cgi failed"
    },
    CGI_RESP_NOT_SUCCESS: {
        code: 1000007,
        msg: "cgi 返回码不为0"
    },
    INVALID_CGI_RESP: {
        code: 1000008,
        msg: "cgi返回了错误的结构体"
    }
};