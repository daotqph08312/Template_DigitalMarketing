(function ($) {
    "use strict";
	
	$(document).ready(function() {
        
	   // TOP EXPAND CONTENT
		$('.topbar-btn').on('click', function() {
			$('.topbar').slideToggle(500);
			$(this).toggleClass('active');
		});
        
        $('.ftop a').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('.ftop1 a').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });


        //Mega Menu
        $('.dropdown').on('mouseenter',  function(){
            $(this).addClass('open');
        }).on('mouseleave', function() {
            $(this).removeClass('open');
        });


        //Product Info Tab
        $('#infoTab a:first').tab('show');


        // Price Range
        $( '#pricerange' ).slider({
            range: true,
            min: 100,
            max: 500,
            values: [ 0, 330 ],
            slide: function( event, ui ) {
                $( '#amount').addClass('amount').val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            }
        });

        $( '#amount' ).val( $( '#pricerange' ).slider( 'values', 0 ) +
        " - " + $( '#pricerange' ).slider( 'values', 1 ) );

        
        
        $( '.m_nav' ).on('click', function() {
            $( '#cssmenu' ).slideToggle( 'slow', function() {});
        });
        
        
        
        var $dCountDown = $('[data-countdown]'), finalDate = $('[data-countdown]').data('countdown');
        $dCountDown.countdown(finalDate, function(event) {
        $dCountDown.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hours</p></span> <span class="cdown minutes">%M <p>Minutes</p></span class="cdown second"> <span>%S <p>Seconds</p></span>'));
        });
        
        

        // Movile Menu
        $('.close').one('click', function(e) {
            e.preventDefault();
            $(this).parent().hide();
        });
        
        
        $('#cssmenu li.has-sub>a').on('click', function() {
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			} else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});
		$('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
		(function getColor() {
			var r, g, b;
			var textColor = $('#cssmenu').css('color');
			textColor = textColor.slice(4);
			r = textColor.slice(0, textColor.indexOf(','));
			textColor = textColor.slice(textColor.indexOf(' ') + 1);
			g = textColor.slice(0, textColor.indexOf(','));
			textColor = textColor.slice(textColor.indexOf(' ') + 1);
			b = textColor.slice(0, textColor.indexOf(')'));
			var l = rgbToHsl(r, g, b);
			if (l > 0.7) {
				$('#cssmenu>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
				$('#cssmenu>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
			} else {
				$('#cssmenu>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
				$('#cssmenu>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
			}
		})();

		function rgbToHsl(r, g, b) {
			r /= 255, g /= 255, b /= 255;
			var max = Math.max(r, g, b),
				min = Math.min(r, g, b);
			var h, s, l = (max + min) / 2;
			if (max == min) {
				h = s = 0;
			} else {
				var d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				switch (max) {
					case r:
						h = (g - b) / d + (g < b ? 6 : 0);
						break;
					case g:
						h = (b - r) / d + 2;
						break;
					case b:
						h = (r - g) / d + 4;
						break;
				}
				h /= 6;
			}
			return l;
		}
	});
	
	// Sauget Countdown
	$(window).load(function(){
        
		$('.saugetCountdown').redCountdown({
			end: '1319999999',
			now: '1313681323',
			labels: true,
			style: {
				element: "",
				textResponsive: .5,
				daysElement: {
					gauge: {
						thickness: .1,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f84242"
					},
					textCSS: 'font-family:\'Montserrat\'; font-size:30px; font-weight:300; color:#FFF;'
				},
				hoursElement: {
					gauge: {
						thickness: .1,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f84242"
					},
					textCSS: 'font-family:\'Montserrat\'; font-size:30px; font-weight:300; color:#FFF;'
				},
				minutesElement: {
					gauge: {
						thickness: .1,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f84242"
					},
					textCSS: 'font-family:\'Montserrat\'; font-size:30px; font-weight:300; color:#FFF;'
				},
				secondsElement: {
					gauge: {
						thickness: .1,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f84242"
					},
					textCSS: 'font-family:\'Montserrat\'; font-size:30px; font-weight:300; color:#FFF;'
				}
				
			},
			onEndCallback: function() { console.log('Time out!'); }
		});
        
        
        // Testimonial Slider
        $('.testyslider').flexslider({
            animation: "slide",
            slideshow: true,
            animationLoop: true,
            touch: true,
            reverse: false,
            itemWidth: 500,
            itemMargin: 0,
            minItems: 1,
            maxItems: 2,
            directionNav: false
        });
        
        // Single Product Slider
        $('.detail-slider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            slideshow: true,
            animationLoop: true,
            touch: true,
            reverse: false,
            directionNav: false
        });
	});
	
	
})(jQuery);