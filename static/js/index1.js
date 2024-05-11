$(function () {
    $('.i4_link').hover(function () {
        $('.i4_t').addClass('i4_tiao');
    }, function () {
        $('.i4_t').removeClass('i4_tiao');
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            if ($('.i1_erw').css("right") == "-600px") {
                $('.i1_erw').animate({
                    right:-300
                }, 1000);
            }
        }
    })
    $('.index3_prev').click(function () {
        $('.index3_bimg').hide().css({
            width: 266,
            height: 323,
            top: 106
        });
        $('.index3_lunbo li').removeClass('index3_cur').removeClass('index3_cur_left').removeClass('index3_cur_right').css('opacity', 1);
        $('.index3_lunbo li:eq(1)').addClass('index3_cur');
        $('.index3_lunbo li:eq(1)').addClass('index3_cur_left');

        $(".index3_lunbo").css("margin-left", "-315px");
        $(".index3_lunbo").prepend($(".index3_lunbo li:last").clone());
        $(".index3_lunbo li:last").remove();
        $('.index3_lunbo li:eq(2)').find('.index3_bimg').show().animate({
            width: 646,
            height: 511,
            top: 0
        }, 500);
        $('.index3_lunbo').animate({
            marginLeft: 0
        }, 500, function () {
            $('.index3_lunbo li:eq(0)').animate({
                opacity: 0.5
            }, 500);
            $('.index3_lunbo li:eq(4)').animate({
                opacity: 0.5
            }, 500);
        })
    })

    $('.index3_next').click(function () {
        $('.index3_bimg').hide().css({
            width: 266,
            height: 323,
            top: 106
        });
        $('.index3_lunbo li').removeClass('index3_cur').removeClass('index3_cur_left').removeClass('index3_cur_right').css('opacity', 1);
        $('.index3_lunbo li:eq(3)').addClass('index3_cur');
        $('.index3_lunbo li:eq(3)').addClass('index3_cur_right');
        $('.index3_lunbo li:eq(3)').find('.index3_bimg').show().animate({
            width: 646,
            height: 511,
            top: 0
        }, 500);
        $('.index3_lunbo').animate({
            marginLeft: -315
        }, 500, function () {
            $(".index3_lunbo").append($(".index3_lunbo li:first").clone());
            $(".index3_lunbo li:first").remove();
            $(".index3_lunbo").css("margin-left", "0");
            $('.index3_lunbo li:eq(0)').animate({
                opacity: 0.5
            }, 500);
            $('.index3_lunbo li:eq(4)').animate({
                opacity: 0.5
            }, 500);
        })
    })
});