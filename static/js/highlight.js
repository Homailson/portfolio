document.addEventListener("DOMContentLoaded", function () {
    highlightCurrentSection();
});

function highlightCurrentSection() {
    var currentSection = getCurrentSection();

    if (currentSection) {
        var navbarLinks = document.querySelectorAll('.navbar__item');
        navbarLinks.forEach(function (link) {
            link.classList.remove('highlighted');
        });

        var currentSectionId = currentSection.id;

        var activeLink = document.querySelector('a[href="#' + currentSectionId + '"]');
        if (activeLink) {
            activeLink.classList.add('highlighted');
        }
    }
}

function getCurrentSection() {
    var sections = document.querySelectorAll('.section');
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (var i = sections.length - 1; i >= 0; i--) {
        var section = sections[i];
        var sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
            return section;
        }
    }

    return null;
}


document.addEventListener('scroll', highlightCurrentSection);
