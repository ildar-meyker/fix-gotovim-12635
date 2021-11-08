import NavTabs from "./NavTabs";

const NavSelect = {
	_$selects: $(),

	_handleSelectClick(e) {
		e.preventDefault();

		$(e.currentTarget).closest(".nav-select").toggleClass("active");
	},

	_handleOutsideClick(e) {
		if ($(e.target).closest(".nav-select").length === 0) {
			this._$selects.removeClass("active");
		}
	},

	_handleSelectItem(e) {
		e.preventDefault();

		const $root = $(e.currentTarget).closest(".nav-select");
		const index = $(e.currentTarget).index();

		this.renderView($root, index);
		this.updateTarget($root, index);

		NavTabs.renderView($root.parent().parent().find(".nav-tabs"), index);

		$root.removeClass("active");
	},

	renderView($root, index) {
		const label = $root.find(".nav-select__item").eq(index).text();
		$root.find(".nav-select__label span").text(label);
	},

	updateTarget($root, index) {
		const target = $root.find(".nav-select__item").eq(index).attr("href");
		$(target).siblings().removeClass("active").end().addClass("active");
	},

	init() {
		this._$selects = $(".nav-select");

		$(document).on(
			"click",
			".nav-select__label",
			this._handleSelectClick.bind(this)
		);

		$(document).on(
			"click",
			".nav-select__item",
			this._handleSelectItem.bind(this)
		);

		$(document).on("click", this._handleOutsideClick.bind(this));
	},
};

$(function () {
	NavSelect.init();
});

export default NavSelect;
