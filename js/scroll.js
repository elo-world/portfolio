window.addEventListener("scroll", (e) => {
    if (2 * window.scrollY < window.innerHeight) {
        navbar.style.opacity = `${1 - (2 * window.scrollY) / window.innerHeight}`;
        navbar.style.display = "flex";
        burger_menu.style.display = "none";
    } else {
        burger_menu.style.opacity = `${(2 * (window.scrollY - window.innerHeight / 2)) / window.innerHeight}`;
        navbar.style.display = "none";
        burger_menu.style.display = "flex";
    }
});
