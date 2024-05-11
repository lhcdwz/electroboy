$(function () {
    var Toprmenu = $('.rmenu').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > Toprmenu) {
            //$('.rmenu').css('top', $(window).scrollTop() - Toprmenu);
            $('.rmenu').stop();
            $('.rmenu').animate({
                top:$(window).scrollTop() - Toprmenu
            },1000);
            }
        })
});