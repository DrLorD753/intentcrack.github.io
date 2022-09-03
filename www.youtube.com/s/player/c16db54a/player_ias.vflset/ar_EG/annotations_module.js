(function(g) {
    var window = this;
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var F4 = function(a) {
            a.ma("cardstatechange", a.Ci() && a.tm() ? 1 : 0)
        },
        G4 = function(a, b) {
            var c = g.Ma(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null == a) return;
                a = a[d[c]]
            }
            return a
        },
        y1a = function(a) {
            var b = g.Jl(a);
            a = g.Ml(a);
            return new g.yl(b.x, b.y, a.width, a.height)
        },
        z1a = function(a) {
            return Math.pow(a, 3)
        },
        A1a = function(a) {
            return 3 * a * a - 2 * a * a * a
        },
        J4 = function(a) {
            a = g.Pa(a);
            delete H4[a];
            g.Df(H4) && I4 && I4.stop()
        },
        C1a = function() {
            I4 || (I4 = new g.Yn(function() {
                B1a()
            }, 20));
            var a = I4;
            a.isActive() || a.start()
        },
        B1a = function() {
            var a = g.Va();
            g.mf(H4, function(b) {
                D1a(b, a)
            });
            g.Df(H4) || C1a()
        },
        K4 = function(a, b, c, d) {
            g.so.call(this);
            if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
            if (a.length != b.length) throw Error("Start and end points must be the same length");
            this.u = a;
            this.S = b;
            this.duration = c;
            this.I = d;
            this.coords = [];
            this.progress = this.J = 0;
            this.D = null
        },
        D1a = function(a, b) {
            b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
            a.progress = (b - a.startTime) / (a.endTime - a.startTime);
            1 < a.progress && (a.progress = 1);
            a.J = 1E3 / (b - a.D);
            a.D = b;
            E1a(a, a.progress);
            1 == a.progress ? (a.j = 0, J4(a), a.onFinish(), a.Wz()) : a.Sc() && a.tF()
        },
        E1a = function(a, b) {
            "function" === typeof a.I && (b = a.I(b));
            a.coords = Array(a.u.length);
            for (var c = 0; c < a.u.length; c++) a.coords[c] = (a.S[c] - a.u[c]) * b + a.u[c]
        },
        F1a = function(a, b) {
            g.bf.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.fps = b.J;
            this.state = b.j
        },
        L4 = function(a, b, c, d, e) {
            K4.call(this, b, c, d, e);
            this.element = a
        },
        G1a = function(a, b, c, d, e) {
            if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
            L4.call(this, a, b, c, d, e)
        },
        M4 = function(a) {
            g.K.call(this);
            this.u = a || window;
            this.j = []
        },
        N4 = function(a) {
            return a.baseUrl || null
        },
        O4 = function(a, b) {
            return g.wm(g.Pk(a, b), function(c) {
                return !!c
            })
        },
        H1a = function(a, b, c) {
            function d(X) {
                var R = X.hovercardButton;
                if (!R) return null;
                R = R.subscribeButtonRenderer;
                if (!R) return null;
                var oa = f(R.unsubscribedButtonText),
                    sa = f(R.subscribedButtonText);
                if (R.subscribed) {
                    var Ba = f(R.subscriberCountWithUnsubscribeText);
                    var va = f(R.subscriberCountText)
                } else Ba = f(R.subscriberCountText), va = f(R.subscriberCountWithSubscribeText);
                var wa = null;
                if (X.signinEndpoint) {
                    wa = G4(X, "signinEndpoint", "webNavigationEndpointData", "url");
                    if (!wa) {
                        var Ja, Ka, qa;
                        wa = null == (Ja = R.signInEndpoint) ? void 0 : null == (Ka = Ja.commandMetadata) ? void 0 : null == (qa = Ka.webCommandMetadata) ?
                            void 0 : qa.url
                    }
                    if (!wa) return null
                }
                return oa && (sa || wa) ? {
                    subscribed: R.subscribed,
                    subscribeText: oa,
                    subscribeCount: Ba,
                    unsubscribeText: sa,
                    unsubscribeCount: va,
                    enabled: R.enabled,
                    signinUrl: wa,
                    classic: X.useClassicSubscribeButton
                } : null
            }

            function e(X) {
                if (X) {
                    var R = [],
                        oa = X.videoId;
                    oa && R.push("v=" + oa);
                    (oa = X.playlistId) && R.push("list=" + oa);
                    (X = X.startTimeSeconds) && R.push("t=" + X);
                    return "/watch?" + R.join("&")
                }
            }

            function f(X) {
                if (!X) return null;
                var R = X.simpleText;
                return R ? R : X.runs ? g.Pk(X.runs, function(oa) {
                    return oa.text
                }).join("") : null
            }
            b = b.endscreenElementRenderer;
            if (!b) return null;
            var h = b.style,
                l = b.endpoint || {},
                m = null,
                n = null,
                p = !1,
                q = null,
                r = null,
                w = null,
                y = null,
                z = !1,
                B = null,
                D = null,
                G = null,
                H = null,
                L = null,
                M = null;
            if ("VIDEO" === h) l.urlEndpoint ? m = l.urlEndpoint.url : (M = l.watchEndpoint, m = e(M)), n = !1, q = a, b.thumbnailOverlays ? (p = b.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer, r = f(p.text), p = "LIVE" === p.style) : r = f(b.videoDuration);
            else if ("PLAYLIST" === h) l.urlEndpoint ? m = l.urlEndpoint.url : (M = l.watchEndpoint, m = e(M)), n = !1, q = a, w = f(b.playlistLength);
            else if ("CHANNEL" === h) {
                if (z = G4(l, "browseEndpoint", "browseId")) y = z, m = "/channel/" + y;
                n = !1;
                q = "new";
                (z = !!b.isSubscribe) ? B = d(b): D = f(b.subscribersText)
            } else "WEBSITE" === h ? ((G = G4(l, "urlEndpoint", "url")) && (m = G), n = !0, q = "new", G = b.icon.thumbnails[0].url) : "CREATOR_MERCHANDISE" === h && (b.productPrice && (H = f(b.productPrice)), b.additionalFeesText && (L = f(b.additionalFeesText)), (n = G4(l, "urlEndpoint", "url")) && (m = n), n = !0, q = "new");
            a = G4(b, "title", "accessibility", "accessibilityData", "label");
            var J = b.endpoint ? b.endpoint.clickTrackingParams :
                null,
                Q = "";
            if (b.metadata) {
                var P = f(b.metadata);
                P && (Q = P)
            }
            return {
                id: "element-" + c,
                type: h,
                title: f(b.title),
                metadata: Q,
                callToAction: f(b.callToAction),
                HO: b.image,
                iconUrl: G,
                left: Number(b.left),
                width: Number(b.width),
                top: Number(b.top),
                aspectRatio: Number(b.aspectRatio),
                startMs: Math.floor(Number(b.startMs)),
                endMs: Math.floor(Number(b.endMs)),
                videoDuration: r,
                isLiveVideo: p,
                playlistLength: w,
                channelId: y,
                subscribeButton: B,
                subscribersText: D,
                isSubscribe: z,
                targetUrl: m || null,
                q_: n,
                sessionData: J ? {
                    itct: J
                } : null,
                L5: q,
                Vx: a ? a : null,
                isPlaceholder: b.isPlaceholder,
                impressionUrls: O4(b.impressionUrls || [], N4),
                b_: O4(b.hovercardShowUrls || [], N4),
                clickUrls: O4(l.loggingUrls || [], N4),
                visualElement: g.uz(b.trackingParams),
                productPrice: H,
                additionalFeesText: L,
                watchEndpoint: M || null
            }
        },
        I1a = function(a, b) {
            var c = {
                startMs: Math.floor(Number(a.startMs)),
                impressionUrls: O4(a.impressionUrls || [], N4),
                elements: O4(a.elements || [], function(d, e) {
                    return H1a(b, d, e)
                })
            };
            a.trackingParams && (c.visualElement = g.uz(a.trackingParams));
            return c
        },
        J1a = function(a) {
            g.dO.call(this, a);
            this.B = this.endscreen = null;
            this.j = {};
            this.D = {};
            this.C = this.u = null;
            this.J = [];
            this.Z = !0;
            this.I = 0;
            a = a.V();
            this.S = g.RF(a) || g.VF(a);
            this.ea = a.experiments.ib("web_rounded_thumbnails");
            this.events = new g.YD(this);
            g.N(this, this.events);
            this.events.T(this.player, g.uA("creatorendscreen"), this.onCueRangeEnter);
            this.events.T(this.player, g.vA("creatorendscreen"), this.onCueRangeExit);
            this.events.T(this.player, "resize", this.Cb);
            this.events.T(window, "focus", this.N3);
            this.load();
            var b = g.ih("STYLE");
            (g.ah("HEAD")[0] ||
                document.body).appendChild(b);
            g.af(this, function() {
                g.ph(b)
            });
            b.sheet && (b.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), b.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0))
        },
        K1a = function(a) {
            return a.player.getVideoData().D ? "current" : a.S ? "new" : "current"
        },
        P4 = function(a) {
            return "creator-endscreen-editor" === a.player.V().playerStyle
        },
        L1a = function(a) {
            var b = a.player.getVideoData(),
                c = b.videoId;
            a.B && a.B.abort();
            c = {
                method: "POST",
                onFinish: function(e) {
                    var f = a.B = null;
                    200 === e.status && (e = e.responseText, ")]}" === e.substring(0, 3) && (e = e.substring(3), f = JSON.parse(e), f = I1a(f, K1a(a))));
                    Q4(a, f)
                },
                urlParams: {
                    v: c
                },
                withCredentials: !0
            };
            a.S && (c.urlParams.ptype = "embedded");
            var d = b.jr;
            d && (c.postParams = {
                ad_tracking: d
            });
            if (b = g.WBa(b))
                if (b = g.qg(b), b = g.pg(b)) a.B = g.Bu(b, c)
        },
        Q4 = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            a.player.Ff("creatorendscreen");
            a.u && (a.u.dispose(), a.u = null, a.C.dispose(), a.C = null);
            for (var d = g.t(Object.values(a.j)), e = d.next(); !e.done; e = d.next()) e.value.dispose();
            a.j = {};
            a.D = {};
            0 < a.J.length && (a.J.forEach(function(l) {
                l.dispose()
            }), a.J.length = 0);
            a.I = 0;
            if ((a.endscreen = b) && b.elements) {
                c && M1a(a);
                c = [];
                d = new g.sA(b.startMs, 0x7ffffffffffff, {
                    id: "ytp-ce-in-endscreen",
                    namespace: "creatorendscreen"
                });
                c.push(d);
                a.player.V().isMobile || (a.u = new g.W({
                    F: "div",
                    N: "ytp-ce-shadow"
                }), g.AN(a.player, a.u.element, 4), a.C = new g.JL(a.u, 200));
                for (d = 0; d < b.elements.length; ++d) {
                    e = b.elements[d];
                    var f = N1a(a, e);
                    if (f) {
                        a.j[e.id] = f;
                        a.D[e.id] = e;
                        g.AN(a.player, f.element, 4);
                        var h = new g.sA(e.startMs, e.endMs, {
                            id: "ytp-ce-element-" + e.id,
                            namespace: "creatorendscreen"
                        });
                        c.push(h);
                        O1a(a,
                            f, e)
                    } else g.rz(new g.Qv("buildEndscreenElement null", e))
                }
                a.player.oe(c);
                a.Cb()
            }
        },
        M1a = function(a) {
            var b = g.Az(),
                c = g.Bz();
            c && b && a.endscreen.visualElement && g.Fz(void 0, c, b, [a.endscreen.visualElement])
        },
        N1a = function(a, b) {
            var c = null;
            switch (b.type) {
                case "VIDEO":
                    a = {
                        F: "div",
                        Fa: ["ytp-ce-element", "ytp-ce-video"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.Vx || "",
                            "aria-hidden": "true"
                        },
                        W: [{
                            F: "div",
                            N: "ytp-ce-element-shadow"
                        }, {
                            F: "div",
                            N: "ytp-ce-covering-image",
                            X: R4(b)
                        }, {
                            F: "div",
                            N: "ytp-ce-covering-shadow-top"
                        }, {
                            F: "a",
                            N: "ytp-ce-covering-overlay",
                            X: {
                                href: S4(a, b.targetUrl),
                                tabindex: "-1"
                            },
                            W: [{
                                F: "div",
                                Fa: ["ytp-ce-video-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.wo(b.title || "")
                                },
                                qa: b.title
                            }, {
                                F: "div",
                                N: b.isLiveVideo ? "ytp-ce-live-video-duration" : "ytp-ce-video-duration",
                                qa: b.videoDuration || void 0
                            }]
                        }]
                    };
                    c = new g.W(a);
                    break;
                case "PLAYLIST":
                    a = {
                        F: "div",
                        Fa: ["ytp-ce-element", "ytp-ce-playlist"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.Vx || "",
                            "aria-hidden": "true"
                        },
                        W: [{
                            F: "div",
                            N: "ytp-ce-element-shadow"
                        }, {
                            F: "div",
                            N: "ytp-ce-covering-image",
                            X: R4(b)
                        }, {
                            F: "div",
                            N: "ytp-ce-covering-shadow-top"
                        }, {
                            F: "a",
                            N: "ytp-ce-covering-overlay",
                            X: {
                                href: S4(a, b.targetUrl),
                                tabindex: "-1"
                            },
                            W: [{
                                F: "div",
                                Fa: ["ytp-ce-playlist-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.wo(b.title || "")
                                },
                                qa: b.title
                            }, {
                                F: "div",
                                N: "ytp-ce-playlist-count",
                                W: [{
                                    F: "div",
                                    N: "ytp-ce-playlist-icon"
                                }, {
                                    F: "div",
                                    N: "ytp-ce-playlist-count-text",
                                    qa: b.playlistLength || void 0
                                }]
                            }]
                        }]
                    };
                    c = new g.W(a);
                    break;
                case "CHANNEL":
                    c = {
                        F: "div",
                        Fa: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.Vx || "",
                            "aria-hidden": "true"
                        },
                        W: [{
                            F: "div",
                            N: "ytp-ce-element-shadow"
                        }, {
                            F: "div",
                            N: "ytp-ce-expanding-overlay",
                            W: [{
                                F: "div",
                                N: "ytp-ce-expanding-overlay-hider"
                            }, {
                                F: "div",
                                N: "ytp-ce-expanding-overlay-background"
                            }, {
                                F: "div",
                                N: "ytp-ce-expanding-overlay-content",
                                W: [{
                                    F: "div",
                                    N: "ytp-ce-expanding-overlay-body",
                                    W: [{
                                        F: "div",
                                        N: "ytp-ce-expanding-overlay-body-padding",
                                        W: [{
                                            F: "a",
                                            Fa: ["ytp-ce-channel-title", "ytp-ce-link"],
                                            X: {
                                                href: S4(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1",
                                                dir: g.wo(b.title || "")
                                            },
                                            qa: b.title
                                        }, b.subscribeButton ? {
                                            F: "div",
                                            N: "ytp-ce-subscribe-container",
                                            W: [{
                                                F: "div",
                                                N: "ytp-ce-channel-subscribe"
                                            }]
                                        } : "", b.subscribersText ? {
                                            F: "div",
                                            N: "ytp-ce-channel-subscribers-text",
                                            qa: b.subscribersText
                                        } : "", b.metadata ? {
                                            F: "div",
                                            Fa: ["ytp-ce-channel-metadata", "yt-ui-ellipsis",
                                                "yt-ui-ellipsis-3"
                                            ],
                                            qa: b.metadata
                                        } : ""]
                                    }]
                                }]
                            }]
                        }, {
                            F: "div",
                            N: "ytp-ce-expanding-image",
                            X: R4(b)
                        }]
                    };
                    c = new g.W(c);
                    var d = g.bh(document, "div", "ytp-ce-channel-subscribe", c.element)[0];
                    if (b.subscribeButton && b.channelId) {
                        g.go(d, "ytp-ce-subscribe-button");
                        if (a.player.V().isMobile) {
                            var e = null;
                            var f = b.sessionData.itct
                        } else e = "endscreen", f = null;
                        e = new g.hP(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, !!b.subscribeButton.enabled, !!b.subscribeButton.classic, b.channelId, !!b.subscribeButton.subscribed, e, f, b.subscribeButton.signinUrl, a.player);
                        d.appendChild(e.element);
                        a.J.push(e)
                    }
                    break;
                case "WEBSITE":
                    a = {
                        F: "div",
                        Fa: ["ytp-ce-element", "ytp-ce-website"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.Vx || "",
                            "aria-hidden": "true"
                        },
                        W: [{
                            F: "div",
                            N: "ytp-ce-element-shadow"
                        }, {
                            F: "div",
                            N: "ytp-ce-expanding-overlay",
                            W: [{
                                F: "div",
                                N: "ytp-ce-expanding-overlay-hider"
                            }, {
                                F: "div",
                                N: "ytp-ce-expanding-overlay-background"
                            }, {
                                F: "div",
                                N: "ytp-ce-expanding-overlay-content",
                                W: [{
                                    F: "div",
                                    N: "ytp-ce-expanding-overlay-body",
                                    W: [{
                                        F: "div",
                                        N: "ytp-ce-expanding-overlay-body-padding",
                                        W: [{
                                            F: "div",
                                            N: "ytp-ce-website-title",
                                            X: {
                                                dir: g.wo(b.title || "")
                                            },
                                            qa: b.title
                                        }, {
                                            F: "div",
                                            N: "ytp-ce-website-metadata",
                                            qa: b.metadata
                                        }, {
                                            F: "a",
                                            Fa: ["ytp-ce-website-goto", "ytp-ce-link"],
                                            X: {
                                                href: S4(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            qa: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            F: "div",
                            N: "ytp-ce-expanding-image",
                            X: R4(b)
                        }, {
                            F: "div",
                            N: "ytp-ce-expanding-icon",
                            X: P1a(b.iconUrl)
                        }]
                    };
                    c = new g.W(a);
                    break;
                case "CREATOR_MERCHANDISE":
                    c =
                        "", b.productPrice && (c = {
                            F: "div",
                            N: "ytp-ce-merchandise-price-container",
                            W: [{
                                F: "div",
                                N: "ytp-ce-merchandise-price",
                                qa: b.productPrice
                            }]
                        }, b.additionalFeesText && c.W.push({
                            F: "div",
                            N: "ytp-ce-merchandise-additional-fees",
                            qa: b.additionalFeesText
                        })), a = {
                            F: "div",
                            Fa: ["ytp-ce-element", "ytp-ce-merchandise"],
                            X: {
                                tabindex: "0",
                                "aria-label": b.Vx || "",
                                "aria-hidden": "true"
                            },
                            W: [{
                                F: "div",
                                N: "ytp-ce-element-shadow"
                            }, {
                                F: "div",
                                N: "ytp-ce-expanding-overlay",
                                W: [{
                                        F: "div",
                                        N: "ytp-ce-expanding-overlay-hider"
                                    }, {
                                        F: "div",
                                        N: "ytp-ce-expanding-overlay-background"
                                    },
                                    {
                                        F: "div",
                                        N: "ytp-ce-expanding-overlay-content",
                                        W: [{
                                            F: "div",
                                            N: "ytp-ce-expanding-overlay-body",
                                            W: [{
                                                F: "div",
                                                N: "ytp-ce-expanding-overlay-body-padding",
                                                W: [{
                                                    F: "div",
                                                    N: "ytp-ce-merchandise-title",
                                                    X: {
                                                        dir: g.wo(b.title || "")
                                                    },
                                                    qa: b.title
                                                }, c, {
                                                    F: "div",
                                                    N: "ytp-ce-merchandise-metadata",
                                                    qa: b.metadata
                                                }, {
                                                    F: "a",
                                                    Fa: ["ytp-ce-merchandise-goto", "ytp-ce-link"],
                                                    X: {
                                                        href: S4(a, b.targetUrl),
                                                        target: "_blank",
                                                        tabindex: "-1"
                                                    },
                                                    qa: b.callToAction
                                                }]
                                            }]
                                        }]
                                    }
                                ]
                            }, {
                                F: "div",
                                N: "ytp-ce-expanding-image",
                                X: R4(b)
                            }, {
                                F: "div",
                                N: "ytp-ce-merchandise-invideo-cta-container",
                                W: [{
                                    F: "div",
                                    N: "ytp-ce-merchandise-invideo-cta",
                                    qa: b.callToAction || void 0
                                }]
                            }]
                        }, c = new g.W(a)
            }
            b.isPlaceholder && g.go(c.element, "ytp-ce-placeholder");
            return c
        },
        R4 = function(a) {
            if (a.HO) var b = a.HO.thumbnails;
            return P1a(b ? b[b.length - 1].url : null)
        },
        P1a = function(a) {
            return a ? {
                style: "background-image: url(" + a + ")"
            } : {}
        },
        O1a = function(a, b, c) {
            function d(m) {
                m && (b.Ra("blur", function() {
                    "none" != m.style.display && a.Z && m.focus()
                }), b.T(m, "focus", f), b.T(m, "blur", h))
            }

            function e(m) {
                a.I += m;
                0 < a.I ? (g.go(b.element, "ytp-ce-force-expand"), T4(a, c.id, !0)) : (g.io(b.element, "ytp-ce-force-expand"), g.io(b.element, "ytp-ce-element-hover"), T4(a, c.id, !1))
            }

            function f() {
                e(1)
            }

            function h() {
                e(-1)
            }
            b.Ra("mouseenter", function() {
                Q1a(a, b, c)
            });
            b.Ra("mouseleave", function() {
                R1a(a, b, c)
            });
            a.player.V().isMobile || b.Ra("click", function() {
                g.go(b.element, "ytp-ce-element-hover")
            });
            b.Ra("click", function(m) {
                S1a(a, c, m)
            });
            b.Ra("keypress", function(m) {
                S1a(a, c, m)
            });
            b.Ra("focus", function() {
                Q1a(a, b, c)
            });
            b.Ra("blur", function() {
                R1a(a, b, c)
            });
            b.Ra("touchstart", function() {
                Q1a(a, b, c)
            });
            var l = g.dh("ytp-ce-expanding-overlay-hider", b.element);
            l && b.T(l, "touchstart", function(m) {
                m = m || window.event;
                m.cancelBubble = !0;
                m.stopPropagation && m.stopPropagation();
                g.io(b.element, "ytp-ce-element-hover");
                g.io(b.element, "ytp-ce-force-expand")
            });
            b.Ra("keydown", function(m) {
                a.Z = 9 === m.keyCode && !m.shiftKey
            });
            d(g.dh("ytp-sb-subscribe", b.element));
            d(g.dh("ytp-sb-unsubscribe", b.element));
            b.Ra("focus", f);
            b.Ra("blur", h)
        },
        S1a = function(a, b, c) {
            if (b.targetUrl && (!c || "keypress" !== c.type || 13 === c.keyCode)) {
                for (var d = c.target; d && !g.fo(d, "ytp-ce-element");) {
                    g.fo(d, "subscribe-label") && T1a(a, b);
                    if (g.fo(d, "ytp-ce-channel-subscribe")) return;
                    d = g.qh(d)
                }
                if (!d || g.fo(d, "ytp-ce-element-hover")) {
                    c.preventDefault();
                    c.stopPropagation();
                    if (d = a.j[b.id]) R1a(a, d, b), d.element.blur();
                    if (c.ctrlKey || c.metaKey || "new" === b.L5) T1a(a, b), a.player.sendVideoStatsEngageEvent(17, void 0), a.player.pauseVideo(), c = g.qg(S4(a, b.targetUrl)), g.jM(g.pg(c), void 0, b.sessionData);
                    else {
                        var e = g.kG(a.player.V()) || a.player.getVideoData().D,
                            f = function() {
                                var h = S4(a, b.targetUrl),
                                    l = b.sessionData,
                                    m = b.watchEndpoint,
                                    n = g.mu(h);
                                e && n && (n.v ||
                                    n.list) ? a.player.Ml(n.v, l, n.list, !1, void 0, m || void 0) : g.iM(h, l)
                            };
                        T1a(a, b, function() {
                            a.player.sendVideoStatsEngageEvent(17, f)
                        })
                    }
                }
            }
        },
        S4 = function(a, b) {
            a = a.player.V();
            if (b) {
                if (b.startsWith("//")) return a.protocol + ":" + b;
                if (b.startsWith("/")) return g.uG(a) + b
            } else return "";
            return b
        },
        Q1a = function(a, b, c) {
            g.fo(b.element, "ytp-ce-element-hover") || ("VIDEO" === c.type || "PLAYLIST" === c.type ? g.go(b.element, "ytp-ce-element-hover") : a.player.V().isMobile ? (new g.Yn(function() {
                g.go(b.element, "ytp-ce-element-hover")
            }, 200)).start() : g.go(b.element, "ytp-ce-element-hover"), U4(a, c.b_), T4(a, c.id, !0))
        },
        R1a = function(a, b, c) {
            g.io(b.element, "ytp-ce-element-hover");
            g.io(b.element, "ytp-ce-force-expand");
            T4(a, c.id, !1)
        },
        T4 = function(a, b, c) {
            a.u && (c ? a.C.show() : a.C.hide());
            for (var d = g.t(Object.keys(a.j)), e = d.next(); !e.done; e = d.next()) e = e.value, e !== b && g.ko(a.j[e].element, "ytp-ce-element-shadow-show", c)
        },
        U4 = function(a, b, c) {
            function d() {
                f || (e++, e === b.length && (h.stop(), c && c()))
            }
            if (!b || 0 === b.length || P4(a)) c && c();
            else {
                b = U1a(a, b);
                var e = 0,
                    f = !1,
                    h = new g.Yn(function() {
                        f = !0;
                        c && c()
                    }, 1E3, a);
                h.start();
                for (a = 0; a < b.length; a++) g.Vw(b[a], d)
            }
        },
        T1a = function(a, b, c) {
            U4(a, b.clickUrls, c);
            (a = g.Bz()) && b.q_ && g.Lz(a, b.visualElement)
        },
        U1a = function(a, b) {
            var c = a.player.getVideoData().clientPlaybackNonce;
            a = a.player.getCurrentTime().toFixed(2);
            c = {
                CPN: c,
                AD_CPN: c,
                MT: a
            };
            a = [];
            for (var d = 0; d < b.length; d++) a.push(V1a(b[d], c));
            return a
        },
        V1a = function(a, b) {
            return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(c) {
                var d = unescape(c);
                d = d.substring(1, d.length - 1);
                return b[d] ? escape(b[d]) : c
            })
        },
        W1a = function(a) {
            return "string" === typeof a ? a : ""
        },
        V4 = function(a, b, c) {
            for (var d in b)
                if (b[d] === a) return a;
            return c
        },
        X1a = function(a, b, c, d) {
            this.value = a;
            this.target = b;
            this.showLinkIcon = c;
            this.j = d
        },
        W4 = function(a) {
            return a.value ? a.value : null
        },
        X4 = function(a) {
            if (!a) return null;
            var b = g.qg(W1a(a.value));
            b = g.pg(b);
            if (!b) return null;
            var c = V4(a.target, Y1a, "current");
            if (null == c) a = null;
            else {
                var d = a.show_link_icon;
                a = new X1a(b, c, "true" === d || "false" === d ? "true" === d : !0, null != a.pause_on_navigation ? a.pause_on_navigation : !0)
            }
            return a
        },
        Z1a = function(a, b, c) {
            this.type = a;
            this.trigger = b;
            this.url = c
        },
        b2a = function(a) {
            if (!a) return null;
            var b = V4(a.type, $1a),
                c = V4(a.trigger, a2a);
            a = a.url;
            a = Array.isArray(a) && a.length ? a[0] : a;
            a = X4(a ? a : null);
            return b ? new Z1a(b, c, a) : null
        },
        c2a = function(a, b, c, d, e) {
            this.id = a;
            this.type = b;
            this.style = c;
            this.data = e;
            this.action = d || []
        },
        d2a = function(a, b) {
            return g.Rb(a.action, b)
        },
        e2a = function(a, b) {
            this.context = a;
            this.j = b
        },
        f2a = function(a) {
            return a.customMessage ? Y4("div", "iv-card-message", a.customMessage) : ""
        },
        Z4 = function(a, b) {
            a = "background-image: url(" + a + ");";
            var c = [];
            b && c.push(b);
            return {
                F: "div",
                N: "iv-card-image",
                X: {
                    style: a
                },
                W: c
            }
        },
        g2a = function(a) {
            if (!a.metaInfo || 0 === a.metaInfo.length) return "";
            var b = [];
            a = g.t(a.metaInfo);
            for (var c = a.next(); !c.done; c = a.next()) b.push(Y4("li", "", c.value));
            return {
                F: "ul",
                N: "iv-card-meta-info",
                W: b
            }
        },
        Y4 = function(a, b, c) {
            b ? "string" === typeof b ? b = {
                "class": b
            } : Array.isArray(b) && (b = {
                "class": b.join(" ")
            }) : b = {};
            b.dir = g.wo(c);
            return {
                F: a,
                X: b,
                qa: c
            }
        },
        h2a = function(a) {
            if (!a.customMessage) return "";
            var b = ["iv-card-action", "iv-card-primary-link"],
                c = {};
            a.jy && (b.push("iv-card-action-icon"), c.style = "background-image: url(" + a.jy + ");");
            c.dir = g.wo(a.customMessage);
            var d = [{
                F: "span",
                qa: a.customMessage
            }];
            a.showLinkIcon && (d.push("\u00a0"), d.push({
                F: "span",
                N: "iv-card-link-icon"
            }));
            return {
                F: "div",
                Fa: b,
                X: c,
                W: d
            }
        },
        $4 = function(a, b, c, d) {
            if (d) {
                b = g.t(b);
                for (var e = b.next(); !e.done; e = b.next()) a.j(e.value, d, c.id, c.sessionData, c.tracking.click, 5)
            }
        },
        i2a = function(a, b) {
            this.merchant = a;
            this.price = b
        },
        j2a = function(a) {
            var b;
            (b = a) && !(b = 1 < a.length ? "/" === a.charAt(0) && "/" !== a.charAt(1) : "/" === a) && (b = a.replace(/^(https?:)?\/\//, "").split("/", 1), b = !b || 1 > b.length || !b[0] ? [] : b[0].toLowerCase().split(".").reverse(), b = "com" === b[0] && "youtube" === b[1] || "be" === b[0] && "youtu" === b[1]);
            return b ? -1 === a.indexOf("/redirect?") : !1
        },
        k2a = function(a, b) {
            return b ? b : j2a(a) ? "current" : "new"
        },
        a5 = function(a, b) {
            g.K.call(this);
            var c = this;
            this.element = a;
            this.context = b;
            this.rb = !1;
            this.Xa = new Map;
            this.bb = new Map;
            this.context.G.addEventListener(g.uA("annotations_module"), function(d) {
                (d = c.Xa.get(d)) && d.apply(c)
            });
            this.context.G.addEventListener(g.vA("annotations_module"), function(d) {
                (d = c.bb.get(d)) && d.apply(c)
            })
        },
        b5 = function(a, b, c, d, e, f, h) {
            a.context.j.Ra(b, "click", function(l) {
                a.uF(c, d, e, f || [], h || 0, l)
            });
            a.context.j.Ra(b, "touchstart", function() {
                a.rb = !1
            });
            a.context.j.Ra(b, "touchmove", function() {
                a.rb = !0
            })
        },
        l2a = function(a) {
            var b;
            return (null == (b = g.$u(a, g.QH)) ? 0 : b.url) ? g.$u(a, g.QH).url : (a = g.$u(a, g.UG)) && a.videoId ? (b = "/watch?v=" + a.videoId, a.playlistId && (b += "&list=" + a.playlistId), a.index && (b += "&index=" + a.index), a.startTimeSeconds && (b += "&t=" + a.startTimeSeconds), b) : null
        },
        c5 = function(a, b, c) {
            return {
                impression: (a.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                click: (c.loggingUrls || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                close: (b.dismissLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                SS: (b.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                HE: (b.clickLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                })
            }
        },
        m2a = function(a, b, c) {
            a5.call(this, b, c);
            var d = this;
            this.G = a;
            this.eventId = null;
            this.Qa = this.Ub = this.B = this.isInitialized = !1;
            this.Aa = null;
            this.cards = [];
            this.zb = this.S = this.La = this.D = this.Ta = this.j = null;
            this.ea = [];
            this.oa = this.J = this.tf = this.Ia = null;
            this.I = 0;
            this.Ba = new g.Yn(function() {}, c.Y.lf ? 4E3 : 3E3);
            g.N(this, this.Ba);
            this.kb = new g.Yn(function() {});
            g.N(this, this.kb);
            this.ya = new e2a(c, function(e, f, h, l, m, n) {
                b5(d, e, f, h, l, m, n)
            });
            this.Z = new g.W({
                F: "div",
                N: "iv-drawer",
                X: {
                    id: "iv-drawer"
                },
                W: [{
                    F: "div",
                    N: "iv-drawer-header",
                    X: {
                        "aria-role": "heading"
                    },
                    W: [{
                        F: "span",
                        N: "iv-drawer-header-text"
                    }, {
                        F: "button",
                        Fa: ["iv-drawer-close-button", "ytp-button"],
                        X: {
                            "aria-label": "\u0625\u062e\u0641\u0627\u0621 \u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062a",
                            tabindex: "0"
                        }
                    }]
                }, {
                    F: "div",
                    N: "iv-drawer-content"
                }]
            });
            g.N(this, this.Z);
            this.C = this.Z.element;
            this.jb = new g.JL(this.Z, 330);
            g.N(this, this.jb);
            this.Lb = g.dh("iv-drawer-header-text", this.C);
            this.u = g.dh("iv-drawer-content",
                this.C);
            this.addCueRange(0, 1E3 * c.videoData.lengthSeconds, "", function() {
                d.Ub && d5(d, "YOUTUBE_DRAWER_AUTO_OPEN")
            }, function() {
                (d.Ub = d.B) && e5(d)
            });
            this.G.addEventListener("videodatachange", this.Wp.bind(this))
        },
        n2a = function(a, b) {
            b = b.data;
            b.autoOpenMs && a.addCueRange(b.autoOpenMs, 0x8000000000000, "", function() {
                d5(a, "YOUTUBE_DRAWER_AUTO_OPEN")
            });
            b.autoCloseMs && a.addCueRange(b.autoCloseMs, 0x8000000000000, "", function() {
                e5(a)
            });
            var c = b.headerText;
            g.sh(a.Lb, c);
            a.S && a.S.setAttribute("title", c);
            b.eventId && (a.eventId = b.eventId);
            a.Ia = g.uz(b.trackingParams);
            a.J = g.uz(b.closeTrackingParams);
            a.tf = g.uz(b.iconTrackingParams)
        },
        o2a = function(a, b) {
            var c = b.cardId ? b.cardId : "cr:" + a.I,
                d = a.G.V().experiments.ib("enable_error_corrections_infocard_web_client");
            if (!b.content && b.teaser.simpleCardTeaserRenderer && d) {
                var e = b.teaser.simpleCardTeaserRenderer,
                    f = b.icon ? b.icon.infoCardIconRenderer : null;
                b = {
                    id: c,
                    timestamp: a.I,
                    type: "simple",
                    teaserText: g.zA(e.message),
                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                    autoOpen: !!b.autoOpen,
                    sessionData: {},
                    sponsored: !1,
                    tracking: {},
                    wm: null,
                    Fj: e.trackingParams ? g.uz(e.trackingParams) : null,
                    tf: f && f.trackingParams ? g.uz(f.trackingParams) : null,
                    imageUrl: "",
                    displayDomain: null,
                    showLinkIcon: !1,
                    jy: null,
                    title: "",
                    customMessage: "",
                    url: null,
                    onClickCommand: e.onTapCommand || null
                };
                f5(a, b)
            } else {
                var h;
                if (null == (h = b.content) ? 0 : h.simpleCardContentRenderer) {
                    if (!b.cueRanges.length) return;
                    f = null == (e = b.content) ? void 0 : e.simpleCardContentRenderer;
                    e = b.teaser.simpleCardTeaserRenderer;
                    var l = b.icon ? b.icon.infoCardIconRenderer : null;
                    b = {
                        id: c,
                        timestamp: a.I,
                        type: "simple",
                        teaserText: g.zA(e.message),
                        teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                        startMs: Number(b.cueRanges[0].startCardActiveMs),
                        autoOpen: !!b.autoOpen,
                        sessionData: g5(a, c, b, f),
                        sponsored: !1,
                        tracking: c5(f, e, f.command),
                        wm: f.trackingParams ? g.uz(f.trackingParams) : null,
                        Fj: e.trackingParams ? g.uz(e.trackingParams) : null,
                        tf: l && l.trackingParams ? g.uz(l.trackingParams) : null,
                        imageUrl: h5(f.image.thumbnails, 290).url,
                        displayDomain: f.displayDomain ? g.zA(f.displayDomain) : null,
                        showLinkIcon: !!f.showLinkIcon,
                        jy: null,
                        title: f.title ? g.zA(f.title) : "",
                        customMessage: f.callToAction ? g.zA(f.callToAction) : "",
                        url: g.$u(f.command, g.QH).url ? X4({
                            pause_on_navigation: !a.context.videoData.isLivePlayback,
                            target: "new",
                            value: g.$u(f.command, g.QH).url
                        }) : null,
                        onClickCommand: null
                    };
                    f5(a, b)
                } else {
                    var m;
                    if (null == (m = b.content) ? 0 : m.collaboratorInfoCardContentRenderer) {
                        if (!b.cueRanges.length) return;
                        e = null == (f = b.content) ? void 0 : f.collaboratorInfoCardContentRenderer;
                        f = b.teaser.simpleCardTeaserRenderer;
                        l = b.icon ? b.icon.infoCardIconRenderer : null;
                        b = {
                            id: c,
                            timestamp: a.I,
                            type: "collaborator",
                            teaserText: g.zA(f.message),
                            teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                            startMs: Number(b.cueRanges[0].startCardActiveMs),
                            autoOpen: !!b.autoOpen,
                            sessionData: g5(a, c, b, e),
                            sponsored: !1,
                            tracking: c5(e, f, e.endpoint),
                            wm: e.trackingParams ? g.uz(e.trackingParams) : null,
                            Fj: f.trackingParams ? g.uz(f.trackingParams) : null,
                            tf: l && l.trackingParams ? g.uz(l.trackingParams) : null,
                            channelId: g.$u(e.endpoint, i5).browseId,
                            customMessage: e.customText ? g.zA(e.customText) : null,
                            profileImageUrl: h5(e.channelAvatar.thumbnails, 290).url,
                            title: e.channelName ? g.zA(e.channelName) : "",
                            metaInfo: [e.subscriberCountText ? g.zA(e.subscriberCountText) : ""],
                            url: X4({
                                pause_on_navigation: !a.context.videoData.isLivePlayback,
                                target: "new",
                                value: g.$u(e.endpoint, i5).canonicalBaseUrl ? g.$u(e.endpoint, i5).canonicalBaseUrl : "/channel/" + g.$u(e.endpoint, i5).browseId
                            }),
                            onClickCommand: null
                        };
                        f5(a, b)
                    } else {
                        var n;
                        if (null == (n = b.content) ? 0 : n.playlistInfoCardContentRenderer) {
                            if (!b.cueRanges.length) return;
                            e = null == (l = b.content) ? void 0 : l.playlistInfoCardContentRenderer;
                            f = b.teaser.simpleCardTeaserRenderer;
                            l = b.icon ? b.icon.infoCardIconRenderer : null;
                            b = {
                                id: c,
                                timestamp: a.I,
                                type: "playlist",
                                teaserText: g.zA(f.message),
                                teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                startMs: Number(b.cueRanges[0].startCardActiveMs),
                                autoOpen: !!b.autoOpen,
                                sessionData: g5(a, c, b, e),
                                sponsored: !1,
                                tracking: c5(e, f, e.action),
                                wm: e.trackingParams ? g.uz(e.trackingParams) : null,
                                Fj: f.trackingParams ? g.uz(f.trackingParams) : null,
                                tf: l && l.trackingParams ? g.uz(l.trackingParams) : null,
                                MA: h5(e.playlistThumbnail.thumbnails, 258).url,
                                customMessage: e.customMessage ? g.zA(e.customMessage) : null,
                                playlistVideoCount: g.zA(e.playlistVideoCount),
                                title: e.playlistTitle ? g.zA(e.playlistTitle) : "",
                                metaInfo: [e.channelName ?
                                    g.zA(e.channelName) : "", e.videoCountText ? g.zA(e.videoCountText) : ""
                                ],
                                url: X4({
                                    pause_on_navigation: !a.context.videoData.isLivePlayback,
                                    target: "new",
                                    value: l2a(e.action)
                                }),
                                onClickCommand: null
                            };
                            f5(a, b)
                        } else {
                            var p;
                            if (null == (p = b.content) ? 0 : p.videoInfoCardContentRenderer) {
                                if (!b.cueRanges.length) return;
                                var q;
                                e = null == (q = b.content) ? void 0 : q.videoInfoCardContentRenderer;
                                f = b.teaser.simpleCardTeaserRenderer;
                                l = b.icon ? b.icon.infoCardIconRenderer : null;
                                b = {
                                    id: c,
                                    timestamp: a.I,
                                    type: "video",
                                    teaserText: g.zA(f.message),
                                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                                    autoOpen: !!b.autoOpen,
                                    sessionData: g5(a, c, b, e),
                                    sponsored: !1,
                                    tracking: c5(e, f, e.action),
                                    wm: e.trackingParams ? g.uz(e.trackingParams) : null,
                                    Fj: f.trackingParams ? g.uz(f.trackingParams) : null,
                                    tf: l && l.trackingParams ? g.uz(l.trackingParams) : null,
                                    MA: h5(e.videoThumbnail.thumbnails, 258).url,
                                    videoDuration: e.lengthString ? g.zA(e.lengthString) : null,
                                    customMessage: e.customMessage ? g.zA(e.customMessage) : null,
                                    title: e.videoTitle ? g.zA(e.videoTitle) : "",
                                    metaInfo: [e.channelName ?
                                        g.zA(e.channelName) : "", e.viewCountText ? g.zA(e.viewCountText) : ""
                                    ],
                                    isLiveNow: !!e.badge,
                                    url: X4({
                                        pause_on_navigation: !a.context.videoData.isLivePlayback,
                                        target: "new",
                                        value: l2a(e.action)
                                    }),
                                    onClickCommand: null
                                };
                                f5(a, b)
                            }
                        }
                    }
                }
            }
            a.I++
        },
        h5 = function(a, b) {
            for (var c = -1, d = -1, e = 0; e < a.length; e++) {
                if (a[e].height === b || 290 === a[e].width) return a[e];
                ((a[e].height || 0) < b || 290 > (a[e].width || 0)) && (0 > c || (a[c].height || 0) < (a[e].height || 0) || (a[c].width || 0) < (a[e].width || 0)) ? c = e: ((a[e].height || 0) >= b || 290 <= (a[e].width || 0)) && (0 > d || (a[d].height || 0) > (a[e].height || 0) || (a[d].width || 0) > (a[e].width || 0)) && (d = e)
            }
            return a[0 <= d ? d : c]
        },
        g5 = function(a, b, c, d) {
            return {
                feature: c.feature ? c.feature : "cards",
                src_vid: a.context.videoData.videoId,
                annotation_id: b,
                ei: a.context.videoData.eventId || "",
                itct: d.trackingParams || ""
            }
        },
        q2a = function(a, b) {
            if (b = p2a(a, b)) b === a.j && (a.j = null), a.G.removeCueRange(b.card.id), g.ph(b.PG), g.$b(a.cards, b), a.OB(), j5(a)
        },
        d5 = function(a, b, c) {
            if (!a.B) {
                a.jb.show();
                a.Ta = new g.Yn(function() {
                    g.go(a.context.G.getRootNode(), g.tT.IV_DRAWER_OPEN)
                }, 0);
                a.Ta.start();
                a.Aa = g.zx(a.u, "mousewheel", function(h) {
                    a.Ba.start();
                    h.preventDefault();
                    h = h || window.event;
                    var l = 0;
                    "MozMousePixelScroll" == h.type ? l = 0 == (h.axis == h.HORIZONTAL_AXIS) ? h.detail : 0 : window.opera ? l = h.detail : l = 0 == h.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? h.wheelDeltaY / -30 : h.wheelDeltaY / -1.2 : h.wheelDelta / -1.6 : h.wheelDeltaY / -3;
                    if (h = l) a.u.scrollTop += h
                });
                a.B = !0;
                var d = g.Bz();
                d && a.Ia && a.J && g.Jz(d, [a.Ia, a.J]);
                b = {
                    TRIGGER_TYPE: b
                };
                for (var e = g.t(a.cards), f = e.next(); !f.done; f = e.next()) f = f.value, f.pQ || (f.pQ = !0, r2a(a.context.logger, f.card.tracking.impression, b)), d && g.Jz(d, [f.card.wm]);
                F4(a.G);
                c && (a.D = new g.Yn(function() {
                    a.La = a.S;
                    a.zb.focus()
                }, 330), a.D.start())
            }
        },
        e5 = function(a) {
            a.B && (a.jb.hide(), g.Ax(a.Aa), a.Aa = null, g.io(a.context.G.getRootNode(), g.tT.IV_DRAWER_OPEN), a.B = !1, F4(a.G), a.D && a.D.stop(), a.D = new g.Yn(function() {
                    a.La && (a.La.focus(), a.La = null)
                }, 330),
                a.D.start())
        },
        t2a = function(a) {
            g.ho(a.element, [g.tT.STOP_EVENT_PROPAGATION,
                "iv-drawer-manager"
            ]);
            g.AN(a.G, a.C, 5);
            s2a(a);
            a.S = g.dh("ytp-cards-button", a.G.getRootNode());
            a.zb = g.dh("iv-drawer-close-button", a.C);
            a.isInitialized = !0
        },
        s2a = function(a) {
            var b = g.dh("iv-drawer-close-button", a.C);
            a.context.j.Ra(b, "click", a.qY, a);
            a.context.j.Ra(a.u, "touchend", function() {
                a.Ba.start()
            });
            a.context.j.Ra(a.u, "scroll", a.JY, a);
            a.context.u.subscribe("onHideControls", function() {
                a.Qa = !0
            });
            a.context.u.subscribe("onShowControls", function() {
                a.Qa = !1
            });
            a.context.u.subscribe("onVideoAreaChange", function() {
                a.Qa = g.fo(a.G.getRootNode(), "ytp-autohide")
            });
            a.ea.push(g.Tx("iv-button-shown", a.C_, a));
            a.ea.push(g.Tx("iv-button-hidden", a.B_, a));
            a.ea.push(g.Tx("iv-teaser-shown", a.xU, a));
            a.ea.push(g.Tx("iv-teaser-hidden", a.E_, a));
            a.ea.push(g.Tx("iv-teaser-clicked", a.wU, a))
        },
        u2a = function(a, b) {
            var c;
            return b.onClickCommand && "engagement-panel-error-corrections" === (null == (c = g.$u(b.onClickCommand, g.xZa)) ? void 0 : c.targetId) ? (a.oa = b, !0) : !1
        },
        v2a = function(a, b) {
            var c, d = null == (c = a.G.getVideoData()) ? void 0 : c.multiMarkersPlayerBarRenderer;
            if (null == d ? 0 : d.markersMap) {
                var e;
                for (c = 0;
                    (null == (e = d) ? void 0 : e.markersMap.length) > c; c++) {
                    var f = void 0,
                        h = null == (f = d) ? void 0 : f.markersMap[c];
                    if ("ERROR_CORRECTION_MARKERS" === h.key && (f = void 0, (h = null == (f = h.value) ? void 0 : f.markers) && 0 < h.length)) return d = void 0, b.startMs = (null == (d = g.$u(h[0], g.V_a)) ? void 0 : d.timeRangeStartMillis) || 0, a.oa = null, !0
                }
            }
            a.oa = b;
            return !1
        },
        f5 = function(a, b) {
            if (!u2a(a, b) || v2a(a, b)) {
                var c = w2a(a, b);
                if (c) {
                    var d = {
                        card: b,
                        PG: c.element,
                        pQ: !1
                    };
                    if (!b.onClickCommand) {
                        a.isInitialized || t2a(a);
                        q2a(a, b.id);
                        var e = x2a(a, d);
                        g.hc(a.cards, e, 0, d);
                        c.Da(a.u, e);
                        a.OB()
                    }
                    b.autoOpen ? a.addCueRange(b.startMs, 0x8000000000000, b.id, function() {
                        a.B || (a.j = d, j5(a), y2a(a, d), d5(a, "YOUTUBE_DRAWER_AUTO_OPEN", !1))
                    }) : (c = 1E3 * a.context.G.getCurrentTime(), 5E3 > c && c > b.startMs && z2a(a, d), a.addCueRange(b.startMs, b.startMs + 1, b.id, function() {
                        z2a(a, d)
                    }), j5(a))
                }
            }
        },
        w2a = function(a, b) {
            switch (b.type) {
                case "simple":
                    var c = a.ya;
                    var d = b.displayDomain ? {
                        F: "div",
                        N: "iv-card-image-text",
                        qa: b.displayDomain
                    } : void 0;
                    var e = h2a(b);
                    d = {
                        F: "div",
                        Fa: ["iv-card"],
                        W: [{
                            F: "a",
                            N: "iv-click-target",
                            X: {
                                href: b.url ? W4(b.url) || "" : ""
                            },
                            W: [Z4(b.imageUrl, d), {
                                F: "div",
                                N: "iv-card-content",
                                W: [Y4("h2", void 0, b.title), e]
                            }]
                        }]
                    };
                    d = new g.W(d);
                    $4(c, g.ch("iv-click-target", d.element), b, b.url);
                    b = d;
                    break;
                case "collaborator":
                    c = a.ya;
                    d = {
                        F: "div",
                        Fa: ["iv-card", "iv-card-channel"],
                        W: [{
                            F: "a",
                            Fa: ["iv-click-target"],
                            X: {
                                href: W4(b.url) || "",
                                "data-ytid": b.channelId
                            },
                            W: [Z4(b.profileImageUrl),
                                {
                                    F: "div",
                                    N: "iv-card-content",
                                    W: [f2a(b), {
                                        F: "h2",
                                        N: "iv-card-primary-link",
                                        qa: b.title
                                    }, g2a(b)]
                                }
                            ]
                        }]
                    };
                    d = new g.W(d);
                    $4(c, g.ch("iv-click-target", d.element), b, b.url);
                    b = d;
                    break;
                case "playlist":
                    c = a.ya;
                    d = {
                        F: "div",
                        Fa: ["iv-card", "iv-card-playlist"],
                        W: [{
                            F: "a",
                            N: "iv-click-target",
                            X: {
                                href: W4(b.url) || ""
                            },
                            W: [Z4(b.MA, {
                                F: "div",
                                N: "iv-card-image-overlay",
                                W: [{
                                    F: "span",
                                    N: "iv-card-playlist-video-count",
                                    qa: b.playlistVideoCount
                                }]
                            }), {
                                F: "div",
                                N: "iv-card-content",
                                W: [f2a(b), Y4("h2", "iv-card-primary-link", b.title), g2a(b)]
                            }]
                        }]
                    };
                    d = new g.W(d);
                    $4(c, g.ch("iv-click-target", d.element), b, b.url);
                    b = d;
                    break;
                case "productListing":
                    c = a.ya;
                    var f = !g.Wb(b.offers);
                    d = ["iv-card"];
                    e = "";
                    var h = h2a(b);
                    f && (d.push("iv-card-product-listing"), e = "iv-card-primary-link", h = b.offers[0], f = [], h.price && f.push({
                        F: "div",
                        N: "iv-card-offer-price",
                        qa: h.price
                    }), h.merchant && f.push({
                        F: "div",
                        N: "iv-card-offer-merchant",
                        qa: h.merchant
                    }), h = {
                        F: "div",
                        W: f
                    });
                    f = b.url ? W4(b.url) || "" : "";
                    d = {
                        F: "div",
                        Fa: d,
                        X: {
                            tabindex: "0"
                        },
                        W: [{
                            F: "a",
                            Fa: ["iv-card-image", "iv-click-target"],
                            X: {
                                style: "background-image: url(" +
                                    b.imageUrl + ");",
                                href: f,
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }
                        }, {
                            F: "div",
                            N: "iv-card-content",
                            W: [b.sponsored ? {
                                F: "div",
                                N: "iv-card-sponsored",
                                W: ["\u062f\u0639\u0627\u0626\u064a\u0629", {
                                    F: "div",
                                    N: "iv-ad-info-container",
                                    W: [{
                                        F: "div",
                                        N: "iv-ad-info",
                                        qa: "{{adInfo}}"
                                    }, {
                                        F: "div",
                                        N: "iv-ad-info-icon-container",
                                        W: [{
                                            F: "div",
                                            N: "iv-ad-info-icon"
                                        }, {
                                            F: "div",
                                            N: "iv-ad-info-callout"
                                        }]
                                    }]
                                }]
                            } : "", {
                                F: "a",
                                N: "iv-click-target",
                                X: {
                                    href: f
                                },
                                W: [Y4("h2", e, b.title), h]
                            }]
                        }]
                    };
                    d = new g.W(d);
                    e = g.ih("span");
                    g.sh(e, "\u064a\u062a\u0645 \u0639\u0631\u0636 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062a\u062c \u0644\u0623\u0646\u0646\u0627 \u0646\u0639\u062a\u0642\u062f \u0623\u0646\u0647 \u0630\u0648 \u0635\u0644\u0629 \u0628\u0627\u0644\u0641\u064a\u062f\u064a\u0648. \u0648\u0642\u062f \u062a\u062d\u0635\u0644 Google \u0639\u0644\u0649 \u0645\u0642\u0627\u0628\u0644 \u0645\u0627\u062f\u064a \u0645\u0646 \u0627\u0644\u062a\u0627\u062c\u0631.");
                    d.Sd(e, "adInfo");
                    $4(c, g.ch("iv-click-target", d.element), b, b.url);
                    b = d;
                    break;
                case "video":
                    c = a.ya;
                    d = b.videoDuration ? {
                        F: "span",
                        N: "iv-card-video-duration",
                        qa: b.videoDuration
                    } : void 0;
                    e = b.isLiveNow ? {
                        F: "span",
                        Fa: ["yt-badge", "yt-badge-live"],
                        qa: "\u0645\u0628\u0627\u0634\u0631 \u0627\u0644\u0622\u0646"
                    } : null;
                    f = {
                        F: "div",
                        Fa: ["iv-card", "iv-card-video"],
                        W: [{
                            F: "a",
                            N: "iv-click-target",
                            X: {
                                href: (null == (h = b.url) ? void 0 : W4(h)) || ""
                            },
                            W: [Z4(b.MA, d), {
                                F: "div",
                                N: "iv-card-content",
                                W: [f2a(b), Y4("h2", "iv-card-primary-link", b.title),
                                    g2a(b), e
                                ]
                            }]
                        }]
                    };
                    d = new g.W(f);
                    $4(c, g.ch("iv-click-target", d.element), b, b.url);
                    b = d;
                    break;
                default:
                    return null
            }
            a.G.V().experiments.ib("web_rounded_containers") && g.go(b.element, "ytp-rounded-info");
            return b
        },
        x2a = function(a, b) {
            if (0 === a.cards.length) return 0;
            a = g.Sb(a.cards, function(c) {
                return b.card.startMs > c.card.startMs || b.card.startMs === c.card.startMs && b.card.timestamp >= c.card.timestamp ? !0 : !1
            });
            return -1 === a ? 0 : a + 1
        },
        A2a = function(a) {
            return a.j ? "productListing" === a.j.card.type : g.Wd(a.cards, function(b) {
                return "productListing" === b.card.type
            })
        },
        j5 = function(a) {
            g.ko(a.G.getRootNode(), "ytp-cards-shopping-active", A2a(a))
        },
        z2a = function(a, b) {
            if (!g.fo(a.G.getRootNode(), "ytp-cards-teaser-shown")) {
                if (a.j !== b) {
                    var c = g.Bz(),
                        d = a.j ? a.j.card.tf : a.tf;
                    c && d && g.Kz(c, [d]);
                    a.j = b;
                    j5(a)
                }(c = a.isInitialized && "none" == a.element.style.display) || (c = a.context.G.getPlayerState(), d = 0 === c && 0 === a.context.G.getCurrentTime(), c = !(1 === c || 3 === c || d));
                c || b.card.teaserDurationMs && a.G.Sw(!0, {
                    teaserText: b.card.teaserText,
                    durationMs: b.card.teaserDurationMs,
                    onClickCommand: b.card.onClickCommand
                });
                a.kb.isActive() || ((!a.B || !a.Ba.isActive() && a.Qa) && y2a(a, b), a.kb.start(910 + b.card.teaserDurationMs))
            }
        },
        y2a = function(a, b) {
            a.Z.qb ? (b = new K4([0,
                a.u.scrollTop
            ], [0, b.PG.offsetTop], 600, A1a), a.context.B.Ra(b, "animate", function(c) {
                a.u.scrollTop = c.y
            }), a.context.B.Ra(b, "finish", function(c) {
                a.u.scrollTop = c.y
            }), b.play()) : (g.XK(a.Z, !0), a.u.scrollTop = b.PG.offsetTop, g.XK(a.Z, !1))
        },
        k5 = function(a) {
            return a.j && a.j.card ? a.j.card : a.cards[0] && a.cards[0].card ? a.cards[0].card : null
        },
        p2a = function(a, b) {
            return g.Rb(a.cards, function(c) {
                return c.card.id === b
            })
        },
        l5 = function(a, b, c) {
            a5.call(this, a, b);
            this.annotation = c;
            this.isActive = !1
        },
        B2a = function(a) {
            var b = a.annotation.data;
            "start_ms" in b && "end_ms" in b && a.addCueRange(b.start_ms, b.end_ms, a.annotation.id, function() {
                a.show()
            }, function() {
                a.hide()
            })
        },
        m5 = function(a, b, c) {
            l5.call(this, a, b, c);
            this.u = null;
            this.J = !1;
            this.B = null;
            this.C = !1;
            this.j = this.I = this.D = null
        },
        C2a = function(a, b) {
            var c = void 0 === c ? 0 : c;
            var d = y1a(b).width;
            g.Hl(b, d);
            c = new G1a(b, [d, b.offsetTop], [d - d - c, b.offsetTop], 200, z1a);
            g.N(a, c);
            a.context.B.Ra(c, "begin", function() {
                g.Nl(b, !0)
            });
            c.play()
        },
        F2a = function(a, b) {
            if (b.channel_name) {
                var c = a.createElement({
                        F: "div",
                        Fa: ["iv-branding-context-name"],
                        qa: b.channel_name
                    }),
                    d = a.createElement({
                        F: "div",
                        Fa: ["iv-branding-context-subscribe"]
                    }),
                    e = b.standalone_subscribe_button_data;
                e && (a.j = new g.hP(e.subscribeText, e.subscribeCount, e.unsubscribeText, e.unsubscribeCount, !!e.enabled, !!e.classic, b.channel_id, !!e.subscribed, e.feature, b.session_data.itct, e.signInUrl, a.context.G), a.j.Da(d));
                var f = a.createElement({
                        F: "div",
                        Fa: ["iv-branding-context-subscribe-caret"]
                    }),
                    h = a.createElement({
                        F: "div",
                        Fa: ["branding-context-container-inner"]
                    });
                h.appendChild(f);
                h.appendChild(c);
                h.appendChild(d);
                g.Nl(h, !1);
                a.context.Y.K("web_rounded_containers") && g.go(h, "ytp-rounded-branding-context");
                var l = a.createElement({
                    F: "div",
                    Fa: ["branding-context-container-outer"]
                });
                l.appendChild(h);
                g.Bl(l, "right", b.image_width + "px");
                a.element.appendChild(l);
                a.B = new g.Yn(function() {
                    D2a(a, h, l)
                }, 500);
                g.N(a, a.B);
                a.context.j.Ra(a.element, "mouseover", function() {
                    E2a(a, h, l, f, b.image_height)
                });
                a.context.j.Ra(a.element, "mouseout", function() {
                    a.B.start()
                })
            }
        },
        E2a = function(a, b, c, d, e) {
            a.B.stop();
            if (!a.C) {
                var f = g.Ml(b);
                a.j || (b.style.width = g.Gl(f.width, !0), c.style.width = g.Gl(f.width, !0));
                g.Bl(d, "top", f.height - Math.max(Math.min(f.height, e) / 2 + 10, 20) + "px");
                g.Bl(d, "right", "1px");
                a.C = !0;
                g.Nl(b, !0);
                a.D = new g.Yn(function() {
                    g.go(this.element, "iv-branding-active")
                }, 0, a);
                a.D.start()
            }
        },
        D2a = function(a, b, c) {
            g.io(a.element, "iv-branding-active");
            a.I = new g.Yn(function() {
                g.Nl(b, !1);
                a.j || (c.style.width = g.Gl(0, !0))
            }, 250);
            a.I.start();
            a.C = !1
        },
        G2a = function(a, b, c, d, e, f, h) {
            this.j = a;
            this.B = b;
            this.Y = c;
            this.videoData = d;
            this.logger = e;
            this.G = f;
            this.u = h
        },
        H2a = function(a, b, c) {
            l5.call(this, a, b, c);
            var d = this;
            this.S = this.isCollapsed = this.Z = !1;
            this.I = 5E3;
            this.u = this.B = this.j = this.C = null;
            this.J = this.createElement({
                F: "div",
                Fa: ["iv-promo-contents"]
            });
            this.D = new g.Yn(function() {
                d.j.setAttribute("aria-hidden", "true");
                g.Nl(d.B, !1);
                g.Nl(d.u, !0)
            }, 700, this);
            g.N(this, this.D)
        },
        J2a = function(a) {
            var b = a.annotation.data;
            if ("cta" === a.annotation.style) var c = 6;
            else if ("video" === a.annotation.style || "playlist" === a.annotation.style) c = 7;
            a.I = b.collapsedelay_ms || a.I;
            var d = ["iv-promo", "iv-promo-inactive"];
            a.element.setAttribute("aria-hidden", "true");
            a.element.setAttribute("aria-label", "\u062a\u0631\u0648\u064a\u062c");
            a.element.tabIndex = 0;
            var e = a.annotation.ue(),
                f = b.image_url;
            if (f) {
                var h = a.createElement({
                    F: "div",
                    Fa: ["iv-promo-img", "iv-click-target"]
                });
                f = a.createElement({
                    F: "img",
                    X: {
                        src: f,
                        "aria-hidden": "true"
                    }
                });
                h.appendChild(f);
                b.video_duration && !b.is_live ? (f = a.createElement({
                    F: "span",
                    N: "iv-promo-video-duration",
                    qa: b.video_duration
                }), h.appendChild(f)) : b.playlist_length && (f = a.createElement({
                    F: "span",
                    N: "iv-promo-playlist-length",
                    qa: b.playlist_length.toString()
                }), h.appendChild(f));
                e && b5(a, h, e, a.annotation.id, b.session_data, void 0, c)
            }
            e ? (f = a.createElement({
                F: "a",
                N: "iv-promo-txt"
            }), g.Cg(f, W4(e)), a.j = f) : a.j = a.createElement({
                F: "div",
                N: "iv-promo-txt"
            });
            switch (a.annotation.style) {
                case "cta":
                case "website":
                    var l = a.createElement({
                        F: "p",
                        W: [{
                            F: "strong",
                            qa: b.text_line_1
                        }]
                    });
                    var m = a.createElement({
                        F: "p",
                        W: [{
                            F: "span",
                            N: "iv-promo-link",
                            qa: b.text_line_2
                        }]
                    });
                    if (f = b.text_line_3) {
                        d.push("iv-promo-website-card-cta-redesign");
                        var n = a.createElement({
                            F: "button",
                            Fa: ["iv-promo-round-expand-icon", "ytp-button"]
                        });
                        f = a.createElement({
                            F: "button",
                            Fa: ["iv-button", "iv-promo-button"],
                            W: [{
                                F: "span",
                                N: "iv-button-content",
                                qa: f
                            }]
                        });
                        var p = a.createElement({
                            F: "div",
                            N: "iv-promo-button-container"
                        });
                        p.appendChild(f);
                        e && b5(a, a.element, e, a.annotation.id, b.session_data,
                            void 0, c)
                    }
                    g.go(a.j, "iv-click-target");
                    e && b5(a, a.j, e, a.annotation.id, b.session_data, void 0, c);
                    break;
                case "playlist":
                case "video":
                    l = a.createElement({
                        F: "p",
                        W: [{
                            F: "span",
                            qa: b.text_line_1
                        }]
                    }), m = a.createElement({
                        F: "p",
                        W: [{
                            F: "strong",
                            qa: b.text_line_2
                        }]
                    }), b.is_live && (l = m, m = a.createElement({
                        F: "span",
                        Fa: ["yt-badge", "iv-promo-badge-live"],
                        qa: "\u0645\u0628\u0627\u0634\u0631 \u0627\u0644\u0622\u0646"
                    })), g.go(a.j, "iv-click-target"), e && b5(a, a.j, e, a.annotation.id, b.session_data, void 0, c), d.push("iv-promo-video")
            }
            l &&
                a.j.appendChild(l);
            m && a.j.appendChild(m);
            a.J.appendChild(a.j);
            p && a.J.appendChild(p);
            c = a.createElement({
                F: "div",
                N: "iv-promo-actions"
            });
            a.u = a.createElement({
                F: "button",
                Fa: ["iv-promo-expand", "ytp-button"]
            });
            a.u.title = "\u062a\u0648\u0633\u064a\u0639";
            a.context.j.Ra(a.u, "click", function(q) {
                I2a(a, 5E3, q)
            });
            c.appendChild(a.u);
            g.Nl(a.u, !1);
            a.context.j.Ra(a.element, "mouseover", a.FZ, a);
            a.context.j.Ra(a.element, "mouseout", a.EZ, a);
            a.context.j.Ra(a.element, "touchend", function(q) {
                I2a(a, 5E3, q)
            });
            a.B = a.createElement({
                F: "button",
                Fa: ["iv-promo-close", "ytp-button"]
            });
            a.B.title = "\u0625\u063a\u0644\u0627\u0642";
            a.context.j.Ra(a.B, "click", "cta" === a.annotation.style && b.text_line_3 ? a.AZ : a.zZ, a);
            c.appendChild(a.B);
            g.ho(a.element, d);
            h && (a.element.appendChild(h), n && h.appendChild(n));
            a.element.appendChild(a.J);
            a.element.appendChild(c)
        },
        I2a = function(a, b, c) {
            c.stopPropagation();
            K2a(a);
            L2a(a, b);
            a.j.focus()
        },
        M2a = function(a) {
            a.isCollapsed || a.S || a.C || (g.go(a.element, "iv-promo-collapsed"), a.isCollapsed = !0, a.D.start())
        },
        K2a = function(a) {
            a.D.stop();
            a.isCollapsed && (g.jo(a.element, ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), a.isCollapsed = !1, a.j && a.j.removeAttribute("aria-hidden"), g.Nl(a.u, !1), g.Nl(a.B, !0))
        },
        L2a = function(a, b) {
            a.C || (a.C = g.Nh(function() {
                N2a(this);
                M2a(this)
            }, b, a))
        },
        N2a = function(a) {
            a.C && (g.C.clearTimeout(a.C), a.C = null)
        },
        O2a = function(a) {
            this.G = a
        },
        r2a = function(a, b, c) {
            b && (c ? n5(a, b.map(function(d) {
                return g.Rn(d, c)
            })) : n5(a, b))
        },
        n5 = function(a, b, c, d) {
            var e = 1,
                f = void 0,
                h = -1;
            if (c) {
                var l = !1;
                f = function() {
                    e--;
                    e || l || (clearTimeout(h), l = !0, c())
                };
                h = setTimeout(function() {
                    l = !0;
                    c()
                }, 1E3)
            }
            b = g.t(b || []);
            for (var m = b.next(); !m.done; m = b.next()) m = m.value, e++, g.Vw(m, f);
            d && (e++, 0 !== d && a.G.sendVideoStatsEngageEvent(d, f))
        },
        P2a = function(a) {
            g.dO.call(this, a);
            var b = this;
            this.loadNumber = 0;
            this.I = {};
            this.logger = new O2a(this.player);
            this.D = new g.YD(this);
            this.C = this.En = null;
            this.events = new g.YD(this);
            this.J = this.j = null;
            this.S = [];
            g.N(this, this.D);
            this.D.T(this.player, "onVideoAreaChange", function() {
                b.ma("onVideoAreaChange")
            });
            this.D.T(this.player, "onHideControls", function() {
                b.ma("onHideControls")
            });
            this.D.T(this.player, "onShowControls", function() {
                b.ma("onShowControls")
            });
            this.D.T(this.player, "resize", function(d) {
                b.ma("resize", d)
            });
            this.D.T(this.player, "presentingplayerstatechange", function(d) {
                b.ma("presentingplayerstatechange", d)
            });
            this.subscribe("presentingplayerstatechange", this.yU, this);
            this.subscribe("resize", this.GD, this);
            this.player.V().oa.subscribe("vast_info_card_add", this.CR, this);
            g.N(this, this.events);
            this.Z = this.createElement({
                F: "div",
                N: "video-custom-annotations"
            });
            this.u = new g.W({
                F: "div",
                Fa: ["ytp-player-content", "ytp-iv-player-content"]
            });
            g.N(this, this.u);
            g.AN(this.player, this.u.element, 4);
            this.u.hide();
            this.B = new g.W({
                F: "div",
                Fa: ["ytp-iv-video-content"]
            });
            g.N(this, this.B);
            a = this.createElement({
                F: "div",
                N: "video-annotations"
            });
            a.appendChild(this.Z);
            this.B.element.appendChild(a);
            this.Mt() && this.load();
            var c = this.createElement({
                F: "style"
            });
            (g.ah("HEAD")[0] || document.body).appendChild(c);
            g.af(this, function() {
                g.ph(c)
            });
            if (a = c.sheet) a.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0), a.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
                0), a.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0), a.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0), a.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0), a.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
                0), a.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 0), a.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
                0)
        },
        Q2a = function(a) {
            a = a.createElement({
                F: "div",
                Fa: ["annotation", "annotation-type-custom"]
            });
            g.Nl(a, !1);
            return a
        },
        R2a = function(a, b) {
            b = !b.isCued() && !g.V(b, 1024);
            g.XK(a.u, b);
            g.XK(a.B, b)
        },
        S2a = function(a, b) {
            for (var c = {}, d = g.t(b.attributes), e = d.next(); !e.done; e = d.next()) e = e.value, c[e.name] = e.nodeValue;
            for (d = 0; d < b.childNodes.length; d++)
                if (e = b.childNodes[d], g.Na(e) && 1 == e.nodeType) {
                    if (c[e.tagName]) var f = c[e.tagName];
                    else if ("data" === e.tagName) {
                        0 < e.childNodes.length && (f = e.childNodes[0].nodeValue, c[e.tagName] = "string" === typeof f ? f.trim() : f);
                        continue
                    } else f = [], c[e.tagName] = f;
                    e && "TEXT" === e.tagName ? 1 === e.childNodes.length && 3 === e.childNodes[0].nodeType ? f.push(e.childNodes[0].nodeValue) : f.push("") : e && f.push(S2a(a, e))
                }
            return c
        },
        W2a = function(a) {
            var b = a.player.getVideoData();
            if (b.jb) {
                var c = a.player.V().oa.get(b.videoId);
                if (c) {
                    var d = {
                        format: "XML",
                        urlParams: {},
                        method: "POST",
                        withCredentials: !0,
                        onFinish: function(e, f, h) {
                            e = b.videoId;
                            a.loaded && a.loadNumber === a.loadNumber && a.player.getVideoData().videoId === e && (h = g.vu(h) && h.responseXML ? h.responseXML : null) && T2a(a, h)
                        }
                    };
                    g.Ev() && (d.onFinish = U2a(a, d.onFinish));
                    d.postParams = {
                        ic_only: "1"
                    };
                    V2a(d, c);
                    g.Bu(b.jb, d)
                }
            }
        },
        V2a = function(a, b) {
            a.method = "POST";
            a.postParams = a.postParams || {};
            b.ly && (a.postParams.ic_coll = b.ly);
            b.UB && (a.postParams.ic_xml = b.UB);
            b.QA && (a.postParams.ic_track = b.QA)
        },
        X2a = function(a) {
            var b = new g.W({
                F: "div"
            });
            g.Nl(b.element, !1);
            var c = new m2a(a.player, b.element, o5(a));
            g.N(c, b);
            b.Da(a.u.element);
            c.AA();
            return c
        },
        o5 = function(a) {
            if (!a.J) {
                var b = new M4(a);
                g.N(a, b);
                var c = new g.Rj(a);
                g.N(a, c);
                a.J = new G2a(b, c, a.player.V(), a.player.getVideoData(), a.logger, a.player, a.Tg)
            }
            return a.J
        },
        T2a = function(a, b) {
            var c = !1,
                d = b.getElementsByTagName("annotations");
            if (d && !(1 > d.length) && (d = d[0].getAttribute("itct"))) {
                var e = g.Bz();
                if (e) {
                    var f = g.Az();
                    f && g.Fz(void 0, e, f, [g.uz(d)])
                }
            }
            b = b.getElementsByTagName("annotation");
            for (d = 0; d < b.length; d++) {
                f = S2a(a, b[d]);
                e = null;
                try {
                    if (f) {
                        var h = f.id,
                            l = /.+/;
                        var m = "string" === typeof h && null != l && null != h && h.match(l) ? h : "";
                        var n = V4(f.type, Y2a),
                            p = V4(f.style, Z2a),
                            q = W1a(f.data),
                            r = 0 !== q.length ? JSON.parse(q) : {};
                        var w = f.action;
                        f = b2a;
                        if (null == w) var y = null;
                        else if (g.Ma(w)) {
                            l = [];
                            for (var z = g.t(w), B = z.next(); !B.done; B = z.next()) {
                                var D = f(B.value);
                                D && l.push(D)
                            }
                            y = l
                        } else {
                            var G = f(w);
                            y = G ? [G] : []
                        }
                        e = m && n ? new c2a(m, n, p, y, r) : null
                    } else e = null
                } catch (P) {}
                if (e)
                    if ("branding" === e.type || "promotion" === e.type) {
                        f = a;
                        l = e;
                        var H = Q2a(f),
                            L = null;
                        switch (l.type) {
                            case "branding":
                                if (f.player.V().Lc) break;
                                f.u.element.appendChild(H);
                                L = new m5(H, o5(f), l);
                                break;
                            case "promotion":
                                g.AN(f.player, H, 4), L = new H2a(H, o5(f), l)
                        }
                        L && L.AA();
                        if (f = L) g.N(a, f), a.I[e.id] = f
                    } else if ("card" === e.type || "drawer" === e.type) {
                    a.j || (a.j = X2a(a), g.N(a, a.j));
                    if ("card" === e.type) {
                        c = a.j;
                        var M = e && e.data && e.data.card_type;
                        f = e.data;
                        if (M) switch (l = f.tracking || {}, l = {
                            impression: l.impression,
                            click: l.click,
                            close: l.close,
                            SS: l.teaser_impression,
                            HE: l.teaser_click
                        }, H = f.tracking_params || {}, L = null, M) {
                            case "collaborator":
                                e = {
                                    id: e.id,
                                    timestamp: f.timestamp || 0,
                                    type: f.card_type,
                                    teaserText: f.teaser_text,
                                    teaserDurationMs: f.teaser_duration_ms,
                                    startMs: f.start_ms,
                                    autoOpen: f.auto_open || !1,
                                    sessionData: f.session_data || {},
                                    sponsored: f.sponsored || !1,
                                    tracking: l,
                                    wm: H.card ? g.uz(H.card) : null,
                                    Fj: H.teaser ? g.uz(H.teaser) : null,
                                    tf: H.icon ? g.uz(H.icon) : null,
                                    channelId: f.channel_id,
                                    customMessage: f.custom_message ? f.custom_message : null,
                                    profileImageUrl: f.image_url,
                                    title: f.title,
                                    metaInfo: f.meta_info,
                                    url: X4({
                                        pause_on_navigation: f.pause_on_navigation,
                                        target: f.target || "new",
                                        value: f.url
                                    }),
                                    onClickCommand: null
                                };
                                f5(c, e);
                                break;
                            case "playlist":
                                e = {
                                    id: e.id,
                                    timestamp: f.timestamp || 0,
                                    type: f.card_type,
                                    teaserText: f.teaser_text,
                                    teaserDurationMs: f.teaser_duration_ms,
                                    startMs: f.start_ms,
                                    autoOpen: f.auto_open || !1,
                                    sessionData: f.session_data || {},
                                    sponsored: f.sponsored || !1,
                                    tracking: l,
                                    wm: H.card ? g.uz(H.card) : null,
                                    Fj: H.teaser ? g.uz(H.teaser) : null,
                                    tf: H.icon ? g.uz(H.icon) : null,
                                    MA: f.image_url,
                                    playlistVideoCount: f.playlist_video_count,
                                    customMessage: f.custom_message ? f.custom_message : null,
                                    title: f.title,
                                    metaInfo: f.meta_info,
                                    url: X4({
                                        pause_on_navigation: f.pause_on_navigation,
                                        target: f.target || "new",
                                        value: f.url
                                    }),
                                    onClickCommand: null
                                };
                                f5(c, e);
                                break;
                            case "productListing":
                                f.signin_url && (L = X4({
                                    target: "current",
                                    value: f.signin_url
                                }));
                                M = [];
                                for (var J = f.offers || [], Q = 0; Q < J.length; Q++) M.push(new i2a(g.Vg(J[Q].merchant),
                                    g.Vg(J[Q].price)));
                                e = {
                                    id: e.id,
                                    timestamp: f.timestamp || 0,
                                    type: f.card_type,
                                    teaserText: f.teaser_text,
                                    teaserDurationMs: f.teaser_duration_ms,
                                    startMs: f.start_ms,
                                    autoOpen: f.auto_open || !1,
                                    sessionData: f.session_data || {},
                                    sponsored: f.sponsored || !1,
                                    tracking: l,
                                    wm: H.card ? g.uz(H.card) : null,
                                    Fj: H.teaser ? g.uz(H.teaser) : null,
                                    tf: H.icon ? g.uz(H.icon) : null,
                                    imageUrl: f.image_url,
                                    displayDomain: f.display_domain ? f.display_domain : null,
                                    showLinkIcon: !!f.show_link_icon,
                                    jy: f.button_icon_url ? f.button_icon_url : null,
                                    title: f.title,
                                    customMessage: f.custom_message ?
                                        f.custom_message : null,
                                    url: X4({
                                        pause_on_navigation: f.pause_on_navigation,
                                        target: f.target || "new",
                                        value: f.url
                                    }),
                                    z6a: L,
                                    y6a: f.signin_title ? f.signin_title : void 0,
                                    x6a: f.signin_message ? f.signin_message : void 0,
                                    offers: M,
                                    onClickCommand: null
                                };
                                f5(c, e);
                                break;
                            case "simple":
                                e = {
                                    id: e.id,
                                    timestamp: f.timestamp || 0,
                                    type: f.card_type,
                                    teaserText: f.teaser_text,
                                    teaserDurationMs: f.teaser_duration_ms,
                                    startMs: f.start_ms,
                                    autoOpen: f.auto_open || !1,
                                    sessionData: f.session_data || {},
                                    sponsored: f.sponsored || !1,
                                    tracking: l,
                                    wm: H.card ? g.uz(H.card) : null,
                                    Fj: H.teaser ? g.uz(H.teaser) : null,
                                    tf: H.icon ? g.uz(H.icon) : null,
                                    imageUrl: f.image_url,
                                    displayDomain: f.display_domain ? f.display_domain : null,
                                    showLinkIcon: !!f.show_link_icon,
                                    jy: f.button_icon_url ? f.button_icon_url : null,
                                    title: f.title,
                                    customMessage: f.custom_message ? f.custom_message : null,
                                    url: X4({
                                        pause_on_navigation: f.pause_on_navigation,
                                        target: f.target || "new",
                                        value: f.url
                                    }),
                                    onClickCommand: null
                                };
                                f5(c, e);
                                break;
                            case "video":
                                e = {
                                    id: e.id,
                                    timestamp: f.timestamp || 0,
                                    type: f.card_type,
                                    teaserText: f.teaser_text,
                                    teaserDurationMs: f.teaser_duration_ms,
                                    startMs: f.start_ms,
                                    autoOpen: f.auto_open || !1,
                                    sessionData: f.session_data || {},
                                    sponsored: f.sponsored || !1,
                                    tracking: l,
                                    wm: H.card ? g.uz(H.card) : null,
                                    Fj: H.teaser ? g.uz(H.teaser) : null,
                                    tf: H.icon ? g.uz(H.icon) : null,
                                    MA: f.image_url,
                                    videoDuration: f.video_duration || null,
                                    customMessage: f.custom_message ? f.custom_message : null,
                                    title: f.title,
                                    metaInfo: f.meta_info,
                                    isLiveNow: !!f.is_live_now,
                                    url: X4({
                                        pause_on_navigation: f.pause_on_navigation,
                                        target: f.target || "new",
                                        value: f.url
                                    }),
                                    onClickCommand: null
                                }, f5(c, e)
                        }
                    } else n2a(a.j, e);
                    c = !0
                }
            }
            c && (F4(a.player), a.GD())
        },
        $2a = function(a, b) {
            var c = !1;
            a.j || (a.j = X2a(a), g.N(a, a.j));
            for (var d = g.t(b.cards || []), e = d.next(); !e.done; e = d.next()) e = e.value, e.cardRenderer && (o2a(a.j, e.cardRenderer), c = !0);
            c && (c = a.j, d = b.headerText ? g.zA(b.headerText) : "", g.sh(c.Lb, d), c.S && c.S.setAttribute("title", d), c.context.videoData.eventId && (c.eventId = c.context.videoData.eventId), c.Ia = b.trackingParams ? g.uz(b.trackingParams) : null, c.J = b.closeButton.infoCardIconRenderer.trackingParams ? g.uz(b.closeButton.infoCardIconRenderer.trackingParams) : null, c.tf = b.icon.infoCardIconRenderer.trackingParams ?
                g.uz(b.icon.infoCardIconRenderer.trackingParams) : null, F4(a.player), a.GD())
        },
        a3a = function(a, b, c, d, e) {
            if (!a.player.V().Lc) {
                var f = [];
                b.navigationEndpoint && b.navigationEndpoint.browseEndpoint && b.navigationEndpoint.browseEndpoint.browseId && f.push(new Z1a("openUrl", "click", new X1a("/channel/" + b.navigationEndpoint.browseEndpoint.browseId, "new", !0, !0)));
                var h = b.watermark.thumbnails[0];
                d = {
                    channel_name: b.channelName,
                    end_ms: b.endTimeMs,
                    image_height: h.height,
                    image_type: 1,
                    image_url: h.url,
                    image_width: h.width,
                    is_mobile: !1,
                    session_data: {
                        annotation_id: c,
                        ei: e,
                        feature: "iv",
                        itct: b.trackingParams,
                        src_vid: d
                    },
                    start_ms: b.startTimeMs
                };
                if (b.subscribeButton &&
                    b.subscribeButton.subscribeButtonRenderer) {
                    d.channel_id = b.subscribeButton.subscribeButtonRenderer.channelId;
                    var l;
                    b = b.subscribeButton.subscribeButtonRenderer;
                    h = e = null;
                    b.subscribed ? (b.subscriberCountWithUnsubscribeText && (e = g.zA(b.subscriberCountWithUnsubscribeText)), b.subscriberCountText && (h = g.zA(b.subscriberCountText))) : (b.subscriberCountText && (e = g.zA(b.subscriberCountText)), b.subscriberCountWithSubscribeText && (h = g.zA(b.subscriberCountWithSubscribeText)));
                    var m, n, p = (null == (l = b.signInEndpoint) ? void 0 :
                        null == (m = l.commandMetadata) ? void 0 : null == (n = m.webCommandMetadata) ? void 0 : n.url) || "";
                    l = {
                        subscribeText: g.zA(b.unsubscribedButtonText),
                        subscribeCount: e || "",
                        unsubscribeText: g.zA(b.subscribedButtonText),
                        unsubscribeCount: h || "",
                        enabled: b.enabled || !1,
                        classic: !1,
                        subscribed: b.subscribed || !1,
                        feature: "iv",
                        signInUrl: p
                    };
                    d.standalone_subscribe_button_data = l
                }
                f = new c2a(c, "branding", "branding", f, d);
                l = Q2a(a);
                a.u.element.appendChild(l);
                f = new m5(l, o5(a), f);
                f.AA();
                g.N(f, f);
                a.I[c] = f
            }
        },
        U2a = function(a, b) {
            return function() {
                var c =
                    g.za.apply(0, arguments);
                a.isDisposed() || a.S.push(g.Un.Hh(function() {
                    b.apply(null, g.u(c))
                }))
            }
        },
        b3a = function(a) {
            return "annotation-editor" === a || "live-dashboard" === a
        };
    g.tN.prototype.Sw = g.ba(17, function(a, b) {
        var c = g.vO(this.wb());
        c && c.Sw(a, b)
    });
    var H4 = {},
        I4 = null;
    g.Wa(K4, g.so);
    g.k = K4.prototype;
    g.k.getDuration = function() {
        return this.duration
    };
    g.k.play = function(a) {
        if (a || 0 == this.j) this.progress = 0, this.coords = this.u;
        else if (this.Sc()) return !1;
        J4(this);
        this.startTime = a = g.Va(); - 1 == this.j && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.D = this.startTime;
        this.progress || this.CD();
        this.ek("play"); - 1 == this.j && this.ek("resume");
        this.j = 1;
        var b = g.Pa(this);
        b in H4 || (H4[b] = this);
        C1a();
        D1a(this, a);
        return !0
    };
    g.k.stop = function(a) {
        J4(this);
        this.j = 0;
        a && (this.progress = 1);
        E1a(this, this.progress);
        this.ek("stop");
        this.Wz()
    };
    g.k.pause = function() {
        this.Sc() && (J4(this), this.j = -1, this.ek("pause"))
    };
    g.k.ra = function() {
        0 == this.j || this.stop(!1);
        this.ek("destroy");
        K4.Se.ra.call(this)
    };
    g.k.destroy = function() {
        this.dispose()
    };
    g.k.tF = function() {
        this.ek("animate")
    };
    g.k.ek = function(a) {
        this.dispatchEvent(new F1a(a, this))
    };
    g.Wa(F1a, g.bf);
    g.Wa(L4, K4);
    L4.prototype.C = function() {};
    L4.prototype.tF = function() {
        this.C();
        L4.Se.tF.call(this)
    };
    L4.prototype.Wz = function() {
        this.C();
        L4.Se.Wz.call(this)
    };
    L4.prototype.CD = function() {
        this.C();
        L4.Se.CD.call(this)
    };
    g.Wa(G1a, L4);
    G1a.prototype.C = function() {
        this.element.style.left = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    var i5 = new g.Yo("browseEndpoint");
    g.v(M4, g.K);
    M4.prototype.Ra = function(a, b, c, d) {
        c = (0, g.Qa)(c, d || this.u);
        a = g.zx(a, b, c);
        this.j.push(a);
        return a
    };
    M4.prototype.kD = function(a, b, c, d) {
        c = (0, g.Qa)(c, d || this.u);
        a = g.Goa(a, b, c);
        this.j.push(a);
        return a
    };
    M4.prototype.yc = function(a) {
        g.Ax(a);
        g.$b(this.j, a)
    };
    M4.prototype.ra = function() {
        g.Ax(this.j);
        this.j.length = 0;
        g.K.prototype.ra.call(this)
    };
    g.v(J1a, g.dO);
    g.k = J1a.prototype;
    g.k.load = function() {
        g.dO.prototype.load.call(this);
        if (!P4(this)) {
            var a = g.XBa(this.player.getVideoData());
            a ? (a = I1a(a, K1a(this)), Q4(this, a, !1)) : L1a(this)
        }
    };
    g.k.unload = function() {
        Q4(this, null);
        this.B && (this.B.abort(), this.B = null);
        g.dO.prototype.unload.call(this)
    };
    g.k.zg = function(a, b) {
        return P4(this) ? "loadCustomEndscreenRenderer" === a ? (a = I1a(b, "new"), Q4(this, a), !0) : null : null
    };
    g.k.getOptions = function() {
        return P4(this) ? ["loadCustomEndscreenRenderer"] : []
    };
    g.k.Cb = function() {
        if (this.endscreen && this.endscreen.elements) {
            var a = this.player.getVideoContentRect();
            if (a && 0 !== a.width && 0 !== a.height) {
                var b = this.player.getPlayerSize();
                if (b && 0 !== b.width && 0 !== b.height) {
                    var c = a.width / a.height;
                    var d = 0;
                    for (var e = -1, f = 0; f < c3a.length; f++) {
                        var h = Math.abs(b.width - c3a[f]);
                        if (-1 === e || d >= h) e = f, d = h
                    }
                    d = d3a[e];
                    this.u && g.Bl(this.u.element, "outline-width", Math.max(b.width, b.height) + "px");
                    for (b = 0; b < this.endscreen.elements.length; ++b)
                        if (f = this.endscreen.elements[b].id, e = this.j[f],
                            h = this.D[f], e && h) {
                            var l = h.width * c / h.aspectRatio,
                                m = Math.round(h.width * a.width);
                            f = Math.round(l * a.height);
                            var n = a.left + Math.round(h.left * a.width),
                                p = a.top + Math.round(h.top * a.height);
                            g.Ll(e.element, m, f);
                            g.Hl(e.element, n, p);
                            this.ea && (g.jo(e.element, e3a), 256 < m || 256 < f ? g.go(e.element, "ytp-ce-large-round") : 96 < m || 96 < f ? g.go(e.element, "ytp-ce-medium-round") : g.go(e.element, "ytp-ce-small-round"));
                            g.jo(e.element, f3a);
                            m = h.left + h.width / 2;
                            h = h.top + l / 2;
                            g.go(e.element, .5 >= m && .5 >= h ? "ytp-ce-top-left-quad" : .5 < m && .5 >= h ? "ytp-ce-top-right-quad" :
                                .5 >= m && .5 < h ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
                            g.jo(e.element, d3a);
                            g.go(e.element, d);
                            (e = g.bh(document, "div", "ytp-ce-expanding-overlay-body", e.element)[0]) && g.Bl(e, "height", f + "px")
                        }
                }
            }
        }
    };
    g.k.onCueRangeEnter = function(a) {
        if (this.endscreen)
            if ("ytp-ce-in-endscreen" === a.getId()) U4(this, this.endscreen.impressionUrls), (a = g.Bz()) && this.endscreen.visualElement && g.Gz(a, this.endscreen.visualElement);
            else {
                a = a.getId().substring(15);
                var b = this.j[a],
                    c = this.D[a];
                g.go(b.element, "ytp-ce-element-show");
                b.element.removeAttribute("aria-hidden");
                b = this.player.getRootNode();
                g.go(b, "ytp-ce-shown");
                U4(this, c.impressionUrls);
                (b = g.Bz()) && g.Gz(b, c.visualElement);
                this.player.V().C && this.player.Pa("endscreenelementshown",
                    a)
            }
    };
    g.k.onCueRangeExit = function(a) {
        if ("ytp-ce-in-endscreen" !== a.getId()) {
            a = a.getId().substring(15);
            var b = this.j[a];
            g.io(b.element, "ytp-ce-element-show");
            b.element.setAttribute("aria-hidden", "true");
            b = this.player.getRootNode();
            g.io(b, "ytp-ce-shown");
            this.player.V().C && this.player.Pa("endscreenelementhidden", a)
        }
    };
    g.k.N3 = function(a) {
        var b = this;
        a.target === window && (new g.Yn(function() {
            for (var c = g.t(Object.values(b.j)), d = c.next(); !d.done; d = c.next()) g.jo(d.value.element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"])
        }, 0)).start()
    };
    var c3a = [346, 426, 470, 506, 570, 640, 853, 1280, 1920],
        d3a = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "),
        f3a = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"],
        e3a = ["ytp-ce-small-round", "ytp-ce-medium-round", "ytp-ce-large-round"];
    var Y1a = {
        Hla: "current",
        pIa: "new"
    };
    var $1a = {
            CLOSE: "close",
            QLa: "openUrl",
            SUBSCRIBE: "subscribe"
        },
        a2a = {
            Oga: "click",
            CLOSE: "close",
            dva: "hidden",
            bRa: "rollOut",
            cRa: "rollOver",
            USa: "shown"
        };
    c2a.prototype.ue = function() {
        var a = d2a(this, function(b) {
            return "openUrl" === b.type && null != b.url
        });
        return a ? a.url : null
    };
    var Z2a = {
            zca: "anchored",
            UT: "branding",
            CHANNEL: "channel",
            xla: "cta",
            gva: "highlightText",
            Qya: "label",
            PLAYLIST: "playlist",
            JOa: "popup",
            xVa: "speech",
            SUBSCRIBE: "subscribe",
            sYa: "title",
            VIDEO: "video",
            I3a: "website"
        },
        Y2a = {
            UT: "branding",
            Pea: "card",
            Ina: "drawer",
            fva: "highlight",
            qEa: "marker",
            JPa: "promotion",
            TEXT: "text",
            q4a: "widget"
        };
    g.v(a5, g.K);
    g.k = a5.prototype;
    g.k.addCueRange = function(a, b, c, d, e) {
        a = new g.sA(a, b, {
            id: c,
            namespace: "annotations_module"
        });
        d && this.Xa.set(a, d);
        e && this.bb.set(a, e);
        this.context.G.oe([a])
    };
    g.k.AA = function() {
        this.context.u.subscribe("resize", this.OB, this)
    };
    g.k.uF = function(a, b, c, d, e, f) {
        if (this.rb) return !1;
        f && (f.stopPropagation(), f.preventDefault());
        this.navigate(a, c, d, e);
        return !1
    };
    g.k.show = function() {};
    g.k.hide = function() {};
    g.k.destroy = function() {
        g.ph(this.element)
    };
    g.k.OB = function() {};
    g.k.navigate = function(a, b, c, d) {
        var e = this,
            f = W4(a);
        if (f) {
            var h = k2a(f, a.target),
                l = function() {
                    a.j && e.context.G.pauseVideo();
                    var m = e.context.videoData.D || !1,
                        n = g.mu(f || "");
                    m && n && (n.v || n.list) ? e.context.G.Ml(n.v, b, n.list, !1) : g.jM(f || "", "current" === h ? "_top" : void 0, b)
                };
            "new" === h && (l(), l = null);
            n5(this.context.logger, c, l, d);
            j2a(f) || (c = g.Bz(), d = b.itct, c && d && g.Lz(c, g.uz(d)))
        }
    };
    g.k.ra = function() {
        this.Xa.clear();
        this.bb.clear();
        g.K.prototype.ra.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.W(a);
        g.N(this, a);
        return a.element
    };
    g.v(m2a, a5);
    g.k = m2a.prototype;
    g.k.Wp = function() {
        this.oa && f5(this, this.oa)
    };
    g.k.isAvailable = function() {
        var a;
        if (a = !!this.cards.length)(a = this.G.getRootNode()) ? (a = g.Ml(a), a = 173 < a.width && 173 < a.height) : a = !1;
        return a
    };
    g.k.OB = function() {
        var a = this.isAvailable();
        g.Nl(this.element, a);
        g.ko(this.context.G.getRootNode(), g.tT.IV_DRAWER_ENABLED, a);
        F4(this.G)
    };
    g.k.destroy = function() {
        this.G.Sw(!1);
        try {
            this.G.getRootNode().removeChild(this.C)
        } catch (a) {}
        g.Ux(this.ea);
        g.Ax(this.Aa);
        this.Ta && this.Ta.dispose();
        this.D && this.D.dispose();
        a5.prototype.destroy.call(this)
    };
    g.k.qY = function() {
        if (this.B) {
            n5(this.context.logger, k5(this).tracking.close);
            var a = g.Bz();
            a && this.J && g.Lz(a, this.J);
            e5(this)
        }
    };
    g.k.JY = function() {
        g.ko(this.C, "iv-drawer-scrolled", 0 < this.u.scrollTop)
    };
    g.k.C_ = function() {
        var a = g.Bz(),
            b = k5(this);
        b = b ? b.tf : this.tf;
        a && b && g.Jz(a, [b])
    };
    g.k.B_ = function() {
        var a = g.Bz(),
            b = k5(this);
        b = b ? b.tf : this.tf;
        a && b && g.Kz(a, [b])
    };
    g.k.xU = function() {
        var a = k5(this);
        n5(this.context.logger, a.tracking.SS);
        var b = g.Bz();
        b && a && g.Jz(b, [a.Fj, a.tf])
    };
    g.k.E_ = function() {
        var a = g.Bz(),
            b = k5(this);
        a && b && g.Kz(a, [b.Fj])
    };
    g.k.wU = function(a) {
        var b = k5(this),
            c = g.Bz();
        this.j ? a ? (a = this.context.logger, n5(a, b.tracking.HE), a.G.sendVideoStatsEngageEvent(4, void 0), c && b.Fj && g.Lz(c, b.Fj)) : (a = this.context.logger, n5(a, b.tracking.HE), a.G.sendVideoStatsEngageEvent(4, void 0), c && b.tf && g.Lz(c, b.tf)) : (a = this.context.logger, n5(a, b.tracking.HE), a.G.sendVideoStatsEngageEvent(4, void 0), c && this.tf && g.Lz(c, this.tf))
    };
    g.v(l5, a5);
    l5.prototype.AA = function() {
        a5.prototype.AA.call(this);
        B2a(this)
    };
    l5.prototype.show = function() {
        a5.prototype.show.call(this);
        var a = g.Bz(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.Jz(a, [g.uz(b.itct)])
    };
    l5.prototype.hide = function() {
        a5.prototype.hide.call(this);
        var a = g.Bz(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.Kz(a, [g.uz(b.itct)])
    };
    g.v(m5, l5);
    m5.prototype.show = function() {
        if (!this.isActive) {
            l5.prototype.show.call(this);
            if (!this.J) {
                g.go(this.element, "iv-branding");
                var a = this.annotation.data;
                this.u = this.createElement({
                    F: "img",
                    Fa: ["branding-img", "iv-click-target"],
                    X: {
                        "aria-label": "\u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0627\u0626\u064a\u0629 \u0644\u0644\u0642\u0646\u0627\u0629",
                        src: a.image_url,
                        width: a.image_width,
                        height: a.image_height
                    }
                });
                g.Nl(this.u, !1);
                var b = this.context.Y.K("html5_player_branding_button_killswitch") ? this.createElement({
                    F: "div",
                    Fa: ["branding-img-container"]
                }) : this.createElement({
                    F: "button",
                    Fa: ["branding-img-container", "ytp-button"]
                });
                b.appendChild(this.u);
                this.element.appendChild(b);
                var c = this.annotation.ue();
                c && (b = this.context.Y.K("html5_player_branding_button_killswitch") ? this.u : b, b5(this, b, c, this.annotation.id, a.session_data));
                F2a(this, a);
                this.J = !0
            }
            g.Nl(this.element, !0);
            this.isActive = !0;
            this.u && C2a(this, this.u)
        }
    };
    m5.prototype.hide = function() {
        this.isActive && (l5.prototype.hide.call(this), g.Nl(this.element, !1), this.isActive = !1)
    };
    m5.prototype.destroy = function() {
        this.j && (this.j.dispose(), this.j = null);
        l5.prototype.destroy.call(this)
    };
    g.v(H2a, l5);
    g.k = H2a.prototype;
    g.k.show = function() {
        this.isActive || (l5.prototype.show.call(this), this.Z || (J2a(this), this.Z = !0), g.Nl(this.element, !0), g.Nh(function() {
            g.io(this.element, "iv-promo-inactive")
        }, 100, this), this.element.removeAttribute("aria-hidden"), this.isActive = !0, N2a(this), K2a(this), L2a(this, this.I))
    };
    g.k.hide = function() {
        this.isActive && (g.go(this.element, "iv-promo-inactive"), this.isActive = !1, this.element.setAttribute("aria-hidden", "true"))
    };
    g.k.uF = function(a, b, c, d, e, f) {
        return this.isCollapsed ? !1 : l5.prototype.uF.call(this, a, b, c, d, e, f)
    };
    g.k.FZ = function(a) {
        this.S = !0;
        I2a(this, 500, a)
    };
    g.k.EZ = function() {
        this.S = !1;
        M2a(this)
    };
    g.k.zZ = function(a) {
        a.stopPropagation();
        this.hide()
    };
    g.k.AZ = function(a) {
        a.stopPropagation();
        N2a(this);
        this.isCollapsed = !0;
        g.go(this.element, "iv-promo-collapsed-no-delay");
        this.D.start()
    };
    g.k.destroy = function() {
        this.D.dispose();
        l5.prototype.destroy.call(this)
    };
    g.v(P2a, g.dO);
    g.k = P2a.prototype;
    g.k.zg = function(a, b) {
        if (!b3a(this.player.V().playerStyle)) return null;
        switch (a) {
            case "loadCustomAnnotationsXml":
                return (a = g.aYa(b)) && T2a(this, a), !0;
            case "removeCustomAnnotationById":
                return b && this.j && (q2a(this.j, b), F4(this.player)), !0
        }
        return null
    };
    g.k.getOptions = function() {
        return b3a(this.player.V().playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : []
    };
    g.k.Mt = function() {
        var a = this.player.V(),
            b = this.player.getVideoData();
        return b.D && a.pfpChazalUi ? !1 : 1 === (a.annotationsLoadPolicy || b.annotationsLoadPolicy) && !b.QL || a.oa.get(b.videoId) || g.nI(b) || g.oI(b) ? !0 : !1
    };
    g.k.GD = function() {
        if (this.B) {
            var a = this.player.fb().getVideoContentRect(!0);
            g.Ll(this.B.element, a.width, a.height);
            g.Hl(this.B.element, a.left, a.top)
        }
        if (this.j) {
            var b = this.player.hk();
            a = this.j;
            b = b.width;
            g.ko(a.C, "iv-drawer-small", 426 >= b);
            g.ko(a.C, "iv-drawer-big", 1280 <= b)
        }
    };
    g.k.yU = function(a) {
        R2a(this, a.state);
        g.V(a.state, 2) && (this.Ci() && this.tm() && 2 !== this.player.getPresentingPlayerType() && this.setCardsVisible(!1), this.Sw(!1))
    };
    g.k.load = function() {
        function a(h) {
            var l = b.loadNumber;
            b.C = null;
            b.loaded && b.loadNumber === l && b.player.getVideoData().videoId === d && (h = g.vu(h) && h.responseXML ? h.responseXML : null) && (T2a(b, h), g.go(b.player.getRootNode(), "iv-module-loaded"))
        }
        var b = this;
        g.dO.prototype.load.call(this);
        R2a(this, this.player.Eb());
        this.loadNumber++;
        var c = this.player.getVideoData(),
            d = c.videoId;
        g.Ev() && (a = U2a(this, a));
        var e = {
            format: "XML",
            onFinish: a,
            onError: function() {
                b.C = null
            },
            urlParams: {}
        };
        c.isPharma && (e.urlParams.pharma = "1");
        e.method = "POST";
        e.withCredentials = !0;
        var f = this.player.V().oa.get(d);
        f && V2a(e, f);
        f = f && (f.UB || f.ly);
        if (!c.au || f) c.jb ? this.C = g.Bu(c.jb, e) : (this.En = function() {
            b.onVideoDataChange(e)
        }, this.player.addEventListener("videodatachange", this.En));
        g.AN(this.player, this.B.element, 4);
        this.GD();
        (f = g.nI(c)) && $2a(this, f);
        (f = g.oI(c)) && f.featuredChannel && a3a(this, f.featuredChannel, f.annotationId || "branding", c.videoId || null, c.eventId || null)
    };
    g.k.onVideoDataChange = function(a) {
        var b = this.player.getVideoData();
        b.jb && (this.En && (this.player.removeEventListener("videodatachange", this.En), this.En = null), this.C = g.Bu(b.jb, a))
    };
    g.k.unload = function() {
        this.player.Ff("annotations_module");
        for (var a = g.t(Object.keys(this.I)), b = a.next(); !b.done; b = a.next()) this.I[b.value].destroy();
        this.J = null;
        this.j && (this.j.destroy(), this.j = null, F4(this.player));
        this.C && (this.C.abort(), this.C = null);
        this.I = {};
        this.u.hide();
        g.dO.prototype.unload.call(this);
        this.B.detach();
        this.En && (this.player.removeEventListener("videodatachange", this.En), this.En = null)
    };
    g.k.CR = function(a) {
        a === this.player.getVideoData().videoId && (this.loaded ? W2a(this) : this.load())
    };
    g.k.Ci = function() {
        return !!this.j && this.j.isAvailable()
    };
    g.k.tm = function() {
        return !!this.j && this.j.B
    };
    g.k.setCardsVisible = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        this.Ci();
        this.j && (a ? c ? d5(this.j, c, b) : d5(this.j, "YOUTUBE_DRAWER_AUTO_OPEN", b) : e5(this.j))
    };
    g.k.Sw = function(a, b) {
        this.player.ma(a ? "cardsteasershow" : "cardsteaserhide", b)
    };
    g.k.ra = function() {
        this.player.V().oa.unsubscribe("vast_info_card_add", this.CR, this);
        g.io(this.player.getRootNode(), g.tT.IV_DRAWER_OPEN);
        for (var a = this.S, b = g.Un, c = 0, d = a.length; c < d; c++) b.Yk(a[c]);
        this.S.length = 0;
        g.dO.prototype.ra.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.W(a);
        g.N(this, a);
        return a.element
    };
    g.cO("annotations_module", P2a);
    g.cO("creatorendscreen", J1a);
})(_yt_player);