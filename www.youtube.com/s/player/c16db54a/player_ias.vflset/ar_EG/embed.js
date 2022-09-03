(function(g) {
    var window = this;
    'use strict';
    var O4a = function(a, b) {
            var c = (b - a.j) / (a.u - a.j);
            if (0 >= c) return 0;
            if (1 <= c) return 1;
            for (var d = 0, e = 1, f = 0, h = 0; 8 > h; h++) {
                f = g.yo(a, c);
                var l = (g.yo(a, c + 1E-6) - f) / 1E-6;
                if (1E-6 > Math.abs(f - b)) return c;
                if (1E-6 > Math.abs(l)) break;
                else f < b ? d = c : e = c, c -= (f - b) / l
            }
            for (h = 0; 1E-6 < Math.abs(f - b) && 8 > h; h++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = g.yo(a, c);
            return c
        },
        P4a = function() {
            return {
                F: "svg",
                X: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                W: [{
                    F: "path",
                    Ob: !0,
                    N: "ytp-svg-fill",
                    X: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        e6 = function(a) {
            g.K.call(this);
            this.callback = a;
            this.j = new g.xo(0, 0, .4, 0, .2, 1, 1, 1);
            this.delay = new g.Wn(this.next, window, this);
            this.startTime = this.duration = this.to = this.from = NaN;
            g.N(this, this.delay)
        },
        R4a = function(a) {
            g.W.call(this, {
                F: "div",
                N: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.D = this.B = 0;
            this.C = new g.YD(this);
            this.u = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.title = new g.W({
                F: "h2",
                N: "ytp-related-title",
                qa: "{{title}}"
            });
            this.previous = new g.W({
                F: "button",
                Fa: ["ytp-button", "ytp-previous"],
                X: {
                    "aria-label": "\u0639\u0631\u0636 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a \u0627\u0644\u0645\u0642\u062a\u0631\u062d\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629"
                },
                W: [g.cL()]
            });
            this.S = new e6(function(f) {
                Q4a(b,
                    f)
            });
            this.tileWidth = this.j = 0;
            this.I = !0;
            this.next = new g.W({
                F: "button",
                Fa: ["ytp-button", "ytp-next"],
                X: {
                    "aria-label": "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a \u0627\u0644\u0645\u0642\u062a\u0631\u062d\u0629"
                },
                W: [g.bL()]
            });
            g.N(this, this.C);
            a = a.V();
            this.J = a.u;
            g.N(this, this.title);
            this.title.Da(this.element);
            this.suggestions = new g.W({
                F: "div",
                N: "ytp-suggestions"
            });
            g.N(this, this.suggestions);
            this.suggestions.Da(this.element);
            g.N(this, this.previous);
            this.previous.Da(this.element);
            this.previous.Ra("click", this.DU, this);
            g.N(this, this.S);
            for (var c = {
                    ju: 0
                }; 16 > c.ju; c = {
                    ju: c.ju
                }, c.ju++) {
                var d = new g.W({
                    F: "a",
                    N: "ytp-suggestion-link",
                    X: {
                        href: "{{link}}",
                        target: a.J,
                        "aria-label": "{{aria_label}}"
                    },
                    W: [{
                        F: "div",
                        N: "ytp-suggestion-image",
                        W: [{
                            F: "div",
                            X: {
                                "data-is-live": "{{is_live}}"
                            },
                            N: "ytp-suggestion-duration",
                            qa: "{{duration}}"
                        }]
                    }, {
                        F: "div",
                        N: "ytp-suggestion-title",
                        X: {
                            title: "{{hover_title}}"
                        },
                        qa: "{{title}}"
                    }, {
                        F: "div",
                        N: "ytp-suggestion-author",
                        qa: "{{views_or_author}}"
                    }]
                });
                g.N(this, d);
                d.Da(this.suggestions.element);
                var e = d.Ca("ytp-suggestion-link");
                g.Bl(e, "transitionDelay", c.ju / 20 + "s");
                this.C.T(e, "click", function(f) {
                    return function(h) {
                        var l = b.suggestionData[f.ju],
                            m = l.sessionData;
                        g.EO(h, b.api, b.J, m || void 0) && b.api.Ml(l.videoId, m, l.playlistId)
                    }
                }(c));
                this.u.push(d)
            }
            g.N(this, this.next);
            this.next.Da(this.element);
            this.next.Ra("click", this.CU, this);
            this.C.T(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.fb().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        S4a = function(a) {
            return a.suggestionData.length * (a.tileWidth + a.B)
        },
        Q4a = function(a, b) {
            b = a.containerWidth - S4a(a) - b;
            a.suggestions.element.scrollLeft = -b
        },
        T4a = function(a) {
            a.next.element.style.bottom = a.D + "px";
            a.previous.element.style.bottom = a.D + "px";
            var b = a.j,
                c = a.containerWidth - S4a(a);
            g.ko(a.element, "ytp-scroll-min", 0 <= b);
            g.ko(a.element, "ytp-scroll-max", b <= c)
        },
        U4a = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.u[a.suggestionData.length - b - 1],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.Km(),
                    h = a.api.V();
                if (g.LF(h)) {
                    var l = {};
                    h.ya && g.cN(l, h.loaderUrl);
                    f = g.xi(f, g.bN(l, "emb_rel_err"))
                }
                d.element.style.display = "";
                h = d.Ca("ytp-suggestion-title");
                g.vo.test(c.title) ? h.dir = "rtl" : g.qZa.test(c.title) && (h.dir = "ltr");
                h = d.Ca("ytp-suggestion-author");
                g.vo.test(e) ? h.dir = "rtl" : g.qZa.test(e) && (h.dir = "ltr");
                d.update({
                    views_or_author: e,
                    duration: c.isLivePlayback ? "\u0645\u0628\u0627\u0634\u0631" : c.lengthSeconds ? g.XL(c.lengthSeconds) : "",
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback
                });
                d = d.Ca("ytp-suggestion-image");
                c = c.Lf();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.u.length; b++) a.u[b].element.style.display = "none";
            T4a(a)
        },
        f6 = function(a) {
            g.JO.call(this, a);
            var b = this;
            this.j = null;
            var c = a.V(),
                d = {
                    F: "svg",
                    X: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    W: [{
                        F: "path",
                        X: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        F: "path",
                        X: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                };
            g.WF(c) && (d = {
                F: "svg",
                X: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 25 25",
                    width: "100%"
                },
                W: [{
                        F: "g",
                        X: {
                            "clip-path": "url(#clip0)",
                            fill: "#fff"
                        },
                        W: [{
                            F: "path",
                            X: {
                                d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"
                            }
                        }, {
                            F: "path",
                            X: {
                                d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"
                            }
                        }]
                    },
                    {
                        F: "defs",
                        W: [{
                            F: "clipPath",
                            X: {
                                id: "clip0"
                            },
                            W: [{
                                F: "path",
                                X: {
                                    d: "M0 0h24v24H0z",
                                    fill: "#fff",
                                    transform: "translate(.57 .5)"
                                }
                            }]
                        }]
                    }
                ]
            });
            var e = {
                    target: c.J
                },
                f = ["ytp-small-redirect"];
            if (c.B) f.push("no-link");
            else {
                var h = g.uG(c);
                c.ya && (h = V4a(h, c.loaderUrl));
                e.href = h;
                e["aria-label"] = "\u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0625\u0644\u0649 YouTube \u0644\u0644\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a"
            }
            c =
                new g.W({
                    F: "a",
                    Fa: f,
                    X: e,
                    W: [d]
                });
            c.Da(this.element);
            g.N(this, c);
            a.V().B || (this.j = new R4a(a), this.j.Da(this.element), g.N(this, this.j));
            this.T(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.fb().getPlayerSize())
        },
        W4a = function(a, b) {
            a.Ca("ytp-error-content").style.paddingTop = "0px";
            var c = a.Ca("ytp-error-content"),
                d = c.clientHeight;
            a.j.resize(b, b.height - d);
            c.style.paddingTop = (b.height - a.j.element.clientHeight) / 2 - d / 2 + "px"
        },
        Y4a = function(a, b) {
            var c = a.api.V(),
                d;
            b.reason && (X4a(b.reason) ? d = g.AA(b.reason) : d = g.KO(g.zA(b.reason)), a.Sd(d, "content"));
            var e;
            b.subreason && (X4a(b.subreason) ? e = g.AA(b.subreason) : e = g.KO(g.zA(b.subreason)), a.Sd(e, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer && (a = a.Ca("ytp-error-content-wrap-subreason"), d = b.proceedButton.buttonRenderer, b = g.ih("A"), d.text && d.text.simpleText)) {
                e = d.text.simpleText;
                b.textContent = e;
                a: {
                    for (var f = g.ah("A", a), h = 0; h < f.length; h++)
                        if (f[h].textContent === e) {
                            e = !0;
                            break a
                        }
                    e = !1
                }
                if (!e && (!c.B || c.embedsErrorLinks)) {
                    var l,
                        m;
                    e = null == d ? void 0 : null == (l = d.navigationEndpoint) ? void 0 : null == (m = l.urlEndpoint) ? void 0 : m.url;
                    var n, p;
                    l = null == d ? void 0 : null == (n = d.navigationEndpoint) ? void 0 : null == (p = n.urlEndpoint) ? void 0 : p.target;
                    e && (c.ya && (e = V4a(e, c.loaderUrl)), b.setAttribute("href", e));
                    l && b.setAttribute("target", l);
                    c = g.ih("DIV");
                    c.appendChild(b);
                    a.appendChild(c)
                }
            }
        },
        X4a = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        V4a = function(a, b) {
            var c = {};
            g.cN(c, b);
            return g.xi(a, c)
        },
        g6 = function(a, b) {
            g.W.call(this, {
                F: "a",
                Fa: ["ytp-impression-link"],
                X: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "\u0627\u0644\u0645\u0634\u0627\u0647\u062f\u0629 \u0639\u0644\u0649 YouTube"
                },
                W: [{
                    F: "div",
                    N: "ytp-impression-link-content",
                    X: {
                        "aria-hidden": "true"
                    },
                    W: [{
                        F: "div",
                        N: "ytp-impression-link-text",
                        qa: "\u0627\u0644\u0645\u0634\u0627\u0647\u062f\u0629 \u0639\u0644\u0649"
                    }, {
                        F: "div",
                        N: "ytp-impression-link-logo",
                        W: [P4a()]
                    }]
                }]
            });
            this.api = a;
            this.u = b;
            this.Oa("target", a.V().J);
            this.api.vb(this.element, this, 96714);
            this.T(this.api, "presentingplayerstatechange",
                this.Bh);
            this.T(this.api, "videoplayerreset", this.j);
            this.T(this.element, "click", this.onClick);
            this.j()
        },
        Z4a = function(a) {
            var b = {};
            a.api.V().ya && g.cN(b, a.api.V().loaderUrl);
            return g.xi(a.api.getVideoUrl(), g.bN(b, "emb_imp_woyt"))
        },
        h6 = function(a) {
            g.W.call(this, {
                F: "div",
                Fa: ["ytp-mobile-a11y-hidden-seek-button"],
                W: [{
                    F: "button",
                    Fa: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                    X: {
                        "aria-label": "\u062a\u0631\u062c\u064a\u0639 \u0628\u0645\u0642\u062f\u0627\u0631 10 \u062b\u0648\u0627\u0646\u064d",
                        "aria-hidden": "false"
                    }
                }, {
                    F: "button",
                    Fa: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                    X: {
                        "aria-label": "\u062a\u0642\u062f\u064a\u0645 \u0633\u0631\u064a\u0639 \u0628\u0645\u0642\u062f\u0627\u0631 10 \u062b\u0648\u0627\u0646\u064d",
                        "aria-hidden": "false"
                    }
                }]
            });
            this.api = a;
            this.j = this.Ca("ytp-mobile-a11y-hidden-seek-button-rewind");
            this.forwardButton = this.Ca("ytp-mobile-a11y-hidden-seek-button-forward");
            this.api.vb(this.j, this, 141902);
            this.api.vb(this.forwardButton, this, 141903);
            this.T(this.api, "presentingplayerstatechange", this.Bh);
            this.T(this.j, "click", this.u);
            this.T(this.forwardButton, "click", this.B);
            this.Bh()
        },
        i6 = function(a) {
            g.W.call(this, {
                F: "div",
                N: "ytp-muted-autoplay-endscreen-overlay",
                W: [{
                    F: "div",
                    N: "ytp-muted-autoplay-end-panel",
                    W: [{
                        F: "div",
                        N: "ytp-muted-autoplay-end-text",
                        qa: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.B = this.Ca("ytp-muted-autoplay-end-panel");
            this.j = new g.CO(this.api);
            g.N(this, this.j);
            this.j.Da(this.B, 0);
            this.api.vb(this.element, this, 52428);
            this.T(this.api, "presentingplayerstatechange", this.u);
            this.Ra("click", this.onClick);
            this.hide()
        },
        j6 = function(a) {
            g.W.call(this, {
                F: "div",
                N: "ytp-muted-autoplay-overlay",
                W: [{
                    F: "div",
                    N: "ytp-muted-autoplay-bottom-buttons",
                    W: [{
                        F: "button",
                        Fa: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        W: [{
                            F: "div",
                            Fa: ["ytp-muted-autoplay-equalizer-icon"],
                            W: [{
                                F: "svg",
                                X: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                W: [{
                                    F: "g",
                                    X: {
                                        fill: "#fff"
                                    },
                                    W: [{
                                        F: "rect",
                                        N: "ytp-equalizer-bar-left",
                                        X: {
                                            height: "9",
                                            width: "4",
                                            x: "1",
                                            y: "7"
                                        }
                                    }, {
                                        F: "rect",
                                        N: "ytp-equalizer-bar-middle",
                                        X: {
                                            height: "14",
                                            width: "4",
                                            x: "6",
                                            y: "2"
                                        }
                                    }, {
                                        F: "rect",
                                        N: "ytp-equalizer-bar-right",
                                        X: {
                                            height: "12",
                                            width: "4",
                                            x: "11",
                                            y: "4"
                                        }
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            this.api = a;
            this.bottomButtons = this.Ca("ytp-muted-autoplay-bottom-buttons");
            this.Ca("ytp-muted-autoplay-equalizer");
            this.B = new g.Yn(this.u, 4E3, this);
            a.vb(this.element, this, 39306);
            this.T(a, "presentingplayerstatechange", this.j);
            this.T(a, "onMutedAutoplayStarts", this.j);
            this.Ra("click", this.onClick);
            this.hide()
        },
        a5a = function(a, b) {
            g.W.call(this, {
                F: "div",
                N: "ytp-pause-overlay",
                X: {
                    tabIndex: "-1"
                }
            });
            var c = this;
            this.api = a;
            this.I = b;
            this.j = new g.YD(this);
            this.C = new g.JL(this, 1E3, !1, 100);
            this.B = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.D = !1;
            this.ea = 0;
            this.title = new g.W({
                F: "h2",
                N: "ytp-related-title",
                qa: "{{title}}"
            });
            this.previous = new g.W({
                F: "button",
                Fa: ["ytp-button", "ytp-previous"],
                X: {
                    "aria-label": "\u0639\u0631\u0636 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a \u0627\u0644\u0645\u0642\u062a\u0631\u062d\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629"
                },
                W: [g.cL()]
            });
            this.S = new e6(function(f) {
                $4a(c, f)
            });
            this.Z = this.tileWidth = this.u = 0;
            this.next = new g.W({
                F: "button",
                Fa: ["ytp-button", "ytp-next"],
                X: {
                    "aria-label": "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a \u0627\u0644\u0645\u0642\u062a\u0631\u062d\u0629"
                },
                W: [g.bL()]
            });
            this.expandButton = new g.W({
                F: "button",
                Fa: ["ytp-button", "ytp-expand"],
                qa: "\u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a"
            });
            g.N(this, this.j);
            g.N(this, this.C);
            b = a.V();
            "0" === b.controlsType && g.go(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.J = b.u;
            g.N(this, this.title);
            this.title.Da(this.element);
            this.suggestions = new g.W({
                F: "div",
                N: "ytp-suggestions"
            });
            g.N(this, this.suggestions);
            this.suggestions.Da(this.element);
            g.N(this, this.previous);
            this.previous.Da(this.element);
            this.previous.Ra("click", this.FU, this);
            g.N(this, this.S);
            for (a = {
                    mu: 0
                }; 16 > a.mu; a = {
                    mu: a.mu
                }, a.mu++) {
                var d = new g.W({
                    F: "a",
                    N: "ytp-suggestion-link",
                    X: {
                        href: "{{link}}",
                        target: b.J,
                        "aria-label": "{{aria_label}}"
                    },
                    W: [{
                        F: "div",
                        N: "ytp-suggestion-image"
                    }, {
                        F: "div",
                        N: "ytp-suggestion-overlay",
                        X: {
                            style: "{{blink_rendering_hack}}",
                            "aria-hidden": "{{aria_hidden}}"
                        },
                        W: [{
                            F: "div",
                            N: "ytp-suggestion-title",
                            qa: "{{title}}"
                        }, {
                            F: "div",
                            N: "ytp-suggestion-author",
                            qa: "{{author_and_views}}"
                        }, {
                            F: "div",
                            X: {
                                "data-is-live": "{{is_live}}"
                            },
                            N: "ytp-suggestion-duration",
                            qa: "{{duration}}"
                        }]
                    }]
                });
                g.N(this, d);
                d.Da(this.suggestions.element);
                var e = d.Ca("ytp-suggestion-link");
                g.Bl(e, "transitionDelay", a.mu / 20 + "s");
                this.j.T(e,
                    "click",
                    function(f) {
                        return function(h) {
                            var l = f.mu;
                            if (1E3 > (0, g.T)() - c.ea) g.Fx(h), document.activeElement.blur();
                            else {
                                l = c.suggestionData[l];
                                var m = l.sessionData;
                                g.EO(h, c.api, c.J, m || void 0) && c.api.Ml(l.videoId, m, l.playlistId)
                            }
                        }
                    }(a));
                this.B.push(d)
            }
            g.N(this, this.next);
            this.next.Da(this.element);
            this.next.Ra("click", this.EU, this);
            b = new g.W({
                F: "button",
                Fa: ["ytp-button", "ytp-collapse"],
                X: {
                    "aria-label": "\u0625\u062e\u0641\u0627\u0621 \u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a"
                },
                W: [g.mFa()]
            });
            g.N(this, b);
            b.Da(this.element);
            b.Ra("click", this.f1, this);
            g.N(this, this.expandButton);
            this.expandButton.Da(this.element);
            this.expandButton.Ra("click", this.g1, this);
            this.j.T(this.api,
                "appresize", this.Cb);
            this.j.T(this.api, "fullscreentoggled", this.Ko);
            this.j.T(this.api, "presentingplayerstatechange", this.Tc);
            this.j.T(this.api, "videodatachange", this.onVideoDataChange);
            this.Cb(this.api.fb().getPlayerSize());
            this.onVideoDataChange()
        },
        $4a = function(a, b) {
            b = a.containerWidth - a.suggestionData.length * (a.tileWidth + 8) - b;
            a.suggestions.element.scrollLeft = -b
        },
        k6 = function(a) {
            var b = a.I.Vf() ? 32 : 16;
            b = a.Z / 2 + b;
            a.next.element.style.bottom = b + "px";
            a.previous.element.style.bottom = b + "px";
            b = a.u;
            var c = a.containerWidth - a.suggestionData.length * (a.tileWidth + 8);
            g.ko(a.element, "ytp-scroll-min", 0 <= b);
            g.ko(a.element, "ytp-scroll-max", b <= c)
        },
        b5a = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[a.suggestionData.length - b - 1],
                    d = a.B[b],
                    e = c.shortViewCount ? c.author + " \u2022 " + c.shortViewCount : c.author;
                d.element.style.display = "";
                g.pZa.test(c.title) && (d.Ca("ytp-suggestion-title").dir = "rtl");
                g.pZa.test(e) && (d.Ca("ytp-suggestion-author").dir = "rtl");
                var f = c.isLivePlayback ? "\u0645\u0628\u0627\u0634\u0631" : c.lengthSeconds ? g.XL(c.lengthSeconds) : "";
                var h = c.Km();
                if (g.LF(a.api.V())) {
                    var l = {};
                    a.api.V().ya && g.cN(l, a.api.V().loaderUrl);
                    h = g.xi(h, g.bN(l, "emb_rel_pause"))
                }
                d.update({
                    author_and_views: e,
                    duration: f,
                    link: h,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback,
                    aria_hidden: !(!c.ariaLabel ||
                        a.api.V().K("embeds_rv_aria_hidden_killswitch")),
                    blink_rendering_hack: g.aE || g.JF ? "will-change: opacity" : void 0
                });
                d = d.Ca("ytp-suggestion-image");
                c = c.Lf();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
            k6(a)
        },
        c5a = function(a) {
            var b = a.V();
            g.W.call(this, {
                F: "a",
                Fa: ["ytp-watermark", "yt-uix-sessionlink"],
                X: {
                    target: b.J,
                    href: "{{url}}",
                    "aria-label": g.GJ("\u0645\u0634\u0627\u0647\u062f\u0629 \u0639\u0644\u0649 $WEBSITE", {
                        WEBSITE: g.gG(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                W: [P4a()]
            });
            this.api = a;
            this.j = null;
            this.u = !1;
            this.state = a.Eb();
            a.vb(this.element, this, 76758);
            this.T(a, "videodatachange", this.xT);
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.T(a, "appresize",
                this.Cb);
            this.Uc(this.state);
            this.onVideoDataChange();
            this.Cb(a.fb().getPlayerSize())
        },
        e5a = function(a) {
            g.dO.call(this, a);
            this.G = a;
            this.j = new g.YD(this);
            var b;
            this.pw = null == (b = a.getVideoData()) ? void 0 : b.videoId;
            d5a(this);
            g.N(this, this.j);
            this.load()
        },
        d5a = function(a) {
            var b = a.G;
            if (b.K("embeds_enable_shorts_branded_ui")) {
                var c;
                a = !(null == (c = g.qN(b)) || !c.Zm());
                g.ko(b.getRootNode(), "ytp-shorts-mode", a);
                if (c = b.getVideoData()) c.HT = a
            }
        },
        l6 = function(a, b) {
            a = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: 0 === a.G.getCurrentTime() ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : 0 === a.G.getPlayerState() ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
                embedUrl: g.Dea(a.G.V().loaderUrl),
                eventType: b,
                youtubeHost: g.qi(a.G.V().Aa) || ""
            };
            g.Lv("embedsAdEvent", a)
        };
    g.v(e6, g.K);
    e6.prototype.start = function(a, b, c) {
        this.from = a;
        this.to = b;
        this.duration = c;
        this.startTime = (0, g.T)();
        this.next()
    };
    e6.prototype.next = function() {
        var a = (0, g.T)() - this.startTime;
        var b = this.j;
        a = O4a(b, a / this.duration);
        if (0 == a) b = b.J;
        else if (1 == a) b = b.S;
        else {
            var c = g.Hg(b.J, b.D, a),
                d = g.Hg(b.D, b.I, a);
            b = g.Hg(b.I, b.S, a);
            c = g.Hg(c, d, a);
            d = g.Hg(d, b, a);
            b = g.Hg(c, d, a)
        }
        b = g.Fg(b, 0, 1);
        this.callback((this.to - this.from) * b + this.from);
        1 > b && this.delay.start()
    };
    g.v(R4a, g.W);
    g.k = R4a.prototype;
    g.k.hide = function() {
        this.I = !0;
        g.W.prototype.hide.call(this)
    };
    g.k.show = function() {
        this.I = !1;
        g.W.prototype.show.call(this)
    };
    g.k.isHidden = function() {
        return this.I
    };
    g.k.CU = function() {
        this.scrollTo(this.j - this.containerWidth)
    };
    g.k.DU = function() {
        this.scrollTo(this.j + this.containerWidth)
    };
    g.k.resize = function(a, b) {
        var c = this.api.V(),
            d = 16 / 9,
            e = 650 <= a.width,
            f = 480 > a.width || 290 > a.height,
            h = Math.min(this.suggestionData.length, this.u.length);
        if (150 >= Math.min(a.width, a.height) || 0 === h || !c.Hc) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.B = 16
            } else this.B = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            l = a / l - this.B;
            m = Math.floor(l / d);
            b && m + 100 > b && 50 < l && (m = Math.max(b, 50 / d), l = Math.ceil(a / (d * (m - 100) + this.B)), l = a / l - this.B,
                m = Math.floor(l / d));
            50 > l || g.xN(this.api) ? this.hide() : this.show();
            for (b = 0; b < h; b++) {
                d = this.u[b];
                var q = d.Ca("ytp-suggestion-image");
                q.style.width = l + "px";
                q.style.height = m + "px";
                d.Ca("ytp-suggestion-title").style.width = l + "px";
                d.Ca("ytp-suggestion-author").style.width = l + "px";
                d = d.Ca("ytp-suggestion-duration");
                d.style.display = d && 100 > l ? "none" : ""
            }
            h = e + n + p + 4;
            this.D = h + c + (m - f) / 2;
            this.suggestions.element.style.height = m + h + "px";
            this.tileWidth = l;
            this.containerWidth = a;
            this.j = 0;
            Q4a(this, 0);
            T4a(this)
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.V();
        this.J = a.D ? !1 : b.u;
        a.suggestions ? this.suggestionData = g.wm(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        U4a(this);
        a.D ? this.title.update({
            title: g.GJ("\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a \u0645\u0646 \u0642\u0646\u0627\u0629 $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "\u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a \u0639\u0644\u0649 YouTube"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.Fg(a, this.containerWidth - S4a(this), 0);
        this.S.start(this.j, a, 1E3);
        this.j = a;
        T4a(this)
    };
    g.v(f6, g.JO);
    f6.prototype.show = function() {
        g.JO.prototype.show.call(this);
        W4a(this, this.api.fb().getPlayerSize())
    };
    f6.prototype.resize = function(a) {
        g.JO.prototype.resize.call(this, a);
        this.j && (W4a(this, a), g.ko(this.element, "related-on-error-overlay-visible", !this.j.isHidden()))
    };
    f6.prototype.u = function(a) {
        g.JO.prototype.u.call(this, a);
        var b = this.api.getVideoData();
        if (b.jF || b.playerErrorMessageRenderer)(a = b.jF) ? Y4a(this, a) : b.playerErrorMessageRenderer && Y4a(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.al && (b.vr ? X4a(b.vr) ? c = g.AA(b.vr) : c = g.KO(g.zA(b.vr)) : c = g.KO(a.al), this.Sd(c, "subreason"))
        }
    };
    g.v(g6, g.W);
    g6.prototype.Bh = function() {
        this.api.Eb().isCued() || (this.hide(), this.api.Wa(this.element, !1))
    };
    g6.prototype.j = function() {
        var a = this.api.getVideoData(),
            b = this.api.V(),
            c = this.api.getVideoData().D,
            d = b.Lc,
            e = !b.Hc,
            f = this.u,
            h = f.Zm() && b.K("embeds_enable_shorts_branded_ui");
        f = f.Fg();
        var l = g.WF(b);
        b = b.B;
        d || f || c || e || l || b || h || !a.videoId ? (this.hide(), this.api.Wa(this.element, !1)) : (a = Z4a(this), this.Oa("url", a), this.show())
    };
    g6.prototype.onClick = function(a) {
        var b = Z4a(this);
        g.FO(b, this.api, a);
        this.api.ub(this.element)
    };
    g6.prototype.show = function() {
        this.api.Eb().isCued() && (g.W.prototype.show.call(this), this.api.Pm(this.element) && this.api.Wa(this.element, !0))
    };
    g.v(h6, g.W);
    h6.prototype.Bh = function() {
        var a = this.api.Eb();
        !this.api.fg() || g.V(a, 2) && g.uN(this.api) || g.V(a, 64) ? (this.api.Wa(this.j, !1), this.api.Wa(this.forwardButton, !1), this.hide()) : (this.show(), this.api.Wa(this.j, !0), this.api.Wa(this.forwardButton, !0))
    };
    h6.prototype.u = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate());
        this.api.ub(this.j)
    };
    h6.prototype.B = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate());
        this.api.ub(this.forwardButton)
    };
    g.v(i6, g.W);
    i6.prototype.u = function() {
        var a = this.api.Eb(),
            b = this.api.getVideoData();
        this.api.V().K("embeds_enable_muted_autoplay") && b.mutedAutoplay && (g.V(a, 2) && !this.qb ? (this.show(), this.j.show(), a = this.api.getVideoData(), this.Oa("text", a.FN), g.ko(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.Wa(this.element, this.qb), this.api.Pa("onMutedAutoplayEnds")) : this.hide())
    };
    i6.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.JH(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.ub(this.element);
        this.hide()
    };
    g.v(j6, g.W);
    j6.prototype.j = function() {
        var a = this.api.Eb(),
            b = this.api.getVideoData();
        this.api.V().K("embeds_enable_muted_autoplay") && b.mutedAutoplay && !g.V(a, 2) ? this.qb || (g.W.prototype.show.call(this), this.B.start(), this.api.Wa(this.element, this.qb)) : this.hide()
    };
    j6.prototype.u = function() {
        g.ko(this.element, "ytp-muted-autoplay-hide-watermark", !0)
    };
    j6.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.JH(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.ub(this.element)
    };
    g.v(a5a, g.W);
    g.k = a5a.prototype;
    g.k.hide = function() {
        g.io(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.W.prototype.hide.call(this)
    };
    g.k.f1 = function() {
        this.D = !0;
        g.io(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.expandButton.focus()
    };
    g.k.g1 = function() {
        this.D = !1;
        g.go(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.focus()
    };
    g.k.EU = function() {
        this.scrollTo(this.u - this.containerWidth)
    };
    g.k.FU = function() {
        this.scrollTo(this.u + this.containerWidth)
    };
    g.k.Ko = function() {
        this.Cb(this.api.fb().getPlayerSize())
    };
    g.k.Tc = function(a) {
        if (!(g.V(a.state, 1) || g.V(a.state, 16) || g.V(a.state, 32))) {
            var b = !this.api.V().K("embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch") && g.V(a.state, 1024);
            !g.V(a.state, 4) || g.V(a.state, 2) || b ? this.C.hide() : this.suggestionData.length && (this.D || (g.go(this.api.getRootNode(), "ytp-expand-pause-overlay"), k6(this)), this.C.show(), this.ea = (0, g.T)())
        }
    };
    g.k.Cb = function(a) {
        var b = 16 / 9,
            c = this.I.Vf();
        a = a.width - (c ? 112 : 58);
        c = Math.ceil(a / (c ? 320 : 192));
        c = (a - 8 * c) / c;
        b = Math.floor(c / b);
        for (var d = 0; d < this.B.length; d++) {
            var e = this.B[d].Ca("ytp-suggestion-image");
            e.style.width = c + "px";
            e.style.height = b + "px"
        }
        this.suggestions.element.style.height = b + "px";
        this.tileWidth = c;
        this.Z = b;
        this.containerWidth = a;
        this.u = 0;
        $4a(this, 0);
        k6(this)
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.V(),
            b = this.api.getVideoData();
        this.J = b.D ? !1 : a.u;
        b.suggestions ? this.suggestionData = g.wm(b.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        b5a(this);
        b.D ? this.title.update({
            title: g.GJ("\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a \u0645\u0646 \u0642\u0646\u0627\u0629 $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: b.author
            })
        }) : this.title.update({
            title: "\u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.Fg(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + 8), 0);
        this.S.start(this.u, a, 1E3);
        this.u = a;
        k6(this)
    };
    g.v(c5a, g.W);
    g.k = c5a.prototype;
    g.k.xT = function() {
        var a = this.api.getVideoData(),
            b = this.api.getVideoData(1).D,
            c = this.api.V();
        a = (a.mutedAutoplay || c.Lc && !g.V(this.state, 2)) && !(b && c.pfpChazalUi);
        g.XK(this, a);
        this.api.Wa(this.element, a)
    };
    g.k.onStateChange = function(a) {
        this.Uc(a.state)
    };
    g.k.Uc = function(a) {
        this.state !== a && (this.state = a);
        this.xT()
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.V();
        a.B && g.go(this.element, "ytp-no-hover");
        this.api.getVideoData().videoId && !a.B ? (a = this.api.getVideoUrl(!0, !1, !1, !0), this.Oa("url", a), this.j || (this.j = this.Ra("click", this.onClick))) : this.j && (this.Oa("url", null), this.yc(this.j), this.j = null)
    };
    g.k.onClick = function(a) {
        var b = this.api.getVideoUrl(!g.YL(a), !1, !0, !0);
        g.FO(b, this.api, a);
        this.api.ub(this.element)
    };
    g.k.Cb = function(a) {
        if ((a = 480 > a.width) && !this.u || !a && this.u) {
            var b = new g.W(P4a()),
                c = this.Ca("ytp-watermark");
            g.ko(c, "ytp-watermark-small", a);
            g.kh(c);
            b.Da(c);
            this.u = a
        }
    };
    g.v(e5a, g.dO);
    g.k = e5a.prototype;
    g.k.Dj = function() {
        return !1
    };
    g.k.create = function() {
        var a = this.G.V(),
            b = g.qN(this.G),
            c, d = null == (c = this.G.getVideoData()) ? void 0 : c.clientPlaybackNonce;
        d && g.aB("cpn", d);
        c = a.K("embeds_enable_shorts_branded_ui");
        c = !a.B && (!b.Zm() || c);
        a.Hc && c && (this.B = new a5a(this.G, b), g.N(this, this.B), g.AN(this.G, this.B.element, 4));
        a.K("embeds_enable_muted_autoplay") && (this.u = new j6(this.G), g.N(this, this.u), g.AN(this.G, this.u.element, 4), this.I = new i6(this.G), g.N(this, this.I), g.AN(this.G, this.I.element, 4));
        if (a.Lc || this.u) this.watermark = new c5a(this.G),
            g.N(this, this.watermark), g.AN(this.G, this.watermark.element, 8);
        this.C = new g6(this.G, b);
        g.N(this, this.C);
        g.AN(this.G, this.C.element, 8);
        a.isMobile && (this.D = new h6(this.G), g.N(this, this.D), g.AN(this.G, this.D.element, 4));
        this.j.T(this.G, "appresize", this.Cb);
        this.j.T(this.G, "presentingplayerstatechange", this.Bh);
        this.j.T(this.G, "videodatachange", this.onVideoDataChange);
        this.j.T(this.G, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.j.T(this.G, "onAdStart", this.onAdStart);
        this.j.T(this.G, "onAdComplete",
            this.onAdComplete);
        this.j.T(this.G, "onAdSkip", this.onAdSkip);
        this.j.T(this.G, "onAdStateChange", this.onAdStateChange);
        this.Wb(this.G.Eb());
        this.player.xf("embed")
    };
    g.k.Cb = function() {
        var a = this.G.fb().getPlayerSize();
        this.Bf && this.Bf.resize(a)
    };
    g.k.Bh = function(a) {
        this.Wb(a.state)
    };
    g.k.Wb = function(a) {
        g.V(a, 128) ? (this.Bf || (this.Bf = new f6(this.G), g.N(this, this.Bf), g.AN(this.G, this.Bf.element, 4)), this.Bf.u(a.getData()), this.Bf.show(), g.go(this.G.getRootNode(), "ytp-embed-error")) : this.Bf && (this.Bf.dispose(), this.Bf = null, g.io(this.G.getRootNode(), "ytp-embed-error"))
    };
    g.k.onMutedAutoplayStarts = function() {
        this.G.getVideoData().mutedAutoplay && this.u && this.watermark && this.watermark.Da(this.u.bottomButtons, 0)
    };
    g.k.onVideoDataChange = function(a, b) {
        var c = this.pw !== b.videoId;
        a = !c && "newdata" === a;
        var d, e = {
            isShortsModeEnabled: null == (d = g.qN(this.G)) ? void 0 : d.Zm()
        };
        g.Lv("embedsVideoDataDidChange", {
            clientPlaybackNonce: b.clientPlaybackNonce,
            isReload: a,
            runtimeEnabledFeatures: e
        });
        c && (this.pw = b.videoId, d5a(this));
        this.watermark && this.u && !b.mutedAutoplay && g.rh(this.u.element, this.watermark.element) && g.AN(this.G, this.watermark.element, 8);
        this.G.V().B && this.B && this.B.detach()
    };
    g.k.onAdStart = function() {
        l6(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    };
    g.k.onAdComplete = function() {
        l6(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    };
    g.k.onAdSkip = function() {
        l6(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    };
    g.k.onAdStateChange = function(a) {
        2 === a && l6(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    };
    g.cO("embed", e5a);
})(_yt_player);