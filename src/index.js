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

