let name = document.querySelector("#name").value;

let email = document.querySelector("#email").value;

let message = document.querySelector("#message");

let header = document.querySelector("header");

let scrollToTopBtn = document.querySelector("#scroll-to-top");

let hamBurgerMenu = document.querySelector("#hamburger-menu");

let menuIcon = document.querySelector("#menu-icon");

let crossIcon = document.querySelector("#cross-icon");

let hiddenNav = document.querySelector("#hidden-nav");

function handleScroll() {
  if (document.documentElement.scrollTop >= 900) {
    header.style.maxWidth = "50%";
    header.style.top = "2%";
    header.style.border = "2px solid #ffffff20";
    header.style.borderRadius = "10rem";
    scrollToTopBtn.style.display = "block";
  } else {
    header.style.maxWidth = "100%";
    header.style.top = "0%";
    header.style.borderRadius = "0";
    header.style.border = "0";
    scrollToTopBtn.style.display = "none";
  }
}

window.onscroll = () => {
  handleScroll();
};
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

menuIcon.addEventListener("click", function () {
  menuIcon.style.width = "0";
  crossIcon.style.width = "auto";
  hiddenNav.style.width = "100vw";
  hiddenNav.style.height = "auto";
});

crossIcon.addEventListener("click", function () {
  crossIcon.style.width = "0";
  menuIcon.style.width = "auto";
  hiddenNav.style.width = "0vw";
  hiddenNav.style.height = "0vh";
});
