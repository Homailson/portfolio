document.addEventListener('DOMContentLoaded', function () {    
    var navLinks = document.querySelectorAll('.nav__hidden a');
    function highlightNavLink() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;        
        navLinks.forEach(function (link) {
            var targetSectionId = link.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetSectionId);
            if (
                targetSection.offsetTop <= scrollPosition &&
                targetSection.offsetTop + targetSection.offsetHeight > scrollPosition
            ) {                
                link.classList.add('active');
            } else {               
                link.classList.remove('active');
            }
        });
    }    
    highlightNavLink();
    window.addEventListener('scroll', highlightNavLink);    
    window.addEventListener('resize', highlightNavLink);
});