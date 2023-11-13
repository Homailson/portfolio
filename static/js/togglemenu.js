function toggleMenu() {
    var navList = document.getElementById("nav__list");
    if (window.innerWidth <= 540) {
        if (navList.classList.contains('nav__hidden')) {
            navList.classList.remove('nav__hidden');
        } else {
            navList.classList.add('nav__hidden');
        }
    }
}