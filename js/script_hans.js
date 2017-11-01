jQuery(document).ready(function($) {
    // $(window).bind('scroll',function(e){
    // parallaxScroll();
    // });

    // function parallaxScroll(){
    //     var scrolled = $(window).scrollTop();
    //     $('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
    //     $('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
    //     $('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
    // }
    $(window).scroll(function() {
        var pageH = $('#page').height() - $(this).height();
        var pageT = this.scrollY - $('#page').offset().top;
        
        $('#block').scrollTop(pageT / pageH * ($('#blockLength').height() - $(this).height()));
    });
})