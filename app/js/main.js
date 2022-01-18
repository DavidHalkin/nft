$(document).ready(function(){
    $('.owl_carousel_js').owlCarousel({
        responsiveClass:true,
         dots:false,
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{
                // dots:true,
                margin:18
            },
            768:{
                margin:30
               
            }
        }
    });
    $(".faq_item_js").click(function(){
        $(this).find(".switcher").toggleClass("opened").parents(".faq_item").find(".faq_item_content").slideToggle("fast");
    });
    $(".menu_mob_js").click(function(){
        $(this).toggleClass("opened");
        $(".nav_holder_js").toggleClass("opened");
        $("body").toggleClass("menu_opened");
    });
    // $('a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
      
    //     var targetEle = this.hash;
    //     var $targetEle = $(targetEle);
      
    //     $('html, body').stop().animate({
    //         'scrollTop': $targetEle.offset().top
    //     }, 800, 'swing', function () {
    //         window.location.hash = targetEle;
    //     });
    // });
});

// anim
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();