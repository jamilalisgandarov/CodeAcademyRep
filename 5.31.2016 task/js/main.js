jQuery(document).ready(function($) {
    $(".inside").mouseover(function(event) {
        $("img").css('transform', 'scale(1.5)');
        $(".inside").css('opacity', '0.6');

    });
    $(".inside").mouseout(function(event) {
        $("img").css('transform', 'scale(1)');
        $(this).css('opacity', '0');

    });
});
