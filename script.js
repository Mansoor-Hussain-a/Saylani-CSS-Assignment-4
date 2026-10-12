const courses = document.querySelector(".courses");
const menu = document.querySelector(".megaMenu");
let timer;

function openMenu() {
  clearTimeout(timer);
  menu.classList.remove("hidden");
}

function closeMenu() {
  timer = setTimeout(() => menu.classList.add("hidden"), 350);
}

courses.addEventListener("mouseenter", openMenu);
courses.addEventListener("mouseleave", closeMenu);
menu.addEventListener("mouseenter", openMenu);
menu.addEventListener("mouseleave", closeMenu);
