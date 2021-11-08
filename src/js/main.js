import "./modules/NavTabs";

for (let li of aside__list.querySelectorAll("#aside__item")) {
	let span = document.createElement("span");
	span.classList.add("show");
	li.prepend(span);
	span.append(span.nextSibling);
}

aside__list.onclick = function (event) {
	if (event.target.tagName != "SPAN") return;

	let childrenList = event.target.parentNode.querySelector("ul");
	if (!childrenList) return;
	childrenList.hidden = !childrenList.hidden;

	if (childrenList.hidden) {
		event.target.classList.add("hide");
		event.target.classList.remove("show");
	} else {
		event.target.classList.add("show");
		event.target.classList.remove("hide");
	}
};

$(".product__slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: ".slider-nav",
});
$(".product__slider-nav").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".slider-for",
	centerMode: true,
	focusOnSelect: true,
});
