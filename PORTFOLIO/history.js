
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-section');

    function handleScroll() {
        const viewportHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < viewportHeight * 0.3) {
                section.classList.add('in-view');
            } else {
                section.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});

