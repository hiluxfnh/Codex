
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    items: 2,
    dots: true,
    lazyLoad: true, 
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000
    // responsive: {
    //     0: {
    //         items: 1
    //     },
    //     600: {
    //         items: 3
    //     },
    //     1000: {
    //         items: 5
    //     }
    // }
});