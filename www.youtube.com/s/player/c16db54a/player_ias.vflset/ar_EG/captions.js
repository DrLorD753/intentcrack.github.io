(function(g) {
    var window = this;
    'use strict';
    var h3a = function(a, b) {
            return b ? a.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN"
        },
        i3a = function(a) {
            return g.kG(a) && !a.K("web_player_i_see_captions_3_killswitch")
        },
        j3a = function(a, b) {
            var c = new g.HG;
            c.languageCode = a.languageCode;
            c.languageName = a.languageName;
            c.name = a.name;
            c.kind = a.kind;
            c.isDefault = !1;
            c.j = a.j;
            c.isTranslateable = a.isTranslateable;
            c.vssId = a.vssId;
            c.url = a.url;
            c.translationLanguage = b;
            return c
        },
        k3a = function(a, b) {
            var c, d, e;
            return g.A(function(f) {
                if (1 == f.j) return c = a + "|" + b, g.x(f, g.Bw(), 2);
                if (3 != f.j) {
                    d = f.u;
                    if (!d) throw g.$v("gct");
                    return g.x(f, g.tH(d), 3)
                }
                e = f.u;
                return f.return(e.get("captions", c))
            })
        },
        l3a = function(a, b, c) {
            k3a(a, b).then(function(d) {
                d && c(d.trackData, new g.HG(d.metadata))
            })
        },
        o3a = function(a) {
            if (!m3a.test(a)) throw Error("'" + a + "' is not a valid hex color");
            4 == a.length && (a = a.replace(n3a, "#$1$1$2$2$3$3"));
            a = a.toLowerCase();
            a = parseInt(a.slice(1), 16);
            return [a >> 16, a >> 8 & 255, a & 255]
        },
        r5 = function() {
            this.segments = []
        },
        p3a = function(a, b) {
            var c = g.kc(a.segments, b);
            0 <= c || 0 > c && 1 === (-c - 1) % 2 || (c = -c - 1, 0 < c && 1 === b - a.segments[c - 1] && c < a.segments.length && 1 === a.segments[c] - b ? (g.Xb(a.segments, c), g.Xb(a.segments, c - 1)) : 0 < c && 1 === b - a.segments[c - 1] ? a.segments[c - 1] = b : c < a.segments.length && 1 === a.segments[c] - b ? a.segments[c] = b : (g.hc(a.segments, c, 0, b), g.hc(a.segments, c + 1, 0, b)))
        },
        q3a = function(a, b, c, d, e, f) {
            g.K.call(this);
            this.policy = a;
            this.player = b;
            this.ea = c;
            this.S = d;
            this.D = e;
            this.Z = f;
            this.Y = this.player.V();
            this.C = new r5;
            this.I = -1;
            this.B = this.u = this.j = null;
            this.J = new g.Yn(this.mQ, 1E3, this);
            this.events = new g.YD(this);
            g.N(this, this.J);
            g.N(this, this.events);
            this.events.T(b, "SEEK_COMPLETE", this.Cw);
            this.Cw();
            this.mQ()
        },
        r3a = function(a) {
            return a.j && a.j.B ? a.j.B + a.player.Ad() < a.player.getCurrentTime() : !1
        },
        s3a = function(a, b) {
            var c = g.tD(b, a.policy, {}).ue(),
                d = {
                    format: "RAW",
                    withCredentials: !0
                };
            a.policy.Qa && (d.method = "POST", d.postBody = b.Es() || (0, g.aV)([120, 0]));
            a.D && (d.responseType = "arraybuffer");
            a.B = g.Eu(c, d, 3, 100).then(function(e) {
                a: {
                    e = e.xhr;a.isDisposed();
                    if (a.u) {
                        var f = !(a.D ? e.response : e.responseText) || 400 <= e.status,
                            h = g.Ixa(e);
                        if (h) {
                            e = g.tD(a.u, a.policy, {});
                            a.u.jk(e, h);
                            s3a(a, a.u);
                            break a
                        }
                        f ? a.player.va("capfail", {
                            status: e.status
                        }) : (a.player.Hi().kh("fcb_r"), h = a.u.j[0].Na, null != a.S && a.I !== h && (f = a.u.j[0], a.D ? a.S(e.response, 1E3 * (f.startTime + a.player.Ad())) : a.S(e.responseText,
                            1E3 * (f.startTime + a.player.Ad())), a.I = h))
                    }
                    a.u = null;a.B = null
                }
            }).aj(function(e) {
                a.u = null;
                a.B = null;
                var f;
                a.player.va("capfail", {
                    status: null == (f = e.xhr) ? void 0 : f.status
                })
            });
            a.u = b;
            p3a(a.C, a.u.j[0].Na)
        },
        s5 = function(a, b) {
            g.gO.call(this, b.V());
            this.u = a;
            this.G = b;
            this.B = null;
            this.D = !1;
            this.I = g.mG(this.G.V()) && !this.u.isManifestless
        },
        u3a = function(a, b) {
            var c = [],
                d;
            for (d in a.u.j)
                if (a.u.j.hasOwnProperty(d)) {
                    var e = a.u.j[d];
                    if (g.jO(e, b || null)) {
                        var f = e.info.id,
                            h = f,
                            l = "." + f,
                            m = "";
                        if (e = e.info.captionTrack) f = e.languageCode, h = e.displayName, l = e.vssId, m = e.kind;
                        else {
                            e = f;
                            var n = g.i1a.get(e);
                            null == n && (n = t3a[e] || t3a[e.replace(/-/g, "_")], g.i1a.set(e, n));
                            h = n || h
                        }
                        c.push(new g.HG({
                            id: d,
                            languageCode: f,
                            languageName: h,
                            is_servable: !0,
                            is_default: !0,
                            is_translateable: !1,
                            vss_id: l,
                            kind: m
                        }))
                    }
                }
            return c
        },
        v3a = function(a, b) {
            return null != b && b in a.u.j ? a.u.j[b] : null
        },
        w3a = function(a, b, c) {
            var d = [],
                e;
            for (e in a.u.j)
                if (a.u.j.hasOwnProperty(e)) {
                    var f = a.u.j[e];
                    if (g.jO(f, c || null)) {
                        var h = f.info.captionTrack;
                        h && h.languageCode === b && d.push(f)
                    }
                }
            return d.length ? d[0] : null
        },
        t5 = function(a, b, c, d, e, f, h, l) {
            var m = {};
            Object.assign(m, b);
            Object.assign(m, a.params);
            Object.assign(m, c);
            var n = {};
            Object.assign(n, b.Ud);
            a.params.Ud && Object.assign(n, a.params.Ud);
            Object.assign(n, c.Ud);
            m.Ud = n;
            g.W.call(this, {
                F: "div",
                N: "caption-window",
                X: {
                    id: "caption-window-" + a.id,
                    dir: 1 === m.jh ? "rtl" : "ltr",
                    tabindex: "0",
                    lang: m.lang
                },
                W: [{
                    F: "span",
                    N: "captions-text",
                    X: {
                        style: "word-wrap: normal; display: block;"
                    }
                }]
            });
            this.D = [];
            this.Ba = !1;
            this.u = a;
            this.La = this.Ia = null;
            this.playerWidth = f;
            this.playerHeight = h;
            this.I = null;
            this.maxWidth = .96 * f;
            this.Xa = .96 *
                h;
            this.j = m;
            this.Ub = c;
            this.ea = b;
            this.C = this.Ca("captions-text");
            this.zb = "" !== this.C.style.getPropertyValue("box-decoration-break") || "" !== this.C.style.getPropertyValue("-webkit-box-decoration-break");
            this.oa = e / 360 * 16;
            !l.ib("web_player_scale_font_size_for_shorts_killswitch") && e >= d && (this.oa = f / 640 * 16);
            this.type = 0;
            this.bb = this.oa * x3a(n);
            a = new g.gz(this.element, !0);
            g.N(this, a);
            a.subscribe("dragstart", this.BU, this);
            a.subscribe("dragmove", this.AU, this);
            a.subscribe("dragend", this.zU, this);
            this.kb = this.jb =
                0;
            b = "";
            this.j.windowOpacity && (a = o3a(this.j.windowColor), b = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + this.j.windowOpacity + ")");
            a = {
                "background-color": b,
                display: !1 === this.j.isVisible ? "none" : "",
                "text-align": y3a[this.j.textAlign]
            };
            this.zb && (a["border-radius"] = b ? this.bb / 8 + "px" : "");
            if (this.B = 2 === this.u.params.jh || 3 === this.u.params.jh) b = this.element, c = "vertical-rl", 1 === this.j.gL && (c = "vertical-lr"), g.Bc && (c = "vertical-lr" === c ? "tb-lr" : "tb-rl"), g.Bl(b, "-o-writing-mode", c), g.Bl(b, "-webkit-writing-mode", c), g.Bl(b, "writing-mode",
                c), g.Bl(b, "text-orientation", "upright"), g.go(b, "ytp-vertical-caption"), 3 === this.u.params.jh && (g.Bl(b, "text-orientation", ""), g.Bl(b, "transform", "rotate(180deg)"));
            g.Bl(this.element, a);
            switch (this.j.Zj) {
                case 0:
                case 1:
                case 2:
                    g.go(this.element, "ytp-caption-window-top");
                    break;
                case 6:
                case 7:
                case 8:
                    g.go(this.element, "ytp-caption-window-bottom")
            }
        },
        x3a = function(a) {
            var b = 1 + .25 * (a.fontSizeIncrement || 0);
            if (0 === a.offset || 2 === a.offset) b *= .8;
            return b
        },
        z3a = function(a, b) {
            var c = {},
                d = b.background ? b.background : a.j.Ud.background;
            if (null != b.backgroundOpacity || b.background) {
                var e = null != b.backgroundOpacity ? b.backgroundOpacity : a.j.Ud.backgroundOpacity;
                d = o3a(d);
                c.background = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + e + ")";
                a.zb && (c["box-decoration-break"] = "clone", c["border-radius"] = a.bb / 8 + "px")
            }
            if (null != b.fontSizeIncrement || null != b.offset) c["font-size"] = a.oa * x3a(b) + "px";
            d = 1;
            e = b.color || a.j.Ud.color;
            if (b.color || null != b.textOpacity) e = o3a(e), d = null == b.textOpacity ? a.j.Ud.textOpacity : b.textOpacity, e = "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + d + ")",
                c.color = e, c.fill = e;
            var f = b.charEdgeStyle;
            0 === f && (f = void 0);
            if (f) {
                e = "rgba(34, 34, 34, " + d + ")";
                var h = "rgba(204, 204, 204, " + d + ")";
                b.QG && (h = e = b.QG);
                var l = a.oa / 16 / 2,
                    m = Math.max(l, 1),
                    n = Math.max(2 * l, 1),
                    p = Math.max(3 * l, 1),
                    q = Math.max(5 * l, 1);
                d = [];
                switch (f) {
                    case 4:
                        for (; p <= q; p += l) d.push(n + "px " + n + "px " + p + "px " + e);
                        break;
                    case 1:
                        n = 2 <= window.devicePixelRatio ? .5 : 1;
                        for (f = m; f <= p; f += n) d.push(f + "px " + f + "px " + e);
                        break;
                    case 2:
                        d.push(m + "px " + m + "px " + h);
                        d.push("-" + m + "px -" + m + "px " + e);
                        break;
                    case 3:
                        for (p = 0; 5 > p; p++) d.push("0 0 " +
                            n + "px " + e)
                }
                c["text-shadow"] = d.join(", ")
            }
            e = "";
            switch (b.fontFamily) {
                case 1:
                    e = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
                    break;
                case 2:
                    e = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
                    break;
                case 3:
                    e = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
                    break;
                case 5:
                    e = '"Comic Sans MS", Impact, Handlee, fantasy';
                    break;
                case 6:
                    e = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
                    break;
                case 7:
                    e = g.Pu() ?
                        '"Carrois Gothic SC", sans-serif-smallcaps' : '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
                    break;
                case 0:
                case 4:
                    e = '"YouTube Noto", Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif'
            }
            e && (c["font-family"] = e);
            e = b.offset;
            null == e && (e = a.j.Ud.offset);
            switch (e) {
                case 0:
                    c["vertical-align"] = "sub";
                    break;
                case 2:
                    c["vertical-align"] = "super"
            }
            7 === b.fontFamily && (c["font-variant"] = "small-caps");
            b.bold && (c["font-weight"] = "bold");
            b.italic && (c["font-style"] =
                "italic");
            b.underline && (c["text-decoration"] = "underline");
            b.ZZ && (c.visibility = "hidden");
            1 === b.JP && a.B && (c["text-combine-upright"] = "all", c["text-orientation"] = "mixed", e = g.qG || g.Yv, 3 === a.u.params.jh ? c.transform = e ? "rotate(90deg)" : "rotate(180deg)" : e && (c.transform = "rotate(-90deg)"));
            if (1 === b.Gl || 2 === b.Gl || 3 === b.Gl || 4 === b.Gl || 5 === b.Gl)
                if (g.qG) c["font-weight"] = "bold";
                else switch (c["text-emphasis-style"] = "filled circle", c["text-emphasis-color"] = "currentcolor", c["webkit-text-emphasis"] = "filled circle", b.Gl) {
                    case 4:
                    case 3:
                        c["text-emphasis-position"] =
                            "under left";
                        c["webkit-text-emphasis-position"] = "under left";
                        break;
                    case 5:
                    case 2:
                        c["text-emphasis-position"] = "over right", c["webkit-text-emphasis-position"] = "over right"
                }
            return c
        },
        A3a = function(a) {
            a.I = g.ih("SPAN");
            g.Bl(a.I, {
                display: "block"
            });
            g.go(a.I, "caption-visual-line");
            a.C.appendChild(a.I)
        },
        B3a = function(a, b) {
            var c = g.ih("SPAN");
            g.Bl(c, {
                display: "inline-block",
                "white-space": "pre-wrap"
            });
            g.Bl(c, z3a(a, b));
            c.classList.add("ytp-caption-segment");
            a.I.appendChild(c);
            c.previousElementSibling && (g.Bl(c.previousElementSibling, {
                "border-top-right-radius": "0",
                "border-bottom-right-radius": "0"
            }), g.Bl(c, {
                "border-top-left-radius": "0",
                "border-bottom-left-radius": "0"
            }));
            return c
        },
        C3a = function(a, b, c) {
            a.Ba = a.Ba || !!c;
            var d = {};
            Object.assign(d, a.j.Ud);
            Object.assign(d, c || b.j);
            Object.assign(d, a.Ub.Ud);
            (c = !a.I) && A3a(a);
            for (var e = a.Ia && a.La && g.Gf(d, a.La) ? a.Ia : B3a(a, d), f = "string" === typeof b.text, h = f ? b.text.split("\n") : [b.text], l = 0; l < h.length; l++) {
                var m = 0 < l || !b.append,
                    n = h[l];
                m && !c ? (A3a(a), e = B3a(a, d)) : m && c && (c = !1);
                n && (e.appendChild(f ? g.jh(n) : n), f || "RUBY" !== n.tagName || 4 !== n.childElementCount || g.qG || !g.Dl(n.children[2], "text-emphasis") || (m = a.B ? "padding-right" : "padding-top", g.Dl(n.children[2], "text-emphasis-position") && (m =
                    a.B ? "padding-left" : "padding-bottom"), g.hf ? g.Bl(e, m, "1em") : g.Bl(e, m, "0.5em")))
            }
            a.La = d;
            a.Ia = e;
            a.D.push(b)
        },
        u5 = function(a, b, c, d) {
            g.gO.call(this, a);
            this.videoData = b;
            this.audioTrack = c;
            this.Va = d;
            this.C = b.OG
        },
        v5 = function(a, b, c, d, e, f, h, l) {
            t5.call(this, a, b, c, d, e, f, h, l);
            this.type = 1
        },
        w5 = function(a, b, c, d, e, f, h, l) {
            t5.call(this, a, b, c, d, e, f, h, l);
            this.type = 2;
            this.J = [];
            this.Z = this.S = this.Qa = 0;
            this.Aa = NaN;
            this.rb = 0;
            this.Lb = null;
            this.Ta = new g.Yn(this.O2, 433, this);
            g.go(this.element, "ytp-caption-window-rollup");
            g.N(this, this.Ta);
            g.Bl(this.element, "overflow", "hidden")
        },
        D3a = function(a, b) {
            if (!b) return "";
            a.B && 1 !== a.u.params.gL && (b *= -1);
            return "translate" + (a.B ? "X" : "Y") + "(" + b + "px)"
        },
        E3a = function(a) {
            a.J = Array.from(document.getElementsByClassName("caption-visual-line"));
            for (var b = a.u.params.Qo, c = 0, d = 0, e = a.J.length - 1; c < b && -1 < e;) {
                var f = a.J[e];
                d += a.B ? f.offsetWidth : f.offsetHeight;
                c++;
                e--
            }
            a.J.length < b && (d *= b / a.J.length);
            a.S = d;
            b = Math;
            c = b.max;
            isNaN(a.Aa) && ((d = a.j.zp) ? (e = g.ih("SPAN"), g.sh(e, "\u2013".repeat(d)), g.Bl(e, z3a(a, a.j.Ud)), a.C.appendChild(e), a.Aa = e.offsetWidth, a.C.removeChild(e)) : a.Aa = 0);
            d = a.C;
            a.Z = c.call(b, a.Aa, a.rb, (a.B ? d.offsetHeight : d.offsetWidth) + 1)
        },
        F3a = function(a, b) {
            E3a(a);
            var c = a.J.reduce(function(e, f) {
                return (a.B ? f.offsetWidth : f.offsetHeight) + e
            }, 0);
            c = a.S - c;
            if (c !== a.Qa) {
                var d = 0 < c && 0 === a.Qa;
                b || isNaN(c) || d || (g.go(a.element, "ytp-rollup-mode"), g.Zn(a.Ta));
                g.Bl(a.C, "transform", D3a(a, c));
                a.Qa = c
            }
            E3a(a)
        },
        x5 = function(a, b, c, d, e, f, h) {
            f = void 0 === f ? !1 : f;
            h = void 0 === h ? null : h;
            g.sA.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.windowId = d;
            this.text = e;
            this.append = f;
            this.j = h
        },
        y5 = function(a, b, c, d, e) {
            g.sA.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.id = d;
            this.params = e;
            this.j = []
        },
        G3a = function(a) {
            var b = "_" + z5++;
            return new y5(0, 0x8000000000000, 0, b, a)
        },
        I3a = function(a, b, c, d, e, f, h) {
            var l = f[0],
                m = h[l.getAttribute("p")];
            if (1 === m.gf) {
                var n = f[1],
                    p = f[2];
                f = f[3];
                l.getAttribute("t");
                n.getAttribute("t");
                p.getAttribute("t");
                f.getAttribute("t");
                l.getAttribute("p");
                n.getAttribute("p");
                f.getAttribute("p");
                h = h[p.getAttribute("p")];
                l = H3a(l.textContent, n.textContent, p.textContent, f.textContent, h);
                return new x5(a, b, e, c, l, d, m)
            }
            switch (m.gf) {
                case 9:
                case 10:
                    m.Gl = 1;
                    break;
                case 11:
                    m.Gl = 2;
                    break;
                case 12:
                    m.Gl = 3;
                    break;
                case 13:
                    m.Gl = 4;
                    break;
                case 14:
                    m.Gl = 5
            }
            return new x5(a, b, e, c, l.textContent || "", d, m)
        },
        H3a = function(a, b, c, d, e) {
            var f = g.Pu(),
                h =
                f ? g.ih("DIV") : g.ih("RUBY"),
                l = g.ih("SPAN");
            l.textContent = a;
            h.appendChild(l);
            a = f ? g.ih("DIV") : g.ih("RP");
            a.textContent = b;
            h.appendChild(a);
            b = f ? g.ih("DIV") : g.ih("RT");
            b.textContent = c;
            h.appendChild(b);
            c = e.gf;
            if (10 === c || 11 === c || 12 === c || 13 === c || 14 === c)
                if (g.Bl(b, "text-emphasis-style", "filled circle"), g.Bl(b, "text-emphasis-color", "currentcolor"), g.Bl(b, "webkit-text-emphasis", "filled circle"), 11 === e.gf || 13 === e.gf) g.Bl(b, "webkit-text-emphasis-position", "under left"), g.Bl(b, "text-emphasis-position", "under left");
            c = !0;
            if (4 === e.gf || 7 === e.gf || 12 === e.gf ||
                14 === e.gf) g.Bl(h, "ruby-position", "over"), g.Bl(h, "-webkit-ruby-position", "before");
            else if (5 === e.gf || 6 === e.gf || 11 === e.gf || 13 === e.gf) g.Bl(h, "ruby-position", "under"), g.Bl(h, "-webkit-ruby-position", "after"), c = !1;
            e = f ? g.ih("DIV") : g.ih("RP");
            e.textContent = d;
            h.appendChild(e);
            f && (d = c, g.Bl(h, {
                display: "inline-block",
                position: "relative"
            }), f = h.firstElementChild.nextElementSibling, g.Bl(f, "display", "none"), f = f.nextElementSibling, g.Bl(f, {
                "font-size": "0.5em",
                "line-height": "1.2em",
                "text-align": "center",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "400%"
            }), g.Bl(h.lastElementChild, "display", "none"), d ? (g.Bl(h, "padding-top", "0.6em"), g.Bl(f, "top", "0")) : (g.Bl(h, "padding-bottom", "0.6em"), g.Bl(f, "bottom", "0")));
            return h
        },
        A5 = function() {
            g.K.apply(this, arguments)
        },
        B5 = function(a) {
            A5.call(this);
            this.C = a;
            this.pens = {};
            this.S = {};
            this.Z = {};
            this.D = "_" + z5++;
            this.J = {};
            this.B = this.j = null;
            this.I = !0
        },
        C5 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return Number(a)
        },
        D5 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return "1" === a
        },
        E5 = function(a, b) {
            a = C5(a, b);
            return void 0 !== a ? a : null
        },
        G5 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return F5.test(a), a
        },
        J3a = function(a, b) {
            var c = {},
                d = b.getAttribute("ws");
            Object.assign(c, d ? a.Z[d] : a.C);
            a = E5(b, "mh");
            null != a && (c.zw = a);
            a = E5(b, "ju");
            null != a && (c.textAlign = a);
            a = E5(b, "pd");
            null != a && (c.jh = a);
            a = E5(b, "sd");
            null != a && (c.gL = a);
            a = G5(b, "wfc");
            null != a && (c.windowColor = a);
            b = C5(b, "wfo");
            void 0 !== b && (c.windowOpacity = b / 255);
            return c
        },
        K3a = function(a, b) {
            var c = {},
                d = b.getAttribute("wp");
            d && Object.assign(c, a.S[d]);
            a = E5(b, "ap");
            null != a && (c.Zj = a);
            a = C5(b, "cc");
            null != a && (c.zp = a);
            a = C5(b, "ah");
            null != a && (c.Oi = a);
            a = C5(b, "rc");
            null != a && (c.Qo = a);
            b = C5(b, "av");
            null != b && (c.Hl = b);
            return c
        },
        L3a = function(a, b, c, d) {
            var e = {};
            Object.assign(e, K3a(a, b));
            Object.assign(e, J3a(a, b));
            d ? g.Gf(e, a.C) ? (d = a.D, e = a.C) : d = "_" + z5++ : d = b.getAttribute("id") || "_" + z5++;
            a = C5(b, "t") + c;
            b = C5(b, "d") || 0x8000000000000;
            if (2 === e.jh || 3 === e.jh) c = e.Qo, e.Qo = e.zp, e.zp = c;
            return new y5(a, b, 0, d, e)
        },
        H5 = function(a) {
            A5.call(this);
            this.I = a;
            this.j = new Map;
            this.C = new Map;
            this.D = new Map;
            this.B = new Map
        },
        I5 = function(a) {
            a = g.Fg(Math.round(a), 0, 16777215).toString(16).toUpperCase();
            return "#000000".substr(0, 7 - a.length) + a
        },
        M3a = function(a, b, c, d, e) {
            0 === d && (d = 0x8000000000000);
            var f = {};
            b.wpWinPosId && Object.assign(f, a.C.get(b.wpWinPosId));
            b.wsWinStyleId && Object.assign(f, a.D.get(b.wsWinStyleId));
            a = b.rcRowCount;
            void 0 !== a && (f.Qo = a);
            b = b.ccColCount;
            void 0 !== b && (f.zp = b);
            if (2 === f.jh || 3 === f.jh) b = f.Qo, f.Qo = f.zp, f.zp = b;
            return new y5(c, d, 0, e, f)
        },
        O3a = function() {
            this.B = this.time = this.mode = this.u = 0;
            this.C = new N3a(this);
            this.D = new N3a(this);
            this.j = [];
            this.clear()
        },
        Q3a = function(a, b, c) {
            if (255 === a && 255 === b || !a && !b) return {
                Mr: a,
                wp: b,
                result: 0
            };
            a = P3a[a];
            b = P3a[b];
            if (a & 128) {
                var d;
                if (d = !(b & 128)) d = b, d = c.isValid() && c.wp === d;
                if (d) return {
                    Mr: a,
                    wp: b,
                    result: 1
                }
            } else if (b & 128 && 1 <= a && 31 >= a) return {
                Mr: a,
                wp: b,
                result: 2
            };
            return {
                Mr: a,
                wp: b,
                result: 3
            }
        },
        S3a = function(a, b, c, d) {
            255 === b && 255 === c || !b && !c ? (45 === ++a.B && a.reset(), a.C.u.clear(), a.D.u.clear()) : (a.B = 0, R3a(a.C, b, c, d))
        },
        T3a = function(a, b) {
            a.j.sort(function(e, f) {
                var h = e.time - f.time;
                return 0 === h ? e.order - f.order : h
            });
            for (var c = g.t(a.j), d = c.next(); !d.done; d = c.next()) d = d.value, a.time = d.time, 0 === d.type ? S3a(a, d.iO, d.jO, b) : 1 === d.type && a.u & 496 && R3a(a.D, d.iO, d.jO, b);
            a.j.length = 0
        },
        J5 = function() {
            this.type = 0
        },
        K5 = function() {
            this.state = this.wp = this.Mr = 0
        },
        U3a = function() {
            this.timestamp = this.j = 0
        },
        L5 = function(a) {
            this.D = a;
            this.B = [];
            this.j = this.u = this.row = 0;
            this.style = new J5;
            for (a = this.C = 0; 15 >= a; a++) {
                this.B[a] = [];
                for (var b = 0; 32 >= b; b++) this.B[a][b] = new U3a
            }
        },
        M5 = function(a, b) {
            if (3 === a.style.type) {
                for (var c = 0, d = 0, e = a.D.time + 0, f = "", h = "", l = e, m = 1; 15 >= m; ++m) {
                    for (var n = !1, p = d ? d : 1; 32 >= p; ++p) {
                        var q = a.B[m][p];
                        if (0 !== q.j) {
                            0 === c && (c = m, d = p);
                            n = String.fromCharCode(q.j);
                            var r = q.timestamp;
                            r < e && (e = r);
                            q.timestamp = l;
                            h && (f += h, h = "");
                            f += n;
                            n = !0
                        }
                        if ((0 === q.j || 32 === p) && n) {
                            h = "\n";
                            break
                        } else if (d && !n) break
                    }
                    if (c && !n) break
                }
                f && b.C(c, d, e, l, f)
            } else
                for (d = c = 0, f = e = a.D.time + 0, h = 1; 15 >= h; ++h)
                    for (l = "", m = 1; 32 >= m; ++m)
                        if (p = a.B[h][m], q = p.j, 0 !== q && (0 === c && (c = h, d = m), n = String.fromCharCode(q), r = p.timestamp, r <= e && (e = r), l += n, p.reset()), 32 === m || 0 === q) l && b.C(c, d, e, f, l), e = f, l = "", d = c = 0
        },
        Z3a = function(a, b) {
            switch (a) {
                case 0:
                    return V3a[(b & 127) - 32];
                case 1:
                    return W3a[b & 15];
                case 2:
                    return X3a[b & 31];
                case 3:
                    return Y3a[b & 31]
            }
            return 0
        },
        N5 = function(a) {
            return a.B[a.row][a.u]
        },
        O5 = function(a, b, c) {
            2 <= b && 1 < a.u && (--a.u, N5(a).j = 0);
            var d = N5(a);
            d.timestamp = a.D.time + 0;
            d.j = Z3a(b, c);
            32 > a.u && a.u++
        },
        $3a = function(a, b, c, d) {
            for (var e = 0; e < d; e++)
                for (var f = 0; 32 >= f; f++) {
                    var h = a.B[b + e][f],
                        l = a.B[c + e][f];
                    h.j = l.j;
                    h.timestamp = l.timestamp
                }
        },
        P5 = function(a, b, c) {
            for (var d = 0; d < c; d++)
                for (var e = 0; 32 >= e; e++) a.B[b + d][e].reset()
        },
        a4a = function(a) {
            a.row = 0 < a.j ? a.j : 1;
            a.u = 1;
            P5(a, 0, 15)
        },
        b4a = function(a) {
            this.B = a;
            this.D = 0;
            this.style = new J5;
            this.I = new L5(this.B);
            this.J = new L5(this.B);
            this.text = new L5(this.B);
            this.u = this.I;
            this.C = this.J;
            this.j = this.u
        },
        c4a = function(a, b, c) {
            var d = a.u,
                e = !1;
            switch (a.style.get()) {
                case 4:
                case 1:
                case 2:
                    4 === a.style.get() && 0 < d.j || (M5(d, c), a4a(a.u), a4a(a.C), d.row = 15, d.j = b, e = !0)
            }
            a.style.set(3);
            a.j = d;
            a.j.style = a.style;
            a.B.mode = 1 << d.C;
            e ? d.u = 1 : d.j !== b && (d.j > b ? (M5(d, c), P5(d, d.row - d.j, b)) : d.row < b && (b = d.j), d.j = b)
        },
        d4a = function(a) {
            a.style.set(1);
            a.j = a.C;
            a.j.j = 0;
            a.j.style = a.style;
            a.B.mode = 1 << a.j.C
        },
        e4a = function(a) {
            a.style.set(4);
            a.j = a.text;
            a.j.style = a.style;
            a.B.mode = 1 << a.j.C
        },
        N3a = function(a) {
            this.j = a;
            this.D = 0;
            this.B = new b4a(this.j);
            this.I = new b4a(this.j);
            this.u = new K5;
            this.C = this.B
        },
        R3a = function(a, b, c, d) {
            a.u.update();
            b = Q3a(b, c, a.u);
            switch (b.result) {
                case 0:
                    return;
                case 1:
                case 2:
                    return
            }
            var e = b.Mr;
            c = b.wp;
            if (32 <= e || !e) a.j.mode & a.j.u && (b = e, b & 128 && (b = 127), c & 128 && (c = 127), a = a.C.j, b & 96 && O5(a, 0, b), c & 96 && O5(a, 0, c), 0 !== b && 0 !== c && 3 === a.style.type && M5(a, d));
            else if (e & 16) a: if (!a.u.matches(e, c) && (b = a.u, b.Mr = e, b.wp = c, b.state = 2, b = e & 8 ? a.I : a.B, a.C = b, a.j.mode = 1 << (a.D << 2) + (b.D << 1) + (4 === b.style.type ? 1 : 0), (a.j.mode | 1 << (a.D << 2) + (b.D << 1) + (4 !== b.style.type ? 1 : 0)) & a.j.u))
                if (c & 64) {
                    d = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(e & 7) << 1 | c >> 5 & 1];
                    a = c & 16 ? 4 * ((c & 14) >> 1) : 0;
                    c = b.j;
                    switch (b.style.get()) {
                        case 4:
                            d = c.row;
                            break;
                        case 3:
                            if (d !== c.row) {
                                if (d < c.j && (d = c.j, d === c.row)) break;
                                var f = 1 + c.row - c.j,
                                    h = 1 + d - c.j;
                                $3a(c, h, f, c.j);
                                b = f;
                                e = c.j;
                                h < f ? (f = h + e - f, 0 < f && (b += f, e -= f)) : (f = f + e - h, 0 < f && (e -= f));
                                P5(c, b, e)
                            }
                    }
                    c.row = d;
                    c.u = a + 1
                } else switch (e & 7) {
                    case 1:
                        switch (c & 112) {
                            case 32:
                                O5(b.j, 0, 32);
                                break a;
                            case 48:
                                57 === c ? (d = b.j, N5(d).j = 0, 32 > d.u && d.u++) : O5(b.j, 1, c & 15)
                        }
                        break;
                    case 2:
                        c & 32 && O5(b.j, 2, c & 31);
                        break;
                    case 3:
                        c & 32 && O5(b.j, 3, c & 31);
                        break;
                    case 4:
                    case 5:
                        if (32 <= c && 47 >= c) switch (c) {
                            case 32:
                                d4a(b);
                                break;
                            case 33:
                                d = b.j;
                                1 < d.u && (--d.u, N5(d).j = 0);
                                break;
                            case 36:
                                d = b.j;
                                b = N5(d);
                                for (a = 0; 15 >= a; a++)
                                    for (c = 0; 32 >= c; c++)
                                        if (d.B[a][c] === b) {
                                            for (; 32 >= c; c++) d.B[a][c].reset();
                                            break
                                        }
                                break;
                            case 37:
                                c4a(b, 2, d);
                                break;
                            case 38:
                                c4a(b, 3, d);
                                break;
                            case 39:
                                c4a(b, 4, d);
                                break;
                            case 40:
                                O5(b.j, 0, 32);
                                break;
                            case 41:
                                b.style.set(2);
                                b.j = b.u;
                                b.j.j = 0;
                                b.j.style = b.style;
                                b.B.mode = 1 << b.j.C;
                                break;
                            case 42:
                                d = b.text;
                                d.j = 15;
                                d.style.set(4);
                                a4a(d);
                                e4a(b);
                                break;
                            case 43:
                                e4a(b);
                                break;
                            case 44:
                                a = b.u;
                                switch (b.style.get()) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        M5(a, d)
                                }
                                P5(a,
                                    0, 15);
                                break;
                            case 45:
                                b: {
                                    a = b.j;
                                    switch (b.style.get()) {
                                        default:
                                            case 2:
                                            case 1:
                                            break b;
                                        case 4:
                                                if (15 > a.row) {
                                                ++a.row;
                                                a.u = 1;
                                                break b
                                            }
                                        case 3:
                                    }
                                    2 > a.j && (a.j = 2, a.row < a.j && (a.row = a.j));b = a.row - a.j + 1;M5(a, d);$3a(a, b, b + 1, a.j - 1);P5(a, a.row, 1)
                                }
                                break;
                            case 46:
                                P5(b.C, 0, 15);
                                break;
                            case 47:
                                M5(b.u, d), b.C.updateTime(b.B.time + 0), d = b.C, b.C = b.u, b.u = d, d4a(b)
                        }
                        break;
                    case 7:
                        switch (c) {
                            case 33:
                            case 34:
                            case 35:
                                d = b.j, 32 < (d.u += c & 3) && (d.u = 32)
                        }
                }
        },
        f4a = function() {},
        Q5 = function(a, b, c) {
            this.trackData = a;
            this.I = c;
            this.version = this.D = this.B = this.byteOffset = 0;
            this.j = new DataView(this.trackData);
            this.u = []
        },
        R5 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 1;
            return a.j.getUint8(b)
        },
        S5 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 4;
            return a.j.getUint32(b)
        },
        T5 = function(a, b) {
            A5.call(this);
            this.B = a;
            this.C = b;
            this.track = "CC3" === this.C.languageName ? 4 : 0;
            this.j = new O3a;
            this.j.u = 1 << this.track
        },
        h4a = function(a) {
            if ("string" === typeof a) return !1;
            a = new Q5(a, 8, 0);
            return g4a(a)
        },
        g4a = function(a) {
            if (!(a.byteOffset < a.j.byteLength) || 1380139777 !== S5(a)) return !1;
            a.version = R5(a);
            if (1 < a.version) return !1;
            R5(a);
            R5(a);
            R5(a);
            return !0
        },
        U5 = function() {
            A5.call(this)
        },
        i4a = function(a, b, c, d, e, f, h, l, m) {
            switch (h.tagName) {
                case "b":
                    l.bold = !0;
                    break;
                case "i":
                    l.italic = !0;
                    break;
                case "u":
                    l.underline = !0
            }
            for (var n = 0; n < h.childNodes.length; n++) {
                var p = h.childNodes[n];
                if (3 === p.nodeType) p = new x5(b, c, d, e.id, p.nodeValue, f || 0 < n, g.Df(l) ? void 0 : l), m.push(p), e.j.push(p);
                else {
                    var q = {};
                    Object.assign(q, l);
                    i4a(a, b, c, d, e, !0, p, q, m)
                }
            }
        },
        j4a = function(a) {
            var b = a.split(":");
            a = 0;
            b = g.t(b);
            for (var c = b.next(); !c.done; c = b.next()) a = 60 * a + Number(c.value);
            return 1E3 * a
        },
        k4a = function(a, b, c, d) {
            d = Object.assign({
                zw: 0
            }, d);
            return new y5(a, b, c, "_" + z5++, d)
        },
        V5 = function(a, b) {
            g.K.call(this);
            this.G = a;
            this.Y = b;
            this.parser = null;
            this.j = this.G.Tv()
        },
        q4a = function(a, b, c, d, e) {
            d = d || 0;
            e = e || 0;
            if (a.j && b) {
                var f = e,
                    h = l4a(a, b, d),
                    l = [];
                try {
                    for (var m = g.t(h), n = m.next(); !n.done; n = m.next()) {
                        var p = n.value,
                            q = p.trackData,
                            r = p.WK;
                        l = "string" !== typeof q ? l.concat(m4a(a, c, q, r, f)) : "WEBVTT" === q.substring(0, 6) ? l.concat(n4a(a, q, r)) : l.concat(o4a(a, c, q, r))
                    }
                    var w = l
                } catch (y) {
                    g.qz(y), a.clear(), w = []
                }
                if (0 !== w.length) return w
            }
            b = p4a(b);
            if (!b) return [];
            try {
                return "string" !== typeof b ? m4a(a, c, b, d, e) : "WEBVTT" === b.substring(0, 6) ? n4a(a, b, d) : o4a(a, c, b, d)
            } catch (y) {
                return g.qz(y), a.clear(), []
            }
        },
        p4a = function(a) {
            if ("string" ===
                typeof a || h4a(a)) return a;
            var b = new DataView(a);
            if (8 >= b.byteLength || 1718909296 !== b.getUint32(4)) return "";
            b = g.wC(b, 0, 1835295092);
            if (!b || !b.size) return "";
            a = new Uint8Array(a, b.dataOffset, b.size - (b.dataOffset - b.offset));
            return g.hC(a)
        },
        l4a = function(a, b, c) {
            if ("string" === typeof b || h4a(b)) return [{
                trackData: b,
                WK: c
            }];
            var d = new DataView(b);
            if (8 >= d.byteLength || 1718909296 !== d.getUint32(4)) return [];
            var e = g.ywa(d);
            if (a.j && e) {
                var f = g.qwa(e),
                    h = g.rwa(e);
                e = e.j;
                f && e && a.j.RA(e, f, h)
            }
            f = g.FC(d, 1835295092);
            if (!f || !f.length || !f[0].size) return [];
            a = [];
            f = g.t(f.entries());
            for (h = f.next(); !h.done; h = f.next()) e = g.t(h.value), h = e.next().value, e = e.next().value, e = new Uint8Array(b, e.dataOffset, e.size - (e.dataOffset - e.offset)), e = g.hC(e), a.push({
                trackData: e,
                WK: c + 1E3 * h
            });
            r4a(d, a, c);
            return a = a.filter(function(l) {
                return !!l.trackData
            })
        },
        r4a = function(a, b, c) {
            var d = g.wC(a, 0, 1836476516),
                e = 9E4;
            d && (e = g.xC(d) || 9E4);
            d = 0;
            var f = g.FC(a, 1836019558);
            f = g.t(f.entries());
            for (var h = f.next(); !h.done; h = f.next()) {
                var l = g.t(h.value);
                h = l.next().value;
                l = l.next().value;
                h < b.length && (l = g.wC(a, l.dataOffset, 1953653094)) && (l = g.wC(a, l.dataOffset, 1952867444)) && (l = g.DC(l) / e * 1E3, 0 === h && (d = l), b[h].WK = l - d + c || c * h * 1E3)
            }
        },
        m4a = function(a, b, c, d, e) {
            if (!h4a(c)) throw Error("Invalid binary caption track data");
            a.parser || (a.parser = new T5(e, b));
            return a.parser.u(c, d)
        },
        n4a = function(a, b, c) {
            a.parser || (a.parser = new U5);
            a = a.parser.u(b, c);
            .01 > Math.random() && g.rz(Error("Deprecated subtitles format in web player: WebVTT"));
            return a
        },
        o4a = function(a, b, c, d) {
            if ("{" === c[0]) try {
                return a.parser || (a.parser = new H5(s4a(b))), a.parser.u(c, d)
            } catch (f) {
                return g.qz(f), []
            }
            var e = g.aYa(c);
            if (!e || !e.firstChild) throw a = Error("Invalid caption track data"), a.params = c, a;
            if ("timedtext" === e.firstChild.tagName) {
                if (3 === Number(e.firstChild.getAttribute("format"))) return a.parser || (a.parser = new B5(s4a(b), a.Y)), a.parser.u(e, d);
                a = Error("Unsupported subtitles format in web player (Format2)");
                a.params = c;
                throw a;
            }
            if ("transcript" === e.firstChild.tagName) throw a = Error("Unsupported subtitles format in web player (Format1)"), a.params = c, a;
            a = Error("Invalid caption track data");
            a.params = c;
            throw a;
        },
        s4a = function(a) {
            var b = {};
            if (a = g.KG(a)) b.lang = a, g.rZa.test(a) && (b.jh = 1);
            return b
        },
        W5 = function(a) {
            g.dO.call(this, a);
            var b = this;
            this.G = a;
            this.Y = this.G.V();
            this.videoData = this.G.getVideoData();
            this.kb = this.G.fb();
            this.B = {
                Ud: {}
            };
            this.D = {
                Ud: {}
            };
            this.ya = [];
            this.S = {};
            this.La = {};
            this.ea = !1;
            this.Ub = g.vI(this.videoData);
            this.bb = g.HHa(this.videoData, this.G);
            this.Lb = !!this.videoData.captionTracks.length;
            this.jc = !!this.videoData.Gd;
            this.Qa = "3" === this.Y.controlsType;
            this.u = this.I = this.J = this.Ia = this.jb = null;
            this.Ta = new V5(this.G, this.Y);
            this.j = null;
            this.oa = new g.YD(this);
            this.Xa = new g.W({
                F: "div",
                N: "ytp-caption-window-container",
                X: {
                    id: "ytp-caption-window-container"
                }
            });
            var c = null,
                d = g.Po("yt-html5-player-modules::subtitlesModuleData");
            d && (c = new g.Do(d));
            this.storage = c;
            var e;
            this.rb = !(null == (e = a.Qd()) || !e.JA());
            this.C = t4a(this);
            this.Z = !this.C && this.Qa && this.rb && this.bb;
            g.N(this, this.Ta);
            this.C ? this.Ba = this.Aa = null : (this.Aa = new g.Wn(this.AL, void 0, this), g.N(this, this.Aa), this.Ba = new g.Yn(this.w4, 2E3, this), g.N(this, this.Ba));
            g.N(this, this.oa);
            this.Y.K("caption_window_container_killswitch") || g.AN(this.player, this.Xa.element, 4);
            g.N(this, this.Xa);
            this.C || this.oa.T(a, "resize", this.CL);
            (this.zb = !g.Wy() && !this.G.isFullscreen() && !this.C && !this.Z && !this.Y.K("switch_captions_to_track_tag_when_fullscreen_api_unavailable_killswitch")) && this.oa.T(a, "resize", this.P1);
            this.oa.T(a, "onPlaybackAudioChange", this.V0);
            this.oa.T(a, g.uA("captions"), function(f) {
                b.onCueRangeEnter(f)
            });
            this.oa.T(a, g.vA("captions"), function(f) {
                b.onCueRangeExit(f)
            });
            u4a(this, v4a(this) || {})
        },
        z4a = function(a) {
            if (1 === a.Y.jb || 1 === a.videoData.Bz || "alwayson" === g.fI(a.videoData, "yt:cc")) return !0;
            if (a.videoData.captionTracks.length) var b = a.player.getAudioTrack().u;
            if (2 === a.Y.jb) {
                var c;
                g.oG(a.Y) ? c = w4a(a) : c = x4a(a, "module-enabled");
                if (null != c) return !!c
            }
            c = h3a(a.player.getAudioTrack(), i3a(a.Y));
            var d = g.fI(a.videoData, "yt:cc");
            if (void 0 === y4a(a)) {
                if ("CAPTIONS_INITIAL_STATE_ON_RECOMMENDED" === c) return d ? "on" === d : !0;
                if ("CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED" === c) return "on" === d
            } else return "on" === d;
            return "ON" === b || "on" === g.fI(a.videoData, "yt:cc")
        },
        X5 = function(a, b) {
            if (a.j && (void 0 === b || !b) || !a.videoData.captionTracks.length) return !1;
            a = a.player.getAudioTrack();
            return !!a.j || "FORCED_ON" === a.u
        },
        y4a = function(a) {
            var b = void 0,
                c = g.rv(g.qv.getInstance(), 65);
            if (g.oG(a.Y) && null != c) {
                if (null != w4a(a)) return !1;
                b = !c
            }
            return b
        },
        A4a = function(a) {
            var b;
            a.Ub ? b = new u5(a.Y, a.videoData, a.player.getAudioTrack(), a.player) : a.bb ? b = new s5(a.videoData.j, a.player) : a.Lb ? b = new g.hO(a.Y, a.videoData, a.player.getAudioTrack()) : b = new g.kO(a.Y, a.videoData.Gd, a.videoData.videoId, g.bCa(a.videoData), a.videoData.Ul);
            return b
        },
        Z5 = function(a, b) {
            if (a.u) {
                if (a.I && a.I.C) return a.I.C;
                b || (b = a.jc ? !1 : a.Lb ? !1 : !0);
                b = g.eO(a.u.j, b);
                for (var c = [a.videoData.captionsLanguagePreference, a.Y.captionsLanguagePreference, g.fI(a.videoData, "yt:cc_default_lang")], d = 0; d < c.length; d++)
                    for (var e = 0; e < b.length; e++)
                        if (g.KG(b[e]) === c[d]) return b[e];
                return a.I && a.I.B ? a.I.B : (c = b.find(function(f) {
                    return f.isDefault
                })) ? c : b[0] || Y5(a)
            }
            return null
        },
        Y5 = function(a) {
            return a.I && a.I.j
        },
        $5 = function(a) {
            var b = Y5(a);
            return !!b && a.j === b
        },
        B4a = function(a) {
            g.eO(a.u.j, !0);
            var b = h3a(a.player.getAudioTrack(), i3a(a.Y)),
                c;
            "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === b ? c = Z5(a, a.ea) : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === b && X5(a) ? c = Y5(a) : y4a(a) || a.ea || z4a(a) ? c = Z5(a, a.ea) : X5(a) && (c = Y5(a));
            if (a.C || a.Z) {
                var d = g.eO(a.u.j, !0);
                b = [];
                for (var e = 0; e < d.length; e++) {
                    var f = d[e],
                        h = g.ih("TRACK");
                    h.setAttribute("kind", "subtitles");
                    h.setAttribute("label", g.IG(f));
                    h.setAttribute("srclang", g.KG(f));
                    h.setAttribute("id", f.toString());
                    a.Z || h.setAttribute("src", a.u.Ds(f, "vtt"));
                    f === c && h.setAttribute("default",
                        "1");
                    b.push(h)
                }
                c = a.G.Qd();
                c.Yx(b);
                c = c.yf();
                a.rb && a.oa.T(c.textTracks, "change", a.A3)
            } else !a.j && c && a6(a, c), a.player.Pa("onCaptionsTrackListChanged"), a.player.Pa("onApiChange")
        },
        C4a = function(a, b) {
            var c = a.G.Qd().yf().textTracks;
            a = a.j.toString();
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                e.id === a && (b ? "showing" !== e.mode && (e.mode = "showing") : "showing" === e.mode && (e.mode = "disabled"))
            }
        },
        a6 = function(a, b, c) {
            a.loaded && a.unload();
            null != c && (a.ea = c, a.ea && (g.oG(a.Y) ? b6(a, !!b) : c6(a, "module-enabled", !!b)));
            a.j = b;
            X5(a) && (a.j = Y5(a));
            a.load()
        },
        E4a = function(a, b) {
            if (b instanceof y5) {
                var c = a.S[b.id];
                c && c.u !== b && (c.dispose(), delete a.S[b.id], c = null);
                c || (c = D4a(a, b)) && (a.S[b.id] = c)
            } else c = b.windowId, a.La[c] || (a.La[c] = []), a.La[c].push(b)
        },
        F4a = function(a, b) {
            a.Y.K("caption_window_container_killswitch") ? g.AN(a.player, b, 4) : a.Xa.element.appendChild(b)
        },
        D4a = function(a, b) {
            var c = a.kb.getVideoContentRect(!0).height,
                d = a.kb.getVideoContentRect(!0).width;
            if (!c || !d) return null;
            var e = a.j ? g.KG(a.j) : null;
            e && g.rZa.test(e) && (b.params.jh = 1);
            e = a.kb.getPlayerSize();
            a.Y.K("web_player_caption_stickiness_for_glive_killswitch") || "google-live" !== a.Y.playerStyle || a.B.isDefault || Object.assign(b.params, a.B);
            switch (null != b.params.zw ? b.params.zw : 1 < b.j.length ? 1 : 0) {
                case 1:
                    return new v5(b, a.B, a.D, d, c, e.width, e.height, a.Y.experiments);
                case 2:
                    return new w5(b, a.B, a.D, d, c, e.width, e.height, a.Y.experiments);
                default:
                    return new t5(b, a.B, a.D, d, c, e.width, e.height, a.Y.experiments)
            }
        },
        u4a = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            var d = d6.Ud;
            a.B = {};
            Object.assign(a.B, d6);
            a.B.Ud = {};
            Object.assign(a.B.Ud, d);
            a.D = {
                Ud: {}
            };
            var e = b.backgroundOverride ? a.D : a.B,
                f = b.background || d.background;
            F5.test(f);
            e.Ud.background = f;
            e = b.colorOverride ? a.D : a.B;
            f = b.color || d.color;
            F5.test(f);
            e.Ud.color = f;
            e = b.windowColorOverride ? a.D : a.B;
            f = b.windowColor || d6.windowColor;
            F5.test(f);
            e.windowColor = f;
            e = b.backgroundOpacityOverride ? a.D : a.B;
            f = b.backgroundOpacity;
            null == f && (f = d.backgroundOpacity);
            e.Ud.backgroundOpacity = f;
            e = b.fontSizeIncrementOverride ? a.D : a.B;
            f = b.fontSizeIncrement;
            null == f && (f = d.fontSizeIncrement);
            e.Ud.fontSizeIncrement = f;
            f = b.fontStyleOverride ? a.D : a.B;
            e = b.fontStyle;
            null == e && (e = d.bold && d.italic ? 3 : d.bold ? 1 : d.italic ? 2 : 0);
            f = f.Ud;
            switch (e) {
                case 1:
                    f.bold = !0;
                    delete f.italic;
                    break;
                case 2:
                    delete f.bold;
                    f.italic = !0;
                    break;
                case 3:
                    f.bold = !0;
                    f.italic = !0;
                    break;
                default:
                    delete f.bold, delete f.italic
            }
            e = b.textOpacityOverride ? a.D : a.B;
            f = b.textOpacity;
            null == f && (f = d.textOpacity);
            e.Ud.textOpacity = f;
            e = b.windowOpacityOverride ? a.D : a.B;
            f = b.windowOpacity;
            null == f && (f = d6.windowOpacity);
            e.windowOpacity =
                f;
            e = b.charEdgeStyleOverride ? a.D : a.B;
            f = b.charEdgeStyle;
            null == f && (f = d.charEdgeStyle);
            e.Ud.charEdgeStyle = f;
            e = b.fontFamilyOverride ? a.D : a.B;
            f = b.fontFamily;
            null == f && (f = d.fontFamily);
            e.Ud.fontFamily = f;
            a.loaded && a.CL();
            c && (a.Y.K("web_player_local_storage_for_captions_setting_killswitch") ? c6(a, "display-settings", b) : g.Pz("yt-player-caption-display-settings", b, 2592E3))
        },
        H4a = function(a, b, c) {
            b && !a.J ? (b = G3a({
                jh: 1,
                lang: "ar"
            }), a.J = [b, new x5(b.start, b.end - b.start, 0, b.id, null != c ? c : "\u062a\u0638\u0647\u0631 \u0627\u0644\u062a\u0631\u062c\u0645\u0629 \u0628\u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u062a\u0627\u0644\u064a")], a.player.oe(a.J)) : !b && a.J && (G4a(a, a.J), a.J = null)
        },
        G4a = function(a, b) {
            a.player.hh(b);
            b = g.t(b);
            for (var c = b.next(); !c.done; c = b.next()) g.$b(a.ya, c.value);
            g.Xn(a.Aa)
        },
        x4a = function(a, b) {
            if (!a.storage) return null;
            try {
                var c = a.storage.get(b)
            } catch (d) {
                a.storage.remove(b)
            }
            return c
        },
        c6 = function(a, b, c) {
            if (a.storage) try {
                a.storage.set(b, c)
            } catch (d) {}
        },
        b6 = function(a, b) {
            a.G.isInline() || g.Pz("yt-player-sticky-caption", b, 2592E3)
        },
        w4a = function(a) {
            if (!a.G.isInline()) return g.Qz("yt-player-sticky-caption")
        },
        v4a = function(a) {
            return a.Y.K("web_player_local_storage_for_captions_setting_killswitch") ? x4a(a, "display-settings") : g.Qz("yt-player-caption-display-settings")
        },
        t4a = function(a) {
            var b, c = !(null == (b = a.G.Qd()) || !b.IA());
            return a.Qa && c && !a.bb
        };
    g.GS.prototype.Qy = g.ba(34, function(a) {
        var b = 2;
        this.La.has(a) ? b = 0 : g.dLa(this, a) && (b = 1);
        return b
    });
    g.zV.prototype.Qy = g.ba(33, function(a) {
        return this.qd.Qy(a)
    });
    g.GS.prototype.RA = g.ba(32, function(a, b, c) {
        this.Ba.set(a, {
            hs: b,
            Wx: c
        })
    });
    g.zV.prototype.RA = g.ba(31, function(a, b, c) {
        this.qd.RA(a, b, c)
    });
    g.yO.prototype.xv = g.ba(29, function() {
        for (var a = g.bh(document, "track", void 0, this.j), b = 0; b < a.length; b++) g.ph(a[b])
    });
    g.pS.prototype.xv = g.ba(28, function() {
        this.mediaElement.xv()
    });
    g.yO.prototype.JA = g.ba(27, function() {
        return !(!this.j.textTracks || !this.j.textTracks.addEventListener)
    });
    g.pS.prototype.JA = g.ba(26, function() {
        return this.mediaElement.JA()
    });
    g.yO.prototype.IA = g.ba(25, function() {
        return !!this.j.textTracks
    });
    g.pS.prototype.IA = g.ba(24, function() {
        return this.mediaElement.IA()
    });
    g.yO.prototype.Yx = g.ba(23, function(a) {
        for (var b = 0; b < a.length; b++) this.j.appendChild(a[b])
    });
    g.pS.prototype.Yx = g.ba(22, function(a) {
        this.mediaElement.Yx(a)
    });
    g.gO.prototype.dK = g.ba(21, function() {
        return !1
    });
    g.gO.prototype.lq = g.ba(20, function() {});
    g.hO.prototype.lq = g.ba(19, function(a, b, c) {
        var d = this;
        this.isDisposed();
        b = this.Ds(a, b);
        this.Zo();
        this.u = g.Bu(b, {
            format: "RAW",
            onSuccess: function(e) {
                d.u = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.kO.prototype.lq = g.ba(18, function(a, b, c) {
        var d = this;
        this.isDisposed();
        b = this.Ds(a, b);
        this.Zo();
        this.u = g.Bu(b, {
            format: "RAW",
            onSuccess: function(e) {
                d.u = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.oV.prototype.ez = g.ba(8, function() {
        return this.J
    });
    g.SX.prototype.ez = g.ba(7, function() {
        var a;
        return (null == (a = g.oN(this)) ? void 0 : a.Tv()) || null
    });
    g.tN.prototype.Tv = g.ba(6, function() {
        return this.app.ez()
    });
    g.tX.prototype.Tv = g.ba(5, function() {
        var a;
        return (null == (a = this.Ka) ? void 0 : a.ez()) || null
    });
    var n3a = /#(.)(.)(.)/,
        m3a = /^#(?:[0-9a-f]{3}){1,2}$/i,
        t3a = {
            aa: "Afar",
            ab: "Abkhazian",
            ace: "Achinese",
            ach: "Acoli",
            ada: "Adangme",
            ady: "Adyghe",
            ae: "Avestan",
            aeb: "Tunisian Arabic",
            af: "Afrikaans",
            afh: "Afrihili",
            agq: "Aghem",
            ain: "Ainu",
            ak: "Akan",
            akk: "Akkadian",
            akz: "Alabama",
            ale: "Aleut",
            aln: "Gheg Albanian",
            alt: "Southern Altai",
            am: "Amharic",
            an: "Aragonese",
            ang: "Old English",
            anp: "Angika",
            ar: "Arabic",
            ar_001: "Arabic (world)",
            arc: "Aramaic",
            arn: "Mapuche",
            aro: "Araona",
            arp: "Arapaho",
            arq: "Algerian Arabic",
            ars: "Najdi Arabic",
            arw: "Arawak",
            ary: "Moroccan Arabic",
            arz: "Egyptian Arabic",
            as: "Assamese",
            asa: "Asu",
            ase: "American Sign Language",
            ast: "Asturian",
            av: "Avaric",
            avk: "Kotava",
            awa: "Awadhi",
            ay: "Aymara",
            az: "Azerbaijani",
            az_Cyrl: "Azerbaijani (Cyrillic)",
            az_Latn: "Azerbaijani (Latin)",
            ba: "Bashkir",
            bal: "Baluchi",
            ban: "Balinese",
            bar: "Bavarian",
            bas: "Basaa",
            bax: "Bamun",
            bbc: "Batak Toba",
            bbj: "Ghomala",
            be: "Belarusian",
            bej: "Beja",
            bem: "Bemba",
            bew: "Betawi",
            bez: "Bena",
            bfd: "Bafut",
            bfq: "Badaga",
            bg: "Bulgarian",
            bgn: "Western Balochi",
            bho: "Bhojpuri",
            bi: "Bislama",
            bik: "Bikol",
            bin: "Bini",
            bjn: "Banjar",
            bkm: "Kom",
            bla: "Siksika",
            bm: "Bambara",
            bn: "Bangla",
            bo: "Tibetan",
            bpy: "Bishnupriya",
            bqi: "Bakhtiari",
            br: "Breton",
            bra: "Braj",
            brh: "Brahui",
            brx: "Bodo",
            bs: "Bosnian",
            bs_Cyrl: "Bosnian (Cyrillic)",
            bs_Latn: "Bosnian (Latin)",
            bss: "Akoose",
            bua: "Buriat",
            bug: "Buginese",
            bum: "Bulu",
            byn: "Blin",
            byv: "Medumba",
            ca: "Catalan",
            cad: "Caddo",
            car: "Carib",
            cay: "Cayuga",
            cch: "Atsam",
            ccp: "Chakma",
            ce: "Chechen",
            ceb: "Cebuano",
            cgg: "Chiga",
            ch: "Chamorro",
            chb: "Chibcha",
            chg: "Chagatai",
            chk: "Chuukese",
            chm: "Mari",
            chn: "Chinook Jargon",
            cho: "Choctaw",
            chp: "Chipewyan",
            chr: "Cherokee",
            chy: "Cheyenne",
            ckb: "Central Kurdish",
            ckb_Arab: "Central Kurdish (Arabic)",
            co: "Corsican",
            cop: "Coptic",
            cps: "Capiznon",
            cr: "Cree",
            crh: "Crimean Tatar",
            cs: "Czech",
            csb: "Kashubian",
            cu: "Church Slavic",
            cv: "Chuvash",
            cy: "Welsh",
            da: "Danish",
            dak: "Dakota",
            dar: "Dargwa",
            dav: "Taita",
            de: "German",
            de_AT: "German (Austria)",
            de_CH: "German (Switzerland)",
            del: "Delaware",
            den: "Slave",
            dgr: "Dogrib",
            din: "Dinka",
            dje: "Zarma",
            doi: "Dogri",
            dsb: "Lower Sorbian",
            dua: "Duala",
            dum: "Middle Dutch",
            dv: "Divehi",
            dyo: "Jola-Fonyi",
            dyu: "Dyula",
            dz: "Dzongkha",
            dzg: "Dazaga",
            ebu: "Embu",
            ee: "Ewe",
            efi: "Efik",
            egy: "Ancient Egyptian",
            eka: "Ekajuk",
            el: "Greek",
            elx: "Elamite",
            en: "English",
            en_AU: "English (Australia)",
            en_CA: "English (Canada)",
            en_GB: "English (United Kingdom)",
            en_US: "English (United States)",
            enm: "Middle English",
            eo: "Esperanto",
            es: "Spanish",
            es_419: "Spanish (Latin America)",
            es_ES: "Spanish (Spain)",
            es_MX: "Spanish (Mexico)",
            et: "Estonian",
            eu: "Basque",
            ewo: "Ewondo",
            fa: "Persian",
            fa_AF: "Persian (Afghanistan)",
            fan: "Fang",
            fat: "Fanti",
            ff: "Fulah",
            ff_Adlm: "Fulah (Adlam)",
            ff_Latn: "Fulah (Latin)",
            fi: "Finnish",
            fil: "Filipino",
            fj: "Fijian",
            fo: "Faroese",
            fon: "Fon",
            fr: "French",
            fr_CA: "French (Canada)",
            fr_CH: "French (Switzerland)",
            frm: "Middle French",
            fro: "Old French",
            frr: "Northern Frisian",
            frs: "Eastern Frisian",
            fur: "Friulian",
            fy: "Western Frisian",
            ga: "Irish",
            gaa: "Ga",
            gay: "Gayo",
            gba: "Gbaya",
            gd: "Scottish Gaelic",
            gez: "Geez",
            gil: "Gilbertese",
            gl: "Galician",
            gmh: "Middle High German",
            gn: "Guarani",
            goh: "Old High German",
            gon: "Gondi",
            gor: "Gorontalo",
            got: "Gothic",
            grb: "Grebo",
            grc: "Ancient Greek",
            gsw: "Swiss German",
            gu: "Gujarati",
            guz: "Gusii",
            gv: "Manx",
            gwi: "Gwich\u02bcin",
            ha: "Hausa",
            hai: "Haida",
            haw: "Hawaiian",
            he: "Hebrew",
            hi: "Hindi",
            hi_Latn: "Hindi (Latin)",
            hil: "Hiligaynon",
            hit: "Hittite",
            hmn: "Hmong",
            ho: "Hiri Motu",
            hr: "Croatian",
            hsb: "Upper Sorbian",
            ht: "Haitian Creole",
            hu: "Hungarian",
            hup: "Hupa",
            hy: "Armenian",
            hz: "Herero",
            ia: "Interlingua",
            iba: "Iban",
            ibb: "Ibibio",
            id: "Indonesian",
            ie: "Interlingue",
            ig: "Igbo",
            ii: "Sichuan Yi",
            ik: "Inupiaq",
            ilo: "Iloko",
            "in": "Indonesian",
            inh: "Ingush",
            io: "Ido",
            is: "Icelandic",
            it: "Italian",
            iu: "Inuktitut",
            iw: "Hebrew",
            ja: "Japanese",
            jbo: "Lojban",
            jgo: "Ngomba",
            jmc: "Machame",
            jpr: "Judeo-Persian",
            jrb: "Judeo-Arabic",
            jv: "Javanese",
            ka: "Georgian",
            kaa: "Kara-Kalpak",
            kab: "Kabyle",
            kac: "Kachin",
            kaj: "Jju",
            kam: "Kamba",
            kaw: "Kawi",
            kbd: "Kabardian",
            kbl: "Kanembu",
            kcg: "Tyap",
            kde: "Makonde",
            kea: "Kabuverdianu",
            kfo: "Koro",
            kg: "Kongo",
            kgp: "Kaingang",
            kha: "Khasi",
            kho: "Khotanese",
            khq: "Koyra Chiini",
            ki: "Kikuyu",
            kj: "Kuanyama",
            kk: "Kazakh",
            kkj: "Kako",
            kl: "Kalaallisut",
            kln: "Kalenjin",
            km: "Khmer",
            kmb: "Kimbundu",
            kn: "Kannada",
            ko: "Korean",
            kok: "Konkani",
            kos: "Kosraean",
            kpe: "Kpelle",
            kr: "Kanuri",
            krc: "Karachay-Balkar",
            krl: "Karelian",
            kru: "Kurukh",
            ks: "Kashmiri",
            ks_Arab: "Kashmiri (Arabic)",
            ks_Deva: "Kashmiri (Devanagari)",
            ksb: "Shambala",
            ksf: "Bafia",
            ksh: "Colognian",
            ku: "Kurdish",
            kum: "Kumyk",
            kut: "Kutenai",
            kv: "Komi",
            kw: "Cornish",
            ky: "Kyrgyz",
            la: "Latin",
            lad: "Ladino",
            lag: "Langi",
            lah: "Lahnda",
            lam: "Lamba",
            lb: "Luxembourgish",
            lez: "Lezghian",
            lg: "Ganda",
            li: "Limburgish",
            lkt: "Lakota",
            ln: "Lingala",
            lo: "Lao",
            lol: "Mongo",
            loz: "Lozi",
            lrc: "Northern Luri",
            lt: "Lithuanian",
            lu: "Luba-Katanga",
            lua: "Luba-Lulua",
            lui: "Luiseno",
            lun: "Lunda",
            luo: "Luo",
            lus: "Mizo",
            luy: "Luyia",
            lv: "Latvian",
            mad: "Madurese",
            maf: "Mafa",
            mag: "Magahi",
            mai: "Maithili",
            mak: "Makasar",
            man: "Mandingo",
            mas: "Masai",
            mde: "Maba",
            mdf: "Moksha",
            mdr: "Mandar",
            men: "Mende",
            mer: "Meru",
            mfe: "Morisyen",
            mg: "Malagasy",
            mga: "Middle Irish",
            mgh: "Makhuwa-Meetto",
            mgo: "Meta\u02bc",
            mh: "Marshallese",
            mi: "M\u0101ori",
            mic: "Mi'kmaq",
            min: "Minangkabau",
            mk: "Macedonian",
            ml: "Malayalam",
            mn: "Mongolian",
            mnc: "Manchu",
            mni: "Manipuri",
            mni_Beng: "Manipuri (Bangla)",
            mo: "Romanian",
            moh: "Mohawk",
            mos: "Mossi",
            mr: "Marathi",
            ms: "Malay",
            mt: "Maltese",
            mua: "Mundang",
            mul: "Multiple languages",
            mus: "Muscogee",
            mwl: "Mirandese",
            mwr: "Marwari",
            my: "Burmese",
            mye: "Myene",
            myv: "Erzya",
            mzn: "Mazanderani",
            na: "Nauru",
            nap: "Neapolitan",
            naq: "Nama",
            nb: "Norwegian Bokm\u00e5l",
            nd: "North Ndebele",
            nds: "Low German",
            nds_NL: "Low German (Netherlands)",
            ne: "Nepali",
            "new": "Newari",
            ng: "Ndonga",
            nia: "Nias",
            niu: "Niuean",
            nl: "Dutch",
            nl_BE: "Dutch (Belgium)",
            nmg: "Kwasio",
            nn: "Norwegian Nynorsk",
            nnh: "Ngiemboon",
            no: "Norwegian",
            nog: "Nogai",
            non: "Old Norse",
            nqo: "N\u2019Ko",
            nr: "South Ndebele",
            nso: "Northern Sotho",
            nus: "Nuer",
            nv: "Navajo",
            nwc: "Classical Newari",
            ny: "Nyanja",
            nym: "Nyamwezi",
            nyn: "Nyankole",
            nyo: "Nyoro",
            nzi: "Nzima",
            oc: "Occitan",
            oj: "Ojibwa",
            om: "Oromo",
            or: "Odia",
            os: "Ossetic",
            osa: "Osage",
            ota: "Ottoman Turkish",
            pa: "Punjabi",
            pa_Arab: "Punjabi (Arabic)",
            pa_Guru: "Punjabi (Gurmukhi)",
            pag: "Pangasinan",
            pal: "Pahlavi",
            pam: "Pampanga",
            pap: "Papiamento",
            pau: "Palauan",
            pcm: "Nigerian Pidgin",
            peo: "Old Persian",
            phn: "Phoenician",
            pi: "Pali",
            pl: "Polish",
            pon: "Pohnpeian",
            pro: "Old Proven\u00e7al",
            ps: "Pashto",
            pt: "Portuguese",
            pt_BR: "Portuguese (Brazil)",
            pt_PT: "Portuguese (Portugal)",
            qu: "Quechua",
            raj: "Rajasthani",
            rap: "Rapanui",
            rar: "Rarotongan",
            rm: "Romansh",
            rn: "Rundi",
            ro: "Romanian",
            ro_MD: "Romanian (Moldova)",
            rof: "Rombo",
            rom: "Romany",
            ru: "Russian",
            rup: "Aromanian",
            rw: "Kinyarwanda",
            rwk: "Rwa",
            sa: "Sanskrit",
            sad: "Sandawe",
            sah: "Sakha",
            sam: "Samaritan Aramaic",
            saq: "Samburu",
            sas: "Sasak",
            sat: "Santali",
            sat_Olck: "Santali (Ol Chiki)",
            sba: "Ngambay",
            sbp: "Sangu",
            sc: "Sardinian",
            scn: "Sicilian",
            sco: "Scots",
            sd: "Sindhi",
            sd_Arab: "Sindhi (Arabic)",
            sd_Deva: "Sindhi (Devanagari)",
            se: "Northern Sami",
            see: "Seneca",
            seh: "Sena",
            sel: "Selkup",
            ses: "Koyraboro Senni",
            sg: "Sango",
            sga: "Old Irish",
            sh: "Serbo-Croatian",
            shi: "Tachelhit",
            shi_Latn: "Tachelhit (Latin)",
            shi_Tfng: "Tachelhit (Tifinagh)",
            shn: "Shan",
            shu: "Chadian Arabic",
            si: "Sinhala",
            sid: "Sidamo",
            sk: "Slovak",
            sl: "Slovenian",
            sm: "Samoan",
            sma: "Southern Sami",
            smj: "Lule Sami",
            smn: "Inari Sami",
            sms: "Skolt Sami",
            sn: "Shona",
            snk: "Soninke",
            so: "Somali",
            sog: "Sogdien",
            sq: "Albanian",
            sr: "Serbian",
            sr_Cyrl: "Serbian (Cyrillic)",
            sr_Latn: "Serbian (Latin)",
            srn: "Sranan Tongo",
            srr: "Serer",
            ss: "Swati",
            ssy: "Saho",
            st: "Southern Sotho",
            su: "Sundanese",
            su_Latn: "Sundanese (Latin)",
            suk: "Sukuma",
            sus: "Susu",
            sux: "Sumerian",
            sv: "Swedish",
            sw: "Swahili",
            sw_CD: "Swahili (Congo - Kinshasa)",
            swb: "Comorian",
            syc: "Classical Syriac",
            syr: "Syriac",
            ta: "Tamil",
            te: "Telugu",
            tem: "Timne",
            teo: "Teso",
            ter: "Tereno",
            tet: "Tetum",
            tg: "Tajik",
            th: "Thai",
            ti: "Tigrinya",
            tig: "Tigre",
            tiv: "Tiv",
            tk: "Turkmen",
            tkl: "Tokelau",
            tl: "Tagalog",
            tlh: "Klingon",
            tli: "Tlingit",
            tmh: "Tamashek",
            tn: "Tswana",
            to: "Tongan",
            tog: "Nyasa Tonga",
            tpi: "Tok Pisin",
            tr: "Turkish",
            trv: "Taroko",
            ts: "Tsonga",
            tsi: "Tsimshian",
            tt: "Tatar",
            tum: "Tumbuka",
            tvl: "Tuvalu",
            tw: "Twi",
            twq: "Tasawaq",
            ty: "Tahitian",
            tyv: "Tuvinian",
            tzm: "Central Atlas Tamazight",
            udm: "Udmurt",
            ug: "Uyghur",
            uga: "Ugaritic",
            uk: "Ukrainian",
            umb: "Umbundu",
            ur: "Urdu",
            uz: "Uzbek",
            uz_Arab: "Uzbek (Arabic)",
            uz_Cyrl: "Uzbek (Cyrillic)",
            uz_Latn: "Uzbek (Latin)",
            vai: "Vai",
            vai_Latn: "Vai (Latin)",
            vai_Vaii: "Vai (Vai)",
            ve: "Venda",
            vi: "Vietnamese",
            vo: "Volap\u00fck",
            vot: "Votic",
            vun: "Vunjo",
            wa: "Walloon",
            wae: "Walser",
            wal: "Wolaytta",
            war: "Waray",
            was: "Washo",
            wo: "Wolof",
            xal: "Kalmyk",
            xh: "Xhosa",
            xog: "Soga",
            yao: "Yao",
            yap: "Yapese",
            yav: "Yangben",
            ybb: "Yemba",
            yi: "Yiddish",
            yo: "Yoruba",
            yrl: "Nheengatu",
            yue: "Cantonese",
            yue_Hans: "Cantonese (Simplified)",
            yue_Hant: "Cantonese (Traditional)",
            za: "Zhuang",
            zap: "Zapotec",
            zbl: "Blissymbols",
            zen: "Zenaga",
            zgh: "Standard Moroccan Tamazight",
            zh: "Chinese",
            zh_Hans: "Chinese (Simplified)",
            zh_Hant: "Chinese (Traditional)",
            zh_TW: "Chinese (Taiwan)",
            zu: "Zulu",
            zun: "Zuni",
            zxx: "No linguistic content",
            zza: "Zaza"
        };
    r5.prototype.contains = function(a) {
        a = g.kc(this.segments, a);
        return 0 <= a || 0 > a && 1 === (-a - 1) % 2
    };
    r5.prototype.length = function() {
        return this.segments.length / 2
    };
    g.v(q3a, g.K);
    g.k = q3a.prototype;
    g.k.ra = function() {
        g.K.prototype.ra.call(this);
        this.B && this.B.cancel()
    };
    g.k.Cw = function() {
        this.seekTo(this.player.getCurrentTime())
    };
    g.k.seekTo = function(a) {
        a -= this.player.Ad();
        var b = this.j;
        this.j = g.Ob(this.ea.Gm(a).j);
        b !== this.j && this.Z && this.Z()
    };
    g.k.reset = function() {
        this.C = new r5;
        this.I = -1;
        this.B && (this.B.cancel(), this.B = null)
    };
    g.k.mQ = function() {
        this.isDisposed();
        var a;
        if (a = null != this.j) a = this.j, a = a.j.jp(a);
        if (a && !this.B && !(this.j && 30 < this.j.startTime - this.player.getCurrentTime())) {
            a = this.j;
            a = a.j.Px(a);
            var b;
            if (null == (b = this.player.getVideoData()) ? 0 : b.enableServerStitchedDai)
                if (b = this.player.Tv()) {
                    var c = a.j[0].j.info.id,
                        d = a.j[0].Na,
                        e = a.j[0].C;
                    if (this.policy.Qa) {
                        if (b = b.Es(e, d, c, 3)) a.S = b
                    } else if (c = b.Dm(e, d, c, 3))
                        if (b = b.Qy(d), 0 === b) c && (a.B = new g.MB(c));
                        else if (2 === b) {
                        this.J.start();
                        r3a(this) && this.seekTo(this.player.getCurrentTime());
                        return
                    }
                }
            a.j[0].duration ? (this.C.contains(a.j[0].Na) || s3a(this, a), this.j = g.Ob(a.j)) : !this.Y.K("force_caption_seek_for_live_killswitch") && r3a(this) && this.seekTo(this.player.getCurrentTime())
        }
        this.J.start()
    };
    g.v(s5, g.gO);
    g.k = s5.prototype;
    g.k.lq = function(a, b, c) {
        var d = this;
        this.Zo();
        b = v3a(this, a.getId());
        b || (b = a.languageCode, b = this.u.isManifestless ? w3a(this, b, "386") : w3a(this, b));
        if (b) {
            var e = 1E3 * (b.index.getStartTimeInPeriod(b.index.getFirstSegmentNumber()) - b.index.getStartTime(b.index.getFirstSegmentNumber())),
                f = new g.iO(this.Y);
            this.B = new q3a(f, this.G, b, function(h, l) {
                c(h, a, l, e)
            }, this.I || g.HD(b.info), function() {
                d.B && d.B.reset();
                d.D = !0
            })
        }
    };
    g.k.dK = function() {
        var a = this.D;
        this.D = !1;
        return a
    };
    g.k.uw = function(a) {
        var b = this.I ? [new g.HG({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC1",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        }), new g.HG({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC3",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        })] : this.u.isManifestless ? u3a(this, "386") : u3a(this);
        b = g.t(b);
        for (var c = b.next(); !c.done; c = b.next()) g.fO(this.j, c.value);
        a()
    };
    g.k.Zo = function() {
        this.B && (this.B.dispose(), this.B = null)
    };
    g.k.Ds = function() {
        return ""
    };
    var F5 = /^#(?:[0-9a-f]{3}){1,2}$/i;
    var y3a = ["left", "right", "center", "justify"];
    g.v(t5, g.W);
    g.k = t5.prototype;
    g.k.BU = function(a, b) {
        var c = g.Kl(this.element, this.element.parentElement);
        this.jb = a - c.x;
        this.kb = b - c.y;
        g.go(this.element, "ytp-dragging")
    };
    g.k.AU = function(a, b) {
        var c = g.Ml(this.element);
        a = a - this.jb - .02 * this.playerWidth;
        var d = b - this.kb - .02 * this.playerHeight,
            e = (a + c.width / 2) / this.maxWidth * 3;
        e = Math.floor(g.Fg(e, 0, 2));
        var f = (d + c.height / 2) / this.Xa * 3;
        f = Math.floor(g.Fg(f, 0, 2));
        b = e + 3 * f;
        a = (a + e / 2 * c.width) / this.maxWidth;
        a = 100 * g.Fg(a, 0, 1);
        c = (d + f / 2 * c.height) / this.Xa;
        c = 100 * g.Fg(c, 0, 1);
        this.u.params.Zj = b;
        this.u.params.Hl = c;
        this.u.params.Oi = a;
        this.u.params.isDefault = !1;
        this.j.Zj = b;
        this.j.Hl = c;
        this.j.Oi = a;
        this.j.isDefault = !1;
        this.ea.Zj = b;
        this.ea.Hl = c;
        this.ea.Oi = a;
        this.ea.isDefault = !1;
        this.lS()
    };
    g.k.zU = function() {
        g.io(this.element, "ytp-dragging")
    };
    g.k.lS = function() {
        this.Xw(this.D)
    };
    g.k.getType = function() {
        return this.type
    };
    g.k.Xw = function(a) {
        var b = Math.min(this.dP(), this.maxWidth),
            c = this.cP(),
            d = "";
        3 === this.u.params.jh && (d = "rotate(180deg)");
        g.Bl(this.element, {
            top: 0,
            left: 0,
            right: "",
            bottom: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": "96%",
            "max-height": "96%",
            margin: "",
            transform: ""
        });
        this.BG(a);
        a = {
            transform: d,
            top: "",
            left: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": "",
            "max-height": ""
        };
        var e = .96 * this.j.Oi + 2;
        d = this.j.Zj;
        switch (d) {
            case 0:
            case 3:
            case 6:
                (b = this.j.Ud.fontSizeIncrement) && 0 < b && 2 !== this.j.jh && 3 !==
                    this.j.jh && (e = Math.max(e / (1 + 2 * b), 2));
                a.left = e + "%";
                break;
            case 1:
            case 4:
            case 7:
                a.left = e + "%";
                e = this.C.offsetWidth;
                b || e ? (b = b || e + 1, a.width = b + "px", a["margin-left"] = b / -2 + "px") : a.transform += " translateX(-50%)";
                break;
            case 2:
            case 5:
            case 8:
                a.right = 100 - e + "%"
        }
        b = .96 * this.j.Hl + 2;
        switch (d) {
            case 0:
            case 1:
            case 2:
                a.top = b + "%";
                break;
            case 3:
            case 4:
            case 5:
                a.top = b + "%";
                (c = c || this.element.clientHeight) ? (a.height = c + "px", a["margin-top"] = c / -2 + "px") : a.transform += " translateY(-50%)";
                break;
            case 6:
            case 7:
            case 8:
                a.bottom = 100 - b + "%"
        }
        g.Bl(this.element,
            a)
    };
    g.k.BG = function(a) {
        var b;
        for (b = 0; b < a.length && a[b] === this.D[b]; b++);
        if (this.Ba || this.D.length > b) b = 0, this.Ba = !1, this.D = [], this.I = this.La = this.Ia = null, g.kh(this.C);
        for (; b < a.length; b++) C3a(this, a[b])
    };
    g.k.dP = function() {
        return 0
    };
    g.k.cP = function() {
        return 0
    };
    g.k.toString = function() {
        return g.W.prototype.toString.call(this)
    };
    g.v(u5, g.gO);
    u5.prototype.lq = function(a, b, c) {
        l3a(this.videoData.videoId, a.vssId, c)
    };
    u5.prototype.uw = function(a) {
        if (this.audioTrack)
            for (var b = g.t(this.audioTrack.captionTracks), c = b.next(); !c.done; c = b.next()) g.fO(this.j, c.value);
        a()
    };
    g.v(v5, t5);
    v5.prototype.BG = function(a) {
        var b = this.u.j;
        t5.prototype.BG.call(this, a);
        for (a = a.length; a < b.length; a++) {
            var c = b[a];
            if (f && c.j === e) var d = f;
            else {
                d = {};
                Object.assign(d, c.j);
                Object.assign(d, I4a);
                var e = c.j;
                var f = d
            }
            C3a(this, c, d)
        }
    };
    var I4a = {
        ZZ: !0
    };
    g.v(w5, t5);
    g.k = w5.prototype;
    g.k.lS = function() {
        g.$n(this.Ta)
    };
    g.k.O2 = function() {
        g.io(this.element, "ytp-rollup-mode");
        this.Xw(this.Lb, !0)
    };
    g.k.cP = function() {
        return this.B ? this.Z : this.S
    };
    g.k.dP = function() {
        return this.B ? this.S : this.Z
    };
    g.k.Xw = function(a, b) {
        this.Lb = a;
        if (this.u.params.Qo) {
            for (var c = 0, d = 0; d < this.D.length && c < a.length; d++) this.D[d] === a[c] && c++;
            0 < c && c < a.length && (a = this.D.concat(a.slice(c)));
            this.rb = this.Z;
            this.S = this.Z = 0;
            t5.prototype.Xw.call(this, a);
            F3a(this, b)
        }
        t5.prototype.Xw.call(this, a)
    };
    g.v(x5, g.sA);
    x5.prototype.toString = function() {
        return g.sA.prototype.toString.call(this)
    };
    g.v(y5, g.sA);
    y5.prototype.toString = function() {
        return g.sA.prototype.toString.call(this)
    };
    var z5 = 0;
    g.v(A5, g.K);
    A5.prototype.u = function() {
        return []
    };
    A5.prototype.reset = function() {};
    g.v(B5, A5);
    B5.prototype.reset = function() {
        this.J = {};
        this.B = this.j = null;
        this.I = !0
    };
    B5.prototype.u = function(a, b) {
        a = a.firstChild;
        a.getAttribute("format");
        b = b || 0;
        Number.isFinite(b);
        a = Array.from(a.childNodes);
        a = g.t(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value, 1 === c.nodeType) switch (c.tagName) {
                case "head":
                    var d = c;
                    break;
                case "body":
                    var e = c
            }
        if (d)
            for (d = Array.from(d.childNodes), d = g.t(d), a = d.next(); !a.done; a = d.next())
                if (a = a.value, 1 === a.nodeType) switch (a.tagName) {
                    case "pen":
                        c = a.getAttribute("id");
                        var f = this.pens,
                            h = {},
                            l = a.getAttribute("p");
                        l && Object.assign(h, this.pens[l]);
                        l = D5(a, "b");
                        null != l && (h.bold = l);
                        l = D5(a, "i");
                        null != l && (h.italic = l);
                        l = D5(a, "u");
                        null != l && (h.underline = l);
                        l = E5(a, "et");
                        null != l && (h.charEdgeStyle = l);
                        l = E5(a, "of");
                        null != l && (h.offset = l);
                        l = G5(a, "bc");
                        null != l && (h.background = l);
                        l = G5(a, "ec");
                        null != l && (h.QG = l);
                        l = G5(a, "fc");
                        null != l && (h.color = l);
                        l = E5(a, "fs");
                        null != l && 0 !== l && (h.fontFamily = l);
                        l = C5(a, "sz");
                        void 0 !== l && (h.fontSizeIncrement = l / 100 - 1);
                        l = C5(a, "bo");
                        void 0 !== l && (h.backgroundOpacity = l / 255);
                        l = C5(a, "fo");
                        void 0 !== l && (h.textOpacity = l / 255);
                        l = E5(a, "rb");
                        null != l && 10 !== l &&
                            0 !== l && (h.gf = 10 < l ? l - 1 : l);
                        a = E5(a, "hg");
                        null != a && (h.JP = a);
                        f[c] = h;
                        break;
                    case "ws":
                        c = a.getAttribute("id");
                        this.Z[c] = J3a(this, a);
                        break;
                    case "wp":
                        c = a.getAttribute("id"), this.S[c] = K3a(this, a)
                }
        if (e) {
            d = [];
            e = Array.from(e.childNodes);
            e = g.t(e);
            for (a = e.next(); !a.done; a = e.next())
                if (a = a.value, 1 === a.nodeType) switch (a.tagName) {
                    case "w":
                        this.j = L3a(this, a, b, !1);
                        (a = this.J[this.j.id]) && a.end > this.j.start && (a.end = this.j.start);
                        this.J[this.j.id] = this.j;
                        d.push(this.j);
                        break;
                    case "p":
                        l = b;
                        c = [];
                        f = a.getAttribute("w") || this.D;
                        h = !!D5(a, "a");
                        l = (C5(a, "t") || 0) + l;
                        var m = C5(a, "d") || 5E3;
                        h || (!this.I && this.B && this.B.windowId === f && this.B.end > l && (this.B.end = l), this.B && "\n" === this.B.text && (this.B.text = ""));
                        var n = h ? 6 : 5,
                            p = a.getAttribute("p");
                        p = p ? this.pens[p] : null;
                        var q = Array.from(a.childNodes);
                        q.length && (this.I = null != a.getAttribute("d"));
                        for (var r = 0; r < q.length; r++) {
                            var w = q[r],
                                y = void 0;
                            0 < r && (h = !0);
                            var z = void 0;
                            1 === w.nodeType && (z = w);
                            if (z && "s" === z.tagName) {
                                if ((w = (w = z.getAttribute("p")) ? this.pens[w] : null) && w.gf && (1 === w.gf ? (w = q.slice(r, r +
                                        4), 4 === w.length && (y = I3a(l, m, f, h, n, w, this.pens), r += 3)) : y = I3a(l, m, f, h, n, [z], this.pens)), !y) {
                                    var B = z;
                                    y = l;
                                    z = m;
                                    w = f;
                                    var D = h,
                                        G = n,
                                        H = B.textContent ? B.textContent : "",
                                        L = B.getAttribute("p");
                                    L = L ? this.pens[L] : null;
                                    B = C5(B, "t") || 0;
                                    y = new x5(y + B, z - B, G, w, H, D, L)
                                }
                            } else y = new x5(l, m, n, f, w.textContent || "", h, p);
                            c.push(y);
                            this.B = y
                        }
                        if (0 < c.length)
                            for (c[0].windowId === this.D && (this.j = L3a(this, a, b, !0), d.push(this.j)), a = g.t(c), c = a.next(); !c.done; c = a.next()) c = c.value, c.windowId = this.j.id, this.j.j.push(c), d.push(c)
                }
            b = d
        } else b = [];
        return b
    };
    var J4a = new Map([
        [9, 1],
        [10, 1],
        [11, 2],
        [12, 3],
        [13, 4],
        [14, 5]
    ]);
    g.v(H5, A5);
    H5.prototype.reset = function() {
        this.B.clear()
    };
    H5.prototype.u = function(a, b) {
        var c = JSON.parse(a);
        if (!c) return [];
        if (c.pens) {
            a = 0;
            for (var d = g.t(c.pens), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = {},
                    h = e.pParentId;
                h && Object.assign(f, this.j.get(h));
                e.bAttr && (f.bold = !0);
                e.iAttr && (f.italic = !0);
                e.uAttr && (f.underline = !0);
                h = e.ofOffset;
                null != h && (f.offset = h);
                void 0 !== e.szPenSize && (f.fontSizeIncrement = e.szPenSize / 100 - 1);
                h = e.etEdgeType;
                null != h && (f.charEdgeStyle = h);
                void 0 !== e.ecEdgeColor && (f.QG = I5(e.ecEdgeColor));
                h = e.fsFontStyle;
                null != h && 0 !== h && (f.fontFamily =
                    h);
                void 0 !== e.fcForeColor && (f.color = I5(e.fcForeColor));
                void 0 !== e.foForeAlpha && (f.textOpacity = e.foForeAlpha / 255);
                void 0 !== e.bcBackColor && (f.background = I5(e.bcBackColor));
                void 0 !== e.boBackAlpha && (f.backgroundOpacity = e.boBackAlpha / 255);
                (h = e.rbRuby) && 10 !== h && (f.gf = 10 < h ? h - 1 : h, f.Gl = J4a.get(f.gf));
                e.hgHorizGroup && (f.JP = e.hgHorizGroup);
                this.j.set(a++, f)
            }
        }
        if (c.wsWinStyles)
            for (a = 0, d = g.t(c.wsWinStyles), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wsParentId) ? Object.assign(f, this.D.get(h)) : Object.assign(f,
                this.I), void 0 !== e.mhModeHint && (f.zw = e.mhModeHint), void 0 !== e.juJustifCode && (f.textAlign = e.juJustifCode), void 0 !== e.pdPrintDir && (f.jh = e.pdPrintDir), void 0 !== e.sdScrollDir && (f.gL = e.sdScrollDir), void 0 !== e.wfcWinFillColor && (f.windowColor = I5(e.wfcWinFillColor)), void 0 !== e.wfoWinFillAlpha && (f.windowOpacity = e.wfoWinFillAlpha / 255), this.D.set(a++, f);
        if (c.wpWinPositions)
            for (a = 0, d = g.t(c.wpWinPositions), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wpParentId) && Object.assign(f, this.C.get(h)), void 0 !== e.ahHorPos &&
                (f.Oi = e.ahHorPos), void 0 !== e.apPoint && (f.Zj = e.apPoint), void 0 !== e.avVerPos && (f.Hl = e.avVerPos), void 0 !== e.ccCols && (f.zp = e.ccCols), void 0 !== e.rcRows && (f.Qo = e.rcRows), this.C.set(a++, f);
        if (c.events) {
            a = [];
            c = g.t(c.events);
            for (d = c.next(); !d.done; d = c.next()) {
                var l = d.value;
                d = (l.tStartMs || 0) + b;
                e = l.dDurationMs || 0;
                if (l.id) f = String(l.id), d = M3a(this, l, d, e, f), a.push(d), this.B.set(f, d);
                else {
                    l.wWinId ? f = l.wWinId.toString() : (f = "_" + z5++, h = M3a(this, l, d, e, f), a.push(h), this.B.set(f, h));
                    0 === e && (e = 5E3);
                    h = this.B.get(f);
                    var m = !!l.aAppend,
                        n = m ? 6 : 5,
                        p = l.segs,
                        q = null;
                    l.pPenId && (q = this.j.get(l.pPenId));
                    for (l = 0; l < p.length; l++) {
                        var r = p[l],
                            w = r.utf8;
                        if (w) {
                            var y = r.tOffsetMs || 0,
                                z = null;
                            r.pPenId && (z = this.j.get(r.pPenId));
                            if (2 === (null != h.params.zw ? h.params.zw : 1 < h.j.length ? 1 : 0) && m && "\n" === w) continue;
                            if (r = z && 1 === z.gf)
                                if (r = l, r + 3 >= p.length || !p[r + 1].pPenId || !p[r + 2].pPenId || !p[r + 3].pPenId) r = !1;
                                else {
                                    var B = p[r + 1].pPenId;
                                    (B = this.j.get(B)) && B.gf && 2 === B.gf ? (B = p[r + 2].pPenId, B = this.j.get(B), !B || !B.gf || 3 > B.gf ? r = !1 : (B = p[r + 3].pPenId, r = (B = this.j.get(B)) &&
                                        B.gf && 2 === B.gf ? !0 : !1)) : r = !1
                                }
                            if (r) {
                                y = p[l + 1].utf8;
                                r = p[l + 3].utf8;
                                B = p[l + 2].utf8;
                                var D = this.j.get(p[l + 2].pPenId);
                                w = H3a(w, y, B, r, D);
                                m = new x5(d, e, n, f, w, m, z);
                                l += 3
                            } else m = new x5(d + y, e - y, n, h.id, w, m, z || q);
                            m && (a.push(m), h.j.push(m))
                        }
                        m = !0
                    }
                }
            }
            b = a
        } else b = [];
        return b
    };
    O3a.prototype.clear = function() {
        this.B = this.time = this.mode = 0;
        this.j = [];
        this.reset()
    };
    O3a.prototype.reset = function() {
        this.mode = 0;
        this.C.reset(0);
        this.D.reset(1)
    };
    var P3a = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139,
        12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255
    ];
    J5.prototype.set = function(a) {
        this.type = a
    };
    J5.prototype.get = function() {
        return this.type
    };
    K5.prototype.clear = function() {
        this.state = 0
    };
    K5.prototype.update = function() {
        this.state = 2 === this.state ? 1 : 0
    };
    K5.prototype.isValid = function() {
        return 0 !== this.state
    };
    K5.prototype.matches = function(a, b) {
        return this.isValid() && a === this.Mr && b === this.wp
    };
    U3a.prototype.reset = function() {
        this.timestamp = this.j = 0
    };
    L5.prototype.updateTime = function(a) {
        for (var b = 1; 15 >= b; ++b)
            for (var c = 1; 32 >= c; ++c) this.B[b][c].timestamp = a
    };
    L5.prototype.debugString = function() {
        for (var a = "\n", b = 1; 15 >= b; ++b) {
            for (var c = 1; 32 >= c; ++c) {
                var d = this.B[b][c];
                a = 0 === d.j ? a + "_" : a + String.fromCharCode(d.j)
            }
            a += "\n"
        }
        return a
    };
    L5.prototype.reset = function(a) {
        for (var b = 0; 15 >= b; b++)
            for (var c = 0; 32 >= c; c++) this.B[b][c].reset();
        this.C = a;
        this.j = 0;
        this.u = this.row = 1
    };
    var V3a = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
        W3a = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
        X3a = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235,
            206, 207, 239, 212, 217, 249, 219, 171, 187
        ],
        Y3a = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499];
    b4a.prototype.reset = function(a, b) {
        this.D = b;
        this.style.set(2);
        this.u = this.I;
        this.C = this.J;
        this.j = this.u;
        var c = (a << 2) + (b << 1);
        this.I.reset(c);
        this.J.reset(c);
        this.text.reset((a << 2) + (b << 1) + 1)
    };
    N3a.prototype.reset = function(a) {
        this.D = a;
        this.u.clear();
        this.C = this.B;
        this.B.reset(a, 0);
        this.I.reset(a, 1)
    };
    f4a.prototype.C = function() {};
    g.v(Q5, f4a);
    Q5.prototype.C = function(a, b, c, d, e) {
        if (c < d) {
            var f = "_" + z5++;
            c = c / 1E3 - this.I;
            d = d / 1E3 - this.I;
            a = new y5(c, d - c, 5, f, {
                textAlign: 0,
                Zj: 0,
                Oi: 2.5 * b,
                Hl: 5.33 * a
            });
            e = new x5(c, d - c, 5, f, e);
            this.u.push(a);
            this.u.push(e)
        }
    };
    g.v(T5, A5);
    T5.prototype.u = function(a) {
        a = new Q5(a, a.byteLength, this.B);
        if (g4a(a)) {
            for (; a.byteOffset < a.j.byteLength;)
                for (0 === a.version ? a.B = S5(a) * (1E3 / 45) : 1 === a.version && (a.B = 4294967296 * S5(a) + S5(a)), a.D = R5(a); 0 < a.D; a.D--) {
                    var b = R5(a),
                        c = R5(a),
                        d = R5(a);
                    b & 4 && (b & 3) === this.track && (0 === this.track || 1 === this.track) && (b = this.j, b.j.push({
                        time: a.B,
                        type: this.track,
                        iO: c,
                        jO: d,
                        order: b.j.length
                    }))
                }
            T3a(this.j, a);
            return a.u
        }
        return []
    };
    T5.prototype.reset = function() {
        this.j.clear()
    };
    g.v(U5, A5);
    U5.prototype.u = function(a, b) {
        var c = [];
        a = a.split(K4a);
        for (var d = 1; d < a.length; d++) {
            var e = a[d],
                f = b;
            if ("" !== e && !L4a.test(e)) {
                var h = M4a.exec(e);
                if (h && 4 <= h.length) {
                    var l = j4a(h[1]),
                        m = j4a(h[2]) - l;
                    l += f;
                    var n = (h = h[3]) ? h.split(" ") : [];
                    h = {};
                    var p = null;
                    var q = "";
                    var r = null,
                        w = "";
                    n = g.t(n);
                    for (var y = n.next(); !y.done; y = n.next())
                        if (y = y.value.split(":"), 2 === y.length) {
                            var z = y[1];
                            switch (y[0]) {
                                case "line":
                                    y = z.split(",");
                                    y[0].endsWith("%") && (p = y[0], h.Hl = Number.parseInt(p, 10), 2 === y.length && (q = y[1].trim()));
                                    break;
                                case "position":
                                    y =
                                        z.split(",");
                                    r = y[0];
                                    h.Oi = Number.parseInt(r, 10);
                                    2 === y.length && (w = y[1].trim());
                                    break;
                                case "align":
                                    switch (z) {
                                        case "start":
                                            h.textAlign = 0;
                                            break;
                                        case "middle":
                                            h.textAlign = 2;
                                            break;
                                        case "end":
                                            h.textAlign = 1
                                    }
                            }
                        }
                    p || q || (q = "end");
                    if (!r) switch (h.textAlign) {
                        case 0:
                            h.Oi = 0;
                            break;
                        case 1:
                            h.Oi = 100;
                            break;
                        case 2:
                            h.Oi = 50
                    }
                    if (null != h.textAlign) {
                        p = 0;
                        switch (q) {
                            case "center":
                                p += 3;
                                break;
                            case "end":
                                p += 6;
                                break;
                            default:
                                p += 0
                        }
                        switch (w) {
                            case "line-left":
                                p += 0;
                                break;
                            case "center":
                                p += 1;
                                break;
                            case "line-right":
                                p += 2;
                                break;
                            default:
                                switch (h.textAlign) {
                                    case 0:
                                        p +=
                                            0;
                                        break;
                                    case 2:
                                        p += 1;
                                        break;
                                    case 1:
                                        p += 2
                                }
                        }
                        q = 0 > p || 8 < p ? 7 : p;
                        h.Zj = q
                    }
                    e = e.substring(M4a.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
                    w = h;
                    h = e;
                    e = {};
                    if (0 > h.indexOf("<") && 0 > h.indexOf("&")) f = k4a(l, m, 5, w), m = new x5(l, m, 5, f.id, h, !1, g.Df(e) ? void 0 : e), c.push(f), c.push(m), f.j.push(m);
                    else
                        for (q = h.split(N4a), 1 === q.length ? (h = 5, w = k4a(l, m, h, w)) : (p = h = 6, w = Object.assign({
                                zp: 32
                            }, w), w = new y5(l, m, p, "_" + z5++, w)), c.push(w), p = l, r = 0; r < q.length; r++) n = q[r], 0 === r % 2 ? (y = g.aYa("<html>" + n + "</html>"), y.getElementsByTagName("parsererror").length ?
                            (z = y.createElement("span"), z.appendChild(y.createTextNode(n))) : z = y.firstChild, i4a(this, p, m - (p - l), h, w, 0 < r, z, e, c)) : p = j4a(n) + f
                }
                M4a.lastIndex = 0
            }
        }
        return c
    };
    var L4a = /^NOTE/,
        K4a = /(?:\r\n|\r|\n){2,}/,
        M4a = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm"),
        N4a = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
    g.rS.ZC(U5, {
        u: "wvppt"
    });
    g.v(V5, g.K);
    V5.prototype.clear = function() {
        this.parser && this.parser.dispose();
        this.parser = null
    };
    V5.prototype.reset = function() {
        this.parser && this.parser.reset()
    };
    V5.prototype.ra = function() {
        g.K.prototype.ra.call(this);
        this.clear()
    };
    var d6 = {
        windowColor: "#080808",
        windowOpacity: 0,
        textAlign: 2,
        Zj: 7,
        Oi: 50,
        Hl: 100,
        isDefault: !0,
        Ud: {
            background: "#080808",
            backgroundOpacity: .75,
            charEdgeStyle: 0,
            color: "#fff",
            fontFamily: 4,
            fontSizeIncrement: 0,
            textOpacity: 1,
            offset: 1
        }
    };
    g.v(W5, g.dO);
    g.k = W5.prototype;
    g.k.ra = function() {
        if (this.C || this.Z) {
            var a = this.G.Qd();
            a && !a.isDisposed() && a.xv()
        } else H4a(this, !1);
        g.dO.prototype.ra.call(this)
    };
    g.k.Mt = function() {
        if (this.Qa) return this.C || this.Z;
        var a = h3a(this.player.getAudioTrack(), i3a(this.Y));
        return "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === a ? !0 : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === a ? X5(this) : y4a(this) || X5(this) ? !0 : z4a(this)
    };
    g.k.load = function() {
        var a = this;
        g.dO.prototype.load.call(this);
        var b = !this.Y.K("web_player_captions_track_list_changed_killswitch");
        this.I = this.player.getAudioTrack();
        this.u ? (this.j && (this.Ta.clear(), this.C ? C4a(this, !0) : 3 !== this.player.getPresentingPlayerType() && this.u.lq(this.j, "json3", function(c, d, e, f) {
            if (c) {
                a.u.dK() && (a.ya = [], a.G.Ff("captions"), g.Xn(a.Aa), a.Ta.reset());
                c = q4a(a.Ta, c, d, e, f);
                a.player.oe(c, void 0, a.bb);
                if (!(!a.ea || a.Z || $5(a) || g.bG(a.Y) || g.TF(a.Y))) {
                    g.ao(a.Ba);
                    c = G3a({
                        Zj: 0,
                        Oi: 5,
                        Hl: 5,
                        Qo: 2,
                        textAlign: 0,
                        jh: 1,
                        lang: "ar"
                    });
                    a.Ia = [c];
                    e = ["\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 ", " \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a"];
                    a.jb || (f = new g.UK(g.lL()), g.N(a, f), a.jb = f.element);
                    f = c.end - c.start;
                    var h = g.IG(a.j);
                    h && a.Ia.push(new x5(c.start, f, 0, c.id, h));
                    a.Ia.push(new x5(c.start, f, 0, c.id, e[0]), new x5(c.start, f, 0, c.id, a.jb, !0), new x5(c.start, f, 0, c.id, e[1], !0));
                    a.player.oe(a.Ia);
                    g.Zn(a.Ba)
                }!a.ea || a.Z || $5(a) || (g.oG(a.Y) ? b6(a, !0) : c6(a, "module-enabled", !0), a.I && (a.I.C = a.j), a.player.Xt());
                var l;
                null == (l = a.G.Jc()) || l.va("cc", {
                    kind: d.kind
                });
                a.ea = !1
            }
        }), !b || this.C || this.Z || $5(this) || this.player.Pa("captionschanged", g.JG(this.j))), b || (this.j && !$5(this) ? this.player.Pa("captionschanged", g.JG(this.j)) : this.player.Pa("onCaptionsTrackListChanged"))) : (this.u = A4a(this), g.N(this, this.u), this.u.uw(function() {
            B4a(a)
        }))
    };
    g.k.unload = function() {
        this.C && this.j ? C4a(this, !1) : (this.Ba && g.ao(this.Ba), this.player.Ff("captions"), this.ya = [], this.u && this.u.Zo(), this.Ta.clear(), this.J && this.player.oe(this.J), this.CL());
        g.dO.prototype.unload.call(this);
        this.player.Xt();
        this.player.Pa("captionschanged", {})
    };
    g.k.create = function() {
        this.Mt() && this.load()
    };
    g.k.A3 = function() {
        for (var a = this.G.Qd().yf().textTracks, b = null, c = 0; c < a.length; c++)
            if ("showing" === a[c].mode) a: {
                b = a[c].id;
                for (var d = g.eO(this.u.j, !0), e = 0; e < d.length; e++)
                    if (d[e].toString() === b) {
                        b = d[e];
                        break a
                    }
                b = null
            }(this.loaded ? this.j : null) !== b && a6(this, b, !0)
    };
    g.k.o6 = function() {
        !this.j && this.C || this.unload()
    };
    g.k.onCueRangeEnter = function(a) {
        this.ya.push(a);
        g.Xn(this.Aa)
    };
    g.k.onCueRangeExit = function(a) {
        g.$b(this.ya, a);
        this.u instanceof s5 && this.u.I && this.player.hh([a]);
        g.Xn(this.Aa)
    };
    g.k.getCaptionWindowContainerId = function() {
        return this.Xa.element.id
    };
    g.k.w4 = function() {
        G4a(this, this.Ia);
        this.Ia = null
    };
    g.k.AL = function() {
        var a = this;
        if (!this.zb || !this.C) {
            this.Aa.stop();
            g.Fca(this.La);
            this.ya.sort(g.tA);
            var b = this.ya;
            if (this.J) {
                var c = g.wm(b, function(f) {
                    return -1 === this.J.indexOf(f)
                }, this);
                c.length && (b = c)
            }
            b = g.t(b);
            for (c = b.next(); !c.done; c = b.next()) E4a(this, c.value);
            b = {};
            c = g.t(Object.entries(this.S));
            for (var d = c.next(); !d.done; b = {
                    Yq: b.Yq,
                    Sk: b.Sk
                }, d = c.next()) {
                var e = g.t(d.value);
                d = e.next().value;
                e = e.next().value;
                b.Yq = d;
                b.Sk = e;
                this.La[b.Yq] ? (b.Sk.element.parentNode || (b.Sk instanceof w5 || b.Sk instanceof v5 || g.pf(this.S, function(f) {
                    return function(h, l) {
                        l !== f.Yq && h.u.params.Zj === f.Sk.u.params.Zj && h.u.params.Oi === f.Sk.u.params.Oi && h.u.params.Hl === f.Sk.u.params.Hl && (h.dispose(), delete a.S[l]);
                        return l === f.Yq
                    }
                }(b), this), F4a(this, b.Sk.element)), b.Sk.Xw(this.La[b.Yq])) : (b.Sk.dispose(), delete this.S[b.Yq])
            }
        }
    };
    g.k.C4 = function() {
        u4a(this, {}, !0);
        this.Y.K("web_player_disable_publish_captions_settings_changed_on_reset") || this.player.Pa("captionssettingschanged")
    };
    g.k.vZ = function() {
        var a = d6.Ud;
        a = {
            background: a.background,
            backgroundOpacity: a.backgroundOpacity,
            charEdgeStyle: a.charEdgeStyle,
            color: a.color,
            fontFamily: a.fontFamily,
            fontSizeIncrement: a.fontSizeIncrement,
            fontStyle: a.bold && a.italic ? 3 : a.bold ? 1 : a.italic ? 2 : 0,
            textOpacity: a.textOpacity,
            windowColor: d6.windowColor,
            windowOpacity: d6.windowOpacity
        };
        var b = v4a(this) || {};
        null != b.background && (a.background = b.background);
        null != b.backgroundOverride && (a.backgroundOverride = b.backgroundOverride);
        null != b.backgroundOpacity &&
            (a.backgroundOpacity = b.backgroundOpacity);
        null != b.backgroundOpacityOverride && (a.backgroundOpacityOverride = b.backgroundOpacityOverride);
        null != b.charEdgeStyle && (a.charEdgeStyle = b.charEdgeStyle);
        null != b.charEdgeStyleOverride && (a.charEdgeStyleOverride = b.charEdgeStyleOverride);
        null != b.color && (a.color = b.color);
        null != b.colorOverride && (a.colorOverride = b.colorOverride);
        null != b.fontFamily && (a.fontFamily = b.fontFamily);
        null != b.fontFamilyOverride && (a.fontFamilyOverride = b.fontFamilyOverride);
        null != b.fontSizeIncrement &&
            (a.fontSizeIncrement = b.fontSizeIncrement);
        null != b.fontSizeIncrementOverride && (a.fontSizeIncrementOverride = b.fontSizeIncrementOverride);
        null != b.fontStyle && (a.fontStyle = b.fontStyle);
        null != b.fontStyleOverride && (a.fontStyleOverride = b.fontStyleOverride);
        null != b.textOpacity && (a.textOpacity = b.textOpacity);
        null != b.textOpacityOverride && (a.textOpacityOverride = b.textOpacityOverride);
        null != b.windowColor && (a.windowColor = b.windowColor);
        null != b.windowColorOverride && (a.windowColorOverride = b.windowColorOverride);
        null != b.windowOpacity && (a.windowOpacity = b.windowOpacity);
        null != b.windowOpacityOverride && (a.windowOpacityOverride = b.windowOpacityOverride);
        return a
    };
    g.k.vT = function(a, b) {
        var c = {};
        Object.assign(c, v4a(this));
        Object.assign(c, a);
        u4a(this, c, b);
        this.player.Pa("captionssettingschanged")
    };
    g.k.CL = function() {
        !this.C && this.loaded && (g.mf(this.S, function(a, b) {
            a.dispose();
            delete this.S[b]
        }, this), this.AL())
    };
    g.k.zg = function(a, b) {
        switch (a) {
            case "fontSize":
                if (isNaN(b)) break;
                var c = g.Fg(b, -2, 4);
                this.vT({
                    fontSizeIncrement: c
                });
                return c;
            case "reload":
                b && !this.C && a6(this, this.j, !0);
                break;
            case "stickyLoading":
                void 0 !== b && this.Y.C && (g.oG(this.Y) ? b6(this, !!b) : c6(this, "module-enabled", !!b));
                break;
            case "track":
                if (!this.u) return {};
                if (b) {
                    if (this.C) break;
                    if (!g.Na(b)) break;
                    if (g.Df(b)) {
                        a6(this, null, !0);
                        break
                    }
                    a = g.eO(this.u.j, !0);
                    for (var d = 0; d < a.length; d++) {
                        var e = a[d];
                        e.languageCode !== b.languageCode || c && e.languageName !==
                            b.languageName || (c = b.translationLanguage ? j3a(e, b.translationLanguage) : e)
                    }!c || c === this.j && this.loaded || (b = g.qya(), a = g.KG(c), b.length && a === b[b.length - 1] || (b.push(a), g.Pz("yt-player-caption-language-preferences", b)), a6(this, c, !0))
                } else return this.loaded && this.j && !$5(this) ? g.JG(this.j) : {};
                return "";
            case "tracklist":
                return this.u ? g.Pk(g.eO(this.u.j, !(!b || !b.includeAsr)), function(f) {
                    return g.JG(f)
                }) : [];
            case "translationLanguages":
                return this.u ? this.u.C.map(function(f) {
                    return Object.assign({}, f)
                }) : [];
            case "sampleSubtitles":
                this.C || void 0 === b || H4a(this, !!b);
                break;
            case "sampleSubtitlesCustomized":
                this.C || H4a(this, !!b, b)
        }
    };
    g.k.getOptions = function() {
        var a = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
        this.Y.C && a.push("stickyLoading");
        return a
    };
    g.k.cI = function() {
        var a = this.j;
        if (a) {
            var b = a.vssId;
            a.translationLanguage && b && !this.Y.K("auto_translation_logging_killswitch") && (b = "t" + b + "." + g.KG(a));
            return {
                cc: b
            }
        }
        return {}
    };
    g.k.T5 = function() {
        this.loaded && this.j && !$5(this) ? (g.oG(this.Y) ? b6(this, !1) : c6(this, "module-enabled", !1), this.unload(), X5(this, !0) && a6(this, Y5(this), !1)) : this.aT()
    };
    g.k.aT = function() {
        this.loaded && this.j && !$5(this) || a6(this, $5(this) || !this.j ? Z5(this, !0) : this.j, !0)
    };
    g.k.V0 = function() {
        var a = $5(this);
        X5(this, a) ? a6(this, this.player.getAudioTrack().j, !1) : this.videoData.captionTracks.length && (this.loaded && this.unload(), this.Mt() && (a ? a6(this, Z5(this), !1) : this.load()))
    };
    g.k.P1 = function() {
        var a = this.G.Qd();
        a && !a.isDisposed() && a.xv();
        this.G.isFullscreen() ? (this.C = this.Qa = !0, this.loaded && B4a(this)) : (this.Qa = "3" === this.Y.controlsType, this.C = t4a(this));
        a6(this, this.j)
    };
    g.rS.ZC(W5, {
        AL: "smucd"
    });
    g.cO("captions", W5);
})(_yt_player);