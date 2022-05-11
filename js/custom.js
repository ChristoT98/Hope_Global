jQuery(document).ready(function() {


    setTimeout(function() {
          $(".loader").addClass("invisible");
    }, 2000);
    setTimeout(function() {
         $('.overlayBanner').addClass('slideOutLeft');
    }, 2000);

    // var everythingLoaded = setInterval(function() {
    //   if (/loaded|complete/.test(document.readyState)) {
    //     clearInterval(everythingLoaded);
    //        function init() {
    //           $(".loader").addClass("invisible");
    //           setTimeout(function() {
    //               console.log('2sec');
    //                 $('.overlayBanner').addClass('slideOutLeft');
    //           }, 2000);
    //
    //     }
    //     init();
    //   }
    // }, 10);



    jQuery('#hero .flexslider').flexslider({
      animation: "slide",
      animationLoop	: "true",
      slideshowSpeed : "3000"
    });

    jQuery('#testinonials .flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 570,
        itemMargin: 30,
        mousewheel: false,
        slideshowSpeed : "3000"

    });

    $('.ham_btn').click(function(){
        $(this).toggleClass('active');
        $('header .right .menu ul.mainMenu').slideToggle();
    });

    $('.arrowSpan').click(function(){
        $(this).toggleClass('active');
        $(this).siblings('ul.submenu').slideToggle();
    });


    function navScroll(){
        // console.log(window.scrollY);
        if( window.scrollY > 109 ){
            $('header').addClass('scrolled');
            $('#hero').addClass('addSpace')
        }
        else{
            $('header').removeClass('scrolled');
            $('#hero').removeClass('addSpace')
        }
    }


    $(window).scroll(function() {
        navScroll();
    });

    $(document).ready(function() {
        navScroll();
    });


    function scrollUp(){
        $(window).scroll(function() {

            if ($(this).scrollTop() > 400) {
                $('.scrollup').show();
            }
            else{
                $('.scrollup').hide();
            }
        });
    }
    $(window).scroll(function() {
        scrollUp();
    });

    $(document).ready(function() {
        scrollUp();
    });

        // upscroll




        $('.scrollup img').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });






    // form js

    $('.radiocontainer input:radio').click(function() {
        if ($(this).val() === '1') {
           $('#free_assessment .inwrapper form .partnerform').css('display', 'flex');
       } else if ($(this).val() === '0') {
            $('#free_assessment .inwrapper form .partnerform').css('display', 'none');
        }
    });



      $("#masterTitle.single").sticky({topSpacing:58, zIndex:99999});




 });
