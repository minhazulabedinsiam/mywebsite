(function($){


	$(document).ready(function(){

		// Parallax Section js
		$('.home').parallax('100%', .2);


		// WOW Section js
		new WOW().init();

		// Menu js
		$('.menu-res').click(function(){

			$('.header-bottom ul').slideToggle();

		});


		// Scrolltop Section js
		$(window).scroll(function(){

			if($(this).scrollTop()>1000 ){

				$(".scrolltop").fadeIn();

			}else{
				$(".scrolltop").fadeOut();
			}


		});

		$(".scrolltop").click(function(){
			$("html, body").animate({scrollTop:0}, 1000);
		});

	});


})(jQuery)