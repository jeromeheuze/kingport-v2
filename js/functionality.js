jQuery(function ($) {

    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 1
    });
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

    $('a[href^="#"]').on('click', function(event) {
        let target = $(this.getAttribute('href'));
        let target_id = this.getAttribute('href');
        if( target.length ) {
            event.preventDefault();
            let offset = target.offset().top - 100;
            console.log(target_id);
            if (target_id === "#top") { offset = 0; }
            $('html, body').animate({
                scrollTop: offset
            }, 1000);
        }
    });

    /*
    CONTACT FORM
     */
    $("#contact-form").submit(function(event) {
        event.preventDefault();
        event.stopPropagation();
        //check empty
        let field = $("input#contactInfo");
        let err = 0;
        if (field.val() === "") {
            field.addClass("is-invalid");
            err = 1;
        } else {
            field.removeClass("is-invalid");
            err = 0;
        }
        if (err === 0) {
            $(".contact-form-cont").fadeOut( "fast", function() {
                $(".msgSent").fadeIn();
            });

        }

    });

});