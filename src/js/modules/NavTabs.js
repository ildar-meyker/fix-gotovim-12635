const NavTabs = {
	_handleTabClick(e) {
		e.preventDefault();

		$(e.currentTarget)
			.siblings()
			.removeClass("active")
			.end()
			.addClass("active");

		const target = $(e.currentTarget).attr("href");
		$(target).siblings().removeClass("active").end().addClass("active");
	},

	init() {
		$(document).on(
			"click",
			".nav-tabs__item",
			this._handleTabClick.bind(this)
		);
	},
};

$(function () {
	NavTabs.init();
});
