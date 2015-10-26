$(function () {
    $('.tabs').tabslet({
        active: 1
    });
});

$(function () {
    $('.district').click(function () {
        var addressValue = $(this).attr("name");

        $('.district').removeClass('active');
        $(this).addClass('active');

        $('.screen_toggle').removeClass('active');
        $(addressValue).addClass('active');
    });

    $('.time').click(function () {
        var addressValue = $(this).attr("name");

        $('.time').removeClass('active');
        $(this).addClass('active');
    });

    $('.tablist').click(function () {
        var nameValue = $(this).attr("name");
        var relValue = $(this).attr("rel");
        var revValue = $(this).attr("rev");
        $('.screenB').removeClass('active');
        $(nameValue).addClass('active');
        $('.date').removeClass('active');
        $(relValue).addClass('active');
        $('.screen-r').removeClass('active');
        $(revValue).addClass('active');
    });

    $('.row').click(function () {
        $('.row').removeClass('active');
        $(this).addClass('active');
    });
});

