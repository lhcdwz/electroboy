$(function () {
    $('.fsp_1 h2').click(function () {
        //$('.fsp_p').hide();
        if ($(this).next('.fsp_p').css("display") == "none") {
            $('.fsp_p').hide();
            $(this).next('.fsp_p').show(500);
        }

        else {
            $(this).next('.fsp_p').hide(500);
        }
            
    })

    $('.tbm_link').click(function () {
        $('#CuPlayer2').play();
    })

    //企业荣耀
    var lindex;
    $('.featureUL li').click(function () {
        lindex = $(this).index() + 1;
        $(this).addClass('featureUL_cur').siblings().removeClass('featureUL_cur');
        $('.hon').hide().animate({
            opacity: 0,
        }, 200);
        $('.h_' + lindex).show().animate({
            opacity: 1,
        }, 500);
    })
    $('.mv2_a1').click(function () {
        $('.zz').show().animate({
            opacity: 0.8
        }, 500);
        $('.mv_video1').show().animate({
            top: "55%"
        }, 500, function () {
            $('.mv_video1').animate({
                top: "50%"
            }, 300)
        })
    })
    $('.mv2_a2').click(function () {
        $('.zz').show().animate({
            opacity: 0.8
        }, 500);
        $('.mv_video2').show().animate({
            top: "55%"
        }, 500, function () {
            $('.mv_video2').animate({
                top: "50%"
            }, 300)
        })
    })
    $('.zz').click(function () {
        $('.zz').animate({
            opacity: 0
        }, 500, function () {
            $('.zz').hide();
        });
        $('.mv_video1').animate({
            top: "-50%"
        }, 500, function () {
            $('.mv_video1').hide();
        })
        $('.mv_video2').animate({
            top: "-50%"
        }, 500, function () {
            $('.mv_video2').hide();
        })
    })
})