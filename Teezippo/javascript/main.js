/*
 * Title:   Teezippo - eCommerce HTML Template
 * Author:  QTC Media
 */

/* --------------------------------------------------------
 [Table of contents]
 
 1. revolutionSlider
 2. waypointBar
 3. slideCountDown
 4. slickSlider
 5. lightSlider
 6. rangeSlider
 7. showAllCategory
 8. customSelect
 9. popupCart
 10. qtyProduct
 11. raTing
 12. initMap
 13. subContentQuestion
 14. subContentPolicy
 15. backTop
 16. clickToTop
 17. iconToggle
 18. subMenuMobile
 19. offCanvas
 20. stickyHeader
 21. pageLoader
 
 [End table of contents]
 ----------------------------------------------------------------------- */

"use strict"; /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function revolutionSlider() {
    if ($('#slider').length) {
        jQuery("#slider").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [570, 570, 470, 470, 470]
        });
    }

    if ($('#slider-v2').length) {
        jQuery("#slider-v2").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [570, 570, 470, 470, 400]
        });
    }

    if ($('#slider-v3').length) {
        jQuery("#slider-v3").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [440, 440, 440, 400, 400]
        });
    }
}

function waypointBar() {
    if ($('.bar-waypoint').length) {
        $('.bar-waypoint').waypoint(function () {
            $('.bar-waypoint .count-bar').animate({
                width: $('.bar-waypoint').attr('data-percent')
            }, 2000);
        },
                {
                    offset: '35%'
                });
    }
}

function slideCountDown() {
    if ($('.countdown').length) {
        $('.countdown').each(function () {
            $(this).countdown({
                date: $(this).attr('data-countdown'),
                offset: -8
            });
        });
    }
}

function slickSlider() {
    if ($('.slick-new-version').length) {
        $('.slick-new-version').slick({
            dots: false,
            variableWidth: false,
            autoplay: false,
            infinite: false,
            arrows: true,
            prevArrow: '<a href="" class="uk-slidenav uk-slidenav-previous"></a>',
            nextArrow: '<a href="" class="uk-slidenav uk-slidenav-next"></a>',
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if ($('.slick-deal-week').length) {
        $('.slick-deal-week').slick({
            dots: false,
            variableWidth: false,
            autoplay: false,
            infinite: false,
            arrows: true,
            prevArrow: '<a href="" class="uk-slidenav uk-slidenav-previous"></a>',
            nextArrow: '<a href="" class="uk-slidenav uk-slidenav-next"></a>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }

    if ($('.slick-best-sellers').length) {
        $('.slick-best-sellers').slick({
            dots: false,
            variableWidth: false,
            autoplay: false,
            infinite: false,
            arrows: true,
            prevArrow: '<a href="" class="uk-slidenav uk-slidenav-previous"></a>',
            nextArrow: '<a href="" class="uk-slidenav uk-slidenav-next"></a>',
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if ($('.slick-best-sellers-v2').length) {
        $('.slick-best-sellers-v2').slick({
            dots: false,
            variableWidth: false,
            autoplay: false,
            infinite: false,
            arrows: true,
            prevArrow: '<a href="" class="uk-slidenav uk-slidenav-previous"></a>',
            nextArrow: '<a href="" class="uk-slidenav uk-slidenav-next"></a>',
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if ($('.slick-recommented').length) {
        $('.slick-recommented').slick({
            dots: false,
            variableWidth: false,
            autoplay: false,
            infinite: false,
            arrows: true,
            prevArrow: '<a href="" class="uk-slidenav uk-slidenav-previous"></a>',
            nextArrow: '<a href="" class="uk-slidenav uk-slidenav-next"></a>',
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if ($('.slick-relate-tshirt').length) {
        $('.slick-relate-tshirt').slick({
            dots: false,
            variableWidth: false,
            autoplay: false,
            infinite: false,
            arrows: true,
            prevArrow: '<a href="" class="uk-slidenav uk-slidenav-previous"></a>',
            nextArrow: '<a href="" class="uk-slidenav uk-slidenav-next"></a>',
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if ($('.slick-team-member').length) {
        $('.slick-team-member').slick({
            dots: false,
            variableWidth: false,
            autoplay: false,
            infinite: false,
            arrows: true,
            prevArrow: '<a href="" class="uk-slidenav uk-slidenav-previous"></a>',
            nextArrow: '<a href="" class="uk-slidenav uk-slidenav-next"></a>',
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
}

function lightSlider() {
    if ($('.new-version-list-image').length) {
        $('.new-version-list-image').lightSlider({
            gallery: true,
            galleryMargin: 20,
            item: 1,
            thumbItem: 3,
            vertical: true,
            verticalHeight: 120,
            vThumbWidth: 35,
            slideMargin: 0,
            auto: false,
            loop: true,
            onSliderLoad: function () {
                $('.new-version-list-image').removeClass('cS-hidden');
            }
        });
    }

    if ($('.deal-week-list-image').length) {
        $('.deal-week-list-image').lightSlider({
            gallery: true,
            galleryMargin: 75,
            item: 1,
            thumbItem: 3,
            thumbMargin: 10,
            vertical: true,
            verticalHeight: 310,
            vThumbWidth: 95,
            slideMargin: 0,
            auto: false,
            loop: false,
            onSliderLoad: function () {
                $('.deal-week-list-image').removeClass('cS-hidden');
            },
            responsive: [
                {
                    breakpoint: 463,
                    settings: {
                        galleryMargin: 15,
                        verticalHeight: 255,
                        vThumbWidth: 75
                    }
                },
                {
                    breakpoint: 363,
                    settings: {
                        galleryMargin: 15,
                        verticalHeight: 195,
                        vThumbWidth: 55
                    }
                }
            ]
        });
    }

    if ($('.product-detail-list-image').length) {
        $('.product-detail-list-image').lightSlider({
            gallery: true,
            galleryMargin: 30,
            item: 1,
            thumbItem: 3,
            thumbMargin: 16,
            vertical: true,
            verticalHeight: 500,
            vThumbWidth: 122,
            slideMargin: 0,
            auto: false,
            loop: false,
            onSliderLoad: function () {
                $('.product-detail-list-image').removeClass('cS-hidden');
            },
            responsive: [
                {
                    breakpoint: 463,
                    settings: {
                        galleryMargin: 15,
                        verticalHeight: 255,
                        vThumbWidth: 75
                    }
                }
            ]
        });
    }
}

function rangeSlider() {
    if ($('.range-slider').length) {
        var $range = $(".js-range-slider"),
                min = 50,
                max = 150;
        $range.ionRangeSlider({
            type: "double",
            min: min,
            max: max,
            prettify_enabled: false,
            grid: true,
            grid_num: 4
        });
    }
}

function showAllCategory() {
    if ($('.tzp-all-category').length) {
        $('.tzp-all-category .title').on('click', function () {
            $('.tzp-all-category .list-categories').slideToggle();
            $(this).find('span').toggleClass('uk-icon-angle-right uk-icon-angle-down');
            return false;
        });
    }
}

function customSelect() {
    if ($('.custom-select').length) {
        $('.custom-select').each(function () {
            var classes = $(this).attr('class');
            var template = '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger">' + $(this).attr('data-placeholder') + '</span>';
            template += '<div class="custom-options">';
            $(this).find('option').each(function () {
                template += '<span class="custom-option ' + $(this).attr('class') + '" data-value="' + $(this).attr('value') + '">' + $(this).html() + '</span>';
            });
            template += '</div></div>';
            $(this).wrap('<div class="custom-select-wrapper"></div>');
            $(this).hide();
            $(this).after(template);
        });
        $('.custom-option:first-of-type').hover(function () {
            $(this).parents('.custom-options').addClass('option-hover');
        }, function () {
            $(this).parents('.custom-options').removeClass('option-hover');
        });
        $('.custom-select-trigger').on('click', function (ev) {
            $('html').one('click', function () {
                $('.custom-select').removeClass('opened');
            });
            $(this).parents('.custom-select').toggleClass('opened');
            ev.stopPropagation();
        });
        $('.custom-option').on('click', function () {
            $(this).parents('.custom-select-wrapper').find('select').val($(this).data('value'));
            $(this).parents('.custom-options').find('.custom-option').removeClass('selection');
            $(this).addClass('selection');
            $(this).parents('.custom-select').removeClass('opened');
            $(this).parents('.custom-select').find('.custom-select-trigger').text($(this).text());
        });
    }
}

function popupCart() {
    if ($('.tzp-popup-cart').length) {
        $('.tzp-show-cart').on('click', function () {
            $('.tzp-popup-cart').removeClass('hidden');
            $('.tzp-popup-cart').addClass('show');
            return false;
        });
        $('.tzp-close-popup').on('click', function () {
            $('.tzp-popup-cart').removeClass('show');
            $('.tzp-popup-cart').addClass('hidden');
            return false;
        });
        $('.tzp-mark').on('click', function () {
            $('.tzp-popup-cart').removeClass('show');
            $('.tzp-popup-cart').addClass('hidden');
            return false;
        });
    }
}

function qtyProduct() {
    if ($('.box-qty').length) {
        $('.box-qty .qty-plus').on('click', function () {
            var $button = $(this);
            var intValue = $button.parent().find('.qty-number').val();
            $button.parent().find('.qty-number').val(parseInt(intValue, 10) + 1);
            return false;
        });
        $('.box-qty .qty-minus').on('click', function () {
            var $button = $(this);
            var intValue = $button.parent().find('.qty-number').val();
            if (parseInt(intValue, 10) > 1) {
                $button.parent().find('.qty-number').val(parseInt(intValue, 10) - 1);
            }
            return false;
        });
        $('.qty-number').on('blur', function () {
            var $button = $(this);
            if ($button.parent().find('.qty-number').val() === "" || parseInt($button.parent().find('.qty-number').val(), 10) === 0) {
                $button.parent().find('.qty-number').val("1");
            }
        });
        $('.qty-number').on('keypress', function (evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        });
    }
}

function raTing() {
    if ($('#rateYo').length) {
        $("#rateYo").rateYo({
            rating: 3,
            halfStar: true,
            ratedFill: "#fdd702"
        });
    }
}

function initMap() {
    if ($('.google-map').length) {
        var locations = [
            ['QTC Media <br> Teezippo - eCommerce HTML Template', 30.231734, -97.756551, 1]
        ];
        var map = new google.maps.Map(document.getElementById('gmap_contact'), {
            zoom: 16,
            center: new google.maps.LatLng(30.230734, -97.755551),
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }
    ;
}

function subContentQuestion() {
    if ($('.holder-question').length) {
        if ($('.holder-question li').hasClass('uk-active')) {
            $(this).children('.sub-content').slideDown();
            $(this).children('a').children('span').attr('class', 'uk-icon-minus');
        }
        $('.holder-question .has-title a').on('click', function () {
            if ($(this).parent().hasClass('uk-active')) {
                return false;
            } else {
                $(this).parent().siblings().children('.sub-content').slideUp();
                $(this).parent().siblings().removeClass('uk-active');
                $(this).parent().siblings().children('a').find('span').removeClass('uk-icon-minus');
                $(this).parent().siblings().children('a').find('span').addClass('uk-icon-plus');
                $(this).parent().addClass('uk-active');
                $(this).find('span').removeClass('uk-icon-plus');
                $(this).find('span').addClass('uk-icon-minus');
                $(this).siblings('.sub-content').slideDown();
            }
            return false;
        });
    }
}

function subContentPolicy() {
    if ($('.holder-policy').length) {
        if ($('.holder-policy li').hasClass('uk-active')) {
            $(this).children('.sub-content').slideDown();
        }
        $('.holder-policy .has-title a').on('click', function () {
            if ($(this).parent().hasClass('uk-active')) {
                return false;
            } else {
                $(this).parent().siblings().children('.sub-content').slideUp();
                $(this).parent().siblings().removeClass('uk-active');
                $(this).parent().addClass('uk-active');
                $(this).siblings('.sub-content').slideDown();
            }
            return false;
        });
    }
}

function backTop() {
    if ($('.tzp-backtop').length) {
        var scrollTrigger = 700,
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('.tzp-backtop').addClass('show-backtop');
                    } else {
                        $('.tzp-backtop').removeClass('show-backtop');
                    }
                };
        $(window).on('scroll', function () {
            backToTop();
        });
    }
}

function clickToTop() {
    if ($('.tzp-backtop').length) {
        $('.tzp-backtop').on('click', function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    }
}

function iconToggle() {
    if ($('.icon-toggle').length) {
        $('.icon-toggle').on('click', function () {
            $('.mobile-menu').slideToggle(300, 'linear');
            $('.icon-toggle').toggleClass('open');
            return false;
        });
    }
}

function subMenuMobile() {
    if ($('.nav-holder').length) {
        $('.nav-holder li.has-submenu').children('a').append(function () {
            return '<button class="dropdown-expander"><span class="fa uk-icon-chevron-down"></span></button>';
        });

        $('.nav-holder .dropdown-expander').on('click', function () {
            if ($(this).parent().parent().hasClass('uk-active')) {
                $(this).parent().parent().children('.submenu').slideToggle();
                $(this).find('span').toggleClass('uk-icon-chevron-down uk-icon-chevron-up');
                $(this).parent('a').parent('li').toggleClass('uk-active');
            } else {
                $(this).parent().parent().siblings('li').find('.submenu').slideUp();
                $(this).parent().parent().siblings('li').removeClass('uk-active');
                $(this).parent().parent().siblings('li').children().children().removeClass('uk-active');
                $(this).parent().parent().siblings('li').find('.dropdown-expander span').removeClass('uk-icon-chevron-up');
                $(this).parent().parent().siblings('li').find('.dropdown-expander span').addClass('uk-icon-chevron-down');
                $(this).parent().parent().addClass('uk-active');
                $(this).find('span').removeClass('uk-icon-chevron-down');
                $(this).find('span').addClass('uk-icon-chevron-up');
                $(this).parent().parent().children('.submenu').slideDown();
            }
            return false;
        });
    }
}

function offCanvas() {
    if ($('.offcanvas-category').length) {
        $('.offcanvas-category').on('click', function () {
            $('#category-mobi').addClass('offcanvas-show');
            $('.mark-window').show();
            $('body').addClass('offcanvas-page');
            return false;
        });

        $('.mark-window').on('click', function () {
            $('#category-mobi').removeClass('offcanvas-show');
            $('.mark-window').hide();
            $('body').removeClass('offcanvas-page');
            return false;
        });
    }
}

function stickyHeader() {
    if ($('.tzp-stricky').length) {
        var strickyScrollPos = 700;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.tzp-stricky').removeClass('fadeIn animated');
            $('.tzp-stricky').addClass('stricky-fixed fadeInDown animated');
        } else {
            $('.tzp-stricky').removeClass('stricky-fixed fadeInDown animated');
            $('.tzp-stricky').addClass('slideIn animated');
        }
    }
    ;
}

function pageLoader() {
    if ($('.tzp-page-loader').length) {
        var strickyScrollPos = 700;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.tzp-page-loader').removeClass('uk-hidden');
            $('.fixed-center').removeClass('uk-hidden');
            
            var fPopup = function(){
                $('.tzp-page-loader').css('background', 'rgba(0, 0, 0, .8)');
                $('.tzp-popup-form').addClass('show');
                
            };
            window.setTimeout(fPopup, 2000);
        }
        
        $('.tzp-page-loader').on('click', function(){
            $('.tzp-page-loader').addClass('uk-hidden');
            $('.fixed-center').addClass('uk-hidden');
            $('.tzp-popup-form').removeClass('show');
            $('.uk-hidden').removeClass('tzp-page-loader');
        });
        $('.tzp-close-popup').on('click', function(){
            $('.tzp-page-loader').addClass('uk-hidden');
            $('.fixed-center').addClass('uk-hidden');
            $('.tzp-popup-form').removeClass('show');
            $('.uk-hidden').removeClass('tzp-page-loader');
        });
    }
}

// instance of fuction while Document ready event
jQuery(document).on('ready', function () {
    (function ($) {
        revolutionSlider();
        waypointBar();
        slideCountDown();
        slickSlider();
        lightSlider();
        rangeSlider();
        showAllCategory();
        customSelect();
        popupCart();
        qtyProduct();
        raTing();
        subContentQuestion();
        subContentPolicy();
        clickToTop();
        iconToggle();
        subMenuMobile();
        offCanvas();
    })(jQuery);
});
// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {
    (function ($) {
        backTop();
        stickyHeader();
        pageLoader();
    })(jQuery);
});

