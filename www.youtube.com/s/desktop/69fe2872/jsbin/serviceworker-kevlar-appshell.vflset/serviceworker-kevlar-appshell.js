/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var q, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function ea(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function fa(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function r(a) {
    return fa(a())
}
ea("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});

function ha(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
ea("Array.prototype.values", function(a) {
    return a ? a : function() {
        return ha(this, function(b, c) {
            return c
        })
    }
});
ea("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
ea("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
ea("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
ea("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var t = this || self;

function v(a, b, c) {
    a = a.split(".");
    c = c || t;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function w(a, b) {
    a = a.split(".");
    b = b || t;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ia(a) {
    var b = typeof a;
    return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
}

function ja(a) {
    var b = ia(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ka(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function la(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ma(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function na(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na = la : na = ma;
    return na.apply(null, arguments)
}

function oa(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Oa = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.zb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function pa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, pa);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
oa(pa, Error);
pa.prototype.name = "CustomError";

function qa() {};

function ra(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function sa(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function ta(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    0 <= b && Array.prototype.splice.call(a, b, 1)
}

function ua(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ja(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function va(a) {
    var b = wa;
    for (const c in b)
        if (a.call(void 0, b[c], c, b)) return c
}

function xa(a) {
    for (const b in a) return !1;
    return !0
}

function ya(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = ya(a[c]);
    return b
}
const za = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Aa(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < za.length; f++) c = za[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function Ba() {}

function Ca(a) {
    return new Ba(Da, a)
}
var Da = {};
Ca("");
var Ea = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};

function Fa() {
    var a = t.navigator;
    return a && (a = a.userAgent) ? a : ""
}

function x(a) {
    return -1 != Fa().indexOf(a)
};

function Ga() {
    return (x("Chrome") || x("CriOS")) && !x("Edge") || x("Silk")
};
var Ha = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Ia(a) {
    return a ? decodeURI(a) : a
}

function Ja(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Ja(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Ka(a) {
    var b = [],
        c;
    for (c in a) Ja(c, a[c], b);
    return b.join("&")
};

function La() {
    throw Error("Invalid UTF8");
}

function Ma(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Na = void 0,
    Oa;
const Pa = "undefined" !== typeof TextDecoder;
!x("Android") || Ga();
Ga();
var Qa = x("Safari") && !(Ga() || x("Coast") || x("Opera") || x("Edge") || x("Edg/") || x("OPR") || x("Firefox") || x("FxiOS") || x("Silk") || x("Android")) && !(x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod"));
var Sa = {},
    Ta = null;

function Ua(a, b) {
    void 0 === b && (b = 0);
    Va();
    b = Sa[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function Wa(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Xa(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function Xa(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                m = Ta[l];
            if (null != m) return m;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Va();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Va() {
    if (!Ta) {
        Ta = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Sa[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Ta[f] && (Ta[f] = e)
            }
        }
    }
};
var Ya = "undefined" !== typeof Uint8Array;

function Za(a) {
    return Ya && null != a && a instanceof Uint8Array
}
let $a;
var ab = {};
let bb;

function cb(a) {
    if (a !== ab) throw Error("illegal external caller");
}

function db() {
    return bb || (bb = new eb(null, ab))
}
var eb = class {
    constructor(a, b) {
        cb(b);
        this.R = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    isEmpty() {
        return null == this.R
    }
};
const A = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

function fb(a, b) {
    Object.isFrozen(a) || (A ? a[A] |= b : void 0 !== a.F ? a.F |= b : Object.defineProperties(a, {
        F: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    }))
}

function gb(a, b) {
    Object.isExtensible(a) && (A ? a[A] && (a[A] &= ~b) : void 0 !== a.F && (a.F &= ~b))
}

function hb(a) {
    let b;
    A ? b = a[A] : b = a.F;
    return null == b ? 0 : b
}

function ib(a, b) {
    A ? a[A] = b : void 0 !== a.F ? a.F = b : Object.defineProperties(a, {
        F: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    })
}

function jb(a) {
    return a ? !!(hb(a) & 1) : !1
}

function kb(a) {
    fb(a, 1);
    return a
}

function B(a) {
    return a ? !!(hb(a) & 2) : !1
}

function lb(a) {
    fb(a, 16);
    return a
}

function mb(a) {
    if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
    gb(a, 16)
}

function nb(a, b) {
    b ? fb(a, 8) : gb(a, 8)
}

function ob(a, b) {
    ib(b, (hb(a) | 0) & -51)
};
var pb = {};

function qb(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
let rb;
var sb = Object.freeze(kb([]));

function tb(a) {
    if (B(a.s)) throw Error("Cannot mutate an immutable Message");
}
var ub = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;

function vb(a) {
    return {
        value: a,
        configurable: !1,
        writable: !1,
        enumerable: !1
    }
};

function wb(a) {
    return a.displayName || a.name || "unknown type name"
}

function xb(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${wb(b)} but got ${a&&wb(a.constructor)}`);
    return a
}

function yb(a, b, c = !1) {
    if (Array.isArray(a)) return new b(c ? lb(a) : a)
};

function zb(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "object":
            if (a && !Array.isArray(a)) {
                if (Za(a)) return Ua(a);
                if (a instanceof eb) {
                    var b = a.R;
                    b = null == b || "string" === typeof b ? b : Ya && b instanceof Uint8Array ? Ua(b) : null;
                    return null == b ? "" : a.R = b
                }
            }
    }
    return a
};

function Ab(a, b, c) {
    if (null != a) {
        if (Array.isArray(a)) a = Bb(a, b, c);
        else if (qb(a)) {
            const d = {};
            for (let e in a) d[e] = Ab(a[e], b, c);
            a = d
        } else a = b(a);
        return a
    }
}

function Bb(a, b, c) {
    const d = Array.prototype.slice.call(a);
    c(a, d);
    for (a = 0; a < d.length; a++) d[a] = Ab(d[a], b, c);
    return d
}

function Cb(a) {
    if (a.ga === pb) return a.toJSON();
    a = zb(a);
    return Array.isArray(a) ? Bb(a, Cb, Db) : a
}

function Eb(a) {
    if (!a) return a;
    if ("object" === typeof a) {
        if (Za(a)) return new Uint8Array(a);
        if (a.ga === pb) return a.clone()
    }
    return a
}

function Db() {};

function Fb(a) {
    return a.i || (a.i = a.s[a.o + a.m] = {})
}

function C(a, b, c = !1) {
    return -1 === b ? null : b >= a.o ? a.i ? a.i[b] : void 0 : c && a.i && (c = a.i[b], null != c) ? c : a.s[b + a.m]
}

function D(a, b, c, d = !1, e = !1) {
    e || tb(a);
    a.D && (a.D = void 0);
    if (b >= a.o || d) return Fb(a)[b] = c, a;
    void 0 !== a.i && a.o >= a.s.length ? (d = a.s.length - 1, e = b + a.m, e >= d ? (a.s[d] = void 0, a.s[e] = c, a.s.push(a.i)) : a.s[e] = c) : a.s[b + a.m] = c;
    void 0 !== a.i && b in a.i && delete a.i[b];
    return a
}

function Gb(a, b, c, d) {
    let e = C(a, b, d);
    Array.isArray(e) ? jb(e) || kb(e) : e = sb;
    if (B(a.s)) c & 1 || (fb(e, 2), Object.freeze(e));
    else if (e === sb || B(e)) e = kb(Array.prototype.slice.call(e)), D(a, b, e, d);
    return e
}

function Hb(a, b, c = !1) {
    return Gb(a, b, 0, c)
}

function Ib(a, b, c, d) {
    tb(a);
    (c = Jb(a, c)) && c !== b && null != d && D(a, c, void 0, !1);
    return D(a, b, d)
}

function Jb(a, b) {
    let c = 0;
    for (let d = 0; d < b.length; d++) {
        const e = b[d];
        null != C(a, e) && (0 !== c && D(a, c, void 0, !1, !0), c = e)
    }
    return c
}

function Kb(a, b, c) {
    const d = C(a, c, !1); {
        let f = !1;
        var e = null == d || "object" !== typeof d || (f = Array.isArray(d)) || d.ga !== pb ? f ? new b(d) : void 0 : d
    }
    e !== d && null != e && (D(a, c, e, !1, !0), fb(e.s, hb(a.s) & -33));
    b = e;
    if (null == b) return b;
    B(b.s) && !B(a.s) && (b = b.ka(), D(a, c, b, !1));
    return b
}

function Lb(a, b, c, d, e = !0) {
    a.l || (a.l = {});
    let f = a.l[c];
    d = Gb(a, c, 2, d);
    const g = !!(hb(a.s) & 16);
    var h = B(d);
    h = B(a.s) || h;
    if (!f) {
        f = [];
        let l = h;
        for (let m = 0; m < d.length; m++) {
            var k = d[m];
            l = l || B(k);
            k = yb(k, b, g);
            void 0 !== k && (f.push(k), h && fb(k.s, 2))
        }
        a.l[c] = f;
        nb(d, !l)
    }
    b = h || e;
    e = B(f);
    b && !e && (Object.isFrozen(f) && (a.l[c] = f = f.slice()), fb(f, 2), Object.freeze(f));
    !b && e && (a.l[c] = f = f.slice());
    return f
}

function Mb(a, b, c, d = !1) {
    const e = B(a.s);
    b = Lb(a, b, c, d, e);
    a = Hb(a, c, d);
    if (!(c = e) && (c = a)) {
        if (!a) throw Error("cannot check mutability state of non-array");
        c = !(hb(a) & 8)
    }
    if (c) {
        for (c = 0; c < b.length; c++)(d = b[c]) && B(d.s) && !e && (b[c] = b[c].ka(), a[c] = b[c].s);
        nb(a, !0)
    }
    return b
}

function E(a, b, c, d) {
    tb(a);
    null != d ? xb(d, b) : d = void 0;
    D(a, c, d)
}

function Nb(a, b, c, d, e) {
    tb(a);
    null != e ? xb(e, b) : e = void 0;
    Ib(a, c, d, e)
}

function Ob(a, b, c, d) {
    tb(a);
    const e = Lb(a, c, b, void 0, !1);
    c = null != d ? xb(d, c) : new c;
    a = Gb(a, b, 2);
    e.push(c);
    a.push(c.s);
    c.K() && nb(a, !1);
    return c
}

function Pb(a, b) {
    return C(a, b)
}

function Qb(a, b) {
    a = C(a, b);
    return null == a ? "" : a
};

function Rb(a) {
    rb = !0;
    try {
        return JSON.stringify(a.toJSON(), Sb)
    } finally {
        rb = !1
    }
}
var Wb = class {
    constructor(a, b, c) {
        a || (a = Tb);
        Tb = null;
        var d = this.constructor.j || 0,
            e = 0 < d,
            f = this.constructor.i;
        a ? hb(a) & 16 && fb(a, 32) : (a = f ? [f] : [], fb(a, 48));
        e && 0 < a.length && qb(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.m = (f ? 0 : -1) - d;
        this.l = void 0;
        this.s = a;
        a: {
            f = this.s.length;d = f - 1;
            if (f && (f = this.s[d], qb(f))) {
                this.i = f;
                b = Object.keys(f);
                0 < b.length && Array.prototype.every.call(b, isNaN, void 0) ? this.o = Number.MAX_VALUE : this.o = d - this.m;
                break a
            }
            void 0 !== b && -1 < b ? (this.o = Math.max(b, d + 1 - this.m), this.i = void 0) : this.o =
                Number.MAX_VALUE
        }
        if (!e && this.i && "g" in this.i) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = 0; e < c.length; e++) b = c[e], b < this.o ? (b += this.m, (d = this.s[b]) ? Array.isArray(d) && kb(d) : this.s[b] = sb) : (d = Fb(this), (f = d[b]) ? Array.isArray(f) && kb(f) : d[b] = sb)
    }
    toJSON() {
        const a = Ub(this.s);
        return rb ? a : Bb(a, Cb, Db)
    }
    clone() {
        var a = Bb(this.s, Eb, ob);
        lb(a);
        Tb = a;
        a = new this.constructor(a);
        Tb = null;
        Vb(a, this);
        return a
    }
    isMutable() {
        return !B(this.s)
    }
    K() {
        return B(this.s)
    }
};
Wb.prototype.ga = pb;

function Sb(a, b) {
    return zb(b)
}

function Ub(a) {
    let b, c = a.length,
        d = !1;
    for (let g = a.length; g--;) {
        let h = a[g];
        if (Array.isArray(h)) {
            var e = h;
            Array.isArray(h) && jb(h) && !h.length ? h = null : h = Ub(h);
            h != e && (d = !0)
        } else if (g === a.length - 1 && qb(h)) {
            a: {
                var f = h;e = {};
                let k = !1;
                for (let l in f) {
                    let m = f[l];
                    if (Array.isArray(m)) {
                        let p = m;
                        Array.isArray(m) && jb(m) && !m.length ? m = null : m = Ub(m);
                        m != p && (k = !0)
                    }
                    null != m ? e[l] = m : k = !0
                }
                if (k) {
                    for (let l in e) {
                        f = e;
                        break a
                    }
                    f = null
                }
            }
            f != h && (d = !0);c--;
            continue
        }
        null == h && c == g + 1 ? (d = !0, c--) : d && (b || (b = a.slice(0, c)), b[g] = h)
    }
    if (!d) return a;
    b || (b = a.slice(0, c));
    f && b.push(f);
    return b
}

function Vb(a, b) {
    b.u && (a.u = b.u.slice());
    const c = b.l;
    if (c) {
        b = b.i;
        for (let f in c) {
            const g = c[f];
            if (g) {
                var d = !(!b || !b[f]),
                    e = +f;
                if (Array.isArray(g)) {
                    if (g.length)
                        for (d = Mb(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) Vb(d[e], g[e])
                } else throw Error("unexpected object: type: " + ia(g) + ": " + g);
            }
        }
    }
}
let Tb;

function Xb(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function Yb() {
    return Error("Failed to read varint, encoding is invalid.")
}

function Zb(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function $b(a) {
    if ("string" === typeof a) return {
        buffer: Wa(a),
        K: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        K: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        K: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        K: !1
    };
    if (a.constructor === eb) {
        cb(ab);
        var b = a.R;
        b = null == b || Za(b) ? b : "string" === typeof b ? Wa(b) : null;
        return {
            buffer: (null == b ? b : a.R = b) || $a || ($a = new Uint8Array(0)),
            K: !0
        }
    }
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        K: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};
const ac = "function" === typeof Uint8Array.prototype.slice;

function bc(a, b) {
    a.i = b;
    if (b > a.j) throw Zb(a.j, b);
}

function cc(a) {
    const b = a.l;
    let c = a.i,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Yb();
    bc(a, c);
    return e
}

function dc(a, b) {
    if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.i,
        d = c + b;
    if (d > a.j) throw Zb(b, a.j - c);
    a.i = d;
    return c
}
var ec = class {
        constructor(a) {
            this.l = null;
            this.o = !1;
            this.i = this.j = this.m = 0;
            this.init(a, void 0, void 0, void 0)
        }
        init(a, b, c, {
            aa: d = !1
        } = {}) {
            this.aa = d;
            a && (a = $b(a), this.l = a.buffer, this.o = a.K, this.m = b || 0, this.j = void 0 !== c ? this.m + c : this.l.length, this.i = this.m)
        }
        clear() {
            this.l = null;
            this.o = !1;
            this.i = this.j = this.m = 0;
            this.aa = !1
        }
        reset() {
            this.i = this.m
        }
        advance(a) {
            bc(this, this.i + a)
        }
    },
    fc = [];

function gc(a) {
    var b = a.i;
    if (b.i == b.j) return !1;
    a.l = a.i.i;
    var c = cc(a.i) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(0 <= c && 5 >= c)) throw Xb(c, a.l);
    if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.l})`);
    a.m = b;
    a.j = c;
    return !0
}

function hc(a) {
    switch (a.j) {
        case 0:
            if (0 != a.j) hc(a);
            else a: {
                a = a.i;
                var b = a.i;
                const c = b + 10,
                    d = a.l;
                for (; b < c;)
                    if (0 === (d[b++] & 128)) {
                        bc(a, b);
                        break a
                    }
                throw Yb();
            }
            break;
        case 1:
            a.i.advance(8);
            break;
        case 2:
            2 != a.j ? hc(a) : (b = cc(a.i) >>> 0, a.i.advance(b));
            break;
        case 5:
            a.i.advance(4);
            break;
        case 3:
            b = a.m;
            do {
                if (!gc(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == a.j) {
                    if (a.m != b) throw Error("Unmatched end-group tag");
                    break
                }
                hc(a)
            } while (1);
            break;
        default:
            throw Xb(a.j, a.l);
    }
}
var ic = class {
        constructor(a) {
            if (fc.length) {
                const b = fc.pop();
                b.init(a, void 0, void 0, void 0);
                a = b
            } else a = new ec(a);
            this.i = a;
            this.l = this.i.i;
            this.j = this.m = -1;
            ({
                T: a = !1
            } = {});
            this.T = a
        }
        reset() {
            this.i.reset();
            this.l = this.i.i;
            this.j = this.m = -1
        }
        advance(a) {
            this.i.advance(a)
        }
    },
    jc = [];

function kc(a, b, c, d, e, f) {
    if (a = a.l && a.l[c]) {
        f = f.M ? kb(a.slice()) : a;
        e = 0 < f.length ? f[0].constructor : void 0;
        tb(b);
        if (null != f) {
            d = kb([]);
            a = !1;
            for (let g = 0; g < f.length; g++) d[g] = xb(f[g], e).s, a = a || B(d[g]);
            b.l || (b.l = {});
            b.l[c] = f;
            nb(d, !a)
        } else b.l && (b.l[c] = void 0), d = sb;
        D(b, c, d)
    } else Ya && d instanceof Uint8Array ? e = d.length ? new eb(new Uint8Array(d), ab) : db() : (Array.isArray(d) && (e ? fb(d, 2) : jb(d) && f.M ? (e = Array.prototype.slice.call(d), ib(e, (hb(d) | 0) & -51), d = e) : mb(d)), e = d), D(b, c, e)
};
var lc = class extends Wb {
    ka() {
        return this
    }
};
ub && Object.defineProperties(lc, {
    [Symbol.hasInstance]: vb(() => {
        throw Error(void 0);
    })
});
const mc = Symbol();

function nc(a, b, c) {
    return a[mc] || (a[mc] = (d, e) => b(d, e, c))
}

function oc(a) {
    let b = a[mc];
    if (!b) {
        const c = pc(a);
        b = (d, e) => qc(d, e, c);
        a[mc] = b
    }
    return b
}

function rc(a) {
    var b = a.Ab;
    if (b) return oc(b);
    if (b = a.Kb) return nc(a.Da.ba, b, a.Jb)
}

function sc(a) {
    const b = rc(a),
        c = a.Da,
        d = a.Sb.X;
    return b ? (e, f) => d(e, f, c, b) : (e, f) => d(e, f, c)
}

function tc(a, b) {
    let c = a[b];
    "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
    return Array.isArray(c) && (uc in c || vc in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
}
const vc = Symbol(),
    uc = Symbol();

function wc(a, b) {
    a[0] = b
}

function xc(a, b, c, d) {
    const e = c.X;
    a[b] = d ? (f, g, h) => e(f, g, h, d) : e
}

function yc(a, b, c, d, e) {
    const f = c.X,
        g = oc(d),
        h = pc(d).ba;
    a[b] = (k, l, m) => f(k, l, m, h, g, e)
}

function zc(a, b, c, d, e, f, g) {
    const h = c.X,
        k = nc(d, e, f);
    a[b] = (l, m, p) => h(l, m, p, d, k, g)
}

function pc(a) {
    var b = a[uc];
    if (b) return b;
    b = a[uc] = {};
    var c = wc,
        d = xc,
        e = yc,
        f = zc;
    b.ba = a[0];
    let g = 1;
    if (a.length > g && "number" !== typeof a[g]) {
        var h = a[g++];
        c(b, h)
    }
    for (; g < a.length;) {
        c = a[g++];
        for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
        h = a[g++];
        k -= g;
        switch (k) {
            case 0:
                d(b, c, h);
                break;
            case 1:
                (k = tc(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                break;
            case 2:
                k = b;
                var l = g++;
                l = tc(a, l);
                e(k, c, h, l, a[g++]);
                break;
            case 3:
                f(b, c, h, a[g++], a[g++], a[g++]);
                break;
            case 4:
                f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                break;
            default:
                throw Error("unexpected number of binary field arguments: " +
                    k);
        }
    }
    uc in a && vc in a && (a.length = 0);
    return b
}

function qc(a, b, c) {
    for (; gc(b) && 4 != b.j;) {
        var d = b.m,
            e = c[d];
        if (!e) {
            var f = c[0];
            f && (f = f[d]) && (e = c[d] = sc(f))
        }
        if (!e || !e(b, a, d))
            if (f = b, d = a, e = f.l, hc(f), !f.T) {
                var g = f.i.i - e;
                f.i.i = e;
                a: {
                    f = f.i;e = g;
                    if (0 == e) {
                        e = db();
                        break a
                    }
                    const h = dc(f, e);f.aa && f.o ? e = f.l.subarray(h, h + e) : (f = f.l, g = h, e = h + e, e = g === e ? $a || ($a = new Uint8Array(0)) : ac ? f.slice(g, e) : new Uint8Array(f.subarray(g, e)));e = 0 == e.length ? db() : new eb(e, ab)
                }(f = d.u) ? f.push(e) : d.u = [e]
            }
    }
    return a
}

function Ac(a, b) {
    return {
        X: a,
        ac: b
    }
}
var Bc = Ac(function(a, b, c) {
        if (2 !== a.j) return !1;
        var d = cc(a.i) >>> 0;
        a = a.i;
        var e = dc(a, d);
        a = a.l;
        if (Pa) {
            var f = a,
                g;
            (g = Oa) || (g = Oa = new TextDecoder("utf-8", {
                fatal: !0
            }));
            a = e + d;
            f = 0 === e && a === f.length ? f : f.subarray(e, a);
            try {
                var h = g.decode(f)
            } catch (l) {
                if (void 0 === Na) {
                    try {
                        g.decode(new Uint8Array([128]))
                    } catch (m) {}
                    try {
                        g.decode(new Uint8Array([97])), Na = !0
                    } catch (m) {
                        Na = !1
                    }
                }!Na && (Oa = void 0);
                throw l;
            }
        } else {
            h = e;
            d = h + d;
            e = [];
            let l = null;
            let m;
            for (; h < d;) {
                var k = a[h++];
                128 > k ? e.push(k) : 224 > k ? h >= d ? La() : (m = a[h++], 194 > k || 128 !== (m & 192) ?
                    (h--, La()) : e.push((k & 31) << 6 | m & 63)) : 240 > k ? h >= d - 1 ? La() : (m = a[h++], 128 !== (m & 192) || 224 === k && 160 > m || 237 === k && 160 <= m || 128 !== ((f = a[h++]) & 192) ? (h--, La()) : e.push((k & 15) << 12 | (m & 63) << 6 | f & 63)) : 244 >= k ? h >= d - 2 ? La() : (m = a[h++], 128 !== (m & 192) || 0 !== (k << 28) + (m - 144) >> 30 || 128 !== ((f = a[h++]) & 192) || 128 !== ((g = a[h++]) & 192) ? (h--, La()) : (k = (k & 7) << 18 | (m & 63) << 12 | (f & 63) << 6 | g & 63, k -= 65536, e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : La();
                8192 <= e.length && (l = Ma(l, e), e.length = 0)
            }
            h = Ma(l, e)
        }
        D(b, c, h);
        return !0
    }, function(a, b, c) {
        a.j(c, C(b, c))
    }),
    Cc = Ac(function(a, b, c, d, e) {
        if (2 !== a.j) return !1;
        b = Ob(b, c, d);
        c = a.i.j;
        d = cc(a.i) >>> 0;
        const f = a.i.i + d;
        let g = f - c;
        0 >= g && (a.i.j = f, e(b, a, void 0, void 0, void 0), g = f - a.i.i);
        if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${d} bytes, instead read ${d-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
        a.i.i = f;
        a.i.j = c;
        return !0
    }, function(a, b, c, d, e) {
        a.i(c, Mb(b, d, c), e)
    });
class F extends lc {
    ka() {
        if (B(this.s)) {
            var {
                M: a
            } = {
                M: !0
            };
            a = {
                M: a
            };
            const c = B(this.s);
            if (c && !a.M) throw Error("copyRepeatedFields must be true for frozen messages");
            c || mb(this.s);
            const d = new this.constructor;
            this.u && (d.u = this.u.slice());
            const e = this.s;
            for (let f = 0; f < e.length; f++) {
                const g = e[f];
                if (f === e.length - 1 && qb(g))
                    for (b in g) {
                        const h = +b;
                        Number.isNaN(h) ? Fb(d)[b] = g[b] : kc(this, d, h, g[b], c, a)
                    } else kc(this, d, f - this.m, g, c, a)
            }
            var b = d;
            b.D = this
        } else b = this;
        return b
    }
}
ub && Object.defineProperties(F, {
    [Symbol.hasInstance]: vb(Object[Symbol.hasInstance])
});
Ca("csi.gstatic.com");
Ca("googleads.g.doubleclick.net");
Ca("partner.googleadservices.com");
Ca("pubads.g.doubleclick.net");
Ca("securepubads.g.doubleclick.net");
Ca("tpc.googlesyndication.com");

function Dc(a) {
    var b = w("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || t.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Ec(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Fc[c]) c = Fc[c];
                else {
                    c = String(c);
                    if (!Fc[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Fc[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Fc[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    a.stack =
        b;
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: a.stack
    }
}

function Ec(a, b) {
    b || (b = {});
    b[Gc(a)] = !0;
    var c = a.stack || "";
    (a = a.cause) && !b[Gc(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Ec(a, b));
    return c
}

function Gc(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var Fc = {};
/*

 SPDX-License-Identifier: Apache-2.0
*/
function Hc(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}
Hc.prototype.clone = function() {
    return new Hc(this.x, this.y)
};
Hc.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
Hc.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
Hc.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};

function Ic(a, b) {
    for (var c = 0; a;) {
        if (b(a)) return a;
        a = a.parentNode;
        c++
    }
    return null
};

function Jc(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !==
        c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};
var Kc = "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    Lc = [...Kc, "client_dev_set_cookie"];

function Mc() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        m = l = 0
    }

    function b(p) {
        for (var u = g, n = 0; 64 > n; n += 4) u[n / 4] = p[n] << 24 | p[n + 1] << 16 | p[n + 2] << 8 | p[n + 3];
        for (n = 16; 80 > n; n++) p = u[n - 3] ^ u[n - 8] ^ u[n - 14] ^ u[n - 16], u[n] = (p << 1 | p >>> 31) & 4294967295;
        p = e[0];
        var y = e[1],
            z = e[2],
            I = e[3],
            Ra = e[4];
        for (n = 0; 80 > n; n++) {
            if (40 > n)
                if (20 > n) {
                    var K = I ^ y & (z ^ I);
                    var da = 1518500249
                } else K = y ^ z ^ I, da = 1859775393;
            else 60 > n ? (K = y & z | I & (y | z), da = 2400959708) : (K = y ^ z ^ I, da = 3395469782);
            K = ((p << 5 | p >>> 27) & 4294967295) + K + Ra + da + u[n] & 4294967295;
            Ra = I;
            I = z;
            z = (y << 30 | y >>> 2) & 4294967295;
            y = p;
            p = K
        }
        e[0] = e[0] + p & 4294967295;
        e[1] = e[1] + y & 4294967295;
        e[2] = e[2] + z & 4294967295;
        e[3] = e[3] + I & 4294967295;
        e[4] = e[4] + Ra & 4294967295
    }

    function c(p, u) {
        if ("string" === typeof p) {
            p = unescape(encodeURIComponent(p));
            for (var n = [], y = 0, z = p.length; y < z; ++y) n.push(p.charCodeAt(y));
            p = n
        }
        u || (u = p.length);
        n = 0;
        if (0 == l)
            for (; n + 64 < u;) b(p.slice(n, n + 64)), n += 64, m += 64;
        for (; n < u;)
            if (f[l++] = p[n++], m++, 64 == l)
                for (l = 0, b(f); n + 64 < u;) b(p.slice(n, n + 64)), n += 64, m += 64
    }

    function d() {
        var p = [],
            u = 8 * m;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var n = 63; 56 <= n; n--) f[n] = u & 255, u >>>= 8;
        b(f);
        for (n = u = 0; 5 > n; n++)
            for (var y = 24; 0 <= y; y -= 8) p[u++] = e[n] >> y & 255;
        return p
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, m;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Ba: function() {
            for (var p = d(), u = "", n = 0; n < p.length; n++) u += "0123456789ABCDEF".charAt(Math.floor(p[n] / 16)) + "0123456789ABCDEF".charAt(p[n] % 16);
            return u
        }
    }
};

function Nc(a, b, c) {
    var d = String(t.location.href);
    return d && a && b ? [b, Oc(Jc(d), a, c || null)].join(" ") : null
}

function Oc(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], ra(d, function(h) {
        e.push(h)
    }), Pc(e.join(" "));
    var f = [],
        g = [];
    ra(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    ra(d, function(h) {
        e.push(h)
    });
    a = Pc(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function Pc(a) {
    var b = Mc();
    b.update(a);
    return b.Ba().toLowerCase()
};
const Qc = {};

function Rc() {
    this.i = document || {
        cookie: ""
    }
}
q = Rc.prototype;
q.isEnabled = function() {
    if (!t.navigator.cookieEnabled) return !1;
    if (!this.isEmpty()) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        sa: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
q.set = function(a, b, c) {
    let d;
    var e = !1;
    let f;
    if ("object" === typeof c) {
        f = c.Wb;
        e = c.Xb || !1;
        d = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.sa
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    c = d ? ";domain=" + d : "";
    g = g ? ";path=" + g : "";
    e = e ? ";secure" : "";
    h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
    this.i.cookie = a + "=" + b + c + g + h + e + (null != f ? ";samesite=" +
        f : "")
};
q.get = function(a, b) {
    const c = a + "=",
        d = (this.i.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = Ea(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
q.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        sa: 0,
        path: b,
        domain: c
    });
    return d
};
q.isEmpty = function() {
    return !this.i.cookie
};
q.clear = function() {
    var a = (this.i.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = Ea(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function Sc() {
    return !!Qc.FPA_SAMESITE_PHASE2_MOD || !1
}

function Tc(a, b, c, d) {
    (a = t[a]) || (a = (new Rc).get(b));
    return a ? Nc(a, c, d) : null
}

function Uc() {
    var a = [],
        b = Jc(String(t.location.href));
    const c = [];
    var d = t.__SAPISID || t.__APISID || t.__3PSAPISID || t.__OVERRIDE_SID;
    Sc() && (d = d || t.__1PSAPISID);
    if (d) var e = !0;
    else e = new Rc, d = e.get("SAPISID") || e.get("APISID") || e.get("__Secure-3PAPISID") || e.get("SID"), Sc() && (d = d || e.get("__Secure-1PAPISID")), e = !!d;
    e && (d = (e = b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:") || 0 == b.indexOf("moz-extension:")) ? t.__SAPISID : t.__APISID, d || (d = new Rc, d = d.get(e ? "SAPISID" : "APISID") || d.get("__Secure-3PAPISID")),
        (e = d ? Nc(d, e ? "SAPISIDHASH" : "APISIDHASH", a) : null) && c.push(e), b && Sc() && ((b = Tc("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && c.push(b), (a = Tc("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && c.push(a)));
    return 0 == c.length ? null : c.join(" ")
};

function Vc() {
    this.l = this.l;
    this.m = this.m
}
Vc.prototype.l = !1;
Vc.prototype.dispose = function() {
    this.l || (this.l = !0, this.U())
};
Vc.prototype.U = function() {
    if (this.m)
        for (; this.m.length;) this.m.shift()()
};
const Wc = self;

function Xc(a, b) {
    a.m(b);
    100 > a.j && (a.j++, b.next = a.i, a.i = b)
}
class Yc {
    constructor(a, b) {
        this.l = a;
        this.m = b;
        this.j = 0;
        this.i = null
    }
    get() {
        let a;
        0 < this.j ? (this.j--, a = this.i, this.i = a.next, a.next = null) : a = this.l();
        return a
    }
};

function Zc(a) {
    t.setTimeout(() => {
        throw a;
    }, 0)
};
class $c {
    constructor() {
        this.j = this.i = null
    }
    add(a, b) {
        const c = ad.get();
        c.set(a, b);
        this.j ? this.j.next = c : this.i = c;
        this.j = c
    }
    remove() {
        let a = null;
        this.i && (a = this.i, this.i = this.i.next, this.i || (this.j = null), a.next = null);
        return a
    }
}
var ad = new Yc(() => new bd, a => a.reset());
class bd {
    constructor() {
        this.next = this.scope = this.i = null
    }
    set(a, b) {
        this.i = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.i = null
    }
};
let cd, dd = !1,
    ed = new $c,
    gd = (a, b) => {
        cd || fd();
        dd || (cd(), dd = !0);
        ed.add(a, b)
    },
    fd = () => {
        const a = t.Promise.resolve(void 0);
        cd = () => {
            a.then(hd)
        }
    };
var hd = () => {
    let a;
    for (; a = ed.remove();) {
        try {
            a.i.call(a.scope)
        } catch (b) {
            Zc(b)
        }
        Xc(ad, a)
    }
    dd = !1
};
class id {
    constructor() {
        this.promise = new Promise((a, b) => {
            this.resolve = a;
            this.reject = b
        })
    }
};

function G(a) {
    this.i = 0;
    this.B = void 0;
    this.m = this.j = this.l = null;
    this.o = this.u = !1;
    if (a != qa) try {
        var b = this;
        a.call(void 0, function(c) {
            jd(b, 2, c)
        }, function(c) {
            jd(b, 3, c)
        })
    } catch (c) {
        jd(this, 3, c)
    }
}

function kd() {
    this.next = this.context = this.onRejected = this.j = this.i = null;
    this.l = !1
}
kd.prototype.reset = function() {
    this.context = this.onRejected = this.j = this.i = null;
    this.l = !1
};
var ld = new Yc(function() {
    return new kd
}, function(a) {
    a.reset()
});

function md(a, b, c) {
    var d = ld.get();
    d.j = a;
    d.onRejected = b;
    d.context = c;
    return d
}

function nd(a) {
    if (a instanceof G) return a;
    var b = new G(qa);
    jd(b, 2, a);
    return b
}
G.prototype.then = function(a, b, c) {
    return od(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
G.prototype.$goog_Thenable = !0;
q = G.prototype;
q.Ra = function(a, b) {
    return od(this, null, a, b)
};
q.catch = G.prototype.Ra;
q.cancel = function(a) {
    if (0 == this.i) {
        var b = new pd(a);
        gd(function() {
            qd(this, b)
        }, this)
    }
};

function qd(a, b) {
    if (0 == a.i)
        if (a.l) {
            var c = a.l;
            if (c.j) {
                for (var d = 0, e = null, f = null, g = c.j; g && (g.l || (d++, g.i == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.i && 1 == d ? qd(c, b) : (f ? (d = f, d.next == c.m && (c.m = d), d.next = d.next.next) : rd(c), sd(c, e, 3, b)))
            }
            a.l = null
        } else jd(a, 3, b)
}

function td(a, b) {
    a.j || 2 != a.i && 3 != a.i || ud(a);
    a.m ? a.m.next = b : a.j = b;
    a.m = b
}

function od(a, b, c, d) {
    var e = md(null, null, null);
    e.i = new G(function(f, g) {
        e.j = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.onRejected = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof pd ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.i.l = a;
    td(a, e);
    return e.i
}
q.Sa = function(a) {
    this.i = 0;
    jd(this, 2, a)
};
q.Ta = function(a) {
    this.i = 0;
    jd(this, 3, a)
};

function jd(a, b, c) {
    if (0 == a.i) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.i = 1;
        a: {
            var d = c,
                e = a.Sa,
                f = a.Ta;
            if (d instanceof G) {
                td(d, md(e || qa, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    if (ka(d)) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            vd(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.B = c, a.i = b, a.l = null, ud(a), 3 != b || c instanceof pd || wd(a, c))
    }
}

function vd(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function ud(a) {
    a.u || (a.u = !0, gd(a.Ca, a))
}

function rd(a) {
    var b = null;
    a.j && (b = a.j, a.j = b.next, b.next = null);
    a.j || (a.m = null);
    return b
}
q.Ca = function() {
    for (var a; a = rd(this);) sd(this, a, this.i, this.B);
    this.u = !1
};

function sd(a, b, c, d) {
    if (3 == c && b.onRejected && !b.l)
        for (; a && a.o; a = a.l) a.o = !1;
    if (b.i) b.i.l = null, xd(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : xd(b, c, d)
    } catch (e) {
        yd.call(null, e)
    }
    Xc(ld, b)
}

function xd(a, b, c) {
    2 == b ? a.j.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
}

function wd(a, b) {
    a.o = !0;
    gd(function() {
        a.o && yd.call(null, b)
    })
}
var yd = Zc;

function pd(a) {
    pa.call(this, a)
}
oa(pd, pa);
pd.prototype.name = "cancel";

function H(a) {
    Vc.call(this);
    this.B = 1;
    this.o = [];
    this.u = 0;
    this.i = [];
    this.j = {};
    this.D = !!a
}
oa(H, Vc);
q = H.prototype;
q.Aa = function(a, b, c) {
    var d = this.j[a];
    d || (d = this.j[a] = []);
    var e = this.B;
    this.i[e] = a;
    this.i[e + 1] = b;
    this.i[e + 2] = c;
    this.B = e + 3;
    d.push(e);
    return e
};
q.la = function(a) {
    var b = this.i[a];
    if (b) {
        var c = this.j[b];
        0 != this.u ? (this.o.push(a), this.i[a + 1] = () => {}) : (c && ta(c, a), delete this.i[a], delete this.i[a + 1], delete this.i[a + 2])
    }
    return !!b
};
q.ha = function(a, b) {
    var c = this.j[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.D)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                zd(this.i[g + 1], this.i[g + 2], d)
            } else {
                this.u++;
                try {
                    for (e = 0, f = c.length; e < f && !this.l; e++) g = c[e], this.i[g + 1].apply(this.i[g + 2], d)
                } finally {
                    if (this.u--, 0 < this.o.length && 0 == this.u)
                        for (; c = this.o.pop();) this.la(c)
                }
            }
        return 0 != e
    }
    return !1
};

function zd(a, b, c) {
    gd(function() {
        a.apply(b, c)
    })
}
q.clear = function(a) {
    if (a) {
        var b = this.j[a];
        b && (b.forEach(this.la, this), delete this.j[a])
    } else this.i.length = 0, this.j = {}
};
q.U = function() {
    H.Oa.U.call(this);
    this.clear();
    this.o.length = 0
};
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Ad = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Bd = class extends F {
    constructor(a) {
        super(a)
    }
};
var Dd = class extends F {
        constructor(a) {
            super(a)
        }
        getKey() {
            return C(this, 1)
        }
        ca() {
            return Pb(this, 2 === Jb(this, Cd) ? 2 : -1)
        }
        setValue(a) {
            return Ib(this, 2, Cd, a)
        }
    },
    Cd = [2, 3, 4, 5, 6];
var Ed = class extends F {
    constructor(a) {
        super(a)
    }
};
var Gd = class extends F {
        constructor(a) {
            super(a, -1, Fd)
        }
        clearLocationPlayabilityToken() {
            return D(this, 89, void 0, !1)
        }
    },
    Fd = [9, 66, 24, 32, 86, 100, 101];
var Id = class extends F {
        constructor(a) {
            super(a, -1, Hd)
        }
    },
    Hd = [15, 26, 28];
var Jd = class extends F {
    constructor(a) {
        super(a)
    }
    setToken(a) {
        return D(this, 2, a)
    }
};
var Ld = class extends F {
        constructor(a) {
            super(a, -1, Kd)
        }
    },
    Kd = [12];
var Nd = class extends F {
        constructor(a) {
            super(a, -1, Md)
        }
        B(a) {
            E(this, Gd, 1, a)
        }
    },
    Md = [12];
var Pd = class extends F {
        constructor(a) {
            super(a, -1, Od)
        }
    },
    Qd = class extends F {
        constructor(a) {
            super(a)
        }
        getKey() {
            return Qb(this, 1)
        }
        ca() {
            return Qb(this, 2)
        }
        setValue(a) {
            return D(this, 2, a)
        }
    },
    Od = [4, 5];
var Rd = class extends F {
    constructor(a) {
        super(a)
    }
};
var Sd = class extends F {
        constructor(a) {
            super(a)
        }
    },
    Td = [2, 3, 4];
var Ud = class extends F {
    constructor(a) {
        super(a)
    }
};
var Vd = class extends F {
    constructor(a) {
        super(a)
    }
};
var Wd = class extends F {
    constructor(a) {
        super(a)
    }
};
var Yd = class extends F {
        constructor(a) {
            super(a, -1, Xd)
        }
    },
    Xd = [10, 17];
var Zd = class extends F {
    constructor(a) {
        super(a)
    }
};
var J = class extends F {
    constructor(a) {
        super(a)
    }
};
var $d = class extends F {
    constructor(a) {
        super(a)
    }
};
var be = class extends F {
        constructor(a) {
            super(a, -1, ae)
        }
    },
    ae = [4];

function ce(a, b) {
    E(a, J, 1, b)
}
var de = class extends F {
    constructor(a) {
        super(a)
    }
    j(a) {
        D(this, 2, a)
    }
};

function ee(a, b) {
    E(a, J, 1, b)
}
var fe = class extends F {
    constructor(a) {
        super(a)
    }
};

function ge(a, b) {
    E(a, J, 2, b)
}
var ie = class extends F {
        constructor(a) {
            super(a, -1, he)
        }
        j(a) {
            D(this, 1, a)
        }
    },
    he = [3];
var je = class extends F {
    constructor(a) {
        super(a)
    }
    j(a) {
        D(this, 1, a)
    }
};
var ke = class extends F {
    constructor(a) {
        super(a)
    }
    j(a) {
        D(this, 1, a)
    }
};
var le = class extends F {
    constructor(a) {
        super(a)
    }
    j(a) {
        D(this, 1, a)
    }
};
var me = class extends F {
    constructor(a) {
        super(a)
    }
    j(a) {
        D(this, 1, a)
    }
};
var ne = class extends F {
    constructor(a) {
        super(a)
    }
};
var oe = class extends F {
    constructor(a) {
        super(a)
    }
};
var L = class extends F {
        constructor(a) {
            super(a, 442)
        }
    },
    pe = [23, 24, 11, 6, 7, 5, 2, 3, 13, 20, 21, 22, 28, 32, 37, 229, 241, 45, 59, 225, 288, 72, 73, 78, 208, 156, 202, 215, 74, 76, 79, 80, 111, 85, 91, 97, 100, 102, 105, 119, 126, 127, 136, 146, 148, 151, 157, 158, 159, 163, 164, 168, 176, 222, 383, 177, 178, 179, 411, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 402, 320, 203, 204, 205, 206, 258, 259, 260, 261, 327, 209, 219, 226, 227, 232, 233, 234, 240, 244, 247, 248, 249, 251, 256, 257, 266, 254, 255, 270, 272, 278, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 321, 323, 324, 328,
        330, 331, 332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 388, 389, 403, 410, 412, 429, 413, 414, 415, 416, 417, 418, 430, 423, 424, 425, 426, 427, 431, 117, 439, 441
    ];
var qe = {
    qb: 0,
    ab: 1,
    hb: 2,
    ib: 4,
    nb: 8,
    jb: 16,
    kb: 32,
    pb: 64,
    ob: 128,
    cb: 256,
    fb: 512,
    mb: 1024,
    eb: 2048,
    gb: 4096,
    bb: 8192,
    lb: 16384
};
var re = class extends F {
    constructor(a) {
        super(a)
    }
};
var te = class extends F {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return Ib(this, 1, se, a)
        }
    },
    se = [1, 2];
var ve = class extends F {
        constructor() {
            super(void 0, -1, ue)
        }
    },
    ue = [3];
var we = new class {
    constructor(a) {
        this.name = a
    }
}("recordNotificationInteractionsEndpoint");
var xe = ["notification/convert_endpoint_to_url"],
    ye = ["notification/record_interactions"],
    ze = ["notification_registration/set_registration"];
Date.now();
const Ae = t.window;
let Be, Ce;
const De = (null == Ae ? void 0 : null == (Be = Ae.yt) ? void 0 : Be.config_) || (null == Ae ? void 0 : null == (Ce = Ae.ytcfg) ? void 0 : Ce.data_) || {};
v("yt.config_", De);

function M(...a) {
    a = arguments;
    1 < a.length ? De[a[0]] = a[1] : 1 === a.length && Object.assign(De, a[0])
}

function N(a, b) {
    return a in De ? De[a] : b
}

function Ee() {
    return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
}

function Fe() {
    const a = De.EXPERIMENT_FLAGS;
    return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
};
const Ge = [];

function He(a) {
    Ge.forEach(b => b(a))
}

function Ie(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            Je(b)
        }
    } : a
}

function Je(a) {
    var b = w("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0) : (b = N("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0]), M("ERRORS", b));
    He(a)
}

function Ke(a) {
    var b = w("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0) : (b = N("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0]), M("ERRORS", b))
};

function O(a) {
    a = Le(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function Me(a, b) {
    a = Le(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function Ne() {
    return N("EXPERIMENTS_TOKEN", "")
}

function Le(a) {
    const b = N("EXPERIMENTS_FORCED_FLAGS", {});
    return void 0 !== b[a] ? b[a] : N("EXPERIMENT_FLAGS", {})[a]
}

function Oe() {
    const a = [],
        b = N("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c in b) a.push({
        key: c,
        value: String(b[c])
    });
    c = N("EXPERIMENT_FLAGS", {});
    for (let d in c) d.startsWith("force_") && void 0 === b[d] && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};
const Pe = /^[\w.]*$/,
    Qe = {
        q: !0,
        search_query: !0
    };

function Re(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = Se(h[0] || ""),
                l = Se(h[1] || "");
            k in c ? Array.isArray(c[k]) ? ua(c[k], l) : c[k] = [c[k], l] : c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(Re);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: Te == l ? "unchanged" : l
            }];
            Qe.hasOwnProperty(e) || Ke(d)
        }
    }
    return c
}
const Te = String(Re);

function Ue(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return Re(a, "&")
}

function Ve(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = Ue(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Ka(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function We(a) {
    if (!b) var b = window.location.href;
    const c = a.match(Ha)[1] || null,
        d = Ia(a.match(Ha)[3] || null);
    c && d ? (a = a.match(Ha), b = b.match(Ha), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Ia(b.match(Ha)[3] || null) == d && (Number(b.match(Ha)[4] || null) || null) == (Number(a.match(Ha)[4] || null) || null) : !0;
    return a
}

function Se(a) {
    return a && a.match(Pe) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};

function Xe(a, b) {
    "function" === typeof a && (a = Ie(a));
    return window.setTimeout(a, b)
};
[...Kc];
let Ye = !1;

function Ze(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = $e(a, b);
    const d = af(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || t;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = m => {
                    m = m || {};
                    k ? b.onSuccess && b.onSuccess.call(e, m, h) : b.onError && b.onError.call(e, m, h);
                    b.onFinish && b.onFinish.call(e, m, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && 0 < a && (g = Xe(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || t))
    }, a))
}

function $e(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = N("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = Ve(a, b || {}, !0);
    return a
}

function af(a, b) {
    const c = N("XSRF_FIELD_NAME"),
        d = N("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    var g = N("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Ia(a.match(Ha)[3] || null) && !b.withCredentials && Ia(a.match(Ha)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (O("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e && (e =
        Ue(e), Aa(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : Ka(e));
    f = e || f && !xa(f);
    !Ye && f && "POST" != b.method && (Ye = !0, Je(Error("AJAX request with postData should use POST")));
    return e
};
v("ytglobal.prefsUserPrefsPrefs_", w("ytglobal.prefsUserPrefsPrefs_") || {});

function bf() {
    return "INNERTUBE_API_KEY" in De && "INNERTUBE_API_VERSION" in De
}

function cf() {
    return {
        innertubeApiKey: N("INNERTUBE_API_KEY"),
        innertubeApiVersion: N("INNERTUBE_API_VERSION"),
        da: N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Fa: N("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Ga: N("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: N("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        ra: N("INNERTUBE_CONTEXT_HL"),
        qa: N("INNERTUBE_CONTEXT_GL"),
        Ha: N("INNERTUBE_HOST_OVERRIDE") || "",
        Ja: !!N("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Ia: !!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: N("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function df(a) {
    const b = {
        client: {
            hl: a.ra,
            gl: a.qa,
            clientName: a.Fa,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.da
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = t.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = Ne();
    "" !== c && (b.client.experimentsToken = c);
    c = Oe();
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    ef(a, void 0, b);
    N("DELEGATED_SESSION_ID") && !O("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: N("DELEGATED_SESSION_ID")
    });
    a = Object;
    c = a.assign;
    var d = b.client,
        e = N("DEVICE", "");
    const f = {};
    for (const [g, h] of Object.entries(Ue(e))) {
        e = g;
        const k = h;
        "cbrand" === e ? f.deviceMake = k : "cmodel" === e ? f.deviceModel = k : "cbr" === e ? f.browserName = k : "cbrver" === e ? f.browserVersion = k : "cos" === e ? f.osName = k : "cosver" === e ? f.osVersion = k : "cplatform" === e && (f.platform = k)
    }
    b.client = c.call(a, d, f);
    return b
}

function ff(a) {
    const b = new Nd,
        c = new Gd;
    D(c, 1, a.ra);
    D(c, 2, a.qa);
    D(c, 16, a.Ga);
    D(c, 17, a.innertubeContextClientVersion);
    if (a.da) {
        var d = a.da,
            e = new Ed;
        d.coldConfigData && D(e, 1, d.coldConfigData);
        d.appInstallData && D(e, 6, d.appInstallData);
        d.coldHashData && D(e, 3, d.coldHashData);
        d.hotHashData && D(e, 5, d.hotHashData);
        E(c, Ed, 62, e)
    }(d = t.devicePixelRatio) && 1 != d && D(c, 65, d);
    d = Ne();
    "" !== d && D(c, 54, d);
    d = Oe();
    if (0 < d.length) {
        e = new Id;
        for (let f = 0; f < d.length; f++) {
            const g = new Dd;
            D(g, 1, d[f].key);
            g.setValue(d[f].value);
            Ob(e, 15,
                Dd, g)
        }
        E(b, Id, 5, e)
    }
    ef(a, c);
    N("DELEGATED_SESSION_ID") && !O("pageid_as_header_web") && (a = new Ld, D(a, 3, N("DELEGATED_SESSION_ID")));
    a = N("DEVICE", "");
    for (const [f, g] of Object.entries(Ue(a))) a = f, d = g, "cbrand" === a ? D(c, 12, d) : "cmodel" === a ? D(c, 13, d) : "cbr" === a ? D(c, 87, d) : "cbrver" === a ? D(c, 88, d) : "cos" === a ? D(c, 18, d) : "cosver" === a ? D(c, 19, d) : "cplatform" === a && D(c, 42, d);
    b.B(c);
    return b
}

function ef(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = null != (d = Kb(b, Ed, 62)) ? d : new Ed;
            D(c, 6, a.appInstallData);
            E(b, Ed, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function gf(a, b, c = {}) {
    let d = {};
    N("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": N("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || N("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    (b = c.yb || N("AUTHORIZATION")) || (a ? b = `Bearer ${w("gapi.auth.getToken")().xb}` : b = Uc());
    b && (d.Authorization = b, d["X-Goog-AuthUser"] = N("SESSION_INDEX", 0), O("pageid_as_header_web") && (d["X-Goog-PageId"] = N("DELEGATED_SESSION_ID")));
    return d
};
const hf = window;
var P = hf.ytcsi && hf.ytcsi.now ? hf.ytcsi.now : hf.performance && hf.performance.timing && hf.performance.now && hf.performance.timing.navigationStart ? () => hf.performance.timing.navigationStart + hf.performance.now() : () => (new Date).getTime();

function jf(a, b) {
    kf(a, 2, b)
}
var lf = class {
    i(a, b) {
        kf(a, 1, b)
    }
};

function kf(a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    const d = w("yt.scheduler.instance.addJob");
    d ? d(a, b, c) : void 0 === c ? a() : Xe(a, c || 0)
}
var mf = class extends lf {
    start() {
        const a = w("yt.scheduler.instance.start");
        a && a()
    }
};
mf.i || (mf.i = new mf);
var nf = mf.i;
const of = [];
let pf, qf = !1;

function rf(a) {
    qf || (pf ? pf.handleError(a) : ( of .push({
        type: "ERROR",
        payload: a
    }), 10 < of .length && of .shift()))
}

function sf(a, b) {
    qf || (pf ? pf.V(a, b) : ( of .push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < of .length && of .shift()))
};
var Q = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};

function tf() {
    if (void 0 !== N("DATASYNC_ID")) return N("DATASYNC_ID");
    throw new Q("Datasync ID not set", "unknown");
};

function uf(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function vf(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const wf = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    xf = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    yf = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var R = class extends Q {
        constructor(a, b = {}, c = wf[a], d = xf[a], e = yf[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.i = e;
            Object.setPrototypeOf(this, R.prototype)
        }
    },
    zf = class extends R {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, wf.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, zf.prototype)
        }
    },
    Af = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, Af.prototype)
        }
    };
const Bf = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function Cf(a, b, c, d) {
    b = vf(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof R) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new R("QUOTA_EXCEEDED", a);
    if (Qa && "UnknownError" === e.name) return new R("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof Af) return new R("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && Bf.some(f => e.message.includes(f))) return new R("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new R("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        Nb: e.name
    })];
    e.level = "WARNING";
    return e
}

function Df(a, b, c) {
    return new R("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function Ef(a) {
    if (!a) throw Error();
    throw a;
}

function Ff(a) {
    return a
}
var Gf = class {
    constructor(a) {
        this.i = a
    }
};

function Hf(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof S ? If(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Jf(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof S ? If(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function If(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof S ? If(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var S = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.i = [];
        this.onRejected = [];
        a = a.i;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.i) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.onRejected) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new S(new Gf((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) S.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new S(new Gf((b, c) => {
            a instanceof S ? a.then(b, c) : b(a)
        }))
    }
    static reject(a) {
        return new S(new Gf((b, c) => {
            c(a)
        }))
    }
    then(a, b) {
        const c = null != a ? a : Ff,
            d = null != b ? b : Ef;
        return new S(new Gf((e, f) => {
            "PENDING" === this.state.status ? (this.i.push(() => {
                Hf(this, this, c, e, f)
            }), this.onRejected.push(() => {
                Jf(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? Hf(this, this, c, e, f) : "REJECTED" === this.state.status && Jf(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function Kf(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function Lf(a) {
    return new Promise((b, c) => {
        Kf(a, b, c)
    })
}

function T(a) {
    return new S(new Gf((b, c) => {
        Kf(a, b, c)
    }))
};

function Mf(a, b) {
    return new S(new Gf((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};

function Nf(a, b, c, d) {
    return r(function*() {
        const e = {
            mode: "readonly",
            I: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.I ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const l = Math.round(P());
            try {
                const m = a.i.transaction(b, e.mode);
                var k = d;
                const p = new Of(m),
                    u = yield Pf(p, k), n = Math.round(P());
                Qf(a, l, n, g, void 0, b.join(), e);
                return u
            } catch (m) {
                k = Math.round(P());
                const p = Cf(m, a.i.name, b.join(), a.i.version);
                if (p instanceof R && !p.i || g >= f) Qf(a, l, k, g, p, b.join(), e),
                    h = p
            }
        }
        return Promise.reject(h)
    })
}

function Rf(a, b, c) {
    a = a.i.createObjectStore(b, c);
    return new Sf(a)
}

function Tf(a, b, c, d) {
    return Nf(a, [b], {
        mode: "readwrite",
        I: !0
    }, e => {
        e = e.objectStore(b);
        return T(e.i.put(c, d))
    })
}

function Qf(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof R && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && sf("QUOTA_EXCEEDED", {
        dbName: vf(a.i.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof R && "UNKNOWN_ABORT" === e.type && (c -= a.l, 0 > c && c >= Math.pow(2, 31) && (c = 0), sf("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.j = !0), Uf(a, !1, d, f, b, g.tag), rf(e)) : Uf(a, !0, d, f, b, g.tag)
}

function Uf(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    sf("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.j,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Vf = class {
    constructor(a, b) {
        this.i = a;
        this.options = b;
        this.transactionCount = 0;
        this.l = Math.round(P());
        this.j = !1
    }
    add(a, b, c) {
        return Nf(this, [a], {
            mode: "readwrite",
            I: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return Nf(this, [a], {
            mode: "readwrite",
            I: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.i.close();
        let a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return Nf(this, [a], {
            mode: "readonly",
            I: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return Nf(this, [a], {
            mode: "readwrite",
            I: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return Nf(this, [a], {
            mode: "readonly",
            I: !0
        }, c => c.objectStore(a).get(b))
    }
    objectStoreNames() {
        return Array.from(this.i.objectStoreNames)
    }
};

function Wf(a, b, c) {
    a = a.i.openCursor(b.query, b.direction);
    return Xf(a).then(d => Mf(d, c))
}

function Yf(a, b) {
    return Wf(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}
var Sf = class {
    constructor(a) {
        this.i = a
    }
    add(a, b) {
        return T(this.i.add(a, b))
    }
    autoIncrement() {
        return this.i.autoIncrement
    }
    clear() {
        return T(this.i.clear()).then(() => {})
    }
    count(a) {
        return T(this.i.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Yf(this, a) : T(this.i.delete(a))
    }
    get(a) {
        return T(this.i.get(a))
    }
    index(a) {
        try {
            return new Zf(this.i.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new Af(a, this.i.name);
            throw b;
        }
    }
    keyPath() {
        return this.i.keyPath
    }
};

function Pf(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var Of = class {
    constructor(a) {
        this.i = a;
        this.l = new Map;
        this.j = !1;
        this.done = new Promise((b, c) => {
            this.i.addEventListener("complete", () => {
                b()
            });
            this.i.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.i.error)
            });
            this.i.addEventListener("abort", () => {
                var d = this.i.error;
                if (d) c(d);
                else if (!this.j) {
                    d = R;
                    var e = this.i.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.i.db.name,
                        mode: this.i.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.i.abort();
        this.j = !0;
        throw new R("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.i.objectStore(a);
        let b = this.l.get(a);
        b || (b = new Sf(a), this.l.set(a, b));
        return b
    }
};

function $f(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.i.openCursor(d, e);
    return Xf(a).then(f => Mf(f, c))
}
var Zf = class {
    constructor(a) {
        this.i = a
    }
    count(a) {
        return T(this.i.count(a))
    }
    delete(a) {
        return $f(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return T(this.i.get(a))
    }
    getKey(a) {
        return T(this.i.getKey(a))
    }
    keyPath() {
        return this.i.keyPath
    }
    unique() {
        return this.i.unique
    }
};

function Xf(a) {
    return T(a).then(b => b ? new ag(a, b) : null)
}
var ag = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Xf(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Xf(this.request)
    }
    delete() {
        return T(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    ca() {
        return this.cursor.value
    }
    update(a) {
        return T(this.cursor.update(a))
    }
};

function bg(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.blocked,
            h = c.blocking,
            k = c.Qa,
            l = c.upgrade,
            m = c.closed;
        let p;
        const u = () => {
            p || (p = new Vf(f.result, {
                closed: m
            }));
            return p
        };
        f.addEventListener("upgradeneeded", n => {
            try {
                if (null === n.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                n.dataLoss && "none" !== n.dataLoss && sf("IDB_DATA_CORRUPTED", {
                    reason: n.dataLossMessage || "unknown reason",
                    dbName: vf(a)
                });
                const y = u(),
                    z = new Of(f.transaction);
                l && l(y, I => n.oldVersion < I && n.newVersion >= I, z);
                z.done.catch(I => {
                    e(I)
                })
            } catch (y) {
                e(y)
            }
        });
        f.addEventListener("success", () => {
            const n = f.result;
            h && n.addEventListener("versionchange", () => {
                h(u())
            });
            n.addEventListener("close", () => {
                sf("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: vf(a),
                    dbVersion: n.version
                });
                k && k()
            });
            d(u())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function cg(a, b, c = {}) {
    return bg(a, b, c)
}

function dg(a, b = {}) {
    return r(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.blocked;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield Lf(c)
        } catch (c) {
            throw Cf(c, a, "", -1);
        }
    })
};

function eg(a) {
    return new Promise(b => {
        jf(() => {
            b()
        }, a)
    })
}

function fg(a, b) {
    return new R("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function gg(a, b) {
    if (!b) throw Df("openWithToken", vf(a.name));
    return a.open()
}
var hg = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.m = !0;
        this.u = this.o = 0;
        this.j = 500
    }
    l(a, b, c = {}) {
        return cg(a, b, c)
    }
    delete(a = {}) {
        return dg(this.name, a)
    }
    open() {
        if (!this.m) throw fg(this);
        if (this.i) return this.i;
        let a;
        const b = () => {
                this.i === a && (this.i = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                Qa: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return r(function*() {
                    var f, g = null != (f = Error().stack) ? f : "";
                    try {
                        const k = yield e.l(e.name, e.options.version, c);
                        f = k;
                        var h = e.options;
                        const l = [];
                        for (const m of Object.keys(h.O)) {
                            const {
                                S: p,
                                Tb: u = Number.MAX_VALUE
                            } = h.O[m];
                            !(f.i.version >= p) || f.i.version >= u || f.i.objectStoreNames.contains(m) || l.push(m)
                        }
                        if (0 !== l.length) {
                            const m = Object.keys(e.options.O),
                                p = k.objectStoreNames();
                            if (e.u < Me("ytidb_reopen_db_retries", 0)) return e.u++, k.close(), rf(new R("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: m,
                                foundObjectStores: p
                            })), d();
                            if (e.o < Me("ytidb_remake_db_retries", 1)) return e.o++, O("ytidb_remake_db_enable_backoff_delay") && (yield eg(e.j), e.j *= 2), yield e.delete(), rf(new R("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: m,
                                foundObjectStores: p
                            })), d();
                            throw new zf(p, m);
                        }
                        return k
                    } catch (k) {
                        if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in k &&
                            "An attempt was made to open a database using a lower version than the existing version." === k.message) {
                            g = yield e.l(e.name, void 0, Object.assign({}, c, {
                                upgrade: void 0
                            }));
                            h = g.i.version;
                            if (void 0 !== e.options.version && h > e.options.version + 1) throw g.close(), e.m = !1, fg(e, h);
                            return g
                        }
                        b();
                        k instanceof Error && !O("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw Cf(k, e.name, "", null != (l = e.options.version) ? l : -1);
                    }
                })
            };
        return this.i = a = d()
    }
};
const ig = new hg("YtIdbMeta", {
    O: {
        databases: {
            S: 1
        }
    },
    upgrade(a, b) {
        b(1) && Rf(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function jg(a, b) {
    return r(function*() {
        return Nf(yield gg(ig, b), ["databases"], {
            I: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return T(d.i.put(a, void 0)).then(() => {})
            })
        })
    })
}

function kg(a, b) {
    return r(function*() {
        if (a) return (yield gg(ig, b)).delete("databases", a)
    })
};
let lg;
const mg = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function ng() {
    return r(function*() {
        return !0
    })
}

function og() {
    if (void 0 !== lg) return lg;
    qf = !0;
    return lg = ng().then(a => {
        qf = !1;
        return a
    })
}

function pg() {
    const a = w("ytglobal.idbToken_") || void 0;
    return a ? Promise.resolve(a) : og().then(b => {
        (b = b ? mg : void 0) && v("ytglobal.idbToken_", b);
        return b
    })
};
new id;

function qg(a) {
    try {
        tf();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new R("AUTH_INVALID", {
        dbName: a
    }), rf(a), a;
    b = tf();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function rg(a, b, c, d) {
    return r(function*() {
        var e, f = null != (e = Error().stack) ? e : "";
        e = yield pg();
        if (!e) throw e = Df("openDbImpl", a, b), O("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), rf(e), e;
        uf(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : qg(a);
        try {
            return yield jg(f, e), yield cg(f.actualName, b, d)
        } catch (g) {
            try {
                yield kg(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}

function sg(a, b, c = {}) {
    return rg(a, b, !1, c)
}

function tg(a, b, c = {}) {
    return rg(a, b, !0, c)
}

function ug(a, b = {}) {
    return r(function*() {
        const c = yield pg();
        if (c) {
            uf(a);
            var d = qg(a);
            yield dg(d.actualName, b);
            yield kg(d.actualName, c)
        }
    })
}

function vg(a, b = {}) {
    return r(function*() {
        const c = yield pg();
        c && (uf(a), yield dg(a, b), yield kg(a, c))
    })
};

function wg(a) {
    this.version = 1;
    this.args = a
};

function xg() {
    var a = yg;
    this.topic = "screen-created";
    this.i = a
}
xg.prototype.toString = function() {
    return this.topic
};
const zg = w("ytPubsub2Pubsub2Instance") || new H;
H.prototype.subscribe = H.prototype.Aa;
H.prototype.unsubscribeByKey = H.prototype.la;
H.prototype.publish = H.prototype.ha;
H.prototype.clear = H.prototype.clear;
v("ytPubsub2Pubsub2Instance", zg);
const Ag = w("ytPubsub2Pubsub2SubscribedKeys") || {};
v("ytPubsub2Pubsub2SubscribedKeys", Ag);
const Bg = w("ytPubsub2Pubsub2TopicToKeys") || {};
v("ytPubsub2Pubsub2TopicToKeys", Bg);
const Cg = w("ytPubsub2Pubsub2IsAsync") || {};
v("ytPubsub2Pubsub2IsAsync", Cg);
v("ytPubsub2Pubsub2SkipSubKey", null);

function Dg(a) {
    var b = Eg;
    const c = Fg();
    c && c.publish.call(c, b.toString(), b, a)
}

function Gg(a) {
    var b = Eg;
    const c = Fg();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = w("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (Ag[d]) try {
                if (f && b instanceof xg && b != e) try {
                    var h = b.i,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.va) {
                            const n = new h;
                            h.va = n.version
                        }
                        var l = h.va
                    } catch (n) {}
                    if (!l || k.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var m = l.construct; {
                            var p = k.args;
                            const n = p.length;
                            if (0 < n) {
                                const y = Array(n);
                                for (k = 0; k < n; k++) y[k] = p[k];
                                var u = y
                            } else u = []
                        }
                        f = m.call(l, h, u)
                    } catch (n) {
                        throw n.message = "yt.pubsub2.Data.deserialize(): " + n.message, n;
                    }
                } catch (n) {
                    throw n.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + n.message, n;
                }
                a.call(window, f)
            } catch (n) {
                Je(n)
            }
        }, Cg[b.toString()] ? w("yt.scheduler.instance") ? nf.i(g) : Xe(g, 0) : g())
    });
    Ag[d] = !0;
    Bg[b.toString()] || (Bg[b.toString()] = []);
    Bg[b.toString()].push(d);
    return d
}

function Hg() {
    var a = Ig;
    const b = Gg(function(c) {
        a.apply(void 0, arguments);
        Jg(b)
    });
    return b
}

function Jg(a) {
    const b = Fg();
    b && ("number" === typeof a && (a = [a]), ra(a, c => {
        b.unsubscribeByKey(c);
        delete Ag[c]
    }))
}

function Fg() {
    return w("ytPubsub2Pubsub2Instance")
};

function Kg(a, b) {
    let c;
    return () => {
        c || (c = new Lg(a, b));
        return c
    }
}
var Lg = class extends hg {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        uf(a)
    }
    l(a, b, c = {}) {
        return (this.options.ia ? tg : sg)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.ia ? vg : ug)(this.name, a)
    }
};
const Mg = ["client.name", "client.version"];

function Ng(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Mg.includes(b.key) : !1);
    return a
};
var Og;
Og = Kg("ServiceWorkerLogsDatabase", {
    O: {
        SWHealthLog: {
            S: 1
        }
    },
    ia: !0,
    upgrade: (a, b) => {
        b(1) && Rf(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).i.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Pg(a, b) {
    return r(function*() {
        var c = yield gg(Og(), b), d = N("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = Ng(e.clientError));
        e.interface = d;
        return Tf(c, "SWHealthLog", e)
    })
};
const Qg = t.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1,
    potentialEsfErrorCounter: 0
};
v("ytNetworklessLoggingInitializationOptions", Qg);

function Rg(a) {
    !a.config_ && bf() && (a.config_ = cf());
    return !!a.config_
}

function Sg(a, b, c) {
    !N("VISITOR_DATA") && .01 > Math.random() && Ke(new Q("Missing VISITOR_DATA when sending innertube request.", "log_event", b, c));
    if (!Rg(a)) throw a = new Q("innertube xhrclient not ready", "log_event", b, c), Je(a), a;
    const d = {
        headers: c.headers || {},
        method: "POST",
        postParams: b,
        postBody: c.postBody,
        postBodyFormat: c.postBodyFormat || "JSON",
        onTimeout: () => {
            c.onTimeout()
        },
        onFetchTimeout: c.onTimeout,
        onSuccess: (m, p) => {
            if (c.onSuccess) c.onSuccess(p)
        },
        onFetchSuccess: m => {
            if (c.onSuccess) c.onSuccess(m)
        },
        onError: (m, p) => {
            if (c.onError) c.onError(p)
        },
        onFetchError: m => {
            if (c.onError) c.onError(m)
        },
        timeout: c.timeout,
        withCredentials: !0
    };
    d.headers["Content-Type"] || (d.headers["Content-Type"] = "application/json");
    b = "";
    var e = a.config_.Ha;
    e && (b = e);
    e = gf(a.config_.Ja || !1, b, c);
    Object.assign(d.headers, e);
    (e = d.headers.Authorization) && !b && (d.headers["x-origin"] = window.location.origin);
    const f = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;
    let g = {
            alt: "json"
        },
        h = a.config_.Ia && e;
    h = h && e.startsWith("Bearer");
    h || (g.key = a.config_.innertubeApiKey);
    const k = Ve(`${b}${f}`, g || {}, !0),
        l = () => {
            try {
                Ze(k,
                    d)
            } catch (m) {
                if ("InvalidAccessError" == m.name) Ke(Error("An extension is blocking network request."));
                else throw m;
            }
        };
    !O("use_new_nwl") && w("ytNetworklessLoggingInitializationOptions") && Qg.isNwlInitialized ? og().then(m => {
        l(m)
    }) : l(!1)
}
class Tg {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : bf() && (this.config_ = cf())
    }
};
let Ug = 0;
v("ytDomDomGetNextId", w("ytDomDomGetNextId") || (() => ++Ug));
const Vg = {
    stopImmediatePropagation: 1,
    stopPropagation: 1,
    preventMouseEvent: 1,
    preventManipulation: 1,
    preventDefault: 1,
    layerX: 1,
    layerY: 1,
    screenX: 1,
    screenY: 1,
    scale: 1,
    rotation: 1,
    webkitMovementX: 1,
    webkitMovementY: 1
};

function Wg(a) {
    if (document.body && document.documentElement) {
        const b = document.body.scrollTop + document.documentElement.scrollTop;
        a.i = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
        a.j = a.clientY + b
    }
}
class Xg {
    constructor(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.clientY = this.clientX = 0;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (let d in a) d in Vg || (this[d] = a[d]);
                this.rotation = a.rotation;
                var b = a.target || a.srcElement;
                b && 3 == b.nodeType && (b = b.parentNode);
                this.target = b;
                var c = a.relatedTarget;
                if (c) try {
                    c =
                        c.nodeName ? c : null
                } catch (d) {
                    c = null
                } else "mouseover" == this.type ? c = a.fromElement : "mouseout" == this.type && (c = a.toElement);
                this.relatedTarget = c;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.i = a.pageX;
                this.j = a.pageY
            }
        } catch (d) {}
    }
    preventDefault() {
        this.event &&
            (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    }
    stopPropagation() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    }
    stopImmediatePropagation() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    }
};
const wa = t.ytEventsEventsListeners || {};
v("ytEventsEventsListeners", wa);
const Yg = t.ytEventsEventsCounter || {
    count: 0
};
v("ytEventsEventsCounter", Yg);

function ah(a, b, c, d = {}) {
    a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
    return va(e => {
        const f = "boolean" === typeof e[4] && e[4] == !!d;
        var g;
        if (g = ka(e[4]) && ka(d)) a: {
            g = e[4];
            for (const h in g)
                if (!(h in d) || g[h] !== d[h]) {
                    g = !1;
                    break a
                }
            for (const h in d)
                if (!(h in g)) {
                    g = !1;
                    break a
                }
            g = !0
        }
        return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
    })
}
const bh = function(a) {
    let b = !1,
        c;
    return function() {
        b || (c = a(), b = !0);
        return c
    }
}(function() {
    let a = !1;
    try {
        const b = Object.defineProperty({}, "capture", {
            get: function() {
                a = !0
            }
        });
        window.addEventListener("test", null, b)
    } catch (b) {}
    return a
});

function ch(a, b, c, d = {}) {
    if (!a || !a.addEventListener && !a.attachEvent) return "";
    let e = ah(a, b, c, d);
    if (e) return e;
    e = ++Yg.count + "";
    const f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
    let g;
    g = f ? h => {
        h = new Xg(h);
        if (!Ic(h.relatedTarget, k => k == a)) return h.currentTarget = a, h.type = b, c.call(a, h)
    } : h => {
        h = new Xg(h);
        h.currentTarget = a;
        return c.call(a, h)
    };
    g = Ie(g);
    a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), bh() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent(`on${b}`, g);
    wa[e] = [a, b, c, g, d];
    return e
}

function dh(a) {
    a && ("string" == typeof a && (a = [a]), ra(a, b => {
        if (b in wa) {
            var c = wa[b];
            const d = c[0],
                e = c[1],
                f = c[3];
            c = c[4];
            d.removeEventListener ? bh() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent(`on${e}`, f);
            delete wa[b]
        }
    }))
};
const eh = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? function() {
    return window.performance.timing.navigationStart + window.performance.now()
} : function() {
    return (new Date).getTime()
};

function fh(a) {
    this.Z = a;
    this.i = null;
    this.u = 0;
    this.D = null;
    this.B = 0;
    this.j = [];
    for (a = 0; 4 > a; a++) this.j.push(0);
    this.o = 0;
    this.xa = ch(window, "mousemove", na(this.ya, this));
    a = na(this.wa, this);
    "function" === typeof a && (a = Ie(a));
    this.za = window.setInterval(a, 25)
}
oa(fh, Vc);
fh.prototype.ya = function(a) {
    void 0 === a.i && Wg(a);
    var b = a.i;
    void 0 === a.j && Wg(a);
    this.i = new Hc(b, a.j)
};
fh.prototype.wa = function() {
    if (this.i) {
        var a = eh();
        if (0 != this.u) {
            var b = this.D,
                c = this.i,
                d = b.x - c.x;
            b = b.y - c.y;
            d = Math.sqrt(d * d + b * b) / (a - this.u);
            this.j[this.o] = .5 < Math.abs((d - this.B) / this.B) ? 1 : 0;
            for (c = b = 0; 4 > c; c++) b += this.j[c] || 0;
            3 <= b && this.Z();
            this.B = d
        }
        this.u = a;
        this.D = this.i;
        this.o = (this.o + 1) % 4
    }
};
fh.prototype.U = function() {
    window.clearInterval(this.za);
    dh(this.xa)
};
const gh = {};

function hh() {
    var {
        Qb: a = !1,
        Fb: b = !0
    } = {};
    if (null == w("_lact", window)) {
        var c = parseInt(N("LACT"), 10);
        c = isFinite(c) ? Date.now() - Math.max(c, 0) : -1;
        v("_lact", c, window);
        v("_fact", c, window); - 1 == c && ih();
        ch(document, "keydown", ih);
        ch(document, "keyup", ih);
        ch(document, "mousedown", ih);
        ch(document, "mouseup", ih);
        a ? ch(window, "touchmove", () => {
            jh("touchmove", 200)
        }, {
            passive: !0
        }) : (ch(window, "resize", () => {
            jh("resize", 200)
        }), b && ch(window, "scroll", () => {
            jh("scroll", 200)
        }));
        new fh(() => {
            jh("mouse", 100)
        });
        ch(document, "touchstart", ih, {
            passive: !0
        });
        ch(document, "touchend", ih, {
            passive: !0
        })
    }
}

function jh(a, b) {
    gh[a] || (gh[a] = !0, nf.i(() => {
        ih();
        gh[a] = !1
    }, b))
}

function ih() {
    null == w("_lact", window) && hh();
    var a = Date.now();
    v("_lact", a, window); - 1 == w("_fact", window) && v("_fact", a, window);
    (a = w("ytglobal.ytUtilActivityCallback_")) && a()
}

function kh() {
    const a = w("_lact", window);
    var b;
    null == a ? b = -1 : b = Math.max(Date.now() - a, 0);
    return b
};
t.ytPubsubPubsubInstance || new H;

function lh(a, b) {
    const c = Object.keys(b);
    var d = "THIS_KEY_FIELD_NOT_FILLED",
        e = "THIS_KEY_FIELD_NOT_FILLED",
        f = "THIS_KEY_FIELD_NOT_FILLED";
    for (const g of c) "auth" === g ? d = mh(b.auth) : "isJspb" === g ? e = JSON.stringify(b.isJspb) : "cttAuthInfo" === g && (f = mh(b.cttAuthInfo));
    b = [];
    d = [d, e, f];
    for (const g of Object.keys(a.i)) {
        a = g.split("/");
        e = !0;
        for (f = 0; f < d.length; f++)
            if ("THIS_KEY_FIELD_NOT_FILLED" !== d[f] && d[f] !== a[f]) {
                e = !1;
                break
            }
        e && b.push(g)
    }
    return b
}
var oh = class {
    constructor() {
        this.store = [];
        this.i = {}
    }
    storePayload(a, b) {
        this.store.push({
            payload: b,
            keys: a
        });
        a = nh(a);
        this.i[a] ? this.i[a]++ : this.i[a] = 1;
        return a
    }
    extractMatchingEntries(a) {
        const b = [],
            c = [];
        for (const f of this.store) {
            a: {
                var d = a;
                var e = f;
                const g = Object.keys(d);
                for (const h of g)
                    if (e.keys[h] !== d[h]) {
                        d = !1;
                        break a
                    }
                d = !0
            }
            d ? (b.push(f.payload), this.i[nh(f.keys)]--) : c.push(f)
        }
        this.store = c;
        a = lh(this, a);
        for (const f of a) 0 < this.i[f] && Ke(new Q("Transport IMS did not fully extract entries for key:", {
            sequence: f,
            Ob: b.length,
            Mb: this.i[f]
        }));
        return b
    }
    getSequenceCount(a) {
        a = lh(this, a);
        let b = 0;
        for (const c of a) b += this.i[c];
        return b
    }
};
oh.prototype.getSequenceCount = oh.prototype.getSequenceCount;
oh.prototype.extractMatchingEntries = oh.prototype.extractMatchingEntries;
oh.prototype.storePayload = oh.prototype.storePayload;

function nh(a) {
    return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo].join("/")
}

function mh(a) {
    return void 0 === a ? "undefined" : a
};
const ph = Me("initial_gel_batch_timeout", 2E3),
    qh = Math.pow(2, 16) - 1;
let U = void 0;
class rh {
    constructor() {
        this.l = this.i = this.j = 0
    }
}
const sh = new rh,
    th = new rh;
let uh, vh = !0;
const wh = t.ytLoggingTransportGELQueue_ || new Map,
    xh = t.ytLoggingTransportGELProtoQueue_ || new Map,
    yh = t.ytLoggingTransportTokensToCttTargetIds_ || {},
    zh = t.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Ah = {};

function Bh() {
    let a = w("yt.logging.ims");
    a || (a = new oh, v("yt.logging.ims", a));
    return a
}

function Ch(a, b) {
    O("web_all_payloads_via_jspb") && Ke(new Q("transport.log called for JSON in JSPB only experiment"));
    if ("log_event" === a.endpoint) {
        var c = Dh(a);
        if (O("use_new_in_memory_storage")) {
            Ah[c] = !0;
            var d = {
                cttAuthInfo: c,
                isJspb: !1
            };
            Bh().storePayload(d, a.payload);
            Eh(b, [], c, !1, d)
        } else d = wh.get(c) || [], wh.set(c, d), d.push(a.payload), Eh(b, d, c)
    }
}

function Fh(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Dh(a, !0);
        if (O("use_new_in_memory_storage")) {
            Ah[c] = !0;
            var d = {
                cttAuthInfo: c,
                isJspb: !0
            };
            Bh().storePayload(d, a.payload.toJSON());
            Eh(b, [], c, !0, d)
        } else d = xh.get(c) || [], xh.set(c, d), a = a.payload.toJSON(), d.push(a), Eh(b, d, c, !0)
    }
}

function Eh(a, b, c, d = !1, e) {
    a && (U = new a);
    a = Me("tvhtml5_logging_max_batch") || Me("web_logging_max_batch") || 100;
    const f = P(),
        g = d ? th.l : sh.l;
    b = b.length;
    e && (b = Bh().getSequenceCount(e));
    b >= a ? O("background_thread_flush_logs_due_to_batch_limit") ? uh || (uh = Xe(() => {
        Gh({
            writeThenSend: !0
        }, O("flush_only_full_queue") ? c : void 0, d);
        uh = void 0
    }, 0)) : Gh({
        writeThenSend: !0
    }, O("flush_only_full_queue") ? c : void 0, d) : 10 <= f - g && (Hh(d), d ? th.l = f : sh.l = f)
}

function Ih(a, b) {
    O("web_all_payloads_via_jspb") && Ke(new Q("transport.logIsolatedGelPayload called in JSPB only experiment"));
    if ("log_event" === a.endpoint) {
        var c = Dh(a),
            d = new Map;
        d.set(c, [a.payload]);
        b && (U = new b);
        return new G((e, f) => {
            U && Rg(U) ? Jh(d, U, e, f, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function Kh(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Dh(a, !0),
            d = new Map;
        d.set(c, [a.payload.toJSON()]);
        b && (U = new b);
        return new G(e => {
            U && Rg(U) ? Lh(d, U, e, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function Dh(a, b = !1) {
    var c = "";
    if (a.N) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new te;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && Ib(d, 2, se, c.playlistId);
            zh[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), yh[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function Gh(a = {}, b, c = !1) {
    !c && O("web_all_payloads_via_jspb") && Ke(new Q("transport.flushLogs called for JSON in JSPB only experiment"));
    new G((d, e) => {
        c ? (window.clearTimeout(th.j), window.clearTimeout(th.i), th.i = 0) : (window.clearTimeout(sh.j), window.clearTimeout(sh.i), sh.i = 0);
        U && Rg(U) ? O("use_new_in_memory_storage") ? Mh(d, e, a, b, c) : Nh(d, e, a, b, c) : (Hh(c), d())
    })
}

function Mh(a, b, c = {}, d, e = !1) {
    var f = U,
        g = new Map;
    const h = new Map;
    if (void 0 !== d) e ? (b = Bh().extractMatchingEntries({
        isJspb: e,
        cttAuthInfo: d
    }), g.set(d, b), Lh(g, f, a, c)) : (g = Bh().extractMatchingEntries({
        isJspb: e,
        cttAuthInfo: d
    }), h.set(d, g), Jh(h, f, a, b, c));
    else if (e) {
        for (const k of Object.keys(Ah)) b = Bh().extractMatchingEntries({
            isJspb: !0,
            cttAuthInfo: k
        }), 0 < b.length && g.set(k, b), delete Ah[k];
        Lh(g, f, a, c)
    } else {
        for (const k of Object.keys(Ah)) d = Bh().extractMatchingEntries({
            isJspb: !1,
            cttAuthInfo: k
        }), 0 < d.length && h.set(k,
            d), delete Ah[k];
        Jh(h, f, a, b, c)
    }
}

function Nh(a, b, c = {}, d, e = !1) {
    var f = U;
    if (void 0 !== d)
        if (e) b = new Map, e = xh.get(d) || [], b.set(d, e), Lh(b, f, a, c), xh.delete(d);
        else {
            e = new Map;
            const g = wh.get(d) || [];
            e.set(d, g);
            Jh(e, f, a, b, c);
            wh.delete(d)
        }
    else e ? (Lh(xh, f, a, c), xh.clear()) : (Jh(wh, f, a, b, c), wh.clear())
}

function Hh(a = !1) {
    if (O("web_gel_timeout_cap") && (!a && !sh.i || a && !th.i)) {
        var b = Xe(() => {
            Gh({
                writeThenSend: !0
            }, void 0, a)
        }, 6E4);
        a ? th.i = b : sh.i = b
    }
    window.clearTimeout(a ? th.j : sh.j);
    b = N("LOGGING_BATCH_TIMEOUT", Me("web_gel_debounce_ms", 1E4));
    O("shorten_initial_gel_batch_timeout") && vh && (b = ph);
    b = Xe(() => {
        Gh({
            writeThenSend: !0
        }, void 0, a)
    }, b);
    a ? th.j = b : sh.j = b
}

function Jh(a, b, c, d, e = {}, f) {
    const g = Math.round(P());
    let h = a.size;
    for (const [m, p] of a) {
        var k = m,
            l = p;
        a = ya({
            context: df(b.config_ || cf())
        });
        if (!ja(l) && !O("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        a.events = l;
        (l = yh[k]) && Oh(a, k, l);
        delete yh[k];
        k = "visitorOnlyApprovedKey" === k;
        Ph(a, g, k);
        Qh(e);
        l = () => {
            h--;
            h || c()
        };
        const u = () => {
            h--;
            h || c()
        };
        try {
            Sg(b, a, Rh(e, k, l, u, f)), vh = !1
        } catch (n) {
            Je(n), d()
        }
    }
}

function Lh(a, b, c, d = {}, e) {
    const f = Math.round(P());
    let g = a.size;
    var h = new Map([...a]);
    for (const [m] of h) {
        var k = m,
            l = a.get(k);
        h = new ve;
        const p = ff(b.config_ || cf());
        E(h, Nd, 1, p);
        l = l ? Sh(l) : [];
        for (const u of l) Ob(h, 3, L, u);
        (l = zh[k]) && Th(h, k, l);
        delete zh[k];
        k = "visitorOnlyApprovedKey" === k;
        Uh(h, f, k);
        Qh(d);
        h = Rb(h);
        k = Rh(d, k, () => {
            g--;
            g || c()
        }, () => {
            g--;
            g || c()
        }, e);
        k.headers["Content-Type"] = "application/json+protobuf";
        k.postBodyFormat = "JSPB";
        k.postBody = h;
        Sg(b, "", k);
        vh = !1
    }
}

function Qh(a) {
    O("always_send_and_write") && (a.writeThenSend = !1)
}

function Rh(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        Lb: a,
        N: b,
        Bb: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: ""
    };
    Vh() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(P())));
    return a
}

function Ph(a, b, c) {
    Vh() || (a.requestTimeMs = String(b));
    O("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = N("EVENT_ID")) && (c = Wh(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function Uh(a, b, c) {
    Vh() || D(a, 2, b);
    if (!c && (b = N("EVENT_ID"))) {
        c = Wh();
        const d = new re;
        D(d, 1, b);
        D(d, 2, c);
        E(a, re, 5, d)
    }
}

function Wh() {
    let a = N("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * qh / 2));
    a++;
    a > qh && (a = 1);
    M("BATCH_CLIENT_COUNTER", a);
    return a
}

function Oh(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function Th(a, b, c) {
    let d;
    if (Pb(c, 1 === Jb(c, se) ? 1 : -1)) d = 1;
    else if (Pb(c, 2 === Jb(c, se) ? 2 : -1)) d = 2;
    else return;
    E(a, te, 4, c);
    a = Kb(a, Nd, 1) || new Nd;
    c = Kb(a, Ld, 3) || new Ld;
    const e = new Jd;
    e.setToken(b);
    D(e, 1, d);
    Ob(c, 12, Jd, e);
    E(a, Ld, 3, c)
}

function Sh(a) {
    const b = [];
    for (let c = 0; c < a.length; c++) try {
        b.push(new L(a[c]))
    } catch (d) {
        Je(new Q("Transport failed to deserialize " + String(a[c])))
    }
    return b
}

function Vh() {
    return O("use_request_time_ms_header") || O("lr_use_request_time_ms_header")
};
const Xh = t.ytLoggingGelSequenceIdObj_ || {};

function V(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || P());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    O("enable_unknown_lact_fix_on_html5") && hh();
    a = kh();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    O("log_sequence_info_on_gel_web") && d.C && (a = e.context, b = d.C, b = {
        index: Yh(b),
        groupKey: b
    }, a.sequence = b, d.pa && delete Xh[d.C]);
    (d.Na ? Ih : Ch)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        N: d.N
    }, c)
}

function Zh(a = !1) {
    Gh(void 0, void 0, a)
}

function Yh(a) {
    Xh[a] = a in Xh ? Xh[a] + 1 : 0;
    return Xh[a]
};
let $h = Tg;

function ai(a, b, c = {}) {
    let d = $h;
    N("ytLoggingEventsDefaultDisabled", !1) && $h === Tg && (d = null);
    O("web_all_payloads_via_jspb") && Ke(new Q("Logs should be translated to JSPB but are sent as JSON instead", a));
    V(a, b, d, c)
};
const bi = t.ytLoggingGelSequenceIdObj_ || {};

function ci(a, b, c = {}) {
    var d = Math.round(c.timestamp || P());
    D(a, 1, d < Number.MAX_SAFE_INTEGER ? d : 0);
    var e = kh();
    d = new oe;
    D(d, 1, c.timestamp || !isFinite(e) ? -1 : e);
    if (O("log_sequence_info_on_gel_web") && c.C) {
        e = c.C;
        const f = Yh(e),
            g = new ne;
        D(g, 2, f);
        D(g, 1, e);
        E(d, ne, 3, g);
        c.pa && delete bi[c.C]
    }
    E(a, oe, 33, d);
    (c.Na ? Kh : Fh)({
        endpoint: "log_event",
        payload: a,
        cttAuthInfo: c.cttAuthInfo,
        N: c.N
    }, b)
};

function di(a, b = {}) {
    let c = !1;
    N("ytLoggingEventsDefaultDisabled", !1) && (c = !0);
    ci(a, c ? null : Tg, b)
};

function ei(a, b, c) {
    const d = new L;
    Nb(d, le, 72, pe, a);
    c ? ci(d, c, b) : di(d, b)
}

function fi(a, b, c) {
    const d = new L;
    Nb(d, ke, 73, pe, a);
    c ? ci(d, c, b) : di(d, b)
}

function gi(a, b, c) {
    const d = new L;
    Nb(d, je, 78, pe, a);
    c ? ci(d, c, b) : di(d, b)
}

function hi(a, b, c) {
    const d = new L;
    Nb(d, me, 208, pe, a);
    c ? ci(d, c, b) : di(d, b)
}

function ii(a, b, c) {
    const d = new L;
    Nb(d, de, 156, pe, a);
    c ? ci(d, c, b) : di(d, b)
}

function ji(a, b, c) {
    const d = new L;
    Nb(d, ie, 215, pe, a);
    c ? ci(d, c, b) : di(d, b)
}

function ki(a, b, c) {
    const d = new L;
    Nb(d, $d, 111, pe, a);
    c ? ci(d, c, b) : di(d, b)
};
let li = Tg;

function W(a, b, c = {}) {
    if (O("migrate_events_to_ts")) ai(a, b, c);
    else {
        var d = li;
        N("ytLoggingEventsDefaultDisabled", !1) && li == Tg && (d = null);
        V(a, b, d, c)
    }
};
const mi = [{
    fa: a => `Cannot read property '${a.key}'`,
    W: {
        Error: [{
            A: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            A: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            A: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            A: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            A: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            A: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            A: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    fa: a => `Cannot call '${a.key}'`,
    W: {
        TypeError: [{
            A: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            A: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            A: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            A: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            A: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            A: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    fa: a => `${a.key} is not defined`,
    W: {
        ReferenceError: [{
            A: /(.*) is not defined/,
            groups: ["key"]
        }, {
            A: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var oi = {
    H: [],
    G: [{
        callback: ni,
        weight: 500
    }]
};

function ni(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function pi() {
    if (!qi) {
        var a = qi = new ri;
        a.H.length = 0;
        a.G.length = 0;
        si(a, oi)
    }
    return qi
}

function si(a, b) {
    b.H && a.H.push.apply(a.H, b.H);
    b.G && a.G.push.apply(a.G, b.G)
}
var ri = class {
        constructor() {
            this.G = [];
            this.H = []
        }
    },
    qi;
const ti = new H;

function ui(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = vi(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = vi(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = vi(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function vi(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function wi(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += xi(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = ui(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? xi(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += xi(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = yi(a), d += c[b].length;
    else c[b] = yi(a), d += c[b].length;
    return d
}

function xi(a, b, c, d) {
    c += `.${a}`;
    a = yi(b);
    d[c] = a;
    return c.length + a.length
}

function yi(a) {
    try {
        return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};
var zi = new Set,
    Ai = 0,
    Bi = 0,
    Ci = 0,
    Di = [];
const Ei = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function Fi(a) {
    Gi(a)
}

function Hi(a) {
    Gi(a, "WARNING")
}

function Gi(a, b = "ERROR") {
    var c = {};
    c.name = N("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = N("INNERTUBE_CONTEXT_CLIENT_VERSION");
    Ii(a, c || {}, b)
}

function Ii(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (O("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= Ai)) {
            d = Di;
            var e = Dc(a);
            const I = e.message || "Unknown Error",
                Ra = e.name || "UnknownError";
            var f = e.stack || a.j || "Not available";
            if (f.startsWith(`${Ra}: ${I}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let K = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(K = wi(a.args[h], `params.${h}`, b, K), 500 <= K); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const da = a.params;
                if ("object" === typeof a.params)
                    for (h in da) {
                        if (!da[h]) continue;
                        const Zg = `params.${h}`,
                            $g = yi(da[h]);
                        b[Zg] =
                            $g;
                        K += Zg.length + $g.length;
                        if (500 < K) break
                    } else b.params = yi(da)
            }
            if (d.length)
                for (h = 0; h < d.length && !(K = wi(d[h], `params.context.${h}`, b, K), 500 <= K); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: I,
                name: Ra,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = pi();d = b;
                for (k of a.H)
                    if (d.message && d.message.match(k.Ka)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.G)
                    if (l.callback(d)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var m of mi)
                if (m.W[k.name]) {
                    l = m.W[k.name];
                    for (var p of l)
                        if (l = k.message.match(p.A)) {
                            k.params["params.error.original"] = l[0];
                            a = p.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = m.fa(b);
                            break
                        }
                }
            k.params || (k.params = {});
            m = pi();
            k.params["params.errorServiceSignature"] = `msg=${m.H.length}&cb=${m.G.length}`;
            k.params["params.serviceWorker"] = "true";
            t.document && t.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            Ca("sample").constructor !== Ba && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            if (0 !== k.sampleWeight && !zi.has(k.message)) {
                "ERROR" === c ? (ti.ha("handleError", k), O("record_app_crashed_web") && 0 === Ci && 1 === k.sampleWeight && (Ci++, O("errors_via_jspb") ? (m = new Zd, D(m, 1, 1), O("report_client_error_with_app_crash_ks") || (l = new Ud, D(l, 1, k.message), p = new Vd, E(p, Ud, 3, l), l = new Wd, E(l, Vd, 5, p), p = new Yd, E(p,
                    Wd, 9, l), E(m, Yd, 4, p)), p = new L, Nb(p, Zd, 20, pe, m), di(p)) : (m = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, O("report_client_error_with_app_crash_ks") || (m.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: k.message
                            }
                        }
                    }
                }), W("appCrashed", m))), Bi++) : "WARNING" === c && ti.ha("handleWarning", k);
                a: {
                    if (O("errors_via_jspb")) {
                        if (Ji()) var u = void 0;
                        else {
                            m = new Rd;
                            D(m, 1, k.stack);
                            k.fileName && D(m, 4, k.fileName);
                            var n = k.lineNumber && k.lineNumber.split ? k.lineNumber.split(":") : [];
                            0 !== n.length && (1 !== n.length || isNaN(Number(n[0])) ?
                                2 !== n.length || isNaN(Number(n[0])) || isNaN(Number(n[1])) || (D(m, 2, Number(n[0])), D(m, 3, Number(n[1]))) : D(m, 2, Number(n[0])));
                            n = new Ud;
                            D(n, 1, k.message);
                            D(n, 3, k.name);
                            D(n, 6, k.sampleWeight);
                            "ERROR" === c ? D(n, 2, 2) : "WARNING" === c ? D(n, 2, 1) : D(n, 2, 0);
                            var y = new Sd;
                            D(y, 1, !0);
                            Nb(y, Rd, 3, Td, m);
                            m = new Pd;
                            D(m, 3, window.location.href);
                            p = N("FEXP_EXPERIMENTS", []);
                            for (b = 0; b < p.length; b++) l = m, a = p[b], tb(l), Gb(l, 5, 2, !1).push(a);
                            p = Ee();
                            if (!Fe() && p)
                                for (var z of Object.keys(p)) l = new Qd, D(l, 1, z), l.setValue(String(p[z])), Ob(m, 4, Qd, l);
                            if (z = k.params)
                                for (u of Object.keys(z)) p = new Qd, D(p, 1, `client.${u}`), p.setValue(String(z[u])), Ob(m, 4, Qd, p);
                            z = N("SERVER_NAME");
                            u = N("SERVER_VERSION");
                            z && u && (p = new Qd, D(p, 1, "server.name"), p.setValue(z), Ob(m, 4, Qd, p), z = new Qd, D(z, 1, "server.version"), z.setValue(u), Ob(m, 4, Qd, z));
                            u = new Vd;
                            E(u, Pd, 1, m);
                            E(u, Sd, 2, y);
                            E(u, Ud, 3, n)
                        }
                        if (!u) break a;
                        z = new L;
                        Nb(z, Vd, 163, pe, u);
                        di(z)
                    } else {
                        if (Ji()) u = void 0;
                        else {
                            z = {
                                stackTrace: k.stack
                            };
                            k.fileName && (z.filename = k.fileName);
                            u = k.lineNumber && k.lineNumber.split ? k.lineNumber.split(":") : [];
                            0 !== u.length && (1 !== u.length || isNaN(Number(u[0])) ? 2 !== u.length || isNaN(Number(u[0])) || isNaN(Number(u[1])) || (z.lineNumber = Number(u[0]), z.columnNumber = Number(u[1])) : z.lineNumber = Number(u[0]));
                            u = {
                                level: "ERROR_LEVEL_UNKNOWN",
                                message: k.message,
                                errorClassName: k.name,
                                sampleWeight: k.sampleWeight
                            };
                            "ERROR" === c ? u.level = "ERROR_LEVEL_ERROR" : "WARNING" === c && (u.level = "ERROR_LEVEL_WARNNING");
                            z = {
                                isObfuscated: !0,
                                browserStackInfo: z
                            };
                            m = {
                                pageUrl: window.location.href,
                                kvPairs: []
                            };
                            N("FEXP_EXPERIMENTS") && (m.experimentIds =
                                N("FEXP_EXPERIMENTS"));
                            p = Ee();
                            if (!Fe() && p)
                                for (y of Object.keys(p)) m.kvPairs.push({
                                    key: y,
                                    value: String(p[y])
                                });
                            if (y = k.params)
                                for (n of Object.keys(y)) m.kvPairs.push({
                                    key: `client.${n}`,
                                    value: String(y[n])
                                });
                            n = N("SERVER_NAME");
                            y = N("SERVER_VERSION");
                            n && y && (m.kvPairs.push({
                                key: "server.name",
                                value: n
                            }), m.kvPairs.push({
                                key: "server.version",
                                value: y
                            }));
                            u = {
                                errorMetadata: m,
                                stackTrace: z,
                                logMessage: u
                            }
                        }
                        if (!u) break a;
                        W("clientError", u)
                    }
                    if ("ERROR" === c || O("errors_flush_gel_always_killswitch")) b: if (O("migrate_events_to_ts")) c: {
                        if (O("web_fp_via_jspb") &&
                            (Zh(!0), !O("web_fp_via_jspb_and_json"))) break c;Zh()
                    }
                    else {
                        if (O("web_fp_via_jspb") && (Zh(!0), !O("web_fp_via_jspb_and_json"))) break b;
                        Zh()
                    }
                }
                try {
                    zi.add(k.message)
                } catch (da) {}
                Ai++
            }
        }
    }
}

function Ji() {
    for (const a of Ei) {
        const b = Fa();
        if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0
    }
    return !1
};
let Ki = 1;

function Li(a) {
    return new Mi({
        trackingParams: a
    })
}

function Ni(a) {
    const b = Ki++;
    return new Mi({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    })
}
var Mi = class {
    constructor(a) {
        this.i = a
    }
    getAsJson() {
        const a = {};
        void 0 !== this.i.trackingParams ? a.trackingParams = this.i.trackingParams : (a.veType = this.i.veType, void 0 !== this.i.veCounter && (a.veCounter = this.i.veCounter), void 0 !== this.i.elementIndex && (a.elementIndex = this.i.elementIndex));
        void 0 !== this.i.dataElement && (a.dataElement = this.i.dataElement.getAsJson());
        void 0 !== this.i.youtubeData && (a.youtubeData = this.i.youtubeData);
        return a
    }
    getAsJspb() {
        const a = new J;
        if (void 0 !== this.i.trackingParams) {
            var b = this.i.trackingParams;
            null != b && b instanceof eb && cb(ab);
            D(a, 1, b)
        } else void 0 !== this.i.veType && D(a, 2, this.i.veType), void 0 !== this.i.veCounter && D(a, 6, this.i.veCounter), void 0 !== this.i.elementIndex && D(a, 3, this.i.elementIndex);
        void 0 !== this.i.dataElement && (b = this.i.dataElement.getAsJspb(), E(a, J, 7, b));
        void 0 !== this.i.youtubeData && E(a, Bd, 8, this.i.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.i.trackingParams && !!this.i.veType
    }
};
let Oi = Date.now().toString();
let Pi = t.ytLoggingDocDocumentNonce_;
if (!Pi) {
    var Qi;
    a: {
        if (window.crypto && window.crypto.getRandomValues) try {
            const d = Array(16),
                e = new Uint8Array(16);
            window.crypto.getRandomValues(e);
            for (let f = 0; f < d.length; f++) d[f] = e[f];
            Qi = d;
            break a
        } catch (d) {}
        const c = Array(16);
        for (let d = 0; 16 > d; d++) {
            const e = Date.now();
            for (let f = 0; f < e % 23; f++) c[d] = Math.random();
            c[d] = Math.floor(256 * Math.random())
        }
        if (Oi) {
            let d = 1;
            for (let e = 0; e < Oi.length; e++) c[d % 16] = c[d % 16] ^ c[(d - 1) % 16] / 4 ^ Oi.charCodeAt(e), d++
        }
        Qi = c
    }
    const a = Qi,
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] &
        63));
    Pi = b.join("")
}
var Ri = Pi;
let Si = Tg;
var Ti = {
    Ya: 0,
    Wa: 1,
    Xa: 2,
    rb: 3,
    Za: 4,
    wb: 5,
    sb: 6,
    vb: 7,
    tb: 8,
    ub: 9,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH"
};

function Ui(a = 0) {
    return 0 === a ? "client-screen-nonce" : `${"client-screen-nonce"}.${a}`
}

function Vi(a = 0) {
    return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function Wi(a = 0) {
    return N(Vi(a))
}

function Xi(a = 0) {
    return (a = Wi(a)) ? new Mi({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function Yi() {
    let a = N("csn-to-ctt-auth-info");
    a || (a = {}, M("csn-to-ctt-auth-info", a));
    return a
}

function X(a = 0) {
    a = N(Ui(a));
    if (!a && !N("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function Zi(a, b, c) {
    const d = Yi();
    (c = X(c)) && delete d[c];
    b && (d[a] = b)
}

function $i(a) {
    return Yi()[a]
}

function aj(a, b, c = 0, d) {
    if (a !== N(Ui(c)) || b !== N(Vi(c)))
        if (Zi(a, d, c), M(Ui(c), a), M(Vi(c), b), b = () => {
                setTimeout(() => {
                    if (a)
                        if (O("web_time_via_jspb")) {
                            var e = new $d;
                            D(e, 1, Ri);
                            D(e, 2, a);
                            O("use_default_heartbeat_client") ? ki(e) : ki(e, void 0, Si)
                        } else e = {
                            clientDocumentNonce: Ri,
                            clientScreenNonce: a
                        }, O("use_default_heartbeat_client") ? W("foregroundHeartbeatScreenAssociated", e) : V("foregroundHeartbeatScreenAssociated", e, Si)
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};
class yg extends wg {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const Eg = new xg,
    bj = [];
let dj = cj,
    ej = 0;

function fj(a, b, c, d, e, f, g) {
    const h = dj();
    var k = new Mi({
        veType: b,
        youtubeData: f,
        jspbYoutubeData: void 0
    });
    f = {
        C: h
    };
    e && (f.cttAuthInfo = e);
    e = () => {
        Hi(new Q("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (O("il_via_jspb")) {
        const l = new de;
        l.j(h);
        ce(l, k.getAsJspb());
        c && c.visualElement ? (k = new fe, c.clientScreenNonce && D(k, 2, c.clientScreenNonce), ee(k, c.visualElement.getAsJspb()), g && D(k, 4, qe[g]), E(l, fe, 5, k)) : c && e();
        d && D(l, 3, d);
        ii(l, f, a)
    } else k = {
        csn: h,
        pageVe: k.getAsJson()
    }, c && c.visualElement ? (k.implicitGesture = {
        parentCsn: c.clientScreenNonce,
        gesturedVe: c.visualElement.getAsJson()
    }, g && (k.implicitGesture.gestureType = g)) : c && e(), d && (k.cloneCsn = d), a ? V("screenCreated", k, a, f) : W("screenCreated", k, f);
    Dg(new yg(h));
    return h
}

function gj(a, b, c, d) {
    const e = d.filter(g => {
            g.csn !== b ? (g.csn = b, g = !0) : g = !1;
            return g
        }),
        f = {
            cttAuthInfo: $i(b) || void 0,
            C: b
        };
    for (const g of d) d = g.getAsJson(), (xa(d) || !d.trackingParams && !d.veType) && Hi(Error("Child VE logged with no data"));
    if (O("il_via_jspb")) {
        const g = new ie;
        g.j(b);
        ge(g, c.getAsJspb());
        sa(e, h => {
            h = h.getAsJspb();
            Ob(g, 3, J, h)
        });
        "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, void 0, g) : ji(g, f, a)
    } else c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: sa(e, g => g.getAsJson())
    }, "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, c) : a ? V("visualElementAttached", c, a, f) : W("visualElementAttached", c, f)
}

function hj(a, b, c, d, e) {
    const f = {
        cttAuthInfo: $i(b) || void 0,
        C: b
    };
    O("il_via_jspb") ? (d = new le, d.j(b), c = c.getAsJspb(), E(d, J, 2, c), D(d, 4, 1), e && E(d, be, 3, e), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, void 0, d) : ei(d, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, e) : a ? V("visualElementShown", e, a, f) : W("visualElementShown", e, f))
}

function ij(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = {
        cttAuthInfo: $i(b) || void 0,
        C: b,
        pa: d
    };
    O("il_via_jspb") ? (e = new ke, e.j(b), c = c.getAsJspb(), E(e, J, 2, c), D(e, 4, d ? 16 : 8), "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, void 0, e) : fi(e, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, d) : a ? V("visualElementHidden", d, a, f) : W("visualElementHidden", d, f))
}

function jj(a, b, c, d) {
    const e = {
        cttAuthInfo: $i(b) || void 0,
        C: b
    };
    O("il_via_jspb") ? (d = new je, d.j(b), c = c.getAsJspb(), E(d, J, 2, c), D(d, 4, qe.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK), "UNDEFINED_CSN" === b ? Y("visualElementGestured", e, void 0, d) : gi(d, e, a)) : (c = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
    }, d && (c.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementGestured", e, c) : a ? V("visualElementGestured", c, a, e) : W("visualElementGestured", c, e))
}

function cj() {
    for (var a = Math.random() + "", b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e
    }
    return Ua(b, 3)
}

function Y(a, b, c, d) {
    bj.push({
        payloadName: a,
        payload: c,
        L: d,
        options: b
    });
    ej || (ej = Hg())
}

function Ig(a) {
    if (bj) {
        for (const b of bj)
            if (b.payload)
                if (O("il_via_jspb")) switch (b.L.j(a.csn), b.payloadName) {
                    case "screenCreated":
                        ii(b.L, b.options);
                        break;
                    case "visualElementAttached":
                        ji(b.L, b.options);
                        break;
                    case "visualElementShown":
                        ei(b.L, b.options);
                        break;
                    case "visualElementHidden":
                        fi(b.L, b.options);
                        break;
                    case "visualElementGestured":
                        gi(b.L, b.options);
                        break;
                    case "visualElementStateChanged":
                        hi(b.L, b.options);
                        break;
                    default:
                        Hi(new Q("flushQueue unable to map payloadName to JSPB setter"))
                } else b.payload.csn =
                    a.csn, V(b.payloadName, b.payload, null, b.options);
        bj.length = 0
    }
    ej = 0
};

function kj(a, b) {
    return b.data && b.data.loggingDirectives ? b.data.loggingDirectives.trackingParams || "" : b.i && b.i.trackingParams ? b.i.trackingParams : b.data && b.data.trackingParams || ""
}

function lj(a) {
    return parseInt(a.data && a.data.loggingDirectives && a.data.loggingDirectives.visibility && a.data.loggingDirectives.visibility.types || "", 10) || 1
}

function mj(a, b) {
    var c = kj(0, b),
        d = b.visualElement ? b.visualElement : c;
    const e = a.m.has(d),
        f = a.j.get(d);
    a.m.add(d);
    a.j.set(d, !0);
    b.j && !e && b.j();
    if (c || b.visualElement)
        if (d = X(8)) {
            var g = !(!b.data || !b.data.loggingDirectives);
            if (lj(b) || g) {
                var h = b.visualElement ? b.visualElement : Li(c),
                    k = b.l;
                c = b.m;
                g || e ? lj(b) & 4 ? f || (a = a.i, b = {
                    cttAuthInfo: $i(d) || void 0,
                    C: d
                }, O("il_via_jspb") ? (k = new le, k.j(d), h = h.getAsJspb(), E(k, J, 2, h), D(k, 4, 4), c && E(k, be, 3, c), "UNDEFINED_CSN" === d ? Y("visualElementShown", b, void 0, k) : ei(k, b, a)) : (c = {
                    csn: d,
                    ve: h.getAsJson(),
                    eventType: 4
                }, k && (c.clientData = k), "UNDEFINED_CSN" === d ? Y("visualElementShown", b, c) : a ? V("visualElementShown", c, a, b) : W("visualElementShown", c, b))) : lj(b) & 1 && !e && hj(a.i, d, h, k, c) : hj(a.i, d, h, k)
            }
        }
}

function nj(a, b) {
    var c = kj(0, b),
        d = b.visualElement ? b.visualElement : c,
        e = a.l.has(d);
    const f = a.j.get(d);
    a.l.add(d);
    a.j.set(d, !1);
    !1 !== f && (c || b.visualElement) && (!(d = X(8)) || !lj(b) && b.data && b.data.loggingDirectives || (c = b.visualElement ? b.visualElement : Li(c), lj(b) & 8 ? ij(a.i, d, c) : lj(b) & 2 && !e && (a = a.i, b = {
        cttAuthInfo: $i(d) || void 0,
        C: d
    }, O("il_via_jspb") ? (e = new ke, e.j(d), c = c.getAsJspb(), E(e, J, 2, c), D(e, 4, 2), "UNDEFINED_CSN" === d ? Y("visualElementHidden", b, void 0, e) : fi(e, b, a)) : (e = {
            csn: d,
            ve: c.getAsJson(),
            eventType: 2
        }, "UNDEFINED_CSN" ===
        d ? Y("visualElementHidden", b, e) : a ? V("visualElementHidden", e, a, b) : W("visualElementHidden", e, b)))))
}
class oj {
    constructor() {
        this.m = new Set;
        this.l = new Set;
        this.j = new Map;
        this.o = null;
        this.i = Tg
    }
    B(a) {
        this.i = a
    }
    clear() {
        this.m.clear();
        this.l.clear();
        this.j.clear();
        this.o = null
    }
}(function() {
    var a = oj;
    a.ea = void 0;
    a.v = function() {
        return a.ea ? a.ea : a.ea = new a
    }
})();
var pj = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var qj = ["notifications_register", "notifications_check_registration"];
let rj = null;

function Z(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return sj().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function tj() {
    return Z("IndexedDBCheck", "testing IndexedDB").then(() => uj("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function uj(a) {
    const b = new Q("Error accessing DB");
    return sj().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function sj() {
    return rj ? Promise.resolve(rj) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) rj = d, a(rj);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), sj()
        };
        c.onupgradeneeded = vj
    })
}

function vj(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const wj = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function xj(a) {
    if (1 === a.length) return a[0];
    var b = wj.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(wj).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function yj(a) {
    return `/youtubei/v1/${xj(a)}`
};

function zj(a) {
    if (a) return a[we.name]
};
var Aj = class extends F {
    constructor(a) {
        super(a)
    }
};
var Bj = class extends F {
    constructor(a) {
        super(a)
    }
};
Bj.i = "yt.sw.adr";

function Cj(a) {
    return r(function*() {
        var b = yield t.fetch(a.j);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === (new Bj).constructor.i) {
                    b = new Bj(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function Dj(a = !1) {
    const b = Ej.i;
    return r(function*() {
        if (a || !b.i) b.i = Cj(b).then(b.l).catch(c => {
            delete b.i;
            Gi(c)
        });
        return b.i
    })
}
var Ej = class {
    constructor() {
        this.j = Fj("/sw.js_data")
    }
    l(a) {
        const b = Kb(a, Aj, 2);
        if (b) {
            const c = C(b, 5);
            c && (t.__SAPISID = c);
            null != C(b, 10) ? M("EOM_VISITOR_DATA", C(b, 10)) : null != C(b, 7) && M("VISITOR_DATA", C(b, 7));
            null != C(b, 4) && M("SESSION_INDEX", String(C(b, 4)));
            null != C(b, 8) && M("DELEGATED_SESSION_ID", C(b, 8))
        }
        return a
    }
};

function Gj(a) {
    return r(function*() {
        yield Hj();
        Hi(a)
    })
}

function Ij(a) {
    return r(function*() {
        yield Hj();
        Gi(a)
    })
}

function Jj(a) {
    r(function*() {
        var b = yield pg();
        b ? yield Pg(a, b): (yield Dj(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            payloadName: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            payloadName: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && W(b.payloadName, b.payload))
    })
}

function Hj() {
    return r(function*() {
        try {
            yield Dj()
        } catch (a) {}
    })
};
const Kj = window;
class Lj {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var Mj = Kj.performance || Kj.mozPerformance || Kj.msPerformance || Kj.webkitPerformance || new Lj;
na(Mj.clearResourceTimings || Mj.webkitClearResourceTimings || Mj.mozClearResourceTimings || Mj.msClearResourceTimings || Mj.oClearResourceTimings || qa, Mj);
v("ytLoggingLatencyUsageStats_", t.ytLoggingLatencyUsageStats_ || {});

function Nj() {
    Oj.i || (Oj.i = new Oj);
    return Oj.i
}

function Pj(a, b, c = {}) {
    a.j.add(c.layer || 0);
    a.l = () => {
        Qj(a, b, c);
        var d = Xi(c.layer);
        if (d) {
            for (var e of a.o) Rj(a, e[0], e[1] || d, c.layer);
            for (const k of a.D) {
                e = X(0);
                var f = k[0] || Xi(0);
                if (e && f) {
                    d = a.client;
                    var g = f,
                        h = k[1];
                    f = {
                        cttAuthInfo: $i(e) || void 0,
                        C: e
                    };
                    O("il_via_jspb") ? (h = new me, h.j(e), g = g.getAsJspb(), E(h, J, 2, g), "UNDEFINED_CSN" === e ? Y("visualElementStateChanged", f, void 0, h) : hi(h, f, d)) : (g = {
                        csn: e,
                        ve: g.getAsJson(),
                        clientData: h
                    }, "UNDEFINED_CSN" === e ? Y("visualElementStateChanged", f, g) : d ? V("visualElementStateChanged",
                        g, d, f) : W("visualElementStateChanged", g, f))
                }
            }
        }
    };
    X(c.layer) || a.l();
    if (c.oa)
        for (const d of c.oa) Sj(a, d, c.layer);
    else Gi(Error("Delayed screen needs a data promise."))
}

function Qj(a, b, c = {}) {
    c.layer || (c.layer = 0);
    var d = void 0 !== c.La ? c.La : c.layer;
    var e = X(d);
    d = Xi(d);
    let f;
    d && (void 0 !== c.parentCsn ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && "UNDEFINED_CSN" !== e && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const h = N("EVENT_ID");
    "UNDEFINED_CSN" === e && h && (g = {
        servletData: {
            serializedServletEventId: h
        }
    });
    let k;
    try {
        k = fj(a.client, b, f, c.na, c.cttAuthInfo, g, c.Gb)
    } catch (l) {
        a = l;
        c = [{
            Vb: b,
            rootVe: d,
            parentVisualElement: void 0,
            Eb: e,
            Pb: f,
            na: c.na
        }];
        a.args || (a.args = []);
        a.args.push(...c);
        Gi(l);
        return
    }
    aj(k, b, c.layer, c.cttAuthInfo);
    if (b = e && "UNDEFINED_CSN" !== e && d) {
        a: {
            for (const l of Object.values(Ti))
                if (X(l) === e) {
                    b = !0;
                    break a
                }
            b = !1
        }
        b = !b
    }
    b && ij(a.client, e, d, !0);
    a.i[a.i.length - 1] && !a.i[a.i.length - 1].csn && (a.i[a.i.length - 1].csn = k || "");
    d = oj.v();
    d.clear();
    d.o = X();
    d = Xi(c.layer);
    e && "UNDEFINED_CSN" !== e && d && (O("web_mark_root_visible") || O("music_web_mark_root_visible")) && hj(void 0, k, d);
    a.j.delete(c.layer || 0);
    a.l = void 0;
    for (const [l, m] of a.Z) e = l, m.has(c.layer) && d && Rj(a, e, d, c.layer);
    for (c = 0; c < a.m.length; c++) {
        e =
            a.m[c];
        try {
            e()
        } catch (l) {
            Gi(l)
        }
    }
    a.m.length = 0;
    for (c = 0; c < a.u.length; c++) {
        e = a.u[c];
        try {
            e()
        } catch (l) {
            Gi(l)
        }
    }
}

function Tj(a) {
    var b = 28631,
        c = {
            layer: 8
        };
    [28631].includes(b) || (Hi(new Q("createClientScreen() called with a non-page VE", b)), b = 83769);
    c.isHistoryNavigation || a.i.push({
        rootVe: b,
        key: c.key || ""
    });
    a.o = [];
    a.D = [];
    c.oa ? Pj(a, b, c) : Qj(a, b, c)
}

function Sj(a, b, c = 0) {
    b.then(d => {
        a.j.has(c) && a.l && a.l();
        const e = X(c),
            f = Xi(c);
        if (e && f) {
            var g;
            (null == d ? 0 : null == (g = d.response) ? 0 : g.trackingParams) && gj(a.client, e, f, [Li(d.response.trackingParams)]);
            var h;
            (null == d ? 0 : null == (h = d.playerResponse) ? 0 : h.trackingParams) && gj(a.client, e, f, [Li(d.playerResponse.trackingParams)])
        }
    })
}

function Rj(a, b, c, d = 0) {
    if (a.j.has(d)) a.o.push([b, c]);
    else {
        var e = X(d);
        c = c || Xi(d);
        e && c && gj(a.client, e, c, [b])
    }
}

function Uj(a, b, c = 0) {
    (c = X(c)) && jj(a.client, c, b)
}

function Vj(a, b, c, d = 0) {
    if (!b) return !1;
    d = X(d);
    if (!d) return !1;
    jj(a.client, d, Li(b), c);
    return !0
}

function Wj(a, b) {
    const c = b.Ea && b.Ea();
    b.visualElement ? Uj(a, b.visualElement, c) : (b = kj(oj.v(), b), Vj(a, b, void 0, c))
}
var Oj = class {
    constructor() {
        this.o = [];
        this.D = [];
        this.i = [];
        this.m = [];
        this.u = [];
        this.j = new Set;
        this.Z = new Map
    }
    B(a) {
        this.client = a
    }
    clickCommand(a, b, c = 0) {
        return Vj(this, a.clickTrackingParams, b, c)
    }
};

function Xj(a) {
    const b = {};
    var c = Uc();
    c && (b.Authorization = c, c = a = null == a ? void 0 : a.sessionIndex, void 0 === c && (c = Number(N("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), O("voice_search_auth_header_removal") || (b["X-Goog-AuthUser"] = c), "INNERTUBE_HOST_OVERRIDE" in De || (b["X-Origin"] = window.location.origin), void 0 === a && "DELEGATED_SESSION_ID" in De && (b["X-Goog-PageId"] = N("DELEGATED_SESSION_ID")));
    return b
}
var Yj = class {
    constructor() {
        this.Pa = !0
    }
};
var Zj = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};

function ak(a, b) {
    b.encryptedTokenJarContents && (a.i[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.i[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var bk = class {
    constructor() {
        this.i = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = (null == (c = b.J.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.i[f.encryptedTokenJarContents];
            ak(this, a)
        }
    }
};

function ck() {
    var a = N("INNERTUBE_CONTEXT");
    if (!a) return Gi(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = ya(a);
    O("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = Ne();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    bk.i || (bk.i = new bk);
    b = bk.i.i;
    c = [];
    let d = 0;
    for (const e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    return a
};
var dk = Symbol("injectionDeps");

function ek(a) {
    var b = {
        Ma: fk,
        ta: gk.i
    };
    a.providers.set(b.Ma, b)
}

function hk(a, b, c) {
    if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
    if (a.i.has(b)) return a.i.get(b);
    if (!a.providers.has(b)) throw Error(`No provider for: ${b}`);
    const d = a.providers.get(b);
    c.push(b);
    if (d.ta) var e = d.ta;
    else if (d.Va) e = d[dk] ? ik(a, d[dk], c) : [], e = d.Va(...e);
    else if (d.Ua) {
        e = d.Ua;
        const f = e[dk] ? ik(a, e[dk], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.Zb || a.i.set(b, e);
    return e
}

function ik(a, b, c) {
    return b ? b.map(d => hk(a, d, c)) : []
}
var jk = class {
    constructor() {
        this.providers = new Map;
        this.i = new Map
    }
    resolve(a) {
        return hk(this, a, [])
    }
};
let kk;

function lk(a) {
    var b = a;
    if (a = N("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Ha);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var mk = class {};
const nk = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends mk {})
};
const ok = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];

function pk(a) {
    var b = {
        Db: {}
    };
    Yj.i || (Yj.i = new Yj);
    var c = Yj.i;
    if (void 0 !== gk.i) {
        const d = gk.i;
        a = [b !== d.o, a !== d.m, c !== d.l, !1, !1, void 0 !== d.j];
        if (a.some(e => e)) throw new Q("InnerTubeTransportService is already initialized", a);
    } else gk.i = new gk(b, a, c)
}

function qk(a, b) {
    return r(function*() {
        var c, d = {
            sessionIndex: null == a ? void 0 : null == (c = a.ma) ? void 0 : c.sessionIndex
        };
        c = yield nd(Xj(d));
        return Promise.resolve(Object.assign({}, rk(b), c))
    })
}

function sk(a, b, c) {
    return r(function*() {
        var d;
        if (null == b ? 0 : null == (d = b.J) ? 0 : d.context)
            for (const m of []) m.Rb(b.J.context);
        var e;
        if (null == (e = a.j) ? 0 : e.Yb(b.input, b.J)) return yield a.j.Ib(b.input, b.J);
        var f;
        if ((d = null == (f = b.config) ? void 0 : f.Ub) && a.i.has(d) && O("web_memoize_inflight_requests")) var g = a.i.get(d);
        else {
            f = JSON.stringify(b.J);
            let m;
            e = null != (m = null == (g = b.P) ? void 0 : g.headers) ? m : {};
            b.P = Object.assign({}, b.P, {
                headers: Object.assign({}, e, c)
            });
            g = Object.assign({}, b.P);
            "POST" === b.P.method && (g = Object.assign({},
                g, {
                    body: f
                }));
            g = a.m.fetch(b.input, g, b.config);
            d && a.i.set(d, g)
        }
        g = yield g;
        var h;
        let k;
        if (O("web_one_platform_error_handling") && (null == (h = g) ? 0 : null == (k = h.error) ? 0 : k.details)) {
            h = g.error.details;
            for (const m of h)(h = m["@type"]) && -1 < ok.indexOf(h) && (delete m["@type"], g = m)
        }
        d && a.i.has(d) && a.i.delete(d);
        let l;
        !g && (null == (l = a.j) ? 0 : l.Cb(b.input, b.J)) && (g = yield a.j.Hb(b.input, b.J));
        return g
    })
}

function tk(a, b, c) {
    var d = {
        ma: {
            identity: Zj
        }
    };
    b.context || (b.context = ck());
    return new G(e => r(function*() {
        var f = lk(c);
        f = We(f) ? "same-origin" : "cors";
        if (a.l.Pa) {
            var g, h = null == d ? void 0 : null == (g = d.ma) ? void 0 : g.sessionIndex;
            g = Xj({
                sessionIndex: h
            });
            f = Object.assign({}, rk(f), g)
        } else f = yield qk(d, f);
        g = lk(c);
        h = {};
        N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null == f ? 0 : f.Authorization) || (h.key = N("INNERTUBE_API_KEY"));
        O("json_condensed_response") && (h.prettyPrint = "false");
        g = Ve(g, h || {}, !1);
        h = {
            method: "POST",
            mode: We(g) ? "same-origin" : "cors",
            credentials: We(g) ? "same-origin" : "include"
        };
        var k = {};
        const l = {};
        for (const m of Object.keys(k)) k[m] && (l[m] = k[m]);
        0 < Object.keys(l).length && (h.headers = l);
        e(sk(a, {
            input: g,
            P: h,
            J: b,
            config: d
        }, f))
    }))
}

function rk(a) {
    const b = {
        "Content-Type": "application/json"
    };
    N("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = N("EOM_VISITOR_DATA") : N("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = N("VISITOR_DATA"));
    O("track_webfe_innertube_auth_mismatch") && (b["X-Youtube-Bootstrap-Logged-In"] = N("LOGGED_IN", !1));
    "cors" !== a && ((a = N("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = N("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = N("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] =
        a), (a = N("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var gk = class {
    constructor(a, b, c) {
        this.o = a;
        this.m = b;
        this.l = c;
        this.j = void 0;
        this.i = new Map;
        a.ja || (a.ja = {});
        a.ja = Object.assign({}, nk, a.ja)
    }
};
var fk = new class {
    constructor(a) {
        this.name = a
    }
    toString() {
        return `InjectionToken(${this.name})`
    }
}("INNERTUBE_TRANSPORT_TOKEN");
let uk;

function vk() {
    if (!uk) {
        kk || (kk = new jk);
        var a = kk;
        pk({
            fetch: (b, c) => nd(fetch(new Request(b, c)))
        });
        ek(a);
        uk = a.resolve(fk)
    }
    return uk
};
const wk = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    xk = RegExp("^(?:[a-z]+:)?//", "i");

function yk(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (Z("IDToken", b), zk()) : "notifications_check_registration" === a && Ak(b)
}

function Bk() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function Ck(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function Dk(a) {
    return r(function*() {
        const b = Ck(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = yj(xe);
        return Ek().then(e => tk(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? Fk(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                Ij(g);
                Promise.reject(g)
            })
        }))
    })
}

function Gk(a, b) {
    var c = X(8);
    if (null == c || !b) return a;
    a = xk.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function Fk(a, b) {
    a.deviceId && Z("DeviceId", a.deviceId);
    a.timestampSec && Z("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = Nj();
    Tj(d);
    var e;
    const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: Gk(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var h;
        (null == (h = g.data) ? 0 : h.postedEndpoint) && Hk(g.data.postedEndpoint);
        let k;
        if (null == (k = g.data) ? 0 : k.clickTrackingParams) h = Li(g.data.clickTrackingParams), Rj(d, h, void 0, 8), h = {
            Y: 8,
            visualElement: h
        }, mj(oj.v(), h);
        Ik(a.displayCap)
    }).catch(() => {})
}

function Hk(a) {
    if (!zj(a)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: zj(a).serializedInteractionsRequest
        },
        c = yj(ye);
    return Ek().then(d => tk(d, b, c))
}

function Ik(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let d = 0; d < b.length - a; d++) {
            b[d].data.isDismissed = !1;
            b[d].close();
            let e;
            if (null == (e = b[d].data) ? 0 : e.clickTrackingParams) {
                let f;
                var c = Li(null == (f = b[d].data) ? void 0 : f.clickTrackingParams);
                const g = {
                        Y: 8,
                        visualElement: c
                    },
                    h = Ni(82046),
                    k = Nj();
                Rj(k, h, c, 8);
                c = {
                    Y: 8,
                    visualElement: h
                };
                mj(oj.v(), c);
                Wj(k, c);
                nj(oj.v(), g)
            }
        }
    })
}

function Ak(a) {
    const b = [Jk(a), uj("RegistrationTimestamp").then(Kk), Lk(), Mk(), Nk()];
    Promise.all(b).catch(() => {
        Z("IDToken", a);
        zk();
        return Promise.resolve()
    })
}

function Kk(a) {
    a = a || 0;
    return 9E7 >= Date.now() - a ? Promise.resolve() : Promise.reject()
}

function Jk(a) {
    return uj("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function Lk() {
    return uj("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function Mk() {
    return uj("Endpoint").then(a => Ok().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Nk() {
    return uj("application_server_key").then(a => Pk().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Qk() {
    var a = Notification.permission;
    if (wk[a]) return wk[a]
}

function zk() {
    Z("RegistrationTimestamp", 0);
    Promise.all([Ok(), Rk(), Sk(), Pk()]).then(([a, b, c, d]) => {
        b = b ? pj(b) : null;
        c = c ? pj(c) : null;
        d = d ? Ua(new Uint8Array(d), 4) : null;
        Tk(a, b, c, d)
    }).catch(() => {
        Tk()
    })
}

function Tk(a = null, b = null, c = null, d = null) {
    tj().then(e => {
        e && (Z("Endpoint", a), Z("P256dhKey", b), Z("AuthKey", c), Z("application_server_key", d), Z("Permission", Notification.permission), Promise.all([uj("DeviceId"), uj("NotificationsDisabled")]).then(([f, g]) => {
            if (null != f) var h = f;
            else {
                f = [];
                var k;
                h = h || Ad.length;
                for (k = 0; 256 > k; k++) f[k] = Ad[0 | Math.random() * h];
                h = f.join("")
            }
            Uk(h, null != a ? a : void 0, null != b ? b : void 0, null != c ? c : void 0, null != d ? d : void 0, null != g ? g : void 0)
        }))
    })
}

function Uk(a, b, c, d, e, f) {
    r(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: Qk()
                    }
                }
            },
            h = yj(ze);
        return Ek().then(k => tk(k, g, h).then(() => {
            Z("DeviceId", a);
            Z("RegistrationTimestamp", Date.now());
            Z("TimestampLowerBound", Date.now())
        }, l => {
            Gj(l)
        }))
    })
}

function Ok() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Rk() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function Sk() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function Pk() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function Ek() {
    return r(function*() {
        try {
            return yield Dj(!0), vk()
        } catch (a) {
            return yield Gj(a), Promise.reject(a)
        }
    })
};
let Vk = self.location.origin + "/";

function Fj(a) {
    let b = "undefined" !== typeof ServiceWorkerGlobalScope && self instanceof ServiceWorkerGlobalScope ? Wc.registration.scope : Vk;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let Wk = void 0;

function Xk(a) {
    return r(function*() {
        Wk || (Wk = yield a.open("yt-appshell-assets"));
        return Wk
    })
}

function Yk(a, b) {
    return r(function*() {
        const c = yield Xk(a), d = b.map(e => Zk(c, e));
        return Promise.all(d)
    })
}

function $k(a, b) {
    return r(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function al(a, b) {
    return r(function*() {
        const c = yield Xk(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function bl(a, b, c) {
    return r(function*() {
        yield(yield Xk(a)).put(b, c)
    })
}

function cl(a, b) {
    r(function*() {
        yield(yield Xk(a)).delete(b)
    })
}

function Zk(a, b) {
    return r(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var dl;
dl = Kg("yt-serviceworker-metadata", {
    O: {
        auth: {
            S: 1
        },
        ["resource-manifest-assets"]: {
            S: 2
        }
    },
    ia: !0,
    upgrade(a, b) {
        b(1) && Rf(a, "resource-manifest-assets");
        b(2) && Rf(a, "auth")
    },
    version: 2
});
let el = null;

function fl(a) {
    return gg(dl(), a)
}

function gl() {
    const a = Date.now();
    return IDBKeyRange.bound(0, a)
}

function hl(a, b) {
    return r(function*() {
        yield Nf(yield fl(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return T(d.i.put(b, e)).then(() => {
                el = e;
                let f = !0;
                return Wf(d, {
                    query: gl(),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function il(a, b) {
    return r(function*() {
        let c = !1,
            d = 0;
        yield Nf(yield fl(a.token), ["resource-manifest-assets"], "readonly", e => Wf(e.objectStore("resource-manifest-assets"), {
            query: gl(),
            direction: "prev"
        }, f => {
            if (f.ca().includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function jl(a) {
    return r(function*() {
        el || (yield Nf(yield fl(a.token), ["resource-manifest-assets"], "readonly", b => Wf(b.objectStore("resource-manifest-assets"), {
            query: gl(),
            direction: "prev"
        }, c => {
            el = c.getKey()
        })));
        return el
    })
}
var kl = class {
    constructor(a) {
        this.token = a
    }
    static v() {
        return r(function*() {
            const a = yield pg();
            if (a) return kl.i || (kl.i = new kl(a)), kl.i
        })
    }
};

function ll(a, b) {
    return r(function*() {
        yield Tf(yield fl(a.token), "auth", b, "shell_identifier_key")
    })
}

function ml(a) {
    return r(function*() {
        return (yield(yield fl(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function nl(a) {
    return r(function*() {
        yield(yield fl(a.token)).clear("auth")
    })
}
var ol = class {
    constructor(a) {
        this.token = a
    }
    static v() {
        return r(function*() {
            const a = yield pg();
            if (a) return ol.i || (ol.i = new ol(a)), ol.i
        })
    }
};

function pl() {
    r(function*() {
        const a = yield ol.v();
        a && (yield nl(a))
    })
};
var ql = class extends F {
    constructor(a) {
        super(a)
    }
};

function rl(a) {
    a: {
        var b = sl;
        if (jc.length) {
            const e = jc.pop();
            var {
                T: c = !1
            } = {};
            e.T = c;
            e.i.init(a, void 0, void 0, void 0);
            a = e
        } else a = new ic(a);
        try {
            const e = pc(b);
            var d = qc(new e.ba, a, e);
            break a
        } finally {
            b = a, b.i.clear(), b.m = -1, b.j = -1, 100 > jc.length && jc.push(b)
        }
        d = void 0
    }
    return d
}
var tl = [1],
    sl = [class extends F {
        constructor(a) {
            super(a, -1, tl)
        }
    }, 1, Cc, [ql, 1, Bc]];

function ul(a) {
    return r(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(vl(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function vl(a) {
    return Mb(rl(decodeURIComponent(a)), ql, 1).reduce((b, c) => {
        (c = C(c, 1)) && b.push(c);
        return b
    }, [])
};
var wl = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.i = c => {
                    const d = c.getReader();
                    return d.read().then(function h({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                };
                a.j = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function xl(a) {
    return r(function*() {
        const b = yield Dj();
        if (b && null != C(b, 3)) {
            var c = yield ol.v();
            c && (c = yield ml(c), C(b, 3) !== c && (cl(a.caches, a.i), pl()))
        }
    })
}

function yl(a) {
    return r(function*() {
        let b, c;
        try {
            c = yield zl(a.j), b = yield ul(c), yield Yk(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield Al(), yield bl(a.caches, a.i, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield Bl(a, b, a.i)
        } catch (d) {}
        return Promise.resolve()
    })
}

function Cl(a) {
    return r(function*() {
        yield xl(a);
        return yl(a)
    })
}

function zl(a) {
    return r(function*() {
        try {
            return yield t.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function Al() {
    return r(function*() {
        var a = yield Dj();
        let b;
        a && null != C(a, 3) && (b = C(a, 3));
        return b ? (a = yield ol.v()) ? Promise.resolve(ll(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function Bl(a, b, c) {
    return r(function*() {
        const d = yield kl.v();
        if (d) try {
            yield hl(d, b)
        } catch (e) {
            yield Gj(e)
        }
        b.push(c);
        try {
            yield al(a.caches, b)
        } catch (e) {
            yield Gj(e)
        }
        return Promise.resolve()
    })
}

function Dl(a, b) {
    return r(function*() {
        return $k(a.caches, b)
    })
}

function El(a) {
    return r(function*() {
        return $k(a.caches, a.i)
    })
}
var Fl = class {
    constructor() {
        var a = self.caches;
        var b = Fj("/app_shell");
        O("service_worker_forward_exp_params") && (b += self.location.search);
        var c = Fj("/app_shell_home");
        this.caches = a;
        this.j = b;
        this.i = c
    }
};

function Gl(a, b) {
    return r(function*() {
        const c = b.request,
            d = yield Dl(a.i, c.url);
        if (d) return Jj({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: P()
        }), d;
        Hl(c);
        return Il(b)
    })
}

function Jl(a, b) {
    return r(function*() {
        const c = yield Kl(b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield El(a.i);
        if (d) return Ll(a), Ml(d, b);
        Nl(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function Ol(a, b) {
    b = new URL(b);
    if (!a.j.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    for (const c of a.m)
        if (a = b.searchParams.get(c.key), void 0 === c.value || a === c.value)
            if (b.searchParams.delete(c.key), !b.search) return !0;
    return !1
}

function Pl(a, b) {
    return r(function*() {
        const c = yield El(a.i);
        if (!c) return Nl(a), Il(b);
        Ll(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(P() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return Ml(c, b);
        d = yield Kl(b);
        return d.response && d.response.ok ? d.response : Ml(c, b)
    })
}

function Il(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !Ql(b) ? b : t.fetch(a.request))
}

function Hl(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    kl.v().then(c => {
        if (c) {
            var d = jl(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = il(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                Gj(e)
            }).finally(() => {
                Jj({
                    appShellAssetLoadReport: b,
                    timestamp: P()
                })
            })
        } else Jj({
            appShellAssetLoadReport: b,
            timestamp: P()
        })
    })
}

function Ll(a) {
    Jj({
        appShellAssetLoadReport: {
            assetPath: a.i.i,
            cacheHit: !0
        },
        timestamp: P()
    })
}

function Nl(a) {
    Jj({
        appShellAssetLoadReport: {
            assetPath: a.i.i,
            cacheHit: !1
        },
        timestamp: P()
    })
}

function Ml(a, b) {
    if (!O("sw_nav_preload_pbj")) return a;
    const c = new wl,
        d = c.i(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !Ql(e)) throw Error("no pbj preload response available");
        d.then(() => c.i(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.j();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function Kl(a) {
    return r(function*() {
        try {
            return {
                response: yield Il(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function Ql(a) {
    return "pbj" === a.headers.get("x-navigation-preload-response-type")
}
var Yl = class {
    constructor() {
        var a = Rl,
            b = Sl;
        var c = Tl([Ul, /\/signin/, /\/logout/]);
        c = new RegExp(`${Vl.source}(${c.source})`);
        const d = [];
        d.push({
            key: "feature",
            value: "ytca"
        });
        for (var e of Lc) d.push({
            key: e
        });
        e = Tl(O("kevlar_sw_app_wide_fallback") ? Wl : Xl);
        this.i = a;
        this.o = b;
        this.u = c;
        this.j = ["/", "/feed/downloads"];
        this.m = d;
        this.l = e
    }
};
const Xl = [/^\/$/, /^\/feed\/downloads$/],
    Wl = [/^\/$/, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function Tl(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const Vl = /^https:\/\/([\w-]*\.)*youtube\.com.*/,
    Zl = Tl([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]);
var Sl = new RegExp(`${Vl.source}(${Zl.source})`);
const Ul = /purge_shell=1/;
var am = class {
    constructor() {
        var a = Rl,
            b = $l;
        this.i = self;
        this.j = a;
        this.o = b;
        this.D = qj
    }
    init() {
        this.i.oninstall = this.u.bind(this);
        this.i.onactivate = this.l.bind(this);
        this.i.onfetch = this.m.bind(this);
        this.i.onmessage = this.B.bind(this)
    }
    u(a) {
        this.i.skipWaiting();
        const b = Cl(this.j).catch(c => {
            Gj(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    l(a) {
        const b = [this.i.clients.claim()],
            c = this.i.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), O("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    m(a) {
        const b = this;
        return r(function*() {
            var c = b.o,
                d = !!b.i.registration.navigationPreload;
            const e = a.request;
            if (c.u.test(e.url)) Ej.i && (delete Ej.i.i, t.__SAPISID = void 0, M("VISITOR_DATA", void 0), M("SESSION_INDEX", void 0), M("DELEGATED_SESSION_ID", void 0)), d = a.respondWith,
                c = c.i, cl(c.caches, c.i), pl(), c = Il(a), d.call(a, c);
            else if (c.o.test(e.url)) a.respondWith(Gl(c, a));
            else if ("navigate" === e.mode) {
                const f = new URL(e.url),
                    g = c.j;
                (!O("sw_nav_request_network_first") && g.includes(f.pathname) ? 0 : c.l.test(f.pathname)) ? a.respondWith(Jl(c, a)): Ol(c, e.url) ? a.respondWith(Pl(c, a)) : d && a.respondWith(Il(a))
            }
        })
    }
    B(a) {
        const b = a.data;
        this.D.includes(b.type) ? yk(a) : "refresh_shell" === b.type && yl(this.j).catch(c => {
            Gj(c)
        })
    }
};
var bm = class {
    static v() {
        let a = w("ytglobal.storage_");
        a || (a = new bm, v("ytglobal.storage_", a));
        return a
    }
    estimate() {
        return r(function*() {
            const a = navigator;
            let b;
            if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) return cm()
        })
    }
};

function cm() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
v("ytglobal.storageClass_", bm);

function dm(a, b) {
    bm.v().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: em(null == c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: em(null == c ? void 0 : c.quota)
        });
        a.i("idbQuotaExceeded", c)
    })
}
class fm {
    constructor() {
        var a = gm;
        this.handleError = hm;
        this.i = a;
        this.j = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.j = !0
        });
        this.l = Math.random() <= Me("ytidb_transaction_ended_event_rate_limit", .02)
    }
    V(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                O("idb_data_corrupted_killswitch") || this.i("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.i("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                O("idb_is_supported_completed_killswitch") || this.i("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                dm(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.l && this.i("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a =
                    Object.assign({}, b, {
                        hasWindowUnloaded: this.j
                    }), this.i("idbTransactionAborted", a)
        }
    }
}

function em(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
si(pi(), {
    H: [{
        Ka: /Failed to fetch/,
        weight: 500
    }],
    G: []
});
var {
    handleError: hm = Fi,
    V: gm = W
} = {
    handleError: Ij,
    V: function(a, b) {
        return r(function*() {
            yield Hj();
            W(a, b)
        })
    }
};
for (pf = new fm; 0 < of .length;) {
    const a = of .shift();
    switch (a.type) {
        case "ERROR":
            pf.handleError(a.payload);
            break;
        case "EVENT":
            pf.V(a.eventType, a.payload)
    }
}
Ej.i = new Ej;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(Hk(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (null == b ? 0 : b.clickTrackingParams) {
        var c = Li(b.clickTrackingParams);
        a = {
            Y: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = Ni(74726);
            b = Nj();
            Rj(b, d, c, 8);
            c = {
                Y: 8,
                visualElement: d
            };
            mj(oj.v(), c);
            Wj(b, c)
        }
        nj(oj.v(), a)
    }
};
self.onpush = function(a) {
    a.waitUntil(uj("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return Dk(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(Bk())
};
self.onpushsubscriptionchange = function() {
    zk()
};
const Rl = new Fl,
    $l = new Yl;
(new am).init();