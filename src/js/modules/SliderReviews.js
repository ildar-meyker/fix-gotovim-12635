const SliderReviews = {
	init() {
		$(".slider-reviews").each(function () {
			new Swiper($(this).find(".swiper")[0], {
				slidesPerView: 1,
				scrollbar: {
					el: $(this).find(".swiper-scrollbar")[0],
					draggable: true,
				},
				navigation: {
					nextEl: $(this).find(".slider-cards__next")[0],
					prevEl: $(this).find(".slider-cards__prev")[0],
				},
			});
		});
	},
};

$(function () {
	SliderReviews.init();
});
