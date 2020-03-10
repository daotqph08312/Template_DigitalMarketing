(function ($) {
    "use strict";


    // Revolution Slider Initialize
    if($(".fullwidthbanner").get(0)) {
        var rev = $(".fullwidthbanner").revolution({
            delay:9000,
            startheight:500,
            startwidth:1280,

            hideThumbs:10,

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:5,

            navigationType:"both",
            navigationArrows:"verticalcentered",

            touchenabled:"on",
            onHoverStop:"on",

            navOffsetHorizontal:0,
            navOffsetVertical:20,

            stopAtSlide:-1,
            stopAfterLoops:-1,

            shadow:0,
            fullWidth:"on"
        });

        $("#revolutionSlider .tp-caption").on("mousedown", function(e) {
            e.preventDefault();
            rev.revpause();
            return false;
        });

    }



    // Revolution Slider Initialize
    if($(".fullwidthbanner1").get(0)) {
        var rev = $(".fullwidthbanner1").revolution({
            delay:9000,
            startheight:700,
            startwidth:1280,

            hideThumbs:10,

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:5,

            navigationType:"both",
            navigationArrows:"verticalcentered",

            touchenabled:"on",
            onHoverStop:"on",

            navOffsetHorizontal:0,
            navOffsetVertical:20,

            stopAtSlide:-1,
            stopAfterLoops:-1,

            shadow:0,
            fullWidth:"on"
        });

        $("#revolutionSlider .tp-caption").on("mousedown", function(e) {
            e.preventDefault();
            rev.revpause();
            return false;
        });

    }


    // Revolution Slider Initialize
    if($(".fullwidthbanner2").get(0)) {
        var rev = $(".fullwidthbanner2").revolution({
            delay:9000,
            startheight:570,
            startwidth:1140,

            hideThumbs:10,

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:5,

            navigationType:"both",
            navigationArrows:"verticalcentered",

            touchenabled:"on",
            onHoverStop:"on",

            navOffsetHorizontal:0,
            navOffsetVertical:20,

            stopAtSlide:-1,
            stopAfterLoops:-1,

            shadow:0,
            fullWidth:"on"
        });

        $("#revolutionSlider .tp-caption").on("mousedown", function(e) {
            e.preventDefault();
            rev.revpause();
            return false;
        });

    }


    // Revolution Slider Initialize
    if($(".fullwidthbanner4").get(0)) {
        var rev = $(".fullwidthbanner4").revolution({
            delay:9000,
            startheight:570,
            startwidth:1140,

            hideThumbs:10,

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:5,

            navigationType:"both",
            navigationArrows:"nexttobullets",

            touchenabled:"on",
            onHoverStop:"on",

            navOffsetHorizontal:0,
            navOffsetVertical:20,

            stopAtSlide:-1,
            stopAfterLoops:-1,

            shadow:0,
            fullWidth:"on"
        });

        $("#revolutionSlider .tp-caption").on("mousedown", function(e) {
            e.preventDefault();
            rev.revpause();
            return false;
        });

    }

})(jQuery);