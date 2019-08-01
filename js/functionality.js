jQuery(function ($) {
    /* ==========================================
    scrollTop() >= 300
    Should be equal the the height of the header
    ========================================== */

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 0) {
            $('nav').addClass('fixed-header');
        } else {
            $('nav').removeClass('fixed-header');
        }
    });

    /*
    * Smooth scroll to anchor link
    * Automatically detects the hash and scroll smoothly to anchor link with URL hashchange
    * Author: Franco Moya - @iamravenous
    */

    // If you need more autonomy,
    // You can replace hash detection with a data-attribute
    // e.g. $("[data-scroll='smooth']")

    $("a[href*='#']:not([href='#'])").click(function(e) {
        e.preventDefault();
        let hash = this.hash;
        let section = $(hash);

        if (hash) {
            $('html, body').animate({
                scrollTop: section.offset().top - 88
            }, 1000, 'swing', function(){
                history.replaceState({}, "", hash);
            });
        }
    });

});