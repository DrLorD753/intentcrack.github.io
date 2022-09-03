(function(g) {
    var window = this;
    'use strict';
    var f5a = function(a, b) {
            a.Pa("onAutonavCoundownStarted", b)
        },
        m6 = function(a, b, c) {
            g.ko(a.element, "ytp-suggestion-set", !!b.videoId);
            var d = b.playlistId;
            c = b.Lf(c ? c : "mqdefault.jpg");
            var e = null,
                f = null;
            b instanceof g.TG && (b.lengthText ? (e = b.lengthText || null, f = b.Rs || null) : b.lengthSeconds && (e = g.XL(b.lengthSeconds), f = g.XL(b.lengthSeconds, !0)));
            var h = !!d;
            d = h && "RD" === g.RG(d).type;
            var l = b instanceof g.TG ? b.isLivePlayback : null,
                m = b instanceof g.TG ? b.isUpcoming : null,
                n = b.author,
                p = b.shortViewCount,
                q = b.publishedTimeText,
                r = [],
                w = [];
            n && r.push(n);
            p && (r.push(p), w.push(p));
            q && w.push(q);
            c = {
                title: b.title,
                author: n,
                author_and_views: r.join(" \u2022 "),
                aria_label: b.ariaLabel ||
                    g.GJ("\u0645\u0634\u0627\u0647\u062f\u0629 $TITLE", {
                        TITLE: b.title
                    }),
                duration: e,
                timestamp: f,
                url: b.Km(),
                is_live: l,
                is_upcoming: m,
                is_list: h,
                is_mix: d,
                background: c ? "background-image: url(" + c + ")" : "",
                views_and_publish_time: w.join(" \u2022 "),
                autoplayAlternativeHeader: b.vp
            };
            b instanceof g.SG && (c.playlist_length = b.playlistLength);
            a.update(c)
        },
        n6 = function(a) {
            var b = a.V(),
                c = b.u;
            g.W.call(this, {
                F: "a",
                N: "ytp-autonav-suggestion-card",
                X: {
                    href: "{{url}}",
                    target: c ? b.J : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                W: [{
                    F: "div",
                    Fa: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
                    X: {
                        style: "{{background}}"
                    },
                    W: [{
                            F: "div",
                            X: {
                                "aria-label": "{{timestamp}}"
                            },
                            Fa: ["ytp-autonav-timestamp"],
                            qa: "{{duration}}"
                        }, {
                            F: "div",
                            Fa: ["ytp-autonav-live-stamp"],
                            qa: "\u0645\u0628\u0627\u0634\u0631"
                        },
                        {
                            F: "div",
                            Fa: ["ytp-autonav-upcoming-stamp"],
                            qa: "\u0642\u0631\u064a\u0628\u064b\u0627"
                        }, {
                            F: "div",
                            N: "ytp-autonav-list-overlay",
                            W: [{
                                F: "div",
                                N: "ytp-autonav-mix-text",
                                qa: "\u062a\u0634\u0643\u064a\u0644\u0629"
                            }, {
                                F: "div",
                                N: "ytp-autonav-mix-icon"
                            }]
                        }
                    ]
                }, {
                    F: "div",
                    Fa: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
                    qa: "{{title}}"
                }, {
                    F: "div",
                    Fa: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
                    qa: "{{author}}"
                }, {
                    F: "div",
                    Fa: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
                    qa: "{{views_and_publish_time}}"
                }]
            });
            this.G = a;
            this.suggestion = null;
            this.j = c;
            this.Ra("click", this.onClick);
            this.Ra("keypress", this.onKeyPress)
        },
        o6 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g.W.call(this, {
                F: "div",
                N: "ytp-autonav-endscreen-countdown-overlay"
            });
            var c = this;
            this.I = b;
            this.D = void 0;
            this.B = 0;
            this.container = new g.W({
                F: "div",
                N: "ytp-autonav-endscreen-countdown-container"
            });
            g.N(this, this.container);
            this.container.Da(this.element);
            b = a.V();
            var d = b.u;
            this.G = a;
            this.suggestion = null;
            this.onVideoDataChange("newdata", this.G.getVideoData());
            this.T(a, "videodatachange", this.onVideoDataChange);
            var e = ["ytp-autonav-endscreen-upnext-thumbnail"];
            b.K("web_rounded_thumbnails") && e.push("rounded-thumbnail");
            this.j = new g.W({
                F: "div",
                N: "ytp-autonav-endscreen-upnext-container",
                X: {
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                W: [{
                    F: "div",
                    N: "ytp-autonav-endscreen-upnext-header"
                }, {
                    F: "div",
                    N: "ytp-autonav-endscreen-upnext-alternative-header",
                    qa: "{{autoplayAlternativeHeader}}"
                }, {
                    F: "a",
                    N: "ytp-autonav-endscreen-link-container",
                    X: {
                        href: "{{url}}",
                        target: d ? b.J : ""
                    },
                    W: [{
                        F: "div",
                        Fa: e,
                        X: {
                            style: "{{background}}"
                        },
                        W: [{
                            F: "div",
                            X: {
                                "aria-label": "{{timestamp}}"
                            },
                            Fa: ["ytp-autonav-timestamp"],
                            qa: "{{duration}}"
                        }, {
                            F: "div",
                            Fa: ["ytp-autonav-live-stamp"],
                            qa: "\u0645\u0628\u0627\u0634\u0631"
                        }, {
                            F: "div",
                            Fa: ["ytp-autonav-upcoming-stamp"],
                            qa: "\u0642\u0631\u064a\u0628\u064b\u0627"
                        }]
                    }, {
                        F: "div",
                        N: "ytp-autonav-endscreen-video-info",
                        W: [{
                            F: "div",
                            N: "ytp-autonav-endscreen-premium-badge"
                        }, {
                            F: "div",
                            N: "ytp-autonav-endscreen-upnext-title",
                            qa: "{{title}}"
                        }, {
                            F: "div",
                            N: "ytp-autonav-endscreen-upnext-author",
                            qa: "{{author}}"
                        }, {
                            F: "div",
                            N: "ytp-autonav-view-and-date",
                            qa: "{{views_and_publish_time}}"
                        }, {
                            F: "div",
                            N: "ytp-autonav-author-and-view",
                            qa: "{{author_and_views}}"
                        }]
                    }]
                }]
            });
            g.N(this, this.j);
            this.j.Da(this.container.element);
            d || this.T(this.j.Ca("ytp-autonav-endscreen-link-container"), "click", this.jM);
            this.G.vb(this.container.element, this, 115127);
            this.G.vb(this.j.Ca("ytp-autonav-endscreen-link-container"), this, 115128);
            this.overlay = new g.W({
                F: "div",
                N: "ytp-autonav-overlay"
            });
            g.N(this, this.overlay);
            this.overlay.Da(this.container.element);
            this.u = new g.W({
                F: "div",
                N: "ytp-autonav-endscreen-button-container"
            });
            g.N(this, this.u);
            this.u.Da(this.container.element);
            this.cancelButton = new g.W({
                F: "button",
                Fa: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", b.K("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
                X: {
                    "aria-label": "\u0625\u0644\u063a\u0627\u0621 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a"
                },
                qa: "\u0625\u0644\u063a\u0627\u0621"
            });
            g.N(this, this.cancelButton);
            this.cancelButton.Da(this.u.element);
            this.cancelButton.Ra("click",
                this.HU, this);
            this.G.vb(this.cancelButton.element, this, 115129);
            this.playButton = new g.W({
                F: "a",
                Fa: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button", b.K("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
                X: {
                    href: "{{url}}",
                    role: "button",
                    "aria-label": "\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u0627\u0644\u062a\u0627\u0644\u064a"
                },
                qa: "\u0628\u062f\u0621 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0622\u0646"
            });
            g.N(this, this.playButton);
            this.playButton.Da(this.u.element);
            this.playButton.Ra("click", this.jM, this);
            this.G.vb(this.playButton.element, this, 115130);
            this.C = new g.Yn(function() {
                g5a(c)
            }, 500);
            g.N(this, this.C);
            this.iM();
            this.T(a, "autonavvisibility", this.iM);
            this.G.K("web_autonav_color_transition") && (this.T(a, "autonavchange", this.GU), this.T(a, "onAutonavCoundownStarted", this.W0))
        },
        p6 = function(a) {
            var b = a.G.hk(!0, a.G.isFullscreen());
            g.ko(a.container.element, "ytp-autonav-endscreen-small-mode", a.Fg(b));
            g.ko(a.container.element, "ytp-autonav-endscreen-is-premium", !!a.suggestion && !!a.suggestion.DE);
            g.ko(a.G.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !a.G.Ze());
            g.ko(a.G.getRootNode(), "countdown-running", a.sj());
            g.ko(a.container.element, "ytp-player-content", a.G.Ze());
            g.Bl(a.overlay.element, {
                width: b.width + "px"
            });
            if (!a.sj()) {
                a.G.Ze() ? h5a(a, Math.round(i5a(a) / 1E3)) : h5a(a);
                b = !!a.suggestion && !!a.suggestion.vp;
                var c = a.G.Ze() || !b;
                g.ko(a.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !c && b);
                g.ko(a.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", c && !b);
                g.XK(a.u, a.G.Ze());
                g.ko(a.element, "ytp-enable-w2w-color-transitions", j5a(a))
            }
        },
        g5a = function(a) {
            var b = i5a(a),
                c = Math,
                d = c.min;
            var e = a.B ? Date.now() - a.B : 0;
            c = d.call(c, e, b);
            h5a(a, Math.ceil((b - c) / 1E3));
            500 >= b - c && a.sj() ? a.select(!0) : a.sj() && a.C.start()
        },
        i5a = function(a) {
            if (a.G.isFullscreen()) {
                var b;
                a = null == (b = a.G.getVideoData()) ? void 0 : b.JL;
                return -1 === a || void 0 === a ? 8E3 : a
            }
            return 0 <= a.G.Lp() ? a.G.Lp() : g.SE(a.G.V().experiments, "autoplay_time") || 1E4
        },
        j5a = function(a) {
            var b;
            return !(null == (b = a.G.getVideoData()) || !b.watchToWatchTransitionRenderer)
        },
        h5a = function(a, b) {
            b = void 0 === b ? -1 : b;
            a = a.j.Ca("ytp-autonav-endscreen-upnext-header");
            g.kh(a);
            if (0 <= b) {
                b = String(b);
                var c = "\u064a\u0628\u062f\u0623 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u0627\u0644\u062a\u0627\u0644\u064a \u0628\u0639\u062f $SECONDS.".match(RegExp("\\$SECONDS", "gi"))[0],
                    d = "\u064a\u0628\u062f\u0623 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u0627\u0644\u062a\u0627\u0644\u064a \u0628\u0639\u062f $SECONDS.".indexOf(c);
                if (0 <= d) {
                    a.appendChild(g.jh("\u064a\u0628\u062f\u0623 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u0627\u0644\u062a\u0627\u0644\u064a \u0628\u0639\u062f $SECONDS.".slice(0,
                        d)));
                    var e = g.ih("span");
                    g.eo(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
                    g.sh(e, b);
                    a.appendChild(e);
                    a.appendChild(g.jh("\u064a\u0628\u062f\u0623 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u0627\u0644\u062a\u0627\u0644\u064a \u0628\u0639\u062f $SECONDS.".slice(d + c.length)));
                    return
                }
            }
            g.sh(a, "\u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u0627\u0644\u062a\u0627\u0644\u064a")
        },
        q6 = function(a, b) {
            g.W.call(this, {
                F: "div",
                Fa: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
            });
            this.created = !1;
            this.player = a
        },
        r6 = function(a) {
            g.W.call(this, {
                F: "div",
                Fa: ["ytp-upnext", "ytp-player-content"],
                X: {
                    "aria-label": "{{aria_label}}"
                },
                W: [{
                    F: "div",
                    N: "ytp-cued-thumbnail-overlay-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    F: "span",
                    N: "ytp-upnext-top",
                    W: [{
                        F: "span",
                        N: "ytp-upnext-header",
                        qa: "\u0627\u0644\u062a\u0627\u0644\u064a"
                    }, {
                        F: "span",
                        N: "ytp-upnext-title",
                        qa: "{{title}}"
                    }, {
                        F: "span",
                        N: "ytp-upnext-author",
                        qa: "{{author}}"
                    }]
                }, {
                    F: "a",
                    N: "ytp-upnext-autoplay-icon",
                    X: {
                        role: "button",
                        href: "{{url}}",
                        "aria-label": "\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u0627\u0644\u062a\u0627\u0644\u064a"
                    },
                    W: [{
                        F: "svg",
                        X: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        W: [{
                            F: "circle",
                            N: "ytp-svg-autoplay-circle",
                            X: {
                                cx: "36",
                                cy: "36",
                                fill: "#fff",
                                "fill-opacity": "0.3",
                                r: "31.5"
                            }
                        }, {
                            F: "circle",
                            N: "ytp-svg-autoplay-ring",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            F: "path",
                            N: "ytp-svg-fill",
                            X: {
                                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
                            }
                        }]
                    }]
                }, {
                    F: "span",
                    N: "ytp-upnext-bottom",
                    W: [{
                        F: "span",
                        N: "ytp-upnext-cancel"
                    }, {
                        F: "span",
                        N: "ytp-upnext-paused",
                        qa: "\u062a\u0645 \u0625\u064a\u0642\u0627\u0641 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a \u0645\u0624\u0642\u062a\u064b\u0627"
                    }]
                }]
            });
            this.api = a;
            this.cancelButton = null;
            this.D = this.Ca("ytp-svg-autoplay-ring");
            this.B = this.notification = this.j = this.suggestion = null;
            this.C = new g.Yn(this.XB, 5E3, this);
            this.u = 0;
            var b = this.Ca("ytp-upnext-cancel");
            this.cancelButton = new g.W({
                F: "button",
                Fa: ["ytp-upnext-cancel-button",
                    "ytp-button"
                ],
                X: {
                    tabindex: "0",
                    "aria-label": "\u0625\u0644\u063a\u0627\u0621 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a"
                },
                qa: "\u0625\u0644\u063a\u0627\u0621"
            });
            g.N(this, this.cancelButton);
            this.cancelButton.Ra("click", this.IU, this);
            this.cancelButton.Da(b);
            this.cancelButton && this.api.vb(this.cancelButton.element, this, 115129);
            g.N(this, this.C);
            this.api.vb(this.element, this, 18788);
            b = this.Ca("ytp-upnext-autoplay-icon");
            this.T(b, "click", this.JU);
            this.api.vb(b,
                this, 115130);
            this.kM();
            this.T(a, "autonavvisibility", this.kM);
            this.T(a, "mdxnowautoplaying", this.R1);
            this.T(a, "mdxautoplaycanceled", this.S1);
            g.ko(this.element, "ytp-upnext-mobile", this.api.V().isMobile)
        },
        k5a = function(a, b) {
            if (b) return b;
            if (a.api.isFullscreen()) {
                var c;
                a = null == (c = a.api.getVideoData()) ? void 0 : c.JL;
                return -1 === a || void 0 === a ? 8E3 : a
            }
            return 0 <= a.api.Lp() ? a.api.Lp() : g.SE(a.api.V().experiments, "autoplay_time") || 1E4
        },
        l5a = function(a, b) {
            b = k5a(a, b);
            var c = Math,
                d = c.min;
            var e = (0, g.T)() - a.u;
            c = d.call(c, e, b);
            b = 0 === b ? 1 : Math.min(c / b, 1);
            a.D.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
            1 <= b && a.sj() && 3 !== a.api.getPresentingPlayerType() ? a.select(!0) : a.sj() && a.j.start()
        },
        s6 = function(a) {
            q6.call(this, a, "autonav-endscreen");
            this.overlay = this.videoData = null;
            this.table = new g.W({
                F: "div",
                N: "ytp-suggestion-panel",
                W: [{
                    F: "div",
                    Fa: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
                    qa: "\u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a"
                }]
            });
            this.J = new g.W({
                F: "div",
                N: "ytp-suggestions-container"
            });
            this.videos = [];
            this.B = null;
            this.D = this.I = !1;
            this.u = new o6(this.player);
            g.N(this, this.u);
            this.u.Da(this.element);
            a.getVideoData().Ne ? this.j = this.u : (this.j =
                new r6(a), g.AN(this.player, this.j.element, 4), g.N(this, this.j));
            this.overlay = new g.W({
                F: "div",
                N: "ytp-autonav-overlay-cancelled-state"
            });
            g.N(this, this.overlay);
            this.overlay.Da(this.element);
            this.C = new g.YD(this);
            g.N(this, this.C);
            g.N(this, this.table);
            this.table.Da(this.element);
            this.table.show();
            g.N(this, this.J);
            this.J.Da(this.table.element);
            this.hide()
        },
        t6 = function(a) {
            var b = a.Ze();
            b !== a.D && (a.D = b, a.player.ma("autonavvisibility"), a.D ? (a.u !== a.j && a.u.hide(), a.table.hide()) : (a.u !== a.j && a.u.show(), a.table.show()))
        },
        m5a = function(a) {
            q6.call(this, a, "subscribecard-endscreen");
            this.j = new g.W({
                F: "div",
                N: "ytp-subscribe-card",
                W: [{
                    F: "img",
                    N: "ytp-author-image",
                    X: {
                        src: "{{profilePicture}}"
                    }
                }, {
                    F: "div",
                    N: "ytp-subscribe-card-right",
                    W: [{
                        F: "div",
                        N: "ytp-author-name",
                        qa: "{{author}}"
                    }, {
                        F: "div",
                        N: "html5-subscribe-button-container"
                    }]
                }]
            });
            g.N(this, this.j);
            this.j.Da(this.element);
            var b = a.getVideoData();
            this.subscribeButton = new g.hP("\u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643", null, "\u0625\u0644\u063a\u0627\u0621 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643", null, !0, !1, b.Lk, b.subscribed,
                "trailer-endscreen", null, null, a);
            g.N(this, this.subscribeButton);
            this.subscribeButton.Da(this.j.Ca("html5-subscribe-button-container"));
            this.T(a, "videodatachange", this.Ja);
            this.Ja();
            this.hide()
        },
        u6 = function(a) {
            var b = a.V(),
                c = g.aE || g.JF ? {
                    style: "will-change: opacity"
                } : void 0,
                d = b.u,
                e = ["ytp-videowall-still"];
            b.isMobile && e.push("ytp-videowall-show-text");
            g.W.call(this, {
                F: "a",
                Fa: e,
                X: {
                    href: "{{url}}",
                    target: d ? b.J : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}"
                },
                W: [{
                    F: "div",
                    N: "ytp-videowall-still-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    F: "span",
                    N: "ytp-videowall-still-info",
                    W: [{
                        F: "span",
                        N: "ytp-videowall-still-info-bg",
                        W: [{
                            F: "span",
                            N: "ytp-videowall-still-info-content",
                            X: c,
                            W: [{
                                F: "span",
                                N: "ytp-videowall-still-info-title",
                                qa: "{{title}}"
                            }, {
                                F: "span",
                                N: "ytp-videowall-still-info-author",
                                qa: "{{author_and_views}}"
                            }, {
                                F: "span",
                                N: "ytp-videowall-still-info-live",
                                qa: "\u0645\u0628\u0627\u0634\u0631"
                            }, {
                                F: "span",
                                N: "ytp-videowall-still-info-duration",
                                qa: "{{duration}}"
                            }]
                        }]
                    }]
                }, {
                    F: "span",
                    Fa: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
                    W: [{
                        F: "span",
                        N: "ytp-videowall-still-listlabel-icon"
                    }, "\u0642\u0627\u0626\u0645\u0629 \u062a\u0634\u063a\u064a\u0644", {
                        F: "span",
                        N: "ytp-videowall-still-listlabel-length",
                        W: [" (", {
                                F: "span",
                                qa: "{{playlist_length}}"
                            },
                            ")"
                        ]
                    }]
                }, {
                    F: "span",
                    Fa: ["ytp-videowall-still-listlabel-mix", "ytp-videowall-still-listlabel"],
                    W: [{
                        F: "span",
                        N: "ytp-videowall-still-listlabel-mix-icon"
                    }, "\u062a\u0634\u0643\u064a\u0644\u0629", {
                        F: "span",
                        N: "ytp-videowall-still-listlabel-length",
                        qa: " (50+)"
                    }]
                }]
            });
            this.suggestion = null;
            this.u = d;
            this.api = a;
            this.j = new g.YD(this);
            g.N(this, this.j);
            this.Ra("click", this.onClick);
            this.Ra("keypress", this.onKeyPress);
            this.j.T(a, "videodatachange", this.onVideoDataChange);
            a.Sg(this.element, this);
            this.onVideoDataChange()
        },
        v6 = function(a) {
            q6.call(this, a, "videowall-endscreen");
            var b = this;
            this.G = a;
            this.B = 0;
            this.stills = [];
            this.C = this.videoData = null;
            this.D = this.J = !1;
            this.S = null;
            this.u = new g.YD(this);
            g.N(this, this.u);
            this.Z = a.K("web_rounded_thumbnails");
            this.I = new g.Yn(function() {
                g.go(b.element, "ytp-show-tiles")
            }, 0);
            g.N(this, this.I);
            var c = new g.W({
                F: "button",
                Fa: ["ytp-button", "ytp-endscreen-previous"],
                X: {
                    "aria-label": "\u0627\u0644\u0633\u0627\u0628\u0642"
                },
                W: [g.bL()]
            });
            g.N(this, c);
            c.Da(this.element);
            c.Ra("click", this.NU, this);
            this.table = new g.UK({
                F: "div",
                N: "ytp-endscreen-content"
            });
            g.N(this, this.table);
            this.table.Da(this.element);
            c = new g.W({
                F: "button",
                Fa: ["ytp-button", "ytp-endscreen-next"],
                X: {
                    "aria-label": "\u0627\u0644\u062a\u0627\u0644\u064a"
                },
                W: [g.cL()]
            });
            g.N(this, c);
            c.Da(this.element);
            c.Ra("click", this.MU,
                this);
            a.getVideoData().Ne ? this.j = new o6(a, !0) : this.j = new r6(a);
            g.N(this, this.j);
            g.AN(this.player, this.j.element, 4);
            a.vb(this.element, this, 158789);
            this.hide()
        },
        w6 = function(a) {
            return g.BN(a.player) && a.by() && !a.C
        },
        n5a = function(a) {
            var b, c, d, e;
            return (null == (b = a.videoData) ? 0 : null == (c = b.suggestions) ? 0 : c.length) ? null == (d = a.videoData) ? void 0 : d.suggestions : [null == (e = a.videoData) ? void 0 : g.zI(e)]
        },
        x6 = function(a) {
            var b = a.Ze();
            b !== a.J && (a.J = b, a.player.ma("autonavvisibility"))
        },
        o5a = function(a, b) {
            g.W.call(this, {
                F: "button",
                Fa: ["ytp-watch-on-youtube-button", "ytp-button"],
                X: {
                    title: "{{message}}"
                },
                qa: "{{content}}"
            });
            this.G = a;
            this.buttonType = this.buttonType = b;
            switch (this.buttonType) {
                case 1:
                    a = "\u0627\u0644\u0645\u0634\u0627\u0647\u062f\u0629 \u0645\u062c\u062f\u062f\u064b\u0627 \u0639\u0644\u0649 YouTube";
                    b = 156915;
                    break;
                case 2:
                    a = "\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0634\u0627\u0647\u062f\u0629 \u0639\u0644\u0649 \u0645\u0648\u0642\u0639 YouTube";
                    b = 156942;
                    break;
                default:
                    a = "\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0634\u0627\u0647\u062f\u0629 \u0639\u0644\u0649 \u0645\u0648\u0642\u0639 YouTube",
                        b = 156942
            }
            this.update({
                message: a,
                content: a
            });
            this.G.vb(this.element, this, b);
            this.Ra("click", this.onClick);
            g.XK(this, !0)
        },
        y6 = function(a) {
            q6.call(this, a, "watch-again-on-youtube-endscreen");
            this.watchButton = new o5a(a, 1);
            g.N(this, this.watchButton);
            this.watchButton.Da(this.element);
            a.vb(this.element, this, 156914);
            this.hide()
        },
        s5a = function(a) {
            g.dO.call(this, a);
            var b = this;
            this.endScreen = null;
            this.j = this.B = this.u = !1;
            this.listeners = new g.YD(this);
            g.N(this, this.listeners);
            var c = a.V(),
                d;
            (null == (d = g.qN(a)) ? 0 : d.Zm()) ? c.K("embeds_enable_shorts_branded_ui") ? (this.u = !0, this.endScreen = new v6(this.player)) : this.endScreen = new y6(a): p5a(a) ? (this.u = !0, q5a(this), this.j ? this.endScreen = new s6(a) : this.endScreen = new v6(this.player)) : c.Oe ? this.endScreen = new m5a(this.player) : this.endScreen = new q6(this.player);
            g.N(this, this.endScreen);
            g.AN(this.player, this.endScreen.element,
                4);
            r5a(this);
            this.listeners.T(a, "videodatachange", this.onVideoDataChange, this);
            this.listeners.T(a, g.uA("endscreen"), function(e) {
                b.onCueRangeEnter(e)
            });
            this.listeners.T(a, g.vA("endscreen"), function(e) {
                b.onCueRangeExit(e)
            })
        },
        q5a = function(a) {
            var b = a.player.getVideoData();
            if (!b || a.j === b.Qk && a.B === b.Ne) return !1;
            a.j = b.Qk;
            a.B = b.Ne;
            return !0
        },
        p5a = function(a) {
            a = a.V();
            return !a.B && a.Hc && !a.Oe
        },
        r5a = function(a) {
            a.player.Ff("endscreen");
            var b = a.player.getVideoData();
            b = new g.sA(Math.max(1E3 * (b.lengthSeconds - 10), 0), 0x8000000000000, {
                id: "preload",
                namespace: "endscreen"
            });
            var c = new g.sA(0x8000000000000, 0x8000000000000, {
                id: "load",
                priority: 8,
                namespace: "endscreen"
            });
            a.player.oe([b, c])
        };
    g.TO.prototype.zA = g.ba(30, function(a) {
        this.TJ !== a && (this.TJ = a, this.Cn())
    });
    g.tN.prototype.Lp = g.ba(4, function() {
        return this.app.Lp()
    });
    g.SX.prototype.Lp = g.ba(3, function() {
        return this.getVideoData().WL
    });
    g.v(n6, g.W);
    n6.prototype.select = function() {
        (this.G.Ml(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.Gy || void 0) || this.G.K("web_player_endscreen_double_log_fix_killswitch")) && this.G.ub(this.element)
    };
    n6.prototype.onClick = function(a) {
        g.EO(a, this.G, this.j, this.suggestion.sessionData || void 0) && this.select()
    };
    n6.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                g.Gx(a) || (this.select(), g.Fx(a))
        }
    };
    g.v(o6, g.W);
    g.k = o6.prototype;
    g.k.gB = function(a) {
        this.suggestion !== a && (this.suggestion = a, m6(this.j, a), this.playButton.Oa("url", this.suggestion.Km()), p6(this))
    };
    g.k.sj = function() {
        return 0 < this.B
    };
    g.k.bx = function() {
        this.sj() || (this.B = Date.now(), g5a(this), f5a(this.G, i5a(this)), g.ko(this.G.getRootNode(), "countdown-running", this.sj()))
    };
    g.k.ot = function() {
        this.Wo();
        g5a(this);
        var a = this.j.Ca("ytp-autonav-endscreen-upnext-header");
        a && g.sh(a, "\u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u0627\u0644\u062a\u0627\u0644\u064a")
    };
    g.k.Wo = function() {
        this.sj() && (this.C.stop(), this.B = 0)
    };
    g.k.select = function(a) {
        this.G.nextVideo(!1, void 0 === a ? !1 : a);
        this.Wo()
    };
    g.k.jM = function(a) {
        g.EO(a, this.G) && (a.currentTarget === this.playButton.element ? this.G.ub(this.playButton.element) : a.currentTarget === this.j.Ca("ytp-autonav-endscreen-link-container") && (a = this.j.Ca("ytp-autonav-endscreen-link-container"), this.G.Wa(a, !0), this.G.ub(a)), this.select())
    };
    g.k.HU = function() {
        this.G.ub(this.cancelButton.element);
        g.vN(this.G, !0);
        this.D && this.G.Pa("innertubeCommand", this.D)
    };
    g.k.onVideoDataChange = function(a, b) {
        var c;
        this.D = null == (c = b.pU) ? void 0 : c.command
    };
    g.k.W0 = function(a) {
        if (j5a(this)) {
            var b = this.G.getVideoData().watchToWatchTransitionRenderer,
                c = null == b ? void 0 : b.fromColorPaletteDark;
            b = null == b ? void 0 : b.toColorPaletteDark;
            if (c && b) {
                var d = this.element;
                d.style.setProperty("--w2w-start-background-color", g.hM(c.surgeColor));
                d.style.setProperty("--w2w-start-primary-text-color", g.hM(c.primaryTitleColor));
                d.style.setProperty("--w2w-start-secondary-text-color", g.hM(c.secondaryTitleColor));
                d.style.setProperty("--w2w-end-background-color", g.hM(b.surgeColor));
                d.style.setProperty("--w2w-end-primary-text-color", g.hM(b.primaryTitleColor));
                d.style.setProperty("--w2w-end-secondary-text-color", g.hM(b.secondaryTitleColor));
                d.style.setProperty("--w2w-animation-duration", a + "ms")
            }
            g.ko(this.element, "ytp-w2w-animate", !0)
        }
    };
    g.k.GU = function(a) {
        this.G.K("web_autonav_color_transition") && 2 !== a && g.ko(this.element, "ytp-w2w-animate", !1)
    };
    g.k.iM = function() {
        var a = this.G.Ze();
        this.I && this.qb !== a && g.XK(this, a);
        p6(this);
        this.G.Wa(this.container.element, a);
        this.G.Wa(this.cancelButton.element, a);
        this.G.Wa(this.j.Ca("ytp-autonav-endscreen-link-container"), a);
        this.G.Wa(this.playButton.element, a)
    };
    g.k.Fg = function(a) {
        return 400 > a.width || 459 > a.height
    };
    g.v(q6, g.W);
    g.k = q6.prototype;
    g.k.create = function() {
        this.created = !0
    };
    g.k.destroy = function() {
        this.created = !1
    };
    g.k.by = function() {
        return !1
    };
    g.k.Ze = function() {
        return !1
    };
    g.k.aQ = function() {
        return !1
    };
    g.v(r6, g.W);
    g.k = r6.prototype;
    g.k.XB = function() {
        this.notification && (this.C.stop(), this.yc(this.B), this.B = null, this.notification.close(), this.notification = null)
    };
    g.k.gB = function(a) {
        this.suggestion = a;
        m6(this, a, "hqdefault.jpg")
    };
    g.k.kM = function() {
        g.XK(this, this.api.Ze());
        this.api.Wa(this.element, this.api.Ze());
        this.api.Wa(this.Ca("ytp-upnext-autoplay-icon"), this.api.Ze());
        this.cancelButton && this.api.Wa(this.cancelButton.element, this.api.Ze())
    };
    g.k.b2 = function() {
        window.focus();
        this.XB()
    };
    g.k.bx = function(a) {
        var b = this;
        this.sj() || (g.Vx("a11y-announce", "\u0627\u0644\u062a\u0627\u0644\u064a " + this.suggestion.title), this.u = (0, g.T)(), this.j = new g.Yn(function() {
            l5a(b, a)
        }, 25), l5a(this, a), f5a(this.api, k5a(this, a)));
        g.io(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.hide = function() {
        g.W.prototype.hide.call(this)
    };
    g.k.sj = function() {
        return !!this.j
    };
    g.k.ot = function() {
        this.Wo();
        this.u = (0, g.T)();
        l5a(this);
        g.go(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.Wo = function() {
        this.sj() && (this.j.dispose(), this.j = null)
    };
    g.k.select = function(a) {
        a = void 0 === a ? !1 : a;
        if (this.api.V().K("autonav_notifications") && a && window.Notification && "function" === typeof document.hasFocus) {
            var b = Notification.permission;
            "default" === b ? Notification.requestPermission() : "granted" !== b || document.hasFocus() || (this.XB(), this.notification = new Notification("\u0627\u0644\u062a\u0627\u0644\u064a", {
                body: this.suggestion.title,
                icon: this.suggestion.Lf()
            }), this.B = this.T(this.notification, "click", this.b2), this.C.start())
        }
        this.Wo();
        this.api.nextVideo(!1, a)
    };
    g.k.JU = function(a) {
        !g.rh(this.cancelButton.element, g.Bx(a)) && g.EO(a, this.api) && (this.api.Ze() && this.api.ub(this.Ca("ytp-upnext-autoplay-icon")), this.select())
    };
    g.k.IU = function() {
        this.api.Ze() && this.cancelButton && this.api.ub(this.cancelButton.element);
        g.vN(this.api, !0)
    };
    g.k.R1 = function(a) {
        this.api.getPresentingPlayerType();
        this.show();
        this.bx(a)
    };
    g.k.S1 = function() {
        this.api.getPresentingPlayerType();
        this.Wo();
        this.hide()
    };
    g.k.ra = function() {
        this.Wo();
        this.XB();
        g.W.prototype.ra.call(this)
    };
    g.v(s6, q6);
    g.k = s6.prototype;
    g.k.create = function() {
        q6.prototype.create.call(this);
        this.C.T(this.player, "appresize", this.Fx);
        this.C.T(this.player, "onVideoAreaChange", this.Fx);
        this.C.T(this.player, "videodatachange", this.onVideoDataChange);
        this.C.T(this.player, "autonavchange", this.lM);
        this.C.T(this.player, "autonavcancel", this.KU);
        this.onVideoDataChange()
    };
    g.k.show = function() {
        q6.prototype.show.call(this);
        (this.I || this.B && this.B !== this.videoData.clientPlaybackNonce) && g.vN(this.player, !1);
        g.BN(this.player) && this.by() && !this.B ? (t6(this), 2 === this.videoData.autonavState ? this.player.V().K("fast_autonav_in_background") && 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.bx() : 3 === this.videoData.autonavState && this.j.ot()) : (g.vN(this.player, !0), t6(this));
        this.Fx()
    };
    g.k.hide = function() {
        q6.prototype.hide.call(this);
        this.j.ot();
        t6(this)
    };
    g.k.Fx = function() {
        var a = this.player.hk(!0, this.player.isFullscreen());
        t6(this);
        p6(this.u);
        g.ko(this.element, "ytp-autonav-cancelled-small-mode", this.Fg(a));
        g.ko(this.element, "ytp-autonav-cancelled-tiny-mode", this.fD(a));
        g.ko(this.element, "ytp-autonav-cancelled-mini-mode", 400 >= a.width || 360 >= a.height);
        this.overlay && g.Bl(this.overlay.element, {
            width: a.width + "px"
        });
        if (!this.D) {
            a = g.t(this.videos.entries());
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = g.t(b.value);
                b = c.next().value;
                c = c.next().value;
                g.ko(c.element,
                    "ytp-suggestion-card-with-margin", 1 === b % 2)
            }
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData();
        if (this.videoData !== a && a) {
            this.videoData = a;
            if ((a = this.videoData.suggestions) && a.length) {
                var b = g.zI(this.videoData);
                b && (this.j.gB(b), this.j !== this.u && this.u.gB(b));
                for (b = 0; b < t5a.length; ++b) {
                    var c = t5a[b];
                    if (a && a[c]) {
                        this.videos[b] = new n6(this.player);
                        var d = this.videos[b];
                        c = a[c];
                        d.suggestion !== c && (d.suggestion = c, m6(d, c));
                        g.N(this, this.videos[b]);
                        this.videos[b].Da(this.J.element)
                    }
                }
            }
            this.Fx()
        }
    };
    g.k.lM = function(a) {
        1 === a ? (this.I = !1, this.B = this.videoData.clientPlaybackNonce, this.j.Wo(), this.qb && this.Fx()) : (this.I = !0, this.Ze() && (2 === a ? this.j.bx() : 3 === a && this.j.ot()))
    };
    g.k.KU = function(a) {
        a ? this.lM(1) : (this.B = null, this.I = !1)
    };
    g.k.by = function() {
        return 1 !== this.videoData.autonavState
    };
    g.k.Fg = function(a) {
        return (910 > a.width || 459 > a.height) && !this.fD(a) && !(400 >= a.width || 360 >= a.height)
    };
    g.k.fD = function(a) {
        return 800 > a.width && !(400 >= a.width || 360 >= a.height)
    };
    g.k.Ze = function() {
        return this.qb && g.BN(this.player) && this.by() && !this.B
    };
    var t5a = [1, 3, 2, 4];
    g.v(m5a, q6);
    m5a.prototype.Ja = function() {
        var a = this.player.getVideoData();
        this.j.update({
            profilePicture: a.profilePicture,
            author: a.author
        });
        this.subscribeButton.channelId = a.Lk;
        var b = this.subscribeButton;
        a.subscribed ? b.u() : b.B()
    };
    g.v(u6, g.W);
    u6.prototype.select = function() {
        (this.api.Ml(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.Gy || void 0) || this.api.K("web_player_endscreen_double_log_fix_killswitch")) && this.api.ub(this.element)
    };
    u6.prototype.onClick = function(a) {
        g.EO(a, this.api, this.u, this.suggestion.sessionData || void 0) && this.select()
    };
    u6.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                g.Gx(a) || (this.select(), g.Fx(a))
        }
    };
    u6.prototype.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.V();
        this.u = a.D ? !1 : b.u
    };
    g.v(v6, q6);
    g.k = v6.prototype;
    g.k.create = function() {
        q6.prototype.create.call(this);
        var a = this.player.getVideoData();
        a && (this.videoData = a);
        this.In();
        this.u.T(this.player, "appresize", this.In);
        this.u.T(this.player, "onVideoAreaChange", this.In);
        this.u.T(this.player, "videodatachange", this.onVideoDataChange);
        this.u.T(this.player, "autonavchange", this.vF);
        this.u.T(this.player, "autonavcancel", this.LU);
        a = this.videoData.autonavState;
        a !== this.S && this.vF(a);
        this.u.T(this.element, "transitionend", this.B3)
    };
    g.k.destroy = function() {
        g.bz(this.u);
        g.$e(this.stills);
        this.stills = [];
        q6.prototype.destroy.call(this);
        g.io(this.element, "ytp-show-tiles");
        this.I.stop();
        this.S = this.videoData.autonavState
    };
    g.k.by = function() {
        return 1 !== this.videoData.autonavState
    };
    g.k.show = function() {
        var a = this.qb;
        q6.prototype.show.call(this);
        n5a(this);
        g.io(this.element, "ytp-show-tiles");
        this.player.V().isMobile ? g.$n(this.I) : this.I.start();
        (this.D || this.C && this.C !== this.videoData.clientPlaybackNonce) && g.vN(this.player, !1);
        w6(this) ? (x6(this), 2 === this.videoData.autonavState ? this.player.V().K("fast_autonav_in_background") && 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.bx() : 3 === this.videoData.autonavState && this.j.ot()) : (g.vN(this.player, !0), x6(this));
        a !== this.qb &&
            this.player.Wa(this.element, !0)
    };
    g.k.hide = function() {
        var a = this.qb;
        q6.prototype.hide.call(this);
        this.j.ot();
        x6(this);
        a !== this.qb && this.player.Wa(this.element, !1)
    };
    g.k.B3 = function(a) {
        g.Bx(a) === this.element && this.In()
    };
    g.k.In = function() {
        var a = n5a(this);
        if (a.length) {
            g.go(this.element, "ytp-endscreen-paginate");
            var b = this.G.hk(!0, this.G.isFullscreen()),
                c = g.qN(this.G);
            c && (c = c.Vf() ? 48 : 32, b.width -= 2 * c);
            var d = b.width / b.height,
                e = 96 / 54,
                f = c = 2,
                h = Math.max(b.width / 96, 2),
                l = Math.max(b.height / 54, 2),
                m = a.length,
                n = Math.pow(2, 2);
            var p = m * n + (Math.pow(2, 2) - n);
            p += Math.pow(2, 2) - n;
            for (p -= n; 0 < p && (c < h || f < l);) {
                var q = c / 2,
                    r = f / 2,
                    w = c <= h - 2 && p >= r * n,
                    y = f <= l - 2 && p >= q * n;
                if ((q + 1) / r * e / d > d / (q / (r + 1) * e) && y) p -= q * n, f += 2;
                else if (w) p -= r * n, c += 2;
                else if (y) p -= q *
                    n, f += 2;
                else break
            }
            e = !1;
            p >= 3 * n && 6 >= m * n - p && (4 <= f || 4 <= c) && (e = !0);
            n = 96 * c;
            p = 54 * f;
            d = n / p < d ? b.height / p : b.width / n;
            d = Math.min(d, 2);
            n = Math.floor(Math.min(b.width, n * d));
            p = Math.floor(Math.min(b.height, p * d));
            b = this.table.element;
            g.Ll(b, n, p);
            g.Bl(b, {
                marginLeft: n / -2 + "px",
                marginTop: p / -2 + "px"
            });
            this.j.gB(g.zI(this.videoData));
            this.j instanceof o6 && p6(this.j);
            g.ko(this.element, "ytp-endscreen-takeover", w6(this));
            x6(this);
            n += 4;
            p += 4;
            for (h = d = 0; h < c; h++)
                for (l = 0; l < f; l++)
                    if (q = d, w = 0, e && h >= c - 2 && l >= f - 2 ? w = 1 : 0 === l % 2 && 0 === h % 2 && (2 >
                            l && 2 > h ? 0 === l && 0 === h && (w = 2) : w = 2), q = g.Gg(q + this.B, m), 0 !== w) {
                        r = this.stills[d];
                        r || (r = new u6(this.player), this.stills[d] = r, b.appendChild(r.element));
                        y = Math.floor(p * l / f);
                        var z = Math.floor(n * h / c),
                            B = Math.floor(p * (l + w) / f) - y - 4,
                            D = Math.floor(n * (h + w) / c) - z - 4;
                        g.Hl(r.element, z, y);
                        g.Ll(r.element, D, B);
                        g.Bl(r.element, "transitionDelay", (l + h) / 20 + "s");
                        g.ko(r.element, "ytp-videowall-still-mini", 1 === w);
                        g.ko(r.element, "ytp-videowall-still-large", 2 < w);
                        this.Z && (w = Math.max(D, B), g.ko(r.element, "ytp-videowall-still-round-large",
                            256 <= w), g.ko(r.element, "ytp-videowall-still-round-medium", 96 < w && 256 > w), g.ko(r.element, "ytp-videowall-still-round-small", 96 >= w));
                        q = a[q];
                        r.suggestion !== q && (r.suggestion = q, w = r.api.V(), y = g.fo(r.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", m6(r, q, y), g.LF(w) && (y = q.Km(), z = {}, w.ya && g.cN(z, w.loaderUrl), y = g.xi(y, g.bN(z, "emb_rel_end")), r.Oa("url", y)), (q = (q = q.sessionData) && q.itct) && r.api.oi(r.element, q));
                        d++
                    }
            g.ko(this.element, "ytp-endscreen-paginate", d < m);
            for (a = this.stills.length - 1; a >=
                d; a--) c = this.stills[a], g.ph(c.element), g.Ze(c);
            this.stills.length = d
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData();
        this.videoData !== a && (this.B = 0, this.videoData = a, this.In())
    };
    g.k.MU = function() {
        this.B += this.stills.length;
        this.In()
    };
    g.k.NU = function() {
        this.B -= this.stills.length;
        this.In()
    };
    g.k.aQ = function() {
        return this.j.sj()
    };
    g.k.vF = function(a) {
        1 === a ? (this.D = !1, this.C = this.videoData.clientPlaybackNonce, this.j.Wo(), this.qb && this.In()) : (this.D = !0, this.qb && w6(this) && (2 === a ? this.j.bx() : 3 === a && this.j.ot()))
    };
    g.k.LU = function(a) {
        if (a) {
            for (a = 0; a < this.stills.length; a++) this.G.Wa(this.stills[a].element, !0);
            this.vF(1)
        } else this.C = null, this.D = !1;
        this.In()
    };
    g.k.Ze = function() {
        return this.qb && w6(this)
    };
    g.v(o5a, g.W);
    g.k = o5a.prototype;
    g.k.onClick = function(a) {
        g.FO(this.getVideoUrl(), this.G, a);
        this.G.ub(this.element)
    };
    g.k.getVideoUrl = function() {
        var a = !0;
        switch (this.buttonType) {
            case 1:
                a = !0;
                break;
            case 2:
                a = !1
        }
        a = this.G.getVideoUrl(a, !1, !1, !0);
        var b = this.G.V();
        if (g.LF(b) || g.WF(b)) {
            var c = {};
            b.ya && g.LF(b) && g.cN(c, b.loaderUrl);
            a: {
                switch (this.buttonType) {
                    case 2:
                        b = "emb_ytp_continue_watching";
                        break a
                }
                b = "emb_ytp_watch_again"
            }
            g.bN(c, b);
            a = g.xi(a, c)
        }
        return a
    };
    g.k.Wa = function() {
        this.G.Wa(this.element, this.qb && this.ya)
    };
    g.k.show = function() {
        g.W.prototype.show.call(this);
        this.Wa()
    };
    g.k.hide = function() {
        g.W.prototype.hide.call(this);
        this.Wa()
    };
    g.k.Vb = function(a) {
        g.W.prototype.Vb.call(this, a);
        this.Wa()
    };
    g.v(y6, q6);
    y6.prototype.show = function() {
        if (3 !== this.player.getPlayerState()) {
            q6.prototype.show.call(this);
            var a;
            null == (a = g.qN(this.player)) || a.zA(!0);
            this.player.Wa(this.element, !0);
            this.watchButton.Vb(!0)
        }
    };
    y6.prototype.hide = function() {
        q6.prototype.hide.call(this);
        var a;
        null == (a = g.qN(this.player)) || a.zA(!1);
        this.player.Wa(this.element, !1);
        this.watchButton.Vb(!1)
    };
    g.v(s5a, g.dO);
    g.k = s5a.prototype;
    g.k.Mt = function() {
        var a;
        if (null == (a = g.qN(this.player)) ? 0 : a.Zm()) return !0;
        a = this.player.getVideoData();
        var b;
        var c = !!((null == a ? 0 : g.zI(a)) || (null == a ? 0 : null == (b = a.suggestions) ? 0 : b.length));
        b = !p5a(this.player) || c;
        c = a.Th || g.WF(a.u);
        var d = this.player.My();
        a = a.mutedAutoplay;
        return b && !c && !d && !a
    };
    g.k.Ze = function() {
        return this.endScreen.Ze()
    };
    g.k.n_ = function() {
        return this.Ze() ? this.endScreen.aQ() : !1
    };
    g.k.ra = function() {
        this.player.Ff("endscreen");
        g.dO.prototype.ra.call(this)
    };
    g.k.load = function() {
        var a = this.player.getVideoData();
        var b = a.transitionEndpointAtEndOfStream;
        if (b && b.videoId) {
            var c = this.player.wb().je.get("heartbeat"),
                d = g.zI(a);
            !d || b.videoId !== d.videoId || a.FO ? (this.player.Ml(b.videoId, void 0, void 0, !0, !0, b), c && c.lD("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), a = !0) : a = !1
        } else a = !1;
        a || (g.dO.prototype.load.call(this), this.endScreen.show())
    };
    g.k.unload = function() {
        g.dO.prototype.unload.call(this);
        this.endScreen.hide();
        this.endScreen.destroy()
    };
    g.k.onCueRangeEnter = function(a) {
        this.Mt() && (this.endScreen.created || this.endScreen.create(), "load" === a.getId() && this.load())
    };
    g.k.onCueRangeExit = function(a) {
        "load" === a.getId() && this.loaded && this.unload()
    };
    g.k.onVideoDataChange = function() {
        r5a(this);
        this.u && q5a(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.j ? this.endScreen = new s6(this.player) : this.endScreen = new v6(this.player), g.N(this, this.endScreen), g.AN(this.player, this.endScreen.element, 4))
    };
    g.cO("endscreen", s5a);
})(_yt_player);