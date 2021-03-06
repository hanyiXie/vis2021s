! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).BinaryDecisionTree = e()
}(this, (function() {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(e)
    }

    function e(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function a(t, e, a) {
        return e && i(t.prototype, e), a && i(t, a), t
    }

    function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
        return a
    }

    function s(t, e) {
        var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!i) {
            if (Array.isArray(t) || (i = function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return r(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? r(t, e) : void 0
                    }
                }(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var a = 0,
                    s = function() {};
                return {
                    s: s,
                    n: function() {
                        return a >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[a++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: s
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var n, o = !0,
            l = !1;
        return {
            s: function() {
                i = i.call(t)
            },
            n: function() {
                var t = i.next();
                return o = t.done, t
            },
            e: function(t) {
                l = !0, n = t
            },
            f: function() {
                try {
                    o || null == i.return || i.return()
                } finally {
                    if (l) throw n
                }
            }
        }
    }
    var n, o, l = (n = [], o = {}, new(function() {
            function t() {
                e(this, t)
            }
            return a(t, [{
                key: "listenTo",
                value: function(t, e) {
                    if (-1 === n.indexOf(t)) return console.error("Event: " + t + " is not registered"), !1;
                    var i = o[t].push(e);
                    return function() {
                        return o[t].splice(i - 1, 1), !0
                    }
                }
            }, {
                key: "register",
                value: function(t) {
                    return -1 !== n.indexOf(t) ? (console.error("Event: " + t + " has registered"), !1) : (n.push(t), o[t] = [], !0)
                }
            }, {
                key: "emit",
                value: function(t, e) {
                    return -1 === n.indexOf(t) ? (console.error("Event: " + t + " is not registered"), !1) : (o[t].forEach((function(t) {
                        "function" == typeof t && t(e)
                    })), !0)
                }
            }, {
                key: "remove",
                value: function(t) {
                    var e = n.indexOf(t);
                    return -1 === e ? (console.error("Event: " + t + " is not registered"), !1) : (n.splice(e, 1), delete o[t], !0)
                }
            }]), t
        }())),
        h = function() {
            function i() {
                e(this, i)
            }
            return a(i, null, [{
                key: "ZENO",
                value: function(t, e) {
                    var i = .85 * (t - e);
                    return Math.abs(i) < .05 ? e : i + e
                }
            }, {
                key: "FILL_FN",
                value: function(e, i) {
                    return i || (i = 1), "object" == t(e) && e.target > .5 || "isTarget" === e || "boolean" == typeof e && e ? "rgba(65,153,43," + i + ")" : "rgba(131, 16, 18," + i + ")"
                }
            }, {
                key: "ParseGeometryFromTreeData",
                value: function(t) {
                    var e = d3.layout.tree().separation((function(t, e) {
                            return t.parent, e.parent, 1
                        })),
                        i = e.nodes(t);
                    return i.forEach((function(t) {
                        return t.samples = +t.samples
                    })), {
                        nodes: i,
                        links: e.links(i)
                    }
                }
            }, {
                key: "arrayShuffle",
                value: function(t) {
                    for (var e = t.slice(), i = e.length - 1; i > 0; i--) {
                        var a = Math.floor(Math.random() * (i + 1)),
                            r = e[i];
                        e[i] = e[a], e[a] = r
                    }
                    return e
                }
            }, {
                key: "arrayPartition",
                value: function(t, e) {
                    if ("function" != typeof e) return console.error("callback must be a function");
                    var i, a = [],
                        r = [],
                        n = s(t);
                    try {
                        for (n.s(); !(i = n.n()).done;) {
                            var o = i.value;
                            !0 === e(o) ? a.push(o) : r.push(o)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return [a, r]
                }
            }, {
                key: "compileDataForNode",
                value: function(t, e, i) {
                    var a = [];
                    return e[i].data_rows && (e[i].data_rows.true && (a = a.concat(e[i].data_rows.true)), e[i].data_rows.false && (a = a.concat(e[i].data_rows.false))), a.map((function(e) {
                        return t.find((function(t) {
                            return t.index == e
                        }))
                    }))
                }
            }, {
                key: "compileMixForNode",
                value: function(t, e) {
                    var i = 0,
                        a = 0;
                    if (t[e].data_rows) {
                        t[e].data_rows.true && (i = t[e].data_rows.true.length), t[e].data_rows.false && (a = t[e].data_rows.false.length);
                        var r = i + a,
                            s = "isTarget";
                        return a > i && (s = "isNotTarget"), {
                            true: i / r,
                            false: a / r,
                            classification: s
                        }
                    }
                    return {
                        true: 0,
                        false: 0,
                        classification: null
                    }
                }
            }]), i
        }(),
        c = function() {
            function t(i) {
                e(this, t), Object.assign(this, i), this.scroll = 0, this.largeTextSize = 26, this.smallTextSize = 22, this.labelVerticalOffset = -this.largeTextSize - 10, this.trainingGroup = this.g.append("g"), this.trainingLine = this.trainingGroup.append("rect").attr("width", 300).attr("height", 1).attr("fill", "#aaaaaa"), this.trainingLabel = this.trainingGroup.append("text").text("訓練資料集").attr("text-anchor", "middle").attr("font-size", 9).attr("y", this.labelVerticalOffset).attr("x", 300), this.testGroup = this.g.append("g").attr("opacity", 0), this.testLine = this.testGroup.append("rect").attr("width", 300).attr("height", 1).attr("fill", "#aaaaaa"), this.testLabel = this.testGroup.append("text").text("測試資料集").attr("text-anchor", "middle").attr("font-size", 9).attr("y", this.labelVerticalOffset).attr("x", 300), this.testOpacity = 0, this.opacityInterpolator = d3.scale.linear().domain([1e5, 100100]).range([0, 1]).clamp(!0), this.results = {
                    train: {
                        isTarget: {},
                        isNotTarget: {}
                    },
                    test: {
                        isTarget: {},
                        isNotTarget: {}
                    }
                }, this.textNodes = {
                    train: {
                        isTarget: {
                            correct: this.trainingGroup.append("text"),
                            total: this.trainingGroup.append("text")
                        },
                        isNotTarget: {
                            correct: this.trainingGroup.append("text"),
                            total: this.trainingGroup.append("text")
                        },
                        accuracy: this.trainingGroup.append("text")
                    },
                    test: {
                        isTarget: {
                            correct: this.testGroup.append("text"),
                            total: this.testGroup.append("text")
                        },
                        isNotTarget: {
                            correct: this.testGroup.append("text"),
                            total: this.testGroup.append("text")
                        },
                        accuracy: this.testGroup.append("text")
                    }
                }, this.largeTextNodes = [], this.smallTextNodes = [];
                var a = -8;
                this.textNodes.train.accuracy.text("0").attr("text-anchor", "middle").attr("y", a).attr("font-size", 26).attr("fill", "#333333"), this.trainingTargetDivider = this.trainingGroup.append("text").text("/").attr("text-anchor", "middle").attr("y", a).attr("font-size", 22), this.trainingNotTargetDivider = this.trainingGroup.append("text").text("/").attr("text-anchor", "middle").attr("y", a).attr("font-size", 22), this.textNodes.train.isTarget.correct.text("0").attr("text-anchor", "end").attr("fill", h.FILL_FN(!0)).attr("y", a).attr("font-size", 22), this.textNodes.train.isTarget.total.text("0").attr("text-anchor", "start").attr("fill", h.FILL_FN(!0)).attr("y", a).attr("font-size", 22), this.textNodes.train.isNotTarget.correct.text("0").attr("text-anchor", "end").attr("fill", h.FILL_FN(!1)).attr("y", a).attr("font-size", 22), this.textNodes.train.isNotTarget.total.text("0").attr("text-anchor", "start").attr("fill", h.FILL_FN(!1)).attr("y", a).attr("font-size", 22), this.largeTextNodes.push(this.textNodes.train.accuracy), this.smallTextNodes.push(this.trainingTargetDivider), this.smallTextNodes.push(this.trainingNotTargetDivider), this.smallTextNodes.push(this.textNodes.train.isTarget.correct), this.smallTextNodes.push(this.textNodes.train.isTarget.total), this.smallTextNodes.push(this.textNodes.train.isNotTarget.correct), this.smallTextNodes.push(this.textNodes.train.isNotTarget.total), this.textNodes.test.accuracy.text("0").attr("text-anchor", "middle").attr("y", a).attr("font-size", 26).attr("fill", "#333333"), this.testTargetDivider = this.testGroup.append("text").text("/").attr("text-anchor", "middle").attr("y", a).attr("font-size", 22), this.testNotTargetDivider = this.testGroup.append("text").text("/").attr("text-anchor", "middle").attr("y", a).attr("font-size", 22), this.textNodes.test.isTarget.correct.text("0").attr("text-anchor", "end").attr("fill", h.FILL_FN(!0)).attr("y", a).attr("font-size", 22), this.textNodes.test.isTarget.total.text("0").attr("text-anchor", "start").attr("fill", h.FILL_FN(!0)).attr("y", a).attr("font-size", 22), this.textNodes.test.isNotTarget.correct.text("0").attr("text-anchor", "end").attr("fill", h.FILL_FN(!1)).attr("y", a).attr("font-size", 22), this.textNodes.test.isNotTarget.total.text("0").attr("text-anchor", "start").attr("fill", h.FILL_FN(!1)).attr("y", a).attr("font-size", 22), this.largeTextNodes.push(this.textNodes.test.accuracy), this.smallTextNodes.push(this.testTargetDivider), this.smallTextNodes.push(this.testNotTargetDivider), this.smallTextNodes.push(this.textNodes.test.isTarget.correct), this.smallTextNodes.push(this.textNodes.test.isTarget.total), this.smallTextNodes.push(this.textNodes.test.isNotTarget.correct), this.smallTextNodes.push(this.textNodes.test.isNotTarget.total), l.listenTo("__global_scroll", this.handleScroll.bind(this)), l.listenTo("__global_resize", this.handleResize.bind(this)), this.rr = !0, i.renderer.views.push(this)
            }
            return a(t, [{
                key: "handleResize",
                value: function(t) {
                    Object.assign(this, t);
                    var e = .37 * this.width,
                        i = .63 * this.width;
                    this.trainingGroup.attr("transform", "translate(0, " + this.baseline.training + ")"), this.trainingLine.attr("width", this.width), this.trainingLabel.attr("x", this.width / 2), this.textNodes.train.accuracy.attr("x", this.width / 2), this.trainingTargetDivider.attr("x", i), this.textNodes.train.isTarget.correct.attr("x", i - 5), this.textNodes.train.isTarget.total.attr("x", i + 5), this.trainingNotTargetDivider.attr("x", e), this.textNodes.train.isNotTarget.correct.attr("x", e - 5), this.textNodes.train.isNotTarget.total.attr("x", e + 5), this.testGroup.attr("transform", "translate(0, " + this.baseline.test + ")"), this.testLine.attr("width", this.width), this.testLabel.attr("x", this.width / 2), this.textNodes.test.accuracy.attr("x", this.width / 2), this.testTargetDivider.attr("x", i), this.textNodes.test.isTarget.correct.attr("x", i - 3), this.textNodes.test.isTarget.total.attr("x", i + 3), this.testNotTargetDivider.attr("x", e), this.textNodes.test.isNotTarget.correct.attr("x", e - 3), this.textNodes.test.isNotTarget.total.attr("x", e + 3), this.width < 800 ? (this.largeTextSize = 18, this.smallTextSize = 16) : (this.largeTextSize = 26, this.smallTextSize = 22), this.largeTextNodes.forEach(function(t) {
                        t.attr("font-size", this.largeTextSize)
                    }.bind(this)), this.smallTextNodes.forEach(function(t) {
                        t.attr("font-size", this.smallTextSize)
                    }.bind(this)), this.labelVerticalOffset = -this.largeTextSize - 10, this.testLabel.attr("y", this.labelVerticalOffset), this.trainingLabel.attr("y", this.labelVerticalOffset);
                    var a = window.innerHeight / 3,
                        r = this.scrollExtent.test[0];
                    this.opacityInterpolator.domain([r - a, r]), this.handleScroll(this.scroll), this.rr = !0
                }
            }, {
                key: "updateNumber",
                value: function(t, e, i) {
                    this.results[t][e] = i, this.rr = !0
                }
            }, {
                key: "handleScroll",
                value: function(t) {
                    this.scroll = t;
                    var e = Math.round(100 * this.opacityInterpolator(t)) / 100;
                    this.testOpacity != e && (this.rr = !0, this.testOpacity = e)
                }
            }, {
                key: "render",
                value: function() {
                    var t = Math.round((this.results.train.isTarget.correct + this.results.train.isNotTarget.correct) / (this.results.train.isTarget.total + this.results.train.isNotTarget.total) * 1e3) / 10;
                    this.textNodes.train.accuracy.text(t + "%"), isNaN(t) ? this.textNodes.train.accuracy.attr("opacity", 0) : this.textNodes.train.accuracy.attr("opacity", 1), this.textNodes.train.isTarget.correct.text(this.results.train.isTarget.correct), this.textNodes.train.isNotTarget.correct.text(this.results.train.isNotTarget.correct), this.textNodes.train.isTarget.total.text(this.results.train.isTarget.total), this.textNodes.train.isNotTarget.total.text(this.results.train.isNotTarget.total), this.testGroup.attr("opacity", this.testOpacity);
                    var e = Math.round((this.results.test.isTarget.correct + this.results.test.isNotTarget.correct) / (this.results.test.isTarget.total + this.results.test.isNotTarget.total) * 1e3) / 10;
                    this.textNodes.test.accuracy.text(e + "%"), isNaN(e) ? this.textNodes.test.accuracy.attr("opacity", 0) : this.textNodes.test.accuracy.attr("opacity", 1), this.textNodes.test.isTarget.correct.text(this.results.test.isTarget.correct), this.textNodes.test.isNotTarget.correct.text(this.results.test.isNotTarget.correct), this.textNodes.test.isTarget.total.text(this.results.test.isTarget.total), this.textNodes.test.isNotTarget.total.text(this.results.test.isNotTarget.total)
                }
            }]), t
        }(),
        d = function() {
            function t(i) {
                e(this, t);
                var a = i.el,
                    r = i.trainingSection,
                    s = i.testSection,
                    n = i.allTreeData,
                    o = n.treeData,
                    d = n.training,
                    u = n.training_stats,
                    p = n.test,
                    f = n.test_stats,
                    g = i.renderer;
                Object.assign(this, {
                    el: d3.select(a),
                    trainingSection: r,
                    testSection: s,
                    treeData: o,
                    training: d,
                    training_stats: u,
                    test: p,
                    test_stats: f
                }), this.paddingRight = 20, this.ballRadius = 3, this.ballSpacing = this.ballRadius + 5, this.labelOffset = 30, this.svg = this.el.append("svg"), this.flood = i.flood, this.pathGroup = this.svg.append("g"), this.circleGroup = this.svg.append("g"), this.labelsGroup = this.svg.append("g"), this.hoverGroup = this.svg.append("g"), this.resultsGroup = this.svg.append("g"), this.resultsView = new c({
                    g: this.resultsGroup,
                    renderer: g
                }), this.trainingSamples = [], this.testSamples = [], this.splitLabels = [], this.sampleIndex = [], this.tree = h.ParseGeometryFromTreeData(this.treeData), this.trainingSamples = this.setUpAbstractGeometry(this.training, this.training_stats, "train"), this.testSamples = this.setUpAbstractGeometry(this.test, this.test_stats, "test"), this.tree.nodes.forEach(function(t) {
                    var e, i, a = this.labelsGroup.append("g"),
                        r = a.append("g"),
                        s = r.append("g"),
                        n = this.hoverGroup.append("g");
                    t.key ? (e = t.value, i = t.key) : (e = "", i = "");
                    var o = s.append("text");
                    o.attr("text-anchor", "end").attr("x", 2 * -this.ballSpacing).attr("font-size", 11).attr("y", 26).text(i + " <= " + e);
                    var l = s.append("text");
                    l.attr("x", 2 * this.ballSpacing).attr("font-size", 11).attr("y", 26).text(i + " > " + e);
                    var h, c, d = a.append("g"),
                        u = a.append("g"),
                        p = d.append("path").attr("fill", "none").attr("stroke-width", 1),
                        f = u.append("path").attr("fill", "none").attr("stroke-width", 1),
                        g = a.append("rect").attr("opacity", 0),
                        y = a.append("rect").attr("opacity", 0);
                    t.children && (h = n.append("rect").classed("leftHover", !0).attr("x", -60).attr("width", 60).attr("y", .6 * this.labelOffset).attr("height", 60).attr("opacity", 0).on("mouseenter", function() {
                        this.splitID = t.children[0].id, this.rr = !0
                    }.bind(this)).on("mouseleave", function() {
                        this.splitID = null, this.rr = !0
                    }.bind(this)), c = n.append("rect").classed("rightHover", !0).attr("x", 0).attr("width", 60).attr("y", .6 * this.labelOffset).attr("height", 60).attr("opacity", 0).on("mouseenter", function() {
                        this.splitID = t.children[1].id, this.rr = !0
                    }.bind(this)).on("mouseleave", function() {
                        this.splitID = null, this.rr = !0
                    }.bind(this))), this.splitLabels.push({
                        node: t,
                        layer: a,
                        overlayLayer: r,
                        hoverLayer: n,
                        leftHover: h,
                        rightHover: c,
                        leftArrow: d,
                        rightArrow: u,
                        leftLine: p,
                        rightLine: f,
                        leftLeaf: g,
                        rightLeaf: y,
                        leftText: o,
                        rightText: l
                    })
                }.bind(this)), this.handleResize(), l.listenTo("__global_scroll", this.handleScroll.bind(this)), l.listenTo("__global_resize", this.handleResize.bind(this)), this.sampleID = null, this.splitID = null, this.rr = !0, g.views.push(this)
            }
            return a(t, [{
                key: "setUpAbstractGeometry",
                value: function(t, e, i) {
                    var a = [],
                        r = t.map(function(t) {
                            var e = this.pathGroup.append("path");
                            e.attr("stroke-width", 1).attr("stroke", h.FILL_FN(t)).attr("fill", "none").attr("opacity", 0);
                            var r = this.circleGroup.append("circle");
                            return r.on("mouseenter", function() {
                                this.sampleID = t.index, this.rr = !0
                            }.bind(this)).on("mouseleave", function() {
                                this.sampleID = null, this.rr = !0
                            }.bind(this)).attr("fill", h.FILL_FN(t)).attr("stroke-width", 1).attr("stroke", h.FILL_FN(t)).attr("r", this.ballRadius), a.push(t.index), {
                                groupID: i,
                                attributes: t,
                                waypoints: [],
                                treeCoordinates: [],
                                path: e,
                                circle: r,
                                x: 0,
                                y: 0
                            }
                        }.bind(this));
                    e.forEach(function(t) {
                        t.data.forEach(function(e) {
                            var i = a.indexOf(e.index);
                            if (i >= 0) {
                                var s = {
                                    x: this.tree.nodes[parseInt(t.node)].x,
                                    y: this.tree.nodes[parseInt(t.node)].y
                                };
                                r[i].waypoints.push(t.node), r[i].treeCoordinates.push(s)
                            }
                        }.bind(this))
                    }.bind(this)), r.forEach(function(t) {
                        var e = parseInt(t.waypoints[t.waypoints.length - 1]),
                            i = this.training_stats[e].mix.classification;
                        t.classification = i, t.attributes.target > .5 ? t.correctlyClassified = "isTarget" === t.classification : t.correctlyClassified = "isNotTarget" === t.classification, t.correctlyClassified || t.circle.attr("fill", "none")
                    }.bind(this)), (r = h.arrayShuffle(r)).length;
                    var s = h.arrayPartition(r, (function(t) {
                            return "isTarget" == t.classification
                        })),
                        n = s[0].length,
                        o = s[1].length,
                        l = 0,
                        c = 0;
                    s[0].forEach((function(t) {
                        var e = l;
                        t.correctlyClassified ? l++ : (e = n - c - 1, c++);
                        var i = e % 5,
                            a = Math.floor(e / 5);
                        t.pileCoordinates = {
                            row: a,
                            col: i
                        }
                    }));
                    var d = 0,
                        u = 0;
                    return s[1].forEach((function(t) {
                        var e = d;
                        t.correctlyClassified ? d++ : (e = o - u - 1, u++);
                        var i = e % 5,
                            a = Math.floor(e / 5);
                        t.pileCoordinates = {
                            row: a,
                            col: i
                        }
                    })), r
                }
            }, {
                key: "updateSamplePath",
                value: function(t, e, i) {
                    var a;
                    a = this.flood ? "M " + i.x + " " + i.y + " " : "M " + this.funnelStart.x + " " + this.funnelStart.y + " ";
                    var r = 0;
                    t.treeCoordinates.forEach(function(t, e) {
                        r = this.treeScales.x(t.x), a += "L " + this.treeScales.x(t.x) + " " + this.treeScales.y(t.y) + " ", a += "L " + this.treeScales.x(t.x) + " " + (this.treeScales.y(t.y) + this.labelOffset) + " "
                    }.bind(this)), a += "L " + r + " " + this.treeScales.y(1.1) + " ";
                    var s = this.baseline.training;
                    if ("test" === t.groupID && (s = this.baseline.test), "isTarget" === t.classification) {
                        a += "L " + this.treeScales.x(.75) + " " + this.treeScales.y(1.2) + " ";
                        var n = this.treeScales.x(1.05) + t.pileCoordinates.row * this.ballSpacing * -1 + -this.ballSpacing / 2 * t.pileCoordinates.col,
                            o = t.pileCoordinates.col * this.ballSpacing * -.86 + s;
                        a += "L " + n + " " + o + " "
                    } else {
                        a += "L " + this.treeScales.x(.25) + " " + this.treeScales.y(1.2) + " ";
                        n = this.treeScales.x(.02) + t.pileCoordinates.row * this.ballSpacing + this.ballSpacing / 2 * t.pileCoordinates.col, o = t.pileCoordinates.col * this.ballSpacing * -.86 + s;
                        a += "L " + n + " " + o + " "
                    }
                    t.path.attr("d", a), t.pathLength = t.path.node().getTotalLength()
                }
            }, {
                key: "handleResize",
                value: function() {
                    this.bounds = this.el.node().getBoundingClientRect(), this.offsetTop = this.el.node().offsetTop;
                    var t = window.innerHeight;
                    this.bounds.width > 850 ? (this.ballRadius = 3, this.ballSpacing = this.ballRadius + 5) : this.bounds.width > 650 ? (this.ballRadius = 2, this.ballSpacing = this.ballRadius + 4) : (this.ballRadius = 1.5, this.ballSpacing = this.ballRadius + 3), this.trainingSamples.forEach(function(t) {
                        t.circle.attr("r", this.ballRadius)
                    }.bind(this)), this.testSamples.forEach(function(t) {
                        t.circle.attr("r", this.ballRadius)
                    }.bind(this)), this.svg.attr("width", this.bounds.width - this.paddingRight).attr("height", this.bounds.height);
                    var e = {
                        x: [0, this.bounds.width - this.paddingRight - 40],
                        y: [.05 * this.bounds.height + this.ballSpacing, .6 * this.bounds.height]
                    };
                    this.treeScales = {
                        x: d3.scale.linear().domain([0, 1]).range(e.x),
                        y: d3.scale.linear().domain([0, 1]).range(e.y)
                    }, this.funnelStart = {
                        x: this.treeScales.x(this.tree.nodes[0].x),
                        y: .05 * this.bounds.height
                    }, this.targetCount = {
                        train: 0,
                        test: 0
                    }, this.notTargetCount = {
                        train: 0,
                        test: 0
                    }, this.splitLabels.forEach(function(t) {
                        var e = this.treeScales.x(t.node.x),
                            i = this.treeScales.y(t.node.y);
                        if (t.node.children) {
                            t.hoverLayer.attr("transform", "translate(" + e + ", " + i + ")"), t.overlayLayer.attr("transform", "translate(" + e + ", " + i + ")");
                            var a = e - this.treeScales.x(t.node.children[0].x),
                                r = this.treeScales.y(t.node.children[0].y) - i;
                            t.leftHover.attr("fill", "transparent").attr("opacity", 1).attr("x", -a).attr("y", .3 * r).attr("width", a).attr("height", r), t.rightHover.attr("fill", "transparent").attr("opacity", 1).attr("y", .3 * r).attr("width", a).attr("height", r);
                            var s = this.treeScales.y(t.node.y) + this.labelOffset + this.ballSpacing,
                                n = e - this.treeScales.x(t.node.children[0].x),
                                o = e - this.treeScales.x(t.node.children[1].x),
                                l = s - (this.treeScales.y(t.node.children[0].y) + this.ballSpacing),
                                c = Math.sqrt(l * l + n * n) - this.ballSpacing,
                                d = Math.atan(l / n) + Math.PI,
                                u = Math.atan(l / o),
                                p = e + Math.cos(d) * c,
                                f = e + Math.cos(u) * c,
                                g = s + Math.sin(d) * c,
                                y = s + Math.sin(u) * c,
                                x = "";
                            x += "M " + e + " " + (i + this.labelOffset + this.ballSpacing) + " ", x += "L " + p + " " + g + " ", x += "L " + p + " " + (this.treeScales.y(t.node.children[0].y) + this.labelOffset - this.ballSpacing) + " ", t.leftLine.attr("d", x);
                            var b = "";
                            if (b += "M " + e + " " + (i + this.labelOffset + this.ballSpacing) + " ", b += "L " + f + " " + y + " ", b += "L " + f + " " + (this.treeScales.y(t.node.children[0].y) + this.labelOffset - this.ballSpacing) + " ", t.rightLine.attr("d", b), !t.node.children[0].children) {
                                var v = h.FILL_FN("isTarget");
                                t.node.children[0].value[0] > t.node.children[0].value[1] && (v = h.FILL_FN("isNotTarget")), t.leftLeaf.attr("opacity", 1).attr("x", p - 1).attr("y", g + 14).attr("fill", v).attr("width", 2).attr("height", 10)
                            }
                            if (!t.node.children[1].children) {
                                v = h.FILL_FN("isTarget");
                                t.node.children[1].value[0] > t.node.children[1].value[1] && (v = h.FILL_FN("isNotTarget")), t.rightLeaf.attr("opacity", 1).attr("x", f - 1).attr("y", y + 14).attr("fill", v).attr("width", 2).attr("height", 10)
                            }
                        } else t.overlayLayer.attr("style", "display: none;")
                    }.bind(this)), this.baseline = {}, this.baseline.training = .93 * this.bounds.height, this.baseline.test = this.baseline.training - 9 * this.ballSpacing;
                    var i = this.el.node().getBoundingClientRect(),
                        a = this.treeScales.x(this.trainingSamples[0].treeCoordinates[0].x),
                        r = a - 3 * this.ballRadius,
                        s = i.y;
                    this.trainingSamples.forEach(function(t) {
                        this.updateSamplePath(t, null, {
                            x: r,
                            y: s
                        }), r - 3 * this.ballRadius < 0 ? (r = a - 3 * this.ballRadius, s += 3 * this.ballRadius) : r -= 3 * this.ballRadius
                    }.bind(this));
                    var n = a + 3 * this.ballRadius,
                        o = i.y;
                    this.testSamples.forEach(function(t) {
                        this.updateSamplePath(t, null, {
                            x: n,
                            y: o
                        }), n + 3 * this.ballRadius > i.width ? (n = a + 3 * this.ballRadius, o += 3 * this.ballRadius) : n += 3 * this.ballRadius
                    }.bind(this));
                    var l = this.trainingSection.offsetTop - .3 * t,
                        c = 1.2 * t,
                        d = this.testSection.offsetTop,
                        u = d + 1.5 * t,
                        p = Math.round(t / 4),
                        f = Math.floor((c - l - p) / this.trainingSamples.length),
                        g = Math.floor((u - d - p) / this.testSamples.length);
                    this.trainingSamples.forEach((function(t, e) {
                        var i = l + e * f,
                            a = l + p;
                        t.scrollExtent = [i, a], t.scrollDuration = p
                    })), this.testSamples.forEach((function(t, e) {
                        var i = d + e * g,
                            a = d + p;
                        t.scrollExtent = [i, a], t.scrollDuration = p
                    })), this.resultsView.handleResize({
                        width: this.bounds.width,
                        baseline: {
                            training: this.baseline.training + this.ballSpacing,
                            test: this.baseline.test + this.ballSpacing
                        },
                        scrollExtent: {
                            training: [l, c],
                            test: [d, u]
                        }
                    }), this.rr = !0
                }
            }, {
                key: "updatePointPosition",
                value: function(t, e) {
                    var i = 4 * (e - t.scrollExtent[0]);
                    i < 0 && (i = 0), i > t.pathLength ? (i = t.pathLength, t.done = !0) : t.done = !1;
                    var a = t.path.node().getPointAtLength(i);
                    return (t.x != a.x || t.y != a.y) && (t.x = a.x, t.y = a.y, t.rr = !0, !0)
                }
            }, {
                key: "handleScroll",
                value: function(t) {
                    var e = {
                        train: {
                            isTarget: {
                                correct: 0,
                                total: 0
                            },
                            isNotTarget: {
                                correct: 0,
                                total: 0
                            }
                        },
                        test: {
                            isTarget: {
                                correct: 0,
                                total: 0
                            },
                            isNotTarget: {
                                correct: 0,
                                total: 0
                            }
                        }
                    };
                    this.trainingSamples.forEach(function(i) {
                        this.rr = this.updatePointPosition(i, t) || this.rr, i.done && (e.train[i.classification].total++, i.correctlyClassified && e.train[i.classification].correct++)
                    }.bind(this)), this.testSamples.forEach(function(i) {
                        this.rr = this.updatePointPosition(i, t) || this.rr, i.done && (e.test[i.classification].total++, i.correctlyClassified && e.test[i.classification].correct++)
                    }.bind(this)), ["train", "test"].forEach(function(t) {
                        ["isTarget", "isNotTarget"].forEach(function(i) {
                            e[t][i].total > 0 ? e[t][i].percent = Math.round(e[t][i].correct / e[t][i].total * 100) : e[t][i].percent = 0, this.resultsView.updateNumber(t, i, e[t][i])
                        }.bind(this))
                    }.bind(this))
                }
            }, {
                key: "renderSamples",
                value: function(t) {
                    t.rr && t.circle.attr("cx", t.x).attr("cy", t.y), this.sampleID ? (this.sampleID == t.attributes.index && t.path.attr("opacity") <= 0 && t.path.attr("opacity", 1).attr("style", "display: initial"), this.sampleID != t.attributes.index && t.path.attr("opacity") > 0 && t.path.attr("opacity", 0).attr("style", "display: none")) : this.splitID && (t.waypoints.indexOf(this.splitID) >= 0 ? t.path.attr("opacity", .1).attr("style", "display: initial") : t.path.attr("opacity", 0).attr("style", "display: none")), this.sampleID || this.splitID || t.path.attr("opacity", 0).attr("style", "display: none")
                }
            }, {
                key: "render",
                value: function() {
                    this.trainingSamples.forEach(function(t) {
                        this.renderSamples(t)
                    }.bind(this)), this.testSamples.forEach(function(t) {
                        this.renderSamples(t)
                    }.bind(this)), this.splitLabels.forEach(function(t) {
                        this.splitID ? t.node.children && (this.splitID == t.node.children[0].id ? (t.leftText.attr("style", "display: block;"), t.leftLine.attr("stroke", "#333333").attr("stroke-width", 2)) : (t.leftText.attr("style", "display: none;"), t.leftLine.attr("stroke", "#bbbbbb").attr("stroke-width", 1)), this.splitID == t.node.children[1].id ? (t.rightText.attr("style", "display: block;"), t.rightLine.attr("stroke", "#333333").attr("stroke-width", 2)) : (t.rightText.attr("style", "display: none;"), t.rightLine.attr("stroke", "#bbbbbb").attr("stroke-width", 1))) : (t.rightText.attr("style", "display: none;"), t.leftText.attr("style", "display: none;"), t.leftLine.attr("stroke", "#bbbbbb").attr("stroke-width", 1), t.rightLine.attr("stroke", "#bbbbbb").attr("stroke-width", 1))
                    }.bind(this))
                }
            }]), t
        }(),
        u = function(t, e) {
            var i, a = s(e);
            try {
                for (a.s(); !(i = a.n()).done;) {
                    var r = i.value;
                    r.data = h.compileDataForNode(t, e, r.node), r.mix = h.compileMixForNode(e, r.node)
                }
            } catch (t) {
                a.e(t)
            } finally {
                a.f()
            }
        },
        p = function() {
            function t() {
                e(this, t), this.views = []
            }
            return a(t, [{
                key: "renderScene",
                value: function() {
                    this.views.forEach((function(t, e) {
                        t.rr && (t.rr = !1, t.render())
                    }))
                }
            }]), t
        }();
    return function() {
        function t(i) {
            e(this, t);
            var a = i.el,
                r = i.trainingSection,
                s = i.testSection,
                n = i.flood;
            this.renderer = null, this._flood = "boolean" != typeof n || n, this.data = null, this.isInstall = !1, this.el = "string" == typeof a ? document.querySelector(a) : a, this.trainingSection = "string" == typeof r ? document.querySelector(r) : r, this.testSection = "string" == typeof s ? document.querySelector(s) : s
        }
        return a(t, [{
            key: "setDataFromObject",
            value: function(t) {
                this.data = t
            }
        }, {
            key: "setDataFromJson",
            value: function(t, e) {
                var i = new XMLHttpRequest,
                    a = this;
                if ("function" != typeof e) return new Promise((function(e, r) {
                    i.onload = function() {
                        a.data = JSON.parse(i.responseText), e()
                    }, i.open("GET", t), i.send()
                }));
                i.onload = function() {
                    a.data = JSON.parse(i.responseText), e()
                }, i.open("GET", t), i.send()
            }
        }, {
            key: "install",
            value: function() {
                if (null === this.data) return console.error("No data"), new Error("No Data");
                var t = new p,
                    e = this.data,
                    i = e.tree_data,
                    a = e.tree_training_set,
                    r = e.tree_stats,
                    s = e.tree_test_set,
                    n = e.test_stats;
                u(a, r), u(s, n), l.register("__global_scroll"), window.addEventListener("scroll", (function() {
                    var t = window.pageYOffset;
                    l.emit("__global_scroll", t - .3 * window.innerHeight)
                })), l.register("__global_resize"), window.addEventListener("resize", (function() {
                    l.emit("__global_resize")
                })), new d({
                    el: this.el,
                    trainingSection: this.trainingSection,
                    testSection: this.testSection,
                    allTreeData: {
                        treeData: i,
                        training: a,
                        training_stats: r,
                        test: s,
                        test_stats: n
                    },
                    renderer: t,
                    flood: this._flood
                }), this.renderer = t, this.isInstall = !0
            }
        }, {
            key: "play",
            value: function() {
                if (!this.isInstall) return console.error("Not Installed!"), new Error("Not Installed!");
                var t, e = !1,
                    i = this;
                return t = window.requestAnimationFrame((function a() {
                        e || (t = window.requestAnimationFrame(a), i.renderer.renderScene())
                    })),
                    function() {
                        e = !0, window.cancelAnimationFrame(t)
                    }
            }
        }]), t
    }()
}));