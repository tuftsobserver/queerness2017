jQuery(document).ready(function($) {
    // Put all variables in a $(window).resize(function() {


    // });

    // Figs Parallax layout
    var fig_top = ($('#figs').offset()).top;
    //console.log(fig_top);

    var fig_txt_height = $('#fig-text').height();
    var figs_height = fig_txt_height * 2.1;
    $('#figs').css('height', figs_height);

    $('.fig-image').css('top', fig_top);
    //console.log(figs_height/3);
    var fig1_top = fig_top + (figs_height/6);
    var fig2_top = fig_top + (figs_height/2.5);
    var fig3_top = fig_top + (figs_height - (figs_height/4));

    $('#fig-1').css('top', fig1_top);
    $('#fig-2').css('top', fig2_top);
    $('#fig-3').css('top', fig3_top);

    var squig1_top = fig_top + (figs_height/7);
    var squig2_top = fig_top + (figs_height/2);
    var squig3_top = fig_top + (figs_height/1.5);

    $('#squiggle-1').css('top', squig1_top);
    $('#squiggle-2').css('top', squig2_top);
    $('#squiggle-3').css('top', squig3_top);

    //console.log(fig1_top);

    $(window).bind('scroll',function(e){
        parallaxScroll();
        redrawDotNav();
    });
    function parallaxScroll() {
        var scrolled = ($(window).scrollTop() - fig_top);
        if (scrolled <= 0) {scrolled = 0};
        if (scrolled > (figs_height - fig_txt_height)) {scrolled = (figs_height - fig_txt_height)};
        $('#fig-text').css('top', (scrolled * .75) + 'px'); // Need to come up with test for this
        $('#fig-1').css('top', (fig1_top - (scrolled * .25)) + 'px');
        $('#fig-2').css('top', (fig2_top - (scrolled * .25)) + 'px');
        $('#fig-3').css('top', (fig3_top - (scrolled * .25)) + 'px');
        $('#squiggle-1').css('top', squig1_top + 'px');
        $('#squiggle-2').css('top', squig2_top + 'px');
        $('#squiggle-3').css('top', squig3_top + 'px');
    }
})