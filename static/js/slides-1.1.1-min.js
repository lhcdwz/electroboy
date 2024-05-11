
/*
*  Version: 1.1.1
*  UpDate:    2012/06/28
*  By: oliver, http://www.note12.com
*  mail: oliver@note12.com 
*  QQ:18015001
* 
* 
* 
* 
* 修复fade效果 , 增加容器 container 增加fadeEasing
* 
* 增加侧面缩图选项
* 
* 
* 
*/
(function (a) {
    a.fn.olvSlides = function (b) {
        a.fn.olvSlides.option = {
            container: "container",
            control: "control",
            change: "change",
            createNextPrev: true,
            next: "next",
            prev: "prev",
            createPagination: true,
            paginationClass: "pageClass",
            currentClass: "cur",
            thumb: false,
            thumbPage: true,
            thumbPrev: "thumbPrev",
            thumbNext: "thumbNext",
            thumbDirection: "X",
            bigTarget: false,
            bigTargetPrev: "bigTargetPrev",
            bigTargetNext: "bigTargetNext",
            fadeSpeed: 350,
            slideSpeed: 350,
            start: 1,
            effect: "slide",
            fadeEasing: "",
            play: 5000,
            pause: 2000,
            hoverPause: false
        };
        b = a.extend({},
        a.fn.olvSlides.option, b);
        return this.each(function () {
            a(this).children().wrapAll('<div class="' + b.container + '"/>');
            var B = a(this),
            o = a("." + b.control, B),
            q = a("." + b.change, B),
            g = a(".thumbWrap", B),
            C = a(".thumbCont", g),
            H = b.thumb ? H = C.children(":eq(0)").children().size() : H = q.children().size(),
            h = parseInt(b.start, 10) >= H ? H - 1 : parseInt(b.start - 1, 10),
            x = o.outerWidth(),
            t = b.effect,
            v = 0,
            u = 0,
            d = 0,
            w = 0,
            m,
            n,
            G,
            E,
            r,
            k,
            F,
            c,
            D,
            p,
            f,
            s,
            z;
            if (H < 2) {
                o.fadeIn(b.fadeSpeed);
                a("." + b.next + ", ." + b.prev).fadeOut(0);
                return false
            }
            function j(K, J, I) {
                if (!m) {
                    m = true;
                    switch (K) {
                        case "next":
                            u = w;
                            v = w + 1;
                            v = H === v ? 0 : v;
                            G = x * 2;
                            K = -x * 2;
                            w = v;
                            break;
                        case "prev":
                            u = w;
                            v = w - 1;
                            v = v === -1 ? H - 1 : v;
                            G = 0;
                            K = 0;
                            w = v;
                            break;
                        case "pagination":
                            v = parseInt(I, 10);
                            u = a("." + b.paginationClass + " a." + b.currentClass, B).attr("href").match("[^#/]+$");
                            if (v > u) {
                                G = x * 2;
                                K = -x * 2
                            } else {
                                G = 0;
                                K = 0
                            }
                            w = v;
                            break;
                        case "thumbClick":
                            v = parseInt(I, 10);
                            u = a("li." + b.currentClass, C).data("data");
                            if (v > u) {
                                G = x * 2;
                                K = -x * 2
                            } else {
                                G = 0;
                                K = 0
                            }
                            w = v;
                            break
                    }
                    if (J === "slide") {
                        q.children(":eq(" + v + ")").css({
                            left: G,
                            display: "block"
                        });
                        q.animate({
                            left: K
                        },
                        b.slideSpeed,
                        function () {
                            q.css({
                                left: -x
                            });
                            q.children(":eq(" + v + ")").css({
                                left: x,
                                zIndex: 5
                            });
                            q.children(":eq(" + u + ")").css({
                                left: x,
                                display: "none",
                                zIndex: 0
                            });
                            m = false
                        })
                    } else {
                        q.children(":eq(" + v + ")", B).css({
                            zIndex: 8
                        }).fadeIn(b.fadeSpeed, b.fadeEasing,
                        function () {
                            q.children(":eq(" + u + ")", B).css({
                                display: "none",
                                zIndex: 0
                            });
                            q.children(":eq(" + v + ")", B).css({
                                zIndex: 0
                            });
                            m = false
                        })
                    }
                    if (b.createPagination) {
                        a("." + b.paginationClass + " a", B).removeClass(b.currentClass);
                        a("." + b.paginationClass + " a:eq(" + v + ")", B).addClass(b.currentClass)
                    }
                    if (b.thumb) {
                        if (b.thumbDirection == "Y") {
                            F = C.children(":eq(0)").position().top;
                            c = ((D - p) / 2) - (p * w);
                            if (c < s) {
                                c = s
                            } else {
                                if (c > 0) {
                                    c = 0
                                }
                            }
                            C.children(":eq(0)").animate({
                                top: c
                            });
                            C.children(":eq(0)").children("li").removeClass("cur");
                            C.children(":eq(0)").children("li:eq(" + w + ")").addClass("cur")
                        } else {
                            F = C.children(":eq(0)").position().left;
                            c = ((D - p) / 2) - (p * w);
                            if (c < s) {
                                c = s
                            } else {
                                if (c > 0) {
                                    c = 0
                                }
                            }
                            C.children(":eq(0)").animate({
                                left: c
                            });
                            C.children(":eq(0)").children("li").removeClass("cur");
                            C.children(":eq(0)").children("li:eq(" + w + ")").addClass("cur")
                        }
                    }
                }
            }
            function y() {
                clearInterval(B.data("interval"))
            }
            function l() {
                if (b.pause) {
                    clearTimeout(B.data("pause"));
                    clearInterval(B.data("interval"));
                    r = setTimeout(function () {
                        clearTimeout(B.data("pause"));
                        k = setInterval(function () {
                            j("next", t)
                        },
                        b.play);
                        B.data("interval", k)
                    },
                    b.pause);
                    B.data("pause", r)
                } else {
                    y()
                }
            }
            if (H < 2) {
                return
            }
            if (h < 0) {
                h = 0
            }
            if (b.start) {
                w = h
            }
            B.css({
                overflow: "hidden",
                position: "relative"
            });
            o.css({
                overflow: "hidden",
                position: "relative"
            });
            o.css({
                display: "block"
            });
            if (b.thumb) {
                startT = h + 1;
                g.show();
                C.bind("mouseover",
                function () {
                    y()
                });
                C.bind("mouseleave",
                function () {
                    l()
                });
                if (b.thumbPage) {
                    g.append('<a href="#Prev" hidefocus="true" class="' + b.thumbPrev + '"><span>Up</span></a><a href="#Next" hidefocus="true" class="' + b.thumbNext + '"><span>Down</span></a>')
                }
                if (b.thumbDirection === "Y") {
                    D = C.outerHeight();
                    p = C.children(":eq(0)").children(":eq(0)").outerHeight();
                    f = Math.ceil(D / p);
                    s = -p * H + D;
                    F = C.children(":eq(0)").position().top;
                    C.children(":eq(0)").css({
                        height: p * H + "px",
                        width: "100%",
                        position: "absolute",
                        left: "0px",
                        top: "0px"
                    });
                    if (b.start > f) {
                        if ("-" + Math.ceil((p * startT) - (D / 2) - (p / 2)) < -p * H + D) {
                            C.children(":eq(0)").css({
                                top: -p * H + D + "px"
                            })
                        } else {
                            C.children(":eq(0)").css({
                                top: "-" + Math.ceil((p * startT) - (D / 2) - (p / 2)) + "px"
                            })
                        }
                    }
                    a("." + b.thumbPrev, B).click(function (I) {
                        I.preventDefault();
                        if (b.play) {
                            l()
                        }
                        e("Prev")
                    });
                    a("." + b.thumbNext, B).click(function (I) {
                        I.preventDefault();
                        if (b.play) {
                            l()
                        }
                        e("Next")
                    })
                } else {
                    D = C.outerWidth();
                    p = C.children(":eq(0)").children(":eq(0)").outerWidth();
                    f = Math.ceil(D / p);
                    s = -p * H + D;
                    F = C.children(":eq(0)").position().left;
                    C.children(":eq(0)").css({
                        width: p * H + "px",
                        height: "100%",
                        position: "absolute",
                        left: "0px",
                        top: "0px"
                    });
                    if (b.start > f) {
                        if ("-" + Math.ceil((p * startT) - (D / 2) - (p / 2)) < -p * H + D) {
                            C.children(":eq(0)").css({
                                left: -p * H + D + "px"
                            })
                        } else {
                            C.children(":eq(0)").css({
                                left: "-" + Math.ceil((p * startT) - (D / 2) - (p / 2)) + "px"
                            })
                        }
                    }
                    a("." + b.thumbPrev, B).click(function (I) {
                        I.preventDefault();
                        if (b.play) {
                            l()
                        }
                        e("Prev")
                    });
                    a("." + b.thumbNext, B).click(function (I) {
                        I.preventDefault();
                        if (b.play) {
                            l()
                        }
                        e("Next")
                    })
                }
                C.children(":eq(0)").children().click(function (I) {
                    I.preventDefault();
                    c = ((D - p) / 2) - (p * a(this).index());
                    if (c < s) {
                        c = s
                    } else {
                        if (c > 0) {
                            c = 0
                        }
                    }
                    if (b.play) {
                        l()
                    }
                    n = a(this).index();
                    if (w != n) {
                        j("thumbClick", t, n)
                    }
                    if (b.thumbDirection === "Y") {
                        C.children(":eq(0)").animate({
                            top: c
                        },
                        b.slideSpeed)
                    } else {
                        C.children(":eq(0)").animate({
                            left: c
                        },
                        b.slideSpeed)
                    }
                    C.children(":eq(0)").children().removeClass(b.currentClass);
                    a(this).addClass(b.currentClass);
                    return false
                });
                C.children(":eq(0)").children().each(function (L) {
                    var N = a(this).find("img").attr("bigImg");
                    var J = a(this).find("img").attr("url");
                    var I = a(this).find("img").attr("alt");
                    var M = a(this).find("img").attr("text");
                    var K = '<li><div class="imgWrap"><a href="' + J + '" title="' + I + '" target="_blank"><img src="' + N + '" alt="' + I + '" /></a></div><div class="opacity"></div><div class="textDesc"><div class="title"><a href="' + J + '" target="_blank">' + I + '</a></div><div class="text">' + M + "</div></div></li>";
                    a(this).data("data", L);
                    q.append(K)
                });
                C.children(":eq(0)").children("li:eq(" + h + ")").addClass("cur")
            } else {
                g.hide().remove()
            }
            if (b.createPagination && b.thumb === false) {
                o.after('<div class="' + b.paginationClass + '" style="z-index:9;"></div>');
                for (i = 0; i < H; i++) {
                    a("." + b.paginationClass, B).append('<a href="#' + i + '" hidefocus="true"><span>' + (i + 1) + "</span></a>")
                }
                a("." + b.paginationClass + " a:eq(" + v + ")", B).addClass(b.currentClass)
            }
            a("." + b.paginationClass + " a", B).click(function () {
                if (b.play) {
                    l()
                }
                n = a(this).attr("href").match("[^#/]+$");
                if (w != n) {
                    j("pagination", t, n)
                }
                return false
            });
            if (b.createNextPrev) {
                o.append('<a href="#" hidefocus="true" class="' + b.prev + '"><span>Prev</span></a>');
                a("." + b.prev, B).after('<a href="#" hidefocus="true" class="' + b.next + '"><span>Next</span></a>')
            }
            a("." + b.prev, B).click(function (I) {
                I.preventDefault();
                if (b.play) {
                    l()
                }
                j("prev", t)
            });
            a("." + b.next, B).click(function (I) {
                I.preventDefault();
                if (b.play) {
                    l()
                }
                j("next", t)
            });
            q.children().css({
                position: "absolute",
                top: 0,
                left: o.outerWidth(),
                zIndex: 0,
                display: "none"
            });
            q.css({
                position: "relative",
                width: (x * 3),
                left: -x
            });
            q.children(":eq(" + h + ")").fadeIn(b.fadeSpeed);
            function e(I) {
                if (b.thumbDirection == "Y") {
                    if (I == "Prev") {
                        F = F + D;
                        if (F > 0) {
                            F = 0
                        }
                    } else {
                        if (I == "Next") {
                            F = F - D;
                            if (F < s) {
                                F = s
                            }
                        }
                    }
                    C.children(":eq(0)").animate({
                        top: F
                    })
                } else {
                    if (I == "Prev") {
                        F = F + D;
                        if (F > 0) {
                            F = 0
                        }
                    } else {
                        if (I == "Next") {
                            F = F - D;
                            if (F < s) {
                                F = s
                            }
                        }
                    }
                    C.children(":eq(0)").animate({
                        left: F
                    })
                }
            }
            function A(I) { }
            if (b.bigTarget) {
                o.append('<div class="' + b.bigTargetPrev + '"></div><div class="' + b.bigTargetNext + '"></div>');
                a("." + b.bigTargetPrev, B).click(function (I) {
                    I.preventDefault();
                    if (b.play) {
                        l()
                    }
                    j("prev", t)
                });
                a("." + b.bigTargetNext, B).click(function (I) {
                    I.preventDefault();
                    if (b.play) {
                        l()
                    }
                    j("next", t)
                })
            }
            if (b.hoverPause && b.play) {
                q.bind("mouseover",
                function () {
                    y()
                });
                q.bind("mouseleave",
                function () {
                    l()
                })
            }
            if (b.play) {
                k = setInterval(function () {
                    j("next", t)
                },
                b.play);
                B.data("interval", k)
            }
        })
    }
})(jQuery);