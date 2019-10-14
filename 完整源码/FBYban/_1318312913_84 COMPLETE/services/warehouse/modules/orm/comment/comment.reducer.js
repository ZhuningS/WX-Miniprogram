Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ormCommentReducer = void 0;

var e = require("./comment.action");

exports.ormCommentReducer = function(t, r) {
    var o = r.type, a = r.payload, m = t.Comment;
    switch (o) {
      case "" + e.setCommentEntitiesAction:
        m.upsert(a);
        break;

      case "" + e.updateCommentEntityAction:
        var n = a.commentId, i = a.patch;
        if (!m.exists(n)) return;
        var s = m.get(n), u = s.value;
        void 0 !== i.isMarked && (i.markCount = i.isMarked ? u.markCount + 1 : u.markCount - 1), 
        s.update(i);
    }
};