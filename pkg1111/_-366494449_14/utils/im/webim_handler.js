function o(o) {
    var e, n, r, i, a;
    switch ((e = o.getFromAccount()) || (e = ""), (n = o.getFromAccountNick()) || (n = e), 
    r = o.getSession().type(), i = o.getSubType(), r) {
      case L.SESSION_TYPE.C2C:
        switch (i) {
          case L.C2C_MSG_SUB_TYPE.COMMON:
            a = t(o), L.Log.warn("receive a new c2c msg: fromAccountNick=" + n + ", content=" + a);
            var c = {
                To_Account: e,
                LastedMsgTime: o.getTime()
            };
            L.c2CMsgReaded(c), console.log("收到一条c2c消息(好友消息或者全员推送消息): 发送人=" + n + ", 内容=" + a);
        }
        break;

      case L.SESSION_TYPE.GROUP:
    }
}

function e(o, e, r) {
    wx.showLoading({
        title: "连接中"
    }), L.login(o, e, r, function(e) {
        console.log(e), console.log("连接成功"), wx.hideLoading(), G = o, n({
            ProfileItem: [ {
                Tag: "Tag_Profile_IM_Nick",
                Value: o.identifierNick
            } ]
        }, function() {});
    }, function(o) {
        console.error(o.ErrorInfo);
    });
}

function n(o, e) {
    L.setProfilePortrait(o, function(o) {
        console.log("修改昵称成功"), e && e();
    }, function() {});
}

function r(o) {
    var e, n;
    o.getFromAccount(), (e = o.getFromAccountNick()) || (e = "未知用户"), o.getSession().type(), 
    n = o.getSubType(), o.getIsSend();
    var r = "";
    switch (n) {
      case L.GROUP_MSG_SUB_TYPE.COMMON:
        r = t(o);
        break;

      case L.GROUP_MSG_SUB_TYPE.REDPACKET:
        r = "[群红包消息]" + t(o);
        break;

      case L.GROUP_MSG_SUB_TYPE.LOVEMSG:
        r = "[群点赞消息]" + t(o), _();
        break;

      case L.GROUP_MSG_SUB_TYPE.TIP:
        r = "[群提示消息]" + t(o);
    }
    return {
        fromAccountNick: e,
        content: r
    };
}

function t(o) {
    var e, n, r, t, f = "";
    e = o.getElems();
    for (var T in e) switch (n = e[T], r = n.getType(), t = n.getContent(), r) {
      case L.MSG_ELEMENT_TYPE.TEXT:
        f += i(t);
        break;

      case L.MSG_ELEMENT_TYPE.FACE:
        f += a(t);
        break;

      case L.MSG_ELEMENT_TYPE.IMAGE:
        f += c(t);
        break;

      case L.MSG_ELEMENT_TYPE.SOUND:
        f += s(t);
        break;

      case L.MSG_ELEMENT_TYPE.FILE:
        f += u(t);
        break;

      case L.MSG_ELEMENT_TYPE.LOCATION:
        break;

      case L.MSG_ELEMENT_TYPE.CUSTOM:
        f += g(t);
        break;

      case L.MSG_ELEMENT_TYPE.GROUP_TIP:
        f += l(t);
        break;

      default:
        L.Log.error("未知消息元素类型: elemType=" + r);
    }
    return L.Tool.formatHtml2Text(f);
}

function i(o) {
    return o.getText();
}

function a(o) {
    return o.getData();
}

function c(o) {
    var e = o.getImage(L.IMAGE_TYPE.SMALL), n = o.getImage(L.IMAGE_TYPE.LARGE), r = o.getImage(L.IMAGE_TYPE.ORIGIN);
    return n || (n = e), r || (r = e), "<img src='" + e.getUrl() + "#" + n.getUrl() + "#" + r.getUrl() + "' style='CURSOR: hand' id='" + o.getImageId() + "' bigImgUrl='" + n.getUrl() + "' onclick='imageClick(this)' />";
}

function s(o) {
    o.getSecond();
    var e = o.getDownUrl();
    return "ie" == L.BROWSER_INFO.type && parseInt(L.BROWSER_INFO.ver) <= 8 ? "[这是一条语音消息]demo暂不支持ie8(含)以下浏览器播放语音,语音URL:" + e : '<audio src="' + e + '" controls="controls" onplay="onChangePlayAudio(this)" preload="none"></audio>';
}

function u(o) {
    var e = Math.round(o.getSize() / 1024);
    return '<a href="' + o.getDownUrl() + '" title="点击下载文件" ><i class="glyphicon glyphicon-file">&nbsp;' + o.getName() + "(" + e + "KB)</i></a>";
}

function g(o) {
    return "data=" + o.getData() + ", desc=" + o.getDesc() + ", ext=" + o.getExt();
}

function l(o) {
    var e, n, r, t, i = "";
    switch (e = o.getOpType(), n = o.getOpUserId(), e) {
      case L.GROUP_TIP_TYPE.JOIN:
        r = o.getUserIdList();
        for (var a in r) if (i += r[a] + ",", r.length > 10 && 9 == a) {
            i += "等" + r.length + "人";
            break;
        }
        i = i.substring(0, i.length - 1), i += "进入房间", t = parseInt(t) + 1;
        break;

      case L.GROUP_TIP_TYPE.QUIT:
        i += n + "离开房间", t > 0 && (t = parseInt(t) - 1);
        break;

      case L.GROUP_TIP_TYPE.KICK:
        i += n + "将", r = o.getUserIdList();
        for (var a in r) if (i += r[a] + ",", r.length > 10 && 9 == a) {
            i += "等" + r.length + "人";
            break;
        }
        i += "踢出该群";
        break;

      case L.GROUP_TIP_TYPE.SET_ADMIN:
        i += n + "将", r = o.getUserIdList();
        for (var a in r) if (i += r[a] + ",", r.length > 10 && 9 == a) {
            i += "等" + r.length + "人";
            break;
        }
        i += "设为管理员";
        break;

      case L.GROUP_TIP_TYPE.CANCEL_ADMIN:
        i += n + "取消", r = o.getUserIdList();
        for (var a in r) if (i += r[a] + ",", r.length > 10 && 9 == a) {
            i += "等" + r.length + "人";
            break;
        }
        i += "的管理员资格";
        break;

      case L.GROUP_TIP_TYPE.MODIFY_GROUP_INFO:
        i += n + "修改了群资料：";
        var c, s, u = o.getGroupInfoList();
        for (var a in u) switch (c = u[a].getType(), s = u[a].getValue(), c) {
          case L.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.FACE_URL:
            i += "群头像为" + s + "; ";
            break;

          case L.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NAME:
            i += "群名称为" + s + "; ";
            break;

          case L.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.OWNER:
            i += "群主为" + s + "; ";
            break;

          case L.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NOTIFICATION:
            i += "群公告为" + s + "; ";
            break;

          case L.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.INTRODUCTION:
            i += "群简介为" + s + "; ";
            break;

          default:
            i += "未知信息为:type=" + c + ",value=" + s + "; ";
        }
        break;

      case L.GROUP_TIP_TYPE.MODIFY_MEMBER_INFO:
        i += n + "修改了群成员资料:";
        var g, l, f = o.getMemberInfoList();
        for (var a in f) if (g = f[a].getUserId(), l = f[a].getShutupTime(), i += g + ": ", 
        i += null != l && void 0 !== l ? 0 == l ? "取消禁言; " : "禁言" + l + "秒; " : " shutupTime为空", 
        f.length > 10 && 9 == a) {
            i += "等" + f.length + "人";
            break;
        }
        break;

      default:
        i += "未知群提示消息类型：type=" + e;
    }
    return i;
}

function f() {
    console.warn("tlslogin need rewrite");
}

function T() {}

function p() {}

function d() {}

function E() {}

function _() {}

function I(o) {
    $("#send_msg_text").val($("#send_msg_text").val() + o.id);
}

function m(o, e, n, r, t, i) {
    var a = "收到一条群系统消息: type=" + o + ", typeCh=" + e + ",群ID=" + n + ", 群名称=" + r + ", 内容=" + t + ", 时间=" + L.Tool.formatTimeStamp(i);
    L.Log.warn(a), console.error(a);
}

var G, M, O, N, P, S, y, R, v, L = require("webim.js");

module.exports = {
    init: function(o) {
        M = o.accountMode, O = o.accountType, N = o.sdkAppID, P = o.avChatRoomId, S = o.selType, 
        y = o.selToID;
    },
    onBigGroupMsgNotify: function(o, e) {
        for (var n = o.length - 1; n >= 0; n--) {
            var t = o[n];
            L.Log.warn("receive a new avchatroom group msg: " + t.getFromAccountNick()), e(r(t));
        }
    },
    onMsgNotify: function(e) {
        for (var n in e) o(e[n]);
    },
    handlderMsg: o,
    sdkLogin: e,
    applyJoinBigGroup: function(o) {
        var e = {
            GroupId: o
        };
        L.applyJoinBigGroup(e, function(e) {
            e.JoinedStatus && "JoinedSuccess" == e.JoinedStatus ? (L.Log.info("进群成功"), y = o) : console.error("进群失败");
        }, function(o) {
            console.error(o.ErrorInfo);
        });
    },
    showMsg: r,
    convertMsgtoHtml: t,
    convertTextMsgToHtml: i,
    convertFaceMsgToHtml: a,
    convertImageMsgToHtml: c,
    convertSoundMsgToHtml: s,
    convertFileMsgToHtml: u,
    convertLocationMsgToHtml: function(o) {
        return "经度=" + o.getLongitude() + ",纬度=" + o.getLatitude() + ",描述=" + o.getDesc();
    },
    convertCustomMsgToHtml: g,
    convertGroupTipMsgToHtml: l,
    tlsLogin: f,
    tlsGetUserSig: function(o) {
        if (o.ErrorCode == L.TLS_ERROR_CODE.OK) {
            G.identifier = L.Tool.getQueryString("identifier"), G.userSig = o.UserSig, G.sdkAppID = G.appIDAt3rd = Number(L.Tool.getQueryString("sdkappid"));
            var n = L.Tool.getCookie("accountType");
            n ? (G.accountType = n, e()) : location.href = location.href.replace(/\?.*$/gi, "");
        } else o.ErrorCode == L.TLS_ERROR_CODE.SIGNATURE_EXPIRATION ? f() : console.error("[" + o.ErrorCode + "]" + o.ErrorInfo);
    },
    imageClick: function(o) {
        var e = o.src.split("#"), n = e[0], r = e[1], t = e[2];
        L.Log.info("小图url:" + n), L.Log.info("大图url:" + r), L.Log.info("原图url:" + t);
    },
    onChangePlayAudio: function(o) {
        curPlayAudio ? curPlayAudio != o && (curPlayAudio.currentTime = 0, curPlayAudio.pause(), 
        curPlayAudio = o) : curPlayAudio = o;
    },
    smsPicClick: function() {
        G.identifier ? (p(), T()) : 1 == M ? (L.Tool.setCookie("accountType", G.accountType, 86400), 
        f()) : console.error("请填写帐号和票据");
    },
    onSendMsg: function(o, e) {
        if (console.log("accountMode====", M), G.identifier) if (console.log("selToID====", y), 
        y) {
            var n = o, t = L.Tool.getStrBytes(o);
            if (n.length < 1) console.error("发送的消息不能为空!"); else {
                var i, a;
                if (S == L.SESSION_TYPE.GROUP ? (i = L.MSG_MAX_LENGTH.GROUP, a = "消息长度超出限制(最多" + Math.round(i / 3) + "汉字)") : (i = L.MSG_MAX_LENGTH.C2C, 
                a = "消息长度超出限制(最多" + Math.round(i / 3) + "汉字)"), t > i) console.error(a); else {
                    R || (R = new L.Session(S, y, y, v, Math.round(new Date().getTime() / 1e3)));
                    var c, s = Math.round(4294967296 * Math.random()), u = Math.round(new Date().getTime() / 1e3);
                    c = S == L.SESSION_TYPE.GROUP ? L.GROUP_MSG_SUB_TYPE.COMMON : L.C2C_MSG_SUB_TYPE.COMMON;
                    var g, l, T, p, d, o = new L.Msg(R, !0, -1, s, u, G.identifier, c, G.identifierNick), E = /\[[^[\]]{1,3}\]/gm, _ = n.match(E);
                    if (!_ || _.length < 1) g = new L.Msg.Elem.Text(n), o.addText(g); else {
                        for (var I = 0; I < _.length; I++) (T = n.substring(0, n.indexOf(_[I]))) && (g = new L.Msg.Elem.Text(T), 
                        o.addText(g)), p = L.Emotions[_[I]], console.log("emotion====", p), p ? (l = new L.Msg.Elem.Face(1, p), 
                        o.addFace(l)) : (g = new L.Msg.Elem.Text(_[I]), o.addText(g)), d = n.indexOf(_[I]) + _[I].length, 
                        n = n.substring(d);
                        n && (g = new L.Msg.Elem.Text(n), o.addText(g));
                    }
                    L.sendMsg(o, function(n) {
                        S == L.SESSION_TYPE.C2C && r(o), console.log("发消息成功"), e && e(o);
                    }, function(o) {
                        L.Log.error("发消息失败:" + o.ErrorInfo), console.error("发消息失败:" + o.ErrorInfo);
                    });
                }
            }
        } else console.error("您还没有进入房间，暂不能聊天"); else 1 == M ? (L.Tool.setCookie("accountType", G.accountType, 86400), 
        f()) : console.error("请填写帐号和票据");
    },
    sendGroupLoveMsg: function() {
        if (G.identifier) if (y) {
            R || (R = new L.Session(S, y, y, v, Math.round(new Date().getTime() / 1e3)));
            var o = Math.round(4294967296 * Math.random()), e = Math.round(new Date().getTime() / 1e3), n = L.GROUP_MSG_SUB_TYPE.LOVEMSG, t = new L.Msg(R, !0, -1, o, e, G.identifier, n, G.identifierNick), i = new L.Msg.Elem.Text("love_msg");
            t.addText(i), L.sendMsg(t, function(o) {
                S == L.SESSION_TYPE.C2C && r(t), L.Log.info("点赞成功");
            }, function(o) {
                L.Log.error("发送点赞消息失败:" + o.ErrorInfo), console.error("发送点赞消息失败:" + o.ErrorInfo);
            });
        } else console.error("您还没有进入房间，暂不能点赞"); else 1 == M ? (L.Tool.setCookie("accountType", G.accountType, 86400), 
        f()) : console.error("请填写帐号和票据");
    },
    hideDiscussForm: function() {},
    showDiscussForm: T,
    hideDiscussTool: p,
    showDiscussTool: function() {},
    hideDiscussEmotion: d,
    showDiscussEmotion: E,
    showLoveMsgAnimation: _,
    initEmotionUL: function() {
        return;
    },
    showEmotionDialog: function() {
        openEmotionFlag ? (openEmotionFlag = !1, d()) : (openEmotionFlag = !0, E());
    },
    selectEmotionImg: I,
    quitBigGroup: function() {
        var o = {
            GroupId: P
        };
        L.quitBigGroup(o, function(o) {
            L.Log.info("退群成功"), R = null;
        }, function(o) {
            console.error(o.ErrorInfo);
        });
    },
    logout: function() {
        L.logoutAll(function(o) {
            console.log("登出成功===", o), G.identifier = null, G.userSig = null;
        });
    },
    onApplyJoinGroupRequestNotify: function(o) {
        L.Log.warn("执行 加群申请 回调：" + JSON.stringify(o));
        var e = o.MsgTime, n = o.Operator_Account + "申请加入你的群";
        m(o.ReportType, "[申请加群]", o.GroupId, o.GroupName, n, e);
    },
    onApplyJoinGroupAcceptNotify: function(o) {
        L.Log.warn("执行 申请加群被同意 回调：" + JSON.stringify(o));
        var e = o.Operator_Account + "同意你的加群申请，附言：" + o.RemarkInfo;
        m(o.ReportType, "[申请加群被同意]", o.GroupId, o.GroupName, e, o.MsgTime);
    },
    onApplyJoinGroupRefuseNotify: function(o) {
        L.Log.warn("执行 申请加群被拒绝 回调：" + JSON.stringify(o));
        var e = o.Operator_Account + "拒绝了你的加群申请，附言：" + o.RemarkInfo;
        m(o.ReportType, "[申请加群被拒绝]", o.GroupId, o.GroupName, e, o.MsgTime);
    },
    onKickedGroupNotify: function(o) {
        L.Log.warn("执行 被踢出群  回调：" + JSON.stringify(o));
        var e = "你被管理员" + o.Operator_Account + "踢出该群";
        m(o.ReportType, "[被踢出群]", o.GroupId, o.GroupName, e, o.MsgTime);
    },
    onDestoryGroupNotify: function(o) {
        L.Log.warn("执行 解散群 回调：" + JSON.stringify(o));
        var e = "群主" + o.Operator_Account + "已解散该群";
        m(o.ReportType, "[群被解散]", o.GroupId, o.GroupName, e, o.MsgTime);
    },
    onCreateGroupNotify: function(o) {
        L.Log.warn("执行 创建群 回调：" + JSON.stringify(o));
        m(o.ReportType, "[创建群]", o.GroupId, o.GroupName, "你创建了该群", o.MsgTime);
    },
    onInvitedJoinGroupNotify: function(o) {
        L.Log.warn("执行 被邀请加群  回调: " + JSON.stringify(o));
        var e = "你被管理员" + o.Operator_Account + "邀请加入该群";
        m(o.ReportType, "[被邀请加群]", o.GroupId, o.GroupName, e, o.MsgTime);
    },
    onQuitGroupNotify: function(o) {
        L.Log.warn("执行 主动退群  回调： " + JSON.stringify(o));
        m(o.ReportType, "[主动退群]", o.GroupId, o.GroupName, "你退出了该群", o.MsgTime);
    },
    onSetedGroupAdminNotify: function(o) {
        L.Log.warn("执行 被设置为管理员  回调：" + JSON.stringify(o));
        var e = "你被群主" + o.Operator_Account + "设置为管理员";
        m(o.ReportType, "[被设置为管理员]", o.GroupId, o.GroupName, e, o.MsgTime);
    },
    onCanceledGroupAdminNotify: function(o) {
        L.Log.warn("执行 被取消管理员 回调：" + JSON.stringify(o));
        var e = "你被群主" + o.Operator_Account + "取消了管理员资格";
        m(o.ReportType, "[被取消管理员]", o.GroupId, o.GroupName, e, o.MsgTime);
    },
    onRevokeGroupNotify: function(o) {
        L.Log.warn("执行 群被回收 回调：" + JSON.stringify(o));
        m(o.ReportType, "[群被回收]", o.GroupId, o.GroupName, "该群已被回收", o.MsgTime);
    },
    onCustomGroupNotify: function(o) {
        L.Log.warn("执行 用户自定义系统消息 回调：" + JSON.stringify(o));
        var e = o.UserDefinedField;
        m(o.ReportType, "[用户自定义系统消息]", o.GroupId, o.GroupName, e, o.MsgTime);
    },
    onGroupInfoChangeNotify: function(o) {
        L.Log.warn("执行 群资料变化 回调： " + JSON.stringify(o));
        var e = o.GroupId, n = (o.GroupFaceUrl, o.GroupName);
        o.OwnerAccount, o.GroupNotification, o.GroupIntroduction;
        n && L.Log.warn("群id=" + e + "的新名称为：" + n);
    },
    showGroupSystemMsg: m
};