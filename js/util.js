/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function () {

    "use strict";

    var Popular = {
        init: function () {
            this.Basic.init();
        },

        Basic: {
            init: function () {

                //				this.preloader();
                //				this.BackgroundImage();
                //				this.Animation();
                //				this.GallerySlider(); 
                //				this.CounterUp(); 
                //				this.CountDown();
                //				this.GalleryPopup();
                //				this.VideoPopup(); 
                //				this.StickyMenu();
                this.NavScroll();
                //				this.ReviewSlider();


            },
            //		
            //
            //			StickyMenu: function (){
            //				jQuery(window).on('scroll', function() {
            //					if (jQuery(window).scrollTop() > 250) {
            //						jQuery('.main-header-area').addClass('sticky-on')
            //					} else {
            //						jQuery('.main-header-area').removeClass('sticky-on')
            //					}
            //				})
            //				$('.str-open_mobile_menu').on("click", function() {
            //					$('.str-mobile_menu_wrap').toggleClass("mobile_menu_on");
            //				});
            //				$('.str-open_mobile_menu').on('click', function () {
            //					$('body').toggleClass('mobile_menu_overlay_on');
            //				});
            //				if($('.str-mobile_menu li.dropdown ul').length){
            //					$('.str-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
            //					$('.str-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
            //						$(this).prev('ul').slideToggle(500);
            //					});
            //				}
            //			}, 

            NavScroll: function () {
                //Desktop Menu 
                $(".navbar-nav li a").each(function () {
                    $(this).on("click", function (e) {
                        e.preventDefault();
                        var offsetPos = $(this.hash).offset().top;
                        $("body,html").animate({
                            scrollTop: offsetPos,
                        }, 1500);
                    });
                });

                //Mobile Menu 
                $(".str-mobile-navigation li a").each(function () {
                    $(this).on("click", function (e) {
                        e.preventDefault();
                        var offsetPos = $(this.hash).offset().top;
                        $("body,html").animate({
                            scrollTop: offsetPos,
                        }, 1500);
                    });
                });
            },


        }
    }
    jQuery(document).ready(function () {
        Popular.init();
    });

})();

//scroll to appear
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 500)
        $('.scroll-top-arrow').fadeIn('slow');
    else
        $('.scroll-top-arrow').fadeOut('slow');
});

//Click event to scroll to top
$(document).on('click', '.scroll-top-arrow', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1500);
    return false;
});
