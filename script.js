document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
});
function initNavigation() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'translateY(-3px)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'translateY(0)';
        });
    });
}
function initScrollReveal() {
    const sections = document.querySelectorAll('.content-section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
}