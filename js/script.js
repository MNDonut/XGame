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

$("sendinfo").on("click", function(){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        url: '/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'email': email, 'message': message },
        dataType: 'html',
        success: function(data) {
            alert(data);
            $("#sendinfo").prop("disabled", false)
        }
    })
});

// анімація при прокрутці
new WOW().init();