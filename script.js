const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", navToggle);

function navToggle(e) {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("clicked");
}
