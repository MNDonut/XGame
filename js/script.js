// підключаю слайдер
$('.single-item').slick(
    {
        infinite: true,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        mobileFirst: true,
        draggable: true
    }
);

// анімація при прокрутці
new WOW().init();