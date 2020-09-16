import "./styles/style.scss";
import $ from "jquery";

if (process.env.NODE_ENV === "development") {
  require("./index.html");
}

// <------ Custom select START ------>
const select = () => {
  let selectHeader = document.querySelectorAll(".select--header");
  let selectItem = document.querySelectorAll(".select--item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select--current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
};
// <------ Custom select END ------>

select();

// <------ Rating change START ------>
const ratingItemsList = document.querySelectorAll(".products--row-rating-item");
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
  });
});
// <------ Rating change END ------>

// <------ Header's nav START ------>
$(".header--navs a").on("click", function () {
  $(".header--navs a").each(function () {
    $(this).removeClass("active");
  });

  $(this).addClass("active");
});
// <------ Header's nav END ------>

// <------ Selects change START ------>
$(".select").on("click", function (e) {
  let elem = $(this).hasClass("is-active");
  $(".select").each(function () {
    $(this).removeClass("is-active");
  });

  if (elem) {
    $(this).addClass("is-active");
  } else {
    $(this).removeClass("is-active");
  }
});
// <------ Selects change END ------>

// <------ Filter's tab change START ------>
$(".filters--tabs-btn").on("click", function () {
  $(".filters--tabs-btn").each(function () {
    $(this).removeClass("active");
  });

  $(this).addClass("active");
});
// <------ Filter's tab change END ------>

// <------ Filter's nav START ------>
$(".filters--nav a").on("click", function () {
  $(".filters--nav a").each(function () {
    $(this).removeClass("active");
  });

  $(this).addClass("active");
});
// <------ Filter's nav END ------>

// <------ Input wrap change START ------>
$(".input-wrap input").on("focus", function () {
  $(this).parent().addClass("active");
});
$(".input-wrap input").on("blur", function () {
  $(this).parent().removeClass("active");
});
// <------ Input wrap change END ------>
