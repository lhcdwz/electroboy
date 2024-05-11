$(function () {
    //顶菜单选择
    var url1;
    var tmpurl2;
    var thisurl2;

    url1 = document.URL;
    tmpurl2 = url1.split("/");
    thisurl2 = tmpurl2[tmpurl2.length - 1];
    tmpurl3 = thisurl2.split(".");
    thisurl3 = tmpurl3[tmpurl3.length - 2];
    //alert(thisurl3 + '-t');
    if (thisurl3 == null) thisurl3 = 'index';
    $('.' + thisurl3 + '-t').addClass('menu_cur').siblings().removeClass("menu_cur");

    $('.return_top_index').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 750) {
            $('.return_top_index').fadeIn(500);
        }
        else
            $('.return_top_index').fadeOut(500);
    })
})