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


/**
 * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
 *
 * @private
 * @author Todd Motto
 * @link https://github.com/toddmotto/foreach
 * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
 * @callback requestCallback      callback   - Callback function for each iteration.
 * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
 * @returns {}
 */
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener(
            "click",
            function () {
                this.classList.toggle("is-active");
            },
            false
        );
    });
}
