const nav = document.getElementById("navbar");
const nav2 = document.getElementById("navbar2");

const addNavbarStyles = () => {
    if (window.scrollY === 0) {
        nav.classList.remove("blurred-bg");
        nav2.classList.remove("blurred-bg");
    } else if (window.scrollY > 0) {
        nav.classList.add("blurred-bg");
        nav2.classList.add("blurred-bg");
    }
}

window.addEventListener("scroll", addNavbarStyles);