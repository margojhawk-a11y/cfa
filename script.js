jQuery( document ).ready( function($) {

	var $ = jQuery.noConflict();

	/* MAGIC BANNER SWIPER
	----------------------*/
	var swiper = new Swiper('.magic-belt-swiper', {
		slidesPerView: 1,
		loop: true,
		centeredSlides: true,
		spaceBetween: 10,
		speed: 3000,
		autoplay: {
			delay: 0,
			enabled: true,
		},
		breakpoints: {
			481: {
				slidesPerView: 2,
				spaceBetween: 15
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}
	});

	/* MAGIC REVIEWS SWIPER
	----------------------*/
	var swiper = new Swiper('.magic-reviews-swiper', {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 10,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			481: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}
	});

	/* Meet Us Slider
	---------------*/
	var swiper = new Swiper(".meet-us-slider", {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 3,
			}
		}
	});
	/* The Cast Slider
	---------------*/
	var swiper = new Swiper(".the-cast-slider", {
		loop: true,
		slidesPerView: 1.2,
		spaceBetween: 0,
		breakpoints: {
			768: {
				slidesPerView: 2.2,
			},
			1024: {
				slidesPerView: 3.2,
			},
			1199: {
				slidesPerView: 4.2,
			}
		}
	});

});
