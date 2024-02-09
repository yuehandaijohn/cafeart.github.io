/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var n_ = Object.create;
    var cn = Object.defineProperty;
    var i_ = Object.getOwnPropertyDescriptor;
    var o_ = Object.getOwnPropertyNames;
    var a_ = Object.getPrototypeOf,
        s_ = Object.prototype.hasOwnProperty;
    var me = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        ke = (e, t) => {
            for (var r in t) cn(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Ds = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of o_(t)) !s_.call(e, i) && i !== r && cn(e, i, {
                    get: () => t[i],
                    enumerable: !(n = i_(t, i)) || n.enumerable
                });
            return e
        };
    var de = (e, t, r) => (r = e != null ? n_(a_(e)) : {}, Ds(t || !e || !e.__esModule ? cn(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        nt = e => Ds(cn({}, "__esModule", {
            value: !0
        }), e);
    var qi = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(f, T) {
                var S = new p.Bare;
                return S.init(f, T)
            }

            function r(f) {
                return f.replace(/[A-Z]/g, function(T) {
                    return "-" + T.toLowerCase()
                })
            }

            function n(f) {
                var T = parseInt(f.slice(1), 16),
                    S = T >> 16 & 255,
                    N = T >> 8 & 255,
                    x = 255 & T;
                return [S, N, x]
            }

            function i(f, T, S) {
                return "#" + (1 << 24 | f << 16 | T << 8 | S).toString(16).slice(1)
            }

            function o() {}

            function a(f, T) {
                v("Type warning: Expected: [" + f + "] Got: [" + typeof T + "] " + T)
            }

            function s(f, T, S) {
                v("Units do not match [" + f + "]: " + T + ", " + S)
            }

            function u(f, T, S) {
                if (T !== void 0 && (S = T), f === void 0) return S;
                var N = S;
                return Te.test(f) || !Ce.test(f) ? N = parseInt(f, 10) : Ce.test(f) && (N = 1e3 * parseFloat(f)), 0 > N && (N = 0), N === N ? N : S
            }

            function v(f) {
                re.debug && window && window.console.warn(f)
            }

            function E(f) {
                for (var T = -1, S = f ? f.length : 0, N = []; ++T < S;) {
                    var x = f[T];
                    x && N.push(x)
                }
                return N
            }
            var d = function(f, T, S) {
                    function N(ae) {
                        return typeof ae == "object"
                    }

                    function x(ae) {
                        return typeof ae == "function"
                    }

                    function D() {}

                    function te(ae, ge) {
                        function $() {
                            var Ne = new ue;
                            return x(Ne.init) && Ne.init.apply(Ne, arguments), Ne
                        }

                        function ue() {}
                        ge === S && (ge = ae, ae = Object), $.Bare = ue;
                        var ce, _e = D[f] = ae[f],
                            rt = ue[f] = $[f] = new D;
                        return rt.constructor = $, $.mixin = function(Ne) {
                            return ue[f] = $[f] = te($, Ne)[f], $
                        }, $.open = function(Ne) {
                            if (ce = {}, x(Ne) ? ce = Ne.call($, rt, _e, $, ae) : N(Ne) && (ce = Ne), N(ce))
                                for (var br in ce) T.call(ce, br) && (rt[br] = ce[br]);
                            return x(rt.init) || (rt.init = ae), $
                        }, $.open(ge)
                    }
                    return te
                }("prototype", {}.hasOwnProperty),
                _ = {
                    ease: ["ease", function(f, T, S, N) {
                        var x = (f /= N) * f,
                            D = x * f;
                        return T + S * (-2.75 * D * x + 11 * x * x + -15.5 * D + 8 * x + .25 * f)
                    }],
                    "ease-in": ["ease-in", function(f, T, S, N) {
                        var x = (f /= N) * f,
                            D = x * f;
                        return T + S * (-1 * D * x + 3 * x * x + -3 * D + 2 * x)
                    }],
                    "ease-out": ["ease-out", function(f, T, S, N) {
                        var x = (f /= N) * f,
                            D = x * f;
                        return T + S * (.3 * D * x + -1.6 * x * x + 2.2 * D + -1.8 * x + 1.9 * f)
                    }],
                    "ease-in-out": ["ease-in-out", function(f, T, S, N) {
                        var x = (f /= N) * f,
                            D = x * f;
                        return T + S * (2 * D * x + -5 * x * x + 2 * D + 2 * x)
                    }],
                    linear: ["linear", function(f, T, S, N) {
                        return S * f / N + T
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, T, S, N) {
                        return S * (f /= N) * f + T
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, T, S, N) {
                        return -S * (f /= N) * (f - 2) + T
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, T, S, N) {
                        return (f /= N / 2) < 1 ? S / 2 * f * f + T : -S / 2 * (--f * (f - 2) - 1) + T
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, T, S, N) {
                        return S * (f /= N) * f * f + T
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, T, S, N) {
                        return S * ((f = f / N - 1) * f * f + 1) + T
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, T, S, N) {
                        return (f /= N / 2) < 1 ? S / 2 * f * f * f + T : S / 2 * ((f -= 2) * f * f + 2) + T
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, T, S, N) {
                        return S * (f /= N) * f * f * f + T
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, T, S, N) {
                        return -S * ((f = f / N - 1) * f * f * f - 1) + T
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, T, S, N) {
                        return (f /= N / 2) < 1 ? S / 2 * f * f * f * f + T : -S / 2 * ((f -= 2) * f * f * f - 2) + T
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, T, S, N) {
                        return S * (f /= N) * f * f * f * f + T
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, T, S, N) {
                        return S * ((f = f / N - 1) * f * f * f * f + 1) + T
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, T, S, N) {
                        return (f /= N / 2) < 1 ? S / 2 * f * f * f * f * f + T : S / 2 * ((f -= 2) * f * f * f * f + 2) + T
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, T, S, N) {
                        return -S * Math.cos(f / N * (Math.PI / 2)) + S + T
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, T, S, N) {
                        return S * Math.sin(f / N * (Math.PI / 2)) + T
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, T, S, N) {
                        return -S / 2 * (Math.cos(Math.PI * f / N) - 1) + T
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, T, S, N) {
                        return f === 0 ? T : S * Math.pow(2, 10 * (f / N - 1)) + T
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, T, S, N) {
                        return f === N ? T + S : S * (-Math.pow(2, -10 * f / N) + 1) + T
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, T, S, N) {
                        return f === 0 ? T : f === N ? T + S : (f /= N / 2) < 1 ? S / 2 * Math.pow(2, 10 * (f - 1)) + T : S / 2 * (-Math.pow(2, -10 * --f) + 2) + T
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, T, S, N) {
                        return -S * (Math.sqrt(1 - (f /= N) * f) - 1) + T
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, T, S, N) {
                        return S * Math.sqrt(1 - (f = f / N - 1) * f) + T
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, T, S, N) {
                        return (f /= N / 2) < 1 ? -S / 2 * (Math.sqrt(1 - f * f) - 1) + T : S / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + T
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, T, S, N, x) {
                        return x === void 0 && (x = 1.70158), S * (f /= N) * f * ((x + 1) * f - x) + T
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, T, S, N, x) {
                        return x === void 0 && (x = 1.70158), S * ((f = f / N - 1) * f * ((x + 1) * f + x) + 1) + T
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, T, S, N, x) {
                        return x === void 0 && (x = 1.70158), (f /= N / 2) < 1 ? S / 2 * f * f * (((x *= 1.525) + 1) * f - x) + T : S / 2 * ((f -= 2) * f * (((x *= 1.525) + 1) * f + x) + 2) + T
                    }]
                },
                m = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                y = document,
                I = window,
                R = "bkwld-tram",
                O = /[\-\.0-9]/g,
                L = /[A-Z]/,
                C = "number",
                P = /^(rgb|#)/,
                F = /(em|cm|mm|in|pt|pc|px)$/,
                M = /(em|cm|mm|in|pt|pc|px|%)$/,
                K = /(deg|rad|turn)$/,
                j = "unitless",
                Q = /(all|none) 0s ease 0s/,
                J = /^(width|height)$/,
                ne = " ",
                k = y.createElement("a"),
                A = ["Webkit", "Moz", "O", "ms"],
                G = ["-webkit-", "-moz-", "-o-", "-ms-"],
                B = function(f) {
                    if (f in k.style) return {
                        dom: f,
                        css: f
                    };
                    var T, S, N = "",
                        x = f.split("-");
                    for (T = 0; T < x.length; T++) N += x[T].charAt(0).toUpperCase() + x[T].slice(1);
                    for (T = 0; T < A.length; T++)
                        if (S = A[T] + N, S in k.style) return {
                            dom: S,
                            css: G[T] + f
                        }
                },
                H = t.support = {
                    bind: Function.prototype.bind,
                    transform: B("transform"),
                    transition: B("transition"),
                    backface: B("backface-visibility"),
                    timing: B("transition-timing-function")
                };
            if (H.transition) {
                var ee = H.timing.dom;
                if (k.style[ee] = _["ease-in-back"][0], !k.style[ee])
                    for (var ie in m) _[ie][0] = m[ie]
            }
            var V = t.frame = function() {
                    var f = I.requestAnimationFrame || I.webkitRequestAnimationFrame || I.mozRequestAnimationFrame || I.oRequestAnimationFrame || I.msRequestAnimationFrame;
                    return f && H.bind ? f.bind(I) : function(T) {
                        I.setTimeout(T, 16)
                    }
                }(),
                X = t.now = function() {
                    var f = I.performance,
                        T = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                    return T && H.bind ? T.bind(f) : Date.now || function() {
                        return +new Date
                    }
                }(),
                g = d(function(f) {
                    function T(oe, fe) {
                        var Ee = E(("" + oe).split(ne)),
                            pe = Ee[0];
                        fe = fe || {};
                        var Pe = z[pe];
                        if (!Pe) return v("Unsupported property: " + pe);
                        if (!fe.weak || !this.props[pe]) {
                            var je = Pe[0],
                                Ge = this.props[pe];
                            return Ge || (Ge = this.props[pe] = new je.Bare), Ge.init(this.$el, Ee, Pe, fe), Ge
                        }
                    }

                    function S(oe, fe, Ee) {
                        if (oe) {
                            var pe = typeof oe;
                            if (fe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), pe == "number" && fe) return this.timer = new Y({
                                duration: oe,
                                context: this,
                                complete: D
                            }), void(this.active = !0);
                            if (pe == "string" && fe) {
                                switch (oe) {
                                    case "hide":
                                        $.call(this);
                                        break;
                                    case "stop":
                                        te.call(this);
                                        break;
                                    case "redraw":
                                        ue.call(this);
                                        break;
                                    default:
                                        T.call(this, oe, Ee && Ee[1])
                                }
                                return D.call(this)
                            }
                            if (pe == "function") return void oe.call(this, this);
                            if (pe == "object") {
                                var Pe = 0;
                                rt.call(this, oe, function(Ie, r_) {
                                    Ie.span > Pe && (Pe = Ie.span), Ie.stop(), Ie.animate(r_)
                                }, function(Ie) {
                                    "wait" in Ie && (Pe = u(Ie.wait, 0))
                                }), _e.call(this), Pe > 0 && (this.timer = new Y({
                                    duration: Pe,
                                    context: this
                                }), this.active = !0, fe && (this.timer.complete = D));
                                var je = this,
                                    Ge = !1,
                                    un = {};
                                V(function() {
                                    rt.call(je, oe, function(Ie) {
                                        Ie.active && (Ge = !0, un[Ie.name] = Ie.nextStyle)
                                    }), Ge && je.$el.css(un)
                                })
                            }
                        }
                    }

                    function N(oe) {
                        oe = u(oe, 0), this.active ? this.queue.push({
                            options: oe
                        }) : (this.timer = new Y({
                            duration: oe,
                            context: this,
                            complete: D
                        }), this.active = !0)
                    }

                    function x(oe) {
                        return this.active ? (this.queue.push({
                            options: oe,
                            args: arguments
                        }), void(this.timer.complete = D)) : v("No active transition timer. Use start() or wait() before then().")
                    }

                    function D() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var oe = this.queue.shift();
                            S.call(this, oe.options, !0, oe.args)
                        }
                    }

                    function te(oe) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var fe;
                        typeof oe == "string" ? (fe = {}, fe[oe] = 1) : fe = typeof oe == "object" && oe != null ? oe : this.props, rt.call(this, fe, Ne), _e.call(this)
                    }

                    function ae(oe) {
                        te.call(this, oe), rt.call(this, oe, br, e_)
                    }

                    function ge(oe) {
                        typeof oe != "string" && (oe = "block"), this.el.style.display = oe
                    }

                    function $() {
                        te.call(this), this.el.style.display = "none"
                    }

                    function ue() {
                        this.el.offsetHeight
                    }

                    function ce() {
                        te.call(this), e.removeData(this.el, R), this.$el = this.el = null
                    }

                    function _e() {
                        var oe, fe, Ee = [];
                        this.upstream && Ee.push(this.upstream);
                        for (oe in this.props) fe = this.props[oe], fe.active && Ee.push(fe.string);
                        Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[H.transition.dom] = Ee)
                    }

                    function rt(oe, fe, Ee) {
                        var pe, Pe, je, Ge, un = fe !== Ne,
                            Ie = {};
                        for (pe in oe) je = oe[pe], pe in le ? (Ie.transform || (Ie.transform = {}), Ie.transform[pe] = je) : (L.test(pe) && (pe = r(pe)), pe in z ? Ie[pe] = je : (Ge || (Ge = {}), Ge[pe] = je));
                        for (pe in Ie) {
                            if (je = Ie[pe], Pe = this.props[pe], !Pe) {
                                if (!un) continue;
                                Pe = T.call(this, pe)
                            }
                            fe.call(this, Pe, je)
                        }
                        Ee && Ge && Ee.call(this, Ge)
                    }

                    function Ne(oe) {
                        oe.stop()
                    }

                    function br(oe, fe) {
                        oe.set(fe)
                    }

                    function e_(oe) {
                        this.$el.css(oe)
                    }

                    function Be(oe, fe) {
                        f[oe] = function() {
                            return this.children ? t_.call(this, fe, arguments) : (this.el && fe.apply(this, arguments), this)
                        }
                    }

                    function t_(oe, fe) {
                        var Ee, pe = this.children.length;
                        for (Ee = 0; pe > Ee; Ee++) oe.apply(this.children[Ee], fe);
                        return this
                    }
                    f.init = function(oe) {
                        if (this.$el = e(oe), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, re.keepInherited && !re.fallback) {
                            var fe = W(this.el, "transition");
                            fe && !Q.test(fe) && (this.upstream = fe)
                        }
                        H.backface && re.hideBackface && b(this.el, H.backface.css, "hidden")
                    }, Be("add", T), Be("start", S), Be("wait", N), Be("then", x), Be("next", D), Be("stop", te), Be("set", ae), Be("show", ge), Be("hide", $), Be("redraw", ue), Be("destroy", ce)
                }),
                p = d(g, function(f) {
                    function T(S, N) {
                        var x = e.data(S, R) || e.data(S, R, new g.Bare);
                        return x.el || x.init(S), N ? x.start(N) : x
                    }
                    f.init = function(S, N) {
                        var x = e(S);
                        if (!x.length) return this;
                        if (x.length === 1) return T(x[0], N);
                        var D = [];
                        return x.each(function(te, ae) {
                            D.push(T(ae, N))
                        }), this.children = D, this
                    }
                }),
                h = d(function(f) {
                    function T() {
                        var D = this.get();
                        this.update("auto");
                        var te = this.get();
                        return this.update(D), te
                    }

                    function S(D, te, ae) {
                        return te !== void 0 && (ae = te), D in _ ? D : ae
                    }

                    function N(D) {
                        var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(D);
                        return (te ? i(te[1], te[2], te[3]) : D).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var x = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    f.init = function(D, te, ae, ge) {
                        this.$el = D, this.el = D[0];
                        var $ = te[0];
                        ae[2] && ($ = ae[2]), Z[$] && ($ = Z[$]), this.name = $, this.type = ae[1], this.duration = u(te[1], this.duration, x.duration), this.ease = S(te[2], this.ease, x.ease), this.delay = u(te[3], this.delay, x.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = J.test(this.name), this.unit = ge.unit || this.unit || re.defaultUnit, this.angle = ge.angle || this.angle || re.defaultAngle, re.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + ne + this.duration + "ms" + (this.ease != "ease" ? ne + _[this.ease][0] : "") + (this.delay ? ne + this.delay + "ms" : ""))
                    }, f.set = function(D) {
                        D = this.convert(D, this.type), this.update(D), this.redraw()
                    }, f.transition = function(D) {
                        this.active = !0, D = this.convert(D, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), D == "auto" && (D = T.call(this))), this.nextStyle = D
                    }, f.fallback = function(D) {
                        var te = this.el.style[this.name] || this.convert(this.get(), this.type);
                        D = this.convert(D, this.type), this.auto && (te == "auto" && (te = this.convert(this.get(), this.type)), D == "auto" && (D = T.call(this))), this.tween = new w({
                            from: te,
                            to: D,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.get = function() {
                        return W(this.el, this.name)
                    }, f.update = function(D) {
                        b(this.el, this.name, D)
                    }, f.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, b(this.el, this.name, this.get()));
                        var D = this.tween;
                        D && D.context && D.destroy()
                    }, f.convert = function(D, te) {
                        if (D == "auto" && this.auto) return D;
                        var ae, ge = typeof D == "number",
                            $ = typeof D == "string";
                        switch (te) {
                            case C:
                                if (ge) return D;
                                if ($ && D.replace(O, "") === "") return +D;
                                ae = "number(unitless)";
                                break;
                            case P:
                                if ($) {
                                    if (D === "" && this.original) return this.original;
                                    if (te.test(D)) return D.charAt(0) == "#" && D.length == 7 ? D : N(D)
                                }
                                ae = "hex or rgb string";
                                break;
                            case F:
                                if (ge) return D + this.unit;
                                if ($ && te.test(D)) return D;
                                ae = "number(px) or string(unit)";
                                break;
                            case M:
                                if (ge) return D + this.unit;
                                if ($ && te.test(D)) return D;
                                ae = "number(px) or string(unit or %)";
                                break;
                            case K:
                                if (ge) return D + this.angle;
                                if ($ && te.test(D)) return D;
                                ae = "number(deg) or string(angle)";
                                break;
                            case j:
                                if (ge || $ && M.test(D)) return D;
                                ae = "number(unitless) or string(unit or %)"
                        }
                        return a(ae, D), D
                    }, f.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                l = d(h, function(f, T) {
                    f.init = function() {
                        T.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), P))
                    }
                }),
                q = d(h, function(f, T) {
                    f.init = function() {
                        T.init.apply(this, arguments), this.animate = this.fallback
                    }, f.get = function() {
                        return this.$el[this.name]()
                    }, f.update = function(S) {
                        this.$el[this.name](S)
                    }
                }),
                U = d(h, function(f, T) {
                    function S(N, x) {
                        var D, te, ae, ge, $;
                        for (D in N) ge = le[D], ae = ge[0], te = ge[1] || D, $ = this.convert(N[D], ae), x.call(this, te, $, ae)
                    }
                    f.init = function() {
                        T.init.apply(this, arguments), this.current || (this.current = {}, le.perspective && re.perspective && (this.current.perspective = re.perspective, b(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, f.set = function(N) {
                        S.call(this, N, function(x, D) {
                            this.current[x] = D
                        }), b(this.el, this.name, this.style(this.current)), this.redraw()
                    }, f.transition = function(N) {
                        var x = this.values(N);
                        this.tween = new se({
                            current: this.current,
                            values: x,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var D, te = {};
                        for (D in this.current) te[D] = D in x ? x[D] : this.current[D];
                        this.active = !0, this.nextStyle = this.style(te)
                    }, f.fallback = function(N) {
                        var x = this.values(N);
                        this.tween = new se({
                            current: this.current,
                            values: x,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.update = function() {
                        b(this.el, this.name, this.style(this.current))
                    }, f.style = function(N) {
                        var x, D = "";
                        for (x in N) D += x + "(" + N[x] + ") ";
                        return D
                    }, f.values = function(N) {
                        var x, D = {};
                        return S.call(this, N, function(te, ae, ge) {
                            D[te] = ae, this.current[te] === void 0 && (x = 0, ~te.indexOf("scale") && (x = 1), this.current[te] = this.convert(x, ge))
                        }), D
                    }
                }),
                w = d(function(f) {
                    function T($) {
                        ae.push($) === 1 && V(S)
                    }

                    function S() {
                        var $, ue, ce, _e = ae.length;
                        if (_e)
                            for (V(S), ue = X(), $ = _e; $--;) ce = ae[$], ce && ce.render(ue)
                    }

                    function N($) {
                        var ue, ce = e.inArray($, ae);
                        ce >= 0 && (ue = ae.slice(ce + 1), ae.length = ce, ue.length && (ae = ae.concat(ue)))
                    }

                    function x($) {
                        return Math.round($ * ge) / ge
                    }

                    function D($, ue, ce) {
                        return i($[0] + ce * (ue[0] - $[0]), $[1] + ce * (ue[1] - $[1]), $[2] + ce * (ue[2] - $[2]))
                    }
                    var te = {
                        ease: _.ease[1],
                        from: 0,
                        to: 1
                    };
                    f.init = function($) {
                        this.duration = $.duration || 0, this.delay = $.delay || 0;
                        var ue = $.ease || te.ease;
                        _[ue] && (ue = _[ue][1]), typeof ue != "function" && (ue = te.ease), this.ease = ue, this.update = $.update || o, this.complete = $.complete || o, this.context = $.context || this, this.name = $.name;
                        var ce = $.from,
                            _e = $.to;
                        ce === void 0 && (ce = te.from), _e === void 0 && (_e = te.to), this.unit = $.unit || "", typeof ce == "number" && typeof _e == "number" ? (this.begin = ce, this.change = _e - ce) : this.format(_e, ce), this.value = this.begin + this.unit, this.start = X(), $.autoplay !== !1 && this.play()
                    }, f.play = function() {
                        this.active || (this.start || (this.start = X()), this.active = !0, T(this))
                    }, f.stop = function() {
                        this.active && (this.active = !1, N(this))
                    }, f.render = function($) {
                        var ue, ce = $ - this.start;
                        if (this.delay) {
                            if (ce <= this.delay) return;
                            ce -= this.delay
                        }
                        if (ce < this.duration) {
                            var _e = this.ease(ce, 0, 1, this.duration);
                            return ue = this.startRGB ? D(this.startRGB, this.endRGB, _e) : x(this.begin + _e * this.change), this.value = ue + this.unit, void this.update.call(this.context, this.value)
                        }
                        ue = this.endHex || this.begin + this.change, this.value = ue + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, f.format = function($, ue) {
                        if (ue += "", $ += "", $.charAt(0) == "#") return this.startRGB = n(ue), this.endRGB = n($), this.endHex = $, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ce = ue.replace(O, ""),
                                _e = $.replace(O, "");
                            ce !== _e && s("tween", ue, $), this.unit = ce
                        }
                        ue = parseFloat(ue), $ = parseFloat($), this.begin = this.value = ue, this.change = $ - ue
                    }, f.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var ae = [],
                        ge = 1e3
                }),
                Y = d(w, function(f) {
                    f.init = function(T) {
                        this.duration = T.duration || 0, this.complete = T.complete || o, this.context = T.context, this.play()
                    }, f.render = function(T) {
                        var S = T - this.start;
                        S < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                se = d(w, function(f, T) {
                    f.init = function(S) {
                        this.context = S.context, this.update = S.update, this.tweens = [], this.current = S.current;
                        var N, x;
                        for (N in S.values) x = S.values[N], this.current[N] !== x && this.tweens.push(new w({
                            name: N,
                            from: this.current[N],
                            to: x,
                            duration: S.duration,
                            delay: S.delay,
                            ease: S.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, f.render = function(S) {
                        var N, x, D = this.tweens.length,
                            te = !1;
                        for (N = D; N--;) x = this.tweens[N], x.context && (x.render(S), this.current[x.name] = x.value, te = !0);
                        return te ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, f.destroy = function() {
                        if (T.destroy.call(this), this.tweens) {
                            var S, N = this.tweens.length;
                            for (S = N; S--;) this.tweens[S].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                re = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !H.transition,
                    agentTests: []
                };
            t.fallback = function(f) {
                if (!H.transition) return re.fallback = !0;
                re.agentTests.push("(" + f + ")");
                var T = new RegExp(re.agentTests.join("|"), "i");
                re.fallback = T.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(f) {
                return new w(f)
            }, t.delay = function(f, T, S) {
                return new Y({
                    complete: T,
                    duration: f,
                    context: S
                })
            }, e.fn.tram = function(f) {
                return t.call(null, this, f)
            };
            var b = e.style,
                W = e.css,
                Z = {
                    transform: H.transform && H.transform.css
                },
                z = {
                    color: [l, P],
                    background: [l, P, "background-color"],
                    "outline-color": [l, P],
                    "border-color": [l, P],
                    "border-top-color": [l, P],
                    "border-right-color": [l, P],
                    "border-bottom-color": [l, P],
                    "border-left-color": [l, P],
                    "border-width": [h, F],
                    "border-top-width": [h, F],
                    "border-right-width": [h, F],
                    "border-bottom-width": [h, F],
                    "border-left-width": [h, F],
                    "border-spacing": [h, F],
                    "letter-spacing": [h, F],
                    margin: [h, F],
                    "margin-top": [h, F],
                    "margin-right": [h, F],
                    "margin-bottom": [h, F],
                    "margin-left": [h, F],
                    padding: [h, F],
                    "padding-top": [h, F],
                    "padding-right": [h, F],
                    "padding-bottom": [h, F],
                    "padding-left": [h, F],
                    "outline-width": [h, F],
                    opacity: [h, C],
                    top: [h, M],
                    right: [h, M],
                    bottom: [h, M],
                    left: [h, M],
                    "font-size": [h, M],
                    "text-indent": [h, M],
                    "word-spacing": [h, M],
                    width: [h, M],
                    "min-width": [h, M],
                    "max-width": [h, M],
                    height: [h, M],
                    "min-height": [h, M],
                    "max-height": [h, M],
                    "line-height": [h, j],
                    "scroll-top": [q, C, "scrollTop"],
                    "scroll-left": [q, C, "scrollLeft"]
                },
                le = {};
            H.transform && (z.transform = [U], le = {
                x: [M, "translateX"],
                y: [M, "translateY"],
                rotate: [K],
                rotateX: [K],
                rotateY: [K],
                scale: [C],
                scaleX: [C],
                scaleY: [C],
                skew: [K],
                skewX: [K],
                skewY: [K]
            }), H.transform && H.backface && (le.z = [M, "translateZ"], le.rotateZ = [K], le.scaleZ = [C], le.perspective = [F]);
            var Te = /ms/,
                Ce = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Gs = c((eW, Fs) => {
        "use strict";
        var u_ = window.$,
            c_ = qi() && u_.tram;
        Fs.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                a = r.slice,
                s = r.concat,
                u = n.toString,
                v = n.hasOwnProperty,
                E = r.forEach,
                d = r.map,
                _ = r.reduce,
                m = r.reduceRight,
                y = r.filter,
                I = r.every,
                R = r.some,
                O = r.indexOf,
                L = r.lastIndexOf,
                C = Array.isArray,
                P = Object.keys,
                F = i.bind,
                M = e.each = e.forEach = function(A, G, B) {
                    if (A == null) return A;
                    if (E && A.forEach === E) A.forEach(G, B);
                    else if (A.length === +A.length) {
                        for (var H = 0, ee = A.length; H < ee; H++)
                            if (G.call(B, A[H], H, A) === t) return
                    } else
                        for (var ie = e.keys(A), H = 0, ee = ie.length; H < ee; H++)
                            if (G.call(B, A[ie[H]], ie[H], A) === t) return;
                    return A
                };
            e.map = e.collect = function(A, G, B) {
                var H = [];
                return A == null ? H : d && A.map === d ? A.map(G, B) : (M(A, function(ee, ie, V) {
                    H.push(G.call(B, ee, ie, V))
                }), H)
            }, e.find = e.detect = function(A, G, B) {
                var H;
                return K(A, function(ee, ie, V) {
                    if (G.call(B, ee, ie, V)) return H = ee, !0
                }), H
            }, e.filter = e.select = function(A, G, B) {
                var H = [];
                return A == null ? H : y && A.filter === y ? A.filter(G, B) : (M(A, function(ee, ie, V) {
                    G.call(B, ee, ie, V) && H.push(ee)
                }), H)
            };
            var K = e.some = e.any = function(A, G, B) {
                G || (G = e.identity);
                var H = !1;
                return A == null ? H : R && A.some === R ? A.some(G, B) : (M(A, function(ee, ie, V) {
                    if (H || (H = G.call(B, ee, ie, V))) return t
                }), !!H)
            };
            e.contains = e.include = function(A, G) {
                return A == null ? !1 : O && A.indexOf === O ? A.indexOf(G) != -1 : K(A, function(B) {
                    return B === G
                })
            }, e.delay = function(A, G) {
                var B = a.call(arguments, 2);
                return setTimeout(function() {
                    return A.apply(null, B)
                }, G)
            }, e.defer = function(A) {
                return e.delay.apply(e, [A, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(A) {
                var G, B, H;
                return function() {
                    G || (G = !0, B = arguments, H = this, c_.frame(function() {
                        G = !1, A.apply(H, B)
                    }))
                }
            }, e.debounce = function(A, G, B) {
                var H, ee, ie, V, X, g = function() {
                    var p = e.now() - V;
                    p < G ? H = setTimeout(g, G - p) : (H = null, B || (X = A.apply(ie, ee), ie = ee = null))
                };
                return function() {
                    ie = this, ee = arguments, V = e.now();
                    var p = B && !H;
                    return H || (H = setTimeout(g, G)), p && (X = A.apply(ie, ee), ie = ee = null), X
                }
            }, e.defaults = function(A) {
                if (!e.isObject(A)) return A;
                for (var G = 1, B = arguments.length; G < B; G++) {
                    var H = arguments[G];
                    for (var ee in H) A[ee] === void 0 && (A[ee] = H[ee])
                }
                return A
            }, e.keys = function(A) {
                if (!e.isObject(A)) return [];
                if (P) return P(A);
                var G = [];
                for (var B in A) e.has(A, B) && G.push(B);
                return G
            }, e.has = function(A, G) {
                return v.call(A, G)
            }, e.isObject = function(A) {
                return A === Object(A)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var j = /(.)^/,
                Q = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                J = /\\|'|\r|\n|\u2028|\u2029/g,
                ne = function(A) {
                    return "\\" + Q[A]
                },
                k = /^\s*(\w|\$)+\s*$/;
            return e.template = function(A, G, B) {
                !G && B && (G = B), G = e.defaults({}, G, e.templateSettings);
                var H = RegExp([(G.escape || j).source, (G.interpolate || j).source, (G.evaluate || j).source].join("|") + "|$", "g"),
                    ee = 0,
                    ie = "__p+='";
                A.replace(H, function(p, h, l, q, U) {
                    return ie += A.slice(ee, U).replace(J, ne), ee = U + p.length, h ? ie += `'+
((__t=(` + h + `))==null?'':_.escape(__t))+
'` : l ? ie += `'+
((__t=(` + l + `))==null?'':__t)+
'` : q && (ie += `';
` + q + `
__p+='`), p
                }), ie += `';
`;
                var V = G.variable;
                if (V) {
                    if (!k.test(V)) throw new Error("variable is not a bare identifier: " + V)
                } else ie = `with(obj||{}){
` + ie + `}
`, V = "obj";
                ie = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ie + `return __p;
`;
                var X;
                try {
                    X = new Function(G.variable || "obj", "_", ie)
                } catch (p) {
                    throw p.source = ie, p
                }
                var g = function(p) {
                    return X.call(this, p, e)
                };
                return g.source = "function(" + V + `){
` + ie + "}", g
            }, e
        }()
    });
    var Me = c((tW, js) => {
        "use strict";
        var ve = {},
            Wt = {},
            Ht = [],
            Fi = window.Webflow || [],
            bt = window.jQuery,
            Ke = bt(window),
            l_ = bt(document),
            it = bt.isFunction,
            ze = ve._ = Gs(),
            Us = ve.tram = qi() && bt.tram,
            fn = !1,
            Gi = !1;
        Us.config.hideBackface = !1;
        Us.config.keepInherited = !0;
        ve.define = function(e, t, r) {
            Wt[e] && Ws(Wt[e]);
            var n = Wt[e] = t(bt, ze, r) || {};
            return Vs(n), n
        };
        ve.require = function(e) {
            return Wt[e]
        };

        function Vs(e) {
            ve.env() && (it(e.design) && Ke.on("__wf_design", e.design), it(e.preview) && Ke.on("__wf_preview", e.preview)), it(e.destroy) && Ke.on("__wf_destroy", e.destroy), e.ready && it(e.ready) && f_(e)
        }

        function f_(e) {
            if (fn) {
                e.ready();
                return
            }
            ze.contains(Ht, e.ready) || Ht.push(e.ready)
        }

        function Ws(e) {
            it(e.design) && Ke.off("__wf_design", e.design), it(e.preview) && Ke.off("__wf_preview", e.preview), it(e.destroy) && Ke.off("__wf_destroy", e.destroy), e.ready && it(e.ready) && d_(e)
        }

        function d_(e) {
            Ht = ze.filter(Ht, function(t) {
                return t !== e.ready
            })
        }
        ve.push = function(e) {
            if (fn) {
                it(e) && e();
                return
            }
            Fi.push(e)
        };
        ve.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var ln = navigator.userAgent.toLowerCase(),
            Hs = ve.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            p_ = ve.env.chrome = /chrome/.test(ln) && /Google/.test(navigator.vendor) && parseInt(ln.match(/chrome\/(\d+)\./)[1], 10),
            v_ = ve.env.ios = /(ipod|iphone|ipad)/.test(ln);
        ve.env.safari = /safari/.test(ln) && !p_ && !v_;
        var Di;
        Hs && l_.on("touchstart mousedown", function(e) {
            Di = e.target
        });
        ve.validClick = Hs ? function(e) {
            return e === Di || bt.contains(e, Di)
        } : function() {
            return !0
        };
        var Xs = "resize.webflow orientationchange.webflow load.webflow",
            g_ = "scroll.webflow " + Xs;
        ve.resize = ki(Ke, Xs);
        ve.scroll = ki(Ke, g_);
        ve.redraw = ki();

        function ki(e, t) {
            var r = [],
                n = {};
            return n.up = ze.throttle(function(i) {
                ze.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (ze.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ze.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        ve.location = function(e) {
            window.location = e
        };
        ve.env() && (ve.location = function() {});
        ve.ready = function() {
            fn = !0, Gi ? h_() : ze.each(Ht, ks), ze.each(Fi, ks), ve.resize.up()
        };

        function ks(e) {
            it(e) && e()
        }

        function h_() {
            Gi = !1, ze.each(Wt, Vs)
        }
        var Ct;
        ve.load = function(e) {
            Ct.then(e)
        };

        function Bs() {
            Ct && (Ct.reject(), Ke.off("load", Ct.resolve)), Ct = new bt.Deferred, Ke.on("load", Ct.resolve)
        }
        ve.destroy = function(e) {
            e = e || {}, Gi = !0, Ke.triggerHandler("__wf_destroy"), e.domready != null && (fn = e.domready), ze.each(Wt, Ws), ve.resize.off(), ve.scroll.off(), ve.redraw.off(), Ht = [], Fi = [], Ct.state() === "pending" && Bs()
        };
        bt(ve.ready);
        Bs();
        js.exports = window.Webflow = ve
    });
    var Ys = c((rW, Ks) => {
        "use strict";
        var zs = Me();
        zs.define("brand", Ks.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                v;
            t.ready = function() {
                var m = n.attr("data-wf-status"),
                    y = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(y) && a.hostname !== y && (m = !0), m && !s && (v = v || d(), _(), setTimeout(_, 500), e(r).off(u, E).on(u, E))
            };

            function E() {
                var m = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(v).attr("style", m ? "display: none !important;" : "")
            }

            function d() {
                var m = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    y = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return m.append(y, I), m[0]
            }

            function _() {
                var m = i.children(o),
                    y = m.length && m.get(0) === v,
                    I = zs.env("editor");
                if (y) {
                    I && m.remove();
                    return
                }
                m.length && m.remove(), I || i.append(v)
            }
            return t
        })
    });
    var Qs = c((nW, $s) => {
        "use strict";
        var Ui = Me();
        Ui.define("edit", $s.exports = function(e, t, r) {
            if (r = r || {}, (Ui.env("test") || Ui.env("frame")) && !r.fixture && !m_()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                s = "hashchange",
                u, v = r.load || _,
                E = !1;
            try {
                E = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            E ? v() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && v() : i.on(s, d).triggerHandler(s);

            function d() {
                u || /\?edit/.test(a.hash) && v()
            }

            function _() {
                u = !0, window.WebflowEditor = !0, i.off(s, d), L(function(P) {
                    e.ajax({
                        url: O("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: m(P)
                    })
                })
            }

            function m(P) {
                return function(F) {
                    if (!F) {
                        console.error("Could not load editor data");
                        return
                    }
                    F.thirdPartyCookiesSupported = P, y(R(F.bugReporterScriptPath), function() {
                        y(R(F.scriptPath), function() {
                            window.WebflowEditor(F)
                        })
                    })
                }
            }

            function y(P, F) {
                e.ajax({
                    type: "GET",
                    url: P,
                    dataType: "script",
                    cache: !0
                }).then(F, I)
            }

            function I(P, F, M) {
                throw console.error("Could not load editor script: " + F), M
            }

            function R(P) {
                return P.indexOf("//") >= 0 ? P : O("https://editor-api.webflow.com" + P)
            }

            function O(P) {
                return P.replace(/([^:])\/\//g, "$1/")
            }

            function L(P) {
                var F = window.document.createElement("iframe");
                F.src = "https://webflow.com/site/third-party-cookie-check.html", F.style.display = "none", F.sandbox = "allow-scripts allow-same-origin";
                var M = function(K) {
                    K.data === "WF_third_party_cookies_unsupported" ? (C(F, M), P(!1)) : K.data === "WF_third_party_cookies_supported" && (C(F, M), P(!0))
                };
                F.onerror = function() {
                    C(F, M), P(!1)
                }, window.addEventListener("message", M, !1), window.document.body.appendChild(F)
            }

            function C(P, F) {
                window.removeEventListener("message", F, !1), P.remove()
            }
            return n
        });

        function m_() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Js = c((iW, Zs) => {
        "use strict";
        var y_ = Me();
        y_.define("focus-visible", Zs.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function s(C) {
                    return !!(C && C !== document && C.nodeName !== "HTML" && C.nodeName !== "BODY" && "classList" in C && "contains" in C.classList)
                }

                function u(C) {
                    var P = C.type,
                        F = C.tagName;
                    return !!(F === "INPUT" && a[P] && !C.readOnly || F === "TEXTAREA" && !C.readOnly || C.isContentEditable)
                }

                function v(C) {
                    C.getAttribute("data-wf-focus-visible") || C.setAttribute("data-wf-focus-visible", "true")
                }

                function E(C) {
                    C.getAttribute("data-wf-focus-visible") && C.removeAttribute("data-wf-focus-visible")
                }

                function d(C) {
                    C.metaKey || C.altKey || C.ctrlKey || (s(r.activeElement) && v(r.activeElement), n = !0)
                }

                function _() {
                    n = !1
                }

                function m(C) {
                    s(C.target) && (n || u(C.target)) && v(C.target)
                }

                function y(C) {
                    s(C.target) && C.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), E(C.target))
                }

                function I() {
                    document.visibilityState === "hidden" && (i && (n = !0), R())
                }

                function R() {
                    document.addEventListener("mousemove", L), document.addEventListener("mousedown", L), document.addEventListener("mouseup", L), document.addEventListener("pointermove", L), document.addEventListener("pointerdown", L), document.addEventListener("pointerup", L), document.addEventListener("touchmove", L), document.addEventListener("touchstart", L), document.addEventListener("touchend", L)
                }

                function O() {
                    document.removeEventListener("mousemove", L), document.removeEventListener("mousedown", L), document.removeEventListener("mouseup", L), document.removeEventListener("pointermove", L), document.removeEventListener("pointerdown", L), document.removeEventListener("pointerup", L), document.removeEventListener("touchmove", L), document.removeEventListener("touchstart", L), document.removeEventListener("touchend", L)
                }

                function L(C) {
                    C.target.nodeName && C.target.nodeName.toLowerCase() === "html" || (n = !1, O())
                }
                document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", _, !0), document.addEventListener("pointerdown", _, !0), document.addEventListener("touchstart", _, !0), document.addEventListener("visibilitychange", I, !0), R(), r.addEventListener("focus", m, !0), r.addEventListener("blur", y, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var ru = c((oW, tu) => {
        "use strict";
        var eu = Me();
        eu.define("focus", tu.exports = function() {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var s = a.target,
                    u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }

            function i(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && eu.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var ou = c((aW, iu) => {
        "use strict";
        var Vi = window.jQuery,
            ot = {},
            dn = [],
            nu = ".w-ix",
            pn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Vi(t).triggerHandler(ot.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Vi(t).triggerHandler(ot.types.OUTRO))
                }
            };
        ot.triggers = {};
        ot.types = {
            INTRO: "w-ix-intro" + nu,
            OUTRO: "w-ix-outro" + nu
        };
        ot.init = function() {
            for (var e = dn.length, t = 0; t < e; t++) {
                var r = dn[t];
                r[0](0, r[1])
            }
            dn = [], Vi.extend(ot.triggers, pn)
        };
        ot.async = function() {
            for (var e in pn) {
                var t = pn[e];
                pn.hasOwnProperty(e) && (ot.triggers[e] = function(r, n) {
                    dn.push([t, n])
                })
            }
        };
        ot.async();
        iu.exports = ot
    });
    var _r = c((sW, uu) => {
        "use strict";
        var Wi = ou();

        function au(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var E_ = window.jQuery,
            vn = {},
            su = ".w-ix",
            b_ = {
                reset: function(e, t) {
                    Wi.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Wi.triggers.intro(e, t), au(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Wi.triggers.outro(e, t), au(t, "COMPONENT_INACTIVE")
                }
            };
        vn.triggers = {};
        vn.types = {
            INTRO: "w-ix-intro" + su,
            OUTRO: "w-ix-outro" + su
        };
        E_.extend(vn.triggers, b_);
        uu.exports = vn
    });
    var cu = c((uW, pt) => {
        function Hi(e) {
            return pt.exports = Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, pt.exports.__esModule = !0, pt.exports.default = pt.exports, Hi(e)
        }
        pt.exports = Hi, pt.exports.__esModule = !0, pt.exports.default = pt.exports
    });
    var gn = c((cW, Ir) => {
        var __ = cu().default;

        function lu(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (lu = function(i) {
                return i ? r : t
            })(e)
        }

        function I_(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || __(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = lu(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        Ir.exports = I_, Ir.exports.__esModule = !0, Ir.exports.default = Ir.exports
    });
    var fu = c((lW, Tr) => {
        function T_(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Tr.exports = T_, Tr.exports.__esModule = !0, Tr.exports.default = Tr.exports
    });
    var ye = c((fW, du) => {
        var hn = function(e) {
            return e && e.Math == Math && e
        };
        du.exports = hn(typeof globalThis == "object" && globalThis) || hn(typeof window == "object" && window) || hn(typeof self == "object" && self) || hn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Xt = c((dW, pu) => {
        pu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Lt = c((pW, vu) => {
        var w_ = Xt();
        vu.exports = !w_(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var mn = c((vW, gu) => {
        var wr = Function.prototype.call;
        gu.exports = wr.bind ? wr.bind(wr) : function() {
            return wr.apply(wr, arguments)
        }
    });
    var Eu = c(yu => {
        "use strict";
        var hu = {}.propertyIsEnumerable,
            mu = Object.getOwnPropertyDescriptor,
            x_ = mu && !hu.call({
                1: 2
            }, 1);
        yu.f = x_ ? function(t) {
            var r = mu(this, t);
            return !!r && r.enumerable
        } : hu
    });
    var Xi = c((hW, bu) => {
        bu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var Ye = c((mW, Iu) => {
        var _u = Function.prototype,
            Bi = _u.bind,
            ji = _u.call,
            O_ = Bi && Bi.bind(ji);
        Iu.exports = Bi ? function(e) {
            return e && O_(ji, e)
        } : function(e) {
            return e && function() {
                return ji.apply(e, arguments)
            }
        }
    });
    var xu = c((yW, wu) => {
        var Tu = Ye(),
            A_ = Tu({}.toString),
            S_ = Tu("".slice);
        wu.exports = function(e) {
            return S_(A_(e), 8, -1)
        }
    });
    var Au = c((EW, Ou) => {
        var R_ = ye(),
            C_ = Ye(),
            L_ = Xt(),
            N_ = xu(),
            zi = R_.Object,
            P_ = C_("".split);
        Ou.exports = L_(function() {
            return !zi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return N_(e) == "String" ? P_(e, "") : zi(e)
        } : zi
    });
    var Ki = c((bW, Su) => {
        var M_ = ye(),
            q_ = M_.TypeError;
        Su.exports = function(e) {
            if (e == null) throw q_("Can't call method on " + e);
            return e
        }
    });
    var xr = c((_W, Ru) => {
        var D_ = Au(),
            F_ = Ki();
        Ru.exports = function(e) {
            return D_(F_(e))
        }
    });
    var at = c((IW, Cu) => {
        Cu.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Bt = c((TW, Lu) => {
        var G_ = at();
        Lu.exports = function(e) {
            return typeof e == "object" ? e !== null : G_(e)
        }
    });
    var Or = c((wW, Nu) => {
        var Yi = ye(),
            k_ = at(),
            U_ = function(e) {
                return k_(e) ? e : void 0
            };
        Nu.exports = function(e, t) {
            return arguments.length < 2 ? U_(Yi[e]) : Yi[e] && Yi[e][t]
        }
    });
    var Mu = c((xW, Pu) => {
        var V_ = Ye();
        Pu.exports = V_({}.isPrototypeOf)
    });
    var Du = c((OW, qu) => {
        var W_ = Or();
        qu.exports = W_("navigator", "userAgent") || ""
    });
    var Hu = c((AW, Wu) => {
        var Vu = ye(),
            $i = Du(),
            Fu = Vu.process,
            Gu = Vu.Deno,
            ku = Fu && Fu.versions || Gu && Gu.version,
            Uu = ku && ku.v8,
            $e, yn;
        Uu && ($e = Uu.split("."), yn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1]));
        !yn && $i && ($e = $i.match(/Edge\/(\d+)/), (!$e || $e[1] >= 74) && ($e = $i.match(/Chrome\/(\d+)/), $e && (yn = +$e[1])));
        Wu.exports = yn
    });
    var Qi = c((SW, Bu) => {
        var Xu = Hu(),
            H_ = Xt();
        Bu.exports = !!Object.getOwnPropertySymbols && !H_(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Xu && Xu < 41
        })
    });
    var Zi = c((RW, ju) => {
        var X_ = Qi();
        ju.exports = X_ && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Ji = c((CW, zu) => {
        var B_ = ye(),
            j_ = Or(),
            z_ = at(),
            K_ = Mu(),
            Y_ = Zi(),
            $_ = B_.Object;
        zu.exports = Y_ ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = j_("Symbol");
            return z_(t) && K_(t.prototype, $_(e))
        }
    });
    var Yu = c((LW, Ku) => {
        var Q_ = ye(),
            Z_ = Q_.String;
        Ku.exports = function(e) {
            try {
                return Z_(e)
            } catch {
                return "Object"
            }
        }
    });
    var Qu = c((NW, $u) => {
        var J_ = ye(),
            eI = at(),
            tI = Yu(),
            rI = J_.TypeError;
        $u.exports = function(e) {
            if (eI(e)) return e;
            throw rI(tI(e) + " is not a function")
        }
    });
    var Ju = c((PW, Zu) => {
        var nI = Qu();
        Zu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : nI(r)
        }
    });
    var tc = c((MW, ec) => {
        var iI = ye(),
            eo = mn(),
            to = at(),
            ro = Bt(),
            oI = iI.TypeError;
        ec.exports = function(e, t) {
            var r, n;
            if (t === "string" && to(r = e.toString) && !ro(n = eo(r, e)) || to(r = e.valueOf) && !ro(n = eo(r, e)) || t !== "string" && to(r = e.toString) && !ro(n = eo(r, e))) return n;
            throw oI("Can't convert object to primitive value")
        }
    });
    var nc = c((qW, rc) => {
        rc.exports = !1
    });
    var En = c((DW, oc) => {
        var ic = ye(),
            aI = Object.defineProperty;
        oc.exports = function(e, t) {
            try {
                aI(ic, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                ic[e] = t
            }
            return t
        }
    });
    var bn = c((FW, sc) => {
        var sI = ye(),
            uI = En(),
            ac = "__core-js_shared__",
            cI = sI[ac] || uI(ac, {});
        sc.exports = cI
    });
    var no = c((GW, cc) => {
        var lI = nc(),
            uc = bn();
        (cc.exports = function(e, t) {
            return uc[e] || (uc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: lI ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var fc = c((kW, lc) => {
        var fI = ye(),
            dI = Ki(),
            pI = fI.Object;
        lc.exports = function(e) {
            return pI(dI(e))
        }
    });
    var _t = c((UW, dc) => {
        var vI = Ye(),
            gI = fc(),
            hI = vI({}.hasOwnProperty);
        dc.exports = Object.hasOwn || function(t, r) {
            return hI(gI(t), r)
        }
    });
    var io = c((VW, pc) => {
        var mI = Ye(),
            yI = 0,
            EI = Math.random(),
            bI = mI(1.toString);
        pc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + bI(++yI + EI, 36)
        }
    });
    var oo = c((WW, yc) => {
        var _I = ye(),
            II = no(),
            vc = _t(),
            TI = io(),
            gc = Qi(),
            mc = Zi(),
            jt = II("wks"),
            Nt = _I.Symbol,
            hc = Nt && Nt.for,
            wI = mc ? Nt : Nt && Nt.withoutSetter || TI;
        yc.exports = function(e) {
            if (!vc(jt, e) || !(gc || typeof jt[e] == "string")) {
                var t = "Symbol." + e;
                gc && vc(Nt, e) ? jt[e] = Nt[e] : mc && hc ? jt[e] = hc(t) : jt[e] = wI(t)
            }
            return jt[e]
        }
    });
    var Ic = c((HW, _c) => {
        var xI = ye(),
            OI = mn(),
            Ec = Bt(),
            bc = Ji(),
            AI = Ju(),
            SI = tc(),
            RI = oo(),
            CI = xI.TypeError,
            LI = RI("toPrimitive");
        _c.exports = function(e, t) {
            if (!Ec(e) || bc(e)) return e;
            var r = AI(e, LI),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = OI(r, e, t), !Ec(n) || bc(n)) return n;
                throw CI("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), SI(e, t)
        }
    });
    var ao = c((XW, Tc) => {
        var NI = Ic(),
            PI = Ji();
        Tc.exports = function(e) {
            var t = NI(e, "string");
            return PI(t) ? t : t + ""
        }
    });
    var uo = c((BW, xc) => {
        var MI = ye(),
            wc = Bt(),
            so = MI.document,
            qI = wc(so) && wc(so.createElement);
        xc.exports = function(e) {
            return qI ? so.createElement(e) : {}
        }
    });
    var co = c((jW, Oc) => {
        var DI = Lt(),
            FI = Xt(),
            GI = uo();
        Oc.exports = !DI && !FI(function() {
            return Object.defineProperty(GI("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var lo = c(Sc => {
        var kI = Lt(),
            UI = mn(),
            VI = Eu(),
            WI = Xi(),
            HI = xr(),
            XI = ao(),
            BI = _t(),
            jI = co(),
            Ac = Object.getOwnPropertyDescriptor;
        Sc.f = kI ? Ac : function(t, r) {
            if (t = HI(t), r = XI(r), jI) try {
                return Ac(t, r)
            } catch {}
            if (BI(t, r)) return WI(!UI(VI.f, t, r), t[r])
        }
    });
    var Ar = c((KW, Cc) => {
        var Rc = ye(),
            zI = Bt(),
            KI = Rc.String,
            YI = Rc.TypeError;
        Cc.exports = function(e) {
            if (zI(e)) return e;
            throw YI(KI(e) + " is not an object")
        }
    });
    var Sr = c(Pc => {
        var $I = ye(),
            QI = Lt(),
            ZI = co(),
            Lc = Ar(),
            JI = ao(),
            eT = $I.TypeError,
            Nc = Object.defineProperty;
        Pc.f = QI ? Nc : function(t, r, n) {
            if (Lc(t), r = JI(r), Lc(n), ZI) try {
                return Nc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw eT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var _n = c(($W, Mc) => {
        var tT = Lt(),
            rT = Sr(),
            nT = Xi();
        Mc.exports = tT ? function(e, t, r) {
            return rT.f(e, t, nT(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var po = c((QW, qc) => {
        var iT = Ye(),
            oT = at(),
            fo = bn(),
            aT = iT(Function.toString);
        oT(fo.inspectSource) || (fo.inspectSource = function(e) {
            return aT(e)
        });
        qc.exports = fo.inspectSource
    });
    var Gc = c((ZW, Fc) => {
        var sT = ye(),
            uT = at(),
            cT = po(),
            Dc = sT.WeakMap;
        Fc.exports = uT(Dc) && /native code/.test(cT(Dc))
    });
    var vo = c((JW, Uc) => {
        var lT = no(),
            fT = io(),
            kc = lT("keys");
        Uc.exports = function(e) {
            return kc[e] || (kc[e] = fT(e))
        }
    });
    var In = c((eH, Vc) => {
        Vc.exports = {}
    });
    var zc = c((tH, jc) => {
        var dT = Gc(),
            Bc = ye(),
            go = Ye(),
            pT = Bt(),
            vT = _n(),
            ho = _t(),
            mo = bn(),
            gT = vo(),
            hT = In(),
            Wc = "Object already initialized",
            Eo = Bc.TypeError,
            mT = Bc.WeakMap,
            Tn, Rr, wn, yT = function(e) {
                return wn(e) ? Rr(e) : Tn(e, {})
            },
            ET = function(e) {
                return function(t) {
                    var r;
                    if (!pT(t) || (r = Rr(t)).type !== e) throw Eo("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        dT || mo.state ? (It = mo.state || (mo.state = new mT), Hc = go(It.get), yo = go(It.has), Xc = go(It.set), Tn = function(e, t) {
            if (yo(It, e)) throw new Eo(Wc);
            return t.facade = e, Xc(It, e, t), t
        }, Rr = function(e) {
            return Hc(It, e) || {}
        }, wn = function(e) {
            return yo(It, e)
        }) : (Pt = gT("state"), hT[Pt] = !0, Tn = function(e, t) {
            if (ho(e, Pt)) throw new Eo(Wc);
            return t.facade = e, vT(e, Pt, t), t
        }, Rr = function(e) {
            return ho(e, Pt) ? e[Pt] : {}
        }, wn = function(e) {
            return ho(e, Pt)
        });
        var It, Hc, yo, Xc, Pt;
        jc.exports = {
            set: Tn,
            get: Rr,
            has: wn,
            enforce: yT,
            getterFor: ET
        }
    });
    var $c = c((rH, Yc) => {
        var bo = Lt(),
            bT = _t(),
            Kc = Function.prototype,
            _T = bo && Object.getOwnPropertyDescriptor,
            _o = bT(Kc, "name"),
            IT = _o && function() {}.name === "something",
            TT = _o && (!bo || bo && _T(Kc, "name").configurable);
        Yc.exports = {
            EXISTS: _o,
            PROPER: IT,
            CONFIGURABLE: TT
        }
    });
    var tl = c((nH, el) => {
        var wT = ye(),
            Qc = at(),
            xT = _t(),
            Zc = _n(),
            OT = En(),
            AT = po(),
            Jc = zc(),
            ST = $c().CONFIGURABLE,
            RT = Jc.get,
            CT = Jc.enforce,
            LT = String(String).split("String");
        (el.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                a = n ? !!n.noTargetGet : !1,
                s = n && n.name !== void 0 ? n.name : t,
                u;
            if (Qc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!xT(r, "name") || ST && r.name !== s) && Zc(r, "name", s), u = CT(r), u.source || (u.source = LT.join(typeof s == "string" ? s : ""))), e === wT) {
                o ? e[t] = r : OT(t, r);
                return
            } else i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Zc(e, t, r)
        })(Function.prototype, "toString", function() {
            return Qc(this) && RT(this).source || AT(this)
        })
    });
    var Io = c((iH, rl) => {
        var NT = Math.ceil,
            PT = Math.floor;
        rl.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? PT : NT)(t)
        }
    });
    var il = c((oH, nl) => {
        var MT = Io(),
            qT = Math.max,
            DT = Math.min;
        nl.exports = function(e, t) {
            var r = MT(e);
            return r < 0 ? qT(r + t, 0) : DT(r, t)
        }
    });
    var al = c((aH, ol) => {
        var FT = Io(),
            GT = Math.min;
        ol.exports = function(e) {
            return e > 0 ? GT(FT(e), 9007199254740991) : 0
        }
    });
    var ul = c((sH, sl) => {
        var kT = al();
        sl.exports = function(e) {
            return kT(e.length)
        }
    });
    var To = c((uH, ll) => {
        var UT = xr(),
            VT = il(),
            WT = ul(),
            cl = function(e) {
                return function(t, r, n) {
                    var i = UT(t),
                        o = WT(i),
                        a = VT(n, o),
                        s;
                    if (e && r != r) {
                        for (; o > a;)
                            if (s = i[a++], s != s) return !0
                    } else
                        for (; o > a; a++)
                            if ((e || a in i) && i[a] === r) return e || a || 0;
                    return !e && -1
                }
            };
        ll.exports = {
            includes: cl(!0),
            indexOf: cl(!1)
        }
    });
    var xo = c((cH, dl) => {
        var HT = Ye(),
            wo = _t(),
            XT = xr(),
            BT = To().indexOf,
            jT = In(),
            fl = HT([].push);
        dl.exports = function(e, t) {
            var r = XT(e),
                n = 0,
                i = [],
                o;
            for (o in r) !wo(jT, o) && wo(r, o) && fl(i, o);
            for (; t.length > n;) wo(r, o = t[n++]) && (~BT(i, o) || fl(i, o));
            return i
        }
    });
    var xn = c((lH, pl) => {
        pl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var gl = c(vl => {
        var zT = xo(),
            KT = xn(),
            YT = KT.concat("length", "prototype");
        vl.f = Object.getOwnPropertyNames || function(t) {
            return zT(t, YT)
        }
    });
    var ml = c(hl => {
        hl.f = Object.getOwnPropertySymbols
    });
    var El = c((pH, yl) => {
        var $T = Or(),
            QT = Ye(),
            ZT = gl(),
            JT = ml(),
            ew = Ar(),
            tw = QT([].concat);
        yl.exports = $T("Reflect", "ownKeys") || function(t) {
            var r = ZT.f(ew(t)),
                n = JT.f;
            return n ? tw(r, n(t)) : r
        }
    });
    var _l = c((vH, bl) => {
        var rw = _t(),
            nw = El(),
            iw = lo(),
            ow = Sr();
        bl.exports = function(e, t) {
            for (var r = nw(t), n = ow.f, i = iw.f, o = 0; o < r.length; o++) {
                var a = r[o];
                rw(e, a) || n(e, a, i(t, a))
            }
        }
    });
    var Tl = c((gH, Il) => {
        var aw = Xt(),
            sw = at(),
            uw = /#|\.prototype\./,
            Cr = function(e, t) {
                var r = lw[cw(e)];
                return r == dw ? !0 : r == fw ? !1 : sw(t) ? aw(t) : !!t
            },
            cw = Cr.normalize = function(e) {
                return String(e).replace(uw, ".").toLowerCase()
            },
            lw = Cr.data = {},
            fw = Cr.NATIVE = "N",
            dw = Cr.POLYFILL = "P";
        Il.exports = Cr
    });
    var xl = c((hH, wl) => {
        var Oo = ye(),
            pw = lo().f,
            vw = _n(),
            gw = tl(),
            hw = En(),
            mw = _l(),
            yw = Tl();
        wl.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, a, s, u, v, E;
            if (n ? a = Oo : i ? a = Oo[r] || hw(r, {}) : a = (Oo[r] || {}).prototype, a)
                for (s in t) {
                    if (v = t[s], e.noTargetGet ? (E = pw(a, s), u = E && E.value) : u = a[s], o = yw(n ? s : r + (i ? "." : "#") + s, e.forced), !o && u !== void 0) {
                        if (typeof v == typeof u) continue;
                        mw(v, u)
                    }(e.sham || u && u.sham) && vw(v, "sham", !0), gw(a, s, v, e)
                }
        }
    });
    var Al = c((mH, Ol) => {
        var Ew = xo(),
            bw = xn();
        Ol.exports = Object.keys || function(t) {
            return Ew(t, bw)
        }
    });
    var Rl = c((yH, Sl) => {
        var _w = Lt(),
            Iw = Sr(),
            Tw = Ar(),
            ww = xr(),
            xw = Al();
        Sl.exports = _w ? Object.defineProperties : function(t, r) {
            Tw(t);
            for (var n = ww(r), i = xw(r), o = i.length, a = 0, s; o > a;) Iw.f(t, s = i[a++], n[s]);
            return t
        }
    });
    var Ll = c((EH, Cl) => {
        var Ow = Or();
        Cl.exports = Ow("document", "documentElement")
    });
    var kl = c((bH, Gl) => {
        var Aw = Ar(),
            Sw = Rl(),
            Nl = xn(),
            Rw = In(),
            Cw = Ll(),
            Lw = uo(),
            Nw = vo(),
            Pl = ">",
            Ml = "<",
            So = "prototype",
            Ro = "script",
            Dl = Nw("IE_PROTO"),
            Ao = function() {},
            Fl = function(e) {
                return Ml + Ro + Pl + e + Ml + "/" + Ro + Pl
            },
            ql = function(e) {
                e.write(Fl("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            Pw = function() {
                var e = Lw("iframe"),
                    t = "java" + Ro + ":",
                    r;
                return e.style.display = "none", Cw.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Fl("document.F=Object")), r.close(), r.F
            },
            On, An = function() {
                try {
                    On = new ActiveXObject("htmlfile")
                } catch {}
                An = typeof document < "u" ? document.domain && On ? ql(On) : Pw() : ql(On);
                for (var e = Nl.length; e--;) delete An[So][Nl[e]];
                return An()
            };
        Rw[Dl] = !0;
        Gl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Ao[So] = Aw(t), n = new Ao, Ao[So] = null, n[Dl] = t) : n = An(), r === void 0 ? n : Sw(n, r)
        }
    });
    var Vl = c((_H, Ul) => {
        var Mw = oo(),
            qw = kl(),
            Dw = Sr(),
            Co = Mw("unscopables"),
            Lo = Array.prototype;
        Lo[Co] == null && Dw.f(Lo, Co, {
            configurable: !0,
            value: qw(null)
        });
        Ul.exports = function(e) {
            Lo[Co][e] = !0
        }
    });
    var Wl = c(() => {
        "use strict";
        var Fw = xl(),
            Gw = To().includes,
            kw = Vl();
        Fw({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return Gw(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        kw("includes")
    });
    var Xl = c((wH, Hl) => {
        var Uw = ye(),
            Vw = Ye();
        Hl.exports = function(e, t) {
            return Vw(Uw[e].prototype[t])
        }
    });
    var jl = c((xH, Bl) => {
        Wl();
        var Ww = Xl();
        Bl.exports = Ww("Array", "includes")
    });
    var Kl = c((OH, zl) => {
        var Hw = jl();
        zl.exports = Hw
    });
    var $l = c((AH, Yl) => {
        var Xw = Kl();
        Yl.exports = Xw
    });
    var No = c((SH, Ql) => {
        var Bw = typeof global == "object" && global && global.Object === Object && global;
        Ql.exports = Bw
    });
    var Qe = c((RH, Zl) => {
        var jw = No(),
            zw = typeof self == "object" && self && self.Object === Object && self,
            Kw = jw || zw || Function("return this")();
        Zl.exports = Kw
    });
    var zt = c((CH, Jl) => {
        var Yw = Qe(),
            $w = Yw.Symbol;
        Jl.exports = $w
    });
    var nf = c((LH, rf) => {
        var ef = zt(),
            tf = Object.prototype,
            Qw = tf.hasOwnProperty,
            Zw = tf.toString,
            Lr = ef ? ef.toStringTag : void 0;

        function Jw(e) {
            var t = Qw.call(e, Lr),
                r = e[Lr];
            try {
                e[Lr] = void 0;
                var n = !0
            } catch {}
            var i = Zw.call(e);
            return n && (t ? e[Lr] = r : delete e[Lr]), i
        }
        rf.exports = Jw
    });
    var af = c((NH, of ) => {
        var ex = Object.prototype,
            tx = ex.toString;

        function rx(e) {
            return tx.call(e)
        } of .exports = rx
    });
    var Tt = c((PH, cf) => {
        var sf = zt(),
            nx = nf(),
            ix = af(),
            ox = "[object Null]",
            ax = "[object Undefined]",
            uf = sf ? sf.toStringTag : void 0;

        function sx(e) {
            return e == null ? e === void 0 ? ax : ox : uf && uf in Object(e) ? nx(e) : ix(e)
        }
        cf.exports = sx
    });
    var Po = c((MH, lf) => {
        function ux(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        lf.exports = ux
    });
    var Mo = c((qH, ff) => {
        var cx = Po(),
            lx = cx(Object.getPrototypeOf, Object);
        ff.exports = lx
    });
    var vt = c((DH, df) => {
        function fx(e) {
            return e != null && typeof e == "object"
        }
        df.exports = fx
    });
    var qo = c((FH, vf) => {
        var dx = Tt(),
            px = Mo(),
            vx = vt(),
            gx = "[object Object]",
            hx = Function.prototype,
            mx = Object.prototype,
            pf = hx.toString,
            yx = mx.hasOwnProperty,
            Ex = pf.call(Object);

        function bx(e) {
            if (!vx(e) || dx(e) != gx) return !1;
            var t = px(e);
            if (t === null) return !0;
            var r = yx.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && pf.call(r) == Ex
        }
        vf.exports = bx
    });
    var gf = c(Do => {
        "use strict";
        Object.defineProperty(Do, "__esModule", {
            value: !0
        });
        Do.default = _x;

        function _x(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var hf = c((Go, Fo) => {
        "use strict";
        Object.defineProperty(Go, "__esModule", {
            value: !0
        });
        var Ix = gf(),
            Tx = wx(Ix);

        function wx(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Kt;
        typeof self < "u" ? Kt = self : typeof window < "u" ? Kt = window : typeof global < "u" ? Kt = global : typeof Fo < "u" ? Kt = Fo : Kt = Function("return this")();
        var xx = (0, Tx.default)(Kt);
        Go.default = xx
    });
    var ko = c(Nr => {
        "use strict";
        Nr.__esModule = !0;
        Nr.ActionTypes = void 0;
        Nr.default = bf;
        var Ox = qo(),
            Ax = Ef(Ox),
            Sx = hf(),
            mf = Ef(Sx);

        function Ef(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var yf = Nr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function bf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(bf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                s = a,
                u = !1;

            function v() {
                s === a && (s = a.slice())
            }

            function E() {
                return o
            }

            function d(I) {
                if (typeof I != "function") throw new Error("Expected listener to be a function.");
                var R = !0;
                return v(), s.push(I),
                    function() {
                        if (R) {
                            R = !1, v();
                            var L = s.indexOf(I);
                            s.splice(L, 1)
                        }
                    }
            }

            function _(I) {
                if (!(0, Ax.default)(I)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof I.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, I)
                } finally {
                    u = !1
                }
                for (var R = a = s, O = 0; O < R.length; O++) R[O]();
                return I
            }

            function m(I) {
                if (typeof I != "function") throw new Error("Expected the nextReducer to be a function.");
                i = I, _({
                    type: yf.INIT
                })
            }

            function y() {
                var I, R = d;
                return I = {
                    subscribe: function(L) {
                        if (typeof L != "object") throw new TypeError("Expected the observer to be an object.");

                        function C() {
                            L.next && L.next(E())
                        }
                        C();
                        var P = R(C);
                        return {
                            unsubscribe: P
                        }
                    }
                }, I[mf.default] = function() {
                    return this
                }, I
            }
            return _({
                type: yf.INIT
            }), n = {
                dispatch: _,
                subscribe: d,
                getState: E,
                replaceReducer: m
            }, n[mf.default] = y, n
        }
    });
    var Vo = c(Uo => {
        "use strict";
        Uo.__esModule = !0;
        Uo.default = Rx;

        function Rx(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var Tf = c(Wo => {
        "use strict";
        Wo.__esModule = !0;
        Wo.default = Mx;
        var _f = ko(),
            Cx = qo(),
            VH = If(Cx),
            Lx = Vo(),
            WH = If(Lx);

        function If(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Nx(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function Px(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: _f.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _f.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Mx(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                Px(r)
            } catch (u) {
                s = u
            }
            return function() {
                var v = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    E = arguments[1];
                if (s) throw s;
                if (!1) var d;
                for (var _ = !1, m = {}, y = 0; y < o.length; y++) {
                    var I = o[y],
                        R = r[I],
                        O = v[I],
                        L = R(O, E);
                    if (typeof L > "u") {
                        var C = Nx(I, E);
                        throw new Error(C)
                    }
                    m[I] = L, _ = _ || L !== O
                }
                return _ ? m : v
            }
        }
    });
    var xf = c(Ho => {
        "use strict";
        Ho.__esModule = !0;
        Ho.default = qx;

        function wf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function qx(e, t) {
            if (typeof e == "function") return wf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = e[o];
                typeof a == "function" && (n[o] = wf(a, t))
            }
            return n
        }
    });
    var Bo = c(Xo => {
        "use strict";
        Xo.__esModule = !0;
        Xo.default = Dx;

        function Dx() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var Of = c(jo => {
        "use strict";
        jo.__esModule = !0;
        var Fx = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        jo.default = Vx;
        var Gx = Bo(),
            kx = Ux(Gx);

        function Ux(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Vx() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a),
                        u = s.dispatch,
                        v = [],
                        E = {
                            getState: s.getState,
                            dispatch: function(_) {
                                return u(_)
                            }
                        };
                    return v = t.map(function(d) {
                        return d(E)
                    }), u = kx.default.apply(void 0, v)(s.dispatch), Fx({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var zo = c(Xe => {
        "use strict";
        Xe.__esModule = !0;
        Xe.compose = Xe.applyMiddleware = Xe.bindActionCreators = Xe.combineReducers = Xe.createStore = void 0;
        var Wx = ko(),
            Hx = Yt(Wx),
            Xx = Tf(),
            Bx = Yt(Xx),
            jx = xf(),
            zx = Yt(jx),
            Kx = Of(),
            Yx = Yt(Kx),
            $x = Bo(),
            Qx = Yt($x),
            Zx = Vo(),
            zH = Yt(Zx);

        function Yt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Xe.createStore = Hx.default;
        Xe.combineReducers = Bx.default;
        Xe.bindActionCreators = zx.default;
        Xe.applyMiddleware = Yx.default;
        Xe.compose = Qx.default
    });
    var Ze, Ko, st, Jx, eO, Sn, tO, Yo = me(() => {
        "use strict";
        Ze = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Ko = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, st = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, Jx = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, eO = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, Sn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, tO = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Ue, rO, Rn = me(() => {
        "use strict";
        Ue = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, rO = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var nO, Af = me(() => {
        "use strict";
        nO = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var iO, oO, aO, sO, uO, cO, lO, $o, Sf = me(() => {
        "use strict";
        Rn();
        ({
            TRANSFORM_MOVE: iO,
            TRANSFORM_SCALE: oO,
            TRANSFORM_ROTATE: aO,
            TRANSFORM_SKEW: sO,
            STYLE_SIZE: uO,
            STYLE_FILTER: cO,
            STYLE_FONT_VARIATION: lO
        } = Ue), $o = {
            [iO]: !0,
            [oO]: !0,
            [aO]: !0,
            [sO]: !0,
            [uO]: !0,
            [cO]: !0,
            [lO]: !0
        }
    });
    var we = {};
    ke(we, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => AO,
        IX2_ANIMATION_FRAME_CHANGED: () => _O,
        IX2_CLEAR_REQUESTED: () => yO,
        IX2_ELEMENT_STATE_CHANGED: () => OO,
        IX2_EVENT_LISTENER_ADDED: () => EO,
        IX2_EVENT_STATE_CHANGED: () => bO,
        IX2_INSTANCE_ADDED: () => TO,
        IX2_INSTANCE_REMOVED: () => xO,
        IX2_INSTANCE_STARTED: () => wO,
        IX2_MEDIA_QUERIES_DEFINED: () => RO,
        IX2_PARAMETER_CHANGED: () => IO,
        IX2_PLAYBACK_REQUESTED: () => hO,
        IX2_PREVIEW_REQUESTED: () => gO,
        IX2_RAW_DATA_IMPORTED: () => fO,
        IX2_SESSION_INITIALIZED: () => dO,
        IX2_SESSION_STARTED: () => pO,
        IX2_SESSION_STOPPED: () => vO,
        IX2_STOP_REQUESTED: () => mO,
        IX2_TEST_FRAME_RENDERED: () => CO,
        IX2_VIEWPORT_WIDTH_CHANGED: () => SO
    });
    var fO, dO, pO, vO, gO, hO, mO, yO, EO, bO, _O, IO, TO, wO, xO, OO, AO, SO, RO, CO, Rf = me(() => {
        "use strict";
        fO = "IX2_RAW_DATA_IMPORTED", dO = "IX2_SESSION_INITIALIZED", pO = "IX2_SESSION_STARTED", vO = "IX2_SESSION_STOPPED", gO = "IX2_PREVIEW_REQUESTED", hO = "IX2_PLAYBACK_REQUESTED", mO = "IX2_STOP_REQUESTED", yO = "IX2_CLEAR_REQUESTED", EO = "IX2_EVENT_LISTENER_ADDED", bO = "IX2_EVENT_STATE_CHANGED", _O = "IX2_ANIMATION_FRAME_CHANGED", IO = "IX2_PARAMETER_CHANGED", TO = "IX2_INSTANCE_ADDED", wO = "IX2_INSTANCE_STARTED", xO = "IX2_INSTANCE_REMOVED", OO = "IX2_ELEMENT_STATE_CHANGED", AO = "IX2_ACTION_LIST_PLAYBACK_CHANGED", SO = "IX2_VIEWPORT_WIDTH_CHANGED", RO = "IX2_MEDIA_QUERIES_DEFINED", CO = "IX2_TEST_FRAME_RENDERED"
    });
    var Le = {};
    ke(Le, {
        ABSTRACT_NODE: () => SA,
        AUTO: () => mA,
        BACKGROUND: () => fA,
        BACKGROUND_COLOR: () => lA,
        BAR_DELIMITER: () => bA,
        BORDER_COLOR: () => dA,
        BOUNDARY_SELECTOR: () => qO,
        CHILDREN: () => _A,
        COLON_DELIMITER: () => EA,
        COLOR: () => pA,
        COMMA_DELIMITER: () => yA,
        CONFIG_UNIT: () => HO,
        CONFIG_VALUE: () => kO,
        CONFIG_X_UNIT: () => UO,
        CONFIG_X_VALUE: () => DO,
        CONFIG_Y_UNIT: () => VO,
        CONFIG_Y_VALUE: () => FO,
        CONFIG_Z_UNIT: () => WO,
        CONFIG_Z_VALUE: () => GO,
        DISPLAY: () => vA,
        FILTER: () => aA,
        FLEX: () => gA,
        FONT_VARIATION_SETTINGS: () => sA,
        HEIGHT: () => cA,
        HTML_ELEMENT: () => OA,
        IMMEDIATE_CHILDREN: () => IA,
        IX2_ID_DELIMITER: () => LO,
        OPACITY: () => oA,
        PARENT: () => wA,
        PLAIN_OBJECT: () => AA,
        PRESERVE_3D: () => xA,
        RENDER_GENERAL: () => CA,
        RENDER_PLUGIN: () => NA,
        RENDER_STYLE: () => LA,
        RENDER_TRANSFORM: () => RA,
        ROTATE_X: () => JO,
        ROTATE_Y: () => eA,
        ROTATE_Z: () => tA,
        SCALE_3D: () => ZO,
        SCALE_X: () => YO,
        SCALE_Y: () => $O,
        SCALE_Z: () => QO,
        SIBLINGS: () => TA,
        SKEW: () => rA,
        SKEW_X: () => nA,
        SKEW_Y: () => iA,
        TRANSFORM: () => XO,
        TRANSLATE_3D: () => KO,
        TRANSLATE_X: () => BO,
        TRANSLATE_Y: () => jO,
        TRANSLATE_Z: () => zO,
        WF_PAGE: () => NO,
        WIDTH: () => uA,
        WILL_CHANGE: () => hA,
        W_MOD_IX: () => MO,
        W_MOD_JS: () => PO
    });
    var LO, NO, PO, MO, qO, DO, FO, GO, kO, UO, VO, WO, HO, XO, BO, jO, zO, KO, YO, $O, QO, ZO, JO, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, vA, gA, hA, mA, yA, EA, bA, _A, IA, TA, wA, xA, OA, AA, SA, RA, CA, LA, NA, Cf = me(() => {
        "use strict";
        LO = "|", NO = "data-wf-page", PO = "w-mod-js", MO = "w-mod-ix", qO = ".w-dyn-item", DO = "xValue", FO = "yValue", GO = "zValue", kO = "value", UO = "xUnit", VO = "yUnit", WO = "zUnit", HO = "unit", XO = "transform", BO = "translateX", jO = "translateY", zO = "translateZ", KO = "translate3d", YO = "scaleX", $O = "scaleY", QO = "scaleZ", ZO = "scale3d", JO = "rotateX", eA = "rotateY", tA = "rotateZ", rA = "skew", nA = "skewX", iA = "skewY", oA = "opacity", aA = "filter", sA = "font-variation-settings", uA = "width", cA = "height", lA = "backgroundColor", fA = "background", dA = "borderColor", pA = "color", vA = "display", gA = "flex", hA = "willChange", mA = "AUTO", yA = ",", EA = ":", bA = "|", _A = "CHILDREN", IA = "IMMEDIATE_CHILDREN", TA = "SIBLINGS", wA = "PARENT", xA = "preserve-3d", OA = "HTML_ELEMENT", AA = "PLAIN_OBJECT", SA = "ABSTRACT_NODE", RA = "RENDER_TRANSFORM", CA = "RENDER_GENERAL", LA = "RENDER_STYLE", NA = "RENDER_PLUGIN"
    });
    var Lf = {};
    ke(Lf, {
        ActionAppliesTo: () => rO,
        ActionTypeConsts: () => Ue,
        EventAppliesTo: () => Ko,
        EventBasedOn: () => st,
        EventContinuousMouseAxes: () => Jx,
        EventLimitAffectedElements: () => eO,
        EventTypeConsts: () => Ze,
        IX2EngineActionTypes: () => we,
        IX2EngineConstants: () => Le,
        InteractionTypeConsts: () => nO,
        QuickEffectDirectionConsts: () => tO,
        QuickEffectIds: () => Sn,
        ReducedMotionTypes: () => $o
    });
    var Ve = me(() => {
        "use strict";
        Yo();
        Rn();
        Af();
        Sf();
        Rf();
        Cf();
        Rn();
        Yo()
    });
    var PA, Nf, Pf = me(() => {
        "use strict";
        Ve();
        ({
            IX2_RAW_DATA_IMPORTED: PA
        } = we), Nf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case PA:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var $t = c(be => {
        "use strict";
        Object.defineProperty(be, "__esModule", {
            value: !0
        });
        var MA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        be.clone = Ln;
        be.addLast = Df;
        be.addFirst = Ff;
        be.removeLast = Gf;
        be.removeFirst = kf;
        be.insert = Uf;
        be.removeAt = Vf;
        be.replaceAt = Wf;
        be.getIn = Nn;
        be.set = Pn;
        be.setIn = Mn;
        be.update = Xf;
        be.updateIn = Bf;
        be.merge = jf;
        be.mergeDeep = zf;
        be.mergeIn = Kf;
        be.omit = Yf;
        be.addDefaults = $f;
        var Mf = "INVALID_ARGS";

        function qf(e) {
            throw new Error(e)
        }

        function Qo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var qA = {}.hasOwnProperty;

        function Ln(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Qo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function We(e, t, r) {
            var n = r;
            n == null && qf(Mf);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var v = a[u];
                if (v != null) {
                    var E = Qo(v);
                    if (E.length)
                        for (var d = 0; d <= E.length; d++) {
                            var _ = E[d];
                            if (!(e && n[_] !== void 0)) {
                                var m = v[_];
                                t && Cn(n[_]) && Cn(m) && (m = We(e, t, n[_], m)), !(m === void 0 || m === n[_]) && (i || (i = !0, n = Ln(n)), n[_] = m)
                            }
                        }
                }
            }
            return n
        }

        function Cn(e) {
            var t = typeof e > "u" ? "undefined" : MA(e);
            return e != null && (t === "object" || t === "function")
        }

        function Df(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Ff(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Gf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function kf(e) {
            return e.length ? e.slice(1) : e
        }

        function Uf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Vf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Wf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Nn(e, t) {
            if (!Array.isArray(t) && qf(Mf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function Pn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = Ln(i);
            return o[t] = r, o
        }

        function Hf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var a = Cn(e) && Cn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Hf(a, t, r, n + 1)
            }
            return Pn(e, o, i)
        }

        function Mn(e, t, r) {
            return t.length ? Hf(e, t, r, 0) : r
        }

        function Xf(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return Pn(e, t, i)
        }

        function Bf(e, t, r) {
            var n = Nn(e, t),
                i = r(n);
            return Mn(e, t, i)
        }

        function jf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? We.call.apply(We, [null, !1, !1, e, t, r, n, i, o].concat(s)) : We(!1, !1, e, t, r, n, i, o)
        }

        function zf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? We.call.apply(We, [null, !1, !0, e, t, r, n, i, o].concat(s)) : We(!1, !0, e, t, r, n, i, o)
        }

        function Kf(e, t, r, n, i, o, a) {
            var s = Nn(e, t);
            s == null && (s = {});
            for (var u = void 0, v = arguments.length, E = Array(v > 7 ? v - 7 : 0), d = 7; d < v; d++) E[d - 7] = arguments[d];
            return E.length ? u = We.call.apply(We, [null, !1, !1, s, r, n, i, o, a].concat(E)) : u = We(!1, !1, s, r, n, i, o, a), Mn(e, t, u)
        }

        function Yf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (qA.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, a = Qo(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function $f(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? We.call.apply(We, [null, !0, !1, e, t, r, n, i, o].concat(s)) : We(!0, !1, e, t, r, n, i, o)
        }
        var DA = {
            clone: Ln,
            addLast: Df,
            addFirst: Ff,
            removeLast: Gf,
            removeFirst: kf,
            insert: Uf,
            removeAt: Vf,
            replaceAt: Wf,
            getIn: Nn,
            set: Pn,
            setIn: Mn,
            update: Xf,
            updateIn: Bf,
            merge: jf,
            mergeDeep: zf,
            mergeIn: Kf,
            omit: Yf,
            addDefaults: $f
        };
        be.default = DA
    });
    var Zf, FA, GA, kA, UA, VA, Qf, Jf, ed = me(() => {
        "use strict";
        Ve();
        Zf = de($t()), {
            IX2_PREVIEW_REQUESTED: FA,
            IX2_PLAYBACK_REQUESTED: GA,
            IX2_STOP_REQUESTED: kA,
            IX2_CLEAR_REQUESTED: UA
        } = we, VA = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Qf = Object.create(null, {
            [FA]: {
                value: "preview"
            },
            [GA]: {
                value: "playback"
            },
            [kA]: {
                value: "stop"
            },
            [UA]: {
                value: "clear"
            }
        }), Jf = (e = VA, t) => {
            if (t.type in Qf) {
                let r = [Qf[t.type]];
                return (0, Zf.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var qe, WA, HA, XA, BA, jA, zA, KA, YA, $A, QA, td, ZA, rd, nd = me(() => {
        "use strict";
        Ve();
        qe = de($t()), {
            IX2_SESSION_INITIALIZED: WA,
            IX2_SESSION_STARTED: HA,
            IX2_TEST_FRAME_RENDERED: XA,
            IX2_SESSION_STOPPED: BA,
            IX2_EVENT_LISTENER_ADDED: jA,
            IX2_EVENT_STATE_CHANGED: zA,
            IX2_ANIMATION_FRAME_CHANGED: KA,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: YA,
            IX2_VIEWPORT_WIDTH_CHANGED: $A,
            IX2_MEDIA_QUERIES_DEFINED: QA
        } = we, td = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, ZA = 20, rd = (e = td, t) => {
            switch (t.type) {
                case WA:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, qe.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case HA:
                    return (0, qe.set)(e, "active", !0);
                case XA:
                    {
                        let {
                            payload: {
                                step: r = ZA
                            }
                        } = t;
                        return (0, qe.set)(e, "tick", e.tick + r)
                    }
                case BA:
                    return td;
                case KA:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, qe.set)(e, "tick", r)
                    }
                case jA:
                    {
                        let r = (0, qe.addLast)(e.eventListeners, t.payload);
                        return (0, qe.set)(e, "eventListeners", r)
                    }
                case zA:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, qe.setIn)(e, ["eventState", r], n)
                    }
                case YA:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, qe.setIn)(e, ["playbackState", r], n)
                    }
                case $A:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let a = 0; a < i; a++) {
                            let {
                                key: s,
                                min: u,
                                max: v
                            } = n[a];
                            if (r >= u && r <= v) {
                                o = s;
                                break
                            }
                        }
                        return (0, qe.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case QA:
                    return (0, qe.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var od = c((pX, id) => {
        function JA() {
            this.__data__ = [], this.size = 0
        }
        id.exports = JA
    });
    var qn = c((vX, ad) => {
        function e0(e, t) {
            return e === t || e !== e && t !== t
        }
        ad.exports = e0
    });
    var Pr = c((gX, sd) => {
        var t0 = qn();

        function r0(e, t) {
            for (var r = e.length; r--;)
                if (t0(e[r][0], t)) return r;
            return -1
        }
        sd.exports = r0
    });
    var cd = c((hX, ud) => {
        var n0 = Pr(),
            i0 = Array.prototype,
            o0 = i0.splice;

        function a0(e) {
            var t = this.__data__,
                r = n0(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : o0.call(t, r, 1), --this.size, !0
        }
        ud.exports = a0
    });
    var fd = c((mX, ld) => {
        var s0 = Pr();

        function u0(e) {
            var t = this.__data__,
                r = s0(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        ld.exports = u0
    });
    var pd = c((yX, dd) => {
        var c0 = Pr();

        function l0(e) {
            return c0(this.__data__, e) > -1
        }
        dd.exports = l0
    });
    var gd = c((EX, vd) => {
        var f0 = Pr();

        function d0(e, t) {
            var r = this.__data__,
                n = f0(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        vd.exports = d0
    });
    var Mr = c((bX, hd) => {
        var p0 = od(),
            v0 = cd(),
            g0 = fd(),
            h0 = pd(),
            m0 = gd();

        function Qt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = p0;
        Qt.prototype.delete = v0;
        Qt.prototype.get = g0;
        Qt.prototype.has = h0;
        Qt.prototype.set = m0;
        hd.exports = Qt
    });
    var yd = c((_X, md) => {
        var y0 = Mr();

        function E0() {
            this.__data__ = new y0, this.size = 0
        }
        md.exports = E0
    });
    var bd = c((IX, Ed) => {
        function b0(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        Ed.exports = b0
    });
    var Id = c((TX, _d) => {
        function _0(e) {
            return this.__data__.get(e)
        }
        _d.exports = _0
    });
    var wd = c((wX, Td) => {
        function I0(e) {
            return this.__data__.has(e)
        }
        Td.exports = I0
    });
    var ut = c((xX, xd) => {
        function T0(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        xd.exports = T0
    });
    var Zo = c((OX, Od) => {
        var w0 = Tt(),
            x0 = ut(),
            O0 = "[object AsyncFunction]",
            A0 = "[object Function]",
            S0 = "[object GeneratorFunction]",
            R0 = "[object Proxy]";

        function C0(e) {
            if (!x0(e)) return !1;
            var t = w0(e);
            return t == A0 || t == S0 || t == O0 || t == R0
        }
        Od.exports = C0
    });
    var Sd = c((AX, Ad) => {
        var L0 = Qe(),
            N0 = L0["__core-js_shared__"];
        Ad.exports = N0
    });
    var Ld = c((SX, Cd) => {
        var Jo = Sd(),
            Rd = function() {
                var e = /[^.]+$/.exec(Jo && Jo.keys && Jo.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function P0(e) {
            return !!Rd && Rd in e
        }
        Cd.exports = P0
    });
    var ea = c((RX, Nd) => {
        var M0 = Function.prototype,
            q0 = M0.toString;

        function D0(e) {
            if (e != null) {
                try {
                    return q0.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Nd.exports = D0
    });
    var Md = c((CX, Pd) => {
        var F0 = Zo(),
            G0 = Ld(),
            k0 = ut(),
            U0 = ea(),
            V0 = /[\\^$.*+?()[\]{}|]/g,
            W0 = /^\[object .+?Constructor\]$/,
            H0 = Function.prototype,
            X0 = Object.prototype,
            B0 = H0.toString,
            j0 = X0.hasOwnProperty,
            z0 = RegExp("^" + B0.call(j0).replace(V0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function K0(e) {
            if (!k0(e) || G0(e)) return !1;
            var t = F0(e) ? z0 : W0;
            return t.test(U0(e))
        }
        Pd.exports = K0
    });
    var Dd = c((LX, qd) => {
        function Y0(e, t) {
            return e ? .[t]
        }
        qd.exports = Y0
    });
    var wt = c((NX, Fd) => {
        var $0 = Md(),
            Q0 = Dd();

        function Z0(e, t) {
            var r = Q0(e, t);
            return $0(r) ? r : void 0
        }
        Fd.exports = Z0
    });
    var Dn = c((PX, Gd) => {
        var J0 = wt(),
            eS = Qe(),
            tS = J0(eS, "Map");
        Gd.exports = tS
    });
    var qr = c((MX, kd) => {
        var rS = wt(),
            nS = rS(Object, "create");
        kd.exports = nS
    });
    var Wd = c((qX, Vd) => {
        var Ud = qr();

        function iS() {
            this.__data__ = Ud ? Ud(null) : {}, this.size = 0
        }
        Vd.exports = iS
    });
    var Xd = c((DX, Hd) => {
        function oS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Hd.exports = oS
    });
    var jd = c((FX, Bd) => {
        var aS = qr(),
            sS = "__lodash_hash_undefined__",
            uS = Object.prototype,
            cS = uS.hasOwnProperty;

        function lS(e) {
            var t = this.__data__;
            if (aS) {
                var r = t[e];
                return r === sS ? void 0 : r
            }
            return cS.call(t, e) ? t[e] : void 0
        }
        Bd.exports = lS
    });
    var Kd = c((GX, zd) => {
        var fS = qr(),
            dS = Object.prototype,
            pS = dS.hasOwnProperty;

        function vS(e) {
            var t = this.__data__;
            return fS ? t[e] !== void 0 : pS.call(t, e)
        }
        zd.exports = vS
    });
    var $d = c((kX, Yd) => {
        var gS = qr(),
            hS = "__lodash_hash_undefined__";

        function mS(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = gS && t === void 0 ? hS : t, this
        }
        Yd.exports = mS
    });
    var Zd = c((UX, Qd) => {
        var yS = Wd(),
            ES = Xd(),
            bS = jd(),
            _S = Kd(),
            IS = $d();

        function Zt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Zt.prototype.clear = yS;
        Zt.prototype.delete = ES;
        Zt.prototype.get = bS;
        Zt.prototype.has = _S;
        Zt.prototype.set = IS;
        Qd.exports = Zt
    });
    var tp = c((VX, ep) => {
        var Jd = Zd(),
            TS = Mr(),
            wS = Dn();

        function xS() {
            this.size = 0, this.__data__ = {
                hash: new Jd,
                map: new(wS || TS),
                string: new Jd
            }
        }
        ep.exports = xS
    });
    var np = c((WX, rp) => {
        function OS(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        rp.exports = OS
    });
    var Dr = c((HX, ip) => {
        var AS = np();

        function SS(e, t) {
            var r = e.__data__;
            return AS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        ip.exports = SS
    });
    var ap = c((XX, op) => {
        var RS = Dr();

        function CS(e) {
            var t = RS(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        op.exports = CS
    });
    var up = c((BX, sp) => {
        var LS = Dr();

        function NS(e) {
            return LS(this, e).get(e)
        }
        sp.exports = NS
    });
    var lp = c((jX, cp) => {
        var PS = Dr();

        function MS(e) {
            return PS(this, e).has(e)
        }
        cp.exports = MS
    });
    var dp = c((zX, fp) => {
        var qS = Dr();

        function DS(e, t) {
            var r = qS(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        fp.exports = DS
    });
    var Fn = c((KX, pp) => {
        var FS = tp(),
            GS = ap(),
            kS = up(),
            US = lp(),
            VS = dp();

        function Jt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Jt.prototype.clear = FS;
        Jt.prototype.delete = GS;
        Jt.prototype.get = kS;
        Jt.prototype.has = US;
        Jt.prototype.set = VS;
        pp.exports = Jt
    });
    var gp = c((YX, vp) => {
        var WS = Mr(),
            HS = Dn(),
            XS = Fn(),
            BS = 200;

        function jS(e, t) {
            var r = this.__data__;
            if (r instanceof WS) {
                var n = r.__data__;
                if (!HS || n.length < BS - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new XS(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        vp.exports = jS
    });
    var ta = c(($X, hp) => {
        var zS = Mr(),
            KS = yd(),
            YS = bd(),
            $S = Id(),
            QS = wd(),
            ZS = gp();

        function er(e) {
            var t = this.__data__ = new zS(e);
            this.size = t.size
        }
        er.prototype.clear = KS;
        er.prototype.delete = YS;
        er.prototype.get = $S;
        er.prototype.has = QS;
        er.prototype.set = ZS;
        hp.exports = er
    });
    var yp = c((QX, mp) => {
        var JS = "__lodash_hash_undefined__";

        function eR(e) {
            return this.__data__.set(e, JS), this
        }
        mp.exports = eR
    });
    var bp = c((ZX, Ep) => {
        function tR(e) {
            return this.__data__.has(e)
        }
        Ep.exports = tR
    });
    var Ip = c((JX, _p) => {
        var rR = Fn(),
            nR = yp(),
            iR = bp();

        function Gn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new rR; ++t < r;) this.add(e[t])
        }
        Gn.prototype.add = Gn.prototype.push = nR;
        Gn.prototype.has = iR;
        _p.exports = Gn
    });
    var wp = c((e5, Tp) => {
        function oR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        Tp.exports = oR
    });
    var Op = c((t5, xp) => {
        function aR(e, t) {
            return e.has(t)
        }
        xp.exports = aR
    });
    var ra = c((r5, Ap) => {
        var sR = Ip(),
            uR = wp(),
            cR = Op(),
            lR = 1,
            fR = 2;

        function dR(e, t, r, n, i, o) {
            var a = r & lR,
                s = e.length,
                u = t.length;
            if (s != u && !(a && u > s)) return !1;
            var v = o.get(e),
                E = o.get(t);
            if (v && E) return v == t && E == e;
            var d = -1,
                _ = !0,
                m = r & fR ? new sR : void 0;
            for (o.set(e, t), o.set(t, e); ++d < s;) {
                var y = e[d],
                    I = t[d];
                if (n) var R = a ? n(I, y, d, t, e, o) : n(y, I, d, e, t, o);
                if (R !== void 0) {
                    if (R) continue;
                    _ = !1;
                    break
                }
                if (m) {
                    if (!uR(t, function(O, L) {
                            if (!cR(m, L) && (y === O || i(y, O, r, n, o))) return m.push(L)
                        })) {
                        _ = !1;
                        break
                    }
                } else if (!(y === I || i(y, I, r, n, o))) {
                    _ = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), _
        }
        Ap.exports = dR
    });
    var Rp = c((n5, Sp) => {
        var pR = Qe(),
            vR = pR.Uint8Array;
        Sp.exports = vR
    });
    var Lp = c((i5, Cp) => {
        function gR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        Cp.exports = gR
    });
    var Pp = c((o5, Np) => {
        function hR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Np.exports = hR
    });
    var Gp = c((a5, Fp) => {
        var Mp = zt(),
            qp = Rp(),
            mR = qn(),
            yR = ra(),
            ER = Lp(),
            bR = Pp(),
            _R = 1,
            IR = 2,
            TR = "[object Boolean]",
            wR = "[object Date]",
            xR = "[object Error]",
            OR = "[object Map]",
            AR = "[object Number]",
            SR = "[object RegExp]",
            RR = "[object Set]",
            CR = "[object String]",
            LR = "[object Symbol]",
            NR = "[object ArrayBuffer]",
            PR = "[object DataView]",
            Dp = Mp ? Mp.prototype : void 0,
            na = Dp ? Dp.valueOf : void 0;

        function MR(e, t, r, n, i, o, a) {
            switch (r) {
                case PR:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case NR:
                    return !(e.byteLength != t.byteLength || !o(new qp(e), new qp(t)));
                case TR:
                case wR:
                case AR:
                    return mR(+e, +t);
                case xR:
                    return e.name == t.name && e.message == t.message;
                case SR:
                case CR:
                    return e == t + "";
                case OR:
                    var s = ER;
                case RR:
                    var u = n & _R;
                    if (s || (s = bR), e.size != t.size && !u) return !1;
                    var v = a.get(e);
                    if (v) return v == t;
                    n |= IR, a.set(e, t);
                    var E = yR(s(e), s(t), n, i, o, a);
                    return a.delete(e), E;
                case LR:
                    if (na) return na.call(e) == na.call(t)
            }
            return !1
        }
        Fp.exports = MR
    });
    var kn = c((s5, kp) => {
        function qR(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        kp.exports = qR
    });
    var Oe = c((u5, Up) => {
        var DR = Array.isArray;
        Up.exports = DR
    });
    var ia = c((c5, Vp) => {
        var FR = kn(),
            GR = Oe();

        function kR(e, t, r) {
            var n = t(e);
            return GR(e) ? n : FR(n, r(e))
        }
        Vp.exports = kR
    });
    var Hp = c((l5, Wp) => {
        function UR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Wp.exports = UR
    });
    var oa = c((f5, Xp) => {
        function VR() {
            return []
        }
        Xp.exports = VR
    });
    var aa = c((d5, jp) => {
        var WR = Hp(),
            HR = oa(),
            XR = Object.prototype,
            BR = XR.propertyIsEnumerable,
            Bp = Object.getOwnPropertySymbols,
            jR = Bp ? function(e) {
                return e == null ? [] : (e = Object(e), WR(Bp(e), function(t) {
                    return BR.call(e, t)
                }))
            } : HR;
        jp.exports = jR
    });
    var Kp = c((p5, zp) => {
        function zR(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        zp.exports = zR
    });
    var $p = c((v5, Yp) => {
        var KR = Tt(),
            YR = vt(),
            $R = "[object Arguments]";

        function QR(e) {
            return YR(e) && KR(e) == $R
        }
        Yp.exports = QR
    });
    var Fr = c((g5, Jp) => {
        var Qp = $p(),
            ZR = vt(),
            Zp = Object.prototype,
            JR = Zp.hasOwnProperty,
            eC = Zp.propertyIsEnumerable,
            tC = Qp(function() {
                return arguments
            }()) ? Qp : function(e) {
                return ZR(e) && JR.call(e, "callee") && !eC.call(e, "callee")
            };
        Jp.exports = tC
    });
    var tv = c((h5, ev) => {
        function rC() {
            return !1
        }
        ev.exports = rC
    });
    var Un = c((Gr, tr) => {
        var nC = Qe(),
            iC = tv(),
            iv = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
            rv = iv && typeof tr == "object" && tr && !tr.nodeType && tr,
            oC = rv && rv.exports === iv,
            nv = oC ? nC.Buffer : void 0,
            aC = nv ? nv.isBuffer : void 0,
            sC = aC || iC;
        tr.exports = sC
    });
    var Vn = c((m5, ov) => {
        var uC = 9007199254740991,
            cC = /^(?:0|[1-9]\d*)$/;

        function lC(e, t) {
            var r = typeof e;
            return t = t ? ? uC, !!t && (r == "number" || r != "symbol" && cC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        ov.exports = lC
    });
    var Wn = c((y5, av) => {
        var fC = 9007199254740991;

        function dC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fC
        }
        av.exports = dC
    });
    var uv = c((E5, sv) => {
        var pC = Tt(),
            vC = Wn(),
            gC = vt(),
            hC = "[object Arguments]",
            mC = "[object Array]",
            yC = "[object Boolean]",
            EC = "[object Date]",
            bC = "[object Error]",
            _C = "[object Function]",
            IC = "[object Map]",
            TC = "[object Number]",
            wC = "[object Object]",
            xC = "[object RegExp]",
            OC = "[object Set]",
            AC = "[object String]",
            SC = "[object WeakMap]",
            RC = "[object ArrayBuffer]",
            CC = "[object DataView]",
            LC = "[object Float32Array]",
            NC = "[object Float64Array]",
            PC = "[object Int8Array]",
            MC = "[object Int16Array]",
            qC = "[object Int32Array]",
            DC = "[object Uint8Array]",
            FC = "[object Uint8ClampedArray]",
            GC = "[object Uint16Array]",
            kC = "[object Uint32Array]",
            he = {};
        he[LC] = he[NC] = he[PC] = he[MC] = he[qC] = he[DC] = he[FC] = he[GC] = he[kC] = !0;
        he[hC] = he[mC] = he[RC] = he[yC] = he[CC] = he[EC] = he[bC] = he[_C] = he[IC] = he[TC] = he[wC] = he[xC] = he[OC] = he[AC] = he[SC] = !1;

        function UC(e) {
            return gC(e) && vC(e.length) && !!he[pC(e)]
        }
        sv.exports = UC
    });
    var lv = c((b5, cv) => {
        function VC(e) {
            return function(t) {
                return e(t)
            }
        }
        cv.exports = VC
    });
    var dv = c((kr, rr) => {
        var WC = No(),
            fv = typeof kr == "object" && kr && !kr.nodeType && kr,
            Ur = fv && typeof rr == "object" && rr && !rr.nodeType && rr,
            HC = Ur && Ur.exports === fv,
            sa = HC && WC.process,
            XC = function() {
                try {
                    var e = Ur && Ur.require && Ur.require("util").types;
                    return e || sa && sa.binding && sa.binding("util")
                } catch {}
            }();
        rr.exports = XC
    });
    var Hn = c((_5, gv) => {
        var BC = uv(),
            jC = lv(),
            pv = dv(),
            vv = pv && pv.isTypedArray,
            zC = vv ? jC(vv) : BC;
        gv.exports = zC
    });
    var ua = c((I5, hv) => {
        var KC = Kp(),
            YC = Fr(),
            $C = Oe(),
            QC = Un(),
            ZC = Vn(),
            JC = Hn(),
            eL = Object.prototype,
            tL = eL.hasOwnProperty;

        function rL(e, t) {
            var r = $C(e),
                n = !r && YC(e),
                i = !r && !n && QC(e),
                o = !r && !n && !i && JC(e),
                a = r || n || i || o,
                s = a ? KC(e.length, String) : [],
                u = s.length;
            for (var v in e)(t || tL.call(e, v)) && !(a && (v == "length" || i && (v == "offset" || v == "parent") || o && (v == "buffer" || v == "byteLength" || v == "byteOffset") || ZC(v, u))) && s.push(v);
            return s
        }
        hv.exports = rL
    });
    var Xn = c((T5, mv) => {
        var nL = Object.prototype;

        function iL(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || nL;
            return e === r
        }
        mv.exports = iL
    });
    var Ev = c((w5, yv) => {
        var oL = Po(),
            aL = oL(Object.keys, Object);
        yv.exports = aL
    });
    var Bn = c((x5, bv) => {
        var sL = Xn(),
            uL = Ev(),
            cL = Object.prototype,
            lL = cL.hasOwnProperty;

        function fL(e) {
            if (!sL(e)) return uL(e);
            var t = [];
            for (var r in Object(e)) lL.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        bv.exports = fL
    });
    var Mt = c((O5, _v) => {
        var dL = Zo(),
            pL = Wn();

        function vL(e) {
            return e != null && pL(e.length) && !dL(e)
        }
        _v.exports = vL
    });
    var Vr = c((A5, Iv) => {
        var gL = ua(),
            hL = Bn(),
            mL = Mt();

        function yL(e) {
            return mL(e) ? gL(e) : hL(e)
        }
        Iv.exports = yL
    });
    var wv = c((S5, Tv) => {
        var EL = ia(),
            bL = aa(),
            _L = Vr();

        function IL(e) {
            return EL(e, _L, bL)
        }
        Tv.exports = IL
    });
    var Av = c((R5, Ov) => {
        var xv = wv(),
            TL = 1,
            wL = Object.prototype,
            xL = wL.hasOwnProperty;

        function OL(e, t, r, n, i, o) {
            var a = r & TL,
                s = xv(e),
                u = s.length,
                v = xv(t),
                E = v.length;
            if (u != E && !a) return !1;
            for (var d = u; d--;) {
                var _ = s[d];
                if (!(a ? _ in t : xL.call(t, _))) return !1
            }
            var m = o.get(e),
                y = o.get(t);
            if (m && y) return m == t && y == e;
            var I = !0;
            o.set(e, t), o.set(t, e);
            for (var R = a; ++d < u;) {
                _ = s[d];
                var O = e[_],
                    L = t[_];
                if (n) var C = a ? n(L, O, _, t, e, o) : n(O, L, _, e, t, o);
                if (!(C === void 0 ? O === L || i(O, L, r, n, o) : C)) {
                    I = !1;
                    break
                }
                R || (R = _ == "constructor")
            }
            if (I && !R) {
                var P = e.constructor,
                    F = t.constructor;
                P != F && "constructor" in e && "constructor" in t && !(typeof P == "function" && P instanceof P && typeof F == "function" && F instanceof F) && (I = !1)
            }
            return o.delete(e), o.delete(t), I
        }
        Ov.exports = OL
    });
    var Rv = c((C5, Sv) => {
        var AL = wt(),
            SL = Qe(),
            RL = AL(SL, "DataView");
        Sv.exports = RL
    });
    var Lv = c((L5, Cv) => {
        var CL = wt(),
            LL = Qe(),
            NL = CL(LL, "Promise");
        Cv.exports = NL
    });
    var Pv = c((N5, Nv) => {
        var PL = wt(),
            ML = Qe(),
            qL = PL(ML, "Set");
        Nv.exports = qL
    });
    var ca = c((P5, Mv) => {
        var DL = wt(),
            FL = Qe(),
            GL = DL(FL, "WeakMap");
        Mv.exports = GL
    });
    var jn = c((M5, Vv) => {
        var la = Rv(),
            fa = Dn(),
            da = Lv(),
            pa = Pv(),
            va = ca(),
            Uv = Tt(),
            nr = ea(),
            qv = "[object Map]",
            kL = "[object Object]",
            Dv = "[object Promise]",
            Fv = "[object Set]",
            Gv = "[object WeakMap]",
            kv = "[object DataView]",
            UL = nr(la),
            VL = nr(fa),
            WL = nr(da),
            HL = nr(pa),
            XL = nr(va),
            qt = Uv;
        (la && qt(new la(new ArrayBuffer(1))) != kv || fa && qt(new fa) != qv || da && qt(da.resolve()) != Dv || pa && qt(new pa) != Fv || va && qt(new va) != Gv) && (qt = function(e) {
            var t = Uv(e),
                r = t == kL ? e.constructor : void 0,
                n = r ? nr(r) : "";
            if (n) switch (n) {
                case UL:
                    return kv;
                case VL:
                    return qv;
                case WL:
                    return Dv;
                case HL:
                    return Fv;
                case XL:
                    return Gv
            }
            return t
        });
        Vv.exports = qt
    });
    var Yv = c((q5, Kv) => {
        var ga = ta(),
            BL = ra(),
            jL = Gp(),
            zL = Av(),
            Wv = jn(),
            Hv = Oe(),
            Xv = Un(),
            KL = Hn(),
            YL = 1,
            Bv = "[object Arguments]",
            jv = "[object Array]",
            zn = "[object Object]",
            $L = Object.prototype,
            zv = $L.hasOwnProperty;

        function QL(e, t, r, n, i, o) {
            var a = Hv(e),
                s = Hv(t),
                u = a ? jv : Wv(e),
                v = s ? jv : Wv(t);
            u = u == Bv ? zn : u, v = v == Bv ? zn : v;
            var E = u == zn,
                d = v == zn,
                _ = u == v;
            if (_ && Xv(e)) {
                if (!Xv(t)) return !1;
                a = !0, E = !1
            }
            if (_ && !E) return o || (o = new ga), a || KL(e) ? BL(e, t, r, n, i, o) : jL(e, t, u, r, n, i, o);
            if (!(r & YL)) {
                var m = E && zv.call(e, "__wrapped__"),
                    y = d && zv.call(t, "__wrapped__");
                if (m || y) {
                    var I = m ? e.value() : e,
                        R = y ? t.value() : t;
                    return o || (o = new ga), i(I, R, r, n, o)
                }
            }
            return _ ? (o || (o = new ga), zL(e, t, r, n, i, o)) : !1
        }
        Kv.exports = QL
    });
    var ha = c((D5, Zv) => {
        var ZL = Yv(),
            $v = vt();

        function Qv(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !$v(e) && !$v(t) ? e !== e && t !== t : ZL(e, t, r, n, Qv, i)
        }
        Zv.exports = Qv
    });
    var eg = c((F5, Jv) => {
        var JL = ta(),
            eN = ha(),
            tN = 1,
            rN = 2;

        function nN(e, t, r, n) {
            var i = r.length,
                o = i,
                a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++i < o;) {
                s = r[i];
                var u = s[0],
                    v = e[u],
                    E = s[1];
                if (a && s[2]) {
                    if (v === void 0 && !(u in e)) return !1
                } else {
                    var d = new JL;
                    if (n) var _ = n(v, E, u, e, t, d);
                    if (!(_ === void 0 ? eN(E, v, tN | rN, n, d) : _)) return !1
                }
            }
            return !0
        }
        Jv.exports = nN
    });
    var ma = c((G5, tg) => {
        var iN = ut();

        function oN(e) {
            return e === e && !iN(e)
        }
        tg.exports = oN
    });
    var ng = c((k5, rg) => {
        var aN = ma(),
            sN = Vr();

        function uN(e) {
            for (var t = sN(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, aN(i)]
            }
            return t
        }
        rg.exports = uN
    });
    var ya = c((U5, ig) => {
        function cN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        ig.exports = cN
    });
    var ag = c((V5, og) => {
        var lN = eg(),
            fN = ng(),
            dN = ya();

        function pN(e) {
            var t = fN(e);
            return t.length == 1 && t[0][2] ? dN(t[0][0], t[0][1]) : function(r) {
                return r === e || lN(r, e, t)
            }
        }
        og.exports = pN
    });
    var Wr = c((W5, sg) => {
        var vN = Tt(),
            gN = vt(),
            hN = "[object Symbol]";

        function mN(e) {
            return typeof e == "symbol" || gN(e) && vN(e) == hN
        }
        sg.exports = mN
    });
    var Kn = c((H5, ug) => {
        var yN = Oe(),
            EN = Wr(),
            bN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            _N = /^\w*$/;

        function IN(e, t) {
            if (yN(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || EN(e) ? !0 : _N.test(e) || !bN.test(e) || t != null && e in Object(t)
        }
        ug.exports = IN
    });
    var fg = c((X5, lg) => {
        var cg = Fn(),
            TN = "Expected a function";

        function Ea(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(TN);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new(Ea.Cache || cg), r
        }
        Ea.Cache = cg;
        lg.exports = Ea
    });
    var pg = c((B5, dg) => {
        var wN = fg(),
            xN = 500;

        function ON(e) {
            var t = wN(e, function(n) {
                    return r.size === xN && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        dg.exports = ON
    });
    var gg = c((j5, vg) => {
        var AN = pg(),
            SN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            RN = /\\(\\)?/g,
            CN = AN(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(SN, function(r, n, i, o) {
                    t.push(i ? o.replace(RN, "$1") : n || r)
                }), t
            });
        vg.exports = CN
    });
    var ba = c((z5, hg) => {
        function LN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        hg.exports = LN
    });
    var Ig = c((K5, _g) => {
        var mg = zt(),
            NN = ba(),
            PN = Oe(),
            MN = Wr(),
            qN = 1 / 0,
            yg = mg ? mg.prototype : void 0,
            Eg = yg ? yg.toString : void 0;

        function bg(e) {
            if (typeof e == "string") return e;
            if (PN(e)) return NN(e, bg) + "";
            if (MN(e)) return Eg ? Eg.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -qN ? "-0" : t
        }
        _g.exports = bg
    });
    var wg = c((Y5, Tg) => {
        var DN = Ig();

        function FN(e) {
            return e == null ? "" : DN(e)
        }
        Tg.exports = FN
    });
    var Hr = c(($5, xg) => {
        var GN = Oe(),
            kN = Kn(),
            UN = gg(),
            VN = wg();

        function WN(e, t) {
            return GN(e) ? e : kN(e, t) ? [e] : UN(VN(e))
        }
        xg.exports = WN
    });
    var ir = c((Q5, Og) => {
        var HN = Wr(),
            XN = 1 / 0;

        function BN(e) {
            if (typeof e == "string" || HN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -XN ? "-0" : t
        }
        Og.exports = BN
    });
    var Yn = c((Z5, Ag) => {
        var jN = Hr(),
            zN = ir();

        function KN(e, t) {
            t = jN(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[zN(t[r++])];
            return r && r == n ? e : void 0
        }
        Ag.exports = KN
    });
    var $n = c((J5, Sg) => {
        var YN = Yn();

        function $N(e, t, r) {
            var n = e == null ? void 0 : YN(e, t);
            return n === void 0 ? r : n
        }
        Sg.exports = $N
    });
    var Cg = c((eB, Rg) => {
        function QN(e, t) {
            return e != null && t in Object(e)
        }
        Rg.exports = QN
    });
    var Ng = c((tB, Lg) => {
        var ZN = Hr(),
            JN = Fr(),
            eP = Oe(),
            tP = Vn(),
            rP = Wn(),
            nP = ir();

        function iP(e, t, r) {
            t = ZN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = nP(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && rP(i) && tP(a, i) && (eP(e) || JN(e)))
        }
        Lg.exports = iP
    });
    var Mg = c((rB, Pg) => {
        var oP = Cg(),
            aP = Ng();

        function sP(e, t) {
            return e != null && aP(e, t, oP)
        }
        Pg.exports = sP
    });
    var Dg = c((nB, qg) => {
        var uP = ha(),
            cP = $n(),
            lP = Mg(),
            fP = Kn(),
            dP = ma(),
            pP = ya(),
            vP = ir(),
            gP = 1,
            hP = 2;

        function mP(e, t) {
            return fP(e) && dP(t) ? pP(vP(e), t) : function(r) {
                var n = cP(r, e);
                return n === void 0 && n === t ? lP(r, e) : uP(t, n, gP | hP)
            }
        }
        qg.exports = mP
    });
    var Qn = c((iB, Fg) => {
        function yP(e) {
            return e
        }
        Fg.exports = yP
    });
    var _a = c((oB, Gg) => {
        function EP(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Gg.exports = EP
    });
    var Ug = c((aB, kg) => {
        var bP = Yn();

        function _P(e) {
            return function(t) {
                return bP(t, e)
            }
        }
        kg.exports = _P
    });
    var Wg = c((sB, Vg) => {
        var IP = _a(),
            TP = Ug(),
            wP = Kn(),
            xP = ir();

        function OP(e) {
            return wP(e) ? IP(xP(e)) : TP(e)
        }
        Vg.exports = OP
    });
    var xt = c((uB, Hg) => {
        var AP = ag(),
            SP = Dg(),
            RP = Qn(),
            CP = Oe(),
            LP = Wg();

        function NP(e) {
            return typeof e == "function" ? e : e == null ? RP : typeof e == "object" ? CP(e) ? SP(e[0], e[1]) : AP(e) : LP(e)
        }
        Hg.exports = NP
    });
    var Ia = c((cB, Xg) => {
        var PP = xt(),
            MP = Mt(),
            qP = Vr();

        function DP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!MP(t)) {
                    var o = PP(r, 3);
                    t = qP(t), r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Xg.exports = DP
    });
    var Ta = c((lB, Bg) => {
        function FP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Bg.exports = FP
    });
    var zg = c((fB, jg) => {
        var GP = /\s/;

        function kP(e) {
            for (var t = e.length; t-- && GP.test(e.charAt(t)););
            return t
        }
        jg.exports = kP
    });
    var Yg = c((dB, Kg) => {
        var UP = zg(),
            VP = /^\s+/;

        function WP(e) {
            return e && e.slice(0, UP(e) + 1).replace(VP, "")
        }
        Kg.exports = WP
    });
    var Zn = c((pB, Zg) => {
        var HP = Yg(),
            $g = ut(),
            XP = Wr(),
            Qg = 0 / 0,
            BP = /^[-+]0x[0-9a-f]+$/i,
            jP = /^0b[01]+$/i,
            zP = /^0o[0-7]+$/i,
            KP = parseInt;

        function YP(e) {
            if (typeof e == "number") return e;
            if (XP(e)) return Qg;
            if ($g(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = $g(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = HP(e);
            var r = jP.test(e);
            return r || zP.test(e) ? KP(e.slice(2), r ? 2 : 8) : BP.test(e) ? Qg : +e
        }
        Zg.exports = YP
    });
    var th = c((vB, eh) => {
        var $P = Zn(),
            Jg = 1 / 0,
            QP = 17976931348623157e292;

        function ZP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = $P(e), e === Jg || e === -Jg) {
                var t = e < 0 ? -1 : 1;
                return t * QP
            }
            return e === e ? e : 0
        }
        eh.exports = ZP
    });
    var wa = c((gB, rh) => {
        var JP = th();

        function eM(e) {
            var t = JP(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        rh.exports = eM
    });
    var ih = c((hB, nh) => {
        var tM = Ta(),
            rM = xt(),
            nM = wa(),
            iM = Math.max;

        function oM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : nM(r);
            return i < 0 && (i = iM(n + i, 0)), tM(e, rM(t, 3), i)
        }
        nh.exports = oM
    });
    var xa = c((mB, oh) => {
        var aM = Ia(),
            sM = ih(),
            uM = aM(sM);
        oh.exports = uM
    });
    var uh = {};
    ke(uh, {
        ELEMENT_MATCHES: () => cM,
        FLEX_PREFIXED: () => Oa,
        IS_BROWSER_ENV: () => Je,
        TRANSFORM_PREFIXED: () => Ot,
        TRANSFORM_STYLE_PREFIXED: () => ei,
        withBrowser: () => Jn
    });
    var sh, Je, Jn, cM, Oa, Ot, ah, ei, ti = me(() => {
        "use strict";
        sh = de(xa()), Je = typeof window < "u", Jn = (e, t) => Je ? e() : t, cM = Jn(() => (0, sh.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Oa = Jn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), Ot = Jn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), ah = Ot.split("transform")[0], ei = ah ? ah + "TransformStyle" : "transformStyle"
    });
    var Aa = c((yB, ph) => {
        var lM = 4,
            fM = .001,
            dM = 1e-7,
            pM = 10,
            Xr = 11,
            ri = 1 / (Xr - 1),
            vM = typeof Float32Array == "function";

        function ch(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function lh(e, t) {
            return 3 * t - 6 * e
        }

        function fh(e) {
            return 3 * e
        }

        function ni(e, t, r) {
            return ((ch(t, r) * e + lh(t, r)) * e + fh(t)) * e
        }

        function dh(e, t, r) {
            return 3 * ch(t, r) * e * e + 2 * lh(t, r) * e + fh(t)
        }

        function gM(e, t, r, n, i) {
            var o, a, s = 0;
            do a = t + (r - t) / 2, o = ni(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > dM && ++s < pM);
            return a
        }

        function hM(e, t, r, n) {
            for (var i = 0; i < lM; ++i) {
                var o = dh(t, r, n);
                if (o === 0) return t;
                var a = ni(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        ph.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = vM ? new Float32Array(Xr) : new Array(Xr);
            if (t !== r || n !== i)
                for (var a = 0; a < Xr; ++a) o[a] = ni(a * ri, t, n);

            function s(u) {
                for (var v = 0, E = 1, d = Xr - 1; E !== d && o[E] <= u; ++E) v += ri;
                --E;
                var _ = (u - o[E]) / (o[E + 1] - o[E]),
                    m = v + _ * ri,
                    y = dh(m, t, n);
                return y >= fM ? hM(u, m, t, n) : y === 0 ? m : gM(u, v, v + ri, t, n)
            }
            return function(v) {
                return t === r && n === i ? v : v === 0 ? 0 : v === 1 ? 1 : ni(s(v), r, i)
            }
        }
    });
    var jr = {};
    ke(jr, {
        bounce: () => ZM,
        bouncePast: () => JM,
        ease: () => mM,
        easeIn: () => yM,
        easeInOut: () => bM,
        easeOut: () => EM,
        inBack: () => HM,
        inCirc: () => kM,
        inCubic: () => wM,
        inElastic: () => jM,
        inExpo: () => DM,
        inOutBack: () => BM,
        inOutCirc: () => VM,
        inOutCubic: () => OM,
        inOutElastic: () => KM,
        inOutExpo: () => GM,
        inOutQuad: () => TM,
        inOutQuart: () => RM,
        inOutQuint: () => NM,
        inOutSine: () => qM,
        inQuad: () => _M,
        inQuart: () => AM,
        inQuint: () => CM,
        inSine: () => PM,
        outBack: () => XM,
        outBounce: () => WM,
        outCirc: () => UM,
        outCubic: () => xM,
        outElastic: () => zM,
        outExpo: () => FM,
        outQuad: () => IM,
        outQuart: () => SM,
        outQuint: () => LM,
        outSine: () => MM,
        swingFrom: () => $M,
        swingFromTo: () => YM,
        swingTo: () => QM
    });

    function _M(e) {
        return Math.pow(e, 2)
    }

    function IM(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function TM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function wM(e) {
        return Math.pow(e, 3)
    }

    function xM(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function OM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function AM(e) {
        return Math.pow(e, 4)
    }

    function SM(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function RM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function CM(e) {
        return Math.pow(e, 5)
    }

    function LM(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function NM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function PM(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function MM(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function qM(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function DM(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function FM(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function GM(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function kM(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function UM(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function VM(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function WM(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function HM(e) {
        let t = gt;
        return e * e * ((t + 1) * e - t)
    }

    function XM(e) {
        let t = gt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function BM(e) {
        let t = gt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function jM(e) {
        let t = gt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function zM(e) {
        let t = gt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function KM(e) {
        let t = gt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function YM(e) {
        let t = gt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function $M(e) {
        let t = gt;
        return e * e * ((t + 1) * e - t)
    }

    function QM(e) {
        let t = gt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function ZM(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function JM(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Br, gt, mM, yM, EM, bM, Sa = me(() => {
        "use strict";
        Br = de(Aa()), gt = 1.70158, mM = (0, Br.default)(.25, .1, .25, 1), yM = (0, Br.default)(.42, 0, 1, 1), EM = (0, Br.default)(0, 0, .58, 1), bM = (0, Br.default)(.42, 0, .58, 1)
    });
    var gh = {};
    ke(gh, {
        applyEasing: () => tq,
        createBezierEasing: () => eq,
        optimizeFloat: () => zr
    });

    function zr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function eq(e) {
        return (0, vh.default)(...e)
    }

    function tq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : zr(r ? t > 0 ? r(t) : t : t > 0 && e && jr[e] ? jr[e](t) : t)
    }
    var vh, Ra = me(() => {
        "use strict";
        Sa();
        vh = de(Aa())
    });
    var yh = {};
    ke(yh, {
        createElementState: () => mh,
        ixElements: () => gq,
        mergeActionState: () => Ca
    });

    function mh(e, t, r, n, i) {
        let o = r === rq ? (0, or.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, or.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function Ca(e, t, r, n, i) {
        let o = mq(i);
        return (0, or.mergeIn)(e, [t, vq, r], n, o)
    }

    function mq(e) {
        let {
            config: t
        } = e;
        return hq.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                a = t[i],
                s = t[o];
            return a != null && s != null && (r[o] = s), r
        }, {})
    }
    var or, bB, rq, _B, nq, iq, oq, aq, sq, uq, cq, lq, fq, dq, pq, hh, vq, gq, hq, Eh = me(() => {
        "use strict";
        or = de($t());
        Ve();
        ({
            HTML_ELEMENT: bB,
            PLAIN_OBJECT: rq,
            ABSTRACT_NODE: _B,
            CONFIG_X_VALUE: nq,
            CONFIG_Y_VALUE: iq,
            CONFIG_Z_VALUE: oq,
            CONFIG_VALUE: aq,
            CONFIG_X_UNIT: sq,
            CONFIG_Y_UNIT: uq,
            CONFIG_Z_UNIT: cq,
            CONFIG_UNIT: lq
        } = Le), {
            IX2_SESSION_STOPPED: fq,
            IX2_INSTANCE_ADDED: dq,
            IX2_ELEMENT_STATE_CHANGED: pq
        } = we, hh = {}, vq = "refState", gq = (e = hh, t = {}) => {
            switch (t.type) {
                case fq:
                    return hh;
                case dq:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: a
                        } = t.payload,
                        {
                            actionTypeId: s
                        } = o,
                        u = e;
                        return (0, or.getIn)(u, [r, n]) !== n && (u = mh(u, n, a, r, o)),
                        Ca(u, r, s, i, o)
                    }
                case pq:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return Ca(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        hq = [
            [nq, sq],
            [iq, uq],
            [oq, cq],
            [aq, lq]
        ]
    });
    var bh = c(Ae => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var yq = e => e.value;
        Ae.getPluginConfig = yq;
        var Eq = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        Ae.getPluginDuration = Eq;
        var bq = e => e || {
            value: 0
        };
        Ae.getPluginOrigin = bq;
        var _q = e => ({
            value: e.value
        });
        Ae.getPluginDestination = _q;
        var Iq = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        Ae.createPluginInstance = Iq;
        var Tq = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        Ae.renderPlugin = Tq;
        var wq = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        Ae.clearPlugin = wq
    });
    var Ih = c(Se => {
        "use strict";
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
        var xq = e => document.querySelector(`[data-w-id="${e}"]`),
            Oq = () => window.Webflow.require("spline"),
            Aq = (e, t) => e.filter(r => !t.includes(r)),
            Sq = (e, t) => e.value[t];
        Se.getPluginConfig = Sq;
        var Rq = () => null;
        Se.getPluginDuration = Rq;
        var _h = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            Cq = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        a = Aq(n, o);
                    return a.length ? a.reduce((u, v) => (u[v] = _h[v], u), e) : e
                }
                return n.reduce((o, a) => (o[a] = _h[a], o), {})
            };
        Se.getPluginOrigin = Cq;
        var Lq = e => e.value;
        Se.getPluginDestination = Lq;
        var Nq = (e, t) => {
            var r, n;
            let i = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return i ? xq(i) : null
        };
        Se.createPluginInstance = Nq;
        var Pq = (e, t, r) => {
            let n = Oq(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                a = s => {
                    if (!s) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && s.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: v
                    } = t;
                    v.positionX != null && (u.position.x = v.positionX), v.positionY != null && (u.position.y = v.positionY), v.positionZ != null && (u.position.z = v.positionZ), v.rotationX != null && (u.rotation.x = v.rotationX), v.rotationY != null && (u.rotation.y = v.rotationY), v.rotationZ != null && (u.rotation.z = v.rotationZ), v.scaleX != null && (u.scale.x = v.scaleX), v.scaleY != null && (u.scale.y = v.scaleY), v.scaleZ != null && (u.scale.z = v.scaleZ)
                };
            i ? a(i.spline) : n.setLoadHandler(e, a)
        };
        Se.renderPlugin = Pq;
        var Mq = () => null;
        Se.clearPlugin = Mq
    });
    var wh = c(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
        xe.normalizeColor = Th;
        xe.renderPlugin = void 0;

        function Th(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase();
            if (o.startsWith("#")) {
                let a = o.substring(1);
                a.length === 3 ? (t = parseInt(a[0] + a[0], 16), r = parseInt(a[1] + a[1], 16), n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16), r = parseInt(a.substring(2, 4), 16), n = parseInt(a.substring(4, 6), 16))
            } else if (o.startsWith("rgba")) {
                let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10), i = parseFloat(a[3])
            } else if (o.startsWith("rgb")) {
                let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10)
            } else if (o.startsWith("hsla")) {
                let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    u = parseFloat(a[1].replace("%", "")) / 100,
                    v = parseFloat(a[2].replace("%", "")) / 100;
                i = parseFloat(a[3]);
                let E = (1 - Math.abs(2 * v - 1)) * u,
                    d = E * (1 - Math.abs(s / 60 % 2 - 1)),
                    _ = v - E / 2,
                    m, y, I;
                s >= 0 && s < 60 ? (m = E, y = d, I = 0) : s >= 60 && s < 120 ? (m = d, y = E, I = 0) : s >= 120 && s < 180 ? (m = 0, y = E, I = d) : s >= 180 && s < 240 ? (m = 0, y = d, I = E) : s >= 240 && s < 300 ? (m = d, y = 0, I = E) : (m = E, y = 0, I = d), t = Math.round((m + _) * 255), r = Math.round((y + _) * 255), n = Math.round((I + _) * 255)
            } else if (o.startsWith("hsl")) {
                let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    u = parseFloat(a[1].replace("%", "")) / 100,
                    v = parseFloat(a[2].replace("%", "")) / 100,
                    E = (1 - Math.abs(2 * v - 1)) * u,
                    d = E * (1 - Math.abs(s / 60 % 2 - 1)),
                    _ = v - E / 2,
                    m, y, I;
                s >= 0 && s < 60 ? (m = E, y = d, I = 0) : s >= 60 && s < 120 ? (m = d, y = E, I = 0) : s >= 120 && s < 180 ? (m = 0, y = E, I = d) : s >= 180 && s < 240 ? (m = 0, y = d, I = E) : s >= 240 && s < 300 ? (m = d, y = 0, I = E) : (m = E, y = 0, I = d), t = Math.round((m + _) * 255), r = Math.round((y + _) * 255), n = Math.round((I + _) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
        var qq = (e, t) => e.value[t];
        xe.getPluginConfig = qq;
        var Dq = () => null;
        xe.getPluginDuration = Dq;
        var Fq = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return Th(i)
        };
        xe.getPluginOrigin = Fq;
        var Gq = e => e.value;
        xe.getPluginDestination = Gq;
        var kq = () => null;
        xe.createPluginInstance = kq;
        var Uq = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: a,
                    red: s,
                    green: u,
                    blue: v,
                    alpha: E
                } = o,
                d;
            a != null && (d = a + i), s != null && v != null && u != null && E != null && (d = `rgba(${s}, ${u}, ${v}, ${E})`), d != null && document.documentElement.style.setProperty(n, d)
        };
        xe.renderPlugin = Uq;
        var Vq = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        xe.clearPlugin = Vq
    });
    var xh = c(ii => {
        "use strict";
        var Na = gn().default;
        Object.defineProperty(ii, "__esModule", {
            value: !0
        });
        ii.pluginMethodMap = void 0;
        var La = (Ve(), nt(Lf)),
            Wq = Na(bh()),
            Hq = Na(Ih()),
            Xq = Na(wh()),
            xB = ii.pluginMethodMap = new Map([
                [La.ActionTypeConsts.PLUGIN_LOTTIE, { ...Wq
                }],
                [La.ActionTypeConsts.PLUGIN_SPLINE, { ...Hq
                }],
                [La.ActionTypeConsts.PLUGIN_VARIABLE, { ...Xq
                }]
            ])
    });
    var Oh = {};
    ke(Oh, {
        clearPlugin: () => Ga,
        createPluginInstance: () => jq,
        getPluginConfig: () => Ma,
        getPluginDestination: () => Da,
        getPluginDuration: () => Bq,
        getPluginOrigin: () => qa,
        isPluginType: () => Dt,
        renderPlugin: () => Fa
    });

    function Dt(e) {
        return Pa.pluginMethodMap.has(e)
    }
    var Pa, Ft, Ma, qa, Bq, Da, jq, Fa, Ga, ka = me(() => {
        "use strict";
        ti();
        Pa = de(xh());
        Ft = e => t => {
            if (!Je) return () => null;
            let r = Pa.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Ma = Ft("getPluginConfig"), qa = Ft("getPluginOrigin"), Bq = Ft("getPluginDuration"), Da = Ft("getPluginDestination"), jq = Ft("createPluginInstance"), Fa = Ft("renderPlugin"), Ga = Ft("clearPlugin")
    });
    var Sh = c((SB, Ah) => {
        function zq(e, t) {
            return e == null || e !== e ? t : e
        }
        Ah.exports = zq
    });
    var Ch = c((RB, Rh) => {
        function Kq(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        Rh.exports = Kq
    });
    var Nh = c((CB, Lh) => {
        function Yq(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        Lh.exports = Yq
    });
    var Mh = c((LB, Ph) => {
        var $q = Nh(),
            Qq = $q();
        Ph.exports = Qq
    });
    var Ua = c((NB, qh) => {
        var Zq = Mh(),
            Jq = Vr();

        function e1(e, t) {
            return e && Zq(e, t, Jq)
        }
        qh.exports = e1
    });
    var Fh = c((PB, Dh) => {
        var t1 = Mt();

        function r1(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!t1(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r);
                    (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
                return r
            }
        }
        Dh.exports = r1
    });
    var Va = c((MB, Gh) => {
        var n1 = Ua(),
            i1 = Fh(),
            o1 = i1(n1);
        Gh.exports = o1
    });
    var Uh = c((qB, kh) => {
        function a1(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1, o) : t(r, o, a, s)
            }), r
        }
        kh.exports = a1
    });
    var Wh = c((DB, Vh) => {
        var s1 = Ch(),
            u1 = Va(),
            c1 = xt(),
            l1 = Uh(),
            f1 = Oe();

        function d1(e, t, r) {
            var n = f1(e) ? s1 : l1,
                i = arguments.length < 3;
            return n(e, c1(t, 4), r, i, u1)
        }
        Vh.exports = d1
    });
    var Xh = c((FB, Hh) => {
        var p1 = Ta(),
            v1 = xt(),
            g1 = wa(),
            h1 = Math.max,
            m1 = Math.min;

        function y1(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = g1(r), i = r < 0 ? h1(n + i, 0) : m1(i, n - 1)), p1(e, v1(t, 3), i, !0)
        }
        Hh.exports = y1
    });
    var jh = c((GB, Bh) => {
        var E1 = Ia(),
            b1 = Xh(),
            _1 = E1(b1);
        Bh.exports = _1
    });

    function zh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function T1(e, t) {
        if (zh(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!I1.call(t, r[i]) || !zh(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var I1, Wa, Kh = me(() => {
        "use strict";
        I1 = Object.prototype.hasOwnProperty;
        Wa = T1
    });
    var fm = {};
    ke(fm, {
        cleanupHTMLElement: () => bD,
        clearAllStyles: () => ED,
        clearObjectCache: () => U1,
        getActionListProgress: () => ID,
        getAffectedElements: () => za,
        getComputedStyle: () => K1,
        getDestinationValues: () => tD,
        getElementId: () => X1,
        getInstanceId: () => W1,
        getInstanceOrigin: () => Q1,
        getItemConfigByKey: () => eD,
        getMaxDurationItemIndex: () => lm,
        getNamespacedParameterId: () => xD,
        getRenderType: () => sm,
        getStyleProp: () => rD,
        mediaQueriesEqual: () => AD,
        observeStore: () => z1,
        reduceListToGroup: () => TD,
        reifyState: () => B1,
        renderHTMLElement: () => nD,
        shallowEqual: () => Wa,
        shouldAllowMediaQuery: () => OD,
        shouldNamespaceEventParameter: () => wD,
        stringifyTarget: () => SD
    });

    function U1() {
        oi.clear()
    }

    function W1() {
        return "i" + V1++
    }

    function X1(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + H1++
    }

    function B1({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, ci.default)(e, (a, s) => {
                let {
                    eventTypeId: u
                } = s;
                return a[u] || (a[u] = {}), a[u][s.id] = s, a
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function z1({
        store: e,
        select: t,
        onChange: r,
        comparator: n = j1
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, a = o(u), s = t(i());

        function u() {
            let v = t(i());
            if (v == null) {
                a();
                return
            }
            n(v, s) || (s = v, r(s, e))
        }
        return a
    }

    function Qh(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }

    function za({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((k, A) => k.concat(za({
            config: {
                target: A
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: s,
            queryDocument: u,
            getChildElements: v,
            getSiblingElements: E,
            matchSelector: d,
            elementContains: _,
            isSiblingNode: m
        } = i, {
            target: y
        } = e;
        if (!y) return [];
        let {
            id: I,
            objectId: R,
            selector: O,
            selectorGuids: L,
            appliesTo: C,
            useEventTarget: P
        } = Qh(y);
        if (R) return [oi.has(R) ? oi.get(R) : oi.set(R, {}).get(R)];
        if (C === Ko.PAGE) {
            let k = a(I);
            return k ? [k] : []
        }
        let M = (t ? .action ? .config ? .affectedElements ? ? {})[I || O] || {},
            K = !!(M.id || M.selector),
            j, Q, J, ne = t && s(Qh(t.target));
        if (K ? (j = M.limitAffectedElements, Q = ne, J = s(M)) : Q = J = s({
                id: I,
                selector: O,
                selectorGuids: L
            }), t && P) {
            let k = r && (J || P === !0) ? [r] : u(ne);
            if (J) {
                if (P === F1) return u(J).filter(A => k.some(G => _(A, G)));
                if (P === Yh) return u(J).filter(A => k.some(G => _(G, A)));
                if (P === $h) return u(J).filter(A => k.some(G => m(G, A)))
            }
            return k
        }
        return Q == null || J == null ? [] : Je && n ? u(J).filter(k => n.contains(k)) : j === Yh ? u(Q, J) : j === D1 ? v(u(Q)).filter(d(J)) : j === $h ? E(u(Q)).filter(d(J)) : u(J)
    }

    function K1({
        element: e,
        actionItem: t
    }) {
        if (!Je) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case lr:
            case fr:
            case dr:
            case pr:
            case fi:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function Q1(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: a
        } = n;
        if (Dt(a)) return qa(a)(t[a], n);
        switch (n.actionTypeId) {
            case sr:
            case ur:
            case cr:
            case Qr:
                return t[n.actionTypeId] || Ka[n.actionTypeId];
            case Zr:
                return Y1(t[n.actionTypeId], n.config.filters);
            case Jr:
                return $1(t[n.actionTypeId], n.config.fontVariations);
            case im:
                return {
                    value: (0, ht.default)(parseFloat(o(e, si)), 1)
                };
            case lr:
                {
                    let s = o(e, ct),
                        u = o(e, lt),
                        v, E;
                    return n.config.widthUnit === At ? v = Zh.test(s) ? parseFloat(s) : parseFloat(r.width) : v = (0, ht.default)(parseFloat(s), parseFloat(r.width)),
                    n.config.heightUnit === At ? E = Zh.test(u) ? parseFloat(u) : parseFloat(r.height) : E = (0, ht.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: v,
                        heightValue: E
                    }
                }
            case fr:
            case dr:
            case pr:
                return hD({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case fi:
                return {
                    value: (0, ht.default)(o(e, ui), r.display)
                };
            case k1:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function tD({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (Dt(t.actionTypeId)) return Da(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case sr:
            case ur:
            case cr:
            case Qr:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case lr:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: a,
                        heightUnit: s
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: v
                    } = t.config;
                    if (!Je) return {
                        widthValue: u,
                        heightValue: v
                    };
                    if (a === At) {
                        let E = n(e, ct);
                        i(e, ct, ""), u = o(e, "offsetWidth"), i(e, ct, E)
                    }
                    if (s === At) {
                        let E = n(e, lt);
                        i(e, lt, ""), v = o(e, "offsetHeight"), i(e, lt, E)
                    }
                    return {
                        widthValue: u,
                        heightValue: v
                    }
                }
            case fr:
            case dr:
            case pr:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a
                    } = t.config;
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a
                    }
                }
            case Zr:
                return t.config.filters.reduce(Z1, {});
            case Jr:
                return t.config.fontVariations.reduce(J1, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function sm(e) {
        if (/^TRANSFORM_/.test(e)) return rm;
        if (/^STYLE_/.test(e)) return Ba;
        if (/^GENERAL_/.test(e)) return Xa;
        if (/^PLUGIN_/.test(e)) return nm
    }

    function rD(e, t) {
        return e === Ba ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function nD(e, t, r, n, i, o, a, s, u) {
        switch (s) {
            case rm:
                return uD(e, t, r, i, a);
            case Ba:
                return mD(e, t, r, i, o, a);
            case Xa:
                return yD(e, i, a);
            case nm:
                {
                    let {
                        actionTypeId: v
                    } = i;
                    if (Dt(v)) return Fa(v)(u, t, i)
                }
        }
    }

    function uD(e, t, r, n, i) {
        let o = sD.map(s => {
                let u = Ka[s],
                    {
                        xValue: v = u.xValue,
                        yValue: E = u.yValue,
                        zValue: d = u.zValue,
                        xUnit: _ = "",
                        yUnit: m = "",
                        zUnit: y = ""
                    } = t[s] || {};
                switch (s) {
                    case sr:
                        return `${O1}(${v}${_}, ${E}${m}, ${d}${y})`;
                    case ur:
                        return `${A1}(${v}${_}, ${E}${m}, ${d}${y})`;
                    case cr:
                        return `${S1}(${v}${_}) ${R1}(${E}${m}) ${C1}(${d}${y})`;
                    case Qr:
                        return `${L1}(${v}${_}, ${E}${m})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: a
            } = i;
        Gt(e, Ot, i), a(e, Ot, o), fD(n, r) && a(e, ei, N1)
    }

    function cD(e, t, r, n) {
        let i = (0, ci.default)(t, (a, s, u) => `${a} ${u}(${s}${aD(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        Gt(e, Kr, n), o(e, Kr, i)
    }

    function lD(e, t, r, n) {
        let i = (0, ci.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
            {
                setStyle: o
            } = n;
        Gt(e, Yr, n), o(e, Yr, i)
    }

    function fD({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === sr && n !== void 0 || e === ur && n !== void 0 || e === cr && (t !== void 0 || r !== void 0)
    }

    function gD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function hD({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = ja[t],
            o = n(e, i),
            a = pD.test(o) ? o : r[i],
            s = gD(vD, a).split($r);
        return {
            rValue: (0, ht.default)(parseInt(s[0], 10), 255),
            gValue: (0, ht.default)(parseInt(s[1], 10), 255),
            bValue: (0, ht.default)(parseInt(s[2], 10), 255),
            aValue: (0, ht.default)(parseFloat(s[3]), 1)
        }
    }

    function mD(e, t, r, n, i, o) {
        let {
            setStyle: a
        } = o;
        switch (n.actionTypeId) {
            case lr:
                {
                    let {
                        widthUnit: s = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: v,
                        heightValue: E
                    } = r;v !== void 0 && (s === At && (s = "px"), Gt(e, ct, o), a(e, ct, v + s)),
                    E !== void 0 && (u === At && (u = "px"), Gt(e, lt, o), a(e, lt, E + u));
                    break
                }
            case Zr:
                {
                    cD(e, r, n.config, o);
                    break
                }
            case Jr:
                {
                    lD(e, r, n.config, o);
                    break
                }
            case fr:
            case dr:
            case pr:
                {
                    let s = ja[n.actionTypeId],
                        u = Math.round(r.rValue),
                        v = Math.round(r.gValue),
                        E = Math.round(r.bValue),
                        d = r.aValue;Gt(e, s, o),
                    a(e, s, d >= 1 ? `rgb(${u},${v},${E})` : `rgba(${u},${v},${E},${d})`);
                    break
                }
            default:
                {
                    let {
                        unit: s = ""
                    } = n.config;Gt(e, i, o),
                    a(e, i, r.value + s);
                    break
                }
        }
    }

    function yD(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case fi:
                {
                    let {
                        value: i
                    } = t.config;i === P1 && Je ? n(e, ui, Oa) : n(e, ui, i);
                    return
                }
        }
    }

    function Gt(e, t, r) {
        if (!Je) return;
        let n = am[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, ar);
        if (!a) {
            o(e, ar, n);
            return
        }
        let s = a.split($r).map(om);
        s.indexOf(n) === -1 && o(e, ar, s.concat(n).join($r))
    }

    function um(e, t, r) {
        if (!Je) return;
        let n = am[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, ar);
        !a || a.indexOf(n) === -1 || o(e, ar, a.split($r).map(om).filter(s => s !== n).join($r))
    }

    function ED({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let a = n[o],
                {
                    config: s
                } = a.action,
                {
                    actionListId: u
                } = s,
                v = i[u];
            v && Jh({
                actionList: v,
                event: a,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Jh({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Jh({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            em({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: a
            } = o;
            a.forEach(s => {
                em({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function em({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: a
            } = i, s;
            Dt(o) ? s = u => Ga(o)(u, i) : s = cm({
                effect: _D,
                actionTypeId: o,
                elementApi: r
            }), za({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        })
    }

    function bD(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === lr) {
            let {
                config: a
            } = t;
            a.widthUnit === At && n(e, ct, ""), a.heightUnit === At && n(e, lt, "")
        }
        i(e, ar) && cm({
            effect: um,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function _D(e, t, r) {
        let {
            setStyle: n
        } = r;
        um(e, t, r), n(e, t, ""), t === Ot && n(e, ei, "")
    }

    function lm(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, a = o.delay + o.duration;
            a >= t && (t = a, r = i)
        }), r
    }

    function ID(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, a = 0, s = 0;
        return r.forEach((u, v) => {
            if (n && v === 0) return;
            let {
                actionItems: E
            } = u, d = E[lm(E)], {
                config: _,
                actionTypeId: m
            } = d;
            i.id === d.id && (s = a + o);
            let y = sm(m) === Xa ? 0 : _.duration;
            a += _.delay + y
        }), a > 0 ? zr(s / a) : 0
    }

    function TD({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], a = s => (o.push((0, li.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })), s.id === t);
        return n && n.some(({
            actionItems: s
        }) => s.some(a)), i && i.some(s => {
            let {
                continuousActionGroups: u
            } = s;
            return u.some(({
                actionItems: v
            }) => v.some(a))
        }), (0, li.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function wD(e, {
        basedOn: t
    }) {
        return e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null) || e === Ze.MOUSE_MOVE && t === st.ELEMENT
    }

    function xD(e, t) {
        return e + G1 + t
    }

    function OD(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function AD(e, t) {
        return Wa(e && e.sort(), t && t.sort())
    }

    function SD(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Ha + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Ha + r + Ha + n
    }
    var ht, ci, ai, li, w1, x1, O1, A1, S1, R1, C1, L1, N1, P1, si, Kr, Yr, ct, lt, tm, M1, q1, Yh, D1, $h, F1, ui, ar, At, $r, G1, Ha, rm, Xa, Ba, nm, sr, ur, cr, Qr, im, Zr, Jr, lr, fr, dr, pr, fi, k1, om, ja, am, oi, V1, H1, j1, Zh, Y1, $1, Z1, J1, eD, Ka, iD, oD, aD, sD, dD, pD, vD, cm, dm = me(() => {
        "use strict";
        ht = de(Sh()), ci = de(Wh()), ai = de(jh()), li = de($t());
        Ve();
        Kh();
        Ra();
        ka();
        ti();
        ({
            BACKGROUND: w1,
            TRANSFORM: x1,
            TRANSLATE_3D: O1,
            SCALE_3D: A1,
            ROTATE_X: S1,
            ROTATE_Y: R1,
            ROTATE_Z: C1,
            SKEW: L1,
            PRESERVE_3D: N1,
            FLEX: P1,
            OPACITY: si,
            FILTER: Kr,
            FONT_VARIATION_SETTINGS: Yr,
            WIDTH: ct,
            HEIGHT: lt,
            BACKGROUND_COLOR: tm,
            BORDER_COLOR: M1,
            COLOR: q1,
            CHILDREN: Yh,
            IMMEDIATE_CHILDREN: D1,
            SIBLINGS: $h,
            PARENT: F1,
            DISPLAY: ui,
            WILL_CHANGE: ar,
            AUTO: At,
            COMMA_DELIMITER: $r,
            COLON_DELIMITER: G1,
            BAR_DELIMITER: Ha,
            RENDER_TRANSFORM: rm,
            RENDER_GENERAL: Xa,
            RENDER_STYLE: Ba,
            RENDER_PLUGIN: nm
        } = Le), {
            TRANSFORM_MOVE: sr,
            TRANSFORM_SCALE: ur,
            TRANSFORM_ROTATE: cr,
            TRANSFORM_SKEW: Qr,
            STYLE_OPACITY: im,
            STYLE_FILTER: Zr,
            STYLE_FONT_VARIATION: Jr,
            STYLE_SIZE: lr,
            STYLE_BACKGROUND_COLOR: fr,
            STYLE_BORDER: dr,
            STYLE_TEXT_COLOR: pr,
            GENERAL_DISPLAY: fi,
            OBJECT_VALUE: k1
        } = Ue, om = e => e.trim(), ja = Object.freeze({
            [fr]: tm,
            [dr]: M1,
            [pr]: q1
        }), am = Object.freeze({
            [Ot]: x1,
            [tm]: w1,
            [si]: si,
            [Kr]: Kr,
            [ct]: ct,
            [lt]: lt,
            [Yr]: Yr
        }), oi = new Map;
        V1 = 1;
        H1 = 1;
        j1 = (e, t) => e === t;
        Zh = /px/, Y1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = iD[n.type]), r), e || {}), $1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = oD[n.type] || n.defaultValue || 0), r), e || {});
        Z1 = (e, t) => (t && (e[t.type] = t.value || 0), e), J1 = (e, t) => (t && (e[t.type] = t.value || 0), e), eD = (e, t, r) => {
            if (Dt(e)) return Ma(e)(r, t);
            switch (e) {
                case Zr:
                    {
                        let n = (0, ai.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case Jr:
                    {
                        let n = (0, ai.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        Ka = {
            [sr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [ur]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [cr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Qr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, iD = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), oD = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), aD = (e, t) => {
            let r = (0, ai.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, sD = Object.keys(Ka);
        dD = "\\(([^)]+)\\)", pD = /^rgb/, vD = RegExp(`rgba?${dD}`);
        cm = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case sr:
                case ur:
                case cr:
                case Qr:
                    e(n, Ot, r);
                    break;
                case Zr:
                    e(n, Kr, r);
                    break;
                case Jr:
                    e(n, Yr, r);
                    break;
                case im:
                    e(n, si, r);
                    break;
                case lr:
                    e(n, ct, r), e(n, lt, r);
                    break;
                case fr:
                case dr:
                case pr:
                    e(n, ja[t], r);
                    break;
                case fi:
                    e(n, ui, r);
                    break
            }
        }
    });
    var kt = c(De => {
        "use strict";
        var vr = gn().default;
        Object.defineProperty(De, "__esModule", {
            value: !0
        });
        De.IX2VanillaUtils = De.IX2VanillaPlugins = De.IX2ElementsReducer = De.IX2Easings = De.IX2EasingUtils = De.IX2BrowserSupport = void 0;
        var RD = vr((ti(), nt(uh)));
        De.IX2BrowserSupport = RD;
        var CD = vr((Sa(), nt(jr)));
        De.IX2Easings = CD;
        var LD = vr((Ra(), nt(gh)));
        De.IX2EasingUtils = LD;
        var ND = vr((Eh(), nt(yh)));
        De.IX2ElementsReducer = ND;
        var PD = vr((ka(), nt(Oh)));
        De.IX2VanillaPlugins = PD;
        var MD = vr((dm(), nt(fm)));
        De.IX2VanillaUtils = MD
    });
    var pi, mt, qD, DD, FD, GD, kD, UD, di, pm, VD, WD, Ya, HD, XD, BD, jD, vm, gm = me(() => {
        "use strict";
        Ve();
        pi = de(kt()), mt = de($t()), {
            IX2_RAW_DATA_IMPORTED: qD,
            IX2_SESSION_STOPPED: DD,
            IX2_INSTANCE_ADDED: FD,
            IX2_INSTANCE_STARTED: GD,
            IX2_INSTANCE_REMOVED: kD,
            IX2_ANIMATION_FRAME_CHANGED: UD
        } = we, {
            optimizeFloat: di,
            applyEasing: pm,
            createBezierEasing: VD
        } = pi.IX2EasingUtils, {
            RENDER_GENERAL: WD
        } = Le, {
            getItemConfigByKey: Ya,
            getRenderType: HD,
            getStyleProp: XD
        } = pi.IX2VanillaUtils, BD = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: s,
                actionTypeId: u,
                customEasingFn: v,
                skipMotion: E,
                skipToValue: d
            } = e, {
                parameters: _
            } = t.payload, m = Math.max(1 - a, .01), y = _[n];
            y == null && (m = 1, y = s);
            let I = Math.max(y, 0) || 0,
                R = di(I - r),
                O = E ? d : di(r + R * m),
                L = O * 100;
            if (O === r && e.current) return e;
            let C, P, F, M;
            for (let j = 0, {
                    length: Q
                } = i; j < Q; j++) {
                let {
                    keyframe: J,
                    actionItems: ne
                } = i[j];
                if (j === 0 && (C = ne[0]), L >= J) {
                    C = ne[0];
                    let k = i[j + 1],
                        A = k && L !== J;
                    P = A ? k.actionItems[0] : null, A && (F = J / 100, M = (k.keyframe - J) / 100)
                }
            }
            let K = {};
            if (C && !P)
                for (let j = 0, {
                        length: Q
                    } = o; j < Q; j++) {
                    let J = o[j];
                    K[J] = Ya(u, J, C.config)
                } else if (C && P && F !== void 0 && M !== void 0) {
                    let j = (O - F) / M,
                        Q = C.config.easing,
                        J = pm(Q, j, v);
                    for (let ne = 0, {
                            length: k
                        } = o; ne < k; ne++) {
                        let A = o[ne],
                            G = Ya(u, A, C.config),
                            ee = (Ya(u, A, P.config) - G) * J + G;
                        K[A] = ee
                    }
                }
            return (0, mt.merge)(e, {
                position: O,
                current: K
            })
        }, jD = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: a,
                verbose: s,
                actionItem: u,
                destination: v,
                destinationKeys: E,
                pluginDuration: d,
                instanceDelay: _,
                customEasingFn: m,
                skipMotion: y
            } = e, I = u.config.easing, {
                duration: R,
                delay: O
            } = u.config;
            d != null && (R = d), O = _ ? ? O, a === WD ? R = 0 : (o || y) && (R = O = 0);
            let {
                now: L
            } = t.payload;
            if (r && n) {
                let C = L - (i + O);
                if (s) {
                    let j = L - i,
                        Q = R + O,
                        J = di(Math.min(Math.max(0, j / Q), 1));
                    e = (0, mt.set)(e, "verboseTimeElapsed", Q * J)
                }
                if (C < 0) return e;
                let P = di(Math.min(Math.max(0, C / R), 1)),
                    F = pm(I, P, m),
                    M = {},
                    K = null;
                return E.length && (K = E.reduce((j, Q) => {
                    let J = v[Q],
                        ne = parseFloat(n[Q]) || 0,
                        A = (parseFloat(J) - ne) * F + ne;
                    return j[Q] = A, j
                }, {})), M.current = K, M.position = P, P === 1 && (M.active = !1, M.complete = !0), (0, mt.merge)(e, M)
            }
            return e
        }, vm = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case qD:
                    return t.payload.ixInstances || Object.freeze({});
                case DD:
                    return Object.freeze({});
                case FD:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: v,
                            isCarrier: E,
                            origin: d,
                            destination: _,
                            immediate: m,
                            verbose: y,
                            continuous: I,
                            parameterId: R,
                            actionGroups: O,
                            smoothing: L,
                            restingValue: C,
                            pluginInstance: P,
                            pluginDuration: F,
                            instanceDelay: M,
                            skipMotion: K,
                            skipToValue: j
                        } = t.payload,
                        {
                            actionTypeId: Q
                        } = i,
                        J = HD(Q),
                        ne = XD(J, Q),
                        k = Object.keys(_).filter(G => _[G] != null && typeof _[G] != "string"),
                        {
                            easing: A
                        } = i.config;
                        return (0, mt.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: d,
                            destination: _,
                            destinationKeys: k,
                            immediate: m,
                            verbose: y,
                            current: null,
                            actionItem: i,
                            actionTypeId: Q,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: v,
                            renderType: J,
                            isCarrier: E,
                            styleProp: ne,
                            continuous: I,
                            parameterId: R,
                            actionGroups: O,
                            smoothing: L,
                            restingValue: C,
                            pluginInstance: P,
                            pluginDuration: F,
                            instanceDelay: M,
                            skipMotion: K,
                            skipToValue: j,
                            customEasingFn: Array.isArray(A) && A.length === 4 ? VD(A) : void 0
                        })
                    }
                case GD:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, mt.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case kD:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let a = 0; a < o; a++) {
                            let s = i[a];
                            s !== r && (n[s] = e[s])
                        }
                        return n
                    }
                case UD:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let a = n[o],
                                s = e[a],
                                u = s.continuous ? BD : jD;
                            r = (0, mt.set)(r, a, u(s, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var zD, KD, YD, hm, mm = me(() => {
        "use strict";
        Ve();
        ({
            IX2_RAW_DATA_IMPORTED: zD,
            IX2_SESSION_STOPPED: KD,
            IX2_PARAMETER_CHANGED: YD
        } = we), hm = (e = {}, t) => {
            switch (t.type) {
                case zD:
                    return t.payload.ixParameters || {};
                case KD:
                    return {};
                case YD:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var bm = {};
    ke(bm, {
        default: () => QD
    });
    var ym, Em, $D, QD, _m = me(() => {
        "use strict";
        ym = de(zo());
        Pf();
        ed();
        nd();
        Em = de(kt());
        gm();
        mm();
        ({
            ixElements: $D
        } = Em.IX2ElementsReducer), QD = (0, ym.combineReducers)({
            ixData: Nf,
            ixRequest: Jf,
            ixSession: rd,
            ixElements: $D,
            ixInstances: vm,
            ixParameters: hm
        })
    });
    var Tm = c((tj, Im) => {
        var ZD = Tt(),
            JD = Oe(),
            eF = vt(),
            tF = "[object String]";

        function rF(e) {
            return typeof e == "string" || !JD(e) && eF(e) && ZD(e) == tF
        }
        Im.exports = rF
    });
    var xm = c((rj, wm) => {
        var nF = _a(),
            iF = nF("length");
        wm.exports = iF
    });
    var Am = c((nj, Om) => {
        var oF = "\\ud800-\\udfff",
            aF = "\\u0300-\\u036f",
            sF = "\\ufe20-\\ufe2f",
            uF = "\\u20d0-\\u20ff",
            cF = aF + sF + uF,
            lF = "\\ufe0e\\ufe0f",
            fF = "\\u200d",
            dF = RegExp("[" + fF + oF + cF + lF + "]");

        function pF(e) {
            return dF.test(e)
        }
        Om.exports = pF
    });
    var Dm = c((ij, qm) => {
        var Rm = "\\ud800-\\udfff",
            vF = "\\u0300-\\u036f",
            gF = "\\ufe20-\\ufe2f",
            hF = "\\u20d0-\\u20ff",
            mF = vF + gF + hF,
            yF = "\\ufe0e\\ufe0f",
            EF = "[" + Rm + "]",
            $a = "[" + mF + "]",
            Qa = "\\ud83c[\\udffb-\\udfff]",
            bF = "(?:" + $a + "|" + Qa + ")",
            Cm = "[^" + Rm + "]",
            Lm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Nm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            _F = "\\u200d",
            Pm = bF + "?",
            Mm = "[" + yF + "]?",
            IF = "(?:" + _F + "(?:" + [Cm, Lm, Nm].join("|") + ")" + Mm + Pm + ")*",
            TF = Mm + Pm + IF,
            wF = "(?:" + [Cm + $a + "?", $a, Lm, Nm, EF].join("|") + ")",
            Sm = RegExp(Qa + "(?=" + Qa + ")|" + wF + TF, "g");

        function xF(e) {
            for (var t = Sm.lastIndex = 0; Sm.test(e);) ++t;
            return t
        }
        qm.exports = xF
    });
    var Gm = c((oj, Fm) => {
        var OF = xm(),
            AF = Am(),
            SF = Dm();

        function RF(e) {
            return AF(e) ? SF(e) : OF(e)
        }
        Fm.exports = RF
    });
    var Um = c((aj, km) => {
        var CF = Bn(),
            LF = jn(),
            NF = Mt(),
            PF = Tm(),
            MF = Gm(),
            qF = "[object Map]",
            DF = "[object Set]";

        function FF(e) {
            if (e == null) return 0;
            if (NF(e)) return PF(e) ? MF(e) : e.length;
            var t = LF(e);
            return t == qF || t == DF ? e.size : CF(e).length
        }
        km.exports = FF
    });
    var Wm = c((sj, Vm) => {
        var GF = "Expected a function";

        function kF(e) {
            if (typeof e != "function") throw new TypeError(GF);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Vm.exports = kF
    });
    var Za = c((uj, Hm) => {
        var UF = wt(),
            VF = function() {
                try {
                    var e = UF(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Hm.exports = VF
    });
    var Ja = c((cj, Bm) => {
        var Xm = Za();

        function WF(e, t, r) {
            t == "__proto__" && Xm ? Xm(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Bm.exports = WF
    });
    var zm = c((lj, jm) => {
        var HF = Ja(),
            XF = qn(),
            BF = Object.prototype,
            jF = BF.hasOwnProperty;

        function zF(e, t, r) {
            var n = e[t];
            (!(jF.call(e, t) && XF(n, r)) || r === void 0 && !(t in e)) && HF(e, t, r)
        }
        jm.exports = zF
    });
    var $m = c((fj, Ym) => {
        var KF = zm(),
            YF = Hr(),
            $F = Vn(),
            Km = ut(),
            QF = ir();

        function ZF(e, t, r, n) {
            if (!Km(e)) return e;
            t = YF(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var u = QF(t[i]),
                    v = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != a) {
                    var E = s[u];
                    v = n ? n(E, u, s) : void 0, v === void 0 && (v = Km(E) ? E : $F(t[i + 1]) ? [] : {})
                }
                KF(s, u, v), s = s[u]
            }
            return e
        }
        Ym.exports = ZF
    });
    var Zm = c((dj, Qm) => {
        var JF = Yn(),
            e2 = $m(),
            t2 = Hr();

        function r2(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n],
                    s = JF(e, a);
                r(s, a) && e2(o, t2(a, e), s)
            }
            return o
        }
        Qm.exports = r2
    });
    var ey = c((pj, Jm) => {
        var n2 = kn(),
            i2 = Mo(),
            o2 = aa(),
            a2 = oa(),
            s2 = Object.getOwnPropertySymbols,
            u2 = s2 ? function(e) {
                for (var t = []; e;) n2(t, o2(e)), e = i2(e);
                return t
            } : a2;
        Jm.exports = u2
    });
    var ry = c((vj, ty) => {
        function c2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        ty.exports = c2
    });
    var iy = c((gj, ny) => {
        var l2 = ut(),
            f2 = Xn(),
            d2 = ry(),
            p2 = Object.prototype,
            v2 = p2.hasOwnProperty;

        function g2(e) {
            if (!l2(e)) return d2(e);
            var t = f2(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !v2.call(e, n)) || r.push(n);
            return r
        }
        ny.exports = g2
    });
    var ay = c((hj, oy) => {
        var h2 = ua(),
            m2 = iy(),
            y2 = Mt();

        function E2(e) {
            return y2(e) ? h2(e, !0) : m2(e)
        }
        oy.exports = E2
    });
    var uy = c((mj, sy) => {
        var b2 = ia(),
            _2 = ey(),
            I2 = ay();

        function T2(e) {
            return b2(e, I2, _2)
        }
        sy.exports = T2
    });
    var ly = c((yj, cy) => {
        var w2 = ba(),
            x2 = xt(),
            O2 = Zm(),
            A2 = uy();

        function S2(e, t) {
            if (e == null) return {};
            var r = w2(A2(e), function(n) {
                return [n]
            });
            return t = x2(t), O2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        cy.exports = S2
    });
    var dy = c((Ej, fy) => {
        var R2 = xt(),
            C2 = Wm(),
            L2 = ly();

        function N2(e, t) {
            return L2(e, C2(R2(t)))
        }
        fy.exports = N2
    });
    var vy = c((bj, py) => {
        var P2 = Bn(),
            M2 = jn(),
            q2 = Fr(),
            D2 = Oe(),
            F2 = Mt(),
            G2 = Un(),
            k2 = Xn(),
            U2 = Hn(),
            V2 = "[object Map]",
            W2 = "[object Set]",
            H2 = Object.prototype,
            X2 = H2.hasOwnProperty;

        function B2(e) {
            if (e == null) return !0;
            if (F2(e) && (D2(e) || typeof e == "string" || typeof e.splice == "function" || G2(e) || U2(e) || q2(e))) return !e.length;
            var t = M2(e);
            if (t == V2 || t == W2) return !e.size;
            if (k2(e)) return !P2(e).length;
            for (var r in e)
                if (X2.call(e, r)) return !1;
            return !0
        }
        py.exports = B2
    });
    var hy = c((_j, gy) => {
        var j2 = Ja(),
            z2 = Ua(),
            K2 = xt();

        function Y2(e, t) {
            var r = {};
            return t = K2(t, 3), z2(e, function(n, i, o) {
                j2(r, i, t(n, i, o))
            }), r
        }
        gy.exports = Y2
    });
    var yy = c((Ij, my) => {
        function $2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        my.exports = $2
    });
    var by = c((Tj, Ey) => {
        var Q2 = Qn();

        function Z2(e) {
            return typeof e == "function" ? e : Q2
        }
        Ey.exports = Z2
    });
    var Iy = c((wj, _y) => {
        var J2 = yy(),
            eG = Va(),
            tG = by(),
            rG = Oe();

        function nG(e, t) {
            var r = rG(e) ? J2 : eG;
            return r(e, tG(t))
        }
        _y.exports = nG
    });
    var wy = c((xj, Ty) => {
        var iG = Qe(),
            oG = function() {
                return iG.Date.now()
            };
        Ty.exports = oG
    });
    var Ay = c((Oj, Oy) => {
        var aG = ut(),
            es = wy(),
            xy = Zn(),
            sG = "Expected a function",
            uG = Math.max,
            cG = Math.min;

        function lG(e, t, r) {
            var n, i, o, a, s, u, v = 0,
                E = !1,
                d = !1,
                _ = !0;
            if (typeof e != "function") throw new TypeError(sG);
            t = xy(t) || 0, aG(r) && (E = !!r.leading, d = "maxWait" in r, o = d ? uG(xy(r.maxWait) || 0, t) : o, _ = "trailing" in r ? !!r.trailing : _);

            function m(M) {
                var K = n,
                    j = i;
                return n = i = void 0, v = M, a = e.apply(j, K), a
            }

            function y(M) {
                return v = M, s = setTimeout(O, t), E ? m(M) : a
            }

            function I(M) {
                var K = M - u,
                    j = M - v,
                    Q = t - K;
                return d ? cG(Q, o - j) : Q
            }

            function R(M) {
                var K = M - u,
                    j = M - v;
                return u === void 0 || K >= t || K < 0 || d && j >= o
            }

            function O() {
                var M = es();
                if (R(M)) return L(M);
                s = setTimeout(O, I(M))
            }

            function L(M) {
                return s = void 0, _ && n ? m(M) : (n = i = void 0, a)
            }

            function C() {
                s !== void 0 && clearTimeout(s), v = 0, n = u = i = s = void 0
            }

            function P() {
                return s === void 0 ? a : L(es())
            }

            function F() {
                var M = es(),
                    K = R(M);
                if (n = arguments, i = this, u = M, K) {
                    if (s === void 0) return y(u);
                    if (d) return clearTimeout(s), s = setTimeout(O, t), m(u)
                }
                return s === void 0 && (s = setTimeout(O, t)), a
            }
            return F.cancel = C, F.flush = P, F
        }
        Oy.exports = lG
    });
    var Ry = c((Aj, Sy) => {
        var fG = Ay(),
            dG = ut(),
            pG = "Expected a function";

        function vG(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(pG);
            return dG(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), fG(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        Sy.exports = vG
    });
    var Ly = {};
    ke(Ly, {
        actionListPlaybackChanged: () => hr,
        animationFrameChanged: () => gi,
        clearRequested: () => kG,
        elementStateChanged: () => us,
        eventListenerAdded: () => vi,
        eventStateChanged: () => os,
        instanceAdded: () => as,
        instanceRemoved: () => ss,
        instanceStarted: () => hi,
        mediaQueriesDefined: () => ls,
        parameterChanged: () => gr,
        playbackRequested: () => FG,
        previewRequested: () => DG,
        rawDataImported: () => ts,
        sessionInitialized: () => rs,
        sessionStarted: () => ns,
        sessionStopped: () => is,
        stopRequested: () => GG,
        testFrameRendered: () => UG,
        viewportWidthChanged: () => cs
    });
    var Cy, gG, hG, mG, yG, EG, bG, _G, IG, TG, wG, xG, OG, AG, SG, RG, CG, LG, NG, PG, MG, qG, ts, rs, ns, is, DG, FG, GG, kG, vi, UG, os, gi, gr, as, hi, ss, us, hr, cs, ls, mi = me(() => {
        "use strict";
        Ve();
        Cy = de(kt()), {
            IX2_RAW_DATA_IMPORTED: gG,
            IX2_SESSION_INITIALIZED: hG,
            IX2_SESSION_STARTED: mG,
            IX2_SESSION_STOPPED: yG,
            IX2_PREVIEW_REQUESTED: EG,
            IX2_PLAYBACK_REQUESTED: bG,
            IX2_STOP_REQUESTED: _G,
            IX2_CLEAR_REQUESTED: IG,
            IX2_EVENT_LISTENER_ADDED: TG,
            IX2_TEST_FRAME_RENDERED: wG,
            IX2_EVENT_STATE_CHANGED: xG,
            IX2_ANIMATION_FRAME_CHANGED: OG,
            IX2_PARAMETER_CHANGED: AG,
            IX2_INSTANCE_ADDED: SG,
            IX2_INSTANCE_STARTED: RG,
            IX2_INSTANCE_REMOVED: CG,
            IX2_ELEMENT_STATE_CHANGED: LG,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: NG,
            IX2_VIEWPORT_WIDTH_CHANGED: PG,
            IX2_MEDIA_QUERIES_DEFINED: MG
        } = we, {
            reifyState: qG
        } = Cy.IX2VanillaUtils, ts = e => ({
            type: gG,
            payload: { ...qG(e)
            }
        }), rs = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: hG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), ns = () => ({
            type: mG
        }), is = () => ({
            type: yG
        }), DG = ({
            rawData: e,
            defer: t
        }) => ({
            type: EG,
            payload: {
                defer: t,
                rawData: e
            }
        }), FG = ({
            actionTypeId: e = Ue.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: s,
            rawData: u
        }) => ({
            type: bG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }), GG = e => ({
            type: _G,
            payload: {
                actionListId: e
            }
        }), kG = () => ({
            type: IG
        }), vi = (e, t) => ({
            type: TG,
            payload: {
                target: e,
                listenerParams: t
            }
        }), UG = (e = 1) => ({
            type: wG,
            payload: {
                step: e
            }
        }), os = (e, t) => ({
            type: xG,
            payload: {
                stateKey: e,
                newState: t
            }
        }), gi = (e, t) => ({
            type: OG,
            payload: {
                now: e,
                parameters: t
            }
        }), gr = (e, t) => ({
            type: AG,
            payload: {
                key: e,
                value: t
            }
        }), as = e => ({
            type: SG,
            payload: { ...e
            }
        }), hi = (e, t) => ({
            type: RG,
            payload: {
                instanceId: e,
                time: t
            }
        }), ss = e => ({
            type: CG,
            payload: {
                instanceId: e
            }
        }), us = (e, t, r, n) => ({
            type: LG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), hr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: NG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), cs = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: PG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), ls = () => ({
            type: MG
        })
    });
    var Fe = {};
    ke(Fe, {
        elementContains: () => ps,
        getChildElements: () => $G,
        getClosestElement: () => en,
        getProperty: () => BG,
        getQuerySelector: () => ds,
        getRefType: () => vs,
        getSiblingElements: () => QG,
        getStyle: () => XG,
        getValidDocument: () => zG,
        isSiblingNode: () => YG,
        matchSelector: () => jG,
        queryDocument: () => KG,
        setStyle: () => HG
    });

    function HG(e, t, r) {
        e.style[t] = r
    }

    function XG(e, t) {
        return e.style[t]
    }

    function BG(e, t) {
        return e[t]
    }

    function jG(e) {
        return t => t[fs](e)
    }

    function ds({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(Ny) !== -1) {
                let n = e.split(Ny),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(My)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function zG(e) {
        return e == null || e === document.documentElement.getAttribute(My) ? document : null
    }

    function KG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function ps(e, t) {
        return e.contains(t)
    }

    function YG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function $G(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function QG(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function vs(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? VG : WG : null
    }
    var Py, fs, Ny, VG, WG, My, en, qy = me(() => {
        "use strict";
        Py = de(kt());
        Ve();
        ({
            ELEMENT_MATCHES: fs
        } = Py.IX2BrowserSupport), {
            IX2_ID_DELIMITER: Ny,
            HTML_ELEMENT: VG,
            PLAIN_OBJECT: WG,
            WF_PAGE: My
        } = Le;
        en = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[fs] && r[fs](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var gs = c((Cj, Fy) => {
        var ZG = ut(),
            Dy = Object.create,
            JG = function() {
                function e() {}
                return function(t) {
                    if (!ZG(t)) return {};
                    if (Dy) return Dy(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        Fy.exports = JG
    });
    var yi = c((Lj, Gy) => {
        function ek() {}
        Gy.exports = ek
    });
    var bi = c((Nj, ky) => {
        var tk = gs(),
            rk = yi();

        function Ei(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        Ei.prototype = tk(rk.prototype);
        Ei.prototype.constructor = Ei;
        ky.exports = Ei
    });
    var Hy = c((Pj, Wy) => {
        var Uy = zt(),
            nk = Fr(),
            ik = Oe(),
            Vy = Uy ? Uy.isConcatSpreadable : void 0;

        function ok(e) {
            return ik(e) || nk(e) || !!(Vy && e && e[Vy])
        }
        Wy.exports = ok
    });
    var jy = c((Mj, By) => {
        var ak = kn(),
            sk = Hy();

        function Xy(e, t, r, n, i) {
            var o = -1,
                a = e.length;
            for (r || (r = sk), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? Xy(s, t - 1, r, n, i) : ak(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        By.exports = Xy
    });
    var Ky = c((qj, zy) => {
        var uk = jy();

        function ck(e) {
            var t = e == null ? 0 : e.length;
            return t ? uk(e, 1) : []
        }
        zy.exports = ck
    });
    var $y = c((Dj, Yy) => {
        function lk(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Yy.exports = lk
    });
    var Jy = c((Fj, Zy) => {
        var fk = $y(),
            Qy = Math.max;

        function dk(e, t, r) {
            return t = Qy(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = Qy(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
                    return s[t] = r(a), fk(e, this, s)
                }
        }
        Zy.exports = dk
    });
    var tE = c((Gj, eE) => {
        function pk(e) {
            return function() {
                return e
            }
        }
        eE.exports = pk
    });
    var iE = c((kj, nE) => {
        var vk = tE(),
            rE = Za(),
            gk = Qn(),
            hk = rE ? function(e, t) {
                return rE(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: vk(t),
                    writable: !0
                })
            } : gk;
        nE.exports = hk
    });
    var aE = c((Uj, oE) => {
        var mk = 800,
            yk = 16,
            Ek = Date.now;

        function bk(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = Ek(),
                    i = yk - (n - r);
                if (r = n, i > 0) {
                    if (++t >= mk) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        oE.exports = bk
    });
    var uE = c((Vj, sE) => {
        var _k = iE(),
            Ik = aE(),
            Tk = Ik(_k);
        sE.exports = Tk
    });
    var lE = c((Wj, cE) => {
        var wk = Ky(),
            xk = Jy(),
            Ok = uE();

        function Ak(e) {
            return Ok(xk(e, void 0, wk), e + "")
        }
        cE.exports = Ak
    });
    var pE = c((Hj, dE) => {
        var fE = ca(),
            Sk = fE && new fE;
        dE.exports = Sk
    });
    var gE = c((Xj, vE) => {
        function Rk() {}
        vE.exports = Rk
    });
    var hs = c((Bj, mE) => {
        var hE = pE(),
            Ck = gE(),
            Lk = hE ? function(e) {
                return hE.get(e)
            } : Ck;
        mE.exports = Lk
    });
    var EE = c((jj, yE) => {
        var Nk = {};
        yE.exports = Nk
    });
    var ms = c((zj, _E) => {
        var bE = EE(),
            Pk = Object.prototype,
            Mk = Pk.hasOwnProperty;

        function qk(e) {
            for (var t = e.name + "", r = bE[t], n = Mk.call(bE, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        _E.exports = qk
    });
    var Ii = c((Kj, IE) => {
        var Dk = gs(),
            Fk = yi(),
            Gk = 4294967295;

        function _i(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Gk, this.__views__ = []
        }
        _i.prototype = Dk(Fk.prototype);
        _i.prototype.constructor = _i;
        IE.exports = _i
    });
    var wE = c((Yj, TE) => {
        function kk(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        TE.exports = kk
    });
    var OE = c(($j, xE) => {
        var Uk = Ii(),
            Vk = bi(),
            Wk = wE();

        function Hk(e) {
            if (e instanceof Uk) return e.clone();
            var t = new Vk(e.__wrapped__, e.__chain__);
            return t.__actions__ = Wk(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        xE.exports = Hk
    });
    var RE = c((Qj, SE) => {
        var Xk = Ii(),
            AE = bi(),
            Bk = yi(),
            jk = Oe(),
            zk = vt(),
            Kk = OE(),
            Yk = Object.prototype,
            $k = Yk.hasOwnProperty;

        function Ti(e) {
            if (zk(e) && !jk(e) && !(e instanceof Xk)) {
                if (e instanceof AE) return e;
                if ($k.call(e, "__wrapped__")) return Kk(e)
            }
            return new AE(e)
        }
        Ti.prototype = Bk.prototype;
        Ti.prototype.constructor = Ti;
        SE.exports = Ti
    });
    var LE = c((Zj, CE) => {
        var Qk = Ii(),
            Zk = hs(),
            Jk = ms(),
            eU = RE();

        function tU(e) {
            var t = Jk(e),
                r = eU[t];
            if (typeof r != "function" || !(t in Qk.prototype)) return !1;
            if (e === r) return !0;
            var n = Zk(r);
            return !!n && e === n[0]
        }
        CE.exports = tU
    });
    var qE = c((Jj, ME) => {
        var NE = bi(),
            rU = lE(),
            nU = hs(),
            ys = ms(),
            iU = Oe(),
            PE = LE(),
            oU = "Expected a function",
            aU = 8,
            sU = 32,
            uU = 128,
            cU = 256;

        function lU(e) {
            return rU(function(t) {
                var r = t.length,
                    n = r,
                    i = NE.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(oU);
                    if (i && !a && ys(o) == "wrapper") var a = new NE([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var s = ys(o),
                        u = s == "wrapper" ? nU(o) : void 0;
                    u && PE(u[0]) && u[1] == (uU | aU | sU | cU) && !u[4].length && u[9] == 1 ? a = a[ys(u[0])].apply(a, u[3]) : a = o.length == 1 && PE(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var v = arguments,
                        E = v[0];
                    if (a && v.length == 1 && iU(E)) return a.plant(E).value();
                    for (var d = 0, _ = r ? t[d].apply(this, v) : E; ++d < r;) _ = t[d].call(this, _);
                    return _
                }
            })
        }
        ME.exports = lU
    });
    var FE = c((ez, DE) => {
        var fU = qE(),
            dU = fU();
        DE.exports = dU
    });
    var kE = c((tz, GE) => {
        function pU(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        GE.exports = pU
    });
    var VE = c((rz, UE) => {
        var vU = kE(),
            Es = Zn();

        function gU(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Es(r), r = r === r ? r : 0), t !== void 0 && (t = Es(t), t = t === t ? t : 0), vU(Es(e), t, r)
        }
        UE.exports = gU
    });
    var $E, QE, ZE, JE, hU, mU, yU, EU, bU, _U, IU, TU, wU, xU, OU, AU, SU, RU, CU, eb, tb, LU, NU, PU, rb, MU, qU, nb, DU, bs, ib, WE, HE, ob, rn, FU, ft, ab, GU, He, et, nn, sb, _s, XE, Is, kU, tn, UU, VU, WU, ub, BE, HU, jE, XU, BU, jU, zE, wi, xi, KE, YE, cb, lb = me(() => {
        "use strict";
        $E = de(FE()), QE = de($n()), ZE = de(VE());
        Ve();
        Ts();
        mi();
        JE = de(kt()), {
            MOUSE_CLICK: hU,
            MOUSE_SECOND_CLICK: mU,
            MOUSE_DOWN: yU,
            MOUSE_UP: EU,
            MOUSE_OVER: bU,
            MOUSE_OUT: _U,
            DROPDOWN_CLOSE: IU,
            DROPDOWN_OPEN: TU,
            SLIDER_ACTIVE: wU,
            SLIDER_INACTIVE: xU,
            TAB_ACTIVE: OU,
            TAB_INACTIVE: AU,
            NAVBAR_CLOSE: SU,
            NAVBAR_OPEN: RU,
            MOUSE_MOVE: CU,
            PAGE_SCROLL_DOWN: eb,
            SCROLL_INTO_VIEW: tb,
            SCROLL_OUT_OF_VIEW: LU,
            PAGE_SCROLL_UP: NU,
            SCROLLING_IN_VIEW: PU,
            PAGE_FINISH: rb,
            ECOMMERCE_CART_CLOSE: MU,
            ECOMMERCE_CART_OPEN: qU,
            PAGE_START: nb,
            PAGE_SCROLL: DU
        } = Ze, bs = "COMPONENT_ACTIVE", ib = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: WE
        } = Le, {
            getNamespacedParameterId: HE
        } = JE.IX2VanillaUtils, ob = e => t => typeof t == "object" && e(t) ? !0 : t, rn = ob(({
            element: e,
            nativeEvent: t
        }) => e === t.target), FU = ob(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), ft = (0, $E.default)([rn, FU]), ab = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !kU[i.eventTypeId]) return i
            }
            return null
        }, GU = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!ab(e, n)
        }, He = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: a
            } = t, {
                actionListId: s,
                autoStopEventId: u
            } = o.config, v = ab(e, u);
            return v && mr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + WE + n.split(WE)[1],
                actionListId: (0, QE.default)(v, "action.config.actionListId")
            }), mr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), on({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), i
        }, et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, nn = {
            handler: et(ft, He)
        }, sb = { ...nn,
            types: [bs, ib].join(" ")
        }, _s = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], XE = "mouseover mouseout", Is = {
            types: _s
        }, kU = {
            PAGE_START: nb,
            PAGE_FINISH: rb
        }, tn = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, ZE.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), UU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), VU = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }, WU = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = tn(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return UU(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, ub = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [bs, ib].indexOf(n) !== -1 ? n === bs : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, BE = e => (t, r) => {
            let n = {
                elementHovered: VU(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, HU = e => (t, r) => {
            let n = { ...r,
                elementVisible: WU(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, jE = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = tn(), {
                event: {
                    config: a,
                    eventTypeId: s
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: v
            } = a, E = v === "PX", d = i - o, _ = Number((n / d).toFixed(2));
            if (r && r.percentTop === _) return r;
            let m = (E ? u : o * (u || 0) / 100) / d,
                y, I, R = 0;
            r && (y = _ > r.percentTop, I = r.scrollingDown !== y, R = I ? _ : r.anchorTop);
            let O = s === eb ? _ >= R + m : _ <= R - m,
                L = { ...r,
                    percentTop: _,
                    inBounds: O,
                    anchorTop: R,
                    scrollingDown: y
                };
            return r && O && (I || L.inBounds !== r.inBounds) && e(t, L) || L
        }, XU = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, BU = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, jU = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, zE = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, wi = (e = !0) => ({ ...sb,
            handler: et(e ? ft : rn, ub((t, r) => r.isActive ? nn.handler(t, r) : r))
        }), xi = (e = !0) => ({ ...sb,
            handler: et(e ? ft : rn, ub((t, r) => r.isActive ? r : nn.handler(t, r)))
        }), KE = { ...Is,
            handler: HU((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: a
                } = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === tb === r ? (He(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, YE = .05, cb = {
            [wU]: wi(),
            [xU]: xi(),
            [TU]: wi(),
            [IU]: xi(),
            [RU]: wi(!1),
            [SU]: xi(!1),
            [OU]: wi(),
            [AU]: xi(),
            [qU]: {
                types: "ecommerce-cart-open",
                handler: et(ft, He)
            },
            [MU]: {
                types: "ecommerce-cart-close",
                handler: et(ft, He)
            },
            [hU]: {
                types: "click",
                handler: et(ft, zE((e, {
                    clickCount: t
                }) => {
                    GU(e) ? t === 1 && He(e) : He(e)
                }))
            },
            [mU]: {
                types: "click",
                handler: et(ft, zE((e, {
                    clickCount: t
                }) => {
                    t === 2 && He(e)
                }))
            },
            [yU]: { ...nn,
                types: "mousedown"
            },
            [EU]: { ...nn,
                types: "mouseup"
            },
            [bU]: {
                types: XE,
                handler: et(ft, BE((e, t) => {
                    t.elementHovered && He(e)
                }))
            },
            [_U]: {
                types: XE,
                handler: et(ft, BE((e, t) => {
                    t.elementHovered || He(e)
                }))
            },
            [CU]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: a,
                        selectedAxis: s,
                        continuousParameterGroupId: u,
                        reverse: v,
                        restingState: E = 0
                    } = r, {
                        clientX: d = o.clientX,
                        clientY: _ = o.clientY,
                        pageX: m = o.pageX,
                        pageY: y = o.pageY
                    } = n, I = s === "X_AXIS", R = n.type === "mouseout", O = E / 100, L = u, C = !1;
                    switch (a) {
                        case st.VIEWPORT:
                            {
                                O = I ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case st.PAGE:
                            {
                                let {
                                    scrollLeft: P,
                                    scrollTop: F,
                                    scrollWidth: M,
                                    scrollHeight: K
                                } = tn();O = I ? Math.min(P + m, M) / M : Math.min(F + y, K) / K;
                                break
                            }
                        case st.ELEMENT:
                        default:
                            {
                                L = HE(i, u);
                                let P = n.type.indexOf("mouse") === 0;
                                if (P && ft({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let F = t.getBoundingClientRect(),
                                    {
                                        left: M,
                                        top: K,
                                        width: j,
                                        height: Q
                                    } = F;
                                if (!P && !XU({
                                        left: d,
                                        top: _
                                    }, F)) break;C = !0,
                                O = I ? (d - M) / j : (_ - K) / Q;
                                break
                            }
                    }
                    return R && (O > 1 - YE || O < YE) && (O = Math.round(O)), (a !== st.ELEMENT || C || C !== o.elementHovered) && (O = v ? 1 - O : O, e.dispatch(gr(L, O))), {
                        elementHovered: C,
                        clientX: d,
                        clientY: _,
                        pageX: m,
                        pageY: y
                    }
                }
            },
            [DU]: {
                types: _s,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: a
                    } = tn(), s = i / (o - a);
                    s = n ? 1 - s : s, e.dispatch(gr(r, s))
                }
            },
            [PU]: {
                types: _s,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: a,
                        scrollWidth: s,
                        scrollHeight: u,
                        clientHeight: v
                    } = tn(), {
                        basedOn: E,
                        selectedAxis: d,
                        continuousParameterGroupId: _,
                        startsEntering: m,
                        startsExiting: y,
                        addEndOffset: I,
                        addStartOffset: R,
                        addOffsetValue: O = 0,
                        endOffsetValue: L = 0
                    } = r, C = d === "X_AXIS";
                    if (E === st.VIEWPORT) {
                        let P = C ? o / s : a / u;
                        return P !== i.scrollPercent && t.dispatch(gr(_, P)), {
                            scrollPercent: P
                        }
                    } else {
                        let P = HE(n, _),
                            F = e.getBoundingClientRect(),
                            M = (R ? O : 0) / 100,
                            K = (I ? L : 0) / 100;
                        M = m ? M : 1 - M, K = y ? K : 1 - K;
                        let j = F.top + Math.min(F.height * M, v),
                            J = F.top + F.height * K - j,
                            ne = Math.min(v + J, u),
                            A = Math.min(Math.max(0, v - j), ne) / ne;
                        return A !== i.scrollPercent && t.dispatch(gr(P, A)), {
                            scrollPercent: A
                        }
                    }
                }
            },
            [tb]: KE,
            [LU]: KE,
            [eb]: { ...Is,
                handler: jE((e, t) => {
                    t.scrollingDown && He(e)
                })
            },
            [NU]: { ...Is,
                handler: jE((e, t) => {
                    t.scrollingDown || He(e)
                })
            },
            [rb]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(rn, BU(He))
            },
            [nb]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(rn, jU(He))
            }
        }
    });
    var Ab = {};
    ke(Ab, {
        observeRequests: () => dV,
        startActionGroup: () => on,
        startEngine: () => Li,
        stopActionGroup: () => mr,
        stopAllActionGroups: () => wb,
        stopEngine: () => Ni
    });

    function dV(e) {
        Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: gV
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: hV
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: mV
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: yV
        })
    }

    function pV(e) {
        Ut({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Ni(e), bb({
                    store: e,
                    elementApi: Fe
                }), Li({
                    store: e,
                    allowEvents: !0
                }), _b()
            }
        })
    }

    function vV(e, t) {
        let r = Ut({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function gV({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Li({
                store: r,
                rawData: e,
                allowEvents: !0
            }), _b()
        };
        t ? setTimeout(n, 0) : n()
    }

    function _b() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function hV(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: s,
            testManual: u,
            verbose: v = !0
        } = e, {
            rawData: E
        } = e;
        if (n && i && E && s) {
            let d = E.actionLists[n];
            d && (E = tV({
                actionList: d,
                actionItemId: i,
                rawData: E
            }))
        }
        if (Li({
                store: t,
                rawData: E,
                allowEvents: a,
                testManual: u
            }), n && r === Ue.GENERAL_START_ACTION || ws(r)) {
            mr({
                store: t,
                actionListId: n
            }), Tb({
                store: t,
                actionListId: n,
                eventId: o
            });
            let d = on({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: v
            });
            v && d && t.dispatch(hr({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }

    function mV({
        actionListId: e
    }, t) {
        e ? mr({
            store: t,
            actionListId: e
        }) : wb({
            store: t
        }), Ni(t)
    }

    function yV(e, t) {
        Ni(t), bb({
            store: t,
            elementApi: Fe
        })
    }

    function Li({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(ts(t)), i.active || (e.dispatch(rs({
            hasBoundaryNodes: !!document.querySelector(Ai),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (wV(e), EV(), e.getState().ixSession.hasDefinedMediaQueries && pV(e)), e.dispatch(ns()), bV(e, n))
    }

    function EV() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(fb) === -1 && (e.className += ` ${fb}`)
    }

    function bV(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(gi(n, o)), t ? vV(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Ni(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(_V), oV(), e.dispatch(is())
        }
    }

    function _V({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function IV({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: s,
        restingValue: u
    }) {
        let {
            ixData: v,
            ixSession: E
        } = e.getState(), {
            events: d
        } = v, _ = d[n], {
            eventTypeId: m
        } = _, y = {}, I = {}, R = [], {
            continuousActionGroups: O
        } = a, {
            id: L
        } = a;
        rV(m, i) && (L = nV(t, L));
        let C = E.hasBoundaryNodes && r ? en(r, Ai) : null;
        O.forEach(P => {
            let {
                keyframe: F,
                actionItems: M
            } = P;
            M.forEach(K => {
                let {
                    actionTypeId: j
                } = K, {
                    target: Q
                } = K.config;
                if (!Q) return;
                let J = Q.boundaryMode ? C : null,
                    ne = aV(Q) + xs + j;
                if (I[ne] = TV(I[ne], F, K), !y[ne]) {
                    y[ne] = !0;
                    let {
                        config: k
                    } = K;
                    Si({
                        config: k,
                        event: _,
                        eventTarget: r,
                        elementRoot: J,
                        elementApi: Fe
                    }).forEach(A => {
                        R.push({
                            element: A,
                            key: ne
                        })
                    })
                }
            })
        }), R.forEach(({
            element: P,
            key: F
        }) => {
            let M = I[F],
                K = (0, yt.default)(M, "[0].actionItems[0]", {}),
                {
                    actionTypeId: j
                } = K,
                Q = Ci(j) ? As(j)(P, K) : null,
                J = Os({
                    element: P,
                    actionItem: K,
                    elementApi: Fe
                }, Q);
            Ss({
                store: e,
                element: P,
                eventId: n,
                actionListId: o,
                actionItem: K,
                destination: J,
                continuous: !0,
                parameterId: L,
                actionGroups: M,
                smoothing: s,
                restingValue: u,
                pluginInstance: Q
            })
        })
    }

    function TV(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function wV(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        Ib(e), (0, yr.default)(r, (i, o) => {
            let a = cb[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            CV({
                logic: a,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && OV(e)
    }

    function OV(e) {
        let t = () => {
            Ib(e)
        };
        xV.forEach(r => {
            window.addEventListener(r, t), e.dispatch(vi(window, [r, t]))
        }), t()
    }

    function Ib(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(cs({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function CV({
        logic: e,
        store: t,
        events: r
    }) {
        LV(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: a
        } = o, s = AV(r, RV);
        if (!(0, vb.default)(s)) return;
        (0, yr.default)(s, (d, _) => {
            let m = r[_],
                {
                    action: y,
                    id: I,
                    mediaQueries: R = o.mediaQueryKeys
                } = m,
                {
                    actionListId: O
                } = y.config;
            sV(R, o.mediaQueryKeys) || t.dispatch(ls()), y.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION && (Array.isArray(m.config) ? m.config : [m.config]).forEach(C => {
                let {
                    continuousParameterGroupId: P
                } = C, F = (0, yt.default)(a, `${O}.continuousParameterGroups`, []), M = (0, pb.default)(F, ({
                    id: Q
                }) => Q === P), K = (C.smoothing || 0) / 100, j = (C.restingState || 0) / 100;
                M && d.forEach((Q, J) => {
                    let ne = I + xs + J;
                    IV({
                        store: t,
                        eventStateKey: ne,
                        eventTarget: Q,
                        eventId: I,
                        eventConfig: C,
                        actionListId: O,
                        parameterGroup: M,
                        smoothing: K,
                        restingValue: j
                    })
                })
            }), (y.actionTypeId === Ue.GENERAL_START_ACTION || ws(y.actionTypeId)) && Tb({
                store: t,
                actionListId: O,
                eventId: I
            })
        });
        let u = d => {
                let {
                    ixSession: _
                } = t.getState();
                SV(s, (m, y, I) => {
                    let R = r[y],
                        O = _.eventState[I],
                        {
                            action: L,
                            mediaQueries: C = o.mediaQueryKeys
                        } = R;
                    if (!Ri(C, _.mediaQueryKey)) return;
                    let P = (F = {}) => {
                        let M = i({
                            store: t,
                            element: m,
                            event: R,
                            eventConfig: F,
                            nativeEvent: d,
                            eventStateKey: I
                        }, O);
                        uV(M, O) || t.dispatch(os(I, M))
                    };
                    L.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(P) : P()
                })
            },
            v = (0, yb.default)(u, fV),
            E = ({
                target: d = document,
                types: _,
                throttle: m
            }) => {
                _.split(" ").filter(Boolean).forEach(y => {
                    let I = m ? v : u;
                    d.addEventListener(y, I), t.dispatch(vi(d, [y, I]))
                })
            };
        Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e)
    }

    function LV(e) {
        if (!lV) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], a = ds(o);
            t[a] || (i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function Tb({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: a
        } = n, s = a[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let v = (0, yt.default)(u, "actionItemGroups[0].actionItems", []),
                E = (0, yt.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!Ri(E, i.mediaQueryKey)) return;
            v.forEach(d => {
                let {
                    config: _,
                    actionTypeId: m
                } = d, y = _ ? .target ? .useEventTarget === !0 && _ ? .target ? .objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : _, I = Si({
                    config: y,
                    event: s,
                    elementApi: Fe
                }), R = Ci(m);
                I.forEach(O => {
                    let L = R ? As(m)(O, d) : null;
                    Ss({
                        destination: Os({
                            element: O,
                            actionItem: d,
                            elementApi: Fe
                        }, L),
                        immediate: !0,
                        store: e,
                        element: O,
                        eventId: r,
                        actionItem: d,
                        actionListId: t,
                        pluginInstance: L
                    })
                })
            })
        }
    }

    function wb({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, yr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                Rs(r, e), i && e.dispatch(hr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function mr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: a
        } = e.getState(), s = a.hasBoundaryNodes && r ? en(r, Ai) : null;
        (0, yr.default)(o, u => {
            let v = (0, yt.default)(u, "actionItem.config.target.boundaryMode"),
                E = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && E) {
                if (s && v && !ps(s, u.element)) return;
                Rs(u, e), u.verbose && e.dispatch(hr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function on({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: s
    }) {
        let {
            ixData: u,
            ixSession: v
        } = e.getState(), {
            events: E
        } = u, d = E[t] || {}, {
            mediaQueries: _ = u.mediaQueryKeys
        } = d, m = (0, yt.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: y,
            useFirstGroupAsInitialState: I
        } = m;
        if (!y || !y.length) return !1;
        o >= y.length && (0, yt.default)(d, "config.loop") && (o = 0), o === 0 && I && o++;
        let O = (o === 0 || o === 1 && I) && ws(d.action ? .actionTypeId) ? d.config.delay : void 0,
            L = (0, yt.default)(y, [o, "actionItems"], []);
        if (!L.length || !Ri(_, v.mediaQueryKey)) return !1;
        let C = v.hasBoundaryNodes && r ? en(r, Ai) : null,
            P = ZU(L),
            F = !1;
        return L.forEach((M, K) => {
            let {
                config: j,
                actionTypeId: Q
            } = M, J = Ci(Q), {
                target: ne
            } = j;
            if (!ne) return;
            let k = ne.boundaryMode ? C : null;
            Si({
                config: j,
                event: d,
                eventTarget: r,
                elementRoot: k,
                elementApi: Fe
            }).forEach((G, B) => {
                let H = J ? As(Q)(G, M) : null,
                    ee = J ? cV(Q)(G, M) : null;
                F = !0;
                let ie = P === K && B === 0,
                    V = JU({
                        element: G,
                        actionItem: M
                    }),
                    X = Os({
                        element: G,
                        actionItem: M,
                        elementApi: Fe
                    }, H);
                Ss({
                    store: e,
                    element: G,
                    actionItem: M,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ie,
                    computedStyle: V,
                    destination: X,
                    immediate: a,
                    verbose: s,
                    pluginInstance: H,
                    pluginDuration: ee,
                    instanceDelay: O
                })
            })
        }), F
    }

    function Ss(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: a,
            pluginInstance: s,
            continuous: u,
            restingValue: v,
            eventId: E
        } = n, d = !u, _ = $U(), {
            ixElements: m,
            ixSession: y,
            ixData: I
        } = t.getState(), R = YU(m, i), {
            refState: O
        } = m[R] || {}, L = vs(i), C = y.reducedMotion && $o[o.actionTypeId], P;
        if (C && u) switch (I.events[E] ? .eventTypeId) {
            case Ze.MOUSE_MOVE:
            case Ze.MOUSE_MOVE_IN_VIEWPORT:
                P = v;
                break;
            default:
                P = .5;
                break
        }
        let F = eV(i, O, r, o, Fe, s);
        if (t.dispatch(as({
                instanceId: _,
                elementId: R,
                origin: F,
                refType: L,
                skipMotion: C,
                skipToValue: P,
                ...n
            })), xb(document.body, "ix2-animation-started", _), a) {
            NV(t, _);
            return
        }
        Ut({
            store: t,
            select: ({
                ixInstances: M
            }) => M[_],
            onChange: Ob
        }), d && t.dispatch(hi(_, y.tick))
    }

    function Rs(e, t) {
        xb(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: a
        } = i[r] || {};
        a === Eb && iV(o, n, Fe), t.dispatch(ss(e.id))
    }

    function xb(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function NV(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(hi(t, 0)), e.dispatch(gi(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        Ob(n[t], e)
    }

    function Ob(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: s,
            renderType: u,
            current: v,
            groupIndex: E,
            eventId: d,
            eventTarget: _,
            eventStateKey: m,
            actionListId: y,
            isCarrier: I,
            styleProp: R,
            verbose: O,
            pluginInstance: L
        } = e, {
            ixData: C,
            ixSession: P
        } = t.getState(), {
            events: F
        } = C, M = F[d] || {}, {
            mediaQueries: K = C.mediaQueryKeys
        } = M;
        if (Ri(K, P.mediaQueryKey) && (n || r || i)) {
            if (v || u === KU && i) {
                t.dispatch(us(o, s, v, a));
                let {
                    ixElements: j
                } = t.getState(), {
                    ref: Q,
                    refType: J,
                    refState: ne
                } = j[o] || {}, k = ne && ne[s];
                (J === Eb || Ci(s)) && QU(Q, ne, k, d, a, R, Fe, u, L)
            }
            if (i) {
                if (I) {
                    let j = on({
                        store: t,
                        eventId: d,
                        eventTarget: _,
                        eventStateKey: m,
                        actionListId: y,
                        groupIndex: E + 1,
                        verbose: O
                    });
                    O && !j && t.dispatch(hr({
                        actionListId: y,
                        isPlaying: !1
                    }))
                }
                Rs(e, t)
            }
        }
    }
    var pb, yt, vb, gb, hb, mb, yr, yb, Oi, zU, ws, xs, Ai, Eb, KU, fb, Si, YU, Os, Ut, $U, QU, bb, ZU, JU, eV, tV, rV, nV, Ri, iV, oV, aV, sV, uV, Ci, As, cV, db, lV, fV, xV, AV, SV, RV, Ts = me(() => {
        "use strict";
        pb = de(xa()), yt = de($n()), vb = de(Um()), gb = de(dy()), hb = de(vy()), mb = de(hy()), yr = de(Iy()), yb = de(Ry());
        Ve();
        Oi = de(kt());
        mi();
        qy();
        lb();
        zU = Object.keys(Sn), ws = e => zU.includes(e), {
            COLON_DELIMITER: xs,
            BOUNDARY_SELECTOR: Ai,
            HTML_ELEMENT: Eb,
            RENDER_GENERAL: KU,
            W_MOD_IX: fb
        } = Le, {
            getAffectedElements: Si,
            getElementId: YU,
            getDestinationValues: Os,
            observeStore: Ut,
            getInstanceId: $U,
            renderHTMLElement: QU,
            clearAllStyles: bb,
            getMaxDurationItemIndex: ZU,
            getComputedStyle: JU,
            getInstanceOrigin: eV,
            reduceListToGroup: tV,
            shouldNamespaceEventParameter: rV,
            getNamespacedParameterId: nV,
            shouldAllowMediaQuery: Ri,
            cleanupHTMLElement: iV,
            clearObjectCache: oV,
            stringifyTarget: aV,
            mediaQueriesEqual: sV,
            shallowEqual: uV
        } = Oi.IX2VanillaUtils, {
            isPluginType: Ci,
            createPluginInstance: As,
            getPluginDuration: cV
        } = Oi.IX2VanillaPlugins, db = navigator.userAgent, lV = db.match(/iPad/i) || db.match(/iPhone/), fV = 12;
        xV = ["resize", "orientationchange"];
        AV = (e, t) => (0, gb.default)((0, mb.default)(e, t), hb.default), SV = (e, t) => {
            (0, yr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let a = n + xs + o;
                    t(i, n, a)
                })
            })
        }, RV = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Si({
                config: t,
                elementApi: Fe
            })
        }
    });
    var Rb = c(Et => {
        "use strict";
        var PV = gn().default,
            MV = fu().default;
        Object.defineProperty(Et, "__esModule", {
            value: !0
        });
        Et.actions = void 0;
        Et.destroy = Sb;
        Et.init = kV;
        Et.setEnv = GV;
        Et.store = void 0;
        $l();
        var qV = zo(),
            DV = MV((_m(), nt(bm))),
            Cs = (Ts(), nt(Ab)),
            FV = PV((mi(), nt(Ly)));
        Et.actions = FV;
        var Ls = Et.store = (0, qV.createStore)(DV.default);

        function GV(e) {
            e() && (0, Cs.observeRequests)(Ls)
        }

        function kV(e) {
            Sb(), (0, Cs.startEngine)({
                store: Ls,
                rawData: e,
                allowEvents: !0
            })
        }

        function Sb() {
            (0, Cs.stopEngine)(Ls)
        }
    });
    var Pb = c((fz, Nb) => {
        "use strict";
        var Cb = Me(),
            Lb = Rb();
        Lb.setEnv(Cb.env);
        Cb.define("ix2", Nb.exports = function() {
            return Lb
        })
    });
    var qb = c((dz, Mb) => {
        "use strict";
        var Er = Me();
        Er.define("links", Mb.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = Er.env(),
                a = window.location,
                s = document.createElement("a"),
                u = "w--current",
                v = /index\.(html|php)$/,
                E = /\/$/,
                d, _;
            r.ready = r.design = r.preview = m;

            function m() {
                i = o && Er.env("design"), _ = Er.env("slug") || a.pathname || "", Er.scroll.off(I), d = [];
                for (var O = document.links, L = 0; L < O.length; ++L) y(O[L]);
                d.length && (Er.scroll.on(I), I())
            }

            function y(O) {
                if (!O.getAttribute("hreflang")) {
                    var L = i && O.getAttribute("href-disabled") || O.getAttribute("href");
                    if (s.href = L, !(L.indexOf(":") >= 0)) {
                        var C = e(O);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var P = e(s.hash);
                            P.length && d.push({
                                link: C,
                                sec: P,
                                active: !1
                            });
                            return
                        }
                        if (!(L === "#" || L === "")) {
                            var F = s.href === a.href || L === _ || v.test(L) && E.test(_);
                            R(C, u, F)
                        }
                    }
                }
            }

            function I() {
                var O = n.scrollTop(),
                    L = n.height();
                t.each(d, function(C) {
                    if (!C.link.attr("hreflang")) {
                        var P = C.link,
                            F = C.sec,
                            M = F.offset().top,
                            K = F.outerHeight(),
                            j = L * .5,
                            Q = F.is(":visible") && M + K - j >= O && M + j <= O + L;
                        C.active !== Q && (C.active = Q, R(P, u, Q))
                    }
                })
            }

            function R(O, L, C) {
                var P = O.hasClass(L);
                C && P || !C && !P || (C ? O.addClass(L) : O.removeClass(L))
            }
            return r
        })
    });
    var Fb = c((pz, Db) => {
        "use strict";
        var Pi = Me();
        Pi.define("scroll", Db.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = y() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(k) {
                    window.setTimeout(k, 15)
                },
                u = Pi.env("editor") ? ".w-editor-body" : "body",
                v = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                E = 'a[href="#"]',
                d = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
                _ = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                m = document.createElement("style");
            m.appendChild(document.createTextNode(_));

            function y() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var I = /^#[a-zA-Z0-9][\w:.-]*$/;

            function R(k) {
                return I.test(k.hash) && k.host + k.pathname === r.host + r.pathname
            }
            let O = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function L() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || O.matches
            }

            function C(k, A) {
                var G;
                switch (A) {
                    case "add":
                        G = k.attr("tabindex"), G ? k.attr("data-wf-tabindex-swap", G) : k.attr("tabindex", "-1");
                        break;
                    case "remove":
                        G = k.attr("data-wf-tabindex-swap"), G ? (k.attr("tabindex", G), k.removeAttr("data-wf-tabindex-swap")) : k.removeAttr("tabindex");
                        break
                }
                k.toggleClass("wf-force-outline-none", A === "add")
            }

            function P(k) {
                var A = k.currentTarget;
                if (!(Pi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(A.className))) {
                    var G = R(A) ? A.hash : "";
                    if (G !== "") {
                        var B = e(G);
                        B.length && (k && (k.preventDefault(), k.stopPropagation()), F(G, k), window.setTimeout(function() {
                            M(B, function() {
                                C(B, "add"), B.get(0).focus({
                                    preventScroll: !0
                                }), C(B, "remove")
                            })
                        }, k ? 0 : 300))
                    }
                }
            }

            function F(k) {
                if (r.hash !== k && n && n.pushState && !(Pi.env.chrome && r.protocol === "file:")) {
                    var A = n.state && n.state.hash;
                    A !== k && n.pushState({
                        hash: k
                    }, "", k)
                }
            }

            function M(k, A) {
                var G = i.scrollTop(),
                    B = K(k);
                if (G !== B) {
                    var H = j(k, G, B),
                        ee = Date.now(),
                        ie = function() {
                            var V = Date.now() - ee;
                            window.scroll(0, Q(G, B, V, H)), V <= H ? s(ie) : typeof A == "function" && A()
                        };
                    s(ie)
                }
            }

            function K(k) {
                var A = e(v),
                    G = A.css("position") === "fixed" ? A.outerHeight() : 0,
                    B = k.offset().top - G;
                if (k.data("scroll") === "mid") {
                    var H = i.height() - G,
                        ee = k.outerHeight();
                    ee < H && (B -= Math.round((H - ee) / 2))
                }
                return B
            }

            function j(k, A, G) {
                if (L()) return 0;
                var B = 1;
                return a.add(k).each(function(H, ee) {
                    var ie = parseFloat(ee.getAttribute("data-scroll-time"));
                    !isNaN(ie) && ie >= 0 && (B = ie)
                }), (472.143 * Math.log(Math.abs(A - G) + 125) - 2e3) * B
            }

            function Q(k, A, G, B) {
                return G > B ? A : k + (A - k) * J(G / B)
            }

            function J(k) {
                return k < .5 ? 4 * k * k * k : (k - 1) * (2 * k - 2) * (2 * k - 2) + 1
            }

            function ne() {
                var {
                    WF_CLICK_EMPTY: k,
                    WF_CLICK_SCROLL: A
                } = t;
                o.on(A, d, P), o.on(k, E, function(G) {
                    G.preventDefault()
                }), document.head.insertBefore(m, document.head.firstChild)
            }
            return {
                ready: ne
            }
        })
    });
    var kb = c((vz, Gb) => {
        "use strict";
        var UV = Me();
        UV.define("touch", Gb.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var a = !1,
                    s = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    v, E;
                o.addEventListener("touchstart", d, !1), o.addEventListener("touchmove", _, !1), o.addEventListener("touchend", m, !1), o.addEventListener("touchcancel", y, !1), o.addEventListener("mousedown", d, !1), o.addEventListener("mousemove", _, !1), o.addEventListener("mouseup", m, !1), o.addEventListener("mouseout", y, !1);

                function d(R) {
                    var O = R.touches;
                    O && O.length > 1 || (a = !0, O ? (s = !0, v = O[0].clientX) : v = R.clientX, E = v)
                }

                function _(R) {
                    if (a) {
                        if (s && R.type === "mousemove") {
                            R.preventDefault(), R.stopPropagation();
                            return
                        }
                        var O = R.touches,
                            L = O ? O[0].clientX : R.clientX,
                            C = L - E;
                        E = L, Math.abs(C) > u && r && String(r()) === "" && (i("swipe", R, {
                            direction: C > 0 ? "right" : "left"
                        }), y())
                    }
                }

                function m(R) {
                    if (a && (a = !1, s && R.type === "mouseup")) {
                        R.preventDefault(), R.stopPropagation(), s = !1;
                        return
                    }
                }

                function y() {
                    a = !1
                }

                function I() {
                    o.removeEventListener("touchstart", d, !1), o.removeEventListener("touchmove", _, !1), o.removeEventListener("touchend", m, !1), o.removeEventListener("touchcancel", y, !1), o.removeEventListener("mousedown", d, !1), o.removeEventListener("mousemove", _, !1), o.removeEventListener("mouseup", m, !1), o.removeEventListener("mouseout", y, !1), o = null
                }
                this.destroy = I
            }

            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document), t
        })
    });
    var Wb = c((gz, Vb) => {
        "use strict";
        var Vt = Me(),
            VV = _r(),
            tt = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            Ub = !0,
            WV = /^#[a-zA-Z0-9\-_]+$/;
        Vt.define("dropdown", Vb.exports = function(e, t) {
            var r = t.debounce,
                n = {},
                i = Vt.env(),
                o = !1,
                a, s = Vt.env.touch,
                u = ".w-dropdown",
                v = "w--open",
                E = VV.triggers,
                d = 900,
                _ = "focusout" + u,
                m = "keydown" + u,
                y = "mouseenter" + u,
                I = "mousemove" + u,
                R = "mouseleave" + u,
                O = (s ? "click" : "mouseup") + u,
                L = "w-close" + u,
                C = "setting" + u,
                P = e(document),
                F;
            n.ready = M, n.design = function() {
                o && A(), o = !1, M()
            }, n.preview = function() {
                o = !0, M()
            };

            function M() {
                a = i && Vt.env("design"), F = P.find(u), F.each(K)
            }

            function K(l, q) {
                var U = e(q),
                    w = e.data(q, u);
                w || (w = e.data(q, u, {
                    open: !1,
                    el: U,
                    config: {},
                    selectedIdx: -1
                })), w.toggle = w.el.children(".w-dropdown-toggle"), w.list = w.el.children(".w-dropdown-list"), w.links = w.list.find("a:not(.w-dropdown .w-dropdown a)"), w.complete = H(w), w.mouseLeave = ie(w), w.mouseUpOutside = B(w), w.mouseMoveOutside = V(w), j(w);
                var Y = w.toggle.attr("id"),
                    se = w.list.attr("id");
                Y || (Y = "w-dropdown-toggle-" + l), se || (se = "w-dropdown-list-" + l), w.toggle.attr("id", Y), w.toggle.attr("aria-controls", se), w.toggle.attr("aria-haspopup", "menu"), w.toggle.attr("aria-expanded", "false"), w.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), w.toggle.prop("tagName") !== "BUTTON" && (w.toggle.attr("role", "button"), w.toggle.attr("tabindex") || w.toggle.attr("tabindex", "0")), w.list.attr("id", se), w.list.attr("aria-labelledby", Y), w.links.each(function(b, W) {
                    W.hasAttribute("tabindex") || W.setAttribute("tabindex", "0"), WV.test(W.hash) && W.addEventListener("click", k.bind(null, w))
                }), w.el.off(u), w.toggle.off(u), w.nav && w.nav.off(u);
                var re = J(w, Ub);
                a && w.el.on(C, Q(w)), a || (i && (w.hovering = !1, k(w)), w.config.hover && w.toggle.on(y, ee(w)), w.el.on(L, re), w.el.on(m, X(w)), w.el.on(_, h(w)), w.toggle.on(O, re), w.toggle.on(m, p(w)), w.nav = w.el.closest(".w-nav"), w.nav.on(L, re))
            }

            function j(l) {
                var q = Number(l.el.css("z-index"));
                l.manageZ = q === d || q === d + 1, l.config = {
                    hover: l.el.attr("data-hover") === "true" && !s,
                    delay: l.el.attr("data-delay")
                }
            }

            function Q(l) {
                return function(q, U) {
                    U = U || {}, j(l), U.open === !0 && ne(l, !0), U.open === !1 && k(l, {
                        immediate: !0
                    })
                }
            }

            function J(l, q) {
                return r(function(U) {
                    if (l.open || U && U.type === "w-close") return k(l, {
                        forceClose: q
                    });
                    ne(l)
                })
            }

            function ne(l) {
                if (!l.open) {
                    G(l), l.open = !0, l.list.addClass(v), l.toggle.addClass(v), l.toggle.attr("aria-expanded", "true"), E.intro(0, l.el[0]), Vt.redraw.up(), l.manageZ && l.el.css("z-index", d + 1);
                    var q = Vt.env("editor");
                    a || P.on(O, l.mouseUpOutside), l.hovering && !q && l.el.on(R, l.mouseLeave), l.hovering && q && P.on(I, l.mouseMoveOutside), window.clearTimeout(l.delayId)
                }
            }

            function k(l, {
                immediate: q,
                forceClose: U
            } = {}) {
                if (l.open && !(l.config.hover && l.hovering && !U)) {
                    l.toggle.attr("aria-expanded", "false"), l.open = !1;
                    var w = l.config;
                    if (E.outro(0, l.el[0]), P.off(O, l.mouseUpOutside), P.off(I, l.mouseMoveOutside), l.el.off(R, l.mouseLeave), window.clearTimeout(l.delayId), !w.delay || q) return l.complete();
                    l.delayId = window.setTimeout(l.complete, w.delay)
                }
            }

            function A() {
                P.find(u).each(function(l, q) {
                    e(q).triggerHandler(L)
                })
            }

            function G(l) {
                var q = l.el[0];
                F.each(function(U, w) {
                    var Y = e(w);
                    Y.is(q) || Y.has(q).length || Y.triggerHandler(L)
                })
            }

            function B(l) {
                return l.mouseUpOutside && P.off(O, l.mouseUpOutside), r(function(q) {
                    if (l.open) {
                        var U = e(q.target);
                        if (!U.closest(".w-dropdown-toggle").length) {
                            var w = e.inArray(l.el[0], U.parents(u)) === -1,
                                Y = Vt.env("editor");
                            if (w) {
                                if (Y) {
                                    var se = U.parents().length === 1 && U.parents("svg").length === 1,
                                        re = U.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (se || re) return
                                }
                                k(l)
                            }
                        }
                    }
                })
            }

            function H(l) {
                return function() {
                    l.list.removeClass(v), l.toggle.removeClass(v), l.manageZ && l.el.css("z-index", "")
                }
            }

            function ee(l) {
                return function() {
                    l.hovering = !0, ne(l)
                }
            }

            function ie(l) {
                return function() {
                    l.hovering = !1, l.links.is(":focus") || k(l)
                }
            }

            function V(l) {
                return r(function(q) {
                    if (l.open) {
                        var U = e(q.target),
                            w = e.inArray(l.el[0], U.parents(u)) === -1;
                        if (w) {
                            var Y = U.parents(".w-editor-bem-EditorHoverControls").length,
                                se = U.parents(".w-editor-bem-RTToolbar").length,
                                re = e(".w-editor-bem-EditorOverlay"),
                                b = re.find(".w-editor-edit-outline").length || re.find(".w-editor-bem-RTToolbar").length;
                            if (Y || se || b) return;
                            l.hovering = !1, k(l)
                        }
                    }
                })
            }

            function X(l) {
                return function(q) {
                    if (!(a || !l.open)) switch (l.selectedIdx = l.links.index(document.activeElement), q.keyCode) {
                        case tt.HOME:
                            return l.open ? (l.selectedIdx = 0, g(l), q.preventDefault()) : void 0;
                        case tt.END:
                            return l.open ? (l.selectedIdx = l.links.length - 1, g(l), q.preventDefault()) : void 0;
                        case tt.ESCAPE:
                            return k(l), l.toggle.focus(), q.stopPropagation();
                        case tt.ARROW_RIGHT:
                        case tt.ARROW_DOWN:
                            return l.selectedIdx = Math.min(l.links.length - 1, l.selectedIdx + 1), g(l), q.preventDefault();
                        case tt.ARROW_LEFT:
                        case tt.ARROW_UP:
                            return l.selectedIdx = Math.max(-1, l.selectedIdx - 1), g(l), q.preventDefault()
                    }
                }
            }

            function g(l) {
                l.links[l.selectedIdx] && l.links[l.selectedIdx].focus()
            }

            function p(l) {
                var q = J(l, Ub);
                return function(U) {
                    if (!a) {
                        if (!l.open) switch (U.keyCode) {
                            case tt.ARROW_UP:
                            case tt.ARROW_DOWN:
                                return U.stopPropagation()
                        }
                        switch (U.keyCode) {
                            case tt.SPACE:
                            case tt.ENTER:
                                return q(), U.stopPropagation(), U.preventDefault()
                        }
                    }
                }
            }

            function h(l) {
                return r(function(q) {
                    var {
                        relatedTarget: U,
                        target: w
                    } = q, Y = l.el[0], se = Y.contains(U) || Y.contains(w);
                    return se || k(l), q.stopPropagation()
                })
            }
            return n
        })
    });
    var Hb = c(Ns => {
        "use strict";
        Object.defineProperty(Ns, "__esModule", {
            value: !0
        });
        Ns.default = HV;

        function HV(e, t, r, n, i, o, a, s, u, v, E, d, _) {
            return function(m) {
                e(m);
                var y = m.form,
                    I = {
                        name: y.attr("data-name") || y.attr("name") || "Untitled Form",
                        pageId: y.attr("data-wf-page-id") || "",
                        elementId: y.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(y.html()),
                        trackingCookies: n()
                    };
                let R = y.attr("data-wf-flow");
                R && (I.wfFlow = R), i(m);
                var O = o(y, I.fields);
                if (O) return a(O);
                if (I.fileUploads = s(y), u(m), !v) {
                    E(m);
                    return
                }
                d.ajax({
                    url: _,
                    type: "POST",
                    data: I,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(L) {
                    L && L.code === 200 && (m.success = !0), E(m)
                }).fail(function() {
                    E(m)
                })
            }
        }
    });
    var Bb = c((mz, Xb) => {
        "use strict";
        var Mi = Me();
        Mi.define("forms", Xb.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                a = window.XDomainRequest && !window.atob,
                s = ".w-form",
                u, v = /e(-)?mail/i,
                E = /^\S+@\S+$/,
                d = window.alert,
                _ = Mi.env(),
                m, y, I, R = /list-manage[1-9]?.com/i,
                O = t.debounce(function() {
                    d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                L(), !_ && !m && P()
            };

            function L() {
                u = e("html").attr("data-wf-site"), y = "https://webflow.com/api/v1/form/" + u, a && y.indexOf("https://webflow.com") >= 0 && (y = y.replace("https://webflow.com", "https://formdata.webflow.com")), I = `${y}/signFile`, i = e(s + " form"), i.length && i.each(C)
            }

            function C(V, X) {
                var g = e(X),
                    p = e.data(X, s);
                p || (p = e.data(X, s, {
                    form: g
                })), F(p);
                var h = g.closest("div.w-form");
                p.done = h.find("> .w-form-done"), p.fail = h.find("> .w-form-fail"), p.fileUploads = h.find(".w-file-upload"), p.fileUploads.each(function(U) {
                    H(U, p)
                });
                var l = p.form.attr("aria-label") || p.form.attr("data-name") || "Form";
                p.done.attr("aria-label") || p.form.attr("aria-label", l), p.done.attr("tabindex", "-1"), p.done.attr("role", "region"), p.done.attr("aria-label") || p.done.attr("aria-label", l + " success"), p.fail.attr("tabindex", "-1"), p.fail.attr("role", "region"), p.fail.attr("aria-label") || p.fail.attr("aria-label", l + " failure");
                var q = p.action = g.attr("action");
                if (p.handler = null, p.redirect = g.attr("data-redirect"), R.test(q)) {
                    p.handler = A;
                    return
                }
                if (!q) {
                    if (u) {
                        p.handler = (() => {
                            let U = Hb().default;
                            return U(F, o, Mi, J, B, K, d, j, M, u, G, e, y)
                        })();
                        return
                    }
                    O()
                }
            }

            function P() {
                m = !0, n.on("submit", s + " form", function(U) {
                    var w = e.data(this, s);
                    w.handler && (w.evt = U, w.handler(w))
                });
                let V = ".w-checkbox-input",
                    X = ".w-radio-input",
                    g = "w--redirected-checked",
                    p = "w--redirected-focus",
                    h = "w--redirected-focus-visible",
                    l = ":focus-visible, [data-wf-focus-visible]",
                    q = [
                        ["checkbox", V],
                        ["radio", X]
                    ];
                n.on("change", s + ' form input[type="checkbox"]:not(' + V + ")", U => {
                    e(U.target).siblings(V).toggleClass(g)
                }), n.on("change", s + ' form input[type="radio"]', U => {
                    e(`input[name="${U.target.name}"]:not(${V})`).map((Y, se) => e(se).siblings(X).removeClass(g));
                    let w = e(U.target);
                    w.hasClass("w-radio-input") || w.siblings(X).addClass(g)
                }), q.forEach(([U, w]) => {
                    n.on("focus", s + ` form input[type="${U}"]:not(` + w + ")", Y => {
                        e(Y.target).siblings(w).addClass(p), e(Y.target).filter(l).siblings(w).addClass(h)
                    }), n.on("blur", s + ` form input[type="${U}"]:not(` + w + ")", Y => {
                        e(Y.target).siblings(w).removeClass(`${p} ${h}`)
                    })
                })
            }

            function F(V) {
                var X = V.btn = V.form.find(':input[type="submit"]');
                V.wait = V.btn.attr("data-wait") || null, V.success = !1, X.prop("disabled", !1), V.label && X.val(V.label)
            }

            function M(V) {
                var X = V.btn,
                    g = V.wait;
                X.prop("disabled", !0), g && (V.label = X.val(), X.val(g))
            }

            function K(V, X) {
                var g = null;
                return X = X || {}, V.find(':input:not([type="submit"]):not([type="file"])').each(function(p, h) {
                    var l = e(h),
                        q = l.attr("type"),
                        U = l.attr("data-name") || l.attr("name") || "Field " + (p + 1),
                        w = l.val();
                    if (q === "checkbox") w = l.is(":checked");
                    else if (q === "radio") {
                        if (X[U] === null || typeof X[U] == "string") return;
                        w = V.find('input[name="' + l.attr("name") + '"]:checked').val() || null
                    }
                    typeof w == "string" && (w = e.trim(w)), X[U] = w, g = g || ne(l, q, U, w)
                }), g
            }

            function j(V) {
                var X = {};
                return V.find(':input[type="file"]').each(function(g, p) {
                    var h = e(p),
                        l = h.attr("data-name") || h.attr("name") || "File " + (g + 1),
                        q = h.attr("data-value");
                    typeof q == "string" && (q = e.trim(q)), X[l] = q
                }), X
            }
            let Q = {
                _mkto_trk: "marketo"
            };

            function J() {
                return document.cookie.split("; ").reduce(function(X, g) {
                    let p = g.split("="),
                        h = p[0];
                    if (h in Q) {
                        let l = Q[h],
                            q = p.slice(1).join("=");
                        X[l] = q
                    }
                    return X
                }, {})
            }

            function ne(V, X, g, p) {
                var h = null;
                return X === "password" ? h = "Passwords cannot be submitted." : V.attr("required") ? p ? v.test(V.attr("type")) && (E.test(p) || (h = "Please enter a valid email address for: " + g)) : h = "Please fill out the required field: " + g : g === "g-recaptcha-response" && !p && (h = "Please confirm you\u2019re not a robot."), h
            }

            function k(V) {
                B(V), G(V)
            }

            function A(V) {
                F(V);
                var X = V.form,
                    g = {};
                if (/^https/.test(o.href) && !/^https/.test(V.action)) {
                    X.attr("method", "post");
                    return
                }
                B(V);
                var p = K(X, g);
                if (p) return d(p);
                M(V);
                var h;
                t.each(g, function(w, Y) {
                    v.test(Y) && (g.EMAIL = w), /^((full[ _-]?)?name)$/i.test(Y) && (h = w), /^(first[ _-]?name)$/i.test(Y) && (g.FNAME = w), /^(last[ _-]?name)$/i.test(Y) && (g.LNAME = w)
                }), h && !g.FNAME && (h = h.split(" "), g.FNAME = h[0], g.LNAME = g.LNAME || h[1]);
                var l = V.action.replace("/post?", "/post-json?") + "&c=?",
                    q = l.indexOf("u=") + 2;
                q = l.substring(q, l.indexOf("&", q));
                var U = l.indexOf("id=") + 3;
                U = l.substring(U, l.indexOf("&", U)), g["b_" + q + "_" + U] = "", e.ajax({
                    url: l,
                    data: g,
                    dataType: "jsonp"
                }).done(function(w) {
                    V.success = w.result === "success" || /already/.test(w.msg), V.success || console.info("MailChimp error: " + w.msg), G(V)
                }).fail(function() {
                    G(V)
                })
            }

            function G(V) {
                var X = V.form,
                    g = V.redirect,
                    p = V.success;
                if (p && g) {
                    Mi.location(g);
                    return
                }
                V.done.toggle(p), V.fail.toggle(!p), p ? V.done.focus() : V.fail.focus(), X.toggle(!p), F(V)
            }

            function B(V) {
                V.evt && V.evt.preventDefault(), V.evt = null
            }

            function H(V, X) {
                if (!X.fileUploads || !X.fileUploads[V]) return;
                var g, p = e(X.fileUploads[V]),
                    h = p.find("> .w-file-upload-default"),
                    l = p.find("> .w-file-upload-uploading"),
                    q = p.find("> .w-file-upload-success"),
                    U = p.find("> .w-file-upload-error"),
                    w = h.find(".w-file-upload-input"),
                    Y = h.find(".w-file-upload-label"),
                    se = Y.children(),
                    re = U.find(".w-file-upload-error-msg"),
                    b = q.find(".w-file-upload-file"),
                    W = q.find(".w-file-remove-link"),
                    Z = b.find(".w-file-upload-file-name"),
                    z = re.attr("data-w-size-error"),
                    le = re.attr("data-w-type-error"),
                    Te = re.attr("data-w-generic-error");
                if (_ || Y.on("click keydown", function(x) {
                        x.type === "keydown" && x.which !== 13 && x.which !== 32 || (x.preventDefault(), w.click())
                    }), Y.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), _) w.on("click", function(x) {
                    x.preventDefault()
                }), Y.on("click", function(x) {
                    x.preventDefault()
                }), se.on("click", function(x) {
                    x.preventDefault()
                });
                else {
                    W.on("click keydown", function(x) {
                        if (x.type === "keydown") {
                            if (x.which !== 13 && x.which !== 32) return;
                            x.preventDefault()
                        }
                        w.removeAttr("data-value"), w.val(""), Z.html(""), h.toggle(!0), q.toggle(!1), Y.focus()
                    }), w.on("change", function(x) {
                        g = x.target && x.target.files && x.target.files[0], g && (h.toggle(!1), U.toggle(!1), l.toggle(!0), l.focus(), Z.text(g.name), N() || M(X), X.fileUploads[V].uploading = !0, ee(g, T))
                    });
                    var Ce = Y.outerHeight();
                    w.height(Ce), w.width(1)
                }

                function f(x) {
                    var D = x.responseJSON && x.responseJSON.msg,
                        te = Te;
                    typeof D == "string" && D.indexOf("InvalidFileTypeError") === 0 ? te = le : typeof D == "string" && D.indexOf("MaxFileSizeError") === 0 && (te = z), re.text(te), w.removeAttr("data-value"), w.val(""), l.toggle(!1), h.toggle(!0), U.toggle(!0), U.focus(), X.fileUploads[V].uploading = !1, N() || F(X)
                }

                function T(x, D) {
                    if (x) return f(x);
                    var te = D.fileName,
                        ae = D.postData,
                        ge = D.fileId,
                        $ = D.s3Url;
                    w.attr("data-value", ge), ie($, ae, g, te, S)
                }

                function S(x) {
                    if (x) return f(x);
                    l.toggle(!1), q.css("display", "inline-block"), q.focus(), X.fileUploads[V].uploading = !1, N() || F(X)
                }

                function N() {
                    var x = X.fileUploads && X.fileUploads.toArray() || [];
                    return x.some(function(D) {
                        return D.uploading
                    })
                }
            }

            function ee(V, X) {
                var g = new URLSearchParams({
                    name: V.name,
                    size: V.size
                });
                e.ajax({
                    type: "GET",
                    url: `${I}?${g}`,
                    crossDomain: !0
                }).done(function(p) {
                    X(null, p)
                }).fail(function(p) {
                    X(p)
                })
            }

            function ie(V, X, g, p, h) {
                var l = new FormData;
                for (var q in X) l.append(q, X[q]);
                l.append("file", g, p), e.ajax({
                    type: "POST",
                    url: V,
                    data: l,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    h(null)
                }).fail(function(U) {
                    h(U)
                })
            }
            return r
        })
    });
    var Kb = c((yz, zb) => {
        "use strict";
        var Ps = Me(),
            jb = "w-condition-invisible",
            XV = "." + jb;

        function BV(e) {
            return e.filter(function(t) {
                return !sn(t)
            })
        }

        function sn(e) {
            return !!(e.$el && e.$el.closest(XV).length)
        }

        function Ms(e, t) {
            for (var r = e; r >= 0; r--)
                if (!sn(t[r])) return r;
            return -1
        }

        function qs(e, t) {
            for (var r = e; r <= t.length - 1; r++)
                if (!sn(t[r])) return r;
            return -1
        }

        function jV(e, t) {
            return Ms(e - 1, t) === -1
        }

        function zV(e, t) {
            return qs(e + 1, t) === -1
        }

        function an(e, t) {
            e.attr("aria-label") || e.attr("aria-label", t)
        }

        function KV(e, t, r, n) {
            var i = r.tram,
                o = Array.isArray,
                a = "w-lightbox",
                s = a + "-",
                u = /(^|\s+)/g,
                v = [],
                E, d, _, m = [];

            function y(p, h) {
                return v = o(p) ? p : [p], d || y.build(), BV(v).length > 1 && (d.items = d.empty, v.forEach(function(l, q) {
                    var U = X("thumbnail"),
                        w = X("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(U);
                    an(w, `show item ${q+1} of ${v.length}`), sn(l) && w.addClass(jb), d.items = d.items.add(w), J(l.thumbnailUrl || l.url, function(Y) {
                        Y.prop("width") > Y.prop("height") ? H(Y, "wide") : H(Y, "tall"), U.append(H(Y, "thumbnail-image"))
                    })
                }), d.strip.empty().append(d.items), H(d.content, "group")), i(ee(d.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), H(d.html, "noscroll"), y.show(h || 0)
            }
            y.build = function() {
                return y.destroy(), d = {
                    html: r(t.documentElement),
                    empty: r()
                }, d.arrowLeft = X("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.arrowRight = X("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.close = X("control close").attr("role", "button"), an(d.arrowLeft, "previous image"), an(d.arrowRight, "next image"), an(d.close, "close lightbox"), d.spinner = X("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), d.strip = X("strip").attr("role", "tablist"), _ = new A(d.spinner, G("hide")), d.content = X("content").append(d.spinner, d.arrowLeft, d.arrowRight, d.close), d.container = X("container").append(d.content, d.strip), d.lightbox = X("backdrop hide").append(d.container), d.strip.on("click", B("item"), C), d.content.on("swipe", P).on("click", B("left"), R).on("click", B("right"), O).on("click", B("close"), L).on("click", B("image, caption"), O), d.container.on("click", B("view"), L).on("dragstart", B("img"), M), d.lightbox.on("keydown", K).on("focusin", F), r(n).append(d.lightbox), y
            }, y.destroy = function() {
                d && (ee(d.html, "noscroll"), d.lightbox.remove(), d = void 0)
            }, y.show = function(p) {
                if (p !== E) {
                    var h = v[p];
                    if (!h) return y.hide();
                    if (sn(h)) {
                        if (p < E) {
                            var l = Ms(p - 1, v);
                            p = l > -1 ? l : p
                        } else {
                            var q = qs(p + 1, v);
                            p = q > -1 ? q : p
                        }
                        h = v[p]
                    }
                    var U = E;
                    E = p, d.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), _.show();
                    var w = h.html && g(h.width, h.height) || h.url;
                    return J(w, function(Y) {
                        if (p !== E) return;
                        var se = X("figure", "figure").append(H(Y, "image")),
                            re = X("frame").append(se),
                            b = X("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(re),
                            W, Z;
                        h.html && (W = r(h.html), Z = W.is("iframe"), Z && W.on("load", z), se.append(H(W, "embed"))), h.caption && se.append(X("caption", "figcaption").text(h.caption)), d.spinner.before(b), Z || z();

                        function z() {
                            if (d.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), _.hide(), p !== E) {
                                b.remove();
                                return
                            }
                            let le = jV(p, v);
                            ie(d.arrowLeft, "inactive", le), V(d.arrowLeft, le), le && d.arrowLeft.is(":focus") && d.arrowRight.focus();
                            let Te = zV(p, v);
                            if (ie(d.arrowRight, "inactive", Te), V(d.arrowRight, Te), Te && d.arrowRight.is(":focus") && d.arrowLeft.focus(), d.view ? (i(d.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then(ne(d.view)), i(b).add("opacity .3s").add("transform .3s").set({
                                    x: p > U ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : b.css("opacity", 1), d.view = b, d.view.prop("tabIndex", 0), d.items) {
                                ee(d.items, "active"), d.items.removeAttr("aria-selected");
                                var Ce = d.items.eq(p);
                                H(Ce, "active"), Ce.attr("aria-selected", !0), k(Ce)
                            }
                        }
                    }), d.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), m.length === 0 && (r("body").children().each(function() {
                        r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (m.push({
                            node: r(this),
                            hidden: r(this).attr("aria-hidden"),
                            tabIndex: r(this).attr("tabIndex")
                        }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                    }), d.close.focus()), y
                }
            }, y.hide = function() {
                return i(d.lightbox).add("opacity .3s").start({
                    opacity: 0
                }).then(Q), y
            }, y.prev = function() {
                var p = Ms(E - 1, v);
                p > -1 && y.show(p)
            }, y.next = function() {
                var p = qs(E + 1, v);
                p > -1 && y.show(p)
            };

            function I(p) {
                return function(h) {
                    this === h.target && (h.stopPropagation(), h.preventDefault(), p())
                }
            }
            var R = I(y.prev),
                O = I(y.next),
                L = I(y.hide),
                C = function(p) {
                    var h = r(this).index();
                    p.preventDefault(), y.show(h)
                },
                P = function(p, h) {
                    p.preventDefault(), h.direction === "left" ? y.next() : h.direction === "right" && y.prev()
                },
                F = function() {
                    this.focus()
                };

            function M(p) {
                p.preventDefault()
            }

            function K(p) {
                var h = p.keyCode;
                h === 27 || j(h, "close") ? y.hide() : h === 37 || j(h, "left") ? y.prev() : h === 39 || j(h, "right") ? y.next() : j(h, "item") && r(":focus").click()
            }

            function j(p, h) {
                if (p !== 13 && p !== 32) return !1;
                var l = r(":focus").attr("class"),
                    q = G(h).trim();
                return l.includes(q)
            }

            function Q() {
                d && (d.strip.scrollLeft(0).empty(), ee(d.html, "noscroll"), H(d.lightbox, "hide"), d.view && d.view.remove(), ee(d.content, "group"), H(d.arrowLeft, "inactive"), H(d.arrowRight, "inactive"), E = d.view = void 0, m.forEach(function(p) {
                    var h = p.node;
                    h && (p.hidden ? h.attr("aria-hidden", p.hidden) : h.removeAttr("aria-hidden"), p.tabIndex ? h.attr("tabIndex", p.tabIndex) : h.removeAttr("tabIndex"))
                }), m = [], r(".active-lightbox").removeClass("active-lightbox").focus())
            }

            function J(p, h) {
                var l = X("img", "img");
                return l.one("load", function() {
                    h(l)
                }), l.attr("src", p), l
            }

            function ne(p) {
                return function() {
                    p.remove()
                }
            }

            function k(p) {
                var h = p.get(0),
                    l = d.strip.get(0),
                    q = h.offsetLeft,
                    U = h.clientWidth,
                    w = l.scrollLeft,
                    Y = l.clientWidth,
                    se = l.scrollWidth - Y,
                    re;
                q < w ? re = Math.max(0, q + U - Y) : q + U > Y + w && (re = Math.min(q, se)), re != null && i(d.strip).add("scroll-left 500ms").start({
                    "scroll-left": re
                })
            }

            function A(p, h, l) {
                this.$element = p, this.className = h, this.delay = l || 200, this.hide()
            }
            A.prototype.show = function() {
                var p = this;
                p.timeoutId || (p.timeoutId = setTimeout(function() {
                    p.$element.removeClass(p.className), delete p.timeoutId
                }, p.delay))
            }, A.prototype.hide = function() {
                var p = this;
                if (p.timeoutId) {
                    clearTimeout(p.timeoutId), delete p.timeoutId;
                    return
                }
                p.$element.addClass(p.className)
            };

            function G(p, h) {
                return p.replace(u, (h ? " ." : " ") + s)
            }

            function B(p) {
                return G(p, !0)
            }

            function H(p, h) {
                return p.addClass(G(h))
            }

            function ee(p, h) {
                return p.removeClass(G(h))
            }

            function ie(p, h, l) {
                return p.toggleClass(G(h), l)
            }

            function V(p, h) {
                return p.attr("aria-hidden", h).attr("tabIndex", h ? -1 : 0)
            }

            function X(p, h) {
                return H(r(t.createElement(h || "div")), p)
            }

            function g(p, h) {
                var l = '<svg xmlns="http://www.w3.org/2000/svg" width="' + p + '" height="' + h + '"/>';
                return "data:image/svg+xml;charset=utf-8," + encodeURI(l)
            }
            return function() {
                var p = e.navigator.userAgent,
                    h = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
                    l = p.match(h),
                    q = p.indexOf("Android ") > -1 && p.indexOf("Chrome") === -1;
                if (!q && (!l || l[2] > 7)) return;
                var U = t.createElement("style");
                t.head.appendChild(U), e.addEventListener("resize", w, !0);

                function w() {
                    var Y = e.innerHeight,
                        se = e.innerWidth,
                        re = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + Y + "px}.w-lightbox-view {width:" + se + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * Y + "px}.w-lightbox-image {max-width:" + se + "px;max-height:" + Y + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * Y + "px}.w-lightbox-strip {padding: 0 " + .01 * Y + "px}.w-lightbox-item {width:" + .1 * Y + "px;padding:" + .02 * Y + "px " + .01 * Y + "px}.w-lightbox-thumbnail {height:" + .1 * Y + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * Y + "px}.w-lightbox-content {margin-top:" + .02 * Y + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * Y + "px}.w-lightbox-image {max-width:" + .96 * se + "px;max-height:" + .96 * Y + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * se + "px;max-height:" + .84 * Y + "px}}";
                    U.textContent = re
                }
                w()
            }(), y
        }
        Ps.define("lightbox", zb.exports = function(e) {
            var t = {},
                r = Ps.env(),
                n = KV(window, document, e, r ? "#lightbox-mountpoint" : "body"),
                i = e(document),
                o, a, s = ".w-lightbox",
                u;
            t.ready = t.design = t.preview = v;

            function v() {
                a = r && Ps.env("design"), n.destroy(), u = {}, o = i.find(s), o.webflowLightBox(), o.each(function() {
                    an(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
                })
            }
            jQuery.fn.extend({
                webflowLightBox: function() {
                    var m = this;
                    e.each(m, function(y, I) {
                        var R = e.data(I, s);
                        R || (R = e.data(I, s, {
                            el: e(I),
                            mode: "images",
                            images: [],
                            embed: ""
                        })), R.el.off(s), E(R), a ? R.el.on("setting" + s, E.bind(null, R)) : R.el.on("click" + s, d(R)).on("click" + s, function(O) {
                            O.preventDefault()
                        })
                    })
                }
            });

            function E(m) {
                var y = m.el.children(".w-json").html(),
                    I, R;
                if (!y) {
                    m.items = [];
                    return
                }
                try {
                    y = JSON.parse(y)
                } catch (O) {
                    console.error("Malformed lightbox JSON configuration.", O)
                }
                _(y), y.items.forEach(function(O) {
                    O.$el = m.el
                }), I = y.group, I ? (R = u[I], R || (R = u[I] = []), m.items = R, y.items.length && (m.index = R.length, R.push.apply(R, y.items))) : (m.items = y.items, m.index = 0)
            }

            function d(m) {
                return function() {
                    m.items.length && n(m.items, m.index || 0)
                }
            }

            function _(m) {
                m.images && (m.images.forEach(function(y) {
                    y.type = "image"
                }), m.items = m.images), m.embed && (m.embed.type = "video", m.items = [m.embed]), m.groupId && (m.group = m.groupId)
            }
            return t
        })
    });
    var $b = c((Ez, Yb) => {
        "use strict";
        var St = Me(),
            YV = _r(),
            Re = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        St.define("navbar", Yb.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                a = t.debounce,
                s, u, v, E, d = St.env(),
                _ = '<div class="w-nav-overlay" data-wf-ignore />',
                m = ".w-nav",
                y = "w--open",
                I = "w--nav-dropdown-open",
                R = "w--nav-dropdown-toggle-open",
                O = "w--nav-dropdown-list-open",
                L = "w--nav-link-open",
                C = YV.triggers,
                P = e();
            r.ready = r.design = r.preview = F, r.destroy = function() {
                P = e(), M(), u && u.length && u.each(J)
            };

            function F() {
                v = d && St.env("design"), E = St.env("editor"), s = e(document.body), u = o.find(m), u.length && (u.each(Q), M(), K())
            }

            function M() {
                St.resize.off(j)
            }

            function K() {
                St.resize.on(j)
            }

            function j() {
                u.each(h)
            }

            function Q(b, W) {
                var Z = e(W),
                    z = e.data(W, m);
                z || (z = e.data(W, m, {
                    open: !1,
                    el: Z,
                    config: {},
                    selectedIdx: -1
                })), z.menu = Z.find(".w-nav-menu"), z.links = z.menu.find(".w-nav-link"), z.dropdowns = z.menu.find(".w-dropdown"), z.dropdownToggle = z.menu.find(".w-dropdown-toggle"), z.dropdownList = z.menu.find(".w-dropdown-list"), z.button = Z.find(".w-nav-button"), z.container = Z.find(".w-container"), z.overlayContainerId = "w-nav-overlay-" + b, z.outside = g(z);
                var le = Z.find(".w-nav-brand");
                le && le.attr("href") === "/" && le.attr("aria-label") == null && le.attr("aria-label", "home"), z.button.attr("style", "-webkit-user-select: text;"), z.button.attr("aria-label") == null && z.button.attr("aria-label", "menu"), z.button.attr("role", "button"), z.button.attr("tabindex", "0"), z.button.attr("aria-controls", z.overlayContainerId), z.button.attr("aria-haspopup", "menu"), z.button.attr("aria-expanded", "false"), z.el.off(m), z.button.off(m), z.menu.off(m), A(z), v ? (ne(z), z.el.on("setting" + m, G(z))) : (k(z), z.button.on("click" + m, V(z)), z.menu.on("click" + m, "a", X(z)), z.button.on("keydown" + m, B(z)), z.el.on("keydown" + m, H(z))), h(b, W)
            }

            function J(b, W) {
                var Z = e.data(W, m);
                Z && (ne(Z), e.removeData(W, m))
            }

            function ne(b) {
                b.overlay && (re(b, !0), b.overlay.remove(), b.overlay = null)
            }

            function k(b) {
                b.overlay || (b.overlay = e(_).appendTo(b.el), b.overlay.attr("id", b.overlayContainerId), b.parent = b.menu.parent(), re(b, !0))
            }

            function A(b) {
                var W = {},
                    Z = b.config || {},
                    z = W.animation = b.el.attr("data-animation") || "default";
                W.animOver = /^over/.test(z), W.animDirect = /left$/.test(z) ? -1 : 1, Z.animation !== z && b.open && t.defer(ie, b), W.easing = b.el.attr("data-easing") || "ease", W.easing2 = b.el.attr("data-easing2") || "ease";
                var le = b.el.attr("data-duration");
                W.duration = le != null ? Number(le) : 400, W.docHeight = b.el.attr("data-doc-height"), b.config = W
            }

            function G(b) {
                return function(W, Z) {
                    Z = Z || {};
                    var z = i.width();
                    A(b), Z.open === !0 && Y(b, !0), Z.open === !1 && re(b, !0), b.open && t.defer(function() {
                        z !== i.width() && ie(b)
                    })
                }
            }

            function B(b) {
                return function(W) {
                    switch (W.keyCode) {
                        case Re.SPACE:
                        case Re.ENTER:
                            return V(b)(), W.preventDefault(), W.stopPropagation();
                        case Re.ESCAPE:
                            return re(b), W.preventDefault(), W.stopPropagation();
                        case Re.ARROW_RIGHT:
                        case Re.ARROW_DOWN:
                        case Re.HOME:
                        case Re.END:
                            return b.open ? (W.keyCode === Re.END ? b.selectedIdx = b.links.length - 1 : b.selectedIdx = 0, ee(b), W.preventDefault(), W.stopPropagation()) : (W.preventDefault(), W.stopPropagation())
                    }
                }
            }

            function H(b) {
                return function(W) {
                    if (b.open) switch (b.selectedIdx = b.links.index(document.activeElement), W.keyCode) {
                        case Re.HOME:
                        case Re.END:
                            return W.keyCode === Re.END ? b.selectedIdx = b.links.length - 1 : b.selectedIdx = 0, ee(b), W.preventDefault(), W.stopPropagation();
                        case Re.ESCAPE:
                            return re(b), b.button.focus(), W.preventDefault(), W.stopPropagation();
                        case Re.ARROW_LEFT:
                        case Re.ARROW_UP:
                            return b.selectedIdx = Math.max(-1, b.selectedIdx - 1), ee(b), W.preventDefault(), W.stopPropagation();
                        case Re.ARROW_RIGHT:
                        case Re.ARROW_DOWN:
                            return b.selectedIdx = Math.min(b.links.length - 1, b.selectedIdx + 1), ee(b), W.preventDefault(), W.stopPropagation()
                    }
                }
            }

            function ee(b) {
                if (b.links[b.selectedIdx]) {
                    var W = b.links[b.selectedIdx];
                    W.focus(), X(W)
                }
            }

            function ie(b) {
                b.open && (re(b, !0), Y(b, !0))
            }

            function V(b) {
                return a(function() {
                    b.open ? re(b) : Y(b)
                })
            }

            function X(b) {
                return function(W) {
                    var Z = e(this),
                        z = Z.attr("href");
                    if (!St.validClick(W.currentTarget)) {
                        W.preventDefault();
                        return
                    }
                    z && z.indexOf("#") === 0 && b.open && re(b)
                }
            }

            function g(b) {
                return b.outside && o.off("click" + m, b.outside),
                    function(W) {
                        var Z = e(W.target);
                        E && Z.closest(".w-editor-bem-EditorOverlay").length || p(b, Z)
                    }
            }
            var p = a(function(b, W) {
                if (b.open) {
                    var Z = W.closest(".w-nav-menu");
                    b.menu.is(Z) || re(b)
                }
            });

            function h(b, W) {
                var Z = e.data(W, m),
                    z = Z.collapsed = Z.button.css("display") !== "none";
                if (Z.open && !z && !v && re(Z, !0), Z.container.length) {
                    var le = q(Z);
                    Z.links.each(le), Z.dropdowns.each(le)
                }
                Z.open && se(Z)
            }
            var l = "max-width";

            function q(b) {
                var W = b.container.css(l);
                return W === "none" && (W = ""),
                    function(Z, z) {
                        z = e(z), z.css(l, ""), z.css(l) === "none" && z.css(l, W)
                    }
            }

            function U(b, W) {
                W.setAttribute("data-nav-menu-open", "")
            }

            function w(b, W) {
                W.removeAttribute("data-nav-menu-open")
            }

            function Y(b, W) {
                if (b.open) return;
                b.open = !0, b.menu.each(U), b.links.addClass(L), b.dropdowns.addClass(I), b.dropdownToggle.addClass(R), b.dropdownList.addClass(O), b.button.addClass(y);
                var Z = b.config,
                    z = Z.animation;
                (z === "none" || !n.support.transform || Z.duration <= 0) && (W = !0);
                var le = se(b),
                    Te = b.menu.outerHeight(!0),
                    Ce = b.menu.outerWidth(!0),
                    f = b.el.height(),
                    T = b.el[0];
                if (h(0, T), C.intro(0, T), St.redraw.up(), v || o.on("click" + m, b.outside), W) {
                    x();
                    return
                }
                var S = "transform " + Z.duration + "ms " + Z.easing;
                if (b.overlay && (P = b.menu.prev(), b.overlay.show().append(b.menu)), Z.animOver) {
                    n(b.menu).add(S).set({
                        x: Z.animDirect * Ce,
                        height: le
                    }).start({
                        x: 0
                    }).then(x), b.overlay && b.overlay.width(Ce);
                    return
                }
                var N = f + Te;
                n(b.menu).add(S).set({
                    y: -N
                }).start({
                    y: 0
                }).then(x);

                function x() {
                    b.button.attr("aria-expanded", "true")
                }
            }

            function se(b) {
                var W = b.config,
                    Z = W.docHeight ? o.height() : s.height();
                return W.animOver ? b.menu.height(Z) : b.el.css("position") !== "fixed" && (Z -= b.el.outerHeight(!0)), b.overlay && b.overlay.height(Z), Z
            }

            function re(b, W) {
                if (!b.open) return;
                b.open = !1, b.button.removeClass(y);
                var Z = b.config;
                if ((Z.animation === "none" || !n.support.transform || Z.duration <= 0) && (W = !0), C.outro(0, b.el[0]), o.off("click" + m, b.outside), W) {
                    n(b.menu).stop(), T();
                    return
                }
                var z = "transform " + Z.duration + "ms " + Z.easing2,
                    le = b.menu.outerHeight(!0),
                    Te = b.menu.outerWidth(!0),
                    Ce = b.el.height();
                if (Z.animOver) {
                    n(b.menu).add(z).start({
                        x: Te * Z.animDirect
                    }).then(T);
                    return
                }
                var f = Ce + le;
                n(b.menu).add(z).start({
                    y: -f
                }).then(T);

                function T() {
                    b.menu.height(""), n(b.menu).set({
                        x: 0,
                        y: 0
                    }), b.menu.each(w), b.links.removeClass(L), b.dropdowns.removeClass(I), b.dropdownToggle.removeClass(R), b.dropdownList.removeClass(O), b.overlay && b.overlay.children().length && (P.length ? b.menu.insertAfter(P) : b.menu.prependTo(b.parent), b.overlay.attr("style", "").hide()), b.el.triggerHandler("w-close"), b.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var Jb = c((bz, Zb) => {
        "use strict";
        var Rt = Me(),
            $V = _r(),
            dt = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            Qb = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Rt.define("slider", Zb.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(document),
                o, a, s = Rt.env(),
                u = ".w-slider",
                v = '<div class="w-slider-dot" data-wf-ignore />',
                E = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                d = "w-slider-force-show",
                _ = $V.triggers,
                m, y = !1;
            r.ready = function() {
                a = Rt.env("design"), I()
            }, r.design = function() {
                a = !0, setTimeout(I, 1e3)
            }, r.preview = function() {
                a = !1, I()
            }, r.redraw = function() {
                y = !0, I(), y = !1
            }, r.destroy = R;

            function I() {
                o = i.find(u), o.length && (o.each(C), !m && (R(), O()))
            }

            function R() {
                Rt.resize.off(L), Rt.redraw.off(r.redraw)
            }

            function O() {
                Rt.resize.on(L), Rt.redraw.on(r.redraw)
            }

            function L() {
                o.filter(":visible").each(H)
            }

            function C(g, p) {
                var h = e(p),
                    l = e.data(p, u);
                l || (l = e.data(p, u, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: h,
                    config: {}
                })), l.mask = h.children(".w-slider-mask"), l.left = h.children(".w-slider-arrow-left"), l.right = h.children(".w-slider-arrow-right"), l.nav = h.children(".w-slider-nav"), l.slides = l.mask.children(".w-slide"), l.slides.each(_.reset), y && (l.maskWidth = 0), h.attr("role") === void 0 && h.attr("role", "region"), h.attr("aria-label") === void 0 && h.attr("aria-label", "carousel");
                var q = l.mask.attr("id");
                if (q || (q = "w-slider-mask-" + g, l.mask.attr("id", q)), !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(E).appendTo(l.mask)), l.left.attr("role", "button"), l.left.attr("tabindex", "0"), l.left.attr("aria-controls", q), l.left.attr("aria-label") === void 0 && l.left.attr("aria-label", "previous slide"), l.right.attr("role", "button"), l.right.attr("tabindex", "0"), l.right.attr("aria-controls", q), l.right.attr("aria-label") === void 0 && l.right.attr("aria-label", "next slide"), !n.support.transform) {
                    l.left.hide(), l.right.hide(), l.nav.hide(), m = !0;
                    return
                }
                l.el.off(u), l.left.off(u), l.right.off(u), l.nav.off(u), P(l), a ? (l.el.on("setting" + u, A(l)), k(l), l.hasTimer = !1) : (l.el.on("swipe" + u, A(l)), l.left.on("click" + u, j(l)), l.right.on("click" + u, Q(l)), l.left.on("keydown" + u, K(l, j)), l.right.on("keydown" + u, K(l, Q)), l.nav.on("keydown" + u, "> div", A(l)), l.config.autoplay && !l.hasTimer && (l.hasTimer = !0, l.timerCount = 1, ne(l)), l.el.on("mouseenter" + u, M(l, !0, "mouse")), l.el.on("focusin" + u, M(l, !0, "keyboard")), l.el.on("mouseleave" + u, M(l, !1, "mouse")), l.el.on("focusout" + u, M(l, !1, "keyboard"))), l.nav.on("click" + u, "> div", A(l)), s || l.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var U = h.filter(":hidden");
                U.addClass(d);
                var w = h.parents(":hidden");
                w.addClass(d), y || H(g, p), U.removeClass(d), w.removeClass(d)
            }

            function P(g) {
                var p = {};
                p.crossOver = 0, p.animation = g.el.attr("data-animation") || "slide", p.animation === "outin" && (p.animation = "cross", p.crossOver = .5), p.easing = g.el.attr("data-easing") || "ease";
                var h = g.el.attr("data-duration");
                if (p.duration = h != null ? parseInt(h, 10) : 500, F(g.el.attr("data-infinite")) && (p.infinite = !0), F(g.el.attr("data-disable-swipe")) && (p.disableSwipe = !0), F(g.el.attr("data-hide-arrows")) ? p.hideArrows = !0 : g.config.hideArrows && (g.left.show(), g.right.show()), F(g.el.attr("data-autoplay"))) {
                    p.autoplay = !0, p.delay = parseInt(g.el.attr("data-delay"), 10) || 2e3, p.timerMax = parseInt(g.el.attr("data-autoplay-limit"), 10);
                    var l = "mousedown" + u + " touchstart" + u;
                    a || g.el.off(l).one(l, function() {
                        k(g)
                    })
                }
                var q = g.right.width();
                p.edge = q ? q + 40 : 100, g.config = p
            }

            function F(g) {
                return g === "1" || g === "true"
            }

            function M(g, p, h) {
                return function(l) {
                    if (p) g.hasFocus[h] = p;
                    else if (e.contains(g.el.get(0), l.relatedTarget) || (g.hasFocus[h] = p, g.hasFocus.mouse && h === "keyboard" || g.hasFocus.keyboard && h === "mouse")) return;
                    p ? (g.ariaLiveLabel.attr("aria-live", "polite"), g.hasTimer && k(g)) : (g.ariaLiveLabel.attr("aria-live", "off"), g.hasTimer && ne(g))
                }
            }

            function K(g, p) {
                return function(h) {
                    switch (h.keyCode) {
                        case dt.SPACE:
                        case dt.ENTER:
                            return p(g)(), h.preventDefault(), h.stopPropagation()
                    }
                }
            }

            function j(g) {
                return function() {
                    B(g, {
                        index: g.index - 1,
                        vector: -1
                    })
                }
            }

            function Q(g) {
                return function() {
                    B(g, {
                        index: g.index + 1,
                        vector: 1
                    })
                }
            }

            function J(g, p) {
                var h = null;
                p === g.slides.length && (I(), ee(g)), t.each(g.anchors, function(l, q) {
                    e(l.els).each(function(U, w) {
                        e(w).index() === p && (h = q)
                    })
                }), h != null && B(g, {
                    index: h,
                    immediate: !0
                })
            }

            function ne(g) {
                k(g);
                var p = g.config,
                    h = p.timerMax;
                h && g.timerCount++ > h || (g.timerId = window.setTimeout(function() {
                    g.timerId == null || a || (Q(g)(), ne(g))
                }, p.delay))
            }

            function k(g) {
                window.clearTimeout(g.timerId), g.timerId = null
            }

            function A(g) {
                return function(p, h) {
                    h = h || {};
                    var l = g.config;
                    if (a && p.type === "setting") {
                        if (h.select === "prev") return j(g)();
                        if (h.select === "next") return Q(g)();
                        if (P(g), ee(g), h.select == null) return;
                        J(g, h.select);
                        return
                    }
                    if (p.type === "swipe") return l.disableSwipe || Rt.env("editor") ? void 0 : h.direction === "left" ? Q(g)() : h.direction === "right" ? j(g)() : void 0;
                    if (g.nav.has(p.target).length) {
                        var q = e(p.target).index();
                        if (p.type === "click" && B(g, {
                                index: q
                            }), p.type === "keydown") switch (p.keyCode) {
                            case dt.ENTER:
                            case dt.SPACE:
                                {
                                    B(g, {
                                        index: q
                                    }),
                                    p.preventDefault();
                                    break
                                }
                            case dt.ARROW_LEFT:
                            case dt.ARROW_UP:
                                {
                                    G(g.nav, Math.max(q - 1, 0)),
                                    p.preventDefault();
                                    break
                                }
                            case dt.ARROW_RIGHT:
                            case dt.ARROW_DOWN:
                                {
                                    G(g.nav, Math.min(q + 1, g.pages)),
                                    p.preventDefault();
                                    break
                                }
                            case dt.HOME:
                                {
                                    G(g.nav, 0),
                                    p.preventDefault();
                                    break
                                }
                            case dt.END:
                                {
                                    G(g.nav, g.pages),
                                    p.preventDefault();
                                    break
                                }
                            default:
                                return
                        }
                    }
                }
            }

            function G(g, p) {
                var h = g.children().eq(p).focus();
                g.children().not(h)
            }

            function B(g, p) {
                p = p || {};
                var h = g.config,
                    l = g.anchors;
                g.previous = g.index;
                var q = p.index,
                    U = {};
                q < 0 ? (q = l.length - 1, h.infinite && (U.x = -g.endX, U.from = 0, U.to = l[0].width)) : q >= l.length && (q = 0, h.infinite && (U.x = l[l.length - 1].width, U.from = -l[l.length - 1].x, U.to = U.from - U.x)), g.index = q;
                var w = g.nav.children().eq(q).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                g.nav.children().not(w).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), h.hideArrows && (g.index === l.length - 1 ? g.right.hide() : g.right.show(), g.index === 0 ? g.left.hide() : g.left.show());
                var Y = g.offsetX || 0,
                    se = g.offsetX = -l[g.index].x,
                    re = {
                        x: se,
                        opacity: 1,
                        visibility: ""
                    },
                    b = e(l[g.index].els),
                    W = e(l[g.previous] && l[g.previous].els),
                    Z = g.slides.not(b),
                    z = h.animation,
                    le = h.easing,
                    Te = Math.round(h.duration),
                    Ce = p.vector || (g.index > g.previous ? 1 : -1),
                    f = "opacity " + Te + "ms " + le,
                    T = "transform " + Te + "ms " + le;
                if (b.find(Qb).removeAttr("tabindex"), b.removeAttr("aria-hidden"), b.find("*").removeAttr("aria-hidden"), Z.find(Qb).attr("tabindex", "-1"), Z.attr("aria-hidden", "true"), Z.find("*").attr("aria-hidden", "true"), a || (b.each(_.intro), Z.each(_.outro)), p.immediate && !y) {
                    n(b).set(re), x();
                    return
                }
                if (g.index === g.previous) return;
                if (a || g.ariaLiveLabel.text(`Slide ${q+1} of ${l.length}.`), z === "cross") {
                    var S = Math.round(Te - Te * h.crossOver),
                        N = Math.round(Te - S);
                    f = "opacity " + S + "ms " + le, n(W).set({
                        visibility: ""
                    }).add(f).start({
                        opacity: 0
                    }), n(b).set({
                        visibility: "",
                        x: se,
                        opacity: 0,
                        zIndex: g.depth++
                    }).add(f).wait(N).then({
                        opacity: 1
                    }).then(x);
                    return
                }
                if (z === "fade") {
                    n(W).set({
                        visibility: ""
                    }).stop(), n(b).set({
                        visibility: "",
                        x: se,
                        opacity: 0,
                        zIndex: g.depth++
                    }).add(f).start({
                        opacity: 1
                    }).then(x);
                    return
                }
                if (z === "over") {
                    re = {
                        x: g.endX
                    }, n(W).set({
                        visibility: ""
                    }).stop(), n(b).set({
                        visibility: "",
                        zIndex: g.depth++,
                        x: se + l[g.index].width * Ce
                    }).add(T).start({
                        x: se
                    }).then(x);
                    return
                }
                h.infinite && U.x ? (n(g.slides.not(W)).set({
                    visibility: "",
                    x: U.x
                }).add(T).start({
                    x: se
                }), n(W).set({
                    visibility: "",
                    x: U.from
                }).add(T).start({
                    x: U.to
                }), g.shifted = W) : (h.infinite && g.shifted && (n(g.shifted).set({
                    visibility: "",
                    x: Y
                }), g.shifted = null), n(g.slides).set({
                    visibility: ""
                }).add(T).start({
                    x: se
                }));

                function x() {
                    b = e(l[g.index].els), Z = g.slides.not(b), z !== "slide" && (re.visibility = "hidden"), n(Z).set(re)
                }
            }

            function H(g, p) {
                var h = e.data(p, u);
                if (h) {
                    if (V(h)) return ee(h);
                    a && X(h) && ee(h)
                }
            }

            function ee(g) {
                var p = 1,
                    h = 0,
                    l = 0,
                    q = 0,
                    U = g.maskWidth,
                    w = U - g.config.edge;
                w < 0 && (w = 0), g.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }], g.slides.each(function(se, re) {
                    l - h > w && (p++, h += U, g.anchors[p - 1] = {
                        els: [],
                        x: l,
                        width: 0
                    }), q = e(re).outerWidth(!0), l += q, g.anchors[p - 1].width += q, g.anchors[p - 1].els.push(re);
                    var b = se + 1 + " of " + g.slides.length;
                    e(re).attr("aria-label", b), e(re).attr("role", "group")
                }), g.endX = l, a && (g.pages = null), g.nav.length && g.pages !== p && (g.pages = p, ie(g));
                var Y = g.index;
                Y >= p && (Y = p - 1), B(g, {
                    immediate: !0,
                    index: Y
                })
            }

            function ie(g) {
                var p = [],
                    h, l = g.el.attr("data-nav-spacing");
                l && (l = parseFloat(l) + "px");
                for (var q = 0, U = g.pages; q < U; q++) h = e(v), h.attr("aria-label", "Show slide " + (q + 1) + " of " + U).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), g.nav.hasClass("w-num") && h.text(q + 1), l != null && h.css({
                    "margin-left": l,
                    "margin-right": l
                }), p.push(h);
                g.nav.empty().append(p)
            }

            function V(g) {
                var p = g.mask.width();
                return g.maskWidth !== p ? (g.maskWidth = p, !0) : !1
            }

            function X(g) {
                var p = 0;
                return g.slides.each(function(h, l) {
                    p += e(l).outerWidth(!0)
                }), g.slidesWidth !== p ? (g.slidesWidth = p, !0) : !1
            }
            return r
        })
    });
    Ys();
    Qs();
    Js();
    ru();
    _r();
    Pb();
    qb();
    Fb();
    kb();
    Wb();
    Bb();
    Kb();
    $b();
    Jb();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".slide-up-trigger",
                "originalId": "65b59d2da00c9486dd2bf3d1|0381d405-fe96-c53e-3d90-0c9d56a932c8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slide-up-trigger",
                "originalId": "65b59d2da00c9486dd2bf3d1|0381d405-fe96-c53e-3d90-0c9d56a932c8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1697149803363
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".slide-up-trigger",
                "originalId": "65b59d2da00c9486dd2bf3d1|0381d405-fe96-c53e-3d90-0c9d56a932c8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slide-up-trigger",
                "originalId": "65b59d2da00c9486dd2bf3d1|0381d405-fe96-c53e-3d90-0c9d56a932c8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1697149803363
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "selector": ".menu-button",
                "originalId": "fb94e889-ab85-06c4-616c-6dcfeb826909",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "fb94e889-ab85-06c4-616c-6dcfeb826909",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1698138958256
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "selector": ".menu-button",
                "originalId": "fb94e889-ab85-06c4-616c-6dcfeb826909",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "fb94e889-ab85-06c4-616c-6dcfeb826909",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698138958256
        },
        "e-223": {
            "id": "e-223",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-224"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".container",
                "originalId": "65b59d2da00c9486dd2bf3d1|ed5ab708-ed3f-08a1-b43b-171f43296f31",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".container",
                "originalId": "65b59d2da00c9486dd2bf3d1|ed5ab708-ed3f-08a1-b43b-171f43296f31",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700691792345
        },
        "e-229": {
            "id": "e-229",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".gradient-wrapper.mouse-track",
                "originalId": "65b59d2da00c9486dd2bf3d1|ca91f200-ff1d-97d9-7af4-26fa781dbb62",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3d1|ca91f200-ff1d-97d9-7af4-26fa781dbb62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-31-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 98,
                "restingState": 25
            }, {
                "continuousParameterGroupId": "a-31-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 98,
                "restingState": 60
            }],
            "createdOn": 1705189761073
        },
        "e-230": {
            "id": "e-230",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".gradient-wrapper.mouse-track",
                "originalId": "65b59d2da00c9486dd2bf3d1|ca91f200-ff1d-97d9-7af4-26fa781dbb62",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3d1|ca91f200-ff1d-97d9-7af4-26fa781dbb62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-32-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 99,
                "restingState": 25
            }, {
                "continuousParameterGroupId": "a-32-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 99,
                "restingState": 60
            }],
            "createdOn": 1705201752269
        },
        "e-231": {
            "id": "e-231",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".gradient-wrapper.mouse-track",
                "originalId": "65b59d2da00c9486dd2bf3d1|ca91f200-ff1d-97d9-7af4-26fa781dbb62",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3d1|ca91f200-ff1d-97d9-7af4-26fa781dbb62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-33-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 99,
                "restingState": 25
            }, {
                "continuousParameterGroupId": "a-33-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 99,
                "restingState": 60
            }],
            "createdOn": 1705201995378
        },
        "e-232": {
            "id": "e-232",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-68",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-233"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1705211476870
        },
        "e-233": {
            "id": "e-233",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-69",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-297"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1705211476871
        },
        "e-234": {
            "id": "e-234",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-235"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".accordion-item",
                "originalId": "65b59d2da00c9486dd2bf3d1|e36ce46b-456e-8349-8ad9-f0078db26f0b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".accordion-item",
                "originalId": "65b59d2da00c9486dd2bf3d1|e36ce46b-456e-8349-8ad9-f0078db26f0b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1705217120283
        },
        "e-236": {
            "id": "e-236",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-237"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1705217381688
        },
        "e-238": {
            "id": "e-238",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-239"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button",
                "originalId": "0c9f6a56-0aad-37be-0cde-29c61913406b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button",
                "originalId": "0c9f6a56-0aad-37be-0cde-29c61913406b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1705219682106
        },
        "e-239": {
            "id": "e-239",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-238"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button",
                "originalId": "0c9f6a56-0aad-37be-0cde-29c61913406b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button",
                "originalId": "0c9f6a56-0aad-37be-0cde-29c61913406b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1705219682107
        },
        "e-240": {
            "id": "e-240",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-241"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f41e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f41e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706075143886
        },
        "e-241": {
            "id": "e-241",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-240"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f41e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f41e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706075143886
        },
        "e-242": {
            "id": "e-242",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-243"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f427",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f427",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706075143886
        },
        "e-243": {
            "id": "e-243",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-242"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f427",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f427",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706075143886
        },
        "e-244": {
            "id": "e-244",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-245"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f430",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f430",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706075143886
        },
        "e-245": {
            "id": "e-245",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-244"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f430",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f430",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706075143886
        },
        "e-246": {
            "id": "e-246",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-247"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706075143886
        },
        "e-247": {
            "id": "e-247",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-246"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e0|43740538-7397-245d-59a4-dae40998f439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706075143886
        },
        "e-248": {
            "id": "e-248",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-249"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".collection-item-image-link",
                "originalId": "65b59d2da00c9486dd2bf3ee|7ff70474-ed17-e531-90b6-38d1b3013130",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".collection-item-image-link",
                "originalId": "65b59d2da00c9486dd2bf3ee|7ff70474-ed17-e531-90b6-38d1b3013130",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706124717747
        },
        "e-249": {
            "id": "e-249",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-248"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".collection-item-image-link",
                "originalId": "65b59d2da00c9486dd2bf3ee|7ff70474-ed17-e531-90b6-38d1b3013130",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".collection-item-image-link",
                "originalId": "65b59d2da00c9486dd2bf3ee|7ff70474-ed17-e531-90b6-38d1b3013130",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706124717748
        },
        "e-250": {
            "id": "e-250",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".collection-item-image-link",
                "originalId": "65b59d2da00c9486dd2bf3ee|7ff70474-ed17-e531-90b6-38d1b3013130",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".collection-item-image-link",
                "originalId": "65b59d2da00c9486dd2bf3ee|7ff70474-ed17-e531-90b6-38d1b3013130",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-41-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1706125333706
        },
        "e-257": {
            "id": "e-257",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-258"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3db",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3db",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223372471
        },
        "e-258": {
            "id": "e-258",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-257"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3db",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3db",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223372473
        },
        "e-259": {
            "id": "e-259",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-260"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3ee",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3ee",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223465277
        },
        "e-260": {
            "id": "e-260",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-259"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3ee",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3ee",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223465278
        },
        "e-261": {
            "id": "e-261",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-262"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223489277
        },
        "e-262": {
            "id": "e-262",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-261"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223489278
        },
        "e-263": {
            "id": "e-263",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-264"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3dd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3dd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223510122
        },
        "e-264": {
            "id": "e-264",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-263"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3dd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3dd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223510123
        },
        "e-265": {
            "id": "e-265",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-266"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223544348
        },
        "e-266": {
            "id": "e-266",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-265"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223544349
        },
        "e-267": {
            "id": "e-267",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-268"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3f4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3f4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223628150
        },
        "e-268": {
            "id": "e-268",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-267"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3f4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3f4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223628151
        },
        "e-270": {
            "id": "e-270",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-269"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3f0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3f0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223680599
        },
        "e-272": {
            "id": "e-272",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-271"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3f3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3f3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223697488
        },
        "e-273": {
            "id": "e-273",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-274"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223773512
        },
        "e-274": {
            "id": "e-274",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-273"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223773513
        },
        "e-275": {
            "id": "e-275",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-68",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-276"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223793300
        },
        "e-276": {
            "id": "e-276",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-275"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223793300
        },
        "e-278": {
            "id": "e-278",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-277"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223809307
        },
        "e-280": {
            "id": "e-280",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-279"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223823233
        },
        "e-281": {
            "id": "e-281",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-282"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223845194
        },
        "e-282": {
            "id": "e-282",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-281"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223845194
        },
        "e-284": {
            "id": "e-284",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-283"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3d9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3d9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223861615
        },
        "e-286": {
            "id": "e-286",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-285"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3da",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3da",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706223874738
        },
        "e-287": {
            "id": "e-287",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-288"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".ls-wrap-landing-hero",
                "originalId": "65b59d2da00c9486dd2bf3d1|1e8f3162-76a7-6483-df1d-7fc621130ea8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".ls-wrap-landing-hero",
                "originalId": "65b59d2da00c9486dd2bf3d1|1e8f3162-76a7-6483-df1d-7fc621130ea8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706408339275
        },
        "e-289": {
            "id": "e-289",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-290"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".ls-wrap",
                "originalId": "65b59d2da00c9486dd2bf3d1|ee6a48e8-53e9-d318-153e-0bed7c2be62b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".ls-wrap",
                "originalId": "65b59d2da00c9486dd2bf3d1|ee6a48e8-53e9-d318-153e-0bed7c2be62b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706408431822
        },
        "e-293": {
            "id": "e-293",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-294"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".mask-wrap",
                "originalId": "65b59d2da00c9486dd2bf3d1|30a9260b-7af7-4727-dca0-b17b93927a42",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".mask-wrap",
                "originalId": "65b59d2da00c9486dd2bf3d1|30a9260b-7af7-4727-dca0-b17b93927a42",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706409174210
        },
        "e-295": {
            "id": "e-295",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-296"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".switch",
                "originalId": "65b59d2da00c9486dd2bf3d1|195ade1a-1f21-2b9f-fe04-75ee6db84129",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".switch",
                "originalId": "65b59d2da00c9486dd2bf3d1|195ade1a-1f21-2b9f-fe04-75ee6db84129",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706588784144
        },
        "e-296": {
            "id": "e-296",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-295"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".switch",
                "originalId": "65b59d2da00c9486dd2bf3d1|195ade1a-1f21-2b9f-fe04-75ee6db84129",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".switch",
                "originalId": "65b59d2da00c9486dd2bf3d1|195ade1a-1f21-2b9f-fe04-75ee6db84129",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706588784144
        },
        "e-297": {
            "id": "e-297",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3d1|d8459489-2092-9752-019c-fe53eee712e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3d1|d8459489-2092-9752-019c-fe53eee712e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 96,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": true,
                "endOffsetValue": 50
            }],
            "createdOn": 1701681827509
        },
        "e-301": {
            "id": "e-301",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-300"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706859829305
        },
        "e-302": {
            "id": "e-302",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-303"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".collection-item",
                "originalId": "65b59d2da00c9486dd2bf3dd|fed6bd08-9bb5-211a-5180-a6264c09666e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".collection-item",
                "originalId": "65b59d2da00c9486dd2bf3dd|fed6bd08-9bb5-211a-5180-a6264c09666e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707003263677
        },
        "e-303": {
            "id": "e-303",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-302"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".collection-item",
                "originalId": "65b59d2da00c9486dd2bf3dd|fed6bd08-9bb5-211a-5180-a6264c09666e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".collection-item",
                "originalId": "65b59d2da00c9486dd2bf3dd|fed6bd08-9bb5-211a-5180-a6264c09666e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707003263679
        },
        "e-304": {
            "id": "e-304",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-305"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section.dark-theme",
                "originalId": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section.dark-theme",
                "originalId": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707004966961
        },
        "e-305": {
            "id": "e-305",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-304"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section.dark-theme",
                "originalId": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section.dark-theme",
                "originalId": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707004966962
        },
        "e-308": {
            "id": "e-308",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-309"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".desktop-menu-button",
                "originalId": "28897428-5881-c42a-b2d3-e378b085a7e8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".desktop-menu-button",
                "originalId": "28897428-5881-c42a-b2d3-e378b085a7e8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707005811063
        },
        "e-309": {
            "id": "e-309",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-308"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".desktop-menu-button",
                "originalId": "28897428-5881-c42a-b2d3-e378b085a7e8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".desktop-menu-button",
                "originalId": "28897428-5881-c42a-b2d3-e378b085a7e8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707005811064
        },
        "e-310": {
            "id": "e-310",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-311"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a6388c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a6388c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707011727912
        },
        "e-311": {
            "id": "e-311",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-310"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a6388c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a6388c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707011727912
        },
        "e-312": {
            "id": "e-312",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-313"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a63895",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a63895",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707011727912
        },
        "e-313": {
            "id": "e-313",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-312"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a63895",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a63895",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707011727912
        },
        "e-314": {
            "id": "e-314",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-315"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a6389e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a6389e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707011727912
        },
        "e-315": {
            "id": "e-315",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-314"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a6389e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a6389e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707011727912
        },
        "e-316": {
            "id": "e-316",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-317"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a638a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a638a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707011727912
        },
        "e-317": {
            "id": "e-317",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-316"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a638a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65b59d2da00c9486dd2bf3e7|461ba51e-5845-eae6-3681-6a62f9a638a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707011727912
        },
        "e-318": {
            "id": "e-318",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-319"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".card",
                "originalId": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a2633",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".card",
                "originalId": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a2633",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707012258466
        },
        "e-319": {
            "id": "e-319",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-318"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".card",
                "originalId": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a2633",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".card",
                "originalId": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a2633",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707012258466
        },
        "e-320": {
            "id": "e-320",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-321"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".arrow",
                "originalId": "6d1bcd1e-dac1-d2ea-51cb-2abd69838b69",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".arrow",
                "originalId": "6d1bcd1e-dac1-d2ea-51cb-2abd69838b69",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707201305221
        },
        "e-321": {
            "id": "e-321",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-320"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".arrow",
                "originalId": "6d1bcd1e-dac1-d2ea-51cb-2abd69838b69",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".arrow",
                "originalId": "6d1bcd1e-dac1-d2ea-51cb-2abd69838b69",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707201305221
        },
        "e-322": {
            "id": "e-322",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-323"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-wrap",
                "originalId": "65b59d2da00c9486dd2bf3d1|5ff6fda1-0eb7-d81e-7c8b-1aee0aa65584",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-wrap",
                "originalId": "65b59d2da00c9486dd2bf3d1|5ff6fda1-0eb7-d81e-7c8b-1aee0aa65584",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707201841313
        },
        "e-324": {
            "id": "e-324",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-325"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button",
                "originalId": "65b59d2da00c9486dd2bf3d1|771b8145-f14b-0099-423e-e3184dc83766",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button",
                "originalId": "65b59d2da00c9486dd2bf3d1|771b8145-f14b-0099-423e-e3184dc83766",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707201904989
        },
        "e-326": {
            "id": "e-326",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-327"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".collection-item",
                "originalId": "fd13adf6-6afb-d800-e596-a7177f521c76",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".collection-item",
                "originalId": "fd13adf6-6afb-d800-e596-a7177f521c76",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707201962763
        },
        "e-328": {
            "id": "e-328",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-329"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".collection-item",
                "originalId": "65b59d2da00c9486dd2bf3ee|1e980cf2-c209-646a-7315-6ec3b21b337b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".collection-item",
                "originalId": "65b59d2da00c9486dd2bf3ee|1e980cf2-c209-646a-7315-6ec3b21b337b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707210053084
        },
        "e-332": {
            "id": "e-332",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-72",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-333"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".ls-hero-wrap",
                "originalId": "65b59d2da00c9486dd2bf3ee|063ea300-0541-5f8f-ed33-b3a46c4d1793",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".ls-hero-wrap",
                "originalId": "65b59d2da00c9486dd2bf3ee|063ea300-0541-5f8f-ed33-b3a46c4d1793",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707210786308
        },
        "e-334": {
            "id": "e-334",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-335"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c2f390bf209603b43ac28e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c2f390bf209603b43ac28e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707275153517
        },
        "e-335": {
            "id": "e-335",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-334"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c2f390bf209603b43ac28e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c2f390bf209603b43ac28e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707275153517
        },
        "e-336": {
            "id": "e-336",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-337"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c2f9eeeb0a8addb70b7046",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c2f9eeeb0a8addb70b7046",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707276782902
        },
        "e-337": {
            "id": "e-337",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-336"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c2f9eeeb0a8addb70b7046",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c2f9eeeb0a8addb70b7046",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707276782902
        },
        "e-338": {
            "id": "e-338",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-339"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c2fbb6f280576f6f23798a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c2fbb6f280576f6f23798a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707277238921
        },
        "e-339": {
            "id": "e-339",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-338"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c2fbb6f280576f6f23798a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c2fbb6f280576f6f23798a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707277238921
        },
        "e-340": {
            "id": "e-340",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-341"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c2ff36f280576f6f259a5f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c2ff36f280576f6f259a5f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707278135293
        },
        "e-341": {
            "id": "e-341",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-340"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c2ff36f280576f6f259a5f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c2ff36f280576f6f259a5f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707278135293
        }
    },
    "actionLists": {
        "a-12": {
            "id": "a-12",
            "title": "Slide up element reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 750,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 750,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 80,
                        "easing": "outCubic",
                        "duration": 750,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 80,
                        "easing": "outCubic",
                        "duration": 750,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1697148990806
        },
        "a-13": {
            "id": "a-13",
            "title": "Slide down element hide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 750,
                        "target": {},
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 750,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 80,
                        "easing": "inCubic",
                        "duration": 750,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 80,
                        "easing": "inCubic",
                        "duration": 750,
                        "target": {},
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1697148990806
        },
        "a-27": {
            "id": "a-27",
            "title": "Reveal mobile menu",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".content-wrapper",
                            "selectorGuids": ["e045d57f-1788-ad42-c07b-66fc0d16b0af"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["b2ac75e9-1d46-b258-6760-91861a72d26f"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-10",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1200,
                        "target": {
                            "selector": ".content-wrapper",
                            "selectorGuids": ["e045d57f-1788-ad42-c07b-66fc0d16b0af"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }, {
                    "id": "a-27-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "inOutCubic",
                        "duration": 1000,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["b2ac75e9-1d46-b258-6760-91861a72d26f"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1697603297259
        },
        "a-28": {
            "id": "a-28",
            "title": "Hide mobile menu",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-menu",
                            "selectorGuids": ["b2ac75e9-1d46-b258-6760-91861a72d26f"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-menu",
                            "selectorGuids": ["b2ac75e9-1d46-b258-6760-91861a72d26f"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-28-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".content-wrapper",
                            "selectorGuids": ["e045d57f-1788-ad42-c07b-66fc0d16b0af"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }, {
                    "id": "a-28-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".content-wrapper",
                            "selectorGuids": ["e045d57f-1788-ad42-c07b-66fc0d16b0af"]
                        },
                        "value": 0.6,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-10",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": {
                            "size": 30,
                            "unit": "px"
                        },
                        "target": {
                            "objectId": "--content-wrapper-border-radius\\<deleted\\|variable-7066b984-e751-d958-a212-3a86b48fa48b\\>",
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|f4fe9767-62f3-9ccd-a384-c0746b2c7c95"
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1200,
                        "target": {
                            "selector": ".content-wrapper",
                            "selectorGuids": ["e045d57f-1788-ad42-c07b-66fc0d16b0af"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-28-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1200,
                        "target": {
                            "selector": ".content-wrapper",
                            "selectorGuids": ["e045d57f-1788-ad42-c07b-66fc0d16b0af"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-11",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 1000,
                        "value": {
                            "size": 0,
                            "unit": "px"
                        },
                        "target": {
                            "objectId": "--content-wrapper-border-radius\\<deleted\\|variable-7066b984-e751-d958-a212-3a86b48fa48b\\>",
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|f4fe9767-62f3-9ccd-a384-c0746b2c7c95"
                        }
                    }
                }, {
                    "id": "a-28-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "inOutCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-menu",
                            "selectorGuids": ["b2ac75e9-1d46-b258-6760-91861a72d26f"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-menu",
                            "selectorGuids": ["b2ac75e9-1d46-b258-6760-91861a72d26f"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1697603297259
        },
        "a-29": {
            "id": "a-29",
            "title": "Custom slide up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|ed5ab708-ed3f-08a1-b43b-171f43296f31"
                        },
                        "yValue": 5,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|ed5ab708-ed3f-08a1-b43b-171f43296f31"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|ed5ab708-ed3f-08a1-b43b-171f43296f31"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|ed5ab708-ed3f-08a1-b43b-171f43296f31"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1700691803672
        },
        "a-31": {
            "id": "a-31",
            "title": "Gradient Primary Mouse Track",
            "continuousParameterGroups": [{
                "id": "a-31-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-31-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-31-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-31-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-31-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-31-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1705189816449
        },
        "a-32": {
            "id": "a-32",
            "title": "Gradient Secondary Mouse Track",
            "continuousParameterGroups": [{
                "id": "a-32-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-32-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-32-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-32-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-32-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-32-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1705189816449
        },
        "a-33": {
            "id": "a-33",
            "title": "Gradient Tertiary Mouse Track",
            "continuousParameterGroups": [{
                "id": "a-33-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-33-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-33-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-33-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-33-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-33-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {},
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1705189816449
        },
        "a-68": {
            "id": "a-68",
            "title": "Landing load reveal (start)",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-68-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".landing-load-reveal",
                            "selectorGuids": ["0e55f4e3-49dd-5fb3-4ed9-748979a88d2d"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-68-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".header",
                            "selectorGuids": ["b4128e7c-9db4-b0ca-30bd-c3a2374fb324"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-68-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".content-wrapper",
                            "selectorGuids": ["e045d57f-1788-ad42-c07b-66fc0d16b0af"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }, {
                    "id": "a-68-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".intro-text-right",
                            "selectorGuids": ["a6ac5ed9-e412-8f44-d900-319d1fcc65e2"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-68-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".intro-text-left",
                            "selectorGuids": ["96565e28-5035-b6e9-720f-356afaca5a12"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-68-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".intro-separator",
                            "selectorGuids": ["928f4266-3286-1464-9e7b-65f7b552e70c"]
                        },
                        "xValue": null,
                        "yValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-68-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".intro-separator",
                            "selectorGuids": ["928f4266-3286-1464-9e7b-65f7b552e70c"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-68-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".load-reveal-block",
                            "selectorGuids": ["649941b0-0312-3c70-614a-72ea746d29ad"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1705210038965
        },
        "a-69": {
            "id": "a-69",
            "title": "Landing load reveal (end)",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-69-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".intro-separator",
                            "selectorGuids": ["928f4266-3286-1464-9e7b-65f7b552e70c"]
                        },
                        "xValue": null,
                        "yValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-69-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "selector": ".intro-text-right",
                            "selectorGuids": ["a6ac5ed9-e412-8f44-d900-319d1fcc65e2"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-69-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "selector": ".intro-text-left",
                            "selectorGuids": ["96565e28-5035-b6e9-720f-356afaca5a12"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-69-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 1700,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "target": {
                            "selector": ".content-wrapper",
                            "selectorGuids": ["e045d57f-1788-ad42-c07b-66fc0d16b0af"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-69-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1800,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "target": {
                            "selector": ".load-reveal-block",
                            "selectorGuids": ["649941b0-0312-3c70-614a-72ea746d29ad"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-69-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1800,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "target": {
                            "selector": ".load-reveal-block.right",
                            "selectorGuids": ["649941b0-0312-3c70-614a-72ea746d29ad", "9d4aa1d6-65a7-6ce9-5a24-6699dd34caf5"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-69-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1800,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "target": {
                            "selector": ".intro-separator",
                            "selectorGuids": ["928f4266-3286-1464-9e7b-65f7b552e70c"]
                        },
                        "xValue": -50,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-69-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "inOutExpo",
                        "duration": 1000,
                        "target": {
                            "selector": ".header",
                            "selectorGuids": ["b4128e7c-9db4-b0ca-30bd-c3a2374fb324"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-69-n-17",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".landing-load-reveal",
                            "selectorGuids": ["0e55f4e3-49dd-5fb3-4ed9-748979a88d2d"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1705210038965
        },
        "a-35": {
            "id": "a-35",
            "title": "Accordion Toggle",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 500,
                        "target": {
                            "selector": ".accordion-content",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a96b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-35-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a96b"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-35-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 500,
                        "target": {
                            "selector": ".feature-image",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a96e"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-35-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".feature-image",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a96e"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-35-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 500,
                        "target": {
                            "selector": ".accordion-content",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a96b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-35-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a96b"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-35-n-10",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 500,
                        "target": {
                            "selector": ".accordion-title-strike",
                            "selectorGuids": ["6c9c7cee-545b-e7ac-5b7f-b67eabcb2596"]
                        },
                        "xValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-35-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-title-strike",
                            "selectorGuids": ["6c9c7cee-545b-e7ac-5b7f-b67eabcb2596"]
                        },
                        "xValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-35-n-13",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 500,
                        "target": {
                            "selector": ".accordion-heading",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a970"]
                        },
                        "globalSwatchId": "",
                        "rValue": 23,
                        "bValue": 20,
                        "gValue": 19,
                        "aValue": 1
                    }
                }, {
                    "id": "a-35-n-12",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-heading",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a970"]
                        },
                        "globalSwatchId": "",
                        "rValue": 252,
                        "bValue": 38,
                        "gValue": 47,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1705217133968
        },
        "a-36": {
            "id": "a-36",
            "title": "Accordion Toggle Init",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 0,
                        "target": {
                            "selector": ".accordion-content",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a96b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-36-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 0,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|eea4ae8a-6ea9-c8f3-395d-5e3ab2ac31d7"
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-36-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 0,
                        "target": {
                            "selector": ".feature-image",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a96e"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-36-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 0,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|974b5800-b4c0-0f4d-cc17-bdbcab8d5f10"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-36-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 0,
                        "target": {
                            "selector": ".accordion-content",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a96b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-36-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutSine",
                        "duration": 0,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|eea4ae8a-6ea9-c8f3-395d-5e3ab2ac31d7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-36-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".accordion-title-strike",
                            "selectorGuids": ["6c9c7cee-545b-e7ac-5b7f-b67eabcb2596"]
                        },
                        "xValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-36-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|66537d60-4d55-ccec-3ff8-459b9120c73d"
                        },
                        "xValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-36-n-13",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".accordion-heading",
                            "selectorGuids": ["46072392-bba2-88c6-8a3f-8f73f157a970"]
                        },
                        "globalSwatchId": "",
                        "rValue": 23,
                        "bValue": 20,
                        "gValue": 19,
                        "aValue": 1
                    }
                }, {
                    "id": "a-36-n-14",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|eea4ae8a-6ea9-c8f3-395d-5e3ab2ac31d5"
                        },
                        "globalSwatchId": "",
                        "rValue": 251,
                        "bValue": 36,
                        "gValue": 47,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1705217133968
        },
        "a-37": {
            "id": "a-37",
            "title": "Button mouse over",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-overlay",
                            "selectorGuids": ["bb21c5d0-9115-2b8c-eb2f-77dc7f62ae7d"]
                        },
                        "xValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-37-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-link-icon",
                            "selectorGuids": ["a87ae436-dd21-5499-78d6-8ab31fd06e8c"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": 0,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-37-n-5",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["ab0120ed-e4e8-3aef-d68f-2d0797fde01f"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "c307",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-link-icon",
                            "selectorGuids": ["a87ae436-dd21-5499-78d6-8ab31fd06e8c"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": 135,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-37-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-overlay",
                            "selectorGuids": ["bb21c5d0-9115-2b8c-eb2f-77dc7f62ae7d"]
                        },
                        "xValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-37-n-6",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["ab0120ed-e4e8-3aef-d68f-2d0797fde01f"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "c307",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1705219688152
        },
        "a-52": {
            "id": "a-52",
            "title": "Button mouse out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-overlay",
                            "selectorGuids": ["bb21c5d0-9115-2b8c-eb2f-77dc7f62ae7d"]
                        },
                        "xValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-52-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-link-icon",
                            "selectorGuids": ["a87ae436-dd21-5499-78d6-8ab31fd06e8c"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": 0,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-52-n-7",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["ab0120ed-e4e8-3aef-d68f-2d0797fde01f"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "5b95",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1705219688152
        },
        "a-21": {
            "id": "a-21",
            "title": "Show dropdown content",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".dropdown-content",
                            "selectorGuids": ["10f3debb-e460-c0ce-9adf-81136a497d31"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-21-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-icon",
                            "selectorGuids": ["c2b326a9-176c-5b4c-e7f2-e4ceed90219d"]
                        },
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".dropdown-content",
                            "selectorGuids": ["10f3debb-e460-c0ce-9adf-81136a497d31"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-icon",
                            "selectorGuids": ["c2b326a9-176c-5b4c-e7f2-e4ceed90219d"]
                        },
                        "zValue": -180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1697179840563
        },
        "a-22": {
            "id": "a-22",
            "title": "Hide dropdown content",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".dropdown-content",
                            "selectorGuids": ["10f3debb-e460-c0ce-9adf-81136a497d31"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-icon",
                            "selectorGuids": ["c2b326a9-176c-5b4c-e7f2-e4ceed90219d"]
                        },
                        "zValue": -180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".dropdown-content",
                            "selectorGuids": ["10f3debb-e460-c0ce-9adf-81136a497d31"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-icon",
                            "selectorGuids": ["c2b326a9-176c-5b4c-e7f2-e4ceed90219d"]
                        },
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1697179840563
        },
        "a-39": {
            "id": "a-39",
            "title": "Show collection item frame",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1706124722674
        },
        "a-40": {
            "id": "a-40",
            "title": "Hide collection item frame",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-40-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1706124722674
        },
        "a-41": {
            "id": "a-41",
            "title": "Move collection item bubble",
            "continuousParameterGroups": [{
                "id": "a-41-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-41-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": -50,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-41-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": 150,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-41-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-41-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": null,
                            "yValue": -50,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-41-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "yValue": 250,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1706125341615
        },
        "a-34": {
            "id": "a-34",
            "title": "Load reveal (start)",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".load-wipe",
                            "selectorGuids": ["a2df39a0-3582-e2bb-825c-01d58dbfb8f0"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1705210038965
        },
        "a-70": {
            "id": "a-70",
            "title": "Load reveal (end)",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-70-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".load-wipe",
                            "selectorGuids": ["a2df39a0-3582-e2bb-825c-01d58dbfb8f0"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1705210038965
        },
        "a-43": {
            "id": "a-43",
            "title": "Letter slide landing hero",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-43-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2500,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2500,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1706405190364
        },
        "a-42": {
            "id": "a-42",
            "title": "Letter slide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1706405190364
        },
        "a-45": {
            "id": "a-45",
            "title": "Reveal mask image",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".mask-reveal",
                            "selectorGuids": ["47bb5836-7a47-5d3a-0898-3b6c8f8d2c84"]
                        },
                        "yValue": 1,
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-45-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": [0.23, 1, 0.32, 1],
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".mask-reveal",
                            "selectorGuids": ["47bb5836-7a47-5d3a-0898-3b6c8f8d2c84"]
                        },
                        "yValue": 0,
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1706409181259
        },
        "a-47": {
            "id": "a-47",
            "title": "Dark mode",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|305d4cd9-9b92-3f89-9659-b79afac587fd"
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-47-n-3",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": {
                            "red": 22,
                            "green": 20,
                            "blue": 20,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--dark",
                            "id": null
                        }
                    }
                }, {
                    "id": "a-47-n-5",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": {
                            "red": 253,
                            "green": 247,
                            "blue": 234,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--cream",
                            "id": null
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-47-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|305d4cd9-9b92-3f89-9659-b79afac587fd"
                        },
                        "xValue": 22,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-47-n-4",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "value": {
                            "red": 253,
                            "green": 247,
                            "blue": 234,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--dark",
                            "id": null
                        }
                    }
                }, {
                    "id": "a-47-n-6",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "value": {
                            "red": 22,
                            "green": 20,
                            "blue": 20,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--cream",
                            "id": null
                        }
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1706588789708
        },
        "a-48": {
            "id": "a-48",
            "title": "Light mode",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|305d4cd9-9b92-3f89-9659-b79afac587fd"
                        },
                        "xValue": 22,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-48-n-2",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": {
                            "red": 253,
                            "green": 247,
                            "blue": 234,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--dark",
                            "id": null
                        }
                    }
                }, {
                    "id": "a-48-n-3",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": {
                            "red": 22,
                            "green": 20,
                            "blue": 20,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--cream",
                            "id": null
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-48-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|305d4cd9-9b92-3f89-9659-b79afac587fd"
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-48-n-5",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "value": {
                            "red": 22,
                            "green": 20,
                            "blue": 20,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--dark",
                            "id": null
                        }
                    }
                }, {
                    "id": "a-48-n-6",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "value": {
                            "red": 253,
                            "green": 247,
                            "blue": 234,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--cream",
                            "id": null
                        }
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1706588789708
        },
        "a-49": {
            "id": "a-49",
            "title": "Track animation 2",
            "continuousParameterGroups": [{
                "id": "a-49-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-49-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".frame",
                                "selectorGuids": ["5f4bb01b-bfe0-c441-73e1-b9b4f81359a6"]
                            },
                            "widthValue": 100,
                            "widthUnit": "vw",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }, {
                        "id": "a-49-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".st-content-small",
                                "selectorGuids": ["5f4bb01b-bfe0-c441-73e1-b9b4f81359a9"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-49-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".st-content-small",
                                "selectorGuids": ["5f4bb01b-bfe0-c441-73e1-b9b4f81359a9"]
                            },
                            "xValue": -50,
                            "yValue": -50,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-49-n-4",
                        "actionTypeId": "PLUGIN_VARIABLE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "value": {
                                "size": 12,
                                "unit": "px"
                            },
                            "target": {
                                "objectId": "@var_variable-0a6e5113-b18d-05c9-ebdb-6757bd6ee4ff",
                                "useEventTarget": "CHILDREN",
                                "selector": ".st-card",
                                "selectorGuids": ["5f4bb01b-bfe0-c441-73e1-b9b4f81359a5"]
                            }
                        }
                    }, {
                        "id": "a-49-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".st-card.primary",
                                "selectorGuids": ["5f4bb01b-bfe0-c441-73e1-b9b4f81359a5", "5f4bb01b-bfe0-c441-73e1-b9b4f81359ab"]
                            },
                            "xValue": -3,
                            "yValue": -5,
                            "xUnit": "em",
                            "yUnit": "em",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-49-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".ls-wrap-landing-hero.center",
                                "selectorGuids": ["3bda36e9-4abb-0530-088a-16f5001798e6", "012f71cb-2950-c48d-a661-fc39c4b5f4f6"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-49-n-5",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".frame",
                                "selectorGuids": ["5f4bb01b-bfe0-c441-73e1-b9b4f81359a6"]
                            },
                            "widthValue": 500,
                            "widthUnit": "vw",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }, {
                        "id": "a-49-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".st-content-small",
                                "selectorGuids": ["5f4bb01b-bfe0-c441-73e1-b9b4f81359a9"]
                            },
                            "xValue": -50,
                            "yValue": -50,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-49-n-7",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".st-content-small",
                                "selectorGuids": ["5f4bb01b-bfe0-c441-73e1-b9b4f81359a9"]
                            },
                            "xValue": 3,
                            "yValue": 3,
                            "locked": true
                        }
                    }, {
                        "id": "a-49-n-8",
                        "actionTypeId": "PLUGIN_VARIABLE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "value": {
                                "size": 0,
                                "unit": "px"
                            },
                            "target": {
                                "objectId": "@var_variable-0a6e5113-b18d-05c9-ebdb-6757bd6ee4ff",
                                "useEventTarget": "CHILDREN",
                                "selector": ".st-card",
                                "selectorGuids": ["5f4bb01b-bfe0-c441-73e1-b9b4f81359a5"]
                            }
                        }
                    }, {
                        "id": "a-49-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".st-card.primary",
                                "selectorGuids": ["5f4bb01b-bfe0-c441-73e1-b9b4f81359a5", "5f4bb01b-bfe0-c441-73e1-b9b4f81359ab"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "em",
                            "yUnit": "em",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-49-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".ls-wrap-landing-hero.center",
                                "selectorGuids": ["3bda36e9-4abb-0530-088a-16f5001798e6", "012f71cb-2950-c48d-a661-fc39c4b5f4f6"]
                            },
                            "xValue": -100,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1701681675915
        },
        "a-46": {
            "id": "a-46",
            "title": "Reveal mask image (hero)",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|b0adea79-93b8-4304-0d93-84a87039e994"
                        },
                        "yValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-46-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|0fd0bd07-f9a1-ea64-4299-7535c0e7e550"
                        },
                        "yValue": 1,
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-46-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 3000,
                        "easing": [0.23, 1, 0.32, 1],
                        "duration": 2000,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|b0adea79-93b8-4304-0d93-84a87039e994"
                        },
                        "yValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-46-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 3300,
                        "easing": [0.23, 1, 0.32, 1],
                        "duration": 2000,
                        "target": {
                            "id": "65b59d2da00c9486dd2bf3d1|0fd0bd07-f9a1-ea64-4299-7535c0e7e550"
                        },
                        "yValue": 0,
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1706409181259
        },
        "a-55": {
            "id": "a-55",
            "title": "More link letters slide up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter",
                            "selectorGuids": ["5f4809cb-8c3d-ad4b-d11b-6713ffe886f8"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-55-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter.m",
                            "selectorGuids": ["5f4809cb-8c3d-ad4b-d11b-6713ffe886f8", "b08753ab-afb4-7957-4bc2-918e531f7aac"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-55-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 50,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter.o",
                            "selectorGuids": ["5f4809cb-8c3d-ad4b-d11b-6713ffe886f8", "f149e5fb-9605-6731-8fc6-be696e5d1410"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-55-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter.r",
                            "selectorGuids": ["5f4809cb-8c3d-ad4b-d11b-6713ffe886f8", "daa4d2d4-cffc-8f93-dcdb-73d99731d541"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-55-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 150,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter.e",
                            "selectorGuids": ["5f4809cb-8c3d-ad4b-d11b-6713ffe886f8", "e9220438-8149-8f2f-3408-05b77711293b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1707003269071
        },
        "a-56": {
            "id": "a-56",
            "title": "More link letters slide down",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter",
                            "selectorGuids": ["5f4809cb-8c3d-ad4b-d11b-6713ffe886f8"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1707003269071
        },
        "a-57": {
            "id": "a-57",
            "title": "Light to dark theme",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": {
                            "red": 253,
                            "green": 247,
                            "blue": 234,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--cream",
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7"
                        }
                    }
                }, {
                    "id": "a-57-n-2",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": {
                            "red": 22,
                            "green": 20,
                            "blue": 20,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--dark",
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7"
                        }
                    }
                }, {
                    "id": "a-57-n-5",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".arrow-link-icon",
                            "selectorGuids": ["a87ae436-dd21-5499-78d6-8ab31fd06e8c"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "25b7",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-57-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".header",
                            "selectorGuids": ["b4128e7c-9db4-b0ca-30bd-c3a2374fb324"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuint",
                        "duration": 300,
                        "target": {
                            "selector": ".header",
                            "selectorGuids": ["b4128e7c-9db4-b0ca-30bd-c3a2374fb324"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-6",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".arrow-link-icon",
                            "selectorGuids": ["a87ae436-dd21-5499-78d6-8ab31fd06e8c"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "25b7",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-57-n-3",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "value": {
                            "red": 253,
                            "green": 247,
                            "blue": 234,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--dark",
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7"
                        }
                    }
                }, {
                    "id": "a-57-n-4",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "value": {
                            "red": 22,
                            "green": 20,
                            "blue": 20,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--cream",
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7"
                        }
                    }
                }, {
                    "id": "a-57-n-9",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".icon",
                            "selectorGuids": ["a0f7ce6c-d2c3-2bf5-6f4e-97e42d3db6a9"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "ea68",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1707004971894
        },
        "a-62": {
            "id": "a-62",
            "title": "Dark to light theme",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-62-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuint",
                        "duration": 0,
                        "target": {
                            "selector": ".header",
                            "selectorGuids": ["b4128e7c-9db4-b0ca-30bd-c3a2374fb324"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-62-n-9",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 0,
                        "target": {
                            "selector": ".icon",
                            "selectorGuids": ["a0f7ce6c-d2c3-2bf5-6f4e-97e42d3db6a9"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "ea68",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-62-n-6",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 0,
                        "target": {
                            "selector": ".arrow-link-icon",
                            "selectorGuids": ["a87ae436-dd21-5499-78d6-8ab31fd06e8c"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "25b7",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-62-n-7",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 0,
                        "value": {
                            "red": 253,
                            "green": 247,
                            "blue": 234,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--dark",
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7"
                        }
                    }
                }, {
                    "id": "a-62-n-8",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 0,
                        "value": {
                            "red": 22,
                            "green": 20,
                            "blue": 20,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--cream",
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7"
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-62-n",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "value": {
                            "red": 253,
                            "green": 247,
                            "blue": 234,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--cream",
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7"
                        }
                    }
                }, {
                    "id": "a-62-n-2",
                    "actionTypeId": "PLUGIN_VARIABLE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "value": {
                            "red": 22,
                            "green": 20,
                            "blue": 20,
                            "alpha": 1
                        },
                        "target": {
                            "objectId": "--dark",
                            "useEventTarget": true,
                            "id": "65b59d2da00c9486dd2bf3d1|26cb7ba9-93a2-c6ef-432a-d76ef67a25d7"
                        }
                    }
                }, {
                    "id": "a-62-n-3",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".arrow-link-icon",
                            "selectorGuids": ["a87ae436-dd21-5499-78d6-8ab31fd06e8c"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "25b7",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-62-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "inSine",
                        "duration": 500,
                        "target": {
                            "selector": ".header",
                            "selectorGuids": ["b4128e7c-9db4-b0ca-30bd-c3a2374fb324"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1707004971894
        },
        "a-60": {
            "id": "a-60",
            "title": "Expand menu button overlay",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "yValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-60-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "28897428-5881-c42a-b2d3-e378b085a7e8"
                        },
                        "globalSwatchId": "",
                        "rValue": 23,
                        "bValue": 20,
                        "gValue": 19,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-60-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {},
                        "yValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-60-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "28897428-5881-c42a-b2d3-e378b085a7e8"
                        },
                        "globalSwatchId": "",
                        "rValue": 253,
                        "bValue": 233,
                        "gValue": 246,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1707005813451
        },
        "a-61": {
            "id": "a-61",
            "title": "Contract menu button overlay",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-61-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "yValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-61-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "28897428-5881-c42a-b2d3-e378b085a7e8"
                        },
                        "globalSwatchId": "",
                        "rValue": 252,
                        "bValue": 232,
                        "gValue": 245,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-61-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {},
                        "yValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-61-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "28897428-5881-c42a-b2d3-e378b085a7e8"
                        },
                        "globalSwatchId": "",
                        "rValue": 23,
                        "bValue": 20,
                        "gValue": 19,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1707005813451
        },
        "a-63": {
            "id": "a-63",
            "title": "Reveal card image",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-63-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".card-image-reveal",
                            "selectorGuids": ["d8fdacd7-3c3b-d980-e053-3dcfdb7bcd9f"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-63-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".card-image-reveal",
                            "selectorGuids": ["d8fdacd7-3c3b-d980-e053-3dcfdb7bcd9f"]
                        },
                        "heightValue": 150,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1707012263455
        },
        "a-64": {
            "id": "a-64",
            "title": "Hide card image",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-64-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".card-image-reveal",
                            "selectorGuids": ["d8fdacd7-3c3b-d980-e053-3dcfdb7bcd9f"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1707012263455
        },
        "a-65": {
            "id": "a-65",
            "title": "Arrow mask reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-65-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-mask",
                            "selectorGuids": ["e193eb75-fbaf-941b-13d3-5044efcca2e8"]
                        },
                        "yValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-65-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6d1bcd1e-dac1-d2ea-51cb-2abd69838b69"
                        },
                        "globalSwatchId": "",
                        "rValue": 22,
                        "bValue": 20,
                        "gValue": 20,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-mask",
                            "selectorGuids": ["e193eb75-fbaf-941b-13d3-5044efcca2e8"]
                        },
                        "yValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-65-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6d1bcd1e-dac1-d2ea-51cb-2abd69838b69"
                        },
                        "globalSwatchId": "",
                        "rValue": 250,
                        "bValue": 233,
                        "gValue": 245,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1707201308422
        },
        "a-66": {
            "id": "a-66",
            "title": "Arrow mask hide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-66-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-mask",
                            "selectorGuids": ["e193eb75-fbaf-941b-13d3-5044efcca2e8"]
                        },
                        "yValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-66-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6d1bcd1e-dac1-d2ea-51cb-2abd69838b69"
                        },
                        "globalSwatchId": "",
                        "rValue": 22,
                        "bValue": 20,
                        "gValue": 20,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1707201308422
        },
        "a-23": {
            "id": "a-23",
            "title": "Load transition",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".load-wipe",
                            "selectorGuids": ["a2df39a0-3582-e2bb-825c-01d58dbfb8f0"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".load-wipe",
                            "selectorGuids": ["a2df39a0-3582-e2bb-825c-01d58dbfb8f0"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1697446754587
        },
        "a-71": {
            "id": "a-71",
            "title": "Load transition 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-71-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".load-wipe",
                            "selectorGuids": ["a2df39a0-3582-e2bb-825c-01d58dbfb8f0"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-71-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".load-wipe",
                            "selectorGuids": ["a2df39a0-3582-e2bb-825c-01d58dbfb8f0"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1697446754587
        },
        "a-72": {
            "id": "a-72",
            "title": "Letter slide hero",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-72-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-72-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-72-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-72-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".letter-slide",
                            "selectorGuids": ["00072a1a-c92a-0eee-9d63-62a02212de76"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1706405190364
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});