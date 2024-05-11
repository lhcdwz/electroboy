$(function () {
    var Toprmenu = $('.rmenu1').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > Toprmenu) {
            //$('.rmenu').css('top', $(window).scrollTop() - Toprmenu);
            $('.rmenu1').stop();
            $('.rmenu1').animate({
                top:$(window).scrollTop() - Toprmenu
            },1000);
            }
    })

    $('.ra1').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    })
    $('.ra2').click(function () {
        $('body,html').animate({ scrollTop: 1400 }, 1000);
    })
    $('.ra3').click(function () {
        $('body,html').animate({ scrollTop: 2500 }, 1000);
    })
    $('.ra4').click(function () {
        $('body,html').animate({ scrollTop: 3340 }, 1000);
    })
    $('.ra5').click(function () {
        $('body,html').animate({ scrollTop: 4770 }, 1000);
    })
});