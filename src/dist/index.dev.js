"use strict";

require("./styles/style.scss");

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.NODE_ENV === "development") {
  require("./index.html");
} // <------ Custom select START ------>


var select = function select() {
  var selectHeader = document.querySelectorAll(".select--header");
  var selectItem = document.querySelectorAll(".select--item");
  selectHeader.forEach(function (item) {
    item.addEventListener("click", selectToggle);
  });
  selectItem.forEach(function (item) {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    var text = this.innerText,
        select = this.closest(".select"),
        currentText = select.querySelector(".select--current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
}; // <------ Custom select END ------>


select(); // <------ Rating change START ------>

var ratingItemsList = document.querySelectorAll(".products--row-rating-item");
var ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
ratingItemsArray.forEach(function (item) {
  item.addEventListener("click", function () {
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
  });
}); // <------ Rating change END ------>
// <------ Header's nav START ------>

(0, _jquery["default"])(".header--navs a").on("click", function () {
  (0, _jquery["default"])(".header--navs a").each(function () {
    (0, _jquery["default"])(this).removeClass("active");
  });
  (0, _jquery["default"])(this).addClass("active");
}); // <------ Header's nav END ------>
// <------ Selects change START ------>

(0, _jquery["default"])(".select").on("click", function (e) {
  var elem = (0, _jquery["default"])(this).hasClass("is-active");
  (0, _jquery["default"])(".select").each(function () {
    (0, _jquery["default"])(this).removeClass("is-active");
  });

  if (elem) {
    (0, _jquery["default"])(this).addClass("is-active");
  } else {
    (0, _jquery["default"])(this).removeClass("is-active");
  }
}); // <------ Selects change END ------>
// <------ Filter's tab change START ------>

(0, _jquery["default"])(".filters--tabs-btn").on("click", function () {
  (0, _jquery["default"])(".filters--tabs-btn").each(function () {
    (0, _jquery["default"])(this).removeClass("active");
  });
  (0, _jquery["default"])(this).addClass("active");
}); // <------ Filter's tab change END ------>
// <------ Filter's nav START ------>

(0, _jquery["default"])(".filters--nav a").on("click", function () {
  (0, _jquery["default"])(".filters--nav a").each(function () {
    (0, _jquery["default"])(this).removeClass("active");
  });
  (0, _jquery["default"])(this).addClass("active");
}); // <------ Filter's nav END ------>
// <------ Input wrap change START ------>

(0, _jquery["default"])(".input-wrap input").on("focus", function () {
  (0, _jquery["default"])(this).parent().addClass("active");
});
(0, _jquery["default"])(".input-wrap input").on("blur", function () {
  (0, _jquery["default"])(this).parent().removeClass("active");
}); // <------ Input wrap change END ------>