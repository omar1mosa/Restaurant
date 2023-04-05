(function ($) {
    "use strict";
    // سلاسة الإنتقال
    new WOW().init();

    // لتثبيت ال navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Facts counter لعد الأرقام في about us
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    // سلاسة الانتقال
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
})(jQuery);

