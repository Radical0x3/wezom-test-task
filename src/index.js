import "./styles/style.scss";
import $ from "jquery";

if (process.env.NODE_ENV === "development") {
  require("./index.html");
}

// <------ Burger START ------>
$(".header--burger").on("click", function (event) {
  $(".header--burger, .header--navs").toggleClass("active-nav");
  $("body").toggleClass("lock");
});
// <------ Burger END ------>

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

// <------ Selects reset START ------>
$(".filters--btns input[type='reset']").on("click", function () {
  $(".filters--selects-row .select").each(function () {
    let text = $(this).find(".select--item").eq(0).text();
    $(this).find(".select--current").text(text);
  });
});
// <------ Selects reset END ------>

// <------ Top menu START ------>
$(".menu--icon a").on("click", function () {
  $(".menu-list").toggleClass("active");
});
// <------ Top menu END ------>

// <------ Filter's tab change START ------>
$(".filters--tabs-btn").on("click", function () {
  $(".filters--tabs-btn").each(function () {
    $(this).removeClass("active");
  });

  $(this).addClass("active");

  if ($("#tab-1").hasClass("active")) {
    $("#select-tab-1").css("display", "block");
    $("#select-tab-2").css("display", "none");
  } else {
    $("#select-tab-2").css("display", "block");
    $("#select-tab-1").css("display", "none");
  }
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

// <------ Popup START ------>
const popupLinks = document.querySelectorAll(".popup--link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");
const header = document.querySelector(".header-section");

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}
const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add("open");
    currentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup--content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnlock();
    }
  }
}
function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector("body").offsetWidth + "px";
  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  header.style.paddingRight = lockPaddingValue;
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
function bodyUnlock() {
  setTimeout(function () {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = "0px";
    }
    body.style.paddingRight = "0px";
    header.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
// <------ Popup END ------>

// <------ Popup btn enable START ------>
$("#enter form").on("change", function () {
  const button = $("#enter input[type='submit']");
  if (
    $("#enter input[type='email']").val() !== "" &&
    $("#enter input[type='password']").val() !== ""
  ) {
    button.attr("disabled", false);
  } else {
    button.attr("disabled", true);
  }
});
// <------ Popup btn enable END ------>

// <------ Email check START ------>
$(document).ready(function () {
  let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  let mail = $(".subscribe-input");
  let mail_btn = $(".subscribe-btn");

  mail.on("input", function (e) {
    console.log(mail.val());
    if (mail.val() !== " ") {
      if (mail.val().search(pattern) == 0) {
        mail.parent().removeClass("error");
        mail_btn.attr("disabled", false);
      } else {
        mail.parent().addClass("error");
        mail_btn.attr("disabled", true);
      }
    }
  });
  // <------ Email check END ------>

  // <------ Hide empty navs START ------>
  $(".basket").each(function () {
    console.log($(this).text());
    if ($(this).text() < 1) {
      $(this).addClass("hide");
    } else {
      $(this).removeClass("hide");
    }
  });
  // <------ Hide empty navs END ------>

  // <------ Add to basket START ------>
  let buy_btn = $(".products--row-btn");
  buy_btn.on("click", function (e) {
    e.preventDefault();
    let basket = $(".basket span").eq(2);
    let val = parseInt(basket.text()) + 1;
    console.log(val);
    $(basket).text(val);
  });
  // <------ Add to basket END ------>

  // <------Add to favourites START ------>
  let favourite_btn = $(".favourite-link");
  favourite_btn.on("click", function (e) {
    e.preventDefault();
    let basket = $(".basket span").eq(1);
    let val = parseInt(basket.text());

    if ($(this).hasClass("selected")) {
      val--;
      $(this).removeClass("selected");
      $(e.target).text("В избранное");
    } else {
      val++;
      $(this).addClass("selected");
      $(e.target).text("В избранном");
    }

    $(basket).text(val);
    if (val < 1) {
      if (!$(".basket").eq(1).hasClass("hide")) {
        $(".basket").eq(1).addClass("hide");
      }
    } else {
      if ($(".basket").eq(1).hasClass("hide")) {
        $(".basket").eq(1).removeClass("hide");
      }
    }
  });
  // <------ Add to favourites END ------>

  // <------Add to comparison START ------>
  let comparison_btn = $(".compare-link");
  comparison_btn.on("click", function (e) {
    e.preventDefault();
    let basket = $(".basket span").eq(0);
    let val = parseInt(basket.text());

    if ($(this).hasClass("selected")) {
      val--;
      $(this).removeClass("selected");
      $(e.target).text("Сравнить товар");
    } else {
      val++;
      $(this).addClass("selected");
      $(e.target).text("В сравнении");
    }

    $(basket).text(val);
    if (val < 1) {
      if (!$(".basket").eq(0).hasClass("hide")) {
        $(".basket").eq(0).addClass("hide");
      }
    } else {
      if ($(".basket").eq(0).hasClass("hide")) {
        $(".basket").eq(0).removeClass("hide");
      }
    }
  });
  // <------ Add to comparison END ------>
});
