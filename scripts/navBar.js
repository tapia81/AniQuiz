const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".navbar-menu");

burger.onclick = function (e) {
  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
};
