const desktop_nav = document.getElementById("desktop_nav");
const mobile_nav = document.getElementById("mobile_nav");

const open_navbar_btn = document.getElementById("open-nav-btn");
const close_navbar_btn = document.getElementById("close-nav-btn");
const nav_menu = document.getElementById("nav-menu");
const open_styles = "block";
const closed_styles = "hidden";

open_navbar_btn.addEventListener("click", e => {
    nav_menu.classList.remove(closed_styles);
    nav_menu.classList.add(open_styles);
});

close_navbar_btn.addEventListener("click", e => {
    nav_menu.classList.remove(open_styles);
    nav_menu.classList.add(closed_styles);
});