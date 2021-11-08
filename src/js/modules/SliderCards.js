const SliderCards = {
	init() {
		$(".slider-cards").each(function () {
			new Swiper($(this).find(".swiper")[0], {
				slidesPerView: "auto",
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
	SliderCards.init();
});
