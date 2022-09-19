$(function (){
    $('.bike_slider, .slider_items').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });


    $(document).ready(function(){
        $(".menu, .bike_column").on("click","a", function (event) {
            event.preventDefault();

            var id  = $(this).attr('href'),

                top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
});


$(".bike_link").click(function (e) {
   const name = $(".form_input_name").val();
   const phone = $(".form_input_phone").val();
   alert(`${name} ${phone}`);
   e.preventDefault();
});


// $("#burger").click(function (){
//     $("#menu_list").toggleSwitch("slow");
// })

$("#burger").click(function (){
    $("#menu_list").slideToggle("slow")
})
