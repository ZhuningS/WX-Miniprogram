function r(r) {
    if (Array.isArray(r)) {
        for (var e = 0, t = Array(r.length); e < r.length; e++) t[e] = r[e];
        return t;
    }
    return Array.from(r);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.FULL_SECTION_LIST = [ "magazineExplore", "profileExplore", "magazineCarousel", "category", "xiaohua", "articleSet" ], 
exports.sortWith = function(e) {
    return function(t) {
        return [].concat(r(t)).sort(e);
    };
};

var e = exports.filterWith = function(e) {
    return function(t) {
        return [].concat(r(t)).filter(e);
    };
};

exports.filterMediaEvents = e(function(r) {
    return "cover" !== r.type && "section" !== r.type;
});