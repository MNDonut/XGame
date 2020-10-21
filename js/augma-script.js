// підключаю слайдер
$('.single-item').slick(
    {
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        mobileFirst: true,
        draggable: true
    }
);

$('.center').slick(
    {
        infinite: true,
        arrows: true,
        draggable: true
    }
);


// анімація при прокрутці
new WOW().init();