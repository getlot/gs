(function ($) {
  $.fn.exists = function(){return this.length>0;}
  $(document).ready(function(){
    if ($('body.node-type-product').exists()) {
    	$('.node-product .field-name-field-img > .field-items > .field-item').on('click', function(e) {
    		//console.log('clicked');
    		//TODO add :before, :after
		    //$(this).next().trigger(e); // needed for Opera
		    // Firefox/Webkit needs CSS pointer-events:none;
		    // IE doesn't need anything
  		});
    }
    if ($('.view-promote').exists()) {
      $('.view-promote .view-content .views-row').matchHeight(false);
    }
    if ($('.view-products').exists()) {
      $('.view-products .view-content .views-row').matchHeight(false);
    }
    if ($('.view-slider').exists()) {
      var mySwiper = $('.view-slider').swiper({
        wrapperClass: 'view-content',
        pagination: '.pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        createPagination: true
      });
      $('.view-slider .arrow-left').on('click', function(e) {
          e.preventDefault();
          mySwiper.swipePrev();
      });
      $('.view-slider .arrow-right').on('click', function(e) {
          e.preventDefault();
          mySwiper.swipeNext();
      });
    }
  });
})(jQuery);

