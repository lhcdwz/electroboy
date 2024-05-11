$(function () {
    var iid;
    var i;
    $(".park_dian").mouseover(function () {
        iid = $(this).attr('id');
        if ($('.p_' + iid).css('opacity') == 0) {
            $(this).addClass('park_dian_cur').siblings().removeClass('park_dian_cur');
            $('.park_map_line').css('opacity', 0);
            $('.park_map_line1').css('left', 268);
            $('.park_map_line2').css('top', 700);
            $('.park_map_line3').css('left', 368);
            $('.park_map_line4').css('top', 200);
            $('.park_in').hide().css('opacity', 0);
            $('.park_map_line1').animate({
                left: 8,
                opacity: 1,
            }, 500);
            $('.park_map_line3').animate({
                left: 286,
                opacity: 1,
            }, 500);
            $('.park_map_line2').animate({
                top: 200,
                opacity: 1,
            }, 500);
            $('.park_map_line4').animate({
                top: 348,
                opacity: 1,
            }, 500);
            $('.p_' + iid).show().animate({
                opacity: 1,
            }, 800);
        }
    });

    //鼠标滚动出现
    var windowHeight = $(window).height();
    var a2Top = $('.company_1').offset().top;
    var layout_dian_length = $('.park_dian ').length;
    var scroll_flag = 0;
    $(window).scroll(function () {
        if ($(window).scrollTop() > a2Top - windowHeight / 2 - 200 && scroll_flag == 0) {
            scroll_flag = 1;
            for (var n = 1; n <= 30; n++) {
                var nn1 = 300 + 50 * n;
                var nn2 = 500 + 20 * n;
                var nn3 = 600 + 50 * n;
                $("#pa_" + n).animate({
                    opacity: 1,
                }, nn1);
                $("#pa_" + n + " div").animate({
                    bottom: 30,
                }, nn2);
                $("#pa_" + n + " div").animate({
                    bottom: 0
                }, 100);
                $("#pa_" + n + " b").animate({
                    bottom: 45
                });

            }
        }
    })
    //var windowHeight = $(window).height();
    //var a2Top = $('.company_1').offset().top;
    //var scroll_flag = 0;
    //$(window).scroll(function () {
    //    //alert(main2Top - windowHeight / 2);
    //    if ($(window).scrollTop() > a2Top - windowHeight / 2 - 200 && scroll_flag == 0) {
    //        scroll_flag = 1;
    //        $("#pa_1").animate({
    //            opacity: 1,
    //        }, 300, function () {
    //            $("#pa_1 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_1 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_1 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });
    //        $("#pa_2").animate({
    //            opacity: 1,
    //        }, 350, function () {
    //            $("#pa_2 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_2 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_2 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });
    //        $("#pa_3").animate({
    //            opacity: 1,
    //        }, 400, function () {
    //            $("#pa_3 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_3 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_3 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });
    //        $("#pa_4").animate({
    //            opacity: 1,
    //        }, 450, function () {
    //            $("#pa_4 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_4 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_4 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });
    //        $("#pa_5").animate({
    //            opacity: 1,
    //        }, 500, function () {
    //            $("#pa_5 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_5 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_5 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });
    //        $("#pa_6").animate({
    //            opacity: 1,
    //        }, 550, function () {
    //            $("#pa_6 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_6 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_6 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });
    //        $("#pa_7").animate({
    //            opacity: 1,
    //        }, 600, function () {
    //            $("#pa_7 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_7 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_7 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });
    //        $("#pa_8").animate({
    //            opacity: 1,
    //        }, 650, function () {
    //            $("#pa_8 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_8 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_8 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });
    //        $("#pa_9").animate({
    //            opacity: 1,
    //        }, 700, function () {
    //            $("#pa_9 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_9 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_9 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });

    //        $("#pa_10").animate({
    //            opacity: 1,
    //        }, 700, function () {
    //            $("#pa_10 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_10 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_10 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });

    //        $("#pa_11").animate({
    //            opacity: 1,
    //        }, 700, function () {
    //            $("#pa_11 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_11 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_11 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });

    //        $("#pa_12").animate({
    //            opacity: 1,
    //        }, 700, function () {
    //            $("#pa_12 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_12 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_12 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });

    //        $("#pa_13").animate({
    //            opacity: 1,
    //        }, 700, function () {
    //            $("#pa_13 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_13 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_13 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });
    //        $("#pa_14").animate({
    //            opacity: 1,
    //        }, 700, function () {
    //            $("#pa_14 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_14 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_14 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });
    //        $("#pa_15").animate({
    //            opacity: 1,
    //        }, 700, function () {
    //            $("#pa_15 div").animate({
    //                bottom: 30,
    //            }, 500, function () {
    //                $("#pa_15 div").animate({
    //                    bottom: 0
    //                }, 100, function () {
    //                    $("#pa_15 b").animate({
    //                        bottom: 50
    //                    });
    //                })
    //            })
    //        });
    //  }
    // });
})


