var t = function(t, a, s, e) {
    this.r = t, this.g = a, this.b = s, this.a = e;
};

t.prototype = {
    toRGBA: function() {
        return {
            red: this.r,
            green: this.g,
            blue: this.b,
            alpha: this.a
        };
    },
    toHSV: function() {
        var t = this.r, a = this.g, s = this.b;
        t /= 255, a /= 255, s /= 255;
        var e, r, h = Math.max(t, a, s), i = Math.min(t, a, s), c = h, n = h - i;
        if (r = 0 == h ? 0 : n / h, h == i) e = 0; else {
            switch (h) {
              case t:
                e = (a - s) / n + (a < s ? 6 : 0);
                break;

              case a:
                e = (s - t) / n + 2;
                break;

              case s:
                e = (t - a) / n + 4;
            }
            e /= 6;
        }
        return {
            huge: e,
            saturation: r,
            brightness: c,
            alpha: this.a
        };
    },
    fromHSV: function(t) {
        var a, s, e, r = t.huge, h = t.saturation, i = t.brightness, c = Math.floor(6 * r), n = 6 * r - c, o = i * (1 - h), b = i * (1 - n * h), u = i * (1 - (1 - n) * h);
        switch (c % 6) {
          case 0:
            a = i, s = u, e = o;
            break;

          case 1:
            a = b, s = i, e = o;
            break;

          case 2:
            a = o, s = i, e = u;
            break;

          case 3:
            a = o, s = b, e = i;
            break;

          case 4:
            a = u, s = o, e = i;
            break;

          case 5:
            a = i, s = o, e = b;
        }
        this.r = 255 * a, this.g = 255 * s, this.b = 255 * e, this.alpha = t.alpha;
    }
}, module.exports = t;