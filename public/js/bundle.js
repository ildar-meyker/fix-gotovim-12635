/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_NavTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/NavTabs */ "./src/js/modules/NavTabs.js");
/* harmony import */ var _modules_NavSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/NavSelect */ "./src/js/modules/NavSelect.js");
/* harmony import */ var _modules_SliderReviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/SliderReviews */ "./src/js/modules/SliderReviews.js");
/* harmony import */ var _modules_SliderReviews__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_SliderReviews__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_SliderCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/SliderCards */ "./src/js/modules/SliderCards.js");
/* harmony import */ var _modules_SliderCards__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_SliderCards__WEBPACK_IMPORTED_MODULE_3__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var _iterator = _createForOfIteratorHelper(aside__list.querySelectorAll("#aside__item")),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var li = _step.value;
    var span = document.createElement("span");
    span.classList.add("show");
    li.prepend(span);
    span.append(span.nextSibling);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

aside__list.onclick = function (event) {
  if (event.target.tagName != "SPAN") return;
  var childrenList = event.target.parentNode.querySelector("ul");
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
  asNavFor: ".slider-nav"
});
$(".product__slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  centerMode: true,
  focusOnSelect: true
});

/***/ }),

/***/ "./src/js/modules/NavSelect.js":
/*!*************************************!*\
  !*** ./src/js/modules/NavSelect.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavTabs */ "./src/js/modules/NavTabs.js");

var NavSelect = {
  _$selects: $(),
  _handleSelectClick: function _handleSelectClick(e) {
    e.preventDefault();
    $(e.currentTarget).closest(".nav-select").toggleClass("active");
  },
  _handleOutsideClick: function _handleOutsideClick(e) {
    if ($(e.target).closest(".nav-select").length === 0) {
      this._$selects.removeClass("active");
    }
  },
  _handleSelectItem: function _handleSelectItem(e) {
    e.preventDefault();
    var $root = $(e.currentTarget).closest(".nav-select");
    var index = $(e.currentTarget).index();
    this.renderView($root, index);
    this.updateTarget($root, index);
    _NavTabs__WEBPACK_IMPORTED_MODULE_0__["default"].renderView($root.parent().parent().find(".nav-tabs"), index);
    $root.removeClass("active");
  },
  renderView: function renderView($root, index) {
    var label = $root.find(".nav-select__item").eq(index).text();
    $root.find(".nav-select__label span").text(label);
  },
  updateTarget: function updateTarget($root, index) {
    var target = $root.find(".nav-select__item").eq(index).attr("href");
    $(target).siblings().removeClass("active").end().addClass("active");
  },
  init: function init() {
    this._$selects = $(".nav-select");
    $(document).on("click", ".nav-select__label", this._handleSelectClick.bind(this));
    $(document).on("click", ".nav-select__item", this._handleSelectItem.bind(this));
    $(document).on("click", this._handleOutsideClick.bind(this));
  }
};
$(function () {
  NavSelect.init();
});
/* harmony default export */ __webpack_exports__["default"] = (NavSelect);

/***/ }),

/***/ "./src/js/modules/NavTabs.js":
/*!***********************************!*\
  !*** ./src/js/modules/NavTabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavSelect */ "./src/js/modules/NavSelect.js");

var NavTabs = {
  _handleTabClick: function _handleTabClick(e) {
    e.preventDefault();
    var $root = $(e.currentTarget).closest(".nav-tabs");
    var index = $(e.currentTarget).index();
    this.renderView($root, index);
    this.updateTarget($root, index);
    _NavSelect__WEBPACK_IMPORTED_MODULE_0__["default"].renderView($root.parent().parent().find(".nav-select"), index);
  },
  renderView: function renderView($root, index) {
    $root.find(".nav-tabs__item").removeClass("active").eq(index).addClass("active");
  },
  updateTarget: function updateTarget($root, index) {
    var target = $root.find(".nav-tabs__item").eq(index).attr("href");
    $(target).siblings().removeClass("active").end().addClass("active");
  },
  init: function init() {
    $(document).on("click", ".nav-tabs__item", this._handleTabClick.bind(this));
  }
};
$(function () {
  NavTabs.init();
});
/* harmony default export */ __webpack_exports__["default"] = (NavTabs);

/***/ }),

/***/ "./src/js/modules/SliderCards.js":
/*!***************************************!*\
  !*** ./src/js/modules/SliderCards.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SliderCards = {
  init: function init() {
    $(".slider-cards").each(function () {
      new Swiper($(this).find(".swiper")[0], {
        slidesPerView: "auto",
        scrollbar: {
          el: $(this).find(".swiper-scrollbar")[0],
          draggable: true
        },
        navigation: {
          nextEl: $(this).find(".slider-cards__next")[0],
          prevEl: $(this).find(".slider-cards__prev")[0]
        }
      });
    });
  }
};
$(function () {
  SliderCards.init();
});

/***/ }),

/***/ "./src/js/modules/SliderReviews.js":
/*!*****************************************!*\
  !*** ./src/js/modules/SliderReviews.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SliderReviews = {
  init: function init() {
    $(".slider-reviews").each(function () {
      new Swiper($(this).find(".swiper")[0], {
        slidesPerView: 1,
        scrollbar: {
          el: $(this).find(".swiper-scrollbar")[0],
          draggable: true
        },
        navigation: {
          nextEl: $(this).find(".slider-cards__next")[0],
          prevEl: $(this).find(".slider-cards__prev")[0]
        }
      });
    });
  }
};
$(function () {
  SliderReviews.init();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map