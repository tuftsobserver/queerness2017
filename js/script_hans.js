jQuery(document).ready(function($) {
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });

    // Ledditor layout
    $('#ledditor').css('height', $('#letter').height() * 1.17);

    // Poverty Layout
    var height_1 = $('#sub-1').height();
    var height_2 = $('#sub-2').height();
    var height_3 = $('#sub-3').height();
    var height_4 = $('#sub-4').height();
    var poverty_height = (height_1 + height_2 + height_3 + height_4 + $('#poverty-title').height()) *.9;
    if ($(window).width() <= 600) {poverty_height = poverty_height * 1.175};
    $('#poverty').css('height', poverty_height);
    // var poverty_height = $('#poverty').css('height');
    var poverty_top = ($('#poverty').offset()).top;

    var poverty_1_top = height_1 + (height_2 / 1.6) - $('#poverty-1').height();
    $('#poverty-1').css('top', poverty_1_top);
    var poverty_2_top = poverty_1_top + (height_3 * 1.4);
    $('#poverty-2').css('top', poverty_2_top);
    var poverty_3_top = poverty_2_top + height_4;
    $('#poverty-3').css('top', poverty_3_top);


    // Figs Parallax layout
    var fig_top = ($('#figs').offset()).top;
    var fig_txt_height = $('#fig-text').height();
    var figs_height = (fig_txt_height + $('#fig-title').height()) * 2.1;
    $('#figs').css('height', figs_height);
    $('.fig-image').css('top', fig_top);

    var fig1_top = fig_top + (figs_height/5);
    var fig2_top = fig_top + (figs_height/2);
    var fig3_top = fig_top + (figs_height - (figs_height/5));
    var squig1_top = fig_top + (figs_height/7);
    var squig2_top = fig_top + (figs_height/2);
    var squig3_top = fig_top + (figs_height/1.2);

    $('#fig-1').css('top', fig1_top);
    $('#fig-2').css('top', fig2_top);
    $('#fig-3').css('top', fig3_top);
    $('#squiggle-1').css('top', squig1_top);
    $('#squiggle-2').css('top', squig2_top);
    $('#squiggle-3').css('top', squig3_top);


    // What's In a Name? Layout
    var name_top = ($('#name').offset()).top;

    var name_height = $('#name').height();

    var star_1 = name_height / 3;
    var star_2 = name_height - (name_height / 3);
    var star_3 = name_height - (name_height / 7);
    var kel_names = name_height / 3;
    var kel_gender = name_height - (name_height / 3);

    $('#star-1').css('top', star_1);
    $('#star-2').css('top', star_2);
    $('#star-3').css('top', star_3);
    $('#kel-name').css('top', kel_names);
    $('#kel-gender').css('top', kel_gender);

    function parallaxScroll() {
        var scrolled_poverty = Math.round(($(window).scrollTop() - poverty_top) - 200);
        if (scrolled_poverty <= 0) {scrolled_poverty = 0};
        if (scrolled_poverty > (poverty_height - height_4)) {scrolled_poverty = (poverty_height - height_4)};
        $('#poverty-1').animate({top: (poverty_1_top - (scrolled_poverty * .15)) + 'px'}, 1);
        $('#poverty-2').animate({top: (poverty_2_top - (scrolled_poverty * .2)) + 'px'}, 1);
        $('#poverty-3').animate({top: (poverty_3_top - (scrolled_poverty * .175)) + 'px'}, 1);

        var scrolled = Math.round($(window).scrollTop() - fig_top - 200);
        if (scrolled <= 0) {scrolled = 0};
        if (scrolled > (figs_height - fig_txt_height)) {scrolled = (figs_height - fig_txt_height)};
        $('#fig-text').css('top', scrolled * .75 + 'px'); // Need to come up with test for this
        $('#fig-1').animate({top: (fig1_top - (scrolled * .3)) + 'px'}, 1);
        $('#fig-2').animate({top: (fig2_top - (scrolled * .4)) + 'px'}, 1);
        $('#fig-3').animate({top: (fig3_top - (scrolled * .25)) + 'px'}, 1);
        $('#squiggle-1').animate({top: squig1_top - (scrolled * .15) + 'px'}, 1);
        $('#squiggle-2').animate({top: squig2_top + 'px'}, 1);
        $('#squiggle-3').animate({top: squig3_top - (scrolled * .1)+ 'px'}, 1);

        var scrolled_name = Math.round(($(window).scrollTop() - name_top));
        if (scrolled_name <=0) {scrolled_name = 0};
        if (scrolled_name > (name_height)) {scrolled_name = name_height};
        $('#star-1').animate({top: (star_1 - (scrolled_name * .4)) + 'px'}, 1);
        $('#star-2').animate({top: (star_2 - (scrolled_name * .6)) + 'px'}, 1);
        $('#star-3').animate({top: (star_3 - (scrolled_name * .4)) + 'px'}, 1);
        $('#kel-name').animate({top: (kel_names - (scrolled_name * .15)) + 'px'}, 1);
        $('#kel-gender').animate({top: (kel_gender - (scrolled_name * .1)) + 'px'}, 1);
    }
})
