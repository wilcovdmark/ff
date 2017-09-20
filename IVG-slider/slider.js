$('.btnRight').click(function () {
    var imagesLeft = parseInt($(this).parent().siblings('.window').children('.images').css("left"));
    var imagesWidth = parseInt($(this).parent().siblings('.window').children('.images').css("width"));
    var windowWidth = parseInt($(this).parent().siblings('.window').css("width"));
    var maxLeft = (imagesWidth - windowWidth) * -1;


    if (imagesLeft > maxLeft) {
        $(this).fadeOut(100).delay(300).fadeIn(100);
        var toLeft = imagesLeft - windowWidth;

        $(this).parent().siblings('.window').children('.images').animate({
            "left": toLeft
        });
    }

});

$('.btnLeft').click(function () {
    var windowWidth = parseInt($(this).parent().siblings('.window').css("width"));
    var imagesLeft = parseInt($(this).parent().siblings('.window').children('.images').css("left"))

    if (imagesLeft < 0) {
        $(this).fadeOut(100).delay(300).fadeIn(100);
        var toLeft = imagesLeft + windowWidth;
        $(this).parent().siblings('.window').children('.images').animate({
            "left": toLeft
        });
    }
});

$('.slider').each(function () {
    var windowWidth = parseInt($(this).children('.window').css("width"));
    var imagesWidth = $(this).find('.images').children().length * windowWidth;

    $(this).find('.images').css({
        width: imagesWidth + "px"
    });
});
