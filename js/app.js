var common = {
	init: function() {
		common.main();
	},
	main: function() {

		var bLazy = new Blazy({});

		$('.phone-mask').mask("+380(99) 999-99-99");

		$('.owl-carousel').owlCarousel({
			loop: false,
			margin: 28,
			nav:true,
			dots: false,
			responsive:{
				0:{
					items:2
				},
				700:{
					items:3
				},
				1000:{
					items:4
				}
			}
		});


		$('.tab-1').click(function(e){
			var bLazy = new Blazy({});
			e.preventDefault();
			$(this).addClass('active');
			$(this).closest('.wrapper').find('.tab-2').removeClass('active');
			$(this).closest('.wrapper').find('.man').removeClass('active');
			$(this).closest('.wrapper').find('.woman').addClass('active');
		});

		$('.tab-2').click(function(e){
			var bLazy = new Blazy({});
			e.preventDefault();
			$(this).addClass('active');
			$(this).closest('.wrapper').find('.tab-1').removeClass('active');
			$(this).closest('.wrapper').find('.man').addClass('active');
			$(this).closest('.wrapper').find('.woman').removeClass('active');
		});

		function productNav() {
			$('.product-slider').each(function(){
				var product = $(this).find('.product-item').length;
				$(this).parent().find('.p-nav-all').text(product);

				$(this).find('.product-item').each(function(index, elem){
					if($(this).parent().hasClass('active')) {
						var showProduct = index + 1;
						$(this).closest('.product').find('.p-nav-show').text(showProduct);
					}
				});

				if($(this).find('.owl-item:first-child').hasClass('active') == false){
					$(this).closest('.product-slider').find('.owl-prev').addClass('active');
				}else {
					$(this).closest('.product-slider').find('.owl-prev').removeClass('active');
				}

				if($(this).find('.owl-item:last-child').hasClass('active') == true){
					$(this).closest('.product-slider').find('.owl-next').removeClass('active');
				}else {
					$(this).closest('.product-slider').find('.owl-next').addClass('active');
				}
				

			});
		}

		productNav();

		$('.product-slider .owl-nav button').click(function(){
			productNav();
			var bLazy = new Blazy({});
		})

		$('.product-slider').on(' translated.owl.carousel', function(event) {
			productNav();
			var bLazy = new Blazy({});
		})


		$('.callback').click(function(e){
			e.preventDefault()
			$('#callBackPopup').addClass('active');
		})

		// $('.btn-submit').click(function(e){
		// 	e.preventDefault()
		// 	var phoneMaskVal =  $(this).parent().find('.phone-mask').val();
		// 	if(phoneMaskVal != ''){
		// 		$('.popup-wrapper').removeClass('active');
		// 		setTimeout( function()  {
		// 			$('#thanksPopup').addClass('active');
		// 		}, 200);
		// 	}else {
		// 		$(this).parent().find('.phone-mask').addClass('red-field');
		// 		setTimeout( function()  {
		// 			$('.popup-wrapper').find('.phone-mask').removeClass('red-field');
		// 		}, 2000);
		// 	}
		// })

		$('.popup-close').click(function(){
			$('.popup-wrapper').removeClass('active');
		})
	}
};

(function() {
	common.init();
}());
