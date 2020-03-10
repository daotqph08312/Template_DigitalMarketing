(function ($) {
 "use strict";
          
     /*--tooltip--*/

    $('[data-toggle="tooltip"]').tooltip({
       animated : 'fade',
       placement : 'top',
       container: 'body'
    });
    /*left category menu*/

    $('.rx-parent').on('click', function(){
        $('.rx-child').slideToggle();
        $(this).toggleClass('rx-change');

    });

    $(".embed-responsive iframe").addClass("embed-responsive-item");
    $(".carousel-inner .item:first-child").addClass("active");

    $('.category-heading').on('click', function(){
    $('.category-menu-list').slideToggle(300);

    });
    

    /*---countdown---*/
    $('[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('<span class="cdown day"><span class="time-count separator">%-D</span> <p class="cdown-tex">Days</p>  </span> <span class="cdown hour"><span class="time-count separator">%-H</span> <p class="cdown-tex">Hrs</p>  </span> <span class="cdown minutes"><span class="time-count separator">%M</span> <p class="cdown-tex">Min</p>  </span> <span class="cdown"><span class="time-count">%S</span> <p class="cdown-tex">Sec</p> </span>'));
	  });
	});	
    
/*----- main slider -----*/
	$('#mainSlider').nivoSlider({
		directionNav: true,
		animSpeed: 500,
		slices: 18,
		pauseTime: 5000,
		pauseOnHover: false,
		controlNav: false,
		prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
		nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
	});		
	
    /*---Owl Carousel hot deals---*/
    $(".product-carousel").owlCarousel({
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items :2,
        itemsDesktop : [1199,1],
        itemsTablet : [991,3],
        itemsTabletSmall : [767,2],
        itemsMobile : [480,1],
        autoPlay : false
        });  
    
    /*---Owl Carousel hot deals---*/
    $(".left-carousel").owlCarousel({
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items :1,
        itemsDesktop : [991,2],
        itemsTablet : [768,2],
        itemsTabletSmall : [680,2],
        itemsMobile : [480,1],
        autoPlay : false
    });  
    
    /*Owl Carousel tab*/
    $(".tab-carosel-start").owlCarousel({
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items :5,
        itemsDesktop : [1600,4],
        itemsTablet : [1199,3],
        itemsTabletSmall : [767,2],
        itemsMobile : [480,1],
        autoPlay : false
    }); 
    
    /*---Owl Carousel category---*/
    $(".cat-carousel").owlCarousel({
        navigation: true,
       navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items :4,
        itemsDesktop : [1599,3],
        itemsTablet : [500,2],
        itemsTabletSmall : [767,2],
        itemsMobile : [480,1],
        autoPlay : false
    }); 
    
    /*---Owl Carousel clients---*/
     $(".client-carousel").owlCarousel({
        navigation: true,
       navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items :10,
        itemsDesktop : [1199,6],
        itemsTablet : [991,5],
        itemsTabletSmall : [767,4],
        itemsMobile : [480,3],
        autoPlay : false
    }); 
    
    
    /*--mobile-menu--*/
    
    jQuery('.mobile-menu-start').meanmenu();
    
    /*--------------------------
        Index two start
    --------------------------*/
    
    /*---Owl Carousel tab--*/
    $(".tab-carosel-h2-start").owlCarousel({
        navigation: true,
       navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items :5,
        itemsDesktop : [1199,4],
        itemsTablet : [767,2],
        itemsTabletSmall : [680,1],
        itemsMobile : [480,1]
        }); 
    
    /*latest  Carousel */
    $(".latest-post-carousel-two").owlCarousel({
        navigation: true,
       navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items :4,
        itemsDesktop : [1199,3],
        itemsTablet : [767,2],
        itemsTabletSmall : [680,1],
        itemsMobile : [480,1],
        autoPlay : false
        });
    
     /*---price slider---- */
	$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  
    
     /*---zoom---*/
      $("#zoom1").elevateZoom({
        gallery:'gallery_01', 
        cursor: 'pointer', 
        galleryActiveClass: "active", 
        imageCrossfade: true
        });
    
    /*---zoom  Carousel ---*/
    $(".zoom-slider").owlCarousel({
        navigation: true,
       navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items :4,
        itemsDesktop : [1199,4],
        itemsTablet : [767,3],
        itemsTabletSmall : [680,3],
        itemsMobile : [480,3],
        autoPlay : false
        });
    
    /*---Plus Minus Start--- */
     $(".cart-plus-minus-button").append();
      $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
        } else {
           // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
            } else {
            newVal = 0;
          }
          }
        $button.parent().find("input").val(newVal);
      });	
   
    /*---cart page---*/
    $(".cart-carousel-start").owlCarousel({
        navigation: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: true,
        items :2,
        itemsDesktop : [1199,1],
        itemsTablet : [767,2],
        itemsTabletSmall : [680,2],
        itemsMobile : [480,1],
        autoPlay : false
        });
    
    /*----blog page---*/   
    $(".sin-blog-carousel").owlCarousel({
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: true,
        items :1,
        itemsDesktop : [1199,1],
        itemsTablet : [991,1],
        itemsTabletSmall : [680,1],
        itemsMobile : [480,1],
        autoPlay : false
        });
    
    
  /* ---payment-accordion---*/ 
	$(".payment-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	});     
    
    
    /*---mixitup active---*/
   
    $('.mixitup-content').mixItUp();
    
    /*---fancybox active---- */	
	$('.fancybox').fancybox();
    
    /*---showlogin toggle function----*/
	 $( '#showlogin' ).on('click', function() {
        $( '#checkout-login' ).slideToggle(900);
     }); 
	
    /*---showcoupon toggle function----*/
	 $( '#showcoupon' ).on('click', function() {
        $( '#checkout_coupon' ).slideToggle(900);
     });
	 
    /*---Create an account toggle function---*/
	 $( '#cbox' ).on('click', function() {
        $( '#cbox_info' ).slideToggle(900);
     });
	 
    /*---Create an account toggle function----*/
	 $( '#ship-box' ).on('click', function() {
        $( '#ship-box-info' ).slideToggle(1000);
     });	
    
    /*---scrollUp---*/	
	$.scrollUp({
        scrollText: '<i class="fa fa-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
     
    
    
})(jQuery);    